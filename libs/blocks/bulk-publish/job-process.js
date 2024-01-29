import { LitElement, html } from '../../deps/lit-all.min.js';
import { getSheet } from '../../../tools/utils/utils.js';
import { displayDate, getStatusText, delay } from './utils.js';
import { pollJobStatus, updateRetryQueue } from './services.js';
import { getConfig } from '../../utils/utils.js';

const { miloLibs, codeRoot } = getConfig();
const base = miloLibs || codeRoot || 'libs';
const styleSheet = await getSheet(`${base}/blocks/bulk-publish/job-process.css`);

class JobProcess extends LitElement {
  static get properties() {
    return {
      job: { type: Object },
      jobStatus: { state: true },
      queue: { state: true },
      expandDate: { state: true },
    };
  }

  constructor() {
    super();
    this.jobStatus = undefined;
    this.queue = [];
    this.expandDate = false;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.renderRoot.adoptedStyleSheets = [styleSheet];
    if (this.job?.useBulk) {
      await pollJobStatus(this.job, (detail) => {
        this.jobStatus = detail;
        this.dispatchEvent(new CustomEvent('progress', { detail }));
      });
    } else {
      this.jobStatus = this.job.result.job;
    }
  }

  async updated() {
    if (this.jobStatus?.state === 'stopped') {
      this.dispatchEvent(new CustomEvent('stopped', { detail: this.jobStatus }));
    }
    if (this.jobStatus?.progress?.failed !== 0) {
      const timeouts = this.jobStatus?.data?.resources?.filter((job) => job.status === 503) ?? [];
      this.retryTimeouts(timeouts);
    }
  }

  async retryTimeouts(timeouts) {
    if (!timeouts.length) return;
    if (this.queue.length) {
      const queue = this.queue.filter(({ status, count }) => status === 503 && count <= 3);
      if (queue.length) {
        this.queue = await updateRetryQueue({
          queue,
          urls: queue.map(({ path }) => `${this.job.origin}${path}`),
          process: this.jobStatus.topic,
        });
      }
    } else {
      this.queue = timeouts.map((item) => ({ ...item, count: 1 }));
    }
  }

  async onClickResult({ url, code, topic }, pathIndex) {
    const results = this.renderRoot.querySelectorAll('.result');
    const isPOST = !['preview-remove', 'publish-remove'].includes(topic);
    if (this.jobStatus && (code === 200 || code === 204) && isPOST) {
      results[pathIndex].classList.add('opened');
      window.open(url, '_blank');
    } else {
      await navigator.clipboard.writeText(url);
      results[pathIndex].classList.add('copied', 'indicator');
      await delay(3000);
      results[pathIndex].classList.remove('indicator');
    }
  }

  getJobState(path) {
    const jobData = this.jobStatus ?? this.job.result.job;
    const { topic, data, startTime, stopTime, createTime } = jobData;
    const resource = data?.resources?.find((src) => src.path === path || src.webPath === path);
    let { state, status } = resource ?? jobData;

    const success = [200, 204];
    const queued = this.queue?.find((item) => item.path === path);
    if (queued) {
      status = queued.status;
      state = !success.includes(status) && queued.count < 3 ? 'queued' : 'stopped';
    }

    const statusText = getStatusText(status, state, queued?.count);
    const style = success.includes(status)
      ? ` success${['preview-remove', 'publish-remove'].includes(topic) ? '' : ' link'}`
      : '';

    const origin = ['publish', 'index'].includes(topic) && success.includes(status)
      ? this.job.origin.replace('.page', '.live')
      : this.job.origin;

    // sometimes stopTime is returned from API as an empty string
    const stop = stopTime && stopTime !== '' ? stopTime : undefined;
    const stamp = stop ?? startTime ?? createTime;

    return {
      topic,
      style,
      url: resource?.href ?? `${origin}${path}`,
      status: statusText,
      time: {
        stamp,
        label: stopTime ? 'Finished' : 'Started',
      },
    };
  }

  render() {
    const { job } = this.job.result;
    return job.data.paths.map((path, pathIndex) => {
      const jobPath = typeof path === 'object' ? path.path : path;
      const { style, status, topic, url, time } = this.getJobState(jobPath);
      return html`
        <div 
          class="result${style}"
          @click=${() => this.onClickResult({ url, code: status.code, topic }, pathIndex)}>
          <div class="process">
            ${topic} <span class="url">${url}</span>
          </div>
          <div class="meta">
            <span class="${status.color}">${status.text}</span>
            <span
              @mouseover=${() => { this.expandDate = url; }}
              @mouseleave=${() => { this.expandDate = false; }}>
              <i>${this.expandDate === url ? time.label : ''}</i> ${displayDate(time.stamp)}
            </span>
          </div>
        </div>
      `;
    });
  }
}

customElements.define('job-process', JobProcess);
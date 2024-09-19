import { readFile } from '@web/test-runner-commands';
import { expect } from '@esm-bundle/chai';
import { getConfig, setConfig, createTag } from '../../../libs/utils/utils.js';
import dynamicNav from '../../../libs/features/dynamic-navigation/dynamic-navigation.js';
import status, { tooltipInfo, ACTIVE, INACTIVE, ENABLED } from '../../../libs/features/dynamic-navigation/status.js';

const statusText = (parentElement) => {
  const info = {
    additionalInfo: parentElement.querySelector('.additional-info span').innerText,
    status: parentElement.querySelector('.details .status span').innerText,
    setting: parentElement.querySelector('.details .setting span').innerText,
    consumerKey: parentElement.querySelector('.details .consumer-key span').innerText,
    match: parentElement.querySelector('.nav-source-info p:nth-child(1) span').innerText,
    authoredSource: parentElement.querySelector('.nav-source-info p:nth-child(2) span').innerText,
    storedSource: parentElement.querySelector('.nav-source-info p:nth-child(3) span').innerText,
  };
  return info;
};

const GNAV_SOURCE = 'https://main--milo--adobecom.hlx.live/some-source-string';

describe('Dynamic Nav Status', () => {
  beforeEach(async () => {
    const conf = { dynamicNavKey: 'bacom' };
    document.body.innerHTML = await readFile({ path: './mocks/status.html' });
    document.head.innerHTML = '<meta name="dynamic-nav" content=""><meta name="gnav-source" content="">';
    setConfig(conf);
  });

  it('does not load the widget on production', () => {
    const conf = getConfig();
    conf.env.name = 'prod';

    dynamicNav();
    status();

    const statusWidget = document.querySelector('.dynamic-nav-status');
    expect(statusWidget).to.be.null;
  });

  it('loads the status widget', () => {
    dynamicNav();
    status();

    const statusWidget = document.querySelector('.dynamic-nav-status');
    expect(statusWidget).to.not.be.null;
  });

  it('loads the status widget in an active state', () => {
    document.querySelector('meta[name="dynamic-nav"]').setAttribute('content', 'on');
    window.sessionStorage.setItem('gnavSource', 'some-source-string');

    dynamicNav();
    status();

    const statusWidget = document.querySelector('.dynamic-nav-status');
    expect(statusWidget.classList.contains(ACTIVE)).to.be.true;
  });

  it('loads the status widget in an enabled state', () => {
    document.querySelector('meta[name="dynamic-nav"]').setAttribute('content', 'on');

    dynamicNav();
    status();

    const statusWidget = document.querySelector('.dynamic-nav-status');
    expect(statusWidget.classList.contains(ENABLED)).to.be.true;
  });

  it('loads the status widget in an inactive state', () => {
    dynamicNav();
    status();

    const statusWidget = document.querySelector('.dynamic-nav-status');
    expect(statusWidget.classList.contains(INACTIVE)).to.be.true;
  });

  describe('content validation', () => {
    it('displays the correct information to the user for the active state "entry"', () => {
      document.querySelector('meta[name="dynamic-nav"]').setAttribute('content', 'entry');
      document.querySelector('meta[name="gnav-source"]').setAttribute('content', GNAV_SOURCE);
      window.sessionStorage.setItem('gnavSource', GNAV_SOURCE);

      dynamicNav();
      status();

      const statusWidget = document.querySelector('.dynamic-nav-status');
      const info = statusText(statusWidget);
      expect(info.additionalInfo).to.equal(tooltipInfo[ACTIVE]);
      expect(info.status).to.equal(ACTIVE);
      expect(info.setting).to.equal('entry');
      expect(info.consumerKey).to.equal('bacom');
      expect(info.match).to.equal('true');
      expect(info.authoredSource).to.equal('/some-source-string');
      expect(info.storedSource).to.equal('/some-source-string');
    });

    it('displays the correct information to the user for the active state "on"', () => {
      document.querySelector('meta[name="dynamic-nav"]').setAttribute('content', 'on');
      document.querySelector('meta[name="gnav-source"]').setAttribute('content', 'https://main--milo--adobecom.hlx/test');
      window.sessionStorage.setItem('gnavSource', GNAV_SOURCE);

      dynamicNav();
      status();

      const statusWidget = document.querySelector('.dynamic-nav-status');
      const info = statusText(statusWidget);
      expect(info.additionalInfo).to.equal(tooltipInfo[ACTIVE]);
      expect(info.status).to.equal(ACTIVE);
      expect(info.setting).to.equal('on');
      expect(info.consumerKey).to.equal('bacom');
      expect(info.match).to.equal('false');
      expect(info.authoredSource).to.equal('/test');
      expect(info.storedSource).to.equal('/some-source-string');
    });

    it('displays the correct information to the user for the active state "off"', () => {
      document.querySelector('meta[name="dynamic-nav"]').setAttribute('content', '');
      document.querySelector('meta[name="gnav-source"]').setAttribute('content', 'https://main--milo--adobecom.hlx/test');
      window.sessionStorage.setItem('gnavSource', GNAV_SOURCE);

      dynamicNav();
      status();

      const statusWidget = document.querySelector('.dynamic-nav-status');
      const info = statusText(statusWidget);
      expect(info.additionalInfo).to.equal(tooltipInfo[INACTIVE]);
      expect(info.status).to.equal(INACTIVE);
      expect(info.setting).to.equal('');
      expect(info.consumerKey).to.equal('bacom');
      expect(info.match).to.equal('true');
      expect(info.authoredSource).to.equal('/test');
      expect(info.storedSource).to.equal('/test');
    });

    it('displays the correct information to the user for the enabled state "on"', () => {
      document.querySelector('meta[name="dynamic-nav"]').setAttribute('content', 'on');
      document.querySelector('meta[name="gnav-source"]').setAttribute('content', 'https://main--milo--adobecom.hlx/test');

      dynamicNav();
      status();

      const statusWidget = document.querySelector('.dynamic-nav-status');
      const info = statusText(statusWidget);
      expect(info.additionalInfo).to.equal(tooltipInfo[ENABLED]);
      expect(info.status).to.equal(ENABLED);
      expect(info.setting).to.equal('on');
      expect(info.consumerKey).to.equal('bacom');
      expect(info.match).to.equal('true');
      expect(info.authoredSource).to.equal('/test');
      expect(info.storedSource).to.equal('/test');
    });
  });

  describe('disabled values', () => {
    it('loads the status widget in an inactive state when disable values are present', () => {
      const disableTag = createTag('meta', { name: 'dynamic-nav-disable', content: 'PrimaryProductName;Commerce Cloud' });
      const ppn = createTag('meta', { name: 'primaryproductname', content: 'Commerce Cloud' });
      document.querySelector('head').append(disableTag, ppn);
      document.querySelector('meta[name="dynamic-nav"]').setAttribute('content', 'on');
      document.querySelector('meta[name="gnav-source"]').setAttribute('content', 'https://main--milo--adobecom.hlx/test');
      window.sessionStorage.setItem('gnavSource', GNAV_SOURCE);

      dynamicNav();
      status();

      const statusWidget = document.querySelector('.dynamic-nav-status');
      const info = statusText(statusWidget);
      expect(info.additionalInfo).to.equal(tooltipInfo[INACTIVE]);
      expect(info.status).to.equal(INACTIVE);
    });

    it('loads the status widget in an active state when disabled values present but not correct', () => {
      const disableTag = createTag('meta', { name: 'dynamic-nav-disable', content: 'PrimaryProductName;Digital Media' });
      const ppn = createTag('meta', { name: 'primaryproductname', content: 'Commerce Cloud' });
      document.querySelector('head').append(disableTag, ppn);
      document.querySelector('meta[name="dynamic-nav"]').setAttribute('content', 'on');
      document.querySelector('meta[name="gnav-source"]').setAttribute('content', 'https://main--milo--adobecom.hlx/test');
      window.sessionStorage.setItem('gnavSource', GNAV_SOURCE);

      dynamicNav();
      status();

      const statusWidget = document.querySelector('.dynamic-nav-status');
      const info = statusText(statusWidget);
      expect(info.additionalInfo).to.equal(tooltipInfo[ACTIVE]);
      expect(info.status).to.equal(ACTIVE);
    });

    it('shows the correct disable values that are active in a table', () => {
      const disableTag = createTag('meta', { name: 'dynamic-nav-disable', content: 'PrimaryProductName;Commerce Cloud' });
      const ppn = createTag('meta', { name: 'primaryproductname', content: 'Commerce Cloud' });
      document.querySelector('head').append(disableTag, ppn);
      document.querySelector('meta[name="dynamic-nav"]').setAttribute('content', 'on');
      document.querySelector('meta[name="gnav-source"]').setAttribute('content', 'https://main--milo--adobecom.hlx/test');
      window.sessionStorage.setItem('gnavSource', GNAV_SOURCE);

      dynamicNav();
      status();

      const statusWidget = document.querySelector('.dynamic-nav-status');
      const info = statusText(statusWidget);
      const disableValuesTable = statusWidget.querySelector('.disable-values');
      expect(info.additionalInfo).to.equal(tooltipInfo[INACTIVE]);
      expect(info.status).to.equal(INACTIVE);
      expect(disableValuesTable.querySelector('caption')).to.exist;
      expect(disableValuesTable.querySelector('tbody tr td:nth-child(1)')).to.exist;
      expect(disableValuesTable.querySelector('tbody tr td:nth-child(1)').innerText).to.equal('PrimaryProductName');
      expect(disableValuesTable.querySelector('tbody tr td:nth-child(2)')).to.exist;
      expect(disableValuesTable.querySelector('tbody tr td:nth-child(2)').innerText).to.equal('Commerce Cloud');
    });
  });

  describe('Event listeners', () => {
    it('toggles the details', () => {
      document.querySelector('meta[name="dynamic-nav"]').setAttribute('content', 'on');

      dynamicNav();
      status();

      const dynamicNavStatus = document.querySelector('.dynamic-nav-status');
      const details = dynamicNavStatus.querySelector('.details');

      expect(details.classList.contains('hidden')).to.be.true;
      dynamicNavStatus.click();
      expect(details.classList.contains('hidden')).to.be.false;
    });

    it('removes the whole status when close is clicked', () => {
      document.querySelector('meta[name="dynamic-nav"]').setAttribute('content', 'on');

      dynamicNav();
      status();

      let dynamicNavStatus = document.querySelector('.dynamic-nav-status');
      const details = dynamicNavStatus.querySelector('.details');
      dynamicNavStatus.click();
      const closeButton = details.querySelector('.dns-close');
      closeButton.click();
      dynamicNavStatus = document.querySelector('.dynamic-nav-status');
      expect(dynamicNavStatus).to.be.null;
    });
  });

  afterEach(() => {
    window.sessionStorage.clear();
  });
});

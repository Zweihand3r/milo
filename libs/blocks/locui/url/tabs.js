import { html, signal, useEffect, useMemo } from '../../../deps/htm-preact.js';
import { setActions, openWord, handleAction } from './index.js';

function useSignal(value) {
  return useMemo(() => signal(value), []);
}

function useActionState(item) {
  const actions = item.value;
  const canEdit = actions.edit.status !== 404;
  const state = { isValid: typeof actions.hasError !== 'string' && canEdit };
  Object.keys(actions).forEach((btn) => {
    if (actions[btn]?.status) state[btn] = actions[btn].status === 200;
  });
  return state;
}

function Actions({ item }) {
  const { isValid, preview, live } = useActionState(item);
  const isExcel = item.value.path.endsWith('.json') ? ' locui-url-action-edit-excel' : ' locui-url-action-edit-word';
  return html`
    <div class=locui-url-source-actions>
      <button
        disabled=${!isValid}
        class="locui-url-action locui-url-action-edit${isExcel}${!isValid ? ' disabled' : ''}"
        onClick=${(e) => openWord(e, item)}>Edit</button>
      <button
        disabled=${!isValid}
        class="locui-url-action locui-url-action-view
          ${!isValid ? ' disabled' : ''}${!preview ? ' clear' : ''}"
        onClick=${(e) => handleAction(e, item, true)}>Preview</button>
      <button
        disabled=${!isValid || !live}
        class="locui-url-action locui-url-action-view${!isValid || !live ? ' disabled' : ''}"
        onClick=${(e) => handleAction(e, item)}>${!live ? 'Not ' : ''}Live</button>
    </div>
  `;
}

function Details({ item }) {
  return html`
    <div class=locui-url-source-details>
      <div class=locui-url-source-details-col>
        <h3>Modified</h3>
        <p class=locui-url-source-details-date>
          ${item.value.edit.modified[0]}
        </p>
        <p class=locui-url-source-details-time>
          ${item.value.edit.modified[1]}
        </p>
      </div>
      <div class=locui-url-source-details-col>
        <h3>Previewed</h3>
        <p>${item.value.preview.modified[0]}</p>
        <p>${item.value.preview.modified[1]}</p>
      </div>
      <div class=locui-url-source-details-col>
        <h3>Published</h3>
        <p>${item.value.live.modified[0]}</p>
        <p>${item.value.live.modified[1]}</p>
      </div>
    </div>
  `;
}

function setTab(tabs, active) {
  tabs.value = tabs.value.map((tab) => {
    const selected = tab.title === active.title;
    return { ...tab, selected };
  });
}

function setPanel(title, item) {
  switch (title) {
    case 'Actions':
      return html`<${Actions} item=${item} />`;
    case 'Details':
      return html`<${Details} item=${item} />`;
    default:
      return html`<p>No matching panel.</p>`;
  }
}

function TabButton({ tabs, tab, idx }) {
  const id = `tab-${idx + 1}`;
  const selected = tab.selected === true;
  return html`
    <button
      id=${id}
      class=locui-url-tab-button
      key=${tab.title}
      aria-selected=${selected}
      onClick=${() => setTab(tabs, tab)}>
      ${tab.title}
    </button>`;
}

function TabPanel({ tab, idx, item }) {
  const id = `panel-${idx + 1}`;
  const labeledBy = `tab-${idx + 1}`;
  const selected = tab.selected === true;

  return html`
    <div
      id=${id}
      class=locui-tab-panel
      aria-labelledby=${labeledBy}
      key=${tab.title}
      aria-selected=${selected}
      role="tabpanel">
      ${setPanel(tab.title, item)}
    </div>`;
}

export default function Tabs({ suffix, path, hasError }) {
  const tabs = useSignal([
    { title: 'Actions', selected: true },
    { title: 'Details' },
  ]);
  const item = useSignal({ path, hasError });
  useEffect(() => { setActions(item); }, [item]);
  return html`
    <div class=locui-tabs>
      <div class=locui-tab-buttons>
        ${tabs.value.map((tab, idx) => html`<${TabButton} tabs=${tabs} tab=${tab} idx=${idx} />`)}
        <span class=locui-tab-buttons-suffix>(${suffix})</span>
      </div>
      <div class=locui-tab-content>
        ${item.value.preview && html`
          ${tabs.value.map((tab, idx) => html`<${TabPanel} tab=${tab} idx=${idx} item=${item} />`)}
        `}
      </div>
    </div>
  `;
}

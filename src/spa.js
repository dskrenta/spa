'use strict';

import { parseUrl } from './utils/utils.js';

// Global state
window.state = {};

// Global localStorage utils for for JSON storing JS values
window.localStore = {
  get: (key) => JSON.parse(localStorage.getItem(key)),
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  del: (key) => localStorage.removeItem(key)
};

let pages = {};

let appBodyId = '';

let headerId = '';

let footerId = '';

async function mountComponentToDOM(elementId, component) {
  try {
    document.getElementById(elementId).innerHTML = await component.render();
    if (component.afterRender) await component.afterRender();
  }
  catch (error) {
    console.error('mountComponentToDOM error', component, elementId, error);
  }
}
async function router() {
  try {
    const request = parseUrl();
    document.getElementById(headerId).hidden = false;
    document.getElementById(footerId).hidden = false;
    if (pages[request.resource].hideHeader) document.getElementById(headerId).hidden = true;
    if (pages[request.resource].hideFooter) document.getElementById(footerId).hidden = true;
    const page = request.resource in pages ? pages[request.resource] : pages['/'];
    page.request = request;
    mountComponentToDOM(appBodyId, page);
  }
  catch (error) {
    console.error(error);
  }
}

export function init({
  state,
  views,
  header,
  footer,
  viewElementId
}) {
  window.addEventListener('load', router);
  window.addEventListener('hashchange', router);
  appBodyId = viewElementId;
  window.state = state;
  pages = views;
  headerId = header.elementId;
  footerId = footer.elementId;
  mountComponentToDOM(header.elementId, header.component);
  mountComponentToDOM(footer.elementId, footer.component);
}

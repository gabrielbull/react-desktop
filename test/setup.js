import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.HTMLElement = dom.window.HTMLElement;
global.document = dom.window.document;
global.navigator = {
  ...global.window.navigator,
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.54 Safari/537.36'
};
global.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {};

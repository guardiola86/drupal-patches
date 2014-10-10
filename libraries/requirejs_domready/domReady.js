/**
 * @file
 * RequireJS domReady 2.0.1-dummy
 *
 * This is a dummy replacement for the requirejs domReady plugin to retain
 * backwards compatibility with older applications.
 *
 * @see  dennis_js.module
 * @see  dennis_js_get_js()
 */
define(function() {
  'use strict';

  var isBrowser = typeof window !== 'undefined' && window.document,
    doc = isBrowser ? document : null;

  /**
   * Registers a callback for DOM ready. Since this dummy plugin can only run if
   * the DOM is actually already ready, we do not perform any specific stunts
   * here, we just call the callback immediately.
   *
   * @param {Function} callback
   */
  function domReady(callback) {
    callback(doc);

    return domReady;
  }

  domReady.version = '2.0.1-dummy';

  /**
   * Loader Plugin API method
   */
  domReady.load = function (name, req, onLoad, config) {
    if (config.isBuild) {
      onLoad(null);
    }
    else {
      domReady(onLoad);
    }
  };

  return domReady;
});

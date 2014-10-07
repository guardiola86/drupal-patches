/**
 * @file
 * This is a dummy replacement for the requirejs domReady plugin as the full
 * plugin is placed inline.
 *
 * This file is kept for r.js optimisation via grunt.
 *
 * @see  dennis_js.module
 * @see  dennis_js_get_js()
 */
define(function () {
  'use strict';

  function domReady() {
    return domReady;
  }

  domReady.version = '2.0.1-dummy';

  /**
   * Loader Plugin API method
   */
  domReady.load = function (name, req, onLoad) {
    onLoad(null);
  };

  return domReady;
});

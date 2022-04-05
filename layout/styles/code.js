define(["exports", "@beyond-js/kernel/core/ts"], function (_exports2, dependency_0) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.beyond__styles = void 0;
  const dependencies = new Map();
  dependencies.set('@beyond-js/kernel/core/ts', dependency_0);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond/docs/layout/styles/code', false, {}, dependencies);

  const __pkg = bundle.package();
  /**********
  SCSS STYLES
  **********/


  bundle.styles.processor = 'scss';
  bundle.styles.value = '.container{margin:auto;padding:15px;width:calc(100% - 30px);max-width:1376px;content:"max-width: 768px"}@media (max-width:768px){.container{padding:15px;width:calc(100% - 30px)}}.flex-center{place-content:center;place-items:center;display:flex;gap:15px}.flex-center-y{display:flex;align-items:center;align-content:center;gap:15px}.flex-center-x{display:flex;justify-content:center;gap:15px}.flex-container{display:flex}.flex-container.space-between{justify-content:space-between}.bg-secondary{background:var(--secondary);color:var(--text-on-secondary)}.bg-primary-accent{background:var(--primary-accent);color:var(--text-on-primary)}.pd-5{padding:5px}.pd-15{padding:15px}.docs-menu{padding:0;list-style:none}.h1,h1{font-size:3rem}.h2,h2{font-size:2.1rem}.h3,h3{font-size:2rem}*{color:var(--text-color)}.h1,.h2,h1,h2{color:var(--text-title-color)}h3,h4{color:var(--text-color)}';
  const modules = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  modules.set('./controller', {
    hash: 3774170322,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.beyond__styles = void 0;
      /*bundle*/

      const beyond__styles = '';
      exports.beyond__styles = beyond__styles;
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.beyond__styles = require('./controller').beyond__styles;
  };

  let beyond__styles; // Module exports

  _exports2.beyond__styles = beyond__styles;

  __pkg.exports.process = function (require) {
    _exports2.beyond__styles = beyond__styles = require('./controller').beyond__styles;
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});
define(["exports", "@beyond-js/kernel/core/ts", "@beyond-js/kernel/react-widget/ts", "@beyond/docs/layout/styles/code", "react", "@beyond/docs/contents/code"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.Controller = void 0;
  const dependencies = new Map();
  dependencies.set('@beyond-js/kernel/core/ts', dependency_0);
  dependencies.set('@beyond-js/kernel/react-widget/ts', dependency_1);
  dependencies.set('@beyond/docs/layout/styles/code', dependency_2);
  dependencies.set('react', dependency_3);
  dependencies.set('@beyond/docs/contents/code', dependency_4);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond/docs/contents/widget', false, {}, dependencies);

  const __pkg = bundle.package();

  const modules = new Map();
  /**************************
  INTERNAL MODULE: ./contents
  **************************/

  modules.set('./contents', {
    hash: 179180343,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Contents = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");

      class Contents extends _ts.Events {
        #loading = false;

        get loading() {
          return this.#loading;
        }

        #loaded = false;

        get loaded() {
          return this.#loaded;
        }

        #value = [];

        get value() {
          return this.#value;
        }

        #hydrated = false;

        get hydrated() {
          return this.#hydrated;
        }

        #container;

        get container() {
          return this.#container;
        }

        constructor(container) {
          super();
          this.#container = container;
        }

        async fetch() {
          this.#loading = true;
          this.trigger('change');
          await new Promise(resolve => setTimeout(resolve, 4000));
          this.#value.push({
            id: 1,
            name: 'Pepsi'
          });
          this.#value.push({
            id: 2,
            name: 'Coca Cola'
          });
          this.#loading = false;
          this.#loaded = true;
          this.trigger('change');
        }

        hydrate(cached) {
          console.log(cached);
          this.#loading = false;
          this.#loaded = true;
          cached.forEach(company => this.#value.push(company));
          this.#hydrated = true;
        }

        toJSON() {
          return this.#value;
        }

      }

      exports.Contents = Contents;
    }
  });
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  modules.set('./controller', {
    hash: 1348900836,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _ts = require("@beyond-js/kernel/react-widget/ts");

      var _contents = require("./contents");

      var _page = require("./views/page");
      /*bundle*/


      class Controller extends _ts.PageReactWidgetController {
        createStore() {
          return new _contents.Contents(this.body);
        }

        get Widget() {
          return _page.Page;
        }

      }

      exports.Controller = Controller;
    }
  });
  /****************************
  INTERNAL MODULE: ./views/page
  ****************************/

  modules.set('./views/page', {
    hash: 3829922070,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Page = Page;

      var React = require("react");

      var _code = require("@beyond/docs/contents/code");

      function Page({
        uri,
        component
      }) {
        const propsContent = uri.vars.get('content');
        const sub = uri.vars.get('sub');
        const contentId = !['', undefined, null].includes(propsContent) ? propsContent : 'what-is-beyond';
        const [hmrChanged, setHmr] = React.useState(performance.now());
        React.useEffect(() => {
          const onChange = () => setHmr(performance.now());

          _code.hmr.on('change', onChange);

          return () => _code.hmr.off('change', onChange);
        }, []); // @ts-ignore

        return React.createElement(_code.ContentsPage, {
          component: component,
          contentId: contentId,
          sub: sub
        });
      }
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.Controller = require('./controller').Controller;
  };

  let Controller; // Module exports

  _exports2.Controller = Controller;

  __pkg.exports.process = function (require) {
    _exports2.Controller = Controller = require('./controller').Controller;
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});
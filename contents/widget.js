define(["exports", "@beyond-js/widgets/render/ts", "@beyond-js/kernel/core/ts", "@beyond-js/react-widgets/controllers/ts", "@beyond/docs/layout/styles/code", "react", "@beyond/docs/contents-data/code", "@beyond-js/kernel/bundle/ts"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.Controller = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/contents/widget").package();

  externals.register(new Map([["react", dependency_4]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/layout/styles/code", "@beyond/docs/contents-data/code"]));

  require('@beyond-js/widgets/render/ts').widgets.register([{
    "name": "contents-page",
    "id": "@beyond/docs/contents/widget",
    "is": "page",
    "route": "/docs/${content}/${sub}",
    "layout": "main-layout"
  }]);

  const ims = new Map();
  /**************************
  INTERNAL MODULE: ./contents
  **************************/

  ims.set('./contents', {
    hash: 661352488,
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
          this.#loading = false;
          this.#loaded = true;
          this.trigger('change');
        }

        hydrate(cached) {
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

  ims.set('./controller', {
    hash: 3185182179,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _ts = require("@beyond-js/react-widgets/controllers/ts");

      var _contents = require("./contents");

      var _page = require("./views/page");
      /*bundle*/


      class Controller extends _ts.PageReactWidgetController {
        createStore() {
          //Todo: @julio @felix question  new Contents(this.body)
          const contents = new _contents.Contents(this.body);
          console.log(0.1, contents);
          return contents;
        }

        get Widget() {
          return _page.Page;
        }

        constructor(a) {
          super(a);
          console.log(11, 'prueba');
        }

      }

      exports.Controller = Controller;
    }
  });
  /****************************
  INTERNAL MODULE: ./views/page
  ****************************/

  ims.set('./views/page', {
    hash: 2897114210,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Page = Page;

      var React = require("react");

      var _code = require("@beyond/docs/contents-data/code");

      function Page({
        uri,
        component,
        store
      }) {
        const propsContent = uri.vars.get('content');
        const sub = uri.vars.get('sub');
        const contentId = !['', undefined, null].includes(propsContent) ? propsContent : 'what-is-beyond';
        const [hmrChanged, setHmr] = React.useState(performance.now());
        React.useEffect(() => {
          const onChange = () => {
            setHmr(performance.now());
          };

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
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});
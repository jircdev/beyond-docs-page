define(["exports", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/kernel/core", "@beyond-js/react-widgets/controllers", "@beyond/docs/layout/styles", "react", "@beyond/docs/contents-data.code"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Controller = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/contents-subpage",
    "bundle": "docs-page"
  }).package();

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["@beyond-js/widgets/render", dependency_1], ["@beyond-js/kernel/core", dependency_2], ["@beyond-js/react-widgets/controllers", dependency_3], ["react", dependency_5]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/layout/styles", "@beyond/docs/contents-data.code"]));

  require('@beyond-js/widgets/render').widgets.register([{
    "name": "contents-subpage",
    "id": "@beyond/docs/contents-subpage",
    "is": "page",
    "route": "/docs/${content}/${sub}",
    "layout": "main-layout"
  }]);

  const ims = new Map();
  /**************************
  INTERNAL MODULE: ./contents
  **************************/

  ims.set('./contents', {
    hash: 816086309,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Contents = void 0;

      var _core = require("@beyond-js/kernel/core");

      class Contents extends _core.Events {
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
    hash: 2179040498,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _controllers = require("@beyond-js/react-widgets/controllers");

      var _contents = require("./contents");

      var _page = require("./views/page");
      /*bundle*/


      class Controller extends _controllers.PageReactWidgetController {
        createStore() {
          //Todo: @julio @felix question  new Contents(this.body)
          const contents = new _contents.Contents(this.body);
          return contents;
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

  ims.set('./views/page', {
    hash: 3716899986,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Page = Page;

      var React = require("react");

      var _contentsData = require("@beyond/docs/contents-data.code");

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

          _contentsData.hmr.on('change', onChange);

          return () => _contentsData.hmr.off('change', onChange);
        }, []); // @ts-ignore

        return React.createElement(_contentsData.ContentsPage, {
          component: component,
          contentId: contentId,
          sub: sub
        });
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./controller",
    "from": "Controller",
    "name": "Controller"
  }];
  let Controller; // Module exports

  _exports.Controller = Controller;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller').Controller : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/kernel/core", "@beyond-js/react-widgets/page", "@beyond/docs/layout/styles", "react@17.0.2", "@beyond/docs/contents-data.code"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Controller = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/contents-subpage",
    "bundle": "widget"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_5]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/layout/styles", "@beyond/docs/contents-data.code"]));

  brequire('@beyond-js/widgets/render').widgets.register([{
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
    hash: 1916241627,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _page = require("@beyond-js/react-widgets/page");

      var _contents = require("./contents");

      var _page2 = require("./views/page");
      /*bundle*/


      class Controller extends _page.PageReactWidgetController {
        createStore() {
          //Todo: @julio @felix question  new Contents(this.body)
          const contents = new _contents.Contents(this.body);
          return contents;
        }

        get Widget() {
          return _page2.Page;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxTQUFaO1VBQXVCTSxTQUFTLEVBQUVBLFNBQWxDO1VBQTZDRCxHQUFHLEVBQUVBO1FBQWxELENBQWJNLENBREo7TUFJSCIsIm5hbWVzIjpbIkNvbnRlbnRzIiwiRXZlbnRzIiwibG9hZGluZyIsImxvYWRlZCIsInZhbHVlIiwiaHlkcmF0ZWQiLCJjb250YWluZXIiLCJjb25zdHJ1Y3RvciIsImZldGNoIiwidHJpZ2dlciIsImh5ZHJhdGUiLCJjYWNoZWQiLCJmb3JFYWNoIiwiY29tcGFueSIsInB1c2giLCJ0b0pTT04iLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiY29udGVudHMiLCJib2R5IiwiV2lkZ2V0IiwiUGFnZSIsInVyaSIsImNvbXBvbmVudCIsInN0b3JlIiwicHJvcHNDb250ZW50IiwidmFycyIsImdldCIsInN1YiIsImNvbnRlbnRJZCIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiaG1yQ2hhbmdlZCIsInNldEhtciIsIlJlYWN0IiwidXNlU3RhdGUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInVzZUVmZmVjdCIsIm9uQ2hhbmdlIiwiaG1yIiwib24iLCJvZmYiLCJDb250ZW50c1BhZ2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb250ZW50cy9zdWJwYWdlL3dpZGdldC90cy9jb250ZW50cy50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb250ZW50cy9zdWJwYWdlL3dpZGdldC90cy9jb250cm9sbGVyLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb250ZW50cy9zdWJwYWdlL3dpZGdldC90cy92aWV3cy9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=
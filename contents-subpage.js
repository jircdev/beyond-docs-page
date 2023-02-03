System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/core", "@beyond-js/react-widgets@18.21.1/page", "@beyond/docs@1/layout/styles", "react@18.2.0", "@beyond/docs@1/contents-data"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets012Render) {
      dependency_0 = _beyondJsWidgets012Render;
    }, function (_beyondJsKernel017Bundle) {
      dependency_1 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Core) {
      dependency_2 = _beyondJsKernel017Core;
    }, function (_beyondJsReactWidgets18211Page) {
      dependency_3 = _beyondJsReactWidgets18211Page;
    }, function (_beyondDocs1LayoutStyles) {
      dependency_4 = _beyondDocs1LayoutStyles;
    }, function (_react) {
      dependency_5 = _react;
    }, function (_beyondDocs1ContentsData) {
      dependency_6 = _beyondDocs1ContentsData;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@bgroup/ui", "0.0.29"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["ripple-effects", "1.0.2"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/contents-subpage"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/core', dependency_2], ['@beyond-js/react-widgets/page', dependency_3], ['@beyond/docs/layout/styles', dependency_4], ['react', dependency_5], ['@beyond/docs/contents-data', dependency_6]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "contents-subpage",
        "vspecifier": "@beyond/docs@1/contents-subpage",
        "is": "page",
        "route": "/docs/${content}/${sub}",
        "layout": "main-layout"
      }]);
      ims = new Map();
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
        hash: 1850566697,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          var _contentsData = require("@beyond/docs/contents-data");
          function Page({
            uri,
            component,
            store
          }) {
            const propsContent = uri.vars.get("content");
            const sub = uri.vars.get("sub");
            const contentId = !["", undefined, null].includes(propsContent) ? propsContent : "what-is-beyond";
            const [hmrChanged, setHmr] = React.useState(performance.now());
            React.useEffect(() => {
              const onChange = () => {
                setHmr(performance.now());
              };
              _contentsData.hmr.on("change", onChange);
              return () => _contentsData.hmr.off("change", onChange);
            }, []);
            // @ts-ignore
            return React.createElement(_contentsData.ContentsPage, {
              component: component,
              contentId: `${contentId}-${sub}`
            });
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRUgsUUFBUSxDQUFDO1lBQzVDLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTjtZQUNBLE9BQU9MLG9CQUFDUywwQkFBWTtjQUFDcEIsU0FBUyxFQUFFQSxTQUFTO2NBQUVNLFNBQVMsRUFBRSxHQUFHQSxTQUFTLElBQUlELEdBQUc7WUFBRSxFQUFJO1VBQ25GIiwibmFtZXMiOlsiQ29udGVudHMiLCJFdmVudHMiLCJsb2FkaW5nIiwibG9hZGVkIiwidmFsdWUiLCJoeWRyYXRlZCIsImNvbnRhaW5lciIsImNvbnN0cnVjdG9yIiwiZmV0Y2giLCJ0cmlnZ2VyIiwiaHlkcmF0ZSIsImNhY2hlZCIsImZvckVhY2giLCJjb21wYW55IiwicHVzaCIsInRvSlNPTiIsImV4cG9ydHMiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiY29udGVudHMiLCJib2R5IiwiV2lkZ2V0IiwiUGFnZSIsInVyaSIsImNvbXBvbmVudCIsInN0b3JlIiwicHJvcHNDb250ZW50IiwidmFycyIsImdldCIsInN1YiIsImNvbnRlbnRJZCIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiaG1yQ2hhbmdlZCIsInNldEhtciIsIlJlYWN0IiwidXNlU3RhdGUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInVzZUVmZmVjdCIsIm9uQ2hhbmdlIiwiaG1yIiwib24iLCJvZmYiLCJDb250ZW50c1BhZ2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250ZW50cy50cyIsIndpZGdldC90cy9jb250cm9sbGVyLnRzeCIsIndpZGdldC90cy92aWV3cy9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=
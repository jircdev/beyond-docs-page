System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "react@18.2.0/jsx-runtime", "@beyond-js/kernel@0.1.7/core", "@beyond-js/react-widgets@18.21.1/page", "react@18.2.0", "@beyond/docs@1/contents-data"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets012Render) {
      dependency_0 = _beyondJsWidgets012Render;
    }, function (_beyondJsKernel017Bundle) {
      dependency_1 = _beyondJsKernel017Bundle;
    }, function (_react1820JsxRuntime) {
      dependency_2 = _react1820JsxRuntime;
    }, function (_beyondJsKernel017Core) {
      dependency_3 = _beyondJsKernel017Core;
    }, function (_beyondJsReactWidgets18211Page) {
      dependency_4 = _beyondJsReactWidgets18211Page;
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
          "vspecifier": "@beyond/docs@1/contents-page"
        },
        "type": "widget",
        "name": "home"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['react/jsx-runtime', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['@beyond-js/react-widgets/page', dependency_4], ['react', dependency_5], ['@beyond/docs/contents-data', dependency_6]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "contents-page",
        "vspecifier": "@beyond/docs@1/contents-page",
        "is": "page",
        "route": "/docs/${content}",
        "layout": "main-layout"
      }]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./contents
      **************************/
      ims.set('./contents', {
        hash: 3986927060,
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

      ims.set('./controller', {
        hash: 4008428264,
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
              return new _contents.Contents(this.body);
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
        hash: 1951911931,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          var _contentsData = require("@beyond/docs/contents-data");
          function Page(props) {
            const {
              uri,
              component
            } = props;
            const content = uri.vars.get("content");
            const [hmrChanged, setHmr] = React.useState(performance.now());
            const contentId = !["", undefined, null].includes(content) ? content : "intro";
            return React.createElement(_contentsData.ContentsPage, {
              contentId: contentId,
              component: component
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBUU0sTUFBT0EsUUFBUyxTQUFRQyxZQUFNO1lBRWhDLFFBQVEsR0FBRyxLQUFLO1lBQ2hCLElBQUlDLE9BQU87Y0FDUCxPQUFPLElBQUksQ0FBQyxRQUFRO1lBQ3hCO1lBRUEsT0FBTyxHQUFHLEtBQUs7WUFDZixJQUFJQyxNQUFNO2NBQ04sT0FBTyxJQUFJLENBQUMsT0FBTztZQUN2QjtZQUVBLE1BQU0sR0FBZSxFQUFFO1lBQ3ZCLElBQUlDLEtBQUs7Y0FDTCxPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ3RCO1lBRUEsU0FBUyxHQUFHLEtBQUs7WUFDakIsSUFBSUMsUUFBUTtjQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVM7WUFDekI7WUFFQSxVQUFVO1lBQ1YsSUFBSUMsU0FBUztjQUNULE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFDMUI7WUFFQUMsWUFBWUQsU0FBUztjQUNqQixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsVUFBVSxHQUFHQSxTQUFTO1lBQy9CO1lBRUEsTUFBTUUsS0FBSztjQUNQLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtjQUNwQixJQUFJLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUM7Y0FDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLO2NBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTtjQUNuQixJQUFJLENBQUNBLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDMUI7WUFFQUMsT0FBTyxDQUFDQyxNQUFrQjtjQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQztjQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUs7Y0FDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJO2NBQ25CQSxNQUFNLENBQUNHLE9BQU8sQ0FBQ0MsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUNDLElBQUksQ0FBQ0QsT0FBTyxDQUFDLENBQUM7Y0FDcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJO1lBQ3pCO1lBRUFFLE1BQU07Y0FDRixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ3RCOztVQUNIQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzREQ7VUFFQTtVQUNBO1VBRU87VUFBVSxNQUNYQyxVQUFXLFNBQVFDLCtCQUF5QjtZQUM5Q0MsV0FBVztjQUNQLE9BQU8sSUFBSXJCLGtCQUFRLENBQUMsSUFBSSxDQUFDc0IsSUFBSSxDQUFDO1lBQ2xDO1lBRUEsSUFBSUMsTUFBTTtjQUNOLE9BQU9DLFdBQUk7WUFDZjs7VUFDSE47Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQ7VUFDQTtVQUVNLFNBQVVNLElBQUksQ0FBQ0MsS0FBSztZQUN0QixNQUFNO2NBQUVDLEdBQUc7Y0FBRUM7WUFBUyxDQUFFLEdBQUdGLEtBQUs7WUFDaEMsTUFBTUcsT0FBTyxHQUFHRixHQUFHLENBQUNHLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUN2QyxNQUFNLENBQUNDLFVBQVUsRUFBRUMsTUFBTSxDQUFDLEdBQUdDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxXQUFXLENBQUNDLEdBQUcsRUFBRSxDQUFDO1lBQzlELE1BQU1DLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUNDLFFBQVEsQ0FBQ1gsT0FBTyxDQUFDLEdBQUdBLE9BQU8sR0FBRyxPQUFPO1lBRTlFLE9BQU9LLG9CQUFDTywwQkFBWTtjQUFDSCxTQUFTLEVBQUVBLFNBQVM7Y0FBRVYsU0FBUyxFQUFFQTtZQUFTLEVBQUk7VUFDdkUiLCJuYW1lcyI6WyJDb250ZW50cyIsIkV2ZW50cyIsImxvYWRpbmciLCJsb2FkZWQiLCJ2YWx1ZSIsImh5ZHJhdGVkIiwiY29udGFpbmVyIiwiY29uc3RydWN0b3IiLCJmZXRjaCIsInRyaWdnZXIiLCJoeWRyYXRlIiwiY2FjaGVkIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJjb21wYW55IiwicHVzaCIsInRvSlNPTiIsImV4cG9ydHMiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiYm9keSIsIldpZGdldCIsIlBhZ2UiLCJwcm9wcyIsInVyaSIsImNvbXBvbmVudCIsImNvbnRlbnQiLCJ2YXJzIiwiZ2V0IiwiaG1yQ2hhbmdlZCIsInNldEhtciIsIlJlYWN0IiwidXNlU3RhdGUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNvbnRlbnRJZCIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiQ29udGVudHNQYWdlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29udGVudHMudHMiLCJ3aWRnZXQvdHMvY29udHJvbGxlci50c3giLCJ3aWRnZXQvdHMvdmlld3MvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF19
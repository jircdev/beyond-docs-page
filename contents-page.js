System.register(["@beyond-js/widgets@0.1.0/render", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/core", "@beyond-js/react-widgets@18.20.1/page", "react@18.2.0", "@beyond/docs@1/contents-data.code"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets010Render) {
      dependency_0 = _beyondJsWidgets010Render;
    }, function (_beyondJsKernel010Bundle) {
      dependency_1 = _beyondJsKernel010Bundle;
    }, function (_beyondJsKernel010Core) {
      dependency_2 = _beyondJsKernel010Core;
    }, function (_beyondJsReactWidgets18201Page) {
      dependency_3 = _beyondJsReactWidgets18201Page;
    }, function (_react) {
      dependency_4 = _react;
    }, function (_beyondDocs1ContentsDataCode) {
      dependency_5 = _beyondDocs1ContentsDataCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["animatewithsass", "3.2.1"], ["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["@cloudinary/url-gen", "1.8.6"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["dayjs", "1.11.6"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.25.5"], ["slate-react", "0.72.9"], ["svelte", "3.52.0"], ["swiper", "8.4.4"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.43"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/core', dependency_2], ['@beyond-js/react-widgets/page', dependency_3], ['react', dependency_4], ['@beyond/docs/contents-data.code', dependency_5]]);
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
        hash: 3716282025,
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
            component
          }) {
            const propsContent = uri.vars.get('content');
            const [hmrChanged, setHmr] = React.useState(performance.now());
            const sub = uri.vars.get('sub');
            const contentId = !['', undefined, null].includes(propsContent) ? propsContent : 'intro';
            return React.createElement(_contentsData.ContentsPage, {
              component: component,
              contentId: contentId,
              sub: sub,
              hmrChanged: hmrChanged
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQVFNLE1BQU9BLFFBQVMsU0FBUUMsWUFBTTtZQUVoQyxRQUFRLEdBQUcsS0FBSztZQUNoQixJQUFJQyxPQUFPO2NBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUTtZQUN4QjtZQUVBLE9BQU8sR0FBRyxLQUFLO1lBQ2YsSUFBSUMsTUFBTTtjQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU87WUFDdkI7WUFFQSxNQUFNLEdBQWUsRUFBRTtZQUN2QixJQUFJQyxLQUFLO2NBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUN0QjtZQUVBLFNBQVMsR0FBRyxLQUFLO1lBQ2pCLElBQUlDLFFBQVE7Y0FDUixPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3pCO1lBRUEsVUFBVTtZQUNWLElBQUlDLFNBQVM7Y0FDVCxPQUFPLElBQUksQ0FBQyxVQUFVO1lBQzFCO1lBRUFDLFlBQVlELFNBQVM7Y0FDakIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLFVBQVUsR0FBR0EsU0FBUztZQUMvQjtZQUVBLE1BQU1FLEtBQUs7Y0FDUCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUk7Y0FDcEIsSUFBSSxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDO2NBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSztjQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUk7Y0FDbkIsSUFBSSxDQUFDQSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQzFCO1lBRUFDLE9BQU8sQ0FBQ0MsTUFBa0I7Y0FDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUM7Y0FDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLO2NBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTtjQUNuQkEsTUFBTSxDQUFDRyxPQUFPLENBQUNDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDQyxJQUFJLENBQUNELE9BQU8sQ0FBQyxDQUFDO2NBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSTtZQUN6QjtZQUVBRSxNQUFNO2NBQ0YsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUN0Qjs7VUFDSEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0REO1VBRUE7VUFDQTtVQUVPO1VBQVUsTUFDWEMsVUFBVyxTQUFRQywrQkFBeUI7WUFDOUNDLFdBQVc7Y0FDUCxPQUFPLElBQUlyQixrQkFBUSxDQUFDLElBQUksQ0FBQ3NCLElBQUksQ0FBQztZQUNsQztZQUVBLElBQUlDLE1BQU07Y0FDTixPQUFPQyxXQUFJO1lBQ2Y7O1VBQ0hOOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2REO1VBQ0E7VUFFTSxTQUFVTSxJQUFJLENBQUM7WUFBQ0MsR0FBRztZQUFFQztVQUFTLENBQUM7WUFDakMsTUFBTUMsWUFBWSxHQUFHRixHQUFHLENBQUNHLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUM1QyxNQUFNLENBQUNDLFVBQVUsRUFBRUMsTUFBTSxDQUFDLEdBQUdDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxXQUFXLENBQUNDLEdBQUcsRUFBRSxDQUFDO1lBQzlELE1BQU1DLEdBQUcsR0FBR1gsR0FBRyxDQUFDRyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDL0IsTUFBTVEsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUVDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxDQUFDWixZQUFZLENBQUMsR0FBR0EsWUFBWSxHQUFHLE9BQU87WUFFeEYsT0FDSUssb0JBQUNRLDBCQUFZO2NBQUNkLFNBQVMsRUFBRUEsU0FBUztjQUFFVyxTQUFTLEVBQUVBLFNBQVM7Y0FBRUQsR0FBRyxFQUFFQSxHQUFHO2NBQUVOLFVBQVUsRUFBRUE7WUFBVSxFQUFHO1VBRXJHIiwibmFtZXMiOlsiQ29udGVudHMiLCJFdmVudHMiLCJsb2FkaW5nIiwibG9hZGVkIiwidmFsdWUiLCJoeWRyYXRlZCIsImNvbnRhaW5lciIsImNvbnN0cnVjdG9yIiwiZmV0Y2giLCJ0cmlnZ2VyIiwiaHlkcmF0ZSIsImNhY2hlZCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiY29tcGFueSIsInB1c2giLCJ0b0pTT04iLCJleHBvcnRzIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsImJvZHkiLCJXaWRnZXQiLCJQYWdlIiwidXJpIiwiY29tcG9uZW50IiwicHJvcHNDb250ZW50IiwidmFycyIsImdldCIsImhtckNoYW5nZWQiLCJzZXRIbXIiLCJSZWFjdCIsInVzZVN0YXRlIiwicGVyZm9ybWFuY2UiLCJub3ciLCJzdWIiLCJjb250ZW50SWQiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsIkNvbnRlbnRzUGFnZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbnRlbnRzL3BhZ2Uvd2lkZ2V0L3RzL2NvbnRlbnRzLnRzIiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbnRlbnRzL3BhZ2Uvd2lkZ2V0L3RzL2NvbnRyb2xsZXIudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbnRlbnRzL3BhZ2Uvd2lkZ2V0L3RzL3ZpZXdzL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdfQ==
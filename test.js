System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/react-widgets@18.21.1/page", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets012Render) {
      dependency_0 = _beyondJsWidgets012Render;
    }, function (_beyondJsKernel017Bundle) {
      dependency_1 = _beyondJsKernel017Bundle;
    }, function (_beyondJsReactWidgets18211Page) {
      dependency_2 = _beyondJsReactWidgets18211Page;
    }, function (_react2) {
      dependency_3 = _react2;
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
          "vspecifier": "@beyond/docs@1/test"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-test",
        "vspecifier": "@beyond/docs@1/test",
        "is": "page",
        "route": "/test"
      }]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3638196390,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-widgets/page");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./model
      ***********************/

      ims.set('./model', {
        hash: 4182891562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.model = void 0;
          const model = new class {
            #data = {
              total: 100,
              itemsPerPage: 30
            };
            get specs() {
              return this.#data;
            }
            #dataItem = {
              id: "Primer plan",
              name: "Plan",
              dateStart: "hoy ? ",
              dateEnd: "Hoy",
              user: "Yo"
            };
            #items = [];
            get items() {
              return this.#items;
            }
            #currentPage = 2;
            get currentPage() {
              return this.#currentPage;
            }
            set currentPage(value) {
              if (value === this.#currentPage) return;
              this.#currentPage = value;
            }
            get totalPages() {
              const {
                total,
                itemsPerPage
              } = this.#data;
              return Math.ceil(total / itemsPerPage);
            }
            constructor() {
              for (let i = 0; i < this.#data.itemsPerPage; i++) {
                this.#items.push({
                  ...this.#dataItem,
                  name: `${this.#dataItem.name} ${i} `
                });
              }
            }
            /**
             * connect to backend api
             */
            getData() {}
          }();
          exports.model = model;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1834852619,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _model = require("../model");
          var _list = require("./list");
          var _pagination = require("./pagination");
          /*bundle*/
          function View() {
            return React.createElement(React.Fragment, null, React.createElement(_list.List, {
              data: _model.model
            }), React.createElement(_pagination.Pagination, {
              data: _model.model
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 3672249000,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _model = require("../model");
          function List({
            data
          }) {
            const output = _model.model.items.map(item => {
              return _react.default.createElement("li", null, item.name);
            });
            return _react.default.createElement("ul", {
              style: {
                listStyle: "none"
              }
            }, output);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/pagination
      **********************************/

      ims.set('./views/pagination', {
        hash: 3116278283,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Pagination = Pagination;
          var _react = require("react");
          var _paginatorItem = require("./paginator-item");
          function Pagination({
            data
          }) {
            const {
              specs: {
                total,
                itemsPerPage
              },
              currentPage,
              totalPages
            } = data;
            console.log(1, data, totalPages);
            const output = [];
            if (currentPage > 1) {
              //todo: add boton ir al inicio
              output.push(_react.default.createElement(_paginatorItem.PaginatorItem, {
                key: "first-link",
                position: 1
              }, "Ir al inicio"));
            }
            for (let i = 0; i < totalPages; ++i) {
              output.push(_react.default.createElement("li", {
                key: `pager-${i}`
              }, _react.default.createElement("a", {
                className: "btn btn-primary",
                href: `/?page=${i}`
              }, i === currentPage ? "Pagina Actual" : i)));
            }
            return _react.default.createElement("ul", null, output);
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/paginator-item
      **************************************/

      ims.set('./views/paginator-item', {
        hash: 3034530181,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PaginatorItem = PaginatorItem;
          var _react = require("react");
          function PaginatorItem({
            position,
            currentPage,
            children
          }) {
            return _react.default.createElement("li", {
              key: `pager-${position}`
            }, _react.default.createElement("a", {
              className: "btn btn-primary",
              href: `/?page=${position}`
            }, children ? children : position));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLEdBQUcsQ0FBQyxFQUFFO2NBQ2pCO2NBQ0FhLE1BQU0sQ0FBQ04sSUFBSSxDQUNQRSw2QkFBQ1csNEJBQWE7Z0JBQUNDLEdBQUcsRUFBQyxZQUFZO2dCQUFDQyxRQUFRLEVBQUU7Y0FBQyxrQkFFM0IsQ0FDbkI7O1lBRUwsS0FBSyxJQUFJaEIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSixVQUFVLEVBQUUsRUFBRUksQ0FBQyxFQUFFO2NBQ2pDTyxNQUFNLENBQUNOLElBQUksQ0FDUEU7Z0JBQUlZLEdBQUcsRUFBRSxTQUFTZixDQUFDO2NBQUUsR0FDakJHO2dCQUFHYyxTQUFTLEVBQUMsaUJBQWlCO2dCQUFDQyxJQUFJLEVBQUUsVUFBVWxCLENBQUM7Y0FBRSxHQUM3Q0EsQ0FBQyxLQUFLTixXQUFXLEdBQUcsZUFBZSxHQUFHTSxDQUFDLENBQ3hDLENBQ0gsQ0FDUjs7WUFFTCxPQUFPRyx5Q0FBS0ksTUFBTSxDQUFNO1VBQzVCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQTtVQUNNLFNBQVVPLGFBQWEsQ0FBQztZQUFFRSxRQUFRO1lBQUV0QixXQUFXO1lBQUV5QjtVQUFRLENBQUU7WUFDN0QsT0FDSWhCO2NBQUlZLEdBQUcsRUFBRSxTQUFTQyxRQUFRO1lBQUUsR0FDeEJiO2NBQUdjLFNBQVMsRUFBQyxpQkFBaUI7Y0FBQ0MsSUFBSSxFQUFFLFVBQVVGLFFBQVE7WUFBRSxHQUNwREcsUUFBUSxHQUFHQSxRQUFRLEdBQUdILFFBQVEsQ0FDL0IsQ0FDSDtVQUViIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIm1vZGVsIiwidG90YWwiLCJpdGVtc1BlclBhZ2UiLCJzcGVjcyIsImlkIiwibmFtZSIsImRhdGVTdGFydCIsImRhdGVFbmQiLCJ1c2VyIiwiaXRlbXMiLCJjdXJyZW50UGFnZSIsInZhbHVlIiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwiY29uc3RydWN0b3IiLCJpIiwicHVzaCIsImdldERhdGEiLCJSZWFjdCIsIkxpc3QiLCJkYXRhIiwiUGFnaW5hdGlvbiIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJzdHlsZSIsImxpc3RTdHlsZSIsImNvbnNvbGUiLCJsb2ciLCJQYWdpbmF0b3JJdGVtIiwia2V5IiwicG9zaXRpb24iLCJjbGFzc05hbWUiLCJocmVmIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL21vZGVsLnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9saXN0LnRzeCIsIndpZGdldC90cy92aWV3cy9wYWdpbmF0aW9uLnRzeCIsIndpZGdldC90cy92aWV3cy9wYWdpbmF0b3ItaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19
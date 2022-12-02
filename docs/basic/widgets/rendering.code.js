System.register(["@beyond-js/kernel@0.1.0/bundle", "react@18.2.0", "@beyond/ui@1.0.0/link", "@beyond/docs@1/store", "@beyond/docs@1/components/html"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, WidgetsRendering, SR, __beyond_pkg, hmr;
  _export({
    WidgetsRendering: void 0,
    SR: void 0
  });
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondUi100Link) {
      dependency_2 = _beyondUi100Link;
    }, function (_beyondDocs1Store) {
      dependency_3 = _beyondDocs1Store;
    }, function (_beyondDocs1ComponentsHtml) {
      dependency_4 = _beyondDocs1ComponentsHtml;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["animatewithsass", "3.2.1"], ["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["@cloudinary/url-gen", "1.8.6"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["dayjs", "1.11.6"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.25.5"], ["slate-react", "0.72.9"], ["svelte", "3.52.0"], ["swiper", "8.4.4"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.43"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/docs/basic/widgets/rendering",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond/ui/link', dependency_2], ['@beyond/docs/store', dependency_3], ['@beyond/docs/components/html', dependency_4]]);
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./controllers
      *****************************/
      ims.set('./controllers', {
        hash: 2033296105,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Name = Name;
          var React = require("react");
          function Name() {
            return React.createElement(React.Fragment, null, React.createElement("h2", null, "BeyondWidgetController"), React.createElement("p", null, "El controlador puede variar seg\u00FAn si est\u00E1s usando una libreria o no"), React.createElement("h2", null, "Ciclo de vida"));
          }
        }
      });

      /*********************
      INTERNAL MODULE: ./csr
      *********************/

      ims.set('./csr', {
        hash: 2395499844,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CSR = CSR;
          var React = require("react");
          var _link = require("@beyond/ui/link");
          var _store = require("@beyond/docs/store");
          var _html = require("@beyond/docs/components/html");
          function CSR() {
            const {
              texts: {
                csr: {
                  title,
                  p1,
                  items,
                  storeRendering
                }
              }
            } = (0, _store.useDocsContext)();
            return React.createElement(React.Fragment, null, React.createElement("h2", {
              id: "csr-render"
            }, title), React.createElement("p", null, p1), React.createElement(_html.List, {
              items: items
            }), React.createElement("h3", {
              id: "store-server-rendering"
            }, storeRendering.title), React.createElement("p", null, storeRendering.p1), React.createElement("p", null, storeRendering.p2.t1, " ", React.createElement(_link.Link, {
              href: "/doccs/state-management"
            }, storeRendering.p2.l1), "."));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2501509995,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WidgetsRendering = WidgetsRendering;
          var React = require("react");
          var _beyond_context = require("beyond_context");
          var _html = require("@beyond/docs/components/html");
          /*bundle*/
          function WidgetsRendering() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "intro"
            }), React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "ssr"
            }), React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "csr"
            }), React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "sr",
              nextLinks: ["/docs/widgets/controller"]
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./intro
      ***********************/

      ims.set('./intro', {
        hash: 3908439206,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RenderingIntro = RenderingIntro;
          var React = require("react");
          var _link = require("@beyond/ui/link");
          var _store = require("@beyond/docs/store");
          var _html = require("@beyond/docs/components/html");
          function RenderingIntro() {
            const {
              texts: {
                intro: {
                  h1,
                  p1,
                  p2,
                  p3,
                  items
                }
              }
            } = (0, _store.useDocsContext)();
            return React.createElement(React.Fragment, null, React.createElement("h1", {
              id: "intro"
            }, h1), React.createElement("p", null, p1), React.createElement("div", {
              className: "block__note"
            }, p2.t1, " ", React.createElement(_link.Link, {
              href: "/docs/widgets"
            }, p2.l1), ", ", p2.t2, " ", React.createElement(_link.Elink, {
              href: p2.elink2.href
            }, p2.elink2.label, " "), " ", p2.t3, " ", React.createElement(_link.Elink, {
              href: p2.elink3.href
            }, p2.elink3.label), p2.t4), React.createElement("p", null, p3), React.createElement(_html.List, {
              items: items
            }));
          }
        }
      });

      /********************
      INTERNAL MODULE: ./sr
      ********************/

      ims.set('./sr', {
        hash: 3209358032,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SR = SR;
          var React = require("react");
          var _store = require("@beyond/docs/store");
          /*bundle*/
          function SR() {
            const {
              texts: {
                sr: {
                  title,
                  p1,
                  p2
                }
              }
            } = (0, _store.useDocsContext)();
            return React.createElement(React.Fragment, null, React.createElement("h2", {
              id: "sr-rendering"
            }, title), React.createElement("p", null, p1), React.createElement("p", null, p2));
          }
        }
      });

      /*********************
      INTERNAL MODULE: ./ssr
      *********************/

      ims.set('./ssr', {
        hash: 2000914534,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SSR = SSR;
          var React = require("react");
          var _link = require("@beyond/ui/link");
          var _store = require("@beyond/docs/store");
          var _html = require("@beyond/docs/components/html");
          function SSR() {
            const {
              texts: {
                ssr: {
                  title,
                  p1,
                  p2,
                  p3,
                  p4,
                  items
                }
              }
            } = (0, _store.useDocsContext)();
            return React.createElement(React.Fragment, null, React.createElement("h2", {
              id: "ssr-rendering"
            }, React.createElement(_html.CHtml, {
              content: title
            })), React.createElement("div", {
              className: "block__note"
            }, p1.t1, " ", React.createElement(_link.Elink, {
              href: p1.elink1.href
            }, p1.elink1.label, " "), " ", p1.t2), React.createElement("p", null, p2), React.createElement("p", null, p3.t1, React.createElement(_link.Link, {
              href: "/docs/widgets/"
            }, p3.l1), " ", p3.t2), React.createElement("p", null, p4), React.createElement(_html.List, {
              content: items
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "WidgetsRendering",
        "name": "WidgetsRendering"
      }, {
        "im": "./sr",
        "from": "SR",
        "name": "SR"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'WidgetsRendering') && _export("WidgetsRendering", WidgetsRendering = require ? require('./index').WidgetsRendering : value);
        (require || prop === 'SR') && _export("SR", SR = require ? require('./sr').SR : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WCxvQkFBQ1ksVUFBSTtjQUFDQyxJQUFJLEVBQUM7WUFBZ0IsR0FBRVcsRUFBRSxDQUFDVixFQUFFLENBQVEsT0FBRVUsRUFBRSxDQUFDRSxFQUFFLENBQUssRUFFakUxQiwrQkFBSXFDLEVBQUUsQ0FBSyxFQUNYckMsb0JBQUNTLFVBQUk7Y0FBQzhCLE9BQU8sRUFBRWpDO1lBQUssRUFBRyxDQUN4QjtVQUVYIiwibmFtZXMiOlsiTmFtZSIsIlJlYWN0IiwiQ1NSIiwidGV4dHMiLCJjc3IiLCJ0aXRsZSIsInAxIiwiaXRlbXMiLCJzdG9yZVJlbmRlcmluZyIsImlkIiwiTGlzdCIsInAyIiwidDEiLCJMaW5rIiwiaHJlZiIsImwxIiwiV2lkZ2V0c1JlbmRlcmluZyIsIkRvY3VtZW50Iiwic3BlY2lmaWVyIiwibW9kdWxlIiwidGV4dElkIiwibmV4dExpbmtzIiwiUmVuZGVyaW5nSW50cm8iLCJpbnRybyIsImgxIiwicDMiLCJjbGFzc05hbWUiLCJ0MiIsIkVsaW5rIiwiZWxpbmsyIiwibGFiZWwiLCJ0MyIsImVsaW5rMyIsInQ0IiwiU1IiLCJzciIsIlNTUiIsInNzciIsInA0IiwiQ0h0bWwiLCJjb250ZW50IiwiZWxpbmsxIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9iYXNpYy93aWRnZXRzL3JlbmRlcmluZy9jb2RlL3RzL2NvbnRyb2xsZXJzLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL3dpZGdldHMvcmVuZGVyaW5nL2NvZGUvdHMvY3NyLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL3dpZGdldHMvcmVuZGVyaW5nL2NvZGUvdHMvaW5kZXgudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvd2lkZ2V0cy9yZW5kZXJpbmcvY29kZS90cy9pbnRyby50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9iYXNpYy93aWRnZXRzL3JlbmRlcmluZy9jb2RlL3RzL3NyLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL3dpZGdldHMvcmVuZGVyaW5nL2NvZGUvdHMvc3NyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=
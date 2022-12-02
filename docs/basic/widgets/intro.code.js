System.register(["@beyond-js/kernel@0.1.0/bundle", "react@18.2.0", "@beyond/docs@1/components/html", "@beyond/docs@1/code"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, WidgetController, Widgets, WidgetsDefinition, WidgetLayout, WidgetPage, __beyond_pkg, hmr;
  _export({
    WidgetController: void 0,
    Widgets: void 0,
    WidgetsDefinition: void 0,
    WidgetLayout: void 0,
    WidgetPage: void 0
  });
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondDocs1ComponentsHtml) {
      dependency_2 = _beyondDocs1ComponentsHtml;
    }, function (_beyondDocs1Code) {
      dependency_3 = _beyondDocs1Code;
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
          "vspecifier": "@beyond/docs@1/docs/basic/widgets/intro",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond/docs/components/html', dependency_2], ['@beyond/docs/code', dependency_3]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2207680949,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WidgetController = WidgetController;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          const tpl = `\rimport {ReactWidgetController} from '@beyond-js/react-widgets/base';


import {Page} from './views/page';
export /*bundle*/
class Controller extends ReactWidgetController {
    get Widget() {
        return Page;
    }
}`;
          const tpls = {
            tpl: {
              title: "controller.ts",
              tpl
            }
          };
          /*bundle*/
          function WidgetController() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              tpls: tpls,
              specifier: _beyond_context.module.specifier,
              textId: "controller",
              nextLinks: ["/docs/widgets/definition"]
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./definition
      ****************************/

      ims.set('./definition', {
        hash: 1685632346,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Widgets = Widgets;
          var React = require("react");
          var _beyond_context = require("beyond_context");
          var _html = require("@beyond/docs/components/html");
          /*bundle*/
          function Widgets() {
            return React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "definition",
              nextLinks: ["/docs/widgets/controller"]
            });
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 70674049,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WidgetsDefinition = WidgetsDefinition;
          var React = require("react");
          var _beyond_context = require("beyond_context");
          var _html = require("@beyond/docs/components/html");
          /*bundle*/
          function WidgetsDefinition() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "intro",
              nextLinks: ["/docs/widgets/definition"]
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./types/layout
      ******************************/

      ims.set('./types/layout', {
        hash: 3182217676,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WidgetLayout = WidgetLayout;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          const tpl = `
"widget": {
    "is": "layout",
    "element": {
      "name": "main-layout"
    },
...
}`;
          const tpls = {
            tpl1: {
              title: "module.json",
              tpl,
              language: "json"
            }
          };
          /*bundle*/
          function WidgetLayout() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              tpls: tpls,
              specifier: _beyond_context.module.specifier,
              textId: "layout",
              nextLinks: ["/docs/widgets/definition"]
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./types/page
      ****************************/

      ims.set('./types/page', {
        hash: 1380758539,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WidgetPage = WidgetPage;
          var React = require("react");
          var _beyond_context = require("beyond_context");
          var _html = require("@beyond/docs/components/html");
          const tpl1 = `
"widget": {
    "route": "login"
    "layout: "main",
    "item": {
      "name": "login-page"
    },
....
}
`;
          const tpls = {
            tpl1: {
              language: "json",
              tpl: tpl1,
              title: "module.json"
            },
            tpl2: {
              tpl: '/user/edit/${userId}'
            },
            tpl3: {
              tpl: 'this.uri.vars.get(\'userId\');'
            }
          };
          /*bundle*/
          function WidgetPage() {
            return React.createElement(_html.Document, {
              tpls: tpls,
              specifier: _beyond_context.module.specifier,
              textId: "page",
              nextLinks: ["/docs/widgets/controller"]
            });
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "WidgetController",
        "name": "WidgetController"
      }, {
        "im": "./definition",
        "from": "Widgets",
        "name": "Widgets"
      }, {
        "im": "./index",
        "from": "WidgetsDefinition",
        "name": "WidgetsDefinition"
      }, {
        "im": "./types/layout",
        "from": "WidgetLayout",
        "name": "WidgetLayout"
      }, {
        "im": "./types/page",
        "from": "WidgetPage",
        "name": "WidgetPage"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'WidgetController') && _export("WidgetController", WidgetController = require ? require('./controller').WidgetController : value);
        (require || prop === 'Widgets') && _export("Widgets", Widgets = require ? require('./definition').Widgets : value);
        (require || prop === 'WidgetsDefinition') && _export("WidgetsDefinition", WidgetsDefinition = require ? require('./index').WidgetsDefinition : value);
        (require || prop === 'WidgetLayout') && _export("WidgetLayout", WidgetLayout = require ? require('./types/layout').WidgetLayout : value);
        (require || prop === 'WidgetPage') && _export("WidgetPage", WidgetPage = require ? require('./types/page').WidgetPage : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNBO1VBRUEsTUFBTUEsR0FBRyxHQUNMOzs7Ozs7Ozs7RUFTRjtVQUNGLE1BQU1DLElBQUksR0FBRztZQUNURCxHQUFHLEVBQUU7Y0FBQ0UsS0FBSyxFQUFFLGVBQWU7Y0FBRUY7WUFBRztXQUNwQztVQUVNO1VBQVUsU0FBVUcsZ0JBQWdCO1lBQ3ZDLE9BQ0lDLDBDQUNJQSxvQkFBQ0MsY0FBUTtjQUNMSixJQUFJLEVBQUVBLElBQUk7Y0FDVkssU0FBUyxFQUFFQyxzQkFBTSxDQUFDRCxTQUFTO2NBQzNCRSxNQUFNLEVBQUMsWUFBWTtjQUFDQyxTQUFTLEVBQUUsQ0FBQywwQkFBMEI7WUFBQyxFQUFHLENBQ25FO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBO1VBQ0E7VUFDQTtVQUVPO1VBQVUsU0FBVUMsT0FBTztZQUM5QixPQUNJTixvQkFBQ0MsY0FBUTtjQUFDQyxTQUFTLEVBQUVDLHNCQUFNLENBQUNELFNBQVM7Y0FBRUUsTUFBTSxFQUFDLFlBQVk7Y0FBQ0MsU0FBUyxFQUFFLENBQUMsMEJBQTBCO1lBQUMsRUFBRztVQUU3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQTtVQUVBO1VBQ0E7VUFFTztVQUFVLFNBQVVFLGlCQUFpQjtZQUN4QyxPQUNJUCwwQ0FDSUEsb0JBQUNDLGNBQVE7Y0FBQ0MsU0FBUyxFQUFFQyxzQkFBTSxDQUFDRCxTQUFTO2NBQUVFLE1BQU0sRUFBQyxPQUFPO2NBQUNDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQjtZQUFDLEVBQUcsQ0FDakc7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYQTtVQUNBO1VBRUE7VUFFQSxNQUFNVCxHQUFHLEdBQUc7Ozs7Ozs7RUFPVjtVQUVGLE1BQU1DLElBQUksR0FBRztZQUNUVyxJQUFJLEVBQUU7Y0FBQ1YsS0FBSyxFQUFFLGFBQWE7Y0FBRUYsR0FBRztjQUFFYSxRQUFRLEVBQUU7WUFBTTtXQUNyRDtVQUVNO1VBQVUsU0FBVUMsWUFBWTtZQUNuQyxPQUNJViwwQ0FDSUEsb0JBQUNDLGNBQVE7Y0FDTEosSUFBSSxFQUFFQSxJQUFJO2NBQ1ZLLFNBQVMsRUFBRUMsc0JBQU0sQ0FBQ0QsU0FBUztjQUMzQkUsTUFBTSxFQUFDLFFBQVE7Y0FBQ0MsU0FBUyxFQUFFLENBQUMsMEJBQTBCO1lBQUMsRUFBRyxDQUMvRDtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQTtVQUNBO1VBQ0E7VUFFQSxNQUFNRyxJQUFJLEdBQUc7Ozs7Ozs7OztDQVNaO1VBQ0QsTUFBTVgsSUFBSSxHQUFHO1lBQ1RXLElBQUksRUFBRTtjQUFDQyxRQUFRLEVBQUUsTUFBTTtjQUFFYixHQUFHLEVBQUVZLElBQUk7Y0FBRVYsS0FBSyxFQUFFO1lBQWEsQ0FBQztZQUN6RGEsSUFBSSxFQUFFO2NBQUNmLEdBQUcsRUFBRTtZQUFzQixDQUFDO1lBQ25DZ0IsSUFBSSxFQUFFO2NBQUNoQixHQUFHLEVBQUU7WUFBZ0M7V0FDL0M7VUFFTTtVQUFVLFNBQVVpQixVQUFVO1lBQ2pDLE9BQ0liLG9CQUFDQyxjQUFRO2NBQ0xKLElBQUksRUFBRUEsSUFBSTtjQUNWSyxTQUFTLEVBQUVDLHNCQUFNLENBQUNELFNBQVM7Y0FDM0JFLE1BQU0sRUFBQyxNQUFNO2NBQUNDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQjtZQUFDLEVBQUc7VUFFcEUiLCJuYW1lcyI6WyJ0cGwiLCJ0cGxzIiwidGl0bGUiLCJXaWRnZXRDb250cm9sbGVyIiwiUmVhY3QiLCJEb2N1bWVudCIsInNwZWNpZmllciIsIm1vZHVsZSIsInRleHRJZCIsIm5leHRMaW5rcyIsIldpZGdldHMiLCJXaWRnZXRzRGVmaW5pdGlvbiIsInRwbDEiLCJsYW5ndWFnZSIsIldpZGdldExheW91dCIsInRwbDIiLCJ0cGwzIiwiV2lkZ2V0UGFnZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvd2lkZ2V0cy9pbnRyby9jb2RlL3RzL2NvbnRyb2xsZXIudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvd2lkZ2V0cy9pbnRyby9jb2RlL3RzL2RlZmluaXRpb24udHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvd2lkZ2V0cy9pbnRyby9jb2RlL3RzL2luZGV4LnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL3dpZGdldHMvaW50cm8vY29kZS90cy90eXBlcy9sYXlvdXQudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvd2lkZ2V0cy9pbnRyby9jb2RlL3RzL3R5cGVzL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=
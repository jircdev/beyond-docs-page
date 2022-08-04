define(["exports", "module", "@beyond-js/kernel/bundle", "react@17.0.2", "@beyond/ui/link", "@beyond/docs/store", "@beyond/docs/components/html"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.WidgetsRendering = _exports.SR = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/widgets/rendering",
    "multibundle": true,
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/ui/link", "@beyond/docs/store", "@beyond/docs/components/html"]));

  const ims = new Map();
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
    hash: 3292231431,
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
          moduleId: _beyond_context.module.resource,
          textId: "intro"
        }), React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "ssr"
        }), React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "csr"
        }), React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
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
    hash: 284518939,
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
  let WidgetsRendering, SR; // Module exports

  _exports.SR = SR;
  _exports.WidgetsRendering = WidgetsRendering;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'WidgetsRendering') && (_exports.WidgetsRendering = WidgetsRendering = require ? require('./index').WidgetsRendering : value);
    (require || prop === 'SR') && (_exports.SR = SR = require ? require('./sr').SR : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDTSxFQURSWCxPQUNZQSxvQkFBQzRCLFdBQUQ1QixFQUFNO1VBQUNhLElBQUksRUFBRVIsRUFBRSxDQUFDb0MsTUFBSHBDLENBQVVRO1FBQWpCLENBQU5iLEVBQThCSyxFQUFFLENBQUNvQyxNQUFIcEMsQ0FBVXlCLEtBQXhDOUIsTUFEWkEsT0FDcUVLLEVBQUUsQ0FBQ3NCLEVBRHhFM0IsQ0FGSkEsRUFLSUEsK0JBQUlVLEVBQUpWLENBTEpBLEVBTUlBLCtCQUNLeUIsRUFBRSxDQUFDZCxFQURSWCxFQUNXQSxvQkFBQ1ksVUFBRFosRUFBSztVQUFDYSxJQUFJLEVBQUM7UUFBTixDQUFMYixFQUE2QnlCLEVBQUUsQ0FBQ1gsRUFBaENkLENBRFhBLE9BQ3VEeUIsRUFBRSxDQUFDRSxFQUQxRDNCLENBTkpBLEVBU0lBLCtCQUFJc0MsRUFBSnRDLENBVEpBLEVBVUlBLG9CQUFDUyxVQUFEVCxFQUFLO1VBQUN3QyxPQUFPLEVBQUVsQztRQUFWLENBQUxOLENBVkpBLENBREo7TUFjSCIsIm5hbWVzIjpbIk5hbWUiLCJSZWFjdCIsIkNTUiIsInRleHRzIiwiY3NyIiwidGl0bGUiLCJwMSIsIml0ZW1zIiwic3RvcmVSZW5kZXJpbmciLCJpZCIsIkxpc3QiLCJwMiIsInQxIiwiTGluayIsImhyZWYiLCJsMSIsIldpZGdldHNSZW5kZXJpbmciLCJEb2N1bWVudCIsIm1vZHVsZUlkIiwibW9kdWxlIiwicmVzb3VyY2UiLCJ0ZXh0SWQiLCJuZXh0TGlua3MiLCJSZW5kZXJpbmdJbnRybyIsImludHJvIiwiaDEiLCJwMyIsImNsYXNzTmFtZSIsInQyIiwiRWxpbmsiLCJlbGluazIiLCJsYWJlbCIsInQzIiwiZWxpbmszIiwidDQiLCJTUiIsInNyIiwiU1NSIiwic3NyIiwicDQiLCJDSHRtbCIsImNvbnRlbnQiLCJlbGluazEiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL3dpZGdldHMvcmVuZGVyaW5nL2NvZGUvdHMvY29udHJvbGxlcnMudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvd2lkZ2V0cy9yZW5kZXJpbmcvY29kZS90cy9jc3IudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvd2lkZ2V0cy9yZW5kZXJpbmcvY29kZS90cy9pbmRleC50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9iYXNpYy93aWRnZXRzL3JlbmRlcmluZy9jb2RlL3RzL2ludHJvLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL3dpZGdldHMvcmVuZGVyaW5nL2NvZGUvdHMvc3IudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvd2lkZ2V0cy9yZW5kZXJpbmcvY29kZS90cy9zc3IudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==
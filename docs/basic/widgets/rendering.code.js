define(["exports", "@beyond-js/kernel/bundle", "react", "@beyond/ui/link", "@beyond/docs/store", "@beyond/docs/components/html"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.WidgetsRendering = _exports.SR = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/widgets/rendering",
    "multibundle": true,
    "bundle": "code"
  }).package();

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
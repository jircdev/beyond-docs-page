define(["exports", "@beyond-js/kernel/styles/ts", "react", "@beyond/ui/link/code", "@beyond/docs/store/code", "@beyond/docs/components/html/code", "@beyond/docs/components/next-links/code", "@beyond-js/kernel/bundle/ts"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.SR = _exports2.RenderingPage = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/basic/widgets/rendering/code").package();

  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/ui/link/code", "@beyond/docs/store/code", "@beyond/docs/components/html/code", "@beyond/docs/components/next-links/code"]));

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/docs/docs/basic/widgets/rendering/code');

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
    hash: 2653606602,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CSR = CSR;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      var _code2 = require("@beyond/docs/store/code");

      var _code3 = require("@beyond/docs/components/html/code");

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
        } = (0, _code2.useDocsContext)();
        return React.createElement(React.Fragment, null, React.createElement("h2", {
          id: "csr-render"
        }, title), React.createElement("p", null, p1), React.createElement(_code3.List, {
          items: items
        }), React.createElement("h3", {
          id: "store-server-rendering"
        }, storeRendering.title), React.createElement("p", null, storeRendering.p1), React.createElement("p", null, storeRendering.p2.t1, " ", React.createElement(_code.Link, {
          href: "/doccs/state-management"
        }, storeRendering.p2.l1), "."));
      }
    }
  });
  /***********************
  INTERNAL MODULE: ./index
  ***********************/

  ims.set('./index', {
    hash: 3034690106,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RenderingPage = RenderingPage;

      var React = require("react");

      var _ssr = require("./ssr");

      var _csr = require("./csr");

      var _sr = require("./sr");

      var _code = require("@beyond/docs/components/next-links/code");

      var _intro = require("./intro");

      var _code2 = require("@beyond/docs/store/code");

      var _beyond_context = require("beyond_context");

      var _code3 = require("@beyond/docs/components/html/code");
      /*bundle*/


      function RenderingPage() {
        const [ready, texts] = (0, _code2.useTexts)(_beyond_context.module.resource);
        if (!ready) return React.createElement(_code3.Loading, null);
        return React.createElement(_code2.DocsContext.Provider, {
          value: {
            ready,
            texts
          }
        }, React.createElement(_intro.RenderingIntro, null), React.createElement(_ssr.SSR, null), React.createElement(_csr.CSR, null), React.createElement(_sr.SR, null), React.createElement(_code.NextLinks, {
          items: [['Renderización', '/docs/rendering'], ['Widgets', '/docs/widgets']]
        }));
      }
    }
  });
  /***********************
  INTERNAL MODULE: ./intro
  ***********************/

  ims.set('./intro', {
    hash: 410946981,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RenderingIntro = RenderingIntro;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      var _code2 = require("@beyond/docs/store/code");

      var _code3 = require("@beyond/docs/components/html/code");

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
        } = (0, _code2.useDocsContext)();
        return React.createElement(React.Fragment, null, React.createElement("h1", {
          id: "intro"
        }, h1), React.createElement("p", null, p1), React.createElement("div", {
          className: "block__note"
        }, p2.t1, " ", React.createElement(_code.Link, {
          href: "/docs/widgets"
        }, p2.l1), ", ", p2.t2, " ", React.createElement(_code.Elink, {
          href: p2.elink2.href
        }, p2.elink2.label, " "), " ", p2.t3, " ", React.createElement(_code.Elink, {
          href: p2.elink3.href
        }, p2.elink3.label), p2.t4), React.createElement("p", null, p3), React.createElement(_code3.List, {
          items: items
        }));
      }
    }
  });
  /********************
  INTERNAL MODULE: ./sr
  ********************/

  ims.set('./sr', {
    hash: 897506159,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SR = SR;

      var React = require("react");

      var _code = require("@beyond/docs/store/code");
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
        } = (0, _code.useDocsContext)();
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
    hash: 4080916674,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SSR = SSR;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      var _code2 = require("@beyond/docs/store/code");

      var _code3 = require("@beyond/docs/components/html/code");

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
        } = (0, _code2.useDocsContext)();
        return React.createElement(React.Fragment, null, React.createElement("h2", {
          id: "ssr-rendering"
        }, React.createElement(_code3.CHtml, {
          value: title
        })), React.createElement("div", {
          className: "block__note"
        }, p1.t1, " ", React.createElement(_code.Elink, {
          href: p1.elink1.href
        }, p1.elink1.label, " "), " ", p1.t2), React.createElement("p", null, p2), React.createElement("p", null, p3.t1, React.createElement(_code.Link, {
          href: "/docs/widgets/"
        }, p3.l1), " ", p3.t2), React.createElement("p", null, p4), React.createElement(_code3.List, {
          items: items
        }));
      }
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.RenderingPage = require('./index').RenderingPage;
    _exports.SR = require('./sr').SR;
  };

  let RenderingPage, SR; // Module exports

  _exports2.SR = SR;
  _exports2.RenderingPage = RenderingPage;

  __pkg.exports.process = function (require) {
    _exports2.RenderingPage = RenderingPage = require('./index').RenderingPage;
    _exports2.SR = SR = require('./sr').SR;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});
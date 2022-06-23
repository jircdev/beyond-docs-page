define(["exports", "@beyond-js/kernel/styles/ts", "react", "@beyond/docs/components/next-links/code", "@beyond/docs/components/html/code", "@beyond/docs/code/code", "@beyond/ui/link/code", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.WidgetsDefinition = _exports.Widgets = _exports.WidgetPage = _exports.WidgetLayout = _exports.WidgetController = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/basic/widgets/intro/code").package();

  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/next-links/code", "@beyond/docs/components/html/code", "@beyond/docs/code/code", "@beyond/ui/link/code"]));

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/docs/docs/basic/widgets/intro/code');

  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 153008845,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetController = WidgetController;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");

      const tpl = `\rimport {ReactWidgetController} from '@beyond-js/react-widgets/controllers/ts';
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
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
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
    hash: 1922532918,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Widgets = Widgets;

      var React = require("react");

      var _beyond_context = require("beyond_context");

      var _code = require("@beyond/docs/components/html/code");
      /*bundle*/


      function Widgets() {
        return React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
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
    hash: 4238269264,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetsDefinition = WidgetsDefinition;

      var React = require("react");

      var _beyond_context = require("beyond_context");

      var _code = require("@beyond/docs/components/html/code");
      /*bundle*/


      function WidgetsDefinition() {
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
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
    hash: 3960611028,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetLayout = WidgetLayout;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

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
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
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
    hash: 347181153,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetPage = WidgetPage;

      var React = require("react");

      var _beyond_context = require("beyond_context");

      var _code = require("@beyond/docs/components/html/code");

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
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "page",
          nextLinks: ["/docs/widgets/controller"]
        }));
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
  let WidgetController, Widgets, WidgetsDefinition, WidgetLayout, WidgetPage; // Module exports

  _exports.WidgetPage = WidgetPage;
  _exports.WidgetLayout = WidgetLayout;
  _exports.WidgetsDefinition = WidgetsDefinition;
  _exports.Widgets = Widgets;
  _exports.WidgetController = WidgetController;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'WidgetController') && (_exports.WidgetController = WidgetController = require ? require('./controller').WidgetController : value);
    (require || prop === 'Widgets') && (_exports.Widgets = Widgets = require ? require('./definition').Widgets : value);
    (require || prop === 'WidgetsDefinition') && (_exports.WidgetsDefinition = WidgetsDefinition = require ? require('./index').WidgetsDefinition : value);
    (require || prop === 'WidgetLayout') && (_exports.WidgetLayout = WidgetLayout = require ? require('./types/layout').WidgetLayout : value);
    (require || prop === 'WidgetPage') && (_exports.WidgetPage = WidgetPage = require ? require('./types/page').WidgetPage : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
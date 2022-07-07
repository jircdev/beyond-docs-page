define(["exports", "@beyond-js/kernel/bundle", "@beyond-js/kernel/styles", "react", "@beyond/docs/components/html", "@beyond/docs/code"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.WidgetsDefinition = _exports.Widgets = _exports.WidgetPage = _exports.WidgetLayout = _exports.WidgetController = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/widgets/intro",
    "multibundle": true,
    "bundle": "code"
  }).package();

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["@beyond-js/kernel/styles", dependency_1], ["react", dependency_2]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html", "@beyond/docs/code"]));

  require('@beyond-js/kernel/styles').styles.register('@beyond/docs/docs/basic/widgets/intro.code');

  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 3235480478,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetController = WidgetController;

      var React = require("react");

      var _html = require("@beyond/docs/components/html");

      var _beyond_context = require("beyond_context");

      const tpl = `\rimport {ReactWidgetController} from '@beyond-js/react-widgets/controllers';
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
    hash: 3234979080,
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
    hash: 255470810,
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
    hash: 1920523486,
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
    hash: 1790408207,
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
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
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
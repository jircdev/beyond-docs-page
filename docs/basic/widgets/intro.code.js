define(["exports", "module", "@beyond-js/kernel/bundle", "react@17.0.2", "@beyond/docs/components/html", "@beyond/docs/code"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.WidgetsDefinition = _exports.Widgets = _exports.WidgetPage = _exports.WidgetLayout = _exports.WidgetController = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/widgets/intro",
    "multibundle": true,
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html", "@beyond/docs/code"]));

  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 2385600600,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BQ0E7O01BQ0E7O01BRUEsTUFBTUEsR0FBRyxHQUNMOzs7Ozs7O0VBREo7TUFTQSxNQUFNQyxJQUFJLEdBQUc7UUFDVEQsR0FBRyxFQUFFO1VBQUNFLEtBQUssRUFBRSxlQUFSO1VBQXlCRjtRQUF6QjtNQURJLENBQWI7TUFJTzs7TUFBVSxTQUFVRyxnQkFBVixHQUEwQjtRQUN2QyxPQUNJQywwQ0FDSUEsb0JBQUNDLGNBQURELEVBQVM7VUFDTEgsSUFBSSxFQUFFQSxJQUREO1VBRUxLLFFBQVEsRUFBRUMsdUJBQU9DLFFBRlo7VUFHTEMsTUFBTSxFQUFDLFlBSEY7VUFHZUMsU0FBUyxFQUFFLENBQUMsMEJBQUQ7UUFIMUIsQ0FBVE4sQ0FESkEsQ0FESjtNQVFIOzs7Ozs7Ozs7Ozs7Ozs7OztNQzFCRDs7TUFDQTs7TUFDQTtNQUVPOzs7TUFBVSxTQUFVTyxPQUFWLEdBQWlCO1FBQzlCLE9BQ0lQLG9CQUFDQyxjQUFERCxFQUFTO1VBQUNFLFFBQVEsRUFBRUMsdUJBQU9DLFFBQWxCO1VBQTRCQyxNQUFNLEVBQUMsWUFBbkM7VUFBZ0RDLFNBQVMsRUFBRSxDQUFDLDBCQUFEO1FBQTNELENBQVROLENBREo7TUFHSDs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNSRDs7TUFFQTs7TUFDQTtNQUVPOzs7TUFBVSxTQUFVUSxpQkFBVixHQUEyQjtRQUN4QyxPQUNJUiwwQ0FDSUEsb0JBQUNDLGNBQURELEVBQVM7VUFBQ0UsUUFBUSxFQUFFQyx1QkFBT0MsUUFBbEI7VUFBNEJDLE1BQU0sRUFBQyxPQUFuQztVQUEyQ0MsU0FBUyxFQUFFLENBQUMsMEJBQUQ7UUFBdEQsQ0FBVE4sQ0FESkEsQ0FESjtNQUtIOzs7Ozs7Ozs7Ozs7Ozs7OztNQ1hEOztNQUNBOztNQUVBOztNQUVBLE1BQU1KLEdBQUcsR0FBRzs7Ozs7OztFQUFaO01BU0EsTUFBTUMsSUFBSSxHQUFHO1FBQ1RZLElBQUksRUFBRTtVQUFDWCxLQUFLLEVBQUUsYUFBUjtVQUF1QkYsR0FBdkI7VUFBNEJjLFFBQVEsRUFBRTtRQUF0QztNQURHLENBQWI7TUFJTzs7TUFBVSxTQUFVQyxZQUFWLEdBQXNCO1FBQ25DLE9BQ0lYLDBDQUNJQSxvQkFBQ0MsY0FBREQsRUFBUztVQUNMSCxJQUFJLEVBQUVBLElBREQ7VUFFTEssUUFBUSxFQUFFQyx1QkFBT0MsUUFGWjtVQUdMQyxNQUFNLEVBQUMsUUFIRjtVQUdXQyxTQUFTLEVBQUUsQ0FBQywwQkFBRDtRQUh0QixDQUFUTixDQURKQSxDQURKO01BUUg7Ozs7Ozs7Ozs7Ozs7Ozs7O01DM0JEOztNQUNBOztNQUNBOztNQUVBLE1BQU1TLElBQUksR0FBRzs7Ozs7Ozs7O0NBQWI7TUFVQSxNQUFNWixJQUFJLEdBQUc7UUFDVFksSUFBSSxFQUFFO1VBQUNDLFFBQVEsRUFBRSxNQUFYO1VBQW1CZCxHQUFHLEVBQUVhLElBQXhCO1VBQThCWCxLQUFLLEVBQUU7UUFBckMsQ0FERztRQUVUYyxJQUFJLEVBQUU7VUFBQ2hCLEdBQUcsRUFBRTtRQUFOLENBRkc7UUFHVGlCLElBQUksRUFBRTtVQUFDakIsR0FBRyxFQUFFO1FBQU47TUFIRyxDQUFiO01BTU87O01BQVUsU0FBVWtCLFVBQVYsR0FBb0I7UUFDakMsT0FDSWQsMENBRUlBLG9CQUFDQyxjQUFERCxFQUFTO1VBQ0xILElBQUksRUFBRUEsSUFERDtVQUVMSyxRQUFRLEVBQUVDLHVCQUFPQyxRQUZaO1VBR0xDLE1BQU0sRUFBQyxNQUhGO1VBR1NDLFNBQVMsRUFBRSxDQUFDLDBCQUFEO1FBSHBCLENBQVROLENBRkpBLENBREo7TUFTSCIsIm5hbWVzIjpbInRwbCIsInRwbHMiLCJ0aXRsZSIsIldpZGdldENvbnRyb2xsZXIiLCJSZWFjdCIsIkRvY3VtZW50IiwibW9kdWxlSWQiLCJtb2R1bGUiLCJyZXNvdXJjZSIsInRleHRJZCIsIm5leHRMaW5rcyIsIldpZGdldHMiLCJXaWRnZXRzRGVmaW5pdGlvbiIsInRwbDEiLCJsYW5ndWFnZSIsIldpZGdldExheW91dCIsInRwbDIiLCJ0cGwzIiwiV2lkZ2V0UGFnZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvd2lkZ2V0cy9pbnRyby9jb2RlL3RzL2NvbnRyb2xsZXIudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvd2lkZ2V0cy9pbnRyby9jb2RlL3RzL2RlZmluaXRpb24udHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvd2lkZ2V0cy9pbnRyby9jb2RlL3RzL2luZGV4LnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL3dpZGdldHMvaW50cm8vY29kZS90cy90eXBlcy9sYXlvdXQudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvd2lkZ2V0cy9pbnRyby9jb2RlL3RzL3R5cGVzL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=
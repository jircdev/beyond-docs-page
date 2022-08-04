define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/react-widgets/base", "@beyond-js/kernel/core", "react@17.0.2", "@beyond/docs/manager", "@beyond/docs/ui/icons", "@beyond/ui/link", "@beyond/ui/image", "@beyond/docs/components/theme-button", "@beyond-js/kernel/styles"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Widget = _exports.Controller = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/header",
    "bundle": "header"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_4]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/manager", "@beyond/docs/ui/icons", "@beyond/ui/link", "@beyond/ui/image", "@beyond/docs/components/theme-button"]));

  brequire('@beyond-js/widgets/render').widgets.register([{
    "name": "beyond-docs-header",
    "id": "@beyond/docs/header"
  }]);
  brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs/header');
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 1154764885,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _base = require("@beyond-js/react-widgets/base");

      var _core = require("@beyond-js/kernel/core");

      var _widget = require("./view/widget");

      class Store extends _core.Events {
        async fetch() {//code
        }

        #value;

        get value() {
          return this.#value;
        }

        toJSON() {
          return this.#value;
        }

        hydrate(cached) {}

      }
      /*bundle*/


      class Controller extends _base.ReactWidgetController {
        get Widget() {
          return _widget.Widget;
        }

        async fetch() {}

        createStore() {
          return new Store();
        }

      }

      exports.Controller = Controller;
    }
  });
  /********************************
  INTERNAL MODULE: ./view/hamburger
  ********************************/

  ims.set('./view/hamburger', {
    hash: 3551581010,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Hamburger = Hamburger;

      var React = require("react");

      var _manager = require("@beyond/docs/manager");

      function Hamburger({
        onClick
      }) {
        const showMenu = event => {
          event.preventDefault();
          _manager.AppManager.menuOpened = !_manager.AppManager.menuOpened;
        };

        return React.createElement("button", {
          className: "hamburger-icon-container",
          onClick: showMenu
        }, React.createElement("input", {
          id: "hamburger__input",
          type: "checkbox",
          className: "hamburger-icon"
        }), React.createElement("label", {
          htmlFor: "hamburger__input"
        }, React.createElement("i", null), React.createElement("span", null)), React.createElement("em", null));
      }
    }
  });
  /*****************************
  INTERNAL MODULE: ./view/notice
  *****************************/

  ims.set('./view/notice', {
    hash: 2514501766,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Notice = Notice;

      var React = require("react");

      function Notice() {
        return React.createElement("section", {
          className: "flex-container flex-center header-notice bg-primary-accent pd-5"
        }, "Beta version");
      }
    }
  });
  /*****************************
  INTERNAL MODULE: ./view/widget
  *****************************/

  ims.set('./view/widget', {
    hash: 149152790,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Widget = Widget;

      var React = require("react");

      var _icons = require("@beyond/docs/ui/icons");

      var _link = require("@beyond/ui/link");

      var _hamburger = require("./hamburger");

      var _notice = require("./notice");

      var _image = require("@beyond/ui/image");

      var _themeButton = require("@beyond/docs/components/theme-button");
      /*bundle*/


      function Widget() {
        return React.createElement(React.Fragment, null, React.createElement(_notice.Notice, null), React.createElement("header", {
          className: "docs-header"
        }, React.createElement("div", {
          className: "container flex-container space-between ph-15"
        }, React.createElement("section", {
          className: "header-logo"
        }, React.createElement("div", null, React.createElement(_hamburger.Hamburger, null), React.createElement(_link.Link, {
          href: "/"
        }, React.createElement(_image.BeyondImage, {
          src: "/images/beyond-logo.png",
          className: "img-logo",
          alt: "Beyond the universal meta framework"
        })))), React.createElement("div", {
          className: "flex-center-y right-content"
        }, React.createElement("span", {
          className: "version"
        }, "1.0.0"), React.createElement(_themeButton.ThemeToggleButton, null), React.createElement(_link.Elink, {
          className: "docs-header__link-icon",
          href: "http://github.com"
        }, React.createElement(_icons.AppIcon, {
          icon: "github"
        }))))));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./controller",
    "from": "Controller",
    "name": "Controller"
  }, {
    "im": "./view/widget",
    "from": "Widget",
    "name": "Widget"
  }];
  let Controller, Widget; // Module exports

  _exports.Widget = Widget;
  _exports.Controller = Controller;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller').Controller : value);
    (require || prop === 'Widget') && (_exports.Widget = Widget = require ? require('./view/widget').Widget : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUFBOztNQUNBOztNQUNBOztNQUVBLE1BQU1BLEtBQU4sU0FBb0JDLFlBQXBCLENBQTBCO1FBQ1gsTUFBTEMsS0FBSyxJQUNQO1FBQ0g7O1FBRUQ7O1FBQ1MsSUFBTEMsS0FBSztVQUNMLE9BQU8sS0FBSyxNQUFaO1FBQ0g7O1FBRURDLE1BQU07VUFDRixPQUFPLEtBQUssTUFBWjtRQUNIOztRQUVEQyxPQUFPLENBQUNDLE1BQUQsRUFBZSxDQUNyQjs7TUFmcUI7TUFtQm5COzs7TUFBVSxNQUNYQyxVQURXLFNBQ1FDLDJCQURSLENBQzZCO1FBRWhDLElBQU5DLE1BQU07VUFDTixPQUFPQSxjQUFQO1FBQ0g7O1FBRVUsTUFBTFAsS0FBSyxJQUNWOztRQUVEUSxXQUFXO1VBQ1AsT0FBTyxJQUFJVixLQUFKLEVBQVA7UUFDSDs7TUFYeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUN4QjlDOztNQUNBOztNQUVNLFNBQVVXLFNBQVYsQ0FBb0I7UUFBQ0M7TUFBRCxDQUFwQixFQUE2QjtRQUMvQixNQUFNQyxRQUFRLEdBQUdDLEtBQUssSUFBRztVQUNyQkEsS0FBSyxDQUFDQyxjQUFORDtVQUNBRSxvQkFBV0MsVUFBWEQsR0FBd0IsQ0FBQ0Esb0JBQVdDLFVBQXBDRDtRQUZKOztRQU1BLE9BQ0lFO1VBQVFDLFNBQVMsRUFBQywwQkFBbEJEO1VBQTZDTixPQUFPLEVBQUVDO1FBQXRESyxHQUNJQTtVQUNJRSxFQUFFLEVBQUMsa0JBRFBGO1VBRUlHLElBQUksRUFBQyxVQUZUSDtVQUVvQkMsU0FBUyxFQUFDO1FBRjlCRCxFQURKQSxFQUlJQTtVQUFPSSxPQUFPLEVBQUM7UUFBZkosR0FDSUEsOEJBREpBLEVBRUlBLGlDQUZKQSxDQUpKQSxFQU9JQSwrQkFQSkEsQ0FESjtNQVdIOzs7Ozs7Ozs7Ozs7Ozs7OztNQ3JCRDs7TUFFTSxTQUFVSyxNQUFWLEdBQWdCO1FBQ2xCLE9BQ0lMO1VBQVNDLFNBQVMsRUFBQztRQUFuQkQsR0FBb0YsY0FBcEZBLENBREo7TUFLSDs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNSRDs7TUFDQTs7TUFDQTs7TUFDQTs7TUFDQTs7TUFDQTs7TUFDQTtNQUVPOzs7TUFBVSxTQUNSVCxNQURRLEdBQ0Y7UUFFWCxPQUNJUywwQ0FDSUEsb0JBQUNLLGNBQURMLEVBQU8sSUFBUEEsQ0FESkEsRUFFSUE7VUFBUUMsU0FBUyxFQUFDO1FBQWxCRCxHQUNJQTtVQUFLQyxTQUFTLEVBQUM7UUFBZkQsR0FDSUE7VUFBU0MsU0FBUyxFQUFDO1FBQW5CRCxHQUNJQSxpQ0FDSUEsb0JBQUNQLG9CQUFETyxFQUFVLElBQVZBLENBREpBLEVBRUlBLG9CQUFDTSxVQUFETixFQUFLO1VBQUNPLElBQUksRUFBQztRQUFOLENBQUxQLEVBQ0lBLG9CQUFDUSxrQkFBRFIsRUFBWTtVQUFDUyxHQUFHLEVBQUMseUJBQUw7VUFDQ1IsU0FBUyxFQUFDLFVBRFg7VUFFQ1MsR0FBRyxFQUFDO1FBRkwsQ0FBWlYsQ0FESkEsQ0FGSkEsQ0FESkEsQ0FESkEsRUFZSUE7VUFBS0MsU0FBUyxFQUFDO1FBQWZELEdBQ0lBO1VBQU1DLFNBQVMsRUFBQztRQUFoQkQsR0FBeUIsT0FBekJBLENBREpBLEVBRUlBLG9CQUFDVyw4QkFBRFgsRUFBa0IsSUFBbEJBLENBRkpBLEVBR0lBLG9CQUFDWSxXQUFEWixFQUFNO1VBQUNDLFNBQVMsRUFBQyx3QkFBWDtVQUFvQ00sSUFBSSxFQUFDO1FBQXpDLENBQU5QLEVBQ0lBLG9CQUFDYSxjQUFEYixFQUFRO1VBQUNjLElBQUksRUFBQztRQUFOLENBQVJkLENBREpBLENBSEpBLENBWkpBLENBREpBLENBRkpBLENBREo7TUE2QkgiLCJuYW1lcyI6WyJTdG9yZSIsIkV2ZW50cyIsImZldGNoIiwidmFsdWUiLCJ0b0pTT04iLCJoeWRyYXRlIiwiY2FjaGVkIiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsImNyZWF0ZVN0b3JlIiwiSGFtYnVyZ2VyIiwib25DbGljayIsInNob3dNZW51IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkFwcE1hbmFnZXIiLCJtZW51T3BlbmVkIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJpZCIsInR5cGUiLCJodG1sRm9yIiwiTm90aWNlIiwiTGluayIsImhyZWYiLCJCZXlvbmRJbWFnZSIsInNyYyIsImFsdCIsIlRoZW1lVG9nZ2xlQnV0dG9uIiwiRWxpbmsiLCJBcHBJY29uIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2xheW91dHMvZG9jcy9oZWFkZXIvd2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvbGF5b3V0cy9kb2NzL2hlYWRlci93aWRnZXQvdHMvdmlldy9oYW1idXJnZXIudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2xheW91dHMvZG9jcy9oZWFkZXIvd2lkZ2V0L3RzL3ZpZXcvbm90aWNlLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9sYXlvdXRzL2RvY3MvaGVhZGVyL3dpZGdldC90cy92aWV3L3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=
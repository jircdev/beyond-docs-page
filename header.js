System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/react-widgets@18.21.1/base", "@beyond-js/kernel@0.1.7/core", "react@18.2.0", "@beyond/docs@1/manager", "@beyond/docs@1/ui/icons", "@beyond/ui@1.0.0/link", "@beyond/ui@1.0.0/image", "@beyond/docs@1/components/theme-button", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, Widget, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Widget: void 0
  });
  return {
    setters: [function (_beyondJsWidgets012Render) {
      dependency_0 = _beyondJsWidgets012Render;
    }, function (_beyondJsKernel017Bundle) {
      dependency_1 = _beyondJsKernel017Bundle;
    }, function (_beyondJsReactWidgets18211Base) {
      dependency_2 = _beyondJsReactWidgets18211Base;
    }, function (_beyondJsKernel017Core) {
      dependency_3 = _beyondJsKernel017Core;
    }, function (_react) {
      dependency_4 = _react;
    }, function (_beyondDocs1Manager) {
      dependency_5 = _beyondDocs1Manager;
    }, function (_beyondDocs1UiIcons) {
      dependency_6 = _beyondDocs1UiIcons;
    }, function (_beyondUi100Link) {
      dependency_7 = _beyondUi100Link;
    }, function (_beyondUi100Image) {
      dependency_8 = _beyondUi100Image;
    }, function (_beyondDocs1ComponentsThemeButton) {
      dependency_9 = _beyondDocs1ComponentsThemeButton;
    }, function (_beyondJsKernel017Styles) {
      dependency_10 = _beyondJsKernel017Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.0"], ["swiper", "8.4.5"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/header"
        },
        "type": "widget",
        "name": "header"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/base', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['react', dependency_4], ['@beyond/docs/manager', dependency_5], ['@beyond/docs/ui/icons', dependency_6], ['@beyond/ui/link', dependency_7], ['@beyond/ui/image', dependency_8], ['@beyond/docs/components/theme-button', dependency_9], ['@beyond-js/kernel/styles', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-docs-header",
        "vspecifier": "@beyond/docs@1/header"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs@1/header');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 776452222,
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
            async fetch() {
              //code
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
        hash: 185906316,
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
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Widget') && _export("Widget", Widget = require ? require('./view/widget').Widget : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBR0E7VUFDQTtVQUVBLE1BQU1BLEtBQU0sU0FBUUMsWUFBTTtZQUN0QixNQUFNQyxLQUFLO2NBQ1A7WUFBQTtZQUdKLE1BQU07WUFDTixJQUFJQyxLQUFLO2NBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUN0QjtZQUVBQyxNQUFNO2NBQ0YsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUN0QjtZQUVBQyxPQUFPLENBQUNDLE1BQWMsR0FDdEI7O1VBSUc7VUFBVSxNQUNYQyxVQUFXLFNBQVFDLDJCQUFxQjtZQUUxQyxJQUFJQyxNQUFNO2NBQ04sT0FBT0EsY0FBTTtZQUNqQjtZQUVBLE1BQU1QLEtBQUssSUFDWDtZQUVBUSxXQUFXO2NBQ1AsT0FBTyxJQUFJVixLQUFLLEVBQUU7WUFDdEI7O1VBQ0hXOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RDRDtVQUNBO1VBRU0sU0FBVUMsU0FBUyxDQUFDO1lBQUNDO1VBQU8sQ0FBQztZQUMvQixNQUFNQyxRQUFRLEdBQUdDLEtBQUssSUFBRztjQUNyQkEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7Y0FDdEJDLG1CQUFVLENBQUNDLFVBQVUsR0FBRyxDQUFDRCxtQkFBVSxDQUFDQyxVQUFVO1lBRWxELENBQUM7WUFFRCxPQUNJQztjQUFRQyxTQUFTLEVBQUMsMEJBQTBCO2NBQUNQLE9BQU8sRUFBRUM7WUFBUSxHQUMxREs7Y0FDSUUsRUFBRSxFQUFDLGtCQUFrQjtjQUNyQkMsSUFBSSxFQUFDLFVBQVU7Y0FBQ0YsU0FBUyxFQUFDO1lBQWdCLEVBQUUsRUFDaEREO2NBQU9JLE9BQU8sRUFBQztZQUFrQixHQUM3QkosOEJBQUksRUFDSkEsaUNBQU8sQ0FBUSxFQUNuQkEsK0JBQUssQ0FDQTtVQUVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkE7VUFFTSxTQUFVSyxNQUFNO1lBQ2xCLE9BQ0lMO2NBQVNDLFNBQVMsRUFBQztZQUFpRSxrQkFFMUU7VUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTztVQUFVLFNBQ1JYLE1BQU07WUFDWCxPQUNJVSwwQ0FDSUEsb0JBQUNLLGNBQU0sT0FBRyxFQUNWTDtjQUFRQyxTQUFTLEVBQUM7WUFBYSxHQUMzQkQ7Y0FBS0MsU0FBUyxFQUFDO1lBQThDLEdBQ3pERDtjQUFTQyxTQUFTLEVBQUM7WUFBYSxHQUM1QkQsaUNBQ0lBLG9CQUFDUCxvQkFBUyxPQUFHLEVBQ2JPLG9CQUFDTSxVQUFJO2NBQUNDLElBQUksRUFBQztZQUFHLEdBQ1ZQLG9CQUFDUSxrQkFBVztjQUNSQyxHQUFHLEVBQUMseUJBQXlCO2NBQzdCUixTQUFTLEVBQUMsVUFBVTtjQUNwQlMsR0FBRyxFQUFDO1lBQXFDLEVBQzNDLENBQ0MsQ0FDTCxDQUNBLEVBQ1ZWO2NBQUtDLFNBQVMsRUFBQztZQUE2QixHQUN4Q0Q7Y0FBTUMsU0FBUyxFQUFDO1lBQVMsV0FBYSxFQUN0Q0Qsb0JBQUNXLDhCQUFpQixPQUFHLEVBQ3JCWCxvQkFBQ1ksV0FBSztjQUFDWCxTQUFTLEVBQUMsd0JBQXdCO2NBQUNNLElBQUksRUFBQztZQUFtQixHQUM5RFAsb0JBQUNhLGNBQU87Y0FBQ0MsSUFBSSxFQUFDO1lBQVEsRUFBRyxDQUNyQixDQUNOLENBQ0osQ0FDRCxDQUNWO1VBRVgiLCJuYW1lcyI6WyJTdG9yZSIsIkV2ZW50cyIsImZldGNoIiwidmFsdWUiLCJ0b0pTT04iLCJoeWRyYXRlIiwiY2FjaGVkIiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsImNyZWF0ZVN0b3JlIiwiZXhwb3J0cyIsIkhhbWJ1cmdlciIsIm9uQ2xpY2siLCJzaG93TWVudSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJBcHBNYW5hZ2VyIiwibWVudU9wZW5lZCIsIlJlYWN0IiwiY2xhc3NOYW1lIiwiaWQiLCJ0eXBlIiwiaHRtbEZvciIsIk5vdGljZSIsIkxpbmsiLCJocmVmIiwiQmV5b25kSW1hZ2UiLCJzcmMiLCJhbHQiLCJUaGVtZVRvZ2dsZUJ1dHRvbiIsIkVsaW5rIiwiQXBwSWNvbiIsImljb24iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL3ZpZXcvaGFtYnVyZ2VyLnRzeCIsIndpZGdldC90cy92aWV3L25vdGljZS50c3giLCJ3aWRnZXQvdHMvdmlldy93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19
System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.7/routing", "prop-types@15.8.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, BeyondIconButton, BeyondIcon, __beyond_pkg, hmr;
  _export({
    BeyondIconButton: void 0,
    BeyondIcon: void 0
  });
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondJsKernel017Routing) {
      dependency_2 = _beyondJsKernel017Routing;
    }, function (_propTypes) {
      dependency_3 = _propTypes;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/ui@1.0.0/icons"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['prop-types', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/icons');
      ims = new Map();
      /************************************
      INTERNAL MODULE: ./beyond-icon-button
      ************************************/
      ims.set('./beyond-icon-button', {
        hash: 3662033247,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondIconButton = void 0;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _icon = require("./icon");
          /*bundle*/
          const BeyondIconButton = props => {
            const refButton = React.useRef(null);
            const {
              icon,
              onClick,
              viewBox,
              disabled,
              name,
              value,
              id,
              title,
              children
            } = props;
            React.useEffect(() => {
              if (!props.title) return;
              let {
                tippy
              } = props;
              if (!tippy) tippy = {};
              //     this.tippy = await beyond.require('tippy');
              if (!refButton?.current) return;
              //     this.tippy(this._button.current, tippy);
            }, []);
            const onClickButton = async event => {
              let item = refButton.current;
              item.classList.add('has-hover');
              window.setTimeout(() => {
                if (item) item.classList.remove('has-hover');
              }, 300);
              if (onClick && typeof onClick === 'function') {
                onClick(event);
                return;
              }
              if (props.navigate) {
                _routing.routing.pushState(props.navigate);
              }
            };
            let {
              className,
              type
            } = props;
            type = !!type ? type : 'button';
            className = className ? `${className} beyond-icon-button` : 'beyond-icon-button';
            const icons = props.icons ?? {};
            const iconAttributes = {
              'icon': icon,
              icons
            };
            if (viewBox) iconAttributes.viewBox = viewBox;
            const attrs = Object.assign({}, props);
            title ? attrs['data-tippy-content'] = title : null;
            delete attrs.icon;
            delete attrs.type;
            delete attrs.title;
            delete attrs.viewBox;
            delete attrs.className;
            delete attrs.icons;
            return React.createElement("button", {
              id: id,
              type: type,
              ...attrs,
              name: name,
              value: value,
              ref: refButton,
              disabled: disabled,
              className: className,
              onClick: onClickButton
            }, React.createElement(_icon.BeyondIcon, {
              ...iconAttributes
            }), children);
          };
          exports.BeyondIconButton = BeyondIconButton;
        }
      });

      /**********************
      INTERNAL MODULE: ./icon
      **********************/

      ims.set('./icon', {
        hash: 3346117988,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondIcon = void 0;
          var React = require("react");
          var PropTypes = require("prop-types");
          var _icons = require("./icons");
          /*bundle*/
          const BeyondIcon = props => {
            const newItems = props.icons ?? {};
            React.useEffect(() => {
              if (!props.title) return;
              //     this.tippy = await beyond.require('tippy');
              //     if (!this.icon?.current) return;
              //     this.tippy(this.icon.current);
            }, []);
            let {
              icon,
              className
            } = props;
            const iconsList = {
              ..._icons.BEYOND_ICONS,
              ...newItems
            };
            if (!icon) return React.createElement("div", {
              key: "preload"
            });
            let viewBox = '0 0 24 24';
            if (iconsList.hasOwnProperty(icon)) icon = iconsList[icon];
            if (typeof icon === 'object') {
              viewBox = icon.viewBox ? icon.viewBox : viewBox;
              icon = icon.icon;
            }
            const properties = Object.assign({
              ...props
            }, {
              viewBox: props.viewBox ? props.viewBox : viewBox,
              className: !className ? 'beyond-icon' : `beyond-icon ${className}`
            });
            props.title ? properties['data-tippy-content'] = props.title : null;
            delete properties.icon;
            props['data-item'] ? properties['data-item'] = props['data-item'] : null;
            return React.createElement("svg", {
              ...properties
            }, React.createElement("g", {
              dangerouslySetInnerHTML: {
                __html: icon
              }
            }));
          };
          exports.BeyondIcon = BeyondIcon;
          BeyondIcon.propTypes = {
            title: PropTypes.string,
            className: PropTypes.string,
            viewBox: PropTypes.string,
            icon: PropTypes.any
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./icons
      ***********************/

      ims.set('./icons', {
        hash: 3465096686,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BEYOND_ICONS = void 0;
          const BEYOND_ICONS = {
            close: `<g transform="translate(1, 1.5)"><g id="close" transform="scale(0.45)">
                <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
               </g></g>`,
            user: `<g id="user">
                <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </g>`,
            box: `<g id="box" transform="scale(0.05)">
                <polygon points="279.8,244.8 258.2,257.3 258.2,482 452.7,369.7 452.7,145"/>
                <polygon points="315,43.3 240.2,0 40.3,115.4 115.2,158.7"/>
                <polygon points="440,115.4 353.8,66.3 154,181.7 165.4,187.6 240.2,230.8 314.6,187.9"/>
                <polygon points="138.9,264.3 103.1,245.9 103.1,188.7 29.3,146.2 29.3,369.3 222.4,480.8 222.4,257.7 138.9,209.6"/>
            </g>`,
            brand: `<g id="brand">
                <path
                d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path>
              </g>`,
            home: `<g>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </g>`,
            add: `<g id="add">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </g>`,
            remove: `<g id="remove"><path d="M0 10h24v4h-24z"/></g>`,
            list: `<g id="list">
                <path d="M57.124,51.893H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,51.893,57.124,51.893z"/>
                <path d="M57.124,33.062H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3 C60.124,31.719,58.781,33.062,57.124,33.062z"/>
                <path d="M57.124,14.231H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,14.231,57.124,14.231z"/>
                <circle cx="4.029" cy="11.463" r="4.029"/>
                <circle cx="4.029" cy="30.062" r="4.029"/>
                <circle cx="4.029" cy="48.661" r="4.029"/>
            </g>`,
            share: `<g id="share"
               transform="matrix(0.04690917,0,0,0.04690917,8.6530685e-8,2.449479e-5)">
                <path
                    d="M 506.206,179.012 360.025,32.834 c -3.617,-3.617 -7.898,-5.426 -12.847,-5.426 -4.949,0 -9.233,1.809 -12.847,5.426 -3.617,3.619 -5.428,7.902 -5.428,12.85 l 0,73.089 -63.953,0 c -135.716,0 -218.984,38.354 -249.823,115.06 C 5.042,259.335 0,291.03 0,328.907 c 0,31.594 12.087,74.514 36.259,128.762 0.57,1.335 1.566,3.614 2.996,6.849 1.429,3.233 2.712,6.088 3.854,8.565 1.146,2.471 2.384,4.565 3.715,6.276 2.282,3.237 4.948,4.859 7.994,4.859 2.855,0 5.092,-0.951 6.711,-2.854 1.615,-1.902 2.424,-4.284 2.424,-7.132 0,-1.718 -0.238,-4.236 -0.715,-7.569 -0.476,-3.333 -0.715,-5.564 -0.715,-6.708 -0.953,-12.938 -1.429,-24.653 -1.429,-35.114 0,-19.223 1.668,-36.449 4.996,-51.675 3.333,-15.229 7.948,-28.407 13.85,-39.543 5.901,-11.14 13.512,-20.745 22.841,-28.835 9.325,-8.09 19.364,-14.702 30.118,-19.842 10.756,-5.141 23.413,-9.186 37.974,-12.135 14.56,-2.95 29.215,-4.997 43.968,-6.14 14.753,-1.143 31.455,-1.711 50.109,-1.711 l 63.953,0 0,73.091 c 0,4.948 1.807,9.232 5.421,12.847 3.62,3.613 7.901,5.424 12.847,5.424 4.948,0 9.232,-1.811 12.854,-5.424 L 506.203,204.715 c 3.617,-3.617 5.424,-7.898 5.424,-12.847 -0.001,-4.948 -1.807,-9.232 -5.421,-12.856 z"></path>
            </g>`,
            favorite: `<g id="favorite">
                    <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </g>`,
            save: `<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>`,
            chevronRight: `<g id="chevron-right">
        <path d = "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" > </path>
    </g>`,
            check: `<g transform="scale(0.045)">
    <g>
    <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0 c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7 C514.5,101.703,514.499,85.494,504.502,75.496z"/>
    </g>
   </g>`
          };
          exports.BEYOND_ICONS = BEYOND_ICONS;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./beyond-icon-button",
        "from": "BeyondIconButton",
        "name": "BeyondIconButton"
      }, {
        "im": "./icon",
        "from": "BeyondIcon",
        "name": "BeyondIcon"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondIconButton') && _export("BeyondIconButton", BeyondIconButton = require ? require('./beyond-icon-button').BeyondIconButton : value);
        (require || prop === 'BeyondIcon') && _export("BeyondIcon", BeyondIcon = require ? require('./icon').BeyondIcon : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7Ozs7O1dBS1Y7VUFBQ3ZCIiwibmFtZXMiOlsiQmV5b25kSWNvbkJ1dHRvbiIsInByb3BzIiwicmVmQnV0dG9uIiwiUmVhY3QiLCJ1c2VSZWYiLCJpY29uIiwib25DbGljayIsInZpZXdCb3giLCJkaXNhYmxlZCIsIm5hbWUiLCJ2YWx1ZSIsImlkIiwidGl0bGUiLCJjaGlsZHJlbiIsInVzZUVmZmVjdCIsInRpcHB5IiwiY3VycmVudCIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsIml0ZW0iLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwibmF2aWdhdGUiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY2xhc3NOYW1lIiwidHlwZSIsImljb25zIiwiaWNvbkF0dHJpYnV0ZXMiLCJhdHRycyIsIk9iamVjdCIsImFzc2lnbiIsInJlZiIsIkJleW9uZEljb24iLCJleHBvcnRzIiwibmV3SXRlbXMiLCJpY29uc0xpc3QiLCJCRVlPTkRfSUNPTlMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3BlcnRpZXMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFueSIsImNsb3NlIiwidXNlciIsImJveCIsImJyYW5kIiwiaG9tZSIsImxpc3QiLCJzaGFyZSIsImZhdm9yaXRlIiwic2F2ZSIsImNoZXZyb25SaWdodCIsImNoZWNrIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9iZXlvbmQtaWNvbi1idXR0b24udHN4IiwidHMvaWNvbi50c3giLCJ0cy9pY29ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=
define(["exports", "module", "@beyond-js/kernel/bundle", "react@17.0.2", "@beyond-js/kernel/routing", "prop-types@15.8.1", "@beyond-js/kernel/styles"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.BeyondIconButton = _exports.BeyondIcon = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/ui/icons",
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_1], ["prop-types", dependency_3]]));
  brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui/icons');
  const ims = new Map();
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
          if (!tippy) tippy = {}; //     this.tippy = await beyond.require('tippy');

          if (!refButton?.current) return; //     this.tippy(this._button.current, tippy);
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
        }, React.createElement(_icon.BeyondIcon, { ...iconAttributes
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
          if (!props.title) return; //     this.tippy = await beyond.require('tippy');
          //     if (!this.icon?.current) return;
          //     this.tippy(this.icon.current);
        }, []);
        let {
          icon,
          className
        } = props;
        const iconsList = { ..._icons.BEYOND_ICONS,
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

        const properties = Object.assign({ ...props
        }, {
          viewBox: props.viewBox ? props.viewBox : viewBox,
          className: !className ? 'beyond-icon' : `beyond-icon ${className}`
        });
        props.title ? properties['data-tippy-content'] = props.title : null;
        delete properties.icon;
        props['data-item'] ? properties['data-item'] = props['data-item'] : null;
        return React.createElement("svg", { ...properties
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
    hash: 3984459820,
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
  let BeyondIconButton, BeyondIcon; // Module exports

  _exports.BeyondIcon = BeyondIcon;
  _exports.BeyondIconButton = BeyondIconButton;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'BeyondIconButton') && (_exports.BeyondIconButton = BeyondIconButton = require ? require('./beyond-icon-button').BeyondIconButton : value);
    (require || prop === 'BeyondIcon') && (_exports.BeyondIcon = BeyondIcon = require ? require('./icon').BeyondIcon : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O2lCQXBDeUI7UUF5Q2hDQyxRQUFRLEVBQUU7OztxQkF6Q3NCO1FBNkNoQ0MsSUFBSSxFQUFFLG1MQTdDMEI7UUE4Q2hDQyxZQUFZLEVBQUU7OztNQTlDa0IsQ0FBN0IiLCJuYW1lcyI6WyJCZXlvbmRJY29uQnV0dG9uIiwicHJvcHMiLCJyZWZCdXR0b24iLCJSZWFjdCIsInVzZVJlZiIsImljb24iLCJvbkNsaWNrIiwidmlld0JveCIsImRpc2FibGVkIiwibmFtZSIsInZhbHVlIiwiaWQiLCJ0aXRsZSIsImNoaWxkcmVuIiwidXNlRWZmZWN0IiwidGlwcHkiLCJjdXJyZW50Iiwib25DbGlja0J1dHRvbiIsImV2ZW50IiwiaXRlbSIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJuYXZpZ2F0ZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJjbGFzc05hbWUiLCJ0eXBlIiwiaWNvbnMiLCJpY29uQXR0cmlidXRlcyIsImF0dHJzIiwiT2JqZWN0IiwiYXNzaWduIiwicmVmIiwiQmV5b25kSWNvbiIsIm5ld0l0ZW1zIiwiaWNvbnNMaXN0IiwiQkVZT05EX0lDT05TIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJwcm9wZXJ0aWVzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJjbG9zZSIsInVzZXIiLCJib3giLCJicmFuZCIsImhvbWUiLCJsaXN0Iiwic2hhcmUiLCJmYXZvcml0ZSIsInNhdmUiLCJjaGV2cm9uUmlnaHQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImItdWkvbW9kdWxlcy9pY29ucy90cy9iZXlvbmQtaWNvbi1idXR0b24udHN4IiwiYi11aS9tb2R1bGVzL2ljb25zL3RzL2ljb24udHN4IiwiYi11aS9tb2R1bGVzL2ljb25zL3RzL2ljb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdfQ==
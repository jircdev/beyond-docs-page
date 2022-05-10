define(["exports", "react", "@beyond-js/kernel/routing/ts", "prop-types", "@beyond-js/kernel/core/ts"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.BeyondIconButton = _exports2.BeyondIcon = void 0;
  const dependencies = new Map();
  dependencies.set('react', dependency_0);
  dependencies.set('@beyond-js/kernel/routing/ts', dependency_1);
  dependencies.set('prop-types', dependency_2);
  dependencies.set('@beyond-js/kernel/core/ts', dependency_3);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond/ui/icons/code', false, {}, dependencies);

  const __pkg = bundle.package();

  bundle.styles.mode = 'external';
  const modules = new Map();
  /************************************
  INTERNAL MODULE: ./beyond-icon-button
  ************************************/

  modules.set('./beyond-icon-button', {
    hash: 3151666248,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BeyondIconButton = void 0;

      var React = require("react");

      var _ts = require("@beyond-js/kernel/routing/ts");

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
            _ts.routing.pushState(props.navigate);
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

  modules.set('./icon', {
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

  modules.set('./icons', {
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
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.BeyondIconButton = require('./beyond-icon-button').BeyondIconButton;
    _exports.BeyondIcon = require('./icon').BeyondIcon;
  };

  let BeyondIconButton, BeyondIcon; // Module exports

  _exports2.BeyondIcon = BeyondIcon;
  _exports2.BeyondIconButton = BeyondIconButton;

  __pkg.exports.process = function (require) {
    _exports2.BeyondIconButton = BeyondIconButton = require('./beyond-icon-button').BeyondIconButton;
    _exports2.BeyondIcon = BeyondIcon = require('./icon').BeyondIcon;
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});
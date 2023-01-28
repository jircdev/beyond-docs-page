System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.7/routing", "@beyond/ui@1.0.0/icons", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, BeyondButton, BeyondCheckbox, BeyondInput, BeyondSwitch, BeyondTextarea, __beyond_pkg, hmr;
  _export({
    BeyondButton: void 0,
    BeyondCheckbox: void 0,
    BeyondInput: void 0,
    BeyondSwitch: void 0,
    BeyondTextarea: void 0
  });
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondJsKernel017Routing) {
      dependency_2 = _beyondJsKernel017Routing;
    }, function (_beyondUi100Icons) {
      dependency_3 = _beyondUi100Icons;
    }, function (_beyondJsKernel017Styles) {
      dependency_4 = _beyondJsKernel017Styles;
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
          "vspecifier": "@beyond/ui@1.0.0/form"
        },
        "type": "code",
        "name": "form"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['@beyond/ui/icons', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/form');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./button
      ************************/
      ims.set('./button', {
        hash: 3681281376,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondButton = BeyondButton;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("@beyond/ui/icons");
          /*bundle*/
          function BeyondButton(props) {
            const {
              className,
              onClick,
              data,
              label,
              children,
              icon
            } = props;
            const onClickButton = event => {
              if (onClick && typeof onClick === "function") {
                onClick(event);
                return;
              }
              if (props.navigate) _routing.routing.pushState(`${props.navigate}`);
            };
            props.title ? props["data-tippy-content"] = props.title : null;
            const ref = React.useRef(null);
            const properties = {
              ...props,
              className: !!className ? `${className} beyond-button` : "beyond-button",
              type: !!props.type ? props.type : "button"
            };
            if (data) {
              let properties = Object.keys(data);
              properties.map(entry => props[`data-${entry}`] = data[entry]);
            }
            delete properties.label;
            delete properties.icon;
            delete properties.children;
            return React.createElement("button", {
              ref: ref,
              className: className,
              ...properties,
              onClick: onClickButton
            }, icon && React.createElement(_icons.BeyondIcon, {
              icon: icon
            }), label, children);
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./checkbox
      **************************/

      ims.set('./checkbox', {
        hash: 3292073726,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondCheckbox = void 0;
          var React = require("react");
          /*bundle*/
          const BeyondCheckbox = (0, React.forwardRef)((props, ref) => {
            const {
              checked,
              name,
              disabled,
              className,
              onChange,
              label
            } = props;
            const [state, setState] = (0, React.useState)({
              checked: !!checked
            });
            const handleChange = event => {
              setState({
                checked: !checked
              });
              onChange && onChange(event);
            };
            let cls = `beyond-checkbox ${className ? className : ''}`;
            cls += disabled ? ' disabled' : '';
            const properties = Object.assign({}, props);
            delete properties.className;
            delete properties.checked;
            delete properties.name;
            delete properties.onChange;
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: cls
            }, React.createElement("input", {
              style: {
                display: 'none'
              },
              ref: ref,
              type: "checkbox",
              className: "inp-cbx",
              id: name,
              name: name,
              checked: checked ?? state.checked,
              onChange: handleChange,
              ...properties
            }), React.createElement("label", {
              className: "cbx",
              htmlFor: name
            }, React.createElement("span", null, React.createElement("svg", {
              width: "12px",
              height: "9px",
              viewBox: "0 0 12 9"
            }, React.createElement("polyline", {
              points: "1 5 4 8 11 1"
            }))), React.createElement("span", null, label))));
          });
          exports.BeyondCheckbox = BeyondCheckbox;
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 476458507,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondInput = BeyondInput;
          var React = require("react");
          var _icons = require("@beyond/ui/icons");
          /*bundle*/
          function BeyondInput(props) {
            const input = props.ref ?? (0, React.useRef)();
            const [state, setState] = (0, React.useState)({
              value: props.value ?? "",
              errorMessage: props.errorMessage ? props.errorMessage : "Formato incorrecto",
              lengthMessage: "Cantidad máxima: ",
              emptyMessage: "Este campo es requerido",
              type: props.type ?? "text"
            });
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === "function") props.onChange(event);
              setState({
                ...state,
                _hasError: false,
                value: event.target.value
              });
            };
            const getError = hasError => {
              if (!state._hasError && !hasError) return;
              let errorMessage = state.emptyMessage;
              if (hasError || input.value !== "") errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;
              if (props.max && parseFloat(input.value) > parseInt(props.max)) {
                errorMessage = props.lengthMessage ? props.lengthMessage : state.lengthMessage + ` (max ${props.max})`;
              }
              return React.createElement("span", {
                className: "beyond-element-input-error"
              }, errorMessage);
            };
            const changeType = event => {
              event.stopPropagation();
              const target = event.currentTarget;
              setState({
                ...state,
                type: target.dataset.type
              });
            };
            const error = getError(props.hasError);
            let properties = {
              ...props
            };
            let cls = props.className ? `${props.className} beyond-element-input` : "beyond-element-input";
            cls += props.icon ? " has-icon" : "";
            cls += props.disabled ? " disabled" : "";
            cls += props.hasError ? " error" : "";
            delete properties.className;
            delete properties.hasError;
            delete properties.errorMessage;
            delete properties.children;
            delete properties.icon;
            delete properties.label;
            delete properties.password;
            return React.createElement("div", {
              className: cls
            }, React.createElement(React.Fragment, null, React.createElement("input", {
              ref: input,
              ...properties,
              name: props.name,
              onChange: handleChange,
              type: state.type,
              value: typeof props.value !== "undefined" ? props.value : state.value,
              placeholder: props.placeholder ?? " "
            }), props.children, props.icon && React.createElement(_icons.BeyondIcon, {
              icon: props.icon
            }), error, props.label && React.createElement("label", {
              htmlFor: props.id
            }, props.label), props.password && (state.type === "password" ? React.createElement(_icons.BeyondIconButton, {
              onClick: changeType,
              "data-type": "text",
              className: "eye",
              icon: "eye"
            }) : React.createElement(_icons.BeyondIconButton, {
              onClick: changeType,
              className: "eye",
              "data-type": "password",
              icon: "eye-slash"
            })), props.required && React.createElement("span", {
              className: "beyond-input__required-label"
            }, "(*)")));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./switch
      ************************/

      ims.set('./switch', {
        hash: 2883765868,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondSwitch = void 0;
          var React = require("react");
          /*bundle*/
          const BeyondSwitch = (0, React.forwardRef)((props, ref) => {
            const {
              value,
              checked,
              required,
              name,
              disabled,
              className,
              onChange,
              onClick
            } = props;
            const [state, setState] = (0, React.useState)({
              checked: !!checked
            });
            const handleChange = event => {
              setState({
                checked: !checked
              });
              onChange && onChange(event);
            };
            const handleClick = event => {
              onClick && onClick(event);
            };
            let cls = `beyond-element-switch ${className ? className : ''}`;
            cls += disabled ? ' disabled' : '';
            const properties = Object.assign({}, props);
            delete properties.className;
            delete properties.disabled;
            delete properties.checked;
            delete properties.name;
            delete properties.required;
            delete properties.onChange;
            delete properties.onClick;
            delete properties.value;
            return React.createElement("div", {
              className: cls,
              onClick: handleClick,
              ...properties
            }, React.createElement("label", {
              className: "switch"
            }, React.createElement("input", {
              ref: ref,
              type: "checkbox",
              required: required,
              name: name,
              value: value,
              checked: checked ?? state.checked,
              disabled: disabled,
              onChange: handleChange
            }), React.createElement("span", {
              className: "slider"
            })));
          });
          exports.BeyondSwitch = BeyondSwitch;
        }
      });

      /**************************
      INTERNAL MODULE: ./textarea
      **************************/

      ims.set('./textarea', {
        hash: 2589372959,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondTextarea = BeyondTextarea;
          var React = require("react");
          /*bundle*/
          function BeyondTextarea(props) {
            const input = props.ref ?? (0, React.useRef)();
            const [state, setState] = (0, React.useState)({
              value: props.value ?? '',
              errorMessage: props.errorMessage ? props.errorMessage : 'Formato incorrecto',
              lengthMessage: 'Cantidad máxima: ',
              emptyMessage: 'Este campo es requerido'
            });
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
              setState({
                ...state,
                _hasError: false,
                value: event.target.value
              });
            };
            const getError = hasError => {
              if (!state._hasError && !hasError) return;
              let errorMessage = state.emptyMessage;
              if (hasError || input.value !== '') errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;
              if (props.max && parseFloat(input.value) > parseInt(props.max)) {
                errorMessage = props.lengthMessage ? props.lengthMessage : state.lengthMessage + ` (max ${props.max})`;
              }
              return React.createElement("span", {
                className: "beyond-element-input-error"
              }, errorMessage);
            };
            const error = getError(props.hasError);
            let properties = {
              ...props
            };
            let cls = props.className ? `${props.className} beyond-element-textarea` : 'beyond-element-textarea';
            cls += props.disabled ? ' disabled' : '';
            cls += props.hasError ? ' error' : '';
            delete properties.className;
            delete properties.hasError;
            delete properties.errorMessage;
            delete properties.children;
            delete properties.label;
            return React.createElement("div", {
              className: cls
            }, React.createElement(React.Fragment, null, React.createElement("textarea", {
              ref: input,
              ...properties,
              name: props.name,
              onChange: handleChange,
              value: typeof props.value !== 'undefined' ? props.value : state.value,
              placeholder: props.placeholder ?? ' '
            }), props.children, error, props.label && React.createElement("label", {
              htmlFor: props.id
            }, props.label), props.required && React.createElement("span", {
              className: "beyond-input__required-label"
            }, "(*)")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./button",
        "from": "BeyondButton",
        "name": "BeyondButton"
      }, {
        "im": "./checkbox",
        "from": "BeyondCheckbox",
        "name": "BeyondCheckbox"
      }, {
        "im": "./input",
        "from": "BeyondInput",
        "name": "BeyondInput"
      }, {
        "im": "./switch",
        "from": "BeyondSwitch",
        "name": "BeyondSwitch"
      }, {
        "im": "./textarea",
        "from": "BeyondTextarea",
        "name": "BeyondTextarea"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondButton') && _export("BeyondButton", BeyondButton = require ? require('./button').BeyondButton : value);
        (require || prop === 'BeyondCheckbox') && _export("BeyondCheckbox", BeyondCheckbox = require ? require('./checkbox').BeyondCheckbox : value);
        (require || prop === 'BeyondInput') && _export("BeyondInput", BeyondInput = require ? require('./input').BeyondInput : value);
        (require || prop === 'BeyondSwitch') && _export("BeyondSwitch", BeyondSwitch = require ? require('./switch').BeyondSwitch : value);
        (require || prop === 'BeyondTextarea') && _export("BeyondTextarea", BeyondTextarea = require ? require('./textarea').BeyondTextarea : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJL0IsS0FBSyxDQUFDbUQsUUFBUSxHQUFHLFFBQVEsR0FBRyxFQUFFO1lBRXJDLE9BQU9uQyxVQUFVLENBQUNmLFNBQVM7WUFDM0IsT0FBT2UsVUFBVSxDQUFDbUMsUUFBUTtZQUMxQixPQUFPbkMsVUFBVSxDQUFDNkIsWUFBWTtZQUM5QixPQUFPN0IsVUFBVSxDQUFDWCxRQUFRO1lBQzFCLE9BQU9XLFVBQVUsQ0FBQ1osS0FBSztZQUV2QixPQUNDVTtjQUFLYixTQUFTLEVBQUU4QjtZQUFHLEdBQ2xCakIsMENBQ0NBO2NBQVVELEdBQUcsRUFBRThCLEtBQUs7Y0FBQSxHQUFNM0IsVUFBVTtjQUFFUyxJQUFJLEVBQUV6QixLQUFLLENBQUN5QixJQUFJO2NBQUVFLFFBQVEsRUFBRUcsWUFBWTtjQUFFYyxLQUFLLEVBQUUsT0FBTzVDLEtBQUssQ0FBQzRDLEtBQUssS0FBSyxXQUFXLEdBQUc1QyxLQUFLLENBQUM0QyxLQUFLLEdBQUdoQixLQUFLLENBQUNnQixLQUFLO2NBQUVpQixXQUFXLEVBQUU3RCxLQUFLLENBQUM2RCxXQUFXLElBQUk7WUFBRyxFQUFJLEVBQy9MN0QsS0FBSyxDQUFDSyxRQUFRLEVBQ2RzRCxLQUFLLEVBQ0wzRCxLQUFLLENBQUNJLEtBQUssSUFBSVU7Y0FBT3NCLE9BQU8sRUFBRXBDLEtBQUssQ0FBQ21DO1lBQUUsR0FBR25DLEtBQUssQ0FBQ0ksS0FBSyxDQUFTLEVBQzlESixLQUFLLENBQUMrRCxRQUFRLElBQUlqRDtjQUFNYixTQUFTLEVBQUM7WUFBOEIsU0FBVyxDQUMxRSxDQUNFO1VBRVIiLCJuYW1lcyI6WyJCZXlvbmRCdXR0b24iLCJwcm9wcyIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJkYXRhIiwibGFiZWwiLCJjaGlsZHJlbiIsImljb24iLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJuYXZpZ2F0ZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJ0aXRsZSIsInJlZiIsIlJlYWN0IiwidXNlUmVmIiwicHJvcGVydGllcyIsInR5cGUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiZW50cnkiLCJCZXlvbmRJY29uIiwiQmV5b25kQ2hlY2tib3giLCJjaGVja2VkIiwibmFtZSIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiY2xzIiwiYXNzaWduIiwic3R5bGUiLCJkaXNwbGF5IiwiaWQiLCJodG1sRm9yIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwicG9pbnRzIiwiZXhwb3J0cyIsIkJleW9uZElucHV0IiwiaW5wdXQiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxlbmd0aE1lc3NhZ2UiLCJlbXB0eU1lc3NhZ2UiLCJfaGFzRXJyb3IiLCJ0YXJnZXQiLCJnZXRFcnJvciIsImhhc0Vycm9yIiwibWF4IiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiY2hhbmdlVHlwZSIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZXJyb3IiLCJwYXNzd29yZCIsInBsYWNlaG9sZGVyIiwiQmV5b25kSWNvbkJ1dHRvbiIsInJlcXVpcmVkIiwiQmV5b25kU3dpdGNoIiwiaGFuZGxlQ2xpY2siLCJCZXlvbmRUZXh0YXJlYSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9idXR0b24udHN4IiwiY29kZS90cy9jaGVja2JveC50c3giLCJjb2RlL3RzL2lucHV0LnRzeCIsImNvZGUvdHMvc3dpdGNoLnRzeCIsImNvZGUvdHMvdGV4dGFyZWEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=
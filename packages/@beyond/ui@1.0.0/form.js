System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.7/routing", "@beyond/ui@1.0.0/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, BeyondButton, BeyondCheckbox, BeyondInput, BeyondSwitch, BeyondTextarea, __beyond_pkg, hmr;
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
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['@beyond/ui/icons', dependency_3]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SS9CLEtBQUssQ0FBQ21ELFFBQVEsR0FBRyxRQUFRLEdBQUcsRUFBRTtZQUVyQyxPQUFPbkMsVUFBVSxDQUFDZixTQUFTO1lBQzNCLE9BQU9lLFVBQVUsQ0FBQ21DLFFBQVE7WUFDMUIsT0FBT25DLFVBQVUsQ0FBQzZCLFlBQVk7WUFDOUIsT0FBTzdCLFVBQVUsQ0FBQ1gsUUFBUTtZQUMxQixPQUFPVyxVQUFVLENBQUNaLEtBQUs7WUFFdkIsT0FDQ1U7Y0FBS2IsU0FBUyxFQUFFOEI7WUFBRyxHQUNsQmpCLDBDQUNDQTtjQUFVRCxHQUFHLEVBQUU4QixLQUFLO2NBQUEsR0FBTTNCLFVBQVU7Y0FBRVMsSUFBSSxFQUFFekIsS0FBSyxDQUFDeUIsSUFBSTtjQUFFRSxRQUFRLEVBQUVHLFlBQVk7Y0FBRWMsS0FBSyxFQUFFLE9BQU81QyxLQUFLLENBQUM0QyxLQUFLLEtBQUssV0FBVyxHQUFHNUMsS0FBSyxDQUFDNEMsS0FBSyxHQUFHaEIsS0FBSyxDQUFDZ0IsS0FBSztjQUFFaUIsV0FBVyxFQUFFN0QsS0FBSyxDQUFDNkQsV0FBVyxJQUFJO1lBQUcsRUFBSSxFQUMvTDdELEtBQUssQ0FBQ0ssUUFBUSxFQUNkc0QsS0FBSyxFQUNMM0QsS0FBSyxDQUFDSSxLQUFLLElBQUlVO2NBQU9zQixPQUFPLEVBQUVwQyxLQUFLLENBQUNtQztZQUFFLEdBQUduQyxLQUFLLENBQUNJLEtBQUssQ0FBUyxFQUM5REosS0FBSyxDQUFDK0QsUUFBUSxJQUFJakQ7Y0FBTWIsU0FBUyxFQUFDO1lBQThCLFNBQVcsQ0FDMUUsQ0FDRTtVQUVSIiwibmFtZXMiOlsiQmV5b25kQnV0dG9uIiwicHJvcHMiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZGF0YSIsImxhYmVsIiwiY2hpbGRyZW4iLCJpY29uIiwib25DbGlja0J1dHRvbiIsImV2ZW50IiwibmF2aWdhdGUiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwidGl0bGUiLCJyZWYiLCJSZWFjdCIsInVzZVJlZiIsInByb3BlcnRpZXMiLCJ0eXBlIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImVudHJ5IiwiQmV5b25kSWNvbiIsIkJleW9uZENoZWNrYm94IiwiY2hlY2tlZCIsIm5hbWUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImNscyIsImFzc2lnbiIsInN0eWxlIiwiZGlzcGxheSIsImlkIiwiaHRtbEZvciIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsInBvaW50cyIsImV4cG9ydHMiLCJCZXlvbmRJbnB1dCIsImlucHV0IiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJsZW5ndGhNZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiX2hhc0Vycm9yIiwidGFyZ2V0IiwiZ2V0RXJyb3IiLCJoYXNFcnJvciIsIm1heCIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsImNoYW5nZVR5cGUiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImVycm9yIiwicGFzc3dvcmQiLCJwbGFjZWhvbGRlciIsIkJleW9uZEljb25CdXR0b24iLCJyZXF1aXJlZCIsIkJleW9uZFN3aXRjaCIsImhhbmRsZUNsaWNrIiwiQmV5b25kVGV4dGFyZWEiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvYnV0dG9uLnRzeCIsImNvZGUvdHMvY2hlY2tib3gudHN4IiwiY29kZS90cy9pbnB1dC50c3giLCJjb2RlL3RzL3N3aXRjaC50c3giLCJjb2RlL3RzL3RleHRhcmVhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF19
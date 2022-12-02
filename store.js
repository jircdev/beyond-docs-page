System.register(["@beyond-js/kernel@0.1.0/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.0/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Control, useBinder, useModel, DocsContext, useDocsContext, useTexts, __beyond_pkg, hmr;
  _export({
    Control: void 0,
    useBinder: void 0,
    useModel: void 0,
    DocsContext: void 0,
    useDocsContext: void 0,
    useTexts: void 0
  });
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondJsKernel010Texts) {
      dependency_2 = _beyondJsKernel010Texts;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["animatewithsass", "3.2.1"], ["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["@cloudinary/url-gen", "1.8.6"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["dayjs", "1.11.6"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.25.5"], ["slate-react", "0.72.9"], ["svelte", "3.52.0"], ["swiper", "8.4.4"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.43"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/store"
        },
        "type": "code",
        "name": "store"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/texts', dependency_2]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 1583137179,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Control = void 0;
          /*bundle*/
          class Control {
            constructor() {}
          }
          exports.Control = Control;
        }
      });

      /****************************
      INTERNAL MODULE: ./use-binder
      ****************************/

      ims.set('./use-binder', {
        hash: 1517189814,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBinder = useBinder;
          var React = require("react");
          /*bundle*/ /***
                      * Executes a useEffect hook binging the event defined in all
                      * objects passed
                      *
                      * @param {array} objects Objects to bind
                      * @param {function} onBinder function to be executed when the event is fired
                      * @param {string} event the event to be listened, by default is event change
                      */
          function useBinder(objects, onBinder, event = 'change') {
            React.useEffect(() => {
              objects.forEach(object => {
                if (object && object.bind) object.bind(event, onBinder);
                if (object && object.on) object.on(event, onBinder);
              });
              return () => objects.forEach(object => {
                if (object && object.unbind) object.unbind(event, onBinder);
                if (object && object.off) object.off(event, onBinder);
              });
            }, [objects]);
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./use-model
      ***************************/

      ims.set('./use-model', {
        hash: 3232899855,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModel = useModel;
          var React = require("react");
          /*bundle*/
          function useModel({
            model,
            props,
            onChange
          }) {
            const [controller, setModel] = React.useState();
            const onLoad = () => {
              const instance = new model(props);
              const onChangeMethod = () => {
                if (onChange) onChange(controller);
              };
              if (onChange) {
                instance.bind('change', onChangeMethod);
              }
              setModel(instance);
              return () => instance.unbind('change', onChangeMethod);
            };
            React.useEffect(onLoad, []);
            return [controller];
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./use-texts
      ***************************/

      ims.set('./use-texts', {
        hash: 1551085558,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDocsContext = exports.DocsContext = void 0;
          exports.useTexts = useTexts;
          var React = require("react");
          var _texts = require("@beyond-js/kernel/texts");
          const value = {};
          /*bundle*/
          const DocsContext = React.createContext(value);
          exports.DocsContext = DocsContext;
          /*bundle*/
          const useDocsContext = () => React.useContext(DocsContext);
          exports.useDocsContext = useDocsContext;
          /*bundle*/
          function useTexts(specifier) {
            const [ready, setReady] = React.useState(false);
            const [texts, setTexts] = React.useState({});
            React.useEffect(() => {
              // console.trace(1,specifier)
              const modelTexts = new _texts.CurrentTexts(specifier, true);
              const triggerEvent = () => {
                setReady(modelTexts.ready);
                setTexts(modelTexts.value);
              };
              modelTexts.bind('change', triggerEvent);
              triggerEvent();
              return () => {
                modelTexts.unbind('change', triggerEvent);
              };
            }, []);
            const isReady = ready && !!texts;
            return [isReady, texts];
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "Control",
        "name": "Control"
      }, {
        "im": "./use-binder",
        "from": "useBinder",
        "name": "useBinder"
      }, {
        "im": "./use-model",
        "from": "useModel",
        "name": "useModel"
      }, {
        "im": "./use-texts",
        "from": "DocsContext",
        "name": "DocsContext"
      }, {
        "im": "./use-texts",
        "from": "useDocsContext",
        "name": "useDocsContext"
      }, {
        "im": "./use-texts",
        "from": "useTexts",
        "name": "useTexts"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Control') && _export("Control", Control = require ? require('./control').Control : value);
        (require || prop === 'useBinder') && _export("useBinder", useBinder = require ? require('./use-binder').useBinder : value);
        (require || prop === 'useModel') && _export("useModel", useModel = require ? require('./use-model').useModel : value);
        (require || prop === 'DocsContext') && _export("DocsContext", DocsContext = require ? require('./use-texts').DocsContext : value);
        (require || prop === 'useDocsContext') && _export("useDocsContext", useDocsContext = require ? require('./use-texts').useDocsContext : value);
        (require || prop === 'useTexts') && _export("useTexts", useTexts = require ? require('./use-texts').useTexts : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBTztVQUFVLE1BQ1hBLE9BQU87WUFFVEMsZUFFQTs7VUFFSEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEQ7VUFVTyxXQVJQOzs7Ozs7OztVQVFpQixTQUFVQyxTQUFTLENBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEdBQUcsUUFBUTtZQUNwRUMsS0FBSyxDQUFDQyxTQUFTLENBQUMsTUFBSztjQUNqQkosT0FBTyxDQUFDSyxPQUFPLENBQUNDLE1BQU0sSUFBRztnQkFDckIsSUFBSUEsTUFBTSxJQUFJQSxNQUFNLENBQUNDLElBQUksRUFBRUQsTUFBTSxDQUFDQyxJQUFJLENBQUNMLEtBQUssRUFBRUQsUUFBUSxDQUFDO2dCQUN2RCxJQUFJSyxNQUFNLElBQUlBLE1BQU0sQ0FBQ0UsRUFBRSxFQUFFRixNQUFNLENBQUNFLEVBQUUsQ0FBQ04sS0FBSyxFQUFFRCxRQUFRLENBQUM7Y0FDdkQsQ0FBQyxDQUFDO2NBQ0YsT0FBTyxNQUFNRCxPQUFPLENBQUNLLE9BQU8sQ0FBQ0MsTUFBTSxJQUFHO2dCQUNsQyxJQUFJQSxNQUFNLElBQUlBLE1BQU0sQ0FBQ0csTUFBTSxFQUFFSCxNQUFNLENBQUNHLE1BQU0sQ0FBQ1AsS0FBSyxFQUFFRCxRQUFRLENBQUM7Z0JBQzNELElBQUlLLE1BQU0sSUFBSUEsTUFBTSxDQUFDSSxHQUFHLEVBQUVKLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDUixLQUFLLEVBQUVELFFBQVEsQ0FBQztjQUN6RCxDQUFDLENBQUM7WUFDTixDQUFDLEVBQUUsQ0FBQ0QsT0FBTyxDQUFDLENBQUM7VUFDakI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBO1VBRU87VUFBVSxTQUNSVyxRQUFRLENBQUM7WUFBQ0MsS0FBSztZQUFFQyxLQUFLO1lBQUVDO1VBQVEsQ0FBQztZQUV0QyxNQUFNLENBQUNDLFVBQVUsRUFBRUMsUUFBUSxDQUFDLEdBQUdiLEtBQUssQ0FBQ2MsUUFBUSxFQUFFO1lBQy9DLE1BQU1DLE1BQU0sR0FBRyxNQUFLO2NBQ2hCLE1BQU1DLFFBQVEsR0FBRyxJQUFJUCxLQUFLLENBQUNDLEtBQUssQ0FBQztjQUNqQyxNQUFNTyxjQUFjLEdBQUcsTUFBSztnQkFDeEIsSUFBSU4sUUFBUSxFQUFFQSxRQUFRLENBQUNDLFVBQVUsQ0FBQztjQUN0QyxDQUFDO2NBQ0QsSUFBSUQsUUFBUSxFQUFFO2dCQUNWSyxRQUFRLENBQUNaLElBQUksQ0FBQyxRQUFRLEVBQUVhLGNBQWMsQ0FBQzs7Y0FFM0NKLFFBQVEsQ0FBQ0csUUFBUSxDQUFDO2NBQ2xCLE9BQU8sTUFBTUEsUUFBUSxDQUFDVixNQUFNLENBQUMsUUFBUSxFQUFFVyxjQUFjLENBQUM7WUFFMUQsQ0FBQztZQUNEakIsS0FBSyxDQUFDQyxTQUFTLENBQUNjLE1BQU0sRUFBRSxFQUFFLENBQUM7WUFFM0IsT0FBTyxDQUFDSCxVQUFVLENBQUM7VUFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQTtVQUNBO1VBT0EsTUFBTU0sS0FBSyxHQUFlLEVBQUU7VUFDckI7VUFBVyxNQUFNQyxXQUFXLEdBQUduQixLQUFLLENBQUNvQixhQUFhLENBQWFGLEtBQUssQ0FBQztVQUFDdkI7VUFDdEU7VUFBVyxNQUFNMEIsY0FBYyxHQUFHLE1BQU1yQixLQUFLLENBQUNzQixVQUFVLENBQUNILFdBQVcsQ0FBQztVQUFDeEI7VUFFdEU7VUFBVSxTQUFTNEIsUUFBUSxDQUFDQyxTQUFTO1lBQ3hDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRzFCLEtBQUssQ0FBQ2MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUNhLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUc1QixLQUFLLENBQUNjLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUNkLEtBQUssQ0FBQ0MsU0FBUyxDQUFDLE1BQUs7Y0FDakI7Y0FDQSxNQUFNNEIsVUFBVSxHQUFHLElBQUlDLG1CQUFZLENBQUNOLFNBQVMsRUFBRSxJQUFJLENBQUM7Y0FDcEQsTUFBTU8sWUFBWSxHQUFHLE1BQUs7Z0JBQ3RCTCxRQUFRLENBQUNHLFVBQVUsQ0FBQ0osS0FBSyxDQUFDO2dCQUMxQkcsUUFBUSxDQUFDQyxVQUFVLENBQUNYLEtBQUssQ0FBQztjQUM5QixDQUFDO2NBQ0RXLFVBQVUsQ0FBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUyQixZQUFZLENBQUM7Y0FDdkNBLFlBQVksRUFBRTtjQUNkLE9BQU8sTUFBSztnQkFDUkYsVUFBVSxDQUFDdkIsTUFBTSxDQUFDLFFBQVEsRUFBRXlCLFlBQVksQ0FBQztjQUM3QyxDQUFDO1lBRUwsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNOLE1BQU1DLE9BQU8sR0FBR1AsS0FBSyxJQUFJLENBQUMsQ0FBQ0UsS0FBSztZQUNoQyxPQUFPLENBQUNLLE9BQU8sRUFBRUwsS0FBSyxDQUFDO1VBQzNCIiwibmFtZXMiOlsiQ29udHJvbCIsImNvbnN0cnVjdG9yIiwiZXhwb3J0cyIsInVzZUJpbmRlciIsIm9iamVjdHMiLCJvbkJpbmRlciIsImV2ZW50IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJmb3JFYWNoIiwib2JqZWN0IiwiYmluZCIsIm9uIiwidW5iaW5kIiwib2ZmIiwidXNlTW9kZWwiLCJtb2RlbCIsInByb3BzIiwib25DaGFuZ2UiLCJjb250cm9sbGVyIiwic2V0TW9kZWwiLCJ1c2VTdGF0ZSIsIm9uTG9hZCIsImluc3RhbmNlIiwib25DaGFuZ2VNZXRob2QiLCJ2YWx1ZSIsIkRvY3NDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZURvY3NDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwicmVhZHkiLCJzZXRSZWFkeSIsInRleHRzIiwic2V0VGV4dHMiLCJtb2RlbFRleHRzIiwiQ3VycmVudFRleHRzIiwidHJpZ2dlckV2ZW50IiwiaXNSZWFkeSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL3N0b3JlL2NvZGUvdHMvY29udHJvbC50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9zdG9yZS9jb2RlL3RzL3VzZS1iaW5kZXIudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvc3RvcmUvY29kZS90cy91c2UtbW9kZWwudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvc3RvcmUvY29kZS90cy91c2UtdGV4dHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19
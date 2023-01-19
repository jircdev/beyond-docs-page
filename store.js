System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.7/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, useBinder, useModel, useTexts, __beyond_pkg, hmr;
  _export({
    useBinder: void 0,
    useModel: void 0,
    useTexts: void 0
  });
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondJsKernel017Texts) {
      dependency_2 = _beyondJsKernel017Texts;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
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
        hash: 2194945198,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTexts = useTexts;
          var React = require("react");
          var _texts = require("@beyond-js/kernel/texts");
          /*bundle*/
          function useTexts(specifier, key) {
            const [ready, setReady] = React.useState(false);
            const [texts, setTexts] = React.useState({});
            React.useEffect(() => {
              // console.trace(1,specifier)
              const modelTexts = new _texts.CurrentTexts(specifier, true);
              const triggerEvent = () => {
                let value = modelTexts.value;
                if (modelTexts.ready && key) {
                  if (!value.hasOwnProperty(key)) {
                    console.warn(`the key specified for texts was not found. Key passed: ${key}, module specifier: ${specifier}`);
                  }
                  value = modelTexts.value[key];
                }
                setTexts(value);
                setReady(modelTexts.ready);
              };
              modelTexts.bind("change", triggerEvent);
              triggerEvent();
              return () => {
                modelTexts.unbind("change", triggerEvent);
              };
            }, []);
            const isReady = ready && !!texts;
            return [isReady, texts];
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./use-binder",
        "from": "useBinder",
        "name": "useBinder"
      }, {
        "im": "./use-model",
        "from": "useModel",
        "name": "useModel"
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
        (require || prop === 'useBinder') && _export("useBinder", useBinder = require ? require('./use-binder').useBinder : value);
        (require || prop === 'useModel') && _export("useModel", useModel = require ? require('./use-model').useModel : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQVVPLFdBUlA7Ozs7Ozs7O1VBUWlCLFNBQVVBLFNBQVMsQ0FBQ0MsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLEtBQUssR0FBRyxRQUFRO1lBQ3BFQyxLQUFLLENBQUNDLFNBQVMsQ0FBQyxNQUFLO2NBQ2pCSixPQUFPLENBQUNLLE9BQU8sQ0FBQ0MsTUFBTSxJQUFHO2dCQUNyQixJQUFJQSxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFRCxNQUFNLENBQUNDLElBQUksQ0FBQ0wsS0FBSyxFQUFFRCxRQUFRLENBQUM7Z0JBQ3ZELElBQUlLLE1BQU0sSUFBSUEsTUFBTSxDQUFDRSxFQUFFLEVBQUVGLE1BQU0sQ0FBQ0UsRUFBRSxDQUFDTixLQUFLLEVBQUVELFFBQVEsQ0FBQztjQUN2RCxDQUFDLENBQUM7Y0FDRixPQUFPLE1BQU1ELE9BQU8sQ0FBQ0ssT0FBTyxDQUFDQyxNQUFNLElBQUc7Z0JBQ2xDLElBQUlBLE1BQU0sSUFBSUEsTUFBTSxDQUFDRyxNQUFNLEVBQUVILE1BQU0sQ0FBQ0csTUFBTSxDQUFDUCxLQUFLLEVBQUVELFFBQVEsQ0FBQztnQkFDM0QsSUFBSUssTUFBTSxJQUFJQSxNQUFNLENBQUNJLEdBQUcsRUFBRUosTUFBTSxDQUFDSSxHQUFHLENBQUNSLEtBQUssRUFBRUQsUUFBUSxDQUFDO2NBQ3pELENBQUMsQ0FBQztZQUNOLENBQUMsRUFBRSxDQUFDRCxPQUFPLENBQUMsQ0FBQztVQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkE7VUFFTztVQUFVLFNBQ1JXLFFBQVEsQ0FBQztZQUFDQyxLQUFLO1lBQUVDLEtBQUs7WUFBRUM7VUFBUSxDQUFDO1lBRXRDLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFQyxRQUFRLENBQUMsR0FBR2IsS0FBSyxDQUFDYyxRQUFRLEVBQUU7WUFDL0MsTUFBTUMsTUFBTSxHQUFHLE1BQUs7Y0FDaEIsTUFBTUMsUUFBUSxHQUFHLElBQUlQLEtBQUssQ0FBQ0MsS0FBSyxDQUFDO2NBQ2pDLE1BQU1PLGNBQWMsR0FBRyxNQUFLO2dCQUN4QixJQUFJTixRQUFRLEVBQUVBLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDO2NBQ3RDLENBQUM7Y0FDRCxJQUFJRCxRQUFRLEVBQUU7Z0JBQ1ZLLFFBQVEsQ0FBQ1osSUFBSSxDQUFDLFFBQVEsRUFBRWEsY0FBYyxDQUFDOztjQUUzQ0osUUFBUSxDQUFDRyxRQUFRLENBQUM7Y0FDbEIsT0FBTyxNQUFNQSxRQUFRLENBQUNWLE1BQU0sQ0FBQyxRQUFRLEVBQUVXLGNBQWMsQ0FBQztZQUUxRCxDQUFDO1lBQ0RqQixLQUFLLENBQUNDLFNBQVMsQ0FBQ2MsTUFBTSxFQUFFLEVBQUUsQ0FBQztZQUUzQixPQUFPLENBQUNILFVBQVUsQ0FBQztVQUN2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkE7VUFDQTtVQUVPO1VBQVUsU0FBVU0sUUFBUSxDQUFDQyxTQUFTLEVBQUVDLEdBQVk7WUFDdkQsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHdEIsS0FBSyxDQUFDYyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ1MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR3hCLEtBQUssQ0FBQ2MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU1Q2QsS0FBSyxDQUFDQyxTQUFTLENBQUMsTUFBSztjQUNqQjtjQUNBLE1BQU13QixVQUFVLEdBQUcsSUFBSUMsbUJBQVksQ0FBQ1AsU0FBUyxFQUFFLElBQUksQ0FBQztjQUNwRCxNQUFNUSxZQUFZLEdBQUcsTUFBSztnQkFDdEIsSUFBSUMsS0FBSyxHQUFHSCxVQUFVLENBQUNHLEtBQUs7Z0JBQzVCLElBQUlILFVBQVUsQ0FBQ0osS0FBSyxJQUFJRCxHQUFHLEVBQUU7a0JBQ3pCLElBQUksQ0FBQ1EsS0FBSyxDQUFDQyxjQUFjLENBQUNULEdBQUcsQ0FBQyxFQUFFO29CQUM1QlUsT0FBTyxDQUFDQyxJQUFJLENBQ1IsMERBQTBEWCxHQUFHLHVCQUF1QkQsU0FBUyxFQUFFLENBQ2xHOztrQkFFTFMsS0FBSyxHQUFHSCxVQUFVLENBQUNHLEtBQUssQ0FBQ1IsR0FBRyxDQUFDOztnQkFFakNJLFFBQVEsQ0FBQ0ksS0FBSyxDQUFDO2dCQUNmTixRQUFRLENBQUNHLFVBQVUsQ0FBQ0osS0FBSyxDQUFDO2NBQzlCLENBQUM7Y0FDREksVUFBVSxDQUFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRXVCLFlBQVksQ0FBQztjQUN2Q0EsWUFBWSxFQUFFO2NBQ2QsT0FBTyxNQUFLO2dCQUNSRixVQUFVLENBQUNuQixNQUFNLENBQUMsUUFBUSxFQUFFcUIsWUFBWSxDQUFDO2NBQzdDLENBQUM7WUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ04sTUFBTUssT0FBTyxHQUFHWCxLQUFLLElBQUksQ0FBQyxDQUFDRSxLQUFLO1lBQ2hDLE9BQU8sQ0FBQ1MsT0FBTyxFQUFFVCxLQUFLLENBQUM7VUFDM0IiLCJuYW1lcyI6WyJ1c2VCaW5kZXIiLCJvYmplY3RzIiwib25CaW5kZXIiLCJldmVudCIsIlJlYWN0IiwidXNlRWZmZWN0IiwiZm9yRWFjaCIsIm9iamVjdCIsImJpbmQiLCJvbiIsInVuYmluZCIsIm9mZiIsInVzZU1vZGVsIiwibW9kZWwiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiY29udHJvbGxlciIsInNldE1vZGVsIiwidXNlU3RhdGUiLCJvbkxvYWQiLCJpbnN0YW5jZSIsIm9uQ2hhbmdlTWV0aG9kIiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJrZXkiLCJyZWFkeSIsInNldFJlYWR5IiwidGV4dHMiLCJzZXRUZXh0cyIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJ2YWx1ZSIsImhhc093blByb3BlcnR5IiwiY29uc29sZSIsIndhcm4iLCJpc1JlYWR5Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL3VzZS1iaW5kZXIudHMiLCJjb2RlL3RzL3VzZS1tb2RlbC50cyIsImNvZGUvdHMvdXNlLXRleHRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=
System.register(["@beyond-js/kernel@0.1.0/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.0/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, BeyondImage, __beyond_pkg, hmr;
  _export("BeyondImage", void 0);
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondJsKernel010Styles) {
      dependency_2 = _beyondJsKernel010Styles;
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
          "vspecifier": "@beyond/ui@1.0.0/image"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/styles', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/image');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./error
      ***********************/
      ims.set('./error', {
        hash: 586243716,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorImage = ErrorImage;
          var React = require("react");
          ;
          function ErrorImage({
            onError,
            properties,
            src
          }) {
            const onClickError = event => {
              event.stopPropagation();
              onError(event);
            };
            return React.createElement("figure", {
              "data-src": src,
              ...properties
            }, React.createElement("div", {
              key: "error",
              "data-src": src,
              className: "content-error"
            }, React.createElement("span", null, "Fallo la carga de la imagen")));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./image
      ***********************/

      ims.set('./image', {
        hash: 3356478836,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondImage = BeyondImage;
          var React = require("react");
          var _error = require("./error");
          /*bundle*/
          function BeyondImage(props) {
            const initialState = {
              size: '200x200',
              loaded: false
            };
            const {
              className,
              onClick,
              children,
              src,
              alt,
              size
            } = props;
            const [image, setImage] = React.useState();
            const [state, setState] = React.useState(initialState);
            const onLoad = () => setState({
              ...state,
              error: false,
              htmlLoaded: true
            });
            const loadImage = (url, size) => {
              let finalSrc = url;
              const newImage = new Image();
              newImage.onload = () => setState({
                ...state,
                loaded: true,
                error: false
              });
              newImage.onerror = () => setState({
                ...state,
                error: true,
                loaded: false
              });
              newImage.src = finalSrc;
              setImage(newImage);
              setState({
                ...state,
                url: url,
                size: size,
                src: finalSrc,
                loaded: true
              });
            };
            React.useEffect(() => {
              const currentSrc = src;
              if (state.url !== currentSrc) {
                let size = props.size ?? state.size;
                loadImage(currentSrc, size);
              }
              return () => setImage({
                ...state,
                onload: undefined,
                onerror: undefined
              });
              // eslint-disable-next-line
            }, [src]);
            const {
              error,
              loaded,
              htmlLoaded
            } = state;
            let cls = `beyond-element-image ${className ? ` ${className}` : ''}`;
            if (!loaded && !htmlLoaded) cls += " beyond-element-image-preload";
            if (error) cls += " beyond-element-image-error";
            const properties = {
              ...props,
              className: cls,
              onClick
            };
            delete properties.src;
            delete properties.alt;
            delete properties.onError;
            delete properties.children;
            delete properties.size;
            delete properties.loading;
            if (error) {
              return React.createElement(_error.ErrorImage, {
                key: "error",
                onError: props.onError,
                src: src,
                properties: properties
              });
            }
            return React.createElement("figure", {
              "data-src": src,
              ...properties
            }, React.createElement("img", {
              src: src,
              onLoad: onLoad,
              loading: props.loading ?? "eager",
              alt: alt
            }), children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./image",
        "from": "BeyondImage",
        "name": "BeyondImage"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondImage') && _export("BeyondImage", BeyondImage = require ? require('./image').BeyondImage : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBa0JDO1VBRUssU0FBVUEsVUFBVSxDQUFDO1lBQUNDLE9BQU87WUFBRUMsVUFBVTtZQUFFQztVQUFHLENBQVM7WUFDekQsTUFBTUMsWUFBWSxHQUFJQyxLQUEyQixJQUFJO2NBQ2pEQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QkwsT0FBTyxDQUFDSSxLQUFLLENBQUM7WUFDbEIsQ0FBQztZQUNELE9BQ0lFO2NBQUEsWUFBa0JKLEdBQUc7Y0FBQSxHQUFNRDtZQUFVLEdBQ2pDSztjQUFLQyxHQUFHLEVBQUMsT0FBTztjQUFBLFlBQVdMLEdBQUc7Y0FBRU0sU0FBUyxFQUFDO1lBQWUsR0FDckRGLGdFQUF3QyxDQUN0QyxDQUNEO1VBRWpCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hDQTtVQUNBO1VBOEJPO1VBQVUsU0FDUkcsV0FBVyxDQUFDQyxLQUFhO1lBRzlCLE1BQU1DLFlBQVksR0FBVztjQUFDQyxJQUFJLEVBQUUsU0FBUztjQUFFQyxNQUFNLEVBQUU7WUFBSyxDQUFDO1lBQzdELE1BQU07Y0FBQ0wsU0FBUztjQUFFTSxPQUFPO2NBQUVDLFFBQVE7Y0FBRWIsR0FBRztjQUFFYyxHQUFHO2NBQUVKO1lBQUksQ0FBQyxHQUFHRixLQUFLO1lBQzVELE1BQU0sQ0FBQ08sS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1osS0FBSyxDQUFDYSxRQUFRLEVBQTZCO1lBQ3JFLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR2YsS0FBSyxDQUFDYSxRQUFRLENBQVNSLFlBQVksQ0FBQztZQUM5RCxNQUFNVyxNQUFNLEdBQUcsTUFBTUQsUUFBUSxDQUFDO2NBQUMsR0FBR0QsS0FBSztjQUFFRyxLQUFLLEVBQUUsS0FBSztjQUFFQyxVQUFVLEVBQUU7WUFBSSxDQUFDLENBQUM7WUFDekUsTUFBTUMsU0FBUyxHQUFHLENBQUNDLEdBQUcsRUFBRWQsSUFBSSxLQUFJO2NBQzVCLElBQUllLFFBQVEsR0FBR0QsR0FBRztjQUVsQixNQUFNRSxRQUFRLEdBQUcsSUFBSUMsS0FBSyxFQUFFO2NBQzVCRCxRQUFRLENBQUNFLE1BQU0sR0FBRyxNQUFNVCxRQUFRLENBQUM7Z0JBQUMsR0FBR0QsS0FBSztnQkFBRVAsTUFBTSxFQUFFLElBQUk7Z0JBQUVVLEtBQUssRUFBRTtjQUFLLENBQUMsQ0FBQztjQUN4RUssUUFBUSxDQUFDRyxPQUFPLEdBQUcsTUFBTVYsUUFBUSxDQUFDO2dCQUFDLEdBQUdELEtBQUs7Z0JBQUVHLEtBQUssRUFBRSxJQUFJO2dCQUFFVixNQUFNLEVBQUU7Y0FBSyxDQUFDLENBQUM7Y0FDekVlLFFBQVEsQ0FBQzFCLEdBQUcsR0FBR3lCLFFBQVE7Y0FDdkJULFFBQVEsQ0FBQ1UsUUFBUSxDQUFDO2NBQ2xCUCxRQUFRLENBQUM7Z0JBQUMsR0FBR0QsS0FBSztnQkFBRU0sR0FBRyxFQUFFQSxHQUFHO2dCQUFFZCxJQUFJLEVBQUVBLElBQUk7Z0JBQUVWLEdBQUcsRUFBRXlCLFFBQVE7Z0JBQUVkLE1BQU0sRUFBRTtjQUFJLENBQUMsQ0FBQztZQUMzRSxDQUFDO1lBRURQLEtBQUssQ0FBQzBCLFNBQVMsQ0FBQyxNQUFLO2NBRWpCLE1BQU1DLFVBQVUsR0FBRy9CLEdBQUc7Y0FDdEIsSUFBSWtCLEtBQUssQ0FBQ00sR0FBRyxLQUFLTyxVQUFVLEVBQUU7Z0JBQzFCLElBQUlyQixJQUFJLEdBQUdGLEtBQUssQ0FBQ0UsSUFBSSxJQUFJUSxLQUFLLENBQUNSLElBQUk7Z0JBQ25DYSxTQUFTLENBQUNRLFVBQVUsRUFBRXJCLElBQUksQ0FBQzs7Y0FHL0IsT0FBTyxNQUFNTSxRQUFRLENBQUM7Z0JBQUMsR0FBR0UsS0FBSztnQkFBRVUsTUFBTSxFQUFFSSxTQUFTO2dCQUFFSCxPQUFPLEVBQUVHO2NBQVMsQ0FBQyxDQUFDO2NBQ3hFO1lBQ0osQ0FBQyxFQUFFLENBQUNoQyxHQUFHLENBQUMsQ0FBQztZQUVULE1BQU07Y0FBQ3FCLEtBQUs7Y0FBRVYsTUFBTTtjQUFFVztZQUFVLENBQUMsR0FBR0osS0FBSztZQUd6QyxJQUFJZSxHQUFHLEdBQUcsd0JBQXdCM0IsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNwRSxJQUFJLENBQUNLLE1BQU0sSUFBSSxDQUFDVyxVQUFVLEVBQUVXLEdBQUcsSUFBSSwrQkFBK0I7WUFDbEUsSUFBSVosS0FBSyxFQUFFWSxHQUFHLElBQUksNkJBQTZCO1lBRy9DLE1BQU1sQyxVQUFVLEdBQUc7Y0FBQyxHQUFHUyxLQUFLO2NBQUVGLFNBQVMsRUFBRTJCLEdBQUc7Y0FBRXJCO1lBQU8sQ0FBQztZQUN0RCxPQUFPYixVQUFVLENBQUNDLEdBQUc7WUFDckIsT0FBT0QsVUFBVSxDQUFDZSxHQUFHO1lBQ3JCLE9BQU9mLFVBQVUsQ0FBQ0QsT0FBTztZQUN6QixPQUFPQyxVQUFVLENBQUNjLFFBQVE7WUFDMUIsT0FBT2QsVUFBVSxDQUFDVyxJQUFJO1lBQ3RCLE9BQU9YLFVBQVUsQ0FBQ21DLE9BQU87WUFHekIsSUFBSWIsS0FBSyxFQUFFO2NBQ1AsT0FBT2pCLG9CQUFDUCxpQkFBVTtnQkFBQ1EsR0FBRyxFQUFDLE9BQU87Z0JBQUNQLE9BQU8sRUFBRVUsS0FBSyxDQUFDVixPQUFPO2dCQUFFRSxHQUFHLEVBQUVBLEdBQUc7Z0JBQUVELFVBQVUsRUFBRUE7Y0FBVSxFQUFHOztZQUc5RixPQUNJSztjQUFBLFlBQWtCSixHQUFHO2NBQUEsR0FBTUQ7WUFBVSxHQUNqQ0s7Y0FDSUosR0FBRyxFQUFFQSxHQUFHO2NBQ1JvQixNQUFNLEVBQUVBLE1BQU07Y0FDZGMsT0FBTyxFQUFFMUIsS0FBSyxDQUFDMEIsT0FBTyxJQUFJLE9BQU87Y0FBRXBCLEdBQUcsRUFBRUE7WUFBRyxFQUFHLEVBQ2pERCxRQUFRLENBQ0o7VUFJakIiLCJuYW1lcyI6WyJFcnJvckltYWdlIiwib25FcnJvciIsInByb3BlcnRpZXMiLCJzcmMiLCJvbkNsaWNrRXJyb3IiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIlJlYWN0Iiwia2V5IiwiY2xhc3NOYW1lIiwiQmV5b25kSW1hZ2UiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsInNpemUiLCJsb2FkZWQiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJhbHQiLCJpbWFnZSIsInNldEltYWdlIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwib25Mb2FkIiwiZXJyb3IiLCJodG1sTG9hZGVkIiwibG9hZEltYWdlIiwidXJsIiwiZmluYWxTcmMiLCJuZXdJbWFnZSIsIkltYWdlIiwib25sb2FkIiwib25lcnJvciIsInVzZUVmZmVjdCIsImN1cnJlbnRTcmMiLCJ1bmRlZmluZWQiLCJjbHMiLCJsb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJiLXVpL21vZHVsZXMvaW1hZ2UvdHMvZXJyb3IudHN4IiwiYi11aS9tb2R1bGVzL2ltYWdlL3RzL2ltYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19
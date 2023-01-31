System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, BeyondImage, __beyond_pkg, hmr;
  _export("BeyondImage", void 0);
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react) {
      dependency_1 = _react;
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
      __pkg.dependencies.update([['react', dependency_1]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxDQUFDLEdBQUdKLEtBQUs7WUFHekMsSUFBSWUsR0FBRyxHQUFHLHdCQUF3QjNCLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDcEUsSUFBSSxDQUFDSyxNQUFNLElBQUksQ0FBQ1csVUFBVSxFQUFFVyxHQUFHLElBQUksK0JBQStCO1lBQ2xFLElBQUlaLEtBQUssRUFBRVksR0FBRyxJQUFJLDZCQUE2QjtZQUcvQyxNQUFNbEMsVUFBVSxHQUFHO2NBQUMsR0FBR1MsS0FBSztjQUFFRixTQUFTLEVBQUUyQixHQUFHO2NBQUVyQjtZQUFPLENBQUM7WUFDdEQsT0FBT2IsVUFBVSxDQUFDQyxHQUFHO1lBQ3JCLE9BQU9ELFVBQVUsQ0FBQ2UsR0FBRztZQUNyQixPQUFPZixVQUFVLENBQUNELE9BQU87WUFDekIsT0FBT0MsVUFBVSxDQUFDYyxRQUFRO1lBQzFCLE9BQU9kLFVBQVUsQ0FBQ1csSUFBSTtZQUN0QixPQUFPWCxVQUFVLENBQUNtQyxPQUFPO1lBR3pCLElBQUliLEtBQUssRUFBRTtjQUNQLE9BQU9qQixvQkFBQ1AsaUJBQVU7Z0JBQUNRLEdBQUcsRUFBQyxPQUFPO2dCQUFDUCxPQUFPLEVBQUVVLEtBQUssQ0FBQ1YsT0FBTztnQkFBRUUsR0FBRyxFQUFFQSxHQUFHO2dCQUFFRCxVQUFVLEVBQUVBO2NBQVUsRUFBRzs7WUFHOUYsT0FDSUs7Y0FBQSxZQUFrQkosR0FBRztjQUFBLEdBQU1EO1lBQVUsR0FDakNLO2NBQ0lKLEdBQUcsRUFBRUEsR0FBRztjQUNSb0IsTUFBTSxFQUFFQSxNQUFNO2NBQ2RjLE9BQU8sRUFBRTFCLEtBQUssQ0FBQzBCLE9BQU8sSUFBSSxPQUFPO2NBQUVwQixHQUFHLEVBQUVBO1lBQUcsRUFBRyxFQUNqREQsUUFBUSxDQUNKO1VBSWpCIiwibmFtZXMiOlsiRXJyb3JJbWFnZSIsIm9uRXJyb3IiLCJwcm9wZXJ0aWVzIiwic3JjIiwib25DbGlja0Vycm9yIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJSZWFjdCIsImtleSIsImNsYXNzTmFtZSIsIkJleW9uZEltYWdlIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJzaXplIiwibG9hZGVkIiwib25DbGljayIsImNoaWxkcmVuIiwiYWx0IiwiaW1hZ2UiLCJzZXRJbWFnZSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9uTG9hZCIsImVycm9yIiwiaHRtbExvYWRlZCIsImxvYWRJbWFnZSIsInVybCIsImZpbmFsU3JjIiwibmV3SW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJ1c2VFZmZlY3QiLCJjdXJyZW50U3JjIiwidW5kZWZpbmVkIiwiY2xzIiwibG9hZGluZyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvZXJyb3IudHN4IiwidHMvaW1hZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=
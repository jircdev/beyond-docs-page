define(["exports", "module", "@beyond-js/kernel/bundle", "react@17.0.2", "@beyond-js/kernel/styles"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.BeyondImage = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/ui/image",
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_1]]));
  brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui/image');
  const ims = new Map();
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

        const onLoad = () => setState({ ...state,
          error: false,
          htmlLoaded: true
        });

        const loadImage = (url, size) => {
          let finalSrc = url;
          const newImage = new Image();

          newImage.onload = () => setState({ ...state,
            loaded: true,
            error: false
          });

          newImage.onerror = () => setState({ ...state,
            error: true,
            loaded: false
          });

          newImage.src = finalSrc;
          setImage(newImage);
          setState({ ...state,
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

          return () => setImage({ ...state,
            onload: undefined,
            onerror: undefined
          }); // eslint-disable-next-line
        }, [src]);
        const {
          error,
          loaded,
          htmlLoaded
        } = state;
        let cls = `beyond-element-image ${className ? ` ${className}` : ''}`;
        if (!loaded && !htmlLoaded) cls += " beyond-element-image-preload";
        if (error) cls += " beyond-element-image-error";
        const properties = { ...props,
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
  let BeyondImage; // Module exports

  _exports.BeyondImage = BeyondImage;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'BeyondImage') && (_exports.BeyondImage = BeyondImage = require ? require('./image').BeyondImage : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cm9wZXJ0aWVzIiwic3JjIiwib25DbGlja0Vycm9yIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJSZWFjdCIsImtleSIsImNsYXNzTmFtZSIsIkJleW9uZEltYWdlIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJzaXplIiwibG9hZGVkIiwib25DbGljayIsImNoaWxkcmVuIiwiYWx0IiwiaW1hZ2UiLCJzZXRJbWFnZSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9uTG9hZCIsImVycm9yIiwiaHRtbExvYWRlZCIsImxvYWRJbWFnZSIsInVybCIsImZpbmFsU3JjIiwibmV3SW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJ1c2VFZmZlY3QiLCJjdXJyZW50U3JjIiwidW5kZWZpbmVkIiwiY2xzIiwibG9hZGluZyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiYi11aS9tb2R1bGVzL2ltYWdlL3RzL2Vycm9yLnRzeCIsImItdWkvbW9kdWxlcy9pbWFnZS90cy9pbWFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==
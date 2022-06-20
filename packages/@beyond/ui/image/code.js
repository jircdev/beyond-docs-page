define(["exports", "react", "@beyond/ui/icons/code", "@beyond-js/kernel/bundle/ts", "@beyond-js/kernel/styles/ts"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.BeyondImage = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/ui/image/code").package();

  externals.register(new Map([["react", dependency_0]]));

  __pkg.dependencies.update(new Set(["@beyond/ui/icons/code"]));

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/ui/image/code');

  const ims = new Map();
  /***********************
  INTERNAL MODULE: ./error
  ***********************/

  ims.set('./error', {
    hash: 4018503674,
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
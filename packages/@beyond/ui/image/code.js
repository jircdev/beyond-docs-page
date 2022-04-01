define(["exports", "react", "@beyond/ui/icons/code", "@beyond-js/kernel/core/ts"], function (_exports2, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.BeyondImage = void 0;
  const dependencies = new Map();
  dependencies.set('react', dependency_0);
  dependencies.set('@beyond/ui/icons/code', dependency_1);
  dependencies.set('@beyond-js/kernel/core/ts', dependency_2);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond/ui/image/code', false, {}, dependencies);

  const __pkg = bundle.package();
  /**********
  SCSS STYLES
  **********/


  bundle.styles.processor = 'scss';
  bundle.styles.value = '.beyond-element-image{position:relative}.beyond-element-image.beyond-element-image-error,.beyond-element-image.beyond-element-image-preload{background-color:gray;display:block}.beyond-element-image.beyond-element-image-error{display:flex;align-items:center;justify-content:center}.beyond-element-image.beyond-element-image-error .content-error{display:flex;align-items:center;justify-content:center;flex-direction:column;z-index:999}.beyond-element-image.beyond-element-image-error .content-error .beyond-icon-button{width:50px;height:50px;z-index:1000}.beyond-element-image.beyond-element-image-error .content-error .beyond-icon-button .beyond-icon{width:35px;height:35px;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.beyond-element-image.beyond-element-image-error .content-error span{font-size:var(--xapp-font-size-12);display:block;text-align:center}.beyond-element-image.cover-image img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.beyond-element-image.contain img{-o-object-fit:contain;object-fit:contain}.beyond-element-image.fill img{-o-object-fit:fill;object-fit:fill}';
  const modules = new Map();
  /***********************
  INTERNAL MODULE: ./error
  ***********************/

  modules.set('./error', {
    hash: 1568963200,
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

  modules.set('./image', {
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
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.BeyondImage = require('./image').BeyondImage;
  };

  let BeyondImage; // Module exports

  _exports2.BeyondImage = BeyondImage;

  __pkg.exports.process = function (require) {
    _exports2.BeyondImage = BeyondImage = require('./image').BeyondImage;
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});
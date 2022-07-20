define(["exports", "@beyond-js/kernel/bundle", "react", "swiper", "@beyond/ui/reactive-model", "@beyond-js/kernel/styles"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.useBeyondSwiperContext = _exports.hmr = _exports.BeyondSwiperSlider = _exports.BeyondSwiperContext = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/ui/swiper",
    "bundle": "code"
  }).package();

  ;
  externals.register(new Map([["react", dependency_1], ["swiper", dependency_2]]));

  __pkg.dependencies.update(new Set(["@beyond/ui/reactive-model"]));

  require('@beyond-js/kernel/styles').styles.register('@beyond/ui/swiper');

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./context
  *************************/

  ims.set('./context', {
    hash: 3642848773,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.useBeyondSwiperContext = exports.BeyondSwiperContext = void 0;

      var React = require("react");

      const
      /*bundle*/
      BeyondSwiperContext = React.createContext();
      exports.BeyondSwiperContext = BeyondSwiperContext;

      const
      /*bundle*/
      useBeyondSwiperContext = () => React.useContext(BeyondSwiperContext);

      exports.useBeyondSwiperContext = useBeyondSwiperContext;
    }
  });
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 3335539835,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var Swiper = require("swiper");

      var _reactiveModel = require("@beyond/ui/reactive-model");

      const SwiperCasted = Swiper.Swiper;

      class Controller extends _reactiveModel.ReactiveModel {
        #swiper;

        get swiper() {
          return this.#swiper;
        }

        #onEnd;
        #props;
        setSwiper = (element, props, ref) => {
          this.#props = props;
          const specs = Object.assign({
            slidesPerView: props.slidesPerView ?? 1,
            modules: [Swiper.Navigation, Swiper.Pagination]
          }, props);

          if (props.pagination || props.footer) {
            specs.pagination = {
              el: ref.pagination.current,
              clickable: true
            };
          }

          if (props.navigation) {
            specs.navigation = {
              nextEl: ref.next.current // prevEl: ref.prev.current,

            };
          }

          this.#swiper = new SwiperCasted(element, specs);
          this.#swiper.on("slideChange", () => {
            if (this.#swiper.isEnd) {
              this.#onEnd = true;
              this.triggerEvent();
            } else {
              this.#onEnd = false;
              this.triggerEvent();
            }
          });
        };
        next = () => {
          if (!this.#swiper.isEnd) {
            this.#swiper?.slideNext(500, false);
            return;
          }

          if (!this.#onEnd) return;
          this.#props.functionNext();
        };
      }

      exports.Controller = Controller;
      ;
    }
  });
  /***********************
  INTERNAL MODULE: ./slide
  ***********************/

  ims.set('./slide', {
    hash: 2634860187,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Slide = Slide;

      var React = require("react");

      function Slide(props) {
        return React.createElement("div", {
          className: "swiper-slide"
        }, props.children);
      }
    }
  });
  /*******************************
  INTERNAL MODULE: ./swiper-slider
  *******************************/

  ims.set('./swiper-slider', {
    hash: 2135895256,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BeyondSwiperSlider = BeyondSwiperSlider;

      var React = require("react");

      var _slide = require("./slide");

      var _controller = require("./controller");
      /*bundle*/


      function BeyondSwiperSlider(props) {
        const refs = {
          next: React.useRef(),
          container: React.useRef(),
          pagination: React.useRef(),
          prev: React.useRef()
        };
        const {
          next,
          container,
          prev
        } = refs;
        const slides = props.children.map((slide, index) => React.createElement(_slide.Slide, {
          key: index
        }, slide));
        const footer = props.footer === true;
        const [state, setState] = React.useState({});
        React.useEffect(() => {
          const controller = new _controller.Controller();

          const onChange = () => setState({ ...state,
            ready: true,
            swiper: controller.swiper,
            controller,
            lastIndex: controller.lastIndex
          });

          controller.bind("change", onChange);
          const config = props.config ?? {};
          const specs = { ...props,
            ...config
          };
          controller.setSwiper(container.current, specs, refs);
          onChange();
          return () => controller.unbind("change", onChange);
        }, []);
        const {
          controller
        } = state;
        const cls = props.className ? `${props.className} beyond-element-swiper-slider` : "beyond-element-swiper-slider";
        return React.createElement("div", {
          className: cls
        }, React.createElement("div", {
          ref: container,
          className: "swiper-container"
        }, React.createElement("div", {
          className: "swiper-wrapper"
        }, slides), props.pagination && React.createElement("div", {
          ref: refs?.pagination,
          className: "swiper-pagination"
        }), footer && React.createElement(React.Fragment, null, !controller?.swiper.isEnd && React.createElement("button", {
          className: "swiper-button-prev",
          onClick: props.functionNext
        }, "SKIP"), React.createElement("div", {
          ref: refs.pagination,
          className: "swiper-pagination"
        }), React.createElement("button", {
          className: "swiper-button-next ",
          onClick: controller?.next
        }, "Next")), props.navigation && React.createElement(React.Fragment, null, React.createElement("div", {
          ref: prev,
          className: "swiper-button-prev"
        }), React.createElement("div", {
          ref: next,
          className: "swiper-button-next"
        }))));
      }

      ;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./context",
    "from": "BeyondSwiperContext",
    "name": "BeyondSwiperContext"
  }, {
    "im": "./context",
    "from": "useBeyondSwiperContext",
    "name": "useBeyondSwiperContext"
  }, {
    "im": "./swiper-slider",
    "from": "BeyondSwiperSlider",
    "name": "BeyondSwiperSlider"
  }];
  let BeyondSwiperContext, useBeyondSwiperContext, BeyondSwiperSlider; // Module exports

  _exports.BeyondSwiperSlider = BeyondSwiperSlider;
  _exports.useBeyondSwiperContext = useBeyondSwiperContext;
  _exports.BeyondSwiperContext = BeyondSwiperContext;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'BeyondSwiperContext') && (_exports.BeyondSwiperContext = BeyondSwiperContext = require ? require('./context').BeyondSwiperContext : value);
    (require || prop === 'useBeyondSwiperContext') && (_exports.useBeyondSwiperContext = useBeyondSwiperContext = require ? require('./context').useBeyondSwiperContext : value);
    (require || prop === 'BeyondSwiperSlider') && (_exports.BeyondSwiperSlider = BeyondSwiperSlider = require ? require('./swiper-slider').BeyondSwiperSlider : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
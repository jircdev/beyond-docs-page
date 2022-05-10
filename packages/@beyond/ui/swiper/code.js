define(["exports", "react", "swiper", "@beyond/ui/reactive-model/ts", "@beyond-js/kernel/core/ts"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.useBeyondSwiperContext = _exports2.hmr = _exports2.BeyondSwiperSlider = _exports2.BeyondSwiperContext = void 0;
  const dependencies = new Map();
  dependencies.set('react', dependency_0);
  dependencies.set('swiper', dependency_1);
  dependencies.set('@beyond/ui/reactive-model/ts', dependency_2);
  dependencies.set('@beyond-js/kernel/core/ts', dependency_3);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond/ui/swiper/code', false, {}, dependencies);

  const __pkg = bundle.package();

  bundle.styles.mode = 'external';
  const modules = new Map();
  /*************************
  INTERNAL MODULE: ./context
  *************************/

  modules.set('./context', {
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

  modules.set('./controller', {
    hash: 427607520,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _swiper = require("swiper");

      var _ts = require("@beyond/ui/reactive-model/ts"); // const SwiperCasted: typeof Swiper.Swiper = (Swiper as unknown as typeof Swiper.default);


      class Controller extends _ts.ReactiveModel {
        #swiper;

        get swiper() {
          return this.#swiper;
        }

        #onEnd;
        #props;
        setSwiper = (element, props, ref) => {
          this.#props = props;
          const specs = Object.assign({
            slidesPerView: props.slidesPerView ?? 1
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

          this.#swiper = new _swiper.default(element, specs);
          this.#swiper.on("slideChange", () => {
            if (this.#swiper.isEnd) {
              this.#onEnd = true;
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

  modules.set('./slide', {
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

  modules.set('./swiper-slider', {
    hash: 233480944,
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
        const [lastIndex, setLastIndex] = React.useState();
        React.useEffect(() => {
          const controller = new _controller.Controller();

          const onChange = () => setState({ ...state,
            ready: true,
            swiper: controller.swiper,
            controller,
            lastIndex: controller.lastIndex
          });

          controller.bind("change", onChange);
          controller.setSwiper(container.current, props, refs);
          onChange();
          return () => controller.unbind("change", onChange);
        }, []);
        const {
          controller
        } = state;
        React.useEffect(() => {
          setLastIndex(controller?.lastIndex);
        }, [controller?.lastIndex]);
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
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.BeyondSwiperContext = require('./context').BeyondSwiperContext;
    _exports.useBeyondSwiperContext = require('./context').useBeyondSwiperContext;
    _exports.BeyondSwiperSlider = require('./swiper-slider').BeyondSwiperSlider;
  };

  let BeyondSwiperContext, useBeyondSwiperContext, BeyondSwiperSlider; // Module exports

  _exports2.BeyondSwiperSlider = BeyondSwiperSlider;
  _exports2.useBeyondSwiperContext = useBeyondSwiperContext;
  _exports2.BeyondSwiperContext = BeyondSwiperContext;

  __pkg.exports.process = function (require) {
    _exports2.BeyondSwiperContext = BeyondSwiperContext = require('./context').BeyondSwiperContext;
    _exports2.useBeyondSwiperContext = useBeyondSwiperContext = require('./context').useBeyondSwiperContext;
    _exports2.BeyondSwiperSlider = BeyondSwiperSlider = require('./swiper-slider').BeyondSwiperSlider;
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});
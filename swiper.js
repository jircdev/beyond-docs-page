define(["exports", "module", "@beyond-js/kernel/bundle", "react@17.0.2", "swiper@8.2.6", "@beyond/ui/reactive-model", "@beyond-js/kernel/styles"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.useBeyondSwiperContext = _exports.hmr = _exports.BeyondSwiperSlider = _exports.BeyondSwiperContext = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/ui/swiper",
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_1], ["swiper", dependency_2]]));

  __pkg.dependencies.update(new Set(["@beyond/ui/reactive-model"]));

  brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui/swiper');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QURKQSxDQURKO01BNEJIOztNQUFBIiwibmFtZXMiOlsiQmV5b25kU3dpcGVyQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUJleW9uZFN3aXBlckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU3dpcGVyQ2FzdGVkIiwiU3dpcGVyIiwiQ29udHJvbGxlciIsIlJlYWN0aXZlTW9kZWwiLCJzd2lwZXIiLCJzZXRTd2lwZXIiLCJlbGVtZW50IiwicHJvcHMiLCJyZWYiLCJzcGVjcyIsIk9iamVjdCIsImFzc2lnbiIsInNsaWRlc1BlclZpZXciLCJtb2R1bGVzIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJwYWdpbmF0aW9uIiwiZm9vdGVyIiwiZWwiLCJjdXJyZW50IiwiY2xpY2thYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsIm5leHQiLCJvbiIsImlzRW5kIiwidHJpZ2dlckV2ZW50Iiwic2xpZGVOZXh0IiwiZnVuY3Rpb25OZXh0IiwiU2xpZGUiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsIkJleW9uZFN3aXBlclNsaWRlciIsInJlZnMiLCJ1c2VSZWYiLCJjb250YWluZXIiLCJwcmV2Iiwic2xpZGVzIiwibWFwIiwic2xpZGUiLCJpbmRleCIsImtleSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbnRyb2xsZXIiLCJvbkNoYW5nZSIsInJlYWR5IiwibGFzdEluZGV4IiwiYmluZCIsImNvbmZpZyIsInVuYmluZCIsImNscyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImItdWkvbW9kdWxlcy9zd2lwZXIvdHMvY29udGV4dC50c3giLCJiLXVpL21vZHVsZXMvc3dpcGVyL3RzL2NvbnRyb2xsZXIudHMiLCJiLXVpL21vZHVsZXMvc3dpcGVyL3RzL3NsaWRlLnRzeCIsImItdWkvbW9kdWxlcy9zd2lwZXIvdHMvc3dpcGVyLXNsaWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=
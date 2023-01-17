System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "swiper@8.4.5", "@beyond/ui@1.0.0/reactive-model", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, BeyondSwiperContext, useBeyondSwiperContext, BeyondSwiperSlider, __beyond_pkg, hmr;
  _export({
    BeyondSwiperContext: void 0,
    useBeyondSwiperContext: void 0,
    BeyondSwiperSlider: void 0
  });
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_swiper) {
      dependency_2 = _swiper;
    }, function (_beyondUi100ReactiveModel) {
      dependency_3 = _beyondUi100ReactiveModel;
    }, function (_beyondJsKernel017Styles) {
      dependency_4 = _beyondJsKernel017Styles;
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
          "vspecifier": "@beyond/ui@1.0.0/swiper"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['swiper', dependency_2], ['@beyond/ui/reactive-model', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/swiper');
      ims = new Map();
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
          const /*bundle*/BeyondSwiperContext = React.createContext();
          exports.BeyondSwiperContext = BeyondSwiperContext;
          const /*bundle*/useBeyondSwiperContext = () => React.useContext(BeyondSwiperContext);
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
                  nextEl: ref.next.current
                  // prevEl: ref.prev.current,
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
              const onChange = () => setState({
                ...state,
                ready: true,
                swiper: controller.swiper,
                controller,
                lastIndex: controller.lastIndex
              });
              controller.bind("change", onChange);
              const config = props.config ?? {};
              const specs = {
                ...props,
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
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondSwiperContext') && _export("BeyondSwiperContext", BeyondSwiperContext = require ? require('./context').BeyondSwiperContext : value);
        (require || prop === 'useBeyondSwiperContext') && _export("useBeyondSwiperContext", useBeyondSwiperContext = require ? require('./context').useBeyondSwiperContext : value);
        (require || prop === 'BeyondSwiperSlider') && _export("BeyondSwiperSlider", BeyondSwiperSlider = require ? require('./swiper-slider').BeyondSwiperSlider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3J0cyIsInVzZUJleW9uZFN3aXBlckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU3dpcGVyQ2FzdGVkIiwiU3dpcGVyIiwiQ29udHJvbGxlciIsIlJlYWN0aXZlTW9kZWwiLCJzd2lwZXIiLCJzZXRTd2lwZXIiLCJlbGVtZW50IiwicHJvcHMiLCJyZWYiLCJzcGVjcyIsIk9iamVjdCIsImFzc2lnbiIsInNsaWRlc1BlclZpZXciLCJtb2R1bGVzIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJwYWdpbmF0aW9uIiwiZm9vdGVyIiwiZWwiLCJjdXJyZW50IiwiY2xpY2thYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsIm5leHQiLCJvbiIsImlzRW5kIiwidHJpZ2dlckV2ZW50Iiwic2xpZGVOZXh0IiwiZnVuY3Rpb25OZXh0IiwiU2xpZGUiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsIkJleW9uZFN3aXBlclNsaWRlciIsInJlZnMiLCJ1c2VSZWYiLCJjb250YWluZXIiLCJwcmV2Iiwic2xpZGVzIiwibWFwIiwic2xpZGUiLCJpbmRleCIsImtleSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbnRyb2xsZXIiLCJvbkNoYW5nZSIsInJlYWR5IiwibGFzdEluZGV4IiwiYmluZCIsImNvbmZpZyIsInVuYmluZCIsImNscyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRleHQudHN4IiwidHMvY29udHJvbGxlci50cyIsInRzL3NsaWRlLnRzeCIsInRzL3N3aXBlci1zbGlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19
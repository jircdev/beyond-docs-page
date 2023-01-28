System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.7/core", "@beyond/docs@1/contents/esp", "@beyond/docs@1/contents/en", "@beyond/docs@1/missing.widget", "@beyond/docs@1/under-construction.widget", "@beyond/docs@1/ui/icons", "@beyond/ui@1.0.0/link", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, ContentsPage, RightAside, __beyond_pkg, hmr;
  _export({
    ContentsPage: void 0,
    RightAside: void 0
  });
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondJsKernel017Core) {
      dependency_2 = _beyondJsKernel017Core;
    }, function (_beyondDocs1ContentsEsp) {
      dependency_3 = _beyondDocs1ContentsEsp;
    }, function (_beyondDocs1ContentsEn) {
      dependency_4 = _beyondDocs1ContentsEn;
    }, function (_beyondDocs1MissingWidget) {
      dependency_5 = _beyondDocs1MissingWidget;
    }, function (_beyondDocs1UnderConstructionWidget) {
      dependency_6 = _beyondDocs1UnderConstructionWidget;
    }, function (_beyondDocs1UiIcons) {
      dependency_7 = _beyondDocs1UiIcons;
    }, function (_beyondUi100Link) {
      dependency_8 = _beyondUi100Link;
    }, function (_beyondJsKernel017Styles) {
      dependency_9 = _beyondJsKernel017Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["ripple-effects", "1.0.2"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/contents-data"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['@beyond/docs/contents/esp', dependency_3], ['@beyond/docs/contents/en', dependency_4], ['@beyond/docs/missing.widget', dependency_5], ['@beyond/docs/under-construction.widget', dependency_6], ['@beyond/docs/ui/icons', dependency_7], ['@beyond/ui/link', dependency_8], ['@beyond-js/kernel/styles', dependency_9]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs@1/contents-data');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 2150936952,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDocsContext = exports.DocsContext = void 0;
          var React = require("react");
          const value = {};
          const DocsContext = React.createContext(value);
          exports.DocsContext = DocsContext;
          const useDocsContext = () => React.useContext(DocsContext);
          exports.useDocsContext = useDocsContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 860889221,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentsPage = ContentsPage;
          var React = require("react");
          var _core = require("@beyond-js/kernel/core");
          var _context = require("./context");
          var Contents = require("@beyond/docs/contents/esp");
          var ContentsEn = require("@beyond/docs/contents/en");
          var _rightAside = require("./views/right-aside");
          require("@beyond/docs/missing.widget");
          require("@beyond/docs/under-construction.widget");
          /*bundle*/
          function ContentsPage({
            contentId,
            component
          }) {
            const {
              current: lang
            } = _core.beyond.languages;
            // const ComponentToShow = contents[contentId][lang];
            const replace = text => text.replace(text[0], text[0].toUpperCase());
            const Components = lang === 'es' ? Contents : ContentsEn;
            const name = contentId.split('-').map(replace).join('');
            const [Component, setComponent] = (0, React.useState)(Components[name]);
            const [sections, setSections] = (0, React.useState)();
            const [updated, setUpdated] = (0, React.useState)(performance.now());
            const {
              shadowRoot
            } = component;
            function ContentWrapper({
              children
            }) {
              return React.createElement(React.Fragment, null, children);
            }
            (0, React.useEffect)(() => {
              const items = shadowRoot.querySelectorAll('h1,h2,h3,h4');
              const onChange = () => {
                setComponent(Components[name]);
                setUpdated(performance.now());
              };
              Components.hmr.on('change', onChange);
              setSections(Array.from(items));
              return () => Components.hmr.on('change', onChange);
            }, []);
            if (!Component) {
              return React.createElement("main", {
                className: "page__main-container"
              }, React.createElement("section", {
                className: "page__main-content"
              }, React.createElement("app-under-construction", null)));
            }
            const Content = Components[name];
            return React.createElement(_context.DocsContext.Provider, {
              value: {
                sections,
                setSections,
                shadowRoot,
                component
              }
            }, React.createElement("main", {
              className: "page__main-container"
            }, React.createElement("section", {
              className: "page__main-content"
            }, React.createElement(Content, {
              components: {
                wrapper: ContentWrapper
              }
            })), sections?.length ? React.createElement(_rightAside.RightAside, null) : null));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./models/contents
      *********************************/

      ims.set('./models/contents', {
        hash: 2645857834,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Contents = void 0;
          var _core = require("@beyond-js/kernel/core");
          class Contents extends _core.Events {
            #loading = false;
            get loading() {
              return this.#loading;
            }
            #loaded = false;
            get loaded() {
              return this.#loaded;
            }
            #value = [];
            get value() {
              return this.#value;
            }
            #hydrated = false;
            get hydrated() {
              return this.#hydrated;
            }
            #container;
            get container() {
              return this.#container;
            }
            constructor(container) {
              super();
              this.#container = container;
            }
            async fetch() {
              this.#loading = true;
              this.trigger('change');
              await new Promise(resolve => setTimeout(resolve, 4000));
              this.#value.push({
                id: 1,
                name: 'Pepsi'
              });
              this.#value.push({
                id: 2,
                name: 'Coca Cola'
              });
              this.#loading = false;
              this.#loaded = true;
              this.trigger('change');
            }
            hydrate(cached) {
              this.#loading = false;
              this.#loaded = true;
              cached.forEach(company => this.#value.push(company));
              this.#hydrated = true;
            }
            toJSON() {
              return this.#value;
            }
          }
          exports.Contents = Contents;
        }
      });

      /**********************
      INTERNAL MODULE: ./quiz
      **********************/

      ims.set('./quiz', {
        hash: 172264056,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Quiz = Quiz;
          var React = require("react");
          var _icons = require("@beyond/docs/ui/icons");
          function Quiz({
            id
          }) {
            return React.createElement("div", {
              className: "content__quiz"
            }, React.createElement("h4", null, "\u00BFTe result\u00F3 \u00FAtil este art\u00EDculo?"), React.createElement("div", {
              className: "quiz__actions"
            }, React.createElement(_icons.AppIconButton, {
              icon: "beyond",
              className: "border-icon"
            }), React.createElement(_icons.AppIconButton, {
              icon: "beyond",
              className: "border-icon to-bottom"
            })));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/right-aside/index
      *****************************************/

      ims.set('./views/right-aside/index', {
        hash: 3200647695,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RightAside = void 0;
          var React = require("react");
          var _item = require("./item");
          var _context = require("../../context");
          /*bundle*/
          const RightAside = () => {
            const {
              shadowRoot,
              sections,
              component
            } = (0, _context.useDocsContext)();
            const [titles, setTitles] = React.useState(sections);
            const ref = React.useRef(null);
            React.useLayoutEffect(() => {
              const callback = entries => {
                let selected;
                entries.forEach(entry => {
                  const {
                    boundingClientRect: {
                      top
                    },
                    target
                  } = entry;
                  const list = [...ref.current.querySelectorAll("li")];
                  let position = top + 100;
                  if (position < 50 || position > 300 || selected) return;
                  const item = list.find(item => {
                    return item.dataset.id === target.id;
                  });
                  if (!item) {
                    console.warn("the item selected does not exist");
                  }
                  selected = item;
                  const active = list.find(item => item.classList.contains("item--active"));
                  if (active) active.classList.remove("item--active");
                  item?.classList?.add("item--active");
                });
              };
              const observer = new IntersectionObserver(callback, {
                threshold: [0.5],
                rootMargin: "-150px 0px  50%"
              });
              const items = component.shadowRoot.querySelectorAll("h1,h2, h3,h4");
              items.forEach(item => observer.observe(item));
            }, []);
            const output = titles.map((item, i) => {
              const attrs = {
                shadowRoot,
                item
              };
              if (i === 0) attrs.active = true;
              return React.createElement(_item.RightAsideItem, {
                key: `${item}.${i}`,
                ...attrs
              });
            });
            return React.createElement("aside", {
              className: "docs__aside-navbar",
              ref: ref
            }, React.createElement("div", {
              className: "aside__container"
            }, React.createElement("h4", null, "Right Aside"), React.createElement("ol", null, output)));
          };
          exports.RightAside = RightAside;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/right-aside/item
      ****************************************/

      ims.set('./views/right-aside/item', {
        hash: 1681963556,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RightAsideItem = RightAsideItem;
          var React = require("react");
          var _link = require("@beyond/ui/link");
          function RightAsideItem({
            item,
            shadowRoot,
            active
          }) {
            const onClick = event => {
              event.preventDefault();
              const target = shadowRoot.getElementById(item.id);
              if (!target) {
                return;
              }
              const body = document.querySelector("body");
              body.scroll({
                top: target.offsetTop,
                left: 0,
                behavior: "smooth"
              });
            };
            const attrs = {};
            if (active) attrs.className = "item--active";
            return React.createElement("li", {
              onClick: onClick,
              ...attrs,
              "data-id": item.id
            }, React.createElement(_link.Link, {
              href: `#${item.id}`
            }, item.innerText));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ContentsPage",
        "name": "ContentsPage"
      }, {
        "im": "./views/right-aside/index",
        "from": "RightAside",
        "name": "RightAside"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ContentsPage') && _export("ContentsPage", ContentsPage = require ? require('./index').ContentsPage : value);
        (require || prop === 'RightAside') && _export("RightAside", RightAside = require ? require('./views/right-aside/index').RightAside : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFXQSxNQUFNQSxLQUFLLEdBQXNCLEVBQUU7VUFFNUIsTUFBTUMsV0FBVyxHQUFHQyxLQUFLLENBQUNDLGFBQWEsQ0FBQ0gsS0FBSyxDQUFDO1VBQUNJO1VBQy9DLE1BQU1DLGNBQWMsR0FBRyxNQUFNSCxLQUFLLENBQUNJLFVBQVUsQ0FBQ0wsV0FBVyxDQUFDO1VBQUNHOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RsRTtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBRUE7VUFDQUc7VUFDQUE7VUFFTztVQUFVLFNBQVVDLFlBQVksQ0FBQztZQUFFQyxTQUFTO1lBQUVDO1VBQVMsQ0FBRTtZQUMvRCxNQUFNO2NBQUVDLE9BQU8sRUFBRUM7WUFBSSxDQUFFLEdBQUdDLFlBQU0sQ0FBQ0MsU0FBUztZQUMxQztZQUVBLE1BQU1DLE9BQU8sR0FBSUMsSUFBSSxJQUFLQSxJQUFJLENBQUNELE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsRUFBRSxDQUFDO1lBQ3RFLE1BQU1DLFVBQVUsR0FBR04sSUFBSSxLQUFLLElBQUksR0FBR08sUUFBUSxHQUFHQyxVQUFVO1lBQ3hELE1BQU1DLElBQUksR0FBR1osU0FBUyxDQUFDYSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsQ0FBQ1IsT0FBTyxDQUFDLENBQUNTLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDdkQsTUFBTSxDQUFDQyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHLGtCQUFRLEVBQUNSLFVBQVUsQ0FBQ0csSUFBSSxDQUFDLENBQUM7WUFDNUQsTUFBTSxDQUFDTSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHLGtCQUFRLEdBQWE7WUFDckQsTUFBTSxDQUFDQyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHLGtCQUFRLEVBQWlCQyxXQUFXLENBQUNDLEdBQUcsRUFBRSxDQUFDO1lBQ3pFLE1BQU07Y0FBRUM7WUFBVSxDQUFFLEdBQUd2QixTQUFTO1lBRWhDLFNBQVN3QixjQUFjLENBQUM7Y0FBRUM7WUFBUSxDQUFFO2NBQ25DLE9BQU9qQywwQ0FBR2lDLFFBQVEsQ0FBSTtZQUN2QjtZQUVBLG1CQUFTLEVBQUMsTUFBSztjQUNkLE1BQU1DLEtBQUssR0FBYUgsVUFBVSxDQUFDSSxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7Y0FDbEUsTUFBTUMsUUFBUSxHQUFHLE1BQUs7Z0JBQ3JCWixZQUFZLENBQUNSLFVBQVUsQ0FBQ0csSUFBSSxDQUFDLENBQUM7Z0JBQzlCUyxVQUFVLENBQUNDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7Y0FDOUIsQ0FBQztjQUNEZCxVQUFVLENBQUNxQixHQUFHLENBQUNDLEVBQUUsQ0FBQyxRQUFRLEVBQUVGLFFBQVEsQ0FBQztjQUNyQ1YsV0FBVyxDQUFDYSxLQUFLLENBQUNDLElBQUksQ0FBQ04sS0FBSyxDQUFDLENBQUM7Y0FDOUIsT0FBTyxNQUFNbEIsVUFBVSxDQUFDcUIsR0FBRyxDQUFDQyxFQUFFLENBQUMsUUFBUSxFQUFFRixRQUFRLENBQUM7WUFDbkQsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLElBQUksQ0FBQ2IsU0FBUyxFQUFFO2NBQ2YsT0FDQ3ZCO2dCQUFNeUMsU0FBUyxFQUFDO2NBQXNCLEdBQ3JDekM7Z0JBQVN5QyxTQUFTLEVBQUM7Y0FBb0IsR0FDdEN6QyxtREFBMEIsQ0FDakIsQ0FDSjs7WUFJVCxNQUFNMEMsT0FBTyxHQUFHMUIsVUFBVSxDQUFDRyxJQUFJLENBQUM7WUFFaEMsT0FDQ25CLG9CQUFDRCxvQkFBVyxDQUFDNEMsUUFBUTtjQUFDN0MsS0FBSyxFQUFFO2dCQUFFMkIsUUFBUTtnQkFBRUMsV0FBVztnQkFBRUssVUFBVTtnQkFBRXZCO2NBQVM7WUFBRSxHQUM1RVI7Y0FBTXlDLFNBQVMsRUFBQztZQUFzQixHQUNyQ3pDO2NBQVN5QyxTQUFTLEVBQUM7WUFBb0IsR0FDdEN6QyxvQkFBQzBDLE9BQU87Y0FBQ0UsVUFBVSxFQUFFO2dCQUFFQyxPQUFPLEVBQUViO2NBQWM7WUFBRSxFQUFJLENBQzNDLEVBQ1RQLFFBQVEsRUFBRXFCLE1BQU0sR0FBRzlDLG9CQUFDK0Msc0JBQVUsT0FBRyxHQUFHLElBQUksQ0FDbkMsQ0FDZTtVQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1REE7VUFRTSxNQUFPOUIsUUFBUyxTQUFRK0IsWUFBTTtZQUVoQyxRQUFRLEdBQUcsS0FBSztZQUNoQixJQUFJQyxPQUFPO2NBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUTtZQUN4QjtZQUVBLE9BQU8sR0FBRyxLQUFLO1lBQ2YsSUFBSUMsTUFBTTtjQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU87WUFDdkI7WUFFQSxNQUFNLEdBQWUsRUFBRTtZQUN2QixJQUFJcEQsS0FBSztjQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDdEI7WUFFQSxTQUFTLEdBQUcsS0FBSztZQUNqQixJQUFJcUQsUUFBUTtjQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVM7WUFDekI7WUFFUyxVQUFVO1lBQ25CLElBQUlDLFNBQVM7Y0FDVCxPQUFPLElBQUksQ0FBQyxVQUFVO1lBQzFCO1lBRUFDLFlBQVlELFNBQVM7Y0FDakIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLFVBQVUsR0FBR0EsU0FBUztZQUMvQjtZQUVBLE1BQU1FLEtBQUs7Y0FDUCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUk7Y0FDcEIsSUFBSSxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDO2NBQ3RCLE1BQU0sSUFBSUMsT0FBTyxDQUFDQyxPQUFPLElBQUlDLFVBQVUsQ0FBQ0QsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2NBRXZELElBQUksQ0FBQyxNQUFNLENBQUNFLElBQUksQ0FBQztnQkFBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQUV6QyxJQUFJLEVBQUU7Y0FBTyxDQUFDLENBQUM7Y0FDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQ3dDLElBQUksQ0FBQztnQkFBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQUV6QyxJQUFJLEVBQUU7Y0FBVyxDQUFDLENBQUM7Y0FFNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLO2NBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTtjQUNuQixJQUFJLENBQUNvQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQzFCO1lBRUFNLE9BQU8sQ0FBQ0MsTUFBa0I7Y0FDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLO2NBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTtjQUNuQkEsTUFBTSxDQUFDQyxPQUFPLENBQUNDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDTCxJQUFJLENBQUNLLE9BQU8sQ0FBQyxDQUFDO2NBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSTtZQUN6QjtZQUVBQyxNQUFNO2NBQ0YsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUN0Qjs7VUFDSC9EOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9ERDtVQUNBO1VBRU0sU0FBVWdFLElBQUksQ0FBQztZQUFFTjtVQUFFLENBQUU7WUFDMUIsT0FDQzVEO2NBQUt5QyxTQUFTLEVBQUM7WUFBZSxHQUM3QnpDLHNGQUF3QyxFQUN4Q0E7Y0FBS3lDLFNBQVMsRUFBQztZQUFlLEdBQzdCekMsb0JBQUNtRSxvQkFBYTtjQUFDQyxJQUFJLEVBQUMsUUFBUTtjQUFDM0IsU0FBUyxFQUFDO1lBQWEsRUFBRyxFQUN2RHpDLG9CQUFDbUUsb0JBQWE7Y0FBQ0MsSUFBSSxFQUFDLFFBQVE7Y0FBQzNCLFNBQVMsRUFBQztZQUF1QixFQUFHLENBQzVELENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQTtVQUVBO1VBQ0E7VUFPTztVQUNQLE1BQU1NLFVBQVUsR0FBRyxNQUFLO1lBQ3BCLE1BQU07Y0FBRWhCLFVBQVU7Y0FBRU4sUUFBUTtjQUFFakI7WUFBUyxDQUFFLEdBQUcsMkJBQWMsR0FBRTtZQUU1RCxNQUFNLENBQUM2RCxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHdEUsS0FBSyxDQUFDdUUsUUFBUSxDQUFDOUMsUUFBUSxDQUFDO1lBQ3BELE1BQU0rQyxHQUFHLEdBQUd4RSxLQUFLLENBQUN5RSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCekUsS0FBSyxDQUFDMEUsZUFBZSxDQUFDLE1BQUs7Y0FDdkIsTUFBTUMsUUFBUSxHQUFJQyxPQUFPLElBQUk7Z0JBQ3pCLElBQUlDLFFBQVE7Z0JBRVpELE9BQU8sQ0FBQ2IsT0FBTyxDQUFFZSxLQUFLLElBQUk7a0JBQ3RCLE1BQU07b0JBQ0ZDLGtCQUFrQixFQUFFO3NCQUFFQztvQkFBRyxDQUFFO29CQUMzQkM7a0JBQU0sQ0FDVCxHQUFHSCxLQUFLO2tCQUNULE1BQU1JLElBQUksR0FBRyxDQUFDLEdBQUdWLEdBQUcsQ0FBQy9ELE9BQU8sQ0FBQzBCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2tCQUNwRCxJQUFJZ0QsUUFBUSxHQUFHSCxHQUFHLEdBQUcsR0FBRztrQkFDeEIsSUFBSUcsUUFBUSxHQUFHLEVBQUUsSUFBSUEsUUFBUSxHQUFHLEdBQUcsSUFBSU4sUUFBUSxFQUFFO2tCQUVqRCxNQUFNTyxJQUFJLEdBQUdGLElBQUksQ0FBQ0csSUFBSSxDQUFFRCxJQUFJLElBQUk7b0JBQzVCLE9BQU9BLElBQUksQ0FBQ0UsT0FBTyxDQUFDMUIsRUFBRSxLQUFLcUIsTUFBTSxDQUFDckIsRUFBRTtrQkFDeEMsQ0FBQyxDQUFDO2tCQUVGLElBQUksQ0FBQ3dCLElBQUksRUFBRTtvQkFDUEcsT0FBTyxDQUFDQyxJQUFJLENBQUMsa0NBQWtDLENBQUM7O2tCQUVwRFgsUUFBUSxHQUFHTyxJQUFJO2tCQUNmLE1BQU1LLE1BQU0sR0FBR1AsSUFBSSxDQUFDRyxJQUFJLENBQUVELElBQUksSUFBS0EsSUFBSSxDQUFDTSxTQUFTLENBQUNDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztrQkFDM0UsSUFBSUYsTUFBTSxFQUFFQSxNQUFNLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGNBQWMsQ0FBQztrQkFFbkRSLElBQUksRUFBRU0sU0FBUyxFQUFFRyxHQUFHLENBQUMsY0FBYyxDQUFDO2dCQUN4QyxDQUFDLENBQUM7Y0FDTixDQUFDO2NBRUQsTUFBTUMsUUFBUSxHQUFHLElBQUlDLG9CQUFvQixDQUFDcEIsUUFBUSxFQUFFO2dCQUNoRHFCLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDaEJDLFVBQVUsRUFBRTtlQUNmLENBQUM7Y0FFRixNQUFNL0QsS0FBSyxHQUFHMUIsU0FBUyxDQUFDdUIsVUFBVSxDQUFDSSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7Y0FDbkVELEtBQUssQ0FBQzZCLE9BQU8sQ0FBRXFCLElBQUksSUFBS1UsUUFBUSxDQUFDSSxPQUFPLENBQUNkLElBQUksQ0FBQyxDQUFDO1lBQ25ELENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixNQUFNZSxNQUFNLEdBQUc5QixNQUFNLENBQUNoRCxHQUFHLENBQUMsQ0FBQytELElBQUksRUFBRWdCLENBQUMsS0FBSTtjQUNsQyxNQUFNQyxLQUFLLEdBQVc7Z0JBQUV0RSxVQUFVO2dCQUFFcUQ7Y0FBSSxDQUFFO2NBRTFDLElBQUlnQixDQUFDLEtBQUssQ0FBQyxFQUFFQyxLQUFLLENBQUNaLE1BQU0sR0FBRyxJQUFJO2NBQ2hDLE9BQU96RixvQkFBQ3NHLG9CQUFjO2dCQUFDQyxHQUFHLEVBQUUsR0FBR25CLElBQUksSUFBSWdCLENBQUMsRUFBRTtnQkFBQSxHQUFNQztjQUFLLEVBQUk7WUFDN0QsQ0FBQyxDQUFDO1lBRUYsT0FDSXJHO2NBQU95QyxTQUFTLEVBQUMsb0JBQW9CO2NBQUMrQixHQUFHLEVBQUVBO1lBQUcsR0FDMUN4RTtjQUFLeUMsU0FBUyxFQUFDO1lBQWtCLEdBQzdCekMsOENBQW9CLEVBQ3BCQSxnQ0FBS21HLE1BQU0sQ0FBTSxDQUNmLENBQ0Y7VUFFaEIsQ0FBQztVQUFDakc7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckVGO1VBQ0E7VUFPTSxTQUFVb0csY0FBYyxDQUFDO1lBQUVsQixJQUFJO1lBQUVyRCxVQUFVO1lBQUUwRDtVQUFNLENBQVU7WUFDL0QsTUFBTWUsT0FBTyxHQUFJQyxLQUFLLElBQUk7Y0FDdEJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3RCLE1BQU16QixNQUFNLEdBQUdsRCxVQUFVLENBQUM0RSxjQUFjLENBQUN2QixJQUFJLENBQUN4QixFQUFFLENBQUM7Y0FDakQsSUFBSSxDQUFDcUIsTUFBTSxFQUFFO2dCQUNUOztjQUVKLE1BQU0yQixJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUUzQ0YsSUFBSSxDQUFDRyxNQUFNLENBQUM7Z0JBQ1IvQixHQUFHLEVBQUVDLE1BQU0sQ0FBQytCLFNBQVM7Z0JBQ3JCQyxJQUFJLEVBQUUsQ0FBQztnQkFDUEMsUUFBUSxFQUFFO2VBQ2IsQ0FBQztZQUNOLENBQUM7WUFDRCxNQUFNYixLQUFLLEdBQVEsRUFBRTtZQUNyQixJQUFJWixNQUFNLEVBQUVZLEtBQUssQ0FBQzVELFNBQVMsR0FBRyxjQUFjO1lBRTVDLE9BQ0l6QztjQUFJd0csT0FBTyxFQUFFQSxPQUFPO2NBQUEsR0FBTUgsS0FBSztjQUFBLFdBQVdqQixJQUFJLENBQUN4QjtZQUFFLEdBQzdDNUQsb0JBQUNtSCxVQUFJO2NBQUNDLElBQUksRUFBRSxJQUFJaEMsSUFBSSxDQUFDeEIsRUFBRTtZQUFFLEdBQUd3QixJQUFJLENBQUNpQyxTQUFTLENBQVEsQ0FDakQ7VUFFYiIsIm5hbWVzIjpbInZhbHVlIiwiRG9jc0NvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJleHBvcnRzIiwidXNlRG9jc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwicmVxdWlyZSIsIkNvbnRlbnRzUGFnZSIsImNvbnRlbnRJZCIsImNvbXBvbmVudCIsImN1cnJlbnQiLCJsYW5nIiwiYmV5b25kIiwibGFuZ3VhZ2VzIiwicmVwbGFjZSIsInRleHQiLCJ0b1VwcGVyQ2FzZSIsIkNvbXBvbmVudHMiLCJDb250ZW50cyIsIkNvbnRlbnRzRW4iLCJuYW1lIiwic3BsaXQiLCJtYXAiLCJqb2luIiwiQ29tcG9uZW50Iiwic2V0Q29tcG9uZW50Iiwic2VjdGlvbnMiLCJzZXRTZWN0aW9ucyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwicGVyZm9ybWFuY2UiLCJub3ciLCJzaGFkb3dSb290IiwiQ29udGVudFdyYXBwZXIiLCJjaGlsZHJlbiIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsIm9uQ2hhbmdlIiwiaG1yIiwib24iLCJBcnJheSIsImZyb20iLCJjbGFzc05hbWUiLCJDb250ZW50IiwiUHJvdmlkZXIiLCJjb21wb25lbnRzIiwid3JhcHBlciIsImxlbmd0aCIsIlJpZ2h0QXNpZGUiLCJFdmVudHMiLCJsb2FkaW5nIiwibG9hZGVkIiwiaHlkcmF0ZWQiLCJjb250YWluZXIiLCJjb25zdHJ1Y3RvciIsImZldGNoIiwidHJpZ2dlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInB1c2giLCJpZCIsImh5ZHJhdGUiLCJjYWNoZWQiLCJmb3JFYWNoIiwiY29tcGFueSIsInRvSlNPTiIsIlF1aXoiLCJBcHBJY29uQnV0dG9uIiwiaWNvbiIsInRpdGxlcyIsInNldFRpdGxlcyIsInVzZVN0YXRlIiwicmVmIiwidXNlUmVmIiwidXNlTGF5b3V0RWZmZWN0IiwiY2FsbGJhY2siLCJlbnRyaWVzIiwic2VsZWN0ZWQiLCJlbnRyeSIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInRhcmdldCIsImxpc3QiLCJwb3NpdGlvbiIsIml0ZW0iLCJmaW5kIiwiZGF0YXNldCIsImNvbnNvbGUiLCJ3YXJuIiwiYWN0aXZlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwidGhyZXNob2xkIiwicm9vdE1hcmdpbiIsIm9ic2VydmUiLCJvdXRwdXQiLCJpIiwiYXR0cnMiLCJSaWdodEFzaWRlSXRlbSIsImtleSIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZ2V0RWxlbWVudEJ5SWQiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsIiwib2Zmc2V0VG9wIiwibGVmdCIsImJlaGF2aW9yIiwiTGluayIsImhyZWYiLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRleHQudHN4IiwidHMvaW5kZXgudHN4IiwidHMvbW9kZWxzL2NvbnRlbnRzLnRzIiwidHMvcXVpei50c3giLCJ0cy92aWV3cy9yaWdodC1hc2lkZS9pbmRleC50c3giLCJ0cy92aWV3cy9yaWdodC1hc2lkZS9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=
System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.7/core", "@beyond/docs@1/contents/esp", "@beyond/docs@1/missing.widget", "@beyond/docs@1/under-construction.widget", "@mdx-js/react@2.2.1", "@beyond/docs@1/components/html", "@beyond/ui@1.0.0/icons", "@beyond/docs@1/code", "@beyond/docs@1/preload", "@beyond/docs@1/ui/icons", "@beyond/ui@1.0.0/link", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, ContentsPage, MDXComponentsProvider, RightAside, __beyond_pkg, hmr;
  _export({
    ContentsPage: void 0,
    MDXComponentsProvider: void 0,
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
    }, function (_beyondDocs1MissingWidget) {
      dependency_4 = _beyondDocs1MissingWidget;
    }, function (_beyondDocs1UnderConstructionWidget) {
      dependency_5 = _beyondDocs1UnderConstructionWidget;
    }, function (_mdxJsReact) {
      dependency_6 = _mdxJsReact;
    }, function (_beyondDocs1ComponentsHtml) {
      dependency_7 = _beyondDocs1ComponentsHtml;
    }, function (_beyondUi100Icons) {
      dependency_8 = _beyondUi100Icons;
    }, function (_beyondDocs1Code) {
      dependency_9 = _beyondDocs1Code;
    }, function (_beyondDocs1Preload) {
      dependency_10 = _beyondDocs1Preload;
    }, function (_beyondDocs1UiIcons) {
      dependency_11 = _beyondDocs1UiIcons;
    }, function (_beyondUi100Link) {
      dependency_12 = _beyondUi100Link;
    }, function (_beyondJsKernel017Styles) {
      dependency_13 = _beyondJsKernel017Styles;
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
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['@beyond/docs/contents/esp', dependency_3], ['@beyond/docs/missing.widget', dependency_4], ['@beyond/docs/under-construction.widget', dependency_5], ['@mdx-js/react', dependency_6], ['@beyond/docs/components/html', dependency_7], ['@beyond/ui/icons', dependency_8], ['@beyond/docs/code', dependency_9], ['@beyond/docs/preload', dependency_10], ['@beyond/docs/ui/icons', dependency_11], ['@beyond/ui/link', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs@1/contents-data');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./container
      ***************************/
      ims.set('./container', {
        hash: 0,
        creator: function (require, exports) {
          "use strict";
        }
      });

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
        hash: 4101161360,
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
          var _rightAside = require("./views/right-aside");
          require("@beyond/docs/missing.widget");
          require("@beyond/docs/under-construction.widget");
          var _mdxProvider = require("./mdx-provider");
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
            const name = contentId.split("-").map(replace).join("");
            const [Component, setComponent] = (0, React.useState)(Contents[name]);
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
              const items = shadowRoot.querySelectorAll("h1,h2,h3,h4");
              const onChange = () => {
                setComponent(Contents[name]);
                setUpdated(performance.now());
              };
              Contents.hmr.on("change", onChange);
              setSections(Array.from(items));
              return () => Contents.hmr.on("change", onChange);
            }, []);
            if (!Component) {
              return React.createElement("main", {
                className: "page__main-container"
              }, React.createElement("section", {
                className: "page__main-content"
              }, React.createElement("app-under-construction", null)));
            }
            const Content = Contents[name];
            return React.createElement(_mdxProvider.MDXComponentsProvider, null, React.createElement(_context.DocsContext.Provider, {
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
            })), sections?.length && React.createElement(_rightAside.RightAside, null))));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./mdx-provider
      ******************************/

      ims.set('./mdx-provider', {
        hash: 3706649702,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MDXComponentsProvider = MDXComponentsProvider;
          var React = require("react");
          var _react2 = require("@mdx-js/react");
          var _html = require("@beyond/docs/components/html");
          var _icons = require("@beyond/ui/icons");
          const components = {
            Link: _html.Link,
            ELink: _html.ELink,
            Icon: _icons.BeyondIcon,
            PreTitle: _html.PreTitle,
            Title: _html.Title,
            DocHeader: _html.DocHeader,
            Subtitle: _html.Subtitle
          };
          /*bundle*/
          function MDXComponentsProvider({
            children
          }) {
            return React.createElement(_react2.MDXProvider, {
              components: components
            }, children);
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
        hash: 3083771126,
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
                  item.classList.add("item--active");
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
        "im": "./mdx-provider",
        "from": "MDXComponentsProvider",
        "name": "MDXComponentsProvider"
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
        (require || prop === 'MDXComponentsProvider') && _export("MDXComponentsProvider", MDXComponentsProvider = require ? require('./mdx-provider').MDXComponentsProvider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDQUE7VUFXQSxNQUFNQSxLQUFLLEdBQXNCLEVBQUU7VUFFNUIsTUFBTUMsV0FBVyxHQUFHQyxLQUFLLENBQUNDLGFBQWEsQ0FBQ0gsS0FBSyxDQUFDO1VBQUNJO1VBQy9DLE1BQU1DLGNBQWMsR0FBRyxNQUFNSCxLQUFLLENBQUNJLFVBQVUsQ0FBQ0wsV0FBVyxDQUFDO1VBQUNHOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RsRTtVQUVBO1VBQ0E7VUFDQTtVQUVBO1VBQ0FHO1VBQ0FBO1VBQ0E7VUFFTztVQUFVLFNBQVVDLFlBQVksQ0FBQztZQUFFQyxTQUFTO1lBQUVDO1VBQVMsQ0FBRTtZQUM1RCxNQUFNO2NBQUVDLE9BQU8sRUFBRUM7WUFBSSxDQUFFLEdBQUdDLFlBQU0sQ0FBQ0MsU0FBUztZQUMxQztZQUVBLE1BQU1DLE9BQU8sR0FBSUMsSUFBSSxJQUFLQSxJQUFJLENBQUNELE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsRUFBRSxDQUFDO1lBQ3RFLE1BQU1DLElBQUksR0FBR1QsU0FBUyxDQUFDVSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDLENBQUNNLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDdkQsTUFBTSxDQUFDQyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHLGtCQUFRLEVBQUNDLFFBQVEsQ0FBQ04sSUFBSSxDQUFDLENBQUM7WUFDMUQsTUFBTSxDQUFDTyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHLGtCQUFRLEdBQWE7WUFDckQsTUFBTSxDQUFDQyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHLGtCQUFRLEVBQWlCQyxXQUFXLENBQUNDLEdBQUcsRUFBRSxDQUFDO1lBQ3pFLE1BQU07Y0FBRUM7WUFBVSxDQUFFLEdBQUdyQixTQUFTO1lBRWhDLFNBQVNzQixjQUFjLENBQUM7Y0FBRUM7WUFBUSxDQUFFO2NBQ2hDLE9BQU8vQiwwQ0FBRytCLFFBQVEsQ0FBSTtZQUMxQjtZQUVBLG1CQUFTLEVBQUMsTUFBSztjQUNYLE1BQU1DLEtBQUssR0FBYUgsVUFBVSxDQUFDSSxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7Y0FDbEUsTUFBTUMsUUFBUSxHQUFHLE1BQUs7Z0JBQ2xCYixZQUFZLENBQUNDLFFBQVEsQ0FBQ04sSUFBSSxDQUFDLENBQUM7Z0JBQzVCVSxVQUFVLENBQUNDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7Y0FDakMsQ0FBQztjQUNETixRQUFRLENBQUNhLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDLFFBQVEsRUFBRUYsUUFBUSxDQUFDO2NBQ25DVixXQUFXLENBQUNhLEtBQUssQ0FBQ0MsSUFBSSxDQUFDTixLQUFLLENBQUMsQ0FBQztjQUM5QixPQUFPLE1BQU1WLFFBQVEsQ0FBQ2EsR0FBRyxDQUFDQyxFQUFFLENBQUMsUUFBUSxFQUFFRixRQUFRLENBQUM7WUFDcEQsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLElBQUksQ0FBQ2QsU0FBUyxFQUFFO2NBQ1osT0FDSXBCO2dCQUFNdUMsU0FBUyxFQUFDO2NBQXNCLEdBQ2xDdkM7Z0JBQVN1QyxTQUFTLEVBQUM7Y0FBb0IsR0FDbkN2QyxtREFBMEIsQ0FDcEIsQ0FDUDs7WUFJZixNQUFNd0MsT0FBTyxHQUFHbEIsUUFBUSxDQUFDTixJQUFJLENBQUM7WUFFOUIsT0FDSWhCLG9CQUFDeUMsa0NBQXFCLFFBQ2xCekMsb0JBQUNELG9CQUFXLENBQUMyQyxRQUFRO2NBQUM1QyxLQUFLLEVBQUU7Z0JBQUV5QixRQUFRO2dCQUFFQyxXQUFXO2dCQUFFSyxVQUFVO2dCQUFFckI7Y0FBUztZQUFFLEdBQ3pFUjtjQUFNdUMsU0FBUyxFQUFDO1lBQXNCLEdBQ2xDdkM7Y0FBU3VDLFNBQVMsRUFBQztZQUFvQixHQUNuQ3ZDLG9CQUFDd0MsT0FBTztjQUFDRyxVQUFVLEVBQUU7Z0JBQUVDLE9BQU8sRUFBRWQ7Y0FBYztZQUFFLEVBQUksQ0FDOUMsRUFDVFAsUUFBUSxFQUFFc0IsTUFBTSxJQUFJN0Msb0JBQUM4QyxzQkFBVSxPQUFHLENBQ2hDLENBQ1ksQ0FDSDtVQUVoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3REE7VUFDQTtVQUNBO1VBQ0E7VUFLQSxNQUFNSCxVQUFVLEdBQUc7WUFDZkksSUFBSSxFQUFKQSxVQUFJO1lBQ0pDLEtBQUssRUFBTEEsV0FBSztZQUVMQyxJQUFJLEVBQUVDLGlCQUFVO1lBQ2hCQyxRQUFRLEVBQVJBLGNBQVE7WUFDUkMsS0FBSyxFQUFMQSxXQUFLO1lBQ0xDLFNBQVMsRUFBVEEsZUFBUztZQUNUQyxRQUFRLEVBQVJBO1dBQ0g7VUFFTTtVQUFVLFNBQVViLHFCQUFxQixDQUFDO1lBQUVWO1VBQVEsQ0FBRTtZQUN6RCxPQUFPL0Isb0JBQUN1RCxtQkFBVztjQUFDWixVQUFVLEVBQUVBO1lBQVUsR0FBR1osUUFBUSxDQUFlO1VBQ3hFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQTtVQVFNLE1BQU9ULFFBQVMsU0FBUWtDLFlBQU07WUFFaEMsUUFBUSxHQUFHLEtBQUs7WUFDaEIsSUFBSUMsT0FBTztjQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVE7WUFDeEI7WUFFQSxPQUFPLEdBQUcsS0FBSztZQUNmLElBQUlDLE1BQU07Y0FDTixPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3ZCO1lBRUEsTUFBTSxHQUFlLEVBQUU7WUFDdkIsSUFBSTVELEtBQUs7Y0FDTCxPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ3RCO1lBRUEsU0FBUyxHQUFHLEtBQUs7WUFDakIsSUFBSTZELFFBQVE7Y0FDUixPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3pCO1lBRVMsVUFBVTtZQUNuQixJQUFJQyxTQUFTO2NBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUMxQjtZQUVBQyxZQUFZRCxTQUFTO2NBQ2pCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxVQUFVLEdBQUdBLFNBQVM7WUFDL0I7WUFFQSxNQUFNRSxLQUFLO2NBQ1AsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJO2NBQ3BCLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUN0QixNQUFNLElBQUlDLE9BQU8sQ0FBQ0MsT0FBTyxJQUFJQyxVQUFVLENBQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztjQUV2RCxJQUFJLENBQUMsTUFBTSxDQUFDRSxJQUFJLENBQUM7Z0JBQUNDLEVBQUUsRUFBRSxDQUFDO2dCQUFFcEQsSUFBSSxFQUFFO2NBQU8sQ0FBQyxDQUFDO2NBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUNtRCxJQUFJLENBQUM7Z0JBQUNDLEVBQUUsRUFBRSxDQUFDO2dCQUFFcEQsSUFBSSxFQUFFO2NBQVcsQ0FBQyxDQUFDO2NBRTVDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSztjQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUk7Y0FDbkIsSUFBSSxDQUFDK0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUMxQjtZQUVBTSxPQUFPLENBQUNDLE1BQWtCO2NBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSztjQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUk7Y0FDbkJBLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQ0wsSUFBSSxDQUFDSyxPQUFPLENBQUMsQ0FBQztjQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUk7WUFDekI7WUFFQUMsTUFBTTtjQUNGLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDdEI7O1VBQ0h2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvREQ7VUFDQTtVQUVNLFNBQVV3RSxJQUFJLENBQUM7WUFBRU47VUFBRSxDQUFFO1lBQzFCLE9BQ0NwRTtjQUFLdUMsU0FBUyxFQUFDO1lBQWUsR0FDN0J2QyxzRkFBd0MsRUFDeENBO2NBQUt1QyxTQUFTLEVBQUM7WUFBZSxHQUM3QnZDLG9CQUFDMkUsb0JBQWE7Y0FBQ0MsSUFBSSxFQUFDLFFBQVE7Y0FBQ3JDLFNBQVMsRUFBQztZQUFhLEVBQUcsRUFDdkR2QyxvQkFBQzJFLG9CQUFhO2NBQUNDLElBQUksRUFBQyxRQUFRO2NBQUNyQyxTQUFTLEVBQUM7WUFBdUIsRUFBRyxDQUM1RCxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkE7VUFFQTtVQUNBO1VBT087VUFDUCxNQUFNTyxVQUFVLEdBQUcsTUFBSztZQUNwQixNQUFNO2NBQUVqQixVQUFVO2NBQUVOLFFBQVE7Y0FBRWY7WUFBUyxDQUFFLEdBQUcsMkJBQWMsR0FBRTtZQUU1RCxNQUFNLENBQUNxRSxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHOUUsS0FBSyxDQUFDK0UsUUFBUSxDQUFDeEQsUUFBUSxDQUFDO1lBQ3BELE1BQU15RCxHQUFHLEdBQUdoRixLQUFLLENBQUNpRixNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCakYsS0FBSyxDQUFDa0YsZUFBZSxDQUFDLE1BQUs7Y0FDdkIsTUFBTUMsUUFBUSxHQUFJQyxPQUFPLElBQUk7Z0JBQ3pCLElBQUlDLFFBQVE7Z0JBRVpELE9BQU8sQ0FBQ2IsT0FBTyxDQUFFZSxLQUFLLElBQUk7a0JBQ3RCLE1BQU07b0JBQ0ZDLGtCQUFrQixFQUFFO3NCQUFFQztvQkFBRyxDQUFFO29CQUMzQkM7a0JBQU0sQ0FDVCxHQUFHSCxLQUFLO2tCQUNULE1BQU1JLElBQUksR0FBRyxDQUFDLEdBQUdWLEdBQUcsQ0FBQ3ZFLE9BQU8sQ0FBQ3dCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2tCQUNwRCxJQUFJMEQsUUFBUSxHQUFHSCxHQUFHLEdBQUcsR0FBRztrQkFDeEIsSUFBSUcsUUFBUSxHQUFHLEVBQUUsSUFBSUEsUUFBUSxHQUFHLEdBQUcsSUFBSU4sUUFBUSxFQUFFO2tCQUVqRCxNQUFNTyxJQUFJLEdBQUdGLElBQUksQ0FBQ0csSUFBSSxDQUFFRCxJQUFJLElBQUk7b0JBQzVCLE9BQU9BLElBQUksQ0FBQ0UsT0FBTyxDQUFDMUIsRUFBRSxLQUFLcUIsTUFBTSxDQUFDckIsRUFBRTtrQkFDeEMsQ0FBQyxDQUFDO2tCQUVGLElBQUksQ0FBQ3dCLElBQUksRUFBRTtvQkFDUEcsT0FBTyxDQUFDQyxJQUFJLENBQUMsa0NBQWtDLENBQUM7O2tCQUVwRFgsUUFBUSxHQUFHTyxJQUFJO2tCQUNmLE1BQU1LLE1BQU0sR0FBR1AsSUFBSSxDQUFDRyxJQUFJLENBQUVELElBQUksSUFBS0EsSUFBSSxDQUFDTSxTQUFTLENBQUNDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztrQkFDM0UsSUFBSUYsTUFBTSxFQUFFQSxNQUFNLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGNBQWMsQ0FBQztrQkFDbkRSLElBQUksQ0FBQ00sU0FBUyxDQUFDRyxHQUFHLENBQUMsY0FBYyxDQUFDO2dCQUN0QyxDQUFDLENBQUM7Y0FDTixDQUFDO2NBRUQsTUFBTUMsUUFBUSxHQUFHLElBQUlDLG9CQUFvQixDQUFDcEIsUUFBUSxFQUFFO2dCQUNoRHFCLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDaEJDLFVBQVUsRUFBRTtlQUNmLENBQUM7Y0FFRixNQUFNekUsS0FBSyxHQUFHeEIsU0FBUyxDQUFDcUIsVUFBVSxDQUFDSSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7Y0FDbkVELEtBQUssQ0FBQ3VDLE9BQU8sQ0FBRXFCLElBQUksSUFBS1UsUUFBUSxDQUFDSSxPQUFPLENBQUNkLElBQUksQ0FBQyxDQUFDO1lBQ25ELENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixNQUFNZSxNQUFNLEdBQUc5QixNQUFNLENBQUMzRCxHQUFHLENBQUMsQ0FBQzBFLElBQUksRUFBRWdCLENBQUMsS0FBSTtjQUNsQyxNQUFNQyxLQUFLLEdBQVc7Z0JBQUVoRixVQUFVO2dCQUFFK0Q7Y0FBSSxDQUFFO2NBRTFDLElBQUlnQixDQUFDLEtBQUssQ0FBQyxFQUFFQyxLQUFLLENBQUNaLE1BQU0sR0FBRyxJQUFJO2NBQ2hDLE9BQU9qRyxvQkFBQzhHLG9CQUFjO2dCQUFDQyxHQUFHLEVBQUUsR0FBR25CLElBQUksSUFBSWdCLENBQUMsRUFBRTtnQkFBQSxHQUFNQztjQUFLLEVBQUk7WUFDN0QsQ0FBQyxDQUFDO1lBRUYsT0FDSTdHO2NBQU91QyxTQUFTLEVBQUMsb0JBQW9CO2NBQUN5QyxHQUFHLEVBQUVBO1lBQUcsR0FDMUNoRjtjQUFLdUMsU0FBUyxFQUFDO1lBQWtCLEdBQzdCdkMsOENBQW9CLEVBQ3BCQSxnQ0FBSzJHLE1BQU0sQ0FBTSxDQUNmLENBQ0Y7VUFFaEIsQ0FBQztVQUFDekc7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEVGO1VBQ0E7VUFPTSxTQUFVNEcsY0FBYyxDQUFDO1lBQUVsQixJQUFJO1lBQUUvRCxVQUFVO1lBQUVvRTtVQUFNLENBQVU7WUFDL0QsTUFBTWUsT0FBTyxHQUFJQyxLQUFLLElBQUk7Y0FDdEJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3RCLE1BQU16QixNQUFNLEdBQUc1RCxVQUFVLENBQUNzRixjQUFjLENBQUN2QixJQUFJLENBQUN4QixFQUFFLENBQUM7Y0FDakQsSUFBSSxDQUFDcUIsTUFBTSxFQUFFO2dCQUNUOztjQUVKLE1BQU0yQixJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUUzQ0YsSUFBSSxDQUFDRyxNQUFNLENBQUM7Z0JBQ1IvQixHQUFHLEVBQUVDLE1BQU0sQ0FBQytCLFNBQVM7Z0JBQ3JCQyxJQUFJLEVBQUUsQ0FBQztnQkFDUEMsUUFBUSxFQUFFO2VBQ2IsQ0FBQztZQUNOLENBQUM7WUFDRCxNQUFNYixLQUFLLEdBQVEsRUFBRTtZQUNyQixJQUFJWixNQUFNLEVBQUVZLEtBQUssQ0FBQ3RFLFNBQVMsR0FBRyxjQUFjO1lBRTVDLE9BQ0l2QztjQUFJZ0gsT0FBTyxFQUFFQSxPQUFPO2NBQUEsR0FBTUgsS0FBSztjQUFBLFdBQVdqQixJQUFJLENBQUN4QjtZQUFFLEdBQzdDcEUsb0JBQUMrQyxVQUFJO2NBQUM0RSxJQUFJLEVBQUUsSUFBSS9CLElBQUksQ0FBQ3hCLEVBQUU7WUFBRSxHQUFHd0IsSUFBSSxDQUFDZ0MsU0FBUyxDQUFRLENBQ2pEO1VBRWIiLCJuYW1lcyI6WyJ2YWx1ZSIsIkRvY3NDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZURvY3NDb250ZXh0IiwidXNlQ29udGV4dCIsInJlcXVpcmUiLCJDb250ZW50c1BhZ2UiLCJjb250ZW50SWQiLCJjb21wb25lbnQiLCJjdXJyZW50IiwibGFuZyIsImJleW9uZCIsImxhbmd1YWdlcyIsInJlcGxhY2UiLCJ0ZXh0IiwidG9VcHBlckNhc2UiLCJuYW1lIiwic3BsaXQiLCJtYXAiLCJqb2luIiwiQ29tcG9uZW50Iiwic2V0Q29tcG9uZW50IiwiQ29udGVudHMiLCJzZWN0aW9ucyIsInNldFNlY3Rpb25zIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInNoYWRvd1Jvb3QiLCJDb250ZW50V3JhcHBlciIsImNoaWxkcmVuIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwib25DaGFuZ2UiLCJobXIiLCJvbiIsIkFycmF5IiwiZnJvbSIsImNsYXNzTmFtZSIsIkNvbnRlbnQiLCJNRFhDb21wb25lbnRzUHJvdmlkZXIiLCJQcm92aWRlciIsImNvbXBvbmVudHMiLCJ3cmFwcGVyIiwibGVuZ3RoIiwiUmlnaHRBc2lkZSIsIkxpbmsiLCJFTGluayIsIkljb24iLCJCZXlvbmRJY29uIiwiUHJlVGl0bGUiLCJUaXRsZSIsIkRvY0hlYWRlciIsIlN1YnRpdGxlIiwiTURYUHJvdmlkZXIiLCJFdmVudHMiLCJsb2FkaW5nIiwibG9hZGVkIiwiaHlkcmF0ZWQiLCJjb250YWluZXIiLCJjb25zdHJ1Y3RvciIsImZldGNoIiwidHJpZ2dlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInB1c2giLCJpZCIsImh5ZHJhdGUiLCJjYWNoZWQiLCJmb3JFYWNoIiwiY29tcGFueSIsInRvSlNPTiIsIlF1aXoiLCJBcHBJY29uQnV0dG9uIiwiaWNvbiIsInRpdGxlcyIsInNldFRpdGxlcyIsInVzZVN0YXRlIiwicmVmIiwidXNlUmVmIiwidXNlTGF5b3V0RWZmZWN0IiwiY2FsbGJhY2siLCJlbnRyaWVzIiwic2VsZWN0ZWQiLCJlbnRyeSIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInRhcmdldCIsImxpc3QiLCJwb3NpdGlvbiIsIml0ZW0iLCJmaW5kIiwiZGF0YXNldCIsImNvbnNvbGUiLCJ3YXJuIiwiYWN0aXZlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwidGhyZXNob2xkIiwicm9vdE1hcmdpbiIsIm9ic2VydmUiLCJvdXRwdXQiLCJpIiwiYXR0cnMiLCJSaWdodEFzaWRlSXRlbSIsImtleSIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZ2V0RWxlbWVudEJ5SWQiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsIiwib2Zmc2V0VG9wIiwibGVmdCIsImJlaGF2aW9yIiwiaHJlZiIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udGFpbmVyLnRzeCIsInRzL2NvbnRleHQudHN4IiwidHMvaW5kZXgudHN4IiwidHMvbWR4LXByb3ZpZGVyLnRzeCIsInRzL21vZGVscy9jb250ZW50cy50cyIsInRzL3F1aXoudHN4IiwidHMvdmlld3MvcmlnaHQtYXNpZGUvaW5kZXgudHN4IiwidHMvdmlld3MvcmlnaHQtYXNpZGUvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==
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
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.0"], ["swiper", "8.4.5"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
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
        hash: 2312228764,
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
            const [Component, setComponent] = (0, React.useState)();
            const [sections, setSections] = (0, React.useState)();
            const {
              shadowRoot
            } = component;
            function ContentWrapper({
              children
            }) {
              return React.createElement(React.Fragment, null, children);
            }
            const replace = text => text.replace(text[0], text[0].toUpperCase());
            const name = contentId.split("-").map(replace).join("");
            (0, React.useEffect)(() => {
              const items = shadowRoot.querySelectorAll("h1,h2,h3,h4");
              setSections(Array.from(items));
            }, []);
            if (!Contents[name]) {
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
        hash: 390622768,
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
            console.log(component);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSTtjQUN0QkEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7Y0FDdEIsTUFBTXhCLE1BQU0sR0FBR25FLFVBQVUsQ0FBQzRGLGNBQWMsQ0FBQ3RCLElBQUksQ0FBQzFCLEVBQUUsQ0FBQztjQUNqRCxJQUFJLENBQUN1QixNQUFNLEVBQUU7Z0JBQ1Q7O2NBRUosTUFBTTBCLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBRTNDRixJQUFJLENBQUNHLE1BQU0sQ0FBQztnQkFDUjlCLEdBQUcsRUFBRUMsTUFBTSxDQUFDOEIsU0FBUztnQkFDckJDLElBQUksRUFBRSxDQUFDO2dCQUNQQyxRQUFRLEVBQUU7ZUFDYixDQUFDO1lBQ04sQ0FBQztZQUNELE1BQU1iLEtBQUssR0FBUSxFQUFFO1lBQ3JCLElBQUlaLE1BQU0sRUFBRVksS0FBSyxDQUFDdkUsU0FBUyxHQUFHLGNBQWM7WUFFNUMsT0FDSWhDO2NBQUkwRyxPQUFPLEVBQUVBLE9BQU87Y0FBQSxHQUFNSCxLQUFLO2NBQUEsV0FBV2hCLElBQUksQ0FBQzFCO1lBQUUsR0FDN0M3RCxvQkFBQ3dDLFVBQUk7Y0FBQzZFLElBQUksRUFBRSxJQUFJOUIsSUFBSSxDQUFDMUIsRUFBRTtZQUFFLEdBQUcwQixJQUFJLENBQUMrQixTQUFTLENBQVEsQ0FDakQ7VUFFYiIsIm5hbWVzIjpbInZhbHVlIiwiRG9jc0NvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJleHBvcnRzIiwidXNlRG9jc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwicmVxdWlyZSIsIkNvbnRlbnRzUGFnZSIsImNvbnRlbnRJZCIsImNvbXBvbmVudCIsImN1cnJlbnQiLCJsYW5nIiwiYmV5b25kIiwibGFuZ3VhZ2VzIiwiQ29tcG9uZW50Iiwic2V0Q29tcG9uZW50Iiwic2VjdGlvbnMiLCJzZXRTZWN0aW9ucyIsInNoYWRvd1Jvb3QiLCJDb250ZW50V3JhcHBlciIsImNoaWxkcmVuIiwicmVwbGFjZSIsInRleHQiLCJ0b1VwcGVyQ2FzZSIsIm5hbWUiLCJzcGxpdCIsIm1hcCIsImpvaW4iLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImZyb20iLCJDb250ZW50cyIsImNsYXNzTmFtZSIsIkNvbnRlbnQiLCJNRFhDb21wb25lbnRzUHJvdmlkZXIiLCJQcm92aWRlciIsImNvbXBvbmVudHMiLCJ3cmFwcGVyIiwibGVuZ3RoIiwiUmlnaHRBc2lkZSIsIkxpbmsiLCJFTGluayIsIkljb24iLCJCZXlvbmRJY29uIiwiUHJlVGl0bGUiLCJUaXRsZSIsIkRvY0hlYWRlciIsIlN1YnRpdGxlIiwiTURYUHJvdmlkZXIiLCJFdmVudHMiLCJsb2FkaW5nIiwibG9hZGVkIiwiaHlkcmF0ZWQiLCJjb250YWluZXIiLCJjb25zdHJ1Y3RvciIsImZldGNoIiwidHJpZ2dlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInB1c2giLCJpZCIsImh5ZHJhdGUiLCJjYWNoZWQiLCJmb3JFYWNoIiwiY29tcGFueSIsInRvSlNPTiIsIlF1aXoiLCJBcHBJY29uQnV0dG9uIiwiaWNvbiIsInRpdGxlcyIsInNldFRpdGxlcyIsInVzZVN0YXRlIiwicmVmIiwidXNlUmVmIiwiY29uc29sZSIsImxvZyIsInVzZUxheW91dEVmZmVjdCIsImNhbGxiYWNrIiwiZW50cmllcyIsInNlbGVjdGVkIiwiZW50cnkiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJ0YXJnZXQiLCJsaXN0IiwicG9zaXRpb24iLCJpdGVtIiwiZmluZCIsImRhdGFzZXQiLCJ3YXJuIiwiYWN0aXZlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwidGhyZXNob2xkIiwicm9vdE1hcmdpbiIsIm9ic2VydmUiLCJvdXRwdXQiLCJpIiwiYXR0cnMiLCJSaWdodEFzaWRlSXRlbSIsImtleSIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZ2V0RWxlbWVudEJ5SWQiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsIiwib2Zmc2V0VG9wIiwibGVmdCIsImJlaGF2aW9yIiwiaHJlZiIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udGFpbmVyLnRzeCIsInRzL2NvbnRleHQudHN4IiwidHMvaW5kZXgudHN4IiwidHMvbWR4LXByb3ZpZGVyLnRzeCIsInRzL21vZGVscy9jb250ZW50cy50cyIsInRzL3F1aXoudHN4IiwidHMvdmlld3MvcmlnaHQtYXNpZGUvaW5kZXgudHN4IiwidHMvdmlld3MvcmlnaHQtYXNpZGUvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==
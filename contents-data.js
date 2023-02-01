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
        hash: 2968598078,
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
              document.querySelector('body').scrollTo({
                top: 0,
                behavior: 'auto'
              });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JHOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JFRjtVQUNBO1VBT00sU0FBVXdHLGNBQWMsQ0FBQztZQUFFbEIsSUFBSTtZQUFFekQsVUFBVTtZQUFFOEQ7VUFBTSxDQUFVO1lBQy9ELE1BQU1lLE9BQU8sR0FBSUMsS0FBSyxJQUFJO2NBQ3RCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QixNQUFNekIsTUFBTSxHQUFHdEQsVUFBVSxDQUFDZ0YsY0FBYyxDQUFDdkIsSUFBSSxDQUFDdkIsRUFBRSxDQUFDO2NBQ2pELElBQUksQ0FBQ29CLE1BQU0sRUFBRTtnQkFDVDs7Y0FFSixNQUFNMkIsSUFBSSxHQUFHekUsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBRTNDd0UsSUFBSSxDQUFDQyxNQUFNLENBQUM7Z0JBQ1J2RSxHQUFHLEVBQUUyQyxNQUFNLENBQUM2QixTQUFTO2dCQUNyQkMsSUFBSSxFQUFFLENBQUM7Z0JBQ1B4RSxRQUFRLEVBQUU7ZUFDYixDQUFDO1lBQ04sQ0FBQztZQUNELE1BQU04RCxLQUFLLEdBQVEsRUFBRTtZQUNyQixJQUFJWixNQUFNLEVBQUVZLEtBQUssQ0FBQzNELFNBQVMsR0FBRyxjQUFjO1lBRTVDLE9BQ0k5QztjQUFJNEcsT0FBTyxFQUFFQSxPQUFPO2NBQUEsR0FBTUgsS0FBSztjQUFBLFdBQVdqQixJQUFJLENBQUN2QjtZQUFFLEdBQzdDakUsb0JBQUNvSCxVQUFJO2NBQUNDLElBQUksRUFBRSxJQUFJN0IsSUFBSSxDQUFDdkIsRUFBRTtZQUFFLEdBQUd1QixJQUFJLENBQUM4QixTQUFTLENBQVEsQ0FDakQ7VUFFYiIsIm5hbWVzIjpbInZhbHVlIiwiRG9jc0NvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJleHBvcnRzIiwidXNlRG9jc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwicmVxdWlyZSIsIkNvbnRlbnRzUGFnZSIsImNvbnRlbnRJZCIsImNvbXBvbmVudCIsImN1cnJlbnQiLCJsYW5nIiwiYmV5b25kIiwibGFuZ3VhZ2VzIiwicmVwbGFjZSIsInRleHQiLCJ0b1VwcGVyQ2FzZSIsIkNvbXBvbmVudHMiLCJDb250ZW50cyIsIkNvbnRlbnRzRW4iLCJuYW1lIiwic3BsaXQiLCJtYXAiLCJqb2luIiwiQ29tcG9uZW50Iiwic2V0Q29tcG9uZW50Iiwic2VjdGlvbnMiLCJzZXRTZWN0aW9ucyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwicGVyZm9ybWFuY2UiLCJub3ciLCJzaGFkb3dSb290IiwiQ29udGVudFdyYXBwZXIiLCJjaGlsZHJlbiIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsIm9uQ2hhbmdlIiwiaG1yIiwib24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiQXJyYXkiLCJmcm9tIiwiY2xhc3NOYW1lIiwiQ29udGVudCIsIlByb3ZpZGVyIiwiY29tcG9uZW50cyIsIndyYXBwZXIiLCJsZW5ndGgiLCJSaWdodEFzaWRlIiwiRXZlbnRzIiwibG9hZGluZyIsImxvYWRlZCIsImh5ZHJhdGVkIiwiY29udGFpbmVyIiwiY29uc3RydWN0b3IiLCJmZXRjaCIsInRyaWdnZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJwdXNoIiwiaWQiLCJoeWRyYXRlIiwiY2FjaGVkIiwiZm9yRWFjaCIsImNvbXBhbnkiLCJ0b0pTT04iLCJRdWl6IiwiQXBwSWNvbkJ1dHRvbiIsImljb24iLCJ0aXRsZXMiLCJzZXRUaXRsZXMiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsInVzZUxheW91dEVmZmVjdCIsImNhbGxiYWNrIiwiZW50cmllcyIsInNlbGVjdGVkIiwiZW50cnkiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJ0YXJnZXQiLCJsaXN0IiwicG9zaXRpb24iLCJpdGVtIiwiZmluZCIsImRhdGFzZXQiLCJjb25zb2xlIiwid2FybiIsImFjdGl2ZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInRocmVzaG9sZCIsInJvb3RNYXJnaW4iLCJvYnNlcnZlIiwib3V0cHV0IiwiaSIsImF0dHJzIiwiUmlnaHRBc2lkZUl0ZW0iLCJrZXkiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImdldEVsZW1lbnRCeUlkIiwiYm9keSIsInNjcm9sbCIsIm9mZnNldFRvcCIsImxlZnQiLCJMaW5rIiwiaHJlZiIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udGV4dC50c3giLCJ0cy9pbmRleC50c3giLCJ0cy9tb2RlbHMvY29udGVudHMudHMiLCJ0cy9xdWl6LnRzeCIsInRzL3ZpZXdzL3JpZ2h0LWFzaWRlL2luZGV4LnRzeCIsInRzL3ZpZXdzL3JpZ2h0LWFzaWRlL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==
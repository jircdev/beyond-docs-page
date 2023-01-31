System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.7/core", "@beyond/docs@1/contents/esp", "@beyond/docs@1/contents/en", "@beyond/docs@1/missing.widget", "@beyond/docs@1/under-construction.widget", "@beyond/docs@1/ui/icons", "@beyond/ui@1.0.0/link"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, ContentsPage, RightAside, __beyond_pkg, hmr;
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
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['@beyond/docs/contents/esp', dependency_3], ['@beyond/docs/contents/en', dependency_4], ['@beyond/docs/missing.widget', dependency_5], ['@beyond/docs/under-construction.widget', dependency_6], ['@beyond/docs/ui/icons', dependency_7], ['@beyond/ui/link', dependency_8]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyRUY7VUFDQTtVQU9NLFNBQVV3RyxjQUFjLENBQUM7WUFBRWxCLElBQUk7WUFBRXpELFVBQVU7WUFBRThEO1VBQU0sQ0FBVTtZQUMvRCxNQUFNZSxPQUFPLEdBQUlDLEtBQUssSUFBSTtjQUN0QkEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7Y0FDdEIsTUFBTXpCLE1BQU0sR0FBR3RELFVBQVUsQ0FBQ2dGLGNBQWMsQ0FBQ3ZCLElBQUksQ0FBQ3ZCLEVBQUUsQ0FBQztjQUNqRCxJQUFJLENBQUNvQixNQUFNLEVBQUU7Z0JBQ1Q7O2NBRUosTUFBTTJCLElBQUksR0FBR3pFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUUzQ3dFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO2dCQUNSdkUsR0FBRyxFQUFFMkMsTUFBTSxDQUFDNkIsU0FBUztnQkFDckJDLElBQUksRUFBRSxDQUFDO2dCQUNQeEUsUUFBUSxFQUFFO2VBQ2IsQ0FBQztZQUNOLENBQUM7WUFDRCxNQUFNOEQsS0FBSyxHQUFRLEVBQUU7WUFDckIsSUFBSVosTUFBTSxFQUFFWSxLQUFLLENBQUMzRCxTQUFTLEdBQUcsY0FBYztZQUU1QyxPQUNJOUM7Y0FBSTRHLE9BQU8sRUFBRUEsT0FBTztjQUFBLEdBQU1ILEtBQUs7Y0FBQSxXQUFXakIsSUFBSSxDQUFDdkI7WUFBRSxHQUM3Q2pFLG9CQUFDb0gsVUFBSTtjQUFDQyxJQUFJLEVBQUUsSUFBSTdCLElBQUksQ0FBQ3ZCLEVBQUU7WUFBRSxHQUFHdUIsSUFBSSxDQUFDOEIsU0FBUyxDQUFRLENBQ2pEO1VBRWIiLCJuYW1lcyI6WyJ2YWx1ZSIsIkRvY3NDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZURvY3NDb250ZXh0IiwidXNlQ29udGV4dCIsInJlcXVpcmUiLCJDb250ZW50c1BhZ2UiLCJjb250ZW50SWQiLCJjb21wb25lbnQiLCJjdXJyZW50IiwibGFuZyIsImJleW9uZCIsImxhbmd1YWdlcyIsInJlcGxhY2UiLCJ0ZXh0IiwidG9VcHBlckNhc2UiLCJDb21wb25lbnRzIiwiQ29udGVudHMiLCJDb250ZW50c0VuIiwibmFtZSIsInNwbGl0IiwibWFwIiwiam9pbiIsIkNvbXBvbmVudCIsInNldENvbXBvbmVudCIsInNlY3Rpb25zIiwic2V0U2VjdGlvbnMiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInBlcmZvcm1hbmNlIiwibm93Iiwic2hhZG93Um9vdCIsIkNvbnRlbnRXcmFwcGVyIiwiY2hpbGRyZW4iLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvbkNoYW5nZSIsImhtciIsIm9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsIkFycmF5IiwiZnJvbSIsImNsYXNzTmFtZSIsIkNvbnRlbnQiLCJQcm92aWRlciIsImNvbXBvbmVudHMiLCJ3cmFwcGVyIiwibGVuZ3RoIiwiUmlnaHRBc2lkZSIsIkV2ZW50cyIsImxvYWRpbmciLCJsb2FkZWQiLCJoeWRyYXRlZCIsImNvbnRhaW5lciIsImNvbnN0cnVjdG9yIiwiZmV0Y2giLCJ0cmlnZ2VyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicHVzaCIsImlkIiwiaHlkcmF0ZSIsImNhY2hlZCIsImZvckVhY2giLCJjb21wYW55IiwidG9KU09OIiwiUXVpeiIsIkFwcEljb25CdXR0b24iLCJpY29uIiwidGl0bGVzIiwic2V0VGl0bGVzIiwidXNlU3RhdGUiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VMYXlvdXRFZmZlY3QiLCJjYWxsYmFjayIsImVudHJpZXMiLCJzZWxlY3RlZCIsImVudHJ5IiwiYm91bmRpbmdDbGllbnRSZWN0IiwidGFyZ2V0IiwibGlzdCIsInBvc2l0aW9uIiwiaXRlbSIsImZpbmQiLCJkYXRhc2V0IiwiY29uc29sZSIsIndhcm4iLCJhY3RpdmUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ0aHJlc2hvbGQiLCJyb290TWFyZ2luIiwib2JzZXJ2ZSIsIm91dHB1dCIsImkiLCJhdHRycyIsIlJpZ2h0QXNpZGVJdGVtIiwia2V5Iiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJnZXRFbGVtZW50QnlJZCIsImJvZHkiLCJzY3JvbGwiLCJvZmZzZXRUb3AiLCJsZWZ0IiwiTGluayIsImhyZWYiLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRleHQudHN4IiwidHMvaW5kZXgudHN4IiwidHMvbW9kZWxzL2NvbnRlbnRzLnRzIiwidHMvcXVpei50c3giLCJ0cy92aWV3cy9yaWdodC1hc2lkZS9pbmRleC50c3giLCJ0cy92aWV3cy9yaWdodC1hc2lkZS9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=
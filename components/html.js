System.register(["@beyond-js/kernel@0.1.0/bundle", "react@18.2.0", "@beyond/ui@1.0.0/link", "@beyond/docs@1/code", "@beyond/docs@1/store", "@beyond/docs@1/components/next-links", "@beyond/ui@1.0.0/image", "@beyond/ui@1.0.0/modal", "@beyond/docs@1/ui/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, BeyondName, CHtml, Paragraph, Title, List, Document, Loading, ModalImage, Notice, Render, TypeProperty, ObjectProperty, __beyond_pkg, hmr;
  _export({
    BeyondName: void 0,
    CHtml: void 0,
    Paragraph: void 0,
    Title: void 0,
    List: void 0,
    Document: void 0,
    Loading: void 0,
    ModalImage: void 0,
    Notice: void 0,
    Render: void 0,
    TypeProperty: void 0,
    ObjectProperty: void 0
  });
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondUi100Link) {
      dependency_2 = _beyondUi100Link;
    }, function (_beyondDocs1Code) {
      dependency_3 = _beyondDocs1Code;
    }, function (_beyondDocs1Store) {
      dependency_4 = _beyondDocs1Store;
    }, function (_beyondDocs1ComponentsNextLinks) {
      dependency_5 = _beyondDocs1ComponentsNextLinks;
    }, function (_beyondUi100Image) {
      dependency_6 = _beyondUi100Image;
    }, function (_beyondUi100Modal) {
      dependency_7 = _beyondUi100Modal;
    }, function (_beyondDocs1UiIcons) {
      dependency_8 = _beyondDocs1UiIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["animatewithsass", "3.2.1"], ["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["@cloudinary/url-gen", "1.8.6"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["dayjs", "1.11.6"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.25.5"], ["slate-react", "0.72.9"], ["svelte", "3.52.0"], ["swiper", "8.4.4"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.43"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/components/html"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond/ui/link', dependency_2], ['@beyond/docs/code', dependency_3], ['@beyond/docs/store', dependency_4], ['@beyond/docs/components/next-links', dependency_5], ['@beyond/ui/image', dependency_6], ['@beyond/ui/modal', dependency_7], ['@beyond/docs/ui/icons', dependency_8]]);
      ims = new Map();
      /************************
      INTERNAL MODULE: ./beyond
      ************************/
      ims.set('./beyond', {
        hash: 3491118623,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondName = BeyondName;
          var React = require("react");
          /*bundle*/
          function BeyondName() {
            return React.createElement(React.Fragment, null, React.createElement("span", {
              className: "beyond"
            }, "BeyondJS"));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./control
      *************************/

      ims.set('./control', {
        hash: 3238739079,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BlockQuote = BlockQuote;
          exports.CHtml = CHtml;
          exports.CodeComponent = CodeComponent;
          exports.CustomComponent = CustomComponent;
          exports.DocLinks = DocLinks;
          exports.DocList = DocList;
          exports.List = List;
          exports.ListItem = ListItem;
          exports.Paragraph = Paragraph;
          exports.Title = Title;
          var React = require("react");
          var _link = require("@beyond/ui/link");
          var _code = require("@beyond/docs/code");
          /*bundle*/
          function CHtml({
            content,
            children
          }) {
            const data = children ?? content;
            return React.createElement("span", {
              dangerouslySetInnerHTML: {
                __html: data
              }
            });
          }
          /*bundle*/
          function Paragraph({
            content,
            children
          }) {
            if (Array.isArray(content)) {
              return React.createElement("p", null, content);
            }
            const data = children ?? content;
            return React.createElement("p", {
              dangerouslySetInnerHTML: {
                __html: data
              }
            });
          }
          /*bundle*/
          function Title(props) {
            const {
              content,
              selector,
              children
            } = props;
            let data = children ?? content;
            const output = [];
            const [tag, idAttribute] = selector.split("#");
            const Control = ['h2', 'h3', 'h4', 'h5', 'h6'].includes(tag) ? tag : 'h1';
            if (Array.isArray(data)) {
              output.push(React.createElement("span", {
                className: `pretitle-${tag}`,
                key: "pretitle"
              }, data[0]));
              data = data[1];
            }
            const attrs = {
              key: idAttribute ?? 'title'
            };
            if (idAttribute) attrs.id = idAttribute;
            output.push(React.createElement(Control, {
              dangerouslySetInnerHTML: {
                __html: data
              },
              ...attrs
            }));
            return React.createElement(React.Fragment, null, output);
          }
          /*bundle*/
          function List(props) {
            const {
              content,
              children,
              element
            } = props;
            const [name, className] = element.split(".");
            if (!Array.isArray(content)) {
              throw new Error('The content passed must be an array');
            }
            const attrs = {};
            if (className) attrs.className = className;
            return React.createElement("ul", {
              ...attrs
            }, content.map((item, index) => {
              if (item?.type?.name === 'ListItem') {
                return item;
              }
              if (Array.isArray(item)) {
                const [label, href] = item;
                return React.createElement("li", {
                  key: `${label}.${index}.arr`
                }, React.createElement(_link.Link, {
                  href: href
                }, label));
              }
              if (typeof item === 'object') {
                return React.createElement("li", {
                  key: `${index}.obj.${[performance.now()]}`
                }, item);
              }
              return React.createElement("li", {
                key: `${index}.obj.${[performance.now()]}`,
                dangerouslySetInnerHTML: {
                  __html: item
                }
              });
            }), children);
          }
          function DocLinks({
            item: [href, label],
            external
          }) {
            const Control = external ? _link.Elink : _link.Link;
            return React.createElement(Control, {
              href: href
            }, label);
          }
          function BlockQuote({
            children
          }) {
            return React.createElement("div", {
              className: "block__note"
            }, children);
          }
          /**
           * Render a list item that contains a nested list.
           * @constructor
           */
          function ListItem({
            content
          }) {
            if (content instanceof String) {
              content = [React.createElement(CHtml, {
                content: content,
                key: content
              })];
            }
            return React.createElement("li", null, content);
          }
          function CodeComponent({
            content
          }) {
            if (!content) {
              throw new Error('the content object is missing');
            }
            const {
              title,
              language = 'typescript',
              tpl
            } = content;
            const Control = title ? _code.CodeBox : _code.Code;
            return React.createElement(Control, {
              title: title,
              language: language
            }, tpl);
          }
          function CustomComponent({
            components,
            control,
            content,
            tpls
          }) {
            if (!components.hasOwnProperty(control)) {
              console.warn(`custom component ${control} was not found`);
              return null;
            }
            const Control = components[control];
            return React.createElement(Control, {
              tpls: tpls,
              content: content
            });
          }
          function DocList({
            content
          }) {
            console.log(10, content);
            return React.createElement(React.Fragment, null, React.createElement("h3", null, "Element"));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./document
      **************************/

      ims.set('./document', {
        hash: 1224633469,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Document = Document;
          var React = require("react");
          var _store = require("@beyond/docs/store");
          var _render = require("./render");
          var _nextLinks = require("@beyond/docs/components/next-links");
          /* bundle */
          function Document({
            specifier,
            tpls,
            components,
            textId,
            nextLinks,
            d
          }) {
            const [ready, texts] = (0, _store.useTexts)(specifier);
            if (!ready) return null;
            const textsUsed = textId ? texts[textId] : texts;
            if (d) {
              console.log(1.1, specifier, texts, components);
              console.log(1.2, textId, textsUsed);
            }
            return React.createElement(_store.DocsContext.Provider, {
              value: {
                texts,
                ready,
                tpls,
                components
              }
            }, React.createElement(_render.Render, {
              content: textsUsed,
              tpls: tpls,
              components: components
            }), nextLinks && React.createElement(_nextLinks.NextLinks, {
              items: nextLinks
            }));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./loading
      *************************/

      ims.set('./loading', {
        hash: 458825452,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Loading = Loading;
          var React = require("react");
          /*bundle*/
          function Loading() {
            return React.createElement(React.Fragment, null, React.createElement("h4", null, "Loading..."));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./modal-image
      *****************************/

      ims.set('./modal-image', {
        hash: 2961068627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalImage = ModalImage;
          var React = require("react");
          var _image = require("@beyond/ui/image");
          var _modal = require("@beyond/ui/modal");
          /*bundle*/
          function ModalImage({
            src,
            alt,
            className
          }) {
            const [open, toggle] = React.useState(false);
            const cls = `image__modal ${className ? ` ${className}` : ''}`;
            return React.createElement(React.Fragment, null, React.createElement(_image.BeyondImage, {
              alt: alt,
              src: src,
              onClick: () => toggle(!open)
            }), open && React.createElement(_modal.BeyondModal, {
              className: cls,
              show: true
            }, React.createElement(_image.BeyondImage, {
              alt: alt,
              src: src
            })));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./notice
      ************************/

      ims.set('./notice', {
        hash: 1085374984,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Notice = Notice;
          var React = require("react");
          var _link = require("@beyond/ui/link");
          /*bundle*/
          function Notice({
            text,
            link: [href, link]
          }) {
            return React.createElement("div", {
              className: "block__note"
            }, text, " ", React.createElement(_link.Link, {
              href: href
            }, link));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./render
      ************************/

      ims.set('./render', {
        hash: 2920535507,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Render = Render;
          var _react = require("react");
          var _useRender = require("./use-render");
          /*bundle*/
          function Render(props) {
            const {
              content,
              tpls,
              components
            } = props;
            const output = (0, _useRender.useRender)(content, tpls, components);
            return _react.default.createElement(_react.default.Fragment, null, output);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./type-property
      *******************************/

      ims.set('./type-property', {
        hash: 2567569487,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectProperty = ObjectProperty;
          exports.TypeProperty = TypeProperty;
          var React = require("react");
          var _link = require("@beyond/ui/link");
          /*bundle*/
          function TypeProperty({
            children,
            type,
            href = false,
            optional = false
          }) {
            const output = href ? React.createElement(_link.Link, {
              href: href
            }, `${type}`, " ") : `${type} `;
            return React.createElement(React.Fragment, null, children && React.createElement("strong", null, children), " ", React.createElement("span", {
              className: "type__property"
            }, output), optional && React.createElement("span", {
              className: "type__optional"
            }, ` optional`, " "), ":");
          }
          /*bundle*/
          function ObjectProperty({
            children,
            type,
            href = undefined,
            optional = undefined
          }) {
            return React.createElement(React.Fragment, null, React.createElement("strong", null, children), " ", React.createElement(TypeProperty, {
              optional: true,
              type: type,
              href: href
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./use-render/controls
      *************************************/

      ims.set('./use-render/controls', {
        hash: 4099921071,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controls = void 0;
          var _control = require("../control");
          const Controls = {
            p: _control.Paragraph,
            l: _control.DocLinks,
            t: _control.Paragraph,
            e: _control.DocLinks,
            h: _control.Title,
            items: _control.List,
            s: _control.CHtml,
            z: _control.DocList
          };
          exports.Controls = Controls;
        }
      });

      /**********************************
      INTERNAL MODULE: ./use-render/index
      **********************************/

      ims.set('./use-render/index', {
        hash: 3566653096,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useRender = useRender;
          var _react = require("react");
          var _control = require("../control");
          var _controls = require("./controls");
          var _modalImage = require("../modal-image");
          var _icons = require("@beyond/docs/ui/icons");
          function useRender(content, tpls = {}, components = {}) {
            const controls = _controls.Controls;
            /**
             * q = quote
             * h = titles
             * p = paragraph
             * l = link
             * e = external link
             * t = deprecated
             * cc = CustomComponent
             * i = img
             * c = code
             * bi = BeyondIcon
             * z: ListDoc
             */
            const regexp = /[bi|q|h|p|l|e|t|i|c|cc|z]{1}?\d{1}|items\d{0,1}|\d/;
            /**
             * @TODO: @julio: refactor and order
             * @param item
             * @param data
             * @param output
             * @param id
             */
            const analize = (item, data, output, id) => {
              const elementData = data[item];
              const itemId = `${item}.${id}`;
              if (item.substring(0, 2) === 'bi') {
                output.push(_react.default.createElement(_icons.AppIcon, {
                  icon: elementData,
                  key: itemId
                }));
                return;
              }
              if (item.includes("items") && item.substring(0, 5) === "items") {
                const Control = controls.items;
                let items = [];
                let children = [];
                elementData.forEach((element, index) => {
                  if (typeof element === "object") {
                    element = check(element);
                    items.push(_react.default.createElement(_control.ListItem, {
                      key: `element.sublist.${index}.${elementData.length}`,
                      content: element
                    }));
                    return;
                  }
                  items.push(_react.default.createElement(_control.ListItem, {
                    key: `${itemId}.${index}`,
                    content: element
                  }));
                  return;
                });
                output.push(_react.default.createElement(Control, {
                  key: `${id}${item}`,
                  content: items,
                  element: item
                }, children));
                return;
              }
              /**
               * Si es un objeto recursivo
               */
              if (!regexp.test(item)) {
                const data = check(elementData);
                output = output.concat(data);
                return;
              }
              if (["cc"].includes(item.substring(0, 2))) {
                output.push(_react.default.createElement(_control.CustomComponent, {
                  key: itemId,
                  content: content,
                  control: elementData,
                  components: components,
                  tpls: tpls
                }));
                return;
              }
              // blockQuote
              if (["q"].includes(item[0])) {
                const quote = elementData instanceof String ? elementData : check(elementData, []);
                output.push(_react.default.createElement(_control.BlockQuote, {
                  key: itemId
                }, quote));
                return;
              }
              if (["i"].includes(item[0])) {
                const [src, alt] = elementData;
                output.push(_react.default.createElement(_modalImage.ModalImage, {
                  key: itemId,
                  src: src,
                  alt: alt
                }));
                return;
              }
              if (["c"].includes(item[0])) {
                if (!tpls[elementData]) {
                  throw new Error(`the template "${elementData}" were not found on ${item}`);
                }
                output.push(_react.default.createElement(_control.CodeComponent, {
                  key: itemId,
                  content: tpls[elementData]
                }));
                return;
              }
              if (["z"].includes(item[0])) {
                if (!tpls[elementData]) {
                  throw new Error(`the template "${elementData}" were not found on ${item}`);
                }
                output.push(_react.default.createElement(_control.DocList, {
                  key: itemId,
                  content: tpls[elementData]
                }));
                return;
              }
              //links
              if (["e", "l"].includes(item[0])) {
                const attrs = {
                  key: `${id}${item}`,
                  item: elementData
                };
                if (item[0] === "e") attrs.external = true;
                output.push(_react.default.createElement(_control.DocLinks, {
                  ...attrs
                }));
                return;
              }
              if (item[0] === 'p' && typeof elementData === 'object') {
                const Control = controls[item[0]];
                const elements = check(elementData, output);
                output.push(_react.default.createElement(Control, {
                  key: `${id}${item}`,
                  selector: item,
                  content: elements
                }));
                return;
              }
              if (item[0] === 'h') {
                const Control = controls[item[0]];
                output.push(_react.default.createElement(Control, {
                  key: `${id}${item}`,
                  selector: item,
                  content: elementData
                }));
                return;
              }
              if (typeof elementData === "object") {
                check(elementData);
                return;
              }
              const Control = controls[item[0]];
              output.push(_react.default.createElement(Control, {
                key: `${id}${item}`,
                selector: item,
                content: data[item]
              }));
            };
            let i = 0;
            const check = data => {
              const output = [];
              const id = `item.${performance.now()}.${Object.keys(data).join()}}`;
              if (i > 50) return console.log("TOP.......");
              i++;
              const keys = Object.keys(data);
              keys.forEach((item, i) => {
                analize(item, data, output, `${id}.${i}`);
              });
              return output;
            };
            const output = check(content, []);
            // const output = check(content, []);
            return output;
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./beyond",
        "from": "BeyondName",
        "name": "BeyondName"
      }, {
        "im": "./control",
        "from": "CHtml",
        "name": "CHtml"
      }, {
        "im": "./control",
        "from": "Paragraph",
        "name": "Paragraph"
      }, {
        "im": "./control",
        "from": "Title",
        "name": "Title"
      }, {
        "im": "./control",
        "from": "List",
        "name": "List"
      }, {
        "im": "./document",
        "from": "Document",
        "name": "Document"
      }, {
        "im": "./loading",
        "from": "Loading",
        "name": "Loading"
      }, {
        "im": "./modal-image",
        "from": "ModalImage",
        "name": "ModalImage"
      }, {
        "im": "./notice",
        "from": "Notice",
        "name": "Notice"
      }, {
        "im": "./render",
        "from": "Render",
        "name": "Render"
      }, {
        "im": "./type-property",
        "from": "TypeProperty",
        "name": "TypeProperty"
      }, {
        "im": "./type-property",
        "from": "ObjectProperty",
        "name": "ObjectProperty"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondName') && _export("BeyondName", BeyondName = require ? require('./beyond').BeyondName : value);
        (require || prop === 'CHtml') && _export("CHtml", CHtml = require ? require('./control').CHtml : value);
        (require || prop === 'Paragraph') && _export("Paragraph", Paragraph = require ? require('./control').Paragraph : value);
        (require || prop === 'Title') && _export("Title", Title = require ? require('./control').Title : value);
        (require || prop === 'List') && _export("List", List = require ? require('./control').List : value);
        (require || prop === 'Document') && _export("Document", Document = require ? require('./document').Document : value);
        (require || prop === 'Loading') && _export("Loading", Loading = require ? require('./loading').Loading : value);
        (require || prop === 'ModalImage') && _export("ModalImage", ModalImage = require ? require('./modal-image').ModalImage : value);
        (require || prop === 'Notice') && _export("Notice", Notice = require ? require('./notice').Notice : value);
        (require || prop === 'Render') && _export("Render", Render = require ? require('./render').Render : value);
        (require || prop === 'TypeProperty') && _export("TypeProperty", TypeProperty = require ? require('./type-property').TypeProperty : value);
        (require || prop === 'ObjectProperty') && _export("ObjectProperty", ObjectProperty = require ? require('./type-property').ObjectProperty : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TVMsRUFBRSxHQUFHLFFBQVFZLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFLElBQUlpRixNQUFNLENBQUNDLElBQUksQ0FBQ2pILElBQUksQ0FBQyxDQUFDa0gsSUFBSSxFQUFFLEdBQUc7Y0FDbkUsSUFBSUgsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPOUQsT0FBTyxDQUFDRyxHQUFHLENBQUMsWUFBWSxDQUFDO2NBRTVDMkQsQ0FBQyxFQUFFO2NBQ0gsTUFBTUUsSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQUksQ0FBQ2pILElBQUksQ0FBQztjQUU5QmlILElBQUksQ0FBQ1QsT0FBTyxDQUFDLENBQUNoRixJQUFJLEVBQUV1RixDQUFDLEtBQUk7Z0JBQ3JCYixPQUFPLENBQUMxRSxJQUFJLEVBQUV4QixJQUFJLEVBQUVTLE1BQU0sRUFBRSxHQUFHUyxFQUFFLElBQUk2RixDQUFDLEVBQUUsQ0FBQztjQUM3QyxDQUFDLENBQUM7Y0FDRixPQUFPdEcsTUFBTTtZQUNqQixDQUFDO1lBRUQsTUFBTUEsTUFBTSxHQUFHZ0csS0FBSyxDQUFDM0csT0FBTyxFQUFFLEVBQUUsQ0FBQztZQUNqQztZQUNBLE9BQU9XLE1BQU07VUFDakIiLCJuYW1lcyI6WyJCZXlvbmROYW1lIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJDSHRtbCIsImNvbnRlbnQiLCJjaGlsZHJlbiIsImRhdGEiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIlBhcmFncmFwaCIsIkFycmF5IiwiaXNBcnJheSIsIlRpdGxlIiwicHJvcHMiLCJzZWxlY3RvciIsIm91dHB1dCIsInRhZyIsImlkQXR0cmlidXRlIiwic3BsaXQiLCJDb250cm9sIiwiaW5jbHVkZXMiLCJwdXNoIiwia2V5IiwiYXR0cnMiLCJpZCIsIkxpc3QiLCJlbGVtZW50IiwibmFtZSIsIkVycm9yIiwibWFwIiwiaXRlbSIsImluZGV4IiwidHlwZSIsImxhYmVsIiwiaHJlZiIsIkxpbmsiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkRvY0xpbmtzIiwiZXh0ZXJuYWwiLCJFbGluayIsIkJsb2NrUXVvdGUiLCJMaXN0SXRlbSIsIlN0cmluZyIsIkNvZGVDb21wb25lbnQiLCJ0aXRsZSIsImxhbmd1YWdlIiwidHBsIiwiQ29kZUJveCIsIkNvZGUiLCJDdXN0b21Db21wb25lbnQiLCJjb21wb25lbnRzIiwiY29udHJvbCIsInRwbHMiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbnNvbGUiLCJ3YXJuIiwiRG9jTGlzdCIsImxvZyIsIkRvY3VtZW50Iiwic3BlY2lmaWVyIiwidGV4dElkIiwibmV4dExpbmtzIiwiZCIsInJlYWR5IiwidGV4dHMiLCJ0ZXh0c1VzZWQiLCJEb2NzQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJSZW5kZXIiLCJOZXh0TGlua3MiLCJpdGVtcyIsIkxvYWRpbmciLCJNb2RhbEltYWdlIiwic3JjIiwiYWx0Iiwib3BlbiIsInRvZ2dsZSIsInVzZVN0YXRlIiwiY2xzIiwiQmV5b25kSW1hZ2UiLCJvbkNsaWNrIiwiQmV5b25kTW9kYWwiLCJzaG93IiwiTm90aWNlIiwidGV4dCIsImxpbmsiLCJUeXBlUHJvcGVydHkiLCJvcHRpb25hbCIsIk9iamVjdFByb3BlcnR5IiwidW5kZWZpbmVkIiwiQ29udHJvbHMiLCJwIiwibCIsInQiLCJlIiwiaCIsInMiLCJ6IiwiZXhwb3J0cyIsInVzZVJlbmRlciIsImNvbnRyb2xzIiwicmVnZXhwIiwiYW5hbGl6ZSIsImVsZW1lbnREYXRhIiwiaXRlbUlkIiwic3Vic3RyaW5nIiwiQXBwSWNvbiIsImljb24iLCJmb3JFYWNoIiwiY2hlY2siLCJsZW5ndGgiLCJ0ZXN0IiwiY29uY2F0IiwicXVvdGUiLCJlbGVtZW50cyIsImkiLCJPYmplY3QiLCJrZXlzIiwiam9pbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbXBvbmVudHMvaHRtbC9jb2RlL3RzL2JleW9uZC50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29tcG9uZW50cy9odG1sL2NvZGUvdHMvY29udHJvbC50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29tcG9uZW50cy9odG1sL2NvZGUvdHMvZG9jdW1lbnQudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbXBvbmVudHMvaHRtbC9jb2RlL3RzL2xvYWRpbmcudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbXBvbmVudHMvaHRtbC9jb2RlL3RzL21vZGFsLWltYWdlLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb21wb25lbnRzL2h0bWwvY29kZS90cy9ub3RpY2UudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbXBvbmVudHMvaHRtbC9jb2RlL3RzL3JlbmRlci50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29tcG9uZW50cy9odG1sL2NvZGUvdHMvdHlwZS1wcm9wZXJ0eS50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29tcG9uZW50cy9odG1sL2NvZGUvdHMvdXNlLXJlbmRlci9jb250cm9scy50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb21wb25lbnRzL2h0bWwvY29kZS90cy91c2UtcmVuZGVyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==
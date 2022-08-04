define(["exports", "module", "@beyond-js/kernel/bundle", "react@17.0.2", "@beyond/ui/link", "@beyond/docs/code", "@beyond/docs/store", "@beyond/docs/components/next-links", "@beyond/ui/image", "@beyond/ui/modal", "@beyond/docs/ui/icons"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.TypeProperty = _exports.Title = _exports.Render = _exports.Paragraph = _exports.ObjectProperty = _exports.Notice = _exports.ModalImage = _exports.Loading = _exports.List = _exports.Document = _exports.CHtml = _exports.BeyondName = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/components/html",
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/ui/link", "@beyond/docs/code", "@beyond/docs/store", "@beyond/docs/components/next-links", "@beyond/ui/image", "@beyond/ui/modal", "@beyond/docs/ui/icons"]));

  const ims = new Map();
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
        return React.createElement("ul", { ...attrs
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
    hash: 3803408456,
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
        moduleId,
        tpls,
        components,
        textId,
        nextLinks,
        d
      }) {
        const [ready, texts] = (0, _store.useTexts)(moduleId);
        if (!ready) return null;
        const textsUsed = textId ? texts[textId] : texts;

        if (d) {
          console.log(1.1, moduleId, texts, components);
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
          } // blockQuote


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
          } //links


          if (["e", "l"].includes(item[0])) {
            const attrs = {
              key: `${id}${item}`,
              item: elementData
            };
            if (item[0] === "e") attrs.external = true;
            output.push(_react.default.createElement(_control.DocLinks, { ...attrs
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

        const output = check(content, []); // const output = check(content, []);

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
  let BeyondName, CHtml, Paragraph, Title, List, Document, Loading, ModalImage, Notice, Render, TypeProperty, ObjectProperty; // Module exports

  _exports.ObjectProperty = ObjectProperty;
  _exports.TypeProperty = TypeProperty;
  _exports.Render = Render;
  _exports.Notice = Notice;
  _exports.ModalImage = ModalImage;
  _exports.Loading = Loading;
  _exports.Document = Document;
  _exports.List = List;
  _exports.Title = Title;
  _exports.Paragraph = Paragraph;
  _exports.CHtml = CHtml;
  _exports.BeyondName = BeyondName;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'BeyondName') && (_exports.BeyondName = BeyondName = require ? require('./beyond').BeyondName : value);
    (require || prop === 'CHtml') && (_exports.CHtml = CHtml = require ? require('./control').CHtml : value);
    (require || prop === 'Paragraph') && (_exports.Paragraph = Paragraph = require ? require('./control').Paragraph : value);
    (require || prop === 'Title') && (_exports.Title = Title = require ? require('./control').Title : value);
    (require || prop === 'List') && (_exports.List = List = require ? require('./control').List : value);
    (require || prop === 'Document') && (_exports.Document = Document = require ? require('./document').Document : value);
    (require || prop === 'Loading') && (_exports.Loading = Loading = require ? require('./loading').Loading : value);
    (require || prop === 'ModalImage') && (_exports.ModalImage = ModalImage = require ? require('./modal-image').ModalImage : value);
    (require || prop === 'Notice') && (_exports.Notice = Notice = require ? require('./notice').Notice : value);
    (require || prop === 'Render') && (_exports.Render = Render = require ? require('./render').Render : value);
    (require || prop === 'TypeProperty') && (_exports.TypeProperty = TypeProperty = require ? require('./type-property').TypeProperty : value);
    (require || prop === 'ObjectProperty') && (_exports.ObjectProperty = ObjectProperty = require ? require('./type-property').ObjectProperty : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVpBLENBQVA7VUFFWjZELENBQUM7VUFDRCxNQUFNRSxJQUFJLEdBQUdELE1BQU0sQ0FBQ0MsSUFBUEQsQ0FBWS9HLElBQVorRyxDQUFiO1VBRUFDLElBQUksQ0FBQ1QsT0FBTFMsQ0FBYSxDQUFDeEYsSUFBRCxFQUFPc0YsQ0FBUCxLQUFZO1lBQ3JCYixPQUFPLENBQUN6RSxJQUFELEVBQU94QixJQUFQLEVBQWFTLE1BQWIsRUFBcUIsR0FBR1MsRUFBRSxJQUFJNEYsQ0FBQyxFQUEvQixDQUFQYjtVQURKO1VBR0EsT0FBT3hGLE1BQVA7UUFYSjs7UUFjQSxNQUFNQSxNQUFNLEdBQUcrRixLQUFLLENBQUMxRyxPQUFELEVBQVUsRUFBVixDQUFwQixDQXpKaUUsQ0EwSmpFOztRQUNBLE9BQU9XLE1BQVA7TUFDSCIsIm5hbWVzIjpbIkJleW9uZE5hbWUiLCJSZWFjdCIsImNsYXNzTmFtZSIsIkNIdG1sIiwiY29udGVudCIsImNoaWxkcmVuIiwiZGF0YSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiUGFyYWdyYXBoIiwiQXJyYXkiLCJpc0FycmF5IiwiVGl0bGUiLCJwcm9wcyIsInNlbGVjdG9yIiwib3V0cHV0IiwidGFnIiwiaWRBdHRyaWJ1dGUiLCJzcGxpdCIsIkNvbnRyb2wiLCJpbmNsdWRlcyIsInB1c2giLCJrZXkiLCJhdHRycyIsImlkIiwiTGlzdCIsImVsZW1lbnQiLCJuYW1lIiwiRXJyb3IiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0eXBlIiwibGFiZWwiLCJocmVmIiwiTGluayIsInBlcmZvcm1hbmNlIiwibm93IiwiRG9jTGlua3MiLCJleHRlcm5hbCIsIkVsaW5rIiwiQmxvY2tRdW90ZSIsIkxpc3RJdGVtIiwiU3RyaW5nIiwiQ29kZUNvbXBvbmVudCIsInRpdGxlIiwibGFuZ3VhZ2UiLCJ0cGwiLCJDb2RlQm94IiwiQ29kZSIsIkN1c3RvbUNvbXBvbmVudCIsImNvbXBvbmVudHMiLCJjb250cm9sIiwidHBscyIsImhhc093blByb3BlcnR5IiwiY29uc29sZSIsIndhcm4iLCJEb2NMaXN0IiwibG9nIiwiRG9jdW1lbnQiLCJtb2R1bGVJZCIsInRleHRJZCIsIm5leHRMaW5rcyIsImQiLCJyZWFkeSIsInRleHRzIiwidGV4dHNVc2VkIiwiRG9jc0NvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIiwiUmVuZGVyIiwiTmV4dExpbmtzIiwiaXRlbXMiLCJMb2FkaW5nIiwiTW9kYWxJbWFnZSIsInNyYyIsImFsdCIsIm9wZW4iLCJ0b2dnbGUiLCJ1c2VTdGF0ZSIsImNscyIsIkJleW9uZEltYWdlIiwib25DbGljayIsIkJleW9uZE1vZGFsIiwic2hvdyIsIk5vdGljZSIsInRleHQiLCJsaW5rIiwiVHlwZVByb3BlcnR5Iiwib3B0aW9uYWwiLCJPYmplY3RQcm9wZXJ0eSIsInVuZGVmaW5lZCIsIkNvbnRyb2xzIiwicCIsImwiLCJ0IiwiZSIsImgiLCJzIiwieiIsInVzZVJlbmRlciIsImNvbnRyb2xzIiwicmVnZXhwIiwiYW5hbGl6ZSIsImVsZW1lbnREYXRhIiwiaXRlbUlkIiwic3Vic3RyaW5nIiwiQXBwSWNvbiIsImljb24iLCJmb3JFYWNoIiwiY2hlY2siLCJsZW5ndGgiLCJ0ZXN0IiwiY29uY2F0IiwicXVvdGUiLCJlbGVtZW50cyIsImkiLCJPYmplY3QiLCJrZXlzIiwiam9pbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbXBvbmVudHMvaHRtbC9jb2RlL3RzL2JleW9uZC50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29tcG9uZW50cy9odG1sL2NvZGUvdHMvY29udHJvbC50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29tcG9uZW50cy9odG1sL2NvZGUvdHMvZG9jdW1lbnQudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbXBvbmVudHMvaHRtbC9jb2RlL3RzL2xvYWRpbmcudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbXBvbmVudHMvaHRtbC9jb2RlL3RzL21vZGFsLWltYWdlLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb21wb25lbnRzL2h0bWwvY29kZS90cy9ub3RpY2UudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbXBvbmVudHMvaHRtbC9jb2RlL3RzL3JlbmRlci50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29tcG9uZW50cy9odG1sL2NvZGUvdHMvdHlwZS1wcm9wZXJ0eS50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29tcG9uZW50cy9odG1sL2NvZGUvdHMvdXNlLXJlbmRlci9jb250cm9scy50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb21wb25lbnRzL2h0bWwvY29kZS90cy91c2UtcmVuZGVyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==
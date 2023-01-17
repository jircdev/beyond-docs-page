System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.7/routing", "@beyond/ui@1.0.0/link", "prop-types@15.8.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, BeyondName, ELink, DocHeader, Link, BeyondLogo, Notice, PreTitle, Subtitle, SVGImage, Table, Title, TypeProperty, ObjectProperty, ItemProperty, __beyond_pkg, hmr;
  _export({
    BeyondName: void 0,
    ELink: void 0,
    DocHeader: void 0,
    Link: void 0,
    BeyondLogo: void 0,
    Notice: void 0,
    PreTitle: void 0,
    Subtitle: void 0,
    SVGImage: void 0,
    Table: void 0,
    Title: void 0,
    TypeProperty: void 0,
    ObjectProperty: void 0,
    ItemProperty: void 0
  });
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel017Routing) {
      dependency_2 = _beyondJsKernel017Routing;
    }, function (_beyondUi100Link) {
      dependency_3 = _beyondUi100Link;
    }, function (_propTypes) {
      dependency_4 = _propTypes;
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
          "vspecifier": "@beyond/docs@1/components/html"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['@beyond/ui/link', dependency_3], ['prop-types', dependency_4]]);
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

      /**************************
      INTERNAL MODULE: ./external
      **************************/

      ims.set('./external', {
        hash: 3729008437,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ELink = ELink;
          var React = require("react");
          /*bundle*/
          function ELink({
            to,
            children
          }) {
            return React.createElement("a", {
              target: "_blank",
              href: to
            }, children);
          }
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 2610284412,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DocHeader = DocHeader;
          var React = require("react");
          var _preTitle = require("./pre-title");
          var _title = require("./title");
          /*bundle*/
          function DocHeader({
            children,
            title,
            pretitle
          }) {
            const output = [];
            if (pretitle) output.push(React.createElement(_preTitle.PreTitle, {
              key: "pretitle"
            }, pretitle));
            if (title) output.push(React.createElement(_title.Title, {
              key: "title"
            }, title));
            return React.createElement("header", {
              className: "docs__header-container"
            }, output, children);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 73159048,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Link = Link;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function Link({
            to,
            children
          }) {
            function onClick(event) {
              console.log('ME EJECUTO DE UNA MANERA INCREIBLE CHAVAL');
              event.preventDefault();
              _routing.routing.pushState(to);
            }
            return React.createElement("a", {
              onClick: onClick,
              href: to
            }, children);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./logo
      **********************/

      ims.set('./logo', {
        hash: 2059680693,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondLogo = BeyondLogo;
          var _react = require("react");
          var _svgImage = require("./svg-image");
          const icon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 66.45 16.742">
<defs>
  <clipPath id="clip-path">
    <rect id="Rectangle_2642" data-name="Rectangle 2642" width="100%" height="100%" fill="none"/>
  </clipPath>
</defs>
<g id="Group_7838" data-name="Group 7838" transform="translate(0 0)">
  <g id="Group_7834" data-name="Group 7834" transform="translate(0 0)" clip-path="url(#clip-path)">
    <path id="Path_4250" data-name="Path 4250" d="M132.218,7.411a3.245,3.245,0,0,0-2.184.7,2.193,2.193,0,0,0-.8,1.724,1.9,1.9,0,0,0,.271,1.027,2.11,2.11,0,0,0,.72.673,6.5,6.5,0,0,0,.979.413q.543.177,1.074.307t.968.272q1,.318,1,.991,0,1.37-2.066,1.369a5.641,5.641,0,0,1-2.8-.685h-.059v1.051a6.541,6.541,0,0,0,2.833.638,3.705,3.705,0,0,0,2.313-.638,2.017,2.017,0,0,0,.838-1.665,1.916,1.916,0,0,0-.378-1.216,2.026,2.026,0,0,0-.92-.708,12.356,12.356,0,0,0-1.216-.39q-.649-.189-1.2-.307a2.279,2.279,0,0,1-.932-.437.976.976,0,0,1-.366-.779,1.1,1.1,0,0,1,.59-.992,3.034,3.034,0,0,1,1.6-.366,5.7,5.7,0,0,1,2.136.449h.083v-1a6.923,6.923,0,0,0-2.491-.425m-6.132.118v5.6a1.845,1.845,0,0,1-.4,1.382,1.593,1.593,0,0,1-1.133.366,2.445,2.445,0,0,1-1.464-.531h-.047v1.063a3.307,3.307,0,0,0,1.759.484,2.353,2.353,0,0,0,1.664-.638,2.9,2.9,0,0,0,.7-2.2V7.529Z" transform="translate(-68.862 -4.147)" fill="#99a3b1"/>
    <path id="Path_4251" data-name="Path 4251" d="M0,7.411v8.36H3.424q3.065,0,3.066-2.347a1.987,1.987,0,0,0-1.611-1.976v-.036A1.846,1.846,0,0,0,6.024,9.581,1.955,1.955,0,0,0,5.32,8a2.956,2.956,0,0,0-1.968-.586Zm8.946,0v8.36h5.773V14.754H10.031v-2.66h4.258V11.076H10.031V8.429h4.688V7.412Zm7.029,0,3.388,4.826v3.535h1.085V12.237l3.387-4.826H22.512l-2.576,3.82h-.059L17.3,7.411Zm19.924,0v8.36h1.085V8.884h.024l4.819,6.887h1.336V7.412H42.077v6.873h-.036L37.234,7.412Zm10.25,0v8.36h2.935a4.731,4.731,0,0,0,1.527-.24,3.756,3.756,0,0,0,2.015-1.6,4.428,4.428,0,0,0-.358-5.173,3.457,3.457,0,0,0-1.336-.97,4.44,4.44,0,0,0-1.849-.371ZM1.085,8.43H3.269a2.068,2.068,0,0,1,1.252.336,1.1,1.1,0,0,1,.465.946,1.186,1.186,0,0,1-.429.958,2.362,2.362,0,0,1-1.491.359H1.085Zm46.149,0h1.718a3.249,3.249,0,0,1,2.373.874,3.372,3.372,0,0,1,0,4.574,3.253,3.253,0,0,1-2.373.874H47.234ZM1.085,12.01H3.328q2.112,0,2.112,1.365a1.188,1.188,0,0,1-.489,1.018,2.8,2.8,0,0,1-1.634.359H1.085Z" transform="translate(0 -4.148)" fill="#e46f4e"/>
    <path id="Path_4252" data-name="Path 4252" d="M59.547,15.508a4.522,4.522,0,1,1,5.537-3.2,4.527,4.527,0,0,1-5.537,3.2M61.6,7.818a3.438,3.438,0,1,0,2.433,4.21A3.442,3.442,0,0,0,61.6,7.818" transform="translate(-31.45 -3.703)" fill="#e46f4e"/>
    <path id="Path_4253" data-name="Path 4253" d="M66.614,0a2.1,2.1,0,0,0-.829.226,3.13,3.13,0,0,0-.931.709,8.058,8.058,0,0,0-1.114,1.55,5.039,5.039,0,0,1,1.424-.144,5.748,5.748,0,0,1,.579-.751c.635-.66,1.162-.723,1.447.363a5.786,5.786,0,0,1,.163,1,5.061,5.061,0,0,1,1.184.885A8.311,8.311,0,0,0,68.284,1.8,3.132,3.132,0,0,0,67.8.732a1.73,1.73,0,0,0-.893-.7A1.109,1.109,0,0,0,66.614,0" transform="translate(-35.674 0)" fill="#e46f4e"/>
    <path id="Path_4254" data-name="Path 4254" d="M56.487,23.411a9.455,9.455,0,0,0-.387,2.746c.051.615.3.681.649.174a7.64,7.64,0,0,0,.8-1.791,5.1,5.1,0,0,1-1.063-1.129" transform="translate(-31.393 -13.102)" fill="#99a3b1"/>
    <path id="Path_4255" data-name="Path 4255" d="M69.255,27.268a5.085,5.085,0,0,1-1.484.447,7.641,7.641,0,0,0-.2,1.952c.051.615.3.681.649.173A9.43,9.43,0,0,0,69.255,27.268Z" transform="translate(-37.812 -15.261)" fill="#99a3b1"/>
    <path id="Path_4256" data-name="Path 4256" d="M61.162,27.5a21.263,21.263,0,0,0-.694,3.889c-.032.926.215.992.649.173a21.264,21.264,0,0,0,1.338-3.717,4.521,4.521,0,0,1-1.293-.346" transform="translate(-33.841 -15.391)" fill="#99a3b1"/>
  </g>
</g>
</svg>
`;
          /* bundle */
          function BeyondLogo(props) {
            console.log(10, props);
            return _react.default.createElement(_svgImage.SVGImage, {
              src: icon,
              ...props
            });
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

      /***************************
      INTERNAL MODULE: ./pre-title
      ***************************/

      ims.set('./pre-title', {
        hash: 653265600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PreTitle = PreTitle;
          var React = require("react");
          /*bundle*/
          function PreTitle({
            children,
            type = "h1"
          }) {
            return React.createElement("span", {
              className: `pretitle-${type}`
            }, children);
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./sub-title
      ***************************/

      ims.set('./sub-title', {
        hash: 2253012013,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Subtitle = Subtitle;
          var React = require("react");
          /*bundle*/
          function Subtitle({
            children,
            text
          }) {
            const title = children ?? text;
            return React.createElement("h2", {
              className: "sub__title"
            }, title);
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./svg-image
      ***************************/

      ims.set('./svg-image', {
        hash: 891273990,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SVGImage = void 0;
          var _react = require("react");
          /*bundle*/
          const SVGImage = _react.default.forwardRef(({
            src,
            className,
            name = "picture"
          }, ref) => {
            return _react.default.createElement("picture", {
              ref: ref,
              className: className,
              "data-name": name,
              dangerouslySetInnerHTML: {
                __html: src
              }
            });
          });
          exports.SVGImage = SVGImage;
        }
      });

      /***********************
      INTERNAL MODULE: ./table
      ***********************/

      ims.set('./table', {
        hash: 3514884214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Table = Table;
          var React = require("react");
          /*bundle */
          function Table({
            titles,
            field
          }) {
            const outputTitles = titles.map(item => React.createElement("th", {
              key: item
            }, item));
            const output = titles.map(row => {
              const columns = row.map(item => React.createElement("td", {
                key: item
              }, item));
              return React.createElement("tr", {
                key: row[0]
              }, columns);
            });
            return React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, outputTitles)), React.createElement("tbody", null, output));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./title
      ***********************/

      ims.set('./title', {
        hash: 4138261614,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Title = Title;
          var React = require("react");
          /*bundle*/
          function Title(props) {
            const {
              children,
              tag = "h1",
              text
            } = props;
            const Selector = tag;
            const content = text ?? children;
            let specs = {
              ...props
            };
            delete specs.children;
            delete specs.tag;
            delete specs.text;
            const replace = {
              á: "a",
              é: "e",
              í: "i",
              ó: "o",
              ú: "u",
              Á: "A",
              É: "E",
              Í: "I",
              Ó: "O",
              Ú: "U"
            };
            let id = content.trim().replace(/[áéíóúÁÉÍÓÚ]/g, match => replace[match] || "");
            id = `${id.trim().replace(/[^a-zA-Z0-9 ]/g, "")}`.replace(/ /g, "-").toLowerCase();
            specs.id = id;
            return React.createElement(Selector, {
              ...specs
            }, content);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./type-property
      *******************************/

      ims.set('./type-property', {
        hash: 1045436427,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemProperty = ItemProperty;
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
          /*bundle*/
          function ItemProperty({
            children,
            label,
            type,
            href = undefined,
            optional = undefined
          }) {
            const ref = React.useRef(null);
            React.useEffect(() => {
              const target = ref.current.querySelector("p");
              if (!target) return;
              const copy = target.cloneNode(true);
              while (target.firstChild) {
                ref.current.append(target.firstChild);
              }
              target.remove();
            }, []);
            return React.createElement("div", {
              ref: ref
            }, React.createElement(ObjectProperty, {
              type: "string",
              optional: true
            }, label), children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./beyond",
        "from": "BeyondName",
        "name": "BeyondName"
      }, {
        "im": "./external",
        "from": "ELink",
        "name": "ELink"
      }, {
        "im": "./header",
        "from": "DocHeader",
        "name": "DocHeader"
      }, {
        "im": "./index",
        "from": "Link",
        "name": "Link"
      }, {
        "im": "./logo",
        "from": "BeyondLogo",
        "name": "BeyondLogo"
      }, {
        "im": "./notice",
        "from": "Notice",
        "name": "Notice"
      }, {
        "im": "./pre-title",
        "from": "PreTitle",
        "name": "PreTitle"
      }, {
        "im": "./sub-title",
        "from": "Subtitle",
        "name": "Subtitle"
      }, {
        "im": "./svg-image",
        "from": "SVGImage",
        "name": "SVGImage"
      }, {
        "im": "./table",
        "from": "Table",
        "name": "Table"
      }, {
        "im": "./title",
        "from": "Title",
        "name": "Title"
      }, {
        "im": "./type-property",
        "from": "TypeProperty",
        "name": "TypeProperty"
      }, {
        "im": "./type-property",
        "from": "ObjectProperty",
        "name": "ObjectProperty"
      }, {
        "im": "./type-property",
        "from": "ItemProperty",
        "name": "ItemProperty"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondName') && _export("BeyondName", BeyondName = require ? require('./beyond').BeyondName : value);
        (require || prop === 'ELink') && _export("ELink", ELink = require ? require('./external').ELink : value);
        (require || prop === 'DocHeader') && _export("DocHeader", DocHeader = require ? require('./header').DocHeader : value);
        (require || prop === 'Link') && _export("Link", Link = require ? require('./index').Link : value);
        (require || prop === 'BeyondLogo') && _export("BeyondLogo", BeyondLogo = require ? require('./logo').BeyondLogo : value);
        (require || prop === 'Notice') && _export("Notice", Notice = require ? require('./notice').Notice : value);
        (require || prop === 'PreTitle') && _export("PreTitle", PreTitle = require ? require('./pre-title').PreTitle : value);
        (require || prop === 'Subtitle') && _export("Subtitle", Subtitle = require ? require('./sub-title').Subtitle : value);
        (require || prop === 'SVGImage') && _export("SVGImage", SVGImage = require ? require('./svg-image').SVGImage : value);
        (require || prop === 'Table') && _export("Table", Table = require ? require('./table').Table : value);
        (require || prop === 'Title') && _export("Title", Title = require ? require('./title').Title : value);
        (require || prop === 'TypeProperty') && _export("TypeProperty", TypeProperty = require ? require('./type-property').TypeProperty : value);
        (require || prop === 'ObjectProperty') && _export("ObjectProperty", ObjectProperty = require ? require('./type-property').ObjectProperty : value);
        (require || prop === 'ItemProperty') && _export("ItemProperty", ItemProperty = require ? require('./type-property').ItemProperty : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO2NBRW5DLE9BQU94RSxNQUFNLENBQUN5RSxVQUFVLEVBQUU7Z0JBQ3RCM0MsR0FBRyxDQUFDdUMsT0FBTyxDQUFDSyxNQUFNLENBQUMxRSxNQUFNLENBQUN5RSxVQUFVLENBQUM7O2NBRXpDekUsTUFBTSxDQUFDMkUsTUFBTSxFQUFFO1lBQ25CLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDTixPQUNJaEY7Y0FBS21DLEdBQUcsRUFBRUE7WUFBRyxHQUNUbkMsb0JBQUNvRSxjQUFjO2NBQUNyQyxJQUFJLEVBQUMsUUFBUTtjQUFDb0MsUUFBUTtZQUFBLEdBQ2pDSSxLQUFLLENBQ08sRUFDaEJuRSxRQUFRLENBQ1A7VUFFZCIsIm5hbWVzIjpbIkJleW9uZE5hbWUiLCJSZWFjdCIsImNsYXNzTmFtZSIsIkVMaW5rIiwidG8iLCJjaGlsZHJlbiIsInRhcmdldCIsImhyZWYiLCJEb2NIZWFkZXIiLCJ0aXRsZSIsInByZXRpdGxlIiwib3V0cHV0IiwicHVzaCIsIlByZVRpdGxlIiwia2V5IiwiVGl0bGUiLCJMaW5rIiwib25DbGljayIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsImljb24iLCJCZXlvbmRMb2dvIiwicHJvcHMiLCJTVkdJbWFnZSIsInNyYyIsIk5vdGljZSIsInRleHQiLCJsaW5rIiwidHlwZSIsIlN1YnRpdGxlIiwiZm9yd2FyZFJlZiIsIm5hbWUiLCJyZWYiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImV4cG9ydHMiLCJUYWJsZSIsInRpdGxlcyIsImZpZWxkIiwib3V0cHV0VGl0bGVzIiwibWFwIiwiaXRlbSIsInJvdyIsImNvbHVtbnMiLCJ0YWciLCJTZWxlY3RvciIsImNvbnRlbnQiLCJzcGVjcyIsInJlcGxhY2UiLCLDoSIsIsOpIiwiw60iLCLDsyIsIsO6Iiwiw4EiLCLDiSIsIsONIiwiw5MiLCLDmiIsImlkIiwidHJpbSIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJUeXBlUHJvcGVydHkiLCJvcHRpb25hbCIsIk9iamVjdFByb3BlcnR5IiwidW5kZWZpbmVkIiwiSXRlbVByb3BlcnR5IiwibGFiZWwiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvciIsImNvcHkiLCJjbG9uZU5vZGUiLCJmaXJzdENoaWxkIiwiYXBwZW5kIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2JleW9uZC50c3giLCJjb2RlL3RzL2V4dGVybmFsLnRzeCIsImNvZGUvdHMvaGVhZGVyLnRzeCIsImNvZGUvdHMvaW5kZXgudHN4IiwiY29kZS90cy9sb2dvLnRzeCIsImNvZGUvdHMvbm90aWNlLnRzeCIsImNvZGUvdHMvcHJlLXRpdGxlLnRzeCIsImNvZGUvdHMvc3ViLXRpdGxlLnRzeCIsImNvZGUvdHMvc3ZnLWltYWdlLnRzeCIsImNvZGUvdHMvdGFibGUudHN4IiwiY29kZS90cy90aXRsZS50c3giLCJjb2RlL3RzL3R5cGUtcHJvcGVydHkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==
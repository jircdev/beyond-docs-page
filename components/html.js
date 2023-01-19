System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.7/routing", "@beyond/docs@1/store", "@beyond/ui@1.0.0/link", "prop-types@15.8.1", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, BeyondJS, ELink, DocHeader, Info, Link, BeyondLogo, NextLinks, Notice, PreTitle, Subtitle, SVGImage, Table, Title, TypeProperty, ObjectProperty, ItemProperty, __beyond_pkg, hmr;
  _export({
    BeyondJS: void 0,
    ELink: void 0,
    DocHeader: void 0,
    Info: void 0,
    Link: void 0,
    BeyondLogo: void 0,
    NextLinks: void 0,
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
    }, function (_beyondDocs1Store) {
      dependency_3 = _beyondDocs1Store;
    }, function (_beyondUi100Link) {
      dependency_4 = _beyondUi100Link;
    }, function (_propTypes) {
      dependency_5 = _propTypes;
    }, function (_beyondJsKernel017Styles) {
      dependency_6 = _beyondJsKernel017Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['@beyond/docs/store', dependency_3], ['@beyond/ui/link', dependency_4], ['prop-types', dependency_5], ['@beyond-js/kernel/styles', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs@1/components/html');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./beyond
      ************************/
      ims.set('./beyond', {
        hash: 4214373847,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondJS = BeyondJS;
          var React = require("react");
          /*bundle*/
          function BeyondJS() {
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
        hash: 306766842,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ELink = ELink;
          var React = require("react");
          /*bundle*/
          function ELink(props) {
            const {
              href
            } = props;
            return React.createElement("a", {
              href: href,
              target: "_blank",
              ...props,
              "data-algo": "algo"
            }, props.children);
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

      /**********************
      INTERNAL MODULE: ./info
      **********************/

      ims.set('./info', {
        hash: 3620021091,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Info = Info;
          var React = require("react");
          /*bundle */
          function Info({
            children
          }) {
            return React.createElement("div", {
              className: "docs__info"
            }, children);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./link
      **********************/

      ims.set('./link', {
        hash: 3540147823,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Link = Link;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function Link(props) {
            const onClick = event => {
              event.preventDefault();
              _routing.routing.pushState(props.href);
            };
            return React.createElement("a", {
              onClick: onClick,
              ...props
            }, props.children);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./logo
      **********************/

      ims.set('./logo', {
        hash: 277503195,
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
            return _react.default.createElement(_svgImage.SVGImage, {
              src: icon,
              ...props
            });
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./next-links
      ****************************/

      ims.set('./next-links', {
        hash: 268380563,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NextLinks = NextLinks;
          var React = require("react");
          var _link = require("./link");
          var _store = require("@beyond/docs/store");
          const Item = ({
            href,
            texts
          }) => {
            const identifier = `/docs/${href}`;
            return React.createElement("li", null, React.createElement(_link.Link, {
              href: identifier
            }, texts[identifier]));
          };
          /*bundle*/
          function NextLinks({
            items
          }) {
            const [ready, texts] = (0, _store.useTexts)("@beyond/docs/layout/menu");
            if (!ready) return null;
            const output = items.map((href, i) => React.createElement(Item, {
              texts: texts,
              key: `${href}.${i}`,
              href: href
            }));
            // items
            return React.createElement("div", {
              className: "next__content link__content"
            }, React.createElement("ul", null, output));
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
        "from": "BeyondJS",
        "name": "BeyondJS"
      }, {
        "im": "./external",
        "from": "ELink",
        "name": "ELink"
      }, {
        "im": "./header",
        "from": "DocHeader",
        "name": "DocHeader"
      }, {
        "im": "./info",
        "from": "Info",
        "name": "Info"
      }, {
        "im": "./link",
        "from": "Link",
        "name": "Link"
      }, {
        "im": "./logo",
        "from": "BeyondLogo",
        "name": "BeyondLogo"
      }, {
        "im": "./next-links",
        "from": "NextLinks",
        "name": "NextLinks"
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
        (require || prop === 'BeyondJS') && _export("BeyondJS", BeyondJS = require ? require('./beyond').BeyondJS : value);
        (require || prop === 'ELink') && _export("ELink", ELink = require ? require('./external').ELink : value);
        (require || prop === 'DocHeader') && _export("DocHeader", DocHeader = require ? require('./header').DocHeader : value);
        (require || prop === 'Info') && _export("Info", Info = require ? require('./info').Info : value);
        (require || prop === 'Link') && _export("Link", Link = require ? require('./link').Link : value);
        (require || prop === 'BeyondLogo') && _export("BeyondLogo", BeyondLogo = require ? require('./logo').BeyondLogo : value);
        (require || prop === 'NextLinks') && _export("NextLinks", NextLinks = require ? require('./next-links').NextLinks : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsRUFBRSxDQUFDO1lBQ04sT0FDSXJGO2NBQUt5QyxHQUFHLEVBQUVBO1lBQUcsR0FDVHpDLG9CQUFDeUUsY0FBYztjQUFDcEMsSUFBSSxFQUFDLFFBQVE7Y0FBQ21DLFFBQVE7WUFBQSxHQUNqQ0ksS0FBSyxDQUNPLEVBQ2hCdEUsUUFBUSxDQUNQO1VBRWQiLCJuYW1lcyI6WyJCZXlvbmRKUyIsIlJlYWN0IiwiY2xhc3NOYW1lIiwiRUxpbmsiLCJwcm9wcyIsImhyZWYiLCJ0YXJnZXQiLCJjaGlsZHJlbiIsIkRvY0hlYWRlciIsInRpdGxlIiwicHJldGl0bGUiLCJvdXRwdXQiLCJwdXNoIiwiUHJlVGl0bGUiLCJrZXkiLCJUaXRsZSIsIkluZm8iLCJMaW5rIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiaWNvbiIsIkJleW9uZExvZ28iLCJTVkdJbWFnZSIsInNyYyIsIkl0ZW0iLCJ0ZXh0cyIsImlkZW50aWZpZXIiLCJOZXh0TGlua3MiLCJpdGVtcyIsInJlYWR5IiwibWFwIiwiaSIsIk5vdGljZSIsInRleHQiLCJsaW5rIiwidHlwZSIsIlN1YnRpdGxlIiwiZm9yd2FyZFJlZiIsIm5hbWUiLCJyZWYiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImV4cG9ydHMiLCJUYWJsZSIsInRpdGxlcyIsImZpZWxkIiwib3V0cHV0VGl0bGVzIiwiaXRlbSIsInJvdyIsImNvbHVtbnMiLCJ0YWciLCJTZWxlY3RvciIsImNvbnRlbnQiLCJzcGVjcyIsInJlcGxhY2UiLCLDoSIsIsOpIiwiw60iLCLDsyIsIsO6Iiwiw4EiLCLDiSIsIsONIiwiw5MiLCLDmiIsImlkIiwidHJpbSIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJUeXBlUHJvcGVydHkiLCJvcHRpb25hbCIsIk9iamVjdFByb3BlcnR5IiwidW5kZWZpbmVkIiwiSXRlbVByb3BlcnR5IiwibGFiZWwiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvciIsImNvcHkiLCJjbG9uZU5vZGUiLCJmaXJzdENoaWxkIiwiYXBwZW5kIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2JleW9uZC50c3giLCJjb2RlL3RzL2V4dGVybmFsLnRzeCIsImNvZGUvdHMvaGVhZGVyLnRzeCIsImNvZGUvdHMvaW5mby50c3giLCJjb2RlL3RzL2xpbmsudHN4IiwiY29kZS90cy9sb2dvLnRzeCIsImNvZGUvdHMvbmV4dC1saW5rcy50c3giLCJjb2RlL3RzL25vdGljZS50c3giLCJjb2RlL3RzL3ByZS10aXRsZS50c3giLCJjb2RlL3RzL3N1Yi10aXRsZS50c3giLCJjb2RlL3RzL3N2Zy1pbWFnZS50c3giLCJjb2RlL3RzL3RhYmxlLnRzeCIsImNvZGUvdHMvdGl0bGUudHN4IiwiY29kZS90cy90eXBlLXByb3BlcnR5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19
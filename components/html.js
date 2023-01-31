System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.7/routing", "@beyond/docs@1/store", "@beyond/ui@1.0.0/link", "prop-types@15.8.1", "@beyond/docs@1/preload"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, BeyondJS, ELink, DocHeader, Info, Link, BeyondLogo, NextLinks, Notice, PreTitle, Subtitle, SVGImage, Table, Title, TypeProperty, ObjectProperty, ItemProperty, UnderConstruction, __beyond_pkg, hmr;
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
    ItemProperty: void 0,
    UnderConstruction: void 0
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
    }, function (_beyondDocs1Preload) {
      dependency_6 = _beyondDocs1Preload;
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
          "vspecifier": "@beyond/docs@1/components/html"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['@beyond/docs/store', dependency_3], ['@beyond/ui/link', dependency_4], ['prop-types', dependency_5], ['@beyond/docs/preload', dependency_6]]);
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

      /***********************************
      INTERNAL MODULE: ./unde-construction
      ***********************************/

      ims.set('./unde-construction', {
        hash: 2173041160,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UnderConstruction = UnderConstruction;
          var React = require("react");
          var _store = require("@beyond/docs/store");
          var _preload = require("@beyond/docs/preload");
          /*bundle*/
          function UnderConstruction() {
            const [ready, texts] = (0, _store.useTexts)('@beyond/docs/under-construction');
            if (!ready) return null;
            return React.createElement("div", {
              className: "container-404"
            }, React.createElement("div", {
              className: "content-container two-columns"
            }, React.createElement("header", null, React.createElement("span", {
              className: "pretitle-h1"
            }, texts.pretitle), React.createElement("h1", null, texts.title), React.createElement("p", null, texts.description)), React.createElement("div", {
              className: "isotype-404 "
            }, React.createElement(_preload.BeyondIsotype, null))));
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
      }, {
        "im": "./unde-construction",
        "from": "UnderConstruction",
        "name": "UnderConstruction"
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
        (require || prop === 'UnderConstruction') && _export("UnderConstruction", UnderConstruction = require ? require('./unde-construction').UnderConstruction : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLEVBQUUsQ0FBQztZQUNOLE9BQ0lyRjtjQUFLeUMsR0FBRyxFQUFFQTtZQUFHLEdBQ1R6QyxvQkFBQ3lFLGNBQWM7Y0FBQ3BDLElBQUksRUFBQyxRQUFRO2NBQUNtQyxRQUFRO1lBQUEsR0FDakNJLEtBQUssQ0FDTyxFQUNoQnRFLFFBQVEsQ0FDUDtVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hEQTtVQUNBO1VBRUE7VUFFTztVQUFVLFNBQVVnRixpQkFBaUI7WUFDM0MsTUFBTSxDQUFDdkQsS0FBSyxFQUFFSixLQUFLLENBQUMsR0FBRyxtQkFBUSxFQUFDLGlDQUFpQyxDQUFDO1lBQ2xFLElBQUksQ0FBQ0ksS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUN2QixPQUNDL0I7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0JEO2NBQUtDLFNBQVMsRUFBQztZQUErQixHQUM3Q0Qsb0NBQ0NBO2NBQU1DLFNBQVMsRUFBQztZQUFhLEdBQUUwQixLQUFLLENBQUNsQixRQUFRLENBQVEsRUFDckRULGdDQUFLMkIsS0FBSyxDQUFDbkIsS0FBSyxDQUFNLEVBQ3RCUiwrQkFBSTJCLEtBQUssQ0FBQzRELFdBQVcsQ0FBSyxDQUNsQixFQUNUdkY7Y0FBS0MsU0FBUyxFQUFDO1lBQWMsR0FDNUJELG9CQUFDd0Ysc0JBQWEsT0FBRyxDQUNaLENBQ0QsQ0FDRDtVQUVSIiwibmFtZXMiOlsiQmV5b25kSlMiLCJSZWFjdCIsImNsYXNzTmFtZSIsIkVMaW5rIiwicHJvcHMiLCJocmVmIiwidGFyZ2V0IiwiY2hpbGRyZW4iLCJEb2NIZWFkZXIiLCJ0aXRsZSIsInByZXRpdGxlIiwib3V0cHV0IiwicHVzaCIsIlByZVRpdGxlIiwia2V5IiwiVGl0bGUiLCJJbmZvIiwiTGluayIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsImljb24iLCJCZXlvbmRMb2dvIiwiU1ZHSW1hZ2UiLCJzcmMiLCJJdGVtIiwidGV4dHMiLCJpZGVudGlmaWVyIiwiTmV4dExpbmtzIiwiaXRlbXMiLCJyZWFkeSIsIm1hcCIsImkiLCJOb3RpY2UiLCJ0ZXh0IiwibGluayIsInR5cGUiLCJTdWJ0aXRsZSIsImZvcndhcmRSZWYiLCJuYW1lIiwicmVmIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJleHBvcnRzIiwiVGFibGUiLCJ0aXRsZXMiLCJmaWVsZCIsIm91dHB1dFRpdGxlcyIsIml0ZW0iLCJyb3ciLCJjb2x1bW5zIiwidGFnIiwiU2VsZWN0b3IiLCJjb250ZW50Iiwic3BlY3MiLCJyZXBsYWNlIiwiw6EiLCLDqSIsIsOtIiwiw7MiLCLDuiIsIsOBIiwiw4kiLCLDjSIsIsOTIiwiw5oiLCJpZCIsInRyaW0iLCJtYXRjaCIsInRvTG93ZXJDYXNlIiwiVHlwZVByb3BlcnR5Iiwib3B0aW9uYWwiLCJPYmplY3RQcm9wZXJ0eSIsInVuZGVmaW5lZCIsIkl0ZW1Qcm9wZXJ0eSIsImxhYmVsIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb3B5IiwiY2xvbmVOb2RlIiwiZmlyc3RDaGlsZCIsImFwcGVuZCIsInJlbW92ZSIsIlVuZGVyQ29uc3RydWN0aW9uIiwiZGVzY3JpcHRpb24iLCJCZXlvbmRJc290eXBlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2JleW9uZC50c3giLCJjb2RlL3RzL2V4dGVybmFsLnRzeCIsImNvZGUvdHMvaGVhZGVyLnRzeCIsImNvZGUvdHMvaW5mby50c3giLCJjb2RlL3RzL2xpbmsudHN4IiwiY29kZS90cy9sb2dvLnRzeCIsImNvZGUvdHMvbmV4dC1saW5rcy50c3giLCJjb2RlL3RzL25vdGljZS50c3giLCJjb2RlL3RzL3ByZS10aXRsZS50c3giLCJjb2RlL3RzL3N1Yi10aXRsZS50c3giLCJjb2RlL3RzL3N2Zy1pbWFnZS50c3giLCJjb2RlL3RzL3RhYmxlLnRzeCIsImNvZGUvdHMvdGl0bGUudHN4IiwiY29kZS90cy90eXBlLXByb3BlcnR5LnRzeCIsImNvZGUvdHMvdW5kZS1jb25zdHJ1Y3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==
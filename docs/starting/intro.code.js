System.register(["@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/styles", "react@18.2.0", "@beyond/docs@1/components/html"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, DocsIntro, __beyond_pkg, hmr;
  _export("DocsIntro", void 0);
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_beyondJsKernel010Styles) {
      dependency_1 = _beyondJsKernel010Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_beyondDocs1ComponentsHtml) {
      dependency_3 = _beyondDocs1ComponentsHtml;
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
          "vspecifier": "@beyond/docs@1/docs/starting/intro",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond/docs/components/html', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs@1/docs/starting/intro.code');
      ims = new Map();
      /******************************
      INTERNAL MODULE: ./header/index
      ******************************/
      ims.set('./header/index', {
        hash: 3243430487,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AboutHeader = AboutHeader;
          var React = require("react");
          var _logos = require("./logos");
          function AboutHeader() {
            return React.createElement("header", {
              className: "about__header"
            }, React.createElement(_logos.SVGLogos, null));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./header/logos
      ******************************/

      ims.set('./header/logos', {
        hash: 2104305991,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SVGLogos = SVGLogos;
          var React = require("react");
          function SVGLogos() {
            return React.createElement("svg", {
              version: "1.1",
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              x: "0px",
              y: "0px",
              viewBox: "0 0 554.1 326",
              enableBackground: "new 0 0 554.1 326"
            }, React.createElement("g", {
              id: "Group_7777",
              transform: "translate(435.056 238.608)",
              opacity: "0.67"
            }, React.createElement("g", {
              id: "Group_7776",
              transform: "translate(554.11 326) rotate(180)"
            }, React.createElement("g", {
              id: "Group_7751",
              transform: "translate(130.157 30.851)"
            }, React.createElement("g", null, React.createElement("g", null, React.createElement("g", null, React.createElement("defs", null, React.createElement("path", {
              id: "SVGID_1_",
              d: "M435.1,275.6l3.3,1.9c74.6-38.8,179.3-46.4,265.7-22.6c1.2,0.3,2.4,0.7,3.6,1\r\n    c18.5,5.2,36.5,12.2,53.6,20.9c49.6,25.5,76.9,60.2,80.9,95.8c-1.7,0.3-3.4,0.9-5,1.8c-0.2,0.1-0.4,0.2-0.5,0.3\r\n    c-4.7,3.1-4.2,7.8,1.1,10.5c1.5,0.8,3.1,1.3,4.8,1.6c-0.2,2.9-0.5,5.8-1,8.6c1.6,0,3.1,0.1,4.7,0.4c0.5-2.9,0.8-5.8,1-8.7\r\n    c2.8-0.1,5.6-0.8,8-2.1c0.2-0.1,0.4-0.2,0.5-0.3c4.7-3.1,4.2-7.8-1.1-10.5c-2.5-1.2-5.2-1.8-7.9-1.9\r\n    c-4.2-36.3-31.9-71.6-82.4-97.5c-18-9.1-36.8-16.4-56.2-21.8c-1.2-0.3-2.4-0.7-3.6-1c-33.9-9-68.9-13.5-104-13.4\r\n    C541.4,238.6,482.3,251,435.1,275.6"
            })), React.createElement("clipPath", {
              id: "SVGID_00000062881068944370888080000011824635249672915332_"
            }, React.createElement("use", {
              href: "#SVGID_1_",
              overflow: "visible"
            })), React.createElement("g", {
              id: "Group_7750",
              clipPath: "url(#SVGID_00000062881068944370888080000011824635249672915332_)"
            }, React.createElement("linearGradient", {
              id: "Rectangle_2540_00000047035374000639874110000009836381273776998074_",
              gradientUnits: "userSpaceOnUse",
              x1: "878.6499",
              y1: "-155.0977",
              x2: "878.6499",
              y2: "-154.0977",
              gradientTransform: "matrix(-425.417 0 0 164.712 374440.4062 25777.4453)"
            }, React.createElement("stop", {
              offset: "0",
              stopColor: "#617096"
            }), React.createElement("stop", {
              offset: "1",
              stopColor: "#1F2940"
            })), React.createElement("rect", {
              id: "Rectangle_2540",
              x: "435.1",
              y: "231",
              fill: "url(#Rectangle_2540_00000047035374000639874110000009836381273776998074_)",
              width: "425.4",
              height: "164.7"
            })))))), React.createElement("g", {
              id: "Group_7755",
              transform: "translate(5.627 187.186)"
            }, React.createElement("g", null, React.createElement("g", null, React.createElement("g", null, React.createElement("defs", null, React.createElement("path", {
              id: "SVGID_00000145055731939297839680000000646170148333793167_",
              d: "M437.2,240.2c-0.8-0.4-1.5-0.9-2.1-1.6\r\n\t\t\t\t\t\t\t\tC435.6,239.3,436.4,239.8,437.2,240.2"
            })), React.createElement("clipPath", {
              id: "SVGID_00000085945476688750630140000017806550949200378259_"
            }, React.createElement("use", {
              href: "#SVGID_00000145055731939297839680000000646170148333793167_",
              overflow: "visible"
            })), React.createElement("g", {
              id: "Group_7754",
              clipPath: "url(#SVGID_00000085945476688750630140000017806550949200378259_)"
            }, React.createElement("linearGradient", {
              id: "Rectangle_2542_00000039122738277226982690000006317671245287205761_",
              gradientUnits: "userSpaceOnUse",
              x1: "1031.2465",
              y1: "-1095.1255",
              x2: "1031.2465",
              y2: "-1094.1255",
              gradientTransform: "matrix(-2.126 0 0 1.627 2628.5798 2020.3773)"
            }, React.createElement("stop", {
              offset: "0",
              stopColor: "#617096"
            }), React.createElement("stop", {
              offset: "1",
              stopColor: "#1F2940"
            })), React.createElement("rect", {
              id: "Rectangle_2542",
              x: "435.1",
              y: "238.6",
              fill: "url(#Rectangle_2542_00000039122738277226982690000006317671245287205761_)",
              width: "2.1",
              height: "1.6"
            })))))), React.createElement("g", {
              id: "Group_7759",
              transform: "translate(38.106 135.046)"
            }, React.createElement("g", null, React.createElement("g", null, React.createElement("g", null, React.createElement("defs", null, React.createElement("path", {
              id: "SVGID_00000177454579106356209030000008931011452848147343_",
              d: "M438.7,240.7c-1.6,0.8-2.9,2.2-3.5,3.9\r\n\t\t\t\t\t\t\t\tc-1,3.5,2.6,6.9,8.3,7.9c-6.6,39.9,15.6,79.1,61.8,109l-9.9,5.7l31.7,4.9l-8.5-18.3l-10,5.8c-45.2-29.2-66.9-67.6-60.4-106.7\r\n\t\t\t\t\t\t\t\tc2.8-0.1,5.5-0.8,7.9-2.1c1.6-0.8,2.9-2.2,3.5-3.9c1.1-3.9-3.5-7.6-10.2-8.2c-0.7-0.1-1.3-0.1-2-0.1\r\n\t\t\t\t\t\t\t\tC444.4,238.6,441.4,239.3,438.7,240.7"
            })), React.createElement("clipPath", {
              id: "SVGID_00000075135848485266470660000001215228875328882101_"
            }, React.createElement("use", {
              href: "#SVGID_00000177454579106356209030000008931011452848147343_",
              overflow: "visible"
            })), React.createElement("g", {
              id: "Group_7758",
              clipPath: "url(#SVGID_00000075135848485266470660000001215228875328882101_)"
            }, React.createElement("linearGradient", {
              id: "Rectangle_2544_00000000903480577748140840000006176655297776597922_",
              gradientUnits: "userSpaceOnUse",
              x1: "971.2062",
              y1: "-468.7806",
              x2: "971.2062",
              y2: "-467.7807",
              gradientTransform: "matrix(-92.883 0 0 133.512 90689.1953 62826.4336)"
            }, React.createElement("stop", {
              offset: "0",
              stopColor: "#617096"
            }), React.createElement("stop", {
              offset: "1",
              stopColor: "#1F2940"
            })), React.createElement("rect", {
              id: "Rectangle_2544",
              x: "434.2",
              y: "238.6",
              fill: "url(#Rectangle_2544_00000000903480577748140840000006176655297776597922_)",
              width: "92.9",
              height: "133.5"
            })))))), React.createElement("g", {
              id: "Group_7761",
              transform: "translate(479.625 255.154)"
            }, React.createElement("g", null, React.createElement("g", null, React.createElement("g", null, React.createElement("defs", null, React.createElement("path", {
              id: "SVGID_00000165206495472454024550000008045693121843922102_",
              d: "M435.1,239.1c0.3-0.2,0.5-0.4,0.8-0.5\r\n\t\t\t\t\t\t\t\tC435.6,238.8,435.3,239,435.1,239.1"
            })), React.createElement("clipPath", {
              id: "SVGID_00000170275558231334356430000009760005906022693309_"
            }, React.createElement("use", {
              href: "#SVGID_00000165206495472454024550000008045693121843922102_",
              overflow: "visible"
            })), React.createElement("g", {
              id: "Group_7760",
              clipPath: "url(#SVGID_00000170275558231334356430000009760005906022693309_)"
            }, React.createElement("linearGradient", {
              id: "Rectangle_2545_00000006708975737966518680000011981333647266147986_",
              gradientUnits: "userSpaceOnUse",
              x1: "605.7971",
              y1: "-2286.4453",
              x2: "605.7971",
              y2: "-2285.4453",
              gradientTransform: "matrix(-0.781 0 0 0.529 908.6275 1448.1376)"
            }, React.createElement("stop", {
              offset: "0",
              stopColor: "#617096"
            }), React.createElement("stop", {
              offset: "1",
              stopColor: "#1F2940"
            })), React.createElement("rect", {
              id: "Rectangle_2545",
              x: "435.1",
              y: "238.6",
              fill: "url(#Rectangle_2545_00000006708975737966518680000011981333647266147986_)",
              width: "0.8",
              height: "0.5"
            })))))), React.createElement("g", {
              id: "Group_7763",
              transform: "translate(84.132 54.797)"
            }, React.createElement("g", null, React.createElement("g", null, React.createElement("g", null, React.createElement("defs", null, React.createElement("path", {
              id: "SVGID_00000116918156262988565010000009447805331719119771_",
              d: "M641.2,468.5L641.2,468.5 M509.6,441.2\r\n\t\t\t\t\t\t\t\tC547.4,459.4,547.4,459.4,509.6,441.2 M508,440.4c0.2,0.1,0.4,0.2,0.6,0.3C508.3,440.6,508.2,440.5,508,440.4 M499.3,274.3\r\n\t\t\t\t\t\t\t\tc-3,1.7-5.9,3.4-8.7,5.2C493.4,277.8,496.3,276,499.3,274.3 M524.5,429.2c-72.7-36.2-79.3-99-14.6-140c2.4-1.6,5-3.1,7.6-4.6\r\n\t\t\t\t\t\t\t\tc65.9-36.9,172-38.7,241.5-4.1c20.4,10.2,35.6,22.4,45.5,35.7c0.1,0.1,0.1,0.2,0.2,0.3c0.9,1.2,1.8,2.5,2.6,3.7\r\n\t\t\t\t\t\t\t\tc0.2,0.3,0.4,0.6,0.6,0.9c20.9,33,10,71.3-34.2,99.3c-2.4,1.5-5,3.1-7.6,4.6c-34.3,19.2-79.5,28.9-124.8,28.9\r\n\t\t\t\t\t\t\t\tC599.6,454,557.9,445.8,524.5,429.2 M496.1,272.5c-3.1,1.7-6.1,3.5-8.9,5.3c-75.8,48-68.1,121.7,17.1,164.1\r\n\t\t\t\t\t\t\t\tc14.6,7.2,30,13,45.7,17.2c1.2,0.3,2.4,0.7,3.6,1c76.8,20.2,170.9,12.2,233.8-23c3.1-1.7,6.1-3.5,8.9-5.3\r\n\t\t\t\t\t\t\t\tc75.8-48.1,68.1-121.7-17.1-164.1c-11.3-5.6-23-10.3-35-14c-1.1-0.4-2.3-0.7-3.5-1.1c-30.6-9.3-64.5-14-98.4-14\r\n\t\t\t\t\t\t\t\tC589.4,238.6,536.4,250,496.1,272.5"
            })), React.createElement("clipPath", {
              id: "SVGID_00000105392659764058125720000007580054405611972248_"
            }, React.createElement("use", {
              href: "#SVGID_00000116918156262988565010000009447805331719119771_",
              overflow: "visible"
            })), React.createElement("g", {
              id: "Group_7762",
              clipPath: "url(#SVGID_00000105392659764058125720000007580054405611972248_)"
            }, React.createElement("linearGradient", {
              id: "Rectangle_2546_00000117670645457790373050000006728411969178064312_",
              gradientUnits: "userSpaceOnUse",
              x1: "924.6326",
              y1: "-225.4508",
              x2: "924.6326",
              y2: "-224.4509",
              gradientTransform: "matrix(-460.69 0 0 241.717 426625.3438 54730.8945)"
            }, React.createElement("stop", {
              offset: "0",
              stopColor: "#617096"
            }), React.createElement("stop", {
              offset: "1",
              stopColor: "#1F2940"
            })), React.createElement("rect", {
              id: "Rectangle_2546",
              x: "426",
              y: "235.6",
              fill: "url(#Rectangle_2546_00000117670645457790373050000006728411969178064312_)",
              width: "460.7",
              height: "241.7"
            })))))), React.createElement("g", {
              id: "Group_7765",
              transform: "translate(458.586 127.701)"
            }, React.createElement("g", null, React.createElement("g", null, React.createElement("g", null, React.createElement("defs", null, React.createElement("path", {
              id: "SVGID_00000183221030062757479430000005152815732459183779_",
              d: "M435.6,239.5c-0.2-0.3-0.4-0.6-0.6-0.9\r\n\t\t\t\t\t\t\t\tC435.3,238.9,435.4,239.2,435.6,239.5"
            })), React.createElement("clipPath", {
              id: "SVGID_00000056427012263454241540000012952959017791148675_"
            }, React.createElement("use", {
              href: "#SVGID_00000183221030062757479430000005152815732459183779_",
              overflow: "visible"
            })), React.createElement("g", {
              id: "Group_7764",
              clipPath: "url(#SVGID_00000056427012263454241540000012952959017791148675_)"
            }, React.createElement("linearGradient", {
              id: "Rectangle_2547_00000089555738384348326930000013998564875533123735_",
              gradientUnits: "userSpaceOnUse",
              x1: "655.0563",
              y1: "-1304.7876",
              x2: "655.0563",
              y2: "-1303.7876",
              gradientTransform: "matrix(-0.571 0 0 0.896 809.4371 1407.6978)"
            }, React.createElement("stop", {
              offset: "0",
              stopColor: "#617096"
            }), React.createElement("stop", {
              offset: "1",
              stopColor: "#1F2940"
            })), React.createElement("rect", {
              id: "Rectangle_2547",
              x: "435.1",
              y: "238.6",
              fill: "url(#Rectangle_2547_00000089555738384348326930000013998564875533123735_)",
              width: "0.6",
              height: "0.9"
            })))))), React.createElement("g", {
              id: "Group_7767",
              transform: "translate(455.794 123.591)"
            }, React.createElement("g", null, React.createElement("g", null, React.createElement("g", null, React.createElement("defs", null, React.createElement("path", {
              id: "SVGID_00000094607625213145956650000002803231037988073099_",
              d: "M435.2,238.9c-0.1-0.1-0.1-0.2-0.2-0.3\r\n\t\t\t\t\t\t\t\tC435.1,238.7,435.2,238.8,435.2,238.9"
            })), React.createElement("clipPath", {
              id: "SVGID_00000036210926437932834180000006827362433529115548_"
            }, React.createElement("use", {
              href: "#SVGID_00000094607625213145956650000002803231037988073099_",
              overflow: "visible"
            })), React.createElement("g", {
              id: "Group_7766",
              clipPath: "url(#SVGID_00000036210926437932834180000006827362433529115548_)"
            }, React.createElement("linearGradient", {
              id: "Rectangle_2548_00000164473077802334652770000013168872965697030030_",
              gradientUnits: "userSpaceOnUse",
              x1: "865.1219",
              y1: "-3125.4824",
              x2: "865.1219",
              y2: "-3124.4824",
              gradientTransform: "matrix(-0.192 0 0 0.287 601.3034 1135.6215)"
            }, React.createElement("stop", {
              offset: "0",
              stopColor: "#617096"
            }), React.createElement("stop", {
              offset: "1",
              stopColor: "#1F2940"
            })), React.createElement("rect", {
              id: "Rectangle_2548",
              x: "435.1",
              y: "238.6",
              fill: "url(#Rectangle_2548_00000164473077802334652770000013168872965697030030_)",
              width: "0.2",
              height: "0.3"
            })))))), React.createElement("g", {
              id: "Group_7769",
              transform: "translate(159.222 90.333)"
            }, React.createElement("g", null, React.createElement("g", null, React.createElement("g", null, React.createElement("defs", null, React.createElement("path", {
              id: "SVGID_00000087382204895199352920000010507258904094658716_",
              d: "M435.1,243.4c0.1-0.1,0.3-0.2,0.4-0.3\r\n\t\t\t\t\t\t\t\tC435.4,243.2,435.2,243.3,435.1,243.4 M435.5,243.1L435.5,243.1L435.5,243.1 M435.6,243c0.1-0.1,0.2-0.1,0.3-0.2\r\n\t\t\t\t\t\t\t\tC435.8,242.9,435.7,243,435.6,243 M435.9,242.8c0.1-0.1,0.2-0.1,0.3-0.2C436.1,242.7,436,242.8,435.9,242.8 M436.2,242.6\r\n\t\t\t\t\t\t\t\tL436.2,242.6L436.2,242.6 M436.3,242.6c2.1-1.4,4.3-2.7,6.5-4C440.6,239.9,438.4,241.2,436.3,242.6"
            })), React.createElement("clipPath", {
              id: "SVGID_00000051385156018263421150000005747258190965690289_"
            }, React.createElement("use", {
              href: "#SVGID_00000087382204895199352920000010507258904094658716_",
              overflow: "visible"
            })), React.createElement("g", {
              id: "Group_7768",
              clipPath: "url(#SVGID_00000051385156018263421150000005747258190965690289_)"
            }, React.createElement("linearGradient", {
              id: "Rectangle_2549_00000075134341570354577780000017541187679581104822_",
              gradientUnits: "userSpaceOnUse",
              x1: "857.1761",
              y1: "-491.4153",
              x2: "857.1761",
              y2: "-490.4153",
              gradientTransform: "matrix(-7.751 0 0 4.761 7082.9717 2578.2356)"
            }, React.createElement("stop", {
              offset: "0",
              stopColor: "#617096"
            }), React.createElement("stop", {
              offset: "1",
              stopColor: "#1F2940"
            })), React.createElement("rect", {
              id: "Rectangle_2549",
              x: "435.1",
              y: "238.6",
              fill: "url(#Rectangle_2549_00000075134341570354577780000017541187679581104822_)",
              width: "7.8",
              height: "4.8"
            })))))), React.createElement("g", {
              id: "Group_7771",
              transform: "translate(485.534 267.966)"
            }, React.createElement("g", null, React.createElement("g", null, React.createElement("g", null, React.createElement("defs", null, React.createElement("path", {
              id: "SVGID_00000127732413734262510380000008740599268312202895_",
              d: "M436.6,238.6c0,0-0.4,0.3-1.5,1\r\n\t\t\t\t\t\t\t\tC435.8,239.1,436.6,238.6,436.6,238.6L436.6,238.6"
            })), React.createElement("clipPath", {
              id: "SVGID_00000048477560714758024140000001445818503297944705_"
            }, React.createElement("use", {
              href: "#SVGID_00000127732413734262510380000008740599268312202895_",
              overflow: "visible"
            })), React.createElement("g", {
              id: "Group_7770",
              clipPath: "url(#SVGID_00000048477560714758024140000001445818503297944705_)"
            }, React.createElement("linearGradient", {
              id: "Rectangle_2550_00000070808753942384029380000005694041016307523519_",
              gradientUnits: "userSpaceOnUse",
              x1: "561.8294",
              y1: "-1669.6764",
              x2: "561.8294",
              y2: "-1668.6764",
              gradientTransform: "matrix(-1.55 0 0 0.958 1306.6855 1838.1581)"
            }, React.createElement("stop", {
              offset: "0",
              stopColor: "#617096"
            }), React.createElement("stop", {
              offset: "1",
              stopColor: "#1F2940"
            })), React.createElement("rect", {
              id: "Rectangle_2550",
              x: "435.1",
              y: "238.6",
              fill: "url(#Rectangle_2550_00000070808753942384029380000005694041016307523519_)",
              width: "1.5",
              height: "1"
            })))))), React.createElement("g", {
              id: "Group_7773",
              transform: "translate(484.036 268.924)"
            }, React.createElement("g", null, React.createElement("g", null, React.createElement("g", null, React.createElement("defs", null, React.createElement("path", {
              id: "SVGID_00000008134293585954280120000007960972696951187846_",
              d: "M435.1,239.6c0,0,0.8-0.5,1.5-1\r\n\t\t\t\t\t\t\t\tC435.4,239.3,435,239.6,435.1,239.6"
            })), React.createElement("clipPath", {
              id: "SVGID_00000042701290139075296750000005466339284138896044_"
            }, React.createElement("use", {
              href: "#SVGID_00000008134293585954280120000007960972696951187846_",
              overflow: "visible"
            })), React.createElement("g", {
              id: "Group_7772",
              clipPath: "url(#SVGID_00000042701290139075296750000005466339284138896044_)"
            }, React.createElement("linearGradient", {
              id: "Rectangle_2551_00000026862125955172237240000015330859716833365892_",
              gradientUnits: "userSpaceOnUse",
              x1: "563.9499",
              y1: "-1665.8595",
              x2: "563.9499",
              y2: "-1664.8595",
              gradientTransform: "matrix(-1.527 0 0 0.966 1296.9015 1847.8282)"
            }, React.createElement("stop", {
              offset: "0",
              stopColor: "#617096"
            }), React.createElement("stop", {
              offset: "1",
              stopColor: "#1F2940"
            })), React.createElement("rect", {
              id: "Rectangle_2551",
              x: "435",
              y: "238.6",
              fill: "url(#Rectangle_2551_00000026862125955172237240000015330859716833365892_)",
              width: "1.5",
              height: "1"
            })))))), React.createElement("g", {
              id: "Group_7775",
              transform: "translate(307.362 208.331)"
            }, React.createElement("g", null, React.createElement("g", null, React.createElement("g", null, React.createElement("defs", null, React.createElement("path", {
              id: "SVGID_00000067939774048547978710000011684195090270221736_",
              d: "M602.2,283.4c-3.4,2.2-6.8,4.3-10.4,6.4\r\n\t\t\t\t\t\t\t\tc-36.1,20.9-82.4,34.6-132.6,39.3c-1.7-3.2-7.1-5.3-13.1-5c-2.6,0.1-5.1,0.8-7.4,2.1c-2.6,1.5-4,3.6-3.6,5.8\r\n\t\t\t\t\t\t\t\tc0.7,3.9,6.8,6.8,13.6,6.3c2.6-0.1,5.1-0.8,7.4-2.1c2-1.2,3.4-2.8,3.6-4.5c51.3-4.8,98.6-18.8,135.4-40.1\r\n\t\t\t\t\t\t\t\tc3.6-2.1,7.2-4.3,10.6-6.5c21.1-13.8,36.8-29.2,47.1-45.5c-1.5-0.2-2.9-0.6-4.3-1.1C638.4,254.7,623,269.9,602.2,283.4"
            })), React.createElement("clipPath", {
              id: "SVGID_00000067931997389004459940000002648141217861683865_"
            }, React.createElement("use", {
              href: "#SVGID_00000067939774048547978710000011684195090270221736_",
              overflow: "visible"
            })), React.createElement("g", {
              id: "Group_7774",
              clipPath: "url(#SVGID_00000067931997389004459940000002648141217861683865_)"
            }, React.createElement("linearGradient", {
              id: "Rectangle_2552_00000130608710645915868200000011789071243959628710_",
              gradientUnits: "userSpaceOnUse",
              x1: "701.579",
              y1: "-690.5606",
              x2: "701.579",
              y2: "-689.5609",
              gradientTransform: "matrix(-218.157 0 0 100.23 153598.1719 69453.4922)"
            }, React.createElement("stop", {
              offset: "0",
              stopColor: "#617096"
            }), React.createElement("stop", {
              offset: "1",
              stopColor: "#1F2940"
            })), React.createElement("rect", {
              id: "Rectangle_2552",
              x: "434.7",
              y: "238.6",
              fill: "url(#Rectangle_2552_00000130608710645915868200000011789071243959628710_)",
              width: "218.2",
              height: "100.2"
            })))))))), React.createElement("g", null, React.createElement("g", {
              id: "React",
              transform: "translate(310.14 157.83)"
            }, React.createElement("g", {
              transform: "matrix(1, 0, 0, 1, -378.99, -178.26)"
            }, React.createElement("path", {
              id: "Path_3960-2",
              fill: "#61DAFB",
              d: "M484.5,219.3L484.5,219.3c-0.5-0.2-1-0.3-1.5-0.5c0.1-0.3,0.2-0.7,0.2-1\r\n\t\t\t\tc1.1-5.3,0.4-9.6-2.1-11c-2.4-1.4-6.2,0.1-10.1,3.4c-0.4,0.3-0.8,0.7-1.1,1c-0.2-0.2-0.5-0.5-0.7-0.7c-4.1-3.6-8.2-5.1-10.6-3.7\r\n\t\t\t\tc-2.4,1.4-3,5.4-2.1,10.5c0.1,0.5,0.2,1,0.3,1.5c-0.6,0.2-1.1,0.3-1.7,0.5c-4.8,1.7-7.8,4.3-7.8,7c0,2.8,3.3,5.6,8.2,7.3\r\n\t\t\t\tc0.4,0.1,0.8,0.3,1.2,0.4c-0.1,0.5-0.3,1.1-0.4,1.6c-0.9,5-0.2,8.9,2.1,10.3c2.4,1.4,6.5,0,10.4-3.5c0.3-0.3,0.6-0.6,0.9-0.9\r\n\t\t\t\tc0.4,0.4,0.8,0.8,1.2,1.1c3.8,3.3,7.6,4.6,10,3.3c2.4-1.4,3.2-5.6,2.2-10.8c-0.1-0.4-0.2-0.8-0.3-1.2c0.3-0.1,0.6-0.2,0.8-0.3\r\n\t\t\t\tc5.2-1.7,8.5-4.5,8.5-7.3C492.5,223.6,489.3,221,484.5,219.3z M472.3,211.7c3.3-2.9,6.4-4,7.9-3.2l0,0c1.5,0.9,2.1,4.4,1.1,9\r\n\t\t\t\tc-0.1,0.3-0.1,0.6-0.2,0.9c-2-0.5-4-0.8-6-1c-1.2-1.7-2.4-3.3-3.8-4.8C471.6,212.4,472,212,472.3,211.7L472.3,211.7z\r\n\t\t\t\t M460.7,228.7c0.4,0.8,0.8,1.6,1.3,2.3c0.5,0.8,0.9,1.6,1.4,2.3c-1.4-0.2-2.8-0.4-4.2-0.7C459.6,231.4,460.1,230,460.7,228.7z\r\n\t\t\t\t M460.7,224.1c-0.6-1.3-1-2.6-1.4-3.9c1.3-0.3,2.7-0.5,4.1-0.7c-0.5,0.7-0.9,1.5-1.4,2.3C461.5,222.6,461.1,223.4,460.7,224.1\r\n\t\t\t\tL460.7,224.1z M461.7,226.4c0.6-1.2,1.2-2.4,1.9-3.6l0,0c0.7-1.2,1.4-2.3,2.2-3.5c1.3-0.1,2.7-0.2,4.1-0.2s2.8,0.1,4.1,0.2\r\n\t\t\t\tc0.8,1.1,1.5,2.3,2.2,3.5s1.3,2.4,1.9,3.6c-0.6,1.2-1.2,2.5-1.9,3.7l0,0c-0.7,1.2-1.4,2.4-2.2,3.5c-1.3,0.1-2.7,0.1-4.1,0.1\r\n\t\t\t\ts-2.8,0-4.1-0.1c-0.8-1.1-1.5-2.3-2.2-3.5C463,228.8,462.3,227.6,461.7,226.4L461.7,226.4z M477.9,231c0.5-0.8,0.9-1.6,1.3-2.4\r\n\t\t\t\tl0,0c0.6,1.3,1.1,2.6,1.5,4c-1.4,0.3-2.8,0.6-4.2,0.7C477,232.5,477.5,231.8,477.9,231L477.9,231z M479.2,224.1\r\n\t\t\t\tc-0.4-0.8-0.9-1.6-1.3-2.3l0,0c-0.4-0.8-0.9-1.5-1.4-2.3c1.4,0.2,2.8,0.4,4.1,0.7C480.2,221.6,479.7,222.9,479.2,224.1\r\n\t\t\t\tL479.2,224.1z M470,214.1c0.9,1,1.8,2.1,2.7,3.2c-1.8-0.1-3.6-0.1-5.3,0C468.2,216.1,469.1,215,470,214.1z M459.6,208.6\r\n\t\t\t\tc1.5-0.9,4.8,0.4,8.4,3.5c0.2,0.2,0.5,0.4,0.7,0.6c-1.4,1.5-2.7,3.1-3.8,4.8c-2,0.2-4,0.5-6,0.9c-0.1-0.5-0.2-0.9-0.3-1.4l0,0\r\n\t\t\t\tC457.6,212.6,458.1,209.4,459.6,208.6L459.6,208.6z M457.4,232.2c-0.4-0.1-0.7-0.2-1.1-0.3c-1.9-0.6-3.7-1.6-5.3-2.8\r\n\t\t\t\tc-0.9-0.6-1.5-1.6-1.7-2.7c0-1.6,2.4-3.7,6.5-5.2c0.5-0.2,1-0.3,1.6-0.5c0.6,1.9,1.3,3.9,2.2,5.7\r\n\t\t\t\tC458.7,228.3,458,230.2,457.4,232.2L457.4,232.2z M467.8,241c-1.5,1.4-3.2,2.4-5.1,3.2l0,0c-1,0.5-2.1,0.5-3.2,0.1\r\n\t\t\t\tc-1.4-0.8-2-4-1.2-8.2c0.1-0.5,0.2-1,0.3-1.5c2,0.4,4,0.7,6.1,0.9c1.2,1.7,2.5,3.3,3.9,4.8C468.4,240.4,468.1,240.7,467.8,241\r\n\t\t\t\tL467.8,241z M470,238.8c-0.9-1-1.8-2.1-2.7-3.2c0.9,0,1.7,0.1,2.6,0.1s1.8,0,2.7-0.1C471.8,236.7,470.9,237.7,470,238.8\r\n\t\t\t\tL470,238.8z M481.7,241.5c-0.1,1.1-0.6,2.1-1.5,2.8c-1.4,0.8-4.5-0.2-7.7-3.1c-0.4-0.3-0.8-0.7-1.1-1c1.4-1.5,2.6-3.1,3.8-4.8\r\n\t\t\t\tc2.1-0.2,4.1-0.5,6.1-0.9c0.1,0.4,0.2,0.7,0.2,1.1l0,0C481.9,237.5,482,239.5,481.7,241.5L481.7,241.5z M483.3,231.8L483.3,231.8\r\n\t\t\t\tc-0.2,0.1-0.5,0.2-0.8,0.2c-0.6-2-1.4-3.9-2.3-5.7c0.9-1.8,1.6-3.7,2.2-5.6c0.5,0.1,0.9,0.3,1.3,0.4c4.2,1.4,6.7,3.6,6.7,5.2\r\n\t\t\t\tC490.6,228.1,487.8,230.4,483.3,231.8L483.3,231.8z"
            })), React.createElement("path", {
              id: "Path_3961",
              fill: "#61DAFB",
              d: "M90.9,44.1c2.2,0,4,1.8,4,4s-1.8,4-4,4c-2.2,0-4-1.8-4-4l0,0C87,45.9,88.8,44.1,90.9,44.1"
            })), React.createElement("g", {
              transform: "matrix(1, 0, 0, 1, -68.85, -20.43)"
            }, React.createElement("path", {
              id: "Icon_awesome-android-2",
              fill: "#8E99BB",
              d: "M193,75.7v8.2c0,1.1-0.9,2-1.9,2l0,0c-1.1,0-2.1-0.9-2.1-2v-8.2\r\n\t\t\tc0.1-1.1,1-2,2.1-2C192.1,73.8,193,74.7,193,75.7z M193.8,86.9c0,1.2,0.9,2.1,2.1,2.1l0,0h1.4v4.3c0,1.1,0.9,2,2,2s2-0.9,2-2V89\r\n\t\t\th2.6v4.4c0,1.1,0.9,2,2,1.9c1.1,0,1.9-0.9,1.9-1.9v-4.3h1.4c1.2,0,2.1-0.9,2.1-2.1V74.1h-17.6v12.8H193.8z M211.4,73.4h-17.7\r\n\t\t\tc0.1-3,1.8-5.8,4.5-7.1l-1.4-2.5c-0.1-0.1,0-0.3,0.1-0.4c0.1-0.1,0.3,0,0.4,0.1l1.4,2.5c2.5-1.1,5.2-1.1,7.7,0l1.4-2.5\r\n\t\t\tc0.1-0.1,0.2-0.2,0.4-0.1s0.2,0.2,0.1,0.4l-1.4,2.6C209.6,67.7,211.3,70.4,211.4,73.4z M199.3,69.5c0-0.4-0.3-0.7-0.7-0.7\r\n\t\t\ts-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7C198.9,70.2,199.3,69.9,199.3,69.5z M207.3,69.5c0-0.4-0.3-0.7-0.7-0.7s-0.7,0.3-0.7,0.7\r\n\t\t\ts0.3,0.7,0.7,0.7l0,0C207,70.2,207.3,69.9,207.3,69.5z M214.1,73.8c-1.1,0-2,0.9-2,1.9l0,0v8.2c0,1.1,0.9,2,2,2l0,0\r\n\t\t\tc1.1,0,2.1-0.8,2.1-2v-8.2C216.1,74.6,215.2,73.8,214.1,73.8L214.1,73.8z"
            })), React.createElement("g", {
              transform: "matrix(1, 0, 0, 1, -68.85, -20.43)"
            }, React.createElement("path", {
              id: "Icon_awesome-app-store-ios-2",
              fill: "#8E99BB",
              d: "M138.9,134.9h-22.6c-1.7,0-3.1,1.4-3.1,3.1v22.6c0,1.7,1.4,3.1,3.1,3.1\r\n\t\t\th22.6c1.7,0,3.1-1.4,3.1-3.1V138C142,136.2,140.6,134.9,138.9,134.9z M121.4,157.5c-0.4,0.6-1.1,0.8-1.8,0.5\r\n\t\t\tc-0.6-0.4-0.8-1.1-0.5-1.7l0.9-1.6c0.9-0.3,2-0.1,2.5,0.7L121.4,157.5z M130.3,154.1h-11.7c-0.7,0-1.3-0.6-1.3-1.3\r\n\t\t\ts0.6-1.3,1.3-1.3h3.3l4.2-7.3l-1.3-2.3c-0.3-0.6-0.1-1.4,0.5-1.8c0.6-0.3,1.4-0.1,1.7,0.5l0.6,1l0.6-1c0.4-0.6,1.1-0.8,1.8-0.5\r\n\t\t\tc0.6,0.4,0.8,1.1,0.5,1.7l-5.5,9.6h4c1,0.1,1.7,0.9,1.7,1.9C130.5,153.6,130.4,153.8,130.3,154.1L130.3,154.1z M136.6,154.1h-1.9\r\n\t\t\tl1.3,2.2c0.3,0.6,0.1,1.4-0.5,1.8c-0.6,0.3-1.4,0.1-1.7-0.5c-2.1-3.7-3.7-6.4-4.8-8.2c-0.9-1.4-0.7-3.2,0.5-4.4\r\n\t\t\tc0.8,1.5,2.1,3.6,3.8,6.6h3.3c0.7,0,1.3,0.6,1.3,1.3C137.9,153.5,137.3,154.1,136.6,154.1L136.6,154.1z"
            })), React.createElement("g", {
              transform: "matrix(1, 0, 0, 1, -68.85, -20.43)"
            }, React.createElement("g", null, React.createElement("path", {
              fill: "#FF3E00",
              d: "M203.9,209c-3.7-5.4-11.1-6.9-16.5-3.6l-9.4,6c-2.6,1.6-4.3,4.2-4.9,7.2c-0.4,2.5-0.1,5.1,1.1,7.3\r\n\t\t\t\tc-0.8,1.2-1.4,2.6-1.6,4c-0.5,3,0.2,6.2,1.9,8.7c3.8,5.4,11.1,6.9,16.5,3.6l9.4-6c2.6-1.6,4.3-4.2,4.9-7.2\r\n\t\t\t\tc0.4-2.5,0.1-5.1-1.1-7.3c0.8-1.2,1.4-2.6,1.6-4C206.4,214.6,205.7,211.5,203.9,209"
            }), React.createElement("path", {
              fill: "#FFFFFF",
              d: "M186.5,239.2c-3,0.8-6.2-0.4-8-3c-1.1-1.5-1.5-3.4-1.2-5.2c0.1-0.3,0.1-0.6,0.2-0.9l0.2-0.5l0.5,0.3\r\n\t\t\t\tc1.1,0.8,2.4,1.4,3.7,1.8l0.3,0.1v0.3c0,0.5,0.1,1,0.4,1.4c0.5,0.8,1.5,1.2,2.4,0.9c0.2-0.1,0.4-0.1,0.6-0.2l9.4-6\r\n\t\t\t\tc0.5-0.3,0.8-0.8,0.9-1.3c0.1-0.5,0-1.1-0.3-1.6c-0.5-0.8-1.5-1.1-2.4-0.9c-0.2,0.1-0.4,0.1-0.6,0.2l-3.6,2.3\r\n\t\t\t\tc-0.6,0.4-1.2,0.6-1.9,0.8c-3,0.8-6.2-0.4-8-3c-1.1-1.5-1.5-3.4-1.2-5.2s1.4-3.4,2.9-4.3l9.4-6c0.6-0.4,1.2-0.6,1.9-0.9\r\n\t\t\t\tc3-0.8,6.2,0.4,8,3c1.1,1.5,1.5,3.4,1.2,5.2c-0.1,0.3-0.1,0.6-0.2,0.9l-0.2,0.5l-0.5-0.3c-1.1-0.8-2.4-1.4-3.7-1.8l-0.3-0.1v-0.3\r\n\t\t\t\tc0-0.5-0.1-1-0.4-1.4c-0.5-0.8-1.5-1.1-2.4-0.9c-0.2,0.1-0.4,0.1-0.6,0.2l-9.4,6c-0.5,0.3-0.8,0.8-0.9,1.3\r\n\t\t\t\tc-0.1,0.5,0,1.1,0.3,1.6c0.5,0.8,1.5,1.1,2.4,0.9c0.2-0.1,0.4-0.1,0.6-0.2l3.6-2.3c0.6-0.4,1.2-0.6,1.9-0.9c3-0.8,6.2,0.4,8,3\r\n\t\t\t\tc1.1,1.5,1.5,3.4,1.2,5.2s-1.4,3.4-2.9,4.3l-9.4,6C187.8,238.7,187.2,239,186.5,239.2"
            }))), React.createElement("g", {
              id: "nodejs-seeklogo.com",
              transform: "translate(251.281)"
            }, React.createElement("path", {
              id: "Path_3973",
              fill: "#539E43",
              d: "M131.9,71.5c-0.5,0-1-0.1-1.4-0.4l-4.6-2.6c-0.7-0.4-0.3-0.5-0.1-0.6\r\n\t\t\tc0.7-0.2,1.4-0.5,2-0.9c0.1-0.1,0.2,0,0.3,0l3.5,2.1c0.1,0.1,0.3,0.1,0.4,0l13.6-7.9c0.1-0.1,0.2-0.2,0.2-0.4V45.1\r\n\t\t\tc0-0.2-0.1-0.3-0.2-0.4L132,36.9c-0.1-0.1-0.3-0.1-0.4,0L118,44.7c-0.1,0.1-0.1,0.2-0.1,0.4v15.7c0,0.2,0.1,0.3,0.2,0.4l3.7,2.1\r\n\t\t\tc2,1,3.3-0.2,3.3-1.4V46.5c0-0.2,0.2-0.4,0.4-0.4h1.7c0.2,0,0.4,0.2,0.4,0.4V62c0,2.7-1.5,4.3-4,4.3c-1.1,0-2.2-0.3-3.1-0.9\r\n\t\t\tl-3.6-2c-0.9-0.5-1.4-1.5-1.4-2.5V45.1c0-1,0.5-2,1.4-2.5l13.6-7.9c0.9-0.5,2-0.5,2.9,0l13.6,7.9c0.9,0.5,1.4,1.5,1.4,2.5v15.7\r\n\t\t\tc0,1-0.5,2-1.4,2.5l-13.6,7.9C132.9,71.4,132.4,71.5,131.9,71.5L131.9,71.5z M136.1,60.7c-6,0-7.2-2.7-7.2-5\r\n\t\t\tc0-0.2,0.2-0.4,0.4-0.4h1.8c0.2,0,0.4,0.1,0.4,0.3l0,0c0.3,1.8,1.1,2.7,4.7,2.7c2.9,0,4.1-0.6,4.1-2.2c0-0.9-0.3-1.5-4.8-2\r\n\t\t\tc-3.7-0.4-6-1.2-6-4.2c0-2.8,2.3-4.4,6.2-4.4c4.4,0,6.5,1.5,6.8,4.8c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1h-1.8\r\n\t\t\tc-0.2,0-0.3-0.1-0.4-0.3c-0.4-1.9-1.5-2.5-4.3-2.5c-3.1,0-3.5,1.1-3.5,1.9c0,1,0.4,1.3,4.7,1.8c4.2,0.5,6.2,1.3,6.2,4.3\r\n\t\t\tC142.9,59,140.4,60.7,136.1,60.7L136.1,60.7z"
            })), React.createElement("g", {
              id: "Npm-logo",
              transform: "translate(347.408 72.672)"
            }, React.createElement("path", {
              id: "Path_3956",
              fill: "#CB3837",
              d: "M78.6,48.3h50.7v16.9h-25.4V68H92.6v-2.8h-14V48.3z M81.4,62.4H87V54h2.8v8.4h2.8V51.1\r\n\t\t\tH81.4V62.4z M95.4,51.1v14.1h5.6v-2.8h5.6V51.1H95.4z M101.1,53.9h2.8v5.6h-2.8V53.9z M109.5,51.1v11.3h5.6V54h2.8v8.4h2.8V54h2.8\r\n\t\t\tv8.4h2.8V51.1H109.5z"
            }), React.createElement("path", {
              id: "Path_3957",
              fill: "#FFFFFF",
              d: "M81.4,62.4H87V54h2.8v8.4h2.8V51.1H81.4V62.4z"
            }), React.createElement("path", {
              id: "Path_3958",
              fill: "#FFFFFF",
              d: "M95.4,51.1v14.1h5.6v-2.8h5.6V51.1H95.4z M103.9,59.6h-2.8V54h2.8V59.6z"
            }), React.createElement("path", {
              id: "Path_3959",
              fill: "#FFFFFF",
              d: "M109.5,51.1v11.3h5.6V54h2.8v8.4h2.8V54h2.8v8.4h2.8V51.1H109.5z"
            })), React.createElement("g", {
              id: "Vue.js_Logo_2",
              transform: "translate(171.559 202.832)"
            }, React.createElement("g", {
              id: "Group_7433",
              transform: "translate(0 0)"
            }, React.createElement("g", {
              transform: "matrix(1, 0, 0, 1, -240.41, -223.26)"
            }, React.createElement("path", {
              id: "Path_3962-2",
              fill: "#41B883",
              d: "M337.1,243.7l-5.2,9l-5.2-9h-17.3l22.6,39.1l22.6-39.1L337.1,243.7L337.1,243.7z"
            }))), React.createElement("g", {
              id: "Group_7434",
              transform: "translate(9.627 0)"
            }, React.createElement("path", {
              id: "Path_3963",
              fill: "#34495E",
              d: "M86.8,20.4l-5,8.6l-4.9-8.6h-8l12.9,22.4l13-22.4H86.8z"
            }))), React.createElement("g", null, React.createElement("path", {
              d: "M258.7,10.3c10.1,0,18.2,8.1,18.2,18.2s-8.1,18.2-18.2,18.2c-10.1,0-18.2-8.1-18.2-18.2S248.6,10.3,258.7,10.3z"
            }), React.createElement("path", {
              fill: "#FFFFFF",
              d: "M258,20.6c-5.3,0-9.4,3.3-9.4,7.5c0,3.9,3.8,6.4,9.7,6.3h0.2h0.6l-0.2,0.4l0,0c0,0.1,0.1,0.2,0.1,0.3l0,0\r\n\t\t\tv0.1v0.1v0.1v0.1v0.1v0.1v0.1v0.1V36v0.1v0.1v0.1v0.1v0.2v0.2V37v0.1v0.2v0.2v0.2V38v0.2l0.1,0.3v0.1v0.2V39l0.1,0.3l0.1,0.3\r\n\t\t\tl0.1,0.4l0.1,0.4l0.1,0.4l0.1,0.4l0.1,0.4v0.3l0.1,0.5v0.2l0.1,0.5l0.1,0.4l0.1,0.3l0.1,0.5v0.2c3.9-0.5,7.4-2.4,9.9-5.2l0.1-0.1\r\n\t\t\tl-0.4-1.4l-1-3.6l-0.6-2.2l-0.5-2l-0.3-1.2l-0.2-0.8l-0.1-0.5l-0.1-0.4v-0.2v-0.1l0,0l0,0c-0.6-1.8-1.6-3.4-3.1-4.5\r\n\t\t\tC262.7,21.3,260.5,20.6,258,20.6z M253.3,39.6c-0.5-0.1-0.9,0.1-1.1,0.6l0,0l-0.8,3c0.5,0.2,1,0.5,1.5,0.7h0.1l0.9-3.2l0,0\r\n\t\t\tC254,40.2,253.8,39.7,253.3,39.6z M258.3,37.4c-0.5-0.1-1,0.1-1.1,0.6l0,0l-1.2,4.5l0,0c-0.1,0.5,0.2,1,0.7,1.1\r\n\t\t\tc0.4,0.1,0.9-0.2,1-0.6l0,0l1.2-4.5l0,0v-0.1l0,0v-0.1v-0.2V38C258.7,37.6,258.5,37.5,258.3,37.4z M249.8,32.8l-0.1,0.1l0,0\r\n\t\t\tl-1.2,4.5l0,0c-0.1,0.5,0.2,1,0.7,1.1s0.9-0.2,1.1-0.6l0,0l1.1-4.1C250.8,33.5,250.3,33.2,249.8,32.8z M247,27.6\r\n\t\t\tc-0.5-0.1-1,0.1-1.1,0.6l0,0l-1.2,4.5l0,0c-0.1,0.5,0.2,1,0.7,1.1s0.9-0.2,1.1-0.6l0,0l1.2-4.5l0,0\r\n\t\t\tC247.7,28.2,247.4,27.8,247,27.6z M274,26.6c-0.5-0.1-0.9,0.1-1.1,0.6l0,0l-1.2,4.5l0,0c-0.1,0.5,0.2,1,0.6,1.1s1-0.2,1.1-0.6l0,0\r\n\t\t\tl1.2-4.5l0,0C274.8,27.2,274.5,26.8,274,26.6z M244.3,20.6c-1,1.8-1.7,3.9-1.9,6c0.1,0.1,0.3,0.2,0.4,0.3c0.5,0.1,0.9-0.1,1.1-0.6\r\n\t\t\tl0,0l1.2-4.5l0,0c0.1-0.5-0.2-0.9-0.6-1.1C244.5,20.7,244.4,20.6,244.3,20.6z M271,20.7c-0.5-0.1-0.9,0.1-1.1,0.6l0,0l-1.2,4.5\r\n\t\t\tl0,0c-0.1,0.5,0.2,1,0.7,1.1s0.9-0.2,1.1-0.6l0,0l1.2-4.5l0,0C271.7,21.3,271.5,20.8,271,20.7z"
            }), React.createElement("path", {
              d: "M259.1,23.6c0.6,0,1.1,0.5,1.1,1.1s-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1C258,24.1,258.5,23.6,259.1,23.6z"
            }), React.createElement("path", {
              fill: "#FFFFFF",
              d: "M249.6,16.4c-0.5-0.1-0.9,0.1-1.1,0.6l0,0l-1.2,4.5l0,0c-0.1,0.5,0.2,1,0.7,1.1s0.9-0.2,1.1-0.6l0,0\r\n\t\t\tl1.2-4.5l0,0C250.3,17,250,16.5,249.6,16.4z M265.1,17.3c-0.5-0.1-1,0.1-1.1,0.6l0,0l-0.8,3c0.5,0.3,1,0.6,1.5,0.9l0.1,0.1l1-3.5\r\n\t\t\tl0,0C265.8,17.9,265.6,17.4,265.1,17.3z M257.2,12.2c-0.6,0.1-1.1,0.1-1.7,0.2h-0.1l-1.1,4.2l0,0c-0.1,0.5,0.2,1,0.7,1.1\r\n\t\t\tc0.4,0.1,0.9-0.2,1-0.6l0,0l1.2-4.5l0,0C257.2,12.5,257.2,12.3,257.2,12.2z M268.3,15.3l-0.2,0.9l0,0c-0.1,0.5,0.2,1,0.7,1.1\r\n\t\t\tc0.4,0.1,0.9-0.2,1-0.6l0,0v-0.1C269.4,16.2,268.9,15.8,268.3,15.3L268.3,15.3z M261.3,12.4l-0.4,1.6l0,0c-0.1,0.5,0.2,1,0.7,1.1\r\n\t\t\tc0.4,0.1,0.9-0.2,1-0.6l0,0l0.4-1.7c-0.5-0.1-1.1-0.3-1.6-0.4L261.3,12.4z"
            }))), React.createElement("g", {
              id: "Group_7753",
              transform: "translate(0)"
            }, React.createElement("g", null, React.createElement("g", null, React.createElement("g", null, React.createElement("defs", null, React.createElement("path", {
              id: "SVGID_00000151517862170242220530000017527379010728634268_",
              d: "M260.3,326c10.1,0,20.3-0.3,30.5-1\r\n\t\t\t\t\t\tc64.9-4,124.9-20.5,170.9-46.7c4.6-2.7,9.1-5.4,13.5-8.2c53.2-34.8,75.9-78.9,69.5-121.6c1.4-0.3,2.8-0.7,4.1-1.2l-0.8-0.5\r\n\t\t\t\t\t\tl2.7-1.5l0.8,0.5c2-1.5,2.9-3.3,2.7-5.2c-0.2-2.1-1.8-4-4.6-5.4c-2.7-1.3-5.6-1.9-8.5-2c-0.7-2.3-1.6-4.6-2.5-6.9\r\n\t\t\t\t\t\tc1.3-0.4,2.6-0.9,3.7-1.5c0.2-0.1,0.4-0.3,0.6-0.4c2.4-1.6,3.7-3.6,3.5-5.7s-1.8-4-4.6-5.4c-3.3-1.5-6.9-2.2-10.5-1.9\r\n\t\t\t\t\t\tc-15.4-26.7-43-51.4-82.5-71.1c-11-5.5-22.4-10.4-33.9-14.6c-1.1-0.4-2.2-0.8-3.3-1.2C303.4-14,161.5-6.6,66.6,44.6\r\n\t\t\t\t\t\tc-5.5-2.3-13.2-1.9-18,0.9c-0.1,0.1-0.3,0.2-0.4,0.3c-5.2,3.3-4.9,8.3,0.8,11.3c5.5,2.9,14.1,2.8,19.4-0.2\r\n\t\t\t\t\t\tc0.1-0.1,0.3-0.2,0.4-0.3c4.5-2.8,4.9-7,1.2-10c92.8-50.2,231.5-57.5,337.8-20.2c1.1,0.4,2.2,0.8,3.4,1.2\r\n\t\t\t\t\t\tc11.9,4.3,23.5,9.2,34.7,14.8c38.8,19.4,65.9,43.7,81,69.8c-1.3,0.3-2.6,0.9-3.8,1.5c-0.2,0.1-0.4,0.2-0.6,0.4\r\n\t\t\t\t\t\tc-5,3.3-4.5,8.2,1.2,11.1c3.3,1.5,6.9,2.2,10.5,1.9c0.9,2.2,1.6,4.4,2.3,6.5c-2,0.3-3.9,1-5.6,1.9c-0.2,0.1-0.4,0.2-0.6,0.4\r\n\t\t\t\t\t\tc-5,3.3-4.5,8.2,1.1,11.1c2.7,1.3,5.7,2,8.7,2c6.2,41.9-16.1,85.3-68.3,119.4c-4.3,2.8-8.7,5.5-13.3,8.1\r\n\t\t\t\t\t\tc-45.2,25.8-104.2,42-168,45.9c-47,2.9-93.7-1-136.4-11c-1.2-0.3-2.4-0.6-3.7-0.9c-12.7-3.1-25.3-6.9-37.6-11.3\r\n\t\t\t\t\t\tc0.1,1.1,0.1,2.1,0.1,3.2c12,4.2,24.5,7.9,37.3,11c1.2,0.3,2.4,0.6,3.7,0.9c34.7,7.9,70.2,11.9,105.8,11.8L260.3,326L260.3,326\r\n\t\t\t\t\t\tz"
            })), React.createElement("clipPath", {
              id: "SVGID_00000054237937909657531720000017061539671774077833_"
            }, React.createElement("use", {
              href: "#SVGID_00000151517862170242220530000017527379010728634268_",
              overflow: "visible"
            })), React.createElement("g", {
              id: "Group_7752",
              clipPath: "url(#SVGID_00000054237937909657531720000017061539671774077833_)"
            }, React.createElement("linearGradient", {
              id: "Rectangle_2541_00000037651038744727980070000006117039631272836516_",
              gradientUnits: "userSpaceOnUse",
              x1: "968.7833",
              y1: "-21.5574",
              x2: "968.7833",
              y2: "-20.5575",
              gradientTransform: "matrix(511.523 0 0 -340.124 -495256.4062 -7006.1914)"
            }, React.createElement("stop", {
              offset: "0",
              stopColor: "#617096"
            }), React.createElement("stop", {
              offset: "1",
              stopColor: "#1F2940"
            })), React.createElement("rect", {
              id: "Rectangle_2541",
              x: "42.8",
              y: "-14.1",
              fill: "url(#Rectangle_2541_00000037651038744727980070000006117039631272836516_)",
              width: "511.5",
              height: "340.1"
            })))))), React.createElement("g", {
              id: "Group_7741",
              transform: "translate(78.091 92.05)"
            }, React.createElement("g", {
              id: "Group_794",
              transform: "translate(0 0)"
            }, React.createElement("g", {
              id: "Group_793"
            }, React.createElement("g", {
              id: "g6928-9-9",
              transform: "translate(85.6 11.217)"
            }, React.createElement("path", {
              id: "path6930-4-7",
              fill: "#B6BDC7",
              d: "M204.5,20.4c-2.8-0.1-5.5,0.7-7.6,2.4c-1.8,1.5-2.8,3.7-2.8,6c0,1.3,0.3,2.5,0.9,3.6\r\n\t\t\t\t\tc0.6,1,1.5,1.8,2.5,2.4c1.1,0.6,2.2,1.1,3.4,1.4c1.3,0.4,2.5,0.8,3.8,1.1c1.2,0.3,2.4,0.6,3.4,0.9c2.3,0.7,3.5,1.9,3.5,3.5\r\n\t\t\t\t\tc0,3.2-2.4,4.8-7.2,4.8c-3.4,0.1-6.8-0.8-9.8-2.4h-0.2v3.7c3.1,1.5,6.5,2.2,9.9,2.2c3.5,0,6.2-0.7,8.1-2.2\r\n\t\t\t\t\tc1.9-1.3,3-3.5,2.9-5.8c0.1-1.5-0.4-3-1.3-4.2c-0.8-1.1-1.9-2-3.2-2.5c-1.4-0.5-2.8-1-4.2-1.4c-1.5-0.4-2.9-0.8-4.2-1.1\r\n\t\t\t\t\tc-1.2-0.3-2.3-0.8-3.3-1.5c-0.8-0.7-1.3-1.7-1.3-2.7c0-1.5,0.8-2.8,2.1-3.5c1.7-0.9,3.7-1.4,5.6-1.3c2.6,0,5.1,0.6,7.5,1.6h0.3\r\n\t\t\t\t\tv-3.5C210.4,20.9,207.5,20.4,204.5,20.4z M183.1,20.8v19.5c0,2.4-0.5,4-1.4,4.8c-1.1,0.9-2.5,1.4-4,1.3c-1.9,0-3.7-0.7-5.1-1.9\r\n\t\t\t\t\th-0.2v3.7c1.8,1.1,4,1.7,6.1,1.7c2.2,0,4.2-0.8,5.8-2.2c1.6-1.5,2.4-4.1,2.4-7.7V20.8L183.1,20.8z M70.2,45.3\r\n\t\t\t\t\tc-0.9,3.1-1.4,6.4-1.4,9.6c0.2,2.2,1,2.4,2.3,0.6c1.2-2,2.1-4.1,2.8-6.3C72.5,48.1,71.3,46.8,70.2,45.3z M92.5,51.2\r\n\t\t\t\t\tc-1.6,0.8-3.4,1.3-5.2,1.6c-0.5,2.2-0.8,4.5-0.7,6.8c0.2,2.2,1,2.4,2.3,0.6C90.5,57.5,91.8,54.4,92.5,51.2L92.5,51.2z\r\n\t\t\t\t\t M78.1,51.6c-1.2,4.5-2.1,9-2.4,13.6c-0.1,3.2,0.8,3.5,2.3,0.6c2-4.2,3.5-8.6,4.7-13C81,52.6,79.5,52.2,78.1,51.6L78.1,51.6z"
            })), React.createElement("path", {
              id: "path900",
              fill: "#CB6245",
              d: "M171,31c-0.4,0-0.8,0-1.1,0c-8.4,0.3-15,7.4-14.7,15.8s7.4,15,15.8,14.7\r\n\t\t\t\tc8.4-0.3,15-7.4,14.7-15.8C185.4,37.7,179,31.3,171,31z M170.9,34.4c0.9,0,1.8,0.2,2.7,0.4c6.4,1.7,10.1,8.3,8.4,14.7\r\n\t\t\t\tc-1.7,6.4-8.3,10.1-14.7,8.4c-6.4-1.7-10.1-8.3-8.4-14.7c1.4-5,5.9-8.6,11.1-8.8C170.3,34.4,170.6,34.4,170.9,34.4L170.9,34.4z\r\n\t\t\t\t M176.8,20.4c-1,0-2,0.3-2.9,0.7c-1.2,0.6-2.4,1.4-3.3,2.4c-1.5,1.6-2.9,3.4-4,5.4c1.6-0.4,3.3-0.5,5-0.4\r\n\t\t\t\tc0.6-0.9,1.3-1.8,2.1-2.6c2.3-2.3,4.1-2.5,5.1,1.4c0.3,1.2,0.4,2.3,0.5,3.5c1.5,0.9,2.9,1.9,4.1,3.2c0-2.4-0.2-4.8-0.8-7.2\r\n\t\t\t\tc-0.3-1.3-0.9-2.6-1.6-3.8c-0.7-1.2-1.8-2-3.1-2.5C177.4,20.5,177.1,20.4,176.8,20.4L176.8,20.4z M171,30.7c-0.4,0-0.8,0-1.2,0\r\n\t\t\t\tc-8.6,0.3-15.3,7.6-15,16.2s7.6,15.3,16.2,15s15.3-7.6,15-16.2C185.7,37.5,179.2,31,171,30.7z M68.9,31.7v29.2h12\r\n\t\t\t\tc7.1,0,10.7-2.7,10.7-8.2c0-3.4-1.9-5.7-5.6-6.9v-0.1c2.6-1,4.2-3.6,4-6.4c0.1-2.1-0.8-4.2-2.5-5.5c-1.6-1.4-3.9-2-6.9-2\r\n\t\t\t\tL68.9,31.7z M100.1,31.7v29.2h20.2v-3.6h-16.4V48h14.9v-3.6h-14.9v-9.2h16.4v-3.6H100.1z M124.6,31.7l11.8,16.9v12.3h3.8V48.5\r\n\t\t\t\tl11.8-16.9h-4.6l-9,13.3h-0.2l-9-13.3H124.6z M194.2,31.7v29.2h3.8v-24h0.1l16.8,24h4.7V31.7h-3.8v24h-0.1l-16.8-24H194.2z\r\n\t\t\t\t M230,31.7v29.2h10.2c1.8,0,3.6-0.3,5.3-0.8c2.9-1,5.4-3,7-5.6c3.5-5.7,3-12.9-1.3-18.1c-1.3-1.5-2.9-2.7-4.7-3.4\r\n\t\t\t\tc-2-0.9-4.2-1.3-6.5-1.3L230,31.7z M170.9,34.1c0.9,0,1.9,0.2,2.8,0.4c6.5,1.8,10.3,8.5,8.6,15s-8.5,10.3-15,8.6\r\n\t\t\t\ts-10.3-8.5-8.6-15c1.4-5.1,6-8.8,11.3-9C170.3,34.1,170.6,34.1,170.9,34.1L170.9,34.1z M72.6,35.2h7.6c1.5-0.1,3.1,0.3,4.4,1.2\r\n\t\t\t\tc1.1,0.8,1.7,2,1.6,3.3c0,1.3-0.5,2.5-1.5,3.3c-1,0.8-2.7,1.3-5.2,1.3h-6.9V35.2z M233.8,35.2h6c3.1-0.1,6.1,1,8.3,3.1\r\n\t\t\t\tc4.2,4.5,4.2,11.5,0,16c-2.2,2.1-5.2,3.2-8.3,3.1h-6V35.2z M72.6,47.7h7.8c4.9,0,7.4,1.6,7.4,4.8c0.1,1.4-0.6,2.7-1.7,3.6\r\n\t\t\t\tc-1.1,0.8-3,1.3-5.7,1.3h-7.8L72.6,47.7z"
            })))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1617712216,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DocsIntro = DocsIntro;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          var _header = require("./header");
          const tpl = `
routing.redirect = async function redirect(uri): Promise<string> {
    return '/';
};`;
          const tpls = {
            modulejson: {
              language: 'json',
              tpl: `
{
 "name": "start-backend",
 "bundle": "start",
 "platforms": "backend",
 "ts": {
   "files": "*"
 }
}
`
            }
          };
          /*bundle*/
          function DocsIntro() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              components: {
                about: _header.AboutHeader
              },
              tpls: tpls,
              textId: "universal",
              specifier: _beyond_context.module.specifier
            }), React.createElement(_html.Document, {
              textId: "features",
              tpls: tpls,
              specifier: _beyond_context.module.specifier,
              nextLinks: ["/docs/quick-start", "/docs/tutorial/start"]
            }));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./svg-lines
      ***************************/

      ims.set('./svg-lines', {
        hash: 3883993119,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Name = Name;
          var React = require("react");
          function Name() {
            return React.createElement(React.Fragment, null);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "DocsIntro",
        "name": "DocsIntro"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'DocsIntro') && _export("DocsIntro", DocsIntro = require ? require('./index').DocsIntro : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBRUE7VUFHTSxTQUFVQSxXQUFXO1lBQ3ZCLE9BQ0lDO2NBQVFDLFNBQVMsRUFBQztZQUFlLEdBRTdCRCxvQkFBQ0UsZUFBUSxPQUFFLENBQ047VUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWkE7VUFFTSxTQUFVQSxRQUFRO1lBQ3BCLE9BR0lGO2NBQUtHLE9BQU8sRUFBQyxLQUFLO2NBQUNDLEVBQUUsRUFBQyxTQUFTO2NBQUNDLEtBQUssRUFBQyw0QkFBNEI7Y0FDN0RDLENBQUMsRUFBQyxLQUFLO2NBQUNDLENBQUMsRUFBQyxLQUFLO2NBQ2ZDLE9BQU8sRUFBQyxlQUFlO2NBQUNDLGdCQUFnQixFQUFDO1lBQW1CLEdBQzdEVDtjQUFHSSxFQUFFLEVBQUMsWUFBWTtjQUFDTSxTQUFTLEVBQUMsNEJBQTRCO2NBQUNDLE9BQU8sRUFBQztZQUFNLEdBQ3BFWDtjQUFHSSxFQUFFLEVBQUMsWUFBWTtjQUFDTSxTQUFTLEVBQUM7WUFBbUMsR0FDNURWO2NBQUdJLEVBQUUsRUFBQyxZQUFZO2NBQUNNLFNBQVMsRUFBQztZQUEyQixHQUNwRFYsK0JBQ0lBLCtCQUNJQSwrQkFDSUEsa0NBQ0lBO2NBQU1JLEVBQUUsRUFBQyxVQUFVO2NBQUNRLENBQUMsRUFBQztZQUt2QixFQUFFLENBQ0UsRUFDUFo7Y0FBVUksRUFBRSxFQUFDO1lBQTJELEdBQ3BFSjtjQUFLYSxJQUFJLEVBQUMsV0FBVztjQUFDQyxRQUFRLEVBQUM7WUFBUyxFQUFFLENBQ25DLEVBQ1hkO2NBQUdJLEVBQUUsRUFBQyxZQUFZO2NBQ2ZXLFFBQVEsRUFBQztZQUFpRSxHQUV6RWY7Y0FDSUksRUFBRSxFQUFDLG9FQUFvRTtjQUN2RVksYUFBYSxFQUFDLGdCQUFnQjtjQUFDQyxFQUFFLEVBQUMsVUFBVTtjQUFDQyxFQUFFLEVBQUMsV0FBVztjQUFDQyxFQUFFLEVBQUMsVUFBVTtjQUN6RUMsRUFBRSxFQUFDLFdBQVc7Y0FDZEMsaUJBQWlCLEVBQUM7WUFBcUQsR0FDdkVyQjtjQUFNc0IsTUFBTSxFQUFDLEdBQUc7Y0FBQ0MsU0FBUyxFQUFDO1lBQVMsRUFBRSxFQUN0Q3ZCO2NBQU1zQixNQUFNLEVBQUMsR0FBRztjQUFDQyxTQUFTLEVBQUM7WUFBUyxFQUFFLENBQ3pCLEVBRWpCdkI7Y0FBTUksRUFBRSxFQUFDLGdCQUFnQjtjQUFDRSxDQUFDLEVBQUMsT0FBTztjQUFDQyxDQUFDLEVBQUMsS0FBSztjQUNyQ2lCLElBQUksRUFBQywwRUFBMEU7Y0FDL0VDLEtBQUssRUFBQyxPQUFPO2NBQ2JDLE1BQU0sRUFBQztZQUFPLEVBQUUsQ0FDdEIsQ0FDSixDQUNKLENBQ0osQ0FDSixFQUNKMUI7Y0FBR0ksRUFBRSxFQUFDLFlBQVk7Y0FBQ00sU0FBUyxFQUFDO1lBQTBCLEdBQ25EViwrQkFDSUEsK0JBQ0lBLCtCQUNJQSxrQ0FDSUE7Y0FBTUksRUFBRSxFQUFDLDJEQUEyRDtjQUFDUSxDQUFDLEVBQUM7WUFDbEUsRUFBRSxDQUNKLEVBQ1BaO2NBQVVJLEVBQUUsRUFBQztZQUEyRCxHQUNwRUo7Y0FBS2EsSUFBSSxFQUFDLDREQUE0RDtjQUNqRUMsUUFBUSxFQUFDO1lBQVMsRUFBRSxDQUNsQixFQUNYZDtjQUFHSSxFQUFFLEVBQUMsWUFBWTtjQUNmVyxRQUFRLEVBQUM7WUFBaUUsR0FFekVmO2NBQ0lJLEVBQUUsRUFBQyxvRUFBb0U7Y0FDdkVZLGFBQWEsRUFBQyxnQkFBZ0I7Y0FBQ0MsRUFBRSxFQUFDLFdBQVc7Y0FBQ0MsRUFBRSxFQUFDLFlBQVk7Y0FBQ0MsRUFBRSxFQUFDLFdBQVc7Y0FDNUVDLEVBQUUsRUFBQyxZQUFZO2NBQ2ZDLGlCQUFpQixFQUFDO1lBQThDLEdBQ2hFckI7Y0FBTXNCLE1BQU0sRUFBQyxHQUFHO2NBQUNDLFNBQVMsRUFBQztZQUFTLEVBQUUsRUFDdEN2QjtjQUFNc0IsTUFBTSxFQUFDLEdBQUc7Y0FBQ0MsU0FBUyxFQUFDO1lBQVMsRUFBRSxDQUN6QixFQUVqQnZCO2NBQU1JLEVBQUUsRUFBQyxnQkFBZ0I7Y0FBQ0UsQ0FBQyxFQUFDLE9BQU87Y0FBQ0MsQ0FBQyxFQUFDLE9BQU87Y0FDdkNpQixJQUFJLEVBQUMsMEVBQTBFO2NBQy9FQyxLQUFLLEVBQUMsS0FBSztjQUFDQyxNQUFNLEVBQUM7WUFBSyxFQUFFLENBQ2hDLENBQ0osQ0FDSixDQUNKLENBQ0osRUFDSjFCO2NBQUdJLEVBQUUsRUFBQyxZQUFZO2NBQUNNLFNBQVMsRUFBQztZQUEyQixHQUNwRFYsK0JBQ0lBLCtCQUNJQSwrQkFDSUEsa0NBQ0lBO2NBQU1JLEVBQUUsRUFBQywyREFBMkQ7Y0FBQ1EsQ0FBQyxFQUFDO1lBR2xFLEVBQUUsQ0FDSixFQUNQWjtjQUFVSSxFQUFFLEVBQUM7WUFBMkQsR0FDcEVKO2NBQUthLElBQUksRUFBQyw0REFBNEQ7Y0FDakVDLFFBQVEsRUFBQztZQUFTLEVBQUUsQ0FDbEIsRUFDWGQ7Y0FBR0ksRUFBRSxFQUFDLFlBQVk7Y0FDZlcsUUFBUSxFQUFDO1lBQWlFLEdBRXpFZjtjQUNJSSxFQUFFLEVBQUMsb0VBQW9FO2NBQ3ZFWSxhQUFhLEVBQUMsZ0JBQWdCO2NBQUNDLEVBQUUsRUFBQyxVQUFVO2NBQUNDLEVBQUUsRUFBQyxXQUFXO2NBQUNDLEVBQUUsRUFBQyxVQUFVO2NBQ3pFQyxFQUFFLEVBQUMsV0FBVztjQUNkQyxpQkFBaUIsRUFBQztZQUFtRCxHQUNyRXJCO2NBQU1zQixNQUFNLEVBQUMsR0FBRztjQUFDQyxTQUFTLEVBQUM7WUFBUyxFQUFFLEVBQ3RDdkI7Y0FBTXNCLE1BQU0sRUFBQyxHQUFHO2NBQUNDLFNBQVMsRUFBQztZQUFTLEVBQUUsQ0FDekIsRUFFakJ2QjtjQUFNSSxFQUFFLEVBQUMsZ0JBQWdCO2NBQUNFLENBQUMsRUFBQyxPQUFPO2NBQUNDLENBQUMsRUFBQyxPQUFPO2NBQ3ZDaUIsSUFBSSxFQUFDLDBFQUEwRTtjQUMvRUMsS0FBSyxFQUFDLE1BQU07Y0FBQ0MsTUFBTSxFQUFDO1lBQU8sRUFBRSxDQUNuQyxDQUNKLENBQ0osQ0FDSixDQUNKLEVBQ0oxQjtjQUFHSSxFQUFFLEVBQUMsWUFBWTtjQUFDTSxTQUFTLEVBQUM7WUFBNEIsR0FDckRWLCtCQUNJQSwrQkFDSUEsK0JBQ0lBLGtDQUNJQTtjQUFNSSxFQUFFLEVBQUMsMkRBQTJEO2NBQUNRLENBQUMsRUFBQztZQUNwRSxFQUFFLENBQ0YsRUFDUFo7Y0FBVUksRUFBRSxFQUFDO1lBQTJELEdBQ3BFSjtjQUFLYSxJQUFJLEVBQUMsNERBQTREO2NBQ2pFQyxRQUFRLEVBQUM7WUFBUyxFQUFFLENBQ2xCLEVBQ1hkO2NBQUdJLEVBQUUsRUFBQyxZQUFZO2NBQ2ZXLFFBQVEsRUFBQztZQUFpRSxHQUV6RWY7Y0FDSUksRUFBRSxFQUFDLG9FQUFvRTtjQUN2RVksYUFBYSxFQUFDLGdCQUFnQjtjQUFDQyxFQUFFLEVBQUMsVUFBVTtjQUFDQyxFQUFFLEVBQUMsWUFBWTtjQUFDQyxFQUFFLEVBQUMsVUFBVTtjQUMxRUMsRUFBRSxFQUFDLFlBQVk7Y0FDZkMsaUJBQWlCLEVBQUM7WUFBNkMsR0FDL0RyQjtjQUFNc0IsTUFBTSxFQUFDLEdBQUc7Y0FBQ0MsU0FBUyxFQUFDO1lBQVMsRUFBRSxFQUN0Q3ZCO2NBQU1zQixNQUFNLEVBQUMsR0FBRztjQUFDQyxTQUFTLEVBQUM7WUFBUyxFQUFFLENBQ3pCLEVBRWpCdkI7Y0FBTUksRUFBRSxFQUFDLGdCQUFnQjtjQUFDRSxDQUFDLEVBQUMsT0FBTztjQUFDQyxDQUFDLEVBQUMsT0FBTztjQUN2Q2lCLElBQUksRUFBQywwRUFBMEU7Y0FDL0VDLEtBQUssRUFBQyxLQUFLO2NBQUNDLE1BQU0sRUFBQztZQUFLLEVBQUUsQ0FDaEMsQ0FDSixDQUNKLENBQ0osQ0FDSixFQUNKMUI7Y0FBR0ksRUFBRSxFQUFDLFlBQVk7Y0FBQ00sU0FBUyxFQUFDO1lBQTBCLEdBQ25EViwrQkFDSUEsK0JBQ0lBLCtCQUNJQSxrQ0FDSUE7Y0FBTUksRUFBRSxFQUFDLDJEQUEyRDtjQUFDUSxDQUFDLEVBQUM7WUFRcEUsRUFBRSxDQUNGLEVBQ1BaO2NBQVVJLEVBQUUsRUFBQztZQUEyRCxHQUNwRUo7Y0FBS2EsSUFBSSxFQUFDLDREQUE0RDtjQUNqRUMsUUFBUSxFQUFDO1lBQVMsRUFBRSxDQUNsQixFQUNYZDtjQUFHSSxFQUFFLEVBQUMsWUFBWTtjQUNmVyxRQUFRLEVBQUM7WUFBaUUsR0FFekVmO2NBQ0lJLEVBQUUsRUFBQyxvRUFBb0U7Y0FDdkVZLGFBQWEsRUFBQyxnQkFBZ0I7Y0FBQ0MsRUFBRSxFQUFDLFVBQVU7Y0FBQ0MsRUFBRSxFQUFDLFdBQVc7Y0FBQ0MsRUFBRSxFQUFDLFVBQVU7Y0FDekVDLEVBQUUsRUFBQyxXQUFXO2NBQ2RDLGlCQUFpQixFQUFDO1lBQW9ELEdBQ3RFckI7Y0FBTXNCLE1BQU0sRUFBQyxHQUFHO2NBQUNDLFNBQVMsRUFBQztZQUFTLEVBQUUsRUFDdEN2QjtjQUFNc0IsTUFBTSxFQUFDLEdBQUc7Y0FBQ0MsU0FBUyxFQUFDO1lBQVMsRUFBRSxDQUN6QixFQUVqQnZCO2NBQU1JLEVBQUUsRUFBQyxnQkFBZ0I7Y0FBQ0UsQ0FBQyxFQUFDLEtBQUs7Y0FBQ0MsQ0FBQyxFQUFDLE9BQU87Y0FDckNpQixJQUFJLEVBQUMsMEVBQTBFO2NBQy9FQyxLQUFLLEVBQUMsT0FBTztjQUFDQyxNQUFNLEVBQUM7WUFBTyxFQUFFLENBQ3BDLENBQ0osQ0FDSixDQUNKLENBQ0osRUFDSjFCO2NBQUdJLEVBQUUsRUFBQyxZQUFZO2NBQUNNLFNBQVMsRUFBQztZQUE0QixHQUNyRFYsK0JBQ0lBLCtCQUNJQSwrQkFDSUEsa0NBQ0lBO2NBQU1JLEVBQUUsRUFBQywyREFBMkQ7Y0FBQ1EsQ0FBQyxFQUFDO1lBQ2xFLEVBQUUsQ0FDSixFQUNQWjtjQUFVSSxFQUFFLEVBQUM7WUFBMkQsR0FDcEVKO2NBQUthLElBQUksRUFBQyw0REFBNEQ7Y0FDakVDLFFBQVEsRUFBQztZQUFTLEVBQUUsQ0FDbEIsRUFDWGQ7Y0FBR0ksRUFBRSxFQUFDLFlBQVk7Y0FDZlcsUUFBUSxFQUFDO1lBQWlFLEdBRXpFZjtjQUNJSSxFQUFFLEVBQUMsb0VBQW9FO2NBQ3ZFWSxhQUFhLEVBQUMsZ0JBQWdCO2NBQUNDLEVBQUUsRUFBQyxVQUFVO2NBQUNDLEVBQUUsRUFBQyxZQUFZO2NBQUNDLEVBQUUsRUFBQyxVQUFVO2NBQzFFQyxFQUFFLEVBQUMsWUFBWTtjQUNmQyxpQkFBaUIsRUFBQztZQUE2QyxHQUMvRHJCO2NBQU1zQixNQUFNLEVBQUMsR0FBRztjQUFDQyxTQUFTLEVBQUM7WUFBUyxFQUFFLEVBQ3RDdkI7Y0FBTXNCLE1BQU0sRUFBQyxHQUFHO2NBQUNDLFNBQVMsRUFBQztZQUFTLEVBQUUsQ0FDekIsRUFFakJ2QjtjQUFNSSxFQUFFLEVBQUMsZ0JBQWdCO2NBQUNFLENBQUMsRUFBQyxPQUFPO2NBQUNDLENBQUMsRUFBQyxPQUFPO2NBQ3ZDaUIsSUFBSSxFQUFDLDBFQUEwRTtjQUMvRUMsS0FBSyxFQUFDLEtBQUs7Y0FBQ0MsTUFBTSxFQUFDO1lBQUssRUFBRSxDQUNoQyxDQUNKLENBQ0osQ0FDSixDQUNKLEVBQ0oxQjtjQUFHSSxFQUFFLEVBQUMsWUFBWTtjQUFDTSxTQUFTLEVBQUM7WUFBNEIsR0FDckRWLCtCQUNJQSwrQkFDSUEsK0JBQ0lBLGtDQUNJQTtjQUFNSSxFQUFFLEVBQUMsMkRBQTJEO2NBQUNRLENBQUMsRUFBQztZQUNsRSxFQUFFLENBQ0osRUFDUFo7Y0FBVUksRUFBRSxFQUFDO1lBQTJELEdBQ3BFSjtjQUFLYSxJQUFJLEVBQUMsNERBQTREO2NBQ2pFQyxRQUFRLEVBQUM7WUFBUyxFQUFFLENBQ2xCLEVBQ1hkO2NBQUdJLEVBQUUsRUFBQyxZQUFZO2NBQ2ZXLFFBQVEsRUFBQztZQUFpRSxHQUV6RWY7Y0FDSUksRUFBRSxFQUFDLG9FQUFvRTtjQUN2RVksYUFBYSxFQUFDLGdCQUFnQjtjQUFDQyxFQUFFLEVBQUMsVUFBVTtjQUFDQyxFQUFFLEVBQUMsWUFBWTtjQUFDQyxFQUFFLEVBQUMsVUFBVTtjQUMxRUMsRUFBRSxFQUFDLFlBQVk7Y0FDZkMsaUJBQWlCLEVBQUM7WUFBNkMsR0FDL0RyQjtjQUFNc0IsTUFBTSxFQUFDLEdBQUc7Y0FBQ0MsU0FBUyxFQUFDO1lBQVMsRUFBRSxFQUN0Q3ZCO2NBQU1zQixNQUFNLEVBQUMsR0FBRztjQUFDQyxTQUFTLEVBQUM7WUFBUyxFQUFFLENBQ3pCLEVBRWpCdkI7Y0FBTUksRUFBRSxFQUFDLGdCQUFnQjtjQUFDRSxDQUFDLEVBQUMsT0FBTztjQUFDQyxDQUFDLEVBQUMsT0FBTztjQUN2Q2lCLElBQUksRUFBQywwRUFBMEU7Y0FDL0VDLEtBQUssRUFBQyxLQUFLO2NBQUNDLE1BQU0sRUFBQztZQUFLLEVBQUUsQ0FDaEMsQ0FDSixDQUNKLENBQ0osQ0FDSixFQUNKMUI7Y0FBR0ksRUFBRSxFQUFDLFlBQVk7Y0FBQ00sU0FBUyxFQUFDO1lBQTJCLEdBQ3BEViwrQkFDSUEsK0JBQ0lBLCtCQUNJQSxrQ0FDSUE7Y0FBTUksRUFBRSxFQUFDLDJEQUEyRDtjQUFDUSxDQUFDLEVBQUM7WUFHUCxFQUFFLENBQy9ELEVBQ1BaO2NBQVVJLEVBQUUsRUFBQztZQUEyRCxHQUNwRUo7Y0FBS2EsSUFBSSxFQUFDLDREQUE0RDtjQUNqRUMsUUFBUSxFQUFDO1lBQVMsRUFBRSxDQUNsQixFQUNYZDtjQUFHSSxFQUFFLEVBQUMsWUFBWTtjQUNmVyxRQUFRLEVBQUM7WUFBaUUsR0FFekVmO2NBQ0lJLEVBQUUsRUFBQyxvRUFBb0U7Y0FDdkVZLGFBQWEsRUFBQyxnQkFBZ0I7Y0FBQ0MsRUFBRSxFQUFDLFVBQVU7Y0FBQ0MsRUFBRSxFQUFDLFdBQVc7Y0FBQ0MsRUFBRSxFQUFDLFVBQVU7Y0FDekVDLEVBQUUsRUFBQyxXQUFXO2NBQ2RDLGlCQUFpQixFQUFDO1lBQThDLEdBQ2hFckI7Y0FBTXNCLE1BQU0sRUFBQyxHQUFHO2NBQUNDLFNBQVMsRUFBQztZQUFTLEVBQUUsRUFDdEN2QjtjQUFNc0IsTUFBTSxFQUFDLEdBQUc7Y0FBQ0MsU0FBUyxFQUFDO1lBQVMsRUFBRSxDQUN6QixFQUVqQnZCO2NBQU1JLEVBQUUsRUFBQyxnQkFBZ0I7Y0FBQ0UsQ0FBQyxFQUFDLE9BQU87Y0FBQ0MsQ0FBQyxFQUFDLE9BQU87Y0FDdkNpQixJQUFJLEVBQUMsMEVBQTBFO2NBQy9FQyxLQUFLLEVBQUMsS0FBSztjQUFDQyxNQUFNLEVBQUM7WUFBSyxFQUFFLENBQ2hDLENBQ0osQ0FDSixDQUNKLENBQ0osRUFDSjFCO2NBQUdJLEVBQUUsRUFBQyxZQUFZO2NBQUNNLFNBQVMsRUFBQztZQUE0QixHQUNyRFYsK0JBQ0lBLCtCQUNJQSwrQkFDSUEsa0NBQ0lBO2NBQU1JLEVBQUUsRUFBQywyREFBMkQ7Y0FBQ1EsQ0FBQyxFQUFDO1lBQ3RELEVBQUUsQ0FDaEIsRUFDUFo7Y0FBVUksRUFBRSxFQUFDO1lBQTJELEdBQ3BFSjtjQUFLYSxJQUFJLEVBQUMsNERBQTREO2NBQ2pFQyxRQUFRLEVBQUM7WUFBUyxFQUFFLENBQ2xCLEVBQ1hkO2NBQUdJLEVBQUUsRUFBQyxZQUFZO2NBQ2ZXLFFBQVEsRUFBQztZQUFpRSxHQUV6RWY7Y0FDSUksRUFBRSxFQUFDLG9FQUFvRTtjQUN2RVksYUFBYSxFQUFDLGdCQUFnQjtjQUFDQyxFQUFFLEVBQUMsVUFBVTtjQUFDQyxFQUFFLEVBQUMsWUFBWTtjQUFDQyxFQUFFLEVBQUMsVUFBVTtjQUMxRUMsRUFBRSxFQUFDLFlBQVk7Y0FDZkMsaUJBQWlCLEVBQUM7WUFBNkMsR0FDL0RyQjtjQUFNc0IsTUFBTSxFQUFDLEdBQUc7Y0FBQ0MsU0FBUyxFQUFDO1lBQVMsRUFBRSxFQUN0Q3ZCO2NBQU1zQixNQUFNLEVBQUMsR0FBRztjQUFDQyxTQUFTLEVBQUM7WUFBUyxFQUFFLENBQ3pCLEVBRWpCdkI7Y0FBTUksRUFBRSxFQUFDLGdCQUFnQjtjQUFDRSxDQUFDLEVBQUMsT0FBTztjQUFDQyxDQUFDLEVBQUMsT0FBTztjQUN2Q2lCLElBQUksRUFBQywwRUFBMEU7Y0FDL0VDLEtBQUssRUFBQyxLQUFLO2NBQUNDLE1BQU0sRUFBQztZQUFHLEVBQUUsQ0FDOUIsQ0FDSixDQUNKLENBQ0osQ0FDSixFQUNKMUI7Y0FBR0ksRUFBRSxFQUFDLFlBQVk7Y0FBQ00sU0FBUyxFQUFDO1lBQTRCLEdBQ3JEViwrQkFDSUEsK0JBQ0lBLCtCQUNJQSxrQ0FDSUE7Y0FBTUksRUFBRSxFQUFDLDJEQUEyRDtjQUFDUSxDQUFDLEVBQUM7WUFDcEUsRUFBRSxDQUNGLEVBQ1BaO2NBQVVJLEVBQUUsRUFBQztZQUEyRCxHQUNwRUo7Y0FBS2EsSUFBSSxFQUFDLDREQUE0RDtjQUNqRUMsUUFBUSxFQUFDO1lBQVMsRUFBRSxDQUNsQixFQUNYZDtjQUFHSSxFQUFFLEVBQUMsWUFBWTtjQUNmVyxRQUFRLEVBQUM7WUFBaUUsR0FFekVmO2NBQ0lJLEVBQUUsRUFBQyxvRUFBb0U7Y0FDdkVZLGFBQWEsRUFBQyxnQkFBZ0I7Y0FBQ0MsRUFBRSxFQUFDLFVBQVU7Y0FBQ0MsRUFBRSxFQUFDLFlBQVk7Y0FBQ0MsRUFBRSxFQUFDLFVBQVU7Y0FDMUVDLEVBQUUsRUFBQyxZQUFZO2NBQ2ZDLGlCQUFpQixFQUFDO1lBQThDLEdBQ2hFckI7Y0FBTXNCLE1BQU0sRUFBQyxHQUFHO2NBQUNDLFNBQVMsRUFBQztZQUFTLEVBQUUsRUFDdEN2QjtjQUFNc0IsTUFBTSxFQUFDLEdBQUc7Y0FBQ0MsU0FBUyxFQUFDO1lBQVMsRUFBRSxDQUN6QixFQUVqQnZCO2NBQU1JLEVBQUUsRUFBQyxnQkFBZ0I7Y0FBQ0UsQ0FBQyxFQUFDLEtBQUs7Y0FBQ0MsQ0FBQyxFQUFDLE9BQU87Y0FDckNpQixJQUFJLEVBQUMsMEVBQTBFO2NBQy9FQyxLQUFLLEVBQUMsS0FBSztjQUFDQyxNQUFNLEVBQUM7WUFBRyxFQUFFLENBQzlCLENBQ0osQ0FDSixDQUNKLENBQ0osRUFDSjFCO2NBQUdJLEVBQUUsRUFBQyxZQUFZO2NBQUNNLFNBQVMsRUFBQztZQUE0QixHQUNyRFYsK0JBQ0lBLCtCQUNJQSwrQkFDSUEsa0NBQ0lBO2NBQU1JLEVBQUUsRUFBQywyREFBMkQ7Y0FBQ1EsQ0FBQyxFQUFDO1lBR1ksRUFBRSxDQUNsRixFQUNQWjtjQUFVSSxFQUFFLEVBQUM7WUFBMkQsR0FDcEVKO2NBQUthLElBQUksRUFBQyw0REFBNEQ7Y0FDakVDLFFBQVEsRUFBQztZQUFTLEVBQUUsQ0FDbEIsRUFDWGQ7Y0FBR0ksRUFBRSxFQUFDLFlBQVk7Y0FDZlcsUUFBUSxFQUFDO1lBQWlFLEdBRXpFZjtjQUNJSSxFQUFFLEVBQUMsb0VBQW9FO2NBQ3ZFWSxhQUFhLEVBQUMsZ0JBQWdCO2NBQUNDLEVBQUUsRUFBQyxTQUFTO2NBQUNDLEVBQUUsRUFBQyxXQUFXO2NBQUNDLEVBQUUsRUFBQyxTQUFTO2NBQ3ZFQyxFQUFFLEVBQUMsV0FBVztjQUNkQyxpQkFBaUIsRUFBQztZQUFvRCxHQUN0RXJCO2NBQU1zQixNQUFNLEVBQUMsR0FBRztjQUFDQyxTQUFTLEVBQUM7WUFBUyxFQUFFLEVBQ3RDdkI7Y0FBTXNCLE1BQU0sRUFBQyxHQUFHO2NBQUNDLFNBQVMsRUFBQztZQUFTLEVBQUUsQ0FDekIsRUFFakJ2QjtjQUFNSSxFQUFFLEVBQUMsZ0JBQWdCO2NBQUNFLENBQUMsRUFBQyxPQUFPO2NBQUNDLENBQUMsRUFBQyxPQUFPO2NBQ3ZDaUIsSUFBSSxFQUFDLDBFQUEwRTtjQUMvRUMsS0FBSyxFQUFDLE9BQU87Y0FBQ0MsTUFBTSxFQUFDO1lBQU8sRUFBRSxDQUNwQyxDQUNKLENBQ0osQ0FDSixDQUNKLENBQ0osQ0FDSixFQUNKMUIsK0JBQ0lBO2NBQUdJLEVBQUUsRUFBQyxPQUFPO2NBQUNNLFNBQVMsRUFBQztZQUEwQixHQUM5Q1Y7Y0FBR1UsU0FBUyxFQUFDO1lBQXNDLEdBQy9DVjtjQUFNSSxFQUFFLEVBQUMsYUFBYTtjQUFDb0IsSUFBSSxFQUFDLFNBQVM7Y0FBQ1osQ0FBQyxFQUFDO1lBd0JWLEVBQUUsQ0FDaEMsRUFDSlo7Y0FBTUksRUFBRSxFQUFDLFdBQVc7Y0FBQ29CLElBQUksRUFBQyxTQUFTO2NBQzdCWixDQUFDLEVBQUM7WUFBd0YsRUFDOUYsQ0FDRixFQUNKWjtjQUFHVSxTQUFTLEVBQUM7WUFBb0MsR0FDN0NWO2NBQU1JLEVBQUUsRUFBQyx3QkFBd0I7Y0FBQ29CLElBQUksRUFBQyxTQUFTO2NBQUNaLENBQUMsRUFBQztZQU9HLEVBQUUsQ0FDeEQsRUFDSlo7Y0FBR1UsU0FBUyxFQUFDO1lBQW9DLEdBQzdDVjtjQUFNSSxFQUFFLEVBQUMsOEJBQThCO2NBQUNvQixJQUFJLEVBQUMsU0FBUztjQUFDWixDQUFDLEVBQUM7WUFNMEIsRUFBRSxDQUNyRixFQUNKWjtjQUFHVSxTQUFTLEVBQUM7WUFBb0MsR0FDN0NWLCtCQUNJQTtjQUFNd0IsSUFBSSxFQUFDLFNBQVM7Y0FBQ1osQ0FBQyxFQUFDO1lBRXNDLEVBQUUsRUFDL0RaO2NBQU13QixJQUFJLEVBQUMsU0FBUztjQUFDWixDQUFDLEVBQUM7WUFPd0MsRUFBRSxDQUNqRSxDQUNKLEVBQ0paO2NBQUdJLEVBQUUsRUFBQyxxQkFBcUI7Y0FBQ00sU0FBUyxFQUFDO1lBQW9CLEdBQ3REVjtjQUFNSSxFQUFFLEVBQUMsV0FBVztjQUFDb0IsSUFBSSxFQUFDLFNBQVM7Y0FBQ1osQ0FBQyxFQUFDO1lBU1gsRUFBRSxDQUM3QixFQUNKWjtjQUFHSSxFQUFFLEVBQUMsVUFBVTtjQUFDTSxTQUFTLEVBQUM7WUFBMkIsR0FDbERWO2NBQU1JLEVBQUUsRUFBQyxXQUFXO2NBQUNvQixJQUFJLEVBQUMsU0FBUztjQUFDWixDQUFDLEVBQUM7WUFFbEMsRUFBRSxFQUNOWjtjQUFNSSxFQUFFLEVBQUMsV0FBVztjQUFDb0IsSUFBSSxFQUFDLFNBQVM7Y0FBQ1osQ0FBQyxFQUFDO1lBQThDLEVBQUUsRUFDdEZaO2NBQU1JLEVBQUUsRUFBQyxXQUFXO2NBQUNvQixJQUFJLEVBQUMsU0FBUztjQUM3QlosQ0FBQyxFQUFDO1lBQXVFLEVBQUUsRUFDakZaO2NBQU1JLEVBQUUsRUFBQyxXQUFXO2NBQUNvQixJQUFJLEVBQUMsU0FBUztjQUM3QlosQ0FBQyxFQUFDO1lBQWdFLEVBQUUsQ0FDMUUsRUFDSlo7Y0FBR0ksRUFBRSxFQUFDLGVBQWU7Y0FBQ00sU0FBUyxFQUFDO1lBQTRCLEdBQ3hEVjtjQUFHSSxFQUFFLEVBQUMsWUFBWTtjQUFDTSxTQUFTLEVBQUM7WUFBZ0IsR0FDekNWO2NBQUdVLFNBQVMsRUFBQztZQUFzQyxHQUMvQ1Y7Y0FBTUksRUFBRSxFQUFDLGFBQWE7Y0FBQ29CLElBQUksRUFBQyxTQUFTO2NBQy9CWixDQUFDLEVBQUM7WUFBK0UsRUFBRSxDQUN6RixDQUNKLEVBQ0paO2NBQUdJLEVBQUUsRUFBQyxZQUFZO2NBQUNNLFNBQVMsRUFBQztZQUFvQixHQUM3Q1Y7Y0FBTUksRUFBRSxFQUFDLFdBQVc7Y0FBQ29CLElBQUksRUFBQyxTQUFTO2NBQUNaLENBQUMsRUFBQztZQUF1RCxFQUFFLENBQy9GLENBQ0osRUFDSlosK0JBQ0lBO2NBQ0lZLENBQUMsRUFBQztZQUE2RyxFQUFFLEVBQ3JIWjtjQUFNd0IsSUFBSSxFQUFDLFNBQVM7Y0FBQ1osQ0FBQyxFQUFDO1lBWW9ELEVBQUUsRUFDN0VaO2NBQ0lZLENBQUMsRUFBQztZQUFxRyxFQUFFLEVBQzdHWjtjQUFNd0IsSUFBSSxFQUFDLFNBQVM7Y0FBQ1osQ0FBQyxFQUFDO1lBS2dDLEVBQUUsQ0FDekQsQ0FDSixFQUNKWjtjQUFHSSxFQUFFLEVBQUMsWUFBWTtjQUFDTSxTQUFTLEVBQUM7WUFBYyxHQUN2Q1YsK0JBQ0lBLCtCQUNJQSwrQkFDSUEsa0NBQ0lBO2NBQU1JLEVBQUUsRUFBQywyREFBMkQ7Y0FBQ1EsQ0FBQyxFQUFDO1lBWS9GLEVBQUUsQ0FDeUIsRUFDUFo7Y0FBVUksRUFBRSxFQUFDO1lBQTJELEdBQ3BFSjtjQUFLYSxJQUFJLEVBQUMsNERBQTREO2NBQ2pFQyxRQUFRLEVBQUM7WUFBUyxFQUFFLENBQ2xCLEVBQ1hkO2NBQUdJLEVBQUUsRUFBQyxZQUFZO2NBQ2ZXLFFBQVEsRUFBQztZQUFpRSxHQUV6RWY7Y0FBZ0JJLEVBQUUsRUFBQyxvRUFBb0U7Y0FDdkVZLGFBQWEsRUFBQyxnQkFBZ0I7Y0FBQ0MsRUFBRSxFQUFDLFVBQVU7Y0FBQ0MsRUFBRSxFQUFDLFVBQVU7Y0FBQ0MsRUFBRSxFQUFDLFVBQVU7Y0FDeEVDLEVBQUUsRUFBQyxVQUFVO2NBQ2JDLGlCQUFpQixFQUFDO1lBQXNELEdBQ3BGckI7Y0FBTXNCLE1BQU0sRUFBQyxHQUFHO2NBQUNDLFNBQVMsRUFBQztZQUFTLEVBQUUsRUFDdEN2QjtjQUFNc0IsTUFBTSxFQUFDLEdBQUc7Y0FBQ0MsU0FBUyxFQUFDO1lBQVMsRUFBRSxDQUN6QixFQUVqQnZCO2NBQU1JLEVBQUUsRUFBQyxnQkFBZ0I7Y0FBQ0UsQ0FBQyxFQUFDLE1BQU07Y0FBQ0MsQ0FBQyxFQUFDLE9BQU87Y0FDdENpQixJQUFJLEVBQUMsMEVBQTBFO2NBQy9FQyxLQUFLLEVBQUMsT0FBTztjQUFDQyxNQUFNLEVBQUM7WUFBTyxFQUFFLENBQ3BDLENBQ0osQ0FDSixDQUNKLENBQ0osRUFDSjFCO2NBQUdJLEVBQUUsRUFBQyxZQUFZO2NBQUNNLFNBQVMsRUFBQztZQUF5QixHQUNsRFY7Y0FBR0ksRUFBRSxFQUFDLFdBQVc7Y0FBQ00sU0FBUyxFQUFDO1lBQWdCLEdBQ3hDVjtjQUFHSSxFQUFFLEVBQUM7WUFBVyxHQUNiSjtjQUFHSSxFQUFFLEVBQUMsV0FBVztjQUFDTSxTQUFTLEVBQUM7WUFBd0IsR0FDaERWO2NBQU1JLEVBQUUsRUFBQyxjQUFjO2NBQUNvQixJQUFJLEVBQUMsU0FBUztjQUFDWixDQUFDLEVBQUM7WUFTeUQsRUFBRSxDQUNwRyxFQUNKWjtjQUFNSSxFQUFFLEVBQUMsU0FBUztjQUFDb0IsSUFBSSxFQUFDLFNBQVM7Y0FBQ1osQ0FBQyxFQUFDO1lBZWhCLEVBQUUsQ0FDdEIsQ0FDSixDQUNKLENBQ0Y7VUFJZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1a0JBO1VBQ0E7VUFDQTtVQUNBO1VBRUEsTUFBTWUsR0FBRyxHQUFHOzs7R0FHVDtVQUNILE1BQU1DLElBQUksR0FBRztZQUNUQyxVQUFVLEVBQUU7Y0FDUkMsUUFBUSxFQUFFLE1BQU07Y0FDaEJILEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7V0FXWjtVQUVNO1VBQVUsU0FBVUksU0FBUztZQUNoQyxPQUNJL0IsMENBQ0lBLG9CQUFDZ0MsY0FBUTtjQUNMQyxVQUFVLEVBQUU7Z0JBQ1JDLEtBQUssRUFBRW5DO2VBQ1Y7Y0FDRDZCLElBQUksRUFBRUEsSUFBSTtjQUFFTyxNQUFNLEVBQUMsV0FBVztjQUFDQyxTQUFTLEVBQUVDLHNCQUFNLENBQUNEO1lBQVMsRUFBRyxFQUNqRXBDLG9CQUFDZ0MsY0FBUTtjQUFDRyxNQUFNLEVBQUMsVUFBVTtjQUFDUCxJQUFJLEVBQUVBLElBQUk7Y0FBRVEsU0FBUyxFQUFFQyxzQkFBTSxDQUFDRCxTQUFTO2NBQ3pERSxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxzQkFBc0I7WUFBQyxFQUFHLENBQ3RFO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBO1VBRU0sU0FBVUMsSUFBSTtZQUNoQixPQUNJdkMseUNBQ0c7VUFFWCIsIm5hbWVzIjpbIkFib3V0SGVhZGVyIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJTVkdMb2dvcyIsInZlcnNpb24iLCJpZCIsInhtbG5zIiwieCIsInkiLCJ2aWV3Qm94IiwiZW5hYmxlQmFja2dyb3VuZCIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJkIiwiaHJlZiIsIm92ZXJmbG93IiwiY2xpcFBhdGgiLCJncmFkaWVudFVuaXRzIiwieDEiLCJ5MSIsIngyIiwieTIiLCJncmFkaWVudFRyYW5zZm9ybSIsIm9mZnNldCIsInN0b3BDb2xvciIsImZpbGwiLCJ3aWR0aCIsImhlaWdodCIsInRwbCIsInRwbHMiLCJtb2R1bGVqc29uIiwibGFuZ3VhZ2UiLCJEb2NzSW50cm8iLCJEb2N1bWVudCIsImNvbXBvbmVudHMiLCJhYm91dCIsInRleHRJZCIsInNwZWNpZmllciIsIm1vZHVsZSIsIm5leHRMaW5rcyIsIk5hbWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL3N0YXJ0aW5nL2ludHJvL2NvZGUvdHMvaGVhZGVyL2luZGV4LnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL3N0YXJ0aW5nL2ludHJvL2NvZGUvdHMvaGVhZGVyL2xvZ29zLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL3N0YXJ0aW5nL2ludHJvL2NvZGUvdHMvaW5kZXgudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3Mvc3RhcnRpbmcvaW50cm8vY29kZS90cy9zdmctbGluZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19
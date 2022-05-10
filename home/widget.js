define(["exports", "@beyond-js/kernel/react-widget/ts", "@beyond/docs/layout/styles/code", "@beyond-js/kernel/core/ts", "react", "@beyond/ui/link/code", "@beyond/ui/icons/code", "@beyond/ui/image/code", "@beyond/docs/manager/code", "@beyond/docs/code/code", "@beyond/ui/swiper/code"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.Controller = void 0;
  const dependencies = new Map();
  dependencies.set('@beyond-js/kernel/react-widget/ts', dependency_0);
  dependencies.set('@beyond/docs/layout/styles/code', dependency_1);
  dependencies.set('@beyond-js/kernel/core/ts', dependency_2);
  dependencies.set('react', dependency_3);
  dependencies.set('@beyond/ui/link/code', dependency_4);
  dependencies.set('@beyond/ui/icons/code', dependency_5);
  dependencies.set('@beyond/ui/image/code', dependency_6);
  dependencies.set('@beyond/docs/manager/code', dependency_7);
  dependencies.set('@beyond/docs/code/code', dependency_8);
  dependencies.set('@beyond/ui/swiper/code', dependency_9);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond/docs/home/widget', false, {}, dependencies);

  const __pkg = bundle.package();

  bundle.styles.mode = 'external';
  const modules = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  modules.set('./controller', {
    hash: 3629148824,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _ts = require("@beyond-js/kernel/react-widget/ts");

      var _page = require("./views/page");

      var _store = require("./store");
      /*bundle*/


      class Controller extends _ts.PageReactWidgetController {
        createStore() {
          return new _store.Store(this.body);
        }

        get Widget() {
          return _page.Page;
        }

      }

      exports.Controller = Controller;
    }
  });
  /***********************
  INTERNAL MODULE: ./icons
  ***********************/

  modules.set('./icons', {
    hash: 280776302,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SVGS = void 0;
      const SVGS = {
        server: {
          viewBox: '0 0 59 59',
          icon: `<g>
                    <g>
                        <path style="fill:#556080;" d="M54.392,19H3.608C1.616,19,0,17.384,0,15.392V3.608C0,1.616,1.616,0,3.608,0h50.783
\t\t\tC56.384,0,58,1.616,58,3.608v11.783C58,17.384,56.384,19,54.392,19z"/>
                        <path style="fill:#38454F;" d="M54.392,38H3.608C1.616,38,0,36.384,0,34.392V22.608C0,20.616,1.616,19,3.608,19h50.783
\t\t\tC56.384,19,58,20.616,58,22.608v11.783C58,36.384,56.384,38,54.392,38z"/>
                        <path style="fill:#556080;" d="M54.392,57H3.608C1.616,57,0,55.384,0,53.392V41.608C0,39.616,1.616,38,3.608,38h50.783
\t\t\tC56.384,38,58,39.616,58,41.608v11.783C58,55.384,56.384,57,54.392,57z"/>
                        <circle style="fill:#8697CB;" cx="9.5" cy="9.5" r="3.5"/>
                        <circle style="fill:#8697CB;" cx="49" cy="8" r="1"/>
                        <circle style="fill:#8697CB;" cx="45" cy="8" r="1"/>
                        <circle style="fill:#8697CB;" cx="51" cy="11" r="1"/>
                        <circle style="fill:#8697CB;" cx="47" cy="11" r="1"/>
                        <circle style="fill:#8697CB;" cx="41" cy="8" r="1"/>
                        <circle style="fill:#8697CB;" cx="43" cy="11" r="1"/>
                        <circle style="fill:#8697CB;" cx="37" cy="8" r="1"/>
                        <circle style="fill:#8697CB;" cx="39" cy="11" r="1"/>
                        <circle style="fill:#8697CB;" cx="33" cy="8" r="1"/>
                        <circle style="fill:#8697CB;" cx="35" cy="11" r="1"/>
                        <circle style="fill:#8697CB;" cx="9.5" cy="28.5" r="3.5"/>
                        <circle style="fill:#8697CB;" cx="49" cy="27" r="1"/>
                        <circle style="fill:#8697CB;" cx="45" cy="27" r="1"/>
                        <circle style="fill:#8697CB;" cx="51" cy="30" r="1"/>
                        <circle style="fill:#8697CB;" cx="47" cy="30" r="1"/>
                        <circle style="fill:#8697CB;" cx="41" cy="27" r="1"/>
                        <circle style="fill:#8697CB;" cx="43" cy="30" r="1"/>
                        <circle style="fill:#8697CB;" cx="37" cy="27" r="1"/>
                        <circle style="fill:#8697CB;" cx="39" cy="30" r="1"/>
                        <circle style="fill:#8697CB;" cx="33" cy="27" r="1"/>
                        <circle style="fill:#8697CB;" cx="35" cy="30" r="1"/>
                        <circle style="fill:#8697CB;" cx="9.5" cy="47.5" r="3.5"/>
                        <circle style="fill:#8697CB;" cx="49" cy="46" r="1"/>
                        <circle style="fill:#8697CB;" cx="45" cy="46" r="1"/>
                        <circle style="fill:#8697CB;" cx="51" cy="49" r="1"/>
                        <circle style="fill:#8697CB;" cx="47" cy="49" r="1"/>
                        <circle style="fill:#8697CB;" cx="41" cy="46" r="1"/>
                        <circle style="fill:#8697CB;" cx="43" cy="49" r="1"/>
                        <circle style="fill:#8697CB;" cx="37" cy="46" r="1"/>
                        <circle style="fill:#8697CB;" cx="39" cy="49" r="1"/>
                        <circle style="fill:#8697CB;" cx="33" cy="46" r="1"/>
                        <circle style="fill:#8697CB;" cx="35" cy="49" r="1"/>
                    </g>
                    <g>
                        <rect x="37" y="37" style="fill:#21AE5E;" width="22" height="22"/>
                        <rect x="47" y="38.586" style="fill:#FFFFFF;" width="2" height="16"/>
                        <polygon style="fill:#FFFFFF;"
                                 points="48,56 41,49.293 42.476,47.879 48,53.172 53.524,47.879 55,49.293 \t\t"/>
                    </g>
                </g>
        `
        },
        mobile: {
          viewBox: '0 0 512 512',
          icon: `<g>
<g>
\t<path style="fill:#2D2D2D;" d="M384,512H128c-8.448,0-15.36-6.912-15.36-15.36V15.36C112.64,6.912,119.552,0,128,0h256
\t\tc8.448,0,15.36,6.912,15.36,15.36v481.28C399.36,505.088,392.448,512,384,512z"/>
    <rect x="128" y="40.96" style="fill:#2D2D2D;" width="256" height="409.6"/>
</g>
    <g>
\t<path style="fill:#999999;" d="M286.72,25.76h-61.44c-2.816,0-5.12-2.304-5.12-5.12l0,0c0-2.816,2.304-5.12,5.12-5.12h61.44
\t\tc2.816,0,5.12,2.304,5.12,5.12l0,0C291.84,23.456,289.536,25.76,286.72,25.76z"/>
        <path style="fill:#999999;" d="M286.72,481.28h-61.44c-2.816,0-5.12-2.304-5.12-5.12l0,0c0-2.816,2.304-5.12,5.12-5.12h61.44
\t\tc2.816,0,5.12,2.304,5.12,5.12l0,0C291.84,478.976,289.536,481.28,286.72,481.28z"/>
</g>
    <polygon style="fill:#FFFFFF;" points="262,425.752 250,425.752 250,323.032 177,323.032 177,238.368 337,238.368 337,121.208 
\t217.088,121.208 217.088,109.208 349,109.208 349,250.368 189,250.368 189,311.032 262,311.032 "/>
    <path style="fill:#DB2B42;" d="M217.12,202.912l-5.808-7.672c-4.272-5.584-41.664-55.504-41.664-80.368
\tc0-29.832,18.624-49.112,47.472-49.112s47.472,19.28,47.472,49.112c0,24.832-37.392,74.744-41.624,80.368L217.12,202.912z"/>
    <circle style="fill:#FFFFFF;" cx="217.12" cy="115.208" r="15.376"/>
</g>`
        },
        desktop: {
          viewBox: '0 0 448 448',
          icon: `<g><rect x="216" y="156" style="fill:#FFC600;" width="16" height="8"/>
    <path style="fill:#CC9966;" d="M256,372v-16h-24v16H256z M280.8,370.4L292,396H156l10.4-24H216v-16h-48v-40h112v51.2
\tC280,368,280,369.6,280.8,370.4z"/>
    <rect x="211" y="151" style="fill:#FFC600;" width="26" height="18"/>
    <polygon style="fill:#2FB4C2;" points="347,343 347,361 379,361 379,367 347,367 347,401 413,401 413,343 "/>
    <g>
\t<path style="fill:#FF9900;" d="M244.8,95h-41.6c-9.2,0-16.2,7-16.2,16.2V145h74v-33.8C261,102,254,95,244.8,95z"/>
        <rect x="35" y="375" style="fill:#FF9900;" width="90" height="26"/>
</g>
    <path style="fill:#FFF8EF;" d="M35,39v178h29.5l4-36.3l-2.6-1.7c-8.2-5.2-12.9-13.6-12.9-23c0-14.9,12.1-27,27-27
\tc6.5,0,13.4,2.5,18.3,6.8l2.3,2l80.8-32.3l0.8-2c3.4-8.9,11.4-14.4,20.9-14.4h41.6c12.4,0,22.2,9.8,22.2,22.2V148c0,1.2-1.8,3-3,3
\th-21v21c0,1.2-1.8,3-3,3h-32c-1.2,0-3-1.8-3-3v-21h-21c-1.2,0-3-1.8-3-3v-35.4l-76.5,30.8l1.1,4.2c0.7,3,1.5,5.8,1.5,8.4
\tc0,14.9-12.1,27-27,27h-5.2l-4.5,34H413V39H35z"/>
    <g>
\t<path style="fill:#CC9966;" d="M11,247v45c0,7.2,5.8,13,13,13h29.2l7.7-58H11z"/>
        <path style="fill:#CC9966;" d="M16,292c0,4.8,4,8,8,8h24.8l6.4-48H16V292z"/>
</g>
    <rect x="11" y="407" style="fill:#996632;" width="426" height="26"/>
    <path style="fill:#E4C6A1;" d="M424,15H24.8C17.4,15,11,21.1,11,28v213h50.3l1.8-18H32c-2,0-3-1.8-3-3V36c0-2,1-3,3-3h384
\tc1.2,0,3,1,3,3v184.8c0,1.2-1.8,3-3,3H69.1l-1.8,18H437v-213C437,20.9,431.4,15,424,15z"/>
    <path style="fill:#D9CDC1;"
          d="M40,44l324,14.4c15.2,0.8,28,13.6,28,28.8v81.6c0,15.2-12,28-27.2,28.8L168,212h240V44H40z"/>
    <path style="fill:#CC9966;" d="M66.8,247l-7.7,58H424c7.2,0,13-5.8,13-13v-45H66.8z M224,287c-6.1,0-11-4.9-11-11s4.9-11,11-11
\ts11,4.9,11,11S230.1,287,224,287z"/>
    <g>
\t<path style="fill:#B37D4D;"
          d="M424,252v35.2c0,2.4-2.4,4.8-4.8,4.8H66.4l-0.8,8H160h64h64h136c4.8,0,8-4,8-8v-40H424z"/>
        <path style="fill:#B37D4D;" d="M24,300h24.8l0.8-8H28.8c-2.4,0-4.8-2.4-4.8-4.8V252h-8v40C16,296,20,300,24,300z"/>
        <path style="fill:#B37D4D;" d="M280,316l-88,6.4c-9.6,0.8-16.8,7.2-19.2,16.8L168,356v-40H280z"/>
</g>
    <path style="fill:#42210B;" d="M232,356h24v16h-24V356z M224,260c8.8,0,16,7.2,16,16s-7.2,16-16,16c-8.8,0-16-7.2-16-16
\tS215.2,260,224,260z M64,156c0,8.8,7.2,16,16,16s16-7.2,16-16s-7.2-16-16-16S64,147.2,64,156z M408,396v-48h-56v8h32v16h-32v24H408z
\t M152,365.6V316H63.2l-6.4,48H128c4,0,8,4,8,8v24h2.4L152,365.6z M232,156h-16v8h16V156z M292,396l-11.2-25.6
\tc-0.8-0.8-0.8-2.4-0.8-3.2V316H168v40h48v16h-49.6L156,396H292z M288,300h136c4.8,0,8-4,8-8v-40H224H71.2l-6.4,48H160h64H288z
\t M208,140h32h16v-28.8c0-6.4-4.8-11.2-11.2-11.2h-41.6c-6.4,0-11.2,4.8-11.2,11.2V140H208z M24.8,300h24.8l6.4-48H16v40
\tC16,296,20,300,24.8,300z M128,412H32H16v16h416v-16h-16h-72h-40H144H128z M40,380v16h80v-16H40z M32,364h8.8l6.4-48H24.8
\tC11.2,316,0,304.8,0,292V28.8C0,15.2,11.2,4,24.8,4H424c13.6,0,24,11.2,24,24.8V292c0,13.6-11.2,24-24,24H296v49.6l13.6,30.4H336
\tv-56c0-4,4-8,8-8h72c4,0,8,4,8,8v56h16c4,0,8,4,8,8v32c0,4-4,8-8,8H8c-4.8,0-8-4-8-8v-32c0-4,3.2-8,8-8h16v-24
\tC24,368,27.2,364,32,364z M32,28h384c4,0,8,3.2,8,8v184c0,4-4,8-8,8H74.4l-0.8,8H432V28c0-4-4-8-8-8H24.8C20,20,16,24,16,28.8v208
\th40.8l0.8-8H32c-4.8,0-8-4-8-8V36C24,31.2,27.2,28,32,28z M408,44H40v168h20l3.2-28.8c-9.6-5.6-15.2-16-15.2-27.2
\tc0-17.6,14.4-32,32-32c8,0,16,3.2,21.6,8l76-30.4c4-10.4,13.6-17.6,25.6-17.6h41.6C260,84,272,96,272,111.2V148c0,4-4,8-8,8h-16v16
\tc0,4-4,8-8,8h-32c-4,0-8-4-8-8v-16h-16c-4,0-8-4-8-8v-28l-65.6,26.4c0.8,3.2,1.6,6.4,1.6,9.6c0,17.6-14.4,32-32,32h-0.8L76,212h332
\tL408,44L408,44z"/></g>`
        },
        arrow: {
          viewBox: '0 0 483.284 483.284',
          icon: `<g>
<polygon style="fill:#2488FF;" points="375.784,134.142 241.642,0 107.5,134.142 135.784,162.427 221.888,76.323 221.888,483.284 
\t261.888,483.284 261.888,76.815 347.5,162.426 "/>
</g>`
        },
        jamstack: {
          viewBox: '0 0 256 256',
          icon: `<g>
        <path d="M128,0 C57.2214503,0 0,57.2214503 0,128 C0,198.778219 57.2214503,256 128,256 C198.778219,256 256,198.778219 256,128 L256,0 L128,0 Z" fill="#F0047F"></path>
        <path d="M121.040103,134.959897 L121.040103,228.271897 C71.3767366,225.435004 31.4001877,185.927043 27.8251844,136.461862 L27.7280206,134.959897 L121.040103,134.959897 Z M212.001858,134.959897 C209.401237,184.623509 173.18574,224.599736 127.84326,228.174733 L126.466477,228.271897 L126.466477,134.959897 L212.001858,134.959897 Z M212.114168,43.8855019 L212.114168,129.533523 L126.466477,129.533523 L126.466477,43.8855019 L212.114168,43.8855019 Z" fill="#FFFFFF"></path>
    </g>`
        },
        node: {
          viewBox: '0 0 32 32',
          icon: `<g><path d="M16,30a2.151,2.151,0,0,1-1.076-.288L11.5,27.685c-.511-.286-.262-.387-.093-.446a6.828,6.828,0,0,0,1.549-.7.263.263,0,0,1,.255.019l2.631,1.563a.34.34,0,0,0,.318,0l10.26-5.922a.323.323,0,0,0,.157-.278V10.075a.331.331,0,0,0-.159-.283L16.158,3.875a.323.323,0,0,0-.317,0L5.587,9.794a.33.33,0,0,0-.162.281V21.916a.315.315,0,0,0,.161.274L8.4,23.814c1.525.762,2.459-.136,2.459-1.038V11.085a.3.3,0,0,1,.3-.3h1.3a.3.3,0,0,1,.3.3V22.777c0,2.035-1.108,3.2-3.038,3.2a4.389,4.389,0,0,1-2.363-.642L4.661,23.788a2.166,2.166,0,0,1-1.076-1.872V10.075A2.162,2.162,0,0,1,4.661,8.2L14.922,2.276a2.246,2.246,0,0,1,2.156,0L27.338,8.2a2.165,2.165,0,0,1,1.077,1.87V21.916a2.171,2.171,0,0,1-1.077,1.872l-10.26,5.924A2.152,2.152,0,0,1,16,30Z"
          style="fill:#83cd29"/>
    <path d="M14.054,17.953a.3.3,0,0,1,.3-.3h1.327a.3.3,0,0,1,.295.251c.2,1.351.8,2.032,3.513,2.032,2.161,0,3.082-.489,3.082-1.636,0-.661-.261-1.152-3.62-1.481-2.808-.278-4.544-.9-4.544-3.144,0-2.07,1.745-3.305,4.67-3.305,3.287,0,4.914,1.141,5.12,3.589a.3.3,0,0,1-.295.323H22.566a.3.3,0,0,1-.288-.232c-.319-1.421-1.1-1.875-3.2-1.875-2.36,0-2.634.822-2.634,1.438,0,.746.324.964,3.51,1.385,3.153.417,4.651,1.007,4.651,3.223,0,2.236-1.864,3.516-5.115,3.516C14.995,21.743,14.054,19.682,14.054,17.953Z"
          style="fill:#83cd29"/></g>`
        },
        typescript: {
          viewBox: '0 0 128 128',
          icon: `<g><path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
    <path fill="#007acc"
          d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path></g>`
        },
        websocket: {
          viewBox: '0 -31.5 256 256',
          icon: `<g fill="red">
        <path d="M192.440223,144.644612 L224.220111,144.644612 L224.220111,68.3393384 L188.415329,32.5345562 L165.943007,55.0068785 L192.440223,81.5040943 L192.440223,144.644612 L192.440223,144.644612 Z M224.303963,160.576482 L178.017688,160.576482 L113.451687,160.576482 L86.954471,134.079266 L98.1906322,122.843105 L120.075991,144.728464 L165.104487,144.728464 L120.746806,100.286931 L132.06682,88.9669178 L176.4245,133.324599 L176.4245,88.2961022 L154.622994,66.4945955 L165.775303,55.3422863 L110.684573,0 L56.3485097,0 L56.3485097,0 L0,0 L31.6960367,31.6960367 L31.6960367,31.7798886 L31.8637406,31.7798886 L97.4359646,31.7798886 L120.662954,55.0068785 L86.7029152,88.9669178 L63.4759253,65.7399279 L63.4759253,47.7117589 L31.6960367,47.7117589 L31.6960367,78.9046839 L86.7029152,133.911562 L64.3144448,156.300033 L100.119227,192.104815 L154.45529,192.104815 L256,192.104815 L256,192.104815 L224.303963,160.576482 L224.303963,160.576482 Z" fill="orange"></path>
    </g>`
        },
        vue: {
          viewBox: '0 0 128 128',
          icon: `<path d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01" fill="none"></path><path d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z" fill="#35495e"></path><path d="M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z" fill="#41b883"></path>`
        },
        svelte: {
          viewBox: "0 0 128 128",
          icon: `<path d="M119.838 16.936C105.553-.076 77.336-5.118 56.942 5.696l-35.829 19c-4.847 2.529-9.006 5.871-12.212 9.814-3.206 3.943-5.387 8.399-6.404 13.083a30.64 30.64 0 00-.688 6.396c.022 5.831 1.74 11.571 5.007 16.73-3.063 3.872-5.154 8.22-6.146 12.782a30.483 30.483 0 00.415 14.412c1.29 4.733 3.702 9.204 7.096 13.152 14.284 17.011 42.564 22.053 62.895 11.24l35.792-19.001c4.844-2.532 8.998-5.878 12.196-9.825 3.197-3.947 5.367-8.407 6.37-13.093.46-2.107.691-4.244.688-6.386-.009-5.82-1.705-11.551-4.945-16.709 3.062-3.869 5.153-8.213 6.147-12.771.444-2.109.67-4.245.676-6.386.002-7.595-2.852-15-8.162-21.178v-.02z" fill="#FF3E00"></path><path d="M53.44 112.667a34.23 34.23 0 01-7.16.76c-4.595.001-9.122-.925-13.193-2.7-4.07-1.774-7.563-4.343-10.179-7.487-3.194-3.716-4.91-8.171-4.907-12.74a18.83 18.83 0 01.4-3.833 18.55 18.55 0 01.865-2.782l.676-1.708 1.827 1.156c4.243 2.591 8.984 4.564 14.02 5.834l1.328.333-.125 1.104v.573c-.003 1.381.514 2.73 1.477 3.854.778.958 1.826 1.744 3.052 2.288a9.936 9.936 0 003.983.837 9.923 9.923 0 002.153-.229 8.745 8.745 0 002.204-.802l35.79-19.094c1.073-.566 1.957-1.349 2.568-2.276.61-.927.928-1.968.924-3.026-.01-1.381-.54-2.725-1.515-3.844-.79-.946-1.844-1.718-3.071-2.252a9.997 9.997 0 00-3.977-.81 9.917 9.917 0 00-2.153.23 8.344 8.344 0 00-2.19.801l-13.645 7.25a29.314 29.314 0 01-7.273 2.656c-2.34.502-4.745.758-7.161.76-4.594 0-9.119-.926-13.189-2.698-4.07-1.772-7.564-4.338-10.183-7.478-3.19-3.718-4.906-8.172-4.907-12.74.002-1.285.136-2.567.4-3.833.613-2.816 1.921-5.495 3.844-7.867 1.922-2.373 4.416-4.387 7.323-5.914L67.274 18c2.248-1.19 4.7-2.09 7.273-2.667 2.34-.499 4.745-.75 7.16-.75 4.605-.01 9.144.91 13.228 2.681 4.084 1.77 7.59 4.34 10.219 7.486 3.171 3.727 4.865 8.184 4.845 12.75a18.939 18.939 0 01-.401 3.844 18.529 18.529 0 01-.864 2.781l-.676 1.708-1.827-1.114c-4.24-2.595-8.982-4.568-14.02-5.834l-1.328-.343.125-1.105v-.572c0-1.385-.516-2.735-1.477-3.865-.789-.945-1.84-1.716-3.066-2.25a9.992 9.992 0 00-3.97-.813 9.887 9.887 0 00-2.127.271 8.2 8.2 0 00-2.203.802L42.337 50a7.071 7.071 0 00-2.209 1.79 5.713 5.713 0 00-1.158 2.377 6.057 6.057 0 00-.163 1.104c-.001 1.378.515 2.722 1.477 3.844.788.945 1.84 1.717 3.065 2.25a9.98 9.98 0 003.97.812 9.918 9.918 0 002.153-.23 8.35 8.35 0 002.204-.801l13.67-7.292a29.125 29.125 0 017.273-2.656 34.305 34.305 0 017.16-.76c4.596 0 9.123.925 13.195 2.697 4.072 1.772 7.569 4.339 10.19 7.48 3.19 3.717 4.906 8.171 4.907 12.74.003 1.299-.135 2.596-.413 3.874-.609 2.817-1.917 5.497-3.839 7.87-1.923 2.372-4.418 4.385-7.328 5.911L60.726 110a29.233 29.233 0 01-7.285 2.667z" fill="#fff"></path>`
        },
        sass: {
          viewBox: '0 0 128 128',
          icon: `<path fill-rule="evenodd" clip-rule="evenodd" fill="#CB6699" d="M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153a11.696 11.696 0 00-.354-1.014c-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896a10.384 10.384 0 002.691-3.199c1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888a3.701 3.701 0 00-.48 1.364 1.737 1.737 0 001.383 1.971 9.661 9.661 0 002.708.193c3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605a.869.869 0 00-.205.67c.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788a25.401 25.401 0 00-9.765 1.503c-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5a2.854 2.854 0 00-.786-.258c-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368a11.643 11.643 0 00-5.354.438c-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436a172.189 172.189 0 011.578-7.099c.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568a2.592 2.592 0 01-.757.654c-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091a39.478 39.478 0 01-9.765 2.083c-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125C68.756 18.179 64.588 17 60.286 17h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79a40.494 40.494 0 00-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zM54.303 70.98c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417a1.689 1.689 0 01-.283.334c-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054a6.27 6.27 0 011.595-.706c.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354a2.385 2.385 0 01.093-.721c.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"></path>`
        },
        react: {
          viewBox: '0 0 128 128',
          icon: `<g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>`
        },
        npm: {
          viewBox: '0 0 512 512',
          icon: `<g><rect
            rx="15%"
            fill="#fff"/>
    <path fill="none" stroke="#cb3837" stroke-width="22"
          d="m234 311h213v-112H65v112h113V210m-12 123h90M133 232v68m112-68v45m45-67v90m67-68v68m45-68v68"/></g>`
        }
      };
      exports.SVGS = SVGS;
    }
  });
  /***********************
  INTERNAL MODULE: ./store
  ***********************/

  modules.set('./store', {
    hash: 3768859075,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Store = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");

      class Store extends _ts.Events {
        #loading = false;

        get loading() {
          return this.#loading;
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

        async fetch() {}

        hydrate(cached) {}

        toJSON() {}

      }

      exports.Store = Store;
    }
  });
  /*****************************
  INTERNAL MODULE: ./views/block
  *****************************/

  modules.set('./views/block', {
    hash: 184412487,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Block = Block;

      var React = require("react");

      var _navigatorBox = require("./navigator-box");

      const tpl = `
{
  "name": "code",
  "code": {
    "sass": {
      "path": "sass",
      "files": [
        "*"
      ]
    },
    "ts": {
      "path": "ts",
      "files": [
        "*"
      ]
    }
  }
}

`;

      function Block() {
        return React.createElement("section", {
          className: "block__features two-columns gradient-one"
        }, React.createElement("div", {
          className: "conteint"
        }), React.createElement(_navigatorBox.CodeBox, {
          title: "module.json"
        }, tpl));
      }
    }
  });
  /****************************
  INTERNAL MODULE: ./views/card
  ****************************/

  modules.set('./views/card', {
    hash: 2161201478,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Card = Card;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      function Card({
        title,
        href,
        children
      }) {
        return React.createElement("article", {
          className: "docs__card"
        }, React.createElement("header", null, React.createElement("h3", null, title)), React.createElement("section", null, React.createElement("p", {
          className: "p2"
        }, children)), React.createElement("section", {
          className: "card__action"
        }, React.createElement(_code.Link, {
          href: href,
          className: "link-more"
        }, "Leer m\u00E1s")));
      }
    }
  });
  /*******************************
  INTERNAL MODULE: ./views/context
  *******************************/

  modules.set('./views/context', {
    hash: 2046522563,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.useHeaderContext = exports.HeaderContext = void 0;

      var React = require("react");

      const value = {};
      const HeaderContext = React.createContext(value);
      exports.HeaderContext = HeaderContext;

      const useHeaderContext = () => React.useContext(HeaderContext);

      exports.useHeaderContext = useHeaderContext;
    }
  });
  /******************************
  INTERNAL MODULE: ./views/footer
  ******************************/

  modules.set('./views/footer', {
    hash: 3773956041,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Footer = Footer;

      var React = require("react");

      function Footer() {
        return React.createElement("footer", {
          className: "page__footer flex-container flex-center"
        }, "Copyright \u00A9 BeyondJS 2021");
      }
    }
  });
  /**************************************************
  INTERNAL MODULE: ./views/header/animation-functions
  **************************************************/

  modules.set('./views/header/animation-functions', {
    hash: 2919594325,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SVGEventsManager = SVGEventsManager;

      function SVGEventsManager(target) {
        const svg = target.querySelector('svg');
        const {
          x,
          y
        } = svg.getBoundingClientRect();
        const {
          clientWidth
        } = svg;
        const middleX = clientWidth / 2 + x;
        let originalMouseX = 0;
        let originalMouseY = 0;
        let mouseCurrentX = 0;
        let mouseCurrentY = 0;

        this.onMouseMove = event => {
          const {
            pageY,
            pageX
          } = event;
          const yDirection = pageY > originalMouseY ? 'bottom' : originalMouseY === pageY ? 'same' : 'top';
          const xDirection = pageX > originalMouseX ? 'right' : originalMouseX === pageX ? 'same' : 'left';
          originalMouseX = pageX;
          originalMouseY = pageY;
          const adjacentLeg = pageX - middleX;
          const oppositeLeg = pageY - y;
          const tan = oppositeLeg / adjacentLeg;
          const atan = Math.atan(tan) * (180 / Math.PI);
          const xQuadrant = adjacentLeg > 0 ? 1 : 2;
          const yQuadrant = oppositeLeg > 0 ? 2 : 1;
          const quadrants = [{
            x: 2,
            y: 1,
            method: () => atan - 360
          }, {
            x: 2,
            y: 1,
            method: () => -90 - oppositeLeg
          }, {
            x: 1,
            y: 1,
            method: () => atan - 360
          }, {
            x: 2,
            y: 2,
            method: () => -90 + 2 * atan
          }, {
            x: 1,
            y: 2,
            method: () => atan
          }];
          const index = quadrants.findIndex(item => item.x === xQuadrant && item.y === yQuadrant);

          if (xDirection !== 'same') {
            mouseCurrentX += xDirection === 'left' ? -5 : 5;
            mouseCurrentX = mouseCurrentX > 70 ? 70 : mouseCurrentX < -70 ? -70 : mouseCurrentX;
            svg.style.left = `${mouseCurrentX}px`;
          }

          if (yDirection !== 'same') {
            mouseCurrentY += yDirection === 'top' ? -5 : 5;
            mouseCurrentY = mouseCurrentY > 70 ? 70 : mouseCurrentY < -70 ? -70 : mouseCurrentY;
            svg.style.top = `${mouseCurrentY}px`;
          }

          svg.style.transform = `rotate(${quadrants[index].method()}deg)`;
        };

        this.onMouseLeave = event => {
          const svg = target.querySelector('svg');
          if (!svg) return;

          const getAngle = value => {
            if (!value) {
              console.log('there is no value');
              return;
            }

            let values = value.split('(')[1];
            values = values.split(')')[0];
            values = values.split(',');
            let a = values[0];
            let b = values[1];
            return Math.round(Math.atan2(b, a) * (180 / Math.PI));
          };

          let currentAngle = getAngle(window.getComputedStyle(svg, null).getPropertyValue('transform'));

          if (!currentAngle) {
            return;
          }

          const rollback = (position, current) => {
            const interval = window.setInterval(() => {
              current = current > 0 ? current - 1 : current + 1;
              svg.style[position] = current;
              if (current === 0) clearInterval(interval);
            }, 0);
          };

          rollback('left', parseInt(svg.style.left.replace('px', '')));
          rollback('top', parseInt(svg.style.top.replace('px', '')));
          const interval = window.setInterval(() => {
            currentAngle = currentAngle > 0 ? currentAngle - 1 : currentAngle + 1;
            svg.style.transform = `rotate(${currentAngle}deg)`;

            if (currentAngle === 0) {
              clearInterval(interval);
              return;
            }
          }, 0);
        };

        this.addEvents = () => {
          target.addEventListener('mousemove', this.onMouseMove);
          target.addEventListener('mouseleave', this.onMouseLeave);
        };

        this.removeEvents = () => {
          console.log("AJA");
          target.removeEventListener('mousemove', this.onMouseMove);
          target.removeEventListener('mouseleave', this.onMouseLeave);
        };
      }
    }
  });
  /***********************************
  INTERNAL MODULE: ./views/header/icon
  ***********************************/

  modules.set('./views/header/icon', {
    hash: 1463248823,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.IconLogo = IconLogo;

      var React = require("react");

      function IconLogo() {
        return React.createElement("figure", null, React.createElement("div", {
          className: "beyond__icon hidden-mobile"
        }, React.createElement("svg", {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 32 32"
        }, React.createElement("g", null, React.createElement("g", {
          id: "beyond-ales",
          transform: "translate(0 58.014)"
        }, React.createElement("path", {
          className: "st0",
          d: "M8.2-38.4c-0.5,2.1-0.8,4-0.7,5.1C7.6-32.1,8-32,8.7-32.9c0.6-1,1.1-2.2,1.5-3.4C9.4-36.9,8.8-37.6,8.2-38.4z\r\n\t\t\t M20.2-35.2c-0.9,0.4-1.8,0.7-2.8,0.8c-0.3,1.2-0.4,2.5-0.4,3.7c0.1,1.1,0.5,1.2,1.2,0.3C18.9-31.3,19.6-33.2,20.2-35.2z M12.4-35\r\n\t\t\tc-0.7,3-1.2,5.8-1.3,7.3c-0.1,1.7,0.4,1.8,1.2,0.3c0.7-1.4,1.6-4,2.6-7C14.1-34.4,13.2-34.7,12.4-35L12.4-35z"
        })), React.createElement("g", {
          id: "beyond-circle"
        }, React.createElement("path", {
          className: "st1",
          d: "M16.4,5.9c-0.2,0-0.4,0-0.6,0c-4.5,0.2-8,4-7.8,8.5s4,8,8.5,7.8c4.5-0.2,8-4,7.8-8.5\r\n\t\t\tC24.1,9.5,20.6,6,16.4,5.9z M16.3,7.8c0.5,0,1,0.1,1.4,0.2c3.4,0.9,5.4,4.4,4.5,7.9c-0.9,3.4-4.4,5.4-7.9,4.5\r\n\t\t\tC11,19.5,8.9,16,9.8,12.5c0.7-2.7,3.2-4.6,6-4.7C16,7.8,16.2,7.8,16.3,7.8L16.3,7.8z M19.5,0.3c-0.5,0-1,0.2-1.5,0.4\r\n\t\t\tC17.2,1,16.7,1.4,16.2,2c-0.8,0.9-1.5,1.8-2.2,2.9c0.9-0.2,1.7-0.3,2.7-0.2c0.3-0.5,0.7-0.9,1.1-1.4C19.1,2,20.1,1.9,20.5,4\r\n\t\t\tc0.1,0.6,0.2,1.2,0.3,1.8c0.8,0.4,1.5,1,2.2,1.7c0-1.3-0.1-2.6-0.4-3.8c-0.2-0.7-0.5-1.4-0.9-2.1c-0.4-0.5-0.9-1.1-1.6-1.3\r\n\t\t\tC19.8,0.3,19.6,0.3,19.5,0.3L19.5,0.3z M16.4,5.7c-0.2,0-0.4,0-0.6,0c-4.6,0.2-8.2,4.1-8,8.7c0.2,4.6,4.1,8.2,8.7,8s8.2-4.1,8-8.7\r\n\t\t\tC24.3,9.4,20.7,5.9,16.4,5.7L16.4,5.7z M16.3,7.6c0.5,0,1,0.1,1.4,0.2c3.5,1,5.7,4.6,4.6,8.1c-0.9,3.5-4.5,5.5-8,4.6\r\n\t\t\ts-5.5-4.5-4.6-8c0.7-2.8,3.2-4.7,6.1-4.8C16,7.6,16.2,7.6,16.3,7.6L16.3,7.6z"
        }))))));
      }
    }
  });
  /************************************
  INTERNAL MODULE: ./views/header/index
  ************************************/

  modules.set('./views/header/index', {
    hash: 4071498761,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Header = Header;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      var _code2 = require("@beyond/ui/image/code");

      var _icon = require("./icon");

      var _pulse = require("./pulse");

      var _animationFunctions = require("./animation-functions");

      var _strongTittle = require("./strong-tittle");

      var _hamburger = require("./menu/hamburger");

      var _notice = require("./notice"); // import "@beyond/docs/header-animation/widget";


      function Header() {
        const container = React.useRef(null);
        React.useEffect(() => {
          const svgManager = new _animationFunctions.SVGEventsManager(container.current);
          svgManager.addEvents();
          return () => svgManager.removeEvents();
        }, []);
        return React.createElement(React.Fragment, null, React.createElement("div", null, React.createElement(_notice.Notice, null)), React.createElement("section", {
          className: "top__header"
        }, React.createElement("nav", {
          className: "menu-container container flex-container flex-h-end"
        }, React.createElement("div", {
          className: "mobile__header"
        }, React.createElement(_code2.BeyondImage, {
          src: "/images/beyond-logo.png",
          alt: "beyondjs"
        }), React.createElement(_hamburger.Hamburger, null)), React.createElement("div", {
          className: "menu-list__container"
        }, React.createElement("ul", {
          className: "header__menu"
        }, React.createElement("li", null, React.createElement(_code.Link, {
          href: "/docs/tutorial/web"
        }, "Tutorial")), React.createElement("li", null, React.createElement(_code.Link, {
          href: "/docs/intro"
        }, "Documentation")), React.createElement("li", null, React.createElement(_code.Link, {
          href: "/examples"
        }, "Examples")))))), React.createElement("header", {
          className: "home__header",
          ref: container
        }, React.createElement("div", {
          className: "container flex-container flex-center"
        }, React.createElement("div", {
          className: "header__content"
        }, React.createElement("h1", null, React.createElement("span", null, "The Full Stack universal ", React.createElement("br", null), "Typescript Framework"), React.createElement(_strongTittle.StrongTitle, null)), React.createElement("span", {
          className: "p2"
        }, "Integra diferentes stacks de desarrollo y trabaja con ellos bajo el mismo paradigma, priorizando la experiencia de desarrollo y la carga modular, sin necesidad de empaquetadores.")), React.createElement(_icon.IconLogo, null)), React.createElement(_pulse.Pulse, null)));
      }
    }
  });
  /*********************************************
  INTERNAL MODULE: ./views/header/menu/hamburger
  *********************************************/

  modules.set('./views/header/menu/hamburger', {
    hash: 1511364435,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Hamburger = Hamburger;

      var React = require("react");

      function Hamburger() {
        const showMenu = event => {
          event.preventDefault();
          const target = event.currentTarget;
          const menu = target.closest('.top__header').querySelector('.header__menu');
          target.closest('.top__header').querySelector('.menu-list__container').classList.toggle('opened');
          menu.classList.toggle('opened');
        };

        return React.createElement("button", {
          className: "hamburger-icon-container",
          onClick: showMenu
        }, React.createElement("input", {
          id: "hamburger__input",
          type: "checkbox",
          className: "hamburger-icon"
        }), React.createElement("label", {
          htmlFor: "hamburger__input"
        }, React.createElement("i", null), React.createElement("span", null)), React.createElement("em", null));
      }
    }
  });
  /*************************************
  INTERNAL MODULE: ./views/header/notice
  *************************************/

  modules.set('./views/header/notice', {
    hash: 2514501766,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Notice = Notice;

      var React = require("react");

      function Notice() {
        return React.createElement("section", {
          className: "flex-container flex-center header-notice bg-primary-accent pd-5"
        }, "Beta version");
      }
    }
  });
  /************************************
  INTERNAL MODULE: ./views/header/pulse
  ************************************/

  modules.set('./views/header/pulse', {
    hash: 436370280,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Pulse = Pulse;

      var React = require("react");

      function Pulse() {
        return React.createElement("div", {
          className: "header__circle"
        }, React.createElement("span", {
          style: {
            '--i': 1
          }
        }), React.createElement("span", {
          style: {
            '--i': 2
          }
        }), React.createElement("span", {
          style: {
            '--i': 3
          }
        }), React.createElement("span", {
          style: {
            '--i': 4
          }
        }), React.createElement("span", {
          style: {
            '--i': 5
          }
        }));
      }
    }
  });
  /********************************************
  INTERNAL MODULE: ./views/header/strong-tittle
  ********************************************/

  modules.set('./views/header/strong-tittle', {
    hash: 4195098479,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.StrongTitle = StrongTitle;

      var React = require("react");

      function StrongTitle() {
        const labels = ["NPM", "NodeJS", "Micro frontends", "Micro services", "React, Vue, Svelte", "Mobile", "Web"];
        const ref = React.useRef(null);
        let index = 0;
        const [current, setLabel] = React.useState(index);
        React.useEffect(() => {
          const {
            current: target
          } = ref;
          let i = 1;
          const interval = window.setInterval(() => {
            target.classList.add('fade-out');
            window.setTimeout(() => {
              target.innerText = labels[i];
              target.classList.remove('fade-out');
              target.classList.remove('fade-in');
              i = i + 1 === labels.length ? 0 : i + 1;
            }, 500);
          }, 2000);
        }, []);
        return React.createElement("strong", {
          className: "text-slg",
          ref: ref
        }, labels[current]);
      }
    }
  });
  /*************************************
  INTERNAL MODULE: ./views/navigator-box
  *************************************/

  modules.set('./views/navigator-box', {
    hash: 3401150443,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CodeBox = CodeBox;

      var React = require("react");

      var _code = require("@beyond/docs/code/code");

      function CodeBox({
        title,
        children
      }) {
        return React.createElement("div", {
          className: "navigator__box"
        }, React.createElement("header", null, React.createElement("div", {
          className: "box__buttons"
        }, React.createElement("div", {
          className: "circle red"
        }), React.createElement("div", {
          className: "circle blue"
        }), React.createElement("div", {
          className: "circle green"
        })), title), React.createElement("section", {
          className: "box__code"
        }, React.createElement(_code.Code, {
          language: "json"
        }, children)));
      }
    }
  });
  /****************************
  INTERNAL MODULE: ./views/page
  ****************************/

  modules.set('./views/page', {
    hash: 4068279524,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Page = Page;

      var React = require("react");

      var _header = require("./header");

      var _configModule = require("./sections/config-module");

      var _realtime = require("./sections/realtime");

      var _dx = require("./sections/dx");

      var _footer = require("./footer");

      var _technologies = require("./sections/technologies");

      var _solution = require("./sections/solution");

      function Page({
        uri,
        component
      }) {
        return React.createElement(React.Fragment, null, React.createElement(_header.Header, null), React.createElement("main", null, React.createElement(_solution.Solution, null), React.createElement(_technologies.Technologies, null), React.createElement("div", {
          className: "container"
        }, React.createElement(_configModule.ConfigModule, null), React.createElement(_realtime.Realtime, null), React.createElement(_dx.DX, null)), React.createElement(_footer.Footer, null)));
      }
    }
  });
  /**********************************************
  INTERNAL MODULE: ./views/sections/config-module
  **********************************************/

  modules.set('./views/sections/config-module', {
    hash: 172012258,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ConfigModule = ConfigModule;

      var React = require("react");

      var _navigatorBox = require("../navigator-box");

      var _code = require("@beyond/ui/link/code");

      const tpl = `
{
  "name": "code",
  "code": {
    "sass": {
      "path": "sass",
      "files": [
        "*"
      ]
    },
    "ts": {
      "path": "ts",
      "files": [
        "*"
      ]
    }
  }
}

`;

      function ConfigModule() {
        return React.createElement("section", {
          className: "block__features two-columns gradient-one code-box-container"
        }, React.createElement("div", {
          className: "content"
        }, React.createElement("h3", {
          className: "text-plg"
        }, "M\u00EDnima Configuraci\u00F3n y carga modular"), React.createElement("p", null, "Sin empaquetadores y en una estructura modular que asegura la carga a demanda sin agregar complejidades a medida que el proyecto crece."), React.createElement("h3", {
          className: "text-slg"
        }, "Plug & Play"), React.createElement("p", null, "Los modulos pueden reestructurarse y moverse de un proyecto a otro sin necesidad necesidad de configuraciones adicionales."), React.createElement("footer", {
          className: "action"
        }, React.createElement(_code.Link, {
          className: "link-more",
          href: "/docs/module"
        }, "Leer M\u00E1s"))), React.createElement(_navigatorBox.CodeBox, {
          title: "module.json"
        }, tpl));
      }
    }
  });
  /***********************************
  INTERNAL MODULE: ./views/sections/dx
  ***********************************/

  modules.set('./views/sections/dx', {
    hash: 607679831,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DX = DX;

      var React = require("react");

      var _code = require("@beyond/ui/image/code");

      function DX() {
        return React.createElement(React.Fragment, null, React.createElement("article", {
          className: "block__features gradient-one two-columns mv-200"
        }, React.createElement("div", {
          className: "image-over"
        }, React.createElement(_code.BeyondImage, {
          src: "/images/home/dashboard-home.png",
          alt: "Beyond Dashboard"
        }), React.createElement(_code.BeyondImage, {
          src: "/images/home/dashboard-home-2.png",
          alt: "Beyond Dashboard"
        })), React.createElement("div", null), React.createElement("div", {
          className: "content content-40"
        }, React.createElement("header", {
          className: "header__section header__left"
        }, React.createElement("h3", null, "Experiencia de desarrollo")), React.createElement("ul", null, React.createElement("li", null, "Proyectos en simult\u00E1neo."), React.createElement("li", null, "Edici\u00F3n de c\u00F3digo."), React.createElement("li", null, "Deployment."), React.createElement("li", null, "Creaci\u00F3n de m\u00F3dulos."), React.createElement("li", null, "Gesti\u00F3n de plataformas y servicios.")))));
      }
    }
  });
  /*****************************************
  INTERNAL MODULE: ./views/sections/realtime
  *****************************************/

  modules.set('./views/sections/realtime', {
    hash: 2105182845,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Realtime = Realtime;

      var React = require("react");

      var _code = require("@beyond/ui/icons/code");

      var _icons = require("../../icons");

      var _code2 = require("@beyond/ui/link/code");

      function Realtime() {
        return React.createElement(React.Fragment, null, React.createElement("section", {
          className: "block__features  three-columns realtime-section"
        }, React.createElement("div", {
          className: "relative-container"
        }, React.createElement("section", {
          className: "icon-graphic-container"
        }, React.createElement("div", {
          className: "icons icons-graphic"
        }, React.createElement(_code.BeyondIcon, {
          icon: _icons.SVGS.server,
          className: "icon-server"
        }), React.createElement("div", {
          className: "arrows"
        }, React.createElement(_code.BeyondIcon, {
          icon: _icons.SVGS.arrow,
          className: "icon-arrow server-to-mobile"
        }), React.createElement(_code.BeyondIcon, {
          icon: _icons.SVGS.arrow,
          className: "server-to-desktop icon-arrow "
        })), React.createElement(_code.BeyondIcon, {
          icon: _icons.SVGS.mobile,
          className: "icon-mobile"
        }), React.createElement(_code.BeyondIcon, {
          className: "icon-desktop",
          icon: _icons.SVGS.desktop
        })))), React.createElement("div", {
          className: "content"
        }, React.createElement("h3", null, "HMR en Navegador y ", React.createElement("span", {
          className: "accent"
        }, "Node")), React.createElement("p", null, "Actualizaci\u00F3n en tiempo de ejecuci\u00F3n del c\u00F3digo cliente y", React.createElement("span", {
          className: "accent"
        }, " Node"), ". ", React.createElement("span", {
          className: "insight beyond"
        }, "BeyondJS"), " gestiona los servicios Node para evitar el reinicio de los mismos cuando se realizan cambios y garantizar la mejor experiencia de desarrollo posible."), React.createElement(_code2.Link, {
          href: "/docs/hmr",
          className: "link-more"
        }, "Leer m\u00E1s")), React.createElement("div", {
          className: "content"
        }, React.createElement("h3", null, "Conexi\u00F3n Real-time cliente y servidor/ servidor y servidor"), React.createElement("p", null, "Comunicaci\u00F3n de", React.createElement(_code2.Elink, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
        }, " websockets "), "soportada de forma autom\u00E1tica para conectar el c\u00F3digo cliente de un proyecto m\u00F3vil o web con un servidor o servicio node."), React.createElement(_code2.Link, {
          href: "/docs/bridges",
          className: "link-more"
        }, "Leer m\u00E1s"))));
      }
    }
  });
  /*****************************************
  INTERNAL MODULE: ./views/sections/solution
  *****************************************/

  modules.set('./views/sections/solution', {
    hash: 1171834889,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Solution = Solution;

      var React = require("react");

      var _card = require("../card");

      var _code = require("@beyond/ui/link/code");

      function Solution() {
        return React.createElement("div", {
          className: "container"
        }, React.createElement("header", {
          className: "header__section text-center"
        }, React.createElement("h3", null, "Desarrollo universal"), React.createElement("span", {
          className: "subtitle"
        }, "Enfocado en hacer que las mismas herramientas y t\u00E9cnicas funcionen para m\u00FAltiples distribuciones  y tecnolog\u00EDas de manera simple y en  la creaci\u00F3n de micro servicios y micro frontends.")), React.createElement("div", {
          className: "container cards__container"
        }, React.createElement(_card.Card, {
          title: "Typescript Universal",
          href: "/docs/backend"
        }, "Dise\u00F1ado para crear desde un mismo proyecto, m\u00FAltiples distribuciones como sitios web, aplicaciones", React.createElement(_code.Elink, {
          href: "https://cordova.apache.org/"
        }, " C\u00F3rdova"), ",", React.createElement(_code.Elink, {
          href: "https://docs.npmjs.com/packages-and-modules"
        }, " paquetes NPM "), "y c\u00F3digo ", React.createElement(_code.Elink, {
          href: "https://nodejs.org"
        }, " Node"), "."), React.createElement(_card.Card, {
          title: "Desarrollo Isomorfico",
          href: "/docs/tutorial/web"
        }, "Listo para publicar sitios est\u00E1ticos, ", React.createElement("strong", null, "SSR"), ", ", React.createElement("strong", null, "CSR"), " o arquitecturas", React.createElement(_code.Elink, {
          href: "https://jamstack.org/"
        }, " Jamstack"), " y con posibilidad de usarlas en conjunto por medio de", React.createElement(_code.Elink, {
          href: "https://micro-frontends.org/"
        }, " micro frontends"), "."), React.createElement(_card.Card, {
          title: "Frameworks de vistas",
          href: "/docs/widgets"
        }, "Compatible con\u00A0", React.createElement(_code.Elink, {
          href: "https://reactjs.org",
          className: "accent"
        }, "React"), ",\u00A0", React.createElement(_code.Elink, {
          href: "https://vuejs.org/",
          className: "accent"
        }, "Vue\u00A0"), " y", React.createElement(_code.Elink, {
          href: "https://svelte.dev/",
          className: "accent"
        }, "\u00A0Svelte"), ". Preparado para incluir otros frameworks o librerias de gestion de vistas.")));
      }
    }
  });
  /*********************************************
  INTERNAL MODULE: ./views/sections/technologies
  *********************************************/

  modules.set('./views/sections/technologies', {
    hash: 1099844618,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Technologies = Technologies;

      var React = require("react");

      var _code = require("@beyond/ui/icons/code");

      var _icons = require("../../icons");

      function Technologies() {
        return React.createElement("div", {
          className: "container"
        }, React.createElement("div", {
          className: "banner__icons"
        }, React.createElement(_code.BeyondIcon, {
          icon: _icons.SVGS.typescript
        }), React.createElement(_code.BeyondIcon, {
          icon: _icons.SVGS.node
        }), React.createElement(_code.BeyondIcon, {
          icon: _icons.SVGS.jamstack
        }), React.createElement(_code.BeyondIcon, {
          icon: _icons.SVGS.react
        }), React.createElement(_code.BeyondIcon, {
          icon: _icons.SVGS.npm
        }), React.createElement(_code.BeyondIcon, {
          icon: _icons.SVGS.svelte
        }), React.createElement(_code.BeyondIcon, {
          icon: _icons.SVGS.vue
        }), React.createElement(_code.BeyondIcon, {
          icon: _icons.SVGS.sass
        }), React.createElement(_code.BeyondIcon, {
          icon: _icons.SVGS.websocket
        })));
      }
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.Controller = require('./controller').Controller;
  };

  let Controller; // Module exports

  _exports2.Controller = Controller;

  __pkg.exports.process = function (require) {
    _exports2.Controller = Controller = require('./controller').Controller;
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});
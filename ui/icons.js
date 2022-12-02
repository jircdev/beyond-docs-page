System.register(["@beyond-js/kernel@0.1.0/bundle", "react@18.2.0", "@beyond/ui@1.0.0/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, AppIcon, AppIconButton, ICONS, __beyond_pkg, hmr;
  _export({
    AppIcon: void 0,
    AppIconButton: void 0,
    ICONS: void 0
  });
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondUi100Icons) {
      dependency_2 = _beyondUi100Icons;
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
          "vspecifier": "@beyond/docs@1/ui/icons"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond/ui/icons', dependency_2]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./icon
      **********************/
      ims.set('./icon', {
        hash: 1304556238,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppIcon = void 0;
          exports.AppIconButton = AppIconButton;
          var React = require("react");
          var _icons = require("@beyond/ui/icons");
          var _icons2 = require("./icons");
          /*bundle*/
          const AppIcon = props => {
            return React.createElement(_icons.BeyondIcon, {
              ...props,
              icons: _icons2.ICONS
            });
          };
          exports.AppIcon = AppIcon;
          /*bundle*/
          function AppIconButton(props) {
            return React.createElement(_icons.BeyondIconButton, {
              ...props,
              icons: _icons2.ICONS
            });
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./icons
      ***********************/

      ims.set('./icons', {
        hash: 582390598,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ICONS = void 0;
          /*bundle*/
          const ICONS = {
            copy: {
              viwBox: '0 0 24 24',
              icon: `<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>`
            },
            github: {
              viewBox: `0 0 128 128`,
              icon: `<g><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>`
            },
            add: {
              viewBox: `0 0 24 24`,
              icon: `<g id="add">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </g>`
            },
            static: {
              viewBox: "0 0 36.978 30.255",
              icon: `<path class="size" d="M35.116,24.67h3.362v3.362H35.116Zm0-6.723h3.362v3.362H35.116Zm3.362,13.446H35.116v3.362A3.615,3.615,0,0,0,38.478,31.393ZM21.67,4.5h3.362V7.862H21.67Zm13.446,6.723h3.362v3.362H35.116Zm0-6.723V7.862h3.362A3.615,3.615,0,0,0,35.116,4.5ZM1.5,11.223H4.862v3.362H1.5ZM28.393,4.5h3.362V7.862H28.393Zm0,26.893h3.362v3.362H28.393ZM4.862,4.5A3.615,3.615,0,0,0,1.5,7.862H4.862Zm10.085,0h3.362V7.862H14.946Zm-6.723,0h3.362V7.862H8.223ZM1.5,17.946V31.393a3.371,3.371,0,0,0,3.362,3.362h20.17V17.946ZM4.862,31.393l4.2-5.4,3.009,3.614,4.2-5.412,5.4,7.194Z" transform="translate(-1.5 -4.5)"/>`
            },
            languages: {
              icon: `<path d="M20.15,83.63,31.63,73.4a2.89,2.89,0,0,1,1.91-.73h27.8a.92.92,0,0,0,.93-.93V65.9H68v5.84a6.71,6.71,0,0,1-6.68,6.68H34.62L19.3,92.07a2.87,2.87,0,0,1-4.9-2V78.42H6.69A6.71,6.71,0,0,1,0,71.74V28.59a6.76,6.76,0,0,1,6.69-6.68H43.35v5.75H6.69a1,1,0,0,0-.94.93V71.74a.91.91,0,0,0,.28.65,1,1,0,0,0,.66.28H17.27a2.88,2.88,0,0,1,2.88,2.88v8.08Zm.21-19.48L29.6,36.24h8.83l9.24,27.91H40.35L38.8,59.07H29.15l-1.51,5.08ZM30.79,53.24h6.37L34,41.81,30.79,53.24ZM76.63,13.35h8.7V11.11a.69.69,0,0,1,.69-.69h4.65a.68.68,0,0,1,.68.69v2.24h9.76a.68.68,0,0,1,.68.69V18.5a.68.68,0,0,1-.68.68H99.56a26.3,26.3,0,0,1-.91,3.88l0,.06a26.07,26.07,0,0,1-1.74,4.15,32.34,32.34,0,0,1-2.14,3.43c-.67,1-1.41,1.9-2.2,2.83a35.78,35.78,0,0,0,3.68,3.83,41.43,41.43,0,0,0,5.09,3.74.68.68,0,0,1,.21.94l-2.39,3.73a.69.69,0,0,1-1,.2,45.88,45.88,0,0,1-5.58-4.08l0,0a41.42,41.42,0,0,1-4-4.1C87.3,38.93,86.15,40,85,41l0,0c-1.36,1.12-2.79,2.2-4.47,3.36a.69.69,0,0,1-1-.17L77,40.53a.69.69,0,0,1,.17-1c1.66-1.14,3-2.19,4.36-3.28,1.16-1,2.28-2,3.49-3.16a44.82,44.82,0,0,1-2.77-4.45A28.84,28.84,0,0,1,80,22.9a.68.68,0,0,1,.47-.84l4.27-1.19a.68.68,0,0,1,.84.47A22.62,22.62,0,0,0,89,28.7L90.27,27a26.33,26.33,0,0,0,1.51-2.47l0,0A19.43,19.43,0,0,0,93,21.62a24,24,0,0,0,.66-2.44h-17a.69.69,0,0,1-.69-.68V14a.69.69,0,0,1,.69-.69Zm27,56.82L88.26,56.51H61.54a6.73,6.73,0,0,1-6.69-6.68V6.69a6.71,6.71,0,0,1,2-4.72l.2-.18A6.67,6.67,0,0,1,61.54,0h54.65a6.69,6.69,0,0,1,4.71,2l.19.2a6.69,6.69,0,0,1,1.79,4.51V49.83a6.73,6.73,0,0,1-6.69,6.68h-7.7V68.13a2.88,2.88,0,0,1-4.91,2ZM91.26,51.49l11.47,10.23V53.64a2.88,2.88,0,0,1,2.88-2.88h10.58a.92.92,0,0,0,.65-.28.91.91,0,0,0,.29-.65V6.69a1,1,0,0,0-.22-.58L116.84,6a1,1,0,0,0-.65-.29H61.54A.94.94,0,0,0,61,6L60.89,6a.92.92,0,0,0-.28.65V49.83a.92.92,0,0,0,.93.93H89.35a2.86,2.86,0,0,1,1.91.73Z"/>`,
              viewBox: '0 0 122.88 92.91'
            },
            settings: {
              viewBox: `0 0 24 24`,
              icon: `<g id="settings" transform="scale(0.0499)">
                    <path d="M254.15,234.1V13.5c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v220.6c-31.3,6.3-55,34-55,67.2s23.7,60.9,55,67.2v98.2
                            c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-98.2c31.3-6.3,55-34,55-67.2C309.15,268.2,285.55,240.4,254.15,234.1z M240.65,342.8
                            c-22.9,0-41.5-18.6-41.5-41.5s18.6-41.5,41.5-41.5s41.5,18.6,41.5,41.5S263.55,342.8,240.65,342.8z"/>
                    <path d="M88.85,120.9V13.5c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v107.4c-31.3,6.3-55,34-55,67.2s23.7,60.9,55,67.2v211.4
                            c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V255.2c31.3-6.3,55-34,55-67.2S120.15,127.2,88.85,120.9z M75.35,229.6
                            c-22.9,0-41.5-18.6-41.5-41.5s18.6-41.5,41.5-41.5s41.5,18.6,41.5,41.5S98.15,229.6,75.35,229.6z"/>
                    <path d="M418.45,120.9V13.5c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v107.4c-31.3,6.3-55,34-55,67.2s23.7,60.9,55,67.2v211.5
                            c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V255.2c31.3-6.3,55-34,55-67.2S449.85,127.2,418.45,120.9z M404.95,229.6
                            c-22.9,0-41.5-18.6-41.5-41.5s18.6-41.5,41.5-41.5s41.5,18.6,41.5,41.5S427.85,229.6,404.95,229.6z"/>
                </g>`
            },
            folder: {
              viewBox: `0 0 24 24`,
              icon: `<path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>`
            },
            pinup: {
              viewBox: '0 0 24 24',
              icon: `<path fill="none" stroke="#fff" stroke-width="3" d="M16,3 L10,9 C10,9 6,8 3,11 C3,11 13,21 13,21 C16,18 15,14 15,14 L21,8 L16,3 Z M1,23 L8,16 M14,1 L23,10"/>`
            },
            bookmark: {
              viewBox: '0 0 24 24',
              icon: '<path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path>'
            },
            project: {
              viewBox: '0 0 512 512',
              icon: `<path d="m374.726562 138.636719h117.273438c11.046875 0 20-8.953125 20-20v-98.636719c0-11.046875-8.953125-20-20-20h-117.273438c-11.042968 0-20 8.953125-20 20v29.316406h-98.726562c-11.046875 0-20 8.957032-20 20v166.683594h-78v-58.667969c0-11.046875-8.953125-20-20-20h-118c-11.046875 0-20 8.953125-20 20v157.332031c0 11.046876 8.953125 20 20 20h118c11.046875 0 20-8.953124 20-20v-58.664062h78v166.683594c0 11.042968 8.953125 20 20 20h98.726562v29.316406c0 11.046875 8.957032 20 20 20h117.273438c11.046875 0 20-8.953125 20-20v-98.636719c0-11.046875-8.953125-20-20-20h-117.273438c-11.042968 0-20 8.953125-20 20v29.320313h-78.726562v-146.683594h78.726562v29.316406c0 11.046875 8.957032 20 20 20h117.273438c11.046875 0 20-8.953125 20-20v-98.632812c0-11.046875-8.953125-20-20-20h-117.273438c-11.042968 0-20 8.953125-20 20v29.316406h-78.726562v-146.683594h78.726562v29.320313c0 11.046875 8.957032 20 20 20zm-256.726562 176.03125h-78v-117.335938h78zm276.726562 98.695312h77.273438v58.636719h-77.273438zm0-186.679687h77.273438v58.632812h-77.273438zm0-186.683594h77.273438v58.636719h-77.273438zm0 0"/>`
            },
            apps: {
              viewBox: '0 0 24 24',
              icon: `<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>`
            },
            newProject: {
              viewBox: '0 0 24 24',
              icon: `<path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path>`
            },
            photoSize: {
              viewBox: "0 0 36.978 30.255",
              icon: `<path class="size" d="M35.116,24.67h3.362v3.362H35.116Zm0-6.723h3.362v3.362H35.116Zm3.362,13.446H35.116v3.362A3.615,3.615,0,0,0,38.478,31.393ZM21.67,4.5h3.362V7.862H21.67Zm13.446,6.723h3.362v3.362H35.116Zm0-6.723V7.862h3.362A3.615,3.615,0,0,0,35.116,4.5ZM1.5,11.223H4.862v3.362H1.5ZM28.393,4.5h3.362V7.862H28.393Zm0,26.893h3.362v3.362H28.393ZM4.862,4.5A3.615,3.615,0,0,0,1.5,7.862H4.862Zm10.085,0h3.362V7.862H14.946Zm-6.723,0h3.362V7.862H8.223ZM1.5,17.946V31.393a3.371,3.371,0,0,0,3.362,3.362h20.17V17.946ZM4.862,31.393l4.2-5.4,3.009,3.614,4.2-5.412,5.4,7.194Z" transform="translate(-1.5 -4.5)"/>`
            },
            setting: {
              viewBox: '0 0 12.038 12.038',
              icon: `
                    <path class="a" d="M11.771,4.972l-.6-.144a5.221,5.221,0,0,0-.665-1.61l.3-.508a.353.353,0,0,0-.053-.431l-1-1a.352.352,0,0,0-.431-.053l-.508.3A5.22,5.22,0,0,0,7.211.867L7.066.29A.375.375,0,0,0,6.724,0H5.314a.375.375,0,0,0-.342.29L4.827.867a5.22,5.22,0,0,0-1.61.665l-.508-.3a.354.354,0,0,0-.431.053l-1,1a.353.353,0,0,0-.053.431l.3.508a5.22,5.22,0,0,0-.665,1.61l-.6.144A.353.353,0,0,0,0,5.314V6.724a.353.353,0,0,0,.267.342l.6.144a5.221,5.221,0,0,0,.665,1.61l-.3.508a.353.353,0,0,0,.053.431l1,1a.353.353,0,0,0,.431.053l.508-.3a5.22,5.22,0,0,0,1.61.665l.144.6a.353.353,0,0,0,.342.267H6.724a.353.353,0,0,0,.342-.267l.144-.6a5.221,5.221,0,0,0,1.61-.665l.508.3a.354.354,0,0,0,.431-.053l1-1a.353.353,0,0,0,.053-.431l-.3-.508a5.22,5.22,0,0,0,.665-1.61l.6-.144a.353.353,0,0,0,.267-.342V5.314A.353.353,0,0,0,11.771,4.972ZM6.019,9.9A3.879,3.879,0,1,1,9.9,6.019,3.884,3.884,0,0,1,6.019,9.9Z"/><g transform="translate(4.173 3.52)"><path class="a" d="M179.521,149.765a.354.354,0,0,0-.353,0l-1.669.964,1.846,1.066,1.846-1.066Z" transform="translate(-177.499 -149.718)"/></g><g transform="translate(6.372 5.142)"><path class="a" d="M271,219.762v2.131l1.669-.964a.342.342,0,0,0,.165-.305V218.7Z" transform="translate(-271 -218.696)"/></g><g transform="translate(3.832 5.142)"><path class="a" d="M163,218.693v1.928a.353.353,0,0,0,.176.305l1.658.964v-2.131Z" 
                    transform="translate(-163 -218.693)"/></g>`
            },
            bell: {
              viewBox: '0 0 24 24',
              icon: `<g id="bell" transform="scale(0.04)">
                <path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
            </g>`
            },
            edit: {
              viewBox: '0 0 24 24',
              icon: `<g id="edit">
                <path
                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
            </g>`
            },
            page: {
              viewBox: '0 0 30 30',
              icon: `<g>
\t<path fill-rule="evenodd" clip-rule="evenodd" d="M14.999,3.173c3.851,0,7.703-0.002,11.554,0.001
\t\tc1.416,0.001,2.633,0.915,3.02,2.277c0.076,0.268,0.123,0.554,0.123,0.832c0.006,6.331,0.008,12.661,0.004,18.992
\t\tc-0.002,1.678-1.416,3.089-3.098,3.09c-7.732,0.004-15.466,0.003-23.2,0c-1.452-0.001-2.735-1.058-3.023-2.476
\t\tc-0.047-0.229-0.076-0.469-0.076-0.702C0.298,18.926,0.298,12.663,0.299,6.402C0.3,5.153,0.843,4.207,1.917,3.573
\t\tC2.362,3.31,2.852,3.174,3.374,3.174C7.25,3.173,11.124,3.173,14.999,3.173L14.999,3.173z M2.415,11.579
\t\tc-0.004,0.086-0.011,0.161-0.011,0.234c-0.001,4.431-0.001,8.862,0,13.292c0,0.748,0.425,1.164,1.182,1.164
\t\tc7.603,0,15.207,0,22.809,0c0.787,0,1.203-0.411,1.203-1.189c0-4.409,0-8.816,0-13.225c0-0.089,0-0.178,0-0.276
\t\tC19.186,11.579,10.81,11.579,2.415,11.579z M27.598,9.455c0-0.104,0-0.179,0-0.255c0-0.923,0.002-1.846,0-2.768
\t\tc-0.002-0.74-0.424-1.162-1.164-1.163c-7.617,0-15.232,0-22.85,0c-0.758,0-1.179,0.417-1.18,1.167c-0.003,0.93-0.001,1.86,0,2.791
\t\tc0,0.073,0.008,0.146,0.012,0.228C10.814,9.455,19.189,9.455,27.598,9.455z"/>
\t<path fill-rule="evenodd" clip-rule="evenodd" d="M13.039,24.165c-0.816,0.01-1.412-0.778-1.018-1.554
\t\tc0.701-1.376,1.382-2.763,2.071-4.144c0.679-1.359,1.364-2.715,2.037-4.079c0.201-0.405,0.488-0.685,0.953-0.717
\t\tc0.816-0.057,1.354,0.805,0.979,1.558c-0.998,2-1.996,4-2.998,5.999c-0.387,0.775-0.773,1.551-1.163,2.323
\t\tC13.701,23.944,13.38,24.156,13.039,24.165z"/>
\t<path fill-rule="evenodd" clip-rule="evenodd" d="M20.244,23.158c-0.436-0.014-0.762-0.219-0.941-0.609
\t\tc-0.191-0.413-0.131-0.817,0.186-1.144c0.732-0.755,1.482-1.491,2.225-2.235c0.236-0.238,0.238-0.235-0.006-0.475
\t\tc-0.721-0.7-1.445-1.399-2.158-2.107c-0.418-0.415-0.461-0.966-0.129-1.408c0.367-0.495,1.066-0.572,1.529-0.139
\t\tc0.74,0.692,1.461,1.405,2.188,2.11c0.322,0.313,0.645,0.628,0.965,0.942c0.523,0.517,0.527,1.122,0.008,1.645
\t\tc-1.014,1.014-2.029,2.025-3.039,3.041C20.84,23.009,20.582,23.165,20.244,23.158z"/>
\t<path fill-rule="evenodd" clip-rule="evenodd" d="M10.795,15.826c-0.004,0.316-0.144,0.567-0.363,0.786
\t\tc-0.707,0.704-1.406,1.415-2.121,2.11c-0.167,0.162-0.161,0.254-0.001,0.415c0.734,0.74,1.46,1.489,2.182,2.243
\t\tc0.339,0.356,0.398,0.829,0.181,1.223c-0.343,0.619-1.139,0.759-1.65,0.255c-0.742-0.73-1.462-1.487-2.19-2.232
\t\tc-0.303-0.311-0.605-0.622-0.906-0.936c-0.447-0.461-0.458-1.07-0.007-1.527c1.017-1.029,2.04-2.051,3.066-3.071
\t\tc0.349-0.345,0.78-0.419,1.196-0.233C10.552,15.023,10.797,15.411,10.795,15.826z"/>
\t<path fill-rule="evenodd" clip-rule="evenodd" d="M5.555,6.313c0.44-0.074,1.075,0.54,1.045,1.051
\t\tC6.569,7.934,6.124,8.41,5.554,8.413C4.972,8.415,4.526,7.938,4.498,7.35C4.475,6.856,5.094,6.233,5.555,6.313z"/>
\t<path fill-rule="evenodd" clip-rule="evenodd" d="M8.695,8.412c-0.58-0.002-1.052-0.479-1.041-1.071
\t\tc0.008-0.476,0.43-1.015,1.051-1.025c0.538-0.009,1.043,0.496,1.04,1.033C9.741,7.942,9.275,8.414,8.695,8.412z"/>
\t<path fill-rule="evenodd" clip-rule="evenodd" d="M12.899,7.376c-0.002,0.563-0.5,1.036-1.087,1.04
\t\tc-0.419,0.003-1.045-0.485-1.021-1.066c0.018-0.413,0.46-1.044,1.063-1.028C12.42,6.335,12.9,6.811,12.899,7.376z"/>
</g>`
            },
            code: {
              viewBox: '0  0 24 24',
              icon: `<g>
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
    </g>`
            },
            dependency: {
              viewBox: '0 0 494.085 494.085',
              icon: `<path  d="M469.568,55.098H322.479V9.955c0-5.495-4.461-9.955-9.96-9.955H189.392c-5.5,0-9.961,4.46-9.961,9.955v123.14
\t\tc0,5.494,4.461,9.954,9.961,9.954h123.127c5.499,0,9.96-4.46,9.96-9.954V87.951h130.663v143.33h-20.068l8.55-20.813
\t\tc0.324-0.778,0.128-1.661-0.479-2.23c-0.611-0.57-1.506-0.707-2.264-0.338l-76.471,37.795c-0.77,0.377-1.254,1.156-1.254,2.015
\t\ts0.484,1.636,1.254,2.013l76.471,37.795c0.758,0.369,1.652,0.233,2.264-0.337c0.607-0.567,0.804-1.45,0.479-2.229l-8.55-20.814
\t\th36.494c9.081,0,16.433-7.355,16.433-16.427V71.524C486,62.454,478.649,55.098,469.568,55.098z M289.624,110.194h-77.34v-77.34
\t\th77.34V110.194z"/>
\t<path  d="M312.519,175.518H189.392c-5.5,0-9.961,4.46-9.961,9.954v45.809H24.511c-9.08,0-16.427,7.354-16.427,16.428v176.184
\t\tc0,9.072,7.347,16.428,16.427,16.428h36.496l-8.551,20.813c-0.319,0.778-0.129,1.661,0.478,2.23
\t\tc0.612,0.57,1.514,0.707,2.266,0.337l76.475-37.794c0.767-0.377,1.25-1.156,1.25-2.015s-0.483-1.636-1.25-2.013L55.2,384.085
\t\tc-0.752-0.369-1.653-0.233-2.266,0.336c-0.606,0.568-0.797,1.451-0.478,2.229l8.551,20.815H40.938v-143.33h138.493v44.477
\t\tc0,5.495,4.461,9.955,9.961,9.955h123.127c5.499,0,9.96-4.46,9.96-9.955v-123.14C322.479,179.979,318.018,175.518,312.519,175.518z
\t\t M289.624,285.713h-77.34v-77.339h77.34V285.713z"/>
\t<path  d="M312.519,351.036H189.392c-5.5,0-9.961,4.461-9.961,9.955v123.14c0,5.494,4.461,9.954,9.961,9.954h123.127
\t\tc5.499,0,9.96-4.46,9.96-9.954v-123.14C322.479,355.497,318.018,351.036,312.519,351.036z M289.624,461.23h-77.34v-77.339h77.34
\t\tV461.23z"/>`
            },
            compile: {
              viewBox: "0 0 32 32",
              icon: `<path d="M29.6,12.7c-0.1-0.5-0.6-0.8-1.1-0.8c-1.2,0.2-2.4-0.4-3-1.5c-0.6-1-0.5-2.4,0.2-3.3c0.3-0.4,0.3-1-0.1-1.3
\tC24,4.3,22.1,3.2,20,2.6c-0.5-0.1-1,0.1-1.2,0.6C18.3,4.3,17.2,5,16,5s-2.3-0.7-2.8-1.8C13,2.7,12.5,2.4,12,2.6
\tC9.9,3.2,8,4.3,6.4,5.9C6,6.2,6,6.8,6.3,7.2c0.7,1,0.8,2.3,0.2,3.3c-0.6,1-1.8,1.6-3,1.5c-0.5-0.1-1,0.3-1.1,0.8
\tC2.1,13.8,2,14.9,2,16s0.1,2.2,0.4,3.3C2.5,19.8,3,20.1,3.5,20c1.2-0.2,2.4,0.4,3,1.5c0.6,1,0.5,2.4-0.2,3.3c-0.3,0.4-0.3,1,0.1,1.3
\tc1.6,1.5,3.6,2.7,5.7,3.3c0.5,0.1,1-0.1,1.2-0.6c0.5-1.1,1.6-1.8,2.8-1.8s2.3,0.7,2.8,1.8c0.2,0.4,0.5,0.6,0.9,0.6
\tc0.1,0,0.2,0,0.3,0c2.1-0.6,4.1-1.8,5.7-3.3c0.4-0.4,0.4-0.9,0.1-1.3c-0.7-1-0.8-2.3-0.2-3.3c0.6-1,1.8-1.6,3-1.5
\tc0.5,0.1,1-0.3,1.1-0.8c0.3-1.1,0.4-2.2,0.4-3.3S29.9,13.8,29.6,12.7z M11.7,18.3c0.4,0.4,0.4,1,0,1.4C11.5,19.9,11.3,20,11,20
\ts-0.5-0.1-0.7-0.3l-3-3c-0.4-0.4-0.4-1,0-1.4l3-3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L9.4,16L11.7,18.3z M18.9,12.4l-4,8
\tC14.7,20.8,14.4,21,14,21c-0.2,0-0.3,0-0.4-0.1c-0.5-0.2-0.7-0.8-0.4-1.3l4-8c0.2-0.5,0.8-0.7,1.3-0.4C18.9,11.4,19.1,12,18.9,12.4z
\t M24.7,16.7l-3,3C21.5,19.9,21.3,20,21,20s-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l2.3-2.3l-2.3-2.3c-0.4-0.4-0.4-1,0-1.4
\ts1-0.4,1.4,0l3,3C25.1,15.7,25.1,16.3,24.7,16.7z"/>`
            },
            beyond: {
              viewBox: `0 0 51.1 94.341`,
              icon: ` <g id="beyond-ales" transform="translate(0 58.014)">
        <path style="fill:#b6bdc7;"
              d="M134.558,86.353c-1.639,6.215-2.471,12.1-2.192,15.5.286,3.471,1.683,3.847,3.666.984a43.137,43.137,0,0,0,4.522-10.109A28.74,28.74,0,0,1,134.558,86.353Zm35.834,9.609a28.705,28.705,0,0,1-8.381,2.521,43.14,43.14,0,0,0-1.137,11.018c.286,3.469,1.684,3.843,3.666.981C166.485,107.674,168.7,102.165,170.392,95.962Zm-23.269.565c-2.3,8.985-3.763,17.18-3.931,21.955-.184,5.224,1.214,5.6,3.666.981,2.241-4.223,5.065-12.054,7.566-20.98a25.534,25.534,0,0,1-7.3-1.956Z"
              transform="translate(-132.313 -86.353)"/>
    </g>
    <g id="beyond-circle">
        <path style="fill:#d9684a;"
              d="M128.259,81.117q-.921-.031-1.833.006a24.566,24.566,0,1,0,1.833-.006Zm-.2,5.473a19.516,19.516,0,0,1,4.345.658,19.238,19.238,0,1,1-5.774-.655c.475-.019.95-.021,1.429,0Zm9.44-22.429a11.85,11.85,0,0,0-4.7,1.2,17.688,17.688,0,0,0-5.318,3.917,45.527,45.527,0,0,0-6.429,8.65,28.413,28.413,0,0,1,8.056-.687,32.179,32.179,0,0,1,3.335-4.186c3.645-3.672,6.623-3.975,8.134,2.181a32.7,32.7,0,0,1,.827,5.642,28.5,28.5,0,0,1,6.6,5.1,46.806,46.806,0,0,0-1.246-11.534A17.7,17.7,0,0,0,144.1,68.4c-1.208-1.671-2.838-3.456-4.981-4.03a6.208,6.208,0,0,0-1.63-.206Zm-9.218,16.448q-.94-.032-1.87.007a25.07,25.07,0,1,0,1.87-.006Zm-.209,5.586a19.913,19.913,0,0,1,4.434.672,19.632,19.632,0,1,1-5.892-.669c.484-.019.969-.021,1.458,0Z"
              transform="translate(-101.592 -64.162)"/>
    </g>`
            }
          };
          exports.ICONS = ICONS;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./icon",
        "from": "AppIcon",
        "name": "AppIcon"
      }, {
        "im": "./icon",
        "from": "AppIconButton",
        "name": "AppIconButton"
      }, {
        "im": "./icons",
        "from": "ICONS",
        "name": "ICONS"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AppIcon') && _export("AppIcon", AppIcon = require ? require('./icon').AppIcon : value);
        (require || prop === 'AppIconButton') && _export("AppIconButton", AppIconButton = require ? require('./icon').AppIconButton : value);
        (require || prop === 'ICONS') && _export("ICONS", ICONS = require ? require('./icons').ICONS : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBQ0E7VUFFTztVQUFXLE1BQU1BLE9BQU8sR0FBSUMsS0FBVSxJQUFJO1lBQzdDLE9BQ0lDLG9CQUFDQyxpQkFBVTtjQUFBLEdBQUtGLEtBQUs7Y0FBRUcsS0FBSyxFQUFFQztZQUFLLEVBQUc7VUFFOUMsQ0FBQztVQUFBQztVQUVNO1VBQVUsU0FBVUMsYUFBYSxDQUFDTixLQUFVO1lBQy9DLE9BQ0lDLG9CQUFDTSx1QkFBZ0I7Y0FBQSxHQUFLUCxLQUFLO2NBQUVHLEtBQUssRUFBRUM7WUFBSyxFQUFHO1VBRXBEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RPO1VBQ1AsTUFBTUEsS0FBSyxHQUFHO1lBQ1ZJLElBQUksRUFBRTtjQUNGQyxNQUFNLEVBQUUsV0FBVztjQUNuQkMsSUFBSSxFQUFFO2FBQ1Q7WUFDREMsTUFBTSxFQUFFO2NBQ0pDLE9BQU8sRUFBRSxhQUFhO2NBQ3RCRixJQUFJLEVBQUU7YUFDVDtZQUNERyxHQUFHLEVBQUU7Y0FDREQsT0FBTyxFQUFFLFdBQVc7Y0FDcEJGLElBQUksRUFBRTs7O2FBR1Q7WUFDREksTUFBTSxFQUFFO2NBQ0pGLE9BQU8sRUFBRSxtQkFBbUI7Y0FDNUJGLElBQUksRUFBRTthQUNUO1lBQ0RLLFNBQVMsRUFBRTtjQUNQTCxJQUFJLEVBQUUsNnZEQUE2dkQ7Y0FDbndERSxPQUFPLEVBQUU7YUFDWjtZQUNESSxRQUFRLEVBQUU7Y0FDTkosT0FBTyxFQUFFLFdBQVc7Y0FDcEJGLElBQUksRUFBRTs7Ozs7Ozs7Ozs7YUFXVDtZQUNETyxNQUFNLEVBQUU7Y0FDSkwsT0FBTyxFQUFFLFdBQVc7Y0FDcEJGLElBQUksRUFBRTthQUNUO1lBQ0RRLEtBQUssRUFBRTtjQUNITixPQUFPLEVBQUUsV0FBVztjQUNwQkYsSUFBSSxFQUFFO2FBQ1Q7WUFDRFMsUUFBUSxFQUFFO2NBQ05QLE9BQU8sRUFBRSxXQUFXO2NBQ3BCRixJQUFJLEVBQUU7YUFDVDtZQUNEVSxPQUFPLEVBQUU7Y0FDTFIsT0FBTyxFQUFFLGFBQWE7Y0FDdEJGLElBQUksRUFBRTthQUNUO1lBQ0RXLElBQUksRUFBRTtjQUNGVCxPQUFPLEVBQUUsV0FBVztjQUNwQkYsSUFBSSxFQUFFO2FBQ1Q7WUFDRFksVUFBVSxFQUFFO2NBQ1JWLE9BQU8sRUFBRSxXQUFXO2NBQ3BCRixJQUFJLEVBQUU7YUFDVDtZQUNEYSxTQUFTLEVBQUU7Y0FDUFgsT0FBTyxFQUFFLG1CQUFtQjtjQUM1QkYsSUFBSSxFQUFFO2FBQ1Q7WUFDRGMsT0FBTyxFQUFFO2NBQ0xaLE9BQU8sRUFBRSxtQkFBbUI7Y0FDNUJGLElBQUksRUFBRTs7O2FBR1Q7WUFDRGUsSUFBSSxFQUFFO2NBQ0ZiLE9BQU8sRUFBRSxXQUFXO2NBQ3BCRixJQUFJLEVBQUU7OzthQUdUO1lBQ0RnQixJQUFJLEVBQUU7Y0FDRmQsT0FBTyxFQUFFLFdBQVc7Y0FDcEJGLElBQUksRUFBRTs7OzthQUlUO1lBQ0RpQixJQUFJLEVBQUU7Y0FDRmYsT0FBTyxFQUFFLFdBQVc7Y0FDcEJGLElBQUksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFnQ1Q7WUFDRGtCLElBQUksRUFBRTtjQUNGaEIsT0FBTyxFQUFFLFlBQVk7Y0FDckJGLElBQUksRUFBRTs7O2FBR1Q7WUFDRG1CLFVBQVUsRUFBRTtjQUNSakIsT0FBTyxFQUFFLHFCQUFxQjtjQUM5QkYsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7YUFlVDtZQUNEb0IsT0FBTyxFQUFFO2NBQ0xsQixPQUFPLEVBQUUsV0FBVztjQUNwQkYsSUFBSSxFQUFFOzs7Ozs7Ozs7OzthQVdUO1lBQ0RxQixNQUFNLEVBQUU7Y0FDSm5CLE9BQU8sRUFBRSxpQkFBaUI7Y0FDMUJGLElBQUksRUFBRTs7Ozs7Ozs7Ozs7V0FXYjtVQUFDTCIsIm5hbWVzIjpbIkFwcEljb24iLCJwcm9wcyIsIlJlYWN0IiwiQmV5b25kSWNvbiIsImljb25zIiwiSUNPTlMiLCJleHBvcnRzIiwiQXBwSWNvbkJ1dHRvbiIsIkJleW9uZEljb25CdXR0b24iLCJjb3B5Iiwidml3Qm94IiwiaWNvbiIsImdpdGh1YiIsInZpZXdCb3giLCJhZGQiLCJzdGF0aWMiLCJsYW5ndWFnZXMiLCJzZXR0aW5ncyIsImZvbGRlciIsInBpbnVwIiwiYm9va21hcmsiLCJwcm9qZWN0IiwiYXBwcyIsIm5ld1Byb2plY3QiLCJwaG90b1NpemUiLCJzZXR0aW5nIiwiYmVsbCIsImVkaXQiLCJwYWdlIiwiY29kZSIsImRlcGVuZGVuY3kiLCJjb21waWxlIiwiYmV5b25kIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvaWNvbnMvY29kZS90cy9pY29uLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9pY29ucy9jb2RlL3RzL2ljb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=
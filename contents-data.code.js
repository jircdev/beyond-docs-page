System.register(["@beyond-js/kernel@0.1.0/bundle", "react@18.2.0", "@beyond/docs@1/components/next-links", "@beyond/docs@1/components/html", "@beyond/ui@1.0.0/link", "@beyond/docs@1/code", "@beyond-js/kernel@0.1.0/core", "@beyond-js/react-widgets@18.20.1/page", "@beyond/docs@1/docs/starting/intro.code", "@beyond/docs@1/docs/starting/quick-start.code", "@beyond/docs@1/docs/foundations/dev-server.code", "@beyond/docs@1/docs/starting/tutorial.code", "@beyond/docs@1/docs/starting/dashboard.code", "@beyond/docs@1/docs/basic/projects.code", "@beyond/docs@1/docs/basic/modules.code", "@beyond/docs@1/docs/basic/bundles.code", "@beyond/docs@1/docs/basic/widgets/intro.code", "@beyond/docs@1/docs/basic/widgets/rendering.code", "@beyond/docs@1/docs/basic/backend.code", "@beyond/docs@1/docs/basic/routing.code", "@beyond/docs@1/docs/basic/styles.code", "@beyond/docs@1/docs/basic/state.code", "@beyond/docs@1/docs/basic/processors.code", "@beyond/docs@1/docs/foundations/bee.code", "@beyond/docs@1/docs/foundations/hmr.code", "@beyond/docs@1/docs/foundations/distributions.code", "@beyond/docs@1/preload", "@beyond/docs@1/ui/icons", "@beyond-js/kernel@0.1.0/texts", "@beyond-js/kernel@0.1.0/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, bimport, __Bundle, __pkg, ims, NodeWidget, ContentsContainer, Controller, ContentsPage, useContent, BeyondName, RightAside, __beyond_pkg, hmr;
  _export({
    NodeWidget: void 0,
    ContentsContainer: void 0,
    Controller: void 0,
    ContentsPage: void 0,
    useContent: void 0,
    BeyondName: void 0,
    RightAside: void 0
  });
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondDocs1ComponentsNextLinks) {
      dependency_2 = _beyondDocs1ComponentsNextLinks;
    }, function (_beyondDocs1ComponentsHtml) {
      dependency_3 = _beyondDocs1ComponentsHtml;
    }, function (_beyondUi100Link) {
      dependency_4 = _beyondUi100Link;
    }, function (_beyondDocs1Code) {
      dependency_5 = _beyondDocs1Code;
    }, function (_beyondJsKernel010Core) {
      dependency_6 = _beyondJsKernel010Core;
    }, function (_beyondJsReactWidgets18201Page) {
      dependency_7 = _beyondJsReactWidgets18201Page;
    }, function (_beyondDocs1DocsStartingIntroCode) {
      dependency_8 = _beyondDocs1DocsStartingIntroCode;
    }, function (_beyondDocs1DocsStartingQuickStartCode) {
      dependency_9 = _beyondDocs1DocsStartingQuickStartCode;
    }, function (_beyondDocs1DocsFoundationsDevServerCode) {
      dependency_10 = _beyondDocs1DocsFoundationsDevServerCode;
    }, function (_beyondDocs1DocsStartingTutorialCode) {
      dependency_11 = _beyondDocs1DocsStartingTutorialCode;
    }, function (_beyondDocs1DocsStartingDashboardCode) {
      dependency_12 = _beyondDocs1DocsStartingDashboardCode;
    }, function (_beyondDocs1DocsBasicProjectsCode) {
      dependency_13 = _beyondDocs1DocsBasicProjectsCode;
    }, function (_beyondDocs1DocsBasicModulesCode) {
      dependency_14 = _beyondDocs1DocsBasicModulesCode;
    }, function (_beyondDocs1DocsBasicBundlesCode) {
      dependency_15 = _beyondDocs1DocsBasicBundlesCode;
    }, function (_beyondDocs1DocsBasicWidgetsIntroCode) {
      dependency_16 = _beyondDocs1DocsBasicWidgetsIntroCode;
    }, function (_beyondDocs1DocsBasicWidgetsRenderingCode) {
      dependency_17 = _beyondDocs1DocsBasicWidgetsRenderingCode;
    }, function (_beyondDocs1DocsBasicBackendCode) {
      dependency_18 = _beyondDocs1DocsBasicBackendCode;
    }, function (_beyondDocs1DocsBasicRoutingCode) {
      dependency_19 = _beyondDocs1DocsBasicRoutingCode;
    }, function (_beyondDocs1DocsBasicStylesCode) {
      dependency_20 = _beyondDocs1DocsBasicStylesCode;
    }, function (_beyondDocs1DocsBasicStateCode) {
      dependency_21 = _beyondDocs1DocsBasicStateCode;
    }, function (_beyondDocs1DocsBasicProcessorsCode) {
      dependency_22 = _beyondDocs1DocsBasicProcessorsCode;
    }, function (_beyondDocs1DocsFoundationsBeeCode) {
      dependency_23 = _beyondDocs1DocsFoundationsBeeCode;
    }, function (_beyondDocs1DocsFoundationsHmrCode) {
      dependency_24 = _beyondDocs1DocsFoundationsHmrCode;
    }, function (_beyondDocs1DocsFoundationsDistributionsCode) {
      dependency_25 = _beyondDocs1DocsFoundationsDistributionsCode;
    }, function (_beyondDocs1Preload) {
      dependency_26 = _beyondDocs1Preload;
    }, function (_beyondDocs1UiIcons) {
      dependency_27 = _beyondDocs1UiIcons;
    }, function (_beyondJsKernel010Texts) {
      dependency_28 = _beyondJsKernel010Texts;
    }, function (_beyondJsKernel010Styles) {
      dependency_29 = _beyondJsKernel010Styles;
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
          "vspecifier": "@beyond/docs@1/contents-data",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond/docs/components/next-links', dependency_2], ['@beyond/docs/components/html', dependency_3], ['@beyond/ui/link', dependency_4], ['@beyond/docs/code', dependency_5], ['@beyond-js/kernel/core', dependency_6], ['@beyond-js/react-widgets/page', dependency_7], ['@beyond/docs/docs/starting/intro.code', dependency_8], ['@beyond/docs/docs/starting/quick-start.code', dependency_9], ['@beyond/docs/docs/foundations/dev-server.code', dependency_10], ['@beyond/docs/docs/starting/tutorial.code', dependency_11], ['@beyond/docs/docs/starting/dashboard.code', dependency_12], ['@beyond/docs/docs/basic/projects.code', dependency_13], ['@beyond/docs/docs/basic/modules.code', dependency_14], ['@beyond/docs/docs/basic/bundles.code', dependency_15], ['@beyond/docs/docs/basic/widgets/intro.code', dependency_16], ['@beyond/docs/docs/basic/widgets/rendering.code', dependency_17], ['@beyond/docs/docs/basic/backend.code', dependency_18], ['@beyond/docs/docs/basic/routing.code', dependency_19], ['@beyond/docs/docs/basic/styles.code', dependency_20], ['@beyond/docs/docs/basic/state.code', dependency_21], ['@beyond/docs/docs/basic/processors.code', dependency_22], ['@beyond/docs/docs/foundations/bee.code', dependency_23], ['@beyond/docs/docs/foundations/hmr.code', dependency_24], ['@beyond/docs/docs/foundations/distributions.code', dependency_25], ['@beyond/docs/preload', dependency_26], ['@beyond/docs/ui/icons', dependency_27], ['@beyond-js/kernel/texts', dependency_28], ['@beyond-js/kernel/styles', dependency_29]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs@1/contents-data.code');
      ims = new Map();
      /***************************************
      INTERNAL MODULE: ./api/beyond-widget-api
      ***************************************/
      ims.set('./api/beyond-widget-api', {
        hash: 782821613,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondWidgetApi = BeyondWidgetApi;
          var React = require("react");
          var _nextLinks = require("@beyond/docs/components/next-links");
          var _html = require("@beyond/docs/components/html");
          var _link = require("@beyond/ui/link");
          function BeyondWidgetApi() {
            return React.createElement(React.Fragment, null, React.createElement("h1", {
              id: "controller"
            }, "Objeto ", React.createElement("span", {
              className: "inline"
            }, "BeyondWidget")), React.createElement("p", null, "El objeto ", React.createElement("span", {
              className: "inline"
            }, "BeyondWidget"), " es el objeto padre de los widgets y hereda directamente del objeto ", React.createElement(_link.Elink, {
              href: "https://developer.mozilla.org/es/docs/Web/API/HTMLElement"
            }, "HTMLElement"), " y ofrece una api que permite interactuar con el arbol de widgets de ", React.createElement(_html.BeyondName, null)), React.createElement("h3", {
              id: "properties"
            }, "Propiedades"), React.createElement("ul", {
              className: "properties-list"
            }, React.createElement("li", null, React.createElement(_html.ObjectProperty, {
              type: "NodeWidget",
              href: "/docs/api/NodeWidget"
            }, "wnode"), "Nodo html del widget."), React.createElement("li", null, React.createElement(_html.ObjectProperty, {
              type: "(BeyondWidget)[]",
              href: "/docs/api/BeyondWidget"
            }, "wchildren"), "Lista de widgets contenidos"), React.createElement("li", null, React.createElement(_html.ObjectProperty, {
              type: "BeyondWidget",
              href: "/docs/api/BeyondWidget"
            }, "parent"), "Widget contenedor, retorna ", React.createElement("span", {
              className: "inline"
            }, "undefined"), " sino existe un widget como contenedor.")), React.createElement(_nextLinks.NextLinks, {
              items: ['/docs/widgets/creation', '/docs/widgets/page']
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./api/i-widget-store
      ************************************/

      ims.set('./api/i-widget-store', {
        hash: 1324776608,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IWidgetStore = IWidgetStore;
          var React = require("react");
          function IWidgetStore() {
            return React.createElement(React.Fragment, null, React.createElement("h1", {
              id: "controller"
            }, "Interfaz ", React.createElement("span", {
              className: "inline"
            }, "IwidgetStore")));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./api/node-widget
      *********************************/

      ims.set('./api/node-widget', {
        hash: 3885588253,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NodeWidget = NodeWidget;
          var React = require("react");
          /*bundle*/
          function NodeWidget() {
            return React.createElement(React.Fragment, null, React.createElement("h1", {
              id: "node-widget",
              className: "inline"
            }, "NodeWidget"));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./api/uri
      *************************/

      ims.set('./api/uri', {
        hash: 3867039883,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.APIURI = APIURI;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _link = require("@beyond/ui/link");
          var _code = require("@beyond/docs/code");
          function APIURI() {
            return React.createElement(React.Fragment, null, React.createElement("h1", null, "Objeto ", React.createElement("span", {
              className: "inline"
            }, "URI")), React.createElement("h5", null, "Importaci\u00F3n"), React.createElement(_code.Code, {
              language: "js"
            }, `import {routing: {uri}} from "@beyond-js/kernel/routing/ts";`), React.createElement("p", null, "El objeto ", React.createElement("span", {
              className: "inline"
            }, "uri"), " provee una api equivalente a la del objeto", React.createElement("span", {
              className: "inline-code"
            }, "window.location"), ", pero con funcionalidades agregadas que aseguran el comportamiento correcto en el entorno web y m\u00F3vil."), React.createElement("h3", {
              id: "uri-properties"
            }, "Propiedades"), React.createElement("ul", null, React.createElement("li", null, React.createElement(_html.TypeProperty, {
              type: "string"
            }, "pathname"), "url actual, sin querystring ni hash"), React.createElement("li", null, React.createElement(_html.TypeProperty, {
              type: "string"
            }, "uri"), " url completa."), React.createElement("li", null, React.createElement(_html.TypeProperty, {
              type: "Map"
            }, "qs"), " Mapa con la lista de variables pasadas por querystring."), React.createElement("li", null, React.createElement(_html.TypeProperty, {
              type: "string"
            }, "hashtag"), " contiene el fragmento de la url posterior al '#'. Es equivalente a la propiedad ", React.createElement("div", {
              className: "inline-code"
            }, "hash"), " del objeto ", React.createElement("div", {
              className: "inline-code"
            }, "location"), " de la API Web."), React.createElement("li", null, React.createElement(_html.TypeProperty, {
              type: "Map"
            }, "vars"), " Mapa contenedor de las variables dinamicas agregadas en la definici\u00F3n de la url del ", React.createElement(_link.Link, {
              href: "/widgets#page"
            }, "Widget Page."))), React.createElement("h3", {
              id: "routing-history"
            }, React.createElement("div", {
              className: "inline-code"
            }, "routing.history ", React.createElement(_html.TypeProperty, {
              type: "BeyondHistory"
            }))), React.createElement("p", null, "El objeto ", React.createElement("span", {
              className: "inline-code"
            }, "BeyondHistory"), " maneja toda la informaci\u00F3n asociada a la navegaci\u00F3n del usuario en la sesi\u00F3n actual."), React.createElement("h4", null, "Propiedades"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "current:"), React.createElement(_html.TypeProperty, {
              type: "string"
            }), " url de navegacion actual."), React.createElement("li", null, React.createElement("strong", null, "initial:"), " ", React.createElement(_html.TypeProperty, {
              type: "number"
            }), " Hace referencia al indice asociado al historico de la api web del navegador sobre el cual comienza la navegacion adentro del proyecto ", React.createElement("span", {
              className: "beyond"
            }, "BeyondJS"), ". Para este manejo, beyond hace uso del objeto ", React.createElement("span", {
              className: "inline-code"
            }, "SessionStorage"), " de la api web, donde registra dos propiedades:", React.createElement("ul", null, React.createElement("li", null, React.createElement("span", {
              className: "inline-code"
            }, "__beyond_navigation_position")), React.createElement("li", null, React.createElement("span", {
              className: "inline-code"
            }, "__beyond_navigation_records")))), React.createElement("li", null, React.createElement("strong", null, "position"), " ", React.createElement(_html.TypeProperty, {
              type: "HistoryPosition"
            }), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "value"), React.createElement(_html.TypeProperty, {
              type: "number"
            }), "valor de la posici\u00F3n actual de navegaci\u00F3n en el historico propio de", React.createElement("span", {
              className: "beyond"
            }, "BeyondJS"), "."))), React.createElement("li", null, React.createElement("strong", null, "records"), React.createElement(_html.TypeProperty, {
              type: "HistoryRecords"
            }), ": Objeto de tipo Map que contiene todas las entradas de navegaci\u00F3n del usuario en la sesi\u00F3n actual.")));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./basic/template/application
      ********************************************/

      ims.set('./basic/template/application', {
        hash: 2491124076,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TemplateApplication = TemplateApplication;
          var React = require("react");
          var _link = require("@beyond/ui/link");
          var _code = require("@beyond/docs/code");
          const tplConfig = `
"application": {
    "processor": "sass",
    "path": "application",
    "files": [
      "*"
    ]
},
"global": {
    "processor": "sass",
    "path": "application",
    "files": [
      "*"
    ]
  }
`;
          function TemplateApplication() {
            return React.createElement(React.Fragment, null, React.createElement("p", null, "Las propiedades ", React.createElement("span", {
              className: "inline"
            }, "application"), " y ", React.createElement("span", {
              className: "inline"
            }, "global"), " reciben los mismos parametros de configuraci\u00F3n, pero tienen fines distintos."), React.createElement("h4", {
              className: "inline"
            }, "template.application"), React.createElement("p", null, "La propiedad de configuraci\u00F3n ", React.createElement("span", {
              className: "inline"
            }, "application"), " representa al archivo de estilos generales del proyecto y tiene como foco principal ser el lugar en donde se definan las propiedades css personalizadas y cualquier estilo que se requiera aplicar al documento general, externo a los widgets."), React.createElement("p", null, "Las ", React.createElement("strong", null, "custom properties"), " juegan un papel importante en el manejo de los widgets. Los componentes webs con Shadow DOM no se ven afectados por los estilos generales del sitio web en donde est\u00E1n incluidos. Sin embargo, las propiedades css si pueden ser accedidas y utilizadas."), React.createElement("div", {
              className: "block__note"
            }, "El manejo de estilos puede verse en detalle en la secci\u00F3n de ", React.createElement(_link.Link, {
              href: "/docs/styles/template"
            }, "Estilos en la plantilla"), "."), React.createElement("h4", {
              id: "template-global",
              className: "inline"
            }, "template.global"), React.createElement("p", null, "Tiene como finalidad suministrar al desarrollador la posibilidad de compartir c\u00F3digo entre widgets. Los archivos agregados en la configuraci\u00F3n de global, son compilados en un archivo de nombre ", React.createElement("span", {
              className: "inline"
            }, "global.css"), ", que es incluido en el shadow dom de cada widget para que tengan acceso a los estilos."), React.createElement("h3", null, "Parametros de configuraci\u00F3n"), React.createElement(_code.Code, null, tplConfig), React.createElement("p", null, "C\u00F3mo se puede ver en el c\u00F3digo anterior, la configuraci\u00F3n de ambas propiedades funciona igual, reciben un objeto con las siguientes propiedades: "), React.createElement("p", null, "C\u00F3mo se puede ver en el c\u00F3digo anterior, se puede definir tres propiedades"), React.createElement("ul", null, React.createElement("li", null, React.createElement("span", {
              className: "inline"
            }, "processor"), " Procesador a utilizar. Soporta ", React.createElement("span", {
              className: "inline"
            }, "sass"), " y ", React.createElement("span", {
              className: "inline"
            }, "less")), React.createElement("li", null, React.createElement("span", {
              className: "inline"
            }, "path"), " Directorio donde se encuentran los archivos, sino se define se buscaran todos los archivos relativos a la ubicaci\u00F3n del archivo de configuraci\u00F3n."), React.createElement("li", null, React.createElement("span", {
              className: "inline"
            }, "files"), ", el ", React.createElement("span", {
              className: "inline"
            }, "*"), " indica que se debe tomar en cuenta cualquier archivo adentro del path definido. Si se espec\u00EDfican archivos por nombre, s\u00F3lo se tomara en cuenta los archivos indicados.")));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./basic/template/config
      ***************************************/

      ims.set('./basic/template/config', {
        hash: 708446668,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TemplateConfig = TemplateConfig;
          var React = require("react");
          var _link = require("@beyond/ui/link");
          function TemplateConfig() {
            return React.createElement(React.Fragment, null, React.createElement("h2", {
              id: "config"
            }, "Configuraci\u00F3n"), React.createElement("p", null, "La configuraci\u00F3n de la plantilla, al igual que todos los elementos en ", React.createElement("span", {
              className: "beyond"
            }, "BeyondJS"), ", se maneja por medio de un archivo de configuraci\u00F3n, cuyo nombre, por convenci\u00F3n es ", React.createElement("span", {
              className: "inline"
            }, "template.json"), " y se ubica en la carpeta ", React.createElement("span", {
              className: "inline"
            }, "template"), " en la raiz del proyecto. Sin embargo, tanto el nombre como la ubicaci\u00F3n son valores configurables en el ", React.createElement(_link.Link, {
              href: "/project/config"
            }, "project.json"), "."), React.createElement("div", {
              className: "block__note"
            }, "La plantilla puede ser manejada desde el ", React.createElement(_link.Link, {
              href: "/docs/dashboard"
            }, "Dashboard"), " y cuando se crea un proyecto ya viene configurada la estructura por defecto para su manejo."), React.createElement("p", null, "A continuaci\u00F3n se explican las propiedades de configuraci\u00F3n"));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./basic/template/global
      ***************************************/

      ims.set('./basic/template/global', {
        hash: 3506004640,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TemplateGlobal = TemplateGlobal;
          var React = require("react");
          function TemplateGlobal() {
            return React.createElement(React.Fragment, null, React.createElement("h2", {
              id: "template-global"
            }, "template.global"));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./basic/template/index
      **************************************/

      ims.set('./basic/template/index', {
        hash: 1594386312,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TemplatePage = TemplatePage;
          var React = require("react");
          var _intro = require("./intro");
          var _config = require("./config");
          var _application = require("./application");
          var _overwrites = require("./overwrites");
          function TemplatePage() {
            return React.createElement(React.Fragment, null, React.createElement(_intro.TemplateIntro, null), React.createElement(_config.TemplateConfig, null), React.createElement(_application.TemplateApplication, null), React.createElement(_overwrites.TemplateOverwrites, null));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./basic/template/intro
      **************************************/

      ims.set('./basic/template/intro', {
        hash: 2655165194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TemplateIntro = TemplateIntro;
          var React = require("react");
          function TemplateIntro() {
            return React.createElement(React.Fragment, null, React.createElement("h1", null, "Plantilla de un protecto"), React.createElement("p", null, React.createElement("span", {
              className: "beyond"
            }, "BeyondJS"), " brinda una arquitectura simple pero robusta para el manejo de plantillas en los proyectos, la cual cuenta con las siguientes caracteristicas:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "Estilos: "), " Soporte integrado de preprocesadores LESS y SASS."), React.createElement("li", null, React.createElement("strong", null, "Propiedades CSS"), ": estructura b\u00E1sica de variables que permite trabajar con los componentes web eficientemente."), React.createElement("li", null, React.createElement("strong", null, "Estilo global"), ": Hoja de estilo global para el proyecto."), React.createElement("li", null, React.createElement("strong", null, "Sobreescritura"), ": Esto es una caracter\u00EDstica especial que permite redefinir estilos y textos de m\u00F3dulos existentes sin necesidad de tocar el c\u00F3digo original."), React.createElement("li", null, React.createElement("strong", null, "Separaci\u00F3n de c\u00F3digo"), ": Manejo independiente de los archivos de estilos con proceso automatizado para la generaci\u00F3n de archivos finales independientes y optimizados."), React.createElement("li", null, React.createElement("strong", null, "Light & Dark Theme"), " integrados.")));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./basic/template/overwrites
      *******************************************/

      ims.set('./basic/template/overwrites', {
        hash: 4172978664,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TemplateOverwrites = TemplateOverwrites;
          var React = require("react");
          function TemplateOverwrites() {
            return React.createElement(React.Fragment, null);
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./container
      ***************************/

      ims.set('./container', {
        hash: 3875016666,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentsContainer = ContentsContainer;
          var React = require("react");
          var _rightAside = require("./views/right-aside");
          /*bundle*/
          function ContentsContainer({
            children
          }) {
            return React.createElement("div", {
              className: "page__main-container"
            }, React.createElement("section", {
              className: "page__main-content"
            }, children), React.createElement(_rightAside.RightAside, null));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./contents
      **************************/

      ims.set('./contents', {
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

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 151775986,
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

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 169916878,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-widgets/page");
          var _contents = require("./contents");
          var _page2 = require("./page");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            createStore() {
              return new _contents.Contents(this.body);
            }
            get Widget() {
              return _page2.Page;
            }
          }
          exports.Controller = Controller;
        }
      });

      /********************
      INTERNAL MODULE: ./db
      ********************/

      ims.set('./db', {
        hash: 2357281591,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getContent = void 0;
          var _intro = require("@beyond/docs/docs/starting/intro.code");
          var _quickStart = require("@beyond/docs/docs/starting/quick-start.code");
          var _devServer = require("@beyond/docs/docs/foundations/dev-server.code");
          var _tutorial = require("@beyond/docs/docs/starting/tutorial.code");
          var _dashboard = require("@beyond/docs/docs/starting/dashboard.code");
          var _projects = require("@beyond/docs/docs/basic/projects.code");
          var _modules = require("@beyond/docs/docs/basic/modules.code");
          var _bundles = require("@beyond/docs/docs/basic/bundles.code");
          var _intro2 = require("@beyond/docs/docs/basic/widgets/intro.code");
          var _rendering = require("@beyond/docs/docs/basic/widgets/rendering.code");
          var _backend = require("@beyond/docs/docs/basic/backend.code");
          var _routing = require("@beyond/docs/docs/basic/routing.code");
          var _styles = require("@beyond/docs/docs/basic/styles.code");
          var _state = require("@beyond/docs/docs/basic/state.code");
          var _processors = require("@beyond/docs/docs/basic/processors.code");
          var _bee = require("@beyond/docs/docs/foundations/bee.code");
          var _hmr = require("@beyond/docs/docs/foundations/hmr.code");
          var _distributions = require("@beyond/docs/docs/foundations/distributions.code");
          var _uri = require("./api/uri");
          var _beyondWidgetApi = require("./api/beyond-widget-api");
          var _iWidgetStore = require("./api/i-widget-store");
          /*starting*/

          /*basic*/
          //projects

          // modules

          //widgets

          //styles

          // /*fundamentals*/

          /*API*/

          const getContent = (contentId, sub = undefined) => {
            const starting = {
              intro: _intro.DocsIntro,
              'quick-start': _quickStart.QuickStart,
              dashboard: _dashboard.DashboardPage,
              tutorial: {
                start: _tutorial.TutorialIntro,
                'first-module': _tutorial.TutorialFirstModule,
                backend: _tutorial.TutorialBackend,
                bridge: _tutorial.TutorialBridge,
                routing: _tutorial.TutorialRouting
              }
            };
            const basics = {
              projects: {
                intro: _projects.ProjectsIntro,
                create: _projects.ProjectCreate,
                structure: _projects.ProjectStructure,
                json: _projects.ProjectJson,
                import: _projects.ProjectImports,
                dependencies: _projects.ProjectDependencies
              },
              modules: {
                introduction: _modules.ModulesIntro,
                create: _modules.ModulesCreate,
                json: _modules.ModulesConfig
              },
              bundles: _bundles.Bundles,
              widgets: {
                default: _intro2.Widgets,
                definition: _intro2.WidgetsDefinition,
                controller: _intro2.WidgetController,
                layout: _intro2.WidgetLayout,
                page: _intro2.WidgetPage,
                rendering: _rendering.WidgetsRendering
              },
              state: {
                management: _state.StateManagement
              },
              styles: {
                template: _styles.StylesTemplatePage,
                modules: _styles.StylesModulesPage,
                imports: _styles.StylesImportsPage,
                themes: _styles.StylesThemePage
              },
              routing: _routing.RoutingPage,
              backend: _backend.BackendPage
            };
            const foundations = {
              processors: _processors.Processors,
              'dev-server': _devServer.DevServer,
              // glossary: Glossary,
              foundations: {
                bee: _bee.BEEPage,
                hmr: _hmr.HMRPage,
                distributions: _distributions.DistributionsPage
              }
              // multilanguage: MultiLanguage,
            };

            const api = {
              api: {
                uri: _uri.APIURI,
                BeyondWidget: _beyondWidgetApi.BeyondWidgetApi,
                iWidgetStore: _iWidgetStore.IWidgetStore
              }
            };
            const contents = {
              ...starting,
              ...basics,
              ...foundations,
              ...api
            };
            if (!contents.hasOwnProperty(contentId) || sub && !contents[contentId].hasOwnProperty(sub)) {
              return {
                id: contentId,
                control: contents.error404
              };
            }
            if (!contents[contentId]) {
              console.log('error', contents[contentId], contentId, contents);
              return Error404;
            }
            // the constructor is 'Object' when the contents[contentId] value is a plain object of subitems on contents.
            if (contents[contentId].constructor.name === 'Object' && !sub) {
              return {
                id: contentId,
                control: contents[contentId].default
              };
            }
            return {
              id: contentId,
              control: sub ? contents[contentId][sub] : contents[contentId]
            };
          };
          exports.getContent = getContent;
        }
      });

      /**********************
      INTERNAL MODULE: ./page
      **********************/

      ims.set('./page', {
        hash: 1908768492,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentsPage = ContentsPage;
          var React = require("react");
          var _useContent = require("./use-content");
          var _preload = require("@beyond/docs/preload");
          var _context = require("./context");
          var _container = require("./container");
          /*bundle*/
          function ContentsPage({
            component,
            contentId,
            sub,
            hmrChanged
          }) {
            const [content, fetching, texts] = (0, _useContent.useContent)(contentId, sub, hmrChanged);
            const isFetching = fetching || !texts;
            if (isFetching) {
              return React.createElement("div", {
                className: "page__main-container is-fetching"
              }, React.createElement("section", {
                className: "page__main-content"
              }, React.createElement(_preload.PreloadPage, null), React.createElement("div", null)));
            }
            const Control = content.control;
            return React.createElement(_context.DocsContext.Provider, {
              value: {
                texts: texts,
                component
              }
            }, React.createElement(_container.ContentsContainer, null, React.createElement(Control, null)));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./quiz
      **********************/

      ims.set('./quiz', {
        hash: 1848227067,
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

      /*****************************
      INTERNAL MODULE: ./use-content
      *****************************/

      ims.set('./use-content', {
        hash: 856988562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useContent = useContent;
          var React = require("react");
          var _db = require("./db");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          /*bundle*/
          function useContent(contentId, sub, hmrChanged) {
            const [content, setContent] = React.useState((0, _db.getContent)(contentId, sub));
            const [fetching, setFetching] = React.useState(true);
            const [updated, setUpdated] = React.useState(hmrChanged);
            const [ready, setReady] = React.useState(false);
            const [texts, setTexts] = React.useState({});
            React.useEffect(() => {
              const modelTexts = new _texts.CurrentTexts(_beyond_context.module.specifier, true);
              const triggerEvent = () => {
                setReady(modelTexts.ready);
                setTexts(modelTexts.value);
              };
              modelTexts.bind('change', triggerEvent);
              triggerEvent();
              return () => {
                modelTexts.unbind('change', triggerEvent);
              };
            }, [contentId]);
            React.useEffect(() => {
              setFetching(true);
              setContent((0, _db.getContent)(contentId, sub));
              if (updated === hmrChanged) {
                setFetching(false);
                return;
              }
              window.setTimeout(() => {
                setUpdated(hmrChanged);
                setFetching(false);
              }, 30);
            }, [contentId, hmrChanged]);
            const isFetching = fetching && !ready;
            return [content, isFetching, texts];
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/beyond
      ******************************/

      ims.set('./views/beyond', {
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

      /*****************************************
      INTERNAL MODULE: ./views/concepts/concepts
      *****************************************/

      ims.set('./views/concepts/concepts', {
        hash: 2461234051,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Concepts = Concepts;
          var React = require("react");
          function Concepts() {
            return React.createElement(React.Fragment, null, React.createElement("h1", null, "Concepts"));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/concepts/glossary/glossary
      **************************************************/

      ims.set('./views/concepts/glossary/glossary', {
        hash: 544606102,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Glossary = Glossary;
          var React = require("react");
          var _link = require("@beyond/ui/link");
          var _html = require("@beyond/docs/components/html");
          function Glossary() {
            return React.createElement(React.Fragment, null, React.createElement("h1", null, "Glosario de t\u00E9rminos"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "EAC "), "(\"External Array Configuration\") Los objetos cuyas propiedades son EAC pueden esperar dos valores, Un arreglo o una cadena de texto. Si se pasa una cadena de texto, ", React.createElement(_html.BeyondName, null), " toma el valor como una ruta relativa para la ubicaci\u00F3n del archivo externo de configuraci\u00F3n. Arreglo de configuraci\u00F3n que puede encontrarse en un archivo independiente y cuyos elementos son de tipo", React.createElement(_link.Link, {
              href: "/glossary#eoc"
            }, "EOC.")), React.createElement("li", null, React.createElement("strong", null, "EOC "), "(\"External Object Configuration\") Objeto de configuraci\u00F3n que puede ser includo de forma directa como valor o ser referenciado como un archivo externo. Los objetos cuyas propiedades son EOC pueden esperar dos valores: un objeto o una cadena de texto. Si la propiedad tiene definido como valor una cadena de texto, ", React.createElement(_html.BeyondName, null), " toma el valor como una ruta relativa para la ubicaci\u00F3n del archivo externo de configuraci\u00F3n.")));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/concepts/server/index
      *********************************************/

      ims.set('./views/concepts/server/index', {
        hash: 3427900943,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Server = Server;
          var React = require("react");
          var _code = require("@beyond/docs/code");
          var _html = require("@beyond/docs/components/html");
          const tpl1 = `{
  "applications": "projects.json",
  "bundles": {},
  "libraries": []
}`;
          function Server() {
            return React.createElement(React.Fragment, null, React.createElement("h1", {
              id: "dev-server"
            }, "Servidor de desarrollo"), React.createElement("p", null, "El servidor de desarrollo de ", React.createElement("span", {
              className: "beyond"
            }, "Beyond"), " se configura por medio de un archivo json de configuraci\u00F3n cuyo nombre debe ser ", React.createElement("code", {
              className: "inline-code"
            }, "beyond.json"), ". Este documento es gestionado de forma autom\u00E1tica por el dashboard de beyond, por tanto no es necesario configurarlo para empezar a trabajar en un proyecto, la presente documentaci\u00F3n es para comprender como hacer configuraciones de forma manual en caso que se desee."), React.createElement("h2", null, React.createElement("code", {
              className: "inline-code"
            }, "beyond.json")), React.createElement(_code.Code, {
              language: "json"
            }, tpl1), React.createElement("h3", null, "Propiedades"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "applications"), React.createElement(_html.TypeProperty, {
              type: "AOC",
              href: "/aoc"
            }), ": Recibe un arreglo con la lista de proyectos o aplicaciones configuradas para que ", React.createElement("span", {
              className: "beyond"
            }, "Beyond"), " pueda leearlas y levantarlas. Este archivo, es gestionado por ", React.createElement("span", {
              className: "beyond"
            }, "Beyond"), " si se hace uso del dashboard."), React.createElement("li", null, React.createElement("strong", null, "bundles"), " ", React.createElement(_html.TypeProperty, {
              type: "object"
            }), ": Permite configurar la inclusi\u00F3n de bundles creados por el programador."), React.createElement("li", null, React.createElement("strong", null, "libraries"), " ", React.createElement(_html.TypeProperty, {
              type: "AOC",
              href: "/aoc"
            }), ": Arreglo de configuraci\u00F3n de librerias ", React.createElement("span", {
              className: "beyond"
            }, "Beyond"), " a utilizar.")));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/content/content
      ***************************************/

      ims.set('./views/content/content', {
        hash: 3068395046,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Content = Content;
          function Content({
            id
          }) {}
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/content/highlight-code
      **********************************************/

      ims.set('./views/content/highlight-code', {
        hash: 3356208120,
        creator: function (require, exports) {
          // import * as React from 'react';
          // import {
          //     Options, registerLanguages, htmlRender, init, process,
          //     Highlighter, JavaScript, SCSS, Markdown
          // } from "highlight-ts";
          //
          // registerLanguages(JavaScript, SCSS, Markdown)
          //
          //
          // export function HCode({language, code}) {
          //
          //     // @ts-ignore
          //     const [highlighter, setHighlighter] = React.useState<Highlighter>();
          //     React.useEffect(() => {
          //         const options: Options = {classPrefix: ''};
          //         const instance: Highlighter<string> = init(htmlRender, options);
          //         setHighlighter(instance);
          //     }, [])
          //
          //     if (!highlighter) return;
          //     const html = process(highlighter, code, [language]);
          //     return (
          //         <pre>
          //             {html}
          //         </pre>
          //     )
          // }
          "use strict";
        }
      });

      /************************************
      INTERNAL MODULE: ./views/content/note
      ************************************/

      ims.set('./views/content/note', {
        hash: 3233131723,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Note = Note;
          var React = require("react");
          function Note({
            children
          }) {
            return React.createElement("div", {
              className: "block__note"
            }, children);
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/right-aside/index
      *****************************************/

      ims.set('./views/right-aside/index', {
        hash: 1424013046,
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
          const RightAside = ({}) => {
            const {
              component,
              texts: {
                rightAside: {
                  title
                }
              }
            } = (0, _context.useDocsContext)();
            const [titles, setTitles] = React.useState([]);
            const ref = React.useRef(null);
            React.useEffect(() => {
              const items = Array.from(ref.current.querySelectorAll('li'));
              const callback = entries => {
                const check = item => {
                  const {
                    top
                  } = item.boundingClientRect;
                  if (top < 500) {
                    const {
                      target
                    } = item;
                    const listItem = items.find(item => item.dataset.id === target.id);
                    const active = items.find(item => item.classList.contains('item--active'));
                    if (active) active.classList.remove('item--active');
                    listItem.classList.add('item--active');
                  }
                };
                entries.forEach(check);
              };
              const observer = new IntersectionObserver(callback, {
                root: null,
                rootMargin: '-50% 0% -50% 0%',
                threshold: 0
              });
              titles.forEach(item => observer.observe(item));
            });
            React.useEffect(() => {
              window?.setTimeout(() => {
                const titles = Array.from(component.shadowRoot.querySelectorAll('h1,h2,h3'));
                setTitles(titles);
              }, 100);
              const body = document.querySelector('body');
              body.scroll({
                top: 0,
                left: 0,
                behavior: "smooth"
              });
            }, []);
            if (!titles) return null;
            const output = titles.map((item, i) => {
              return React.createElement(_item.RightAsideItem, {
                key: `${item.id}.${i}`,
                item: item,
                container: component.shadowRoot
              });
            });
            return React.createElement("aside", {
              className: "docs__aside-navbar",
              ref: ref
            }, React.createElement("div", {
              className: "aside__container"
            }, React.createElement("h4", null, title), React.createElement("ol", null, output)));
          };
          exports.RightAside = RightAside;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/right-aside/item
      ****************************************/

      ims.set('./views/right-aside/item', {
        hash: 2178272258,
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
            container
          }) {
            const onClick = event => {
              event.preventDefault();
              const target = container.getElementById(item.id);
              if (!target) {
                console.log('no se consigue...', item.id);
                return;
              }
              const body = document.querySelector('body');
              body.scroll({
                top: target.offsetTop,
                left: 0,
                behavior: "smooth"
              });
            };
            return React.createElement("li", {
              onClick: onClick,
              key: item.innerText,
              "data-id": item.id
            }, React.createElement(_link.Link, {
              href: `#${item.id}`
            }, item.innerText));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./views/ssr
      ***************************/

      ims.set('./views/ssr', {
        hash: 3280070000,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SSRPage = SSRPage;
          var React = require("react");
          function SSRPage() {
            return React.createElement("div", {
              className: "content"
            }, React.createElement("h1", null, "Objeto History"), React.createElement("ul", null, React.createElement("li", null, "current: url de navegacion actual"), React.createElement("li", null, "initial: Hace referencia al indice asociado al historico de la api web del navegador sobre el cual comienza la navegacion adentro del proyecto beyond. beyond hace uso del session_storage", React.createElement("ul", null, React.createElement("li", null, "__beyond_navigation_position"), React.createElement("li", null, "__beyond_navigation_records"))), React.createElement("li", null, "History state", React.createElement("ul", null, React.createElement("li", null, "__beyond_navigation_position: posicion del stado del navegador que registra el indice del elemento en el cual la navegaci\u00F3n queda registrada en el history de beyond."))), React.createElement("li", null, "position: HistoryPosition:"), React.createElement("li", null, "value: posicion en la cual se encuentra la navegaci\u00F3n adentro de los registros de beyond."), React.createElement("li", null, "following: proxima navegaci\u00F3n dentro del historico de beyond."), React.createElement("li", null, "previous: navegacion previa adentro de los registros de beyond.")));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./views/tbd
      ***************************/

      ims.set('./views/tbd', {
        hash: 830915190,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TBD = TBD;
          var React = require("react");
          function TBD() {
            return React.createElement("div", {
              className: "content svg--content"
            }, React.createElement("svg", {
              className: "tbd_content",
              version: "1.1",
              viewBox: "0 0 1210.42 535.25"
            }, React.createElement("path", {
              className: "svg_tbd_st0",
              d: "M1179.17,397.09c0-0.67-36.3-1.29-98.08-1.8c-0.43,0.9-2.43,1.15-3.28,1.77c-0.68,0.49-2.16,1.37-2.86,1.77\r\n\tC1139.17,398.31,1179.17,397.77,1179.17,397.09z"
            }), React.createElement("path", {
              className: "svg_tbd_st0",
              d: "M79.19,395.79c-30.8,0.39-47.96,0.83-47.96,1.29c0,0.48,18.27,0.93,50.94,1.33\r\n\tC81.15,397.61,80.15,396.74,79.19,395.79z"
            }), React.createElement("g", {
              id: "left-boxes"
            }, React.createElement("polygon", {
              className: "svg_tbd_st1",
              points: "131.09,283.54 112.34,291.17 112.34,313.13 93.46,304.66 93.46,281.93 110.8,276.21 "
            }), React.createElement("path", {
              className: "svg_tbd_st0",
              d: "M273.19,267.15c0-0.05-0.01-0.1-0.01-0.15c0-0.05,0-0.1-0.01-0.15c0,0,0-0.01,0-0.01\r\n\tc-0.01-0.04-0.03-0.07-0.04-0.11c-0.02-0.05-0.03-0.11-0.06-0.16c-0.02-0.04-0.05-0.08-0.08-0.12c-0.03-0.04-0.05-0.09-0.09-0.13\r\n\tc-0.04-0.04-0.08-0.07-0.12-0.11c-0.03-0.03-0.05-0.06-0.09-0.08c0,0-0.01,0-0.01-0.01c-0.04-0.03-0.09-0.05-0.14-0.07\r\n\tc-0.04-0.02-0.08-0.05-0.12-0.06c-0.01,0-0.01-0.01-0.02-0.01l-25.33-8.35c-0.05,0.78-0.24,1.55-0.54,2.26l22.32,7.36l-103.71,46.53\r\n\tl-98.6-47.06l27.52-8.77c0.04-0.92,0.3-1.84,0.81-2.69l-31.82,10.14c-0.01,0-0.01,0.01-0.02,0.01c-0.03,0.01-0.06,0.03-0.09,0.04\r\n\tc-0.06,0.03-0.12,0.05-0.18,0.09c-0.01,0-0.01,0-0.02,0.01c-0.03,0.02-0.05,0.04-0.07,0.06c-0.05,0.04-0.09,0.07-0.13,0.12\r\n\tc-0.03,0.03-0.05,0.07-0.08,0.11c-0.03,0.04-0.06,0.08-0.09,0.13c-0.02,0.04-0.04,0.09-0.05,0.13c-0.01,0.04-0.03,0.07-0.04,0.11\r\n\tc0,0.01,0,0.02,0,0.04c-0.01,0.04-0.01,0.09-0.02,0.14c-0.01,0.05-0.01,0.11-0.01,0.16c0,0.01,0,0.02,0,0.04l8.67,123.68\r\n\tc0.02,0.36,0.21,0.68,0.51,0.88l93.62,62.42c0.1,0.07,0.21,0.11,0.32,0.15c0,0,0.01,0,0.01,0c0.1,0.03,0.21,0.04,0.31,0.04\r\n\tc0.1,0,0.2-0.02,0.3-0.04c0.03-0.01,0.06-0.02,0.09-0.04c0.05-0.02,0.11-0.03,0.16-0.06c0.01-0.01,0.02-0.02,0.03-0.02\r\n\tc0.01-0.01,0.02-0.01,0.03-0.01l98.83-61.26c0.32-0.2,0.52-0.54,0.54-0.91L273.19,267.15C273.19,267.16,273.19,267.16,273.19,267.15\r\n\tz M73.19,389.54L64.7,268.41l99.27,47.38l0.57,134.65L73.19,389.54z M263.41,390.68l-96.56,59.86l-0.57-134.73l104.49-46.88\r\n\tL263.41,390.68z"
            }), React.createElement("polygon", {
              className: "svg_tbd_st1",
              points: "112.72,395.59 95.39,384.8 95.54,404.45 112.34,415.62 "
            }), React.createElement("path", {
              className: "svg_tbd_st1",
              d: "M133.93,200.76c-1.34-1.05-4.89-0.97-6.7-1.3c-2.16-0.39-4.23-1.14-6.03-2.34v13.63l14.16,4.62l0.79-13.38\r\n\tC135.37,201.71,134.62,201.29,133.93,200.76z"
            }), React.createElement("path", {
              className: "svg_tbd_st0",
              d: "M251.41,185.48c0-0.02,0-0.04,0-0.06c0-0.01-0.01-0.01-0.01-0.02c-0.02-0.11-0.05-0.21-0.1-0.31\r\n\tc-0.01-0.02-0.02-0.04-0.03-0.05c-0.04-0.07-0.09-0.14-0.15-0.21c-0.02-0.03-0.05-0.05-0.08-0.07c-0.03-0.02-0.05-0.05-0.08-0.07\r\n\tc-0.03-0.02-0.07-0.04-0.1-0.06c-0.03-0.02-0.06-0.04-0.09-0.05c-0.09-0.04-0.19-0.08-0.28-0.1c-0.01,0-0.01-0.01-0.02-0.01\r\n\tl-11.39-1.93c-0.06,0.38-0.13,0.77-0.25,1.18c-0.11,0.38-0.24,0.73-0.4,1.05l7.06,1.2l-68.85,22.71l-22.39-5.52\r\n\tc-0.84,0.81-2,1.35-3.46,1.43c-0.04,0.02-0.08,0.05-0.13,0.07l24.86,6.13l-0.37,86.45l-79.03-28.84L92,190.18l45.71,11.27\r\n\tc-0.31-0.18-0.62-0.36-0.93-0.53c-0.05-0.02-0.17-0.08-0.29-0.14c0,0,0,0,0,0c-0.05,0-0.11,0.01-0.19,0.02\r\n\tc-2.32,0.19-4.22-1.37-5.15-3.35l-35.39-8.73l15.79-3.63c-0.75-0.5-1.33-1.19-1.72-1.98l-19.32,4.44c-0.17,0.04-0.33,0.12-0.46,0.23\r\n\tc0,0-0.01,0-0.02,0.01c0,0,0,0,0,0.01c-0.13,0.11-0.23,0.24-0.3,0.4c-0.01,0.01-0.01,0.02-0.02,0.04c0,0.01-0.01,0.02-0.01,0.02\r\n\tc-0.06,0.15-0.08,0.3-0.07,0.45c0,0.01-0.01,0.02-0.01,0.03l4.24,80.52c0.02,0.46,0.32,0.87,0.76,1.03l81.29,29.67\r\n\tc0.13,0.05,0.26,0.07,0.4,0.07h0c0,0,0,0,0,0c0.15,0,0.3-0.04,0.44-0.1c0.02-0.01,0.04,0,0.06-0.01l71.28-33.9\r\n\tc0.39-0.19,0.64-0.57,0.66-1l2.7-79.37C251.43,185.59,251.42,185.54,251.41,185.48z M246.44,264.23l-68.98,32.81l0.37-86.33\r\n\tl71.22-23.49L246.44,264.23z"
            }), React.createElement("polygon", {
              className: "svg_tbd_st1",
              points: "119.76,277.02 133.99,282.21 134.01,267.96 119.76,263.34 "
            }), React.createElement("polygon", {
              className: "svg_tbd_st1",
              points: "217.14,116.83 130.06,128.2 129.68,143.8 117.35,138.02 117.54,123.19 204.04,112.21 "
            }), React.createElement("path", {
              className: "svg_tbd_st0",
              d: "M241.41,124.58c-0.01-0.13-0.04-0.26-0.08-0.38c-0.01-0.03-0.03-0.05-0.04-0.08c-0.05-0.11-0.12-0.21-0.21-0.3\r\n\tc-0.02-0.02-0.02-0.04-0.04-0.06c-0.01-0.01-0.03-0.02-0.05-0.03c-0.11-0.09-0.23-0.17-0.37-0.22l-0.01,0h0L188.46,106\r\n\tc-0.16-0.05-0.32-0.07-0.48-0.05l-90.78,9.14c0,0,0,0-0.01,0c-0.1,0.01-0.2,0.04-0.3,0.07c-0.03,0.01-0.05,0.03-0.08,0.04\r\n\tc-0.05,0.03-0.11,0.05-0.16,0.08c-0.01,0.01-0.02,0.02-0.03,0.02c-0.03,0.02-0.06,0.05-0.09,0.08c-0.05,0.04-0.09,0.09-0.13,0.14\r\n\tc-0.02,0.03-0.04,0.06-0.07,0.1c-0.03,0.05-0.06,0.11-0.09,0.17c-0.01,0.02-0.02,0.04-0.03,0.06c-0.01,0.02-0.01,0.04-0.01,0.06\r\n\tc-0.02,0.06-0.03,0.12-0.04,0.19c0,0.04-0.01,0.08-0.01,0.12c0,0.02-0.01,0.03-0.01,0.05l1.19,60.96c0.01,0.4,0.22,0.76,0.56,0.97\r\n\tl46.98,28.57c0.04,0.03,0.09,0.04,0.14,0.06c0.03,0.02,0.07,0.03,0.1,0.04c0.12,0.04,0.24,0.06,0.36,0.06c0.07,0,0.13-0.01,0.2-0.02\r\n\tl92.37-16.38c0.54-0.1,0.93-0.55,0.95-1.1l2.39-64.77c0-0.01-0.01-0.02-0.01-0.03C241.4,124.61,241.41,124.6,241.41,124.58z\r\n\t M145.65,134.11l-43.49-17.2l85.8-8.64l46.98,15.79L145.65,134.11z M98.5,117.95l45.83,18.12v67.64l-44.68-27.18L98.5,117.95z\r\n\t M146.65,204.39v-68.07l92.4-10.4l-2.31,62.49L146.65,204.39z"
            })), React.createElement("polygon", {
              className: "svg_tbd_st1",
              points: "115.33,186.07 127.63,193.56 127.65,179.92 115.33,174.14 "
            }), React.createElement("rect", {
              x: "-12.23",
              y: "-3021.96",
              width: "1298.72",
              height: "146.05"
            }), React.createElement("text", {
              transform: "matrix(1 0 0 1 -12.2265 -2877.6646)"
            }, "to be defined"), React.createElement("g", {
              id: "right-boxes"
            }, React.createElement("polygon", {
              className: "svg_tbd_st2",
              points: "1042.61,411.33 1042.61,396.99 1058.78,390.83 1058.61,404.33 \t"
            }), React.createElement("path", {
              className: "svg_tbd_st0",
              d: "M1090.43,333.43c0-0.01,0-0.02,0-0.04c0-0.01-0.01-0.02-0.01-0.03c-0.02-0.13-0.06-0.25-0.12-0.36\r\n\t\tc-0.01-0.02-0.02-0.04-0.03-0.05c-0.06-0.09-0.13-0.18-0.23-0.25c-0.01-0.01-0.03-0.01-0.04-0.02c-0.01,0-0.01-0.01-0.02-0.02\r\n\t\tl-6.42-4.19c-0.34,0.58-0.8,1.1-1.33,1.52l4.89,3.2l-8.17,2.6c-0.06,0.36-0.16,0.73-0.32,1.12c-0.18,0.46-0.38,0.87-0.58,1.26\r\n\t\tl10.33-3.29l-1.93,57.26l-82.72,32.57l-1.29-62.48l34.57-11c-1.12-0.31-2.26-0.62-3.48-0.86c-0.08-0.02-0.15-0.04-0.23-0.06\r\n\t\tl-31.62,10.06l-24.97-23.5c-0.77,0.34-1.61,0.5-2.44,0.45l26.15,24.61l1.27,61.39l-44.61-53.53v-48.66l1.27,1.2\r\n\t\tc-0.28-0.59-0.44-1.17-0.49-1.73c-0.34-1.01-0.38-2.13-0.12-3.16l-1.87,0.4c-0.02,0-0.04,0.02-0.06,0.03\r\n\t\tc-0.04,0.01-0.09,0.02-0.13,0.03c-0.05,0.02-0.09,0.06-0.14,0.08c-0.02,0.02-0.05,0.03-0.07,0.04c-0.1,0.08-0.18,0.17-0.24,0.27\r\n\t\tc0,0.01-0.01,0.01-0.01,0.01c-0.01,0.01-0.01,0.03-0.02,0.05c-0.05,0.09-0.08,0.19-0.1,0.29c0,0.03-0.01,0.06-0.01,0.1\r\n\t\tc0,0.02-0.01,0.05-0.01,0.07v51.33c0,0.23,0.08,0.46,0.23,0.64l46.67,56c0,0,0,0,0,0c0.09,0.11,0.2,0.19,0.33,0.26\r\n\t\tc0,0,0.01,0,0.01,0c0.13,0.06,0.28,0.1,0.43,0.1c0.12,0,0.24-0.02,0.35-0.06c0,0,0,0,0.01,0c0,0,0.01,0,0.01,0l84.67-33.33\r\n\t\tc0.37-0.15,0.62-0.5,0.63-0.9l2-59.33C1090.44,333.49,1090.44,333.46,1090.43,333.43z"
            }), React.createElement("polygon", {
              className: "svg_tbd_st2",
              points: "1089.28,304.99 1088.61,321.49 1082.94,330.49 1082.94,310.33 \t"
            }), React.createElement("path", {
              className: "svg_tbd_st0",
              d: "M1151.86,213.67c-0.29-0.33-0.76-0.43-1.16-0.25l-45.89,20.55l11.24-32.31c0.1-0.29,0.06-0.61-0.1-0.86\r\n\t\tc-0.16-0.26-0.44-0.43-0.74-0.46l-95.5-10c-0.41-0.04-0.79,0.16-0.98,0.52l-17.34,31.78l-33.55-35.99\r\n\t\tc-0.31-0.33-0.79-0.41-1.19-0.21l-53.5,27.5c-0.28,0.14-0.47,0.41-0.53,0.71c-0.06,0.31,0.04,0.62,0.24,0.85l26.88,29.51\r\n\t\tl-20.52-2.67c-0.47-0.06-0.93,0.22-1.08,0.68c-0.15,0.46,0.05,0.96,0.47,1.19l31.22,17.25l8.61,72.82\r\n\t\tc0.05,0.42,0.36,0.77,0.78,0.86l106,23.33c0.07,0.02,0.14,0.02,0.21,0.02c0,0,0,0,0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0\r\n\t\tc0.1,0,0.19-0.02,0.29-0.05c0.03-0.01,0.05-0.02,0.08-0.03c0.07-0.03,0.13-0.06,0.2-0.11c0.01-0.01,0.03-0.01,0.05-0.03\r\n\t\tc0.01,0,0.01-0.01,0.02-0.02c0.08-0.06,0.15-0.14,0.21-0.23l32.67-50.17c0.1-0.15,0.16-0.33,0.16-0.52l1.27-43.02l28.13-12.09\r\n\t\tc0.19-0.08,0.35-0.22,0.46-0.39l23-37C1152.19,214.48,1152.15,214,1151.86,213.67z M966.89,188.56l33.19,35.6l-35.16,24.13\r\n\t\tl-22.1-2.88l-27.6-30.29L966.89,188.56z M1113.75,202.19l-11.32,32.55l-99.23-11.24l16.97-31.11L1113.75,202.19z M1101.15,236.61\r\n\t\tl-32.42,38.72l-14.56-15.19c-0.16-0.16-0.37-0.27-0.59-0.3l-85.67-11.16l33.97-23.31L1101.15,236.61z M1052.97,261.77l13.11,13.68\r\n\t\tL951.1,259.86L924.2,245L1052.97,261.77z M951.92,261.99l115.82,15.7l-3.25,78.57l-104.14-22.92L951.92,261.99z M1066.59,353.89\r\n\t\tl3.16-76.4l28.6-12.29l-1.23,41.81L1066.59,353.89z M1072.24,274.25l31.49-37.61l44.8-20.07l-21.11,33.96L1072.24,274.25z"
            }), React.createElement("g", null, React.createElement("rect", {
              x: "1000.72",
              y: "224.33",
              className: "svg_tbd_st0",
              width: "2",
              height: "30.25"
            }))), React.createElement("path", {
              className: "svg_tbd_st3",
              d: "M575.17,306.49v14.43h-59.09v45.82h47.97v14.43h-47.97v61.23h-17.74V306.49H575.17z"
            }), React.createElement("g", null, React.createElement("path", {
              d: "M1471.52-3141.8v6.88h-17.67v57.93h-8.46v-57.93h-17.76v-6.88H1471.52z"
            }), React.createElement("path", {
              d: "M1494.85-3080.57c-4.96-2.82-8.88-6.76-11.76-11.81c-2.88-5.05-4.32-10.74-4.32-17.06c0-6.32,1.44-12.01,4.32-17.06\r\n\t\tc2.88-5.05,6.8-8.99,11.76-11.81c4.96-2.82,10.44-4.23,16.46-4.23c6.07,0,11.59,1.41,16.55,4.23c4.96,2.82,8.86,6.74,11.72,11.76\r\n\t\tc2.85,5.02,4.28,10.72,4.28,17.11c0,6.39-1.43,12.09-4.28,17.11c-2.85,5.02-6.76,8.94-11.72,11.76\r\n\t\tc-4.96,2.82-10.48,4.23-16.55,4.23C1505.3-3076.34,1499.81-3077.75,1494.85-3080.57z M1523.54-3086.85\r\n\t\tc3.63-2.11,6.48-5.11,8.55-9.02c2.08-3.91,3.11-8.43,3.11-13.58c0-5.21-1.04-9.75-3.11-13.62c-2.08-3.87-4.91-6.86-8.51-8.97\r\n\t\tc-3.6-2.11-7.69-3.16-12.27-3.16c-4.59,0-8.68,1.05-12.27,3.16c-3.6,2.11-6.43,5.1-8.51,8.97c-2.08,3.87-3.11,8.41-3.11,13.62\r\n\t\tc0,5.15,1.04,9.67,3.11,13.58c2.08,3.91,4.93,6.91,8.55,9.02c3.63,2.11,7.7,3.16,12.23,3.16\r\n\t\tC1515.83-3083.69,1519.91-3084.74,1523.54-3086.85z"
            }), React.createElement("path", {
              d: "M1618.75-3107.49c1.95,1.55,3.5,3.47,4.65,5.76c1.15,2.29,1.72,4.74,1.72,7.35c0,3.29-0.84,6.25-2.51,8.88\r\n\t\tc-1.67,2.64-4.11,4.71-7.3,6.23c-3.19,1.52-6.96,2.28-11.3,2.28h-24.17v-64.81h23.24c4.4,0,8.15,0.73,11.25,2.19\r\n\t\tc3.1,1.46,5.42,3.43,6.97,5.9c1.55,2.48,2.32,5.27,2.32,8.37c0,3.84-1.04,7.02-3.11,9.53c-2.08,2.51-4.82,4.32-8.23,5.44\r\n\t\tC1614.64-3110,1616.79-3109.04,1618.75-3107.49z M1588.3-3113.81h14.23c3.97,0,7.03-0.93,9.2-2.79c2.17-1.86,3.25-4.43,3.25-7.72\r\n\t\tc0-3.28-1.09-5.86-3.25-7.72c-2.17-1.86-5.3-2.79-9.39-2.79h-14.04V-3113.81z M1613.12-3086.94c2.35-1.98,3.53-4.74,3.53-8.28\r\n\t\tc0-3.59-1.24-6.43-3.72-8.51c-2.48-2.08-5.8-3.11-9.95-3.11h-14.69v22.87h14.97C1607.48-3083.97,1610.76-3084.96,1613.12-3086.94z"
            }), React.createElement("path", {
              d: "M1645.29-3134.92v21.66h23.62v6.97h-23.62v22.31h26.41v6.97h-34.87v-64.9h34.87v6.97H1645.29z"
            }), React.createElement("path", {
              d: "M1747.89-3137.85c5.17,2.64,9.14,6.4,11.9,11.3c2.76,4.9,4.14,10.66,4.14,17.29c0,6.63-1.38,12.38-4.14,17.25\r\n\t\tc-2.76,4.87-6.73,8.59-11.9,11.16c-5.18,2.57-11.3,3.86-18.36,3.86h-20.18v-64.81h20.18\r\n\t\tC1736.6-3141.8,1742.72-3140.48,1747.89-3137.85z M1748.68-3090.61c4.4-4.43,6.6-10.65,6.6-18.64c0-8.06-2.22-14.35-6.65-18.87\r\n\t\tc-4.43-4.52-10.8-6.79-19.11-6.79h-11.72v50.95h11.72C1737.9-3083.97,1744.28-3086.18,1748.68-3090.61z"
            }), React.createElement("path", {
              d: "M1783.55-3134.92v21.66h23.62v6.97h-23.62v22.31h26.41v6.97h-34.87v-64.9h34.87v6.97H1783.55z"
            }), React.createElement("path", {
              d: "M1859.42-3141.8v6.88h-28.17v21.85h22.87v6.88h-22.87v29.2h-8.46v-64.81H1859.42z"
            }), React.createElement("path", {
              d: "M1878.11-3141.8v64.81h-8.46v-64.81H1878.11z"
            }), React.createElement("path", {
              d: "M1943.47-3076.99h-8.46l-34.03-51.6v51.6h-8.46v-64.9h8.46l34.03,51.51v-51.51h8.46V-3076.99z"
            }), React.createElement("path", {
              d: "M1966.34-3134.92v21.66h23.62v6.97h-23.62v22.31h26.41v6.97h-34.87v-64.9h34.87v6.97H1966.34z"
            }), React.createElement("path", {
              d: "M2044.12-3137.85c5.17,2.64,9.14,6.4,11.9,11.3c2.76,4.9,4.14,10.66,4.14,17.29c0,6.63-1.38,12.38-4.14,17.25\r\n\t\tc-2.76,4.87-6.73,8.59-11.9,11.16c-5.18,2.57-11.3,3.86-18.36,3.86h-20.18v-64.81h20.18\r\n\t\tC2032.82-3141.8,2038.94-3140.48,2044.12-3137.85z M2044.91-3090.61c4.4-4.43,6.6-10.65,6.6-18.64c0-8.06-2.22-14.35-6.65-18.87\r\n\t\tc-4.43-4.52-10.8-6.79-19.11-6.79h-11.72v50.95h11.72C2034.12-3083.97,2040.51-3086.18,2044.91-3090.61z"
            })), React.createElement("path", {
              className: "svg_tbd_st3",
              d: "M345.53,312.78c10.85,5.53,19.17,13.42,24.96,23.69c5.78,10.27,8.68,22.36,8.68,36.27\r\n\tc0,13.91-2.89,25.97-8.68,36.17c-5.79,10.21-14.11,18.01-24.96,23.4c-10.86,5.4-23.69,8.09-38.51,8.09H264.7V304.49h42.31\r\n\tC321.84,304.49,334.68,307.25,345.53,312.78z M347.19,411.84c9.23-9.29,13.85-22.33,13.85-39.1c0-16.9-4.65-30.09-13.94-39.58\r\n\tc-9.3-9.49-22.65-14.23-40.07-14.23h-24.57v106.86h24.57C324.57,425.78,337.96,421.13,347.19,411.84z"
            }), React.createElement("path", {
              className: "svg_tbd_st3",
              d: "M966.05,315.03c10.85,5.53,19.17,13.42,24.96,23.69c5.78,10.27,8.68,22.36,8.68,36.27\r\n\tc0,13.91-2.89,25.97-8.68,36.17c-5.79,10.21-14.11,18.01-24.96,23.4c-10.86,5.4-23.69,8.09-38.51,8.09h-42.31V306.74h42.31\r\n\tC942.36,306.74,955.2,309.51,966.05,315.03z M967.71,414.09c9.23-9.29,13.85-22.33,13.85-39.1c0-16.9-4.65-30.09-13.94-39.58\r\n\tc-9.3-9.49-22.65-14.23-40.07-14.23h-24.57v106.86h24.57C945.09,428.03,958.48,423.39,967.71,414.09z"
            }), React.createElement("path", {
              className: "svg_tbd_st3",
              d: "M614.47,306.32v135.92h-17.74V306.32H614.47z"
            }), React.createElement("path", {
              className: "svg_tbd_st3",
              d: "M751.55,442.24h-17.75l-71.37-108.23v108.23h-17.74V306.13h17.74l71.37,108.03V306.13h17.75V442.24z"
            }), React.createElement("path", {
              className: "svg_tbd_st3",
              d: "M799.52,320.75v45.44h49.53v14.62h-49.53v46.8h55.38v14.62h-73.12V306.13h73.12v14.62H799.52z"
            }), React.createElement("g", null, React.createElement("g", null, React.createElement("path", {
              className: "svg_tbd_st3",
              d: "M665.22,205.58c4.09,3.25,7.34,7.28,9.75,12.09c2.4,4.81,3.61,9.95,3.61,15.41c0,6.89-1.75,13.1-5.27,18.62\r\n\t\t\tc-3.51,5.53-8.61,9.88-15.31,13.06c-6.7,3.19-14.59,4.78-23.69,4.78h-50.7V133.63h48.75c9.23,0,17.09,1.53,23.59,4.58\r\n\t\t\tc6.5,3.06,11.37,7.18,14.62,12.38c3.25,5.2,4.88,11.05,4.88,17.55c0,8.06-2.18,14.72-6.53,19.99\r\n\t\t\tc-4.36,5.27-10.11,9.07-17.26,11.41C656.6,200.32,661.12,202.34,665.22,205.58z M601.35,192.32h29.84c8.32,0,14.75-1.95,19.3-5.85\r\n\t\t\tc4.55-3.9,6.83-9.29,6.83-16.19c0-6.89-2.28-12.29-6.83-16.19c-4.55-3.9-11.11-5.85-19.69-5.85h-29.45V192.32z M653.42,248.68\r\n\t\t\tc4.94-4.16,7.41-9.94,7.41-17.35c0-7.54-2.6-13.49-7.8-17.84c-5.2-4.35-12.16-6.53-20.87-6.53h-30.81v47.97h31.4\r\n\t\t\tC641.59,254.92,648.48,252.84,653.42,248.68z"
            }), React.createElement("path", {
              className: "svg_tbd_st3",
              d: "M720.89,148.06v45.44h49.53v14.62h-49.53v46.8h55.38v14.62h-73.12V133.43h73.12v14.62H720.89z"
            })), React.createElement("g", null, React.createElement("path", {
              className: "svg_tbd_st3",
              d: "M352.97,133.53v14.43h-37.05v121.48h-17.75V147.96h-37.25v-14.43H352.97z"
            }), React.createElement("g", {
              id: "beyond-ales_00000081611499284930357290000003878594640094021544_",
              transform: "translate(0 58.014)"
            }, React.createElement("path", {
              className: "svg_tbd_st0",
              d: "M370.35,187.76c-4.6,17.43-6.93,33.93-6.15,43.47c0.8,9.73,4.72,10.79,10.28,2.76\r\n\t\t\t\tc5.43-8.87,9.69-18.39,12.68-28.35C380.68,200.57,375.01,194.55,370.35,187.76z M470.84,214.71c-7.43,3.54-15.35,5.93-23.5,7.07\r\n\t\t\t\tc-2.39,10.12-3.46,20.5-3.19,30.9c0.8,9.73,4.72,10.78,10.28,2.75C459.88,247.55,466.09,232.1,470.84,214.71z M405.59,216.29\r\n\t\t\t\tc-6.45,25.2-10.55,48.18-11.02,61.57c-0.52,14.65,3.4,15.7,10.28,2.75c6.28-11.84,14.2-33.8,21.22-58.83\r\n\t\t\t\tC419,220.98,412.1,219.13,405.59,216.29L405.59,216.29z"
            })), React.createElement("g", {
              id: "beyond-circle_00000092432898804943095760000001475727222873014433_"
            }, React.createElement("path", {
              className: "svg_tbd_st4",
              d: "M438.84,130.64c-1.72-0.06-3.44-0.05-5.14,0.02c-38.02,1.54-67.58,33.61-66.04,71.63\r\n\t\t\t\tc1.54,38.02,33.61,67.58,71.63,66.04c38.02-1.54,67.58-33.61,66.04-71.63C503.86,160.67,474.87,131.86,438.84,130.64z\r\n\t\t\t\t M438.28,145.98c4.12,0.15,8.21,0.77,12.18,1.85c28.76,7.79,45.76,37.42,37.96,66.18s-37.42,45.76-66.18,37.96\r\n\t\t\t\tc-28.76-7.79-45.76-37.42-37.96-66.18c6.17-22.77,26.41-38.89,49.99-39.8C435.6,145.94,436.93,145.93,438.28,145.98\r\n\t\t\t\tL438.28,145.98z M464.75,83.09c-4.58,0.2-9.07,1.35-13.18,3.37c-5.62,2.69-10.68,6.42-14.91,10.98\r\n\t\t\t\tc-6.95,7.34-13,15.49-18.03,24.26c7.4-1.72,15.01-2.36,22.59-1.93c2.79-4.17,5.91-8.09,9.35-11.74\r\n\t\t\t\tc10.22-10.3,18.57-11.15,22.81,6.12c1.23,5.2,2.01,10.49,2.32,15.82c6.84,3.83,13.07,8.65,18.51,14.3\r\n\t\t\t\tc0.18-10.88-0.99-21.75-3.49-32.34c-1.4-6.07-3.93-11.82-7.45-16.95c-3.39-4.69-7.96-9.69-13.97-11.3\r\n\t\t\t\tc-1.49-0.39-3.03-0.59-4.57-0.58L464.75,83.09z M438.9,129.21c-1.76-0.06-3.51-0.05-5.24,0.02c-38.8,1.57-68.97,34.3-67.4,73.09\r\n\t\t\t\ts34.3,68.97,73.09,67.4s68.97-34.3,67.4-73.09C505.26,159.87,475.67,130.47,438.9,129.21L438.9,129.21z M438.31,144.88\r\n\t\t\t\tc4.2,0.16,8.37,0.79,12.43,1.88c29.35,7.95,46.69,38.19,38.74,67.54c-7.95,29.35-38.19,46.69-67.54,38.74\r\n\t\t\t\tc-29.35-7.95-46.69-38.19-38.74-67.54c6.3-23.23,26.96-39.68,51.01-40.61C435.58,144.83,436.94,144.83,438.31,144.88\r\n\t\t\t\tL438.31,144.88z"
            })))), React.createElement("g", null, React.createElement("path", {
              className: "svg_tbd_st3",
              d: "M439.93,306.13h-16.84c-1.69,5.18-3.41,10.07-5.13,14.62H442c-0.56-1.32-1.02-2.93-1.38-4.83\r\n\t\tC440.25,312.66,440.03,309.4,439.93,306.13z"
            }), React.createElement("path", {
              className: "svg_tbd_st3",
              d: "M398.41,354.2v88.03h73.12v-14.62h-55.38v-46.8h49.53v-14.62h-49.53v-40.81c-2.71,6.78-5.42,12.64-8.02,17.31\r\n\t\tC404.39,349.41,401.09,353.23,398.41,354.2z"
            }), React.createElement("path", {
              className: "svg_tbd_st3",
              d: "M456.62,317.96c-0.78,1.04-1.53,1.97-2.28,2.79h17.19v-14.62h-7.9C461.32,310.81,458.95,314.82,456.62,317.96z\r\n\t\t"
            }))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/what-is/what-is
      ***************************************/

      ims.set('./views/what-is/what-is', {
        hash: 1657592843,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WhatIs = WhatIs;
          var React = require("react");
          function WhatIs() {
            return React.createElement(React.Fragment, null, React.createElement("h1", null, "\u00BFQue es Beyond?"), React.createElement("p", null, "BeyondJS es un meta-framework para el desarrollo de aplicaciones con tecnolog\u00EDa web, focalizado en permitir de una manera sencilla la posibilidad de utilizar Javascript como un lenguaje universal, que es en definitiva, su comportamiento por naturaleza pero que, debido a la diversidad de usos y herramientas existentes no existe hoy una forma sencilla de crear proyectos que si sean universales."), React.createElement("h2", {
              id: "goals"
            }, "Goals"), React.createElement("ul", null, React.createElement("li", null, "Crear proyectos compatibles con cualquier entorno, utilizando el mismo criterio de desarrollo."), React.createElement("li", null, " Permitir que los paquetes, proyectos, librerias puedan ser consumidos de forma directa desde cualquier otro proyecto una vez realizada su publicaci\u00F3n, sin necesidad de pasar por alg\u00FAn proceso de transpilaci\u00F3n."), React.createElement("li", null, "Foco en la productividad: Integrar todas las herramientas necesarias para el desarrollo de manera eficiente. (Desarrollar)")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./api/node-widget",
        "from": "NodeWidget",
        "name": "NodeWidget"
      }, {
        "im": "./container",
        "from": "ContentsContainer",
        "name": "ContentsContainer"
      }, {
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./page",
        "from": "ContentsPage",
        "name": "ContentsPage"
      }, {
        "im": "./use-content",
        "from": "useContent",
        "name": "useContent"
      }, {
        "im": "./views/beyond",
        "from": "BeyondName",
        "name": "BeyondName"
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
        (require || prop === 'NodeWidget') && _export("NodeWidget", NodeWidget = require ? require('./api/node-widget').NodeWidget : value);
        (require || prop === 'ContentsContainer') && _export("ContentsContainer", ContentsContainer = require ? require('./container').ContentsContainer : value);
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'ContentsPage') && _export("ContentsPage", ContentsPage = require ? require('./page').ContentsPage : value);
        (require || prop === 'useContent') && _export("useContent", useContent = require ? require('./use-content').useContent : value);
        (require || prop === 'BeyondName') && _export("BeyondName", BeyondName = require ? require('./views/beyond').BeyondName : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWN0IiwiaWQiLCJjbGFzc05hbWUiLCJFbGluayIsImhyZWYiLCJCZXlvbmROYW1lIiwiT2JqZWN0UHJvcGVydHkiLCJ0eXBlIiwiTmV4dExpbmtzIiwiaXRlbXMiLCJJV2lkZ2V0U3RvcmUiLCJOb2RlV2lkZ2V0IiwiQVBJVVJJIiwiQ29kZSIsImxhbmd1YWdlIiwiVHlwZVByb3BlcnR5IiwiTGluayIsInRwbENvbmZpZyIsIlRlbXBsYXRlQXBwbGljYXRpb24iLCJUZW1wbGF0ZUNvbmZpZyIsIlRlbXBsYXRlR2xvYmFsIiwiVGVtcGxhdGVQYWdlIiwiVGVtcGxhdGVJbnRybyIsIlRlbXBsYXRlT3ZlcndyaXRlcyIsIkNvbnRlbnRzQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJSaWdodEFzaWRlIiwiQ29udGVudHMiLCJFdmVudHMiLCJsb2FkaW5nIiwibG9hZGVkIiwidmFsdWUiLCJoeWRyYXRlZCIsImNvbnRhaW5lciIsImNvbnN0cnVjdG9yIiwiZmV0Y2giLCJ0cmlnZ2VyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicHVzaCIsIm5hbWUiLCJoeWRyYXRlIiwiY2FjaGVkIiwiZm9yRWFjaCIsImNvbXBhbnkiLCJ0b0pTT04iLCJleHBvcnRzIiwiRG9jc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRG9jc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsImJvZHkiLCJXaWRnZXQiLCJQYWdlIiwiZ2V0Q29udGVudCIsImNvbnRlbnRJZCIsInN1YiIsInVuZGVmaW5lZCIsInN0YXJ0aW5nIiwiaW50cm8iLCJEb2NzSW50cm8iLCJRdWlja1N0YXJ0IiwiZGFzaGJvYXJkIiwiRGFzaGJvYXJkUGFnZSIsInR1dG9yaWFsIiwic3RhcnQiLCJUdXRvcmlhbEludHJvIiwiVHV0b3JpYWxGaXJzdE1vZHVsZSIsImJhY2tlbmQiLCJUdXRvcmlhbEJhY2tlbmQiLCJicmlkZ2UiLCJUdXRvcmlhbEJyaWRnZSIsInJvdXRpbmciLCJUdXRvcmlhbFJvdXRpbmciLCJiYXNpY3MiLCJwcm9qZWN0cyIsIlByb2plY3RzSW50cm8iLCJjcmVhdGUiLCJQcm9qZWN0Q3JlYXRlIiwic3RydWN0dXJlIiwiUHJvamVjdFN0cnVjdHVyZSIsImpzb24iLCJQcm9qZWN0SnNvbiIsImltcG9ydCIsIlByb2plY3RJbXBvcnRzIiwiZGVwZW5kZW5jaWVzIiwiUHJvamVjdERlcGVuZGVuY2llcyIsIm1vZHVsZXMiLCJpbnRyb2R1Y3Rpb24iLCJNb2R1bGVzSW50cm8iLCJNb2R1bGVzQ3JlYXRlIiwiTW9kdWxlc0NvbmZpZyIsImJ1bmRsZXMiLCJCdW5kbGVzIiwid2lkZ2V0cyIsImRlZmF1bHQiLCJXaWRnZXRzIiwiZGVmaW5pdGlvbiIsIldpZGdldHNEZWZpbml0aW9uIiwiY29udHJvbGxlciIsIldpZGdldENvbnRyb2xsZXIiLCJsYXlvdXQiLCJXaWRnZXRMYXlvdXQiLCJwYWdlIiwiV2lkZ2V0UGFnZSIsInJlbmRlcmluZyIsIldpZGdldHNSZW5kZXJpbmciLCJzdGF0ZSIsIm1hbmFnZW1lbnQiLCJTdGF0ZU1hbmFnZW1lbnQiLCJzdHlsZXMiLCJ0ZW1wbGF0ZSIsIlN0eWxlc1RlbXBsYXRlUGFnZSIsIlN0eWxlc01vZHVsZXNQYWdlIiwiaW1wb3J0cyIsIlN0eWxlc0ltcG9ydHNQYWdlIiwidGhlbWVzIiwiU3R5bGVzVGhlbWVQYWdlIiwiUm91dGluZ1BhZ2UiLCJCYWNrZW5kUGFnZSIsImZvdW5kYXRpb25zIiwicHJvY2Vzc29ycyIsIlByb2Nlc3NvcnMiLCJEZXZTZXJ2ZXIiLCJiZWUiLCJCRUVQYWdlIiwiaG1yIiwiSE1SUGFnZSIsImRpc3RyaWJ1dGlvbnMiLCJEaXN0cmlidXRpb25zUGFnZSIsImFwaSIsInVyaSIsIkJleW9uZFdpZGdldCIsImlXaWRnZXRTdG9yZSIsImNvbnRlbnRzIiwiaGFzT3duUHJvcGVydHkiLCJjb250cm9sIiwiZXJyb3I0MDQiLCJjb25zb2xlIiwibG9nIiwiRXJyb3I0MDQiLCJDb250ZW50c1BhZ2UiLCJjb21wb25lbnQiLCJobXJDaGFuZ2VkIiwiY29udGVudCIsImZldGNoaW5nIiwidGV4dHMiLCJpc0ZldGNoaW5nIiwiUHJlbG9hZFBhZ2UiLCJDb250cm9sIiwiUHJvdmlkZXIiLCJRdWl6IiwiQXBwSWNvbkJ1dHRvbiIsImljb24iLCJ1c2VDb250ZW50Iiwic2V0Q29udGVudCIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInJlYWR5Iiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsInVzZUVmZmVjdCIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0cmlnZ2VyRXZlbnQiLCJiaW5kIiwidW5iaW5kIiwid2luZG93IiwiQ29uY2VwdHMiLCJHbG9zc2FyeSIsInRwbDEiLCJTZXJ2ZXIiLCJDb250ZW50IiwiTm90ZSIsInJpZ2h0QXNpZGUiLCJ0aXRsZSIsInRpdGxlcyIsInNldFRpdGxlcyIsInJlZiIsInVzZVJlZiIsIkFycmF5IiwiZnJvbSIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FsbGJhY2siLCJlbnRyaWVzIiwiY2hlY2siLCJpdGVtIiwidG9wIiwiYm91bmRpbmdDbGllbnRSZWN0IiwidGFyZ2V0IiwibGlzdEl0ZW0iLCJmaW5kIiwiZGF0YXNldCIsImFjdGl2ZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsInNoYWRvd1Jvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGwiLCJsZWZ0IiwiYmVoYXZpb3IiLCJvdXRwdXQiLCJtYXAiLCJpIiwiUmlnaHRBc2lkZUl0ZW0iLCJrZXkiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImdldEVsZW1lbnRCeUlkIiwib2Zmc2V0VG9wIiwiaW5uZXJUZXh0IiwiU1NSUGFnZSIsIlRCRCIsInZlcnNpb24iLCJ2aWV3Qm94IiwiZCIsInBvaW50cyIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iLCJXaGF0SXMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb250ZW50cy9jb2RlL3RzL2FwaS9iZXlvbmQtd2lkZ2V0LWFwaS50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29udGVudHMvY29kZS90cy9hcGkvaS13aWRnZXQtc3RvcmUudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbnRlbnRzL2NvZGUvdHMvYXBpL25vZGUtd2lkZ2V0LnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb250ZW50cy9jb2RlL3RzL2FwaS91cmkudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbnRlbnRzL2NvZGUvdHMvYmFzaWMvdGVtcGxhdGUvYXBwbGljYXRpb24udHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbnRlbnRzL2NvZGUvdHMvYmFzaWMvdGVtcGxhdGUvY29uZmlnLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb250ZW50cy9jb2RlL3RzL2Jhc2ljL3RlbXBsYXRlL2dsb2JhbC50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29udGVudHMvY29kZS90cy9iYXNpYy90ZW1wbGF0ZS9pbmRleC50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29udGVudHMvY29kZS90cy9iYXNpYy90ZW1wbGF0ZS9pbnRyby50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29udGVudHMvY29kZS90cy9iYXNpYy90ZW1wbGF0ZS9vdmVyd3JpdGVzLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb250ZW50cy9jb2RlL3RzL2NvbnRhaW5lci50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29udGVudHMvY29kZS90cy9jb250ZW50cy50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb250ZW50cy9jb2RlL3RzL2NvbnRleHQudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbnRlbnRzL2NvZGUvdHMvY29udHJvbGxlci50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb250ZW50cy9jb2RlL3RzL2RiLnRzIiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbnRlbnRzL2NvZGUvdHMvcGFnZS50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29udGVudHMvY29kZS90cy9xdWl6LnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb250ZW50cy9jb2RlL3RzL3VzZS1jb250ZW50LnRzIiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbnRlbnRzL2NvZGUvdHMvdmlld3MvYmV5b25kLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb250ZW50cy9jb2RlL3RzL3ZpZXdzL2NvbmNlcHRzL2NvbmNlcHRzLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb250ZW50cy9jb2RlL3RzL3ZpZXdzL2NvbmNlcHRzL2dsb3NzYXJ5L2dsb3NzYXJ5LnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb250ZW50cy9jb2RlL3RzL3ZpZXdzL2NvbmNlcHRzL3NlcnZlci9pbmRleC50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29udGVudHMvY29kZS90cy92aWV3cy9jb250ZW50L2NvbnRlbnQudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbnRlbnRzL2NvZGUvdHMvdmlld3MvY29udGVudC9oaWdobGlnaHQtY29kZS50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29udGVudHMvY29kZS90cy92aWV3cy9jb250ZW50L25vdGUudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbnRlbnRzL2NvZGUvdHMvdmlld3MvcmlnaHQtYXNpZGUvaW5kZXgudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbnRlbnRzL2NvZGUvdHMvdmlld3MvcmlnaHQtYXNpZGUvaXRlbS50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29udGVudHMvY29kZS90cy92aWV3cy9zc3IudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbnRlbnRzL2NvZGUvdHMvdmlld3MvdGJkLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb250ZW50cy9jb2RlL3RzL3ZpZXdzL3doYXQtaXMvd2hhdC1pcy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19
define(["exports", "@beyond-js/kernel/bundle", "react", "@beyond/docs/components/next-links", "@beyond/docs/components/html", "@beyond/ui/link", "@beyond/docs/code", "@beyond-js/kernel/core", "@beyond-js/react-widgets/controllers", "@beyond/docs/docs/starting/intro.code", "@beyond/docs/docs/starting/quick-start.code", "@beyond/docs/docs/foundations/dev-server.code", "@beyond/docs/docs/starting/tutorial.code", "@beyond/docs/docs/starting/dashboard.code", "@beyond/docs/docs/basic/projects.code", "@beyond/docs/docs/basic/modules.code", "@beyond/docs/docs/basic/bundles.code", "@beyond/docs/docs/basic/widgets/intro.code", "@beyond/docs/docs/basic/widgets/rendering.code", "@beyond/docs/docs/basic/backend.code", "@beyond/docs/docs/basic/routing.code", "@beyond/docs/docs/basic/styles.code", "@beyond/docs/docs/basic/state.code", "@beyond/docs/docs/basic/processors.code", "@beyond/docs/docs/foundations/bee.code", "@beyond/docs/docs/foundations/hmr.code", "@beyond/docs/docs/foundations/distributions.code", "@beyond/docs/ui/icons", "@beyond-js/kernel/texts", "@beyond/ui/image", "@beyond-js/kernel/styles"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.useContent = _exports.hmr = _exports.RightAside = _exports.NodeWidget = _exports.Controller = _exports.ContentsPage = _exports.ContentsContainer = _exports.BeyondName = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/contents-data",
    "multibundle": true,
    "bundle": "code"
  }).package();

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["react", dependency_1], ["@beyond-js/kernel/core", dependency_6], ["@beyond-js/react-widgets/controllers", dependency_7], ["@beyond-js/kernel/texts", dependency_27], ["@beyond-js/kernel/styles", dependency_29]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/next-links", "@beyond/docs/components/html", "@beyond/ui/link", "@beyond/docs/code", "@beyond/docs/docs/starting/intro.code", "@beyond/docs/docs/starting/quick-start.code", "@beyond/docs/docs/foundations/dev-server.code", "@beyond/docs/docs/starting/tutorial.code", "@beyond/docs/docs/starting/dashboard.code", "@beyond/docs/docs/basic/projects.code", "@beyond/docs/docs/basic/modules.code", "@beyond/docs/docs/basic/bundles.code", "@beyond/docs/docs/basic/widgets/intro.code", "@beyond/docs/docs/basic/widgets/rendering.code", "@beyond/docs/docs/basic/backend.code", "@beyond/docs/docs/basic/routing.code", "@beyond/docs/docs/basic/styles.code", "@beyond/docs/docs/basic/state.code", "@beyond/docs/docs/basic/processors.code", "@beyond/docs/docs/foundations/bee.code", "@beyond/docs/docs/foundations/hmr.code", "@beyond/docs/docs/foundations/distributions.code", "@beyond/docs/ui/icons", "@beyond/ui/image"]));

  require('@beyond-js/kernel/styles').styles.register('@beyond/docs/contents-data.code');

  const ims = new Map();
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
    hash: 1903135057,
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
    hash: 1157688880,
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
          console.log(cached);
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
    hash: 1671941145,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _controllers = require("@beyond-js/react-widgets/controllers");

      var _contents = require("./contents");

      var _page = require("./page");
      /*bundle*/


      class Controller extends _controllers.PageReactWidgetController {
        createStore() {
          return new _contents.Contents(this.body);
        }

        get Widget() {
          return _page.Page;
        }

      }

      exports.Controller = Controller;
    }
  });
  /********************
  INTERNAL MODULE: ./db
  ********************/

  ims.set('./db', {
    hash: 3704615913,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getContent = void 0;

      var _error = require("./views/error-404");

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
          } // multilanguage: MultiLanguage,

        };
        const api = {
          api: {
            uri: _uri.APIURI,
            BeyondWidget: _beyondWidgetApi.BeyondWidgetApi,
            iWidgetStore: _iWidgetStore.IWidgetStore
          }
        };
        const contents = { ...starting,
          ...basics,
          ...foundations,
          ...api,
          error404: _error.Error404
        };

        if (!contents.hasOwnProperty(contentId) || sub && !contents[contentId].hasOwnProperty(sub)) {
          return {
            id: contentId,
            control: contents.error404
          };
        }

        if (!contents[contentId]) {
          console.log('error', contents[contentId], contentId, contents);
          return _error.Error404;
        } // the constructor is 'Object' when the contents[contentId] value is a plain object of subitems on contents.


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
    hash: 3446108731,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ContentsPage = ContentsPage;

      var React = require("react");

      var _useContent = require("./use-content");

      var _loading = require("./preload/loading");

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
        if (fetching || !texts) return React.createElement(_loading.PreloadPage, null);
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
  /******************************
  INTERNAL MODULE: ./preload/icon
  ******************************/

  ims.set('./preload/icon', {
    hash: 3413393333,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.IconLogo = IconLogo;

      var React = require("react");

      var _icons = require("@beyond/docs/ui/icons");

      function IconLogo() {
        return React.createElement("div", {
          className: "ds-preload__icon-container"
        }, React.createElement(_icons.AppIcon, {
          className: "ds-preload__icon",
          icon: {
            viewBox: '0 0 51.1 94.341',
            icon: `<g id="beyond-ales" transform="translate(0 58.014)">
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
        }));
      }
    }
  });
  /*********************************
  INTERNAL MODULE: ./preload/loading
  *********************************/

  ims.set('./preload/loading', {
    hash: 3503547995,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PreloadPage = PreloadPage;

      var React = require("react");

      var _icon = require("./icon");

      function PreloadPage() {
        return React.createElement("div", {
          className: "preload-container"
        }, React.createElement("div", {
          className: "circle"
        }), React.createElement("div", {
          className: "page__main-content"
        }, React.createElement("div", {
          className: "center__container"
        }, React.createElement(_icon.IconLogo, null))));
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
    hash: 4187106074,
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
          const modelTexts = new _texts.CurrentTexts(_beyond_context.module.resource, true);

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
  /*********************************
  INTERNAL MODULE: ./views/error-404
  *********************************/

  ims.set('./views/error-404', {
    hash: 2553778734,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Error404 = Error404;

      var React = require("react");

      function Error404() {
        return React.createElement(React.Fragment, null, React.createElement("svg", {
          version: "1.1",
          id: "Capa_1",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 1080 1080"
        }, React.createElement("line", {
          className: "svg_404_st0",
          x1: "132.1",
          y1: "824.46",
          x2: "532.33",
          y2: "824.46"
        }), React.createElement("line", {
          className: "svg_404_st0",
          x1: "688.89",
          y1: "824.46",
          x2: "954.49",
          y2: "824.46"
        }), React.createElement("g", null, React.createElement("g", null, React.createElement("path", {
          className: "svg_404_st1",
          d: "M666.35,740.64c-1.17,0.64-2.38,1.25-3.68,1.81c-0.05,0.81-0.16,1.61-0.37,2.4\r\n\t\t\tc4.83-1.01,10.19-1.58,15.84-1.58c0.26,0,0.52,0.01,0.78,0.01c0.09-0.34,0.17-0.68,0.25-1.03\r\n\t\t\tC674.64,742.12,670.31,741.58,666.35,740.64z"
        }), React.createElement("path", {
          className: "svg_404_st1",
          d: "M677.16,646.08c0,0.72-0.07,1.43-0.18,2.13c3.07-0.45,6.23-0.81,9.46-1.08c-3.2-0.46-6.31-1.05-9.32-1.74\r\n\t\t\tC677.13,645.62,677.16,645.85,677.16,646.08z"
        }), React.createElement("path", {
          className: "svg_404_st2",
          d: "M810.85,577.99c1.03,0.03,2.06,0.05,3.1,0.05c40.38,0,73.11-21.46,73.11-47.93\r\n\t\t\tc0-25.99-31.57-47.14-70.94-47.89c-2.82-24.45-40.72-43.82-87.08-43.82c-48.19,0-87.26,20.93-87.26,46.74\r\n\t\t\tc0,19.45,22.18,36.11,53.73,43.15c-1.42,1.14-2.58,2.36-3.4,3.67c-34.22,5.46-58.59,19.52-58.59,36.02\r\n\t\t\tc0,7.4,4.92,14.31,13.42,20.18c-8.27,6.24-13.15,13.86-13.15,22.09c0,3.71,1,7.3,2.84,10.69c-2.36-0.19-4.78-0.3-7.24-0.3\r\n\t\t\tc-26.38,0-47.76,11.39-47.76,25.44c0,11.32,13.88,20.91,33.07,24.21c-4.44,4.53-7.12,10.36-7.12,16.71\r\n\t\t\tc0,6.02,2.42,11.55,6.45,15.97c-11.01,4.37-18.24,11.71-18.24,20.03c0,1.35,0.2,2.67,0.56,3.96c-7.23,3.77-11.72,9.03-11.72,14.85\r\n\t\t\tc0,9.25,11.35,17.09,27.03,19.79c-3.63,3.7-5.82,8.47-5.82,13.66c0,4.92,1.98,9.44,5.27,13.05c-9,3.57-14.91,9.57-14.91,16.37\r\n\t\t\tc0,10.42,13.88,18.96,31.51,19.76c-2.67-8.18-7.86-26.27-4.28-33.61c4.69-9.62,8.52-10.76,8.52-10.76s-5.74,13.23,1.42,13.55\r\n\t\t\tc7.16,0.32,4.64-10.91,7.9-19.17c3.25-8.25,15.37-10.75,15.37-10.75s-12.42,17.75-6.22,23.95c1.65,1.65,3.68,2.17,5.79,1.75\r\n\t\t\tl0.07-0.24c0.24-0.77,1-1.19,1.71-0.93c0.2,0.07,0.38,0.2,0.52,0.35c5.08-2.59,9.96-10.24,10.51-20.59\r\n\t\t\tc0.86-16.25-1.47-22.63-1.47-22.63s4.92,11.77,10.17,1.16c0.52-1.05,0.92-2.15,1.22-3.27c-0.26,0-0.52-0.01-0.78-0.01\r\n\t\t\tc-5.65,0-11.01,0.57-15.84,1.58c0.22-0.78,0.33-1.59,0.37-2.4c1.29-0.56,2.51-1.17,3.68-1.81c3.97,0.93,8.29,1.48,12.82,1.61\r\n\t\t\tc2.13-10-3.06-21.56-3.06-21.56s6.96,7.41,10.9,21.35c17.92-1.58,31.62-10.17,31.62-20.53c0-0.17-0.02-0.34-0.03-0.51\r\n\t\t\tc1.19-0.92,2.29-1.89,3.28-2.91c5.28,1.85,11.61,2.94,18.44,2.94c18.37,0,33.26-7.8,33.26-17.41c0-4.18-2.81-8.01-7.5-11.01\r\n\t\t\tc2.5-2.03,4.5-4.18,5.93-6.44c0.84,0.02,1.69,0.04,2.54,0.04c33.01,0,59.77-17.54,59.77-39.18c0-14.72-12.38-27.52-30.69-34.22\r\n\t\t\tc5.72-3.67,9.15-8.35,9.15-13.45c0-5.11-3.44-9.8-9.17-13.47C806.66,583.39,809.1,580.75,810.85,577.99z M628.77,770.22\r\n\t\t\tc-0.5,0.6-1.36,0.64-1.91,0.1l-2.66-2.64c-0.55-0.55-0.59-1.48-0.09-2.08c0.5-0.6,1.36-0.64,1.91-0.1l2.66,2.64\r\n\t\t\tC629.24,768.69,629.28,769.62,628.77,770.22z M656.95,755.95l-1.14,3.72c-0.24,0.77-1,1.19-1.71,0.93\r\n\t\t\tc-0.71-0.26-1.09-1.09-0.85-1.86l1.14-3.72c0.24-0.77,1-1.19,1.71-0.93C656.81,754.35,657.19,755.18,656.95,755.95z\r\n\t\t\t M685.15,721.42l-3.5,0.89c-0.73,0.19-1.45-0.31-1.62-1.1c-0.17-0.79,0.28-1.58,1.01-1.77l3.5-0.89c0.73-0.19,1.45,0.31,1.62,1.1\r\n\t\t\tC686.33,720.45,685.88,721.24,685.15,721.42z M680.46,691.06l1.14-3.72c0.24-0.77,1-1.19,1.71-0.93c0.71,0.26,1.09,1.09,0.85,1.86\r\n\t\t\tl-1.14,3.72c-0.24,0.77-1,1.19-1.71,0.93C680.6,692.67,680.22,691.83,680.46,691.06z M676.97,648.21c0.11-0.7,0.18-1.41,0.18-2.13\r\n\t\t\tc0-0.23-0.02-0.46-0.04-0.7c3.01,0.69,6.11,1.28,9.32,1.74C683.2,647.4,680.04,647.77,676.97,648.21z M697.53,737.64\r\n\t\t\tc-0.5,0.6-1.36,0.64-1.91,0.1l-2.66-2.64c-0.55-0.55-0.59-1.48-0.09-2.08s1.36-0.64,1.91-0.1l2.66,2.64\r\n\t\t\tC697.99,736.11,698.03,737.04,697.53,737.64z"
        }), React.createElement("path", {
          className: "svg_404_st2",
          d: "M687.66,766.34c0.48,0.13,0.88,0.53,1,1.09c0.17,0.79-0.28,1.58-1.01,1.77l-1.25,0.32\r\n\t\t\tc-2.6,5.8-5.64,9.5-3.07,14.7c0.57,1.16,1.2,1.98,1.86,2.52l1.07-3.5c0.24-0.77,1-1.19,1.71-0.93c0.71,0.26,1.09,1.09,0.85,1.86\r\n\t\t\tl-1.05,3.45c2.95-0.15,5.97-3.56,7.4-5.41c0.51-0.73,0.84-1.16,0.84-1.16s-0.31,0.47-0.84,1.16c-2.44,3.49-8.95,14.03-2.84,19.11\r\n\t\t\tc1.3,1.08,2.67,1.67,4.03,1.92c4.88-3.68,7.81-8.39,7.81-13.53c0-4.88-2.64-9.36-7.08-12.95c11.7-3.07,19.61-8.9,19.61-15.58\r\n\t\t\tc0-8.39-12.44-15.43-29.22-17.36c0.56,2.22,1.04,4.58,1.41,7.1C689.84,757.51,689.01,762.41,687.66,766.34z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M679.16,742.25c-0.07,0.35-0.16,0.69-0.25,1.03c2.95,0.03,5.81,0.2,8.56,0.52c-0.15-0.6-0.31-1.19-0.47-1.76\r\n\t\t\tc-1.95,0.17-3.94,0.26-5.97,0.26C680.4,742.3,679.79,742.26,679.16,742.25z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M709.14,797.98c0.02-0.02,0.03-0.03,0.03-0.03S709.16,797.96,709.14,797.98z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M695.16,782.21c0.53-0.69,0.84-1.16,0.84-1.16S695.67,781.47,695.16,782.21z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M679.16,742.25c0.62,0.02,1.24,0.05,1.87,0.05c2.03,0,4.03-0.09,5.97-0.26c-3.94-13.94-10.9-21.35-10.9-21.35\r\n\t\t\tS681.29,732.25,679.16,742.25z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M677.7,746.55c-5.25,10.61-10.17-1.16-10.17-1.16s2.33,6.38,1.47,22.63c-0.55,10.36-5.44,18.01-10.51,20.59\r\n\t\t\tc0.35,0.38,0.5,0.96,0.33,1.5l-1.14,3.72c-0.24,0.77-1,1.19-1.71,0.93c-0.71-0.26-1.09-1.09-0.85-1.86l1.06-3.48\r\n\t\t\tc-2.11,0.42-4.14-0.1-5.79-1.75c-6.2-6.2,6.22-23.95,6.22-23.95s-12.11,2.5-15.37,10.75c-3.25,8.25-0.74,19.49-7.9,19.17\r\n\t\t\tc-7.16-0.32-1.42-13.55-1.42-13.55s-3.83,1.15-8.52,10.76c-3.58,7.33,1.61,25.42,4.28,33.61c0.9,0.04,1.8,0.07,2.72,0.07\r\n\t\t\tc15.38,0,28.38-5.88,32.7-13.97c2.21,0.28,4.49,0.42,6.82,0.42c10.63,0,20.14-3.02,26.41-7.75c-1.37-0.25-2.73-0.84-4.03-1.92\r\n\t\t\tc-6.11-5.08,0.4-15.62,2.84-19.11c-1.43,1.85-4.45,5.26-7.4,5.41l-0.08,0.27c-0.24,0.77-1,1.19-1.71,0.93\r\n\t\t\tc-0.71-0.26-1.09-1.09-0.85-1.86l0.07-0.22c-0.66-0.54-1.29-1.36-1.86-2.52c-2.56-5.21,0.47-8.91,3.07-14.7l-2.25,0.57\r\n\t\t\tc-0.73,0.19-1.45-0.31-1.62-1.1c-0.17-0.79,0.28-1.58,1.01-1.77l3.5-0.89c0.21-0.05,0.43-0.04,0.63,0.01\r\n\t\t\tc1.35-3.94,2.19-8.83,1.23-15.45c-0.36-2.52-0.85-4.88-1.41-7.1c-2.75-0.32-5.62-0.5-8.56-0.52\r\n\t\t\tC678.62,744.4,678.22,745.5,677.7,746.55z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M694.78,732.92c-0.55-0.55-1.4-0.5-1.91,0.1s-0.46,1.53,0.09,2.08l2.66,2.64c0.55,0.55,1.4,0.5,1.91-0.1\r\n\t\t\tc0.5-0.6,0.46-1.53-0.09-2.08L694.78,732.92z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M626.02,765.51c-0.55-0.55-1.4-0.5-1.91,0.1c-0.5,0.6-0.46,1.53,0.09,2.08l2.66,2.64\r\n\t\t\tc0.55,0.55,1.4,0.5,1.91-0.1c0.5-0.6,0.46-1.53-0.09-2.08L626.02,765.51z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M684.54,718.56l-3.5,0.89c-0.73,0.19-1.18,0.98-1.01,1.77c0.17,0.79,0.9,1.28,1.62,1.1l3.5-0.89\r\n\t\t\tc0.73-0.19,1.18-0.98,1.01-1.77C685.99,718.87,685.26,718.38,684.54,718.56z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M709.36,772.73l-3.5,0.89c-0.73,0.19-1.18,0.98-1.01,1.77c0.17,0.79,0.9,1.28,1.62,1.1l3.5-0.89\r\n\t\t\tc0.73-0.19,1.18-0.98,1.01-1.77S710.09,772.55,709.36,772.73z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M688.66,767.43c-0.12-0.56-0.52-0.96-1-1.09c-0.39,1.13-0.82,2.18-1.26,3.17l1.25-0.32\r\n\t\t\tC688.37,769.01,688.83,768.22,688.66,767.43z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M687.03,766.34l-3.5,0.89c-0.73,0.19-1.18,0.98-1.01,1.77c0.17,0.79,0.9,1.28,1.62,1.1l2.25-0.57\r\n\t\t\tc0.44-0.99,0.87-2.04,1.26-3.17C687.46,766.29,687.25,766.28,687.03,766.34z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M683.02,691.99l1.14-3.72c0.24-0.77-0.15-1.6-0.85-1.86c-0.71-0.26-1.47,0.16-1.71,0.93l-1.14,3.72\r\n\t\t\tc-0.24,0.77,0.15,1.6,0.85,1.86C682.02,693.18,682.78,692.76,683.02,691.99z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M687.96,782.3c-0.71-0.26-1.47,0.16-1.71,0.93l-1.07,3.5c0.82,0.67,1.7,0.92,2.58,0.88l1.05-3.45\r\n\t\t\tC689.05,783.39,688.67,782.56,687.96,782.3z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M685.19,786.74l-0.07,0.22c-0.24,0.77,0.15,1.6,0.85,1.86c0.71,0.26,1.47-0.16,1.71-0.93l0.08-0.27\r\n\t\t\tC686.88,787.66,686.01,787.41,685.19,786.74z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M656.1,754.09c-0.71-0.26-1.47,0.16-1.71,0.93l-1.14,3.72c-0.24,0.77,0.15,1.6,0.85,1.86\r\n\t\t\tc0.71,0.26,1.47-0.16,1.71-0.93l1.14-3.72C657.19,755.18,656.81,754.35,656.1,754.09z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M657.97,788.26c-0.71-0.26-1.47,0.16-1.71,0.93l-0.07,0.24c0.76-0.15,1.53-0.43,2.3-0.82\r\n\t\t\tC658.34,788.46,658.17,788.33,657.97,788.26z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M655.98,794.76c0.71,0.26,1.47-0.16,1.71-0.93l1.14-3.72c0.17-0.55,0.02-1.12-0.33-1.5\r\n\t\t\tc-0.77,0.39-1.54,0.67-2.3,0.82l-1.06,3.48C654.89,793.67,655.27,794.51,655.98,794.76z"
        })), React.createElement("g", null, React.createElement("path", {
          className: "svg_404_st4",
          d: "M816.12,482.23c-2.82-24.45-40.72-43.82-87.08-43.82c-48.19,0-87.26,20.93-87.26,46.74\r\n\t\t\tc0,19.45,22.18,36.11,53.73,43.15c-1.42,1.14-2.58,2.36-3.4,3.67c-34.22,5.46-58.59,19.52-58.59,36.02c0,1.89,0.33,3.76,0.95,5.58\r\n\t\t\tc8.86-6.69,21.76-10.91,36.13-10.91c6.79,0,13.26,0.95,19.12,2.65c-0.44-1.84-0.68-3.73-0.68-5.65\r\n\t\t\tc0-19.89,24.55-36.02,54.84-36.02c30.29,0,54.84,16.13,54.84,36.02c0,1.56-0.17,3.1-0.46,4.61c8.1,2.42,14.62,7.42,17.96,13.75\r\n\t\t\tc39.32-0.79,70.84-21.92,70.84-47.89C887.06,504.12,855.49,482.98,816.12,482.23z"
        }), React.createElement("path", {
          className: "svg_404_st2",
          d: "M737.9,508.62c17.37,0,32.2,9.55,38.12,23.01c1.78-4.04,2.76-8.42,2.76-13.01c0-19.89-18.3-36.02-40.88-36.02\r\n\t\t\tc-22.58,0-40.88,16.13-40.88,36.02c0,4.59,0.98,8.97,2.76,13.01C705.7,518.17,720.53,508.62,737.9,508.62z"
        }), React.createElement("path", {
          className: "svg_404_st2",
          d: "M796.14,534.31c7.8,0,14.46,4.29,17.12,10.33c0.8-1.81,1.24-3.78,1.24-5.84c0-8.93-8.22-16.17-18.35-16.17\r\n\t\t\tc-10.14,0-18.35,7.24-18.35,16.17c0,2.06,0.44,4.03,1.24,5.84C781.69,538.59,788.34,534.31,796.14,534.31z"
        }), React.createElement("path", {
          className: "svg_404_st4",
          d: "M803.62,612.8c4.39-2.82,7.42-6.24,8.59-9.99c-4.72,4.91-11.65,8.4-19.64,9.49\r\n\t\t\tc11.67,8.44,19.4,23.08,19.4,39.73c0,11.19-3.49,21.46-9.32,29.56c18.83-6.6,31.65-19.6,31.65-34.57\r\n\t\t\tC834.31,632.3,821.93,619.49,803.62,612.8z"
        })), React.createElement("path", {
          className: "svg_404_st4",
          d: "M758.84,559.65c17.37,0,32.2,9.55,38.12,23.01c1.78-4.04,2.76-8.42,2.76-13.01c0-19.89-18.3-36.02-40.88-36.02\r\n\t\tc-22.58,0-40.88,16.13-40.88,36.02c0,4.59,0.98,8.97,2.76,13.01C726.64,569.2,741.47,559.65,758.84,559.65z"
        }), React.createElement("path", {
          className: "svg_404_st4",
          d: "M703.93,624.32c17.37,0,32.2,9.55,38.12,23.01c1.78-4.04,2.76-8.42,2.76-13.01c0-19.89-18.3-36.02-40.88-36.02\r\n\t\tc-22.58,0-40.88,16.13-40.88,36.02c0,4.59,0.98,8.97,2.76,13.01C671.73,633.87,686.56,624.32,703.93,624.32z"
        }), React.createElement("path", {
          className: "svg_404_st4",
          d: "M730.87,659.27c11.14,0,20.66,6.13,24.46,14.76c1.14-2.59,1.77-5.4,1.77-8.35c0-12.76-11.74-23.11-26.23-23.11\r\n\t\tc-14.49,0-26.23,10.35-26.23,23.11c0,2.94,0.63,5.76,1.77,8.35C710.21,665.4,719.73,659.27,730.87,659.27z"
        })), React.createElement("ellipse", {
          className: "svg_404_st4",
          cx: "-7.59",
          cy: "1159.91",
          rx: "9.89",
          ry: "4.95"
        }), React.createElement("g", null, React.createElement("path", {
          className: "svg_404_st1",
          d: "M603.25,700.5c2-1.83,3.9-3.75,5.72-5.72c32.37-34.97,38.26-86.91,14.55-128.25\r\n\t\tc-29.95-52.2-96.54-70.25-148.75-40.3c-52.2,29.95-70.25,96.54-40.3,148.75c29.95,52.2,96.54,70.25,148.75,40.3\r\n\t\tc7.21-4.15,13.94-9.11,20.04-14.77L603.25,700.5z"
        }), React.createElement("path", {
          className: "svg_404_st5",
          d: "M508.19,459.44c16.5-2.03,33.21-1.51,49.55,1.52c-18.33-31.46-38.57-58.36-53.3-70.86\r\n\t\tc-15.05-12.76-22.15-8.67-18.62,10.74C490.72,421.25,498.25,440.95,508.19,459.44z"
        }), React.createElement("path", {
          className: "svg_404_st5",
          d: "M359.62,473.65c-15.04-12.75-22.14-8.65-18.61,10.75c3.46,19.04,16.65,49.98,34.72,81.6\r\n\t\tc5.55-15.67,13.46-30.4,23.47-43.67C388.15,504.47,374.85,488.11,359.62,473.65z"
        }), React.createElement("path", {
          className: "svg_404_st5",
          d: "M429.59,491.95c11.23-8.93,23.72-16.15,37.07-21.4l0,0c-26.78-45.2-53.74-83.88-72.19-103.68\r\n\t\tc-20.19-21.66-27.29-17.57-18.61,10.75C383.8,403.5,403.85,446.18,429.59,491.95z"
        }), React.createElement("path", {
          className: "svg_404_st6",
          d: "M604.79,702.15l-0.01-0.01c2.04-1.87,3.98-3.83,5.84-5.84c33.03-35.68,39.05-88.69,14.86-130.87\r\n\t\tc-30.56-53.28-98.51-71.69-151.79-41.14c-53.28,30.56-71.69,98.51-41.14,151.79c30.56,53.28,98.51,71.69,151.79,41.14\r\n\t\tC591.7,712.98,598.56,707.92,604.79,702.15z M434.47,674.98c-29.95-52.2-11.91-118.8,40.3-148.75\r\n\t\tc52.2-29.95,118.8-11.91,148.75,40.3c23.71,41.33,17.82,93.27-14.55,128.25c-1.83,1.98-3.72,3.89-5.72,5.72l0.01,0.01\r\n\t\tc-6.1,5.66-12.82,10.62-20.04,14.77C531.02,745.23,464.42,727.19,434.47,674.98z"
        }), React.createElement("path", {
          className: "svg_404_st6",
          d: "M590.26,821.92c9.09,0.63,21.22-1.3,25.46,3.12c4.24,4.42,11.52,10.07,11.52,10.07s22.43-13.91,32.13-13.24\r\n\t\tc0.29,0.02,0.6,0.04,0.94,0.06c3.82-5.33,6.87-11.18,8.99-17.41c4.18-11.87,6.08-24.42,5.61-36.99c-0.56-20.41-3.55-40.69-8.9-60.4\r\n\t\tc-8.12,13.02-18.06,24.81-29.52,35.02c1.97,9.93,3.11,20.01,3.41,30.12c0.11,29.31-10.61,42.45-41.32,23.84\r\n\t\tc-9.18-5.66-17.85-12.12-25.91-19.29c-15.24,4.29-31.03,6.31-46.86,6.01c14.85,15.35,31.5,28.83,49.58,40.18\r\n\t\tC581.88,822.24,587.49,821.73,590.26,821.92z"
        }), React.createElement("path", {
          className: "svg_404_st6",
          d: "M624.38,723.24c2.54-2.38,4.98-4.83,7.32-7.37c52.09-56.5,48.52-144.54-7.99-196.63\r\n\t\tc-56.5-52.09-144.54-48.52-196.63,7.99c-52.09,56.5-48.52,144.54,7.99,196.63C488.61,773.22,571.16,772.95,624.38,723.24z\r\n\t\t M432.55,676.08c-30.56-53.28-12.14-121.24,41.14-151.79c53.28-30.56,121.24-12.14,151.79,41.14\r\n\t\tc24.19,42.18,18.17,95.19-14.86,130.87c-1.86,2.01-3.8,3.97-5.84,5.84l0.01,0.01c-6.23,5.78-13.09,10.83-20.45,15.07\r\n\t\tC531.06,747.77,463.1,729.35,432.55,676.08z"
        }), React.createElement("path", {
          className: "svg_404_st6",
          d: "M626.32,725.35L626.32,725.35c2.6-2.42,5.09-4.93,7.47-7.51c53.17-57.66,49.52-147.5-8.13-200.66\r\n\t\tc-57.66-53.17-147.5-49.52-200.66,8.13c-53.17,57.66-49.52,147.5,8.13,200.66C487.76,776.36,572.01,776.09,626.32,725.35z\r\n\t\t M427.08,527.23c52.09-56.5,140.13-60.08,196.63-7.99c56.5,52.09,60.08,140.13,7.99,196.63c-2.34,2.53-4.78,4.99-7.32,7.37\r\n\t\tc-53.22,49.71-135.77,49.98-189.31,0.62C378.56,671.76,374.99,583.73,427.08,527.23z"
        })), React.createElement("path", {
          className: "svg_404_st6",
          d: "M172.86,958.83c0.11,0.07,0.22,0.14,0.33,0.21c0.12-0.1,0.25-0.2,0.37-0.29\r\n\tC173.33,958.77,173.1,958.8,172.86,958.83z"
        }), React.createElement("g", null, React.createElement("path", {
          className: "svg_404_st0",
          d: "M810.02,378.52c-6.15-2.4-12.56-3.97-18.97-1.64c-19.15,6.96-12.19,19.15-24.38,24.38s-40.05-22.64-50.5-13.93\r\n\t\tc-10.45,8.71-13.93,22.64-20.89,26.12c-6.96,3.48-20.9-8.71-27.86,0c-6.96,8.71-6.96,8.71-6.96,8.71h201.88"
        }), React.createElement("path", {
          className: "svg_404_st0",
          d: "M921.03,347.38c-11.59-9.82-24.31-17-35.95-15.77c-33.08,3.48-31.34,27.86-43.53,47.01\r\n\t\tc-2.03,3.19-4.25,5.07-6.63,6.03"
        }), React.createElement("path", {
          className: "svg_404_st0",
          d: "M881.67,422.15h120.08c0,0,5.22-19.15-8.71-27.86c-13.93-8.71-17.41,1.74-33.08-1.74\r\n\t\tc0,0-10.66-16.43-25.47-32.25"
        })), React.createElement("g", null, React.createElement("path", {
          className: "svg_404_st0",
          d: "M125.86,411.26h230.82c0,0,4.76-17.45-7.93-25.38c-12.69-7.93-15.86,1.59-30.14-1.59\r\n\t\tc0,0-38.07-58.7-68.21-55.52c-4.8,0.51-8.8,1.49-12.16,2.87"
        }), React.createElement("path", {
          className: "svg_404_st0",
          d: "M224.99,342.36c-5.87,8.53-8.13,19.61-14.26,29.25c-11.1,17.45-28.55-7.93-46.01-1.59\r\n\t\tc-17.45,6.35-11.11,17.45-22.21,22.21c-11.1,4.76-36.49-20.62-46.01-12.69c-9.52,7.93-12.69,20.62-19.04,23.8\r\n\t\tc-6.35,3.17-19.04-7.93-25.38,0c-6.35,7.93-6.35,7.93-6.35,7.93h64.46"
        })), React.createElement("ellipse", {
          className: "svg_404_st4",
          cx: "846.88",
          cy: "462.13",
          rx: "15.3",
          ry: "7.65"
        }), React.createElement("path", {
          className: "svg_404_st4",
          d: "M904.74,534.53c6.63,0,12.01-2.69,12.01-6.01c0-3.32-5.38-6.01-12.01-6.01c-6.63,0-12.01,2.69-12.01,6.01\r\n\tC892.73,531.84,898.11,534.53,904.74,534.53z"
        }), React.createElement("g", null, React.createElement("path", {
          className: "svg_404_st6",
          d: "M122.43,697.13v-26.67L258.11,482.6h42.13v184h38.65v30.54h-38.65v62.23h-34.79v-62.23H122.43z M267,519.32\r\n\t\tL163.02,666.6H267V519.32z"
        })), React.createElement("g", null, React.createElement("path", {
          className: "svg_404_st6",
          d: "M714.74,697.13v-26.67L850.42,482.6h42.13v184h38.65v30.54h-38.65v62.23h-34.79v-62.23H714.74z M859.31,519.32\r\n\t\tL755.33,666.6h103.98V519.32z"
        })), React.createElement("g", null, React.createElement("path", {
          className: "svg_404_st0",
          d: "M489.26,198.52c-8.35-2.38-16.9-3.16-25.45-0.05c-34.19,12.43-21.76,34.19-43.52,43.52\r\n\t\tc-21.76,9.33-71.5-40.41-90.15-24.87c-18.65,15.54-24.87,40.41-37.3,46.63c-12.43,6.22-37.3-15.54-49.74,0\r\n\t\tc-12.43,15.54-12.43,15.54-12.43,15.54h367.18"
        }), React.createElement("path", {
          className: "svg_404_st0",
          d: "M619.14,279.29h220.79c0,0,9.33-34.19-15.54-49.74c-24.87-15.54-31.09,3.11-59.06-3.11\r\n\t\tc0,0-74.6-115.01-133.67-108.8c-59.06,6.22-55.95,49.74-77.71,83.93c-12.04,18.92-27.89,12.14-45.44,4.42"
        })), React.createElement("path", {
          className: "svg_404_st6",
          d: "M684.3,824.74c-0.34-0.05-0.65-0.1-0.93-0.14c-8.88-1.41-29.67,8.62-32.77,10.14\r\n\tc-0.57,1.36-1.46,2.63-2.63,3.78c7.79,0.79,15.82,0.28,22.99-3.05c2.82-1.32,5.45-3.01,7.83-5.03l-0.03,0.05\r\n\tC680.71,828.69,682.56,826.76,684.3,824.74z"
        }), React.createElement("path", {
          className: "svg_404_st6",
          d: "M618.69,841.12c0,0-8.01-4.56-12.84-8.32c-4.83-3.77-16.56-0.12-25.65,0.56c-2.66,0.2-7.85,1.42-13.86,3.04\r\n\tc-0.11,0.11-0.22,0.23-0.32,0.34c0.46,0.21,0.92,0.43,1.38,0.63c11.51,5.07,23.87,7.93,36.44,8.43c4.33,0.07,8.93-0.08,13.51-0.68\r\n\tc0.88-1.39,1.45-2.83,1.69-4.29C618.82,841.02,618.69,841.12,618.69,841.12z"
        }), React.createElement("g", null, React.createElement("path", {
          className: "svg_404_st1",
          d: "M526.27,768.72c-0.2-0.72-0.31-1.47-0.31-2.22c0-0.55,0.06-1.09,0.17-1.63c-1.39,0.44-2.86,0.8-4.39,1.1\r\n\t\tc-0.12,0.56-0.25,1.22-0.38,1.98C523.05,768.15,524.7,768.4,526.27,768.72z"
        }), React.createElement("path", {
          className: "svg_404_st1",
          d: "M563.88,800.56c0.12,0.05,0.23,0.1,0.34,0.14c-0.05-0.13-0.1-0.26-0.14-0.38\r\n\t\tC564.01,800.4,563.95,800.48,563.88,800.56z"
        }), React.createElement("path", {
          className: "svg_404_st1",
          d: "M513.1,767.58c0.5-0.01,1.01-0.02,1.52-0.02c1.54,0,3.05,0.08,4.52,0.19c0.58-0.47,1.1-1.03,1.54-1.58\r\n\t\tc-2.59,0.44-5.33,0.69-8.19,0.69c-0.03,0-0.06,0-0.09,0C512.65,767.13,512.87,767.37,513.1,767.58z"
        }), React.createElement("path", {
          className: "svg_404_st2",
          d: "M574.74,813.76c0.06-0.4,0.09-0.81,0.09-1.21c0-3.42-2.05-6.56-5.47-9.04c1.08,1.4,2.26,3.15,3.49,5.35\r\n\t\tC573.85,810.65,574.44,812.28,574.74,813.76z"
        }), React.createElement("path", {
          className: "svg_404_st2",
          d: "M513.1,767.58c2.28,2.14,4.4,1.51,6.05,0.17c-1.48-0.11-2.98-0.19-4.52-0.19\r\n\t\tC514.11,767.57,513.61,767.57,513.1,767.58z"
        }), React.createElement("path", {
          className: "svg_404_st2",
          d: "M498.13,802.17c-0.27-0.77,0.17-1.6,0.98-1.86c0.81-0.26,1.68,0.16,1.95,0.93l1.22,3.5\r\n\t\tc0.76-0.54,1.48-1.36,2.13-2.52c2.93-5.21-0.54-8.91-3.51-14.7l-1.43-0.32c-0.83-0.19-1.34-0.98-1.15-1.77\r\n\t\tc0.14-0.56,0.59-0.96,1.14-1.09c-1.45-3.69-2.37-8.24-1.57-14.25c-7.03,2.38-11.6,6.23-11.6,10.57c0,4.9,5.81,9.16,14.41,11.41\r\n\t\tc-3.26,2.63-5.2,5.92-5.2,9.49c0,1.01,0.16,2,0.46,2.96c1.09,0.61,2.24,1.04,3.38,1.09L498.13,802.17z"
        }), React.createElement("path", {
          className: "svg_404_st2",
          d: "M583.34,766.5c0-8.41-12.84-15.23-28.69-15.23c-5.38,0-10.42,0.79-14.72,2.16c0.13-0.59,0.2-1.19,0.2-1.8\r\n\t\tc0-5.28-4.88-9.94-12.29-12.67c14.66-4.12,24.33-11.18,24.33-19.21c0-11.18-18.76-20.5-43.64-22.58\r\n\t\tc22.29-3.22,38.68-14.09,38.68-27c0-15.45-23.47-27.98-52.42-27.98c-27.85,0-50.61,11.59-52.31,26.23\r\n\t\tc-23.65,0.45-42.61,13.11-42.61,28.67c0,15.84,19.66,28.69,43.92,28.69c0.63,0,1.25-0.01,1.86-0.03c1.05,1.65,2.52,3.23,4.36,4.72\r\n\t\tc-3.44,2.2-5.51,5-5.51,8.06c0,7.04,10.94,12.75,24.44,12.75c6.53,0,12.46-1.34,16.84-3.52c-0.59,1.24-0.9,2.53-0.9,3.87\r\n\t\tc0,5.68,5.64,10.62,13.99,13.24c4-17.05,13.8-26.18,13.8-26.18s-7.82,15.25-1.82,25.86c0.53,0.94,1.06,1.69,1.58,2.31\r\n\t\tc0.03,0,0.06,0,0.09,0c2.85,0,5.6-0.25,8.19-0.69c1.11-1.39,1.77-2.77,1.77-2.77s-0.34,0.81-0.73,2.58c1.53-0.3,3-0.67,4.39-1.1\r\n\t\tc-0.11,0.54-0.17,1.08-0.17,1.63c0,0.75,0.11,1.5,0.31,2.22c-1.56-0.33-3.21-0.58-4.91-0.77c-0.59,3.58-1.1,9.43-0.58,18.07\r\n\t\tc0.63,10.36,6.21,18.01,12.01,20.59c0.16-0.15,0.36-0.28,0.59-0.35c0.81-0.26,1.68,0.16,1.95,0.93l0.08,0.24\r\n\t\tc2.41,0.42,4.73-0.1,6.61-1.75c7.08-6.2-7.11-23.95-7.11-23.95s13.84,2.5,17.56,10.75c3.72,8.25,0.84,19.49,9.02,19.17\r\n\t\tc5.85-0.23,4.16-7.07,2.72-10.94c-0.12-0.05-0.23-0.1-0.34-0.14c0.07-0.08,0.13-0.16,0.2-0.24c-0.51-1.33-0.96-2.23-0.96-2.23\r\n\t\ts0.71,0.2,1.91,1.04c1.72-2.37,2.73-5.15,2.73-8.13c0-0.8-0.09-1.59-0.23-2.36c-0.29-0.07-0.57-0.19-0.79-0.41\r\n\t\tc-0.57-0.6-0.53-1.52,0.09-2.07c-0.73-1.91-1.87-3.66-3.36-5.16C575,779.02,583.34,773.28,583.34,766.5z M493.4,753.1l-3.04,2.64\r\n\t\tc-0.63,0.55-1.61,0.5-2.18-0.1c-0.57-0.6-0.53-1.53,0.1-2.08l3.04-2.64c0.63-0.55,1.61-0.5,2.18,0.1\r\n\t\tC494.07,751.63,494.03,752.55,493.4,753.1z M504.44,704.42c0.81-0.26,1.68,0.16,1.95,0.93l1.3,3.72c0.27,0.77-0.17,1.6-0.98,1.86\r\n\t\tc-0.81,0.26-1.68-0.16-1.95-0.93l-1.3-3.72C503.2,705.51,503.63,704.68,504.44,704.42z M508.18,739.22\r\n\t\tc-0.19,0.79-1.02,1.28-1.85,1.1l-4-0.89c-0.83-0.19-1.34-0.98-1.15-1.77c0.19-0.79,1.02-1.28,1.85-1.1l4,0.89\r\n\t\tC507.86,737.64,508.37,738.43,508.18,739.22z M537.79,778.6c-0.81,0.26-1.68-0.16-1.95-0.93l-1.3-3.72\r\n\t\tc-0.27-0.77,0.17-1.6,0.98-1.86c0.81-0.26,1.68,0.16,1.95,0.93l1.3,3.72C539.03,777.51,538.6,778.35,537.79,778.6z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M490.88,800.21c-0.58-0.73-0.97-1.16-0.97-1.16S490.28,799.52,490.88,800.21z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M474.92,815.98c-0.02-0.02-0.04-0.03-0.04-0.03S474.89,815.96,474.92,815.98z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M512.42,766.86c-4.93-0.01-9.55-0.73-13.55-1.99c-0.3,1.3-0.58,2.64-0.81,4.03c-0.07,0.41-0.12,0.8-0.17,1.2\r\n\t\tc4.31-1.46,9.54-2.37,15.22-2.51C512.87,767.37,512.65,767.13,512.42,766.86z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M564.22,800.7c1.93,0.79,3.67,1.73,5.14,2.8c-1.75-2.26-3.25-3.6-4.34-4.37c-0.3,0.41-0.61,0.81-0.95,1.19\r\n\t\tC564.13,800.45,564.17,800.57,564.22,800.7z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M519.15,767.75c0.74,0.06,1.48,0.12,2.21,0.2c0.13-0.76,0.25-1.41,0.38-1.98c-0.34,0.07-0.69,0.13-1.04,0.19\r\n\t\tC520.24,766.72,519.72,767.28,519.15,767.75z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M561.5,811.64c-8.18,0.32-5.3-10.91-9.02-19.17c-3.72-8.25-17.56-10.75-17.56-10.75s14.19,17.75,7.11,23.95\r\n\t\tc-1.89,1.65-4.21,2.17-6.61,1.75l1.21,3.48c0.27,0.77-0.17,1.6-0.98,1.86c-0.81,0.26-1.68-0.16-1.95-0.93l-1.3-3.72\r\n\t\tc-0.19-0.55-0.02-1.12,0.38-1.5c-5.8-2.59-11.38-10.24-12.01-20.59c-0.52-8.64-0.02-14.48,0.58-18.07\r\n\t\tc-0.72-0.08-1.46-0.15-2.21-0.2c-1.64,1.35-3.76,1.98-6.05-0.17c-5.68,0.14-10.91,1.05-15.22,2.51c-0.8,6.01,0.12,10.56,1.57,14.25\r\n\t\tc0.23-0.05,0.47-0.06,0.71-0.01l4,0.89c0.83,0.19,1.34,0.98,1.15,1.77c-0.19,0.79-1.02,1.28-1.85,1.1l-2.57-0.57\r\n\t\tc2.97,5.8,6.44,9.5,3.51,14.7c-0.65,1.16-1.37,1.98-2.13,2.52l0.08,0.22c0.27,0.77-0.17,1.6-0.98,1.86\r\n\t\tc-0.81,0.26-1.68-0.16-1.95-0.93l-0.09-0.27c-1.14-0.05-2.29-0.48-3.38-1.09c2.23,7.19,12.43,12.63,24.69,12.63\r\n\t\tc1.72,0,3.39-0.11,5.01-0.31c3.17,5.92,12.73,10.23,24.03,10.23c13.18,0,23.98-5.86,25.05-13.31c-0.3-1.48-0.89-3.12-1.89-4.9\r\n\t\tc-1.23-2.21-2.4-3.95-3.49-5.35c-1.48-1.07-3.21-2.01-5.14-2.8C565.66,804.58,567.36,811.42,561.5,811.64z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M564.08,800.32c0.34-0.38,0.65-0.78,0.95-1.19c-1.19-0.84-1.91-1.04-1.91-1.04S563.57,798.99,564.08,800.32z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M522.46,763.39c0,0-0.66,1.38-1.77,2.77c0.35-0.06,0.7-0.12,1.04-0.19\r\n\t\tC522.12,764.21,522.46,763.39,522.46,763.39z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M510.84,764.55c-6-10.61,1.82-25.86,1.82-25.86s-9.8,9.13-13.8,26.18c4,1.25,8.62,1.98,13.55,1.99\r\n\t\tC511.9,766.24,511.37,765.49,510.84,764.55z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M491.32,750.93l-3.04,2.64c-0.63,0.55-0.68,1.48-0.1,2.08c0.57,0.6,1.55,0.64,2.18,0.1l3.04-2.64\r\n\t\tc0.63-0.55,0.68-1.48,0.1-2.08C492.93,750.43,491.95,750.38,491.32,750.93z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M568.92,788.32l3.04-2.64c0.63-0.55,0.68-1.48,0.1-2.08c-0.57-0.6-1.55-0.64-2.18-0.1l-3.04,2.64\r\n\t\tc0,0-0.01,0.01-0.01,0.01c0.31,0.8,0.54,1.63,0.7,2.48C568.01,788.75,568.53,788.66,568.92,788.32z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M566.74,788.22c0.22,0.23,0.5,0.35,0.79,0.41c-0.15-0.85-0.39-1.68-0.7-2.48\r\n\t\tC566.21,786.71,566.17,787.63,566.74,788.22z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M507.03,737.46l-4-0.89c-0.83-0.19-1.66,0.31-1.85,1.1c-0.19,0.79,0.32,1.58,1.15,1.77l4,0.89\r\n\t\tc0.83,0.19,1.66-0.31,1.85-1.1S507.86,737.64,507.03,737.46z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M473.96,793.6l4,0.89c0.83,0.19,1.66-0.31,1.85-1.1c0.19-0.79-0.32-1.58-1.15-1.77l-4-0.89\r\n\t\tc-0.83-0.19-1.66,0.31-1.85,1.1S473.13,793.41,473.96,793.6z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M498.32,785.43c-0.19,0.79,0.32,1.58,1.15,1.77l1.43,0.32c-0.51-0.99-1-2.04-1.44-3.17\r\n\t\tC498.91,784.48,498.46,784.88,498.32,785.43z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M503.47,788.09c0.83,0.19,1.66-0.31,1.85-1.1c0.19-0.79-0.32-1.58-1.15-1.77l-4-0.89\r\n\t\tc-0.24-0.05-0.49-0.04-0.71,0.01c0.44,1.13,0.93,2.18,1.44,3.17L503.47,788.09z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M504.76,709.99c0.27,0.77,1.14,1.19,1.95,0.93c0.81-0.26,1.25-1.09,0.98-1.86l-1.3-3.72\r\n\t\tc-0.27-0.77-1.14-1.19-1.95-0.93c-0.81,0.26-1.25,1.09-0.98,1.86L504.76,709.99z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M499.11,800.31c-0.81,0.26-1.25,1.09-0.98,1.86l1.2,3.45c1.01,0.04,2.01-0.21,2.94-0.88l-1.22-3.5\r\n\t\tC500.79,800.47,499.92,800.05,499.11,800.31z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M499.34,805.62l0.09,0.27c0.27,0.77,1.14,1.19,1.95,0.93c0.81-0.26,1.25-1.09,0.98-1.86l-0.08-0.22\r\n\t\tC501.34,805.41,500.34,805.66,499.34,805.62z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M537.47,773.03c-0.27-0.77-1.14-1.19-1.95-0.93c-0.81,0.26-1.25,1.09-0.98,1.86l1.3,3.72\r\n\t\tc0.27,0.77,1.14,1.19,1.95,0.93c0.81-0.26,1.25-1.09,0.98-1.86L537.47,773.03z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M535.33,807.19c-0.27-0.77-1.14-1.19-1.95-0.93c-0.23,0.07-0.43,0.2-0.59,0.35c0.88,0.39,1.76,0.67,2.63,0.82\r\n\t\tL535.33,807.19z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M532.41,808.12l1.3,3.72c0.27,0.77,1.14,1.19,1.95,0.93c0.81-0.26,1.25-1.09,0.98-1.86l-1.21-3.48\r\n\t\tc-0.87-0.15-1.75-0.43-2.63-0.82C532.39,806.99,532.22,807.57,532.41,808.12z"
        }), React.createElement("ellipse", {
          className: "svg_404_st4",
          cx: "482.04",
          cy: "616.33",
          rx: "23.38",
          ry: "11.69"
        }), React.createElement("path", {
          className: "svg_404_st4",
          d: "M438,608.39c-6.27,0-11.36-2.54-11.36-5.68c0-3.14,5.09-5.68,11.36-5.68c6.27,0,11.36,2.54,11.36,5.68\r\n\t\tC449.36,605.85,444.27,608.39,438,608.39z"
        }), React.createElement("path", {
          className: "svg_404_st4",
          d: "M438.35,654.64c-6.27,0-11.36-2.54-11.36-5.68c0-3.14,5.09-5.68,11.36-5.68s11.36,2.54,11.36,5.68\r\n\t\tC449.71,652.1,444.63,654.64,438.35,654.64z"
        }), React.createElement("path", {
          className: "svg_404_st4",
          d: "M449.09,670.58c6.73,0,13.06,1.49,18.6,4.1c2.3-14.78,16.73-26.17,34.2-26.17c19.07,0,34.52,13.57,34.52,30.31\r\n\t\tc0,3.86-0.83,7.55-2.33,10.95c-5-11.33-17.52-19.37-32.19-19.37c-10.09,0-19.17,3.81-25.48,9.87c7.41,6.28,12.03,15.09,12.03,24.85\r\n\t\tc0,4.4-0.95,8.6-2.66,12.47c-5.7-12.91-19.97-22.07-36.69-22.07c-16.72,0-30.99,9.16-36.69,22.07c-1.71-3.87-2.66-8.07-2.66-12.47\r\n\t\tC409.74,686.05,427.36,670.58,449.09,670.58z"
        }))));
      }
    }
  });
  /*****************************
  INTERNAL MODULE: ./views/error
  *****************************/

  ims.set('./views/error', {
    hash: 1897032991,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ErrorPage = ErrorPage;

      var React = require("react");

      function ErrorPage() {
        return React.createElement(React.Fragment, null, React.createElement("h1", null, "Error"), React.createElement("p", null, "Contenido no conseguido..."));
      }
    }
  });
  /*******************************
  INTERNAL MODULE: ./views/example
  *******************************/

  ims.set('./views/example', {
    hash: 1440646096,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Example = Example;

      var React = require("react");

      var _code = require("@beyond/docs/code");

      const exampleCode = `
function A() {
console.log(1, 'ejemplo');
}
`;

      function Example() {
        return React.createElement(React.Fragment, null, React.createElement("h1", null, "Un framework universal"), React.createElement("p", null, "La tecnolog\u00EDa web se encuentra presente hoy en todas las \u00E1reas. Sin embargo, los. Programadores que usan estas tecnolog\u00EDas no necesariamente tienen conocimientos en todas ellas. Esto se debe principalmente a la gran v"), React.createElement("h2", null, "Subtitulo"), React.createElement("p", null, "Javascript es un lenguaje universal, esto significa que puede utilzarse en todos los entornos de desarrollo, sin embargo, en la practica, los desarrolladores suelen estar asociados a un entorno especifico de desarrollo y con una vision limitada en lo que refiere al alcance que podria tener el codigo que realiza."), React.createElement("h3", null, "Subtitulo menor"), React.createElement("p", null, "No se trata de usar una misma libreria o framework para todos los proyectos, sino de lograr utilizar de forma universal un lenguaje que lo es desde su nacimiento. Si el Lenguaje es universal, las harramientas deber\u00EDan permitirnos crear c\u00F3digo universal, entiendo por universal, no solo hablar de el frontend y el backend del mundo web, hoy em dia javascript cubre mucho mas que eso, herramientas como webpack no son soluciones web o backend, son soluciones desktop que corren en el computador, al igual que cualquier paquete npm."), React.createElement(_code.Code, {
          language: "js"
        }, exampleCode), React.createElement("p", null, "La tecnolog\u00EDa web se encuentra presente hoy en todas las \u00E1reas. Sin embargo, los. Programadores que usan estas tecnolog\u00EDas no necesariamente tienen conocimientos en todas ellas. Esto se debe principalmente a la gran v"), React.createElement("h2", null, "Subtitulo"), React.createElement("p", null, "Javascript es un lenguaje universal, esto significa que puede utilzarse en todos los entornos de desarrollo, sin embargo, en la practica, los desarrolladores suelen estar asociados a un entorno especifico de desarrollo y con una vision limitada en lo que refiere al alcance que podria tener el codigo que realiza."), React.createElement("h3", null, "Subtitulo menor"), React.createElement("p", null, "No se trata de usar una misma libreria o framework para todos los proyectos, sino de lograr utilizar de forma universal un lenguaje que lo es desde su nacimiento. Si el Lenguaje es universal, las harramientas deber\u00EDan permitirnos crear c\u00F3digo universal, entiendo por universal, no solo hablar de el frontend y el backend del mundo web, hoy em dia javascript cubre mucho mas que eso, herramientas como webpack no son soluciones web o backend, son soluciones desktop que corren en el computador, al igual que cualquier paquete npm."), React.createElement(_code.Code, {
          language: "js"
        }, exampleCode));
      }
    }
  });
  /*****************************
  INTERNAL MODULE: ./views/intro
  *****************************/

  ims.set('./views/intro', {
    hash: 2788879376,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.__Intro = __Intro;

      var React = require("react");

      var _link = require("@beyond/ui/link");

      var _image = require("@beyond/ui/image");

      var _html = require("@beyond/docs/components/html");

      function __Intro() {
        return React.createElement(React.Fragment, null, React.createElement("h2", {
          id: "intro"
        }, "Bienvenido"), React.createElement("p", null, "Bienvenido a la documentaci\u00F3n de ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), ". En este documento se realiza un repaso sobre que es ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " y cuales son sus caracter\u00EDsticas princiales. Si deseas ver c\u00F3mo funciona en cuesti\u00F3n de minutos, te recomendamos realices nuestro ", React.createElement(_link.Link, {
          href: "/tutorial/web"
        }, "tutorial b\u00E1sico.")), React.createElement("h3", {
          id: "what-is"
        }, " \u00BFQu\u00E9 es ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), "?"), React.createElement("p", null, "Es un ", React.createElement("strong", null, "meta-framework"), " para trabajar con proyectos ", React.createElement("span", {
          className: "inline"
        }, "JavaScript"), " de forma universal, esto quiere decir que se puede usar para realizar proyectos en cualquier entorno en el que ", React.createElement("span", {
          className: "accent"
        }, "Javascript"), " se encuentra disponible; a saber: Sistemas operativos, servicios o backend con Node, soluciones web y aplicaciones m\u00F3viles."), React.createElement(_image.BeyondImage, {
          src: "/images/tutorials/beyond-environments.png",
          alt: "Beyond environments"
        }), React.createElement("h3", null, "\u00BFPor qu\u00E9 usar ", React.createElement(_html.BeyondName, null), "?"), React.createElement("p", null, "El desarrollo con tecnolog\u00EDas web es bastante complejo, por diversos motivos que, podriamos sintetizar a grandes rasgos en tres items generales:"), React.createElement("ul", null, React.createElement("li", null, "Javascript es un lenguaje sofisticado y en constante evoluci\u00F3n."), React.createElement("li", null, "Si bien Javascript es un lenguaje universal, las APIs provistas para los entornos en donde puede ser usado son diferentes entre s\u00ED."), React.createElement("li", null, "Existe un gran n\u00FAmero de librerias y frameworks para cada entorno donde el lenguaje existe, en muchas ocasiones incompatibles entre s\u00ED. Esto ha logrado que la comunidad de desarrollo web se mantenga separada en burbujas de stacks tecnol\u00F3gicos que, en muchas ocasiones ", React.createElement("i", null, "complican"), " la posibilidad de un programador de aprender nuevas herramientas.")), React.createElement("p", null, React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " tiene c\u00F3mo foco ofrecer una estructura base y estandarizada que permita trabajar en cualquier ecosistema en el que ", React.createElement("strong", null, "JavaScript"), " se encuentre disponible, simplificando el proceso y garantizando la compatibilidad entre entornos. Asimismo, es compatible con la mayoria de frameworks de vista y suministra medios para integrar nuevas librerias."));
      }
    }
  });
  /*****************************************
  INTERNAL MODULE: ./views/right-aside/index
  *****************************************/

  ims.set('./views/right-aside/index', {
    hash: 175120201,
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
            console.log(0.1, titles);
          }, 50);
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
  let NodeWidget, ContentsContainer, Controller, ContentsPage, useContent, BeyondName, RightAside; // Module exports

  _exports.RightAside = RightAside;
  _exports.BeyondName = BeyondName;
  _exports.useContent = useContent;
  _exports.ContentsPage = ContentsPage;
  _exports.Controller = Controller;
  _exports.ContentsContainer = ContentsContainer;
  _exports.NodeWidget = NodeWidget;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'NodeWidget') && (_exports.NodeWidget = NodeWidget = require ? require('./api/node-widget').NodeWidget : value);
    (require || prop === 'ContentsContainer') && (_exports.ContentsContainer = ContentsContainer = require ? require('./container').ContentsContainer : value);
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller').Controller : value);
    (require || prop === 'ContentsPage') && (_exports.ContentsPage = ContentsPage = require ? require('./page').ContentsPage : value);
    (require || prop === 'useContent') && (_exports.useContent = useContent = require ? require('./use-content').useContent : value);
    (require || prop === 'BeyondName') && (_exports.BeyondName = BeyondName = require ? require('./views/beyond').BeyondName : value);
    (require || prop === 'RightAside') && (_exports.RightAside = RightAside = require ? require('./views/right-aside/index').RightAside : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
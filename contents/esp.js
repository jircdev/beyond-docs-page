System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0/jsx-runtime", "@beyond/docs@1/components/html", "@beyond/docs@1/code"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, LANGUAGE, Intro, Cli, QuickStart, TutorialStart, TutorialBackend, TutorialRouting, TutorialFirstModule, PackagesCreate, PackagesTypes, PackagesDistributions, PackagesJson, PackagesPublish, PackagesBeyondjs, PackagesDependencies, ModulesIntroduction, ModulesCreation, ModulesConfig, ModulesBundles, ModulesProcessors, BackendIntro, BackendBridges, BackendDebug, BackendBee, BackendSsrserver, Widgets, WidgetsControllers, WidgetsObject, WidgetsLayout, WidgetsPage, WidgetsRendering, Routing, AddRenderingEngine, Styles, StylesModules, StylesThemes, StylesImports, StylesTemplate, Modular, Universal, DevServer, Steps, __beyond_pkg, hmr;
  _export({
    LANGUAGE: void 0,
    Intro: void 0,
    Cli: void 0,
    QuickStart: void 0,
    TutorialStart: void 0,
    TutorialBackend: void 0,
    TutorialRouting: void 0,
    TutorialFirstModule: void 0,
    PackagesCreate: void 0,
    PackagesTypes: void 0,
    PackagesDistributions: void 0,
    PackagesJson: void 0,
    PackagesPublish: void 0,
    PackagesBeyondjs: void 0,
    PackagesDependencies: void 0,
    ModulesIntroduction: void 0,
    ModulesCreation: void 0,
    ModulesConfig: void 0,
    ModulesBundles: void 0,
    ModulesProcessors: void 0,
    BackendIntro: void 0,
    BackendBridges: void 0,
    BackendDebug: void 0,
    BackendBee: void 0,
    BackendSsrserver: void 0,
    Widgets: void 0,
    WidgetsControllers: void 0,
    WidgetsObject: void 0,
    WidgetsLayout: void 0,
    WidgetsPage: void 0,
    WidgetsRendering: void 0,
    Routing: void 0,
    AddRenderingEngine: void 0,
    Styles: void 0,
    StylesModules: void 0,
    StylesThemes: void 0,
    StylesImports: void 0,
    StylesTemplate: void 0,
    Modular: void 0,
    Universal: void 0,
    DevServer: void 0,
    Steps: void 0
  });
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react1820JsxRuntime) {
      dependency_1 = _react1820JsxRuntime;
    }, function (_beyondDocs1ComponentsHtml) {
      dependency_2 = _beyondDocs1ComponentsHtml;
    }, function (_beyondDocs1Code) {
      dependency_3 = _beyondDocs1Code;
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
          "vspecifier": "@beyond/docs@1/contents/esp"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react/jsx-runtime', dependency_1], ['@beyond/docs/components/html', dependency_2], ['@beyond/docs/code', dependency_3]]);
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./mdx/backend/bee.mdx
      *************************************/
      ims.set('./mdx/backend/bee.mdx', {
        hash: 1801517364,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              strong: "strong",
              ol: "ol",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Backend",
                title: "BEE"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los bee son procesos gestionados por BeyondJS. Se comportan como un servicio node,\r\ncon la diferencia de que son gestionados\r\npor el servicio principal de Beyond, el cual analiza, revisa y compila los cambios\r\nen tiempo real para dejar disponible en\r\nmemoria una nueva versión de los bundles con los cambios de código aplicados por medio de HMR,\r\nbrindando la oportunidad de\r\ntemer acceso a las funcionalidades de código actualizadas, sin necesidad de reiniciar el proceso node."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La actualización en tiempo real en el proceso Node ofrece ventajas en tiempo de ejecución pues evita realizar toda la carga a nivel de tiempo recursos que implica detener el proceso completo y volver a levantarlo, esto puede aplicar para valores en memoria o conexiones a bases de datos, por mencionar ejemplos. BeyondJS detecta los cambios en un archivo o ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/modules#internal-modules",
                  children: "Modulo interno"
                }), ", actualiza el cambio, realiza una compilación nueva del bundle en el momento y deja la nueva versión."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "El flujo de funcionamiento del Bee es el siguiente:"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Beyond levanta el servicio."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Se realiza un repaso del arbol de dependencias de los bundles (notar que es a nivel de bundles y no módulos internos)."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Se carga en memoria el código procesado y se agregan whatchers para poder detectar cambios."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Si existe un cambio en un archivo, el mismo es detectado y se reemplaza ese segmento de código."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Los imports dinámicos no son cargados cuando el BEE levanta, sino que se solicitan a demanda."
                })
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./mdx/backend/bridges.mdx
      *****************************************/

      ims.set('./mdx/backend/bridges.mdx', {
        hash: 905429458,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              blockquote: "blockquote",
              ol: "ol",
              li: "li",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Backend",
                title: "Bridges"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los bridges en BeyondJS son una herramienta poderosa que\r\nte permite optimizar tu desarrollo al máximo."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Un bridge es un tipo especial de Bundle que te permite crear código en\r\nel lado del servidor y que BeyondJS genera automáticamente un objeto\r\nde modo API. De esta manera, puedes consumir los métodos exportados de\r\nforma remota a través de websockets."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Puedes importar el bundle desde otro servicio o desde un código\r\ncliente y tener acceso directo a los métodos definidos, con tipado\r\nde datos y validaciones integradas. Esto significa que sólo es\r\nnecesario escribir el código una vez, lo que te permite ahorrar\r\ntiempo y esfuerzo en tu desarrollo."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "Por supuesto, la api generada sólo posee la especificación de los metodos y\r\nla conexión websocket al bridge, la lógica queda encapsulada en el código\r\nservidor."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En esta sección de la documentación aprenderás cómo crear y consumir\r\nbridges en BeyondJS, así como recomendaciones y ejemplos para sacar\r\nel máximo provecho de esta herramienta."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Crear un bridge"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "¿Estás listo para sacar el máximo provecho de BeyondJS y\r\noptimizar tus proyectos con bridges? ¡Aquí te mostraremos un tutorial\r\npaso a paso para crear un bridge y exportar tus métodos de forma fácil\r\ny rápida!"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Creación del módulo"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para darle contexto al proceso, imaginaremos que estás\r\ncodificando en un paquete cuyo nombre es \"awesome-api\""
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Asegurate de estar en la raiz de tu proyecto a la altura del archivo\r\n", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "package.json"
                    }), "."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Abre la terminal y ejecuta el comando ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "beyond add module"
                    }), "."]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                      children: ["Este comando es interactivo, lo que significa que requiere una\r\nconsola con funcionalidades interactivas para su correcta ejecución.\r\nSi no cuentas con una consola interactiva, se recomienda\r\ncrear el módulo usando el Workspace de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " o\r\nmanualmente ", (0, _jsxRuntime.jsx)(_html.Link, {
                        href: "/docs/modules/creation",
                        children: "siguiendo los pasos detallados en la\r\ndocumentación."
                      })]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "El comando preguntará por el subpath, este es el nombre del módulo\r\nque servirá para exportarlo posteriormente."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["seleccionamos ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "bridge"
                    }), " como el tipo de bundle a crear."]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Código del Bridge"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Una vez creado, abre el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: ".ts"
                }), " del módulo y crea el\r\nobjeto con los métodos que desees exportar.\r\nPara que ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " pueda generar el bridge del lado cliente debes\r\nexportar el objeto agregando los comentarios\r\nmágicos /*bundle*//*actions*/ despues de la palabra clave \"exports\""]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El código de tu bridge deberia verse similar al siguiente:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "bridge.ts",
                children: `export /*actions*/ /*bundle*/ class Auth {
    // métodos y definiciones
}`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En el código de ejemplo, se muestra cómo exportar una clase para ser\r\ninstanciada como un bridge. Sin embargo, es posible exportar un objeto\r\nya instanciado o un objeto plano directamente como un bridge.\r\nEsto se hace agregando los comentarios mágicos correspondientes\r\n(/*bundle*//*actions*/) a la expresión de exportación. El proceso de\r\nimportación y uso del bridge sigue siendo el mismo, independientemente\r\nde si se está trabajando con una clase o un objeto."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Importación del módulo"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para utilizar tus métodos en otros módulos, importa el bridge\r\nusando el bare-specifier, es decir, utilizando el nombre del paquete\r\nseguido del subpath correspondiente. Cómo se muestra a continuación:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import {auth} from 'awesome-api/auth';`
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ["backend/debug", "backend/ssrserver"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***************************************
      INTERNAL MODULE: ./mdx/backend/debug.mdx
      ***************************************/

      ims.set('./mdx/backend/debug.mdx', {
        hash: 20529363,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Backend",
                title: "Depuración"
              }), "\n", (0, _jsxRuntime.jsx)("app-under-construction", {})]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***************************************
      INTERNAL MODULE: ./mdx/backend/intro.mdx
      ***************************************/

      ims.set('./mdx/backend/intro.mdx', {
        hash: 3388552979,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              code: "code",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Backend",
                title: "Programación Backend"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Con ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ", desarrollar paquetes, aplicaciones o librerías backend para Deno,\r\nNode o Bun es una tarea sencilla y potente. ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " te permite trabajar de forma\r\nnatural y sin mayores configuraciones para crear código con funcionalidades para cada\r\nplataforma y distribuirlo con facilidad."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["No necesitas herramientas de terceros,\r\nya que ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " trabaja directamente sobre los estándares de Node.js y NPM,\r\ngenerando el código final para ser consumido por los estándares de resolución\r\nde módulos como ESM, CJS, AMD o SJS. Con ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " tendrás un control completo\r\nsobre tu código y podrás distribuirlo de manera más eficaz."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para crear un paquete que pueda ser ejecutado en un engine como Node o Deno,\r\nsolo se requiere especificar en el\r\n", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), " la distribución correspondiente."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "package.json",
                language: "json",
                children: `"deployment": {
    "distributions": [
      {
        "name": "init-backend",
        "environment": "development",
        "platform": "backend",
        "ports": {
          "bundles": "7070",
          "http": "7073",
          "inspect": "7072"
        }
      }
    ]
  }`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Este código configura el DevServer para ejecutar el código de un servicio\r\nNode o Bun en entorno de desarrollo. A continuación explicamos algunos detalles:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "El valor 'backend' de 'platform' indica que se trata de código que será ejecutado en entornos\r\nde código backend como Node o Bun,\r\nademás de ser compatible con Deno mediante configuraciones adicionales."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["La entrada 'ports' define tres valores de puertos, incluyendo el puerto\r\n", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "bundles"
                  }), " que es utilizado por el DevServer para retornar los paquetes cuando\r\nel entorno de ejecución los requiera, y el puerto ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "inspect"
                  }), " que permite utilizar\r\nherramientas de depuración como el debugger de VSCode o navegadores como Chrome o Edge.\r\nEsto es esencial para trabajar de manera eficiente con HMR, una de las características\r\nmás poderosas de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {})]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Formato de empaquetamiento"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Aunque la experiencia de desarrollo para el\r\nprogramador es el estándar de EcmaScript Modules (ESM),\r\nel DevServer de BeyondJS genera los bundles para plataformas\r\nBackend en el formato de CommonJS por defecto.\r\nEsto se debe a la gran cantidad de paquetes que\r\nutilizan este formato y a que Node.js aún no brinda soporte\r\ncompleto para el código con formato EcmaScript."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Sin embargo, modificar el formato de empaquetamiento es\r\nsumamente sencillo. Sólo debes agregar una propiedad\r\n\"bundles\" en la distribución para indicar el modo en el\r\nque se espera que se generen los bundles."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Por ejemplo, si deseas trabajar con Deno y que los bundles\r\nde tu paquete puedan ser consumidos con \"http imports\",\r\nsólo debes agregar el siguiente punto de entrada a la\r\ndistribución en el package.json:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                language: "json",
                children: `"bundles": {
    "mode": "esm"
}`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Con este ajuste en el ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), ", el DevServer automatizará el proceso\r\nde empaquetado del código sin necesidad de reiniciar ningún servicio,\r\nya que lo hace en tiempo real."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "package.json",
                language: "json",
                children: `"deployment": {
    "distributions": [
      {
        "name": "init-backend",
        "environment": "development",
        "platform": "backend",
        "bundles": {
            "mode": "esm"
        }
        "ports": {
          "bundles": "7070",
          "http": "7073",
          "inspect": "7072"
        }
      }
    ]
  }`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["De este modo, la distribución en el ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), " quedaria de la siguiente forma:\r\nAdemás, el DevServer de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), "\r\nofrece la posibilidad de configurar múltiples distribuciones\r\ny probar el empaquetamiento del código simultáneamente,\r\nlo que es altamente eficiente en términos de tiempo y productividad\r\npara desarrolladores que buscan crear paquetes que sean consumidos\r\npor cualquier entorno (¡tambien para quienes no!)."]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /********************************************
      INTERNAL MODULE: ./mdx/backend/ssr-server.mdx
      ********************************************/

      ims.set('./mdx/backend/ssr-server.mdx', {
        hash: 2009080529,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Backend",
                title: "SSR Server"
              }), "\n", (0, _jsxRuntime.jsx)("app-under-construction", {})]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /************************************
      INTERNAL MODULE: ./mdx/cli/module.mdx
      ************************************/

      ims.set('./mdx/cli/module.mdx', {
        hash: 2547198555,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              p: "p",
              h2: "h2",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "Comando: beyond add module"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Crear un módulo específico dentro de un paquete hecho con BeyondJS.\r\nGenera una estructura de directorios y archivos para un módulo dentro de un paquete especificado."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Parámetros"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "package"
                  }), ": Nombre del paquete en el cual se creará el módulo."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "subpath"
                  }), ": Subpath o name del módulo a crear."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Module type"
                  }), ": Representa el tipo de módulo, puede ser: \"page\", \"widget\", \"layout\", \"code\", \"ts\", \"start\"."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Web component name"
                  }), ": Define el nombre del web component sí es un módulo tipo \"page\", \"widget\" o \"layout\"."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "url"
                  }), ": Define la URL para un módulo tipo page."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "about"
                  }), ": Descripción del módulo."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "styles"
                  }), ": Indica si el módulo tiene hojas de estilo."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Multilanguage"
                  }), ": Indica si el módulo tiene multilenguaje."]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*************************************
      INTERNAL MODULE: ./mdx/cli/package.mdx
      *************************************/

      ims.set('./mdx/cli/package.mdx', {
        hash: 495858687,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              p: "p",
              h2: "h2",
              ul: "ul",
              li: "li",
              strong: "strong",
              h3: "h3"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "Comando: beyond add package"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Crear un nuevo paquete con BeyondJS.\r\nEste comando crea una estructura de directorios y archivos para un paquete en BeyondJS, según el tipo de paquete y una serie de parámetros que defina el usuario."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Parámetros"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Specifier"
                  }), ": Especificador del paquete."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Title"
                  }), ": Título del paquete."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "About"
                  }), ": Descripción del paquete."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Package type"
                  }), ": es el nombre de la plantilla que se desea utilizar para el paquete."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Tipos de paquetes en BeyondJS:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "web: proporciona una estructura básica para una aplicación web.\r\nbackend: proporciona una estructura básica para una aplicación de backend en Node.js.\r\nnode: proporciona una estructura básica para un proyecto de Node.js.\r\nexpress: proporciona una estructura básica para una aplicación web utilizando el framework Express en Node.js.\r\nreact: proporciona una estructura básica para un paquete con react.\r\nsvelte: proporciona una estructura básica para un paquete con svelte.\r\nvue: proporciona una estructura básica para un paquete con vue.\r\nweb-backend: proporciona una estructura básica para una aplicación web con un backend en Node.js.\r\nempty: proporciona una estructura mínima requerida para un paquete en BeyondJS."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./mdx/foundations/bare-specifiers.mdx
      *****************************************************/

      ims.set('./mdx/foundations/bare-specifiers.mdx', {
        hash: 91447183,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                id: "intro",
                pretitle: "Fundamentos",
                title: "Estructura Modular"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Un bare specifier es una forma de especificar un módulo en JavaScript para importarlo sin especificar el archivo completo.\r\nEn lugar de colocar la ruta completa del archivo, se especifica solo el nombre del paquete o módulo tal como está definido\r\nen el archivo package.json y el sistema de módulos se encarga de encontrar y cargar el archivo correcto correspondiente"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Por ejemplo en el siguiente código"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import {someFunction} from 'my-module';`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["En este caso, ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "my-module"
                }), " es el nombre del paquete o módulo que se está importando y ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "someFunction"
                }), " es el nombre de la función\r\nespecífica que se está importando."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El uso de corchetes \"", `{}`, "\" indica que se está importando una función específica en lugar de todo el módulo (destructuring)."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS hace uso de los bare specifiers para gestionar la importación y exportación de paquetes y modulos en tus proyectos y\r\ngestiona su procesamiento para que el código pueda trabajarse de la misma forma en cualquier entorno."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Actualmente los import maps no son soportados de forma estandarizada por los navegadores.\r\nBeyondJS utiliza el sistema de módulos SystemJS que proporciona un soporte para import maps,\r\nlo cual permite especificar la ruta de los módulos en lugar de utilizar rutas absolutas."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Además, BeyondJS automatiza la generación de import maps y la configuración de SystemJS para que los desarrolladores no tengan\r\nque preocuparse por ello."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "De esta manera, los programadores pueden seguir utilizando el estándar de EcmaScript para importar módulos, incluso en entornos\r\ndonde no está soportado de forma nativa."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /************************************************
      INTERNAL MODULE: ./mdx/foundations/dev-server.mdx
      ************************************************/

      ims.set('./mdx/foundations/dev-server.mdx', {
        hash: 2882886657,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              blockquote: "blockquote",
              p: "p",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                id: "intro",
                pretitle: "Fundamentos",
                title: "DevServer"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "En este documento veremos qué es el Dev Server de Beyond, cómo funciona y cómo se configura"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)("img", {
                src: "/images/dev-server.jpg",
                alt: "BeyondJS dev server"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS ofrece un servidor de desarrollo que se encarga de proporcionar el código ya empaquetado de los módulos para su uso en el entorno\r\nen el que se está trabajando. Su función principal es retornar el código en el formato de sistema de resolución de módulos requerido y\r\nbrindar una experiencia fluida y homogénea en el proceso de creación de código."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Además, el DevServer permite ejecutar múltiples proyectos simultáneamente,\r\nlo que es muy útil en caso de trabajar en varios proyectos al mismo tiempo, cómo casos donde se trabaje con aplicaciones clientes y microservicios\r\nque se conectan entre sí."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El desarrollador programa utilizando sintaxis de EcmaScript Modules, y el DevServer se encarga de transpilar el código al formato requerido\r\ny ponerlo a disposición inmediatamente para su uso en el entorno en el que se está programando."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los sistemas de resolución de módulo soportados por el DevServer de BeyondJS son:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "CommonJs (CJS)."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "EcmaScript Modules (ESM)."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "SystemJS (SJS)."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Asyncronous Module Definition (AMD)."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El código de los proyectos es empaquetado en base a los módulos definidos, cada módulo genera un bundle independiente, lo que optimiza\r\nel proceso de carga y mantenimiento, pues la velocidad de arranque y desarrollo se mantiene eficiente al no impactar el crecimiento del proyecto en ella."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                text: "Configuración"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El comportamiento del DevServer, se define por medio de la configuración de distribuciones."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Las distribuciones son configuraciones que permiten definir que tratamiento se le desea dar a los paquetes en el entorno de desarrollo."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El programador puede configurar puertos de inspección, tipo de resolución de módulos o comportamiento del compilador de typescript, entre otras cosas."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Por defecto, los proyectos BeyondJS vienen con una distribución ya creada, pero se pueden agregar tantas cómo el programador considere necesarias."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: ` {
    "name": "web",
    "platform": "web",
    "environment": "development",
    "ports": {
        "bundles": 3500
    }
},
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Un proyecto o paquete soporta múltiples distribuciones configuradas al mismo tiempo, esto provee la posibilidad de\r\nvalidar el comportamiento del código bajo diferentes escenarios de forma simple y para integrar funcionalidades de Backend y Frontend en un mismo\r\nproyecto."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Para leer más acerca de las distribuciones, puedes dirigirte a la ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/distributions",
                    children: "sección de Distribuciones"
                  }), "."]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./mdx/foundations/glosary.mdx
      *********************************************/

      ims.set('./mdx/foundations/glosary.mdx', {
        hash: 2513655792,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Glosario de términos"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "EAC"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "(\"External Array Configuration\") Los objetos cuyas propiedades son EAC pueden esperar dos valores, un arreglo o una cadena de texto. Si se pasa una cadena de texto, BeyondJS toma el valor como una ruta relativa para la ubicación del archivo externo de configuración. Arreglo de configuración que puede encontrarse en un archivo independiente y cuyos elementos son de tipo EOC."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "EOC"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "(\"External Object Configuration\") Objeto de configuración que puede ser includo de forma directa como valor o ser referenciado como un archivo externo. Los objetos cuyas propiedades son EOC pueden esperar dos valores: un objeto o una cadena de texto. Si la propiedad tiene definido como valor una cadena de texto, BeyondJS toma el valor como una ruta relativa para la ubicación del archivo externo de configuración."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./mdx/foundations/hmr.mdx
      *****************************************/

      ims.set('./mdx/foundations/hmr.mdx', {
        hash: 2271473472,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.p, {
                children: "Todos los bundles exponen de forma automática un objeto hmr que le permite que el desarrollador pueda suscribirse a los cambios de código y persistir de esta forma el estado del proyecto en el que se encuentre, optimizando el proceso de desarrollo, pues se evita la necesidad de repetir nuevamente los flujos para llegar al estado actual."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para explicarlo mejor, supongamos que se está realizando una lógica de filtrado de elementos de una base de datos en un módulo backend, este módulo realiza los siguientes pasos:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Realiza el login contra la base de datos."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Realiza dos consultas a base de datos."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Retorna la información disponible para que el programador trabaje con ella."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Genera una estructura de datos en la cual se integra toda la información consultada para que esta sea devuelta al cliente."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La suscripción de cambios de parte del desarrollador con hmr, permite a este enfocarse en el último punto sin necesidad de repetir por cada cambio los primeros tres, lo cual significa una optimización en tiempo de pruebas bastante alta."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La implementación de hmr se encarga de forma automática de realizar el reemplazo de contenido de un archivo en el mismo momento en el que este es cambiado, dejando disponible de manera inmediata la actualización del mismo, sin necesidad de realizar ninguna acción adicional y además, el programador puede suscribirse a estos cambios para definir que desea hacer a partir de ellos, ofreciendole la versatilidad de ejecutar funciones de manera automática ante cada cambio."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Eventos"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "change"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "change:[nombre-procesador]"
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./mdx/foundations/modular.mdx
      *********************************************/

      ims.set('./mdx/foundations/modular.mdx', {
        hash: 4213814009,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              blockquote: "blockquote",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                id: "intro",
                pretitle: "Fundamentos",
                title: "Estructura Modular"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La arquitectura modular es clave en BeyondJS, permite al programador desarrollar proyectos desacoplados al dividirlos\r\nen partes más pequeñas que reciben una configuración mínima y no se ven afectados por el crecimiento del proyecto."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para importaciones, BeyondJS hace uso de los \"bare specifiers\", lo que permite definir rutas de módulos de\r\nforma más sencilla y eficiente."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Además, BeyondJS ofrece un concepto de módulos más amplio en comparación con EcmaScript.\r\nUn módulo de BeyondJS puede estar compuesto por varios módulos ESM, y se puede definir de manera sencilla\r\nqué partes son accesibles desde fuera del módulo, conocidos como \"internal modules\". Esto permite un mejor\r\ncontrol y organización del código en su proyecto."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Los internal modules son un concepto poderoso y simple de BeyondJS, puedes leer detalladamente\r\nacerca de ellos en la sección de ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/concepts/modules",
                    children: "Módulos"
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La estructura de los módulos se define por medio de los archivos de configuración ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), ",\r\ncon una estructura como la siguiente:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
{
"name": "start-backend",
"bundle": "start",
"platforms": "backend",
"ts": {
"files": "*"
}
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Puedes leer más acerca de la creación de módulos en la ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/concepts/modules",
                  children: "sección de Módulos"
                }), "."]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./mdx/foundations/universal.mdx
      ***********************************************/

      ims.set('./mdx/foundations/universal.mdx', {
        hash: 3667926788,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1"
            }, props.components);
            return (0, _jsxRuntime.jsx)(_components.h1, {
              children: "Universal Javascript"
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./mdx/frontend/i-widget-store.mdx
      *************************************************/

      ims.set('./mdx/frontend/i-widget-store.mdx', {
        hash: 3154441673,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_components.ul, {
              children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                children: "toJSON: Se ejecuta unicamente en el servidor. Es el encargado de serializar\r\nel store y mandarlo al cliente para hidratar el contenido."
              }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                children: "hydrate: Prepara el store en el cliente y recibe lo que toJSON envia."
              }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                children: "fetch: Permite agregar lógica para componer los datos del store en su instancia inicial.\r\nes una funcion asincronica cuando estas en el servidor.,"
              }), "\n"]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./mdx/frontend/routing/routing.mdx
      **************************************************/

      ims.set('./mdx/frontend/routing/routing.mdx', {
        hash: 3186726941,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              code: "code",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Widgets",
                title: "Controladores"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["BeyondJS tiene un manejo de rutas simple y potente al mismo tiempo. Para la mayoría de los casos,\r\nlas URLs pueden ser definidas en la configuración de\r\nlos ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/widgets/pages",
                  children: "widgets de tipo page"
                }), ", por medio de la propiedad URL, pero pueden existir casos donde se requiera alguna configuración más avanzada."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Nota: Esta sección cubre la documentación del objeto routing. Si deseas aprender acerca del manejo de parametros en la url de una página, puedes leer sobre ello ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/widgets/page",
                  children: "en la sección de Widgets de tipo Page."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Objeto `routing`"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El objeto ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "routing"
                }), " gestiona el histórico del navegador y se encarga de manejar\r\nla compatibilidad para proyectos web y móviles. Ofrece una API que permite\r\ntrabajar con el histórico y manipularlo."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Es disponibilizado por el paquete ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "@beyond-js/kernel"
                }), " y se importa de la siguiente forma:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
import {routing}  from   "@beyond-js/kernel/routing";
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El objeto ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "routing"
                }), " de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " existe para cubrir los siguientes escenarios:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Disponibilizar al programador una API simple para hacer tratamientos complejos de las URLs,\r\ncomo validaciones, redireccionamientos y manejo de variables."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Identificar el flujo e histórico de navegación del usuario adentro del aplicativo.\r\nEl objeto history del navegador tiene un tratamiento muy limitado del mismo y sólo permite\r\nacceder al número de navegaciones existentes. BeyondJS por su parte, maneja un histórico detallado."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Debido a que las aplicaciones híbridas realizadas con JavaScript, resuelven el manejo\r\nde archivos por medio de un protocolo distinto a las aplicaciones accedidas desde un navegador,\r\n", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " realiza un tratamiento del mismo para abstraer al programador de ello y garantizar el mismo\r\ncomportamiento sin importar la plataforma en que se trabaje."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Navegación"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Con la finalidad de mantener compatibilidad con las APIs Conocidas,\r\nel objeto Routing tiene métodos homólogos a los métodos de la API del historial del navegador y\r\nbásicamente cubren las mismas necesidades, pero a la vez, se encargan de unificar los comportamientos\r\nentre las plataformas y actualizar los elementos del histórico de BeyondJS."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los métodos disponibles son:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "routing.pushState"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Registra un nuevo elemento en el histórico"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
routing.pushState('/home', [{state}]);
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "routing.replaceState"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Modifica la URL actual sin agregar nuevos elementos en el histórico."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
routing.replaceState('/home', [{state}]);
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Tiene la misma interfaz que el método pushState del objeto history de la API Web y\r\nadicional se encarga de actualizar el histórico de BeyondJS."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Sobreescritura de rutas"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "routing.redirect"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Generalmente, aunque puede haber más, existen dos contextos típicos en los cuales\r\nes necesario darle tratamiento a las URLs:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Cuando se requiere manejar URLs amigables."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Cuando es necesario validar permisos de acceso y, en caso de que quien intenta entrar a\r\nla URL no los tenga, se pretenda hacer una redirección a un flujo determinado."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para este tipo de casos, se puede definir una función asincrona ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "redirect"
                }), "\r\ncomo propiedad del objeto routing. Esta función recibe un objeto\r\nde tipo ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/api/uri",
                  children: `<URI>`
                }), " que tiene una propiedad pathname\r\nla cual representa la ruta actual."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La función redirect puede retornar undefined o un string. Si retorna undefined el flujo de\r\nnavegación seguirá sin interrupción. Si se devuelve un string el mismo será tomado\r\ncomo la URL final y BeyondJS realizará la redirección a la URL retornada."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
routing.redirect = async function redirect(uri): Promise[string] {
	return '/';
};

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En el ejemplo anterior, cualquier ruta recibida es redireccionada a /."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Manejo de urls no encontradas."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El objeto routing posee una propiedad ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "missing"
                }), " que puede definirse como una función asincrona\r\ny retorna el nombre del widget que se desee mostrar en caso de que la url solicitada no sea encontrada."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Un ejemplo típico de uso es querer implementar una pantalla 404 para una página no encontrada."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Una implementación básica puede ser la siguiente:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
routing.missing = async (pathname: String) => {
   return 'app-docs-missing';
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En el ejemplo anterior, se esta retornando el nombre de un widget, BeyondJS validará que el widget exista cuando la URL no se consiga y lo mostrará como página de error."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./mdx/frontend/routing/uri.mdx
      **********************************************/

      ims.set('./mdx/frontend/routing/uri.mdx', {
        hash: 1863158628,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              code: "code",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Frontend",
                title: "Objeto URI"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Importación"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import {routing: {uri}} from "@beyond-js/kernel/routing";`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El objeto uri provee una api equivalente a la del ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "objetowindow.location"
                }), ",\r\npero con funcionalidades agregadas que aseguran el\r\ncomportamiento correcto en el entorno web y móvil."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Propiedades"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "pathname"
                  }), " string :url actual, sin querystring ni hash"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "uri"
                  }), " string : url completa."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "qs"
                  }), " Map : Mapa con la lista de variables pasadas por querystring."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "hashtag"
                  }), " string : contiene el fragmento de la url posterior al '#'. Es equivalente a la propiedad hash del objeto location de la API Web."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "vars"
                  }), " Map : Mapa contenedor de las variables dinamicas agregadas en la definición de la url del ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/widgets#page",
                    children: "Widget Page."
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "routing.historyBeyondHistory"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El objeto BeyondHistory maneja toda la información asociada a la navegación del usuario en la sesión actual."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Propiedades"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "current"
                  }), ": string : url de navegacion actual."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "initial"
                  }), ": number : Hace referencia al indice asociado al historico de la api web del navegador sobre el cual comienza la navegacion adentro del proyecto BeyondJS. Para este manejo, beyond hace uso del objeto SessionStorage de la api web, donde registra dos propiedades:", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "__beyond_navigation_position"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "__beyond_navigation_records"
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "position"
                  }), " HistoryPosition :", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_components.strong, {
                        children: "value"
                      }), " number :valor de la posición actual de navegación en el historico propio deBeyondJS."]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "records"
                  }), " HistoryRecords :: Objeto de tipo Map que contiene todas las entradas de navegación del usuario en la sesión actual."]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./mdx/frontend/state-management.mdx
      ***************************************************/

      ims.set('./mdx/frontend/state-management.mdx', {
        hash: 3179625527,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Manejo de Estados"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El estado es la representación de los valores renderizados de un componente o widget en pantalla.\r\nEste puede mutar y variar por diversos factores, tales como la actualización de datos desde un servidor o la interacción del usuario."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Existen numerosas librerias para la gestión de estado de un proyecto, generalmente asociadas\r\nal ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/widgets",
                  children: "Framework de vista"
                }), " que se esté utilizando. BeyondJS permite integrar la herramienta para manejo de estados que se desee, siempre que esta este preparada para el funcionamiento modular."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Puedes ver un ejemplo funcional de un contador que comparte el manejo de estado entre un componente creado con\r\n", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "React"
                }), ", uno creado con ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Svelte"
                }), " y otro con ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Vue"
                }), " en ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/examples/sm/counter",
                  children: "Este ejemplo."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Asimismo, BeyondJS Define una estructura para el manejo de estado.\r\nEl objeto que maneja el estado, debe ser disponibilizado por medio del método createWidgetStore del controlador del widget.\r\nEste método debe retornar un objeto que implemente la interfaz ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/api/IWidgetStore",
                  children: "IWidgetStore"
                }), ",\r\nesencialmente si se espera trabajar con ssr."]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./mdx/frontend/styles/imports.mdx
      *************************************************/

      ims.set('./mdx/frontend/styles/imports.mdx', {
        hash: 2271134204,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Widgets",
                title: "Importación de archivos de estilo"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "node_modules"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Si se requiere incluir un archivo de estilos de alguna libreria instalada en node_modules, se puede importar de forma no relativa, desde el archivo del módulo en el que se requiera, haciendo uso del caracter ~ seguido de la ruta del paquete en la carpeta node_modules."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "De esta forma, supongamos que se desea trabajar con bootstrap, podriamos importarlo de la siguiente forma:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
    @import ~bootstrap/sass/bootstrap.scss;
    `
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "De la misma forma, si se requiere importar un archivo especifico dentro de la libreria, como el de_variables.scss, puede importarse de forma directa:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
    @import ~bootstrap/sass/variables.scss;
    `
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Importación de estilos de un bundle"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La importación de módulos de estilo es considerada en BeyondJS como una importación no relativa, por tanto sigue las mismas reglas de importación de un archivo existente en una libreria de npm, pero la ruta de inclusión en este caso, sigue la estructura de nombres de los módulos realizados con el framework, que como hemos visto antes, puede estar compuesta por @scope/name, donde el scope es opcional."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para ejemplificarlo, imaginemos que se tiene un módulo llamado form, que incluye un bundle code, el cúal define componentes de un formulario y se requiere importar los estilos desde otro módulo. En el módulo, se creo un archivosass que define estilos para los labels, cuyo nombre es labels.scss. La línea de importación sería:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
    @import ~@scope/project-name/form/sass/scss/label.scss;
     `
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['styles/modules', 'styles/themes']
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./mdx/frontend/styles/index.mdx
      ***********************************************/

      ims.set('./mdx/frontend/styles/index.mdx', {
        hash: 918843157,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              strong: "strong",
              code: "code",
              blockquote: "blockquote"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Frontend",
                title: "Sistema de Template"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS tiene un sistema de plantillas potente que permite definir\r\nestilos generales para el proyecto, compartir estilos y funciones entre\r\ncomponentes y personalizar el comportamiento de los módulos.\r\nEsto se define en un archivo \"template.json\" con tres puntos\r\nde entrada principales: \"application\", \"global\" y \"overwrites\"."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Este sistema es flexible y versátil, permitiendo una gestión eficiente\r\nde los estilos y comportamientos de la aplicación."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "template.json"
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "template.json",
                children: `
{
  "application": {
    "processor": "sass",
    "path": "application",
    "files": [
      "*"
    ]
  },
  "global": {
    "processor": "sass",
    "path": "global",
    "files": [
      "*"
    ]
  }
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La configuración anterior es la configuración predeterminada para las plantillas\r\nde los proyectos web. Se está configurando el procesador Sass para las\r\nplantillas de aplicación y global, y a continuación se explicará el propósito\r\nde cada una."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La configuración de los elementos del template se parece a la configuración de los procesadores en los bundles. Cada elemento puede tener las siguientes propiedades:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "processor:"
                  }), " Procesador que se utilizará. Soporta ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "sass"
                  }), " y ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "less"
                  }), "."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "path:"
                  }), " Directorio donde se encuentran los archivos. Si no se define, se buscarán todos los archivos relativos a la ubicación del archivo de configuración."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "files:"
                  }), " El * indica que se deben tomar en cuenta todos los archivos dentro del path definido.\r\nSi se especifican nombres específicos de archivos, se incluiran solamente los especificados"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "Se supone en esta página que la plantilla se encuentra en una carpeta\r\ncon su nombre en la raíz del proyecto. Si se realizó un cambio en la configuración\r\npredeterminada, es importante tener en cuenta la ubicación configurada."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "`template.application`"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "styles.css"
                }), " está incluido en proyectos de plataforma web como\r\nuna propiedad llamada \"application\". Esta propiedad se utiliza para agregar\r\nestilos generales a la página y\r\ndefinir ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://developer.mozilla.org/en-US/docs/Web/CSS/--*",
                  children: " propiedades\r\npersonalizadas"
                }), " que\r\nestarán disponibles en todos los componentes."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Las ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "propiedades personalizadas"
                }), "\r\nson valores de estilo únicos que pueden ser compartidos entre componentes\r\ndebido a su integración en componentes web con Shadow DOM."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La configuración por defecto para los estilos en ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "template.application"
                }), " incluye todos los archivos ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: ".scss"
                }), " presentes en el directorio ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "./template/application"
                }), " dentro del proyecto."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los siguientes son los archivos incluidos:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "./variables.scss"
                  }), ": Contiene una lista de variables Sass por defecto."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "./styles.scss"
                  }), ": Contiene estilos básicos para el cuerpo del documento."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "./custom-properties/dark.scss"
                  }), ": Proporciona un mixin que define las variables a utilizar en el estilo oscuro."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "./custom-properties/light.scss"
                  }), ": Proporciona un mixin que define las variables a utilizar en el estilo claro."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "./custom-properties/material-design.scss"
                  }), ": Incluye las propiedades CSS del sistema de colores Material Design."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "./custom-properties/definition.scss"
                  }), ": Incluye la definición de las propiedades CSS personalizadas que integran el uso de los mixins definidos en ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "dark.scss"
                  }), " y ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "light.scss"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Los programadores pueden editar o agregar cualquier archivo de estilo adicional, el cual será integrado de forma automática gracias a la adición de un carácter ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "\"*\""
                }), " en la configuración que indica que todos los archivos en la carpeta deben ser procesados."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "`template.global`"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La propiedad global se representa en el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "global.css"
                }), ", cuya finalidad es compartir estilos considerados globales entre todos los widgets. Para lograr esto, el archivo final se incluye dentro de los estilos de cada widget."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Por defecto, se incluyen todos los archivos que se encuentran en la carpeta ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "/global"
                }), ", y de base solo se incluye un archivo: ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "styles.scss"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['styles/modules', 'styles/themes']
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./mdx/frontend/styles/modules.mdx
      *************************************************/

      ims.set('./mdx/frontend/styles/modules.mdx', {
        hash: 4123940591,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Frontend",
                title: "Estilos en el módulo"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Agregar estilos a un módulo/bundle requiere el uso de SASS como ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/processors",
                  children: "procesador"
                }), ". En un proyecto creado con workspace, SASS está incluido por defecto en los bundles de code y widget. La configuración estándar de SASS es:"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "`module.json`"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
{
    ...
    "sass": {
        "path": "sass",
        "files": ["*"]
    },
    ...
}

`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La configuración indica que en el módulo hay una carpeta sass, ubicada relativamente al archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), " y que todos sus archivos son considerados estilos. El bundle con el procesador inserta los estilos en el DOM durante el renderizado, evitando la necesidad de hacer imports externos en el código JavaScript."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['modules/processors', 'styles/template']
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /************************************************
      INTERNAL MODULE: ./mdx/frontend/styles/themes.mdx
      ************************************************/

      ims.set('./mdx/frontend/styles/themes.mdx', {
        hash: 1630354860,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              code: "code",
              blockquote: "blockquote"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                title: "Light & Dark theme",
                pretitle: "Frontend"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " brinda un mecanismo sencillo para soportar temas de luz y oscuridad que consta de dos parte"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Plantilla de estilos"
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Atributo ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "data-beyond-mode"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Temas en el template"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La plantilla de la aplicación está configurada para soportar tanto el\r\nLight como el tema Dark y proporciona un archivo de\r\ndefinición de estilos personalizados para cada tema.\r\nEn el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "definition.scss"
                }), ", se encuentra el siguiente código:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "definition.scss",
                children: `
@use 'dark';
@use 'light';
:root {
  @include light.properties();
  @media(prefers-color-scheme: dark) {
    @include dark.properties();
  }
}

html[data-beyond-mode="light"] {
@include light.properties();
}

html[data-beyond-mode="dark"] {
@include dark.properties();
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El código anterior hace disponibles las variables de configuración para los temas oscuro y claro en los archivos correspondientes."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: ":host-context"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["En la mayoría de los casos, si un componente requiere conocer el\r\ntema en uso, se puede utilizar el selector ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: ":host-context"
                }), " en un\r\narchivo de estilos para definirlo, como se ilustra en el ejemplo siguiente:"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: ":host-context"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
:host-context(html[data-beyond-mode]) {
    //styles here...
}

`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: ":host-context es un selector en CSS que permite seleccionar un elemento basado en el contexto del elemento anfitrión.\r\nPermite establecer estilos en un elemento que dependen de su contexto en la página, en lugar de su propio contenido o\r\nestructura. Se usa con la sintaxis :host-context(selector)"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En algunos casos, los componentes pueden requerir conocer dinámicamente\r\nel cambio de tema. En estos casos, se puede utilizar la API del\r\nobjeto widgets."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
import { widgets } from '@beyond-js/widgets/render';

widgets.attributes.add('data-beyond-mode', theme);

`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La línea anterior agrega a todos los widgets existentes el atributo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "data-beyond-mode"
                }), " con el valor dark."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['widgets', 'styles/modules']
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/add-rendering-engine.mdx
      ***************************************************************/

      ims.set('./mdx/frontend/widgets/add-rendering-engine.mdx', {
        hash: 1006013082,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Frontend",
                title: "Agregar librerias de renderizado"
              }), "\n", (0, _jsxRuntime.jsx)(_html.UnderConstruction, {})]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/controllers.mdx
      ******************************************************/

      ims.set('./mdx/frontend/widgets/controllers.mdx', {
        hash: 2315997889,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              blockquote: "blockquote",
              code: "code",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Widgets",
                title: "Controladores"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Los controladores en ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " son los encargados de gestionar\r\nel ciclo de vida de los Widgets. Estos permiten crear un ecosistema rico y apropiado\r\npara las exigencias de las aplicaciones actuales y proveen una API que permite\r\nuna configuración simple para comportamientos sofisticados cómo\r\nelegir el tipo de Renderizado que se desea utilizar, que puede variar\r\nentre Renderizado Estático, Renderizado Cliente o Renderizado del lado del\r\nservidor también conocido cómo SSR."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS provee unos controladores bases para los distintos tipos de renderizado\r\ny estos son extendidos por los paquetes que posibilitan la posibilidad de\r\ntrabajar con librerias de renderizado."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "El presente documento aplica para cualquiera de las librerias, solo se requiere\r\nreemplazar la importación y el nombre del Controlador exportado, pero la interfaz es\r\nla misma. Por convención y en Pro de un simple entendimiento, los controladores de\r\ncada paquete sólo agregan como prefijo el nombre de la libreria a los Controladores."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "WidgetController"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Si haces uso del CLI o el Workspace para crear tus paquetes, el manejo de estas\r\ndependencias es realizado de forma automática. Esta documentación está hecha con la intención\r\nde que quien la lea pueda entender bien la forma extensible de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {})]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para utilizar los widgets de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " es necesario tener el paquete ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "@beyond-js/widgets"
                }), "\r\ninstalado y a partir de ello, instalar alguno de los siguientes paquetes\r\nsegún la libreria que se desee utilizar:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/react-widgets",
                    children: (0, _jsxRuntime.jsx)(_components.code, {
                      children: "@beyond-js/react-widgets"
                    })
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/svelte-widgets",
                    children: (0, _jsxRuntime.jsx)(_components.code, {
                      children: "@beyond-js/svelte-widgets"
                    })
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/vue-widgets",
                    children: (0, _jsxRuntime.jsx)(_components.code, {
                      children: "@beyond-js/vue-widgets"
                    })
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "WidgetController"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "ReactWidgetController"
                  }), " en ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "react-widgets"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "VueWidgetController"
                  }), " en ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "vue-widgets"
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "SvelteWidgetController"
                  }), " en ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "svelte-widgets"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La implementación del controlador es requerida para el funcionamiento de los Widgets.\r\nLa estructura es la siguiente:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
import {LibraryWidgetController} from '@beyond-js/kernel/library-widget/ts';
import {ObjectToRender} from './views/page';
export /*bundle*/
class Controller extends LibraryWidgetController {
    get Widget() {
        return ObjectToRender;
    }
}

`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["el getter ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "Widget"
                }), " debe definirse y retornar un componente a renderizar, compatible\r\ncon la libreria de vista que se esté usando."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Métodos"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "initialise"
                    }), " : Permite agregar lógica a ejecutarse\r\nprevio al montado del componente web en el DOM HTML y se ejecuta una única vez."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "createStore"
                    }), " : Propiedad requerida si se desea implementar SSR.\r\nPermite agregar lógica para el manejo del Estado del widget,\r\ndebe retornar un objeto con\r\nla interfaz ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/docs/api/IwidgetStore",
                      children: "IWidgetStore"
                    }), "."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "mount"
                    }), ": Es similar al método initialise, la diferencia es que este método se ejecuta\r\ncada vez que el componente es montado en el DOM, mientras que el método initialise sólo\r\nse ejecuta al momento en el que se monta el componente por primera vez."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "unmount"
                    }), ": Permite ejecutar lógica cuando el componente va a ser desmontado del Documento."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "disconnect"
                    }), ": Es el evento disconnect del Componente Web, se ejecuta cuando el componente es eliminado del dom."]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ["widgets/page", "widgets/layout"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/index.mdx
      ************************************************/

      ims.set('./mdx/frontend/widgets/index.mdx', {
        hash: 4250517770,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              em: "em",
              ul: "ul",
              li: "li",
              code: "code",
              blockquote: "blockquote"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Frontend",
                title: "Widgets"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Los widgets de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " son una característica clave porque ofrecen una manera\r\nfácil y eficiente de implementar soluciones en ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " utilizando su librería\r\nfavorita (como React, Vue o Svelte) y provee una API simple para\r\nintegrar nuevas librerías existentes. Esto significa que la curva de aprendizaje es mínima\r\ny se basa en entender el concepto\r\nde ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://micro-frontends.org/",
                  children: "micro-frontends"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Su arquitectura está diseñada para ser compatibles de forma directa con\r\nMicro frontends y cargar las dependencias de forma dinámica y a demanda,\r\nlo que optimiza los tiempos de carga,permite una mejor experiencia de usuario y\r\nen todo el proceso de desarrollo, pues los paquetes no se ven afectados por su crecimiento."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para lograrlo, los Widgets se encapsulan\r\nen ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://developer.mozilla.org/en-US/docs/Web/Web_Components",
                  children: "Componentes\r\nWeb "
                }), " que utilizan shadow DOM para encapsular su contenido y pueden definir\r\npropiedades y métodos que pueden ser accedidos a través de la API del DOM."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Estas características se\r\ncombinan con la posibilidad de integrar diferentes stacks tecnológicos en un mismo proyecto,\r\nlo que le da a los desarrolladores la posibilidad de evaluar ", (0, _jsxRuntime.jsx)(_components.em, {
                  children: "qué"
                }), " tecnología es más conveniente\r\npara desarrollar funcionalidades específicas sin tener que pensar en ", (0, _jsxRuntime.jsx)(_components.em, {
                  children: "qué"
                }), " tecnología utilizar\r\npara todo un proyecto."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Actualmente ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " brinda soporte para trabajar con las librerias\r\nde renderizado ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://reactjs.org/",
                  children: "React"
                }), "\r\n, ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://vuejs.org/",
                  children: "Vue"
                }), "\r\ny ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://svelte.dev/",
                  children: "Svelte"
                }), ". Tambien permite\r\nla integración nuevas librerías o herramientas de forma simple."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Estructura"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Los Widgets en ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " son tratados como un tipo\r\nde ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/modules/bundles",
                  children: "Bundle"
                }), ", lo que brinda la posibilidad\r\nde definir los tipos de procesadores que deben incluirse."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Su estructura básica consta de los siguientes elementos:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "module.json"
                  }), ": Archivo de configuración del módulo/bundle, que se puede generar\r\nde forma automática con el comando ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "beyond add module"
                  }), "."]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Un objeto Controller que es el encargado de registrar el Widget en el DOM,\r\nmontarlo y desmontarlo. Hablaremos de él en detalle más adelante."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Archivos de interfaz y lógica del widget definidos por el programador,\r\nque pueden crearse en React, Vue o Svelte."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Tipos de Widgets"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Por defecto, existen tres tipos de Widgets en ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ":"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Widget: Es el widget por defecto, sin un tipo específico.\r\nSimplemente representa un Micro frontend o Componente Web con\r\ncapacidad de encapsular su contenido y cargarlo a demanda."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Layout: Son contenedores de Páginas y Widgets,"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Crear un Widget"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["En ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ", puedes crear Widgets y cualquier tipo de Bundle mediante el uso del\r\nCLI (Interfaz de línea de comando) con el comando ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "beyond add module"
                }), ". Para obtener más\r\ninformación sobre este proceso, te recomendamos revisar la ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/cli",
                  children: "sección de\r\ncomandos de la documentación"
                }), " de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["A continuación se explicará en detalle la estructura de un widget de tipo página,\r\ncon un \"Hola mundo\", con la intención de tener un entendimiento conciso y\r\nrápido del comportamiento y la naturalidad con la que se programa en ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ". El código se puede copiar y pegar para ver su comportamiento."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Puedes seguir un flujo más completo en nuestro ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/tutorials/web",
                    children: "tutorial web"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Configuración"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Los widgets en ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " son definidos mediante la configuración del bundle en\r\nel archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), ", como el que se muestra a continuación."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "module.json",
                children: `{
    "widget": {
    "is": "page",
    "route": "/",
    "element": {
      "name": "home-page"
    },
    "ts": {
      "path": "ts",
      "files": [
        "*"
      ]
    }
  }
}
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La estructura de configuración del bundle ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "widget"
                }), " es:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "is"
                    }), ": Es opcional, debe agregarse si se desea especificar que el widget es de tipo ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "page"
                    }), " o ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "layout"
                    }), "."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "route"
                    }), ": para indicar la URL de acceso."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "element"
                    }), ": Es un objeto que permite definir las propiedades del componente web, este objeto puede tener\r\nlas siguientes entradas:"]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_components.code, {
                        children: "attrs"
                      }), ": ", (0, _jsxRuntime.jsx)(_components.code, {
                        children: "strings[]"
                      }), ": Recibe un arreglo de strings con los atributos que deseen definirse en el\r\ncomponente web."]
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "name: Nombre del componente web a crear."
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "processors: Puede recibir cómo propiedad cualquier procesador existente que desee utilizarse."
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Controller"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El controlador es el encargado de definir qué objeto principal se va a renderizar y realizar las tareas necesarias para cargar nuestro componente web."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ejemplo:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "controller.ts",
                children: `import {PageReactWidgetController} from '@beyond-js/react-widgets/page';
import {View} from "./views";

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return View;
    }
}`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En el ejemplo anterior se muestra la estructura básica de un widget de tipo Page, que se diferencia del resto principalmente por el objeto del cual extiende el controlador."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A continuación explicamos en detalle los puntos importantes:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["La importación de ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "PageReactWidgetController"
                    }), " de la librería de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ",\r\nque provee controladores que gestionan el ciclo de vida de los widgets.\r\n-El método ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "get Widget"
                    }), " es obligatorio y debe retornar el componente u objeto\r\nque se espera renderice el widget."]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Es importante tener en cuenta que el ciclo de vida de un widget se compone\r\nde diferentes fases como la carga, el renderizado y la descarga, y el controlador\r\nes el encargado de manejar estas fases. Además, es posible tener diferentes tipos\r\nde controladores para diferentes tipos de widgets.\r\nPara obtener más información sobre cómo funciona el controlador,\r\nconsulte la ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/docs/widgets/controllers",
                      children: "sección del Objeto Controlador "
                    }), "\r\nen nuestra documentación."]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "View"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En este ejemplo, En este ejemplo, se muestra cómo se utiliza React\r\ny lo que se presenta a continuación es un componente típico de esta librería."
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "./ts/view.tsx",
                children: `import * as React from "react";

export function View(props): JSX.Element {
    return (
        <main>
            <h1>Hola mundo</h1>
        </main>
    );
}
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El componente principal del widget recibe un conjunto de propiedades que\r\nbrindan al desarrollador el entorno necesario para tener una experiencia de desarrollo\r\nfluida y sin obstáculos en proyectos con microfrontends de diferentes naturalezas\r\nque comparten información y elementos propios del proyecto."
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ["widgets/creation", "widgets/page"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/layout.mdx
      *************************************************/

      ims.set('./mdx/frontend/widgets/layout.mdx', {
        hash: 3873398619,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              code: "code",
              ul: "ul",
              li: "li",
              blockquote: "blockquote"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                title: "Layouts",
                pretitle: "widgets"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los Layouts son widgets especializados que representan contenedores para otros widgets.\r\nTienen múltiples usos, como compartir un diseño de interfaz gráfica entre distintos elementos de\r\nun proyecto o incluir lógica de código en múltiples secciones del proyecto. En esta guía aprenderás\r\ncómo configurar y utilizar Layouts en tu proyecto BeyondJS."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para configurar un widget de tipo layout, la propiedad \"is\" debe tener cómo valor ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "layout"
                }), " en el archivo\r\n", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
"widget": {
    "is": "layout",
    "element": {
      "name": "main-layout"
    },
...
}
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La entrada \"is\" es requerida para que BeyondJS pueda identificar los layouts existentes.\r\nA partir de allí, el desarrollo es similar al de cualquier otro widget."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El objeto controller del Widget de tipo Layout debe extender de ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "[Library]WidgetController"
                }), ",\r\ndonde ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "Library"
                }), " debe ser reemplazado por el nombre de la librería de widgets que estés utilizando."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los Layouts se pueden utilizar de dos formas:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Como Layout general para todo el proyecto."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Como Layout específico en widgets de tipo página."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Layout de proyecto"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El layout general del proyecto se define agregando un punto de entrada \"layout\"\r\nen el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), " que recibe como valor el nombre del componente web del layout,\r\nespecificado en la configuración del widget al crearlo (puedes verlo en el archivo module.json del módulo)."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Los proyectos creados desde el CLI o el Workspace de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " vienen con un layout de proyecto\r\nconfigurado. El nombre del componente web es ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "main-layout"
                  }), " y se encuentra en el\r\ndirectorio ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "modules/layouts/main"
                  }), " del proyecto."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El siguiente es el código mínimo de un layout"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `<main>
    <beyond-layout-children/>
</main>`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para especificar dónde se deben insertar los demás elementos del proyecto en el layout,\r\ndebes agregar la etiqueta ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "<beyond-layout-children/>"
                }), " en el lugar deseado."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El componente web ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "<beyond-layout-children/>"
                }), " es manejado por ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), "\r\npara determinar dónde deben cargarse los componentes web solicitados de forma dinámica.\r\nSi el proyecto no tiene un layout de proyecto, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " inserta automáticamente\r\nun componente ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "<beyond-layout-children/>"
                }), " en el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "index.html"
                }), " para renderizar\r\nel resto de los elementos del proyecto."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Múltiples Layouts"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["En ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " es posible manejar múltiples layouts y utilizarlos de manera jerárquica,\r\ndonde un layout puede ser contenido por otro. Esto permite una mayor flexibilidad\r\nal momento de diseñar y estructurar la interfaz gráfica de tu proyecto."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Es importante tener en cuenta que el layout general de proyecto no puede\r\ntener un layout contenedor especificado. En este caso, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " incluirá el layout\r\nglobal de proyecto y ignorará la instrucción."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para agregar un layout como contenedor de un widget, debes incluir la entrada \"layout\"\r\nen la configuración del bundle de tipo widget en el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "module.json",
                children: ` "widget": {
    "is": "page",
    "layout": "main-layout",
    "route": "/",
    "element": {
        "name": "home-page"
      }
}`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "El valor de la propiedad layout debe ser el nombre del componente web, no el subpath del módulo."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ["widgets/page", "widgets/rendering"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/libraries.mdx
      ****************************************************/

      ims.set('./mdx/frontend/widgets/libraries.mdx', {
        hash: 4093788829,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
                p: "p"
              }, props.components),
              {
                Subtitle
              } = _components;
            if (!Subtitle) _missingMdxReference("Subtitle", true);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(Subtitle, {
                children: "Usando React"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "React tiene soporte automático motivado a que typescript interpreta\r\nel código tsx. Por tanto, lo único necesario para poder usarlo es tener instalada la dependencia en npm y definir el procesador ts en la configuración del bundle en el module.json."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "la configuración de react se realiza por medio de los archivos\r\n.tsconfig, cada módulo viene con un archivo configurado por defecto con compatibilidad para trabajar con react. puedes leer más sobre ello en la documentación de typescript."
              }), "\n", (0, _jsxRuntime.jsx)(Subtitle, {
                children: "Usando Svelte o Vue"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Cada framework tiene su propio procesador con el nombre\r\nde la libreria. Para utilizarlos, solo es necesario incluir\r\nel procesador en la configuración del bundle."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
          function _missingMdxReference(id, component) {
            throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/object.mdx
      *************************************************/

      ims.set('./mdx/frontend/widgets/object.mdx', {
        hash: 3992832334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Objeto BeyondWidget"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El objeto BeyondWidget es el objeto padre de los widgets y hereda directamente del objeto ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://developer.mozilla.org/es/docs/Web/API/HTMLElement",
                  children: "HTMLElement"
                }), " y ofrece una api que permite interactuar con el árbol de widgets de BeyondJS."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Propiedades"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_components.strong, {
                    children: ["wnode ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/docs/api/NodeWidget",
                      children: "NodeWidget"
                    }), " optional:"]
                  }), " Nodo html del widget."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_components.strong, {
                    children: ["wchildren ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/docs/api/BeyondWidget",
                      children: "(BeyondWidget)[]"
                    }), " optional:"]
                  }), " Lista de widgets contenidos"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_components.strong, {
                    children: ["parent ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/docs/api/BeyondWidget",
                      children: "BeyondWidget"
                    }), " optional:"]
                  }), " Widget contenedor, retorna undefined sino existe un widget como contenedor."]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/page.mdx
      ***********************************************/

      ims.set('./mdx/frontend/widgets/page.mdx', {
        hash: 3116437671,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              code: "code",
              ul: "ul",
              li: "li",
              blockquote: "blockquote",
              br: "br"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Widgets",
                title: "Páginas"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Los widgets de tipo page representan una página web accesible por\r\nURL. ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " los identifica y los inicializa en el DOM cuando se recibe una solicitud por URL."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El bundle de tipo page recibe los siguientes valores adicionales en la configuración agregada\r\nen el ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "is"
                  }), ": el valor debe ser ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "page"
                  }), "."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "route"
                  }), ": Define la ruta o url de la página y se explica en detalle más adelante."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "layout"
                  }), ": Es opcional, debe agregarse si se desea que la página esté contenida\r\nen un layout específico."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["En base a lo anterior, el siguiente es el ejemplo de un ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), " válido\r\npara páginas."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "module.json",
                children: `{
  "name": "home",
  "widget": {
    "is": "page",
    "route": "/",
    "element": {
      "name": "home-page"
    },
    "ts": {
      "path": "ts",
      "files": [
        "*"
      ]
    }
  }
}
`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "PageWidgetController"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Las páginas deben heredar del controlador ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "PageWidgetController"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El Objeto ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "PageWidgetController"
                }), " controller gestiona el registro de url\r\npara el manejo de enrutamientos de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " y es disponibilizado por el paquete de widgets\r\nque se utilice en el proyecto."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["La implementación de las páginas se realiza mediante controladores específicos\r\npara cada librería, como PageReactWidgetController para React, ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "PageVueWidgetController"
                  }), "\r\npara Vue, y ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "PageSvelteWidgetController"
                  }), " para Svelte. Estos controladores se encuentran en\r\npaquetes independientes, que deben ser instalados en el proyecto según la librería que se\r\nesté utilizando. Por ejemplo, para utilizar la funcionalidad de las páginas en un proyecto de\r\nReact, se debe instalar el paquete ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "@beyond-js/react-widgets"
                  }), " y utilizar el controlador\r\n", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "PageReactWidgetController"
                  }), ". Esto permite una mayor flexibilidad y facilidad de uso al\r\nagregar soporte para nuevas librerías en el futuro."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Métodos"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "PageWidgetController"
                }), " contiene los mismos métodos que el objeto ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "WidgetController"
                }), ", pero además\r\nagrega los siguientes métodos, propios para el tratamiento de páginas:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "hide"
                  }), " [void] [optional]: Se ejecuta cuando ha sido renderizada y se oculta,\r\nesto sucede cuando se navega de una URL a otra."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "show"
                  }), " [void] [optional]: Se ejecuta cada vez que se accede a la URL y la ", (0, _jsxRuntime.jsx)(_components.br, {}), "\n", "página se muestra en el navegador."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Enrutamiento"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Cómo se indicó al principio del documento, la ruta de la página se define\r\npor medio de la propiedad ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "route"
                }), " del widget, en el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Las configuraciones de los archivos ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "module.json"
                  }), " son gestionadas\r\nde forma automática por ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " cuando se utilizan herramientas cómo el CLI\r\no el BeyondJS Workspace."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Las urls tienen un sistema simple pero poderoso para manejar variables\r\nque permitan trabajar con URLs dinámicas. Lo único que se necesita es\r\ndefinir las variables que se esperan recibir en la url haciendo uso\r\nde la sintaxis propia de template-strings de JavaScript."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para ejemplificarlo, supongamos que se tiene una página de módificación\r\nde datos de un usuario y se necesita manejar el id por medio de la URL."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La propiedad route del widget tendría el siguiente valor:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
/user/edit/\${userId}
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Las siguientes urls coincirian con la ruta creada:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: (0, _jsxRuntime.jsx)(_components.code, {
                    children: "/user/edit/1"
                  })
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: (0, _jsxRuntime.jsx)(_components.code, {
                    children: "/user/edit/any-value"
                  })
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Asimismo, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " disponibiliza un objeto ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "uri"
                }), " cómo propiedad del Controlador y además,\r\neste objeto es pasado al Componente de Renderizado como ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "props"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Estas propiedades, quedan disponibles en el objeto ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "uri"
                }), " disponible como propiedad en\r\nel controller del widget y podria ser accedido desde el\r\ncontrolador de la siguiente forma:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "controller.js",
                children: `this.uri.vars.get('userId');`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La forma de acceder al objeto uri desde los componentes de vista, puede variar\r\nsegún el comportamiento de las librerias que se utilice."
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ["widgets/layouts", "routing"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/rendering.mdx
      ****************************************************/

      ims.set('./mdx/frontend/widgets/rendering.mdx', {
        hash: 2646058490,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Frontend",
                title: "Renderizado"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS proporciona varias estrategias de renderizado\r\npara adaptarse a las necesidades de tu proyecto.\r\nA continuación se describen las estrategias de renderizado disponibles en BeyondJS y cómo utilizarlas."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "CSR(Client Side Rendering)"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El renderizado Client Side (CSR) es una estrategia en la cual el navegador del\r\ncliente se encarga de generar la vista final utilizando JavaScript y es el tipo de renderizado\r\npor defecto en ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ". Esto significa que el contenido de la página se carga de forma dinámica en el navegador,\r\nen lugar de ser generado previamente en el servidor."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Con esta configuración, estamos indicando que nuestro widget utilizará el renderizado Client Side.\r\nPor defecto, la propiedad csr tiene el valor true, por lo que no es necesario especificarla\r\nsi deseamos utilizar el renderizado CSR."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "SR (Static Rendering)"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La estrategia SR (Static Rendering) es una estrategia en la cual ya existe un HTML armado y listo para ser renderizado, no\r\nes necesario interactuar con el servidor o con algún framework ya que el recurso al estar armado sólo debe solicitarse."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para utilizar esta estrategia, debes definir una propiedad \"render\" en el\r\narchivo module.json de tu módulo, con el valor de un arreglo de\r\nstrings que contengan cada una de las rutas definidas para cada página o recurso solicitado."
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "module.json",
                children: `{"widget": {

        "render": {
            "sr": [
                "/path/to/page1",
                "/path/to/page2"
            ]
        }
    }

}
`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "SSR (Server Side Rendering)"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La estrategia de renderizado SSR (Server Side Rendering) en BeyondJS se enfoca en\r\ngenerar el HTML de un componente o widget en el lado del servidor antes\r\nde enviarlo al cliente. Esto permite cargar la estructura de datos del\r\ncomponente de manera rápida y evitar la necesidad de que intervengan paquetes,\r\ndependencias o frameworks del lado del cliente para su carga."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para habilitar el SSR en un módulo o widget, se debe agregar una propiedad \"ssr\"\r\nen la configuración del bundle (widget) en el archivo \"module.json\" del módulo.\r\nEsta propiedad debe ser un booleano que indique si está activa la renderización del lado servidor."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Además, es necesario definir una propiedad \"createStore\" en el Controlador\r\nde la vista. Esta propiedad es un getter que devuelve un objeto de tipo IWidgetStore\r\nque debe contener tres métodos principales:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "toJSON"
                  }), " : se encarga de devolver la data que el widget va a consumir del servidor.\r\nEste método se encarga de serializar la respuesta HTML para que pueda ser enviada al cliente\r\ny mostrada en pantalla."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "hydrate"
                  }), ":se encarga de hidratar o actualizar el HTML en el cliente.\r\nTiene como premisa que el estado previamente renderizado en el servidor\r\ncoincida con el estado que se va a devolver al cliente. Este proceso se llama hydrate y es\r\nel encargado de sincronizar el estado del cliente con el estado del servidor."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "fetch"
                  }), " es utilizado tanto en la estrategia SSR como en\r\nla estrategia CSR (Client Side Rendering) y se encarga de procesar la data del\r\nStore y disponibilizarla. Este método se ejecuta tanto en el cliente como en el servidor,\r\nsegún la estrategia utilizada. Es responsable de recuperar la data necesaria\r\npara renderizar el widget, ya sea desde el servidor o desde el cliente."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "module.json",
                children: `{
    "widget": {
        "name": "mi-widget",
        "type": "page",
        "route": "/mi-pagina",
        "render": {
            "ssr": true
        }
    }

}`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Renderizado Hibrido (SSR y CSR)",
                "data-menu": "Renderizado Hibrido"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS permite utilizar tanto el renderizado del lado cliente (CSR) como el\r\nrenderizado del lado servidor (SSR) de manera conjunta, lo que se conoce como renderizado híbrido."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En este tipo de renderizado, se utiliza el SSR para generar un HTML inicial que se entrega al cliente,\r\nmejorando la experiencia de carga de la página. Una vez que el navegador recibe el HTML inicial, el framework de vista\r\ncorrespondiente se encarga de actualizar y manejar la vista según la interacción del usuario."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para habilitar el renderizado híbrido en un widget de BeyondJS, debemos definir en el ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), " del módulo una propiedad render, la cual es un objeto con tres posibles entradas:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "module.json",
                children: `{
    "widget": {
        "render": {
            "ssr": true,
            "csr": true
        }
    }
}`
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/routing.mdx
      **************************************************/

      ims.set('./mdx/frontend/widgets/routing.mdx', {
        hash: 703179426,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsx)(_components.p, {
              children: ";"
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/to-complete.mdx
      ******************************************************/

      ims.set('./mdx/frontend/widgets/to-complete.mdx', {
        hash: 524762313,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h3: "h3",
              ul: "ul",
              li: "li",
              h2: "h2",
              p: "p",
              h1: "h1",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h3, {
                children: "Casos de estudio."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Puede darse el caso donde el programador necesita saber que el componente se monta."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Si deseas construir un controlador para renderizar HTML puro o sin framework de vistas."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Crear un controlador para alguien que desea trabajar con un framework de vista."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Notas"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los atributos deben definirse en el module.json pues deben ejecutarse en el constructor del Componente Web.\r\nLas propiedades permiten que Beyond Identifique que elemento se esta renderizando en sistemas de\r\nrenderizado SSR y SR."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "los atributesChanges son custom atrributes."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h1, {
                children: "documentar"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["propiedad ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "widget"
                }), " es el Web Componente"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h1, {
                children: "noDocumentar"
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./mdx/modules/bundles.mdx
      *****************************************/

      ims.set('./mdx/modules/bundles.mdx', {
        hash: 1957664478,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              code: "code",
              blockquote: "blockquote",
              ul: "ul",
              li: "li",
              strong: "strong",
              br: "br"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Modules",
                title: "Bundles"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En BeyondJS, los bundles son conjuntos de archivos y configuraciones que se utilizan para organizar y\r\nestructurar el código de una aplicación. Cada bundle puede contener uno o varios archivos de diferentes tipos,\r\ncomo código JavaScript, estilos CSS, imágenes, etc. Los bundles también pueden contener configuraciones\r\npara procesadores de código, como TypeScript o Sass."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Los bundles son definidos como propiedades del archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), ". Por ejemplo,\r\nel siguiente código define un bundle de tipo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "code"
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
  "name": "icons",
  "code": {
    "ts": {
      "path": "ts",
      "files": [
        "*"
      ]
    },
    "mdx": {
      "path: "ts/mdx",
      "files": [
        "*"
      ]
    }
  }
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Es importante tener en cuenta que un módulo puede contener más de un bundle,\r\npara ello solo es necesario agregar otra propiedad con el nombre del bundle adicional.\r\nSin embargo, un módulo no puede contener dos bundles del mismo tipo."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "Los bundles reciben procesadores como valores. Los procesadores son objetos que indican\r\nel tipo de archivos a procesar y su ubicación. BeyondJS permite la definición o agregación de\r\nnuevos procesadores, lo que hace que el concepto de procesadores sea extensible. Puedes revisar la sección\r\nde procesadores para ver una lista de los procesadores predeterminados."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Definición de bundles"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Imagina que necesitas crear la interfaz de un formulario de registro.\r\nEl formulario de registro podría dividirse en dos capas:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "la interfaz de usuario basada en el código HTML y los estilos de la pantalla."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "La lógica asociada a validaciones y funcionalidades."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para llevar a cabo el desarrollo, es necesario crear algunos archivos en Typescript\r\nque incluyan la lógica y elementos de la interfaz, así como otros archivos de estilo.\r\nEn ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ", esto implica trabajar con al menos dos procesadores básicos:\r\nTypeScript y Sass. El primero genera código JavaScript y el segundo genera código CSS."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Como se explicó anteriormente, la posibilidad de que un bundle genere uno o varios\r\narchivos finales depende de los procesadores incluidos en su empaquetamiento.\r\nSi sólo se necesita crear código JavaScript, se genera un único archivo.\r\nSi, por el contrario, se necesita también código CSS, se generan dos archivos."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Bundles Transversales"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los bundles transversales, se definen igual que el resto de bundles, pero tienen una particularidad que ofrece ventajas productivas:\r\nel código de un bundle transversal es compilado en un archivo único."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS los ubica, integra y unifica en un único bundle o archivo final. Los bundle de tipo start son un ejemplo claro de ello, permiten al programador definir la lógica que desea sea ejecutada en el arranque de la aplicación."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Tipos de bundle"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Widget"
                  }), ": Contienen el código de un web-component.\r\nLas páginas y los layouts son manejados como widgets. Puedes leer más acerca de este tipo de bundle en\r\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/widgets",
                    children: "La sección de Widgets."
                  })]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Code"
                  }), ": Bundle que permite crear funcionalidades diversas para ser consumidas desde otro bundle o módulo. Soporta la integración de múltiples procesadores."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "TS (Typescript)"
                  }), ": sólo soporta el procesador para manejo de archivos typescript."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Bridge"
                  }), ": bundle de código backend, que genera código cliente y disponibiliza la conexión websocket para conectar el cliente y el backend."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Backend"
                  }), ": sólo soporta código que va a ser ejecutado en entornos de ejecución cómo ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Node"
                  }), " o ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Deno"
                  }), "."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Vue"
                  }), ": Bundle específico para manejo de módulos con el Framework Vue."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Svelte"
                  }), ": específico para manejo de código Svelte y su estructura de single file component."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Start"
                  }), ": Bundle transversal, útil si se requiere ejecutar lógica en el arranque del aplicativo."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Txt-start"
                  }), ": Bundle transversal, que", (0, _jsxRuntime.jsx)(_components.br, {}), "\n", "permite manejar textos multilenguajes\r\nrequeridos en el arranque del\r\naplicativo."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ["modules/processors", "frontend/widgets"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /****************************************
      INTERNAL MODULE: ./mdx/modules/config.mdx
      ****************************************/

      ims.set('./mdx/modules/config.mdx', {
        hash: 925606009,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
                p: "p",
                ul: "ul",
                li: "li",
                strong: "strong"
              }, props.components),
              {
                Link
              } = _components;
            if (!Link) _missingMdxReference("Link", true);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Configuración de módulos"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El archivo de configuración de módulos es el module.json"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
{
  "name": "home",
  "platforms": [
    "backend",
    "web"
  ],
  "widget": {
    "hmr": true,
    "element": {
      "name": "home-page"
    },
    "name": "home",
    "route": "/${content}",
    "is": "page",
    "ts": {
      "path": "/widget/ts",
      "files": [
        "*"
      ]
    }
  }
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Las propiedades de configuración son:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "name"
                  }), " [string] : Define el nombre del módulo, necesario para que los elementos puedan ser importados."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "platforms"
                  }), " [array] : Define las plataformas soportadas por el módulo. Los valores soportados son los identificadores de las ", (0, _jsxRuntime.jsx)(Link, {
                    href: "/concepts/platforms",
                    children: "plataformas"
                  }), " existentes."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
"platforms": [
    "backend",
    "web"
 ]

`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["[bundle] ", (0, _jsxRuntime.jsx)(Link, {
                      href: "/module#bundle",
                      children: "[bundle]"
                    }), " : Refiere al nombre identificador del tipo de bundle que se desea agregar en el módulo. Un módulo puede poseer uno o varios bundles. Cada bundle recibe un objeto de configuración con los procesadores que utiliza y alguna variación inherita del tipo de bundle agregado."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(Link, {
                    href: "/docs/bundles",
                    children: "Bundles"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(Link, {
                    href: "/docs/widgets",
                    children: "Widgets"
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
          function _missingMdxReference(id, component) {
            throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./mdx/modules/creation.mdx
      ******************************************/

      ims.set('./mdx/modules/creation.mdx', {
        hash: 1584483430,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              blockquote: "blockquote",
              p: "p",
              code: "code",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Basics",
                title: "Creación de módulos"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["En esta página se asume que ya se ha leído\r\nla ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/modules/intro",
                    children: "introducción sobre módulos en la documentación."
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Los módulos se configuran a través de un objeto JSON que se guarda en un archivo\r\nllamado ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), ". La estructura básica de este archivo es la siguiente:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "module.json",
                language: "json",
                children: `{
  "name": "module-name",
  "platforms": ["browser"] 
  "bundle": { 
    // bundle properties
  }
}`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "Para crear un módulo, es necesario tener previamente un paquete creado."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Como se puede ver en el ejemplo anterior, el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), "\r\npuede contener las siguientes propiedades:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "name"
                  }), ": es el nombre del módulo."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "platfoms"
                  }), ": es una lista que indica las plataformas para las\r\nque está disponible el bundle. Si no se especifica, se considera que el\r\nbundle es compatible con todas las plataformas."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "[bundleName]"
                  }), ": se utiliza para especificar el tipo de bundle que se desea\r\ncrear en el módulo. Un módulo puede contener múltiples bundles, simplemente\r\nagregando más propiedades con el nombre de cada bundle adicional.\r\nl valor de esta propiedad es un objeto que contiene la configuración del bundle,\r\ny las propiedades dentro de este objeto varían dependiendo del tipo de bundle\r\nque se está agregando. Para obtener más información sobre los diferentes\r\ntipos de bundles y su configuración, consulta la sección de bundles de la documentación."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Ejemplo de configuración"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Recordando el ejemplo definido en la introducción, que tenía las siguientes características:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Un archivo auth.ts con un objeto Auth que sirve de modelo y permite realizar la llamada para el inicio de sesión."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Un archivo user.ts con un objeto User que expone la información del usuario en caso de que inicie sesión."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Un archivo de estilos styles.scss"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Un componente de interfaz gráfica form.tsx."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), " para este módulo podría definirse de la siguiente forma:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                title: "module.json",
                language: "json",
                children: `
{
    "name": "login",
    "code": {
        "ts": {
            "path": "ts",
            "files": ["*"]
        },
        "sass": {
            "path": "sass",
            "files": ["*"]
        }
    }
}
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En el ejemplo anterior, se está creando un módulo de nombre first-module, con un bundle code que contiene un procesador sass y un procesador ts que procesan código Sass y Typescript respectivamente y que será empaquetado para plataforma web."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Un módulo puede contener varios bundles, estos se definen como propiedades del objeto de configuración del módulo y un módulo pureciben como valor un objeto de configuración que aparte de los procesadores, puede recibir algunas propiedades adicionales según el tipo de bundle. Puedes leer más en detalle sobre esto\r\nen ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/bundles",
                  children: "La sección de bundles."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ["modules/bundles", "modules/processors"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./mdx/modules/introduction.mdx
      **********************************************/

      ims.set('./mdx/modules/introduction.mdx', {
        hash: 547226794,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              code: "code",
              ul: "ul",
              li: "li",
              em: "em"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Basics",
                title: "Modules"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["En ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ", los módulos son la unidad básica de desarrollo y se dividen en dos conceptos:\r\nMódulos Internos y Módulos."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Los Módulos Internos representan el concepto de módulos JavaScript tradicionales,\r\nes decir, archivos con tareas independientes y un scope propio.\r\nSin embargo, los desarrolladores tienen la capacidad de definir si estos\r\nmódulos internos son accesibles para ser utilizados por otros módulos internos o\r\nno mediante el uso de un comentario especial llamado", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "/*bundle*/"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Por otro lado, los Módulos en BeyondJS son una unidad más grande de desarrollo que\r\nse compone de varios módulos internos, así como de otros recursos como estilos,\r\nimágenes y texto. BeyondJS empaqueta estos módulos en un archivo único según\r\nel tipo de procesador utilizado."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para ilustrar esto, tomemos como ejemplo un módulo \"login\" que se compone de\r\nlos siguientes elementos:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Un archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "auth.ts"
                  }), " con un objeto Auth que sirve de modelo y\r\npermite realizar la llamada para el inicio de sesión"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
export /_bundle_/ class Auth {

    constructor(options) {
        this.options = options;
    }

    login(username, password) {
        // lógica de inicio de sesión
    }

    logout() {
        // lógica de cierre de sesión
    }

}`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Un archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "user.ts"
                  }), " con un objeto User que expone\r\nla información del usuario en caso de que inicie sesión"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
import { Auth } from './auth.js';

export /*bundle*/ class User {
    constructor(options) {
        this.options = options;
        this.auth = new Auth(options);
    }

    getCurrentUser() {
        // lógica para obtener el usuario actual
    }

}
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Un archivo de estilos ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "styles.scss"
                  }), " y"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["un componente de interfaz gráfica ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "form.tsx"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Basándonos en EcmaScript, los archivos auth.ts, user.ts y form.tsx\r\nson módulos independientes que exponen un objeto. Sin embargo,\r\nen términos de funcionalidad, el módulo de la aplicación se compone de estos\r\narchivos en su totalidad."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Por lo tanto, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " conceptualiza los módulos como un conjunto de archivos\r\ndefinidos en un archivo module.json, donde todos los elementos dentro de este\r\nmódulo pueden ser utilizados entre sí. Además, el programador puede definir\r\nexactamente qué elementos exportar a un módulo externo, como en el ejemplo\r\ndel objeto \"user\", que es exportado mediante el comentario mágico /", (0, _jsxRuntime.jsx)(_components.em, {
                  children: "bundle"
                }), "/."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " empaqueta los módulos como bundles independientes. Puedes obtener más información sobre esto en la sección\r\nde creación de módulos."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Como desarrollador, es probable que sólo te interese que otros módulos puedan\r\nconsumir la vista del formulario y el objeto User para acceder a los datos del usuario."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/modules/creation",
                    children: "Crear de módulos"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/bundles",
                    children: "Bundles"
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /**************************************
      INTERNAL MODULE: ./mdx/modules/json.mdx
      **************************************/

      ims.set('./mdx/modules/json.mdx', {
        hash: 0,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /********************************************
      INTERNAL MODULE: ./mdx/modules/processors.mdx
      ********************************************/

      ims.set('./mdx/modules/processors.mdx', {
        hash: 4018870442,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              strong: "strong",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Procesadores"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Muchas de las herramientas o lenguajes utilizados en el entorno web requieren un procesamiento previo para ser interpretados por los navegadores o entornos de ejecución, este es el trabajo que realizan los procesadores."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS ofrece una serie de procesadores integrados, que permiten utilizar las principales tecnologías de la industria web y brinda soporte para que puedan integrarse nuevos procesadores en caso de que se requiera."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS trabaja distinto a empaquetadores como Webpack o Parcel. No necesita evaluar el arbol de dependencias de un proyecto, ni aplicar técnicas para separación de código o tree shaking. Gracias a su naturaleza módular y por medio de los procesadores, el empaquetado de código se hace a nivel de bundles."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Los procesadores son componentes de BeyondJS que permiten interpretar, parsear, transpilar o compilar código (según sea el caso) de los lenguajes o tecnologías utilizadas en un ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/bundles",
                  children: "Bundle."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Procesadores existentes"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "ts:"
                  }), " permite trabajar con typescript y archivos ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "tsx"
                  }), " para react."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "sass:"
                  }), " brinda soporte para trabajar con archivos SASS de extensión .scss"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "vue:"
                  }), " Brinda soporte para trabajar con archivos single-file-components de vue."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "svelte:"
                  }), " Permite trabajar con archivos single-file-component de svelte"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Propiedades"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Todos los procesadores cuentan con las siguientes propiedades:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "path"
                    }), " (string) optional: Permite definir el directorio en donde se encuentran los archivos del procesador. Si se agrega un valor, el mismo es interpretado como un directorio de posición relativa a la ubicación del module.json definido."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "files"
                    }), " (array) optional: Permite definir la lista de archivos o carpetas incluidos en el procesador. Si la propiedad path se encuentra definida, los archivos serán buscados adentro del directorio especificado, caso contrario, serán buscados de forma relativa a la ubicación del module.json. Se puede pasar como valor de la propiedad un arreglo con una entrada *, de esta forma se estaría indicando que se incluyen todos los archivos en el directorio especificado."]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Ejemplos"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El siguiente ejemplo, corresponde a la definición de un bundle de tipo code, a continuación explicamos el detalle:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "El bundle hace uso de dos procesadores: sass y ts."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "El procesador sass incluye todos los archivos en el directorio /code/scss el cual es relativo a la ubicación del archivo module.json."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "El procesador ts sólo incluye el archivo component.ts el cúal se encuentra en el directorio /code/ts relativo a la ubicación del archivo module.json."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
{
  "name": "icons",
  "code": {
    "ts": {
      "path": "ts",
      "files": [
        "*"
      ]
    },
    "sass": {
      "path": "scss",
      "files": [
        "*"
      ]
    }
  }
}
`
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./mdx/packages/beyond.mdx
      *****************************************/

      ims.set('./mdx/packages/beyond.mdx', {
        hash: 2706653888,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              blockquote: "blockquote",
              p: "p",
              ul: "ul",
              li: "li",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Basics",
                title: "Paquetes de BeyondJS"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["BeyondJS es una plataforma altamente extensible, diseñada para permitir a los desarrolladores integrar las tecnologías que mejor se adapten a sus necesidades, incluso las nuevas que surgen en el mercado. Esto significa que los desarrolladores pueden crear paquetes personalizados para ampliar la funcionalidad existente de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ". Si deseas saber más sobre cómo extender BeyondJS, puedes visitar la ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/foundations/extend",
                    children: " la sección correspondiente en nuestra documentación"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " ofrece una variedad de paquetes independientes para que puedan ser incorporados en el desarrollo según sea\r\nnecesario. Esto proporciona una mayor flexibilidad y adaptabilidad en la creación de proyectos, permitiendo elegir las\r\ntecnologías y librerías que mejor se adapten a las necesidades del proyecto. Además, esto permite una mayor\r\nescalabilidad ya que los paquetes pueden ser actualizados o reemplazados de forma independiente. Puedes leer más acerca\r\nde estos paquetes en la sección de Paquetes disponibles."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/kernel",
                    children: "@beyond-js/bee"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/bee",
                    children: "@beyond-js/bee"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/local",
                    children: "@beyond-js/local"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/ssr",
                    children: "@beyond-js/ssr"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/widgets",
                    children: "@beyond-js/widgets"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/react-widgets",
                    children: "@beyond-js/react-widgets"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/svelte-widgets",
                    children: "@beyond-js/svelte-widgets"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/vue-widgets",
                    children: "@beyond-js/vue-widgets"
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En este documento se hará un repaso de que realiza cada uno de los paquetes."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "@beyond-js/kernel"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Este paquete contiene un conjunto de funcionalidades utilitarias esenciales para desarrollar proyectos en ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                lang: "ts",
                children: `import {Events, routing} from '@beyond-js/kernel'`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "@beyond-js/backend"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Este paquete proporciona un servicio de backend basado en node con conexión de Websocket y soporta la ejecución de los Bridges, una funcionalidad de BeyondJS que permite crear APIs backend y el código cliente para consumirlo con tipado de datos incluido."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "@beyond-js/bee"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Este paquete mejora la experiencia de desarrollo en Node.js, ya que permite interactuar con el DevServer de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " enlugar de buscar paquetes en disco. Esto permite programar con funcionalidades de HMR (Hot Module Replacement) de forma natural y sencilla. Además, proporciona soporte para trabajar con http imports en versiones anteriores de Node.js"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "@beyond-js/local"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Este paquete es utilizado para dos funciones principales:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Escucha los cambios desde el Inspector de BeyondJS y realiza carga inmediata mediante HMR de los elementos modificados. Sirve para proyectos de backend, verificando el estado de los launchers y encendiéndolos previamente a la ejecución de la acción. Habilita el comportamiento HMR en los proyectos realizados con ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ". Es una dependencia necesaria para el entorno de desarrollo."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "@beyond-js/ssr"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["BeyondJS implementa Server Side Rendering (SSR) mediante un servidor HTTP con tres endpoints: widget y page. Permite implementar soluciones de SSR en proyectos web. Puedes leer más acerca de las buenas prácticas y otras formas de renderizado en ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/widgets/rendering",
                  children: " la sección de Renderizado con Widgets"
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "@beyond-js/widgets"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Los proyectos o paquetes Web en ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " funcionan como microfrontends independientes con la capacidad de contener su propio stack de tecnologías. Estos proyectos son flexibles y fácilmente extensibles, permitiendo la integración de nuevos paquetes de widgets que brinden soporte a librerías de vista o renderizado con pocos pasos simples."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: [(0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " se enfoca en facilitar la integración de nuevas librerías de renderizado, para que puedas hacerlo de\r\nforma sencilla. Puedes leer más acerca de cómo agregar motores de renderizado en la sección correspondiente de la\r\ndocumentación."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Además, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " ofrece los siguientes paquetes específicos para crear proyectos Web con Renderizado cliente, estático o de servidor (SSR)utilizando ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  hef: "https://reactjs.org/",
                  children: "React"
                }), ", ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://vuejs.org/",
                  children: "Vue"
                }), " y ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://svelte.dev/",
                  children: "Svelte"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Estos paquetes son:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["React: ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "@beyond-js/react-widgets"
                  })]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Svelte: ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "@beyond-js/svelte-widgets"
                  })]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Vue: ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "@beyond-js/vue-widgets"
                  })]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./mdx/packages/creation.mdx
      *******************************************/

      ims.set('./mdx/packages/creation.mdx', {
        hash: 223933639,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              code: "code",
              blockquote: "blockquote",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Basics",
                title: "Paquetes"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["En ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " los proyectos o aplicaciones son manejados como un paquete javascript que puede ser publicado en NPM de forma directa si se desea."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), " tiene una función similar al de cualquier proyecto de npm,\r\nya que es donde se definen las dependencias y configuraciones del proyecto. Sin embargo, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " agrega un conjunto de entry points adicionales\r\nal package.json, que le permiten a los desarrolladores gestionar los paquetes de forma universal y poder posteriormente ejecutarlos y publicarlos\r\nen cualquier plataforma."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["En este documento se explica como funciona la creación de paquetes.\r\nPuedes leer en detalle todas las opciones de configuración que gestiona ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " sobre los paquetes\r\nen ", (0, _jsxRuntime.jsxs)(_html.Link, {
                    href: "/docs/packages/json",
                    children: ["la sección del ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "package.json"
                    })]
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En resumen, el package.json en BeyondJS es un archivo fundamental para la configuración y gestión de proyectos.\r\nAdemás de las funciones comunes de un package.json, BeyondJS agrega entry points adicionales que permiten gestionar los paquetes de forma universal,\r\ndefinir distribuciones, especificar rutas de los paquetes, configurar templates, establecer idiomas soportados y definir parámetros globales del proyecto."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Crear un paquete"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Los paquetes en ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " pueden crearse de tres maneras:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["ejecutando el comando ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "beyond add package"
                  }), " en la consola de comandos."]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Haciendo uso del BeyondJS Workspace."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Manualmente."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Creación usando el CLI"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para Crear un proyecto por medio del cli sólo debes ejecutar el siguiente comando:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "beyond add package."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Para hacer uso del CLI de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " debes tener ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " instalado de forma global. Puedes ver todos los comandos provistos\r\nen ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/cli",
                    children: "la sección del cli"
                  }), " de esta documentación."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Creación usando BeyondJS Workspace"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Puedes crear paquetes directamente desde el BeyondJS Workspace, para hacerlo debes seguir los siguientes pasos:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Ejecutar ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " en la carpeta que desees gestionar tus proyectos."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Acceder a ", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://workspace.beyondjs.com",
                    children: " https://workspace.beyondjs.com"
                  }), " y crear el proyecto por medio de su interfaz gráfica.\r\nPuedes leer más acerca de cómo funciona el Workspace en la ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/workspace",
                    children: "sección de BeyondJS Workspace"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Creación manual"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Puedes crear los paquetes de forma manual, para ello sólo debes crear un package.json con su estructura mínima, la cúal debe incluir\r\nel nombre del paquete."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                name: "package.json",
                children: `{
 "name": "package-name",
}`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Además, tendrás que crear el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "beyond.json"
                }), " para que el DevServer de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " pueda reconocerlo. El archivo debe tener la siguiente estrucutra"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                name: "beyond.json",
                children: `{
    "applications": ["./project.json"]
}`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Puedes crear el package.json con herramientas de terceros cómo NPM o Yarn, luego registrarlos en el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "beyond.json"
                  }), ". Debes asegurarte\r\nde tener las propiedades del paquete que ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " requiere."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['packages/distributions', 'packages/json']
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./mdx/packages/dependencies.mdx
      ***********************************************/

      ims.set('./mdx/packages/dependencies.mdx', {
        hash: 1323184425,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              code: "code",
              ol: "ol",
              li: "li",
              blockquote: "blockquote"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Packages",
                title: "Dependencias"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Las dependencias en ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ", se manejan de forma similar a como se hace en JavaScript, a través del archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), ".\r\nSin embargo, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " introduce un concepto de dependencias avanzado que permite integrar paquetes que no están\r\npublicados en NPM como dependencias de otros paquetes. Una vez incluidos, estos paquetes son tratados de la misma manera\r\nque cualquier otra dependencia definida en las entradas dependencies o devDependencies del ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para agregar un paquete local como dependencia, primero debe estar incluido como proyecto en el DevServer. Esto significa que debe estar registrado en el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "beyond.json"
                }), " y debe incluirse un punto de entrada libraries en el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La estructura es la siguiente:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "package.json",
                children: `"libraries": {
    "imports": [
      "packageName1",
      "packageName2",...
    ]
}`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La entrada libraries en el ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), " acepta un objeto que contiene una propiedad \"imports\" que recibe un arreglo de cadenas de texto. Las entradas de este arreglo deben corresponder al nombre exacto de los paquetes que se quieren incluir."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Como ejemplo, supongamos que tenemos los paquetes \"@my-packages/a\" y \"@my-packages/b\" y que el paquete \"b\" depende de \"a\"."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para incluir estos paquetes como dependencias, debemos seguir dos pasos:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Asegurarnos de que ambos paquetes estén incluidos en el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "beyond.json"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "beyond.json",
                children: `{
        "applications: ["./a/package.json", './b/package.json']
    }`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["La propiedad \"applications\" en el ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "package.json"
                  }), " puede aceptar tanto un arreglo como una cadena de texto. Si se proporciona una cadena, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " interpretará que la lista de aplicaciones se encuentra en un archivo separado con el nombre especificado en dicha cadena."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "2",
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["grega la entrada ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "libraries.imports"
                  }), " en el archivo package.json e incluye el paquete @my-packages/a como un elemento en el arreglo definido como valor."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "b/`package.json`",
                children: `"libraries": {
    "imports": [
      "@my-packages/a",
    ]
}`
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /************************************************
      INTERNAL MODULE: ./mdx/packages/distributions.mdx
      ************************************************/

      ims.set('./mdx/packages/distributions.mdx', {
        hash: 2859429629,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              blockquote: "blockquote",
              code: "code",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                id: "intro",
                pretitle: "Paquetes",
                title: "Distribuciones"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Las Distribuciones son una funcionalidad que permite definir el comportamiento que debe tener el DevServer de BeyondJS en el entorno de desarrollo y las caracteristicas para el empaquetado del proyecto durante el proceso de despliegue"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "Al crear un nuevo proyecto, este viene con una distribución configurada de forma predeterminada. En este documento se describen en detalle todas las opciones de configuración de las distribuciones, necesarias para trabajar con diferentes entornos de ejecución o tipos de resolución de módulos."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                id: "definition",
                tag: "h2",
                text: "Definición"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Las distribuciones se definen en el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "project.json"
                }), ", en la propiedad ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "distirbutions"
                }), "\r\ndel entry point ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "development"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Un ejemplo de una distribución es:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: ` {
    "name": "web",
    "platform": "web",
    "environment": "development",
    "ports": {
        "bundles": 3500
    }
},
`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                id: "properties",
                tag: "h2",
                text: "Propiedades"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_html.ObjectProperty, {
                      type: "string",
                      children: "name"
                    }), " Nombre identificador de la distribución."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_html.ObjectProperty, {
                      type: "string",
                      children: "platform"
                    }), " identificador de la plataforma que utiliza la distribución. Puede\r\nver los identificadores de plataformas en la ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/platforms",
                      children: "sección de Plataformas"
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_html.ObjectProperty, {
                      type: "string",
                      children: "environment"
                    }), " soporta los valores ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "deployment"
                    }), " y ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "production"
                    }), "."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_html.ObjectProperty, {
                      type: "object",
                      children: "ports"
                    }), " recibe un objeto con las siguientes propiedades :"]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_html.ObjectProperty, {
                        type: "number",
                        children: "bundles"
                      }), " puerto en el que el DevServer devolverá los bundles."]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_html.ObjectProperty, {
                        type: "number",
                        children: "http"
                      }), " Este puerto lo requiere ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " en proyectos que deban ser\r\nrenderizados con SSR o proyectos backend que utilicen el paquete ", (0, _jsxRuntime.jsx)(_components.code, {
                        children: "@beyond-js/bee"
                      }), " para poder interactuar con el DevServer."]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_html.ObjectProperty, {
                        type: "number",
                        children: "inspect"
                      }), " Puerto para conectar debuggers o inspectores de código."]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_html.ObjectProperty, {
                      type: "object",
                      children: "ts"
                    }), " Objeto manejado para gestionar configuraciones del compilador typescript,\r\nactualmente soporta las siguientes propiedades:"]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(_html.ItemProperty, {
                        type: "string",
                        optional: true,
                        label: "compiler",
                        children: (0, _jsxRuntime.jsxs)(_components.p, {
                          children: ["acepta los valores ", (0, _jsxRuntime.jsx)(_components.code, {
                            children: "ts"
                          }), " y ", (0, _jsxRuntime.jsx)(_components.code, {
                            children: "transpiler"
                          }), "."]
                        })
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ItemProperty, {
                    type: "string",
                    optional: true,
                    label: "backend",
                    children: (0, _jsxRuntime.jsxs)(_components.p, {
                      children: ["Esta propiedad se utiliza cuando el paquete es un proyecto que se conecta con un servicio node de tipo backend.\r\nPuedes leer más acerca de esto en la ", (0, _jsxRuntime.jsx)(_html.Link, {
                        href: "/bridges",
                        children: "sección de Bridges"
                      }), " ."]
                    })
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A continuación se muestran una lista de ejemplos con las configuraciones esenciales de las distribuciones para tener un mejor entendimiento"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Paquetes Web"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La distribución web se configura para el manejo de proyectos web, moviles o de escritorio."
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "package.json",
                children: `  "deployment": {
    "distributions": [
       {
        "name": "web",
        "platform": "web",
        "environment": "development",
        "ports": {
          "bundles": 6500
        }
      }
    ]
  }`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Paquetes Backend"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Puedes crear proyectos backend con tres tipos de plataformas ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "node"
                }), ", ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "deno"
                }), " y ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "backend"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Todas representan un script que puede ser ejecutado como servicio en un entorno de ejecución Node o Deno (se debe utilizar la plataforma definida para cada caso)."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " utiliza la plataforma para identificar la forma en que debe empaquetarse el código."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "La distribución backend en BeyondJS es un servicio de Node.js que permite conectarse a otros servicios o clientes a través de WebSockets."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "Gracias a los bundles de tipo bridge, el desarrollo de la funcionalidad backend se facilita mediante la generación automática de una API con tipado de datos y soporte para HMR en entornos de desarrollo. Esto brinda a los programadores la capacidad de crear y consumir fácilmente métodos definidos en el backend."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La configuración de estas distribuciones se realiza de la siguiente forma, teniendo en cuenta que los valores como \"name\" y los puertos de configuración, son definidos por el desarrollador y que el valor de la plataforma dependerá\r\nde la finalidad del paquete y el entorno a utilizar."
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "package.json",
                children: `  "deployment": {
    "distributions": [
      {
        "name": "backend",
        "platform": "backend",
        "environment": "development",
        "ports": {
          "bundles": 6580,
          "http": 6581,
          "inspect": 6582
        }
      }
    ]
  }`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Configuración Web y Backend"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["En proyectos en donde se requiera interacción cliente y servidor, se puede agregar la configuración de ambas distribuciones e interactuar en simultaneo con el Dev Server de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " para tener una experiencia eficiente y homogenea en el desarrollo."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para hacerlo, es necesario agregar ambas distribuciones y especificar ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "en la distribución web la propiedad \"backend\" que debe llevar cómo valor el nombre que se le haya colocado a la distribución backend"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "package.json",
                children: `"deployment": {
    "distributions": [
      {
        "name": "web",
        "platform": "web",
        "environment": "development",
        "backend": "backend",
        "ports": {
          "bundles": 6510
        }
      },
      {
        "name": "backend",
        "platform": "backend",
        "environment": "development",
        "ports": {
          "bundles": 6511,
          "http": 6512,
          "inspect": 6513
        }
      }
    ]
  }
`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Formato de resolución de módulos"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El formato de resolución de módulos en ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " se establece automáticamente en función del tipo de distribución. No obstante, los desarrolladores pueden modificarlos según sus necesidades agregando la propiedad 'bundles' en la configuración de la distribución."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La propiedad 'bundles' es un objeto que incluye una propiedad 'mode', cuyo valor determina el tipo de resolución de módulos."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los valores aceptados para 'mode' son: 'amd', 'sjs', 'esm', 'cjs'."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ejemplo:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "package.json",
                children: `  "deployment": {
    "distributions": [
      {
        "name": "web",
        "platform": "web",
        "bundles": {
            "mode": "esm"
        },
        "ports": {
          "bundles": 6580
        }
      }
    ]
  }`
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['backend', 'frontend/intro']
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./mdx/packages/import.mdx
      *****************************************/

      ims.set('./mdx/packages/import.mdx', {
        hash: 2032191572,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Importación de proyectos"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "project.json"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
"libraries": {
    "imports": [
      "@project/models"
    ]
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En BeyondJS un proyecto puede ser importado por otro y funcionar como una librería, brindando al proyecto principal acceso a los módulos de este. Esta funcionalidad es clave para pensar en soluciones con estructuras de microservicios interconectados entre sí o de librerías que contengan código reutilizable."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para ejemplificarlo, podemos hablar de una solución que maneja una página web, una aplicación móvil y un panel administrativo, todos como proyectos independientes que alimentan una misma fuente de datos. La importación de proyectos permite que se maneje toda la lógica de datos en un proyecto independiente que es utilizado por los tres aplicativos, permitiendo así reutilizar el código."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La importación de proyectos se realiza desde el ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/projects/json",
                  children: "project.json"
                }), " y es necesario que los proyectos se encuentren agregados en la entrada projects del beyond.json."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Si los proyectos se crean por medio del Workspace, el archivo beyond.json se modifica de forma automática."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Siguiendo el ejemplo mencionado, el proyecto con los módulos que gestionan los datos y se conectan a la base de datos podría llamarse models y para importarlo en los otros proyectos, tendría que agregarse el siguiente código en el project.json"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
"libraries": {
    "imports": [
      "@project/models"
    ]
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La propiedad imports recibe un arreglo de ítems, lo que permite importar múltiples proyectos en caso de ser requerido."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***************************************
      INTERNAL MODULE: ./mdx/packages/json.mdx
      ***************************************/

      ims.set('./mdx/packages/json.mdx', {
        hash: 884956066,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              code: "code",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Packages",
                title: "package.json"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["En ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ", el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), " es esencial para cualquier aplicación. Este archivo contiene información importante, incluidas las dependencias necesarias para su ejecución, scripts de inicio, información sobre el autor y otros metadatos. Beyond.js agrega un conjunto de propiedades adicionales que se utilizan para controlar y personalizar el comportamiento de la aplicación. En esta sección, exploraremos estas propiedades adicionales y cómo se utilizan en Beyond.js."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "name"
                    }), " string: string Es el nombre para identificar el proyecto, sigue el estándar de npm, por tanto, sólo puede contener caracteres seguros para URLs, sin puntos o guiones bajos."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "scope"
                    }), " string optional: Al igual que en npm, sirve para agrupar paquetes y como los proyectos pueden ser publicados como paquetes npm, en caso de agregarse un scope, este debe ser único y sólo puede ser manejado por la organización o usuario que lo utiliza. La validación de unicidad del scope es hecha por npm, sólo si el programador intenta publicar su proyecto como paquete."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "title"
                    }), " string optional: Titulo descriptivo del proyecto, no debe poseer más de 100 caracteres."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "description"
                    }), " string optional: Espacio para explicar de forma resumida cuales son las características del proyecto."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "template"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Espacio para explicar de forma resumida cuales son las características del proyecto."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "layout"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Espacio para explicar de forma resumida cuales son las características del proyecto."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "params"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Objeto que permite agregar parámetros generales que se requieran utilizar en todo el proyecto, tiene la posibilidad de definir valores por entorno. Para entender más, puedes dirigirte a la sección ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/project/params",
                      children: "Parámetros del proyecto."
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "modules"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Recibe un objeto con una entrada path que permite definir el directorio de los módulos, por defecto es \"module\""]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "deployment"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Objeto que permite realizar las configuraciones de los entornos de desarrollo, las cuales son definidas por medio de la entrada deployment"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Deployment"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/glossary#eac",
                      children: "EAC"
                    }), " Objeto que permite realizar las configuraciones de los entornos de desarrollo, las cuales son definidas por medio de la entrada distributions. Las distribuciones pueden agregarse desde la funcionalidad del workspace para ello o de forma manual. Para entender cómo funcionan puedes dirigirte a la ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/project/distributions",
                      children: "Sección de distribuciones."
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "libraries"
                    }), " object: Permite importar proyectos internos. Puedes leer más en la ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "packages/dependencies",
                      children: "sección de dependencias"
                    })]
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /******************************************
      INTERNAL MODULE: ./mdx/packages/publish.mdx
      ******************************************/

      ims.set('./mdx/packages/publish.mdx', {
        hash: 3760546150,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              code: "code",
              h3: "h3"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Paquetes",
                title: "Publicación  en NPM"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para publicar un paquete en NPM actualmente debes agregar una distribución npm en el ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), ".\r\nLa distribución debe contener una propiedad \"platforms\" con un objeto que indique las plataformas que se desean compilar y la distribución asociada\r\na esta plataforma."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Ejemplo"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
{
  "name": "npm",
  "npm": {
    "platforms": {
      "web": "web" //
    }
  }
}
`
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /****************************************
      INTERNAL MODULE: ./mdx/packages/types.mdx
      ****************************************/

      ims.set('./mdx/packages/types.mdx', {
        hash: 1702582183,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              code: "code",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Packages",
                title: "Gestión de un proyecto"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Con ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " puedes comenzar a desarrollar con paquetes\r\nlistos para proyectos de diferentes entornos o finalidades."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El tipo de paquete a crear es una opción que se define al ejecutar el comando\r\n", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "beyond add package"
                }), " o al crear un proyecto desdel el ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " Workspace."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A continuación, se presentan los diferentes tipos de proyectos\r\nque se pueden crear con BeyondJS:"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Proyectos en blanco"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Web:"
                  }), " Listo para comenzar un proyecto web que pueda ser distribuido en internet\r\no como aplicación móvil."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Node:"
                  }), " Listo para distribuir como un proyecto a ejecutar en un entorno node."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Backend:"
                  }), " Proyecto node que disponibiliza interfaces que puedan ser consumidas en\r\nreal-time con web sockets desde otro proyecto node o desde un proyecto cliente."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Library:"
                  }), " Ideal para crear proyectos que esten pensados para ser distribuidos\r\ncomo paquetes ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "NPM"
                  }), "."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "web - backend:"
                  }), " Genera un proyecto con distribuciones Web y Backend integrados."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Plantillas"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "React, vue y svelte"
                  }), " apps, proyectos para empezar a trabajar con la libreria de framework de preferencia."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Express:"
                  }), " Proyecto con una estructura inicial para crear un servidor express."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Template web:"
                  }), " Template basica, con un modulo de ruta por defecto y la inicialización del backend implementada."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Asismismo, BeyondJS esta listo para ser integrado con cualquier otra libreria o paquete.\r\nEstas integraciones pueden realizarse en un\r\nmismo proyecto gracias a la estructura de micro-frontends que ofrece BeyondJS."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Puede leerse más al respecto en ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/widgets/intro",
                  children: "La sección de widgets"
                })]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /**************************************
      INTERNAL MODULE: ./mdx/starting/cli.mdx
      **************************************/

      ims.set('./mdx/starting/cli.mdx', {
        hash: 3416765649,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              code: "code",
              h5: "h5",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Fundamentos",
                title: "BeyondJS Cli"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS provee la siguiente lista de comandos para trabajar desde la consola de tu preferencia:"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "run"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `beyond run [--workspace port]`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El comando ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "run"
                }), " inicializa el DevServer de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " y habilita la conexión con\r\nel ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/workspace",
                  children: "BeyondJS Workspace"
                }), ", lo que facilita el proceso de depuración y gestión de paquetes.\r\nEs necesario ejecutarlo para comenzar a trabajar con ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h5, {
                children: "Parametros:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["--workspace: Es opcional. Este parametro define el puerto de conexión websocket para que el\r\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/workspace",
                    children: " Workspace"
                  }), " pueda obtener información acerca de los paquetes disponibles en el DevServer.\r\nsino es pasado, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " tomará por defecto el puerto 4000."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "add package"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `beyond add package`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "\"El comando add package permite crear un nuevo paquete y agregarlo al DevServer.\r\nAl ejecutarlo, se abre una consola interactiva donde se pueden definir las características del paquete, como por ejemplo:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Tipo de paquete: se puede elegir entre las opciones web, backend, web-backend, node, express.\r\nPara obtener más información sobre los diferentes tipos de proyectos, consulta la\r\nsección ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/packages/create",
                    children: "creación de paquetes"
                  }), ".\""]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "add module"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El comando ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "add module"
                }), " permite agregar módulos a un paquete existente. Al ejecutarlo permite definir las caracteristicas\r\ndel mismo por medio de la consola interactiva."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `beyond add module [subpath]]`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "--version"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Permite verificar la versión de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " instalada."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `beyond --version`
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['widgets', 'backend']
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /****************************************
      INTERNAL MODULE: ./mdx/starting/intro.mdx
      ****************************************/

      ims.set('./mdx/starting/intro.mdx', {
        hash: 1729458907,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                id: "intro",
                pretitle: "Introducción",
                title: "¿Qué es BeyondJS?"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS es un framework de nueva generación diseñado para crear módulos JavaScript universales,\r\nlistos para ser distribuidos y reutilizados como cualquier paquete de NPM que conozcas, sin necesidad de usar empaquetadores ni herramientas adicionales."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Nuestra meta es simplificar el proceso y la experiencia de desarrollo en general, llevando cualquier proyecto JavaScript a su concepto más esencial: un paquete."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Con BeyondJS, puedes crear paquetes para cualquier entorno, utilizando el conocimiento que ya conoces y enfocándote en lo importante, tu lógica de negocio."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Es un meta-framework basado en Typescript y trabaja de forma directa con su API para abstraer al programador del proceso de compilación/transpilado a JavaScript y brindar un manejo de errores optimizado y rápido."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Además, es compatible con los paquetes NPM que sigan el estándar definido por Node, por lo que puedes integrarlo con un gran número de librerías."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                id: "why-beyond",
                tag: "h2",
                text: "¿Por qué BeyondJS?"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La arquitectura modular+universal de BeyondJS permite programar para cualquier entorno de ejecución JavaScript y desarrollar los siguientes tipos de soluciones:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Proyectos web."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Aplicaciones móviles híbridas."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Aplicaciones de escritorio híbridas."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "microservicios y backends monolíticos."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Extensiones."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Microfrontends o Widgets para integrarlos en proyectos existentes."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En resumen, BeyondJS es una herramienta que te permite crear módulos universales y distribuirlos como paquetes NPM, simplificando el proceso de desarrollo y garantizando una experiencia homogénea en cualquier entorno de ejecución JavaScript."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./mdx/starting/quick-start.mdx
      **********************************************/

      ims.set('./mdx/starting/quick-start.mdx', {
        hash: 3989112505,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h3: "h3",
              p: "p",
              ul: "ul",
              li: "li",
              pre: "pre",
              code: "code",
              blockquote: "blockquote"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Introducción",
                title: "Comienzo rápido"
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Prerequisitos"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para entender esta documentación, debes tener en cuenta los siguientes puntos:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Tener instalado Node ^14.17.4."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Estar familiarizado con manejadores de dependencias como npm o yarn."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " puede ser instalado mediante dos comandos:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Instalación global con npm: npm i -g beyond."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Instalación y creación de un proyecto con npx: npx @beyond-js/create-package."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Instalar y crear un proyecto"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Puedes instalar y crear un proyecto al mismo tiempo mediante el siguiente comando de npx:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.pre, {
                children: (0, _jsxRuntime.jsx)(_components.code, {
                  children: "npx @beyond/create-package\n"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El comando es interactivo y procederá a solicitar múltiples opciones, en ellas seleccionaremos las siguientes:\r\nEste es el comando ideal si no tienes ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " instalado y deseas empezar con un proyecto nuevo al mismo tiempo.\r\nRealiza la instalación global y procede a crear un paquete automáticamente en el directorio en el que se ejecuta."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Al ejecutarlo, se te pedirá los datos del paquete, los cuales puedes ver en esta documentación\r\nen ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/quick-start#create-package",
                  children: "la sección de crear paquete."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Instalación global"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Puedes instalar ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " de forma global por medio del siguiente comando:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "npm i -g beyond"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El comando anterior instala ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " de forma global y habilita todos los comandos del CLI. Puedes leer más acerca de ellos en la\r\nsección ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/cli",
                  children: "de comandos de cli"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["A continuación, puedes ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/quick-start#create-package",
                  children: "crear un paquete desde cero"
                }), " o ejecutar ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " sobre una carpeta con proyectos existentes."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                id: "create-package",
                tag: "h3",
                text: "Crear un paquete"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Puedes llegar a este paso si ejecutaste el comando de ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "npx"
                }), " para crear un proyecto o teniendo ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " instalado por medio del siguiente\r\ncomando:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "beyond add package"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Al ejecutarlo, la consola interactiva te pedirá la siguiente información:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "specifier: que corresponde al nombre del paquete."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "title: Un titulo comercial y legible."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["type: Corresponde al tipo de paquete que quieres crear. ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " cuenta con varios templates bases que incluyen las librerias\r\nmás comunes de front o estructuras de trabajo para paquetes backend. Puedes leer más sobre ello en ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/packages/create",
                    children: "\r\nla sección de creación de paquetes"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Luego de ingresar los datos, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " terminará el proceso de instalación y estarás listo para empezar a programar, sólo necesitas\r\ninicializar el DevServer con el siguiente comando:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "beyond run --workspace 4000"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Instalación global"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Este comando realiza una instalación global que permite ejecutar el ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/dev-server",
                  children: "DevServer"
                }), " de"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " en el directorio que se desee y habilita la lista de comandos disponibles en el CLI."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Para ver la lista de comandos de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " puedes ir a ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/cli",
                    children: " la sección del CLI"
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Ejecución del proyecto"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Teniendo instalado ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " y habiendo creado el proyecto, sólo necesitas ejecutar el DevServer en la raiz de tu proyecto\r\npor medio del siguiente comando:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "beyond run --workspace 4000"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Este comando inicializa BeyondJS y te permite navegar a tu proyecto en ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "http://localhost:6530",
                  children: " http://localhost:6500"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["El puerto ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "6530"
                  }), " es definido por defecto en la distribución de proyecto y puede modificarse de forma simple en el ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "package.json"
                  }), ".\r\nPuedes leer en detalle sobre ello en ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/distributions",
                    children: " la sección de distribuciones"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Crear un módulo"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Puedes crear un nuevo módulo en ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " utilizando el CLI y ejecutando el siguiente comando desde la carpeta del proyecto\r\n(donde se encuentra el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), "):"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "beyond add module"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Los módulos en ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " se manejan mediante un archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "module.json"
                  }), " con una configuración mínima y sencilla, y\r\nel comando anterior genera automáticamente el archivo. Puedes obtener más información sobre cómo manejar los módulos en\r\nla ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/beyond/modules/creation",
                    children: "sección correspondiente de la documentación"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['modules/creation', 'tutorial/intro']
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*******************************
      INTERNAL MODULE: ./mdx/steps.mdx
      *******************************/

      ims.set('./mdx/steps.mdx', {
        hash: 1873673169,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              ul: "ul",
              li: "li",
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "Pasos"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Introducción: Explicar en términos generales qué es BeyondJS y para qué se utiliza."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Comenzar: Proporcionar instrucciones detalladas sobre cómo configurar y empezar a trabajar con BeyondJS, incluyendo la instalación y la creación de un proyecto."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Conceptos básicos: Explicar los conceptos básicos de BeyondJS, como el uso de módulos, la estructura de un proyecto, el uso de dependencias, etc."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Trabajando con el Backend: Explicar cómo trabajar con el backend en BeyondJS, incluyendo cómo crear y configurar un servidor, cómo crear y utilizar rutas, cómo manejar la seguridad, etc."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Trabajando con el Frontend: Explicar cómo trabajar con el frontend en BeyondJS, incluyendo cómo crear y configurar una aplicación, cómo utilizar componentes, cómo manejar el estado, etc."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Herramientas y utilitarios: Proporcionar información sobre las herramientas y utilitarios disponibles para trabajar con BeyondJS, como la CLI, el dashboard, etc."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Ejemplos: Proporcionar ejemplos de código de aplicaciones reales desarrolladas con BeyondJS para ilustrar cómo se utiliza en la práctica."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Referencia: Proporcionar una referencia detallada de todas las funciones, clases y métodos disponibles en BeyondJS."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Además, es importante mantener la documentación actualizada y proporcionar ejemplos de código para ilustrar cada concepto. También es útil proporcionar enlaces a recursos adicionales, como documentación de terceros y comunidades de soporte, para ayudar a los desarrolladores a encontrar la ayuda que necesitan."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /******************************************
      INTERNAL MODULE: ./mdx/tutorial/backend.mdx
      ******************************************/

      ims.set('./mdx/tutorial/backend.mdx', {
        hash: 3022037644,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              code: "code",
              ul: "ul",
              li: "li",
              strong: "strong",
              h4: "h4",
              blockquote: "blockquote",
              h5: "h5"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                title: "Código Backend",
                pretitle: "Tutorial"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A continuación, crearemos el código Backend para nuestro módulo.\r\nSe tratará de una API simple que verificará si los datos ingresados son válidos o no.\r\nNotarás la sencillez con la que se puede implementar una conexión WebSocket entre un cliente y un servidor\r\ny cómo todo funciona con HMR sin necesidad de reiniciar ningún servicio."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Creando módulo Bridge"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Lo primero que haremos será crear un nuevo módulo de tipo Bridge."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para comenzar, crearemos un nuevo módulo de tipo Bridge. Abrimos la consola en la carpeta del\r\nproyecto (donde se encuentra el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), ") y ejecutamos el siguiente comando:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "beyond add module"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El cómando nos solicitará los siguientes datos:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "subpath"
                  }), ": agregaremos \"api/auth\". Este valor corresponde al subpath del\r\nmódulo y tiene relación directa con el valor del entry point \"exports\" en el ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "package.json"
                  })]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "type"
                  }), ": seleccionaremos \"bridge\"."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Una vez ejecutado el comando, podremos ver que se ha creado nuestro módulo en el directorio api/auth de nuestro proyecto."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Estructura del Bridge"
              }), "\n", (0, _jsxRuntime.jsx)(_components.h4, {
                children: (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Este es el archivo de configuración de nuestro módulo. Todos los módulos en ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), "\r\nposeen uno."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "auth/module.json",
                children: `{
  "name": "api/auth",
  "description": "Modulo backend para validar inicio de sesion",
  "bridge": {
    "path": "bridge",
    "files": [
      "*"
    ]
  },
  "platforms": [
    "*"
  ]
}`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En este caso, se presenta un archivo de configuración para un módulo de BeyondJS llamado \"auth\".\r\nEn este archivo se especifica que el módulo es de tipo \"bridge\", y que todos los archivos de esa\r\ncarpeta formarán parte del bundle. Además, también se indica que el módulo es compatible con todas las plataformas."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h4, {
                children: "Archivo index.ts"
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "bridge/index.ts",
                children: `//your code here

export /*actions*/ /*bundle*/
class Bridge {

}
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En el archivo index.ts del bridge, se incluyen dos comentarios especiales,\r\nlos cuales son importantes para la funcionalidad del módulo."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El primer comentario, ", `/\*actions\*/`, ", indica que el módulo contiene métodos que serán consumidos a\r\ntravés de una conexión WebSocket desde un proyecto cliente u otro servicio."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El segundo comentario, ", `/\*bundle\*/`, ", indica que el objeto del archivo podrá ser consumido desde\r\notro módulo y debe ser agregado en los exports del archivo package.json."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Lógica Backend"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["En el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "bridge/index.tx"
                }), " agregaremos un objeto ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "data"
                }), " que nos servirá de \"base de datos\" para el ejemplo.\r\nEste archivo poseerá los valores del usuario y la clave válidos."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "También agregaremos un método login que reciba los parametros usuario y clave para verificar si los datos pasados son válidos o no."
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "bridge/index.ts",
                children: `

interface IData {
\tuser: string;
\tpassword: string;
}

const data: IData = {
\tuser: 'beyondjs',
\tpassword: 'B3yondJS'
}
export /\*actions\*/\/\*bundle\*/
class Auth {
\tasync login(user :string, password: string) {
\t\tif (user !== data.user || password !== data.password) {
\t\t\treturn {status: true, error: "Invalid data" };
\t\t}

      return {status: true, data: {valid: true} }

\t}
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Parece simple ¿Verdad? ¡Acá está lo importante!"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Al crear un bundle de tipo Bridge ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " crea de forma automática el código cliente\r\npara conectarnos al backend y consumir la API provista."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ahora solo necesitamos importar el bundle en nuestro módulo home e integrar la lógica de validación."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Integración en el módulo cliente"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Ahora importamos el módulo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "auth"
                }), " desde el componente principal de nuestro módulo home ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "home"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "home/ts/views/index.tsx",
                children: `import {Auth} from "@beyond-js/tutorial/api/auth";`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Algunos puntos a destacar de la línea de código anterior."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "El import se realiza por medio del Bare Identifier del módulo, el cúal corresponde al nombre del proyecto y el subpath del módulo."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "La importación de módulos está basada en ESM, pero por compatibilidad con navegadores que aún no soportan\r\nlos importmaps, actualmente BeyondJS hace uso de SystemJS."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Ahora agreguemos la función ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "onSubmit"
                }), " al formulario y la lógica para integrar el cliente y el backend."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "home/ts/views/index.tsx",
                children: `
import \* as React from "react";
import {Auth} from "@beyond-js/tutorial/api/auth";

interface IForm {
\tdisabled?: boolean;
}
const model = new Auth();
export /\*page\*/ function View(): JSX.Element {
\tconst defaultValues = { username: "", password: "", fetching: false };
\tconst [values, setValues] = React.useState(defaultValues);
\tconst [error, setError] = React.useState();
\tconst handleChange = ({ currentTarget: target }) => {
\tconst currentValue = { ...values };
\tcurrentValue[target.name] = target.value;
\tsetValues(currentValue);
};
\t\tconst formDisabled: IForm = {};
\t\tconst { username, password } = values;
\tif (!username || !password) {
\t\tformDisabled.disabled = true;
\t}
\tconst onSubmit = async (event) => {
\t\ttry {
\t\t\tevent.preventDefault();
\t\t\tconst response = await model.login(username, password);

            if (!response.data?.valid) {
                setError(response.error);
                return;
            }
            console.log("valid data");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="page__container">
            <form onSubmit={onSubmit}>
                {error && <div className="form__error">{error}</div>}
                <label>User: </label>
                <input onChange={handleChange} placeholder="username" type="text" name="username" />
                <label>Password</label>
                <input onChange={handleChange} placeholder="******" type="password" name="password" />
                <div className="form__actions">
                    <button onClick={onSubmit} {...formDisabled}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );

}
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Es tiempo de probar nuestro formulario.\r\nSi agregamos los datos correctos, podremos ver que en la consola del navegador aparece el mensaje que\r\nindica que los datos fueron validados y se puede iniciar sesión, si por el contrario,\r\nagregamos datos incorrectos, podremos ver como aparece el mensaje de error\r\n\"Invalid data\" el cual actualizamos en la variable de estado del componente."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h4, {
                children: "Resumen:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Creamos un módulo con un widget de tipo page."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Creamos una conexión con un backend node por medio del bundle bridge."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Repasamos la estructura de resolución de módulos para importar el bridge Auth y poder agregar la validación de inicio de sesión."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Ahora solo nos falta redireccionar al usuario a una pantalla de bienvenida."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.h5, {
                  children: "¡Ya te conectaste al Backend!"
                }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Es importante recalcar que en el código anterior realizamos ya una integración de forma directa entre el paquete que\r\nconsume y el paquete que provee la información. Puedes leer detenicamente toda esta información\r\nen ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "docs/modules/bridges"
                  }), "la sección dedicada a Bridges de esta documentación"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['tutorial/routing']
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./mdx/tutorial/first-module.mdx
      ***********************************************/

      ims.set('./mdx/tutorial/first-module.mdx', {
        hash: 2045373788,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              code: "code",
              ul: "ul",
              li: "li",
              blockquote: "blockquote",
              a: "a",
              h4: "h4"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Tutorial",
                title: "Primer módulo"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Como se puede observar, el proyecto cuenta con dos módulos creados: el Home, que corresponde a la URL base del proyecto, y el módulo \"start-backend\", del cual se hablará más adelante."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La estructura del módulo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "home"
                }), " es la siguiente:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "ts"
                  }), ":", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_components.code, {
                        children: "controller.ts"
                      }), ": objeto controlador del componente, necesario para montar el WebComponent en el navegador."]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_components.code, {
                        children: "views"
                      }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                        children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                          children: [(0, _jsxRuntime.jsx)(_components.code, {
                            children: "index.tsx"
                          }), ": componente react que renderiza la página."]
                        }), "\n"]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "sass"
                  }), ": carpeta para agregar estilos al módulo."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "module.json"
                  }), ": archivo de configuración del módulo (donde se define el tipo de bundles y procesadores a utilizar)."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "¡Manos a la obra! Con la estructura clara, lo siguiente es crear el formulario de inicio de sesión y agregar algunos estilos, antes de continuar con la conexión al backend node."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Creación del Formulario"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Si has trabajado con React, lo que viene es la parte que probablemente conozcas mejor, con algunas pequeñas diferencias. A continuación, editaremos nuestro archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "index.tsx"
                }), " para crear un formulario de inicio de sesión y la funcionalidad básica para actualizar el estado."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "index.tsx",
                language: "jsx",
                children: `
import * as React from 'react';

interface IForm {
disabled?: boolean;
}

export /*bundle*/
function View(): JSX.Element {
    const defaultValues = {username: '', password: '', fetching: false};
    const [values, setValues] = React.useState(defaultValues);
    const [error, setError] = React.useState();
    const handleChange = ({currentTarget: target}) => {
        const currentValue = {...values};
        currentValue[target.name] = target.value;
        setValues(currentValue);
    };
    const formDisabled: IForm = {};
    const {username, password} = values;
    if (!username || !password) {
        formDisabled.disabled = true;
    }
     return (
        <div className="page__container">
            <form>
                {
                    error &&
                    <div className="form__error">
                        {error}
                    </div>
                }
                <label>User: </label>
                <input onChange={handleChange} placeholder="username" type="text" name="username" />
                <label>Password</label>
                <input onChange={handleChange} type="password" name="password" placeholder="****" />
                <div className="form__actions">
                    <button {...formDisabled}>Login</button>
                </div>
            </form>
        </div>
    );
}
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Si navegamos nuestro proyecto en ", (0, _jsxRuntime.jsx)(_components.a, {
                    href: "http://localhost:6510/",
                    children: "http://localhost:6510/"
                  }), " podremos ver ya nuestro formulario funcionando, pero sin diseño, lo que agregaremos en la siguiente sección."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Estilos"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Los estilos en ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " son manejados por defecto con el preprocesador SASS."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["A continuación, vamos a nuestro archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "styles.scss"
                }), " y agreguemos algo de estilo al formulario."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["SASS es un procesador en BeyondJS, si quieres leer a profundidad sobre el mecanismo de procesadores podrás encontrar más detalles en ", (0, _jsxRuntime.jsx)(_components.a, {
                    href: "/docs/modules/processors",
                    children: "La sección de procesadores"
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "styles.scss",
                children: `
.page\_\_container {
  display: flex;
  padding: 20px;
  height: 100%;
  margin: 0;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;

    .form\_\_error {
      padding: 15px;
      display: grid;
      background: var(--error);
      color: var(--text-on-primary);
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
      background: var(--bg-element);
      padding: 30px;
      width: 100%;
      max-width: 500px;

      input {
        padding: 8px;
        border: 1px solid var(--gray-light);
        transition: all 300ms ease-in;

        &:hover, &:focus {
          outline: none;
          border-color: var(--primary);
        }
      }

    .form__actions {
      display: flex;
      justify-content: end;

      button {
        background: var(--primary);
        cursor: pointer;
        border: 1px solid var(--primary-dark);
        color: var(--text-on-primary);
        padding: .5rem 2rem;
        transition: all 300ms ease-in;

        &:disabled {
          opacity: .6;
          cursor: not-allowed;
        }

        &:hover {
          background: var(--primary-dark);
        }
      }
    }

}
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Expliquemos un poco el código anterior:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Agregamos estilo básico al formulario, los inputs, el botón de envío y\r\npara manejar un mensaje de error."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Custom properties: las custom properties utilizadas son una estructura básica para el manejo de variables incluidas por BeyondJS en el ", (0, _jsxRuntime.jsx)(_components.a, {
                    href: "/frontend/template",
                    children: "Template del proyecto"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Entendiendo la estructura de BeyondJS"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Hay dos puntos clave que es importante destacar hasta ahora para comprender el valor de lo que se ha hecho."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h4, {
                children: "La página es un microfrontend."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Puedes verificarlo si abres el analizador de código, podrás notar una etiqueta ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "<app-home/>"
                }), " que encapsula el contenido del módulo creado."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h4, {
                children: "El módulo es empaquetado de forma independiente."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Cada bundle incluido en un módulo de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " es empaquetado de forma individual y los\r\nestilos de estos generan una hoja de estilo independiente."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Puedes navegar el código CSS y JS generados de forma independiente accediendo a:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["bundle CSS: ", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "http://localhost:6510/home.css",
                    children: "http://localhost:6510/home.css"
                  })]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["bundle JS: ", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "http://localhost:6510/home.js",
                    children: "http://localhost:6510/home.js"
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["El código empaquetado en el entorno de desarrollo no posee optimizaciones para poder hacer\r\ndebug de forma sencilla si es necesario. En el proceso de despliegue, los bundles se generan\r\ntambién de forma independiente pero con las optimizaciones necesarias para un entorno productivo.\r\nAdemás, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " puede también generar las declaraciones de tipos del módulo. Puedes leer\r\nsobre esto en ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/modules/bundles",
                    children: "la sección de bundles"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ahora viene la mejor parte: conectarnos con websocket a un servicio en node."
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['tutorial/backend']
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /******************************************
      INTERNAL MODULE: ./mdx/tutorial/routing.mdx
      ******************************************/

      ims.set('./mdx/tutorial/routing.mdx', {
        hash: 1180585877,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              strong: "strong",
              code: "code",
              blockquote: "blockquote"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Tutorial",
                title: "Routing"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ahora, crearemos una nueva página a la cual el cliente será redirigido luego de iniciar sesión."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Módulo de redirección"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Desde la consola, ubicados en la carpeta raíz del proyecto,\r\nvolveremos a ejecutar el comando de creación de un módulo:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "beyond add module"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Agregaremos los siguientes valores en la consola de comando:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Package subpath"
                  }), ": lo nombrarémos \"welcome\"."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Package type"
                  }), " : seleccionaremos \"page\"."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "web component name"
                  }), ": colocaremos ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "app-welcome"
                  }), ".Los nombres de los componentes web deben contener\r\ndos palabras y estar separados por guiones."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "page url"
                  }), ": agregamos \"/welcome\"."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "About"
                  }), ": Welcome page."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "styles"
                  }), ": indicamos que si."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "multilanguage"
                  }), ": indicamos que no."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ahora, nos dirigiremos al módulo y agregaremos un mensaje sencillo que diga \"¡Bienvenido!\" con el estilo que deseemos."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Navegación"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "¡Prepárate para dar un gran salto en tu aplicación al redirigir a tu módulo de\r\nbienvenida tras iniciar sesión! Lo primero que debemos hacer es importar el objeto \"routing\" de Beyond,\r\npara poder utilizar el poderoso método pushState que nos permitirá navegar a la página de bienvenida."
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "home/views/index.tsx",
                children: `import { routing } from '@beyond-js/kernel/routing';`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Y en la función ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "onSubmit"
                }), ", agregaremos la siguiente línea para que todo funcione a la perfección:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `routing.pushState('/welcome');`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["De esta manera, nuestra función ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "onSubmit"
                }), " quedaría así:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "home/views/index.tsx",
                children: `const onSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await model.login(username, password);

            if (!response.data?.valid) {
                setError(response.error);
                return;
            }
            routing.pushState('/welcome');
        } catch (e) {
            console.log(e);
        }
    };

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Con estos simples pasos, redirigirás a tus usuarios a la página de bienvenida. BeyondJS también se encarga de registrar el historial de navegación del usuario, brindando funcionalidades avanzadas de gestión más allá de las posibilidades de la API del navegador."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "imagina tener acceso a los registros de las páginas previas en cualquier momento. BeyondJS te brinda un control total sobre la experiencia de navegación de tus usuarios, permitiéndote identificar estos registros y acceder a ellos cuando sea necesario."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: [(0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " es una herramienta poderosa que provee un objeto de enrutamiento para interactuar con la API de\r\nnavegación. Este objeto envuelve la función pushState del navegador y agrega lógica para hacer la navegación posible\r\nen distintos entornos. Si desea obtener más información sobre cómo utilizar el enrutamiento en ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ", puede\r\nvisitar la sección de ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/frontend/routing",
                    children: "Enrutamiento"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ahora es necesario recargar la página para hacer pruebas, esto se debe a que las urls de la aplicación se\r\nregistran al principio de la carga del proyecto."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Si probamos nuestro formulario podremos ver que aparece un error si los datos son invalidos y que\r\nse ininicia y redirecciona a nuestra pantalla de welcome si los datos ingresados son correctos."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Repaso de aprendizaje"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Con este último paso, finalizamos el tutorial completo, que ha constado de 4 partes fundamentales:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "En la primera parte, se abordó el inicio e instalación del proyecto y la creación del paquete principal."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "En la segunda parte, se enseñó cómo crear el primer módulo y cómo utilizarlo en la aplicación."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "En la tercera parte, se explicó cómo crear un bridge en el backend para conectarse mediante una conexión\r\nWebSocket e integrarlo desde el cliente."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Por último, en la cuarta parte, se mostró cómo utilizar el objeto de\r\nenrutamiento de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " para navegar a una nueva página."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Además, hay algunos puntos adicionales que vale la pena destacar:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Los módulos creados son bundles independientes y no se requieren empaquetadores para su uso"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Se implementó una conexión WebSocket entre cliente y servidor con una API tipada que verifica que los metodos\r\ny parametros pasados coincidan con su definición en el backend."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["El comentario mágico ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "/*bundle*/"
                  }), " se utilizó para definir que objeto debe ser expuesto para ser consumido en otro bundle."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["El comentario mágico ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "/*actions*/"
                  }), " se utilizó en el bundle de tipo bridge para definir que el objeto deberia generar\r\nuna api cliente, la cúal es gestionada por ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " de forma automática."]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "El código creado puede ser empaquetado para una aplicación hibrida."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['backend', 'frontend']
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /****************************************
      INTERNAL MODULE: ./mdx/tutorial/start.mdx
      ****************************************/

      ims.set('./mdx/tutorial/start.mdx', {
        hash: 2267515878,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              blockquote: "blockquote",
              p: "p",
              strong: "strong",
              ul: "ul",
              li: "li",
              code: "code",
              pre: "pre"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Tutorial",
                title: "Proyecto Web con Backend"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                children: "Antes de Empezar"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Este tutorial busca el flujo principal de desarrollo con ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "BeyondJS"
                  }), " y\r\ndemostrar de manera clara los\r\nbeneficios que este ofrece. El propósito de este tutorial es que los\r\nusuarios/programadores puedan aprender mientras practican, por tanto, los\r\nconceptos que definen la estructura de ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "BeyondJS"
                  }), " son abordados de forma general,\r\nfocalizando en hacer un ejercicio rápido, conciso y claro. Para mayor entendimiento de\r\nlos algunos conceptos, es necesario acceder a las secciones correspondientes\r\nen la documentación."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Prerequisitos"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para ejecutar el presente tutorial se requiere:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Tener instalado Node.js 16.x"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "tener conocimientos básicos sobre la consola de comandos."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Adicionalmente, se recomienda usar ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://code.visualstudio.com/",
                  children: "vscode"
                }), " para\r\npoder seguir el tutorial paso a paso. Sin embargo, se puede utilizar cualquier otro editor."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Empezando"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Lo primero que realizaremos es crear nuestro proyecto. Para ello debemos abrir la consola de comandos\r\nen la carpeta en la que deseemos y ejecutar el siguiente comando:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "Advertencia: los comandos de BeyondJS en el CLI son interactivos y requieren una consola compatible para su correcto funcionamiento. Asegúrate de tener una consola actualizada antes de utilizarlos."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "npx @beyond-js/create-package@latest"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Este comando es interactivo y solicita algunos datos para definir nuestro paquete o proyecto.\r\nLos datos que pide son los siguientes:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Package specifier"
                  }), ": Corresponde al nombre de nuestro paquete, para efectos de este tutorial\r\nnuestro paquete se llamará: '@beyond-js/tutorial'."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Title"
                  }), ": \"Tutorial Web de BeyondJS\""]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "About"
                  }), ": Puedes agregar cualquier texto o ignorarlo y avanzar."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Package type"
                  }), ": Corresponde al tipo de proyecto a crear, seleccionaremos ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "web-backend"
                  }), " que contiene\r\nlos paquetes para implementar una conexión entre un servicio node y nuestro proyecto web por medio de websockets,\r\ncomo vermos más adelante. BeyondJS lo instalará de manera local y var a generar la estructura inicial de nuestro proyecto."]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Preguntará si deseamos instalar las dependencias, seleccionamos que sí."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "¡Listo! nuestro proyecto se ha creado. A continuación abriremos nuestro editor de texto en el directorio\r\ndonde ejecutamos el comando"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "code ."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Al abrirlo podremos ver que tenemos la siguiente estructura:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "beyond.json:"
                    }), " Archivo para manejar el servidor de desarrollo, gestionado por BeyondJS."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "packages.json:"
                    }), " Este archivo registra los proyectos a los que el DevServer tiene acceso,\r\ngeneralmente es gestionado de forma directa por ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), "."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "tutorial"
                    }), ": La carpeta de nuestro paquete y proyecto."]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                        children: [(0, _jsxRuntime.jsx)(_components.strong, {
                          children: "package.json"
                        }), ": Archivo del paquete javascript."]
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                        children: [(0, _jsxRuntime.jsx)(_components.strong, {
                          children: "/modules:"
                        }), " Carpeta en donde se crean los módulos del proyecto por defecto. Este valor es configurable,\r\npuedes leer más de ello en la sección de ", (0, _jsxRuntime.jsx)(_html.Link, {
                          href: "/docs/packages/json",
                          children: "Configuración de Paquetes."
                        })]
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                        children: [(0, _jsxRuntime.jsx)(_components.strong, {
                          children: "template:"
                        }), " Esta carpeta contiene todos los elementos necesarios para definir el template general del proyecto."]
                      }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                        children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                          children: [(0, _jsxRuntime.jsx)(_components.strong, {
                            children: "template.json:"
                          }), " Archivo que permite realizar ajustes en la configuración del template del proyecto."]
                        }), "\n"]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Si deseas puedes conocer las diferencias sobre los tipos de proyectos\r\nen ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/packages/types",
                    children: " la sección correspondiente de la documentación."
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["A continuación, debemos iniciar ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ", para ello ejecutamos el siguiente comando:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                language: "shel",
                children: "beyond run --workspace 4000"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Al ejecutarlo, debe aparecer el siguiente mensaje en la consola de comandos:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.pre, {
                children: (0, _jsxRuntime.jsx)(_components.code, {
                  children: "Follow the link to manage your packages with the workspace:\r\nhttps://workspace.beyondjs.com?port=4000\r\n\n"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["¡Listo! Ya podemos acceder a nuestro proyecto en ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "http://localhost:6510/",
                  children: "http://localhost:6510/"
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A continuación vamos a crear nuestro primer módulo."
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['tutorial/first-module', 'tutorial/backend']
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./mdx/workspace/workspace.mdx
      *********************************************/

      ims.set('./mdx/workspace/workspace.mdx', {
        hash: 290932671,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              strong: "strong",
              ol: "ol"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Workspace"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS provee un Workspace integrado, que busca mejorar la experiencia de desarrollo de varias maneras, todas enfocadas en brindar un soporte al programador en tareas diarias que suelen consumir tiempo. Estas tareas abarcan todo el circuito del desarrollo, desde la creación de un proyecto nuevo hasta el despliegue del mismo."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Se encuentra disponible siempre que el servidor de desarrollo se levanta en ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://workspace.beyondjs.com/",
                  children: "https://workspace.beyondjs.com/"
                }), " y permite realizar la creación de un nuevo proyecto u obtener información relevante del proyecto existente, como se verá más adelante."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Funcionalidades"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Creación de proyectos en blanco o desde plantillas."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Creación de módulos."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Detalle informativo de los proyectos y módulos"
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Detección de errores ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "en tiempo real"
                  }), " generales en proyectos, módulos, las dependencias y en los módulos consumidores"]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Detección de errores de tipado con typescript."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Detección de errores de runtime."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Manejo de errores en real time en procesos Nodepor medio de HMR."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Configuración de entornos de desarrollo."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Edición de código"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Navegación de proyectos."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Manejo de dependencias."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Gestión de archivos estáticos y plantilla del proyecto."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Gestión de despligue de proyectos."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Estructura"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Workspace funciona como un marco de trabajo (Workspace) y cada componente que lo integra tiene definido un nombre que permite identificarlo, estos son:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "PreAside: Primer panel izquierdo, iconográfico de acceso general de acciones las cuales varian si se tiene o no un proyecto abierto"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Aside: Menu secundario que despliega funcionalidades adicionales asociadas a la opción seleccionada en el preaside."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Boards: Cada panel abierto en la pantalla principal es denominado board, la lista de aplicaciones es un board, el detalle de la aplicación o la pantalla de configuración tambien lo son."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Panels: Cada división de pantalla generada en el workspace"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Integración con Typescript"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Typescript"
                }), " es un lenguaje tipado y el chequeo de tipos es una tarea pesada. El Workspace hace uso del compilador de typescript para detectar en tiempo real los errores que pueden existir en el código y suministrar información al programador acerca de ellos en trés niveles distintos:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Módulo en desarrollo:"
                  }), " El módulo en el cual se está trabajando"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Dependencias:"
                  }), " Los módulos importados por el módulo en desarrollo."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Consumidores:"
                  }), " Los módulos que consumen el módulo sobre el cual estamos trabajando."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El programador puede acceder a un módulo/bundle y ver los errores existentes en el o en un consumidor o dependencia. Identificar de forma simple el archivo y acceder directamente a la línea donde debe realizar la corrección."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Debido a que los tiempos de análisis del compilador de typescript son extensos cuando hace el chequeo de tipos, BeyondJS implementa una estrategía hibrida que gestiona en simultáneo el chequeo de tipos por medio del compilador y la actualización de archivos con HMR por medio del transpilador, esto ofrece la posibilidad de ver los cambios al momento y recibir la información de errores en paralelo. Es posible que la primera vez que se realice la validacion de tipos de un proyecto, este proceso tome un tiempo extendido el cual luego se minimiza con la gestión de cache que integra BeyondJS"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Editor y Navegador incluidos"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Workspace cuenta con un editor de código integrado que puede resultar sumamente útil para acceder a los archivos de forma rápida y corregir errores detectados, trabajar con estilos o con los bridges. Asimismo, tambien cuenta con un Board que permite navegar los proyectos."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Despliegue de proyectos"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El Workspace genera el código necesario y optimizado para desplegar los proyectos. Puedes leer en detalle el funcionamiento en la sección de ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/deployment",
                  children: "Despliegue de proyectos."
                })]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3199679849,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WidgetsRendering = exports.WidgetsPage = exports.WidgetsObject = exports.WidgetsLayout = exports.WidgetsControllers = exports.Widgets = exports.Universal = exports.TutorialStart = exports.TutorialRouting = exports.TutorialFirstModule = exports.TutorialBackend = exports.StylesThemes = exports.StylesTemplate = exports.StylesModules = exports.StylesImports = exports.Styles = exports.Steps = exports.Routing = exports.QuickStart = exports.PackagesTypes = exports.PackagesPublish = exports.PackagesJson = exports.PackagesDistributions = exports.PackagesDependencies = exports.PackagesCreate = exports.PackagesBeyondjs = exports.ModulesProcessors = exports.ModulesIntroduction = exports.ModulesCreation = exports.ModulesConfig = exports.ModulesBundles = exports.Modular = exports.LANGUAGE = exports.Intro = exports.DevServer = exports.Cli = exports.BackendSsrserver = exports.BackendIntro = exports.BackendDebug = exports.BackendBridges = exports.BackendBee = exports.AddRenderingEngine = void 0;
          var _intro = require("./mdx/starting/intro.mdx");
          var _quickStart = require("./mdx/starting/quick-start.mdx");
          var _cli = require("./mdx/starting/cli.mdx");
          var _bareSpecifiers = require("./mdx/foundations/bare-specifiers.mdx");
          var _modular = require("./mdx/foundations/modular.mdx");
          var _universal = require("./mdx/foundations/universal.mdx");
          var _devServer = require("./mdx/foundations/dev-server.mdx");
          var _start = require("./mdx/tutorial/start.mdx");
          var _backend = require("./mdx/tutorial/backend.mdx");
          var _routing = require("./mdx/tutorial/routing.mdx");
          var _firstModule = require("./mdx/tutorial/first-module.mdx");
          var _steps = require("./mdx/steps.mdx");
          var _creation = require("./mdx/packages/creation.mdx");
          var _types = require("./mdx/packages/types.mdx");
          var _distributions = require("./mdx/packages/distributions.mdx");
          var _json = require("./mdx/packages/json.mdx");
          var _publish = require("./mdx/packages/publish.mdx");
          var _beyond = require("./mdx/packages/beyond.mdx");
          var _dependencies = require("./mdx/packages/dependencies.mdx");
          var _introduction = require("./mdx/modules/introduction.mdx");
          var _bundles = require("./mdx/modules/bundles.mdx");
          var _creation2 = require("./mdx/modules/creation.mdx");
          var _processors = require("./mdx/modules/processors.mdx");
          var _intro2 = require("./mdx/backend/intro.mdx");
          var _bridges = require("./mdx/backend/bridges.mdx");
          var _bee = require("./mdx/backend/bee.mdx");
          var _ssrServer = require("./mdx/backend/ssr-server.mdx");
          var _debug = require("./mdx/backend/debug.mdx");
          var _index = require("./mdx/frontend/widgets/index.mdx");
          var _controllers = require("./mdx/frontend/widgets/controllers.mdx");
          var _layout = require("./mdx/frontend/widgets/layout.mdx");
          var _page = require("./mdx/frontend/widgets/page.mdx");
          var _object = require("./mdx/frontend/widgets/object.mdx");
          var _rendering = require("./mdx/frontend/widgets/rendering.mdx");
          var _addRenderingEngine = require("./mdx/frontend/widgets/add-rendering-engine.mdx");
          var _routing2 = require("./mdx/frontend/routing/routing.mdx");
          var _index2 = require("./mdx/frontend/styles/index.mdx");
          var _modules = require("./mdx/frontend/styles/modules.mdx");
          var _themes = require("./mdx/frontend/styles/themes.mdx");
          var _imports = require("./mdx/frontend/styles/imports.mdx");
          /*bundle */ // import { default as Backend1 } from "./mdx/backend.mdx";

          // Tutorial

          //packages

          //modules

          //backend

          // widgets

          // export /*bundle */ const Bee = Bee1;
          // Get strating
          const LANGUAGE = 'ES';
          exports.LANGUAGE = LANGUAGE;
          /*bundle */
          const Intro = _intro.default;
          exports.Intro = Intro;
          /*bundle */
          const Cli = _cli.default;
          exports.Cli = Cli;
          /*bundle */
          const QuickStart = _quickStart.default;
          // Tutorial
          exports.QuickStart = QuickStart;
          /*bundle */
          const TutorialStart = _start.default;
          exports.TutorialStart = TutorialStart;
          /*bundle*/
          const TutorialBackend = _backend.default;
          exports.TutorialBackend = TutorialBackend;
          /*bundle*/
          const TutorialRouting = _routing.default;
          exports.TutorialRouting = TutorialRouting;
          /*bundle */
          const TutorialFirstModule = _firstModule.default;
          // export /*bundle */ const Deployment = Deployment1;
          // basics
          exports.TutorialFirstModule = TutorialFirstModule;
          /*bundle */
          const PackagesCreate = _creation.default;
          exports.PackagesCreate = PackagesCreate;
          /*bundle */
          const PackagesTypes = _types.default;
          exports.PackagesTypes = PackagesTypes;
          /*bundle*/
          const PackagesDistributions = _distributions.default;
          exports.PackagesDistributions = PackagesDistributions;
          /*bundle */
          const PackagesJson = _json.default;
          exports.PackagesJson = PackagesJson;
          /*bundle */
          const PackagesPublish = _publish.default;
          exports.PackagesPublish = PackagesPublish;
          /*bundle */
          const PackagesBeyondjs = _beyond.default;
          exports.PackagesBeyondjs = PackagesBeyondjs;
          /*bundle */
          const PackagesDependencies = _dependencies.default;
          // modules
          exports.PackagesDependencies = PackagesDependencies;
          /*bundle */
          const ModulesIntroduction = _introduction.default;
          exports.ModulesIntroduction = ModulesIntroduction;
          /*bundle */
          const ModulesCreation = _creation2.default;
          exports.ModulesCreation = ModulesCreation;
          /*bundle */
          const ModulesConfig = _creation2.default;
          exports.ModulesConfig = ModulesConfig;
          /*bundle */
          const ModulesBundles = _bundles.default;
          exports.ModulesBundles = ModulesBundles;
          /*bundle */
          const ModulesProcessors = _processors.default;
          // backend
          exports.ModulesProcessors = ModulesProcessors;
          /*bundle */
          const BackendIntro = _intro2.default;
          exports.BackendIntro = BackendIntro;
          /*bundle */
          const BackendBridges = _bridges.default;
          exports.BackendBridges = BackendBridges;
          /*bundle */
          const BackendDebug = _debug.default;
          exports.BackendDebug = BackendDebug;
          /*bundle */
          const BackendBee = _bee.default;
          exports.BackendBee = BackendBee;
          /*bundle */
          const BackendSsrserver = _ssrServer.default;
          // widgets
          exports.BackendSsrserver = BackendSsrserver;
          /*bundle*/
          const Widgets = _index.default;
          exports.Widgets = Widgets;
          /*bundle*/
          const WidgetsControllers = _controllers.default;
          exports.WidgetsControllers = WidgetsControllers;
          /*bundle*/
          const WidgetsObject = _object.default;
          exports.WidgetsObject = WidgetsObject;
          /*bundle*/
          const WidgetsLayout = _layout.default;
          exports.WidgetsLayout = WidgetsLayout;
          /*bundle*/
          const WidgetsPage = _page.default;
          exports.WidgetsPage = WidgetsPage;
          /*bundle*/
          const WidgetsRendering = _rendering.default;
          exports.WidgetsRendering = WidgetsRendering;
          /*bundle*/
          const Routing = _routing2.default;
          exports.Routing = Routing;
          /*bundle*/
          const AddRenderingEngine = _addRenderingEngine.default;
          //styles
          exports.AddRenderingEngine = AddRenderingEngine;
          /*bundle */
          const Styles = _index2.default;
          exports.Styles = Styles;
          /*bundle */
          const StylesModules = _modules.default;
          exports.StylesModules = StylesModules;
          /*bundle */
          const StylesThemes = _themes.default;
          exports.StylesThemes = StylesThemes;
          /*bundle */
          const StylesImports = _imports.default;
          exports.StylesImports = StylesImports;
          /*bundle */
          const StylesTemplate = _index2.default;
          // Foundations
          exports.StylesTemplate = StylesTemplate;
          const /*bundle*/BareSpecifiers = _bareSpecifiers.default;
          /*bundle*/
          const Modular = _modular.default;
          exports.Modular = Modular;
          /*bundle*/
          const Universal = _universal.default;
          exports.Universal = Universal;
          /*bundle*/
          const DevServer = _devServer.default;
          exports.DevServer = DevServer;
          /*bundle*/
          const Steps = _steps.default;
          exports.Steps = Steps;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "LANGUAGE",
        "name": "LANGUAGE"
      }, {
        "im": "./index",
        "from": "Intro",
        "name": "Intro"
      }, {
        "im": "./index",
        "from": "Cli",
        "name": "Cli"
      }, {
        "im": "./index",
        "from": "QuickStart",
        "name": "QuickStart"
      }, {
        "im": "./index",
        "from": "TutorialStart",
        "name": "TutorialStart"
      }, {
        "im": "./index",
        "from": "TutorialBackend",
        "name": "TutorialBackend"
      }, {
        "im": "./index",
        "from": "TutorialRouting",
        "name": "TutorialRouting"
      }, {
        "im": "./index",
        "from": "TutorialFirstModule",
        "name": "TutorialFirstModule"
      }, {
        "im": "./index",
        "from": "PackagesCreate",
        "name": "PackagesCreate"
      }, {
        "im": "./index",
        "from": "PackagesTypes",
        "name": "PackagesTypes"
      }, {
        "im": "./index",
        "from": "PackagesDistributions",
        "name": "PackagesDistributions"
      }, {
        "im": "./index",
        "from": "PackagesJson",
        "name": "PackagesJson"
      }, {
        "im": "./index",
        "from": "PackagesPublish",
        "name": "PackagesPublish"
      }, {
        "im": "./index",
        "from": "PackagesBeyondjs",
        "name": "PackagesBeyondjs"
      }, {
        "im": "./index",
        "from": "PackagesDependencies",
        "name": "PackagesDependencies"
      }, {
        "im": "./index",
        "from": "ModulesIntroduction",
        "name": "ModulesIntroduction"
      }, {
        "im": "./index",
        "from": "ModulesCreation",
        "name": "ModulesCreation"
      }, {
        "im": "./index",
        "from": "ModulesConfig",
        "name": "ModulesConfig"
      }, {
        "im": "./index",
        "from": "ModulesBundles",
        "name": "ModulesBundles"
      }, {
        "im": "./index",
        "from": "ModulesProcessors",
        "name": "ModulesProcessors"
      }, {
        "im": "./index",
        "from": "BackendIntro",
        "name": "BackendIntro"
      }, {
        "im": "./index",
        "from": "BackendBridges",
        "name": "BackendBridges"
      }, {
        "im": "./index",
        "from": "BackendDebug",
        "name": "BackendDebug"
      }, {
        "im": "./index",
        "from": "BackendBee",
        "name": "BackendBee"
      }, {
        "im": "./index",
        "from": "BackendSsrserver",
        "name": "BackendSsrserver"
      }, {
        "im": "./index",
        "from": "Widgets",
        "name": "Widgets"
      }, {
        "im": "./index",
        "from": "WidgetsControllers",
        "name": "WidgetsControllers"
      }, {
        "im": "./index",
        "from": "WidgetsObject",
        "name": "WidgetsObject"
      }, {
        "im": "./index",
        "from": "WidgetsLayout",
        "name": "WidgetsLayout"
      }, {
        "im": "./index",
        "from": "WidgetsPage",
        "name": "WidgetsPage"
      }, {
        "im": "./index",
        "from": "WidgetsRendering",
        "name": "WidgetsRendering"
      }, {
        "im": "./index",
        "from": "Routing",
        "name": "Routing"
      }, {
        "im": "./index",
        "from": "AddRenderingEngine",
        "name": "AddRenderingEngine"
      }, {
        "im": "./index",
        "from": "Styles",
        "name": "Styles"
      }, {
        "im": "./index",
        "from": "StylesModules",
        "name": "StylesModules"
      }, {
        "im": "./index",
        "from": "StylesThemes",
        "name": "StylesThemes"
      }, {
        "im": "./index",
        "from": "StylesImports",
        "name": "StylesImports"
      }, {
        "im": "./index",
        "from": "StylesTemplate",
        "name": "StylesTemplate"
      }, {
        "im": "./index",
        "from": "Modular",
        "name": "Modular"
      }, {
        "im": "./index",
        "from": "Universal",
        "name": "Universal"
      }, {
        "im": "./index",
        "from": "DevServer",
        "name": "DevServer"
      }, {
        "im": "./index",
        "from": "Steps",
        "name": "Steps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'LANGUAGE') && _export("LANGUAGE", LANGUAGE = require ? require('./index').LANGUAGE : value);
        (require || prop === 'Intro') && _export("Intro", Intro = require ? require('./index').Intro : value);
        (require || prop === 'Cli') && _export("Cli", Cli = require ? require('./index').Cli : value);
        (require || prop === 'QuickStart') && _export("QuickStart", QuickStart = require ? require('./index').QuickStart : value);
        (require || prop === 'TutorialStart') && _export("TutorialStart", TutorialStart = require ? require('./index').TutorialStart : value);
        (require || prop === 'TutorialBackend') && _export("TutorialBackend", TutorialBackend = require ? require('./index').TutorialBackend : value);
        (require || prop === 'TutorialRouting') && _export("TutorialRouting", TutorialRouting = require ? require('./index').TutorialRouting : value);
        (require || prop === 'TutorialFirstModule') && _export("TutorialFirstModule", TutorialFirstModule = require ? require('./index').TutorialFirstModule : value);
        (require || prop === 'PackagesCreate') && _export("PackagesCreate", PackagesCreate = require ? require('./index').PackagesCreate : value);
        (require || prop === 'PackagesTypes') && _export("PackagesTypes", PackagesTypes = require ? require('./index').PackagesTypes : value);
        (require || prop === 'PackagesDistributions') && _export("PackagesDistributions", PackagesDistributions = require ? require('./index').PackagesDistributions : value);
        (require || prop === 'PackagesJson') && _export("PackagesJson", PackagesJson = require ? require('./index').PackagesJson : value);
        (require || prop === 'PackagesPublish') && _export("PackagesPublish", PackagesPublish = require ? require('./index').PackagesPublish : value);
        (require || prop === 'PackagesBeyondjs') && _export("PackagesBeyondjs", PackagesBeyondjs = require ? require('./index').PackagesBeyondjs : value);
        (require || prop === 'PackagesDependencies') && _export("PackagesDependencies", PackagesDependencies = require ? require('./index').PackagesDependencies : value);
        (require || prop === 'ModulesIntroduction') && _export("ModulesIntroduction", ModulesIntroduction = require ? require('./index').ModulesIntroduction : value);
        (require || prop === 'ModulesCreation') && _export("ModulesCreation", ModulesCreation = require ? require('./index').ModulesCreation : value);
        (require || prop === 'ModulesConfig') && _export("ModulesConfig", ModulesConfig = require ? require('./index').ModulesConfig : value);
        (require || prop === 'ModulesBundles') && _export("ModulesBundles", ModulesBundles = require ? require('./index').ModulesBundles : value);
        (require || prop === 'ModulesProcessors') && _export("ModulesProcessors", ModulesProcessors = require ? require('./index').ModulesProcessors : value);
        (require || prop === 'BackendIntro') && _export("BackendIntro", BackendIntro = require ? require('./index').BackendIntro : value);
        (require || prop === 'BackendBridges') && _export("BackendBridges", BackendBridges = require ? require('./index').BackendBridges : value);
        (require || prop === 'BackendDebug') && _export("BackendDebug", BackendDebug = require ? require('./index').BackendDebug : value);
        (require || prop === 'BackendBee') && _export("BackendBee", BackendBee = require ? require('./index').BackendBee : value);
        (require || prop === 'BackendSsrserver') && _export("BackendSsrserver", BackendSsrserver = require ? require('./index').BackendSsrserver : value);
        (require || prop === 'Widgets') && _export("Widgets", Widgets = require ? require('./index').Widgets : value);
        (require || prop === 'WidgetsControllers') && _export("WidgetsControllers", WidgetsControllers = require ? require('./index').WidgetsControllers : value);
        (require || prop === 'WidgetsObject') && _export("WidgetsObject", WidgetsObject = require ? require('./index').WidgetsObject : value);
        (require || prop === 'WidgetsLayout') && _export("WidgetsLayout", WidgetsLayout = require ? require('./index').WidgetsLayout : value);
        (require || prop === 'WidgetsPage') && _export("WidgetsPage", WidgetsPage = require ? require('./index').WidgetsPage : value);
        (require || prop === 'WidgetsRendering') && _export("WidgetsRendering", WidgetsRendering = require ? require('./index').WidgetsRendering : value);
        (require || prop === 'Routing') && _export("Routing", Routing = require ? require('./index').Routing : value);
        (require || prop === 'AddRenderingEngine') && _export("AddRenderingEngine", AddRenderingEngine = require ? require('./index').AddRenderingEngine : value);
        (require || prop === 'Styles') && _export("Styles", Styles = require ? require('./index').Styles : value);
        (require || prop === 'StylesModules') && _export("StylesModules", StylesModules = require ? require('./index').StylesModules : value);
        (require || prop === 'StylesThemes') && _export("StylesThemes", StylesThemes = require ? require('./index').StylesThemes : value);
        (require || prop === 'StylesImports') && _export("StylesImports", StylesImports = require ? require('./index').StylesImports : value);
        (require || prop === 'StylesTemplate') && _export("StylesTemplate", StylesTemplate = require ? require('./index').StylesTemplate : value);
        (require || prop === 'Modular') && _export("Modular", Modular = require ? require('./index').Modular : value);
        (require || prop === 'Universal') && _export("Universal", Universal = require ? require('./index').Universal : value);
        (require || prop === 'DevServer') && _export("DevServer", DevServer = require ? require('./index').DevServer : value);
        (require || prop === 'Steps') && _export("Steps", Steps = require ? require('./index').Steps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQUN2RjtVQUN4QztVQUFXLE1BQU13RixLQUFLLEdBQUdDLGNBQU07VUFBQ3pGIiwibmFtZXMiOlsiT2JqZWN0IiwidmFsdWUiLCJleHBvcnRzIiwiY2hpbGRyZW4iLCJwcmV0aXRsZSIsInRpdGxlIiwid3JhcHBlciIsImNvbnRlbnQiLCJMQU5HVUFHRSIsIkludHJvIiwiSW50cm8xIiwiQ2xpIiwiQ0xJMSIsIlF1aWNrU3RhcnQiLCJRdWlja1N0YXJ0MSIsIlR1dG9yaWFsU3RhcnQiLCJUdXRvcmlhbDEiLCJUdXRvcmlhbEJhY2tlbmQiLCJUdXRvcmlhbDIiLCJUdXRvcmlhbFJvdXRpbmciLCJUdXRvcmlhbDQiLCJUdXRvcmlhbEZpcnN0TW9kdWxlIiwiVHV0b3JpYWw1IiwiUGFja2FnZXNDcmVhdGUiLCJQYWNrYWdlc0NyZWF0ZTEiLCJQYWNrYWdlc1R5cGVzIiwiUEFja2FnZXNUeXBlczEiLCJQYWNrYWdlc0Rpc3RyaWJ1dGlvbnMiLCJEaXN0cmlidXRpb25zMSIsIlBhY2thZ2VzSnNvbiIsIlBhY2thZ2VzSnNvbjEiLCJQYWNrYWdlc1B1Ymxpc2giLCJQYWNrYWdlc1B1Ymxpc2gxIiwiUGFja2FnZXNCZXlvbmRqcyIsIlBhY2thZ2VzQmV5b25kanMxIiwiUGFja2FnZXNEZXBlbmRlbmNpZXMiLCJQYWNrYWdlc0RlcGVuZGVuY2llczEiLCJNb2R1bGVzSW50cm9kdWN0aW9uIiwiTW9kdWxlc0ludHJvZHVjdGlvbjEiLCJNb2R1bGVzQ3JlYXRpb24iLCJNb2R1bGVzQ3JlYXRpb24xIiwiTW9kdWxlc0NvbmZpZyIsIk1vZHVsZXNCdW5kbGVzIiwiTW9kdWxlc0J1bmRsZXMxIiwiTW9kdWxlc1Byb2Nlc3NvcnMiLCJNb2R1bGVzUHJvY2Vzc29yczEiLCJCYWNrZW5kSW50cm8iLCJCYWNrZW5kSW50cm8xIiwiQmFja2VuZEJyaWRnZXMiLCJCYWNrZW5kQnJpZGdlczEiLCJCYWNrZW5kRGVidWciLCJCYWNrZW5kRGVidWcxIiwiQmFja2VuZEJlZSIsIkJhY2tlbmRCZWUxIiwiQmFja2VuZFNzcnNlcnZlciIsIkJhY2tlbmRTc3JzZXJ2ZXIxIiwiV2lkZ2V0cyIsIldpZGdldHMxIiwiV2lkZ2V0c0NvbnRyb2xsZXJzIiwiV2lkZ2V0c0NvbnRyb2xsZXJzMSIsIldpZGdldHNPYmplY3QiLCJXaWRnZXRzT2JqZWN0MSIsIldpZGdldHNMYXlvdXQiLCJXaWRnZXRzTGF5b3V0MSIsIldpZGdldHNQYWdlIiwiV2lkZ2V0c1BhZ2UxIiwiV2lkZ2V0c1JlbmRlcmluZyIsIldpZGdldHNSZW5kZXJpbmcxIiwiUm91dGluZyIsIlJvdXRpbmcxIiwiQWRkUmVuZGVyaW5nRW5naW5lIiwiQWRkUmVuZGVyaW5nRW5naW5lMSIsIlN0eWxlcyIsIlN0eWxlczEiLCJTdHlsZXNNb2R1bGVzIiwiU3R5bGVzTW9kdWxlczEiLCJTdHlsZXNUaGVtZXMiLCJTdHlsZXNUaGVtZXMxIiwiU3R5bGVzSW1wb3J0cyIsIlN0eWxlc0ltcG9ydHMxIiwiU3R5bGVzVGVtcGxhdGUiLCJUZW1wbGF0ZXMxIiwiQmFyZVNwZWNpZmllcnMiLCJCYXJlU3BlY2lmaWVyMSIsIk1vZHVsYXIiLCJNb2R1bGFyMSIsIlVuaXZlcnNhbCIsIlVuaXZlcnNhbDEiLCJEZXZTZXJ2ZXIiLCJEZXZTZXJ2ZXIxIiwiU3RlcHMiLCJTdGVwczEiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIm1keC9iYWNrZW5kL21keFxcYmFja2VuZFxcYmVlLm1keCIsIm1keC9iYWNrZW5kL21keFxcYmFja2VuZFxcYnJpZGdlcy5tZHgiLCJtZHgvYmFja2VuZC9kZWJ1Zy5tZHgiLCJtZHgvYmFja2VuZC9tZHhcXGJhY2tlbmRcXGludHJvLm1keCIsIm1keC9iYWNrZW5kL3Nzci1zZXJ2ZXIubWR4IiwibWR4L2NsaS9tZHhcXGNsaVxcbW9kdWxlLm1keCIsIm1keC9jbGkvbWR4XFxjbGlcXHBhY2thZ2UubWR4IiwibWR4L2ZvdW5kYXRpb25zL21keFxcZm91bmRhdGlvbnNcXGJhcmUtc3BlY2lmaWVycy5tZHgiLCJtZHgvZm91bmRhdGlvbnMvbWR4XFxmb3VuZGF0aW9uc1xcZGV2LXNlcnZlci5tZHgiLCJtZHgvZm91bmRhdGlvbnMvbWR4XFxmb3VuZGF0aW9uc1xcZ2xvc2FyeS5tZHgiLCJtZHgvZm91bmRhdGlvbnMvbWR4XFxmb3VuZGF0aW9uc1xcaG1yLm1keCIsIm1keC9mb3VuZGF0aW9ucy9tZHhcXGZvdW5kYXRpb25zXFxtb2R1bGFyLm1keCIsIm1keC9mb3VuZGF0aW9ucy9tZHhcXGZvdW5kYXRpb25zXFx1bml2ZXJzYWwubWR4IiwibWR4L2Zyb250ZW5kL21keFxcZnJvbnRlbmRcXGktd2lkZ2V0LXN0b3JlLm1keCIsIm1keC9mcm9udGVuZC9yb3V0aW5nL21keFxcZnJvbnRlbmRcXHJvdXRpbmdcXHJvdXRpbmcubWR4IiwibWR4L2Zyb250ZW5kL3JvdXRpbmcvbWR4XFxmcm9udGVuZFxccm91dGluZ1xcdXJpLm1keCIsIm1keC9mcm9udGVuZC9tZHhcXGZyb250ZW5kXFxzdGF0ZS1tYW5hZ2VtZW50Lm1keCIsIm1keC9mcm9udGVuZC9zdHlsZXMvbWR4XFxmcm9udGVuZFxcc3R5bGVzXFxpbXBvcnRzLm1keCIsIm1keC9mcm9udGVuZC9zdHlsZXMvbWR4XFxmcm9udGVuZFxcc3R5bGVzXFxpbmRleC5tZHgiLCJtZHgvZnJvbnRlbmQvc3R5bGVzL21keFxcZnJvbnRlbmRcXHN0eWxlc1xcbW9kdWxlcy5tZHgiLCJtZHgvZnJvbnRlbmQvc3R5bGVzL21keFxcZnJvbnRlbmRcXHN0eWxlc1xcdGhlbWVzLm1keCIsIm1keC9mcm9udGVuZC93aWRnZXRzL2FkZC1yZW5kZXJpbmctZW5naW5lLm1keCIsIm1keC9mcm9udGVuZC93aWRnZXRzL21keFxcZnJvbnRlbmRcXHdpZGdldHNcXGNvbnRyb2xsZXJzLm1keCIsIm1keC9mcm9udGVuZC93aWRnZXRzL21keFxcZnJvbnRlbmRcXHdpZGdldHNcXGluZGV4Lm1keCIsIm1keC9mcm9udGVuZC93aWRnZXRzL21keFxcZnJvbnRlbmRcXHdpZGdldHNcXGxheW91dC5tZHgiLCJtZHgvZnJvbnRlbmQvd2lkZ2V0cy9tZHhcXGZyb250ZW5kXFx3aWRnZXRzXFxsaWJyYXJpZXMubWR4IiwibWR4L2Zyb250ZW5kL3dpZGdldHMvbWR4XFxmcm9udGVuZFxcd2lkZ2V0c1xcb2JqZWN0Lm1keCIsIm1keC9mcm9udGVuZC93aWRnZXRzL21keFxcZnJvbnRlbmRcXHdpZGdldHNcXHBhZ2UubWR4IiwibWR4L2Zyb250ZW5kL3dpZGdldHMvbWR4XFxmcm9udGVuZFxcd2lkZ2V0c1xccmVuZGVyaW5nLm1keCIsIm1keC9mcm9udGVuZC93aWRnZXRzL21keFxcZnJvbnRlbmRcXHdpZGdldHNcXHJvdXRpbmcubWR4IiwibWR4L2Zyb250ZW5kL3dpZGdldHMvbWR4XFxmcm9udGVuZFxcd2lkZ2V0c1xcdG8tY29tcGxldGUubWR4IiwibWR4L21vZHVsZXMvbWR4XFxtb2R1bGVzXFxidW5kbGVzLm1keCIsIm1keC9tb2R1bGVzL21keFxcbW9kdWxlc1xcY29uZmlnLm1keCIsIm1keC9tb2R1bGVzL21keFxcbW9kdWxlc1xcY3JlYXRpb24ubWR4IiwibWR4L21vZHVsZXMvbWR4XFxtb2R1bGVzXFxpbnRyb2R1Y3Rpb24ubWR4IiwibWR4L21vZHVsZXMvanNvbi5tZHgiLCJtZHgvbW9kdWxlcy9tZHhcXG1vZHVsZXNcXHByb2Nlc3NvcnMubWR4IiwibWR4L3BhY2thZ2VzL21keFxccGFja2FnZXNcXGJleW9uZC5tZHgiLCJtZHgvcGFja2FnZXMvbWR4XFxwYWNrYWdlc1xcY3JlYXRpb24ubWR4IiwibWR4L3BhY2thZ2VzL21keFxccGFja2FnZXNcXGRlcGVuZGVuY2llcy5tZHgiLCJtZHgvcGFja2FnZXMvbWR4XFxwYWNrYWdlc1xcZGlzdHJpYnV0aW9ucy5tZHgiLCJtZHgvcGFja2FnZXMvbWR4XFxwYWNrYWdlc1xcaW1wb3J0Lm1keCIsIm1keC9wYWNrYWdlcy9tZHhcXHBhY2thZ2VzXFxqc29uLm1keCIsIm1keC9wYWNrYWdlcy9tZHhcXHBhY2thZ2VzXFxwdWJsaXNoLm1keCIsIm1keC9wYWNrYWdlcy9tZHhcXHBhY2thZ2VzXFx0eXBlcy5tZHgiLCJtZHgvc3RhcnRpbmcvbWR4XFxzdGFydGluZ1xcY2xpLm1keCIsIm1keC9zdGFydGluZy9tZHhcXHN0YXJ0aW5nXFxpbnRyby5tZHgiLCJtZHgvc3RhcnRpbmcvbWR4XFxzdGFydGluZ1xccXVpY2stc3RhcnQubWR4IiwibWR4L21keFxcc3RlcHMubWR4IiwibWR4L3R1dG9yaWFsL21keFxcdHV0b3JpYWxcXGJhY2tlbmQubWR4IiwibWR4L3R1dG9yaWFsL21keFxcdHV0b3JpYWxcXGZpcnN0LW1vZHVsZS5tZHgiLCJtZHgvdHV0b3JpYWwvbWR4XFx0dXRvcmlhbFxccm91dGluZy5tZHgiLCJtZHgvdHV0b3JpYWwvbWR4XFx0dXRvcmlhbFxcc3RhcnQubWR4IiwibWR4L3dvcmtzcGFjZS9tZHhcXHdvcmtzcGFjZVxcd29ya3NwYWNlLm1keCIsImluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19
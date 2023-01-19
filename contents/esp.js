System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0/jsx-runtime", "@beyond/docs@1/components/html", "@beyond/docs@1/code"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Intro, Cli, QuickStart, TutorialStart, TutorialBackend, TutorialBridge, TutorialRouting, TutorialFirstModule, PackagesCreate, PackagesTypes, PackagesDistributions, PackagesJson, PackagesPublish, BareSpecifiers, Modular, Universal, DevServer, Steps, __beyond_pkg, hmr;
  _export({
    Intro: void 0,
    Cli: void 0,
    QuickStart: void 0,
    TutorialStart: void 0,
    TutorialBackend: void 0,
    TutorialBridge: void 0,
    TutorialRouting: void 0,
    TutorialFirstModule: void 0,
    PackagesCreate: void 0,
    PackagesTypes: void 0,
    PackagesDistributions: void 0,
    PackagesJson: void 0,
    PackagesPublish: void 0,
    BareSpecifiers: void 0,
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
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
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
        hash: 2797010715,
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
              strong: "strong",
              ol: "ol",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "BEE"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.Subtitle, {
                  children: "Distribuciones"
                }), "\r\nLas distribuciones representan el entorno de ejecución de un proyecto. Es necesario configurar una distribución por cada\r\nentorno en el que se desee trabajar. BeyondJS crea un Entorno de Ejecución de Beyond (BEE) por cada distribución creada.\r\nMás adelante se explicará que es exactamente un BEE y las ventajas que ofrece."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Node"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["BeyondJS permite realizar proyectos escalables y eficientes con ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://nodejs.org/",
                  children: "Node.js"
                }), " construidos directamente con typescript y buscando mejorar la experiencia de desarrollo, por medio de la integración de HMR."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para trabajar con node, es necesario crear una distribución de tipo node. A partir de allí, BeyondJS se encargará de levantar el entorno de ejecución (BEE) y dejar disponible todos los modulos del proyecto que esten configurados para las plataformas que manejan node."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Distribución"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La configuración de modulos node en BeyondJS se hace por medio de las distribuciones. El desarrollador configura una distribución\r\nComo se explica en otras partes de esta documentación, un módulo en BeyondJS es un contenedor de bundles, donde puede existir uno o varios bundles. A su vez, cada uno de estos bundles, contiene un conjunto de modulos internos. Cuando el proyecto BeyondJS hace uso de los BEE(Beyond Execution Environment) sobre lo cual se explicará más adelante, para optimizar los tiempos de desarrollo y ofrecer mejores resultados en la experiencia."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.Subtitle, {
                  children: "BEE (Beyond Execution Environment)"
                }), "\r\nLos bee son procesos gestionados por BeyondJS. Se comportan como un servicio node, con la diferencia de que son gestionados\r\npor el servicio principal de Beyond, el cual analiza, revisa y compila los cambios en tiempo real para dejar disponible en\r\nmemoria una nueva versión de los bundles con los cambios de código aplicados por medio de HMR, brindando la oportunidad de\r\ntemer acceso a las funcionalidades de código actualizadas, sin necesidad de reiniciar el proceso node."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La actualización en tiempo real en el proceso Node ofrece ventajas en tiempo de ejecución pues evita realizar toda la carga a nivel de tiempo recursos que implica detener el proceso completo y volver a levantarlo, esto puede aplicar para valores en memoria o conexiones a bases de datos, por mencionar ejemplos. BeyondJS detecta los cambios en un archivo o ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/modules#internal-modules",
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

      /****************************************************
      INTERNAL MODULE: ./mdx/backend/development-server.mdx
      ****************************************************/

      ims.set('./mdx/backend/development-server.mdx', {
        hash: 3805958726,
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
              code: "code",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Servidor de desarrollo"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Cuando BeyondJS es ejecutado, levanta un servidor de desarrollo por cada distribución configurada en cada proyecto, pudiendo correrlos de forma simultánea.\r\nSi deseas aprender más sobre la configuración de distribuciones, puedes leerlo en ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/projects/distributions",
                  children: "La Sección de Distribuciones."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El dev server es un servidor http, cuya función principal es la de interfacear con el engine para procesar a demanda los bundles de los módulos. Recibe la petición, identifica el módulo solicitado y retorna el bundle empaquetado según su configuración."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El dev server es utilizado en desarrollo para trabajar de manera homogénea, a demanda (sólo ir procesando los bundles requeridos) y con HMR en las diferentes distribuciones: (nodejs, deno o el browser)."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La siguiente es la estructura de funcionamiento posible del entorno de desarrollo de BeyondJS."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El engine de BeyondJS cuenta con una cache optimizada que guarda el código empaquetado para brindar una respuesta instantánea y que se inválida si el código fuente del bundle es cambiado, generando de forma automática una nueva compilación del empaquetado."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Veamos el uso del Dev Server según la plataforma de ejecución."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Web, Android, iOS"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En plataformas web, android e ios el dev server no sólo sirve los bundles, sino que adicionalmente devuelve el index.html cuando la url requerida no encuentra un recurso (bundle o archivo estático)."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Deno"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Deno soporta HTTP ES imports de manera nativa y estable."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS genera los import maps para resolver los bundles del proyecto. De esta forma, cuando se requiera un bundle registrado en el proyecto, Deno lo cargará apuntando al dev server."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Puedes trabajar con BeyondJS y Deno para construir una aplicación completa, pero también para crear proyectos librería que contienen módulos que puedes consumir desde cualquier otra aplicación."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["BeyondJS soporta el concepto de bundles transversales como el \"start\". Los bundles start se programan en los módulos y su ejecución ocurre en el inicio de la aplicación.\r\nSi estás construyendo una aplicación completa en DENO, lo habitual sería que cargues el bundle \"start\" ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "+ info sobre bundle start y bundles transversales."
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "NodeJS"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El objetivo de BeyondJS es ofrecer un entorno de desarrollo typescript universal.\r\nA diferencia de Deno, que soporta imports HTTP de manera estable desde sus inicios, NodeJS lo implementa en versiones recientes y aún en fase experimental."
              }), "\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                to: "https://nodejs.org/api/esm.html#https-and-http-imports",
                children: "https://nodejs.org/api/esm.html#https-and-http-imports"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para brindar una experiencia homogénea, BeyondJS ofrece un entorno de ejecución (", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "BEE"
                }), ": Beyond Execution Environment)\r\nespecíficamente diseñado para ser usado en desarrollo (no en producción) desde NodeJS, encargado de permitir ejecutar una aplicación consumiendo los bundles desde el servidor HTTP y brindando soporte HMR.\r\nDe esta manera, puedes correr una aplicación en NodeJS procesando los bundles a demanda, reduciendo el tiempo requerido para el startup.\r\nDe no ser por los BEEs, deberías compilar la aplicación completa para que NodeJS pueda requerir de manera sincrónica por los bundles."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Dockers containers"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Gracias al diseño de consumo de los bundles por medio de HTTP, ejecutar una aplicación en un docker container es tan sencillo como en tu PC local.\r\nSólo debes configurar los puertos expuestos por el docker container para que pueda alcanzar las peticiones realizadas al dev server."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Electron"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Las aplicaciones Electron cuentan con dos entornos de ejecución. El browser para la vista de UI y una instancia de NodeJS que se comunican entre sí.\r\nCon BeyondJS puedes trabajar en el mismo proyecto ambos entornos."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los módulos que especifiquen plataforma “web” estarán disponibles para la vista, y los que especifiquen plataforma “node” lo estarán para ese entorno. Esto permite estructurar tu aplicación de manera ordenada.\r\nEl entorno NodeJS de una aplicación Electron debe correr a través de un BEE para consumir a demanda y con soporte HMR los bundles servidos por el dev server."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Configuración"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["BeyondJS evalúa el directorio en donde está siendo ejecutado para identificar el o los proyectos existentes, lo hace validando si existe un archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "beyond.json"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "beyond.json"
                }), " puede ser editado manualmente o a través del workspace que está disponible por defecto en ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://workspace.beyondjs.com/",
                  children: "https://workspace.beyondjs.com/"
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La estructura del ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "beyond.json"
                }), " es la siguiente:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
"applications": "projects.json",
  "bundles": {},
  "libraries": []
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Propiedades"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["applications ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/aoc",
                    children: "AOC:"
                  }), " Recibe un arreglo con la lista de proyectos o aplicaciones configuradas para que BeyondJS pueda leerlas y levantarlas. Este archivo, es gestionado por BeyondJS si se hace uso del workspace."]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "bundles object: Permite configurar la inclusión de bundles creados por el programador."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["libraries ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/aoc",
                    children: "AOC:"
                  }), " Arreglo de configuración de librerias BeyondJS a utilizar."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "¿Por qué Modular + Universal?"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Deno, NodeJS, Chrome, Edge, webview, están todos basados en la misma tecnología Javascript.\r\nEl mismo motor, pero no las mismas técnicas de programación."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El consumo de paquetes en NodeJS se basa en NPM y la carpeta node_modules, Deno directamente consume las dependencias como imports HTTP.\r\nLos browsers modernos también cuentan la capacidad de consumir ES modules, pero si programas para web, a diferencia de cuando programas para NodeJS o Deno, seguramente estarás utilizando algún empaquetador como webpack, parcel, rollup, esbuild, etc."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los empaquetadores consumen los paquetes publicados en NPM para generar un archivo final .js llamado bundle que incluye las dependencias."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "También puedes usar empaquetadores para programar en Deno o NodeJS, algo que se está volviendo popular debido al Isomorfismo."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Actualmente están disponibles los ES modules, algo reciente y que simplifica mucho el escenario. Tanto el browser, como NodeJS, como Deno pueden cargar módulos ES de manera nativa."
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

      /********************************************
      INTERNAL MODULE: ./mdx/dependencies/index.mdx
      ********************************************/

      ims.set('./mdx/dependencies/index.mdx', {
        hash: 3311296947,
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
              strong: "strong",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Dependencias BeyondJS"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS ofrece un listado de dependencias requeridas según el tipo de proyecto que se desee realizar."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "@beyond/kernel"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Es la libreria principal de BeyondJS, contiene módulos para cubrir las funcionalidades bases del Framework. Contiene los siguientes paquetes:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "bundle:"
                  }), " utilizado por cualquier ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/bundles",
                    children: "bundle"
                  }), ", funciones comunes para ellos."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "core:"
                  }), " gestiona el manejo importacion de paquetes de forma universal."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "routing:"
                  }), " Contiene todas las funcionalidades asociadas al historico y navegación del proyecto."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "styles:"
                  }), " Sirve para trabajar hojas de estilos de forma reactiva."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "texts:"
                  }), " requerido para el manejo de las funcionalidades de multilenguaje."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "@beyond/backend"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Libreria que gestiona la parte cliente y servidor de conexión real time y bridges. Requerida en los proyectos de tipo ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "node"
                }), " y ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "backend."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "@beyond/ssr"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Se encarga de proveer las apis para poder acceder a la información de renderizado de los widgets y disponibilizar el renderizado servidor."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Librerias para widgets"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para trabajar con widgets es necesario tener instalada la dependencia @beyond/widgets y adicionalmente, según el framework que se desee utilizar,BeyondJS ofrece las siguientes librerias:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "@beyond/react-widget"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "@beyond/vue-widget"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "@beyond/svelte-widget"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Todas las librerias mencionadas se pueden instalar por medio del comando npm i library donde \"library\" sería el nombre de la libreria a instalar."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/widgets",
                    children: "Widgets"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/modules/create",
                    children: "Crear un módulo"
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

      /*****************************************************
      INTERNAL MODULE: ./mdx/foundations/bare-specifiers.mdx
      *****************************************************/

      ims.set('./mdx/foundations/bare-specifiers.mdx', {
        hash: 3414296314,
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
        hash: 1025524163,
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
        hash: 2448875418,
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

      /****************************************************
      INTERNAL MODULE: ./mdx/frontend/controller-object.mdx
      ****************************************************/

      ims.set('./mdx/frontend/controller-object.mdx', {
        hash: 613298438,
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
              }, props.components),
              {
                Code,
                Link
              } = _components;
            if (!Code) _missingMdxReference("Code", true);
            if (!Link) _missingMdxReference("Link", true);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Objeto controller"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Definición del Controller"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Todo widget debe exponer una clase Controller definida. El objeto Controller es el responsable de la declaración y manejo del web-component que representa al widget y tiene una estructura como la siguiente:"
              }), "\n", (0, _jsxRuntime.jsx)(Code, {
                children: `
import {ReactWidgetController} from '@beyond-js/kernel/react-widget/ts';
import {Page} from './views/page';
export /*bundle*/
class Controller extends ReactWidgetController {
    get Widget() {
        return Page;
    }
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En el código anterior, la clase Controller extiende del objeto ReactWidgetController que es el controlador base disponibilizado para trabajar con React. BeyondJS tiene disponible un controlador para los distintos frameworks de vista. Los objetos son:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "ReactWidgetController, ReactPageWidgetController."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "SvelteWidgetController y SveltePageWidgetController."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "VueWidgetController y VuePageWidgetController."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Todos los controladores manejan la misma interfaz, pero estan a su vez enfocados en integrar y funcionar con el framework de vista que se esté utilizando."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Propiedades"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Widget"
                  }), " [getter] : Se define como un getter y debe retornar el componente de vista principal."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "uri"
                  }), " ", (0, _jsxRuntime.jsx)(Link, {
                    to: "/docs/api/uri",
                    children: "[URIObject]"
                  }), " [optional] : Objeto Uri con toda la información asociada a la url actual."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Métodos"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "createStore"
                    }), " [function] [optional]: Permite agregar lógica para el manejo del Estado del widget, debe retornar un objeto con la interfaz ", (0, _jsxRuntime.jsx)(Link, {
                      to: "/docs/api/IwidgetStore",
                      children: "IWidgetStore"
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "initialise"
                    }), " [void] [optional]: Permite agregar lógica a ejecutarse previo al montado del componente web en el DOM HTML."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "hide"
                    }), " [void] [optional]: Se ejecuta cuando ha sido renderizada y se oculta, esto sucede cuando se navega de una URLl a otra."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "show"
                    }), " [void] [optional]: Se ejecuta cada vez que se accede a la URL y la página se muestra en el navegador."]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(Link, {
                        to: "/docs/widgets/creation",
                        children: "Creación de widgets"
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(Link, {
                        to: "/docs/widgets/page",
                        children: "Widgets de tipo Page"
                      }), "\n"]
                    }), "\n"]
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

      /*****************************************
      INTERNAL MODULE: ./mdx/frontend/layout.mdx
      *****************************************/

      ims.set('./mdx/frontend/layout.mdx', {
        hash: 3631473194,
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
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Layouts"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los layouts representan la estructura general de un sitio web, que puede ser compartida entre varias páginas internas."
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
      INTERNAL MODULE: ./mdx/frontend/routing/routing.mdx
      **************************************************/

      ims.set('./mdx/frontend/routing/routing.mdx', {
        hash: 999406254,
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
                children: "Enrutamiento"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["BeyondJS tiene un manejo de rutas simple y potente al mismo tiempo. Para la mayoría de los casos, las URLs pueden ser definidas en la configuración de los ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/widgets/pages",
                  children: "widgets de tipo page"
                }), ", por medio de la propiedad URL, pero pueden existir casos donde se requiera alguna configuración más avanzada."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Nota: Esta sección cubre la documentación del objeto routing. Si deseas aprender acerca del manejo de parametros en la url de una página, puedes leer sobre ello ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/widgets/page",
                  children: "en la sección de Widgets de tipo Page."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Objeto “routing”"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El objeto routing gestiona el histórico del navegador y se encarga de manejar la compatibilidad para proyectos web y móviles. Ofrece una API que permite trabajar con el histórico y manipularlo."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Es disponibilizado por el kernel y se importa de la siguiente forma:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
    "@beyond-js/kernel/routing/ts";

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El objeto routing de BeyondJS existe para cubrir los siguientes escenarios:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Disponibilizar al programador una API simple para hacer tratamientos complejos de las URLs, como validaciones, redireccionamientos y manejo de variables."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Identificar el flujo e histórico de navegación del usuario adentro del aplicativo. El objeto history del navegador tiene un tratamiento muy limitado del mismo y sólo permite acceder al número de navegaciones existentes. BeyondJS por su parte, maneja un histórico detallado."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Debido a que las aplicaciones híbridas realizadas con JavaScript, resuelven el manejo de archivos por medio de un protocolo distinto a las aplicaciones accedidas desde un navegador, BeyondJS realiza un tratamiento del mismo para abstraer al programador de ello y garantizar el mismo comportamiento sin importar la plataforma en que se trabaje."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Navegación"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Con la finalidad de mantener compatibilidad con las APIs Conocidas, el objeto Routing tiene métodos homólogos a los métodos de la API del historial del navegador y básicamente cubren las mismas necesidades, pero a la vez, se encargan de unificar los comportamientos entre las plataformas y actualizar los elementos del histórico de BeyondJS."
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
                children: "Tiene la misma interfaz que el método pushState del objeto history de la API Web y adicional se encarga de actualizar el histórico de BeyondJS."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Sobreescritura de rutas"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "routing.redirect"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Generalmente, aunque puede haber más, existen dos contextos típicos en los cuales es necesario darle tratamiento a las URLs:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Cuando se requiere manejar URLs amigables."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Cuando es necesario validar permisos de acceso y, en caso de que quien intenta entrar a la URL no los tenga, se pretenda hacer una redirección a un flujo determinado."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para este tipo de casos, se puede definir una función asincrona ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "redirect"
                }), " como propiedad del objeto routing. Esta función recibe un objeto de tipo ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/api/uri",
                  children: `<URI>`
                }), " que tiene una propiedad pathname la cual representa la ruta actual."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La función redirect puede retornar undefined o un string. Si retorna undefined el flujo de navegación seguirá sin interrupción. Si se devuelve un string el mismo será tomado como la URL final y BeyondJS realizará la redirección a la URL retornada."
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
                }), " que puede definirse como una función asincrona y retorna el nombre del widget que se desee mostrar en caso de que la url solicitada no sea encontrada."]
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
        hash: 2979951754,
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
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Objeto URI"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Importación"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import {routing: {uri}} from "@beyond-js/kernel/routing/ts";`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El objeto uri provee una api equivalente a la del objetowindow.location, pero con funcionalidades agregadas que aseguran el comportamiento correcto en el entorno web y móvil."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Propiedades"
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
                    to: "/widgets#page",
                    children: "Widget Page."
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "routing.historyBeyondHistory:"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El objeto BeyondHistory maneja toda la información asociada a la navegación del usuario en la sesión actual."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Propiedades"
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

      /**********************************************************
      INTERNAL MODULE: ./mdx/frontend/styles/light-dark-theme.mdx
      **********************************************************/

      ims.set('./mdx/frontend/styles/light-dark-theme.mdx', {
        hash: 1064691217,
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
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Light & Dark theme"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS provee un mecanismo simple para brindar soporte al tema claro y oscuro, el cual consta de dos partes."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "El template de estilos."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Atributo data-beyond-mode."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Temas en el template."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El template de aplicación viene ya configurado para soportar el tema claro y oscuro y suministra un archivo de definición de propiedades personalizadas css para cada tema. Luego, en el archivo definition.scss se tiene el siguiente código:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "definition.scss"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
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
                children: "El código anterior deja disponibles las variables configuradas en los archivos dark y light para cada tema respectivo."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En la mayoría de los casos, si un widget requiere validar el tema que se está utilizando, puede bastar con usar el selector host-context para definirlo desde un archivo de estilos, como se muestra en el siguiente ejemplo:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
:host-context(html[data-beyond-mode]) {
    //styles here...
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Existen algunos casos, donde podría ser necesario que los widgets se enteren de forma dinámica del cambio de tema, para ello, se puede utilizar la api del objeto widgets"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
:host-context(html[data-beyond-mode]) {
    //styles here...
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La línea anterior agrega a todos los widgets existentes el atributo data-beyond-mode con el valor dark."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/template",
                    children: "Plantilla"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/dev-server",
                    children: "Servidor de desarrollo"
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

      /**********************************************************
      INTERNAL MODULE: ./mdx/frontend/styles/state-management.mdx
      **********************************************************/

      ims.set('./mdx/frontend/styles/state-management.mdx', {
        hash: 2024450888,
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
                  to: "/docs/widgets",
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
                  to: "/examples/sm/counter",
                  children: "Este ejemplo."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Asimismo, BeyondJS Define una estructura para el manejo de estado.\r\nEl objeto que maneja el estado, debe ser disponibilizado por medio del método createWidgetStore del controlador del widget.\r\nEste método debe retornar un objeto que implemente la interfaz ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/api/IWidgetStore",
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

      /************************************************************
      INTERNAL MODULE: ./mdx/frontend/styles/styles-importation.mdx
      ************************************************************/

      ims.set('./mdx/frontend/styles/styles-importation.mdx', {
        hash: 2138055557,
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
              }, props.components),
              {
                Subtitle
              } = _components;
            if (!Subtitle) _missingMdxReference("Subtitle", true);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Importación de archivos de estilo"
              }), "\n", (0, _jsxRuntime.jsx)(Subtitle, {
                children: "Node Modules"
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
              }), "\n", (0, _jsxRuntime.jsx)(Subtitle, {
                children: "Importación de estilos de un bundle"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La importación de módulos de estilo es considerada en BeyondJS como una importación no relativa, por tanto sigue las mismas reglas de importación de un archivo existente en una libreria de npm, pero la ruta de inclusión en este caso, sigue la estructura de nombres de los módulos realizados con el framework, que como hemos visto antes, puede estar compuesta por @scope/name, donde el scope es opcional."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para ejemplificarlo, imaginemos que se tiene un módulo llamado form, que incluye un bundle code, el cúal define componentes de un formulario y se requiere importar los estilos desde otro módulo. En el módulo, se creo un archivosass que define estilos para los labels, cuyo nombre es labels.scss. La línea de importación sería:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
    @import ~@scope/project-name/form/sass/scss/label.scss;
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
          function _missingMdxReference(id, component) {
            throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./mdx/frontend/styles/styles-module.mdx
      *******************************************************/

      ims.set('./mdx/frontend/styles/styles-module.mdx', {
        hash: 564784327,
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
                children: "Estilos en el módulo"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para agregar estilos en un módulo/bundle creado, debe agregarse el ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/processors",
                  children: "procesador"
                }), " SASS."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Si se usa el workspace para la creación de proyectos, el procesador sass es incluido por defecto en los bundles de tipo code y widget de cualquier tipo."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La configuración estandar de un procesador sass es la siguiente:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "module.json"
                })
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
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En la configuración anterior, se está definiendo que en el módulo existe una carpeta sass, con ubicación relativa al archivo module.json y que todos los archivos de esta carpeta deben ser tomados en cuenta como archivos de estilo."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El bundle contenedor del procesador se encarga de insertar los estilos en el DOM cuando el elemento es renderizado, de esta forma, no es requerido hacer imports con semántica de JavaScript de archivos externos en nuestro código."
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
      INTERNAL MODULE: ./mdx/frontend/styles/styles.mdx
      ************************************************/

      ims.set('./mdx/frontend/styles/styles.mdx', {
        hash: 1667737676,
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
              code: "code",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Estilos en el template"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El manejo de estilos en el sistema de Template de BeyondJS se realiza por medio de la configuración del procesador de estilos sass, esta configuración se realiza en dos niveles básicamente:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "template.json"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
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
                children: "El código anterior, es la configuración por defecto de la plantilla de los proyectos web. Básicamente se está configurando el procesador sass para las plantillas de aplicación y global. A continuación se describe la finalidad de ambas."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En esta página se asume que el template se encuentra en una carpeta con dicho nombre en la raiz del proyecto, si se hizo un cambio en la configuración por defecto deberá considerarse la ubicación configurada."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "template.application"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La propiedad application representa al archivo styles.css incluido en los proyectos con plataforma web. Está contemplada para agregar algún estilo general del documento y la definición de ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://developer.mozilla.org/en-US/docs/Web/CSS/--*",
                  children: "propiedades personalizadas"
                }), " para que esten disponibles en todos los widgets."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Las ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "propiedades personalizadas"
                }), " son los únicos valores de estilos que pueden ser compartidos entre los widgets ya que estos se incluyen por medio de Componentes Web con Shadow DOM."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La configuración por defecto de estilos para template.application, incluye todos los archivos scss que se encuentren en el directorio ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "./template/application"
                }), " adentro del proyecto."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Estos son:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "./variables.scss: contiene una lista de variables sass por defecto."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "./styles.scss: contiene estilos muy básicos para el body del documento"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "./custom-properties/dark.scss: provee un mixin que define las variables a utilizar en el estilo en modo oscuro."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "./custom-properties/light.scss: provee un mixin que define las variables a utilizar en el estilo en modo claro."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "./custom-properties/material-design.scss: incluye las propiedades css del sistema de colores de material design."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["./custom-properties/definition.scss: incluye la definición de las propiedades personalizadas css que integra el uso de los mixins definidos en los archivos ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "dark.scss"
                  }), " y ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "light.scss"
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El programador puede editar o agregar cualquier archivo adicional de estilos y este será integrado de forma automática debido a que en la configuración se tiene agregado un \"*\" que indica que todos los archivos dentro de la carpeta deben ser procesados."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "template.global"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La propiedad global representa al archivo global.css que a diferencia del styles.css, tiene como finalidad compartir estilos que el desarrollador considere globales y por tanto deban poder ser compartidos por todos los widgets. Para lograr esto, el archivo final es incluido dentro de los estilos de cada widget."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El igual que con la propiedad application, por defecto se incluyen todos los archivos que se encuentren adentro de la carpeta /global y de base sólo viene incluido un archivo", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "styles.scss"
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/estyles/modules",
                    children: "Estilo en los módulos"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/template",
                    children: "Template"
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

      /***********************************************************
      INTERNAL MODULE: ./mdx/frontend/template/template-system.mdx
      ***********************************************************/

      ims.set('./mdx/frontend/template/template-system.mdx', {
        hash: 1943806992,
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
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Sistemas de Plantillas"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Plantilla de un proyecto"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS brinda una arquitectura simple pero robusta para el manejo de plantillas en los proyectos, la cual cuenta con las siguientes caracteristicas:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Estilos:"
                  }), " Soporte integrado de preprocesadores LESS y SASS."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Propiedades CSS:"
                  }), " estructura básica de variables que permite trabajar con los componentes web eficientemente."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Estilo global:"
                  }), " Hoja de estilo global para el proyecto."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Sobreescritura:"
                  }), " Esto es una característica especial que permite redefinir estilos y textos de módulos existentes sin necesidad de tocar el código original."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Separación de código:"
                  }), " Manejo independiente de los archivos de estilos con proceso automatizado para la generación de archivos finales independientes y optimizados."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Light & Dark Theme"
                  }), " integrados."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Configuración"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La configuración de la plantilla, al igual que todos los elementos en BeyondJS, se maneja por medio de un archivo de configuración, cuyo nombre, por convención es template.json y se ubica en la carpeta template en la raiz del proyecto. Sin embargo, tanto el nombre como la ubicación son valores configurables en el ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/project/config",
                  children: "project.json"
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La plantilla puede ser manejada desde el ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://workspace.beyondjs.com/",
                  children: "Workspace"
                }), " y cuando se crea un proyecto ya viene configurada la estructura por defecto para su manejo."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A continuación se explican las propiedades de configuración"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Las propiedades application y global reciben los mismos parametros de configuración, pero tienen fines distintos."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "template.application"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La propiedad de configuración application representa al archivo de estilos generales del proyecto y tiene como foco principal ser el lugar en donde se definan las propiedades css personalizadas y cualquier estilo que se requiera aplicar al documento general, externo a los widgets."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Las ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "custom properties"
                }), " juegan un papel importante en el manejo de los widgets. Los componentes webs con Shadow DOM no se ven afectados por los estilos generales del sitio web en donde están incluidos. Sin embargo, las propiedades css si pueden ser accedidas y utilizadas."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El manejo de estilos puede verse en detalle en la sección de ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/styles/template",
                  children: "Estilos en la plantilla."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "template.global"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Tiene como finalidad suministrar al desarrollador la posibilidad de compartir código entre widgets. Los archivos agregados en la configuración de global, son compilados en un archivo de nombre global.css, que es incluido en el shadow dom de cada widget para que tengan acceso a los estilos."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Parámetros de configuración"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
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

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Cómo se puede ver en el código anterior, la configuración de ambas propiedades funciona igual, reciben un objeto con las siguientes propiedades:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Cómo se puede ver en el código anterior, se puede definir tres propiedades"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "processor:"
                  }), " Procesador a utilizar. Soporta sass y less"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "path:"
                  }), " Directorio donde se encuentran los archivos, sino se define se buscaran todos los archivos relativos a la ubicación del archivo de configuración."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "files:"
                  }), ", el * indica que se debe tomar en cuenta cualquier archivo adentro del path definido. Si se específican archivos por nombre, sólo se tomara en cuenta los archivos indicados."]
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

      /*****************************************************
      INTERNAL MODULE: ./mdx/frontend/template/templates.mdx
      *****************************************************/

      ims.set('./mdx/frontend/template/templates.mdx', {
        hash: 2170278434,
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
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Plantilla de un proyecto"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS brinda una arquitectura simple pero robusta para el manejo de plantillas en los proyectos, la cual cuenta con las siguientes caracteristicas:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Estilos:"
                  }), " Soporte integrado de preprocesadores LESS y SASS."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Propiedades CSS:"
                  }), " estructura básica de variables que permite trabajar con los componentes web eficientemente."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Estilo global:"
                  }), " Hoja de estilo global para el proyecto."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Sobreescritura:"
                  }), " Esto es una característica especial que permite redefinir estilos y textos de módulos existentes sin necesidad de tocar el código original."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Separación de código:"
                  }), " Manejo independiente de los archivos de estilos con proceso automatizado para la generación de archivos finales independientes y optimizados."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Light & Dark Theme"
                  }), " integrados."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Configuración"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La configuración de la plantilla, al igual que todos los elementos en BeyondJS, se maneja por medio de un archivo de configuración, cuyo nombre, por convención es template.json y se ubica en la carpeta template en la raiz del proyecto. Sin embargo, tanto el nombre como la ubicación son valores configurables en el ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/project/config",
                  children: "project.json."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La plantilla puede ser manejada desde el ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/workspace",
                  children: "Workspace"
                }), " y cuando se crea un proyecto ya viene configurada la estructura por defecto para su manejo."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A continuación se explican las propiedades de configuración"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Las propiedades application y global reciben los mismos parametros de configuración, pero tienen fines distintos."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "template.application"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La propiedad de configuración application representa al archivo de estilos generales del proyecto y tiene como foco principal ser el lugar en donde se definan las propiedades css personalizadas y cualquier estilo que se requiera aplicar al documento general, externo a los widgets."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Las ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "custom properties"
                }), " juegan un papel importante en el manejo de los widgets. Los componentes webs con Shadow DOM no se ven afectados por los estilos generales del sitio web en donde están incluidos. Sin embargo, las propiedades css si pueden ser accedidas y utilizadas."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El manejo de estilos puede verse en detalle en la sección de ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/styles/template",
                  children: "Estilos en la plantilla."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "template.global"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Tiene como finalidad suministrar al desarrollador la posibilidad de compartir código entre widgets. Los archivos agregados en la configuración de global, son compilados en un archivo de nombre global.css, que es incluido en el shadow dom de cada widget para que tengan acceso a los estilos."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Parametros de configuración"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
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
  `
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Cómo se puede ver en el código anterior, la configuración de ambas propiedades funciona igual, reciben un objeto con las siguientes propiedades:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Cómo se puede ver en el código anterior, se puede definir tres propiedades"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "processor:"
                  }), " Procesador a utilizar. Soporta sass y less"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "path:"
                  }), " Directorio donde se encuentran los archivos, sino se define se buscaran todos los archivos relativos a la ubicación del archivo de configuración."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "files:"
                  }), " el * indica que se debe tomar en cuenta cualquier archivo adentro del path definido. Si se específican archivos por nombre, sólo se tomara en cuenta los archivos indicados."]
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

      /**********************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/widget-creation.mdx
      **********************************************************/

      ims.set('./mdx/frontend/widgets/widget-creation.mdx', {
        hash: 1814727977,
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
              }, props.components),
              {
                Code
              } = _components;
            if (!Code) _missingMdxReference("Code", true);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Creación de widgets"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Un widget es un tipo de bundle y en BeyondJS tiene una filosofía de carga modular y los bundles son la representación de código final a ser ejecutado en el entorno JavaScript. Si quieres leer acerca de todos los tipos de bundles existentes, puedes dirigirte a ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/bundle",
                  children: "la sección de bundles."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los widgets exponencian las ventajas ya existentes en los componentes web gracias al encapsulamiento. Permiten integrar con una mínima configuración diferentes tecnologías y ofrecen una API simple para gestionar sus propiedades, metodos e interacción con el resto de componentes de un proyecto web. También, pueden ser disponibilizados como paquetes NPM y utilizados desde cualquier proyecto que utilice javascript sin necesidad de requerir de BeyondJS."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Existen tres tipos de widgets:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Page:"
                  }), " Diseñados para crear las diferentes páginas del aplicativo, recibe parametros de configruación asociados a la URL y al uso de layouts."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Layout:"
                  }), " Representan a contenedores de páginas, permiten separar código o lógicas transversales a páginas. Un layout puede también contener otro layout."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Default:"
                  }), " Exponen un componente web bajo el nombre definido y no requieren de ningún tratamiento adicional de parte de BeyondJS."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Todos los widgets implementan un objeto Controller quien es el encargado de manejar el ciclo de vida del componente web y permitir la definción de funcionalidades ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/widgets/docs/rendering",
                  children: "de renderizado"
                }), ", estado y navegación."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Creación manual"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La configuración manual, se realiza agregando la definición del bundle de tipo widget en el ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/module/config",
                  children: "module.json"
                }), " del módulo."]
              }), "\n", (0, _jsxRuntime.jsx)(Code, {
                children: `
"widget": {
    "element": {
      "name": "web-login"
    },
    "ts": {
      "path": "/widget/ts",
      "files": [
        "*"
      ]
    }
  }

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El código anterior, define un bundle de tipo widget con el nombre del web-component como web-login y con typescript como procesador."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Creación con el workspace"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Todos los bundles pueden crearse desde el formulario de creación de módulos en el ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/workspace",
                  children: "workspace"
                }), " y de este modo, BeyondJS se encarga de generar la estructura de carpetas y los archivos necesarios, incluyendo la definición del Controller y los archivos module.json y .tsconfig."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Cuando los bundles son creados por medio del workspace, los archivos son generados y módificados por el servicio de desarrollo."
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

      /********************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/widget-object.mdx
      ********************************************************/

      ims.set('./mdx/frontend/widgets/widget-object.mdx', {
        hash: 2030276279,
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
                      to: "/docs/api/NodeWidget",
                      children: "NodeWidget"
                    }), " optional:"]
                  }), " Nodo html del widget."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_components.strong, {
                    children: ["wchildren ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/docs/api/BeyondWidget",
                      children: "(BeyondWidget)[]"
                    }), " optional:"]
                  }), " Lista de widgets contenidos"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_components.strong, {
                    children: ["parent ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/docs/api/BeyondWidget",
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

      /*******************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/widgets-page.mdx
      *******************************************************/

      ims.set('./mdx/frontend/widgets/widgets-page.mdx', {
        hash: 2698308437,
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
                children: "Widgets page"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los widgets de tipo page representan a una página de un sitio o aplicativo web que puede ser accedido por medio de una URL. Cuando un proyecto web recibe una solicitud por URL, BeyondJS se encarga de identificar al widget con esa URL definida para inicializar el componente y dejarlo disponible en el DOM."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
"widget": {
    "route": "login"
    "layout: "main",
    "element": {
      "name": "login-page"
    },
....
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Las páginas requieren la misma estructura de configuración que la de cualquier widget, pero aparte recieben los siguientes parametros de configuración:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "route:"
                  }), " [string] : Define la URL o ruta de acceso al componente."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "layout"
                  }), " [string] [optional] : y define si quieres usar un layout o no en tu página."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "vdir"
                  }), " [string] [optional] : Permite definir si se quiere manejar algún valor dinámico en la URL."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Patrón de rutas"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Se pueden definir URLs con valores dinámicos agregando las variables a la propiedad route con una sintaxis similar a la de template strings."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para ejemplificarlo, supongamos que se tiene una página de módificación de datos de un usuario y se necesita manejar el id por medio de la URL. La propiedad route del widget tendría el siguiente valor:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
/user/edit/${userId}
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
                    children: "/user/edit/any-identifier"
                  })
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Estas propiedades, quedan disponibles en el objeto ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "uri"
                }), " disponible como propiedad en el controller del widget y podria ser accedido desde el controlador de la siguiente forma:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `this.uri.vars.get('userId');`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El objeto uri es pasado también a los componentes de vista. La forma de acceder a ellos depende de la implementación de cada framework o herramienta."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/widgets/layouts",
                    children: "Layouts"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/routing",
                    children: "Enrutamiento"
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

      /**************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/widgets.mdx
      **************************************************/

      ims.set('./mdx/frontend/widgets/widgets.mdx', {
        hash: 1199642296,
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
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Widgets"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["En BeyondJS, La arquitectura de desarrollo para aplicaciones o proyectos webs, está diseñada para trabajar con una estructura de ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://micro-frontends.org/",
                  children: "Micro frontends"
                }), " brindando la posibilidad de integrar diferentes stacks tecnológicos en un mismo proyecto, lo que permite evaluar qué tecnología es más conveniente para desarrollar funcionalidades específicas, esto se logra por medio de la creación de ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "widgets."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Un ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Widget"
                }), " es un tipo de ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/bundles",
                  children: "bundle"
                }), " isponible en BeyondJS y es implementado por medio de un ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://developer.mozilla.org/en-US/docs/Web/Web_Components",
                  children: "Componente Web"
                }), " con ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM",
                  children: "shadow DOM"
                }), " para encapsular su contenido. Al ser un componente web, puede definir propiedades y métodos y ser accedido por medio de la API del ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
                  children: "DOM"
                }), " . Otra ventaja importante de los widgets, es que realizan la carga de dependencias a demanda y sólo cuando son requeridas, optimizando así los tiempos de carga de los componentes."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["BeyondJS implementa las técnicas de renderizado sobre widgets, esto ofrece la posibilidad de integrar renderizados hibridos en un proyecto, puedes leer más sobre ello en la ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/rendering",
                  children: "sección de renderizado."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["BeyondJS brinda soporte para trabajar con frameworks/librerias como ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://reactjs.org/",
                  children: "React"
                }), ", ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://vuejs.org/",
                  children: "Vue"
                }), " y ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://svelte.dev/",
                  children: "Svelte"
                }), " y tiene disponible la posibilidad de integrar nuevas librerias o herramientas."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Usando React"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "React tiene soporte automático motivado a que typescript interpreta el código tsx. Por tanto, lo único necesario para poder usarlo es tener instalada la dependencia en npm y definir el procesador ts en la configuración del bundle en el module.json."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "la configuración de react se realiza por medio de los archivos .tsconfig, cada módulo viene con un archivo configurado por defecto con compatibilidad para trabajar con react. puedes leer más sobre ello en la documentación de typescript."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Usando Svelte o Vue"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Cada framework tiene su propio procesador con el nombre de la libreria. Para utilizarlos, solo es necesario incluir el procesador en la configuración del bundle."
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
        hash: 1440631136,
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
              strong: "strong",
              br: "br"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Bundles"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Un bundle representa el o los archivos compilados ya listos para ser incluidos en el navegador. Estos archivos se componen por código generado por los procesadores incluidos en la configuración y son definidos como propiedades del objeto de configuración de un módulo, el cúal se encuentra en el archivo module.json de cada módulo creado."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["{\r\n\"name\": \"icons\",\r\n\"code\": {\r\n\"ts\": {\r\n\"path\": \"ts\",\r\n\"files\": [\r\n\"", (0, _jsxRuntime.jsx)(_components.em, {
                    children: "\"\r\n]\r\n},\r\n\"sass\": {\r\n\"path\": \"scss\",\r\n\"files\": [\r\n\""
                  }), "\"\r\n]\r\n}\r\n}\r\n}"]
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El código anterior, define un bundle de tipo code. Un modulo puede contener más de un bundle, para ello solo es necesario agregar otra propiedad con el nombre del bundle adicional. Es importante tener en cuenta que un módulo no puede contener dos bundles de un mismo tipo."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Imagina que necesitas realizar la interfaz de un formulario de registro. El formulario de registro podría dividirse en dos capas:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "la interfaz de usuario basada en el código HTML y los estilos de la pantalla."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "La lógica asociada a validaciones y funcionalidades."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para poder llevar a cabo el desarrollo, es necesario crear algunos archivos en Typescript, que incluyan la lógica y elementos de la interfaz y otros archivos de estilo. En BeyondJS esto implica trabajar con al menos, dos procesadores básicos:ts y sass, el primero genera código javascript, el segundo genera código css."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Un bundle"
                }), " representa el o los archivos compilados ya listos para ser incluidos en el navegador. Estos archivos se componen por código generado por los procesadores incluidos en la configuración."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Como se explicó anteriormente, la posibilidad de que un bundle genere uno o varios archivos finales, depende básicamente de los procesadores incluidos para su empaquetamiento, si es necesario crear sólo código JavaScript se genera un único archivo, si por el contrario se necesita tambien código CSS se generan dos archivos."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los bundles están compuestos por procesadores y BeyondJS ofrece la posibilidad a los desarrolladores de poder crear sus propios bundles."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Bundles Transversales"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los bundles transversales, se definen igual que el resto de bundles, pero tienen una particularidad que ofrece ventajas productivas: el código de un bundle transversal es compilado en un archivo único."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS los ubica, integra y unifica en un único bundle o archivo final. Los bundle de tipo start son un ejemplo claro de ello, permiten al programador definir la lógica que desea sea ejecutada en el arranque de la aplicación."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Tipos"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Widget"
                  }), ": Contienen el código de un web-component. Las páginas y los layouts son manejados como widgets. Puedes leer más acerca de este tipo de bundle en ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/widgets",
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
                    children: "Rhino."
                  })]
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
      INTERNAL MODULE: ./mdx/modules/create-a-module.mdx
      *************************************************/

      ims.set('./mdx/modules/create-a-module.mdx', {
        hash: 3925964110,
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
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Crear un Módulo"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Esta página asume que ya se leyó la ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/modules/intro",
                  children: "introducción de módulos."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los módulos se crean y gestionan por medio de los archivos de configuración module.json, estos pueden ser creados de forma manual o a través de la interfaz del Workspace."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Creación desde el Workspace"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para crear un módulo debe haberse creado previamente un proyecto y estar activo en el Workspace."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La opción de crear proyectos es una funcionalidad disponible cuando un proyecto se encuentra activo en el Workspace. Para poder verlas, es necesario abrir el proyecto accediendo al board de detalle del mismo."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Cuando el proyecto se encuentra activo, se puede ver la opción en el ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "PreAside"
                }), ", al hacer click en ella, aparecce un modal que da la opción de crear un módulo en blanco o seleccionar una plantilla."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Posteriormente, aparece un formulario que solicita el resto de datos necesarios, asociados al tipo de bundle que se agregará en el módulo y los procesadores que contendrá."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Datos del módulo"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Nombre del Módulo"
                  }), " string : Corresponde al nombre con el cual podra ser importado o utilizado el módulo a crear."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Nombre Web Component"
                  }), " string: Aplica para los bundles de tipo widget. Debe seguir el estandar de nombres de componentes web, todo en minusculas y con un guión."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Url"
                  }), " url optional : Aplica a módulos con un bundle de tipo widget page. Define la url de acceso."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Vue"
                  }), " boolean : Agrega el procesador Vue."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Svelte"
                  }), " boolean : Agrega el procesador Svelte."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Creación manual"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La configuración de módulos sigue el mismo principio que el resto de elementos configurativos en BeyondJS y debe crearse en un archivo de nombre module.json."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El module.json recibe cómo mínimo dos propiedades: El nombre del módulo y la configuración de un bundle."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
{
    "name": "first-module",
    "platforms": [
        "web"
    ]
    "code" : {
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
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En el ejemplo anterior, se está creando un módulo de nombre first-module, con un bundle code que contiene un procesador sass y un procesador ts que procesan código Sass y Typescript respectivamente y que será empaquetado para plataforma web."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Un módulo puede contener varios bundles, estos se definen como propiedades del objeto de configuración del módulo y un módulo pureciben como valor un objeto de configuración que aparte de los procesadores, puede recibir algunas propiedades adicionales según el tipo de bundle. Puedes leer más en detalle sobre esto en ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/bundles",
                  children: "La sección de bundles."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/modules/json",
                    children: "Configuración de módulos"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/widgets",
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
        }
      });

      /***********************************************
      INTERNAL MODULE: ./mdx/modules/module-config.mdx
      ***********************************************/

      ims.set('./mdx/modules/module-config.mdx', {
        hash: 3605724182,
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
                    to: "/concepts/platforms",
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
                      to: "/module#bundle",
                      children: "[bundle]"
                    }), " : Refiere al nombre identificador del tipo de bundle que se desea agregar en el módulo. Un módulo puede poseer uno o varios bundles. Cada bundle recibe un objeto de configuración con los procesadores que utiliza y alguna variación inherita del tipo de bundle agregado."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(Link, {
                    to: "/docs/bundles",
                    children: "Bundles"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(Link, {
                    to: "/docs/widgets",
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

      /*****************************************
      INTERNAL MODULE: ./mdx/modules/modules.mdx
      *****************************************/

      ims.set('./mdx/modules/modules.mdx', {
        hash: 3349759769,
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
              em: "em",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Modules"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Introducción"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["En BeyondJS los módulos representan la unidad básica de desarrollo y tienen ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "características"
                }), " que es necesario tener presente. Para poder entender bien las diferencias y ventajas del ecosistema de módulos de BeyondJS, es necesario antes repasar cómo funcionan los módulos de JavaScript y cómo se integran en el proceso de desarrollo en la actualidad."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Un ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
                  children: "módulo JavaScript"
                }), " hoy es representado por un único archivo, con tareas independientes y un scope propio. Este módulo puede exportar elementos y ser importado por otros módulos que consumen las\r\nvariables, objetos o funciones que este provee."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Los empaquetadores por su parte, suelen utilizar una sintaxis compatible con las imports incluidos en EcmaScript 6, pero son ellos quienes se encargan de analizar el árbol de dependencias, quitando aquellos elementos que no son utilizados en el código y ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "generando un \"bundle\""
                }), " que es a su vez, un contenedor de todos los módulos utilizados por el equipo de desarrollo."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En BeyondJS, el concepto de módulo es un poco más abarcativo y se divide en dos: Módulos y Módulos Internos."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Módulos Internos"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Representan el concepto de módulos JavaScript conocido, con la diferencia de que el programador puede definir si estos quedan disponibles para ser consumidos desde un módulo externo o no. Esto se logra por medio del comentario mágico /", (0, _jsxRuntime.jsx)(_components.em, {
                  children: "bundle"
                }), "/ que se coloca en la exportación.Representan el concepto de módulos JavaScript conocido, con la diferencia de que el programador puede definir si estos quedan disponibles para ser consumidos desde un módulo externo o no. Esto se logra por medio del comentario mágico /", (0, _jsxRuntime.jsx)(_components.em, {
                  children: "bundle"
                }), "/ que se coloca en la exportación."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
export /*bundle*/ class Auth {
    //....
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los módulos internos, pueden ser importados por cualquier otro módulo interno por medio de la ruta relativa del archivo."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Módulos"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Como se comentó antes, representan la unidad mínima de desarrollo de BeyondJS y está compuesto por todos los módulos internos que requiera"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Esto permite que el concepto de módulo en BeyondJS se acerque más a la definición de un módulo en la informática general, donde este representa una funcionalidad dentro de un programa o sistema. Aunque los módulos JavaScript son compatibles con este concepto, en la práctica un módulo (bajo el concepto informático) de un proyecto, aplicación o librería contiene todo un conjunto de módulos JavaScript (módulos internos en BeyondJS), en conjunto con el resto de herramientas y tecnologías que se requieran para componerlo, como estilos, imágenes o texto."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En otras palabras, en BeyondJS es el contenedor de todas las herramientas y tecnologías necesarias para garantizar el funcionamiento completo de una funcionalidad representa una funcionalidad desarrollada y donde el programador tiene la capacidad de definir que desea exportar para que pueda ser consumido de forma externa y que no."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Trabajando con módulos"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los módulos deben estar contenidos en un proyecto y son consumidos por este, pero también pueden ser consumidos por otros proyectos que los importen como bibliotecas."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["BeyondJS gestiona la importación de módulos a través de la especificación ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "npm"
                }), " que permite definir la estructura @scope/nombre-proyecto/nombre-módulo. El scope es un valor opcional y en conjunto con el nombre del proyecto son propiedades definidas en la configuración del proyecto y se encuentran en el ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/project#properties",
                  children: "project.json."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La definición de nombre de módulos es una característica vital en BeyondJS ya que ayuda al mantenimiento futuro del proyecto, permitiendo que los módulos y carpetas puedan reestructurarse sin que el comportamiento del mismo sea puesto en riesgo a causa de las importaciones."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Cuando BeyondJS levanta el entorno de desarrollo, realiza un mapeo de los módulos existentes e interpreta las rutas de cada módulo para poder referenciarlas correctamente cuando estos son importados. Posteriormente, en la fase de despliegue, se encarga de armar la estructura necesaria y convertir las importaciones."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Identificador de un módulo"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El identificador de un módulo es el que se utiliza para importarlo"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
import * as Mod from 'module-identifier';
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En BeyondJS los identificadores se definen por medio del identificador del paquete (proyecto) y el nombre del módulo."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para ejemplificarlo, supongamos se crea un proyecto \"project\" bajo el scope @company, luego agregamos un módulo de nombre login, la ruta para importar este módulo sería:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
@company/project/login
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ahora bien, los módulos, son contenedores de bundles y los bundles, representan el archivo final incluido. Por tanto, para poder hacer una importación de unbundle, es necesario especificar el bundle a consumir."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para ejemplificarlo, supongamos que tenemos un bundlecode que disponibiliza un objeto Auth adentro del módulo login que hemos creado. Nuestra importación quedaría de la siguiente manera:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
import {Auth} from '@company/project/login/code';
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/modules/config",
                    children: "Configuración de módulos"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/bundles",
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

      /********************************************
      INTERNAL MODULE: ./mdx/modules/processors.mdx
      ********************************************/

      ims.set('./mdx/modules/processors.mdx', {
        hash: 3926160569,
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
                  to: "/docs/bundles",
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

      /*******************************************
      INTERNAL MODULE: ./mdx/packages/creation.mdx
      *******************************************/

      ims.set('./mdx/packages/creation.mdx', {
        hash: 4142438416,
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
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Y crear un archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "beyond.json"
                }), " que registre al paquete para que el DevServer de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " lo reconozca. El archivo beyond.json\r\ntendría que tener la siguiente estructura."]
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
                items: ["packages/distributions", "packages/json"]
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
        hash: 1830528247,
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
                id: "intro",
                pretitle: "Fundamentos",
                title: "Distribuciones"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Las Distribuciones son una funcionalidad que permite definir el comportamiento\r\nque debe tener el DevServer de BeyondJS en el entorno de desarrollo y las caracteristicas para el\r\nempaquetado del proyecto durante el proceso de despliegue"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "Al crear un nuevo proyecto, este viene con una distribución configurada de forma predeterminada.\r\nEn este documento se describen en detalle todas las opciones de configuración de las distribuciones,\r\nnecesarias para trabajar con diferentes entornos de ejecución o tipos de resolución de módulos."
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
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_html.ObjectProperty, {
                        type: "object",
                        children: "ports"
                      }), " recibe un objeto con las siguientes propiedades :"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_html.ObjectProperty, {
                        type: "number",
                        children: "bundles"
                      }), " puerto en el que el DevServer devolverá los bundles."]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_html.ObjectProperty, {
                        type: "number",
                        children: "http"
                      }), " Puerto para conectar debuggers o inspectores de código. Puede\r\nleer más sobre inspección remota en ", (0, _jsxRuntime.jsx)(_html.Link, {
                        href: "/remote-inspection",
                        children: "sección de inspección remota."
                      })]
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
                      children: ["Esta propiedad es requerida si el paquete utiliza una conexión con un backend por medio de websockets. Puedes\r\nleer más acerca de esto en la ", (0, _jsxRuntime.jsx)(_html.Link, {
                        href: "/bridges",
                        children: "sección de Bridges"
                      }), " ."]
                    })
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

      /*****************************************
      INTERNAL MODULE: ./mdx/packages/import.mdx
      *****************************************/

      ims.set('./mdx/packages/import.mdx', {
        hash: 1011900300,
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
                  to: "/docs/projects/json",
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
        hash: 3064715624,
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
              li: "li",
              p: "p",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Packages",
                title: "package.json"
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
                      to: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Espacio para explicar de forma resumida cuales son las características del proyecto."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "layout"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Espacio para explicar de forma resumida cuales son las características del proyecto."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "params"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Objeto que permite agregar parámetros generales que se requieran utilizar en todo el proyecto, tiene la posibilidad de definir valores por entorno. Para entender más, puedes dirigirte a la sección ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/project/params",
                      children: "Parámetros del proyecto."
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "modules"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Recibe un objeto con una entrada path que permite definir el directorio de los módulos, por defecto es \"module\""]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "deployment"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Objeto que permite realizar las configuraciones de los entornos de desarrollo, las cuales son definidas por medio de la entrada deployment"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Deployment"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/glossary#eac",
                      children: "EAC"
                    }), " optional: Objeto que permite realizar las configuraciones de los entornos de desarrollo, las cuales son definidas por medio de la entrada distributions. Las distribuciones pueden agregarse desde la funcionalidad del workspace para ello o de forma manual. Para entender cómo funcionan puedes dirigirte a la ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/project/distributions",
                      children: "Sección de distribuciones."
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
        hash: 3100405436,
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
        hash: 496559445,
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
              li: "li",
              strong: "strong",
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Packages",
                text: "Gestión de un proyecto"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Tipos de Proyectos en blanco"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Web:"
                  }), " Listo para comenzar un proyecto web que pueda ser distribuido en internet o como aplicación móvil."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Node:"
                  }), " Listo para distribuir como un proyecto a ejecutar en un entorno node."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Backend:"
                  }), " Proyecto node que disponibiliza interfaces que puedan ser consumidas en real-time con web sockets desde otro proyecto node o desde un proyecto cliente."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Library:"
                  }), " Ideal para crear proyectos que esten pensados para ser distribuidos como paquetes ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "NPM"
                  }), "."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "web - backend:"
                  }), " Genera un proyecto con distribuciones Web y Backend integrados."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Tipos de plantillas"
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
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Se puede trabajar con diferentes librerias/Frameworks de vistas en un mismo proyecto gracias a la estructura de micro-frontends que ofrece BeyondJS. Puede leerse más al respecto en ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/widgets/intro",
                  children: "La sección de widgets"
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Datos del Proyecto"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Luego de la selección del tipo de proyecto, aparece un formulario que solicita el scope y nombre del proyecto, el puerto sobre el cúal correrá, y adicionalmente, un titulo y descripción opcionales. Luego de llenar los datos necesarios, el Workspace se encarga de crear el proyecto con la estructura de archivos y el proyecto queda disponible para ser accedido en el puerto configurado."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Todos los proyectos tienen dependencias de paquetes npm que pueden opcionalmente ser instalados desde el workspace. En caso de no haberlo hecho, para que el proyecto funcione es necesario instalar las dependencias manualmente."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Creación manual"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La definición de un proyecto se hace por medio del archivo project.json."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La estructura mínima necesaria para la creación de un proyecto es la siguiente:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
{
  "name": "project-name",
  "version": "1.0.0",
  "title": "Project title",
  "description": "Description"
  "languages": {
    "default": "en",
    "supported": [
      "en"
    ]
  },,
  "modules": {
    "path": "modules"
  }
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Habiendo creado el archivo project.json, solo resta crear el archivo de configuración del servidor de BeyondJS, que lleva por nombre beyond.json y cuya estructura básica es la siguiente:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
{
  "applications": [
    "path-to-project/project.json"
  ]
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La entrada applications es un arreglo que puede contener una lista de rutas relativas a archivos de configuración de proyectos."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Puedes leer más sobre las opciones de configuración de BeyondJS en entorno de desarrollo en la sección del ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/dev-server",
                  children: "Servidor de desarrollo"
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/projects/create",
                    children: "Crear un proyecto"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/projects/distributions",
                    children: "Distribuciones"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/projects/json",
                    children: "project.json"
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
      INTERNAL MODULE: ./mdx/starting/cli.mdx
      **************************************/

      ims.set('./mdx/starting/cli.mdx', {
        hash: 859914673,
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
                pretitle: "Introducción",
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
                  }), " pueda obtener información acerca de los paquetes disponibles en el DevServer.\r\nsino es pasado, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " tomará por defecto el puerto 4000. A partir de la instalación, sólo es necesario ir a la\r\ncarpeta en donde se desee crear el o los proyectos e inicializar BeyondJS desde la línea de comandos de la siguiente\r\nforma:"]
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
        hash: 1701381836,
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
                  children: "Proyectos web,"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Aplicaciones móviles híbridas,"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Aplicaciones de escritorio híbridas,"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "microservicios y backends monolíticos."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Extensiones."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Microfrontends o Widgegts para integrarlos en proyectos existentes."
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
        hash: 822228523,
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
              pre: "pre",
              code: "code",
              blockquote: "blockquote"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Introducción",
                title: "Comienzo rápido"
              }), "\n", (0, _jsxRuntime.jsxs)(_html.Info, {
                children: [(0, _jsxRuntime.jsx)(_components.p, {
                  children: "Para entender esta documentación, debes tener en cuenta los siguientes puntos:"
                }), (0, _jsxRuntime.jsx)(_components.p, {
                  children: "Tener instalado Node ^14.17.4.\r\nEstar familiarizado con manejadores de dependencias como npm o yarn."
                })]
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
                children: ["Este es el comando ideal si no tienes ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " instalado y deseas empezar con un proyecto nuevo al mismo tiempo.\r\nRealiza la instalación global y procede a crear un paquete automáticamente en el directorio en el que se ejecuta."]
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
                children: "beyond add project"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Este comando inicializa BeyondJS y te permite navegar a tu proyecto en ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "http://localhost:6530",
                  children: " http://localhost:6530"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["El puerto ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "6530"
                  }), " es definido por defecto en la distribución de proyecto y puede modificarse de forma simple en el ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "package.json"
                  }), ". Puedes leer en detalle\r\nsobre ello en ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/distributions",
                    children: " la sección de distribuciones"
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
        hash: 1115558944,
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
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Código Backend"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS disponibiliza un entorno seguro y eficiente pare crear código backend, bien sea que se requiera para trabajar con servicios independientes, encargados de tareas específicas o que busque implementar una conexión de un proyecto cliente con una api backend. Para efectos de BeyondJS,\r\npodemos clasificar estas estructuras de código en dos tipos:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Servicios Backend"
                  }), ": Código node que representa un servicio en ejecución en el backend y sólo puede ser utilizado por módulos que tambien se ejecuten en el backend."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Api backend"
                  }), ": permiten la conexión entre el código backend\r\ny el código cliente."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                children: "Api Servidor"
              }), "\n", "\r\n", "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Bundle bridge"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Las APIs servidor en BeyondJS representan funciones que ejecutan código en el servidor y pueden ser consumidas desde el código cliente. Manejan la lógica para conectarse a un backend y retornar data. Esto se lógra de forma simple, con la creación de un ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/bundles#bridge",
                  children: "Bundle Bridge."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para que se pueda ejecutar código Backend en BeyondJS es necesario tener configuradas las distribuciones necesarias. Si el proyecto se creo a partir del tipo de proyecto web-backend, la misma ya se encuentra configurada. Puedes encontrar más información en ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/distributions",
                  children: "La sección de distribuciones."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
    {
        "name": "module-name",
        "bridge": {
            "path": "ts",
            "files": ["*"]
        },
        "platforms": ["*"]
    }
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Al igual que cualquier módulo o bundle, este puede ser gestionado desde el ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/workspace",
                  children: "Workspace"
                }), " o de forma manual.\r\nCómo su nombre lo indica, el bundle de tipo bridge, sirve de puente entre la lógica cliente y la lógica servidor. Generalmente, en el servidor se impmenentan lógicas asociadas al manejo de datos o manipulación de archivos, el bridge Permite implementar y dejar disponibles funcionalidades que necesiten ser consultadas desde el cliente y mantener encapsuladas en el servidor aquellas que no.\r\nEl código de un bundle bridge luce así:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
export /*actions*//*bundle*/
class Auth {
    async login(user :string, password: string) {
        if (user !== data.user || password !== data.password) {
            return {status: true, error: "Invalid data" };
        }

        return {status: true, data: {valid: true} }
    }

}

`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Un objeto Javascript común y corriente ¿Verdad?\r\nBeyondJS genera un objeto cliente que realiza la conexión web-socket al servidor, ejecuta el código implementado por el desarrollador y deja disponible la respuesta en el código cliente, abstrayendo al programador de la necesidad de procuparse por la conexión entre las capas cliente y servidor y permitiendo que el código funcione como parte de un mismo ecosistema.\r\nAhora sólo es necesario inicializar el servidor. Para ello es necesario crear un módulo con un bundle start que se encargue de iniciar el ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/bee",
                  children: "BEE."
                }), " El código del bundle start es el siguiente:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
import { listen } from "@beyond-js/backend/listen/ts";
listen();
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["En el ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/tutorial/web",
                  children: "Tutorial Web"
                }), " disponible, se implementa un bridge que permite ver en acción el funcionamiento de las apis backend de BeyondJS."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                children: "Comentarios mágicos"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "bundle backend"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los bundles backend representan código JavaScript que es ejecutado en el servidor y sólo pueden ser utilizados por módulos que tambien funcionen en el servidor. Dicho en otras palabras, representan cualquier servicio típico de NodeJS, con la salvedad de que, en entorno de desarrollo, son ejecutados por medio de un BEE o proceso BeyondJS lo cual aumenta la productividad al poder trabajar con HMR de forma automatizada y sin configuración."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/modules/create",
                    children: "Crear un módulo"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/bundles",
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

      /*****************************************
      INTERNAL MODULE: ./mdx/tutorial/bridge.mdx
      *****************************************/

      ims.set('./mdx/tutorial/bridge.mdx', {
        hash: 1469342732,
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
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Tutorial",
                title: "Código Bridge"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Como mencionamos antes, en esta parte generalmente cada proyecto tiene su propia lógica para la validación de sesión. La\r\nintención hoy no es enfocarse en cómo debe manejarse esto, lo que haremos será crear un código básico que nos permita conectar\r\nnuestro código cliente con el backend node. Esto lo agregaremos en el archivo bridge.ts existente en el módulo que acabamos\r\nde crear."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
const data = {
    user: 'admin',
    password: '123456.'
}
`
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
export /*actions*//*bundle*/
class Auth {

    async login(user: string, password: string) {
        if (user !== data.user || password !== data.password) {
            return {status: true, error: 'Invalid data'};
        }

        return {status: true, data: {valid: true}}
    }

}
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El código es bastante simple, pero hay varios puntos interesantes a destacar"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El comentario mágico /", (0, _jsxRuntime.jsx)(_components.em, {
                  children: "bundle"
                }), "/es utilizado por Beyond para identificar que el código a continuación debe ser considerado como código a exportar en el bundle final. Si quieres leer más acerca del funcionamiento de bundles y módulos, te recomendamos ir a La seccion de módulos de la documentacion.\r\nEl comentario mágico /", (0, _jsxRuntime.jsx)(_components.em, {
                  children: "actions"
                }), "/es utilizado por Beyond para identificar que segmentos del bundle bridge deben quedar disponibles como acciones que puedan ser consumidas por el cliente.\r\nLa respuesta del método login es un objeto plano que llega con la estructura definida al cliente.\r\nConectar cliente y servidor\r\nEl bridge que creamos es un servicio node. Generalmente, para ejecutar un servicio node, es necesario ir a una consola. Sin embargo, en BeyondJS estos servicios funcionan como un BEE (Beyond Environment Service) y para ejecutarlo debemos ir al Workspace y darle al botón de ejecución, que podemos encontrar en la pantalla de detalle del proyecto."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Y otro en el detalle del proyecto:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Beyond Environment Execution - Workspace - BeyondJs\r\nPara poder implementar la funcionalidad de login con nuestro servidor, debemos importar nuestro objeto auth en el código cliente y asociar el evento onSubmit a nuestro formulario."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En BeyondJS los proyectos siguen las mismas directrices para especificación y resolución de nombres y paquetes que npm, de la misma forma que lo hace typescript. Deben tener nombre de módulo y pueden manejar un scope también. En nuestro caso, definimos ambos al momento de crear nuestro proyecto y módulo respectivamente."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A continuación, en nuestro componente Page importamos el objeto Auth"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import {Auth} from "@testing/login/home/bridge";`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Agregamos nuestra función onSubmit y la asociamos al formulario, nuestro código debe quedar de la siguiente forma:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
import * as React from 'react';
import { Auth } from '@testing/login/auth';

interface IForm {
disabled?: boolean;
}
const model = new Auth();
export /_page_/
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
const onSubmit = async event => {
try {
event.preventDefault();
const response = await model.login(username, password);
if (response.data?.valid) {
console.log('valid data');
return;
}
setError(response.error);
} catch (e) {
console.log(e)
}
}

     return (
        <div className="page__container">
            <form onSubmit={onSubmit}>
                {
                    error &&
                    <div className="form__error">
                        {error}
                    </div>
                }
                <label>User: </label>
                <input onChange={handleChange} type="text" name="username"/>
                <label>Password</label>
                <input onChange={handleChange} type="password" name="password"/>
                <div className="form__actions">
                    <button onClick={onSubmit} {...formDisabled}>Login</button>
                </div>
            </form>
        </div>
    );

}`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Es tiempo de probar nuestro formulario. Si agregamos los datos correctos, podremos ver que en la consola del navegador aparece el mensaje que indica que los datos fueron validados y se puede iniciar sesión, si por el contrario, agregamos datos incorrectos, podremos ver como aparece el mensaje de error \"Invalid data\" el cual actualizamos en la variable de estado del componente."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Resumen:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Creamos un módulo con un widget de tipo page.\r\nCreamos una conexión con un backend node por medio del bundle bridge.\r\nRepasamos la estructura de resolución de módulos para importar el bridge Auth y poder agregar la validación de inicio de sesión.\r\nAhora solo nos falta redireccionar al usuario a una pantalla de bienvenida."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/tutorial/routing",
                    children: "Enrutamiento"
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

      /*************************************************
      INTERNAL MODULE: ./mdx/tutorial/create-project.mdx
      *************************************************/

      ims.set('./mdx/tutorial/create-project.mdx', {
        hash: 302363104,
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
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Tutorial",
                title: "Crear el proyecto"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["En el formulario de creacion de proyectos, vamos a seleccionar proyecto ", (0, _jsxRuntime.jsx)("strong", {
                  children: "Web"
                }), ".\r\nEsto nos llevará a un formulario donde nos piden los siguientes datos:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)("strong", {
                      children: "Scope:"
                    }), " colocaremos “testing”."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)("strong", {
                      children: "Name "
                    }), ": colocamos “login”."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)("strong", {
                      children: "Title:"
                    }), " Tutorial beyond."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)("strong", {
                      children: "Backend:"
                    }), " Habilita el boton backend."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)("strong", {
                      children: "Port:"
                    }), " Coloquemos el puerto: 6500. Es el puerto que se utilizará para acceder al proyecto, beyond propone\r\nuno por defecto y puede ser modificado si se requiere."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)("strong", {
                      children: "Dependencias:"
                    }), " Al final del formulario hay un boton para instalar las dependencias por defecto del proyecto."]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Y presionamos crear."
              }), "\n", (0, _jsxRuntime.jsx)("div", {
                className: "block__note",
                children: (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["El scope y el nombre, son datos que permiten identificar el proyecto y que lo dejan listo para que este pueda ser\r\npublicado como paquete npm o para importarlo desde otro proyecto. Estas configuraciones pueden hacerse de forma\r\nmanual, el workspace sólo simplifica el proceso. Puedes ver la explicación de ello en\r\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/project/config",
                    children: " la sección de Configuración de proyecto."
                  })]
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Este formulario simplifica el proceso de creacion, internamente lo que sucede es que se crear el archivo\r\nde configuracion de beyond (beyond.json), el cual registra las aplicaciones en el directorio, tambien se\r\ncrea la estructura base de la aplicacion, la cual se estructura de la siguiente forma:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)("strong", {
                      children: "package.json:"
                    }), " incluye las dependencias del proyecto creado"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)("strong", {
                      children: "project.json:"
                    }), " Contiene la configuración básica del proyecto, esta puede variar según el tipo de proyecto\r\ny las necesidades del mismo."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)("strong", {
                      children: "template:"
                    }), " Esta carpeta contiene todos los elementos necesarios para definir el template general del\r\nproyecto."]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)("strong", {
                        children: "template.json:"
                      }), " Archivo que permite realizar ajustes en la configuración\r\ndel template del proyecto."]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En el workspace, tenemos dos lugares para ver el modulo. Enn el board del proyecto, que lista los módulos\r\nexistentes y en el aside del proyecto que permite navegar los archivos del mismo. Como vemos en la\r\nsiguiente imagen"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La pantalla de detalle del proyecto nos permite realizar las siguientes acciones:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Listar modulos del proyecto"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Crear nuevos modulos"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Visualizar errores de código en real time."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Editar código fuente"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Agregar archivos estaticos y de template."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Realizar configuraciones generales sobre el proyecto."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Realizar deployment."
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
      INTERNAL MODULE: ./mdx/tutorial/first-module.mdx
      ***********************************************/

      ims.set('./mdx/tutorial/first-module.mdx', {
        hash: 2761474146,
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
                pretitle: "Tutorial",
                title: "Primer módulo"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En el workspace, también podemos hacer click sobre el proyecto y esto abrirá un nuevo tab con el listado de módulos del mismo."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Como puede verse, el proyecto trae dos módulos creados, el Home, que responde a la URL base del proyecto y el módulo “start-backend” del cúal se hablará más adelante."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Workspace nos permite hacer las siguientes acciones sobre un módulo"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Ver y gestionar módulos."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Agregar archivos."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Editar el código fuente de los archivos."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Generar declaraciones."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Visualizar errores de código."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Gestionar configuraciones generales del proyecto"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Gestionar Templates"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Desde el Workspace, podemos también navegar el módulo accediendo desde el menu lateral (PreAside), en el icono del proyecto Activo, que desplegará el aside con el listado de módulos del proyecto, hacemos click sobre el módulo home y se mostrará la lista de bundles contenidos en el módulo y el contenido de estos, procesadores y archivos."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Desde el Workspace, podemos también navegar el módulo accediendo desde el menu lateral (PreAside), en el icono del proyecto Activo, que desplegará el aside con el listado de módulos del proyecto, hacemos click sobre el módulo home y se mostrará la lista de bundles contenidos en el módulo y el contenido de estos, procesadores y archivos."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La estructura del módulo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "home"
                }), " es la siguiente:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "widget: Carpeta en donde se encuentra el código del componente page"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "ts:"
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_components.code, {
                        children: "controller.ts"
                      }), ": Objeto controlador del componente, requerido para poder montar el WebComponent en el navegador."]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["`views", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                        children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                          children: [(0, _jsxRuntime.jsx)(_components.code, {
                            children: "index.tsx"
                          }), ": Componente react que renderiza la página."]
                        }), "\n"]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "scss: Carpeta para agregar estilos al módulo."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "module.json: Archivo de configuración del módulo (Lugar para definir tipo de bundles y procesadores a utilizar)."
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "¡Manos a la obra!"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Teniendo clara la estructura, lo que procede a continuación es crear el formulario de inicio de sesión y agregar algo de estilos, para luego continuar con la conexión al backend node"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                children: "Creación del Formulario"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Si has trabajado con React, lo que viene es la parte que seguramente conoces mejor, con algunas sutilezas seguramente. A continuación, editaremos nuestro archivo page.tsx para crear un formulario de inicio de sesión y la funcionalidad básica para actualizar el estado."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La edición puede hacerse desde tu IDE de preferencia y también desde el Editor integrado del Workspace, el cual tiene como finalidad brindar ayuda para casos especificos al desarrollador, pero para efectos del tutorial recomendamos usarlo, basta con hacer click en el archivo requerido desde el aside."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
import * as React from 'react';

interface IForm {
disabled?: boolean;
}

export /*page*/
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
                <input onChange={handleChange} type="text" name="username"/>
                <label>Password</label>
                <input onChange={handleChange} type="password" name="password"/>
                <div className="form__actions">
                    <button {...formDisabled}>Login</button>
                </div>
            </form>
        </div>
    );
}
`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                children: "Estilos"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS maneja los estilos por defecto con el preprocesador SASS, ahora vamos a nuestro archivo styles.scss y agreguemos un poco de estilo al formulario."
              }), "\n", (0, _jsxRuntime.jsx)("div", {
                className: "block__note",
                children: (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["SASS es un procesador en BeyondJS, si quieres leer a profundidad sobre el mecanismo de procesadores podrás encontrar los detalles en ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/processors",
                    children: "La seccion de procesadores"
                  })]
                })
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
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
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Agregamos estilo básico al formulario, los inputs, el botón de envío y para manejar un mensaje de error."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Custom properties: las custom properties utilizadas, son una estructura básica para manejo de variables incluidas por beyond en el ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/template",
                      children: "Template del proyecto."
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/tutorial/backend",
                    children: "Backend"
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
      INTERNAL MODULE: ./mdx/tutorial/routing.mdx
      ******************************************/

      ims.set('./mdx/tutorial/routing.mdx', {
        hash: 1410839980,
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
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Tutorial",
                title: "Routing"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Lo primero que debemos hacer, es crear un nuevo módulo con un bundle de tipo Page, esta vez lo haremos desde el Workspace. Accedemos al Workspace y seleccionamos el proyecto (si no lo hemos hecho). Esto habilitará en el PreAside las acciones que podemos realizar sobre el proyecto."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Hacemos clic en el ícono para agregar módulos y se abrirá un modal como el siguiente:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Seleccionamos módulo en blanco. Y en la siguiente pantalla, nos pide el bundle, seleccionamos \"page\":"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En la pantalla final, nos pedirá algunos datos, a continuación, se explica que colocar:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Module name: welcome"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Web component name: welcome-page."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Url: \"/welcome\""
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Las páginas y layouts en Beyond se resuelven haciendo uso de Web components. Si quieres saber en detalle cómo funcionan y porqué, dirígete a la sección de Web Components."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Abrimos el objeto Page creado en el módulo y agregaremos un mensaje simple que diga: ¡Bienvenido!"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A continuación, Haremos los ajustes necesarios, para redireccionar a nuestro módulo de bienvenida, luego de iniciar sesión. Lo que debemos hacer a continuación, es importar el objeto \"routing\" de Beyond, para usar el método pushState que provee y navegar a la página de Bienvenida."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Importación"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import { routing } from '@beyond-js/kernel/routing';`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Navegación"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `routing.pushState('/welcome');`
              }), "\n", (0, _jsxRuntime.jsx)("div", {
                className: "block__note",
                children: (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["BeyondJS provee un objeto routing para interactuar con la api de navegación, puedes aprender más al respecto en la\r\nsección de ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/routing",
                    children: "Enrutamiento."
                  })]
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ahora sólo debemos refrescar la página del formulario para que BeyondJS registre la ruta nueva creada y Si volvemos a probar nuestro formulario, podremos iniciar sesión y ver cómo nos dirigimos a la página de bienvenida."
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
        hash: 1538364934,
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
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Antes de Empezar"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Este tutorial busca el flujo principal de desarrollo con ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "BeyondJS"
                  }), " y demostrar de manera clara los beneficios que este\r\nofrece. El propósito de este tutorial es que los usuarios/programadores puedan aprender mientras practican, por tanto, los\r\nconceptos que definen la estructura de ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "BeyondJS"
                  }), " son abordados de forma general, focalizando en hacer un ejercicio rápido,\r\nconciso y claro. Para mayor entendimiento de los algunos conceptos, es necesario acceder a las secciones correspondientes\r\nen la documentación."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El tutorial se divide de la siguiente forma:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Instalar BeyondJS y crear paquete."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Workspace."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Creación de primer módulo."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Integración con el backend."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Navegación."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Sugerimos que este sea completado, para demostrar cómo en poco tiempo logras integrar código de cliente y servidor, utilizando la misma estructura JavaScript."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Antes de empezar, recomendamos la revisión de los siguientes conceptos para que los tengas presente a medida que avanzas"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Bundle"
                }), ": Representa un conjunto de archivos fuentes que generan un único archivo final, el cual es incluido en el navegador.\r\n", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Module"
                }), ": Representa uno o múltiples bundles.\r\n", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Processor"
                }), ": Representa el procesador, compilador o transpilador de código de la tecnología que se está utilizando. Empezando Lo primero que debe hacerse es crear el proyecto, para ello usaremos el paquete @beyond-js/create-project se encarga de instalar BeyondJS\r\nde manera local y generar la estructura inicial de nuestro proyecto."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Empezando"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Lo primero que debe hacerse es crear el proyecto, para ello usaremos el paquete ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "@beyond-js/create-project"
                }), " se encarga de instalar BeyondJS de manera local y generar la estructura inicial de nuestro proyecto."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "npx @beyond-js/create-project --name @test/login --type web-backend --container beyond"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["BeyondJS está realizado para funcionar como dependencia global y correr varios proyectos en simultáneo, puedes aprender más sobre esto ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/quick-start",
                  children: "aqui"
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["En el comando anterior, se solicitó crear un proyecto de tipo web con backend y se le agregó como scope ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: " testing"
                }), " y como nombre ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "login"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El scope y el nombre, son datos que permiten identificar el proyecto y que lo dejan listo para ser publicado como paquete npm o para importarlo desde otro proyecto. Estas configuraciones pueden hacerse de forma manual, el BeyondJS Workspace sólo simplifica el proceso. Puedes ver la explicación de ello en ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/project/config",
                  children: "la sección de Configuración de proyecto."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Al finalizar el comando, podemos validar la estructura creada adentro del directorio, es la siguiente:"
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
                      children: "package.json:"
                    }), " Archivo de dependencias del proyecto"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "projects.json:"
                    }), " Archivo de configuración de proyectos, permite a BeyondJS identificar los proyectos a levantar."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "login:"
                    }), " Carpeta del proyecto."]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                        children: [(0, _jsxRuntime.jsx)(_components.strong, {
                          children: "project.json"
                        }), ": Contiene la configuración básica del proyecto (puede variar según el tipo y las necesidades del mismo)."]
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                        children: [(0, _jsxRuntime.jsx)(_components.strong, {
                          children: "/modules:"
                        }), " Carpeta en donde se crean los módulos del proyecto por defecto. Este valor es configurable, puedes leer más de ello en la sección de ", (0, _jsxRuntime.jsx)(_html.Link, {
                          to: "/docs/projects/json",
                          children: "Configuración de Proyectos."
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
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Puedes aprender más acerca de los tipos de proyecto disponibles en la sección de ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/quick-start",
                  children: "Inicio Rápido."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["A continuación, debemos iniciar ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ", para ello ejecutamos el siguiente comando:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "beyond run"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Al ejecutarlo, debe aparecer el siguiente mensaje en la consola de comandos:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.pre, {
                children: (0, _jsxRuntime.jsx)(_components.code, {
                  children: "Follow the link to manage your packages with the workspace:\r\nhttps://workspace.beyondjs.com?port=4000\r\n\n"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["¡Listo! Ya podemos acceder a nuestro proyecto en ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "http://localhost:6500/",
                  children: "http://localhost:6500/"
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Además, puede verse un mensaje que indica que el BeyondJS Workspace está disponible\r\nen ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://workspace.beyondjs.com/",
                  children: "https://workspace.beyondjs.com/"
                }), " lo navegamos y ,\r\npodremos ver la interfaz del BeyondJS Workspace con el board del listado de proyectos."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "Si deseas conocer acerca de todas las funcionalidades que ofrece el BeyondJS Workspace,"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Link, {
                href: "/workspace",
                children: "puedes hacerlo aqui"
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
        hash: 1457803949,
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
                  to: "/docs/deployment",
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
        hash: 321014640,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Universal = exports.TutorialStart = exports.TutorialRouting = exports.TutorialFirstModule = exports.TutorialBridge = exports.TutorialBackend = exports.Steps = exports.QuickStart = exports.PackagesTypes = exports.PackagesPublish = exports.PackagesJson = exports.PackagesDistributions = exports.PackagesCreate = exports.Modular = exports.Intro = exports.DevServer = exports.Cli = exports.BareSpecifiers = void 0;
          var _intro = require("./mdx/starting/intro.mdx");
          var _quickStart = require("./mdx/starting/quick-start.mdx");
          var _cli = require("./mdx/starting/cli.mdx");
          var _bareSpecifiers = require("./mdx/foundations/bare-specifiers.mdx");
          var _modular = require("./mdx/foundations/modular.mdx");
          var _universal = require("./mdx/foundations/universal.mdx");
          var _devServer = require("./mdx/foundations/dev-server.mdx");
          var _start = require("./mdx/tutorial/start.mdx");
          var _backend = require("./mdx/tutorial/backend.mdx");
          var _bridge = require("./mdx/tutorial/bridge.mdx");
          var _routing = require("./mdx/tutorial/routing.mdx");
          var _firstModule = require("./mdx/tutorial/first-module.mdx");
          var _steps = require("./mdx/steps.mdx");
          var _creation = require("./mdx/packages/creation.mdx");
          var _types = require("./mdx/packages/types.mdx");
          var _distributions = require("./mdx/packages/distributions.mdx");
          var _json = require("./mdx/packages/json.mdx");
          var _publish = require("./mdx/packages/publish.mdx");
          /*bundle */ // import { default as Backend1 } from "./mdx/backend.mdx";

          // import { default as Bee1 } from "./mdx/bee.mdx";
          // import { default as Bundles1 } from "./mdx/bundles.mdx";
          // import { default as Templates1 } from "./mdx/templates.mdx";
          // import { default as WidgetObject1 } from "./mdx/widget-object.mdx";
          // import { default as Processors1 } from "./mdx/processors.mdx";
          // import { default as URI1 } from "./mdx/uri.mdx";
          // import { default as Projects1 } from "./mdx/projects.mdx";

          // Tutorial

          //packages

          // export /*bundle */ const Bee = Bee1;
          // export /*bundle */ const Bundles = Bundles1;
          // export /*bundle */ const Templates = Templates1;
          // export /*bundle */ const Hmr = Hmr1;
          // export /*bundle */ const WidgetObject = WidgetObject1;
          // export /*bundle */ const Processors = Processors1;
          // export /*bundle */ const URI = URI1;
          // export /*bundle */ const Projects = Projects1;
          // export /*bundle*/ const Backend = Backend1;
          // Get strating
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
          const TutorialBridge = _bridge.default;
          exports.TutorialBridge = TutorialBridge;
          /*bundle*/
          const TutorialRouting = _routing.default;
          exports.TutorialRouting = TutorialRouting;
          /*bundle */
          const TutorialFirstModule = _firstModule.default;
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
          // Foundations
          exports.PackagesPublish = PackagesPublish;
          /*bundle*/
          const BareSpecifiers = _bareSpecifiers.default;
          exports.BareSpecifiers = BareSpecifiers;
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
        "from": "TutorialBridge",
        "name": "TutorialBridge"
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
        "from": "BareSpecifiers",
        "name": "BareSpecifiers"
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
        (require || prop === 'Intro') && _export("Intro", Intro = require ? require('./index').Intro : value);
        (require || prop === 'Cli') && _export("Cli", Cli = require ? require('./index').Cli : value);
        (require || prop === 'QuickStart') && _export("QuickStart", QuickStart = require ? require('./index').QuickStart : value);
        (require || prop === 'TutorialStart') && _export("TutorialStart", TutorialStart = require ? require('./index').TutorialStart : value);
        (require || prop === 'TutorialBackend') && _export("TutorialBackend", TutorialBackend = require ? require('./index').TutorialBackend : value);
        (require || prop === 'TutorialBridge') && _export("TutorialBridge", TutorialBridge = require ? require('./index').TutorialBridge : value);
        (require || prop === 'TutorialRouting') && _export("TutorialRouting", TutorialRouting = require ? require('./index').TutorialRouting : value);
        (require || prop === 'TutorialFirstModule') && _export("TutorialFirstModule", TutorialFirstModule = require ? require('./index').TutorialFirstModule : value);
        (require || prop === 'PackagesCreate') && _export("PackagesCreate", PackagesCreate = require ? require('./index').PackagesCreate : value);
        (require || prop === 'PackagesTypes') && _export("PackagesTypes", PackagesTypes = require ? require('./index').PackagesTypes : value);
        (require || prop === 'PackagesDistributions') && _export("PackagesDistributions", PackagesDistributions = require ? require('./index').PackagesDistributions : value);
        (require || prop === 'PackagesJson') && _export("PackagesJson", PackagesJson = require ? require('./index').PackagesJson : value);
        (require || prop === 'PackagesPublish') && _export("PackagesPublish", PackagesPublish = require ? require('./index').PackagesPublish : value);
        (require || prop === 'BareSpecifiers') && _export("BareSpecifiers", BareSpecifiers = require ? require('./index').BareSpecifiers : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDNUM7VUFBVyxNQUFNTyxlQUFlLEdBQUdDLGdCQUFTO1VBQUNSO1VBQzdDO1VBQVcsTUFBTVMsY0FBYyxHQUFHQyxlQUFTO1VBQUNWO1VBQzVDO1VBQVcsTUFBTVcsZUFBZSxHQUFHQyxnQkFBUztVQUFDWjtVQUM3QztVQUFZLE1BQU1hLG1CQUFtQixHQUFHQyxvQkFBUztVQUV4RDtVQUFBZDtVQUVPO1VBQVksTUFBTWUsY0FBYyxHQUFHQyxpQkFBZTtVQUFDaEI7VUFDbkQ7VUFBWSxNQUFNaUIsYUFBYSxHQUFHQyxjQUFjO1VBQUNsQjtVQUNqRDtVQUFXLE1BQU1tQixxQkFBcUIsR0FBR0Msc0JBQWM7VUFBQ3BCO1VBQ3hEO1VBQVksTUFBTXFCLFlBQVksR0FBR0MsYUFBYTtVQUFDdEI7VUFDL0M7VUFBWSxNQUFNdUIsZUFBZSxHQUFHQyxnQkFBZ0I7VUFFM0Q7VUFBQXhCO1VBQ087VUFBVyxNQUFNeUIsY0FBYyxHQUFHQyx1QkFBYztVQUFDMUI7VUFDakQ7VUFBVyxNQUFNMkIsT0FBTyxHQUFHQyxnQkFBUTtVQUFDNUI7VUFDcEM7VUFBVyxNQUFNNkIsU0FBUyxHQUFHQyxrQkFBVTtVQUFDOUI7VUFDeEM7VUFBVyxNQUFNK0IsU0FBUyxHQUFHQyxrQkFBVTtVQUFDaEM7VUFDeEM7VUFBVyxNQUFNaUMsS0FBSyxHQUFHQyxjQUFNO1VBQUNsQyIsIm5hbWVzIjpbInVzZXJJZCIsImNvbnRlbnQiLCJJbnRybyIsIkludHJvMSIsImV4cG9ydHMiLCJDbGkiLCJDTEkxIiwiUXVpY2tTdGFydCIsIlF1aWNrU3RhcnQxIiwiVHV0b3JpYWxTdGFydCIsIlR1dG9yaWFsMSIsIlR1dG9yaWFsQmFja2VuZCIsIlR1dG9yaWFsMiIsIlR1dG9yaWFsQnJpZGdlIiwiVHV0b3JpYWwzIiwiVHV0b3JpYWxSb3V0aW5nIiwiVHV0b3JpYWw0IiwiVHV0b3JpYWxGaXJzdE1vZHVsZSIsIlR1dG9yaWFsNSIsIlBhY2thZ2VzQ3JlYXRlIiwiUGFja2FnZXNDcmVhdGUxIiwiUGFja2FnZXNUeXBlcyIsIlBBY2thZ2VzVHlwZXMxIiwiUGFja2FnZXNEaXN0cmlidXRpb25zIiwiRGlzdHJpYnV0aW9uczEiLCJQYWNrYWdlc0pzb24iLCJQYWNrYWdlc0pzb24xIiwiUGFja2FnZXNQdWJsaXNoIiwiUGFja2FnZXNQdWJsaXNoMSIsIkJhcmVTcGVjaWZpZXJzIiwiQmFyZVNwZWNpZmllcjEiLCJNb2R1bGFyIiwiTW9kdWxhcjEiLCJVbml2ZXJzYWwiLCJVbml2ZXJzYWwxIiwiRGV2U2VydmVyIiwiRGV2U2VydmVyMSIsIlN0ZXBzIiwiU3RlcHMxIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJtZHgvYmFja2VuZC9tZHhcXGJhY2tlbmRcXGJlZS5tZHgiLCJtZHgvYmFja2VuZC9tZHhcXGJhY2tlbmRcXGRldmVsb3BtZW50LXNlcnZlci5tZHgiLCJtZHgvY2xpL21keFxcY2xpXFxtb2R1bGUubWR4IiwibWR4L2NsaS9tZHhcXGNsaVxccGFja2FnZS5tZHgiLCJtZHgvZGVwZW5kZW5jaWVzL21keFxcZGVwZW5kZW5jaWVzXFxpbmRleC5tZHgiLCJtZHgvZm91bmRhdGlvbnMvbWR4XFxmb3VuZGF0aW9uc1xcYmFyZS1zcGVjaWZpZXJzLm1keCIsIm1keC9mb3VuZGF0aW9ucy9tZHhcXGZvdW5kYXRpb25zXFxkZXYtc2VydmVyLm1keCIsIm1keC9mb3VuZGF0aW9ucy9tZHhcXGZvdW5kYXRpb25zXFxnbG9zYXJ5Lm1keCIsIm1keC9mb3VuZGF0aW9ucy9tZHhcXGZvdW5kYXRpb25zXFxobXIubWR4IiwibWR4L2ZvdW5kYXRpb25zL21keFxcZm91bmRhdGlvbnNcXG1vZHVsYXIubWR4IiwibWR4L2ZvdW5kYXRpb25zL21keFxcZm91bmRhdGlvbnNcXHVuaXZlcnNhbC5tZHgiLCJtZHgvZnJvbnRlbmQvbWR4XFxmcm9udGVuZFxcY29udHJvbGxlci1vYmplY3QubWR4IiwibWR4L2Zyb250ZW5kL21keFxcZnJvbnRlbmRcXGxheW91dC5tZHgiLCJtZHgvZnJvbnRlbmQvcm91dGluZy9tZHhcXGZyb250ZW5kXFxyb3V0aW5nXFxyb3V0aW5nLm1keCIsIm1keC9mcm9udGVuZC9yb3V0aW5nL21keFxcZnJvbnRlbmRcXHJvdXRpbmdcXHVyaS5tZHgiLCJtZHgvZnJvbnRlbmQvc3R5bGVzL21keFxcZnJvbnRlbmRcXHN0eWxlc1xcbGlnaHQtZGFyay10aGVtZS5tZHgiLCJtZHgvZnJvbnRlbmQvc3R5bGVzL21keFxcZnJvbnRlbmRcXHN0eWxlc1xcc3RhdGUtbWFuYWdlbWVudC5tZHgiLCJtZHgvZnJvbnRlbmQvc3R5bGVzL21keFxcZnJvbnRlbmRcXHN0eWxlc1xcc3R5bGVzLWltcG9ydGF0aW9uLm1keCIsIm1keC9mcm9udGVuZC9zdHlsZXMvbWR4XFxmcm9udGVuZFxcc3R5bGVzXFxzdHlsZXMtbW9kdWxlLm1keCIsIm1keC9mcm9udGVuZC9zdHlsZXMvbWR4XFxmcm9udGVuZFxcc3R5bGVzXFxzdHlsZXMubWR4IiwibWR4L2Zyb250ZW5kL3RlbXBsYXRlL21keFxcZnJvbnRlbmRcXHRlbXBsYXRlXFx0ZW1wbGF0ZS1zeXN0ZW0ubWR4IiwibWR4L2Zyb250ZW5kL3RlbXBsYXRlL21keFxcZnJvbnRlbmRcXHRlbXBsYXRlXFx0ZW1wbGF0ZXMubWR4IiwibWR4L2Zyb250ZW5kL3dpZGdldHMvbWR4XFxmcm9udGVuZFxcd2lkZ2V0c1xcd2lkZ2V0LWNyZWF0aW9uLm1keCIsIm1keC9mcm9udGVuZC93aWRnZXRzL21keFxcZnJvbnRlbmRcXHdpZGdldHNcXHdpZGdldC1vYmplY3QubWR4IiwibWR4L2Zyb250ZW5kL3dpZGdldHMvbWR4XFxmcm9udGVuZFxcd2lkZ2V0c1xcd2lkZ2V0cy1wYWdlLm1keCIsIm1keC9mcm9udGVuZC93aWRnZXRzL21keFxcZnJvbnRlbmRcXHdpZGdldHNcXHdpZGdldHMubWR4IiwibWR4L21vZHVsZXMvbWR4XFxtb2R1bGVzXFxidW5kbGVzLm1keCIsIm1keC9tb2R1bGVzL21keFxcbW9kdWxlc1xcY3JlYXRlLWEtbW9kdWxlLm1keCIsIm1keC9tb2R1bGVzL21keFxcbW9kdWxlc1xcbW9kdWxlLWNvbmZpZy5tZHgiLCJtZHgvbW9kdWxlcy9tZHhcXG1vZHVsZXNcXG1vZHVsZXMubWR4IiwibWR4L21vZHVsZXMvbWR4XFxtb2R1bGVzXFxwcm9jZXNzb3JzLm1keCIsIm1keC9wYWNrYWdlcy9tZHhcXHBhY2thZ2VzXFxjcmVhdGlvbi5tZHgiLCJtZHgvcGFja2FnZXMvbWR4XFxwYWNrYWdlc1xcZGlzdHJpYnV0aW9ucy5tZHgiLCJtZHgvcGFja2FnZXMvbWR4XFxwYWNrYWdlc1xcaW1wb3J0Lm1keCIsIm1keC9wYWNrYWdlcy9tZHhcXHBhY2thZ2VzXFxqc29uLm1keCIsIm1keC9wYWNrYWdlcy9tZHhcXHBhY2thZ2VzXFxwdWJsaXNoLm1keCIsIm1keC9wYWNrYWdlcy9tZHhcXHBhY2thZ2VzXFx0eXBlcy5tZHgiLCJtZHgvc3RhcnRpbmcvbWR4XFxzdGFydGluZ1xcY2xpLm1keCIsIm1keC9zdGFydGluZy9tZHhcXHN0YXJ0aW5nXFxpbnRyby5tZHgiLCJtZHgvc3RhcnRpbmcvbWR4XFxzdGFydGluZ1xccXVpY2stc3RhcnQubWR4IiwibWR4L21keFxcc3RlcHMubWR4IiwibWR4L3R1dG9yaWFsL21keFxcdHV0b3JpYWxcXGJhY2tlbmQubWR4IiwibWR4L3R1dG9yaWFsL21keFxcdHV0b3JpYWxcXGJyaWRnZS5tZHgiLCJtZHgvdHV0b3JpYWwvbWR4XFx0dXRvcmlhbFxcY3JlYXRlLXByb2plY3QubWR4IiwibWR4L3R1dG9yaWFsL21keFxcdHV0b3JpYWxcXGZpcnN0LW1vZHVsZS5tZHgiLCJtZHgvdHV0b3JpYWwvbWR4XFx0dXRvcmlhbFxccm91dGluZy5tZHgiLCJtZHgvdHV0b3JpYWwvbWR4XFx0dXRvcmlhbFxcc3RhcnQubWR4IiwibWR4L3dvcmtzcGFjZS9tZHhcXHdvcmtzcGFjZVxcd29ya3NwYWNlLm1keCIsImluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19
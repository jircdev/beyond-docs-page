System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0/jsx-runtime", "@beyond/docs@1/components/html", "@beyond/docs@1/code"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Intro, Cli, QuickStart, TutorialStart, BareSpecifiers, Modular, Universal, Distributions, DevServer, __beyond_pkg, hmr;
  _export({
    Intro: void 0,
    Cli: void 0,
    QuickStart: void 0,
    TutorialStart: void 0,
    BareSpecifiers: void 0,
    Modular: void 0,
    Universal: void 0,
    Distributions: void 0,
    DevServer: void 0
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
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.0"], ["swiper", "8.4.5"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
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
      /*****************************************
      INTERNAL MODULE: ./mdx/backend/backend.mdx
      *****************************************/
      ims.set('./mdx/backend/backend.mdx', {
        hash: 2425389162,
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
                Subtitle
              } = _components;
            if (!Subtitle) _missingMdxReference("Subtitle", true);
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
              }), "\n", "\r\n", "\n", (0, _jsxRuntime.jsx)(Subtitle, {
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
                  to: "/dashboard",
                  children: "Dashboard"
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
              }), "\n", (0, _jsxRuntime.jsx)(Subtitle, {
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
          function _missingMdxReference(id, component) {
            throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
          }
        }
      });

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
        hash: 266410751,
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
                children: (0, _jsxRuntime.jsx)(_components.p, {
                  children: "https://nodejs.org/api/esm.html#https-and-http-imports"
                })
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
                  }), " Recibe un arreglo con la lista de proyectos o aplicaciones configuradas para que BeyondJS pueda leerlas y levantarlas. Este archivo, es gestionado por BeyondJS si se hace uso del dashboard."]
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

      /***************************************************
      INTERNAL MODULE: ./mdx/foundations/distributions.mdx
      ***************************************************/

      ims.set('./mdx/foundations/distributions.mdx', {
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
        hash: 219004925,
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
                children: "Si se usa el dashboard para la creación de proyectos, el procesador sass es incluido por defecto en los bundles de tipo code y widget de cualquier tipo."
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
        hash: 395117349,
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
                  to: "/docs/dashboard",
                  children: "Dashboard"
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
        hash: 1004480552,
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
                children: "Creación con el dashboard"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Todos los bundles pueden crearse desde el formulario de creación de módulos en el ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/dashboard",
                  children: "workspace"
                }), " y de este modo, BeyondJS se encarga de generar la estructura de carpetas y los archivos necesarios, incluyendo la definición del Controller y los archivos module.json y .tsconfig."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Cuando los bundles son creados por medio del dashboard, los archivos son generados y módificados por el servicio de desarrollo."
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
        hash: 3358371588,
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
                children: "Los módulos se crean y gestionan por medio de los archivos de configuración module.json, estos pueden ser creados de forma manual o a través de la interfaz del Dashboard."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Creación desde el Dashboard"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para crear un módulo debe haberse creado previamente un proyecto y estar activo en el Dashboard."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La opción de crear proyectos es una funcionalidad disponible cuando un proyecto se encuentra activo en el Dashboard. Para poder verlas, es necesario abrir el proyecto accediendo al board de detalle del mismo."
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

      /***************************************************
      INTERNAL MODULE: ./mdx/packages/create-a-project.mdx
      ***************************************************/

      ims.set('./mdx/packages/create-a-project.mdx', {
        hash: 2806987994,
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
                children: "Gestión de un proyecto"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Los proyectos, al igual que el resto de elementos de BeyondJS, se configuran por medio de objetos en archivos .json. Generalmente, los archivos de configuración de proyectos llevan por nombre ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/projects/json",
                  children: "project.json"
                }), " como convención y permiten una variedad amplia de configuraciones."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los proyectos se pueden configurar de dos formas: por medio de la interfaz del Dashboard y manualmente."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Usando el Dashboard"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para crear un proyecto desde el dashboard, en primer lugar debe asegurarse de que BeyondJS esté ejecutandose en la carpeta donde desee trabajar sus proyectos. Como se explica en la ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/projects/intro",
                  children: "introducción"
                }), ", BeyondJS está hecho para manejar proyectos en simultáneo, por lo que es importante tener presente que el directorio de ejecución puede ser uno donde se deseen agregar \"varios\" proyectos."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Iniciamos BeyondJS:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "beyond run"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Luego accedemos al dashboard el cual estará disponible en ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://workspace.beyondjs.com/",
                  children: "https://workspace.beyondjs.com/"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El dashboard posee tres maneras de acceder al proceso de creación de proyectos"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["En el ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/dashboard#preaside",
                    children: "Preaside"
                  }), " por medio del icono"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["En el ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/dashboard#board",
                    children: "Board"
                  }), " de proyectos, en la parte superior derecha, la opción \"crear proyecto\""]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Cuando no existe ningún proyecto creado, se muestra un mensaje invitando a crearlo como se ve en la imagen de referencia."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Al hacer click en alguna de las opciones mencionadas, se mostrará un modal que permite seleccionar el tipo de proyecto a crear, dando oportunidad de comenzar con un proyecto en blanco o de usar una plantilla creada. Las opciones actuales son:"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Tipos de Proyectos en blanco"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
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
                children: "Luego de la selección del tipo de proyecto, aparece un formulario que solicita el scope y nombre del proyecto, el puerto sobre el cúal correrá, y adicionalmente, un titulo y descripción opcionales. Luego de llenar los datos necesarios, el Dashboard se encarga de crear el proyecto con la estructura de archivos y el proyecto queda disponible para ser accedido en el puerto configurado."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Todos los proyectos tienen dependencias de paquetes npm que pueden opcionalmente ser instalados desde el dashboard. En caso de no haberlo hecho, para que el proyecto funcione es necesario instalar las dependencias manualmente."
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

      /***********************************************
      INTERNAL MODULE: ./mdx/packages/project-json.mdx
      ***********************************************/

      ims.set('./mdx/packages/project-json.mdx', {
        hash: 1938654379,
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
                children: "Project.json"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Propiedades project.json:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "name"
                    }), " string optional: string Es el nombre para identificar el proyecto, sigue el estándar de npm, por tanto, sólo puede contener caracteres seguros para URLs, sin puntos o guiones bajos."]
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
                    }), " optional: Objeto que permite realizar las configuraciones de los entornos de desarrollo, las cuales son definidas por medio de la entrada distributions. Las distribuciones pueden agregarse desde la funcionalidad del dashboard para ello o de forma manual. Para entender cómo funcionan puedes dirigirte a la ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/project/distributions",
                      children: "Sección de distribuciones."
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "libraries"
                    }), " object optional: Define la importación de proyectos a ser usados como librerías en el proyecto definido."]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_components.strong, {
                        children: "imports"
                      }), " string optional: Cada entrada representa un proyecto importado, la importación se hace agregando el scope y nombre del proyecto importado."]
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
        }
      });

      /****************************************************
      INTERNAL MODULE: ./mdx/packages/project-structure.mdx
      ****************************************************/

      ims.set('./mdx/packages/project-structure.mdx', {
        hash: 268576641,
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
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Estructura de un proyecto"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS posee una arquitectura configurable que permite tener estructuras flexibles en los proyectos. Sin embargo, al crear un proyecto por medio del Dashboard o de ´beyond-first-project´, la estructura inicial creada es la siguiente:"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Estructura"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Este comando crea la siguiente estructura:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Un archivo ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/project/json",
                    children: "project.json"
                  }), ", con la configuración del proyecto."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Un archivo ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/beyond/json",
                    children: "beyond.json"
                  }), " que permite gestionar configuraciones para el servidor de desarrollo."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["template/carpeta con la estructura de la plantilla del proyecto. Esta carpeta aplica para los proyectos web y móvil. Puedes leer más en detalle sobre el sistema de plantillas ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/basics/template",
                    children: "aqui."
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La estructura de carpetas puede variar y extenderse según las consideraciones del proyecto."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Gestión de directorios"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS sigue una estructura de directorios basada en mantener una semántica simple y concisa que permita al programador ubicarse a partir de los nombres de carpeta. Sin embargo, el programador puede tener un estandar de estructura que desee seguir, para lo cual se permite hacer cambios en la configuración de directorios."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La ubicación de los módulos de un proyecto, suele estar por convención en la carpeta modules, esto se define en el project.json, en la propiedad module"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
"modules": {
    "path": "modules"
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Al igual que todas las propiedades configurativas de directorios. la propiedad module.path evalúa el valor recibido de forma relativa al directorio en donde se encuentra, dicho en otras palabras, la carpeta modules debe encontrarse, según el ejemplo a la misma altura que el archivo project.json, si esta propiedad se remueve, BeyondJS intentará encontrar los módulos en el directorio raíz del proyecto, el cúal corresponde a el lugar en donde se encuentra el module.json"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
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

      /**************************************************
      INTERNAL MODULE: ./mdx/packages/projects-import.mdx
      **************************************************/

      ims.set('./mdx/packages/projects-import.mdx', {
        hash: 1501105833,
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
                children: "Si los proyectos se crean por medio del Dashboard, el archivo beyond.json se modifica de forma automática."
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

      /*******************************************
      INTERNAL MODULE: ./mdx/packages/projects.mdx
      *******************************************/

      ims.set('./mdx/packages/projects.mdx', {
        hash: 8956999,
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
              children: [(0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.Title, {
                  children: "Proyectos"
                }), ";"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS ofrece una arquitectura enfocada en proveer una forma eficiente de implementar soluciones basadas en microservicios interconectados con otros microservicios en el backend y con aplicativos con estructuras de micro-frontends si hablamos del cliente, esto sin dejar de lado la posibilidad de crear proyectos más sencillos en pocos pasos."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para explicar el concepto, se puede pensar en un servicio que ofrece la gestión de autenticación en aplicaciones. Es natural pensar que pueden existir desarrolladores que requieran consumir el servicio desde un proyecto web, con código cliente y desarrolladores que estén trabajando en el backend y también puedan consumir el servicio para validar la sesión previo a determinada acción."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Desde la óptica de BeyondJS el servicio de Auth puede ser visto como un proyecto que contiene dos distribuciones, una para generar el código cliente y una para generar el código backend, ambas con un único código fuente. El código desplegado de las distribuciones podría disponibilizarse en las dos distribuciones como paquete ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "NPM"
                }), " y quedar disponible para ser usados por cualquier programador en proyectos hechos o no con BeyondJS."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Asimismo, si los proyectos que consumen ´Auth´ son proyectos BeyondJS también podrían importar a ´Auth´ por medio del sistema de importación de módulos de BeyondJS."
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
        hash: 677233489,
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
                }), " inicializa el DevServer de ", (0, _jsxRuntime.jsx)(_html.BeyondName, {}), " y habilita la conexión con\r\nel ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/workspace",
                  children: "BeyondJS Workspace"
                }), ", lo que facilita el proceso de depuración y gestión de paquetes.\r\nEs necesario ejecutarlo para comenzar a trabajar con ", (0, _jsxRuntime.jsx)(_html.BeyondName, {}), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h5, {
                children: "Parametros:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["--workspace: Es opcional. Este parametro define el puerto de conexión websocket para que el\r\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/workspace",
                    children: " Workspace"
                  }), " pueda obtener información acerca de los paquetes disponibles en el DevServer.\r\nsino es pasado, ", (0, _jsxRuntime.jsx)(_html.BeyondName, {}), " tomará por defecto el puerto 4000. A partir de la instalación, sólo es necesario ir a\r\nla carpeta en donde se desee crear el o los proyectos e inicializar BeyondJS desde la línea de comandos de la siguiente\r\nforma:"]
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
                children: ["Permite verificar la versión de ", (0, _jsxRuntime.jsx)(_html.BeyondName, {}), " instalada."]
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
        hash: 1982186323,
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
              h4: "h4",
              ul: "ul",
              li: "li",
              p: "p",
              code: "code",
              strong: "strong",
              blockquote: "blockquote"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Introducción",
                title: "Comienzo rápido"
              }), "\n", (0, _jsxRuntime.jsx)(_components.h4, {
                children: "Prerequisitos"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Node ^14.17.4."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Estar familiarizado con manejadores de dependencias como npm o yarn."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "beyond-first-project"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para empezar, posiblemente la manera más sencilla de arrancar un proyecto en BeyondJS sea por medio del ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "beyond-first-project"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `npx beyond-first-project -name @scope/name [-type node] [-container folderName]`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Opciones del comando:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["name: Permite definir el ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "scope y nombre"
                    }), " del proyecto. Los proyectos, siguen el estándar de ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "NPM"
                    }), ", puedes leer más\r\nsobre ello ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/docs/intro#projects",
                      children: "aquí."
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "type: Permite definir el tipo de proyecto a crear, es opcional, sino se pasa se crea un proyecto de tipo web por defecto.\r\nLos valores aceptados son:"
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "web"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "node"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "backend"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "library"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "web-backend"
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Puedes leer más información sobre los tipos de proyecto ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/projects/types",
                  children: "aquí."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "container: Permite especificar si se desea agregar una carpeta contenedora de proyectos. Recuerde que BeyondJS soporta la posibilidad de manejar múltiples proyectos en simultáneo."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para ejemplificar, se puede imaginar que se necesita crear un proyecto login de tipo ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "node"
                }), ", lo podríamos crear con el siguiente comando:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `npx create-first-project -name @scope/name -type node`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Al finalizar la ejecución del comando, se debió crear la estructura del proyecto y ya estaría listo para ser ejecutado."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para levantar el servidor de desarrollo, se ejecuta el siguiente comando:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `npm start`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["¡Listo! Ya se puede comenzar a programar y probar el proyecto. Se puede acceder al Workspace desde ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://workspace.beyondjs.com/",
                  children: "https://workspace.beyondjs.com/"
                }), " y el proyecto creado se encuentra disponible en ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "http://localhost:6500",
                  children: "http://localhost:6500"
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El Workspace es un sistema que BeyondJS provee para brindar al desarrollador una mejor experiencia de usuario. Puedes leer más sobre el ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/workspace/intro",
                  children: "aqui."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/projects/structure",
                    children: "Estructura de un proyecto"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/modules/intro",
                    children: "Modules"
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Instalación global"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para instalar BeyondJS globalmente, se debe correr el siguiente comando:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `npm i -g beyond `
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `beyond run [--workspace=port]`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Puedes obtener más información sobre el CLI de ", (0, _jsxRuntime.jsx)(_html.BeyondName, {}), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/cli",
                    children: "en esta página"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Si todo sale bien, aparecerá un mensaje diciendo que BeyondJS se está ejecutando y que puedes acceder al Workspace\r\nen ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://workspace.beyondjs.com/",
                  children: "https://workspace.beyondjs.com/"
                }), ", desde donde se podrá crear un\r\nproyecto por medio de la interfaz gráfica del Workspace."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Ya en el Workspace, puedes crear un proyecto desde la interfaz gráfica, puedes ver cómo\r\nhacerlo ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/projects/create",
                  children: "aquí"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/project/create",
                    children: "Crear un proyecto"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/tutorial/web",
                    children: "Tutorial"
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
        hash: 1597210235,
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
                  children: ["El scope y el nombre, son datos que permiten identificar el proyecto y que lo dejan listo para que este pueda ser\r\npublicado como paquete npm o para importarlo desde otro proyecto. Estas configuraciones pueden hacerse de forma\r\nmanual, el dashboard sólo simplifica el proceso. Puedes ver la explicación de ello en\r\n", (0, _jsxRuntime.jsx)(_html.Link, {
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
                children: "En el dashboard, tenemos dos lugares para ver el modulo. Enn el board del proyecto, que lista los módulos\r\nexistentes y en el aside del proyecto que permite navegar los archivos del mismo. Como vemos en la\r\nsiguiente imagen"
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

      /****************************************
      INTERNAL MODULE: ./mdx/tutorial/start.mdx
      ****************************************/

      ims.set('./mdx/tutorial/start.mdx', {
        hash: 2802461690,
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
                children: ["A continuación, debemos iniciar ", (0, _jsxRuntime.jsx)(_html.BeyondName, {}), ", para ello ejecutamos el siguiente comando:"]
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
        hash: 1011840287,
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
                children: "BeyondJS provee un Dashboard integrado, que busca mejorar la experiencia de desarrollo de varias maneras, todas enfocadas en brindar un soporte al programador en tareas diarias que suelen consumir tiempo. Estas tareas abarcan todo el circuito del desarrollo, desde la creación de un proyecto nuevo hasta el despliegue del mismo."
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
                children: "El Dashboard funciona como un marco de trabajo (Workspace) y cada componente que lo integra tiene definido un nombre que permite identificarlo, estos son:"
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
                }), " es un lenguaje tipado y el chequeo de tipos es una tarea pesada. El Dashboard hace uso del compilador de typescript para detectar en tiempo real los errores que pueden existir en el código y suministrar información al programador acerca de ellos en trés niveles distintos:"]
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
                children: "El Dashboard cuenta con un editor de código integrado que puede resultar sumamente útil para acceder a los archivos de forma rápida y corregir errores detectados, trabajar con estilos o con los bridges. Asimismo, tambien cuenta con un Board que permite navegar los proyectos."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Despliegue de proyectos"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El Dashboard genera el código necesario y optimizado para desplegar los proyectos. Puedes leer en detalle el funcionamiento en la sección de ", (0, _jsxRuntime.jsx)(_html.Link, {
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
        hash: 4147580982,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Universal = exports.TutorialStart = exports.QuickStart = exports.Modular = exports.Intro = exports.Distributions = exports.DevServer = exports.Cli = exports.BareSpecifiers = void 0;
          var _intro = require("./mdx/starting/intro.mdx");
          var _quickStart = require("./mdx/starting/quick-start.mdx");
          var _cli = require("./mdx/starting/cli.mdx");
          var _bareSpecifiers = require("./mdx/foundations/bare-specifiers.mdx");
          var _modular = require("./mdx/foundations/modular.mdx");
          var _universal = require("./mdx/foundations/universal.mdx");
          var _devServer = require("./mdx/foundations/dev-server.mdx");
          var _distributions = require("./mdx/foundations/distributions.mdx");
          var _start = require("./mdx/tutorial/start.mdx");
          /*bundle */ // import { default as Backend1 } from "./mdx/backend.mdx";

          // import { default as Bee1 } from "./mdx/bee.mdx";
          // import { default as Bundles1 } from "./mdx/bundles.mdx";
          // import { default as Templates1 } from "./mdx/templates.mdx";
          // import { default as WidgetObject1 } from "./mdx/widget-object.mdx";
          // import { default as Processors1 } from "./mdx/processors.mdx";
          // import { default as URI1 } from "./mdx/uri.mdx";
          // import { default as Projects1 } from "./mdx/projects.mdx";

          // export /*bundle */ const Bee = Bee1;
          // export /*bundle */ const Bundles = Bundles1;
          // export /*bundle */ const Templates = Templates1;
          // export /*bundle */ const Hmr = Hmr1;
          // export /*bundle */ const WidgetObject = WidgetObject1;
          // export /*bundle */ const Processors = Processors1;
          // export /*bundle */ const URI = URI1;
          // export /*bundle */ const Projects = Projects1;
          // export /*bundle*/ const Backend = Backend1;
          //Get strating
          const Intro = _intro.default;
          exports.Intro = Intro;
          /*bundle */
          const Cli = _cli.default;
          exports.Cli = Cli;
          /*bundle */
          const QuickStart = _quickStart.default;
          // tutorial
          exports.QuickStart = QuickStart;
          /*bundle */
          const TutorialStart = _start.default;
          // Foundations
          exports.TutorialStart = TutorialStart;
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
          const Distributions = _distributions.default;
          exports.Distributions = Distributions;
          /*bundle*/
          const DevServer = _devServer.default;
          exports.DevServer = DevServer;
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
        "from": "Distributions",
        "name": "Distributions"
      }, {
        "im": "./index",
        "from": "DevServer",
        "name": "DevServer"
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
        (require || prop === 'BareSpecifiers') && _export("BareSpecifiers", BareSpecifiers = require ? require('./index').BareSpecifiers : value);
        (require || prop === 'Modular') && _export("Modular", Modular = require ? require('./index').Modular : value);
        (require || prop === 'Universal') && _export("Universal", Universal = require ? require('./index').Universal : value);
        (require || prop === 'Distributions') && _export("Distributions", Distributions = require ? require('./index').Distributions : value);
        (require || prop === 'DevServer') && _export("DevServer", DevServer = require ? require('./index').DevServer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFFSTs7NEJBQ0E7OzRCQUNBOzs0QkFDQTs7OzBCQUVNOzs7NEJBRVI7b0JBQVk7Ozs7OEJBRVI7c0JBQXVCOzs7OEJBQ3ZCO3NCQUFlOzs7OEJBQ2Y7c0JBQWU7OzswQkFFckI7OzBCQUVBOzswQkFFQTs7MEJBRVU7OzBCQUVWOzswQkFFVTs7MkJBRVY7OzRCQUF5Szs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzVDeks7VUFDQTtVQUNBO1VBVUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVBO1VBYU8sWUFoQ1A7O1VBSUE7VUFDQTtVQUNBO1VBRUE7VUFDQTtVQUNBO1VBQ0E7O1VBVUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRUE7VUFDbUIsTUFBTUMsS0FBSyxHQUFHQyxjQUFNO1VBQUNDO1VBQ2pDO1VBQVksTUFBTUMsR0FBRyxHQUFHQyxZQUFJO1VBQUNGO1VBQzdCO1VBQVksTUFBTUcsVUFBVSxHQUFHQyxtQkFBVztVQUNqRDtVQUFBSjtVQUNPO1VBQVksTUFBTUssYUFBYSxHQUFHQyxjQUFTO1VBRWxEO1VBQUFOO1VBQ087VUFBVyxNQUFNTyxjQUFjLEdBQUdDLHVCQUFjO1VBQUNSO1VBQ2pEO1VBQVcsTUFBTVMsT0FBTyxHQUFHQyxnQkFBUTtVQUFDVjtVQUNwQztVQUFXLE1BQU1XLFNBQVMsR0FBR0Msa0JBQVU7VUFBQ1o7VUFDeEM7VUFBVyxNQUFNYSxhQUFhLEdBQUdDLHNCQUFjO1VBQUNkO1VBQ2hEO1VBQVcsTUFBTWUsU0FBUyxHQUFHQyxrQkFBVTtVQUFDaEIiLCJuYW1lcyI6WyJ1c2VySWQiLCJjb250ZW50IiwiSW50cm8iLCJJbnRybzEiLCJleHBvcnRzIiwiQ2xpIiwiQ0xJMSIsIlF1aWNrU3RhcnQiLCJRdWlja1N0YXJ0MSIsIlR1dG9yaWFsU3RhcnQiLCJUdXRvcmlhbDEiLCJCYXJlU3BlY2lmaWVycyIsIkJhcmVTcGVjaWZpZXIxIiwiTW9kdWxhciIsIk1vZHVsYXIxIiwiVW5pdmVyc2FsIiwiVW5pdmVyc2FsMSIsIkRpc3RyaWJ1dGlvbnMiLCJEaXN0cmlidXRpb25zMSIsIkRldlNlcnZlciIsIkRldlNlcnZlcjEiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIm1keC9iYWNrZW5kL21keFxcYmFja2VuZFxcYmFja2VuZC5tZHgiLCJtZHgvYmFja2VuZC9tZHhcXGJhY2tlbmRcXGJlZS5tZHgiLCJtZHgvYmFja2VuZC9tZHhcXGJhY2tlbmRcXGRldmVsb3BtZW50LXNlcnZlci5tZHgiLCJtZHgvZGVwZW5kZW5jaWVzL21keFxcZGVwZW5kZW5jaWVzXFxpbmRleC5tZHgiLCJtZHgvZm91bmRhdGlvbnMvbWR4XFxmb3VuZGF0aW9uc1xcYmFyZS1zcGVjaWZpZXJzLm1keCIsIm1keC9mb3VuZGF0aW9ucy9tZHhcXGZvdW5kYXRpb25zXFxkZXYtc2VydmVyLm1keCIsIm1keC9mb3VuZGF0aW9ucy9tZHhcXGZvdW5kYXRpb25zXFxkaXN0cmlidXRpb25zLm1keCIsIm1keC9mb3VuZGF0aW9ucy9tZHhcXGZvdW5kYXRpb25zXFxnbG9zYXJ5Lm1keCIsIm1keC9mb3VuZGF0aW9ucy9tZHhcXGZvdW5kYXRpb25zXFxobXIubWR4IiwibWR4L2ZvdW5kYXRpb25zL21keFxcZm91bmRhdGlvbnNcXG1vZHVsYXIubWR4IiwibWR4L2ZvdW5kYXRpb25zL21keFxcZm91bmRhdGlvbnNcXHVuaXZlcnNhbC5tZHgiLCJtZHgvZnJvbnRlbmQvbWR4XFxmcm9udGVuZFxcY29udHJvbGxlci1vYmplY3QubWR4IiwibWR4L2Zyb250ZW5kL21keFxcZnJvbnRlbmRcXGxheW91dC5tZHgiLCJtZHgvZnJvbnRlbmQvcm91dGluZy9tZHhcXGZyb250ZW5kXFxyb3V0aW5nXFxyb3V0aW5nLm1keCIsIm1keC9mcm9udGVuZC9yb3V0aW5nL21keFxcZnJvbnRlbmRcXHJvdXRpbmdcXHVyaS5tZHgiLCJtZHgvZnJvbnRlbmQvc3R5bGVzL21keFxcZnJvbnRlbmRcXHN0eWxlc1xcbGlnaHQtZGFyay10aGVtZS5tZHgiLCJtZHgvZnJvbnRlbmQvc3R5bGVzL21keFxcZnJvbnRlbmRcXHN0eWxlc1xcc3RhdGUtbWFuYWdlbWVudC5tZHgiLCJtZHgvZnJvbnRlbmQvc3R5bGVzL21keFxcZnJvbnRlbmRcXHN0eWxlc1xcc3R5bGVzLWltcG9ydGF0aW9uLm1keCIsIm1keC9mcm9udGVuZC9zdHlsZXMvbWR4XFxmcm9udGVuZFxcc3R5bGVzXFxzdHlsZXMtbW9kdWxlLm1keCIsIm1keC9mcm9udGVuZC9zdHlsZXMvbWR4XFxmcm9udGVuZFxcc3R5bGVzXFxzdHlsZXMubWR4IiwibWR4L2Zyb250ZW5kL3RlbXBsYXRlL21keFxcZnJvbnRlbmRcXHRlbXBsYXRlXFx0ZW1wbGF0ZS1zeXN0ZW0ubWR4IiwibWR4L2Zyb250ZW5kL3RlbXBsYXRlL21keFxcZnJvbnRlbmRcXHRlbXBsYXRlXFx0ZW1wbGF0ZXMubWR4IiwibWR4L2Zyb250ZW5kL3dpZGdldHMvbWR4XFxmcm9udGVuZFxcd2lkZ2V0c1xcd2lkZ2V0LWNyZWF0aW9uLm1keCIsIm1keC9mcm9udGVuZC93aWRnZXRzL21keFxcZnJvbnRlbmRcXHdpZGdldHNcXHdpZGdldC1vYmplY3QubWR4IiwibWR4L2Zyb250ZW5kL3dpZGdldHMvbWR4XFxmcm9udGVuZFxcd2lkZ2V0c1xcd2lkZ2V0cy1wYWdlLm1keCIsIm1keC9mcm9udGVuZC93aWRnZXRzL21keFxcZnJvbnRlbmRcXHdpZGdldHNcXHdpZGdldHMubWR4IiwibWR4L21vZHVsZXMvbWR4XFxtb2R1bGVzXFxidW5kbGVzLm1keCIsIm1keC9tb2R1bGVzL21keFxcbW9kdWxlc1xcY3JlYXRlLWEtbW9kdWxlLm1keCIsIm1keC9tb2R1bGVzL21keFxcbW9kdWxlc1xcbW9kdWxlLWNvbmZpZy5tZHgiLCJtZHgvbW9kdWxlcy9tZHhcXG1vZHVsZXNcXG1vZHVsZXMubWR4IiwibWR4L21vZHVsZXMvbWR4XFxtb2R1bGVzXFxwcm9jZXNzb3JzLm1keCIsIm1keC9wYWNrYWdlcy9tZHhcXHBhY2thZ2VzXFxjcmVhdGUtYS1wcm9qZWN0Lm1keCIsIm1keC9wYWNrYWdlcy9tZHhcXHBhY2thZ2VzXFxwcm9qZWN0LWpzb24ubWR4IiwibWR4L3BhY2thZ2VzL21keFxccGFja2FnZXNcXHByb2plY3Qtc3RydWN0dXJlLm1keCIsIm1keC9wYWNrYWdlcy9tZHhcXHBhY2thZ2VzXFxwcm9qZWN0cy1pbXBvcnQubWR4IiwibWR4L3BhY2thZ2VzL21keFxccGFja2FnZXNcXHByb2plY3RzLm1keCIsIm1keC9zdGFydGluZy9tZHhcXHN0YXJ0aW5nXFxjbGkubWR4IiwibWR4L3N0YXJ0aW5nL21keFxcc3RhcnRpbmdcXGludHJvLm1keCIsIm1keC9zdGFydGluZy9tZHhcXHN0YXJ0aW5nXFxxdWljay1zdGFydC5tZHgiLCJtZHgvdHV0b3JpYWwvbWR4XFx0dXRvcmlhbFxcY3JlYXRlLXByb2plY3QubWR4IiwibWR4L3R1dG9yaWFsL21keFxcdHV0b3JpYWxcXHN0YXJ0Lm1keCIsIm1keC93b3Jrc3BhY2UvbWR4XFx3b3Jrc3BhY2VcXHdvcmtzcGFjZS5tZHgiLCJpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==
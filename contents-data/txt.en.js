define(["exports"], function (_exports2) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.txt = _exports2.hmr = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/contents-data/txt").package('en');

  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 400004073,
    creator: function (require, exports) {
      exports.txt = {
        "rendering": {
          "intro": {
            "h1": "Renderización de Widgets",
            "p1": "Uno de los factores más relevantes de BeyondJS, es el motor híbrido de renderizado que implementa. En primer lugar, es importante tener presente que las páginas webs son Widgets y el renderizado se efectúa a nivel de widgets. Esto ofrece al desarrollador la versatilidad de poder trabajar con diferentes estrategias de renderizado, incluso en una misma página web.",
            "p2": {
              "t1": "Las páginas y Layouts en BeyondJS son manejados cómo ",
              "l1": "Widgets",
              "t2": ", los cuales son implementados por medio de ",
              "elink2": {
                "href": "https://developer.mozilla.org/es/docs/Web/Web_Components",
                "label": "web components"
              },
              "t3": " con ",
              "elink3": {
                "href": "https://developer.mozilla.org/es/docs/Web/Web_Components/Using_shadow_DOM",
                "label": "shadow DOM"
              },
              "t4": "por tanto, las estrategias de renderizado en BeyondJS son híbridas y siempre requieren de ejecución de código JavaScript en el cliente."
            },
            "p3": "El programador puede entonces, definir para cada widget el tipo de renderización que considere más conveniente. A continuación, se listan las formas de renderización disponibles:",
            "items": [["Server Side Rendering", "/docs/rendering#ssr-rendering"], ["Client Side Rendering", "/docs/rendering#csr-rendering"], ["Static Rendering", "/docs/rendering#sr-rendering"]]
          },
          "ssr": {
            "p1": {
              "t1": "Hoy en día ",
              "elink1": {
                "label": "los rastreadores web interpretan código JavaScript",
                "link": "https://developers.google.com/search/docs/advanced/javascript/javascript-seo-basics"
              },
              "t2": " y pueden entender el contenido que genera. Se recomienda siempre evaluar cuál estrategia es más conveniente en cada caso."
            },
            "p2": "La renderización del lado de Servidor o SSR (por sus siglas en inglés), es una técnica que permite que el contenido de una URL sea parseado en el servidor, generando el código HTML final y devolviendo este al cliente, de esta forma, se evita el procesamiento posterior en el navegador cliente y se acelera la carga del contenido.",
            "p3": {
              "t1": "BeyondJS permite implementar SSR de forma simple, para ello, es necesario que se entienda el ciclo de vida del motor de renderizado de los ",
              "link1": "widgets",
              "t2": " y seguir la lógica asociada a este."
            },
            "p4": "A continuación, se detalla el circuito de renderización de widgets y páginas",
            "items": ["Se realiza la solicitud de la URL al servidor, este retorna el archivo index.html.", "Cuando el cliente recibe el archivo index.html, se dispara una segunda solicitud consultando por la información necesaria para renderizar toda la página, lo cual incluye el código HTML y CSS de los widgets existentes en la página y los layouts.", "Cuando el cliente recibe la información solicitada, se ejecuta el JavaScript para registrar los web components en el documento HTML y cargar todo el contenido de la página.", "En el momento en que se hace la carga del contenido inicial, se dispara la hidratación del contenido. La hidratación representa la capa CSR, que implica disponibilizar en el cliente, todo el código JavaScript utilizado en el servidor para procesar la solicitud, de esta forma el sitio puede empezar a funcionar como una SPA y habilitar las funcionalidades de interacción que puedan existir."],
            "title": "Server-Side Rendering (SSR)"
          },
          "csr": {
            "title": "Client Rendering (CSR)",
            "p1": "El renderizado cliente, es el funcionamiento natural de las SPA. Su ciclo de vida puede plantearse de la siguiente forma:",
            "items": ["Se realiza una solicitud a un servidor o CDN, el cual retorna un index.html con archivos de estilos y JavaScript.", "El navegador interpreta el index.html y solícita al servidor los recursos necesarios para poder finalizar el renderizado del contenido.", "Cuando los recursos son recibidos en el navegador, se ejecuta el proceso de renderizado del contenido HTML final por medio de JavaScript y la página queda disponible para su uso.", "Eventualmente, el cliente consulta APIs que retornan data y vuelven a ser renderizadas en el sitio web actualizando su contenido."]
          },
          "storeSRendering": {
            "title": "Store Server Rendering",
            "p1": "Como se expresa en el ciclo de vida CSR, es común la necesidad de realizar consultas a una API para actualizar la información del sitio por medio de http o web sockets, esto suele requerir la construcción de APIs que retornan la información. BeyondJS maneja la posibilidad de que esta información sea definida en el estado del widget y que se actualice de forma directa desde el servidor sin necesidad de una API adicional.",
            "notice": {
              "text": "You can read more about this topic in the",
              "link": "Handling states"
            },
            "p2": {
              "t1": "Puedes leer más sobre este tópico en la sección de ",
              "l1": "Manejo de estados"
            }
          },
          "sr": {
            "title": "Renderizado estático",
            "p1": "El renderizado estático, como su nombre lo indica, es especialmente útil cuando el contenido no varía y se puede prescindir de la existencia de un servidor que procese las peticiones y basta con un CDN que retorne toda la información.",
            "p2": "BeyondJS permite generar el código estático final en el proceso de deployment. En entorno de desarrollo los archivos siguen siendo servidor por el servidor de desarrollo del framework."
          }
        },
        "rightAside": {
          "title": "On this page"
        },
        "intro": {
          "universal": {
            "title": "What is BeyondJS?",
            "p1": "BeyondJS is a typescript-based meta framework, designed to create projects that work in different JavaScript execution environments, keeping the focus on ensuring a universal development experience for the developer. It does so by remaining agnostic to existing libraries and technologies, seeking to leave a standardized path that allows their integration.",
            "p2": "The factors that ensure a homogeneous development experience, regardless of the environment in which you are working, are:",
            "items": ["HMR in client code and Node code: automatically, without additional configurations. In addition, it provides an API to the developer that allows you to define when and what you want to update.", "Modular development: BeyondJS has a philosophy of generating small bundles that are loaded on-demand, at the exact required moment. It doesn't work with a dependency tree and therefore doesn't require bundle modules like webpack or parcel.", "Distribution management: BeyondJS allows you to define distributions for the development platforms you want to use and manages the availability of the final code based on it."]
          },
          "overview": {
            "title": "Project management",
            "p1": "Projects in BeyondJS have a compatibility approach with NPM, which allows them to be considered as packages that could eventually be published directly in NPM and later on used in any other project, both BeyondJS and external.",
            "p2": "A project is defined by specifying its scope, name, and at least one distribution. The distributions allow identifying the execution environment in which the project is expected to work and some additional data that may be relevant for the compilation and deployment process. Likewise, multiple distributions are able to be  configured simultaneously, giving the developer the flexibility to validate the behavior of their project in different configured ecosystems.",
            "p3": {
              "t1": "The projects contain ",
              "link1": "modules",
              "t2": ". These represent the minimum unit of development in BeyondJS and have the ability to define on which platform they work. Data interpreted by the",
              "link2": "distributions",
              "t3": "  distributions configured in the development environment and when deploying a project."
            },
            "p4": {
              "t1": "If you want to know more about projects and how create it, you can go to the",
              "l1": "Project chapter"
            }
          },
          "features": {
            "title": "Features",
            "p1": "Below, we list some of the most relevant features of BeyondJS.",
            "items": ["<strong>Universal deployment</strong>: Same code, any environment.", "<strong> Modular and on-demand charging</strong>: The code only loads once when required.", "<strong>Dashboard</strong> or a powerful control panel for developers.\n", "Module <strong>Plug & play</strong>.", "<strong>Unique development ecosystem</strong> between <strong>Backend and Frontend</strong>.", "<strong>Real Time</strong>  ready to deploy with web sockets.", "<strong>Automatic integration </strong>with view frameworks like React, Vue, Svelte.", "<strong>Smarter Typescript</strong>: transpiling and type checking, in parallel, for better productivity and performance.", "<strong>HMR</strong>  modular and in the backend code automatically.", "<strong>No dependency tree</strong>  BeyondJS works under a different paradigm than the one used by bundle modules like webpack.", "<strong>Jamstack + SSR.</strong>", "Standardized integration with NPM, ready to publish.", "<strong>Execution environment</strong> for services managed by <span class=\"beyond\">BeyondJS.</span>", "Web Components integrados.", "<strong>Multilanguage</strong> managed through bundles.", "Management of templates and overwriting."]
          }
        },
        "quickStart": {}
      };
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.txt = require('./txt').txt;
  };

  let txt; // Module exports

  _exports2.txt = txt;

  __pkg.exports.process = function (require) {
    _exports2.txt = txt = require('./txt').txt;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});
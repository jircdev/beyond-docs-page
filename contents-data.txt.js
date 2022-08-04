define(["exports", "module", "@beyond-js/kernel/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/contents-data",
    "multibundle": true,
    "bundle": "txt"
  }, __url).package('es');

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 3871404249,
    creator: function (require, exports) {
      exports.txt = {
        "rightAside": {
          "title": "En esta página"
        }
      };
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./txt",
    "from": "txt",
    "name": "txt"
  }];
  let txt; // Module exports

  _exports.txt = txt;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'txt') && (_exports.txt = txt = require ? require('./txt').txt : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});define(["exports", "module", "@beyond-js/kernel/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/contents-data",
    "multibundle": true,
    "bundle": "txt"
  }, __url).package('en');

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 2889001197,
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
        "quickStart": {},
        "rightAside": {
          "title": "On this page"
        }
      };
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./txt",
    "from": "txt",
    "name": "txt"
  }];
  let txt; // Module exports

  _exports.txt = txt;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'txt') && (_exports.txt = txt = require ? require('./txt').txt : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
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
    "module": "@beyond/docs/docs/basic/widgets/rendering",
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
    hash: 2890601519,
    creator: function (require, exports) {
      exports.txt = {
        "intro": {
          "h1#widgets": ["Widgets", "Rendering"],
          "p1": "One of the most relevant factors of BeyondJS is the hybrid rendering engine that it implements. First of all, is important to keep in mind that web pages are Widgets and rendering done at the widget level. It enables the developer the versatility of being able to work with different rendering strategies, even on the same web page.",
          "p2": {
            "s1": "Pages and Layouts in BeyondJS are handled as ",
            "l1": ["/docs/widgets", "Widgets"],
            "s2": ", which are implemented employing ",
            "e2": ["https://developer.mozilla.org/en-US/docs/Web/Web_Components", "web components"],
            "s3": " with ",
            "e3": ["https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM", "shadow DOM"],
            "s4": ", therefore rendering strategies in BeyondJS are hybrid and always require the execution of JavaScript code on the client."
          },
          "p3": "The developer can then define, for each widget, the most convenient type of rendering considered. The available rendering forms are listed below:\n",
          "items1": [{
            "l1": ["#ssr-rendering", "Server Side Rendering"]
          }, {
            "l2": ["#csr-rendering", "Client Side Rendering"]
          }, {
            "l3": ["#sr-rendering", "Static Rendering"]
          }]
        },
        "ssr": {
          "h2#ssr": "Server Side Rendering <small>(SSR)</small>",
          "p1": {
            "s1": "Nowadays ",
            "e1": ["https://developers.google.com/search/docs/advanced/javascript/javascript-seo-basics", "web crawlers interpret JavaScript code"],
            "s2": " and can understand the content it generates. We always recommended evaluating which strategy is more convenient in each case."
          },
          "p2": "Server-side rendering, or SSR (for its acronym), is a technique that allows the content of a URL to be parsed on the server, generating the final HTML code and returning it to the client, thus avoiding post-processing in the client browser and speeding up content loading.",
          "p3": {
            "s1": "BeyondJS enables the simple implementation of SSR. For this, it is necessary to understand the life cycle of the",
            "l1": ["/docs/widgets", "widgets"],
            "s2": "rendering engine and follow the logic associated with it."
          },
          "p4": "\nDown below is a detail of the circuit for rendering widgets and pages:",
          "items1": ["The URL request is made to the server, and returns the <span className=\"inline\">index.html</span> file.", "When the client receives the index.html file, a second request is triggered, querying for the information necessary to render the entire page, including  the HTML and CSS code of the existing widgets on the page and the layouts.", "When the client receives the requested information, JavaScript is executed to register the web components in the HTML document and load all the content on the page.", "At the moment, when the initial content is loaded, the content <i>hydration</i> is triggered. Hydration represents the CSR layer, which implies making available to the client all the JavaScript code used on the server to process the request. By this the site can begin to function as a SPA and enable the interaction functionalities that may exist."]
        },
        "csr": {
          "h2#csr": "Client Rendering (CSR)",
          "p1": "Client rendering is the natural functioning of SPAs. Its lifecycle can be considered as follows:",
          "items2": ["A request is made to a server or CDN, which returns an index.html with style files and JavaScript.", "The browser interprets the index.html and asks the server for the necessary resources to finish rendering the content.", "When the resources are received in the browser, the rendering process of the final HTML content is executed through JavaScript, and the page is available for use.", "Eventually, the client consults APIs that return data and are rendered again on the website, updating its content."],
          "h3": "Store Server Rendering",
          "p4": "As expressed in the CSR lifecycle, it is a common need to make queries to an API to update the information of the site through http or web sockets. This usually requires the construction of APIs that return the information. BeyondJS handles the possibility that this information is defined in the widget state, and that it’s updated directly from the server, without the need for an additional API.\n",
          "p5": {
            "s1": "You can read more about this topic in the ",
            "l1": ["/docs/state/management", "Handling states"]
          }
        },
        "sr": {
          "h2#sr": "Static rendering",
          "p1": "Static rendering, as its name indicates, is especially useful when the content does not vary and the existence of a server that processes the requests can be dispensed with a CDN that returns all the information is enough.",
          "p2": "BeyondJS allows you to generate the final static code in the deployment process. In a  development environment, the files are still served by the development server of the framework."
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
    "module": "@beyond/docs/docs/basic/widgets/rendering",
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
    hash: 1962711428,
    creator: function (require, exports) {
      exports.txt = {
        "intro": {
          "h1": ["Widgets", "Renderización"],
          "p1": "Uno de los factores más relevantes de BeyondJS, es el motor híbrido de renderizado que implementa. En primer lugar, es importante tener presente que las páginas webs son Widgets y el renderizado se efectúa a nivel de widgets. Esto ofrece al desarrollador la versatilidad de poder trabajar con diferentes estrategias de renderizado, incluso en una misma página web.",
          "p2": {
            "s1": "Las páginas y Layouts en BeyondJS son manejados cómo ",
            "l1": "Widgets",
            "s2": ", los cuales son implementados por medio de ",
            "e2": ["https://developer.mozilla.org/es/docs/Web/Web_Components", "web components"],
            "s3": " con ",
            "e3": ["https://developer.mozilla.org/es/docs/Web/Web_Components/Using_shadow_DOM", "shadow DOM"],
            "s4": "por tanto, las estrategias de renderizado en BeyondJS son híbridas y siempre requieren de ejecución de código JavaScript en el cliente."
          },
          "p3": "El programador puede entonces, definir para cada widget el tipo de renderización que considere más conveniente. A continuación, se listan las formas de renderización disponibles:",
          "items": [{
            "l1": ["#ssr-rendering", "Server Side Rendering"]
          }, {
            "l2": ["#csr-rendering", "Client Side Rendering"]
          }, {
            "l3": ["#sr-rendering", "Static Rendering"]
          }]
        },
        "ssr": {
          "h2#ssr": "Server-Side Rendering (SSR)",
          "p1": {
            "s1": "Hoy en día ",
            "e1": ["https://developers.google.com/search/docs/advanced/javascript/javascript-seo-basics", "los rastreadores web interpretan código JavaScript"],
            "s2": " y pueden entender el contenido que genera. Se recomienda siempre evaluar cuál estrategia es más conveniente en cada caso."
          },
          "p2": "La renderización del lado de Servidor o SSR (por sus siglas en inglés), es una técnica que permite que el contenido de una URL sea parseado en el servidor, generando el código HTML final y devolviendo este al cliente, de esta forma, se evita el procesamiento posterior en el navegador cliente y se acelera la carga del contenido.",
          "p3": {
            "s1": "BeyondJS permite implementar SSR de forma simple, para ello, es necesario que se entienda el ciclo de vida del motor de renderizado de los ",
            "l1": ["/docs/widgets", "widgets"],
            "s2": " y seguir la lógica asociada a este."
          },
          "p4": "A continuación, se detalla el circuito de renderización de widgets y páginas",
          "items1": ["Se realiza la solicitud de la URL al servidor, este retorna el archivo <span class=\"inline\">index.html</span>.", "Cuando el cliente recibe el archivo index.html, se dispara una segunda solicitud consultando por la información necesaria para renderizar toda la página, lo cual incluye el código HTML y CSS de los widgets existentes en la página y los layouts.", "Cuando el cliente recibe la información solicitada, se ejecuta el JavaScript para registrar los web components en el documento HTML y cargar todo el contenido de la página.", "En el momento en que se hace la carga del contenido inicial, se dispara la <i>hidratación</i> del contenido. La hidratación representa la capa CSR, que implica disponibilizar en el cliente, todo el código JavaScript utilizado en el servidor para procesar la solicitud, de esta forma el sitio puede empezar a funcionar como una SPA y habilitar las funcionalidades de interacción que puedan existir."]
        },
        "csr": {
          "h2#csr": "Client Rendering (CSR)",
          "p1": "El renderizado cliente, es el funcionamiento natural de las SPA. Su ciclo de vida puede plantearse de la siguiente forma:",
          "items": ["Se realiza una solicitud a un servidor o CDN, el cual retorna un index.html con archivos de estilos y JavaScript.", "El navegador interpreta el index.html y solícita al servidor los recursos necesarios para poder finalizar el renderizado del contenido.", "Cuando los recursos son recibidos en el navegador, se ejecuta el proceso de renderizado del contenido HTML final por medio de JavaScript y la página queda disponible para su uso.", "Eventualmente, el cliente consulta APIs que retornan data y vuelven a ser renderizadas en el sitio web actualizando su contenido."],
          "storeRendering": {
            "h3#store-rendering": "Store Server Rendering",
            "p1": "Como se expresa en el ciclo de vida CSR, es común la necesidad de realizar consultas a una API para actualizar la información del sitio por medio de http o web sockets, esto suele requerir la construcción de APIs que retornan la información. BeyondJS maneja la posibilidad de que esta información sea definida en el estado del widget y que se actualice de forma directa desde el servidor sin necesidad de una API adicional.",
            "p2": {
              "s1": "Puedes leer más sobre este tópico en la sección de ",
              "l1": "Manejo de estados"
            }
          }
        },
        "sr": {
          "h2#sr": "Renderizado estático",
          "p1": "El renderizado estático, como su nombre lo indica, es especialmente útil cuando el contenido no varía y se puede prescindir de la existencia de un servidor que procese las peticiones y basta con un CDN que retorne toda la información.",
          "p2": "BeyondJS permite generar el código estático final en el proceso de deployment. En entorno de desarrollo los archivos siguen siendo servidor por el servidor de desarrollo del framework."
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
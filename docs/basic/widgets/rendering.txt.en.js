System.register(["@beyond-js/kernel@0.1.0/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
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
          "vspecifier": "@beyond/docs@1/docs/basic/widgets/rendering",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('en');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
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
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'txt') && _export("txt", txt = require ? require('./txt').txt : value);
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
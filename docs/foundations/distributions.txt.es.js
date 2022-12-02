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
          "vspecifier": "@beyond/docs@1/docs/foundations/distributions",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('es');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 3006170351,
        creator: function (require, exports) {
          exports.txt = {
            "distributions": {
              "h1#distributions": ["Fundamentos", "Distribuciones"],
              "p1": "Las distribuciones representan el entorno de ejecución de un proyecto. Es necesario configurar una distribución por cada entorno en el que se desee trabajar. BeyondJS crea un Entorno de Ejecución de Beyond (BEE) por cada distribución creada. Más adelante se explicará que es exactamente un BEE y las ventajas que ofrece."
            },
            "node": {
              "h2#node": "Node",
              "p1": {
                "s1": "BeyondJS permite realizar proyectos escalables y eficientes con ",
                "l1": ["https://nodejs.org/", "NodeJS"],
                "s2": ", construidos directamente con typescript y buscando mejorar la experiencia de desarrollo, por medio de la integración de HMR."
              },
              "p2": "Para trabajar con node, es necesario crear una distribución de tipo node. A partir de allí, BeyondJS se encargará de levantar el entorno de ejecución (BEE) y dejar disponible todos los modulos del proyecto que esten configurados para las plataformas que manejan node."
            },
            "distribution": {
              "h3#distribution": "Distribución",
              "p1": "La configuración de modulos node en BeyondJS se hace por medio de las distribuciones. El desarrollador configura una distribución",
              "p2": "Como se explica en otras partes de esta documentación, un módulo en BeyondJS es un contenedor de bundles, donde puede existir uno o varios bundles. A su vez, cada uno de estos bundles, contiene un conjunto de modulos internos. Cuando el proyecto BeyondJS hace uso de los BEE(Beyond Execution Environment) sobre lo cual se explicará más adelante, para optimizar los tiempos de desarrollo y ofrecer mejores resultados en la experiencia."
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
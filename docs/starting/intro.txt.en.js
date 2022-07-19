define(["exports", "@beyond-js/kernel/bundle"], function (_exports, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/starting/intro",
    "multibundle": true,
    "bundle": "txt"
  }).package('en');

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 2013583062,
    creator: function (require, exports) {
      exports.txt = {
        "features": {
          "h2#modular": "Diseño Modular",
          "p1": "La arquitectura modular es todo en BeyondJS, permite al programador desarrollar proyectos desacoplados al dividirlos en partes más pequeñas que reciben una configuración mínima y no se ven afectados por el crecimiento del proyecto.\n\n",
          "p2": "La estructura de los módulos se define por medio de los archivos de configuración `module.json`, con una estructura como la siguiente:\n",
          "c1": "modulejson",
          "p3": "Los `module.json` permiten al programador definir los bundles, archivos y tipos de archivos que se incluyen.",
          "q1": {
            "s1": "Puedes aprender más sobre el manejo de módulos en BeyondJS en",
            "l1": ["/docs/modules/introduction", "la sección de Módulos.\n"]
          },
          "h2#dev-server": "Dev Server",
          "p4": "BeyondJS provee el servidor de desarrollo para disponibilizar los bundles a demanda. el browser puede hacer las peticiones de forma normal y Deno soporta los imports HTTP por tanto trabaja de la misma forma y cómo node no soporta los http imports, beyondJS provee un BEE que sirve de proxy para poder interfacear con el servidor de desarrollo y lograr que todos guarden la misma lógica de programación.",
          "q2": {
            "s1": "Puedes aprender más acerca del comportamiento del entorno de desarrollo en ",
            "l1": ["/docs/dev-server", "la sección de DevServer"],
            "s2": "."
          },
          "i1": ["/images/graphs/beyond-js-flow.png", "Beyond dev server flow"],
          "h2#on-demand": "Carga a demanda",
          "p7": " Gracias al diseño modular, que segmenta los proyectos en pequeñas piezas o módulos, estos sólo son cargados cuando son requeridos, lo que permite una carga rápida y eficiente de los proyectos.",
          "p8": "El comportamiento modular funciona igual en entornos de desarrollo y en entornos productivos.",
          "p9": "Es conveniente usar una distribución optimizada para desarrollo y otra para producción, en ambos casos BeyondJS trabajará construyendo los bundles pero los generará en base a la configuración de cada distribución.",
          "h2#distributions": "Distribuciones",
          "p10": "Motivado a algunas incompatbilidades existentes aún en los entornos de ejecución de javascript, BeyondJS permite al programador disponibilizar su código para diversas plataformas  por medio de las distribuciones.",
          "h2#hmr": "Hot Module Replacement (HMR)",
          "p11": " El Hot Module Replacement es una característica esencial hoy en día en el desarrollo, comunmente utilizada en las herramientas de frontEnd. BeyondJS lo tiene habilitado por defecto en el DevServer y sin configuraciones adicionales. Además brinda una API básica al desarrollador que permite definir cuando y que desea actualizarse.",
          "q3": {
            "s1": "Puedes aprender más sobre esto en ",
            "l1": ["/docs/foundations/hmr", " la sección de  HMR"],
            "s2": "."
          }
        },
        "universal": {
          "h1#intro": ["Universal Typescript", "What is BeyondJS?"],
          "cc1": "about",
          "p1": "BeyondJS es un meta-framework de nueva generación, basado en Typescript, diseñado para crear código universal y enfocado en el desarrollo modular de proyectos compatibles con diferentes entornos de ejecución Javascript.",
          "p2": "La arquitectura de BeyondJS permite trabajar de forma eficiente en proyectos grandes o pequeños sin que se afecte la productividad a medida que el proyecto crece, además garantiza al programador una experiencia de desarrollo homogénea.",
          "h2#why": "¿Por qué Modular+Universal?",
          "p3": "Deno, NodeJS y los navegadores modernos como Chrome o Edge, están todos basados en la misma tecnología Javascript.",
          "p4": {
            "s1": "<strong>El mismo motor, pero no las mismas técnicas de programación.</strong>"
          },
          "p5": "El consumo de paquetes en NodeJS se basa en NPM y la carpeta node_modules, Deno directamente consume las dependencias como imports HTTP.\n",
          "p6": "Los browsers modernos cuentan con la capacidad de consumir módulos (ES, SJS o AMD), pero si programas para web, a diferencia de cuando programas para NodeJS o Deno, seguramente estarás utilizando algún empaquetador como webpack, parcel, rollup, esbuild, etc.\n",
          "p7": "Los empaquetadores consumen los paquetes publicados en NPM para generar un archivo final .js, llamado ‘bundle’ que incluye las dependencias como react o vue.\n",
          "p8": "También puedes usar empaquetadores para programar en Deno o NodeJS, algo que se está volviendo popular debido al Isomorfismo o que lo utilizan frameworks como Nest o Next.",
          "p9": "BeyondJS implementa un diseño modular que sigue las mismas reglas para cualquier plataforma. Los proyectos se componen de pequeñas unidades de código denominadas bundles las cuales son empaquetadas por separado y se disponibilizan por medio de un DevServer en entorno de desarrollo y como archivos compilados en entorno productivo."
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
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
    "module": "@beyond/docs/docs/foundations/dev-server",
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
    hash: 4101987486,
    creator: function (require, exports) {
      exports.txt = {
        "h1": ["Foundations", "Servidor de desarrollo"],
        "p1:": "Cuando BeyondJS es ejecutado, levanta un servidor de desarrollo por cada distribución configurada en cada proyecto, pudiendo correrlos de forma simultánea.",
        "p2:": "Si deseas aprender más sobre la configuración de distribuciones, puedes leerlo en la sección de Distribuciones.",
        "p3:": "El devserver es un servidor http, cuya función principal es la de interfacear con el engine para procesar a demanda los bundles de los módulos. Recibe la petición, identifica el módulo solicitado y retorna el bundle empaquetado según su configuración.",
        "p4:": "El devserver es utilizado en desarrollo para trabajar de manera homogénea, a demanda (sólo ir procesando los bundles requeridos) y con HMR en las diferentes distribuciones: (nodejs, deno o el browser).",
        "p5:": "La siguiente es la estructura de funcionamiento posible del entorno de desarrollo de BeyondJS.",
        "i1": ["/images/graphs/beyond-dev-server.png", "BeyondJS Dev server distributions"],
        "p6": "El engine de BeyondJS cuenta con una cache optimizada que guarda el código empaquetado para brindar una respuesta instantánea y que se inválida si el código fuente del bundle es cambiado, generando de forma automática una nueva compilación del empaquetado.",
        "p7": " Veamos el uso del DevServer según la plataforma de ejecución.",
        "h2#web-view": "Web, Android, iOs",
        "p8": "En plataformas web, android e ios el devserver no sólo sirve los bundles, sino que adicionalmente devuelve el index.html cuando la url requerida no encuentra un recurso (bundle o archivo estático).",
        "h2#deno": "Deno",
        "p9": "Deno soporta HTTP ES imports de manera nativa y estable.",
        "p10": "BeyondJS genera los import maps para resolver los bundles del proyecto. De esta forma, cuando se requiera un bundle registrado en el proyecto, Deno lo cargará apuntando al devserver.",
        "p11": "Puedes trabajar con BeyondJS y Deno para construir una aplicación completa, pero también para crear proyectos librería que contienen módulos que puedes consumir desde cualquier otra aplicación.",
        "p12": "BeyondJS soporta el concepto de bundles transversales como el `start`. Los bundles start se programan en los módulos y su ejecución ocurre en el inicio de la aplicación.",
        "p13": "Si estás construyendo una aplicación completa en DENO, lo habitual sería que cargues el bundle start info sobre bundle start y bundles transversales.",
        "h2#node": "NodeJS",
        "p14": "El objetivo de BeyondJS es ofrecer un entorno de desarrollo typescript universal.",
        "p15": {
          "s1": " A diferencia de Deno, que soporta imports HTTP de manera estable desde sus inicios, NodeJS lo implementa en versiones recientes y aún en ",
          "e1": ["https://nodejs.org/api/esm.html#https-and-http-imports", "fase experimental"],
          "s2": "."
        },
        "p21": "Para brindar una experiencia homogénea, BeyondJS ofrece un entorno de ejecución (BEE: Beyond Execution Environment) específicamente diseñado para ser usado en desarrollo (no en producción) desde NodeJS, encargado de permitir ejecutar una aplicación consumiendo los bundles desde el servidor HTTP y brindando soporte HMR.",
        "p22": "De esta manera, puedes correr una aplicación en NodeJS procesando los bundles a demanda, reduciendo el tiempo requerido para el startup.",
        "p23": "De no ser por los BEEs, deberías compilar la aplicación completa para que NodeJS pueda requerir de manera sincrónica por los bundles.",
        "h2#dockers": "Dockers containers",
        "p25": "Gracias al diseño de consumo de los bundles por medio de HTTP, ejecutar una aplicación en un docker container es tan sencillo como en tu PC local.",
        "p26": "Sólo debes configurar los puertos expuestos por el docker container para que pueda alcanzar las peticiones realizadas al devserver.",
        "h2#electron": "Electron",
        "p31": "Las aplicaciones Electron cuentan con dos entornos de ejecución. El browser para la vista de UI y una instancia de NodeJS que se comunican entre sí.",
        "p32": "Con BeyondJS puedes trabajar en el mismo proyecto ambos entornos.",
        "p33": "Los módulos que especifiquen plataforma “web” estarán disponibles para la vista, y los que especifiquen plataforma “node” lo estarán para ese entorno. Esto permite estructurar tu aplicación de manera ordenada.",
        "p34": "El entorno NodeJS de una aplicación Electron debe correr a través de un BEE para consumir a demanda y con soporte HMR los bundles servidos por el devserver."
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
    "module": "@beyond/docs/docs/foundations/dev-server",
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
    hash: 1420175414,
    creator: function (require, exports) {
      exports.txt = {
        "h1": ["Foundations", "Servidor de desarrollo"],
        "p1:": "Cuando BeyondJS es ejecutado, levanta un servidor de desarrollo por cada distribución configurada en cada proyecto, pudiendo correrlos de forma simultánea.",
        "p2:": "Si deseas aprender más sobre la configuración de distribuciones, puedes leerlo en la sección de Distribuciones.",
        "p3:": "El DevServer es un servidor http, cuya función principal es la de interfacear con el engine para procesar a demanda los bundles de los módulos. Recibe la petición, identifica el módulo solicitado y retorna el bundle empaquetado según su configuración.",
        "p4:": "El DevServer es utilizado en desarrollo para trabajar de manera homogénea, a demanda (sólo ir procesando los bundles requeridos) y con HMR en las diferentes distribuciones: (nodejs, deno o el browser).",
        "p5:": "La siguiente es la estructura de funcionamiento posible del entorno de desarrollo de BeyondJS.",
        "i1": ["/images/graphs/beyond-dev-server.png", "BeyondJS Dev server distributions"],
        "p6": "El engine de BeyondJS cuenta con una cache optimizada que guarda el código empaquetado para brindar una respuesta instantánea y que se inválida si el código fuente del bundle es cambiado, generando de forma automática una nueva compilación del empaquetado.",
        "p7": " Veamos el uso del DevServer según la plataforma de ejecución.",
        "h2#web-view": "Web, Android, iOs",
        "p8": "En plataformas web, android e ios el DevServer no sólo sirve los bundles, sino que adicionalmente devuelve el index.html cuando la url requerida no encuentra un recurso (bundle o archivo estático).",
        "h2#deno": "Deno",
        "p9": "Deno soporta HTTP ES imports de manera nativa y estable.",
        "p10": "BeyondJS genera los import maps para resolver los bundles del proyecto. De esta forma, cuando se requiera un bundle registrado en el proyecto, Deno lo cargará apuntando al DevServer.",
        "p11": "Puedes trabajar con BeyondJS y Deno para construir una aplicación completa, pero también para crear proyectos librería que contienen módulos que puedes consumir desde cualquier otra aplicación.",
        "p12": "BeyondJS soporta el concepto de bundles transversales como el `start`. Los bundles start se programan en los módulos y su ejecución ocurre en el inicio de la aplicación.",
        "p13": "Si estás construyendo una aplicación completa en DENO, lo habitual sería que cargues el bundle start info sobre bundle start y bundles transversales.",
        "h2#node": "NodeJS",
        "p14": "El objetivo de BeyondJS es ofrecer un entorno de desarrollo typescript universal.",
        "p15": {
          "s1": " A diferencia de Deno, que soporta imports HTTP de manera estable desde sus inicios, NodeJS lo implementa en versiones recientes y aún en ",
          "e1": ["https://nodejs.org/api/esm.html#https-and-http-imports", "fase experimental"],
          "s2": "."
        },
        "p21": "Para brindar una experiencia homogénea, BeyondJS ofrece un entorno de ejecución (BEE: Beyond Execution Environment) específicamente diseñado para ser usado en desarrollo (no en producción) desde NodeJS, encargado de permitir ejecutar una aplicación consumiendo los bundles desde el servidor HTTP y brindando soporte HMR.",
        "p22": "De esta manera, puedes correr una aplicación en NodeJS procesando los bundles a demanda, reduciendo el tiempo requerido para el startup.",
        "p23": "De no ser por los BEEs, deberías compilar la aplicación completa para que NodeJS pueda requerir de manera sincrónica por los bundles.",
        "h2#dockers": "Dockers containers",
        "p25": "Gracias al diseño de consumo de los bundles por medio de HTTP, ejecutar una aplicación en un docker container es tan sencillo como en tu PC local.",
        "p26": "Sólo debes configurar los puertos expuestos por el docker container para que pueda alcanzar las peticiones realizadas al DevServer.",
        "h2#electron": "Electron",
        "p31": "Las aplicaciones Electron cuentan con dos entornos de ejecución. El browser para la vista de UI y una instancia de NodeJS que se comunican entre sí.",
        "p32": "Con BeyondJS puedes trabajar en el mismo proyecto ambos entornos.",
        "p33": "Los módulos que especifiquen plataforma “web” estarán disponibles para la vista, y los que especifiquen plataforma “node” lo estarán para ese entorno. Esto permite estructurar tu aplicación de manera ordenada.",
        "p34": "El entorno NodeJS de una aplicación Electron debe correr a través de un BEE para consumir a demanda y con soporte HMR los bundles servidos por el DevServer."
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
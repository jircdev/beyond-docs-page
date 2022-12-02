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
          "vspecifier": "@beyond/docs@1/docs/starting/dashboard",
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
        hash: 3972027414,
        creator: function (require, exports) {
          exports.txt = {
            "dashboard": {
              "h1#dashboard": "Dashboard",
              "p1": "BeyondJS provee un Dashboard integrado, que busca mejorar la experiencia de desarrollo de varias maneras, todas enfocadas en brindar un soporte al programador en tareas diarias que suelen consumir tiempo. Estas tareas abarcan todo el circuito del desarrollo, desde la creación de un proyecto nuevo hasta el despliegue del mismo.",
              "p2": {
                "s1": "Se encuentra disponible siempre que el servidor de desarrollo se levanta en ",
                "e1": ["http://localhost:4000", "http://localhost:4000"],
                "s2": "y permite realizar la creación de un nuevo proyecto u obtener información relevante del proyecto existente, como se verá más adelante."
              },
              "i1": ["/images/dashboard/empty.png", "BeyondJS Dashboard workspace"]
            },
            "features": {
              "h2#features": "Funcionalidades",
              "items": ["Creación de proyectos en blanco o desde plantillas.", "Creación de módulos.", "Detalle informativo de los proyectos y módulos", "Detección de errores en tiempo real generales en proyectos, módulos, las dependencias y en los módulos consumidores", "Detección de errores de tipado con typescript.", "Detección de errores de runtime.", "Manejo de errores en real time en procesos Nodepor medio de HMR.", "Configuración de entornos de desarrollo.", "Edición de código", "Navegación de proyectos.", "Manejo de dependencias.", "Gestión de archivos estáticos y plantilla del proyecto.", "Gestión de despligue de proyectos."]
            },
            "structure": {
              "h2#structure": "Estructura",
              "i1": ["/images/dashboard/dashboard-structure.png", "BeyondJS Dashboard structure"],
              "p1": "El Dashboard funciona como un marco de trabajo (Workspace) y cada componente que lo integra tiene definido un nombre que permite identificarlo, estos son:",
              "items": ["<strong>PreAside</strong>: Primer panel izquierdo, iconográfico de acceso general de acciones las cuales varian si se tiene o no un proyecto abierto", "<strong>Aside</strong>: Primer panel izquierdo, iconográfico de acceso general de acciones las cuales varian si se tiene o no un proyecto abierto", "<strong>Boards</strong>: Cada panel abierto en la pantalla principal es denominado board, la lista de aplicaciones es un board, el detalle de la aplicación o la pantalla de configuración tambien lo son.", "<strong>Panels</strong>: Cada división de pantalla generada en el workspace"]
            },
            "ts": {
              "h2#integrationWithTypeScript": "Integracion con TypeScript",
              "p1": "<strong>Typescript</strong> es un lenguaje tipado y el chequeo de tipos es una tarea pesada. El Dashboard hace uso del compilador de typescript para detectar en tiempo real los errores que pueden existir en el código y suministrar información al programador acerca de ellos en trés niveles distintos:",
              "i1": ["/images/dashboard/errors.png", "BeyondJS Dashboard structure"],
              "items": ["<strong>Módulo en desarrollo</strong>: El módulo en el cual se está trabajando", "<strong>Dependencias</strong>: Los módulos importados por el módulo en desarrollo.", "<strong>Consumidores</strong>: Los módulos que consumen el módulo sobre el cual estamos trabajando."],
              "p2": "El programador puede acceder a un módulo/bundle y ver los errores existentes en el o en un consumidor o dependencia. Identificar de forma simple el archivo y acceder directamente a la línea donde debe realizar la corrección.",
              "q1": {
                "h3#typescriptTimes": "Tiempos de typescript",
                "s1": "Debido a que los tiempos de análisis del compilador de typescript son extensos cuando hace el chequeo de tipos, BeyondJS implementa una estrategía hibrida que gestiona en simultáneo el chequeo de tipos por medio del compilador y la actualización de archivos con HMR por medio del transpilador, esto ofrece la posibilidad de ver los cambios al momento y recibir la información de errores en paralelo. Es posible que la primera vez que se realice la validacion de tipos de un proyecto, este proceso tome un tiempo extendido el cual luego se minimiza con la gestión de cache que integra BeyondJS"
              }
            },
            "editor": {
              "h2#editorAndBrowserIncluded": "Editor y Navegador incluidos",
              "p1": "El Dashboard cuenta con un editor de código integrado que puede resultar sumamente útil para acceder a los archivos de forma rápida y corregir errores detectados, trabajar con estilos o con los bridges. Asimismo, tambien cuenta con un Board que permite navegar los proyectos.",
              "q1": {
                "s1": "El editor del Dashboard no es un IDE y no pretende reemplazar las funciones de uno."
              },
              "i1": ["/images/dashboard/editor.png", "Beyond Dashboard with editor and iframe navigator"]
            },
            "deploy": {
              "p1": {
                "s1": "El Dashboard genera el código necesario y optimizado para desplegar los proyectos. Puedes leer en detalle el funcionamiento en la sección de",
                "l1": ["/docs/deployment", "Despliegue de proyectos"],
                "s2": "."
              }
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
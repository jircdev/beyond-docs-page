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
          "vspecifier": "@beyond/docs@1/docs/basic/styles",
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
        hash: 850601237,
        creator: function (require, exports) {
          exports.txt = {
            "importOfStyleFiles": {
              "h1": ["Estilos", "Importación de archivos"],
              "h2": "Node Modules",
              "p1": "Si se requiere incluir un archivo de estilos de alguna libreria instalada en node_modules, se puede importar de forma no relativa, desde el archivo del módulo en el que se requiera, haciendo uso del caracter ~ seguido de la ruta del paquete en la carpeta node_modules.",
              "p2": "De esta forma, supongamos que se desea trabajar con bootstrap, podriamos importarlo de la siguiente forma:",
              "c1": "tpl1",
              "p3": "De la misma forma, si se requiere importar un archivo especifico dentro de la libreria, como el de_variables.scss, puede importarse de forma directa:",
              "c2": "tpl2"
            },
            "importingStylesFromABundle": {
              "h1": "Importación de estilos de un bundle",
              "p1": "La importación de módulos de estilo es considerada en BeyondJS como una importación no relativa, por tanto sigue las mismas reglas de importación de un archivo existente en una libreria de npm, pero la ruta de inclusión en este caso, sigue la estructura de nombres de los módulos realizados con el framework, que como hemos visto antes, puede estar compuesta por @scope/name, donde el scope es opcional.",
              "p2": "Para ejemplificarlo, imaginemos que se tiene un módulo llamado form, que incluye un bundle code, el cúal define componentes de un formulario y se requiere importar los estilos desde otro módulo. En el módulo, se creo un archivosass que define estilos para los labels, cuyo nombre es labels.scss. La línea de importación sería:",
              "c3": "tpl3"
            },
            "styles": {
              "h1": ["Estilos", "En el template"],
              "p1": "El manejo de estilos en el sistema de Template de BeyondJS se realiza por medio de la configuración del procesador de estilos sass, esta configuración se realiza en dos niveles básicamente:",
              "c1": "tpl1",
              "p2": "El código anterior, es la configuración por defecto de la plantilla de los proyectos web. Básicamente se está configurando el procesador sass para las plantillas de aplicación y global. A continuación se describe la finalidad de ambas",
              "p3": "En esta página se asume que el template se encuentra en una carpeta con dicho nombre en la raiz del proyecto, si se hizo un cambio en la configuración por defecto deberá considerarse la ubicación configurada."
            },
            "templateApplication": {
              "h2": "`template.application`",
              "p1": {
                "s1": "La propiedad application representa al archivo styles.css incluido en los proyectos con plataforma web. Está contemplada para agregar algún estilo general del documento y la definición de ",
                "e1": ["https://developer.mozilla.org/en-US/docs/Web/CSS/--*", "propiedades personalizadas"],
                "s2": " para que esten disponibles en todos los widgets."
              },
              "p2": "Las <strong>propiedades personalizadas</strong>  son los únicos valores de estilos que pueden ser compartidos entre los widgets ya que estos se incluyen por medio de Componentes Web con Shadow DOM.",
              "p3": "La configuración por defecto de estilos para template.application, incluye todos los archivos scss que se encuentren en el directorio ./template/application adentro del proyecto. Estos son:",
              "items": ["`./variables.scss`: contiene una lista de variables sass por defecto.", "`./styles.scss`: contiene estilos muy básicos para el body del documento", "`./custom-properties/dark.scss`: provee un mixin que define las variables a utilizar en el estilo en modo oscuro.", "`./custom-properties/light.scss`: provee un mixin que define las variables a utilizar en el estilo en modo claro.", "`./custom-properties/material-design.scss`: incluye las propiedades css del sistema de colores de material design.", "`./custom-properties/definition.scss`: incluye la definición de las propiedades personalizadas css que integra el uso de los mixins definidos en los archivos dark.scss y light.scss"],
              "p4": "El programador puede editar o agregar cualquier archivo adicional de estilos y este será integrado de forma automática debido a que en la configuración se tiene agregado un \"*\" que indica que todos los archivos dentro de la carpeta deben ser procesados."
            },
            "templateGlobal": {
              "h2": "`template.global`",
              "p1": "La propiedad global representa al archivo global.css que a diferencia del styles.css, tiene como finalidad compartir estilos que el desarrollador considere globales y por tanto deban poder ser compartidos por todos los widgets. Para lograr esto, el archivo final es incluido dentro de los estilos de cada widget.",
              "p2": "El igual que con la propiedad application, por defecto se incluyen todos los archivos que se encuentren adentro de la carpeta /global y de base sólo viene incluido un archivo styles.scss"
            },
            "lightAndDarkTheme": {
              "h1": ["Estilos", "Light & Dark theme"],
              "p1": "BeyondJS provee un mecanismo simple para brindar soporte al tema claro y oscuro, el cual consta de dos partes.",
              "items": ["El template de estilos", "Atributo data-beyond-mode."]
            },
            "themeDefinition": {
              "h2": "Temas en el template",
              "c1": "tpl1",
              "p3": "El template de aplicación viene ya configurado para soportar el tema claro y oscuro y suministra un archivo de definición de propiedades personalizadas css para cada tema. Luego, en el archivo definition.scss se tiene el siguiente código:"
            },
            "code": {
              "p4": "El código anterior deja disponibles las variables configuradas en los archivos dark y light para cada tema respectivo.",
              "p5": "En la mayoría de los casos, si un widget requiere validar el tema que se está utilizando, puede bastar con usar el selector host-context para definirlo desde un archivo de estilos, como se muestra en el siguiente ejemplo:",
              "c2": "tpl2",
              "p6": "Existen algunos casos, donde podría ser necesario que los widgets se enteren de forma dinámica del cambio de tema, para ello, se puede utilizar la api del objeto widgets",
              "c3": "tpl3",
              "p7": "La línea anterior agrega a todos los widgets existentes el atributo data-beyond-mode con el valor dark."
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
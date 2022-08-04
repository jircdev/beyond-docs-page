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
    "module": "@beyond/docs/docs/basic/styles",
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
    hash: 4139847248,
    creator: function (require, exports) {
      exports.txt = {
        "importOfStyleFiles": {
          "h1": ["Styles", "Import of style files"],
          "h2": "Node Modules",
          "p1": "If you need to include a style file of any library installed in node_modules, it can be imported in  non-relative way, from the module file in which it is required, using the ~ character followed by the bundle path in the node_modules folder.",
          "p2": "Thus, if you want to work with bootstrap you could import it in the following way:",
          "c1": "tpl1",
          "p3": "Likewise, if it is required to import a specific file within the library, such as de_variables.scss, it can be imported directly:",
          "c2": "tpl2"
        },
        "importingStylesFromABundle": {
          "h2": "Importing styles from a bundle",
          "p1": "The import of style modules is considered in BeyondJS as a non-relative import, thus following the same rules of importing an existing file in an npm library, but the included path, in this case, follows the naming structure of the modules. Modules made with the framework, which, as we have seen before, can be composed of @scope/name, where the scope is optional.",
          "p2": "To exemplify it, let's imagine that there is a module called form, which includes a bundle code, which defines components of a form, and is required to import the styles from another module. In the module, a sass file is created that defines stylings for the labels, whose name is labels.scss. The import line would be:",
          "c3": "tpl3"
        },
        "modules": {
          "h1": ["Styles", "In the module"],
          "p1": {
            "s1": "To add styles to a created module/bundle, the SASS ",
            "e1": ["/processors", "processor"],
            "s2": " must be added."
          },
          "q2": "If the dashboard is used to create projects, the sass processor is included by default in the bundles of type code and widget of any type.",
          "p3": "The standard sass processor configuration is as follows: ",
          "c1": "tpl1",
          "p4": "In the previous configuration, you can observe a definition where there is a sass folder in the module, with a location relative to the module.json file and that all the files in this folder must be taken into account as style files.",
          "p5": "The container bundle of the processor is in charge of inserting the styles in the DOM when the element is rendered, by doing this it is not required to import semantic JavaScript from external files in our code."
        },
        "styles": {
          "h1": ["Styles ", "in the template"],
          "p1": "El manejo de estilos en el sistema de Template de BeyondJS se realiza por medio de la configuración del procesador de estilos sass, esta configuración se realiza en dos niveles básicamente:",
          "c1": "tpl1",
          "p2": "El código anterior, es la configuración por defecto de la plantilla de los proyectos web. Básicamente se está configurando el procesador sass para las plantillas de aplicación y global. A continuación se describe la finalidad de ambas.",
          "p3": "En esta página se asume que el template se encuentra en una carpeta con dicho nombre en la raiz del proyecto, si se hizo un cambio en la configuración por defecto deberá considerarse la ubicación configurada."
        },
        "templateApplication": {
          "h2": "template.application",
          "p1": {
            "s1": "La propiedad application representa al archivo styles.css incluido en los proyectos con plataforma web. Está contemplada para agregar algún estilo general del documento y la definición de ",
            "e1": ["https://developer.mozilla.org/en-US/docs/Web/CSS/--*", "propiedades personalizadas"],
            "s2": " para que esten disponibles en todos los widgets.\n"
          },
          "p2": "Las <strong>Propiedades personalizadas</strong>son los únicos valores de estilos que pueden ser compartidos entre los widgets ya que estos se incluyen por medio de Componentes Web con Shadow DOM.\n",
          "p3": "La configuración por defecto de estilos para template.application, incluye todos los archivos scss que se encuentren en el directorio `./template/application` adentro del proyecto. Estos son:",
          "items": ["./variables.scss: : contiene una lista de variables sass por defecto.\n", "./styles.scss:  contiene estilos muy básicos para el body del documento.", "./custom-properties/dark.scss: provee un mixin que define las variables a utilizar en el estilo en modo oscuro. ", "./custom-properties/light.scss: provee un mixin que define las variables a utilizar en el estilo en modo claro.", "./custom-properties/material-design.scss: ncluye las propiedades css del sistema de colores de material design.", "./custom-properties/definition.scss: incluye la definición de las propiedades personalizadas css que integra el uso de los mixins definidos en los archivos `dark.scss` y `light.scss`"],
          "p4": "El programador puede editar o agregar cualquier archivo adicional de estilos y este será integrado de forma automática debido a que en la configuración se tiene agregado un \"*\" que indica que todos los archivos dentro de la carpeta deben ser procesados.\n",
          "h2#tplapplication": "template.application"
        },
        "templateGlobal": {
          "h3": "template.global",
          "p1": "La propiedad global representa al archivo global.css que a diferencia del styles.css, tiene como finalidad compartir estilos que el desarrollador considere globales y por tanto deban poder ser compartidos por todos los widgets. Para lograr esto, el archivo final es incluido dentro de los estilos de cada widget.",
          "p2": "El igual que con la propiedad application, por defecto se incluyen todos los archivos que se encuentren adentro de la carpeta /global y de base sólo viene incluido un archivo`styles.scss`."
        },
        "lightAndDarkTheme": {
          "h1": ["Styles", "Light & Dark theme"],
          "p1": "BeyondJS provides a simple mechanism for supporting light and dark themes, consisting of two parts.",
          "items1": ["The style template.", "Data-beyond-mode attribute."]
        },
        "themesDefinition": {
          "h2": "Themes in the template",
          "p2": "The application template is already configured to support the light and dark theme and supplies a custom CSS property definition file for each theme selection. Then, in the definition.scss file, we have the following code:",
          "c1": "tpl1"
        },
        "code": {
          "p4": "The above code makes the variables, set in the dark and light files, available for each respective theme.",
          "p5": "In most cases, if a widget requires validation of the theme it is using, it may be enough to use the host-context selector to define it from a style file, as shown in the following example:",
          "c2": "tpl2",
          "p6": "There are some cases where it might be necessary for the widgets to dynamically find out about the theme change. For this, the widgets' object API can be used.",
          "c3": "tpl3",
          "p7": "The above line adds to all existing widgets the attribute data-beyond-mode with the value dark."
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
    "module": "@beyond/docs/docs/basic/styles",
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
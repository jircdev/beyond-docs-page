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
    "module": "@beyond/docs/docs/basic/projects",
    "multibundle": true,
    "bundle": "txt"
  }).package('es');

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 2237453228,
    creator: function (require, exports) {
      exports.txt = {
        "intro": {
          "h1": ["Proyectos", "Introducción"],
          "p1": "BeyondJS ofrece una arquitectura enfocada en proveer una forma eficiente de implementar soluciones basadas en microservicios interconectados con otros microservicios en el backend y con aplicativos con estructuras de micro-frontends si hablamos del cliente, esto sin dejar de lado la posibilidad de crear proyectos más sencillos en pocos pasos.",
          "p2": " Para explicar el concepto, se puede pensar en un servicio que ofrece la gestión de autenticación en aplicaciones. Es natural pensar que pueden existir desarrolladores que requieran consumir el servicio desde un proyecto web, con código cliente y desarrolladores que estén trabajando en el backend y también puedan consumir el servicio para validar la sesión previo a determinada acción.",
          "p3": " Desde la óptica de BeyondJS el servicio de Auth puede ser visto como un proyecto que contiene dos distribuciones, una para generar el código cliente y una para generar el código backend, ambas con un único código fuente. El código desplegado de las distribuciones podría disponibilizarse en las dos distribuciones como paquete NPM y quedar disponible para ser usados por cualquier programador en proyectos hechos o no con BeyondJS.",
          "p4": "Asimismo, si los proyectos que consumen ´Auth´ son proyectos BeyondJS también podrían importar a ´Auth´ por medio del sistema de importación de módulos de BeyondJS."
        },
        "create": {
          "h1#create": ["Proyectos", "Gestión de un proyecto"],
          "p1": {
            "s1": "Los proyectos, al igual que el resto de elementos de BeyondJS, se configuran por medio de objetos en archivos .json. Generalmente, los archivos de configuración de proyectos llevan por nombre",
            "l1": ["/docs/projects/json", "project.json"],
            "s2": " como convención y permiten una variedad amplia de configuraciones."
          },
          "p2": "Los proyectos se pueden configurar de dos formas: por medio de la interfaz del Dashboard y manualmente."
        },
        "dashboard": {
          "h2#dashboard": "Usando el Dashboard\n",
          "p1": "Para crear un proyecto desde el dashboard, en primer lugar debe asegurarse de que BeyondJS esté ejecutandose en la carpeta donde desee trabajar sus proyectos. Como se explica en la introducción, BeyondJS está hecho para manejar proyectos en simultáneo, por lo que es importante tener presente que el directorio de ejecución puede ser uno donde se deseen agregar \"varios\" proyectos.",
          "p2": "Iniciamos BeyondJS:",
          "c1": "beyond",
          "p3": {
            "s1": "Luego accedemos al dashboard el cual estará disponible en ",
            "l1": ["http://localhost:4000", "http://localhost:4000"],
            "s2": "."
          },
          "p4": "El dashboard posee tres maneras de acceder al proceso de creación de proyectos",
          "i1": ["/images/dashboard/empty.png", "beyond creating projects"],
          "items1": ["In the Preaside, by using the icon.", "In the Project Board, at the top right, the option \"create project.\"", "When no project created, a message is displayed inviting you to create a project, as seen in the above reference image."],
          "p5": "Clicking on any of the mentioned alternatives, a modal is displayed, allowing you to select the type of project to create. This function enables you to start with a blank project or using an already created template. Current choices are:\n",
          "h4#blank-projects": "Tipos de Proyectos en blanco",
          "i2": ["/images/dashboard/new-project.png", "BeyondJS - Project types"],
          "items2": ["Web: : Listo para comenzar un proyecto web que pueda ser distribuido en internet o como aplicación móvil.", "Node: Listo para distribuir como un proyecto a ejecutar en un entorno node.", "Backend: Proyecto node que disponibiliza interfaces que puedan ser consumidas en real-time con web sockets desde otro proyecto node o desde un proyecto cliente.", "Library: Ideal para crear proyectos que esten pensados para ser distribuidos como paquetes NPM.", "web - backend: Genera un proyecto con distribuciones Web y Backend integrados."],
          "h4#templates": "Tipos de plantillas",
          "items4": ["React, vue y svelte apps, proyectos para empezar a trabajar con la libreria de framework de preferencia.", "Express: Proyecto con una estructura inicial para crear un servidor express.", "Template web: Template basica, con un modulo de ruta por defecto y la inicialización del backend implementada.\n"],
          "p6": {
            "s1": "Se puede trabajar con diferentes librerias/Frameworks de vistas en un mismo proyecto gracias a la estructura de micro-frontends que ofrece BeyondJS. Puede leerse más al respecto en ",
            "l1": ["/docs/widgets", "La sección de widgets"],
            "s2": "."
          }
        },
        "createInfo": {
          "p1": "Luego de la selección del tipo de proyecto, aparece un formulario que solicita el scope y nombre del proyecto, el puerto sobre el cúal correrá, y adicionalmente, un titulo y descripción opcionales. Luego de llenar los datos necesarios, el Dashboard se encarga de crear el proyecto con la estructura de archivos y el proyecto queda disponible para ser accedido en el puerto configurado.",
          "i1": ["/images/dashboard/create-form-project.png", "BeyondJS - new project form"],
          "q1": "Todos los proyectos tienen dependencias de paquetes npm que pueden opcionalmente ser instalados desde el dashboard. En caso de no haberlo hecho, para que el proyecto funcione es necesario instalar las dependencias manualmente."
        },
        "manual": {
          "h2#manual": "Creación manual",
          "p1": "La definición de un proyecto se hace por medio del archivo project.json.",
          "p2": "La estructura mínima necesaria para la creación de un proyecto es la siguiente:",
          "c1": "tpl1",
          "p3": "Habiendo creado el archivo `project.json`, solo resta crear el archivo de configuración del servidor de `BeyondJS`, que lleva por nombre `beyond.json` y cuya estructura básica es la siguiente:",
          "c2": "tpl2",
          "p4": "La entrada `applications` es un arreglo que puede contener una lista de rutas relativas a archivos de configuración de proyectos.",
          "q2": {
            "s1": "Puedes leer más sobre las opciones de configuración de BeyondJS en entorno de desarrollo en la sección del ",
            "l1": ["/docs/dev-server", "Servidor de desarrollo"],
            "s2": "."
          }
        },
        "dependencies": {
          "h1#dependencies": ["Proyectos", "BeyondJS Dependencies"],
          "p1": "BeyondJS ofrece un listado de dependencias requeridas según el tipo de proyecto que se desee realizar.",
          "h3#kernel": "@beyond/kernel",
          "p2": "Es la libreria principal de BeyondJS, contiene módulos para cubrir las funcionalidades bases del Framework. Contiene los siguientes paquetes:",
          "items1": ["bundle: utilizado por cualquier bundle, funciones comunes para ellos.", "core: gestiona el manejo importacion de paquetes de forma universal.", "routing: Contiene todas las funcionalidades asociadas al historico y navegación del proyecto.", "styles: Sirve para trabajar hojas de estilos de forma reactiva.", "texts: requerido para el manejo de las funcionalidades de multilenguaje."],
          "h3#backend": "@beyond/backend",
          "p3": "Libreria que gestiona la parte cliente y servidor de conexión real time y bridges. Requerida en los proyectos de tipo node y backend.",
          "h3#ssr": "@beyond/ssr",
          "p4": "Se encarga de proveer las apis para poder acceder a la información de renderizado de los widgets y disponibilizar el renderizado servidor.",
          "h3#widgets": "Librerias para Widgets",
          "p5": "Para trabajar con widgets es necesario tener instalada la dependencia @beyond/widgets y adicionalmente, según el framework que se desee utilizar,BeyondJS ofrece las siguientes librerias:",
          "items2": ["@beyond/react-widget", "@beyond/vue-widget", "@beyond/svelte-widget"],
          "q6": "Todas las librerias mencionadas se pueden instalar por medio del comando `npm i library` donde \"library\" sería el nombre de la libreria a instalar."
        },
        "structure": {
          "h1": ["Projectos", "Estructura de un proyecto"],
          "p1": "`BeyondJS` posee una arquitectura configurable que permite tener estructuras flexibles en los proyectos. Sin embargo, al crear un proyecto por medio del Dashboard o de `beyond-first-project`, la estructura inicial creada es la siguiente:\n",
          "h4": "Estructura",
          "p2": "Este comando crea la siguiente estructura:",
          "items1": [{
            "s1": "Un archivo ",
            "l1": ["docs/projects/json", "project.json"],
            "s2": " con la configuración del proyecto."
          }, {
            "s1": "Un archivo ",
            "l1": ["/docs/dev-server", "beyond.json "],
            "s2": " que permite gestionar configuraciones para el servidor de desarrollo.\n      ´Modules´/ Carpeta en donde se encuentran los módulos del proyecto. La ubicación de los módulos es configurable en el project.json del proyecto."
          }, {
            "s1": "template/Carpeta con la estructura de la plantilla del proyecto. Esta carpeta aplica para los proyectos web y móvil. Puedes leer más en detalle sobre el sistema de plantillas",
            "l1": ["/docs/template-system", "aqui"],
            "s2": "."
          }],
          "p3": "\nLa estructura de carpetas puede variar y extenderse según las consideraciones del proyecto.",
          "h2": "Gestión de directorios",
          "p4": "BeyondJS sigue una estructura de directorios basada en mantener una semántica simple y concisa que permita al programador ubicarse a partir de los nombres de carpeta. Sin embargo, el programador puede tener un estandar de estructura que desee seguir, para lo cual se permite hacer cambios en la configuración de directorios.",
          "p5": "La ubicación de los módulos de un proyecto, suele estar por convención en la carpeta modules, esto se define en el project.json, en la propiedad module",
          "c1": "modules",
          "p6": "Al igual que todas las propiedades configurativas de directorios. la propiedad module.path evalúa el valor recibido de forma relativa al directorio en donde se encuentra, dicho en otras palabras, la carpeta modules debe encontrarse, según el ejemplo a la misma altura que el archivo project.json, si esta propiedad se remueve, BeyondJS intentará encontrar los módulos en el directorio raíz del proyecto, el cúal corresponde a el lugar en donde se encuentra el module.json"
        },
        "imports": {
          "h1": ["Proyectos", "Importación de proyectos"],
          "c1": "project",
          "p1": "En BeyondJS un proyecto puede ser importado por otro y funcionar como una librería, brindando al proyecto principal acceso a los módulos de este. Esta funcionalidad es clave para pensar en soluciones con estructuras de microservicios interconectados entre sí o de librerías que contengan código reutilizable.",
          "p2": "Para ejemplificarlo, podemos hablar de una solución que maneja una página web, una aplicación móvil y un panel administrativo, todos como proyectos independientes que alimentan una misma fuente de datos. La importación de proyectos permite que se maneje toda la lógica de datos en un proyecto independiente que es utilizado por los tres aplicativos, permitiendo así reutilizar el código.",
          "p3": "La importación de proyectos se realiza desde el project.json y es necesario que los proyectos se encuentren agregados en la entrada projects del beyond.json.",
          "p4": "Si los proyectos se crean por medio del Dashboard, el archivo beyond.json se modifica de forma automática.",
          "p5": "Siguiendo el ejemplo mencionado, el proyecto con los módulos que gestionan los datos y se conectan a la base de datos podría llamarse models y para importarlo en los otros proyectos, tendría que agre",
          "c2": "libraries",
          "p6": "La propiedad imports recibe un arreglo de ítems, lo que permite importar múltiples proyectos en caso de ser requerido."
        },
        "json": {
          "h1#properties": ["Proyectos", "Configuración de proyectos"],
          "items1": ["name string optional:  string Es el nombre para identificar el proyecto, sigue el estándar de npm, por tanto, sólo puede contener caracteres seguros para URLs, sin puntos o guiones bajos.", "scope string optional:  Al igual que en npm, sirve para agrupar paquetes y como los proyectos pueden ser publicados como paquetes npm, en caso de agregarse un scope, este debe ser único y sólo puede ser manejado por la organización o usuario que lo utiliza. La validación de unicidad del scope es hecha por npm, sólo si el programador intenta publicar su proyecto como paquete.", "title string optional:  Titulo descriptivo del proyecto, no debe poseer más de 100 caracteres.", "description string optional:  Espacio para explicar de forma resumida cuales son las características del proyecto.", "template EOC optional:  Espacio para explicar de forma resumida cuales son las características del proyecto.", "layout EOC optional:  Espacio para explicar de forma resumida cuales son las características del proyecto.", "params EOC optional:  Objeto que permite agregar parámetros generales que se requieran utilizar en todo el proyecto, tiene la posibilidad de definir valores por entorno. Para entender más, puedes dirigirte a la sección Parámetros del proyecto.", "modules EOC optional:  Recibe un objeto con una entrada path que permite definir el directorio de los módulos, por defecto es \"module\"", "deployment EOC optional:  Objeto que permite realizar las configuraciones de los entornos de desarrollo, las cuales son definidas por medio de la entrada deployment", "Deployment EAC optional:  Objeto que permite realizar las configuraciones de los entornos de desarrollo, las cuales son definidas por medio de la entrada distributions. Las distribuciones pueden agregarse desde la funcionalidad del dashboard para ello o de forma manual. Para entender cómo funcionan puedes dirigirte a la Sección de distribuciones.", "libraries object optional:  Define la importación de proyectos a ser usados como librerías en el proyecto definido.", "imports string optional:  Cada entrada representa un proyecto importado, la importación se hace agregando el scope y nombre del proyecto importado."]
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
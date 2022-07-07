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
    "module": "@beyond/docs/docs/basic/styles",
    "multibundle": true,
    "bundle": "txt"
  }).package('en');

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0]]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 3042487532,
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
          "p1": "The handling of styles in the BeyondJS Template system is done through the configuration of the sass style processor. This configuration is simply done at two levels:",
          "p2": "The above code is the default configuration of the web project template. Basically, you are configuring the sass processor for the application and global templates. The purpose of both is described below.",
          "p3": "On this page, we assume that the template is located in a folder with that name at the root of the project. If a change was made in the default configuration, the configured location should also be considered."
        },
        "templateApplication": {
          "h2": "template.application",
          "p1": {
            "s1": "The application property represents the styles.css file included in web platform projects. Intended to add some general styling to the document and define ",
            "e1": ["https://developer.mozilla.org/en-US/docs/Web/CSS/--*", "custom properties"],
            "s2": "so they are available in all widgets."
          },
          "p2": "<strong>Custom properties</strong> are the only style values that are available for sharing between widgets, as their inclusion is via Web Components with Shadow DOM.",
          "p3": "The default style settings for template.application include all scss files found in the ./template/application directory inside the project. These are:",
          "items": ["./variables.scss: Contains a list of default sass variables.", "./styles.scss: contains very basic styles for the document body.", "./custom-properties/dark.scss: Provides a mixin that defines the variables to use in dark mode styling.", "./custom-properties/light.scss: Provides a mixin that defines the variables to use in light mode styling.", "./custom-properties/material-design.scss - Contains the material design color system css properties.", "./custom-properties/definition.scss: includes the definition of the custom css properties that integrates the use of the mixins defined in the dark.scss and light.scss files."],
          "p4": "The developer can edit or add any additional file of styles and will be integrated automatically, because a \"*\" has been added in the configuration, which indicates that all the files inside the folder must be processed."
        },
        "templateGlobal": {
          "h3": "template.global",
          "p1": "The global property represents the global.css file which, unlike styles.css, is intended to share styles that the developer considers global, and therefore must be shared by all widgets. To accomplish this the final file is included within the styles of each widget.",
          "p2": "The same as with the application property, by default, all the files that are inside the /global folder are included, and by default only a styles.scss file is included."
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
});
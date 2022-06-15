define(["exports"], function (_exports2) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.txt = _exports2.hmr = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/basic/styles/txt").package('en');

  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 1417682663,
    creator: function (require, exports) {
      exports.txt = {
        "stylesInTheTemplate": {
          "t1": "Styles in the template",
          "p1": "The handling of styles in the BeyondJS Template system is done through the configuration of the sass style processor. This configuration is simply done at two levels:",
          "p2": "The above code is the default configuration of the web project template. Basically, you are configuring the sass processor for the application and global templates. The purpose of both is described below.",
          "p3": "On this page, we assume that the template is located in a folder with that name at the root of the project. If a change was made in the default configuration, the configured location should also be considered."
        },
        "templateApplication": {
          "t1": "template.application",
          "p1": {
            "t1": "The application property represents the styles.css file included in web platform projects. Intended to add some general styling to the document and define ",
            "e1": {
              "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/--*",
              "label": "custom properties"
            },
            "t2": "so they are available in all widgets."
          },
          "p2": "<strong>Custom properties</strong> are the only style values that are available for sharing between widgets, as their inclusion is via Web Components with Shadow DOM.",
          "p3": "The default style settings for template.application include all scss files found in the ./template/application directory inside the project. These are:",
          "items": ["./variables.scss: Contains a list of default sass variables.", "./styles.scss: contains very basic styles for the document body.", "./custom-properties/dark.scss: Provides a mixin that defines the variables to use in dark mode styling.", "./custom-properties/light.scss: Provides a mixin that defines the variables to use in light mode styling.", "./custom-properties/material-design.scss - Contains the material design color system css properties.", "./custom-properties/definition.scss: includes the definition of the custom css properties that integrates the use of the mixins defined in the dark.scss and light.scss files."],
          "p4": "The developer can edit or add any additional file of styles and will be integrated automatically, because a \"*\" has been added in the configuration, which indicates that all the files inside the folder must be processed."
        },
        "templateGlobal": {
          "t1": "template.global",
          "p1": "The global property represents the global.css file which, unlike styles.css, is intended to share styles that the developer considers global, and therefore must be shared by all widgets. To accomplish this the final file is included within the styles of each widget.",
          "p2": "The same as with the application property, by default, all the files that are inside the /global folder are included, and by default only a styles.scss file is included."
        },
        "StylesInTheModule": {
          "t1": "Styles in the module",
          "p1": {
            "t1": "To add styles to a created module/bundle, the SASS ",
            "e1": {
              "href": "/processors",
              "label": "processor"
            },
            "t2": "must be added."
          },
          "p2": "If the dashboard is used to create projects, the sass processor is included by default in the bundles of type code and widget of any type.",
          "p3": "The standard sass processor configuration is as follows: ",
          "p4": "In the previous configuration, you can observe a definition where there is a sass folder in the module, with a location relative to the module.json file and that all the files in this folder must be taken into account as style files.",
          "p5": "The container bundle of the processor is in charge of inserting the styles in the DOM when the element is rendered, by doing this it is not required to import semantic JavaScript from external files in our code."
        },
        "lightAndDarkTheme": {
          "t1": "Light & Dark theme",
          "p1": "BeyondJS provides a simple mechanism for supporting light and dark themes, consisting of two parts."
        }
      };
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.txt = require('./txt').txt;
  };

  let txt; // Module exports

  _exports2.txt = txt;

  __pkg.exports.process = function (require) {
    _exports2.txt = txt = require('./txt').txt;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});
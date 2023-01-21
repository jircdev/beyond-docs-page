System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0/jsx-runtime"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, __beyond_pkg, hmr;
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react1820JsxRuntime) {
      dependency_1 = _react1820JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["ripple-effects", "1.0.2"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/contents/en"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react/jsx-runtime', dependency_1]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./bee.mdx
      *************************/
      ims.set('./bee.mdx', {
        hash: 2304471627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              strong: "strong",
              ol: "ol",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "BEE"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Distributions"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Distributions represent the execution environment of a project. It's necessary to set up a distribution for each environment you want to work in. BeyondJS creates a Beyond Execution Environment (BEE) for each distribution being used. It will be explained later what exactly is a BEE and the offered advantages of its use."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.Subtitle, {
                  children: "Node"
                }), "\r\nBeyondJS allows for scalable and efficient projects with ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://nodejs.org/",
                  children: "Node.js"
                }), ", built directly\r\nwith typescript and seeking to improve the development experience by integrating HMR."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To work with Node, you need to create a Node-type distribution. From there, BeyondJS will take care of raising the execution environment (BEE) and making available all the project modules configured for the platforms that handle Node."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Distribution"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The configuration of Node modules in BeyondJS, is done through distributions. The developer sets up a distribution."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "As explained before in this documentation, a module in BeyondJS is a bundle container, where one or more bundles can exist. Each of these bundles contains a set of internal modules. When the BeyondJS project uses the BEE (Beyond Execution Environment), which is explained later, it optimizes development times and offers better results in the experience."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "BEE (Beyond Execution Environment)"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BEEs are processes managed by BeyondJS. They behave like a Node service, with the distinctive characteristic of being handled by the main Beyond service. The beyond service analyzes, reviews, and compiles the changes in real-time to make a new version of the bundles available in memory with the code changes applied through HMR, providing the opportunity to have access to updated code capabilities without the need to restart the node process."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The real-time update in the Node process offers runtime advantages because it avoids carrying out all the load at the resource time level, which implies stopping the entire process and starting it again. This can also apply to values in memory or connections to databases, to mention some examples. BeyondJS detects changes at an internal file or ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/modules#internal-modules",
                  children: "Module"
                }), ", updates changes, performs a fresh build of the bundle on the fly, and makes the new version available for consumption."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "The operating flow of the Bee looks like the description as follows:"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Beyond picks up the service."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "A revision of the bundle dependency tree is performed (note that it is at the level of bundles and not internal modules)."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "The processed code loads into the memory and whatchers are added to be able to detect changes."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "If there is a change in a file, this is detected, and that code segment is replaced."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Dynamic imports are not loaded when the BEE picks up, but are requested on demand."
                })
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /********************************************
      INTERNAL MODULE: ./beyond-js-dependencies.mdx
      ********************************************/

      ims.set('./beyond-js-dependencies.mdx', {
        hash: 749598115,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              strong: "strong",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "BeyondJS Dependencies"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS offers a list of required dependencies according to the type of project that you want to carry out."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "@beyond/kernel"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "It is the main library of BeyondJS. It contains modules to cover the basic functionalities of the Framework. Portraits the following packages:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "bundle:"
                  }), " used by any ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/bundles",
                    children: "bundle"
                  }), ", and common functions for them."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "core:"
                  }), " manages package import handling universally."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "routing:"
                  }), " Contains all the functionalities associated with the history and navigation of the project."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "styles:"
                  }), " Used to work style sheets reactively"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "texts:"
                  }), " required for handling multilanguage features."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "@beyond/backend"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["A library that manages the client and server part of real-time connection, and bridges. It is required in ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "node"
                }), " and ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "backend"
                }), " type projects."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "@beyond/ssr"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "It is responsible for providing the APIs the ability to access the rendering information of the widgets and make the server rendering available."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Widget libraries"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To work with widgets, it is necessary to have the @beyond/widgets dependency installed, and additionally, depending on the framework that you wish to use, BeyondJS offers the following libraries:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "@beyond/react-widget"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "@beyond/vue-widget"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "@beyond/svelte-widget"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "All the mentioned libraries, can be installed through the npm i library command, where \"library\" would be the library name to install."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/widgets",
                    children: "Widgets"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/modules/create",
                    children: "Create a module"
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*****************************
      INTERNAL MODULE: ./bundles.mdx
      *****************************/

      ims.set('./bundles.mdx', {
        hash: 657425610,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              em: "em",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Bundles"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A bundle represents the compiled file(s) ready to be included in the browser. These files are made-up of code generated by the processors included in the configuration. They are defined as module configuration object's properties, found in the module.json file of each module created."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["{\r\n\"name\": \"icons\",\r\n\"code\": {\r\n\"ts\": {\r\n\"path\": \"ts\",\r\n\"files\": [\r\n\"", (0, _jsxRuntime.jsx)(_components.em, {
                    children: "\"\r\n]\r\n},\r\n\"sass\": {\r\n\"path\": \"scss\",\r\n\"files\": [\r\n\""
                  }), "\"\r\n]\r\n}\r\n}\r\n}"]
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The code above defines a bundle of type code. A module can contain more than one bundle for this, you only need to add another property with the name of the additional bundle. It is important to note that a module cannot contain two bundles of the same type."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Imagine that you need to make a registration form interface. The registration form could be divided into two layers:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "HTML and screen styles based user interface."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "The logic associated with validations and functionalities."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In order to carry out the development, it is necessary to create some files in Typescript, which include the logic and elements of the interface and other style files. In BeyondJS this implies working with at least two basic processors: ts and sass, the first generates javascript code, the second generates css code."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_components.strong, {
                  children: "A bundle"
                }), " represents the compiled file(s) ready to be included in the browser. These files are made up of code generated by processors included in the configuration."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "As previously explained, the possibility that a bundle generates one or several final files basically depends on the processors included for its bundling, if necessary to create only JavaScript code, a single file is generated, if, on the contrary, CSS code is also needed two files are generated."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Bundles are made up of processors and BeyondJS offers the possibility for developers to create their own bundles."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Transversal Bundles"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Transversal bundles are defined in the same way as other bundles, but they have a peculiarity that offers productive advantages: the code of a transversal bundle is compiled into a single file."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS locates, integrates and unifies them into a single bundle or final file. The start type bundles are a clear example of this, they allow the programmer to define the logic desired to be executed at the start of the application."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Types"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Widget:"
                    }), " They contain the code of a web-component. Pages and layouts are handled as widgets. You can read more about this type of bundle in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/widgets",
                      children: "Widgets chapter."
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Code:"
                    }), " Bundle that allows you to create various functionalities to be consumed from another bundle or module. Supports the integration of multiple processors."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "TS(Typescript):"
                    }), " only supports the processor for handling typescript files."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Bridge:"
                    }), " backend code bundle, which generates client code and makes available the websocket connection to connect the client and the backend."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Backend:"
                    }), " only supports code that is going to be executed in execution environments such as ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Node"
                    }), " or ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Rhino."
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Vue:"
                    }), " Specific bundle for managing modules with the Vue Framework."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Svelte:"
                    }), " specific for handling Svelte code and its single file component structure."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Start:"
                    }), " Transversal bundle, useful if it is required to execute logic at the start of the application."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Txt-start:"
                    }), " Transversal bundle, which allows managing multilanguage texts required at the start of the application."]
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***************************************
      INTERNAL MODULE: ./controller-object.mdx
      ***************************************/

      ims.set('./controller-object.mdx', {
        hash: 3238265782,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
                p: "p",
                ul: "ul",
                li: "li",
                strong: "strong"
              }, props.components),
              {
                Code,
                Link
              } = _components;
            if (!Code) _missingMdxReference("Code", true);
            if (!Link) _missingMdxReference("Link", true);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Controller Object"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Controller definition"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Every widget must expose a defined Controller class. The Controller object is responsible for the declaration and handling of the web component representing the widget. The controller has a structure like the following:"
              }), "\n", (0, _jsxRuntime.jsx)(Code, {
                children: `
import {ReactWidgetController} from '@beyond-js/kernel/react-widget/ts';
import {Page} from './views/page';
export /*bundle*/
class Controller extends ReactWidgetController {
    get Widget() {
        return Page;
    }
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In the code above, the Controller class extends the ReactWidgetController object which is the base controller made available to work with React. BeyondJS has a controller available for the various view frameworks. The objects are:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "ReactWidgetController and ReactPageWidgetController."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "SvelteWidgetController and SveltePageWidgetController."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "VueWidgetController and VuePageWidgetController."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "All controllers handle the same interface, but are focused on integrating and working with the view framework used."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Properties"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Widget"
                  }), " [getter]: Defined as a getter and should return the main view component."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "uri"
                  }), " ", (0, _jsxRuntime.jsx)(Link, {
                    to: "/docs/api/uri",
                    children: "[URIObject]"
                  }), " [optional]: Uri object with all the information associated with the current url."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Methods"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "createStore"
                    }), " [function] [optional]: Allows adding logic for handling the widget State, it must return an object with the ", (0, _jsxRuntime.jsx)(Link, {
                      to: "/docs/api/IwidgetStore",
                      children: "IWidgetStore"
                    }), " interface."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "initialise"
                    }), " [void] [optional]: Allows you to add logic to be executed before mounting the web component in the HTML DOM."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "hide"
                    }), " [void] [optional]: Executed when it has been rendered and it is hidden. This happens when navigating from one URL to another."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "show"
                    }), " [void] [optional]: Runs every time the URL is accessed and the page is displayed in the browser."]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(Link, {
                        to: "/docs/widgets/creation",
                        children: "Widget Creation"
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(Link, {
                        to: "/docs/widgets/page",
                        children: "Page type widgets"
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
          function _missingMdxReference(id, component) {
            throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./create-a-module.mdx
      *************************************/

      ims.set('./create-a-module.mdx', {
        hash: 174621311,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Create a Module"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["This page assumes that you have already read the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/modules/intro",
                  children: "module introduction.."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The modules are created and managed through the module.json configuration files. These have the alternative of being created manually or through the Workspace interface."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Creation from the Workspace"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To be able to create a module, first you must have created a project before, and this needs to be active in the Workspace."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The option to create projects is a feature available when a project is active on the Workspace. In order to see them, it is necessary to open the project by accessing its detail board."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "When the project is active, you can see the option in the PreAside. By clicking on it, a modal will appear, allowing you the alternative to create a blank module or select a template."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Later, a form appears that requests the rest of the necessary data associated with the type of bundle that will be added to the module and the processors that to be contained."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Module data"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["String ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Module Name:"
                  }), " Corresponds to the name with which the module to be created could be imported or used."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Web Component Name"
                  }), " string: Applies to widget-type bundles. It should follow the web component naming standard, all lowercase and with a dash."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Optional ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "URL:"
                  }), " Applies to modules with a page-widget type bundle. Defines the URL's access."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Vue"
                  }), " boolean: Adds the Vue renderer."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Svelte"
                  }), " boolean: Adds the Svelte processor."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Manual creation"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The module configuration follows the same principle as the rest of the configuration elements in BeyondJS and must be created in a file named module.json."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The module.json receives at least two properties: The module name and the bundle configuration."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
{
    "name": "first-module",
    "platforms": [
        "web"
    ]
    "code" : {
        "ts": {
          "path": "ts",
          "files": [
            "*"
          ]
        },
        "sass": {
          "path": "scss",
          "files": [
            "*"
          ]
        }
    }
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In the example above, a module named first-module is being created, with a bundle code that contains a sass processor and a ts processor that process Sass and Typescript code respectively; and that will be bundled for the web platform."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["A module can contain several bundles, defined as properties of the module's configuration object, and as pure module receives as a value a configuration object that, apart from the processors, can receive some additional properties depending on the bundle type. You can read more in detail about this in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/bundles",
                  children: "bundle's chapter."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/modules/json",
                    children: "Module configuration"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/widgets",
                    children: "Widgets"
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /****************************************
      INTERNAL MODULE: ./development-server.mdx
      ****************************************/

      ims.set('./development-server.mdx', {
        hash: 2789909137,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              strong: "strong",
              code: "code",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Development server"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["When BeyondJS runs, it will raise a development server for each distribution configured in each project, allowing you to run them simultaneously. To learn more about configuring distributions, you can read about it in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/projects/distributions",
                  children: "Distributions chapter."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The dev server is an HTTP server whose main role is to interface with the engine to process the module bundles on demand. It takes the request, identifies the requested module, and returns the bundle packaged according to its configuration."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The dev server is used in development to work homogeneously, on-demand (only processing the required bundles), and with HMR in various distributions: (Nodejs, Deno, or the browser)."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The image below is the possible working structure of the BeyondJS development environment."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The BeyondJS engine has an optimized cache that stores the bundled code to provide an instant response, which is invalidated if the bundle source code is changed, automatically generating a new compilation of the bundle."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Let's see the use of dev server according to the execution platform."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Web, Android, iOS"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "On the web, Android, and Ios platforms, the dev server not only serves bundles but additionally returns the index.html when the requested URL does not find a resource (bundle or static file)."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Deno"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Deno supports HTTP ES imports natively and stably.\r\nBeyondJS generates the import maps to resolve the project's bundles. Thus, when a bundle registered in the project is required, Deno will load it pointing to the dev server.\r\nYou can work with BeyondJS and Deno to build a comprehensive application but also to create library projects that contain modules that you can consume from any other application.\r\nBeyondJS supports the notion of cross-cutting bundles such as \"start\". The start bundles are coded in the modules, and their execution occurs at the start of the application.\r\nIf you are building a complete application in DENO, you would typically load the \"start\" bundle. ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "More info about bundle start and transversal bundles."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "NodeJS"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS aims to provide a universal typescript development environment.\r\nUnlike Deno, which stably supports HTTP imports since its inception, NodeJS implements it in recent versions and is still in an experimental phase."
              }), "\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                to: "https://nodejs.org/api/esm.html#https-and-http-imports",
                children: "https://nodejs.org/api/esm.html#https-and-http-imports"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["To provide a homogeneous experience, BeyondJS offers an execution environment (", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "BEE:"
                }), " Beyond Execution Environment) specifically designed to be used in development (not in production) from NodeJS, in charge of allowing you to run an application by consuming the bundles from the HTTP server and providing HMR support.\r\nThis way, you can run an application in NodeJS processing bundles on demand, reducing the time required for startup.\r\nIf not for the BEEs, you should compile the entire application so that NodeJS can synchronously request for the bundles."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Dockers containers"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Due to the design of the bundle consumption over HTTP, running an application in a docker container is as simple as running it on your local PC."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Electron"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Electron applications feature two runtime environments, the browser for the UI view and a NodeJS instance which communicate with each other.\r\nWith BeyondJS you can work on the same project in both environments."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Modules specifying the \"web\" platform will be available for the view, and those specifying that the \"node\" platform will be available for that environment. This allows you to structure your application in an orderly way.\r\nThe NodeJS environment of an Electron application must run through a BEE to consume on demand and with HMR support bundles served by the dev server."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Configuration"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["BeyondJS evaluates the directory where it is being executed to identify the existing project(s) by validating if a ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "beyond.json"
                }), " file exists."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "beyond.json"
                }), " file can be edited manually or through the workspace which is available by default at ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://workspace.beyondjs.com/",
                  children: "https://workspace.beyondjs.com/"
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The structure of the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "beyond.json"
                }), " is as follows:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
"applications": "projects.json",
  "bundles": {},
  "libraries": []
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Propiedades"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["applications ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/aoc",
                    children: "AOC:"
                  }), " Receive an array with the list of projects or applications configured so that BeyondJS can read and launch them. This file is managed by BeyondJS if the workspace is being used."]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "bundles object: Allows you to configure the inclusion of bundles created by the developer."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["libraries ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/aoc",
                    children: "AOC:"
                  }), " BeyondJS libraries configuration arrangement to use."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Why Modular + Universal?"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Deno, NodeJS, Chrome, Edge, webview, are all based on the same Javascript technology. Same engine, but not the same coding techniques."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Package consumption in NodeJS is based on NPM and node_modules folder, Deno directly consumes dependencies as HTTP imports.\r\nModern browsers also have the ability to consume ES modules, but if you program for the web, unlike when you program for NodeJS or Deno, you will probably be using a bundler like webpack, parcel, rollup, esbuild, etc."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "You can also use bundlers to program in Deno or NodeJS, which is becoming popular due to Isomorphism."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Currently, ES modules are available, which is a recent development, and simplifies the scenario considerably. Both the browser, NodeJS, and Deno can load ES modules natively."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*****************************
      INTERNAL MODULE: ./glosary.mdx
      *****************************/

      ims.set('./glosary.mdx', {
        hash: 3741686436,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Glosario de términos"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "EAC"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "(\"External Array Configuration\"). Objects, who portraits EAC properties, can expect two values: an array or a string. If a text string is passed, BeyondJS takes the value as a relative path to the location of the external configuration file. Configuration array that can be found in a separate file and whose elements are EOC type."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "EOC"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "(\"External Object Configuration\"). Configuration object that can be included directly as a value or referenced as an external file. Objects whose properties are EOCs can expect two values: an object or a string. If the property has a string as its value, BeyondJS takes the value as a relative path to the location of the external configuration file."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*************************
      INTERNAL MODULE: ./hmr.mdx
      *************************/

      ims.set('./hmr.mdx', {
        hash: 3315126034,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "HMR"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "All bundles automatically expose an HMR object that allows the developer to subscribe to code changes and thus persist the status of the project where is located, optimizing the development process since it avoids the need to redo the flows to get to the current state."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To better explain it, let's suppose that a database element filtering logic is performed in a backend module, this module performs the following steps:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Perform the login against the database."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Make two queries to the database."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Returns the available information for the developer to work with."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Generates a data structure, in which all the information consulted is integrated, so that's returned to the client."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The subscription of changes by the developer with HMR allows the developer to focus on the last point without having to repeat changes for the the first three steps, which means a fairly high optimization in test time."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The implementation of HMR is automatically responsible for replacing the content of a file at the same time it's changed, leaving the update immediately available, without the need to perform any additional action. In addition, the programmer can subscribe to these changes to define what he wants to do with them, offering him the versatility of automatically executing functions on each alteration."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Events"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "change"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "change:[processor-name]"
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***************************
      INTERNAL MODULE: ./intro.mdx
      ***************************/

      ims.set('./intro.mdx', {
        hash: 2553303765,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Estandarized packages"
              }), "\n", "\r\n", "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                children: "What is BeyondJS?"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS es el único framework diseñado para crear módulos JavaScript universales, listos para ser distribuidos y reutilizados como cualquier paquete de NPM que conozcas, sin necesidad de usar empaquetadores ni herramientas adicionales.\r\nEstá hecho para crear módulos o paquetes pensando en el futuro."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /****************************
      INTERNAL MODULE: ./layout.mdx
      ****************************/

      ims.set('./layout.mdx', {
        hash: 2917818224,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Layouts"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Layouts represent the general structure of a website, which can be shared between various internal pages."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
"widget": {
    "is": "layout",
    "element": {
      "name": "main-layout"
    },
...
}

`
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /**************************************
      INTERNAL MODULE: ./light-dark-theme.mdx
      **************************************/

      ims.set('./light-dark-theme.mdx', {
        hash: 937272581,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Light & Dark theme"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS provides a simple mechanism for supporting light and dark themes, consisting of two parts."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "The style template."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Data-beyond-mode attribute."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Themes in the template"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The application template is already configured to support the light and dark theme and supplies a custom CSS property definition file for each theme selection. Then, in the definition.scss file, we have the following code:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "definition.scss"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
@use 'dark';
@use 'light';
:root {
  @include light.properties();
  @media(prefers-color-scheme: dark) {
    @include dark.properties();
  }
}

html[data-beyond-mode="light"] {
@include light.properties();
}

html[data-beyond-mode="dark"] {
@include dark.properties();
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The above code makes the variables, set in the dark and light files, available for each respective theme."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In most cases, if a widget requires validation of the theme it is using, it may be enough to use the host-context selector to define it from a style file, as shown in the following example:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
:host-context(html[data-beyond-mode]) {
    //styles here...
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "There are some cases where it might be necessary for the widgets to dynamically find out about the theme change. For this, the widgets' object API can be used."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
:host-context(html[data-beyond-mode]) {
    //styles here...
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The above line adds to all existing widgets the attribute data-beyond-mode with the value dark."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/template",
                    children: "Template"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/dev-server",
                    children: "Development server"
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***********************************
      INTERNAL MODULE: ./module-config.mdx
      ***********************************/

      ims.set('./module-config.mdx', {
        hash: 218279361,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
                p: "p",
                ul: "ul",
                li: "li",
                strong: "strong"
              }, props.components),
              {
                Link
              } = _components;
            if (!Link) _missingMdxReference("Link", true);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Module configuration"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The module configuration file is the module.json."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
{
  "name": "home",
  "platforms": [
    "backend",
    "web"
  ],
  "widget": {
    "hmr": true,
    "element": {
      "name": "home-page"
    },
    "name": "home",
    "route": "/${content}",
    "is": "page",
    "ts": {
      "path": "/widget/ts",
      "files": [
        "*"
      ]
    }
  }
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The configuration properties are:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "name"
                  }), " string : Defines the name of the module, necessary so that the elements can be imported."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "platforms"
                  }), " array : Defines the ", (0, _jsxRuntime.jsx)(Link, {
                    to: "/concepts/platforms",
                    children: "platforms"
                  }), " supported by the module. The supported values are the identifiers of the existing platforms."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
"platforms": [
    "backend",
    "web"
 ]

`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["[bundle] ", (0, _jsxRuntime.jsx)(Link, {
                      to: "/module#bundle",
                      children: "bundle"
                    }), ": Refers to the identifier name of the type of bundle that you want to add to the module. A module can have one or more bundles. Each bundle receives a configuration object with the processors it uses and some inherent variation of the bundle type added."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(Link, {
                    to: "/docs/bundles",
                    children: "Bundles"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(Link, {
                    to: "/docs/widgets",
                    children: "Widgets"
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
          function _missingMdxReference(id, component) {
            throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./modules.mdx
      *****************************/

      ims.set('./modules.mdx', {
        hash: 1144436079,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              em: "em",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Modules"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Introduction"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In BeyondJS, modules represent the basic unit of development and have features that need to be kept in mind. To fully understand the differences and advantages of the BeyondJS module ecosystem, it is first necessary to review how JavaScript modules work and how they are integrated into the development process today."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["A ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
                  children: "JavaScript module"
                }), " is represented by a single file, with independent tasks and its own scope. This module can export elements and be imported by other modules that consume the variables, objects, or functions it provides."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The bundle modules, for their part, usually use a syntax compatible with the imports included in EcmaScript 6. They are the ones who are in charge of analyzing the dependency tree, removing those elements that are not in the code, and generating a \"bundle\" that is in turn, a container of all the modules used by the development team."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In BeyondJS, the module concept is more encompassing and split into: Modules and Internal Modules."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Internal Modules"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["They represent the known concept of javascript modules, with the difference that the programmer can define whether they are available to be consumed from an external module or not. That is achieved using the /", (0, _jsxRuntime.jsx)(_components.em, {
                  children: "bundle"
                }), "/ magic comment placed on the export."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
export /*bundle*/ class Auth {
    //....
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Internal modules can be imported by any other internal module, thriough the relative file path."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Modules"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "As mentioned before, they represent the minimum development unit of BeyondJS and it is composed of all the internal modules that it requires."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "It allows the concept of a module in BeyondJS to be closer to the definition of a module in general IT, where it represents functionality within a program or system. Although JavaScript modules are compatible with this concept, in practice a module (under the computing concept) of a project, application, or library contains a whole set of JavaScript modules (internal modules in BeyondJS), together with the rest of the tools and technologies required to compose it, such as styles, images or text."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In other words, BeyondJS is the container of all the tools and technologies necessary to ensure the complete functioning of functionality represents a developed functionality and where the developer can define what he wants to export so that can be consumed externally and what not."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Working with modules"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Modules must be contained in a project and are consumed by it, but they can also be used by other projects that import them as libraries."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["BeyondJS handles the import of modules via the npm spec, allows you to define the structure@scope/project-name/module-name. The scope is an optional value, and along with the project name are properties defined in the project configuration and are found in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/project#properties",
                  children: "project.json."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The module name definition is a vital feature in BeyondJS. It helps with future maintenance of the project, allowing modules and folders for restructiring without the behavior of the module being compromissed by imports."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "When BeyondJS brings up the development environment, it performs a mapping of the existing modules, and interprets the paths of each module to be able to reference them correctly when imported. Later on, in the deployment phase, it is in charge of assembling the necessary structure and converting the imports."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Identifier of a module"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The identifier of a module is the one used to import it"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
import * as Mod from 'module-identifier';
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In BeyondJS, identifiers are defined by the bundle (project) identifier, and the module name."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To exemplify it, suppose a \"project\" project is created under the @company scope, then we add a module named login the path to import this module would be:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
@company/project/login
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Now, modules are containers for bundles and bundles represent the final included file. Therefore, to import an unbundle, it is necessary to specify the bundle to consume."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To exemplify it, suppose we have a bundle code that makes an Auth object available inside the login module that we have created. Our import would be as follows:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
import {Auth} from '@company/project/login/code';
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/modules/config",
                    children: "Module configuration"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/bundles",
                    children: "Bundles"
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /********************************
      INTERNAL MODULE: ./processors.mdx
      ********************************/

      ims.set('./processors.mdx', {
        hash: 4169010979,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              strong: "strong",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Processors"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Many of the tools or languages used in the web environment require prior processing to be interpreted by browsers or execution environments, this work done by the processors."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS offers a series of integrated processors, which allow the use of main technologies of the web industry and provides support so that new processors to be integrated if required."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS works differently from bundlers like Webpack or Parcel. You do not need to evaluate the dependency tree of a project nor apply techniques for code separation or tree shaking. Thanks to its modular nature and through the processors, code packaging is done at the bundle level."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Processors are components of BeyondJS that allow interpreting, parsing, transpiling, or compiling code (as the case may be) of the languages or technologies used in a ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/bundles",
                  children: "Bundle."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Existing processors"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "ts:"
                  }), " Allows working with typescript and ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "tsx"
                  }), " files for react."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "sass:"
                  }), " Provides support for working with SASS files with the .scss extension"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "vue:"
                  }), " Provides support for working with vue single-file-components files."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "svelte:"
                  }), " Allows working with svelte single-file-component files"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Properties"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "All processors have the following features:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "path"
                    }), " (string) optional:** Allows defining the directory where the processor files are located. If a value is added, it's interpreted as a directory position relative to the location of the defined module.json."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "files"
                    }), " (array) optional: Allows defining the list of files or folders included in the processor. If the path property is set, the files will be searched within the specified directory, otherwise, they will be searched related to the location of the module.json. An array with an input * can be passed as property value, thus indicating that all files in the specified directory are included."]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Examples"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The following example corresponds to the definition of a bundle of code types. Below, we explain in detail:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "The bundle uses two processors: sass and ts."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "The sass processor includes all files in the /code/scss directory, which is relative to the location of the module.json file."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "The ts renderer only includes the component.ts file, which is located in the /code/ts directory relative to the location of the module.json file."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
{
  "name": "icons",
  "code": {
    "ts": {
      "path": "ts",
      "files": [
        "*"
      ]
    },
    "sass": {
      "path": "scss",
      "files": [
        "*"
      ]
    }
  }
}
`
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /**********************************
      INTERNAL MODULE: ./project-json.mdx
      **********************************/

      ims.set('./project-json.mdx', {
        hash: 1467942270,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Project.json"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Propiedades project.json:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "name"
                    }), " string optional: string is the name to identify the project. It follows the npm standard, so it can only contain safe characters for URLs, without periods or underscores."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "scope"
                    }), " string optional: The same as npm, is used to group packages. And since projects can be published as npm packages, if a scope is added, it must be unique and can only be managed by the organization or user that uses it. Scope uniqueness validation is done by npm, only if the programmer intends to publish their project as a package."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "title"
                    }), " string optional: Descriptive title of the project. It shouldn’t have more than 100 characters."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "description"
                    }), " string optional: Space to briefly explain which are the characteristics of the project."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "template"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Space to briefly explain the characteristics of the project."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "layout"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Space to briefly explain the characteristics of the project."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "params"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Object that allows adding general parameters that are required to be used throughout the project. It has the possibility of defining values by environment. To understand more, you can refer to the Project ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/project/params",
                      children: "Parameters chapter."
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "modules"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Receives an object with a path input that allows defining the modules directory, by default is \"module\"."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "deployment"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Object that allows the configuration of the development environments, which are defined through the deployment entry."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Deployment"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/glossary#eac",
                      children: "EAC"
                    }), " optional: Object that allows configuration of development environments, which are defined through the distributions entry. Distributions can be added from the workspace functionality for it or manually. To understand how they work, you can go to the ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/project/distributions",
                      children: "Distribution chapter."
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "libraries"
                    }), " object optional: Defines the import of projects used as libraries in the defined project."]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_components.strong, {
                        children: "imports"
                      }), " string optional: Each entry represents an imported project. The import is done by adding the scope and name of the imported project."]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***************************************
      INTERNAL MODULE: ./project-structure.mdx
      ***************************************/

      ims.set('./project-structure.mdx', {
        hash: 2830083498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Structure of a project"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS has a configurable architecture that allows for flexible project structures. However, when creating a project through the Workspace or ´beyond-first-project´, the initial structure is created as follows:"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Structure"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "This command creates the following structure:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["A ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/project/json",
                    children: "project.json"
                  }), ", file, with the project settings."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["A ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/beyond/json",
                    children: "beyond.json"
                  }), " file that allows you to manage configurations for the development server."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Template/folder with the project template structure. This folder applies to both web and mobile projects. Read more detail about the template system ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/basics/template",
                    children: "here."
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The folder structure can vary and be extended based on project considerations."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Directory Management"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS follows a directory structure based on keeping semantics simple and concise, enabling the developer to locate themselves based on folder names. However, the developer may have a structure standard he wishes to follow, for which changes to the directory configuration are allowed."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The project's modules are usually located, by convention, in the modules folder. This is defined in the project.json, in the module property."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
"modules": {
    "path": "modules"
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Like all directory configuration properties, the module.path property evaluates the value received relative to where the directory is located. In other words, the modules folder must be located, as in the above example, at the same height as the project.json file. If this property is removed, BeyondJS will try to find the modules at the project's root-directory, which corresponds to the location of the module.json."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/projects/json",
                    children: "project.json"
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*************************************
      INTERNAL MODULE: ./projects-import.mdx
      *************************************/

      ims.set('./projects-import.mdx', {
        hash: 1256433355,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Import of projects"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "project.json"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
"libraries": {
    "imports": [
      "@project/models"
    ]
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In BeyondJS, a project can be imported by another, and function as a library, giving the main project access to its modules. This functionality is key to thinking of solutions with interconnected microservice structures or libraries that contain reusable code."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To exemplify it, we can mention a solution that manages a web page, a mobile application, and an administrative panel, all as independent projects that feed from the same data source. The importation of projects allows all the data logic, to be handled as independent projects, and used by the three applications, thus allowing the re-use of the code."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The importation of projects is performed from the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/projects/json",
                  children: "project.json"
                }), "and the projects must be added to the project's entry of beyond.json."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "If the projects are created through the Workspace, the file beyond.json is modified automatically."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "If the projects are created through the Workspace, the file beyond.json is modified automatically."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Following the mentioned example, the project with the modules that manage the data and connects to the database, could be called models, and in ordet to be imported into the other projects, the following code should have to be added to the project.json."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
"libraries": {
    "imports": [
      "@project/models"
    ]
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The importation property receives an array of items, which enables multiple projects being imported if required."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /******************************
      INTERNAL MODULE: ./projects.mdx
      ******************************/

      ims.set('./projects.mdx', {
        hash: 2673492107,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              strong: "strong",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Projects"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS, offers an architecture focused on providing an efficient way to implement solutions, based on microservices interconnected with other microservices in the backend and with applications with micro-frontend structures if we talk about the client, without neglecting the possibility of creating simpler projects in fewer steps."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To better explain the concept, one can think of a service that offers authentication management in applications. It is natural to believe that there may be developers who need to use the service from a web project with client code, and developers who are working on the backend and can also use the service to validate the session before certain actions."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["From the perspective of BeyondJS, the Auth service could be seen as a project that contains two distributions, one to generate the client code and another to generate the backend code, both with a single source code. The code deployed from the distributions could be made available in both distributions as an ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "NPM"
                }), " package and made available for use by any developer in projects made or not with BeyondJS."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Likewise, if the projects consuming ´Auth´ are BeyondJS projects, they could also import into ´Auth´ via the BeyondJS module import system."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/projects/create",
                    children: "Create a project"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/projects/distributions",
                    children: "Distributions"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/projects/json",
                    children: "project.json"
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*********************************
      INTERNAL MODULE: ./quick-start.mdx
      *********************************/

      ims.set('./quick-start.mdx', {
        hash: 1772231228,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
                p: "p",
                strong: "strong",
                ul: "ul",
                li: "li"
              }, props.components),
              {
                ELink
              } = _components;
            if (!ELink) _missingMdxReference("ELink", true);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Comienzo rápido"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Prerequisitos"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Node ^14.17.4."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Be familiar with dependency managers like npm or yarn."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "beyond-first-project"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To begin with, possibly the easiest way to start a project in BeyondJS is through the beyond-first-project."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
npx beyond-first-project -name @scope/name [-type node] [-container folderName]
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Command options:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Listed below are the flags that can be selected when installing beyond-first-project:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["name: This allows you to define the scope and naming of the project. Projects follow the NPM standard. Read read more about it ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/docs/intro#projects",
                      children: "here."
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "type: his allows you to define the type of project to create (this is optional), if not, a web-type project will be set by default. Accepted values ​​are:"
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "web"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "node"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "backend"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "library"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "web-backend"
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["You can read more about project types ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/projects/types",
                  children: "here."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "container: This allows you to specify if you want to add a project container folder. Remember that BeyondJS supports the ability to handle multiple projects simultaneously."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To exemplify, you can imagine that you need to create a login project of type node, that could be create it with the following command:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
    npx create-first-project -name @scope/name -type node
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "When the command execution finishes, the project structure is created and is ready to be executed."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To start the development server, the following command needs execution:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
npm start
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Done! Now you can start programming and testing the project. The workspace is accessed through: ", (0, _jsxRuntime.jsx)(ELink, {
                  to: "https://workspace.beyondjs.com/",
                  children: "https://workspace.beyondjs.com/"
                }), " and the project created is available at ", (0, _jsxRuntime.jsx)(ELink, {
                  to: "http://localhost:6500",
                  children: "http://localhost:6500"
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The workspace is a system that BeyondJS provides the developer with a better user experience. You can read more about him ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/workspace",
                  children: "here."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/projects/structure",
                    children: "Structure of a project"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/modules/intro",
                    children: "Modules"
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Overall installation"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To install BeyondJS globally, run the following command:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
npm i --location=global beyond
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "From the installation, it is only necessary to go to the folder where you want to create the project(s) and initialize BeyondJS from the command line as follows:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
beyond run
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["If everything goes smothly, a message will appear saying that BeyondJS is running and that you can access the workspace at ", (0, _jsxRuntime.jsx)(ELink, {
                  to: "https://workspace.beyondjs.com/",
                  children: "https://workspace.beyondjs.com/"
                }), ", from where a project is created through the workspace graphical."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Also at the workspace, you can create a project from the graphical interface. See how you can do it ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/projects/create",
                  children: "here."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/project/create",
                    children: "Creating a project"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/tutorial/web",
                    children: "Tutorial"
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
          function _missingMdxReference(id, component) {
            throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./routing.mdx
      *****************************/

      ims.set('./routing.mdx', {
        hash: 1241205697,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              strong: "strong",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Routing"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS has simple and powerful route handling at the same time. For most cases, the URLs are defined in the configuration of page type widgets, through the URL property, but there may be cases where some more advanced configuration is required."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Note: This chapter covers the documentation of the routing object. If you want to learn about the handling of parameters in the URL of a page, you can read about it in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/widgets/page",
                  children: "Page widgets chapter."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Routing object"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The routing object manages the history of the browser and handles compatibility for web and mobile projects. It offers an API that allows you to work with the history and manipulate it."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "It is made available by the kernel and is imported as follows:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
    "@beyond-js/kernel/routing/ts";

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The BeyondJS routing object exists to cover the following scenarios:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Provide the developer with a simple API to perform complex URL treatments, such as validations, redirections, and variable management."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Identify the flow and history of user navigation within the applicative. The history object of the browser has a very limited treatment of it, and only allows access to the number of existing navigations. BeyondJS on the other hand manages a detailed history."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Since hybrid applications made with JavaScript resolve file handlingutilizing a different protocol than applications accessed from a browser, BeyondJS treats it to abstract the developer from it and ensure the same behavior regardless of the platform they are working."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Navigation"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To maintain compatibility with the known APIs, the Routing object has methods homologous to the ones of the browser history API. They cover equal needs, but at the same time, they are in charge of unifying the behaviors between the platforms and updating the elements of the history of BeyondJS."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The available methods are:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "routing.pushState"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Record a new item in the history"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
routing.pushState('/home', [{state}]);
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "routing.replaceState"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Modify the current URL without adding new items to the history."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
routing.replaceState('/home', [{state}]);
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "It has the same interface as the pushState method of the history object of the Web API, and additionally, it is in charge of updating the history of BeyondJS."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Route Override"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "routing.redirect"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Generally, although there may be more, there are two typical contexts in which it is necessary to treat URLs:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "When it is required to manage friendly URLs."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "When it is necessary to validate access permissions and, if the person trying to access the URL does not have them, it is intended to redirect to a specific flow."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["For this type of case, an asyncronaredirect function can be defined as a property of the routing object. This function receives an object of type ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/api/uri",
                  children: `<URI>`
                }), " that has a property pathname that represents the current path."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The redirect function can return an undefined or a string. If an undefined is returned, the navigation flow will continue without interruption. If a string is returned, it will be considered as the final URL, and BeyondJS will redirect to the returned URL."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
routing.redirect = async function redirect(uri): Promise[string] {
	return '/';
};

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In the example above, any route received is redirected to /."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Handling of URLs not found."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The routing object has a ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "missing"
                }), " property that can be defined as an asynchronous function and returns the name of the widget you want to display in case the requested URL is not found."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A typical example of use, is to implement a 404 screen for a page not found."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A basic implementation could be the following:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
routing.missing = async (pathname: String) => {
   return 'app-docs-missing';
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In the above example, the name of a widget is returned. BeyondJS will validate that the widget exists when the URL is not fetched and display it as an error page."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /**************************************
      INTERNAL MODULE: ./state-management.mdx
      **************************************/

      ims.set('./state-management.mdx', {
        hash: 328805125,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Manejo de Estados"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The state is the representation of the rendered values of a component or widget on the screen. It migth mutate and vary due to various factors, such as data updates from a server or user interaction."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["There are numerous libraries for managing the state of a project, generally associated with\r\nthe ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/widgets",
                  children: "View Framework"
                }), " at use. BeyondJS allows the integration of the state management tool you want,\r\nas long as is prepared for modular operation."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "You can see a working example of a counter that shares state handling between a component built with React,\r\none built in with Svelte, and one built in with Vue in This example."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Also, BeyondJS defines a structure for state handling. The object that handles the state must be made available via the widget controller's createWidgetStore method.\r\nThis method must return an object that implements the IWidgetStore interface, especially if is expected to work along with SSR."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /****************************************
      INTERNAL MODULE: ./styles-importation.mdx
      ****************************************/

      ims.set('./styles-importation.mdx', {
        hash: 982656351,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
                p: "p"
              }, props.components),
              {
                Subtitle
              } = _components;
            if (!Subtitle) _missingMdxReference("Subtitle", true);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Import of style files"
              }), "\n", (0, _jsxRuntime.jsx)(Subtitle, {
                children: "Node Modules"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "If you need to include a style file of any library installed in node_modules, it can be imported in non-relative way, from the module file in which it is required, using the ~ character followed by the bundle path in the node_modules folder."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "This, if you want to work with bootstrap you could import it in the following way:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
    @import ~bootstrap/sass/bootstrap.scss;
    `
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Likewise, if it is required to import a specific file within the library, such as de_variables.scss, it can be imported directly:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
    @import ~bootstrap/sass/variables.scss;
    `
              }), "\n", (0, _jsxRuntime.jsx)(Subtitle, {
                children: "Importing styles from a bundle"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The import of style modules is considered in BeyondJS as a non-relative import, thus following the same rules of importing an existing file in an npm library, but the included path, in this case, follows the naming structure of the modules. Modules made with the framework, which, as we have seen before, can be composed of @scope/name, where the scope is optional."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To exemplify it, let's imagine that there is a module called form, which includes a bundle code, which defines components of a form, and is required to import the styles from another module. In the module, a sass file is created that defines stylings for the labels, whose name is labels.scss. The import line would be:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
    @import ~@scope/project-name/form/sass/scss/label.scss;
     `
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
          function _missingMdxReference(id, component) {
            throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./styles-module.mdx
      ***********************************/

      ims.set('./styles-module.mdx', {
        hash: 3486913752,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Styles in the module"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["To add styles to a created module/bundle, the SASS ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/processors",
                  children: "processor"
                }), " must be added."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "If the workspace is used to create projects, the sass processor is included by default in the bundles of type code and widget of any type."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The standard sass processor configuration is as follows:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "module.json"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
{
    ...
    "sass": {
        "path": "sass",
        "files": ["*"]
    },
    ...
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In the previous configuration, you can observe a definition where there is a sass folder in the module, with a location relative to the module.json file and that all the files in this folder must be taken into account as style files."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The container bundle of the processor is in charge of inserting the styles in the DOM when the element is rendered, by doing this it is not required to import semantic JavaScript from external files in our code."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /****************************
      INTERNAL MODULE: ./styles.mdx
      ****************************/

      ims.set('./styles.mdx', {
        hash: 2487022451,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              strong: "strong",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Styles in the template"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The handling of styles in the BeyondJS Template system is done through the configuration of the sass style processor. This configuration is simply done at two levels:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "template.json"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
{
  "application": {
    "processor": "sass",
    "path": "application",
    "files": [
      "*"
    ]
  },
  "global": {
    "processor": "sass",
    "path": "global",
    "files": [
      "*"
    ]
  }
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The above code is the default configuration of the web project template. Basically, you are configuring the sass processor for the application and global templates. The purpose of both is described below."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "On this page, we assume that the template is located in a folder with that name at the root of the project. If a change was made in the default configuration, the configured location should also be considered."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "template.application"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The application property represents the styles.css file included in web platform projects. Intended to add some general styling to the document and define ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://developer.mozilla.org/en-US/docs/Web/CSS/--*",
                  children: "propiedades personalizadas"
                }), " so they are available in all widgets."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Custom properties"
                }), " are the only style values that are available for sharing between widgets, as their inclusion is via Web Components with Shadow DOM."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The default style settings for template.application include all scss files found in the ./template/application directory inside the project. These are:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Estos son:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "./variables.scss: Contains a list of default sass variables."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "./styles.scss: contains very basic styles for the document body."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "./custom-properties/dark.scss: Provides a mixin that defines the variables to use in dark mode styling."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "./custom-properties/light.scss: Provides a mixin that defines the variables to use in light mode styling."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "./custom-properties/material-design.scss - Contains the material design color system css properties."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "./custom-properties/definition.scss: includes the definition of the custom css properties that integrates the use of the mixins defined in the dark.scss and light.scss files."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The developer can edit or add any additional file of styles and will be integrated automatically, because a \"*\" has been added in the configuration, which indicates that all the files inside the folder must be processed."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "template.global"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The global property represents the global.css file which, unlike styles.css, is intended to share styles that the developer considers global, and therefore must be shared by all widgets. To accomplish this the final file is included within the styles of each widget."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The same as with the application property, by default, all the files that are inside the /global folder are included, and by default only a styles.scss file is included."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/estyles/modules",
                    children: "Style in the modules"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/template",
                    children: "Template"
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*************************************
      INTERNAL MODULE: ./template-system.mdx
      *************************************/

      ims.set('./template-system.mdx', {
        hash: 3906911787,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
                p: "p",
                ul: "ul",
                li: "li",
                strong: "strong"
              }, props.components),
              {
                Subtitle
              } = _components;
            if (!Subtitle) _missingMdxReference("Subtitle", true);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Template Systems"
              }), "\n", (0, _jsxRuntime.jsx)(Subtitle, {
                children: "Template of a project"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS provides a simple but robust architecture for managing templates in projects, which has the following features:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Styles:"
                  }), " Integrated support of LESS and SASS preprocessors."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "CSS properties:"
                  }), " Basic structure of variables that allows working with web components efficiently."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Global Style:"
                  }), " Global stylesheet for the project."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Override:"
                  }), " A unique feature that allows redefining styles and texts in existing modules without touching the original code."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Code separation:"
                  }), " Independent handling of style files with automated process for generating of independent and optimized final files."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Integrated ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Light & Dark Theme."
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(Subtitle, {
                children: "Settings"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The template configuration, like all elements in BeyondJS, is handled through a configuration file, whose name, by convention, is template.json, and is located in the template folder at the the project root. However, both name and location are configurable values in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/project/config",
                  children: "project.json"
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The template can be managed from the ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://workspace.beyondjs.com/",
                  children: "Workspace"
                }), " and when a project is created, the default structure for its management is already configured."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Configuration properties explained below:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The application and global properties receive the same configuration parameters, but have different purposes."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "template.application"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The application configuration property represents the general styles file of the project, and its main focus is to be the location where the custom CSS properties are defined and any style that is required to be applied to the general document, external to the widgets."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "custom properties"
                }), " play a key role in managing widgets. Web components with Shadow DOM are not affected by the general styling of the website they are embedded into. However, the CSS properties can still be accessed and used."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Further detailed information on Style management, can be found in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/styles/template",
                  children: "Styles chapter of the template."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "template.global"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Its purpose is to provide the developer with the chance of sharing code between widgets. The files added into the global settings, are compiled into a file named global.css, which is included in the shadow dom of each widget, in order for them to have access to the styles."
              }), "\n", (0, _jsxRuntime.jsx)(Subtitle, {
                children: "Parameter setting"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
"application": {
    "processor": "sass",
    "path": "application",
    "files": [
      "*"
    ]
},
"global": {
    "processor": "sass",
    "path": "application",
    "files": [
      "*"
    ]
  }

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "As you can see in the code above, setting both properties works the same, they receive an object with the following properties:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "As you can see from the code above, you can define three properties."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "processor:"
                  }), " Procesador a utilizar. Soporta sass y less"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "path:"
                  }), " Directorio donde se encuentran los archivos, sino se define se buscaran todos los archivos relativos a la ubicación del archivo de configuración."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "files:"
                  }), ", el * indica que se debe tomar en cuenta cualquier archivo adentro del path definido. Si se específican archivos por nombre, sólo se tomara en cuenta los archivos indicados."]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
          function _missingMdxReference(id, component) {
            throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./templates.mdx
      *******************************/

      ims.set('./templates.mdx', {
        hash: 278070280,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Project template"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS provides a simple but robust architecture for managing templates in projects, which has the following features:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Styles:"
                  }), " Built-in support for LESS and SASS preprocessors."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "CSS properties:"
                  }), " A basic variable structure that allows you to work with web components efficiently."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Global Style:"
                  }), " Global style sheet for the project."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Override:"
                  }), " A unique feature that allows you to redefine the styles and texts of existing modules without having to touch the original code."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Code separation:"
                  }), " Independent handling of the style files with an automated process for generating independent and optimized final files."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Integrated ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Light & Dark Theme."
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Setting"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The template configuration, like all elements in BeyondJS, is handled by a configuration file whose name, by convention, is template.json and is located in the template folder at the project root. However, both name and location are configurable values in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/project/config",
                  children: "project.json."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The template can be managed from the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/workspace",
                  children: "Workspace."
                }), " And when a project is created, the default structure is already configured for its management."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Explained below, are the configuration properties."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The application and global properties receive the same configuration parameters but have different purposes."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "template.application"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The application configuration property represents the general styles project's file. Its main focus is to be the place where the custom CSS properties are defined and any style that needs to be applied to the general document, external to the widgets."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Custom properties"
                }), " play a key role in handling widgets. Web components with Shadow DOM are not affected by the general website styles, where they are included-in. CSS properties, however, can be accessed and used."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Style management can be reviewed in detail in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/styles/template",
                  children: "Styles of the template chapter."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "template.global"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Its purpose is to provide the developer with the possibility of sharing code between widgets. The files added in the global configuration are compiled into a file named global.css, which is included in the shadow dom of each widget so that they have access to the styles."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Configuration parameters"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
"application": {
    "processor": "sass",
    "path": "application",
    "files": [
      "*"
    ]
},
"global": {
    "processor": "sass",
    "path": "application",
    "files": [
      "*"
    ]
  }
  `
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "As can seen in the previous code, the configuration of both properties works the same, they receive an object with the following properties:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "As you can see in the above code, you can define three properties:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "processor:"
                  }), " Processor to use. Supports sass and less"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "path:"
                  }), " Directory where the files are located, if not defined, all the files related to the location of the configuration file will be searched."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "files:"
                  }), " the * indicates that any file within the defined path should be taken into consideration. If files are specified by name, only the indicated files will be taken into account."]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /************************************
      INTERNAL MODULE: ./tutorial-start.mdx
      ************************************/

      ims.set('./tutorial-start.mdx', {
        hash: 750329615,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
                p: "p",
                strong: "strong"
              }, props.components),
              {
                Subtitle
              } = _components;
            if (!Subtitle) _missingMdxReference("Subtitle", true);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.PreTitle, {
                children: "Walkthrough"
              }), "\n", "\r\n", "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                children: "Web Project"
              }), "\n", "\r\n", "\n", (0, _jsxRuntime.jsx)(Subtitle, {
                children: "Before beginning"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["This tutorial walks through the main flow of development with ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Beyond"
                }), " and clearly shows the benefits it offers in its use.\r\nThe purpose of this development is for end-users/developers who want to learn while practicing, therefore the concepts\r\nthat define the structure of ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Beyond"
                }), " are addressed in a general approach, focusing on making a quick, concise, and clear\r\nexercise out of it. We strongly suggest accessing the corresponding chapters in the documentation to understand some concepts\r\nbetter."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The tutorial is structures as follows:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Workspace.\r\nCreation of the first module.\r\nBack-end integration\r\nNavigation"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "We suggest completing the tutorial, to prove how in a short amount of time you´ll be able to integrate client and server-code using the same JavaScript structure."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Before you start, we recommend revising these concepts to have a clear concept about them, while you go through the tutorial."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Bundle:"
                }), " Represents a set of source files that generates a single final file, included in the browser.\r\n", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Module:"
                }), " Represents one or multiple bundles.\r\n", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Processor:"
                }), " Represents the code processor, compiler, or transpiler of the technology being used."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                children: "Starting"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The first thing to do is create the project, for this, we will use the bundle ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                  children: "@beyond-js/create-project"
                }), ". It is responsible for installing BeyondJS locally and generating the initial structure of our project."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "npx @beyond-js/create-project --name @test/login --type web-backend --container beyond"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["BeyondJS, is developed to work as a global dependency and run multiple projects simultaneously. Learn more about it ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/quick-start",
                  children: "here"
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["In the previous command, you can see a requisition to create a web-type project with a backend, and it was added as a scope ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                  children: "testing"
                }), " and as a name ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                  children: "login"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The scope and name, are data that allow the project to be identified and be ready to be published as an npm bundle, or to be imported from another project. These settings can be done manually, but the workspace just makes the process much simpler. You can see the explanation of it in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/project/config",
                  children: "Project Settings chapter."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "At the completion of the command, we can validate the structure created inside the directory. It is as follows:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_components.strong, {
                  children: "beyond.json:"
                }), " File for managing the development server, managed by BeyondJS.\r\n", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "package.json:"
                }), " Project dependencies file\r\n", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "projects.json:"
                }), " Projects configuration file, allows BeyondJS to identify the projects for launch.\r\n", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "login:"
                }), ": Project folder."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// SUB List"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_components.strong, {
                  children: "project.json:"
                }), " Contains the basic configuration of the project (may vary depending on the type and needs of the project).\r\n", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "/modules:"
                }), " Folder where the default project modules are created. This value is configurable. Reed more about it in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/projects/json",
                  children: "Project Configuration"
                }), " chapter.\r\n", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "template:"
                }), " This folder contains all the needed elements to define the general project template."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["// SUB SUB LIST\r\n", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "template.json"
                }), ": File that allows adjustments to be done to the project template setting."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Learn more about the available project types in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/quick-start",
                  children: "Quick Start chapter."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "After having executed the command, we are ready to start our project. Execute the following:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "npm start"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["After executing the command, a message will appear indicating that the workspace is available at ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://workspace.beyondjs.com/",
                  children: "https://workspace.beyondjs.com/"
                }), " While navigating it, you will be able to see the Workspace interface with the project list board, where the created project appears with the link to navigate it below the title. If we click on it, the screen will split into two, and we will be able to navigate the project from the workspace."]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
          function _missingMdxReference(id, component) {
            throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./tutorial/backend.mdx
      **************************************/

      ims.set('./tutorial/backend.mdx', {
        hash: 2318652868,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
                p: "p",
                ul: "ul",
                li: "li",
                strong: "strong"
              }, props.components),
              {
                Subtitle
              } = _components;
            if (!Subtitle) _missingMdxReference("Subtitle", true);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Backend-code"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS provides a safe and efficient environment for creating backend code, whether you need to work with stand-alone services, task-specific, or looking to implement a client project connected to a backend API."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "For BeyondJS purposes, we can classify these code structures into two types:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Backend services"
                  }), ": Node code representing a service running on the backend and can only be used by modules that runs on the backend as well."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Backend APIs"
                  }), ": Allows the connection between the backend-code and the client-code."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                children: "API Server"
              }), "\n", "\r\n", "\n", (0, _jsxRuntime.jsx)(Subtitle, {
                children: "bundle-bridge"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Server APIs in BeyondJS represent functions that execute code on the server and can be consumed from client-code. They handle the logic for connecting to a backend and returning data. It's achieved simply by creating a ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/bundles#bridge",
                  children: "Bundle-bridge"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["To execute backend-code in BeyondJS, is necessary to have the needed distributions configured. If the project is created from the web-backend project type, then is already configured. You can find more information in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/distributions",
                  children: "Distributions Chapter."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
    {
        "name": "module-name",
        "bridge": {
            "path": "ts",
            "files": ["*"]
        },
        "platforms": ["*"]
    }
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Like any module or bundle, it can be managed from the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/workspace",
                  children: "Workspace"
                }), " or manually."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "As its name indicates, the bridge-type bundle function as a bridge between client-logic and server-logic. Generally, logic is associated with data management or file management implemented on the server. The bridge enables the implementation and availability of features that are required to be queried from the client and keeps encapsulate on the server those that don’t."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The code for a bundle bridge looks like this:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
export /*actions*//*bundle*/
class Auth {
    async login(user :string, password: string) {
        if (user !== data.user || password !== data.password) {
            return {status: true, error: "Invalid data" };
        }

        return {status: true, data: {valid: true} }
    }

}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "An ordinary Javascript object, right?"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS generates a client object that makes the web-socket connection to the server, executes the code implemented by the developer, and makes the response available in the client code. This enables the developer to abstract from the need to worry about the connection between the client and server layers and allows the code to function as part of the same ecosystem."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Now all you need to do is initialize the server. To do this, it is necessary to create a module with a bundle start that is in charge of starting the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/bee",
                  children: "BEE."
                }), " The code for the bundle start is as follows:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
import { listen } from "@beyond-js/backend/listen/ts";
listen();
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["In the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/tutorial/web",
                  children: "Web Tutorial"
                }), " available, an implemented bridge allows you to see the operation of the BeyondJS backend APIs in action."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                children: "Magical comments"
              }), "\n", "\r\n", "\n", (0, _jsxRuntime.jsx)(Subtitle, {
                children: "bundle “backend”"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Backend bundles represent JavaScript code executed on the server and used only by modules that also run on the server. In other words, they are like any typical NodeJS service, with the exception that in a development environment are executed through a BEE or BeyondJS process, which increases productivity by enabling it to work with HMR in an automated way and without configuration."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/modules/create",
                    children: "Create a module"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/bundles",
                    children: "Bundles"
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
          function _missingMdxReference(id, component) {
            throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./tutorial/bridge.mdx
      *************************************/

      ims.set('./tutorial/bridge.mdx', {
        hash: 2002777494,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
                p: "p",
                em: "em",
                ul: "ul",
                li: "li"
              }, props.components),
              {
                Code,
                Link
              } = _components;
            if (!Code) _missingMdxReference("Code", true);
            if (!Link) _missingMdxReference("Link", true);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.p, {
                children: "Tutorial\r\nBridge Code\r\nAs we mentioned before, in this moment, usually, each project has its logic for session validation. The intention today is not to focus on how should this be handled. What you will do, is create a basic code that allows you to connect our client code with the backend node. You'll add this to the existing bridge.ts file in the module you just created."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "bridge.ts"
              }), "\n", (0, _jsxRuntime.jsx)(Code, {
                children: `
const data = {
    user: 'admin',
    password: '123456.'
}
`
              }), "\n", (0, _jsxRuntime.jsx)(Code, {
                children: `
export /*actions*//*bundle*/
class Auth {

    async login(user: string, password: string) {
        if (user !== data.user || password !== data.password) {
            return {status: true, error: 'Invalid data'};
        }

        return {status: true, data: {valid: true}}
    }

}
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The code is quite simple, but there are several interesting points to highlight:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The magic comment /", (0, _jsxRuntime.jsx)(_components.em, {
                  children: "bundle"
                }), "/, is used by Beyond to identify that the code below should be considered as a code to be exported in the final bundle. If you want to read more about how bundles and modules work, we recommend you go to the modules chapter of the documentation.\r\nThe magic comment /", (0, _jsxRuntime.jsx)(_components.em, {
                  children: "actions"
                }), "/ is used by BeyondJS to identify which segments of the bundle bridge should be made available as actions that can be consumed by the client.\r\nThe response of the login method is a flat object that arrives with the defined structure to the client.\r\nConnect client and server\r\nThe bridge we created is a node service. Generally, to run a node service, it is necessary to go to a console. However, in BeyondJS, these services work as a BEE (Beyond Environment Service)and to execute it, we must go to theWorkspace and click on the execution button, which we can find on the project detail screen"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "And another in the project detail:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Beyond Environment Execution - Workspace - BeyondJs\r\nTo implement the login functionality with our server, we must import our auth object in the client code and associate the onSubmit event to our form."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Projects in BeyondJS follow the same guidelines for specification and resolution of names and packages, as npm, in the same way that typescript does. They must have a module name and can handle a scope as well. In our case, we define both when creating our project and module respectively."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Next, in our Page component we import the Auth object"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(Code, {
                  children: `import {Auth} from "@testing/login/home/bridge";`
                }), "\r\nWe add our onSubmity function and associate it to the form, our code should be as follows:"]
              }), "\n", (0, _jsxRuntime.jsx)(Code, {
                children: `
import * as React from 'react';
import { Auth } from '@testing/login/auth';

interface IForm {
disabled?: boolean;
}
const model = new Auth();
export /_page_/
function View(): JSX.Element {
const defaultValues = {username: '', password: '', fetching: false};
const [values, setValues] = React.useState(defaultValues);
const [error, setError] = React.useState();
const handleChange = ({currentTarget: target}) => {
const currentValue = {...values};
currentValue[target.name] = target.value;
setValues(currentValue);
};
const formDisabled: IForm = {};
const {username, password} = values;
if (!username || !password) {
formDisabled.disabled = true;
}
const onSubmit = async event => {
try {
event.preventDefault();
const response = await model.login(username, password);
if (response.data?.valid) {
console.log('valid data');
return;
}
setError(response.error);
} catch (e) {
console.log(e)
}
}

     return (
        <div className="page__container">
            <form onSubmit={onSubmit}>
                {
                    error &&
                    <div className="form__error">
                        {error}
                    </div>
                }
                <label>User: </label>
                <input onChange={handleChange} type="text" name="username"/>
                <label>Password</label>
                <input onChange={handleChange} type="password" name="password"/>
                <div className="form__actions">
                    <button onClick={onSubmit} {...formDisabled}>Login</button>
                </div>
            </form>
        </div>
    );

}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Time to test our form. If we add the correct data, we can see a message appearing in the browser console indicating that the data was validated, and you can log in. If, on the contrary, we add incorrect data, we can see how the error message \"Invalid data\" appears. Which we update in the component's state variable."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Summary:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "We create a module with a page type widget\r\nWe create a connection with a backend node through the bundle bridge.\r\nWe review the module resolution structure to import the Auth bridge and be able to add the login validation.\r\nNow we just need to redirect the user to a welcome screen."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(Link, {
                    to: "/docs/tutorial/routing",
                    children: "Routing"
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
          function _missingMdxReference(id, component) {
            throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./tutorial/create-a-project.mdx
      ***********************************************/

      ims.set('./tutorial/create-a-project.mdx', {
        hash: 3742291707,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Managing a project"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Projects, like all other BeyondJS elements, are configured using objects in .json files. Project configuration files are generally named ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/projects/json",
                  children: "project.json"
                }), " as a convention and allow a wide range of configurations."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Projects can be configured in two ways: through the Workspace interface and manually."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Using the Workspace"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["To create a project from the workspace, you first need to make sure BeyondJS is running in the folder where you want to work on your projects. As explained in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/projects/intro",
                  children: "introducción"
                }), ", BeyondJS, is developed to handle projects simultaneously, so keep in mind that the run directory may be one where you want to add \"multiple\" projects."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Let's start BeyondJS::"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "beyond run"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Then, we access the workspace, which will be available at ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://workspace.beyondjs.com/",
                  children: "https://workspace.beyondjs.com/"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The workspace has three ways to access the project creation process:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["In the ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/workspace#preaside",
                    children: "Preaside"
                  }), " by using the icon."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["En el ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/workspace#board",
                    children: "Board"
                  }), " at the top right, the option \"create project.\""]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "When no project created, a message is displayed inviting you to create a project, as seen in the above reference image."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Clicking on any of the mentioned alternatives, a modal is displayed, allowing you to select the type of project to create. This function enables you to start with a blank project or using an already created template. Current choices are:"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Blank Project Types"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Web:"
                  }), " Ready to start a web project that can be distributed on the internet or as a mobile application."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Node:"
                  }), " Ready to distribute as a project to run in a node environment"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Backend:"
                  }), " Node project that makes available interfaces that could be consumed in real-time with web sockets from another node project or a client project."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Library:"
                  }), " Ideal for creating projects intended to be distributed as ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "NPM"
                  }), " packages"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "web - backend:"
                  }), " Generates a web project with a backend distribution."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Template types"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "React, vue y svelte"
                  }), " apps, Projects to start working with the preferred framework library."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Express:"
                  }), " Project with an initial structure to create an express server."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Template web:"
                  }), " Project with a client and backend structure communicated through a web socket."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["It is possible to work with different view libraries/Frameworks in the same project, thanks to the micro-frontend structure offered by BeyondJS. Read more about it in ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/widgets/intro",
                  children: "the Widgets chapter."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Project Information"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "After seleting the project type, a form appears requesting the scope and name of the project, the port on which it will run, and additionally, an optional title and description. After filling in the necessary data, the workspace is responsible for creating the project with the file structure, and the project is available to be accessed on the configured port."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "All projects have dependencies on NPM packages, which can optionally installed them from the workspace. If you haven't done it before, you need to install dependencies manually for the project to work."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Creación manual"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The definition of a project is done through the project.json file."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The minimum structure required to create a project is as follows:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
{
  "name": "project-name",
  "version": "1.0.0",
  "title": "Project title",
  "description": "Description"
  "languages": {
    "default": "en",
    "supported": [
      "en"
    ]
  },,
  "modules": {
    "path": "modules"
  }
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Having created the project.json file, it only left creating the BeyondJS server configuration file, which is called beyond.json and whose basic structure is as follows:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
{
  "applications": [
    "path-to-project/project.json"
  ]
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The applications' input is an array that can contain a list of paths relative to project configuration files."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Read more about BeyondJS configuration options in the development environment in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/dev-server",
                  children: "Development Server chapter."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/projects/create",
                    children: "Create a project"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/projects/distributions",
                    children: "Distributions"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/projects/json",
                    children: "project.json"
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./tutorial/first-module.mdx
      *******************************************/

      ims.set('./tutorial/first-module.mdx', {
        hash: 126487021,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Tutorial",
                title: "First module"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "From the workspace, we can also see the content of these modules. For this, we can click on the project icon at the PreAside. Then you can select the module you want, and then you can see its structure."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "As can be observed, the project has two modules created, the Home, which is a response to the base URL of the project, and the “start-backend” module, which will be addressed later."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The workspace allows us to"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "See and manage modules."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Add files."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Edit source code."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Generate declarations of code."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Errors handling."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Manage general settings of the module"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Manage Templates."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "From the Workspace, we can also navigate the module by accessing the PreAside at the Active project icon. You click on the home module, and it will display the list of bundles contained in the module."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The structure of the module is as follows"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "widget: Folder where the page component code is located."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "ts:"
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_components.code, {
                        children: "controller.ts"
                      }), ": Component controller object, required to mount the WebComponent in the browser."]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["`views", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                        children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                          children: [(0, _jsxRuntime.jsx)(_components.code, {
                            children: "index.tsx"
                          }), ": React component that renders the page."]
                        }), "\n"]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "scss: Folder for adding styles to the module"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "module.json: Module configuration file (Place to define the type of bundles and processors to use)."
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Let's get down to business!"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Having a clear idea on the structure, what's next is creating the login form and adding some styles, and then continuing with the connection to the backend node."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                children: "Form Creation"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "If you have previously worked with React, what follows is the part you will probably know best, for sure, with some subtleties. Next, you will edit our page.tsx file to create a login form and a basic functionality to update status."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "IDE or from the integrated Workspace Editor, which speciallty is providing help to the developer for specific cases. But for the purposes of the tutorial, we recommend using it by clicking on the required file from the side."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
import * as React from 'react';

interface IForm {
disabled?: boolean;
}

export /*page*/
function View(): JSX.Element {
    const defaultValues = {username: '', password: '', fetching: false};
    const [values, setValues] = React.useState(defaultValues);
    const [error, setError] = React.useState();
    const handleChange = ({currentTarget: target}) => {
        const currentValue = {...values};
        currentValue[target.name] = target.value;
        setValues(currentValue);
    };
    const formDisabled: IForm = {};
    const {username, password} = values;
    if (!username || !password) {
        formDisabled.disabled = true;
    }
     return (
        <div className="page__container">
            <form>
                {
                    error &&
                    <div className="form__error">
                        {error}
                    </div>
                }
                <label>User: </label>
                <input onChange={handleChange} type="text" name="username"/>
                <label>Password</label>
                <input onChange={handleChange} type="password" name="password"/>
                <div className="form__actions">
                    <button {...formDisabled}>Login</button>
                </div>
            </form>
        </div>
    );
}
`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                children: "Styles"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS handles styling by default with the SASS preprocessor. Let's go to our styles.scss file and add some styling to the form."
              }), "\n", (0, _jsxRuntime.jsx)("div", {
                className: "block__note",
                children: (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["SASS is a processor in BeyondJS. To read in-depth about the processor's mechanism, you can find further details in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/processors",
                    children: "Processors chapter"
                  })]
                })
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
.page\_\_container {
display: flex;
padding: 20px;
height: 100%;
margin: 0;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: center;

.form\_\_error {
padding: 15px;
display: grid;
background: var(--error);
color: var(--text-on-primary);
}

form {
display: flex;
flex-direction: column;
gap: 15px;
background: var(--bg-element);
padding: 30px;
width: 100%;
max-width: 500px;

    input {
      padding: 8px;
      border: 1px solid var(--gray-light);
      transition: all 300ms ease-in;

      &:hover, &:focus {
        outline: none;
        border-color: var(--primary);
      }
    }

    .form__actions {
      display: flex;
      justify-content: end;

      button {
        background: var(--primary);
        cursor: pointer;
        border: 1px solid var(--primary-dark);
        color: var(--text-on-primary);
        padding: .5rem 2rem;
        transition: all 300ms ease-in;

        &:disabled {
          opacity: .6;
          cursor: not-allowed;
        }

        &:hover {
          background: var(--primary-dark);
        }
      }
    }

}

}
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Let's explain a bit the above code."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "We add basic styling to the form, the inputs, the submit button, and for handling an error message."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Custom properties: the custom properties used are a simple structure for handling variables included by beyond in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/template",
                      children: "Project Template."
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/tutorial/backend",
                    children: "Backend"
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /**************************************
      INTERNAL MODULE: ./tutorial/routing.mdx
      **************************************/

      ims.set('./tutorial/routing.mdx', {
        hash: 3610803735,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Tutorial",
                title: "Routing"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The first thing we must do is create a new module with a bundle of type Page. For this, we going to repeat the process that we used to create our Bridge bundle."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "We click on the icon to add modules and a modal like the following will open:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "We select blank module. On the next screen, it request the bundle, we then select “page”:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "On the final screen, it will require us for some information, below it is explained what to place on it:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Module name: welcome"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Web component name: welcome-page."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Url: \"/welcome\""
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Pages and layouts in Beyond are resolved using Web components. If you want to know in detail how they work and why, go to the Web Components Section."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "We then open the Page object created in the module and add a simple message that says: Welcome!"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Next, we will make the necessary adjustments to redirect to our welcome module after logging in. What we need to do after is import the \"routing\" object from Beyond, use the pushState method as it provides, and navigate to the welcome page."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Imports"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import { routing } from '@beyond-js/kernel/routing';`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Navigation"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `routing.pushState('/welcome');`
              }), "\n", (0, _jsxRuntime.jsx)("div", {
                className: "block__note",
                children: (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["BeyondJS provides a routing object to interact with the navigation api, you can learn more about it in the section\r\non ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/routing",
                    children: "Routing page."
                  })]
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "We are done! now we only need to refresh our form page to let BeyondJS register the new URL. If we retest our form, we'll be able to log in and see how we've been redirected to the welcome page."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*************************
      INTERNAL MODULE: ./uri.mdx
      *************************/

      ims.set('./uri.mdx', {
        hash: 3454225157,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
                p: "p",
                ul: "ul",
                li: "li",
                strong: "strong"
              }, props.components),
              {
                Subtitle
              } = _components;
            if (!Subtitle) _missingMdxReference("Subtitle", true);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "URI object"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Import"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import {routing: {uri}} from "@beyond-js/kernel/routing/ts";`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The URI object provides an API equivalent to that of the window.location object, but with added functionality that ensures correct behavior in the web and mobile environment."
              }), "\n", (0, _jsxRuntime.jsx)(Subtitle, {
                children: "Properties"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "pathname"
                  }), " string: current URL, no query string, and no hash"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "URI"
                  }), " string: complete URL."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "qs"
                  }), " Map: Map with the list of variables passed through the query string."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Hashtag"
                  }), " string: Contains the URL fragment after the '#'. It is equivalent to the hash property of the Web API location object."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "vars"
                  }), " Map: Container map of the dynamic variables added in the definition of the ", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/widgets#page",
                    children: "Widget Page URL."
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "routing.historyBeyondHistory:"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The BeyondHistory object handles all the information associated with the user's browsing in the current session."
              }), "\n", (0, _jsxRuntime.jsx)(Subtitle, {
                children: "Properties"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "current"
                  }), ": string: Current browsing URL."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "initial"
                  }), ": number: Refers to the index associated with the history of the web API of the browser on which the navigation begins inside the BeyondJS project. For this handling, beyond makes use of the web API's SessionStorage object, where it registers two properties:", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "__beyond_navigation_position"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "__beyond_navigation_records"
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "position"
                  }), " HistoryPosition :", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_components.strong, {
                        children: "value"
                      }), " number: the value of the current navigation position in BeyondJS's history."]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "records"
                  }), " HistoryRecords: An object of type Map that contains all the user's navigation entries in the current session."]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
          function _missingMdxReference(id, component) {
            throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./widget-creation.mdx
      *************************************/

      ims.set('./widget-creation.mdx', {
        hash: 3124233802,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
                p: "p",
                ul: "ul",
                li: "li",
                strong: "strong"
              }, props.components),
              {
                Code
              } = _components;
            if (!Code) _missingMdxReference("Code", true);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Widget Creation"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["A widget is a type of bundle and in BeyondJS it has a modular loading philosophy and bundles are the final code representation to be executed in the JavaScript environment. If you want to read about all the types of bundles out there, you can head over to the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/bundle",
                  children: "bundle’s chapter."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Widgets exponentiate the advantages already existing in web components thanks to encapsulation. They allow the integration of different technologies with minimal configuration and offer a simple API to manage their properties, methods, and interaction with the rest of the components of a web project. Also, they can be made available as NPM packages and used from any project that uses javascript without requiring BeyondJS."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "There are three types of widgets:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Page:"
                  }), " Designed to create the different pages of the application, it receives configuration parameters associated with the URL and the use of layouts."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Layout:"
                  }), " They represent page containers, that allow splitting code or logic that crosses pages. A layout can also contain another layout."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Default:"
                  }), " They expose a web component under the defined name and do not require any additional treatment from BeyondJS."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["All widgets implement a Controller object which is in charge of managing the lifecycle of the web component and allowing the definition of ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/widgets/docs/rendering",
                  children: "of rendering"
                }), "state, and navigation functionalities."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Manual creation"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The manual configuration is done by adding the definition of the widget type bundle in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/module/config",
                  children: "module.json"
                }), " of the module."]
              }), "\n", (0, _jsxRuntime.jsx)(Code, {
                children: `
"widget": {
    "element": {
      "name": "web-login"
    },
    "ts": {
      "path": "/widget/ts",
      "files": [
        "*"
      ]
    }
  }

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The code above defines a bundle of type widget with the name of the web component as web login and with typescript as renderer."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Creation with the workspace"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["All bundles can be created from the module creation form in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/workspace",
                  children: "workspace"
                }), " By doing this, BeyondJS takes care of generating the necessary files and folder structure, including the Controller definition and the module.json and .tsconfig files."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "When bundles are created through the workspace, the files will be generated and modified by the development service."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
          function _missingMdxReference(id, component) {
            throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./widget-object.mdx
      ***********************************/

      ims.set('./widget-object.mdx', {
        hash: 3654045759,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Objeto BeyondWidget"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The BeyondWidget object is the parent object of widgets and inherits directly from the ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://developer.mozilla.org/es/docs/Web/API/HTMLElement",
                  children: "HTMLElement"
                }), " object and provides an API that allows you to interact with the BeyondJS widget tree."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Properties"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_components.strong, {
                    children: ["wnode ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/docs/api/NodeWidget",
                      children: "NodeWidget"
                    }), " optional:"]
                  }), " Widget HTML node."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_components.strong, {
                    children: ["wchildren ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/docs/api/BeyondWidget",
                      children: "(BeyondWidget)[]"
                    }), " optional:"]
                  }), " List of contained widgets"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_components.strong, {
                    children: ["parent ", (0, _jsxRuntime.jsx)(_html.Link, {
                      to: "/docs/api/BeyondWidget",
                      children: "BeyondWidget"
                    }), " optional:"]
                  }), " Widget container, returns undefined if a widget does not exist as a container."]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /**********************************
      INTERNAL MODULE: ./widgets-page.mdx
      **********************************/

      ims.set('./widgets-page.mdx', {
        hash: 3506683049,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              strong: "strong",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Widgets page"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Page type widgets represent a page from a website or web application accessed through a URL. When a web project receives a request by URL, BeyondJS takes care of identifying the widget with that defined URL to initialize the component and make it available in the DOM."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
"widget": {
    "route": "login"
    "layout: "main",
    "element": {
      "name": "login-page"
    },
....
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Pages require the same configuration structure as any widget, but they also receive the following configuration parameters:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "route:"
                  }), " [string]: Defines the URL or path to the component."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "layout"
                  }), " [string] [optional]: y defines whether you want to use a layout or not on your page."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "vdir"
                  }), " [string] [optional]: This allows you to define if you want to handle any dynamic value in the URL."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Route pattern"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "URLs with dynamic values can be defined by adding variables to the route property with a syntax similar to template strings."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To exemplify it, let's suppose that you have a page where you need modifying a user's data, and you also need to manage the id through the URL. The widget's route property would have the following value:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
/user/edit/${userId}
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The following URLs would match the created route:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: (0, _jsxRuntime.jsx)(_components.code, {
                    children: "/user/edit/1"
                  })
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: (0, _jsxRuntime.jsx)(_components.code, {
                    children: "/user/edit/any-identifier"
                  })
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["These properties are available in the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "uri"
                }), " object available as a property in the widget controller and could be accessed from the controller as follows:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `this.uri.vars.get('userId');`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The uri object passed to view components as well. The way to access them depends on the implementation of each framework or tool."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/widgets/layouts",
                    children: "Layouts"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    to: "/docs/routing",
                    children: "Routing"
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*****************************
      INTERNAL MODULE: ./widgets.mdx
      *****************************/

      ims.set('./widgets.mdx', {
        hash: 2617005995,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Widgets"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The BeyondJS development architecture in web applications or web projects is designed to work with a ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://micro-frontends.org/",
                  children: "Micro frontends"
                }), " structure, enabling the integration of different technological stacks in the same project and allowing the developer to have the possibility of evaluate which technology is more convenient for a specific functionality, this is achieved by creating ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "widgets."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["A ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Widget"
                }), " is a type of ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/bundles",
                  children: "bundle"
                }), " available in BeyondJS and is implemented through a ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://developer.mozilla.org/en-US/docs/Web/Web_Components",
                  children: "Web Component"
                }), " with a ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM",
                  children: "shadow DOM"
                }), " to encapsulate its content. Being a web component, it can define properties and methods, and it can also be accessed through the JavaScript Web API. Another important advantage of widgets, is that they load dependencies on demand, and only when they are required, optimizing project loading times."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["BeyondJS implements widget rendering techniques, this offers the possibility to integrate hybrid renders in a project, you can read more about it in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/rendering",
                  children: "rendering chapter.."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["BeyondJS provides support for working with frameworks/libraries such as ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://reactjs.org/",
                  children: "React"
                }), ", ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://vuejs.org/",
                  children: "Vue"
                }), " and ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://svelte.dev/",
                  children: "Svelte"
                }), " and has the possibility of integrating new libraries or tools available."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Using React"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "React has automatic support motivated by the fact that typescript interprets the tsx code. Therefore, the only thing necessary to be able to use it is to have the dependency installed in npm and define the ts processor in the bundle configuration in the module.json."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "React configuration is done through .tsconfig files, each module comes with a file configured by default with compatibility to work with react. you can read more about it in the typescript documentation."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Using Svelte or Vue"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Cada framework tiene su propio procesador con el nombre de la libreria. Para utilizarlos, solo es necesario incluir el procesador en la configuración del bundle."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*******************************
      INTERNAL MODULE: ./workspace.mdx
      *******************************/

      ims.set('./workspace.mdx', {
        hash: 3430655844,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@beyond/docs/components/html");
          var _code = require("@beyond/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li",
              strong: "strong",
              ol: "ol"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                children: "Workspace"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS provides an integrated Workspace, which seeks to improve the development experience in several ways, all focused on giving support to the developer in daily tasks that are often time-consuming. These tasks span the entire development loop, from creating a new project to deploying it."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["It is available whenever the development server is started at ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://workspace.beyondjs.com/",
                  children: "https://workspace.beyondjs.com/"
                }), " and allows creating a new project or obtaining relevant information from the existing project, as will be seen later."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Features"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Creation of projects anew or from templates."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Module creation."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Informative detail of the projects and modules."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["General ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "real-time"
                  }), " error detection in projects, modules, dependencies, and consuming modules."]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Typescript error detection."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Detection of runtime errors."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Handle errors in real-time in Node processes through HMR."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Setting up development environments."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "code editing"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Project navigation."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Dependency handling."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Management of static files and project templates."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Project deployment management."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Structure"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The Workspace works as a framework (Workspace), and each component that integrates it has a defined name that allows its identification. These are:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "PreAside: First left panel, iconography of general access to actions which vary depending on whether or not you have a project open"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Aside: Secondary menu that displays additional features associated with the option selected in the preview."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Boards: Each open panel on the main screen is called a board. The application list is a board. The application detail or the configuration screen are also boards."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Panels: Each screen division generated in the workspace"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Integration with Typescript"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Typescript"
                }), " is a typed language, and type checking is a heavy task. The Workspace utilizes the typescript compiler to detect errors that may exist in the code in real-time and provide information about them to the developer at three different levels:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Module in development:"
                  }), " The module which is being worked on."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Dependencies:"
                  }), " The modules imported by the module under development."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Consumers:"
                  }), " The modules that consume the module on which we are working."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "// Img"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The developer can access a module/bundle and see the existing errors in it or a consumer or dependency. Easyly identify the file and directly access the line where you must correct."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Because the typescript compiler's parsing times are long when doing type checking, BeyondJS implements a hybrid approach that simultaneously handles type checking by the compiler and updating files with HMR by the transpiler. It offers the possibility to see the changes at the moment and receive the information of errors in parallel. It is possible that the first time the type validation of a project that is taking place, this process takes an extended time, which is then minimized with the cache management that BeyondJS integrates."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Editor and Browser included"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The workspace has a built-in code editor that can be extremely useful for quickly accessing files and correcting detected errors, working with styles or bridges. Likewise, it also has a Board that allows you to navigate the projects."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Project deployment"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The Workspace generates the necessary and optimized code to deploy the projects. Read in detail how it works in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  to: "/docs/deployment",
                  children: "Project Deployment chapter."
                })]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {};
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STs7NEJBQ0E7OzRCQUNBOzs0QkFDQTs7OzBCQUVNOzs7NEJBRVI7b0JBQVk7Ozs7OEJBRVI7c0JBQXdCOzs7OEJBQ3hCO3NCQUFlOzs7OEJBQ2Y7c0JBQVk7OzswQkFFbEI7OzBCQUVBOzswQkFFQTs7MEJBRVU7OzBCQUVWOzswQkFFVTs7MkJBRVY7OzRCQUFnSiIsIm5hbWVzIjpbImNvbnRlbnQiLCJ1c2VySWQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIm1keC9iZWUubWR4IiwibWR4L2JleW9uZC1qcy1kZXBlbmRlbmNpZXMubWR4IiwibWR4L2J1bmRsZXMubWR4IiwibWR4L2NvbnRyb2xsZXItb2JqZWN0Lm1keCIsIm1keC9jcmVhdGUtYS1tb2R1bGUubWR4IiwibWR4L2RldmVsb3BtZW50LXNlcnZlci5tZHgiLCJtZHgvZ2xvc2FyeS5tZHgiLCJtZHgvaG1yLm1keCIsIm1keC9pbnRyby5tZHgiLCJtZHgvbGF5b3V0Lm1keCIsIm1keC9saWdodC1kYXJrLXRoZW1lLm1keCIsIm1keC9tb2R1bGUtY29uZmlnLm1keCIsIm1keC9tb2R1bGVzLm1keCIsIm1keC9wcm9jZXNzb3JzLm1keCIsIm1keC9wcm9qZWN0LWpzb24ubWR4IiwibWR4L3Byb2plY3Qtc3RydWN0dXJlLm1keCIsIm1keC9wcm9qZWN0cy1pbXBvcnQubWR4IiwibWR4L3Byb2plY3RzLm1keCIsIm1keC9xdWljay1zdGFydC5tZHgiLCJtZHgvcm91dGluZy5tZHgiLCJtZHgvc3RhdGUtbWFuYWdlbWVudC5tZHgiLCJtZHgvc3R5bGVzLWltcG9ydGF0aW9uLm1keCIsIm1keC9zdHlsZXMtbW9kdWxlLm1keCIsIm1keC9zdHlsZXMubWR4IiwibWR4L3RlbXBsYXRlLXN5c3RlbS5tZHgiLCJtZHgvdGVtcGxhdGVzLm1keCIsIm1keC90dXRvcmlhbC1zdGFydC5tZHgiLCJtZHgvdHV0b3JpYWwvdHV0b3JpYWxcXGJhY2tlbmQubWR4IiwibWR4L3R1dG9yaWFsL3R1dG9yaWFsXFxicmlkZ2UubWR4IiwibWR4L3R1dG9yaWFsL3R1dG9yaWFsXFxjcmVhdGUtYS1wcm9qZWN0Lm1keCIsIm1keC90dXRvcmlhbC90dXRvcmlhbFxcZmlyc3QtbW9kdWxlLm1keCIsIm1keC90dXRvcmlhbC90dXRvcmlhbFxccm91dGluZy5tZHgiLCJtZHgvdXJpLm1keCIsIm1keC93aWRnZXQtY3JlYXRpb24ubWR4IiwibWR4L3dpZGdldC1vYmplY3QubWR4IiwibWR4L3dpZGdldHMtcGFnZS5tZHgiLCJtZHgvd2lkZ2V0cy5tZHgiLCJtZHgvd29ya3NwYWNlLm1keCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19
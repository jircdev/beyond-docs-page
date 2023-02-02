System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0/jsx-runtime", "@beyond/docs@1/components/html", "@beyond/docs@1/code"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, LANGUAGE, Intro, Cli, QuickStart, TutorialStart, TutorialBackend, TutorialRouting, TutorialFirstModule, PackagesCreate, PackagesTypes, PackagesDistributions, PackagesJson, PackagesPublish, PackagesBeyondjs, PackagesDependencies, ModulesIntroduction, ModulesCreation, ModulesConfig, ModulesBundles, ModulesProcessors, BackendIntro, BackendBridges, BackendDebug, BackendBee, BackendSsrserver, Widgets, WidgetsControllers, WidgetsObject, WidgetsLayout, WidgetsPage, WidgetsRendering, Routing, AddRenderingEngine, Styles, StylesModules, StylesThemes, StylesImports, Template, StylesTemplate, Modular, Universal, DevServer, __beyond_pkg, hmr;
  _export({
    LANGUAGE: void 0,
    Intro: void 0,
    Cli: void 0,
    QuickStart: void 0,
    TutorialStart: void 0,
    TutorialBackend: void 0,
    TutorialRouting: void 0,
    TutorialFirstModule: void 0,
    PackagesCreate: void 0,
    PackagesTypes: void 0,
    PackagesDistributions: void 0,
    PackagesJson: void 0,
    PackagesPublish: void 0,
    PackagesBeyondjs: void 0,
    PackagesDependencies: void 0,
    ModulesIntroduction: void 0,
    ModulesCreation: void 0,
    ModulesConfig: void 0,
    ModulesBundles: void 0,
    ModulesProcessors: void 0,
    BackendIntro: void 0,
    BackendBridges: void 0,
    BackendDebug: void 0,
    BackendBee: void 0,
    BackendSsrserver: void 0,
    Widgets: void 0,
    WidgetsControllers: void 0,
    WidgetsObject: void 0,
    WidgetsLayout: void 0,
    WidgetsPage: void 0,
    WidgetsRendering: void 0,
    Routing: void 0,
    AddRenderingEngine: void 0,
    Styles: void 0,
    StylesModules: void 0,
    StylesThemes: void 0,
    StylesImports: void 0,
    Template: void 0,
    StylesTemplate: void 0,
    Modular: void 0,
    Universal: void 0,
    DevServer: void 0
  });
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react1820JsxRuntime) {
      dependency_1 = _react1820JsxRuntime;
    }, function (_beyondDocs1ComponentsHtml) {
      dependency_2 = _beyondDocs1ComponentsHtml;
    }, function (_beyondDocs1Code) {
      dependency_3 = _beyondDocs1Code;
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
      __pkg.dependencies.update([['react/jsx-runtime', dependency_1], ['@beyond/docs/components/html', dependency_2], ['@beyond/docs/code', dependency_3]]);
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./mdx/backend/bee.mdx
      *************************************/
      ims.set('./mdx/backend/bee.mdx', {
        hash: 4124613945,
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
              ol: "ol",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Backend",
                title: "BEE"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BEEs are processes managed by BeyondJS. They behave like a node service,\r\nwith the difference that they are managed\r\nby Beyond's main service, which analyzes, reviews and compiles changes in real time to make them available in BeyondJS.\r\nchanges in real time to make available in\r\nmemory a new version of the bundles with the code changes applied through HMR,\r\nproviding the opportunity to\r\naccess to the updated code functionality, without the need to restart the node process."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The real time update in the Node process offers advantages in execution time because it avoids all the resource load that implies stopping the whole process and restarting it, this can be applied to in-memory values or database connections, to mention examples. BeyondJS detects changes in a file or ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/modules#internal-modules",
                  children: "Internal-module"
                }), ", updates the change, performs a new bundle build on the fly and drops the new version."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The operation flow of the Bee is as follows:** ** 1."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Beyond raises the service."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "A review of the dependency tree of the bundles is performed (note that this is at the bundle level and not internal modules)."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "The processed code is loaded in memory and whatchers are added to detect changes."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "If there is a change in a file, the change is detected and that code segment is replaced."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "**Dynamic imports are not loaded when the BEE is lifted, but are requested on demand."
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

      /*****************************************
      INTERNAL MODULE: ./mdx/backend/bridges.mdx
      *****************************************/

      ims.set('./mdx/backend/bridges.mdx', {
        hash: 4132169002,
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
              blockquote: "blockquote",
              ol: "ol",
              li: "li",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Backend",
                title: "Bridges"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Bridges in BeyondJS are a powerful tool that\r\nallows you to optimize your development to the maximum."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A bridge is a special type of Bundle that allows you to create code on the server-side that BeyondJS generates in\r\nserver-side code and BeyondJS automatically generates an API mode object.\r\nAPI mode object. This way, you can consume the exported methods remotely via websockets.\r\nremotely via websockets."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "You can import the bundle from another service or from a code\r\nclient code and have direct access to the defined methods, with built-in data typing and\r\ndata typing and validations built in. This means that you only need to\r\nonly need to write the code once, saving you time and effort in your\r\ntime and effort in your development."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "Of course, the generated api only has the specification of the methods and the websocket connection to the bridge.\r\nthe websocket connection to the bridge, the logic is encapsulated in the code\r\nserver."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In this section of the documentation you will learn how to create and consume > bridges in BeyondJS, as well as how to create and consume\r\nbridges in BeyondJS, as well as recommendations and examples to get the most out of this tool.\r\nto get the most out of this tool."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Create a bridge"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Are you ready to get the most out of BeyondJS and optimize your projects with bridges?\r\nHere we'll show you a step-by-step tutorial on how to create a bridge\r\nstep-by-step tutorial to create a bridge and export your methods easily and quickly!\r\nand fast!"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Module creation"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To give context to the process, let's imagine that you are\r\ncoding in a package whose name is \"awesome-api\"."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Make sure you are in the root of your project at the level of the ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "package.json"
                    }), " file.\r\n", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "package.json"
                    }), "."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Open the terminal and execute the command ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "beyond add module"
                    }), "."]
                  }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "This command is interactive, which means that it requires a > console with interactive capabilities for its correct execution."
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                      children: ["console with interactive functionalities for its correct execution.\r\nIf you do not have an interactive console, it is recommended to > create the module using the Workspace.\r\ncreate the module using the ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " Workspace or.\r\nmanually ", (0, _jsxRuntime.jsx)(_html.Link, {
                        href: "/docs/modules/creation",
                        children: "following the steps detailed in the documentation."
                      }), "."]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "The command will prompt for the subpath, this is the name of the module\r\nwhich will be used to export it later."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["select ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "bridge"
                    }), " as the type of bundle to create."]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Bridge code"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Once created, open the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: ".ts"
                }), " file of the module and create the object with the methods you want to export.\r\nobject with the methods you want to export.\r\nIn order for ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " to generate the client-side bridge you must\r\nexport the object by adding the\r\nmagic /*bundle*/ after the \"exports\" keyword."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Your bridge code should look similar to the following:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "bridge.ts",
                children: `export /*actions*/ /*bundle*/ class Auth {
    // métodos y definiciones
}`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In the example code, we show how to export a class to be instantiated as a bridge.\r\ninstantiated as a bridge. However, it is possible to export an already instantiated\r\nobject or a flat object directly as a bridge.\r\nThis is done by adding the corresponding magic comments\r\n(/*bundle*/ /*actions*/) to the export expression. The process of\r\nimport and use of the bridge remains the same, regardless of whether or not you are\r\nwhether you are working with a class or an object."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Module import"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To use your methods in other modules, import the bridge\r\nusing the bare-specifier, i.e., using the package name\r\nfollowed by the corresponding subpath. As shown below:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import {auth} from 'awesome-api/auth';`
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['backend/debug', 'backend/ssrserver']
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
      INTERNAL MODULE: ./mdx/backend/debug.mdx
      ***************************************/

      ims.set('./mdx/backend/debug.mdx', {
        hash: 20529363,
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
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Backend",
                title: "Depuración"
              }), "\n", (0, _jsxRuntime.jsx)("app-under-construction", {})]
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
      INTERNAL MODULE: ./mdx/backend/intro.mdx
      ***************************************/

      ims.set('./mdx/backend/intro.mdx', {
        hash: 1324692769,
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
              code: "code",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Backend",
                title: "Backend Programming"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["With ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ", developing packages, applications or backend libraries for Deno,\r\nNode or Bun is a simple and powerful task. ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " allows you to work naturally and without major\r\nwithout major configurations to create code with functionality for each platform and distribute it easily.\r\nplatform and distribute it with ease."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["You don't need third-party tools,\r\nbecause ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " works directly on Node.js and NPM standards,\r\ngenerating the final code to be consumed by module resolution standards such as ESM, CJS, CJS\r\nmodule standards such as ESM, CJS, AMD or SJS. With ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " you will have complete control\r\nover your code and you will be able to distribute it more efficiently."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["To create a package that can be executed in an engine such as Node or Deno,\r\nyou only need to specify in the\r\n", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), " the corresponding distribution."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "package.json",
                language: "json",
                children: `"deployment": {
    "distributions": [
      {
        "name": "init-backend",
        "environment": "development",
        "platform": "backend",
        "ports": {
          "bundles": "7070",
          "http": "7073",
          "inspect": "7072"
        }
      }
    ]
  }`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "This code configures the DevServer to execute the code of a Node or Bun service in development environment.\r\nNode or Bun service in development environment. Some details are explained below:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "The 'backend' value of 'platform' indicates that this is code that will be executed in backend code environments\r\nbackend code environments such as Node or Bun,\r\nas well as being compatible with Deno through additional configurations."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["The 'ports' entry defines three ports values, including the port\r\nport ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "bundles"
                  }), " which is used by the DevServer to return packets when required by the execution environment, and\r\nthe runtime environment requires them, and the ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "inspect"
                  }), " port which allows debugging tools such as debug to be used.\r\ndebugging tools such as the VSCode debugger or browsers such as Chrome or Edge.\r\nThis is essential for working efficiently with HMR, one of the most powerful features of ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Packaging format"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Although the development experience for the\r\nprogrammer is the standard EcmaScript Modules (ESM),\r\nBeyondJS DevServer generates the bundles for Backend platforms in the CommonJS format.\r\nBackend platforms in the CommonJS format by default.\r\nThis is due to the large number of bundles that use this format and that Node\r\nthis format and because Node.js does not yet provide full support for the Ecma\r\nsupport for EcmaScript formatted code."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "However, modifying the packaging format is extremely easy.\r\nextremely simple. You just need to add a\r\n\"bundles\" property in the distribution to indicate the way in which the bundles are expected to be\r\nyou expect the bundles to be generated."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "For example, if you want to work with Deno and you want the bundles\r\nbundles of your package can be consumed with \"http imports\",\r\nyou just need to add the following entry point to the distribution in the package.json\r\ndistribution in the package.json:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                language: "json",
                children: `"bundles": {
    "mode": "esm"
}`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["With this setting in the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), ", the DevServer will automate the process of packaging the\r\npackaging of the code without the need to restart any service,\r\nsince it does it in real time."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "package.json",
                language: "json",
                children: `"deployment": {
    "distributions": [
      {
        "name": "init-backend",
        "environment": "development",
        "platform": "backend",
        "bundles": {
            "mode": "esm"
        }
        "ports": {
          "bundles": "7070",
          "http": "7073",
          "inspect": "7072"
        }
      }
    ]
  }`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Thus, the distribution in the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), " would look like this:\r\nIn addition, the DevServer of ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), "\r\nDevServer offers the possibility to set up multiple distributions\r\nand test the packaging of the code simultaneously,\r\nwhich is highly efficient in terms of time and productivity for developers looking to create\r\nfor developers looking to create packages that are consumed by any environment (including\r\nby any environment (as well as those who don't!)."]
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
      INTERNAL MODULE: ./mdx/backend/ssr-server.mdx
      ********************************************/

      ims.set('./mdx/backend/ssr-server.mdx', {
        hash: 2009080529,
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
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Backend",
                title: "SSR Server"
              }), "\n", (0, _jsxRuntime.jsx)("app-under-construction", {})]
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

      /*****************************************************
      INTERNAL MODULE: ./mdx/foundations/bare-specifiers.mdx
      *****************************************************/

      ims.set('./mdx/foundations/bare-specifiers.mdx', {
        hash: 1207720336,
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
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                id: "intro",
                pretitle: "Fundamentals",
                title: "Modular Structure"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A bare specifier is a way to specify a module in JavaScript for import without specifying the entire file.\r\nInstead of putting the full path to the file, you specify only the name of the package or module as it is defined\r\nin the package.json file and the module system takes care of finding and loading the correct corresponding file."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "For example in the following code"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import {someFunction} from 'my-module';`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["In this case, ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "my-module"
                }), " is the name of the package or module being imported and ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "someFunction"
                }), " is the name of the specific function being imported.a\r\nfunction being imported."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The use of square brackets ``", (0, _jsxRuntime.jsx)(_components.code, {
                  children: " }"
                }), " indicates that a specific function is being imported rather than the entire module (destructuring)."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS makes use of the bare specifiers to manage the import and export of packages and modules in your projects and\r\nmanages their processing so that the code can be worked in the same way in any environment."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Currently import maps are not supported in a standardized way by browsers.\r\nBeyondJS uses the SystemJS module system that provides support for import maps,\r\nwhich allows you to specify the module path instead of using absolute paths."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In addition, BeyondJS automates import map generation and SystemJS configuration so developers don't have to worry about it.\r\ndevelopers don't have to worry about it."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "This way, programmers can continue to use the EcmaScript standard for importing modules, even in environments\r\nwhere it is not natively supported."
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

      /************************************************
      INTERNAL MODULE: ./mdx/foundations/dev-server.mdx
      ************************************************/

      ims.set('./mdx/foundations/dev-server.mdx', {
        hash: 840292525,
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
              blockquote: "blockquote",
              p: "p",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                id: "intro",
                pretitle: "Fundamentals",
                title: "DevServer"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "In this document we will see what Beyond's Dev Server is, how it works and how to set it up."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)("img", {
                src: "/images/dev-server.jpg",
                alt: "BeyondJS dev server"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS provides a dev server that is responsible for providing pre-packaged code from modules for use in the environment\r\nenvironment in which you are working. Its main function is to return the code in the required module resolution system format and to provide a seamless and consistent experience.\r\nprovide a seamless and homogeneous experience in the code creation process."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In addition, the DevServer allows you to run multiple projects simultaneously,\r\nwhich is very useful in case of working on several projects at the same time, such as cases where you work with client applications and microservices that connect with each other.\r\nthat are connected to each other."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The developer programs using EcmaScript Modules syntax, and the DevServer takes care of transpiling the code to the required format\r\nand make it immediately available for use in the environment in which it is being programmed."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The module resolution systems supported by the BeyondJS DevServer are:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "CommonJs (CJS)."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "EcmaScript Modules (ESM)."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "SystemJS (SJS)."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Asynchronous Module Definition (AMD)."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The code of the projects is packaged based on the defined modules, each module generates an independent bundle, which optimizes\r\nthe loading and maintenance process, since the start-up and development speed is kept efficient by not impacting the project's growth on it."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                text: "Configuration"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The behavior of the DevServer, is defined through the configuration of distributions."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The distributions are configurations that allow to define how the packages are to be treated in the development environment."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The programmer can configure inspection ports, type of module resolution or typescript compiler behavior, among other things."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "By default, BeyondJS projects come with a distribution already created, but as many as the programmer considers necessary can be added."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: ` {
    "name": "web",
    "platform": "web",
    "environment": "development",
    "ports": {
        "bundles": 3500
    }
},
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A project or package supports multiple distributions configured at the same time, this provides the possibility of\r\nvalidate the behavior of the code under different scenarios in a simple way and to integrate Backend and Frontend functionalities in the same project.\r\nproject."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["To read more about distributions, you can go to the ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/distributions",
                    children: "Distributions section"
                  }), "."]
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

      /*********************************************
      INTERNAL MODULE: ./mdx/foundations/glosary.mdx
      *********************************************/

      ims.set('./mdx/foundations/glosary.mdx', {
        hash: 4252984310,
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
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                title: "Glossary of terms",
                pretitle: "Fundamentals"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "EAC"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "(\"External Array Configuration\") Objects whose properties are EAC can expect two values, an array or a string. If a string is passed, BeyondJS takes the value as a relative path to the location of the external configuration file. Configuration array that can be in a separate file and whose elements are of type EOC."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.Subtitle, {
                  children: "EOC"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "(\"External Object Configuration\") Configuration object that can be included directly as a value or referenced as an external file. Objects whose properties are EOC can expect two values: an object or a text string. If the property has a string value, BeyondJS takes the value as a relative path to the location of the external configuration file."
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

      /*****************************************
      INTERNAL MODULE: ./mdx/foundations/hmr.mdx
      *****************************************/

      ims.set('./mdx/foundations/hmr.mdx', {
        hash: 3605176946,
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
              children: [(0, _jsxRuntime.jsx)(_components.p, {
                children: "All bundles automatically expose an hmr object that allows the developer to subscribe to code changes and thus persist the state of the project in which it is, optimizing the development process, since it avoids the need to repeat the flows again to reach the current state."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To explain it better, let's suppose that a database element filtering logic is being performed in a backend module, this module performs the following steps:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Performs the login against the database."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Performs two database queries."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "It returns the available information for the programmer to work with it."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "It generates a data structure in which all the consulted information is integrated to be returned to the client."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The developer's change subscription with hmr allows him to focus on the last point without having to repeat the first three for each change, which means a very high optimization in testing time."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The implementation of hmr is responsible for automatically replacing the content of a file at the same time it is changed, leaving immediately available the update of the same, without the need for any additional action and also, the programmer can subscribe to these changes to define what to do from them, offering the versatility to run functions automatically to each change."
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

      /*********************************************
      INTERNAL MODULE: ./mdx/foundations/modular.mdx
      *********************************************/

      ims.set('./mdx/foundations/modular.mdx', {
        hash: 7919052,
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
              blockquote: "blockquote",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                id: "intro",
                pretitle: "Fundamentals",
                title: "Modular Structure"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Modular architecture is key in BeyondJS, it allows the programmer to develop decoupled projects by breaking them down\r\ninto smaller parts that receive minimal configuration and are not affected by project growth."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "For imports, BeyondJS makes use of bare specifiers, which allows to define module paths in a simpler and more efficient way.\r\neasier and more efficient way."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In addition, BeyondJS offers a broader module concept compared to EcmaScript.\r\nA BeyondJS module can be composed of several ESM modules, and you can easily define\r\nwhich parts are accessible from outside the module, known as \"internal modules\". This allows for better\r\ncontrol and organization of the code in your project."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Internal modules are a powerful and simple concept of BeyondJS, you can read in detail\r\nabout them in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/concepts/modules",
                    children: "Modules"
                  }), " section."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The structure of modules is defined by ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), " configuration files,\r\nwith a structure like the following:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
{
"name": "start-backend",
"bundle": "start",
"platforms": "backend",
"ts": {
"files": "*"
}
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["You can read more about creating modules in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/concepts/modules",
                  children: "Modules section"
                }), "."]
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

      /***********************************************
      INTERNAL MODULE: ./mdx/foundations/universal.mdx
      ***********************************************/

      ims.set('./mdx/foundations/universal.mdx', {
        hash: 3667926788,
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
              h1: "h1"
            }, props.components);
            return (0, _jsxRuntime.jsx)(_components.h1, {
              children: "Universal Javascript"
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

      /*************************************************
      INTERNAL MODULE: ./mdx/frontend/i-widget-store.mdx
      *************************************************/

      ims.set('./mdx/frontend/i-widget-store.mdx', {
        hash: 492496826,
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
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_components.ul, {
              children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                children: "toJSON: Only runs on the server. It is responsible for serializing the store and sending it to the client to hydrate the content."
              }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                children: "hydrate: Prepares the store on the client and receives what toJSON sends."
              }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                children: "fetch: Allows adding logic to compose the data of the store in its initial instance. It is an asynchronous function when you are on the server."
              }), "\n"]
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

      /**************************************************
      INTERNAL MODULE: ./mdx/frontend/routing/routing.mdx
      **************************************************/

      ims.set('./mdx/frontend/routing/routing.mdx', {
        hash: 2314424692,
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
              code: "code",
              blockquote: "blockquote",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Widgets",
                title: "Controllers"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["BeyondJS has simple yet powerful path handling. For most of the cases,\r\nURLs can be defined in the configuration of the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), " file."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/widgets/pages",
                  children: "widgets of type page"
                }), ", via the URL property, but there may be cases where some more\r\nadvanced configuration is required."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Note: This section covers the documentation of the routing object. If you want to learn about handling parameters in the url of a page,\r\nyou can read about it ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/widgets/page",
                    children: "in the Page type widgets section."
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Object `routing`"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "routing"
                }), " object manages the browser history and is responsible for handling compatibility for web and mobile projects.\r\nIt offers an API that allows you to work with the history and manipulate it."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["It is made available by the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "@beyond-js/kernel"
                }), " package and is imported as follows:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
import {routing}  from   "@beyond-js/kernel/routing";
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "routing"
                }), " object in ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " exists to cover the following scenarios:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "To provide the programmer with a simple API for complex URL handling, such as validations, redirections, and variable management."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "To identify the user's navigation flow and history within the application. The browser's history object has a very limited treatment of this and only allows access to the number of existing navigations. BeyondJS, on the other hand, manages a detailed history."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Because hybrid applications made with JavaScript handle file management through a protocol different from applications accessed from a browser, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " handles this to abstract the programmer from it and ensure the same behavior regardless of the platform being worked on."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Navegación"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In order to maintain compatibility with known APIs, the Routing object has analogous methods to the methods of the browser's history API and basically cover the same needs, but at the same time, they are responsible for unifying behaviors between platforms and updating the elements of BeyondJS's history."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The available methods are:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "routing.pushState"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Registra un nuevo elemento en el histórico"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
routing.pushState('/home', [{state}]);
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "routing.replaceState"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Records a new item in the history."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
routing.replaceState('/home', [{state}]);
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "It has the same interface as the pushState method of the history object of the Web API and\r\nadditionally it is responsible for updating BeyondJS's history."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Route Overriding"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "routing.redirect"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Generally, although there may be more, there are two typical contexts in which\r\nit is necessary to handle URLs:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "When friendly URLs are required."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "When it is necessary to validate access permissions and, in case the person trying to enter the\r\nURL does not have them, try to redirect to a specific flow."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["For these cases, an asynchronous function ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "redirect"
                }), "\r\ncan be defined as a property of the routing object. This function receives an object\r\nof type ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/api/uri",
                  children: `<URI>`
                }), " which has a pathname property\r\nwhich represents the current route."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The redirect function can return undefined or a string. If it returns undefined the navigation flow will continue without interruption. If a string is returned, it will be taken\r\nas the final URL and BeyondJS will redirect to the returned URL."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
routing.redirect = async function redirect(uri): Promise[string] {
	return '/';
};

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In the previous example, any received route is redirected to /."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Handling of not found URLs."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The routing object has a ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "missing"
                }), " property that can be defined as an asynchronous function\r\nand returns the name of the widget you want to display if the requested URL is not found."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A typical use case is wanting to implement a 404 screen for a page not found."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A basic implementation can be as follows:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
routing.missing = async (pathname: String) => {
   return 'app-docs-missing';
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In the previous example, the name of a widget is being returned, BeyondJS will validate that the widget exists when the URL is not found and will display it as an error page."
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

      /**********************************************
      INTERNAL MODULE: ./mdx/frontend/routing/uri.mdx
      **********************************************/

      ims.set('./mdx/frontend/routing/uri.mdx', {
        hash: 859016687,
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
              code: "code",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Frontend",
                title: "Objeto URI"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Importación"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import {routing: {uri}} from "@beyond-js/kernel/routing";`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The uri object provides an API equivalent to that of the objetc ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "window.location"
                }), ", but with added functionalities that ensure correct behavior in both web and mobile environments."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Properties"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "pathname string"
                  }), " : current url, without querystring or hash"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "uri string"
                  }), " : full url."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "qs Map"
                  }), " : Map with the list of variables passed through the querystring."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "hashtag string"
                  }), " : contains the fragment of the url after the '#'. It is equivalent to the hash property of the location object of the Web API."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "vars Map"
                  }), " : Map container of the dynamic variables added in the definition of the url of the ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/widgets#page",
                    children: "Widget Page."
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "routing.historyBeyondHistory"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The BeyondHistory object handles all information associated with the user's navigation in the current session."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Properties"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "current"
                    }), ": string : current navigation url."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "initial"
                    }), ": number : Refers to the index associated with the browser web API history on which navigation within the\r\nBeyondJS project begins. For this management, Beyond uses the SessionStorage object of the web API, where it records two properties:"]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "__beyond_navigation_position"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "__beyond_navigation_records"
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "position"
                    }), " HistoryPosition :"]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_components.strong, {
                        children: "value"
                      }), " number : value of the current navigation position in the BeyondJS own history."]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "records"
                    }), " HistoryRecords :: Map object that contains all user navigation entries in the current session."]
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

      /***************************************************
      INTERNAL MODULE: ./mdx/frontend/state-management.mdx
      ***************************************************/

      ims.set('./mdx/frontend/state-management.mdx', {
        hash: 4200537212,
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
                children: "State management"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "State represents the values rendered by a component or widget on the screen.\r\nIt can change and vary due to various factors, such as updating data from a server or user interaction."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["There are numerous libraries for managing the state of a project, generally associated with the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/widgets",
                  children: "view framework"
                }), " being used. BeyondJS allows integrating the desired state management tool, as long as it is prepared for modular operation."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["You can see a functional example of a counter that shares state management between a component created with ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "React"
                }), ", one created with ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Svelte"
                }), " and one with ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Vue"
                }), " in ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/examples/sm/counter",
                  children: "This example."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Also, BeyondJS defines a structure for state management.\r\nThe object that manages the state must be made available through the createWidgetStore method of the widget controller.\r\nThis method must return an object that implements the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/api/IWidgetStore",
                  children: "IWidgetStore"
                }), " interface,\r\nessentially if working with ssr is expected."]
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

      /*************************************************
      INTERNAL MODULE: ./mdx/frontend/styles/imports.mdx
      *************************************************/

      ims.set('./mdx/frontend/styles/imports.mdx', {
        hash: 2285378532,
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
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Widgets",
                title: "Importing style files"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "node_modules"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["If it is necessary to include a stylesheet from a library installed in node_modules,\r\nit can be imported non-relatively, from the module file where it is required, by using the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "~"
                }), "\r\ncharacter followed by the package path in the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "node_modules"
                }), " folder."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In this way, let's suppose that we want to work with bootstrap, we could import it in the following way:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
    @import ~bootstrap/sass/bootstrap.scss;
    `
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Similarly, if it is necessary to import a specific file within the library, such as _variables.scss, it can be imported directly:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
    @import ~bootstrap/sass/variables.scss;
    `
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Importing styles from a bundle"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The importation of style modules is considered in BeyondJS as a non-relative import, therefore it follows the same import rules as a file existing in an npm library, but the inclusion path in this case follows the module name structure made with the framework, which as we have seen before, can be composed of @scope/name, where scope is optional."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To illustrate this, let's imagine that we have a module called form, which includes a bundle code, which defines components of a form and it is necessary to import the styles from another module. In the module, a sass file was created that defines styles for labels, whose name is labels.scss. The import line would be:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
    @import ~@scope/project-name/form/sass/scss/label.scss;
     `
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['styles/modules', 'styles/themes']
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

      /***********************************************
      INTERNAL MODULE: ./mdx/frontend/styles/index.mdx
      ***********************************************/

      ims.set('./mdx/frontend/styles/index.mdx', {
        hash: 3612073946,
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
              code: "code",
              blockquote: "blockquote"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Frontend",
                title: "Template System"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS has a powerful templating system that allows you to define general styles for the project,\r\nshare styles and functions between components and components and customize the behavior of modules.\r\nThis is defined in a \"template.json\" file with three main entry points: \"application\", \"gloal\" and \"overwrites\"."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "This system is flexible and versatile, allowing an efficient management of the styles and behaviors of the application's styles and behaviors."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "template.json"
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "template.json",
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
                children: "The above configuration is the default configuration for web project templates. The Sass processor is being configured for the application and global templates, and the purpose of each will be explained below."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The configuration of template elements resembles the configuration of processors in bundles. Each element can have the following properties:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "processor:"
                  }), " Processor to be used. Supports ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "sass"
                  }), " and ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "less"
                  }), "."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "path:"
                  }), " Directory where the files are located. If not defined, all files relative to the location of the configuration file will be searched."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Files:"
                  }), " The indicates that all files within the defined path are to be taken into account. If specific file names are specified, only those specified will be included."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "It is assumed on this page that the template is located in a folder with its name at the root of the project. If a change was made to the default configuration, it is important to keep track of the configured location."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "`template.application`"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "styles.css"
                }), " file is included in web platform projects as a property called ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "application"
                }), ".\r\na property called \"application\". This property is used to add\r\ngeneral styles to the page and define ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://developer.mozilla.org/en-US/docs/Web/CSS/--*",
                  children: " custom properties properties"
                }), " that will be available in all components."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "custom properties"
                }), " are unique style values that can be shared between components due to their integration into due to their integration into web components with Shadow DOM."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The default configuration for styles in ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "template.application"
                }), " includes all ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: ".scss"
                }), " files present in the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "./template/application"
                }), " directory within the project."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The following are the included files:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "./variables.scss"
                  }), ": Contains a list of default Sass variables."]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "./styles.scss`: Contains basic styles for the body of the document."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "./custom-properties/dark.scss"
                  }), ": Provides a mixin that defines the variables to be used in the dark style."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "./custom-properties/light.scss"
                  }), ": Provides a mixin that defines the variables to be used in the light style."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "./custom-properties/material-design.scss"
                  }), ": Includes the CSS properties of the Material Design color system."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "./custom-properties/definition.scss"
                  }), ": Includes the definition of the custom CSS properties that integrate the use of the mixins defined in ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "dark.scss"
                  }), " and ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "light.scss"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Programmers can edit or add any additional style file, which will be automatically integrated thanks to the addition of a ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "\"*\""
                }), " character in the configuration indicating that all files in the folder should be processed."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "`template.global`"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The global property is represented in the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "global.css"
                }), " file, whose purpose is to share styles considered global among all widgets. To achieve this, the final file is included within the styles of each widget."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["By default, all the files found in the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "/global"
                }), " folder are included, and by default only one file is included: ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "styles.scss"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['styles/modules', 'styles/themes']
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

      /*************************************************
      INTERNAL MODULE: ./mdx/frontend/styles/modules.mdx
      *************************************************/

      ims.set('./mdx/frontend/styles/modules.mdx', {
        hash: 3435789003,
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
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Frontend",
                title: "Styles in module"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Adding styles to a module/bundle requires the use of SASS as ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/processors",
                  children: "processor"
                }), ". In a project created with workspace, SASS is included by default in the code and widget bundles. The standard SASS configuration is:"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "`module.json`"
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
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The configuration indicates that in the module there is a sass folder, located relative to the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), " file and that all its files are considered styles. The bundle with the processor inserts the styles in the DOM during rendering, avoiding the need to make external imports in the JavaScript code."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['modules/processors', 'styles/template']
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

      /************************************************
      INTERNAL MODULE: ./mdx/frontend/styles/themes.mdx
      ************************************************/

      ims.set('./mdx/frontend/styles/themes.mdx', {
        hash: 106462644,
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
              code: "code",
              blockquote: "blockquote"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                title: "Light & Dark theme",
                pretitle: "Frontend"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " provides a simple mechanism to support light and dark themes consisting of two parts."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Styles template"
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "data-beyond-mode"
                  }), " attribute."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Themes in the template"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The application template is configured to support both the\r\nLight and Dark themes and provides a custom style definition file for each theme."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["In the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "definition.scss"
                }), " file, the following code is found:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "definition.scss",
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
                children: "The above code makes the configuration variables for the dark and light themes available in the corresponding files."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: ":host-context"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["In most cases, if a component requires knowledge of the\r\ntheme in use, you can use the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: ":host-context"
                }), " selector in a style file to define it, such as\r\nstyle file to define it, as illustrated in the following example:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
:host-context(html[data-beyond-mode]) {
    //styles here...
}

`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "::host-context is a CSS selector that allows selecting an element based on the context of the host element.\r\nIt enables setting styles on an element that depends on its context on the page,\r\ninstead of its own content or structure.\r\nIt is used with the syntax :host-context(selector)."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In some cases, components may require dynamically knowing the theme change. In these cases, the widgets object API can be used."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
import { widgets } from '@beyond-js/widgets/render';

widgets.attributes.add('data-beyond-mode', theme);
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The previous line adds to all existing widgets the attribute ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "data-beyond-mode"
                }), " with the value dark."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['template', 'widgets']
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

      /*************************************************
      INTERNAL MODULE: ./mdx/frontend/template/index.mdx
      *************************************************/

      ims.set('./mdx/frontend/template/index.mdx', {
        hash: 425766380,
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
                pretitle: "Frontend",
                title: "Template of a project"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS provides a simple but robust architecture for managing templates in projects, which has the following features:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Styles:"
                  }), " Integrated support for LESS and SASS preprocessors."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "CSS Properties:"
                  }), " Basic variable structure that allows for efficient web component work."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Global style:"
                  }), " Global stylesheet for the project."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Overwriting:"
                  }), " This is a special feature that allows for redefining styles and texts of existing modules without having to touch the original code."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Code separation:"
                  }), " Independent management of style files with automated process for generating independent and optimized final files."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Light & Dark Theme"
                  }), " built in."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Configuration"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The template configuration, like all elements in BeyondJS, is handled through a configuration file, whose name, by convention, is template.json and is located in the template folder in the root of the project. However, both the name and location are configurable values in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/project/config",
                  children: "project.json."
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The template can be managed from the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/workspace",
                  children: "Workspace"
                }), " and when a project is created, the default structure is already configured for its management."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Below are the configuration properties explained"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The application and global properties receive the same configuration parameters, but they have different purposes."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                txt: "template.application"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The application configuration property represents the general styles file of the project and its main focus is to be the place where custom CSS properties and any styles that need to be applied to the general document, external to the widgets, are defined."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Custom properties"
                }), " play an important role in managing the widgets. Web components with Shadow DOM are not affected by the general styles of the website where they are included. However, CSS properties can be accessed and used."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Handling styles can be seen in detail in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/styles/template",
                  children: "Styles in the template"
                }), " section."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                txt: "template.global"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "It aims to provide the developer with the possibility of sharing code between widgets. The files added in the global configuration are compiled into a file named global.css, which is included in the shadow dom of each widget so they have access to the styles."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Parametros de configuración"
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
                children: "As it can be seen in the above code, the configuration of both properties works the same, they receive an object with the following properties:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "processor:"
                  }), " Processor to use. It supports sass and less"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "path:"
                  }), " Directory where the files are located, if not defined it will look for all files relative to the location of the configuration file."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "files:"
                  }), " The * indicates that any file inside the defined path should be taken into account. If files are specified by name, only the indicated files will be taken into account."]
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

      /***************************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/add-rendering-engine.mdx
      ***************************************************************/

      ims.set('./mdx/frontend/widgets/add-rendering-engine.mdx', {
        hash: 1006013082,
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
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Frontend",
                title: "Agregar librerias de renderizado"
              }), "\n", (0, _jsxRuntime.jsx)(_html.UnderConstruction, {})]
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

      /******************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/controllers.mdx
      ******************************************************/

      ims.set('./mdx/frontend/widgets/controllers.mdx', {
        hash: 934728463,
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
              blockquote: "blockquote",
              code: "code",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Widgets",
                title: "Controladores"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Controllers in ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " are responsible for managing the lifecycle of widgets. These allow creating a rich and appropriate ecosystem for the demands of current applications and provide an API that allows for simple configuration for sophisticated behaviors such as choosing the type of rendering to use, which can vary between Static Rendering, Client Rendering, or Server-side Rendering, also known as SSR."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS provides base controllers for the different types of rendering, and these are extended by the packages that enable the possibility of working with rendering libraries."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "This document applies to any of the libraries, only the import and the exported controller name needs to be replaced, but the interface is the same. For convention and for the sake of simple understanding, the controllers of each package only add the library name as a prefix to the Controllers."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "WidgetController"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["If you use the CLI or the Workspace to create your packages, the management of these dependencies is done automatically. This documentation is intended for the reader to understand the extendable way of ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {})]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["To use the widgets of ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " it is necessary to have the package ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "@beyond-js/widgets"
                }), " installed, and from there, install one of the following packages according to the library you want to use:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/react-widgets",
                    children: (0, _jsxRuntime.jsx)(_components.code, {
                      children: "@beyond-js/react-widgets"
                    })
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/svelte-widgets",
                    children: (0, _jsxRuntime.jsx)(_components.code, {
                      children: "@beyond-js/svelte-widgets"
                    })
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/vue-widgets",
                    children: (0, _jsxRuntime.jsx)(_components.code, {
                      children: "@beyond-js/vue-widgets"
                    })
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "WidgetController"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "ReactWidgetController"
                  }), " in ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "react-widgets"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "VueWidgetController"
                  }), " in ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "vue-widgets"
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "SvelteWidgetController"
                  }), " in ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "svelte-widgets"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La implementación del controlador es requerida para el funcionamiento de los Widgets.\r\nLa estructura es la siguiente:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
import {LibraryWidgetController} from '@beyond-js/kernel/library-widget/ts';
import {ObjectToRender} from './views/page';
export /*bundle*/
class Controller extends LibraryWidgetController {
    get Widget() {
        return ObjectToRender;
    }
}

`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "Widget"
                }), " getter must be defined and return a component to render, compatible\r\nwith the view library that is being used."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Methods"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "initialise"
                    }), " : Allows adding logic to be executed\r\nprior to web component mounting in the HTML DOM and executed only once."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "createStore"
                    }), " : Property required if SSR is to be implemented.\r\nAllows adding logic for handling the widget state,\r\nmust return an object with\r\nthe interface ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/docs/api/IwidgetStore",
                      children: "IWidgetStore"
                    }), "."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "mount"
                    }), ": It is similar to the initialise method, the difference is that this method is executed\r\neach time the component is mounted in the DOM, while the initialise method only\r\nexecuted at the time when the component is first mounted."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "unmount"
                    }), ": Allows executing logic when the component is going to be unmounted from the Document."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "disconnect"
                    }), ": It is the disconnect event of the Web Component, executed when the component is removed from the dom."]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ["widgets/page", "widgets/layout"]
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

      /************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/index.mdx
      ************************************************/

      ims.set('./mdx/frontend/widgets/index.mdx', {
        hash: 1967569580,
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
              code: "code",
              blockquote: "blockquote"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Frontend",
                title: "Widgets"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The widgets of ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " are a key feature because they offer an easy and efficient way to implement solutions in ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " using your favorite library (such as React, Vue or Svelte) and provides a simple API for\r\nintegrating new existing libraries. This means that the learning curve is minimal\r\nand is based on understanding the concept\r\nof ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://micro-frontends.org/",
                  children: "micro-frontends"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Their architecture is designed to be directly compatible with\r\nMicro frontends and load dependencies dynamically and on demand,\r\nwhich optimizes load times, allows for a better user experience and\r\nthroughout the development process, as packages are not affected by their growth."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["To achieve this, the Widgets are encapsulated\r\nin ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://developer.mozilla.org/en-US/docs/Web/Web_Components",
                  children: "Web Components "
                }), " that use shadow DOM to encapsulate their content and can define\r\nproperties and methods that can be accessed through the DOM API."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["These features are\r\ncombined with the possibility of integrating different technology stacks in the same project,\r\ngiving developers the ability to evaluate ", (0, _jsxRuntime.jsx)(_components.em, {
                  children: "what"
                }), " technology is more convenient\r\nfor developing specific functionality without having to think about ", (0, _jsxRuntime.jsx)(_components.em, {
                  children: "what"
                }), " technology to use\r\nfor an entire project."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Currently, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " supports working with rendering libraries ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://reactjs.org/",
                  children: "React"
                }), ", ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://vuejs.org/",
                  children: "Vue"
                }), " and ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://svelte.dev/",
                  children: "Svelte"
                }), ". It also allows for easy integration of new libraries or tools."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Structure"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Widgets in ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " are treated as a type of ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/modules/bundles",
                  children: "Bundle"
                }), ", which provides the\r\npossibility to define the types of processors that should be included."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Their basic structure consists of the following elements:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "module.json"
                  }), ": Configuration file of the module/bundle, which can be generated automatically with the command ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "beyond add module"
                  }), "."]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "A Controller object that is responsible for registering the Widget in the DOM, mounting it and unmounting it. We will talk about it in more detail later."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Interface and logic files of the widget defined by the programmer, which can be created in React, Vue or Svelte."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Types of Widgets"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["By default, there are three types of Widgets in ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ":"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Widget: It is the default widget, without a specific type.\r\nIt simply represents a Micro frontend or Web Component with\r\nthe ability to encapsulate its content and load it on demand."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Layout: They are containers of Pages and Widgets,"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Crear un Widget"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Creating a Widget"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["In ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ", you can create Widgets and any type of Bundle using the CLI (Command Line Interface) with the\r\ncommand ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "beyondadd module"
                }), ". To get more information about this process, we recommend you review\r\nthe ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/cli",
                  children: " command section of the documentation "
                }), " of ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The structure of a page-type widget will be explained in detail below,\r\nwith a \"Hello world\", with the intention of having a concise and\r\nfast understanding of the behavior and naturalness with which it is programmed in ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ". The code can be copied and pasted to see its behavior."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["You can follow a more complete flow in our ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/tutorials/web",
                    children: "web tutorial"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Configuración"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Widgets in ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " are defined by configuring the bundle in the module.json file, as shown below."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "module.json",
                children: `{
    "widget": {
    "is": "page",
    "route": "/",
    "element": {
      "name": "home-page"
    },
    "ts": {
      "path": "ts",
      "files": [
        "*"
      ]
    }
  }
}
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Widgets in ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " are defined by configuring the bundle in the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), " file, as shown below."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "widget"
                }), " bundle configuration structure is as follows:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "is"
                    }), ": Optional, should be added if you want to specify that the widget is of type ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "page"
                    }), " or ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "layout"
                    }), "."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "route"
                    }), ": To indicate the access URL."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "element"
                    }), ": Is an object that allows you to define the properties of the web component, this object can have the following entries:"]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_components.code, {
                        children: "attrs"
                      }), ": ", (0, _jsxRuntime.jsx)(_components.code, {
                        children: "strings[]"
                      }), ": Receives an array of strings with the attributes that you want to define in the web component."]
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "name: Name of the web component to create."
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "processors: Can receive as property any existing processor you want to use."
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Controller"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The controller is responsible for defining which main object is going to be rendered and performing the necessary tasks to load our web component."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Example:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "controller.ts",
                children: `import {PageReactWidgetController} from '@beyond-js/react-widgets/page';
import {View} from "./views";

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return View;
    }
}`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The basic structure of a Page type widget is shown in the previous example, which mainly differs from the rest by the object from which the controller extends."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In the following, we explain in detail the important points:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Importing ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "PageReactWidgetController"
                    }), " from the ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " library,\r\nwhich provides controllers that manage the life cycle of the widgets."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["The ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "getWidget"
                    }), " method is mandatory and must return the component or object\r\nthat the widget is expected to render."]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["It is important to keep in mind that the life cycle of a widget is composed\r\nof different phases such as loading, rendering and unloading, and the controller\r\nis in charge of handling these phases. Additionally, it is possible to have different types\r\nof controllers for different types of widgets.\r\nFor more information on how the controller works,\r\nsee the ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/docs/widgets/controllers",
                      children: "Controller Object section"
                    }), "\r\nin our documentation."]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "View"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In this example, it demonstrates how React is used and what is shown below is a typical component from this library."
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "./ts/view.tsx",
                children: `import * as React from "react";

export function View(props): JSX.Element {
    return (
        <main>
            <h1>Hola mundo</h1>
        </main>
    );
}
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In this example, the main component of the widget receives a set of properties that provide the developer with the necessary environment for a smooth and unobstructed development experience in projects with microfrontends of different natures that share information and project-specific elements."
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ["widgets/creation", "widgets/page"]
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

      /*************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/layout.mdx
      *************************************************/

      ims.set('./mdx/frontend/widgets/layout.mdx', {
        hash: 3527918713,
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
              code: "code",
              ul: "ul",
              li: "li",
              blockquote: "blockquote"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                title: "Layouts",
                pretitle: "widgets"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Layouts are specialized widgets that represent containers for other widgets. They have multiple uses, such as sharing a graphical user interface design between different elements of a project or including code logic in multiple sections of the project. In this guide, you will learn how to set up and use Layouts in your BeyondJS project."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["To set up a layout type widget, the \"is\" property must have the value ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "layout"
                }), " in the file."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), "."]
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
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The \"is\" input is required for BeyondJS to identify existing layouts. From there, development is similar to any other widget."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The Layout Widget's controller object must extend from ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "[Library]WidgetController"
                }), ", where ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "Library"
                }), " should be replaced with the name of the widget library you are using."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Layouts can be used in two ways:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "As a general layout for the entire project."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "As a specific layout in page type widgets."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Project Layout"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The general project layout is defined by adding a \"layout\" entry point in the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), " file, which receives as value the name of the layout's web component, specified in the widget configuration when creating it (you can see it in the module.json file of the module)."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Projects created from the CLI or the ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " Workspace come with a configured project layout. The web component name is ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "main-layout"
                  }), " and it is located in the ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "modules/layouts/main"
                  }), " directory of the project."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The following is the minimum code for a layout"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `<main>
    <beyond-layout-children/>
</main>`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["To specify where the rest of the project elements should be inserted in the layout, you must add the tag `", (0, _jsxRuntime.jsx)("beyond-layout-children", {})]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "` in the desired place."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The web component ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "<beyond-layout-children/>"
                }), " is handled by ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), "\r\nto determine where web components requested dynamically should be loaded.\r\nIf the project does not have a project layout, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " automatically inserts\r\na ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "<beyond-layout-children/>"
                }), " component in the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "index.html"
                }), " file to render\r\nthe rest of the project elements."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Multiple Layouts"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["In ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " it is possible to handle multiple layouts and use them hierarchically,\r\nwhere one layout can be contained by another. This allows for greater flexibility\r\nwhen designing and structuring the graphical interface of your project."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["It is important to note that the general project layout cannot\r\nhave a specified container layout. In this case, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " will include the layout\r\nglobal project and ignore the instruction."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["To add a layout as a container for a widget, you must include the \"layout\" entry\r\nin the widget bundle configuration in the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), " file."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "module.json",
                children: ` "widget": {
    "is": "page",
    "layout": "main-layout",
    "route": "/",
    "element": {
        "name": "home-page"
      }
}`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "The value of the layout property must be the name of the web component, not the subpath of the module."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ["widgets/page", "widgets/rendering"]
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

      /*************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/object.mdx
      *************************************************/

      ims.set('./mdx/frontend/widgets/object.mdx', {
        hash: 431890818,
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
                title: "Objeto BeyondWidget",
                pretitle: "Widgets"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El objeto BeyondWidget es el objeto padre de los widgets y hereda directamente\r\ndel objeto ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  to: "https://developer.mozilla.org/es/docs/Web/API/HTMLElement",
                  children: "HTMLElement"
                }), " y ofrece una api que permite interactuar con el árbol de widgets de BeyondJS."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Subtitle, {
                children: "Propiedades"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_components.strong, {
                    children: ["wnode ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/docs/api/NodeWidget",
                      children: "NodeWidget"
                    }), " optional:"]
                  }), " Nodo html del widget."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_components.strong, {
                    children: ["wchildren ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/docs/api/BeyondWidget",
                      children: "(BeyondWidget)[]"
                    }), " optional:"]
                  }), " Lista de widgets contenidos"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_components.strong, {
                    children: ["parent ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/docs/api/BeyondWidget",
                      children: "BeyondWidget"
                    }), " optional:"]
                  }), " Widget contenedor, retorna undefined sino existe un widget como contenedor."]
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

      /***********************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/page.mdx
      ***********************************************/

      ims.set('./mdx/frontend/widgets/page.mdx', {
        hash: 1927870172,
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
              code: "code",
              blockquote: "blockquote"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Widgets",
                title: "Pages"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Widgets of type 'page' represent a web page accessible by URL. ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " identifies and initializes them in the DOM when a URL request is received."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The 'page' bundle receives the following additional values in the configuration added in the 'module.json'"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "is"
                  }), ": the value must be ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "page"
                  }), "."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "route"
                  }), ": Defines the route or url of the page and is explained in detail later."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "layout"
                  }), ": It is optional, it should be added if you want the page to be contained in a specific layout."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Based on the above, the following is an example of a valid 'module.json' for pages."
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "module.json",
                children: `{
  "name": "home",
  "widget": {
    "is": "page",
    "route": "/",
    "element": {
      "name": "home-page"
    },
    "ts": {
      "path": "ts",
      "files": [
        "*"
      ]
    }
  }
}
`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "PageWidgetController"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Pages must inherit from the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "PageWidgetController"
                }), " controller."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "PageWidgetController"
                }), " object manages the registration of URLs for handling ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " routing and is provided by the widget package used in the project."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Page implementation is done through specific controllers for each library, such as ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "PageReactWidgetController"
                  }), " for React, ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "PageVueWidgetController"
                  }), " for Vue, and ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "PageSvelteWidgetController"
                  }), " for Svelte. These controllers are found in separate packages, which must be installed in the project according to the library being used. For example, to use page functionality in a React project, the package ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "@beyond-js/react-widgets"
                  }), " must be installed and the controller ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "PageReactWidgetController"
                  }), " used. This allows for greater flexibility and ease of use when adding support for new libraries in the future."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Methods"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "PageWidgetController"
                }), " contains the same methods as the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "WidgetController"
                }), " object, but also adds the following methods specific to page handling:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "hide"
                  }), " [void] [optional]: Executed when rendered and hidden, this occurs when navigating from one URL to another."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "show"
                  }), " [void] [optional]: Executed every time the URL is accessed and the page is displayed in the browser."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Routing"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["As indicated at the beginning of the document, the page route is defined\r\nby the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "route"
                }), " property of the widget, in the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), " file."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["The configurations of the ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "module.json"
                  }), " files are managed\r\nautomatically by ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " when using tools such as the CLI\r\nor the BeyondJS Workspace."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "URLs have a simple but powerful system for handling variables\r\nthat allow for working with dynamic URLs. All that is needed is\r\nto define the variables that are expected to be received in the URL using\r\nJavaScript's template-string syntax."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To illustrate this, let's say we have a page for modifying\r\nuser data and we need to handle the ID through the URL."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The route property of the widget would have the following value:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
/user/edit/\${userId}
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
                    children: "/user/edit/any-value"
                  })
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Also, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " provides an ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "uri"
                }), " object as a property of the Controller and also,\r\nthis object is passed to the Render Component as ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "props"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["These properties, are available on the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "uri"
                }), " object available as a property in\r\nthe widget controller and could be accessed from the\r\ncontroller in the following way:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "controller.ts",
                children: `this.uri.vars.get('userId');`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The way to access the uri object from the view components can vary\r\ndepending on the behavior of the libraries used."
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ["widgets/layouts", "routing"]
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

      /****************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/rendering.mdx
      ****************************************************/

      ims.set('./mdx/frontend/widgets/rendering.mdx', {
        hash: 1110989544,
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
                pretitle: "Frontend",
                title: "Rendering"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS provides several rendering strategies to fit the needs of your project. Below are the rendering strategies available in BeyondJS and how to use them."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "CSR (Client Side Rendering)"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Client Side Rendering (CSR) is a strategy in which the client's browser is responsible for generating the final view using JavaScript and is the default rendering type in ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ". This means that the page content is loaded dynamically in the browser, instead of being pre-generated on the server."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "With this configuration, we are indicating that our widget will use Client Side Rendering. By default, the csr property has the value true, so it is not necessary to specify it if we want to use CSR rendering."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "SR (Static Rendering)"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The SR (Static Rendering) strategy is a strategy in which there is already an HTML ready to be rendered, it is not necessary to interact with the server or with any framework since the resource being ready only needs to be requested."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To use this strategy, you must define a \"render\" property in the module.json file of your module, with the value of an array of strings containing each of the routes defined for each page or requested resource."
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "module.json",
                children: `{"widget": {

        "render": {
            "sr": [
                "/path/to/page1",
                "/path/to/page2"
            ]
        }
    }

}
`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "SSR (Server Side Rendering)"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The SSR (Server Side Rendering) rendering strategy in BeyondJS focuses on\r\ngenerating the HTML of a component or widget on the server side before sending it to the client.\r\nsending it to the client. This allows to load the data structure of the\r\ncomponent quickly and avoids the need for intervening packages,\r\ndependencies or client-side frameworks to load it."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To enable SSR in a module or widget, an \"ssr\" property must be added in the bundle configuration (widget).\r\nproperty must be added to the bundle (widget) configuration in the module's \"module.json\" file.\r\nThis property must be a boolean indicating whether server-side rendering is active."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In addition, it is necessary to define a \"createStore\" property in the view's Controller.\r\nof the view. This property is a getter that returns an object of type IWidgetStore\r\nwhich must contain three main methods:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "toJSON"
                  }), " : it is in charge of returning the data that the widget is going to consume from the server.\r\nThis method is in charge of serializing the HTML response so that it can be sent to the client and displayed on the screen.\r\nand displayed on the screen."]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "hydrate`:It is in charge of hydrating or updating the HTML in the client.\r\nIts assumption is that the state previously rendered on the server\r\nmatches the state to be returned to the client. This process is called hydrate and is\r\nresponsible for synchronizing the client state with the server state."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "fetch is used in both SSR and CSR (Client Side Rendering) strategies.\r\nCSR (Client Side Rendering) strategy and is in charge of processing the Store data and making it available.\r\nStore data and making it available. This method is executed both on the client and on the server,\r\ndepending on the strategy used. It is responsible for retrieving the necessary data\r\nto render the widget, either from the server or from the client."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "module.json",
                children: `{
    "widget": {
        "name": "mi-widget",
        "type": "page",
        "route": "/mi-pagina",
        "render": {
            "ssr": true
        }
    }

}`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Hybrid Rendering (SSR and CSR)",
                "data-menu": "Hybrid Rendering"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS allows you to use both client-side rendering (CSR) and server-side rendering (SSR).\r\nserver-side rendering (SSR) together, which is known as hybrid rendering."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In this type of rendering, SSR is used to generate an initial HTML that is delivered to the client,\r\nimproving the page loading experience. Once the browser receives the initial HTML, the corresponding view framework is responsible for updating and handling the rendered HTML.\r\nframework takes care of updating and handling the view based on user interaction."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["To enable hybrid rendering in a BeyondJS widget, we must define in the module's ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), " a render property, which is an object with three possible inputs:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "module.json",
                children: `{
    "widget": {
        "render": {
            "ssr": true,
            "csr": true
        }
    }
}`
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

      /**************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/routing.mdx
      **************************************************/

      ims.set('./mdx/frontend/widgets/routing.mdx', {
        hash: 703179426,
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
            return (0, _jsxRuntime.jsx)(_components.p, {
              children: ";"
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

      /******************************************************
      INTERNAL MODULE: ./mdx/frontend/widgets/to-complete.mdx
      ******************************************************/

      ims.set('./mdx/frontend/widgets/to-complete.mdx', {
        hash: 524762313,
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
              h3: "h3",
              ul: "ul",
              li: "li",
              h2: "h2",
              p: "p",
              h1: "h1",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h3, {
                children: "Casos de estudio."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Puede darse el caso donde el programador necesita saber que el componente se monta."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Si deseas construir un controlador para renderizar HTML puro o sin framework de vistas."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Crear un controlador para alguien que desea trabajar con un framework de vista."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Notas"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los atributos deben definirse en el module.json pues deben ejecutarse en el constructor del Componente Web.\r\nLas propiedades permiten que Beyond Identifique que elemento se esta renderizando en sistemas de\r\nrenderizado SSR y SR."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "los atributesChanges son custom atrributes."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h1, {
                children: "documentar"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["propiedad ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "widget"
                }), " es el Web Componente"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h1, {
                children: "noDocumentar"
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

      /*****************************************
      INTERNAL MODULE: ./mdx/modules/bundles.mdx
      *****************************************/

      ims.set('./mdx/modules/bundles.mdx', {
        hash: 748942818,
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
              code: "code",
              blockquote: "blockquote",
              ul: "ul",
              li: "li",
              strong: "strong",
              br: "br"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Modules",
                title: "Bundles"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In BeyondJS, bundles are sets of files and configurations that are used to organize and\r\nstructure the code of an application. Each bundle can contain one or more files of different types,\r\nsuch as JavaScript code, CSS styles, images, etc. Bundles can also contain configurations\r\nfor code processors, such as TypeScript or Sass."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Bundles are defined as properties of the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), " file. For example,\r\nthe following code defines a bundle of type ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "code"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
  "name": "icons",
  "code": {
    "ts": {
      "path": "ts",
      "files": [
        "*"
      ]
    },
    "mdx": {
      "path: "ts/mdx",
      "files": [
        "*"
      ]
    }
  }
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "It is important to note that a module can contain more than one bundle,\r\nfor this it is only necessary to add another property with the name of the additional bundle.\r\nHowever, a module cannot contain two bundles of the same type."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "The bundles receive processors as values. Processors are objects that indicate\r\nthe type of files to be processed and their location. BeyondJS allows for the definition or aggregation of.\r\nnew processors, which makes the concept of processors extensible. You can check the section\r\nof processors for a list of the default processors."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Bundles definition"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Imagine you need to create the interface of a registration form.\r\nThe registration form could be divided into two layers:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "the user interface based on HTML code and the screen styles."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "The logic associated with validations and functionalities."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["To carry out the development, it is necessary to create some files in Typescript\r\nthat include the logic and elements of the interface, as well as other style files.\r\nIn ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ", this involves working with at least two basic processors:\r\nTypescript and Sass. The former generates JavaScript code and the latter generates CSS code."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "As explained above, the ability of a bundle to generate one or several\r\nfinal files depends on the processors included in its packaging.\r\nIf only JavaScript code needs to be created, a single file is generated.\r\nIf, on the other hand, CSS code is also needed, two files are generated."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Traversal Bundles"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The transversal bundles, are defined the same as the other bundles, but have a particularity that offers productive advantages:\r\nthe code of a traversal bundle is compiled into a single file."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS places, integrates and unifies them in a single bundle or final file. Start bundles are a clear example of this, allowing the programmer to define the logic to be executed at application startup."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Bundle types"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Widget"
                  }), ": They contain the code of a web-component.\r\nPages and layouts are handled as widgets. You can read more about this bundle type at.", "\n", " ", "\n", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/widgets",
                    children: "The Widgets section."
                  }), "."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Code"
                  }), ": Bundle that allows you to create various functionalities to be consumed from another bundle or module. Supports multi-processor integration."]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "TS (Typescript)**: only supports the processor for handling typescript files."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Bridge**: backend code bundle, which generates client code and provides the websocket connection to connect the client and the backend."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Backend**: only supports code to be executed in execution environments such as ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Node"
                  }), " or **Deno**."]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Vue**: Bundle specific for module management with the Vue Framework."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Svelte**: specific for Svelte code management and its single file component structure."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Start**: Transversal Bundle, useful if it is required to execute logic when starting the application."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Text-start**: Transversal Bundle, which", (0, _jsxRuntime.jsx)(_components.br, {}), "\n", "allows to handle multi-language texts\r\nrequired at application start-up.\r\napplication start-up."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ["modules/processors", "frontend/widgets"]
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
      INTERNAL MODULE: ./mdx/modules/config.mdx
      ****************************************/

      ims.set('./mdx/modules/config.mdx', {
        hash: 3864345562,
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
              children: [(0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.Title, {
                  children: "Module configuration"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The module configuration file is module.json."
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
                  }), " [string] : Defines the name of the module, necessary for the elements to be imported."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["platforms** [array] : Defines the platforms supported by the module. The supported values are the identifiers of the existing ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/concepts/platforms",
                    children: "platforms"
                  }), "."]
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
                  children: ["[bundle] ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/module#bundle",
                    children: "[bundle]"
                  }), " : Refiere al nombre identificador del tipo de bundle que se desea agregar en el módulo. Un módulo puede poseer uno o varios bundles. Cada bundle recibe un objeto de configuración con los procesadores que utiliza y alguna variación inherita del tipo de bundle agregado."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ["backend", "widgets"]
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

      /******************************************
      INTERNAL MODULE: ./mdx/modules/creation.mdx
      ******************************************/

      ims.set('./mdx/modules/creation.mdx', {
        hash: 3981663784,
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
              blockquote: "blockquote",
              p: "p",
              code: "code",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Basics",
                title: "Module creation"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["This page assumes that you have already read.\r\nthe ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/modules/intro",
                    children: "introduction about modules in the documentation."
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Modules are configured via a JSON object which is stored in a file\r\ncalled ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), ". The basic structure of this file is as follows:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "module.json",
                language: "json",
                children: `{
  "name": "module-name",
  "platforms": ["browser"] 
  "bundle": { 
    // bundle properties
  }
}`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "To create a module, it is necessary to have previously created a package."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["As you can see in the example above, the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), " file\r\ncan contain the following properties:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "name"
                  }), ": is the name of the module."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "platfoms"
                  }), ": is a list indicating the platforms for which the bundle is available.\r\nthe bundle is available for. If not specified, the bundle is considered to be compatible with all platforms.\r\nbundle is considered to be compatible with all platforms."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "[bundleName]"
                  }), ": is used to specify the type of bundle you want to create in the module.\r\nto create in the module. A module can contain multiple bundles by simply\r\nadding more properties with the name of each additional bundle.\r\nhe value of this property is an object containing the bundle configuration,\r\nand the properties within this object vary depending on the type of bundle being added.\r\nbeing added. For more information on the different types of bundles and their\r\nbundle types and their configuration, see the bundle section of the documentation."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Configuration example"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Recalling the example defined in the introduction, which had the following characteristics:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "An auth.ts file with an Auth object that serves as a template and allows to make the call for login."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "A user.ts file with a User object that exposes the user's information in case he/she logs in."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "A styles.scss style file"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "A graphical interface component form.tsx."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                }), " for this module could be defined as follows:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                title: "module.json",
                language: "json",
                children: `
{
    "name": "login",
    "code": {
        "ts": {
            "path": "ts",
            "files": ["*"]
        },
        "sass": {
            "path": "sass",
            "files": ["*"]
        }
    }
}
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In the previous example, a module named first-module is being created, with a bundle code that contains a sass processor and a ts processor that process Sass and Typescript code respectively and that will be packaged for web platform."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["A module can contain several bundles, these are defined as properties of the module configuration object and a module pureciben as value a configuration object that apart from the processors, can receive some additional properties depending on the type of bundle. You can read more in detail about this\r\nin ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/bundles",
                  children: "The bundles section."
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ["modules/bundles", "modules/processors"]
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

      /**********************************************
      INTERNAL MODULE: ./mdx/modules/introduction.mdx
      **********************************************/

      ims.set('./mdx/modules/introduction.mdx', {
        hash: 2490200700,
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
              code: "code",
              ul: "ul",
              li: "li",
              em: "em"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Basics",
                title: "Modules"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["In ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ", modules are the basic unit of development and are divided into two concepts:\r\nInternal Modules and Modules."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Internal Modules represent the concept of traditional JavaScript modules,\r\ni.e. files with independent tasks and their own scope.\r\nHowever, developers have the ability to define whether these internal modules are accessible to be used by the developers.\r\ninternal modules are accessible to be used by other internal modules or not by using a special comment\r\nnot by using a special comment named", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "/*bundle*/"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "On the other hand, Modules in BeyondJS are a larger unit of development that is composed of several internal modules.\r\nconsists of several internal modules, as well as other resources such as styles, images and text,\r\nimages and text. BeyondJS packages these modules into a single file depending on the type of\r\nthe type of processor used."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To illustrate this, let's take as an example a \"login\" module that consists of.\r\nthe following elements:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["An ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "auth.ts"
                  }), " file with an Auth object that serves as a model and\r\nallows the login call to be made"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
export /_bundle_/ class Auth {

    constructor(options) {
        this.options = options;
    }

    login(username, password) {
        // lógica de inicio de sesión
    }

    logout() {
        // lógica de cierre de sesión
    }

}`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["A ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "user.ts"
                  }), " file with a User object that exposes\r\nthe user's information in case he/she logs in."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
import { Auth } from './auth.js';

export /*bundle*/ class User {
    constructor(options) {
        this.options = options;
        this.auth = new Auth(options);
    }

    getCurrentUser() {
        // lógica para obtener el usuario actual
    }

}
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["A styles file ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "styles.scss"
                  }), " and"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["a graphical interface component ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "form.tsx"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Based on EcmaScript, the files auth.ts, user.ts and form.tsx\r\nare independent modules that expose an object. However,\r\nin terms of functionality, the application module is composed of these files in their entirety.\r\nfiles in their entirety."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Therefore, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " conceptualizes modules as a set of files defined in a module.js file.\r\ndefined in a module.json file, where all elements within this module can be used with each other.\r\nmodule can be used with each other. In addition, the programmer can define\r\nexactly which elements to export to an external module, as in the \"user\" object example, which is\r\nof the \"user\" object, which is exported via the magic comment /", (0, _jsxRuntime.jsx)(_components.em, {
                  children: "bundle"
                }), "/."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " packages the modules as separate bundles. You can learn more about this in the module creation section."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "As a developer, you're probably only interested in other modules being able to\r\nconsume the form view and the User object to access user data.o."
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['modules/creation', 'bundles']
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
      INTERNAL MODULE: ./mdx/modules/json.mdx
      **************************************/

      ims.set('./mdx/modules/json.mdx', {
        hash: 0,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
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
      INTERNAL MODULE: ./mdx/modules/processors.mdx
      ********************************************/

      ims.set('./mdx/modules/processors.mdx', {
        hash: 443985406,
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
              children: [(0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.Title, {
                  children: "Processors"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Many of the tools or languages used in the web environment require prior processing to be interpreted by browsers or runtime environments, this is the work done by processors."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS offers a series of integrated processors, which allow you to use the main technologies of the web industry and provides support for new processors can be integrated if required."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS works differently from packagers such as Webpack or Parcel. It does not need to evaluate the dependency tree of a project, nor does it need to apply tree shaking techniques. Thanks to its modular nature and through processors, code packaging is done at the bundle level."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Processors are BeyondJS components that allow to interpret, parse, transpile or compile code (as the case may be) from the languages or technologies used in a ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/bundles",
                  children: "Bundle."
                }), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.Subtitle, {
                  children: "Existing processors"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "ts:"
                  }), " allows working with typescript and ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "tsx"
                  }), " files for react."]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "sass:** provides support for working with SASS files with .scss extension."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "vue:** Provides support for working with single-file-components files for vue."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "svelte:** Provides support for working with svelte single-file-component files."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.Subtitle, {
                  children: "Properties"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "All processors have the following properties:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "path"
                    }), " (string) optional: Allows to define the directory where the processor files are located. If a value is added, it is interpreted as a directory relative to the location of the defined module.json."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "files** (array) optional: Allows defining the list of files or folders included in the processor. If the path property is defined, the files will be searched inside the specified directory, otherwise, they will be searched relative to the location of the module.json. It is possible to pass as value of the property an array with an entry *, this way it would be indicating that all the files in the specified directory are included."
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.Subtitle, {
                  children: "Examples"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The following example corresponds to the definition of a code type bundle, the details are explained below:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "The bundle makes use of two processors: sass and ts."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "The sass processor includes all the files in the /code/scss directory which is relative to the location of the module.json file."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "The ts processor only includes the component.ts file which is located in the /code/ts directory relative to the location of the module.json file."
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

      /*****************************************
      INTERNAL MODULE: ./mdx/packages/beyond.mdx
      *****************************************/

      ims.set('./mdx/packages/beyond.mdx', {
        hash: 4107909249,
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
              blockquote: "blockquote",
              p: "p",
              ul: "ul",
              li: "li",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Basics",
                title: "BeyondJS packages"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["BeyondJS is a highly extensible platform, designed to allow developers to integrate the technologies that best suit their needs, including new ones that emerge in the market. This means that developers can create custom packages to extend existing ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " functionality. If you want to learn more about how to extend BeyondJS, you can visit the ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/foundations/extend",
                    children: "relevant section in our documentation"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " offers a variety of standalone packages so that they can be incorporated into development as needed. This\r\nprovides greater flexibility and adaptability in the creation of projects, allowing you to choose which technologies and\r\nlibraries that best suit the needs of the project. In addition, this allows for greater scalability as packages can be\r\nscalability as packages can be upgraded or replaced independently. You can read more about about these packages in the\r\nAvailable Packages section."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/kernel",
                    children: "@beyond-js/bee"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/bee",
                    children: "@beyond-js/bee"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/local",
                    children: "@beyond-js/local"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/ssr",
                    children: "@beyond-js/ssr"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/widgets",
                    children: "@beyond-js/widgets"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/react-widgets",
                    children: "@beyond-js/react-widgets"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/svelte-widgets",
                    children: "@beyond-js/svelte-widgets"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@beyond-js/vue-widgets",
                    children: "@beyond-js/vue-widgets"
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "This document will review what each of the packages does."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "@beyond-js/kernel"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["This package contains a set of essential utility functionalities for developing projects in ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "@beyond-js/backend"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "This package provides a node-based backend service with Websocket connection and supports the execution of Bridges, a BeyondJS functionality that allows creating backend APIs and the client code to consume it with data typing included."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "@beyond-js/bee"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["This package enhances the Node.js development experience by allowing you to interact with the ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " DevServer instead\r\nof searching for packages on disk. This allows programming with HMR (Hot Module Replacement) functionalities in a natural\r\nand easy way. In addition, it provides support for working with http imports in older versions of Node.js."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "@beyond-js/local"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "This package is used for two main functions:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["It listens for changes from the BeyondJS Inspector and performs immediate loading via HMR of the modified elements. It is used for backend projects, checking the status of the launchers and turning them on prior to the execution of the action. Enables HMR behavior in projects made with ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ". It is a required dependency for the development environment."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "@beyond-js/ssr"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["BeyondJS implements Server Side Rendering (SSR) via an HTTP server with three endpoints: widget and page. It allows you to implement SSR solutions in web projects. You can read more about best practices and other forms of rendering in ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/widgets/rendering",
                  children: " the Rendering with Widgets section"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "@beyond-js/widgets"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Web projects or packages in ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " function as standalone microfrontends with the ability to contain their own stack of technologies. These projects are flexible and easily extensible, allowing the integration of new widget packages that provide support for view or rendering libraries with a few simple steps."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " focuses on making it easy to integrate new rendering libraries, so you can do it easily. You can read more\r\nabout adding rendering engines in the corresponding section of the documentation."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["In addition, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " offers the following specific packages for creating Web projects with client, static or server-side rendering (SSR) using ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  hef: "https://reactjs.org/",
                  children: "React"
                }), ", ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://vuejs.org/",
                  children: "Vue"
                }), " and ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://svelte.dev/",
                  children: "Svelte"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "These packages are:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["React: ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "@beyond-js/react-widgets"
                  }), "."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Svelte: ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "@beyond-js/svelte-widgets"
                  })]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Vue: ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "@beyond-js/vue-widgets"
                  })]
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
      INTERNAL MODULE: ./mdx/packages/creation.mdx
      *******************************************/

      ims.set('./mdx/packages/creation.mdx', {
        hash: 4232332068,
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
              code: "code",
              blockquote: "blockquote",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Basics",
                title: "Packages"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["In ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " projects or applications are handled as a javascript package that can be published to NPM directly if desired."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), " file has a similar function to that of any npm project,\r\nin that it is where the project dependencies and settings are defined. However, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " adds a set of additional entry points\r\nto the package.json, which allow developers to manage packages universally and then be able to run and publish them on any platform.\r\non any platform."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["This document explains how package creation works.\r\nYou can read in detail all the configuration options that ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " manages over the packages.\r\nin ", (0, _jsxRuntime.jsxs)(_html.Link, {
                    href: "/docs/packages/json",
                    children: ["the ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "package.json"
                    })]
                  }), " section."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In summary, the package.json in BeyondJS is a fundamental file for project configuration and management.\r\nIn addition to the common functions of a package.json, BeyondJS adds additional entry points that allow you to manage packages universally,\r\ndefine distributions, specify package paths, configure templates, set supported languages and define global project parameters."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Crear un paquete"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Los paquetes en ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " pueden crearse de tres maneras:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["ejecutando el comando ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "beyond add package"
                  }), " en la consola de comandos."]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Haciendo uso del BeyondJS Workspace."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Manualmente."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Creación usando el CLI"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para Crear un proyecto por medio del cli sólo debes ejecutar el siguiente comando:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "beyond add package."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Para hacer uso del CLI de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " debes tener ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " instalado de forma global. Puedes ver todos los comandos provistos\r\nen ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/cli",
                    children: "la sección del cli"
                  }), " de esta documentación."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Creación usando BeyondJS Workspace"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Puedes crear paquetes directamente desde el BeyondJS Workspace, para hacerlo debes seguir los siguientes pasos:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Ejecutar ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " en la carpeta que desees gestionar tus proyectos."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Acceder a ", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://workspace.beyondjs.com",
                    children: " https://workspace.beyondjs.com"
                  }), " y crear el proyecto por medio de su interfaz gráfica.\r\nPuedes leer más acerca de cómo funciona el Workspace en la ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/workspace",
                    children: "sección de BeyondJS Workspace"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Manual creation"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "You can create the packages manually, for this you only have to create a package.json with its minimal structure, which must include\r\nthe package name."
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                name: "package.json",
                children: `{
 "name": "package-name",
}`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["In addition, you will need to create the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "beyond.json"
                }), " file so that the ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " DevServer can recognize it. The file must have the following structure"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "beyond.json",
                children: `{
    "applications": ["./project.json"]
}`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["You can create the package.json with third party tools like NPM or Yarn, then register them in the ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "beyond.json"
                  }), " file. You must make sure\r\nthat you have the package properties that ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " requires.\r\nAdemás, tendrás que crear el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "beyond.json"
                  }), " para que el DevServer de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " pueda reconocerlo. El archivo debe tener la siguiente estrucutra"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['packages/distributions', 'packages/json']
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

      /***********************************************
      INTERNAL MODULE: ./mdx/packages/dependencies.mdx
      ***********************************************/

      ims.set('./mdx/packages/dependencies.mdx', {
        hash: 2476869352,
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
              code: "code",
              ol: "ol",
              li: "li",
              blockquote: "blockquote"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Packages",
                title: "Dependencias"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Dependencies in ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ", are handled similarly to how they are handled in JavaScript, through the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), " file. However, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " introduces an advanced dependency concept that allows you to integrate packages that are not published in NPM as dependencies. published in NPM as dependencies of other packages. Once included, these packages are treated in the same manner as any other dependency defined in the dependencies or devDependencies entries of ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["To add a local package as a dependency, it must first be included as a project in the DevServer. This means that it must be registered in the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "beyond.json"
                }), " file and a libraries entry point must be included in the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), " file."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The structure is as follows:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "package.json",
                children: `"libraries": {
    "imports": [
      "packageName1",
      "packageName2",...
    ]
}`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The libraries entry in the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), " accepts an object containing an ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "imports"
                }), " property that receives an array of strings. The entries in this array must correspond to the exact name of the packages you want to include."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "As an example, suppose we have the packages \"@my-packages/a\" and \"@my-packages/b\" and package \"b\" depends on \"a\"."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To include these packages as dependencies, we must follow two steps:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["make sure that both packages are included in the ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "beyond.json"
                  }), " file."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["The ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "applications"
                  }), " property in the ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "package.json"
                  }), " can accept either an array or a string. If a string is provided, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " will interpret that the list of applications is in a separate file with the name specified in that string."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "2",
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Add the ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "libraries.imports"
                  }), " entry in the package.json file and include the ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "@my-packages/a"
                  }), " package as an item in the array defined as the value."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "b/`package.json`",
                children: `"libraries": {
    "imports": [
      "@my-packages/a",
    ]
}`
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

      /************************************************
      INTERNAL MODULE: ./mdx/packages/distributions.mdx
      ************************************************/

      ims.set('./mdx/packages/distributions.mdx', {
        hash: 1106252046,
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
              blockquote: "blockquote",
              code: "code",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                id: "intro",
                pretitle: "Packages",
                title: "Distributions"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Distributions are a functionality that allows you to define the behavior that the BeyondJS DevServer should have in the development environment and the features for the packaging of the project during the deployment process."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "When a new project is created, it comes with a distribution configured by default. This document describes in detail all the distribution configuration options needed to work with different runtime environments or module resolution types."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                id: "definition",
                tag: "h2",
                text: "Definition"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The distributions are defined in the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "project.json"
                }), " file, in the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "distirbutions"
                }), " property of the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "development"
                }), " entry point.\r\nproperty of the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "development"
                }), " entry point."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "An example of a distribution is:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: ` {
    "name": "web",
    "platform": "web",
    "environment": "development",
    "ports": {
        "bundles": 3500
    }
},
`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                id: "properties",
                tag: "h2",
                text: "Properties"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_html.ObjectProperty, {
                      type: "string",
                      children: "name"
                    }), " Name identifier of the distribution."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_html.ObjectProperty, {
                      type: "string",
                      children: "platform"
                    }), " identifier of the platform used by the distribution. You can\r\nsee the platform identifiers in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/platforms",
                      children: "platforms section"
                    }), "."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_html.ObjectProperty, {
                      type: "string",
                      children: "environment"
                    }), " supports ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "deployment"
                    }), " and ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "production"
                    }), " values."]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_html.ObjectProperty, {
                        type: "object",
                        children: "ports"
                      }), " receives an object with the following properties :"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_html.ObjectProperty, {
                        type: "number",
                        children: "bundles"
                      }), " port on which the DevServer will return bundles."]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_html.ObjectProperty, {
                        type: "number",
                        children: "http"
                      }), " port to connect debuggers or code inspectors. You can read more\r\nabout remote inspection in ", (0, _jsxRuntime.jsx)(_html.Link, {
                        href: "/remote-inspection",
                        children: "remote-inspection section."
                      }), "."]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_html.ObjectProperty, {
                      type: "object",
                      children: "ts"
                    }), " Object handled to manage typescript compiler configurations, currently\r\nsupports the following properties:"]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(_html.ItemProperty, {
                        type: "string",
                        optional: true,
                        label: "compiler",
                        children: (0, _jsxRuntime.jsxs)(_components.p, {
                          children: ["accepts ", (0, _jsxRuntime.jsx)(_components.code, {
                            children: "ts"
                          }), " and ", (0, _jsxRuntime.jsx)(_components.code, {
                            children: "transpiler"
                          }), " values."]
                        })
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ItemProperty, {
                    type: "string",
                    optional: true,
                    label: "backend",
                    children: (0, _jsxRuntime.jsxs)(_components.p, {
                      children: ["This property is required if the package uses a connection to a backend via websockets. You can read more about\r\nthis in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                        href: "/bridges",
                        children: "Bridges"
                      }), " section."]
                    })
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Web Packages"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The web distribution is configured to handle web, mobile or desktop projects."
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "package.json",
                children: `  "deployment": {
    "distributions": [
       {
        "name": "web",
        "platform": "web",
        "environment": "development",
        "ports": {
          "bundles": 6500
        }
      }
    ]
  }`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Backend Packages"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["You can create backend projects with three types of platforms ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "node"
                }), ", ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "deno"
                }), " and ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "backend"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "All represent a script that can be executed as a service in a Node or Deno execution environment (the platform defined for each case must be used)."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " uses the platform to identify how the code should be packaged."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "The backend distribution in BeyondJS is a Node.js service that allows connecting to other services or clients through WebSockets.\r\nThanks to bridge bundles, the development of backend functionality is facilitated by automatically generating an API with data typing and HMR support in development environments. This gives programmers the ability to easily create and consume methods defined in the backend."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The configuration of these distributions is done as follows, taking into account that the values such as \"name\" and configuration ports are defined by the developer and that the value of the platform will depend on the purpose of the package and the environment to be used. on the purpose of the package and the environment to be used."
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "package.json",
                children: `  "deployment": {
    "distributions": [
      {
        "name": "backend",
        "platform": "backend",
        "environment": "development",
        "ports": {
          "bundles": 6580,
          "http": 6581,
          "inspect": 6582
        }
      }
    ]
  }`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Web and Backend Configuration"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["In projects where client and server interaction is required, you can add the configuration of both distributions and interact simultaneously with the ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " Dev Server to have an efficient and homogeneous experience in the development."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["To do this, it is necessary to add both distributions and specify ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "in the web distribution the property \"backend\" that must have as value the name that has been placed to the backend distribution"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "package.json",
                children: `"deployment": {
    "distributions": [
      {
        "name": "web",
        "platform": "web",
        "environment": "development",
        "backend": "backend",
        "ports": {
          "bundles": 6510
        }
      },
      {
        "name": "backend",
        "platform": "backend",
        "environment": "development",
        "ports": {
          "bundles": 6511,
          "http": 6512,
          "inspect": 6513
        }
      }
    ]
  }
`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Module resolution format"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The module resolution format in ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " is automatically set based on the distribution type. However, developers can modify them according to their needs by adding the 'bundles' property in the distribution configuration."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The 'bundles' property is an object that includes a 'mode' property, whose value determines the type of module resolution."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The accepted values for 'mode' are: 'amd', 'sjs', 'esm', 'cjs'."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Example:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "package.json",
                children: `  "deployment": {
    "distributions": [
      {
        "name": "web",
        "platform": "web",
        "bundles": {
            "mode": "esm"
        },
        "ports": {
          "bundles": 6580
        }
      }
    ]
  }`
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['backend', 'frontend/intro']
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

      /*****************************************
      INTERNAL MODULE: ./mdx/packages/import.mdx
      *****************************************/

      ims.set('./mdx/packages/import.mdx', {
        hash: 4098622058,
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
                DocHeader
              } = _components;
            if (!DocHeader) _missingMdxReference("DocHeader", true);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(DocHeader, {
                title: "Importación de proyectos",
                pretitle: "packages"
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "package.json",
                children: `
"libraries": {
    "imports": [
      "@project/models"
    ]
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In BeyondJS a project can be imported by another project and function as a library, giving the main project access to its modules. This functionality is key to think of solutions with interconnected microservice structures or libraries containing reusable code."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "For example, we can talk about a solution that manages a web page, a mobile application and an administrative panel, all as independent projects that feed the same data source. The import of projects allows all the data logic to be managed in an independent project that is used by the three applications, thus allowing the code to be reused."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The import of projects is done from the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/projects/json",
                  children: "project.json"
                }), " and it is necessary that the projects are added in the projects entry of the beyond.json."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "If the projects are created via the Workspace, the beyond.json file is automatically modified."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Following the above example, the project with the modules that manage the data and connect to the database could be called models and in order to import it into the other projects, the following code would have to be added in the project.json"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
"libraries": {
    "imports": [
      "@project/models"
    ]
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The imports property receives an array of items, allowing multiple projects to be imported if required."
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

      /***************************************
      INTERNAL MODULE: ./mdx/packages/json.mdx
      ***************************************/

      ims.set('./mdx/packages/json.mdx', {
        hash: 1714257024,
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
              code: "code",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Packages",
                title: "package.json"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["In ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ", the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), " file is essential for any application. This file contains important information including necessary dependencies for execution, startup scripts, author information and other metadata. Beyond.js adds an additional set of properties used to control and customize the behavior of the application. In this section, we will explore these additional properties and how they are used in Beyond.js."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "name"
                    }), " string: string This is the name to identify the project, it follows the npm standard, so it can only contain URL safe characters, no periods or underscores."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "scope"
                    }), " string optional: As in npm, it is used to group packages and as projects can be published as npm packages, in case a scope is added, it must be unique and can only be managed by the organization or user that uses it. Scope uniqueness validation is done by npm, only if the programmer intends to publish his project as a package."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "title** string optional: Descriptive title of the project, must not be longer than 100 characters."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "description** string optional: Space to explain in a summarized form what are the characteristics of the project."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["template** ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Space to explain in brief what are the characteristics of the project."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "layout"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Space to explain in brief what are the characteristics of the project."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "params"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Object that allows to add general parameters that are required to be used in the whole project, it has the possibility of defining values by environment. To understand more, you can go to the section ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/project/params",
                      children: "Project parameters"
                    }), "."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "modules"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Receives an object with a path entry that allows you to define the modules directory, default is \"module\"."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "deployment"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/glossary#eoc",
                      children: "EOC"
                    }), " optional: Object that allows to configure the development environment configurations, which are defined by means of the deployment entry."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Deployment"
                    }), " ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/glossary#eac",
                      children: "EAC"
                    }), " optional: Object that allows making the development environment configurations, which are defined by means of the distributions entry. The distributions can be added from the workspace functionality or manually. To understand how they work you can go to the ", (0, _jsxRuntime.jsx)(_html.Link, {
                      href: "/project/distributions",
                      children: "Distributions section"
                    }), "."]
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

      /******************************************
      INTERNAL MODULE: ./mdx/packages/publish.mdx
      ******************************************/

      ims.set('./mdx/packages/publish.mdx', {
        hash: 589861000,
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
            return (0, _jsxRuntime.jsx)(_html.UnderConstruction, {});
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
      INTERNAL MODULE: ./mdx/packages/types.mdx
      ****************************************/

      ims.set('./mdx/packages/types.mdx', {
        hash: 1104053858,
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
              code: "code",
              ul: "ul",
              li: "li",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Packages",
                title: "Managing a project"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["With ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " you can start developing with packages\r\nready-made packages for projects of different environments or purposes."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The type of package to create is an option that is defined by executing the command\r\n", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "beyond add package"
                }), " or when creating a project from the ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " Workspace."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The following are the different types of projects that can be created with BeyondJS.\r\nthat can be created with BeyondJS:"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Blank projects"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Web:"
                  }), " Ready to start a web project that can be distributed on the internet\r\nor as a mobile application."]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Node:** Ready to distribute as a project to run in a node environment."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Backend:** Node project that makes available interfaces that can be consumed in real-time with web sockets from another node project.\r\nreal-time with web sockets from another node project or from a client project."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Library:** Ideal for creating projects that are intended to be distributed as ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "NPM"
                  }), " packages.\r\nas **NPM** packages."]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "web - backend:** Generates a project with integrated web and backend distributions."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Templates"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "React, vue and svelte** apps, projects to start working with the framework library of choice."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Express:** Project with an initial structure to create an express server."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Web Template:** Basic template, with a default route module and backend initialization implemented."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Also, BeyondJS is ready to be integrated with any other library or package.\r\nThese integrations can be done in the same\r\nsame project thanks to the micro-frontend structure offered by BeyondJS."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["You can read more about this in ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/widgets/intro",
                  children: "The widgets section"
                }), "."]
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
      INTERNAL MODULE: ./mdx/starting/cli.mdx
      **************************************/

      ims.set('./mdx/starting/cli.mdx', {
        hash: 1065716659,
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
              code: "code",
              h5: "h5",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Fundamentals",
                title: "Cli Commands"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS provides the following list of commands for working from the console of your preference:"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Run"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `beyond run [--workspace port]`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "run"
                }), " command initializes the ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " DevServer and enables connection with\r\nthe ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/workspace",
                  children: "BeyondJS Workspace"
                }), ", which facilitates the debugging and package\r\nmanagement process. It is necessary to run it to start working with ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h5, {
                children: "Parametros:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["--workspace: Optional. This parameter defines the websocket connection port so that\r\nthe ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/workspace",
                    children: "Workspace"
                  }), " can obtain information about the packages available\r\non the DevServer. If\r\nnot passed, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " will take the default port 4000."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "add package"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `beyond add package`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "\"The 'add package' command allows you to create a new package and add it to the DevServer.\r\nWhen executed, it opens an interactive console where you can define the package's features, such as:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Package type: you can choose from options such as web, backend, web-backend, node, express. For more information on the different project types, see the ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/packages/create",
                    children: "Creating Packages"
                  }), " section.\""]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "add module"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "add module"
                }), " command allows you to add modules to an existing package. When executed, it allows you to define the module's characteristics through the interactive console."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `beyond add module [subpath]]`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "--version"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Allows you to check the version of ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " installed."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `beyond --version`
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['frontend/intro', 'backend']
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
      INTERNAL MODULE: ./mdx/starting/intro.mdx
      ****************************************/

      ims.set('./mdx/starting/intro.mdx', {
        hash: 158394853,
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
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                id: "intro",
                pretitle: "Introducción",
                title: "What is BeyondJS?"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "BeyondJS is a next-generation framework designed to create universal JavaScript modules, ready to be distributed and reused\r\nas any NPM package you know, without the need to use bundlers or additional tools."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Our goal is to simplify the process and the overall development experience, taking any JavaScript project to its most essential concept: a package."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "With BeyondJS, you can create packages for any environment, using the knowledge you already know and focusing on what's important, your business logic."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "It is a Typescript-based meta-framework and works directly with its API to abstract the programmer from the compilation/transpilation process to JavaScript and provide an optimized and fast error handling."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In addition, it is compatible with NPM packages that follow the standard defined by Node, so you can integrate it with a large number of libraries."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                id: "why-beyond",
                tag: "h2",
                text: "Why BeyondJS?"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The modular+universal architecture of BeyondJS allows programming for any JavaScript execution environment and developing the following types of solutions:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Web projects,"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Hybrid mobile apps,"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Hybrid desktop apps,"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Monolithic microservices and backends."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Extensions."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Microfrontends or Widgets to integrate them in existing projects."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In summary, BeyondJS is a tool that allows you to create universal modules and distribute them as NPM packages, simplifying the development process and ensuring a homogeneous experience in any JavaScript execution environment."
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

      /**********************************************
      INTERNAL MODULE: ./mdx/starting/quick-start.mdx
      **********************************************/

      ims.set('./mdx/starting/quick-start.mdx', {
        hash: 1207560789,
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
              h4: "h4",
              p: "p",
              ul: "ul",
              li: "li",
              pre: "pre",
              code: "code",
              blockquote: "blockquote"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Introduction",
                title: "Quick Start"
              }), "\n", (0, _jsxRuntime.jsx)(_components.h4, {
                children: "Prerequisites"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To understand this documentation, you should keep in mind the following points:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Having Node ^14.17.4 installed."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Being familiar with dependency managers such as npm or yarn."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " can be installed through two commands:"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Global installation with npm: npm i -g beyond.\r\nInstallation and project creation with npx: npx @beyond-js/create-package."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Install and create a project"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "You can install and create a project at the same time through the following npx command:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.pre, {
                children: (0, _jsxRuntime.jsx)(_components.code, {
                  children: "npx @beyond/create-package\n"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The command is interactive and will prompt for multiple options, in which we will select the following:\r\nThis is the ideal command if you do not have ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " installed and want to start a new project at the same time.\r\nIt performs global installation and proceeds to automatically create a package in the directory where it is executed."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["When executed, it will ask for the package data, which you can view in this documentation\r\nin ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/quick-start#create-package",
                  children: "the create package section."
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Global installation"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["You can install ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " globally using the following command:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "npm i -g beyond"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The previous command installs ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " globally and enables all CLI commands. You can read more about them in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/cli",
                  children: "CLI commands section"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Next, you can ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/quick-start#create-package",
                  children: "create a package from scratch"
                }), " or run ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " on a folder with existing projects."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                id: "create-package",
                tag: "h3",
                text: "Creating a package"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["You can reach this step if you ran the npx command to create a project or having ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " installed through the following\r\ncommand:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "beyond add package"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "When running it, the interactive console will ask you for the following information:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["specifier: which corresponds to the package name.\r\ntitle: A commercial and readable title.\r\ntype: Corresponds to the type of package you want to create. ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " has several base templates that include the most common front libraries or work structures for back-end packages. You can read more about it in ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/packages/create",
                  children: "the package creation section"
                }), ".\r\nAfter entering the data, ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " will finish the installation process and you will be ready to start programming, you just need to initialize the DevServer with the following command:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "beyond run --workspace 4000"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Instalación global"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Este comando realiza una instalación global que permite ejecutar el ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/dev-server",
                  children: "DevServer"
                }), " de"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " en el directorio que se desee y habilita la lista de comandos disponibles en el CLI."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["Para ver la lista de comandos de ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " puedes ir a ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/cli",
                    children: " la sección del CLI"
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Initialize BeyondJS"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["This command initializes BeyondJS and allows you to navigate to your\r\nproject at ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "http://localhost:6530",
                  children: "http://localhost:6500"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["The ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "6530"
                  }), " port is defined by default in the project distribution and can be easily modified in the package.json.\r\nYou can read in detail about it in ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/distributions",
                    children: " the distributions section"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Create a module"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["You can create a new module in ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " using the CLI by running the following command from the project\r\nfolder (where the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), " file is located):"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "beyond add module"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["The modules in ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " are handled through a ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "module.json"
                  }), " file with a minimal and simple configuration, and\r\nthe previous command automatically generates the file. You can get more information on how to handle modules in\r\nthe ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/beyond/modules/creation",
                    children: "corresponding section of the documentation"
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['modules/creation', 'tutorial/intro']
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

      /******************************************
      INTERNAL MODULE: ./mdx/tutorial/backend.mdx
      ******************************************/

      ims.set('./mdx/tutorial/backend.mdx', {
        hash: 29971752,
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
              code: "code",
              ul: "ul",
              li: "li",
              strong: "strong",
              h4: "h4",
              blockquote: "blockquote",
              h5: "h5"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Tutorial",
                title: "Backend Code"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "\"Next, we will write the backend code for our module.\r\nIt will be a straightforward API that will validate the input\r\ndata. You will see how effortless it is to establish a\r\nWebSocket connection between client and server and how\r\nhot module reloading works seamlessly without having to\r\nrestart any services."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Creating Bridge module"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The first thing we will do is to create a new Bridge module."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["To begin, we will create a new Bridge module. We open the console in the\r\nproject folder (where the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "package.json"
                }), " file is located) and execute the following command:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "beyond add module"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The command will ask for the following data:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "subpath"
                  }), ": we will add \"api/auth\". This value corresponds to the subpath of the\r\nmodule and it is directly related to the value of the entry point \"exports\" in the ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "package.json"
                  }), "."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "about"
                  }), ": \"Backend module to validate login\"."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "styles"
                  }), ": no."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "multilanguage"
                  }), ": no."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Once the command is executed, we will be able to see that our module has been created in the modules/auth directory of our project."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Bridge structure"
              }), "\n", (0, _jsxRuntime.jsx)(_components.h4, {
                children: (0, _jsxRuntime.jsx)(_components.code, {
                  children: "module.json"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["This is the configuration file for our module. All the modules in ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), "\r\nhave one."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "auth/module.json",
                children: `{
  "name": "api/auth",
  "description": "backend module to validate login",
  "bridge": {
    "path": "bridge",
    "files": [
      "*"
    ]
  },
  "platforms": [
    "*"
  ]
}`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In this case, a configuration file for a BeyondJS module called \"auth\" is presented.\r\nThis file specifies that the module is of type \"bridge\", and that all files in this folder will be part of the bundle.\r\nfolder will be part of the bundle. In addition, it also states that the module is cross-platform compatible."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h4, {
                children: "File index.ts"
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "bridge/index.ts",
                children: `///your code here

export /*actions*/ /*bundle*/
class Bridge {

}
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In the bridge index.ts file, two special comments are included,\r\nwhich are important for the functionality of the module."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The first comment, ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                  children: `/\*actions\*/`
                }), ", indicates that the module contains methods that will be consumed through a WebSocket connection from a client project or another service.\r\nthrough a WebSocket connection from a client project or other service."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The second comment, ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                  children: `/\*bundle\*/`
                }), ", indicates that the object in the file may be consumed from\r\nanother module and must be added in the exports of the package.json file."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Backend Logic"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["In the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "bridge/index.tx"
                }), "\r\nfile we will add a ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "data"
                }), " object that will serve as the \"database\" for the example.\r\nEste archivo poseerá los valores del usuario y la clave válidos."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "We will also add a login method that will receive the user and password parameters to\r\nverify if the passed data are valid or not."
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "bridge/index.ts",
                children: `

interface IData {
\tuser: string;
\tpassword: string;
}

const data: IData = {
\tuser: 'beyondjs',
\tpassword: 'B3yondJS'
}
export /\*actions\*/\/\*bundle\*/
class Auth {
\tasync login(user :string, password: string) {
\t\tif (user !== data.user || password !== data.password) {
\t\t\treturn {status: true, error: "Invalid data" };
\t\t}

      return {status: true, data: {valid: true} }

\t}
}

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Sounds simple, doesn't it? Here's the important part!"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["When you create a bundle of type Bridge ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " it automatically creates the client code\r\nto connect to the backend and consume the provided API."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Now we just need to import the bundle into our home module and integrate the validation link."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Client module integration"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Now we import the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "auth"
                }), " module from the main component of our home module ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "home"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "home/ts/views/index.tsx",
                children: `import {Auth} from "@beyond-js/tutorial/api/auth";`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Some points to highlight from the previous line of code."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "The import is done by means of the Bare Identifier of the module, which corresponds to the name of the project and the subpath of the module."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "The import of modules is based on ESM, but for compatibility with browsers that do not yet support\r\nimportmaps, currently BeyondJS makes use of SystemJS."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Now let's add the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "onSubmit"
                }), " function to the form and the logic to integrate the client and the backend."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "home/ts/views/index.tsx",
                children: `
import \* as React from "react";
import {Auth} from "@beyond-js/tutorial/api/auth";

interface IForm {
\tdisabled?: boolean;
}
const model = new Auth();
export /\*page\*/ function View(): JSX.Element {
\tconst defaultValues = { username: "", password: "", fetching: false };
\tconst [values, setValues] = React.useState(defaultValues);
\tconst [error, setError] = React.useState();
\tconst handleChange = ({ currentTarget: target }) => {
\tconst currentValue = { ...values };
\tcurrentValue[target.name] = target.value;
\tsetValues(currentValue);
};
\t\tconst formDisabled: IForm = {};
\t\tconst { username, password } = values;
\tif (!username || !password) {
\t\tformDisabled.disabled = true;
\t}
\tconst onSubmit = async (event) => {
\t\ttry {
\t\t\tevent.preventDefault();
\t\t\tconst response = await model.login(username, password);

            if (!response.data?.valid) {
                setError(response.error);
                return;
            }
            console.log("valid data");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="page__container">
            <form onSubmit={onSubmit}>
                {error && <div className="form__error">{error}</div>}
                <label>User: </label>
                <input onChange={handleChange} placeholder="username" type="text" name="username" />
                <label>Password</label>
                <input onChange={handleChange} placeholder="******" type="password" name="password" />
                <div className="form__actions">
                    <button onClick={onSubmit} {...formDisabled}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );

}
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "It is time to test our form.\r\nIf we add the correct data, we will be able to see in the browser console the message that the data was validated and you can log in.\r\nthat the data was validated and you can log in, if on the contrary,\r\nIf we add incorrect data, we will be able to see how the error message \"Invalid data\" appears.\r\n\"Invalid data\" which we update in the component status variable."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                text: "Summary"
              }), "\n", ' ', "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "We create a module with a widget of type page."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "We create a connection with a backend node through the bundle bridge."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "We reviewed the module resolution structure to import the Auth bridge and to be able to add the login validation."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Now we just need to redirect the user to a welcome screen."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.h5, {
                  children: "You are now connected to the Backend!"
                }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["The previous code demonstrates the direct integration between the consuming and providing\r\npackages. For more\r\ninformation refer to the", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "docs/modules/bridges",
                    children: " Bridges section of this documentation"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['tutorial/routing']
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

      /***********************************************
      INTERNAL MODULE: ./mdx/tutorial/first-module.mdx
      ***********************************************/

      ims.set('./mdx/tutorial/first-module.mdx', {
        hash: 4084424611,
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
              code: "code",
              ul: "ul",
              li: "li",
              blockquote: "blockquote",
              a: "a",
              h4: "h4"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Tutorial",
                title: "First module"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["As observed, the project comprises two modules: the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "home"
                }), " module,\r\nserves as the foundation for the project's base URL, and the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "start-backend"
                }), " module, which will be further discussed in due course."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The structure of the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "home"
                }), " module is as follows:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "ts"
                  }), ":", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_components.code, {
                        children: "controller.ts"
                      }), ": controller object of the component, necessary to mount the WebComponent in the browser."]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_components.code, {
                        children: "views"
                      }), ": ", (0, _jsxRuntime.jsx)(_components.code, {
                        children: "index.tsx"
                      }), ".", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                        children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "index.tsx`: react component that renders the page."
                        }), "\n"]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "scss"
                  }), ": folder to add styles to the module."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "module.json"
                  }), ": module configuration file (where the type of bundles and processors to be used are defined)."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Let's get to work! With the structure clear, the next thing is to create the login form and add some styles, before continuing with the connection to the backend node."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Form Creation"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["If you've worked with React, what comes next is the part you probably know best, with a few minor differences.\r\nNext, we will edit our ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "index.tsx"
                }), " file to create a login form and the basic functionality to update the status."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "index.tsx",
                language: "jsx",
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
                <input onChange={handleChange} placeholder="username" type="text" name="username" />
                <label>Password</label>
                <input onChange={handleChange} type="password" name="password" placeholder="****" />
                <div className="form__actions">
                    <button {...formDisabled}>Login</button>
                </div>
            </form>
        </div>
    );
}
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["If we browse our project in ", (0, _jsxRuntime.jsx)(_components.a, {
                    href: "http://localhost:6510/",
                    children: "http://localhost:6510/"
                  }), " we will be able to see our form already working, but without design, which we will add in the next section."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Styles"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Styles in ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " are handled by default with the SASS preprocessor."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Next, let's go to our ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "styles.scss"
                }), " file and add some styling to the form."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["SASS is a processor in BeyondJS, if you want to read in depth about the processors mechanism you can find more details in ", (0, _jsxRuntime.jsx)(_components.a, {
                    href: "/docs/modules/processors",
                    children: "The processors section"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "styles.scss",
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
                children: "Let's explain the above code a bit:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "We added basic styling to the form, the inputs, the submit button, and\r\nto handle an error message."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Custom properties: the custom properties used are a basic structure for handling variables included by BeyondJS in the ", (0, _jsxRuntime.jsx)(_components.a, {
                    href: "/frontend/template",
                    children: "Project Template"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Understanding the BeyondJS structure"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "There are two key points that are important to note so far to understand the value of what has been done."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h4, {
                children: "The page is a microfrontend."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["To confirm this, examine the code parser and you will discover a ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "<app-home/>"
                }), "\r\ntag that encompasses the content of the established module. With this, implementing solutions using the\r\nisland architecture can be effortlessly achieved without the need for complicated configurations."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h4, {
                children: "The module is packaged independently."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Each bundle included in a ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " module is packaged individually and the bundle's\r\nstyles of these generate a separate stylesheet."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "You can browse the independently generated CSS and JS code by accessing:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["CSS bundle: ", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "http://localhost:6510/home.css",
                    children: "http://localhost:6510/home.css"
                  })]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["JS bundle: ", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "http://localhost:6510/home.js",
                    children: "http://localhost:6510/home.js"
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["The code in the development environment isn't optimized for debugging purposes.\r\nIn production, the code is bundled and optimized separately. BeyondJS can also generate the necessary\r\nmodule type declarations. Refer to ", (0, _jsxRuntime.jsx)(_html.Link, {
                  href: "/docs/modules/bundles",
                  children: "the bundles section"
                }), " for more information."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Now comes the best part: connecting with websocket to a service in node."
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['tutorial/backend']
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

      /******************************************
      INTERNAL MODULE: ./mdx/tutorial/routing.mdx
      ******************************************/

      ims.set('./mdx/tutorial/routing.mdx', {
        hash: 3837974323,
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
              code: "code",
              blockquote: "blockquote"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Tutorial",
                title: "Routing"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Now, let's create a new page to which the client will be redirected after logging in."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Redirection Module"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "From the console, located in the root folder of the project, we will run the module creation command again:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "beyond add module"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "We will add the following values in the command console:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Package subpath"
                  }), ": we will name it \"welcome\"."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Package type"
                  }), " : we will select \"page\"."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "web component name"
                  }), ": we will put ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "app-welcome"
                  }), ". Web component names must contain\r\ntwo words and be separated by dashes."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "page url"
                  }), ": we add \"/welcome\""]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "About"
                  }), ": Welcome page"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "styles"
                  }), ": we indicate yes."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "multilanguage"
                  }), ": we indicate no."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["In the next step, we will head over to the view file of the module (", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "welcome/ts/views/index.tsx"
                }), ")\r\nand in the component's return statement, add a \"Welcome!\" message with the desired styling."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Navigation"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Get ready to make a big leap in your application by redirecting to your welcome\r\nmodule after login! The first thing we need to do is to import the \"routing\" object from\r\n", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "@beyond-js/kernel"
                }), " package,\r\nso we can use the powerful pushState method that will allow us to navigate to the welcome page."]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "home/views/index.tsx",
                children: `import { routing } from '@beyond-js/kernel/routing';`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["And in the ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "onSubmit"
                }), " function, we will add the following line so that everything works perfectly:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `routing.pushState('/welcome');`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Thus, our ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "onSubmit"
                }), " function would look like this:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.CodeBox, {
                title: "home/views/index.tsx",
                children: `const onSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await model.login(username, password);

            if (!response.data?.valid) {
                setError(response.error);
                return;
            }
            routing.pushState('/welcome');
        } catch (e) {
            console.log(e);
        }
    };

`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "With these simple steps, you will redirect your users to the welcome page. BeyondJS also manages the user's browsing history, providing advanced management functionalities beyond the browser's API."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Imagine having access to previous page logs at any time! BeyondJS gives you full control over the user's browsing experience, enabling you to identify these logs and access them whenever you need to."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: [(0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " is a powerful tool that provides a routing object to interact with the browser API. navigation. This\r\nobject wraps the browser's pushState function and adds logic to make navigation possible > > in different\r\nenvironments. in different environments. If you would like to learn more about how to use routing in ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ", you\r\ncan. visit the ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/frontend/routing",
                    children: "Routing"
                  }), " section."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Now it is necessary to reload the page for testing, this is because the application urls are\r\nregistered at the beginning of the project load."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "If we test our form we will be able to see that an error appears if the data is invalid and that\r\nit starts and redirects to our welcome screen if the data entered is correct."
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Learning review"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "With this last step, we end the complete tutorial, which consisted of 4 fundamental parts:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "In the first part, we dealt with starting and installing the project and creating the main package."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "In the second part, we showed how to create the first module and how to use it in the application."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "In the third part, it was explained how to create a bridge in the backend to connect through a WebSocket connection and integrate it from the backend.\r\nWebSocket connection and integrate it from the client."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Finally, in the fourth part, it was demonstrated how to use the\r\nrouting object of ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " to navigate to a new page."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "In addition, there are some additional points worth noting:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "The modules created are standalone bundles and no packers are required to use them."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "A WebSocket connection between client and server was implemented with a typed API that verifies that the methods and parameters passed match the\r\nand parameters passed match their definition in the backend."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["The magic comment ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "/*bundle*/"
                  }), " was used to define which object should be exposed to be consumed in another bundle."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["The magic comment ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "/*actions*/"
                  }), " was used in the bridge bundle to define that the object should generate a client api, which should be consumed in another bundle.\r\na client api, which is handled by ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), " automatically."]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "The created code can be packaged for a hybrid application."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['backend', 'frontend/intro']
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
      INTERNAL MODULE: ./mdx/tutorial/start.mdx
      ****************************************/

      ims.set('./mdx/tutorial/start.mdx', {
        hash: 4268614065,
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
              blockquote: "blockquote",
              p: "p",
              strong: "strong",
              ul: "ul",
              li: "li",
              code: "code",
              pre: "pre"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.DocHeader, {
                pretitle: "Tutorial",
                title: "Web proyect width Backend Integration"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h4",
                children: "Before you start"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["This tutorial looks at the main flow of development with ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "BeyondJS"
                  }), " and.\r\ndemonstrate in a clear way the\r\nbenefits it offers. The purpose of this tutorial is so that users/programmers can learn while practicing,\r\ntherefore, the concepts that define the structure of ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "BeyondJS"
                  }), " are addressed in a general way,\r\nfocusing on making a quick, concise and clear exercise. For a better understanding of\r\nsome concepts, it is necessary to access the corresponding sections\r\nin the documentation."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Prerequisites"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "To run this tutorial you need:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "To have Node.js 16.x installed."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Have basic knowledge of the command console."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Additionally, it is recommended to use ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://code.visualstudio.com/",
                  children: "vscode"
                }), " to follow the tutorial step by step.\r\nHowever any other editor can be used."]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Getting started"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "The first thing we will do is to create our project. To do this we must open the command console\r\nin the folder where we want and execute the following command:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "Warning: BeyondJS CLI commands are interactive and require a compatible console for proper functionality. Make sure to have an updated console before using them."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "npx @beyond-js/create-package@latest"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "This command is interactive and will request some data to define our package or project.\r\nThe data requested are the following:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Package specifier"
                    }), ": It corresponds to the name of our package, for the purposes of this tutorial\r\nour package will be called: ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "@beyond-js/tutorial"
                    }), "."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Title"
                    }), ": \"BeyondJS Web Tutorial\""]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "About"
                    }), ": You can add any text or skip it and move forward."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Package type"
                    }), ": we will select ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "web-backend"
                    }), ". It corresponds to the type of project to create, which contains\r\nthe packages to implement a connection between a node service and our web project through websockets,\r\nas we will see later."]
                  }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "BeyondJS will install it locally and generates the initial structure of our project."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Install dependencies"
                    }), ": we select yes. You can select no, but you will need to install npm dependencies\r\nmanualy from the console."]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ready! our project has been created. Next we will open our text editor in the directory\r\ndirectory where we execute the command"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "code ."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "When we open it we can see that we have the following structure:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "beyond.json:"
                    }), " File to manage the development server, managed by BeyondJS."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "packages.json:"
                    }), " This fil records the projects that the DevServer has access to,\r\nusually managed directly by ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), "."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "tutorial"
                    }), ": The folder of our package and project."]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                        children: [(0, _jsxRuntime.jsx)(_components.strong, {
                          children: "package.json"
                        }), ": javascript package file."]
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                        children: [(0, _jsxRuntime.jsx)(_components.strong, {
                          children: "/modules:"
                        }), " Folder where the modules of the project are created by default. This value is configurable,\r\nyou can read more about it in the ", (0, _jsxRuntime.jsx)(_html.Link, {
                          href: "/docs/packages/json",
                          children: "Package Configuration section"
                        }), "."]
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                        children: [(0, _jsxRuntime.jsx)(_components.strong, {
                          children: "template:"
                        }), " This folder contains all the elements needed to define the overall project template."]
                      }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                        children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                          children: [(0, _jsxRuntime.jsx)(_components.strong, {
                            children: "template.json:"
                          }), " File that allows you to make adjustments to the project template configuration."]
                        }), "\n"]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["You can learn about the differences between project types\r\nin ", (0, _jsxRuntime.jsx)(_html.Link, {
                    href: "/docs/packages/types",
                    children: " the relevant section of the documentation"
                  }), " if you wish."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Next, we must start ", (0, _jsxRuntime.jsx)(_html.BeyondJS, {}), ", for this we run the following command:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                language: "shell",
                children: "beyond run --workspace 4000"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "When executed, the following message should appear in the command console:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.pre, {
                children: (0, _jsxRuntime.jsx)(_components.code, {
                  children: "Follow the link to manage your packages with the workspace:\r\nhttps://workspace.beyondjs.com?port=4000\r\n\n"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Done! We can now access our project at ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "http://localhost:6510/",
                  children: "http://localhost:6510/"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Next we are going to create our first module."
              }), "\n", (0, _jsxRuntime.jsx)(_html.NextLinks, {
                items: ['tutorial/first-module', 'tutorial/backend']
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

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2506006090,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WidgetsRendering = exports.WidgetsPage = exports.WidgetsObject = exports.WidgetsLayout = exports.WidgetsControllers = exports.Widgets = exports.Universal = exports.TutorialStart = exports.TutorialRouting = exports.TutorialFirstModule = exports.TutorialBackend = exports.Template = exports.StylesThemes = exports.StylesTemplate = exports.StylesModules = exports.StylesImports = exports.Styles = exports.Routing = exports.QuickStart = exports.PackagesTypes = exports.PackagesPublish = exports.PackagesJson = exports.PackagesDistributions = exports.PackagesDependencies = exports.PackagesCreate = exports.PackagesBeyondjs = exports.ModulesProcessors = exports.ModulesIntroduction = exports.ModulesCreation = exports.ModulesConfig = exports.ModulesBundles = exports.Modular = exports.LANGUAGE = exports.Intro = exports.DevServer = exports.Cli = exports.BackendSsrserver = exports.BackendIntro = exports.BackendDebug = exports.BackendBridges = exports.BackendBee = exports.AddRenderingEngine = void 0;
          var _intro = require("./mdx/starting/intro.mdx");
          var _quickStart = require("./mdx/starting/quick-start.mdx");
          var _cli = require("./mdx/starting/cli.mdx");
          var _bareSpecifiers = require("./mdx/foundations/bare-specifiers.mdx");
          var _modular = require("./mdx/foundations/modular.mdx");
          var _universal = require("./mdx/foundations/universal.mdx");
          var _devServer = require("./mdx/foundations/dev-server.mdx");
          var _start = require("./mdx/tutorial/start.mdx");
          var _backend = require("./mdx/tutorial/backend.mdx");
          var _routing = require("./mdx/tutorial/routing.mdx");
          var _firstModule = require("./mdx/tutorial/first-module.mdx");
          var _creation = require("./mdx/packages/creation.mdx");
          var _types = require("./mdx/packages/types.mdx");
          var _distributions = require("./mdx/packages/distributions.mdx");
          var _json = require("./mdx/packages/json.mdx");
          var _publish = require("./mdx/packages/publish.mdx");
          var _beyond = require("./mdx/packages/beyond.mdx");
          var _dependencies = require("./mdx/packages/dependencies.mdx");
          var _introduction = require("./mdx/modules/introduction.mdx");
          var _bundles = require("./mdx/modules/bundles.mdx");
          var _creation2 = require("./mdx/modules/creation.mdx");
          var _processors = require("./mdx/modules/processors.mdx");
          var _intro2 = require("./mdx/backend/intro.mdx");
          var _bridges = require("./mdx/backend/bridges.mdx");
          var _bee = require("./mdx/backend/bee.mdx");
          var _ssrServer = require("./mdx/backend/ssr-server.mdx");
          var _debug = require("./mdx/backend/debug.mdx");
          var _index = require("./mdx/frontend/widgets/index.mdx");
          var _controllers = require("./mdx/frontend/widgets/controllers.mdx");
          var _layout = require("./mdx/frontend/widgets/layout.mdx");
          var _page = require("./mdx/frontend/widgets/page.mdx");
          var _object = require("./mdx/frontend/widgets/object.mdx");
          var _rendering = require("./mdx/frontend/widgets/rendering.mdx");
          var _addRenderingEngine = require("./mdx/frontend/widgets/add-rendering-engine.mdx");
          var _routing2 = require("./mdx/frontend/routing/routing.mdx");
          var _index2 = require("./mdx/frontend/styles/index.mdx");
          var _modules = require("./mdx/frontend/styles/modules.mdx");
          var _themes = require("./mdx/frontend/styles/themes.mdx");
          var _imports = require("./mdx/frontend/styles/imports.mdx");
          /*bundle */ // Tutorial

          //packages

          //modules

          //backend

          // widgets

          // export /*bundle */ const Bee = Bee1;
          const LANGUAGE = 'en';
          // Get strating
          exports.LANGUAGE = LANGUAGE;
          /*bundle */
          const Intro = _intro.default;
          exports.Intro = Intro;
          /*bundle */
          const Cli = _cli.default;
          exports.Cli = Cli;
          /*bundle */
          const QuickStart = _quickStart.default;
          // Tutorial
          exports.QuickStart = QuickStart;
          /*bundle */
          const TutorialStart = _start.default;
          exports.TutorialStart = TutorialStart;
          /*bundle*/
          const TutorialBackend = _backend.default;
          exports.TutorialBackend = TutorialBackend;
          /*bundle*/
          const TutorialRouting = _routing.default;
          exports.TutorialRouting = TutorialRouting;
          /*bundle */
          const TutorialFirstModule = _firstModule.default;
          // export /*bundle */ const Deployment = Deployment1;
          // basics
          exports.TutorialFirstModule = TutorialFirstModule;
          /*bundle */
          const PackagesCreate = _creation.default;
          exports.PackagesCreate = PackagesCreate;
          /*bundle */
          const PackagesTypes = _types.default;
          exports.PackagesTypes = PackagesTypes;
          /*bundle*/
          const PackagesDistributions = _distributions.default;
          exports.PackagesDistributions = PackagesDistributions;
          /*bundle */
          const PackagesJson = _json.default;
          exports.PackagesJson = PackagesJson;
          /*bundle */
          const PackagesPublish = _publish.default;
          exports.PackagesPublish = PackagesPublish;
          /*bundle */
          const PackagesBeyondjs = _beyond.default;
          exports.PackagesBeyondjs = PackagesBeyondjs;
          /*bundle */
          const PackagesDependencies = _dependencies.default;
          // modules
          exports.PackagesDependencies = PackagesDependencies;
          /*bundle */
          const ModulesIntroduction = _introduction.default;
          exports.ModulesIntroduction = ModulesIntroduction;
          /*bundle */
          const ModulesCreation = _creation2.default;
          exports.ModulesCreation = ModulesCreation;
          /*bundle */
          const ModulesConfig = _creation2.default;
          exports.ModulesConfig = ModulesConfig;
          /*bundle */
          const ModulesBundles = _bundles.default;
          exports.ModulesBundles = ModulesBundles;
          /*bundle */
          const ModulesProcessors = _processors.default;
          // backend
          exports.ModulesProcessors = ModulesProcessors;
          /*bundle */
          const BackendIntro = _intro2.default;
          exports.BackendIntro = BackendIntro;
          /*bundle */
          const BackendBridges = _bridges.default;
          exports.BackendBridges = BackendBridges;
          /*bundle */
          const BackendDebug = _debug.default;
          exports.BackendDebug = BackendDebug;
          /*bundle */
          const BackendBee = _bee.default;
          exports.BackendBee = BackendBee;
          /*bundle */
          const BackendSsrserver = _ssrServer.default;
          // widgets
          exports.BackendSsrserver = BackendSsrserver;
          /*bundle*/
          const Widgets = _index.default;
          exports.Widgets = Widgets;
          /*bundle*/
          const WidgetsControllers = _controllers.default;
          exports.WidgetsControllers = WidgetsControllers;
          /*bundle*/
          const WidgetsObject = _object.default;
          exports.WidgetsObject = WidgetsObject;
          /*bundle*/
          const WidgetsLayout = _layout.default;
          exports.WidgetsLayout = WidgetsLayout;
          /*bundle*/
          const WidgetsPage = _page.default;
          exports.WidgetsPage = WidgetsPage;
          /*bundle*/
          const WidgetsRendering = _rendering.default;
          exports.WidgetsRendering = WidgetsRendering;
          /*bundle*/
          const Routing = _routing2.default;
          exports.Routing = Routing;
          /*bundle*/
          const AddRenderingEngine = _addRenderingEngine.default;
          //styles
          exports.AddRenderingEngine = AddRenderingEngine;
          /*bundle */
          const Styles = _index2.default;
          exports.Styles = Styles;
          /*bundle */
          const StylesModules = _modules.default;
          exports.StylesModules = StylesModules;
          /*bundle */
          const StylesThemes = _themes.default;
          exports.StylesThemes = StylesThemes;
          /*bundle */
          const StylesImports = _imports.default;
          exports.StylesImports = StylesImports;
          /*bundle */
          const Template = _index2.default;
          exports.Template = Template;
          /*bundle */
          const StylesTemplate = _index2.default;
          // Foundations
          exports.StylesTemplate = StylesTemplate;
          const /*bundle*/BareSpecifiers = _bareSpecifiers.default;
          /*bundle*/
          const Modular = _modular.default;
          exports.Modular = Modular;
          /*bundle*/
          const Universal = _universal.default;
          exports.Universal = Universal;
          /*bundle*/
          const DevServer = _devServer.default;
          exports.DevServer = DevServer;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "LANGUAGE",
        "name": "LANGUAGE"
      }, {
        "im": "./index",
        "from": "Intro",
        "name": "Intro"
      }, {
        "im": "./index",
        "from": "Cli",
        "name": "Cli"
      }, {
        "im": "./index",
        "from": "QuickStart",
        "name": "QuickStart"
      }, {
        "im": "./index",
        "from": "TutorialStart",
        "name": "TutorialStart"
      }, {
        "im": "./index",
        "from": "TutorialBackend",
        "name": "TutorialBackend"
      }, {
        "im": "./index",
        "from": "TutorialRouting",
        "name": "TutorialRouting"
      }, {
        "im": "./index",
        "from": "TutorialFirstModule",
        "name": "TutorialFirstModule"
      }, {
        "im": "./index",
        "from": "PackagesCreate",
        "name": "PackagesCreate"
      }, {
        "im": "./index",
        "from": "PackagesTypes",
        "name": "PackagesTypes"
      }, {
        "im": "./index",
        "from": "PackagesDistributions",
        "name": "PackagesDistributions"
      }, {
        "im": "./index",
        "from": "PackagesJson",
        "name": "PackagesJson"
      }, {
        "im": "./index",
        "from": "PackagesPublish",
        "name": "PackagesPublish"
      }, {
        "im": "./index",
        "from": "PackagesBeyondjs",
        "name": "PackagesBeyondjs"
      }, {
        "im": "./index",
        "from": "PackagesDependencies",
        "name": "PackagesDependencies"
      }, {
        "im": "./index",
        "from": "ModulesIntroduction",
        "name": "ModulesIntroduction"
      }, {
        "im": "./index",
        "from": "ModulesCreation",
        "name": "ModulesCreation"
      }, {
        "im": "./index",
        "from": "ModulesConfig",
        "name": "ModulesConfig"
      }, {
        "im": "./index",
        "from": "ModulesBundles",
        "name": "ModulesBundles"
      }, {
        "im": "./index",
        "from": "ModulesProcessors",
        "name": "ModulesProcessors"
      }, {
        "im": "./index",
        "from": "BackendIntro",
        "name": "BackendIntro"
      }, {
        "im": "./index",
        "from": "BackendBridges",
        "name": "BackendBridges"
      }, {
        "im": "./index",
        "from": "BackendDebug",
        "name": "BackendDebug"
      }, {
        "im": "./index",
        "from": "BackendBee",
        "name": "BackendBee"
      }, {
        "im": "./index",
        "from": "BackendSsrserver",
        "name": "BackendSsrserver"
      }, {
        "im": "./index",
        "from": "Widgets",
        "name": "Widgets"
      }, {
        "im": "./index",
        "from": "WidgetsControllers",
        "name": "WidgetsControllers"
      }, {
        "im": "./index",
        "from": "WidgetsObject",
        "name": "WidgetsObject"
      }, {
        "im": "./index",
        "from": "WidgetsLayout",
        "name": "WidgetsLayout"
      }, {
        "im": "./index",
        "from": "WidgetsPage",
        "name": "WidgetsPage"
      }, {
        "im": "./index",
        "from": "WidgetsRendering",
        "name": "WidgetsRendering"
      }, {
        "im": "./index",
        "from": "Routing",
        "name": "Routing"
      }, {
        "im": "./index",
        "from": "AddRenderingEngine",
        "name": "AddRenderingEngine"
      }, {
        "im": "./index",
        "from": "Styles",
        "name": "Styles"
      }, {
        "im": "./index",
        "from": "StylesModules",
        "name": "StylesModules"
      }, {
        "im": "./index",
        "from": "StylesThemes",
        "name": "StylesThemes"
      }, {
        "im": "./index",
        "from": "StylesImports",
        "name": "StylesImports"
      }, {
        "im": "./index",
        "from": "Template",
        "name": "Template"
      }, {
        "im": "./index",
        "from": "StylesTemplate",
        "name": "StylesTemplate"
      }, {
        "im": "./index",
        "from": "Modular",
        "name": "Modular"
      }, {
        "im": "./index",
        "from": "Universal",
        "name": "Universal"
      }, {
        "im": "./index",
        "from": "DevServer",
        "name": "DevServer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'LANGUAGE') && _export("LANGUAGE", LANGUAGE = require ? require('./index').LANGUAGE : value);
        (require || prop === 'Intro') && _export("Intro", Intro = require ? require('./index').Intro : value);
        (require || prop === 'Cli') && _export("Cli", Cli = require ? require('./index').Cli : value);
        (require || prop === 'QuickStart') && _export("QuickStart", QuickStart = require ? require('./index').QuickStart : value);
        (require || prop === 'TutorialStart') && _export("TutorialStart", TutorialStart = require ? require('./index').TutorialStart : value);
        (require || prop === 'TutorialBackend') && _export("TutorialBackend", TutorialBackend = require ? require('./index').TutorialBackend : value);
        (require || prop === 'TutorialRouting') && _export("TutorialRouting", TutorialRouting = require ? require('./index').TutorialRouting : value);
        (require || prop === 'TutorialFirstModule') && _export("TutorialFirstModule", TutorialFirstModule = require ? require('./index').TutorialFirstModule : value);
        (require || prop === 'PackagesCreate') && _export("PackagesCreate", PackagesCreate = require ? require('./index').PackagesCreate : value);
        (require || prop === 'PackagesTypes') && _export("PackagesTypes", PackagesTypes = require ? require('./index').PackagesTypes : value);
        (require || prop === 'PackagesDistributions') && _export("PackagesDistributions", PackagesDistributions = require ? require('./index').PackagesDistributions : value);
        (require || prop === 'PackagesJson') && _export("PackagesJson", PackagesJson = require ? require('./index').PackagesJson : value);
        (require || prop === 'PackagesPublish') && _export("PackagesPublish", PackagesPublish = require ? require('./index').PackagesPublish : value);
        (require || prop === 'PackagesBeyondjs') && _export("PackagesBeyondjs", PackagesBeyondjs = require ? require('./index').PackagesBeyondjs : value);
        (require || prop === 'PackagesDependencies') && _export("PackagesDependencies", PackagesDependencies = require ? require('./index').PackagesDependencies : value);
        (require || prop === 'ModulesIntroduction') && _export("ModulesIntroduction", ModulesIntroduction = require ? require('./index').ModulesIntroduction : value);
        (require || prop === 'ModulesCreation') && _export("ModulesCreation", ModulesCreation = require ? require('./index').ModulesCreation : value);
        (require || prop === 'ModulesConfig') && _export("ModulesConfig", ModulesConfig = require ? require('./index').ModulesConfig : value);
        (require || prop === 'ModulesBundles') && _export("ModulesBundles", ModulesBundles = require ? require('./index').ModulesBundles : value);
        (require || prop === 'ModulesProcessors') && _export("ModulesProcessors", ModulesProcessors = require ? require('./index').ModulesProcessors : value);
        (require || prop === 'BackendIntro') && _export("BackendIntro", BackendIntro = require ? require('./index').BackendIntro : value);
        (require || prop === 'BackendBridges') && _export("BackendBridges", BackendBridges = require ? require('./index').BackendBridges : value);
        (require || prop === 'BackendDebug') && _export("BackendDebug", BackendDebug = require ? require('./index').BackendDebug : value);
        (require || prop === 'BackendBee') && _export("BackendBee", BackendBee = require ? require('./index').BackendBee : value);
        (require || prop === 'BackendSsrserver') && _export("BackendSsrserver", BackendSsrserver = require ? require('./index').BackendSsrserver : value);
        (require || prop === 'Widgets') && _export("Widgets", Widgets = require ? require('./index').Widgets : value);
        (require || prop === 'WidgetsControllers') && _export("WidgetsControllers", WidgetsControllers = require ? require('./index').WidgetsControllers : value);
        (require || prop === 'WidgetsObject') && _export("WidgetsObject", WidgetsObject = require ? require('./index').WidgetsObject : value);
        (require || prop === 'WidgetsLayout') && _export("WidgetsLayout", WidgetsLayout = require ? require('./index').WidgetsLayout : value);
        (require || prop === 'WidgetsPage') && _export("WidgetsPage", WidgetsPage = require ? require('./index').WidgetsPage : value);
        (require || prop === 'WidgetsRendering') && _export("WidgetsRendering", WidgetsRendering = require ? require('./index').WidgetsRendering : value);
        (require || prop === 'Routing') && _export("Routing", Routing = require ? require('./index').Routing : value);
        (require || prop === 'AddRenderingEngine') && _export("AddRenderingEngine", AddRenderingEngine = require ? require('./index').AddRenderingEngine : value);
        (require || prop === 'Styles') && _export("Styles", Styles = require ? require('./index').Styles : value);
        (require || prop === 'StylesModules') && _export("StylesModules", StylesModules = require ? require('./index').StylesModules : value);
        (require || prop === 'StylesThemes') && _export("StylesThemes", StylesThemes = require ? require('./index').StylesThemes : value);
        (require || prop === 'StylesImports') && _export("StylesImports", StylesImports = require ? require('./index').StylesImports : value);
        (require || prop === 'Template') && _export("Template", Template = require ? require('./index').Template : value);
        (require || prop === 'StylesTemplate') && _export("StylesTemplate", StylesTemplate = require ? require('./index').StylesTemplate : value);
        (require || prop === 'Modular') && _export("Modular", Modular = require ? require('./index').Modular : value);
        (require || prop === 'Universal') && _export("Universal", Universal = require ? require('./index').Universal : value);
        (require || prop === 'DevServer') && _export("DevServer", DevServer = require ? require('./index').DevServer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7VUFBQ25FO1VBQ3BDO1VBQVcsTUFBTW9FLGtCQUFrQixHQUFHQywyQkFBbUI7VUFFaEU7VUFBQXJFO1VBRU87VUFBWSxNQUFNc0UsTUFBTSxHQUFHQyxlQUFPO1VBQUN2RTtVQUNuQztVQUFZLE1BQU13RSxhQUFhLEdBQUdDLGdCQUFjO1VBQUN6RTtVQUNqRDtVQUFZLE1BQU0wRSxZQUFZLEdBQUdDLGVBQWE7VUFBQzNFO1VBQy9DO1VBQVksTUFBTTRFLGFBQWEsR0FBR0MsZ0JBQWM7VUFBQzdFO1VBQ2pEO1VBQVksTUFBTThFLFFBQVEsR0FBR0MsZUFBVTtVQUFDL0U7VUFDeEM7VUFBWSxNQUFNZ0YsY0FBYyxHQUFHRCxlQUFVO1VBQ3BEO1VBQUEvRTtVQUNBLE1BQU0sVUFBV2lGLGNBQWMsR0FBR0MsdUJBQWM7VUFDekM7VUFBVyxNQUFNQyxPQUFPLEdBQUdDLGdCQUFRO1VBQUNwRjtVQUNwQztVQUFXLE1BQU1xRixTQUFTLEdBQUdDLGtCQUFVO1VBQUN0RjtVQUN4QztVQUFXLE1BQU11RixTQUFTLEdBQUdDLGtCQUFVO1VBQUN4RiIsIm5hbWVzIjpbIk9iamVjdCIsInZhbHVlIiwiZXhwb3J0cyIsImNoaWxkcmVuIiwicHJldGl0bGUiLCJ0aXRsZSIsIndyYXBwZXIiLCJjb250ZW50IiwiTEFOR1VBR0UiLCJJbnRybyIsIkludHJvMSIsIkNsaSIsIkNMSTEiLCJRdWlja1N0YXJ0IiwiUXVpY2tTdGFydDEiLCJUdXRvcmlhbFN0YXJ0IiwiVHV0b3JpYWwxIiwiVHV0b3JpYWxCYWNrZW5kIiwiVHV0b3JpYWwyIiwiVHV0b3JpYWxSb3V0aW5nIiwiVHV0b3JpYWw0IiwiVHV0b3JpYWxGaXJzdE1vZHVsZSIsIlR1dG9yaWFsNSIsIlBhY2thZ2VzQ3JlYXRlIiwiUGFja2FnZXNDcmVhdGUxIiwiUGFja2FnZXNUeXBlcyIsIlBBY2thZ2VzVHlwZXMxIiwiUGFja2FnZXNEaXN0cmlidXRpb25zIiwiRGlzdHJpYnV0aW9uczEiLCJQYWNrYWdlc0pzb24iLCJQYWNrYWdlc0pzb24xIiwiUGFja2FnZXNQdWJsaXNoIiwiUGFja2FnZXNQdWJsaXNoMSIsIlBhY2thZ2VzQmV5b25kanMiLCJQYWNrYWdlc0JleW9uZGpzMSIsIlBhY2thZ2VzRGVwZW5kZW5jaWVzIiwiUGFja2FnZXNEZXBlbmRlbmNpZXMxIiwiTW9kdWxlc0ludHJvZHVjdGlvbiIsIk1vZHVsZXNJbnRyb2R1Y3Rpb24xIiwiTW9kdWxlc0NyZWF0aW9uIiwiTW9kdWxlc0NyZWF0aW9uMSIsIk1vZHVsZXNDb25maWciLCJNb2R1bGVzQnVuZGxlcyIsIk1vZHVsZXNCdW5kbGVzMSIsIk1vZHVsZXNQcm9jZXNzb3JzIiwiTW9kdWxlc1Byb2Nlc3NvcnMxIiwiQmFja2VuZEludHJvIiwiQmFja2VuZEludHJvMSIsIkJhY2tlbmRCcmlkZ2VzIiwiQmFja2VuZEJyaWRnZXMxIiwiQmFja2VuZERlYnVnIiwiQmFja2VuZERlYnVnMSIsIkJhY2tlbmRCZWUiLCJCYWNrZW5kQmVlMSIsIkJhY2tlbmRTc3JzZXJ2ZXIiLCJCYWNrZW5kU3Nyc2VydmVyMSIsIldpZGdldHMiLCJXaWRnZXRzMSIsIldpZGdldHNDb250cm9sbGVycyIsIldpZGdldHNDb250cm9sbGVyczEiLCJXaWRnZXRzT2JqZWN0IiwiV2lkZ2V0c09iamVjdDEiLCJXaWRnZXRzTGF5b3V0IiwiV2lkZ2V0c0xheW91dDEiLCJXaWRnZXRzUGFnZSIsIldpZGdldHNQYWdlMSIsIldpZGdldHNSZW5kZXJpbmciLCJXaWRnZXRzUmVuZGVyaW5nMSIsIlJvdXRpbmciLCJSb3V0aW5nMSIsIkFkZFJlbmRlcmluZ0VuZ2luZSIsIkFkZFJlbmRlcmluZ0VuZ2luZTEiLCJTdHlsZXMiLCJTdHlsZXMxIiwiU3R5bGVzTW9kdWxlcyIsIlN0eWxlc01vZHVsZXMxIiwiU3R5bGVzVGhlbWVzIiwiU3R5bGVzVGhlbWVzMSIsIlN0eWxlc0ltcG9ydHMiLCJTdHlsZXNJbXBvcnRzMSIsIlRlbXBsYXRlIiwiVGVtcGxhdGVzMSIsIlN0eWxlc1RlbXBsYXRlIiwiQmFyZVNwZWNpZmllcnMiLCJCYXJlU3BlY2lmaWVyMSIsIk1vZHVsYXIiLCJNb2R1bGFyMSIsIlVuaXZlcnNhbCIsIlVuaXZlcnNhbDEiLCJEZXZTZXJ2ZXIiLCJEZXZTZXJ2ZXIxIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJtZHgvYmFja2VuZC9tZHhcXGJhY2tlbmRcXGJlZS5tZHgiLCJtZHgvYmFja2VuZC9tZHhcXGJhY2tlbmRcXGJyaWRnZXMubWR4IiwibWR4L2JhY2tlbmQvZGVidWcubWR4IiwibWR4L2JhY2tlbmQvbWR4XFxiYWNrZW5kXFxpbnRyby5tZHgiLCJtZHgvYmFja2VuZC9zc3Itc2VydmVyLm1keCIsIm1keC9mb3VuZGF0aW9ucy9tZHhcXGZvdW5kYXRpb25zXFxiYXJlLXNwZWNpZmllcnMubWR4IiwibWR4L2ZvdW5kYXRpb25zL21keFxcZm91bmRhdGlvbnNcXGRldi1zZXJ2ZXIubWR4IiwibWR4L2ZvdW5kYXRpb25zL21keFxcZm91bmRhdGlvbnNcXGdsb3NhcnkubWR4IiwibWR4L2ZvdW5kYXRpb25zL21keFxcZm91bmRhdGlvbnNcXGhtci5tZHgiLCJtZHgvZm91bmRhdGlvbnMvbWR4XFxmb3VuZGF0aW9uc1xcbW9kdWxhci5tZHgiLCJtZHgvZm91bmRhdGlvbnMvbWR4XFxmb3VuZGF0aW9uc1xcdW5pdmVyc2FsLm1keCIsIm1keC9mcm9udGVuZC9tZHhcXGZyb250ZW5kXFxpLXdpZGdldC1zdG9yZS5tZHgiLCJtZHgvZnJvbnRlbmQvcm91dGluZy9tZHhcXGZyb250ZW5kXFxyb3V0aW5nXFxyb3V0aW5nLm1keCIsIm1keC9mcm9udGVuZC9yb3V0aW5nL21keFxcZnJvbnRlbmRcXHJvdXRpbmdcXHVyaS5tZHgiLCJtZHgvZnJvbnRlbmQvbWR4XFxmcm9udGVuZFxcc3RhdGUtbWFuYWdlbWVudC5tZHgiLCJtZHgvZnJvbnRlbmQvc3R5bGVzL21keFxcZnJvbnRlbmRcXHN0eWxlc1xcaW1wb3J0cy5tZHgiLCJtZHgvZnJvbnRlbmQvc3R5bGVzL21keFxcZnJvbnRlbmRcXHN0eWxlc1xcaW5kZXgubWR4IiwibWR4L2Zyb250ZW5kL3N0eWxlcy9tZHhcXGZyb250ZW5kXFxzdHlsZXNcXG1vZHVsZXMubWR4IiwibWR4L2Zyb250ZW5kL3N0eWxlcy9tZHhcXGZyb250ZW5kXFxzdHlsZXNcXHRoZW1lcy5tZHgiLCJtZHgvZnJvbnRlbmQvdGVtcGxhdGUvbWR4XFxmcm9udGVuZFxcdGVtcGxhdGVcXGluZGV4Lm1keCIsIm1keC9mcm9udGVuZC93aWRnZXRzL2FkZC1yZW5kZXJpbmctZW5naW5lLm1keCIsIm1keC9mcm9udGVuZC93aWRnZXRzL21keFxcZnJvbnRlbmRcXHdpZGdldHNcXGNvbnRyb2xsZXJzLm1keCIsIm1keC9mcm9udGVuZC93aWRnZXRzL21keFxcZnJvbnRlbmRcXHdpZGdldHNcXGluZGV4Lm1keCIsIm1keC9mcm9udGVuZC93aWRnZXRzL21keFxcZnJvbnRlbmRcXHdpZGdldHNcXGxheW91dC5tZHgiLCJtZHgvZnJvbnRlbmQvd2lkZ2V0cy9tZHhcXGZyb250ZW5kXFx3aWRnZXRzXFxvYmplY3QubWR4IiwibWR4L2Zyb250ZW5kL3dpZGdldHMvbWR4XFxmcm9udGVuZFxcd2lkZ2V0c1xccGFnZS5tZHgiLCJtZHgvZnJvbnRlbmQvd2lkZ2V0cy9tZHhcXGZyb250ZW5kXFx3aWRnZXRzXFxyZW5kZXJpbmcubWR4IiwibWR4L2Zyb250ZW5kL3dpZGdldHMvbWR4XFxmcm9udGVuZFxcd2lkZ2V0c1xccm91dGluZy5tZHgiLCJtZHgvZnJvbnRlbmQvd2lkZ2V0cy9tZHhcXGZyb250ZW5kXFx3aWRnZXRzXFx0by1jb21wbGV0ZS5tZHgiLCJtZHgvbW9kdWxlcy9tZHhcXG1vZHVsZXNcXGJ1bmRsZXMubWR4IiwibWR4L21vZHVsZXMvbWR4XFxtb2R1bGVzXFxjb25maWcubWR4IiwibWR4L21vZHVsZXMvbWR4XFxtb2R1bGVzXFxjcmVhdGlvbi5tZHgiLCJtZHgvbW9kdWxlcy9tZHhcXG1vZHVsZXNcXGludHJvZHVjdGlvbi5tZHgiLCJtZHgvbW9kdWxlcy9qc29uLm1keCIsIm1keC9tb2R1bGVzL21keFxcbW9kdWxlc1xccHJvY2Vzc29ycy5tZHgiLCJtZHgvcGFja2FnZXMvbWR4XFxwYWNrYWdlc1xcYmV5b25kLm1keCIsIm1keC9wYWNrYWdlcy9tZHhcXHBhY2thZ2VzXFxjcmVhdGlvbi5tZHgiLCJtZHgvcGFja2FnZXMvbWR4XFxwYWNrYWdlc1xcZGVwZW5kZW5jaWVzLm1keCIsIm1keC9wYWNrYWdlcy9tZHhcXHBhY2thZ2VzXFxkaXN0cmlidXRpb25zLm1keCIsIm1keC9wYWNrYWdlcy9tZHhcXHBhY2thZ2VzXFxpbXBvcnQubWR4IiwibWR4L3BhY2thZ2VzL21keFxccGFja2FnZXNcXGpzb24ubWR4IiwibWR4L3BhY2thZ2VzL3B1Ymxpc2gubWR4IiwibWR4L3BhY2thZ2VzL21keFxccGFja2FnZXNcXHR5cGVzLm1keCIsIm1keC9zdGFydGluZy9tZHhcXHN0YXJ0aW5nXFxjbGkubWR4IiwibWR4L3N0YXJ0aW5nL21keFxcc3RhcnRpbmdcXGludHJvLm1keCIsIm1keC9zdGFydGluZy9tZHhcXHN0YXJ0aW5nXFxxdWljay1zdGFydC5tZHgiLCJtZHgvdHV0b3JpYWwvbWR4XFx0dXRvcmlhbFxcYmFja2VuZC5tZHgiLCJtZHgvdHV0b3JpYWwvbWR4XFx0dXRvcmlhbFxcZmlyc3QtbW9kdWxlLm1keCIsIm1keC90dXRvcmlhbC9tZHhcXHR1dG9yaWFsXFxyb3V0aW5nLm1keCIsIm1keC90dXRvcmlhbC9tZHhcXHR1dG9yaWFsXFxzdGFydC5tZHgiLCJpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=
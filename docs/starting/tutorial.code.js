System.register(["@beyond-js/kernel@0.1.0/bundle", "react@18.2.0", "@beyond/docs@1/components/html"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, TutorialBackend, TutorialBridge, TutorialFirstModule, TutorialIntro, TutorialRouting, __beyond_pkg, hmr;
  _export({
    TutorialBackend: void 0,
    TutorialBridge: void 0,
    TutorialFirstModule: void 0,
    TutorialIntro: void 0,
    TutorialRouting: void 0
  });
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondDocs1ComponentsHtml) {
      dependency_2 = _beyondDocs1ComponentsHtml;
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
          "vspecifier": "@beyond/docs@1/docs/starting/tutorial",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond/docs/components/html', dependency_2]]);
      ims = new Map();
      /*******************************
      INTERNAL MODULE: ./backend/index
      *******************************/
      ims.set('./backend/index', {
        hash: 634435918,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TutorialBackend = TutorialBackend;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          var _templates = require("../templates");
          /*bundle*/
          function TutorialBackend() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "backendLogic"
            }), React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "backendInitialization",
              tpls: _templates.tpls.backend,
              nextLinks: ["/docs/tutorial/bridge"]
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./bridge/index
      ******************************/

      ims.set('./bridge/index', {
        hash: 961128947,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TutorialBridge = TutorialBridge;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          var _templates = require("../templates");
          /*bundle*/
          function TutorialBridge() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "bridgeCode",
              tpls: _templates.tpls.bridge
            }), React.createElement(_html.Document, {
              nextLinks: ['/docs/tutorial/routing'],
              tpls: _templates.tpls.bridge,
              specifier: _beyond_context.module.specifier,
              textId: "connectClientAndServer"
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./first-module/index
      ************************************/

      ims.set('./first-module/index', {
        hash: 1658007675,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TutorialFirstModule = TutorialFirstModule;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          var _templates = require("../templates");
          /*bundle*/
          function TutorialFirstModule() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              tpls: _templates.tpls.module,
              specifier: _beyond_context.module.specifier,
              textId: "firstModule"
            }), React.createElement(_html.Document, {
              tpls: _templates.tpls.module,
              specifier: _beyond_context.module.specifier,
              textId: "formCreation"
            }), React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "styles",
              tpls: _templates.tpls.module,
              nextLinks: ['/docs/tutorial/backend']
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./intro/index
      *****************************/

      ims.set('./intro/index', {
        hash: 3104388416,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TutorialIntro = TutorialIntro;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          var _templates = require("../templates");
          /*bundle*/
          function TutorialIntro() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "intro"
            }), React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "starting",
              tpls: _templates.tpls.starting,
              nextLinks: ["/docs/tutorial/first-module", "/docs/tutorial/backend"]
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./routing/index
      *******************************/

      ims.set('./routing/index', {
        hash: 65780898,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TutorialRouting = TutorialRouting;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          var _templates = require("../templates");
          /*bundle*/
          function TutorialRouting() {
            return React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              tpls: _templates.tpls.routing,
              textId: "routing"
            });
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./templates/backend
      ***********************************/

      ims.set('./templates/backend', {
        hash: 383171052,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.connection = void 0;
          var _pageCode = require("./page-code");
          var _bridge = require("./bridge");
          const tpl1 = `
import {Auth} from "@testing/login/home/bridge";
`;
          const connection = {
            view1: {
              title: 'home/views/index.tsx',
              tpl: tpl1
            },
            view2: {
              title: 'home/views/index.tsx',
              tpl: _pageCode.PageCode
            },
            bridge: {
              title: "bridge.ts",
              tpl: _bridge.bridgeCode
            }
          };
          exports.connection = connection;
        }
      });

      /**********************************
      INTERNAL MODULE: ./templates/bridge
      **********************************/

      ims.set('./templates/bridge', {
        hash: 2772175095,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.bridgeCode = void 0;
          const bridgeCode = `
const data = {
    user: 'admin',
    password: '123456.'
}

export /*actions*//*bundle*/
class Auth {

    async login(user: string, password: string) {
        if (user !== data.user || password !== data.password) {
            return {status: true, error: 'Invalid data'};
        }

        return {status: true, data: {valid: true}}
    }
}
`;
          exports.bridgeCode = bridgeCode;
        }
      });

      /*********************************
      INTERNAL MODULE: ./templates/index
      *********************************/

      ims.set('./templates/index', {
        hash: 1890569048,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.tpls = void 0;
          var _pageStyles = require("./page-styles");
          var _start = require("./start");
          var _pageCodeStarted = require("./page-code-started");
          var _backend = require("./backend");
          var _routing = require("./routing");
          var _starting = require("./starting");
          const tpls = {
            starting: _starting.starting,
            module: {
              page: {
                title: "views/index.tsx",
                tpl: _pageCodeStarted.PageCodeStarted
              },
              styles: {
                title: "styles.scss",
                language: "css",
                tpl: _pageStyles.pageStyles
              }
            },
            backend: {
              module1: _start.backend.module1,
              module2: _start.backend.module2,
              platforms1: _start.backend.platform1,
              platforms2: _start.backend.platform2
            },
            routing: _routing.routing,
            bridge: _backend.connection
          };
          exports.tpls = tpls;
        }
      });

      /***************************************
      INTERNAL MODULE: ./templates/module.json
      ***************************************/

      ims.set('./templates/module.json', {
        hash: 3005968685,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.moduleJson = void 0;
          const moduleJson = {
            bridge: `

`
          };
          exports.moduleJson = moduleJson;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./templates/page-code-started
      *********************************************/

      ims.set('./templates/page-code-started', {
        hash: 1239631844,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageCodeStarted = void 0;
          const PageCodeStarted = `
import * as React from "react";

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
}`;
          exports.PageCodeStarted = PageCodeStarted;
        }
      });

      /*************************************
      INTERNAL MODULE: ./templates/page-code
      *************************************/

      ims.set('./templates/page-code', {
        hash: 2816005721,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageCode = void 0;
          const PageCode = `
import * as React from "react";
import { Auth } from "@testing/login/auth";

interface IForm {
    disabled?: boolean;
}
const model = new Auth();
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
`;
          exports.PageCode = PageCode;
        }
      });

      /***************************************
      INTERNAL MODULE: ./templates/page-styles
      ***************************************/

      ims.set('./templates/page-styles', {
        hash: 2630990486,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.pageStyles = void 0;
          const pageStyles = `
.page__container {
  display: flex;
  padding: 20px;
  height: 100%;
  margin: 0;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;

  .form__error {
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

`;
          exports.pageStyles = pageStyles;
        }
      });

      /***********************************
      INTERNAL MODULE: ./templates/routing
      ***********************************/

      ims.set('./templates/routing', {
        hash: 2426180151,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.routing = void 0;
          const tpl1 = `
import {routing} from "@beyond-js/kernel/routing";`;
          const tpl2 = `
routing.pushState('/welcome');`;
          const routing = {
            importing: {
              tpl: tpl1
            },
            pushState: {
              tpl: tpl2,
              title: 'view.tsx'
            }
          };
          exports.routing = routing;
        }
      });

      /*********************************
      INTERNAL MODULE: ./templates/start
      *********************************/

      ims.set('./templates/start', {
        hash: 4188211953,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.backend = void 0;
          const ts = `
import {listen} from '@beyond-js/backend/listen/ts';

listen();
`;
          const tpl1 = `
{
  "bundle": "start",
  "platforms": "backend",
  "ts": {
    "files": "*"
  }
}`;
          const tpl2 = `
  "platforms": [
    "backend",
    "web"
  ],
  "bridge": {
    "path": "bridge",
    "files": [
      "*"
    ]
  },
   "widget": ...    
    `;
          const tpl3 = `
{
  "name": "auth",
  "bridge": {
    "path": "bridge",
    "files": [
      "*"
    ]
  },
  "platforms": [
    "*"
  ]
}`;
          const backend = {
            module1: {
              title: "module.json",
              "language": "json",
              "tpl": tpl1
            },
            module2: {
              title: "start.ts",
              tpl: ts
            },
            platform1: {
              tpl: tpl2
            },
            platform2: {
              tpl: tpl3,
              title: "module.json",
              language: "json"
            }
          };
          exports.backend = backend;
        }
      });

      /************************************
      INTERNAL MODULE: ./templates/starting
      ************************************/

      ims.set('./templates/starting', {
        hash: 3414043430,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.starting = void 0;
          const starting = {
            npx: {
              language: "shell",
              tpl: `npx @beyond-js/create-project --type web-backend --name @testing/login`
            },
            beyond: {
              tpl: '> beyond',
              language: 'shell'
            }
          };
          exports.starting = starting;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./backend/index",
        "from": "TutorialBackend",
        "name": "TutorialBackend"
      }, {
        "im": "./bridge/index",
        "from": "TutorialBridge",
        "name": "TutorialBridge"
      }, {
        "im": "./first-module/index",
        "from": "TutorialFirstModule",
        "name": "TutorialFirstModule"
      }, {
        "im": "./intro/index",
        "from": "TutorialIntro",
        "name": "TutorialIntro"
      }, {
        "im": "./routing/index",
        "from": "TutorialRouting",
        "name": "TutorialRouting"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'TutorialBackend') && _export("TutorialBackend", TutorialBackend = require ? require('./backend/index').TutorialBackend : value);
        (require || prop === 'TutorialBridge') && _export("TutorialBridge", TutorialBridge = require ? require('./bridge/index').TutorialBridge : value);
        (require || prop === 'TutorialFirstModule') && _export("TutorialFirstModule", TutorialFirstModule = require ? require('./first-module/index').TutorialFirstModule : value);
        (require || prop === 'TutorialIntro') && _export("TutorialIntro", TutorialIntro = require ? require('./intro/index').TutorialIntro : value);
        (require || prop === 'TutorialRouting') && _export("TutorialRouting", TutorialRouting = require ? require('./routing/index').TutorialRouting : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxFQUFFLE9BQU87Y0FDakJSLEdBQUcsRUFBRTthQUNSO1lBQ0R1QixNQUFNLEVBQUU7Y0FDSnZCLEdBQUcsRUFBRSxVQUFVO2NBQ2ZRLFFBQVEsRUFBRTs7V0FFakI7VUFBQUoiLCJuYW1lcyI6WyJUdXRvcmlhbEJhY2tlbmQiLCJSZWFjdCIsIkRvY3VtZW50Iiwic3BlY2lmaWVyIiwibW9kdWxlIiwidGV4dElkIiwidHBscyIsImJhY2tlbmQiLCJuZXh0TGlua3MiLCJUdXRvcmlhbEJyaWRnZSIsImJyaWRnZSIsIlR1dG9yaWFsRmlyc3RNb2R1bGUiLCJUdXRvcmlhbEludHJvIiwic3RhcnRpbmciLCJUdXRvcmlhbFJvdXRpbmciLCJyb3V0aW5nIiwidHBsMSIsImNvbm5lY3Rpb24iLCJ2aWV3MSIsInRpdGxlIiwidHBsIiwidmlldzIiLCJQYWdlQ29kZSIsImJyaWRnZUNvZGUiLCJleHBvcnRzIiwicGFnZSIsIlBhZ2VDb2RlU3RhcnRlZCIsInN0eWxlcyIsImxhbmd1YWdlIiwicGFnZVN0eWxlcyIsIm1vZHVsZTEiLCJtb2R1bGUyIiwicGxhdGZvcm1zMSIsInBsYXRmb3JtMSIsInBsYXRmb3JtczIiLCJwbGF0Zm9ybTIiLCJtb2R1bGVKc29uIiwidHBsMiIsImltcG9ydGluZyIsInB1c2hTdGF0ZSIsInRzIiwidHBsMyIsIm5weCIsImJleW9uZCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3Mvc3RhcnRpbmcvdHV0b3JpYWwvY29kZS90cy9iYWNrZW5kL2luZGV4LnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL3N0YXJ0aW5nL3R1dG9yaWFsL2NvZGUvdHMvYnJpZGdlL2luZGV4LnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL3N0YXJ0aW5nL3R1dG9yaWFsL2NvZGUvdHMvZmlyc3QtbW9kdWxlL2luZGV4LnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL3N0YXJ0aW5nL3R1dG9yaWFsL2NvZGUvdHMvaW50cm8vaW5kZXgudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3Mvc3RhcnRpbmcvdHV0b3JpYWwvY29kZS90cy9yb3V0aW5nL2luZGV4LnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL3N0YXJ0aW5nL3R1dG9yaWFsL2NvZGUvdHMvdGVtcGxhdGVzL2JhY2tlbmQudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9zdGFydGluZy90dXRvcmlhbC9jb2RlL3RzL3RlbXBsYXRlcy9icmlkZ2UudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9zdGFydGluZy90dXRvcmlhbC9jb2RlL3RzL3RlbXBsYXRlcy9pbmRleC50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL3N0YXJ0aW5nL3R1dG9yaWFsL2NvZGUvdHMvdGVtcGxhdGVzL21vZHVsZS5qc29uLnRzIiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3Mvc3RhcnRpbmcvdHV0b3JpYWwvY29kZS90cy90ZW1wbGF0ZXMvcGFnZS1jb2RlLXN0YXJ0ZWQudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9zdGFydGluZy90dXRvcmlhbC9jb2RlL3RzL3RlbXBsYXRlcy9wYWdlLWNvZGUudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9zdGFydGluZy90dXRvcmlhbC9jb2RlL3RzL3RlbXBsYXRlcy9wYWdlLXN0eWxlcy50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL3N0YXJ0aW5nL3R1dG9yaWFsL2NvZGUvdHMvdGVtcGxhdGVzL3JvdXRpbmcudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9zdGFydGluZy90dXRvcmlhbC9jb2RlL3RzL3RlbXBsYXRlcy9zdGFydC50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL3N0YXJ0aW5nL3R1dG9yaWFsL2NvZGUvdHMvdGVtcGxhdGVzL3N0YXJ0aW5nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==
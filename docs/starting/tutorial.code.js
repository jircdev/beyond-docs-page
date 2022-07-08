define(["exports", "@beyond-js/kernel/bundle", "@beyond-js/kernel/styles", "react", "@beyond/docs/components/html"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.TutorialRouting = _exports.TutorialIntro = _exports.TutorialFirstModule = _exports.TutorialBridge = _exports.TutorialBackend = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/starting/tutorial",
    "multibundle": true,
    "bundle": "code"
  }).package();

  ;
  externals.register(new Map([["react", dependency_2]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html"]));

  require('@beyond-js/kernel/styles').styles.register('@beyond/docs/docs/starting/tutorial.code');

  const ims = new Map();
  /*******************************
  INTERNAL MODULE: ./backend/index
  *******************************/

  ims.set('./backend/index', {
    hash: 271411317,
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
          moduleId: _beyond_context.module.resource,
          textId: "backendLogic"
        }), React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
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
    hash: 1445642782,
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
          moduleId: _beyond_context.module.resource,
          textId: "bridgeCode",
          tpls: _templates.tpls.bridge
        }), React.createElement(_html.Document, {
          nextLinks: ['/docs/tutorial/routing'],
          tpls: _templates.tpls.bridge,
          moduleId: _beyond_context.module.resource,
          textId: "connectClientAndServer"
        }));
      }
    }
  });
  /************************************
  INTERNAL MODULE: ./first-module/index
  ************************************/

  ims.set('./first-module/index', {
    hash: 1201976334,
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
          moduleId: _beyond_context.module.resource,
          textId: "firstModule"
        }), React.createElement(_html.Document, {
          tpls: _templates.tpls.module,
          moduleId: _beyond_context.module.resource,
          textId: "formCreation"
        }), React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
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
    hash: 1452634302,
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
          moduleId: _beyond_context.module.resource,
          textId: "intro"
        }), React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
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
    hash: 709162101,
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
          moduleId: _beyond_context.module.resource,
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
  let TutorialBackend, TutorialBridge, TutorialFirstModule, TutorialIntro, TutorialRouting; // Module exports

  _exports.TutorialRouting = TutorialRouting;
  _exports.TutorialIntro = TutorialIntro;
  _exports.TutorialFirstModule = TutorialFirstModule;
  _exports.TutorialBridge = TutorialBridge;
  _exports.TutorialBackend = TutorialBackend;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'TutorialBackend') && (_exports.TutorialBackend = TutorialBackend = require ? require('./backend/index').TutorialBackend : value);
    (require || prop === 'TutorialBridge') && (_exports.TutorialBridge = TutorialBridge = require ? require('./bridge/index').TutorialBridge : value);
    (require || prop === 'TutorialFirstModule') && (_exports.TutorialFirstModule = TutorialFirstModule = require ? require('./first-module/index').TutorialFirstModule : value);
    (require || prop === 'TutorialIntro') && (_exports.TutorialIntro = TutorialIntro = require ? require('./intro/index').TutorialIntro : value);
    (require || prop === 'TutorialRouting') && (_exports.TutorialRouting = TutorialRouting = require ? require('./routing/index').TutorialRouting : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
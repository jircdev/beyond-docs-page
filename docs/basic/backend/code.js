define(["exports", "@beyond-js/kernel/styles/ts", "react", "@beyond/docs/components/html/code", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.BackendPage = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/basic/backend/code").package();

  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html/code"]));

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/docs/docs/basic/backend/code');

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 1726932003,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BackendPage = BackendPage;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");

      const tpl = `
"bridge": {
    "path": "bridge",
    "files": [
      "*"
    ]
  }`;
      const tpl2 = `
export /*actions*//*bundle*/
class Auth {
    async login(user: string, password: string) {
        if (user !== data.user || password !== data.password) {
            return {status: true, error: 'Invalid data'};
        }

        return {status: true, data: {valid: true}}
    }
}`;
      const tpl3 = `
import {listen} from '@beyond-js/backend/listen/ts';

listen();`;
      const tpls = {
        tpl1: {
          title: "module.json",
          tpl
        },
        tpl2: {
          title: "bridge.ts",
          tpl: tpl2
        },
        tpl3: {
          title: "bridge.ts",
          tpl: tpl3
        }
      };
      /*bundle*/

      function BackendPage() {
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "code"
        }), React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "server"
        }), React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "comments",
          nextLinks: ["/docs/modules/create"]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./control",
    "from": "BackendPage",
    "name": "BackendPage"
  }];
  let BackendPage; // Module exports

  _exports.BackendPage = BackendPage;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'BackendPage') && (_exports.BackendPage = BackendPage = require ? require('./control').BackendPage : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
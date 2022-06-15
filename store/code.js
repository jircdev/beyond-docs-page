define(["exports", "react", "@beyond-js/kernel/texts/ts", "@beyond-js/kernel/bundle/ts"], function (_exports2, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.useTexts = _exports2.useModel = _exports2.useDocsContext = _exports2.useBinder = _exports2.hmr = _exports2.DocsContext = _exports2.Control = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/store/code").package();

  externals.register(new Map([["react", dependency_0]]));
  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 1583137179,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Control = void 0;
      /*bundle*/

      class Control {
        constructor() {}

      }

      exports.Control = Control;
    }
  });
  /****************************
  INTERNAL MODULE: ./use-binder
  ****************************/

  ims.set('./use-binder', {
    hash: 1067502534,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.useBinder = useBinder;

      var React = require("react");
      /*bundle*/

      /***
       * Executes a useEffect hook binging the event defined in all
       * objects passed
       *
       * @param {array} objects Objects to bind
       * @param {function} onBinder function to be executed when the event is fired
       * @param {string} event the event to be listened, by default is event change
       */


      function useBinder(objects, onBinder, event = 'change') {
        React.useEffect(() => {
          objects.forEach(object => {
            if (object && object.bind) object.bind(event, onBinder);
            if (object && object.on) object.on(event, onBinder);
          });
          return () => objects.forEach(object => {
            if (object && object.unbind) object.unbind(event, onBinder);
            if (object && object.off) object.off(event, onBinder);
          });
        }, [objects]);
      }
    }
  });
  /***************************
  INTERNAL MODULE: ./use-model
  ***************************/

  ims.set('./use-model', {
    hash: 3232899855,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.useModel = useModel;

      var React = require("react");
      /*bundle*/


      function useModel({
        model,
        props,
        onChange
      }) {
        const [controller, setModel] = React.useState();

        const onLoad = () => {
          const instance = new model(props);

          const onChangeMethod = () => {
            if (onChange) onChange(controller);
          };

          if (onChange) {
            instance.bind('change', onChangeMethod);
          }

          setModel(instance);
          return () => instance.unbind('change', onChangeMethod);
        };

        React.useEffect(onLoad, []);
        return [controller];
      }
    }
  });
  /***************************
  INTERNAL MODULE: ./use-texts
  ***************************/

  ims.set('./use-texts', {
    hash: 3708528764,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.useDocsContext = exports.DocsContext = void 0;
      exports.useTexts = useTexts;

      var React = require("react");

      var _ts = require("@beyond-js/kernel/texts/ts");

      const value = {};
      /*bundle*/

      const DocsContext = React.createContext(value);
      exports.DocsContext = DocsContext;
      /*bundle*/

      const useDocsContext = () => React.useContext(DocsContext);

      exports.useDocsContext = useDocsContext;
      /*bundle*/

      function useTexts(moduleId) {
        const [ready, setReady] = React.useState(false);
        const [texts, setTexts] = React.useState({});
        React.useEffect(() => {
          const modelTexts = new _ts.CurrentTexts(moduleId, true);

          const triggerEvent = () => {
            setReady(modelTexts.ready);
            setTexts(modelTexts.value);
          };

          modelTexts.bind('change', triggerEvent);
          triggerEvent();
          return () => {
            modelTexts.unbind('change', triggerEvent);
          };
        }, []);
        const isReady = ready && texts;
        return [isReady, texts];
      }
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.Control = require('./control').Control;
    _exports.useBinder = require('./use-binder').useBinder;
    _exports.useModel = require('./use-model').useModel;
    _exports.DocsContext = require('./use-texts').DocsContext;
    _exports.useDocsContext = require('./use-texts').useDocsContext;
    _exports.useTexts = require('./use-texts').useTexts;
  };

  let Control, useBinder, useModel, DocsContext, useDocsContext, useTexts; // Module exports

  _exports2.useTexts = useTexts;
  _exports2.useDocsContext = useDocsContext;
  _exports2.DocsContext = DocsContext;
  _exports2.useModel = useModel;
  _exports2.useBinder = useBinder;
  _exports2.Control = Control;

  __pkg.exports.process = function (require) {
    _exports2.Control = Control = require('./control').Control;
    _exports2.useBinder = useBinder = require('./use-binder').useBinder;
    _exports2.useModel = useModel = require('./use-model').useModel;
    _exports2.DocsContext = DocsContext = require('./use-texts').DocsContext;
    _exports2.useDocsContext = useDocsContext = require('./use-texts').useDocsContext;
    _exports2.useTexts = useTexts = require('./use-texts').useTexts;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});
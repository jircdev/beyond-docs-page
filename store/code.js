define(["exports", "react", "@beyond-js/kernel/bundle/ts"], function (_exports2, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.useModel = _exports2.useBinder = _exports2.hmr = _exports2.Control = void 0;

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
    hash: 2595080040,
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
            if (object) object.bind(event, onBinder);
          });
          return () => objects.forEach(object => {
            if (object) object.unbind(event, onBinder);
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
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.Control = require('./control').Control;
    _exports.useBinder = require('./use-binder').useBinder;
    _exports.useModel = require('./use-model').useModel;
  };

  let Control, useBinder, useModel; // Module exports

  _exports2.useModel = useModel;
  _exports2.useBinder = useBinder;
  _exports2.Control = Control;

  __pkg.exports.process = function (require) {
    _exports2.Control = Control = require('./control').Control;
    _exports2.useBinder = useBinder = require('./use-binder').useBinder;
    _exports2.useModel = useModel = require('./use-model').useModel;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});
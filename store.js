define(["exports", "module", "@beyond-js/kernel/bundle", "react@17.0.2", "@beyond-js/kernel/texts"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.useTexts = _exports.useModel = _exports.useDocsContext = _exports.useBinder = _exports.hmr = _exports.DocsContext = _exports.Control = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/store",
    "bundle": "store"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_1]]));
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
    hash: 1517189814,
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
    hash: 768772590,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.useDocsContext = exports.DocsContext = void 0;
      exports.useTexts = useTexts;

      var React = require("react");

      var _texts = require("@beyond-js/kernel/texts");

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
          const modelTexts = new _texts.CurrentTexts(moduleId, true);

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
        const isReady = ready && !!texts;
        return [isReady, texts];
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./control",
    "from": "Control",
    "name": "Control"
  }, {
    "im": "./use-binder",
    "from": "useBinder",
    "name": "useBinder"
  }, {
    "im": "./use-model",
    "from": "useModel",
    "name": "useModel"
  }, {
    "im": "./use-texts",
    "from": "DocsContext",
    "name": "DocsContext"
  }, {
    "im": "./use-texts",
    "from": "useDocsContext",
    "name": "useDocsContext"
  }, {
    "im": "./use-texts",
    "from": "useTexts",
    "name": "useTexts"
  }];
  let Control, useBinder, useModel, DocsContext, useDocsContext, useTexts; // Module exports

  _exports.useTexts = useTexts;
  _exports.useDocsContext = useDocsContext;
  _exports.DocsContext = DocsContext;
  _exports.useModel = useModel;
  _exports.useBinder = useBinder;
  _exports.Control = Control;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Control') && (_exports.Control = Control = require ? require('./control').Control : value);
    (require || prop === 'useBinder') && (_exports.useBinder = useBinder = require ? require('./use-binder').useBinder : value);
    (require || prop === 'useModel') && (_exports.useModel = useModel = require ? require('./use-model').useModel : value);
    (require || prop === 'DocsContext') && (_exports.DocsContext = DocsContext = require ? require('./use-texts').DocsContext : value);
    (require || prop === 'useDocsContext') && (_exports.useDocsContext = useDocsContext = require ? require('./use-texts').useDocsContext : value);
    (require || prop === 'useTexts') && (_exports.useTexts = useTexts = require ? require('./use-texts').useTexts : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixFQUEyQixJQUEzQixDQUFuQjs7VUFDQSxNQUFNTyxZQUFZLEdBQUcsTUFBSztZQUN0QkwsUUFBUSxDQUFDRyxVQUFVLENBQUNKLEtBQVosQ0FBUkM7WUFDQUUsUUFBUSxDQUFDQyxVQUFVLENBQUNYLEtBQVosQ0FBUlU7VUFGSjs7VUFJQUMsVUFBVSxDQUFDekIsSUFBWHlCLENBQWdCLFFBQWhCQSxFQUEwQkUsWUFBMUJGO1VBQ0FFLFlBQVk7VUFDWixPQUFPLE1BQUs7WUFDUkYsVUFBVSxDQUFDdkIsTUFBWHVCLENBQWtCLFFBQWxCQSxFQUE0QkUsWUFBNUJGO1VBREo7UUFSSixHQVlHLEVBWkg3QjtRQWFBLE1BQU1nQyxPQUFPLEdBQUdQLEtBQUssSUFBSSxDQUFDLENBQUNFLEtBQTNCO1FBQ0EsT0FBTyxDQUFDSyxPQUFELEVBQVVMLEtBQVYsQ0FBUDtNQUNIIiwibmFtZXMiOlsiQ29udHJvbCIsImNvbnN0cnVjdG9yIiwidXNlQmluZGVyIiwib2JqZWN0cyIsIm9uQmluZGVyIiwiZXZlbnQiLCJSZWFjdCIsInVzZUVmZmVjdCIsImZvckVhY2giLCJvYmplY3QiLCJiaW5kIiwib24iLCJ1bmJpbmQiLCJvZmYiLCJ1c2VNb2RlbCIsIm1vZGVsIiwicHJvcHMiLCJvbkNoYW5nZSIsImNvbnRyb2xsZXIiLCJzZXRNb2RlbCIsInVzZVN0YXRlIiwib25Mb2FkIiwiaW5zdGFuY2UiLCJvbkNoYW5nZU1ldGhvZCIsInZhbHVlIiwiRG9jc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRG9jc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlVGV4dHMiLCJtb2R1bGVJZCIsInJlYWR5Iiwic2V0UmVhZHkiLCJ0ZXh0cyIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsImlzUmVhZHkiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9zdG9yZS9jb2RlL3RzL2NvbnRyb2wudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvc3RvcmUvY29kZS90cy91c2UtYmluZGVyLnRzIiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL3N0b3JlL2NvZGUvdHMvdXNlLW1vZGVsLnRzIiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL3N0b3JlL2NvZGUvdHMvdXNlLXRleHRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==
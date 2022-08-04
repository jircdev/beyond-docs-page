define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/kernel/core", "@beyond-js/react-widgets/page", "react@17.0.2", "@beyond/docs/contents-data.code"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Controller = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/contents-page",
    "bundle": "home"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_4]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/contents-data.code"]));

  brequire('@beyond-js/widgets/render').widgets.register([{
    "name": "contents-page",
    "id": "@beyond/docs/contents-page",
    "is": "page",
    "route": "/docs/${content}",
    "layout": "main-layout"
  }]);
  const ims = new Map();
  /**************************
  INTERNAL MODULE: ./contents
  **************************/

  ims.set('./contents', {
    hash: 3986927060,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Contents = void 0;

      var _core = require("@beyond-js/kernel/core");

      class Contents extends _core.Events {
        #loading = false;

        get loading() {
          return this.#loading;
        }

        #loaded = false;

        get loaded() {
          return this.#loaded;
        }

        #value = [];

        get value() {
          return this.#value;
        }

        #hydrated = false;

        get hydrated() {
          return this.#hydrated;
        }

        #container;

        get container() {
          return this.#container;
        }

        constructor(container) {
          super();
          this.#container = container;
        }

        async fetch() {
          this.#loading = true;
          this.trigger('change');
          this.#loading = false;
          this.#loaded = true;
          this.trigger('change');
        }

        hydrate(cached) {
          console.log(cached);
          this.#loading = false;
          this.#loaded = true;
          cached.forEach(company => this.#value.push(company));
          this.#hydrated = true;
        }

        toJSON() {
          return this.#value;
        }

      }

      exports.Contents = Contents;
    }
  });
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 4008428264,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _page = require("@beyond-js/react-widgets/page");

      var _contents = require("./contents");

      var _page2 = require("./views/page");
      /*bundle*/


      class Controller extends _page.PageReactWidgetController {
        createStore() {
          return new _contents.Contents(this.body);
        }

        get Widget() {
          return _page2.Page;
        }

      }

      exports.Controller = Controller;
    }
  });
  /****************************
  INTERNAL MODULE: ./views/page
  ****************************/

  ims.set('./views/page', {
    hash: 3716282025,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Page = Page;

      var React = require("react");

      var _contentsData = require("@beyond/docs/contents-data.code");

      function Page({
        uri,
        component
      }) {
        const propsContent = uri.vars.get('content');
        const [hmrChanged, setHmr] = React.useState(performance.now());
        const sub = uri.vars.get('sub');
        const contentId = !['', undefined, null].includes(propsContent) ? propsContent : 'intro';
        return React.createElement(_contentsData.ContentsPage, {
          component: component,
          contentId: contentId,
          sub: sub,
          hmrChanged: hmrChanged
        });
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./controller",
    "from": "Controller",
    "name": "Controller"
  }];
  let Controller; // Module exports

  _exports.Controller = Controller;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller').Controller : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BUU0sTUFBT0EsUUFBUCxTQUF3QkMsWUFBeEIsQ0FBOEI7UUFFaEMsV0FBVyxLQUFYOztRQUNXLElBQVBDLE9BQU87VUFDUCxPQUFPLEtBQUssUUFBWjtRQUNIOztRQUVELFVBQVUsS0FBVjs7UUFDVSxJQUFOQyxNQUFNO1VBQ04sT0FBTyxLQUFLLE9BQVo7UUFDSDs7UUFFRCxTQUFxQixFQUFyQjs7UUFDUyxJQUFMQyxLQUFLO1VBQ0wsT0FBTyxLQUFLLE1BQVo7UUFDSDs7UUFFRCxZQUFZLEtBQVo7O1FBQ1ksSUFBUkMsUUFBUTtVQUNSLE9BQU8sS0FBSyxTQUFaO1FBQ0g7O1FBRUQ7O1FBQ2EsSUFBVEMsU0FBUztVQUNULE9BQU8sS0FBSyxVQUFaO1FBQ0g7O1FBRURDLFlBQVlELFNBQVpDLEVBQXFCO1VBQ2pCO1VBQ0EsS0FBSyxVQUFMLEdBQWtCRCxTQUFsQjtRQUNIOztRQUVVLE1BQUxFLEtBQUs7VUFDUCxLQUFLLFFBQUwsR0FBZ0IsSUFBaEI7VUFDQSxLQUFLQyxPQUFMLENBQWEsUUFBYjtVQUNBLEtBQUssUUFBTCxHQUFnQixLQUFoQjtVQUNBLEtBQUssT0FBTCxHQUFlLElBQWY7VUFDQSxLQUFLQSxPQUFMLENBQWEsUUFBYjtRQUNIOztRQUVEQyxPQUFPLENBQUNDLE1BQUQsRUFBbUI7VUFDdEJDLE9BQU8sQ0FBQ0MsR0FBUkQsQ0FBWUQsTUFBWkM7VUFDQSxLQUFLLFFBQUwsR0FBZ0IsS0FBaEI7VUFDQSxLQUFLLE9BQUwsR0FBZSxJQUFmO1VBQ0FELE1BQU0sQ0FBQ0csT0FBUEgsQ0FBZUksT0FBTyxJQUFJLEtBQUssTUFBTCxDQUFZQyxJQUFaLENBQWlCRCxPQUFqQixDQUExQko7VUFDQSxLQUFLLFNBQUwsR0FBaUIsSUFBakI7UUFDSDs7UUFFRE0sTUFBTTtVQUNGLE9BQU8sS0FBSyxNQUFaO1FBQ0g7O01BbEQrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ1JwQzs7TUFFQTs7TUFDQTtNQUVPOzs7TUFBVSxNQUNYQyxVQURXLFNBQ1FDLCtCQURSLENBQ2lDO1FBQzlDQyxXQUFXO1VBQ1AsT0FBTyxJQUFJcEIsa0JBQUosQ0FBYSxLQUFLcUIsSUFBbEIsQ0FBUDtRQUNIOztRQUVTLElBQU5DLE1BQU07VUFDTixPQUFPQyxXQUFQO1FBQ0g7O01BUDZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DTmxEOztNQUNBOztNQUVNLFNBQVVBLElBQVYsQ0FBZTtRQUFDQyxHQUFEO1FBQU1DO01BQU4sQ0FBZixFQUErQjtRQUNqQyxNQUFNQyxZQUFZLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSkgsQ0FBU0ksR0FBVEosQ0FBYSxTQUFiQSxDQUFyQjtRQUNBLE1BQU0sQ0FBQ0ssVUFBRCxFQUFhQyxNQUFiLElBQXVCQyxLQUFLLENBQUNDLFFBQU5ELENBQWVFLFdBQVcsQ0FBQ0MsR0FBWkQsRUFBZkYsQ0FBN0I7UUFDQSxNQUFNSSxHQUFHLEdBQUdYLEdBQUcsQ0FBQ0csSUFBSkgsQ0FBU0ksR0FBVEosQ0FBYSxLQUFiQSxDQUFaO1FBQ0EsTUFBTVksU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFELEVBQUtDLFNBQUwsRUFBZ0IsSUFBaEIsRUFBc0JDLFFBQXRCLENBQStCWixZQUEvQixDQUFELEdBQWdEQSxZQUFoRCxHQUErRCxPQUFqRjtRQUVBLE9BQ0lLLG9CQUFDUSwwQkFBRFIsRUFBYTtVQUFDTixTQUFTLEVBQUVBLFNBQVo7VUFBdUJXLFNBQVMsRUFBRUEsU0FBbEM7VUFBNkNELEdBQUcsRUFBRUEsR0FBbEQ7VUFBdUROLFVBQVUsRUFBRUE7UUFBbkUsQ0FBYkUsQ0FESjtNQUdIIiwibmFtZXMiOlsiQ29udGVudHMiLCJFdmVudHMiLCJsb2FkaW5nIiwibG9hZGVkIiwidmFsdWUiLCJoeWRyYXRlZCIsImNvbnRhaW5lciIsImNvbnN0cnVjdG9yIiwiZmV0Y2giLCJ0cmlnZ2VyIiwiaHlkcmF0ZSIsImNhY2hlZCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiY29tcGFueSIsInB1c2giLCJ0b0pTT04iLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiYm9keSIsIldpZGdldCIsIlBhZ2UiLCJ1cmkiLCJjb21wb25lbnQiLCJwcm9wc0NvbnRlbnQiLCJ2YXJzIiwiZ2V0IiwiaG1yQ2hhbmdlZCIsInNldEhtciIsIlJlYWN0IiwidXNlU3RhdGUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInN1YiIsImNvbnRlbnRJZCIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiQ29udGVudHNQYWdlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29udGVudHMvcGFnZS93aWRnZXQvdHMvY29udGVudHMudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29udGVudHMvcGFnZS93aWRnZXQvdHMvY29udHJvbGxlci50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29udGVudHMvcGFnZS93aWRnZXQvdHMvdmlld3MvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF19
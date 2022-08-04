define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.routing = _exports.URI = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/kernel/routing",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*********************************
  INTERNAL MODULE: ./history/history
  *********************************/

  ims.set('./history/history', {
    hash: 2957503106,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BeyondHistory = void 0;

      var _position = require("./position");

      var _records = require("./records");
      /**
       * Beyond keeps its own history list
       * @constructor
       */


      class BeyondHistory {
        #position;

        get position() {
          return this.#position;
        }

        #records;

        get records() {
          return this.#records;
        }

        get current() {
          return this.#records.current.uri;
        }

        #initial = history.length;

        get initial() {
          return this.#initial;
        }
        /**
         * Process the browser URI that takes into consideration the routing mode
         *
         * @param {string} uri The internal URI (always starts with '/')
         * @return {string} The URI to be pushed or replaced in the browser considering the routing mode
         * @private
         */


        #processBrowserURI(uri) {
          void this;
          if (uri === void 0) return;

          const {
            routing
          } = require('../routing');

          const RoutingModeEnum = require('../routing').RoutingMode;

          return routing.mode === RoutingModeEnum.Hash ? `#${uri.substr(1)}` : uri;
        }

        #push(uri) {
          this.#records.reset();
          this.#records.push(uri);
          this.#position.save(this.#records.length);
        }

        replaceState(state, title, uri) {
          state = state ? state : {};
          if (typeof state !== 'object') throw new Error('Invalid state parameter');
          this.#records.updateCurrentURI(uri); // The uri in the browser considering the routing mode

          const position = this.#position.value;
          history.replaceState(state, title, this.#processBrowserURI(uri));
          this.#position.save(position);
        }

        pushState(uri, state) {
          if (uri === `${location.pathname}${location.search}${location.hash}`) return;
          state = state ? state : {};
          if (typeof state !== 'object') throw new Error('Invalid state parameter');
          history.pushState(state, null, this.#processBrowserURI(uri));
          this.#push(uri);
        }

        back() {
          const previous = this.#records.previous?.position;
          const current = this.#records.current?.position;
          if (!previous) return;
          history.go(previous - current);
        }

        forward() {
          const following = this.#records.following?.position;
          const current = this.#records.current?.position;
          if (!following) return;
          history.go(following - current);
        }

        constructor(routing, Mode) {
          this.#position = new _position.HistoryPosition();
          this.#records = new _records.HistoryRecords(this.#position);

          if (this.#position.value === void 0) {
            // It is not a refresh of a previously navigated page
            let uri = routing.mode === Mode.Hash ? location.hash.slice(1) : `${location.pathname}${location.search}${location.hash}`;
            this.#push(uri);
          }
        }

      }

      exports.BeyondHistory = BeyondHistory;
    }
  });
  /**********************************
  INTERNAL MODULE: ./history/position
  **********************************/

  ims.set('./history/position', {
    hash: 3613484025,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HistoryPosition = void 0;
      /**
       * The position of the navigation is stored this way:
       *      1. In the state of each page (the history.state object), it is stored the position
       *         in which the page is located. To achieve this, the __beyond_navigation_position property
       *         is added to the state object.
       *      2. In the sessionStorage is stored the current position (__beyond_navigation_position)
       */

      class HistoryPosition {
        check() {
          if (this.value) return true;
          console.error('History state is not defined. ' + 'This happen when state is changed outside the beyond defined navigation flows.');
          return false;
        }
        /**
         * Returns the position from the history.state
         * @returns {number | undefined}
         */


        get value() {
          return history.state?.__beyond_navigation_position;
        }

        save(position) {
          const state = history.state ? history.state : {};
          state.__beyond_navigation_position = position;
          history.replaceState(state, null);
        }

      }

      exports.HistoryPosition = HistoryPosition;
    }
  });
  /*********************************
  INTERNAL MODULE: ./history/records
  *********************************/

  ims.set('./history/records', {
    hash: 3276675750,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HistoryRecords = void 0;

      class HistoryRecords {
        #position;
        #entries = [];

        get entries() {
          return this.#entries.slice();
        }

        get length() {
          return this.#entries.length;
        }

        get current() {
          return this.#entries[this.#position.value - 1];
        }

        get previous() {
          const previous = this.#position.value - 2;
          if (previous < 0) return;
          return this.#entries[previous];
        }

        get following() {
          const following = this.#position.value;
          if (following >= this.#entries.length) return;
          return this.#entries[following];
        }

        constructor(position) {
          this.#position = position;
          let parsed;

          try {
            const stored = sessionStorage.getItem('__beyond_navigation_records');
            parsed = stored ? JSON.parse(stored) : [];
          } catch (exc) {
            console.error('Error loading beyond navigation state', exc instanceof Error ? exc.stack : exc);
            this.#entries = [];
          }

          if (!(parsed instanceof Array)) {
            const warning = 'The beyond navigation data, stored in session store is invalid.';
            console.warn(warning, parsed);
          }

          this.#entries = parsed;
        }
        /**
         * Set the URI always starting with '/' no matter the routing mode (hash or pathname)
         *
         * @param {string} uri
         * @return {string}
         */


        #sanitizeURI(uri) {
          void this;
          if (uri === void 0) return;
          return uri.startsWith('/') ? uri : `/${uri}`;
        }

        get(index) {
          return this.#entries[index];
        }
        /**
         * Push a uri to the records stored in the sessionStorage
         * @param {string} uri
         */


        push(uri) {
          uri = this.#sanitizeURI(uri);
          this.#entries.push({
            uri,
            position: history.length
          });
          this.save();
        }
        /**
         * Reset the list of records from the current position
         * This is required when:
         *      1. The list of browsed pages is greater than one (ex: page1 and page2)
         *      2. The user goes back in the history (ex: to position 1: page1)
         *      3. The user navigates another page (ex: page3)
         *
         * This method is required in step 3, to clean the records from position 1, and after this
         * execution, the navigation flow can push page3
         */


        reset() {
          const position = this.#position.value;
          if (position) return;
          this.#entries = this.#entries.filter(entry => entry.position < history.length);
        }

        updateCurrentURI(uri) {
          const position = this.#position.value;
          uri = this.#sanitizeURI(uri);
          this.#entries[position - 1] = {
            uri,
            position: history.length
          };
          this.save();
        }

        save() {
          sessionStorage.setItem('__beyond_navigation_records', JSON.stringify(this.#entries));
        }

      }

      exports.HistoryRecords = HistoryRecords;
    }
  });
  /*************************
  INTERNAL MODULE: ./routing
  *************************/

  ims.set('./routing', {
    hash: 4234584206,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.routing = exports.RoutingMode = exports.Routing = void 0;

      var _uri2 = require("./uri/uri");

      var _core = require("@beyond-js/kernel/core");

      var _history = require("./history/history");

      const pkg = globalThis.__app_package;
      var RoutingMode;
      exports.RoutingMode = RoutingMode;

      (function (RoutingMode) {
        RoutingMode[RoutingMode["Hash"] = 0] = "Hash";
        RoutingMode[RoutingMode["Pathname"] = 1] = "Pathname";
      })(RoutingMode || (exports.RoutingMode = RoutingMode = {}));

      const serverside = typeof process === 'object';

      class Routing extends _core.Events {
        #mode;

        get mode() {
          return this.#mode;
        }

        #history;

        get history() {
          return this.#history;
        }

        #initialised = false;

        get initialised() {
          return this.#initialised;
        }

        #resolve;
        #ready = new Promise(resolve => this.#resolve = resolve);

        get ready() {
          return this.#ready;
        }

        #uri;

        get uri() {
          return this.#uri;
        }

        missing;
        redirect;

        constructor() {
          super(); // @TODO: move to some kind of initialization / setup

          !serverside && bimport(`${pkg}/config`).then(({
            default: config
          }) => {
            let configured = config.routing?.mode;
            let routingMode = configured === 'hash' ? RoutingMode.Hash : RoutingMode.Pathname;
            location.protocol === 'file:' && (routingMode = RoutingMode.Hash);
            ![0, 1].includes(routingMode) && (routingMode = location.protocol === 'file:' ? RoutingMode.Hash : RoutingMode.Pathname);
            this.#mode = routingMode;
            this.#history = new _history.BeyondHistory(this, RoutingMode);
          });
        }

        #redirect = async uri => {
          if (typeof this.redirect !== 'function') return;
          const redirected = await this.redirect(uri);
          if (!redirected) return;

          if (typeof redirected !== 'string') {
            console.error(`Invalid route value set by custom routing function`, redirected);
            return;
          }

          if (uri.pathname === redirected) return; // Routing function returned the actual route

          this.pushState(redirected);
          return true;
        };

        pushState(uri, state) {
          this.#history.pushState(uri, state);
          this.update().catch(exc => console.error(exc.stack));
        }

        replaceState(state, title, uri) {
          this.#history.replaceState(state, title, uri);
          this.update().catch(exc => console.error(exc.stack));
        } // Avoid to continue the execution on asynchronous calls, when a newest call's been made


        #cancellationToken = new _core.CancellationToken();
        update = async () => {
          const cancellationTokenId = this.#cancellationToken.reset();
          const {
            hash,
            pathname,
            search
          } = location;

          const _uri = this.#mode === RoutingMode.Hash ? `/${hash.slice(1)}` : pathname + search + hash;

          if (this.#uri?.uri === _uri) return;
          const uri = this.#uri = new _uri2.URI(_uri); // Check for uri redirect

          const redirected = await this.#redirect(uri);
          if (!this.#cancellationToken.check(cancellationTokenId)) return;
          if (redirected) return; // The page was redirected to another uri
          // Verify the state of the history registry to check for possible errors

          this.#history && uri.uri !== this.#history.current && console.error(`History current "${this.#history.current}" is not equal to actual uri "${uri.uri}"`);
          this.#initialised ? this.trigger('change') : this.#resolve();
          this.#initialised = true;
        }; // Wait for start.js be completed, as routing.redirect must be set before initialising routing

        #started = false;

        setup() {
          this.#started = true;
          !serverside && this.update().catch(exc => console.error(exc.stack));
        }

        back() {
          this.#history.back();
        }

        forward() {
          this.#history.forward();
        }

      }

      exports.Routing = Routing;
      /*bundle*/

      const routing = new Routing();
      exports.routing = routing;
      globalThis.routing = routing;
      !serverside && (beyond.navigate = (uri, state) => routing.pushState(uri, state));
      !serverside && (beyond.pushState = (uri, state) => routing.pushState(uri, state));
      !serverside && (beyond.back = () => routing.back());
      !serverside && (beyond.forward = () => routing.forward()); // Only on client side

      !serverside && window.addEventListener('popstate', () => routing.update().catch(exc => console.error(exc.stack)));
    }
  });
  /*********************************
  INTERNAL MODULE: ./uri/querystring
  *********************************/

  ims.set('./uri/querystring', {
    hash: 187911159,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.QueryString = void 0;

      class QueryString extends Map {
        constructor(search) {
          super();
          if (search.trim() === '') return;
          search = search.slice(0, 1) === '?' ? search.slice(1) : search;
          const split = search.split('&');

          for (let i = 0; i < split.length; ++i) {
            const param = split[i].split('=', 2);
            const value = param[1] ? decodeURIComponent(param[1].replace(/\+/g, ' ')) : undefined;
            this.set(param[0], value);
          }
        }

      }

      exports.QueryString = QueryString;
    }
  });
  /*************************
  INTERNAL MODULE: ./uri/uri
  *************************/

  ims.set('./uri/uri', {
    hash: 748332499,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.URI = void 0;

      var _querystring = require("./querystring");
      /*bundle*/

      /**
       * Uri parser
       *
       * @param href {string} The href to be parsed
       * @constructor
       */


      class URI {
        #uri;

        get uri() {
          return this.#uri;
        }

        #pathname;

        get pathname() {
          return this.#pathname;
        }

        #search;

        get search() {
          return this.#search;
        }

        #qs;

        get qs() {
          return this.#qs;
        }

        #hash;

        get hash() {
          return this.#hash;
        }

        constructor(uri) {
          this.#uri = uri;
          const [u, hash] = uri.split('#');
          const [pathname, search] = u.split('?');
          this.#pathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
          this.#search = search ? search : '';
          this.#qs = new _querystring.QueryString(this.#search);
          this.#hash = hash;
        }

      }

      exports.URI = URI;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./routing",
    "from": "routing",
    "name": "routing"
  }, {
    "im": "./uri/uri",
    "from": "URI",
    "name": "URI"
  }];
  let routing, URI; // Module exports

  _exports.URI = URI;
  _exports.routing = routing;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'routing') && (_exports.routing = routing = require ? require('./routing').routing : value);
    (require || prop === 'URI') && (_exports.URI = URI = require ? require('./uri/uri').URI : value);
  };

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSTtVQUNKLE9BQU8sS0FBSyxLQUFaO1FBQ0g7O1FBRURNLFlBQVk5QixHQUFaOEIsRUFBdUI7VUFDbkIsS0FBSyxJQUFMLEdBQVk5QixHQUFaO1VBRUEsTUFBTSxDQUFDd0csQ0FBRCxFQUFJaEYsSUFBSixJQUFZeEIsR0FBRyxDQUFDZ0csS0FBSmhHLENBQVUsR0FBVkEsQ0FBbEI7VUFDQSxNQUFNLENBQUNzQixRQUFELEVBQVdDLE1BQVgsSUFBcUJpRixDQUFDLENBQUNSLEtBQUZRLENBQVEsR0FBUkEsQ0FBM0I7VUFFQSxLQUFLLFNBQUwsR0FBaUJsRixRQUFRLENBQUM2QixVQUFUN0IsQ0FBb0IsR0FBcEJBLElBQTJCQSxRQUEzQkEsR0FBc0MsSUFBSUEsUUFBUSxFQUFuRTtVQUNBLEtBQUssT0FBTCxHQUFlQyxNQUFNLEdBQUdBLE1BQUgsR0FBWSxFQUFqQztVQUNBLEtBQUssR0FBTCxHQUFXLElBQUlzRSx3QkFBSixDQUFnQixLQUFLLE9BQXJCLENBQVg7VUFDQSxLQUFLLEtBQUwsR0FBYXJFLElBQWI7UUFDSDs7TUFwQ0kiLCJuYW1lcyI6WyJCZXlvbmRIaXN0b3J5IiwicG9zaXRpb24iLCJyZWNvcmRzIiwiY3VycmVudCIsInVyaSIsImhpc3RvcnkiLCJsZW5ndGgiLCJpbml0aWFsIiwicm91dGluZyIsInJlcXVpcmUiLCJSb3V0aW5nTW9kZUVudW0iLCJSb3V0aW5nTW9kZSIsIm1vZGUiLCJIYXNoIiwic3Vic3RyIiwicmVzZXQiLCJwdXNoIiwic2F2ZSIsInJlcGxhY2VTdGF0ZSIsInN0YXRlIiwidGl0bGUiLCJFcnJvciIsInVwZGF0ZUN1cnJlbnRVUkkiLCJ2YWx1ZSIsInB1c2hTdGF0ZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJoYXNoIiwiYmFjayIsInByZXZpb3VzIiwiZ28iLCJmb3J3YXJkIiwiZm9sbG93aW5nIiwiY29uc3RydWN0b3IiLCJNb2RlIiwiSGlzdG9yeVBvc2l0aW9uIiwiSGlzdG9yeVJlY29yZHMiLCJzbGljZSIsImNoZWNrIiwiY29uc29sZSIsImVycm9yIiwiX19iZXlvbmRfbmF2aWdhdGlvbl9wb3NpdGlvbiIsImVudHJpZXMiLCJwYXJzZWQiLCJzdG9yZWQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJleGMiLCJzdGFjayIsIkFycmF5Iiwid2FybmluZyIsIndhcm4iLCJzdGFydHNXaXRoIiwiZ2V0IiwiaW5kZXgiLCJmaWx0ZXIiLCJlbnRyeSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJwa2ciLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsInNlcnZlcnNpZGUiLCJwcm9jZXNzIiwiUm91dGluZyIsIkV2ZW50cyIsImluaXRpYWxpc2VkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWFkeSIsIm1pc3NpbmciLCJyZWRpcmVjdCIsImJpbXBvcnQiLCJ0aGVuIiwiZGVmYXVsdCIsImNvbmZpZyIsImNvbmZpZ3VyZWQiLCJyb3V0aW5nTW9kZSIsIlBhdGhuYW1lIiwicHJvdG9jb2wiLCJpbmNsdWRlcyIsInJlZGlyZWN0ZWQiLCJ1cGRhdGUiLCJjYXRjaCIsIkNhbmNlbGxhdGlvblRva2VuIiwiY2FuY2VsbGF0aW9uVG9rZW5JZCIsIl91cmkiLCJVUkkiLCJ0cmlnZ2VyIiwic2V0dXAiLCJiZXlvbmQiLCJuYXZpZ2F0ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJRdWVyeVN0cmluZyIsIk1hcCIsInRyaW0iLCJzcGxpdCIsImkiLCJwYXJhbSIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJ1bmRlZmluZWQiLCJzZXQiLCJxcyIsInUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImhpc3RvcnkudHMiLCJwb3NpdGlvbi50cyIsInJlY29yZHMudHMiLCJyb3V0aW5nLnRzIiwicXVlcnlzdHJpbmcudHMiLCJ1cmkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19
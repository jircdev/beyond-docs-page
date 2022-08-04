define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ssr = _exports.hmr = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/widgets/layout",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /**************************
  INTERNAL MODULE: ./children
  **************************/

  ims.set('./children', {
    hash: 297697351,
    creator: function (require, exports) {
      "use strict";

      var _render = require("@beyond-js/widgets/render");

      var _ssr = require("./ssr");

      const pkg = globalThis.__app_package;
      let manager;
      customElements.define('beyond-layout-children', class extends HTMLElement {
        #layout;
        #active;

        connectedCallback() {
          this.attachShadow({
            mode: 'open'
          });

          const managed = () => {
            const start = () => this.#start().catch(exc => console.error(exc.stack));

            manager.initialised ? start() : manager.ready.then(start);
          }; // If the manager is already loaded, render without ssr


          if (manager) return managed(); // While the manager is not loaded, try to render from ssr

          _ssr.ssr.page ? this.#onssr() : _ssr.ssr.addEventListener('received', this.#onssr);
          const promises = [];
          promises.push(bimport('@beyond-js/widgets/routing'));
          promises.push(bimport('@beyond-js/kernel/core'));
          promises.push(bimport(`${pkg}/start`));
          Promise.all(promises).then(() => {
            const routing = require('@beyond-js/widgets/routing');

            ({
              manager
            } = routing);
            managed();
          }).catch(exc => console.log(exc.stack));
        }
        /**
         * The widget container of the current beyond-layout-children container is null if an error is detected,
         * and the DOM document when there is no project layout configured in the project.json
         *
         * @return {{container?: string, error?: string}}
         * @private
         */


        #container;

        get container() {
          if (this.#container !== void 0) return this.#container;

          const container = (() => {
            let parent = this;

            while (true) {
              const root = parent.getRootNode();
              if (root === document) return root;
              parent = root.host;
              if (_render.widgets.instances.has(parent)) return parent;
            }
          })();

          if (!container) {
            console.error(`Widget container of beyond-layout-children not found`);
            return this.#container = null;
          }

          return this.#container = container;
        }

        #onssr = () => {
          _ssr.ssr.removeEventListener('received', this.#onssr);

          const {
            container
          } = this;
          if (container === null) return; // The index in the hierarchy that must be appended to the shadowRoot of the beyond-layout-children

          const {
            element,
            error
          } = (() => {
            const {
              hierarchy
            } = _ssr.ssr; // container is undefined when there is no project layout, and the beyond-layout-children rootNode
            // is the DOM document

            if (container === document) return {
              element: hierarchy[0]
            };
            const {
              localName
            } = container;
            const index = hierarchy.indexOf(localName);
            if (index === -1) return {
              error: `Container widget of beyond-layout-children "${localName}" not found in ssr hierarchy`
            };
            if (index === hierarchy.length - 1) return {
              error: `Container widget of beyond-layout-children "${localName}" is the page, not a layout`
            };
            return {
              element: hierarchy[index + 1]
            };
          })();

          if (error) {
            console.error(error, this);
            return;
          }

          this.shadowRoot.appendChild(document.createElement(element));
        };
        #render = () => {
          this.#layout.children.forEach(child => {
            const {
              children
            } = this.shadowRoot;
            let element = [...children].find(element => element.getAttribute('data-child-id') === child.id); // Create the HTMLElement of the child if it was not already created

            if (!element) {
              element = document.createElement(child.element);
              element.setAttribute('data-child-id', child.id);
              this.shadowRoot.append(element);
            } // The show and hide methods are defined in the page controller


            const active = this.#layout.active === child;
            const controller = element.controller;

            if (active && element !== this.#active) {
              this.#active = element;

              const show = () => {
                element.removeEventListener('controller.initialised', show);
                if (element !== this.#active) return;
                const controller = element.controller;

                if (!controller) {
                  throw new Error(`Controller of element widget "${child.element}" is undefined`);
                }

                this.#active === element && controller.show?.();
              };

              controller ? controller.show?.() : element.addEventListener('controller.initialised', show);
            } else if (!element.hidden && !active) {
              controller?.hide?.();
            }

            element.hidden = !active;
          });
        }; // Check if there are ssr elements that must be hydrated (set the child id)

        #hydrate() {
          const {
            children
          } = this.shadowRoot;
          const layout = this.#layout;
          if (!children.length) return;

          if (children.length > 1) {
            console.error('Only one child was expected on beyond-layout-children start', this);
            return;
          }

          children[0].setAttribute('data-child-id', [...layout.children.keys()][0]);
        }

        async #start() {
          _ssr.ssr.removeEventListener('received', this.#onssr);

          if (this.container === null) return;

          const done = layout => {
            this.#layout = layout;
            this.#hydrate();
            this.#layout.on('change', this.#render);
            this.#render();
          }; // When there is no layout specified in the project.json, then the container is the DOM document


          if (this.container === document) return done(manager.main); // Check if the current beyond-layout-children is the main layout specified in the project.json

          const {
            localName
          } = this.container;
          if (localName === manager.main.element) return done(manager.main); // Look for the layout

          if (!manager.layouts.has(localName)) {
            console.error(`Layout "${localName}" not found`, [...manager.layouts], manager);
            return;
          }

          done(manager.layouts.get(localName));
        }

      });
    }
  });
  /*********************
  INTERNAL MODULE: ./ssr
  *********************/

  ims.set('./ssr', {
    hash: 2390596202,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ssr = void 0;
      /*bundle*/

      const ssr = new class extends EventTarget {
        // The main layout
        #main;

        get main() {
          return this.#main;
        } // The widget name of the page


        #page;

        get page() {
          return this.#page;
        } // The parent widgets of the page


        #layouts;

        get layouts() {
          return this.#layouts;
        } // The hierarchy of layouts and page considering the main layout, the parent widgets of the page
        // and the page itself


        #hierarchy = [];

        get hierarchy() {
          return this.#hierarchy;
        }

        data(main, page) {
          this.#main = main;
          this.#page = page.element;
          this.#layouts = page.parents;
          main && this.#hierarchy.push(main);
          page.parents && (this.#hierarchy = this.#hierarchy.concat(page.parents));
          this.#hierarchy.push(page.element);
          const event = new Event('received');
          this.dispatchEvent(event);
        }

      }();
      exports.ssr = ssr;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./ssr",
    "from": "ssr",
    "name": "ssr"
  }];
  let ssr; // Module exports

  _exports.ssr = ssr;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'ssr') && (_exports.ssr = ssr = require ? require('./ssr').ssr : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBTCxDQUFnQjVDLElBQWhCLENBQXFCNEMsSUFBckIsQ0FBUkE7VUFDQS9DLElBQUksQ0FBQ29ELE9BQUxwRCxLQUFpQixLQUFLLFVBQUwsR0FBa0IsS0FBSyxVQUFMLENBQWdCcUQsTUFBaEIsQ0FBdUJyRCxJQUFJLENBQUNvRCxPQUE1QixDQUFuQ3BEO1VBQ0EsS0FBSyxVQUFMLENBQWdCRyxJQUFoQixDQUFxQkgsSUFBSSxDQUFDb0IsT0FBMUI7VUFFQSxNQUFNa0MsS0FBSyxHQUFHLElBQUlDLEtBQUosQ0FBVSxVQUFWLENBQWQ7VUFDQSxLQUFLQyxhQUFMLENBQW1CRixLQUFuQjtRQUNIOztNQXJDc0QsQ0FBN0IsRUFBWiIsIm5hbWVzIjpbInBrZyIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwibWFuYWdlciIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiSFRNTEVsZW1lbnQiLCJjb25uZWN0ZWRDYWxsYmFjayIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJtYW5hZ2VkIiwic3RhcnQiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiaW5pdGlhbGlzZWQiLCJyZWFkeSIsInRoZW4iLCJzc3IiLCJwYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb21pc2VzIiwicHVzaCIsImJpbXBvcnQiLCJQcm9taXNlIiwiYWxsIiwicm91dGluZyIsInJlcXVpcmUiLCJsb2ciLCJjb250YWluZXIiLCJwYXJlbnQiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJkb2N1bWVudCIsImhvc3QiLCJ3aWRnZXRzIiwiaW5zdGFuY2VzIiwiaGFzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVsZW1lbnQiLCJoaWVyYXJjaHkiLCJsb2NhbE5hbWUiLCJpbmRleCIsImluZGV4T2YiLCJsZW5ndGgiLCJzaGFkb3dSb290IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJmaW5kIiwiZ2V0QXR0cmlidXRlIiwiaWQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmQiLCJhY3RpdmUiLCJjb250cm9sbGVyIiwic2hvdyIsIkVycm9yIiwiaGlkZGVuIiwiaGlkZSIsImxheW91dCIsImtleXMiLCJkb25lIiwib24iLCJtYWluIiwibGF5b3V0cyIsImdldCIsIkV2ZW50VGFyZ2V0IiwiZGF0YSIsInBhcmVudHMiLCJjb25jYXQiLCJldmVudCIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY2hpbGRyZW4udHMiLCJzc3IudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==
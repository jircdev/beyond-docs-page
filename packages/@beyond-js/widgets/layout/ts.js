define(["exports", "@beyond-js/widgets/render/ts", "@beyond-js/kernel/bundle/ts"], function (_exports2, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.ssr = _exports2.hmr = void 0;
  const amd_require = require;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond-js/widgets/layout/ts").package();

  externals.register(new Map([]));
  const ims = new Map();
  /**************************
  INTERNAL MODULE: ./children
  **************************/

  ims.set('./children', {
    hash: 3939728220,
    creator: function (require, exports) {
      "use strict";

      var _ts = require("@beyond-js/widgets/render/ts");

      var _ssr = require("./ssr");

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
          const dependencies = ['@beyond-js/widgets/routing/ts', '@beyond-js/kernel/core/ts', `${__beyond_config.application.package}/start`];
          amd_require(dependencies, r => {
            manager = r.manager;
            managed();
          });
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
              if (_ts.widgets.instances.has(parent)) return parent;
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
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.ssr = require('./ssr').ssr;
  };

  let ssr; // Module exports

  _exports2.ssr = ssr;

  __pkg.exports.process = function (require) {
    _exports2.ssr = ssr = require('./ssr').ssr;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});
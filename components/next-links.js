System.register(["@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/styles", "react@18.2.0", "@beyond/ui@1.0.0/link", "@beyond/docs@1/store"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, NextLinks, __beyond_pkg, hmr;
  _export("NextLinks", void 0);
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_beyondJsKernel010Styles) {
      dependency_1 = _beyondJsKernel010Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_beyondUi100Link) {
      dependency_3 = _beyondUi100Link;
    }, function (_beyondDocs1Store) {
      dependency_4 = _beyondDocs1Store;
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
          "vspecifier": "@beyond/docs@1/components/next-links"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond/ui/link', dependency_3], ['@beyond/docs/store', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs@1/components/next-links');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 2580066343,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NextLinks = NextLinks;
          var React = require("react");
          var _link = require("@beyond/ui/link");
          var _store = require("@beyond/docs/store");
          const Item = ({
            href,
            texts
          }) => {
            return React.createElement("li", null, React.createElement(_link.Link, {
              href: href
            }, texts[href]));
          };
          /*bundle*/
          function NextLinks({
            items
          }) {
            const [ready, texts] = (0, _store.useTexts)('@beyond/docs/layout/menu');
            if (!ready) return null;
            const output = items.map((href, i) => React.createElement(Item, {
              texts: texts,
              key: `${href}.${i}`,
              href: href
            }));
            // items
            return React.createElement("div", {
              className: "next__content link__content"
            }, React.createElement("ul", null, output));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "NextLinks",
        "name": "NextLinks"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'NextLinks') && _export("NextLinks", NextLinks = require ? require('./control').NextLinks : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBQ0E7VUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztZQUFDQyxJQUFJO1lBQUVDO1VBQUssQ0FBQyxLQUFJO1lBQzNCLE9BQU9DLGdDQUFJQSxvQkFBQ0MsVUFBSTtjQUFDSCxJQUFJLEVBQUVBO1lBQUksR0FBR0MsS0FBSyxDQUFDRCxJQUFJLENBQUMsQ0FBUSxDQUFLO1VBQzFELENBQUM7VUFFTTtVQUFVLFNBQVVJLFNBQVMsQ0FBQztZQUFDQztVQUFLLENBQUM7WUFFeEMsTUFBTSxDQUFDQyxLQUFLLEVBQUVMLEtBQUssQ0FBQyxHQUFHLG1CQUFRLEVBQUMsMEJBQTBCLENBQUM7WUFDM0QsSUFBSSxDQUFDSyxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBQ3ZCLE1BQU1DLE1BQU0sR0FBR0YsS0FBSyxDQUFDRyxHQUFHLENBQUMsQ0FBQ1IsSUFBSSxFQUFFUyxDQUFDLEtBQUtQLG9CQUFDSCxJQUFJO2NBQUNFLEtBQUssRUFBRUEsS0FBSztjQUFFUyxHQUFHLEVBQUUsR0FBR1YsSUFBSSxJQUFJUyxDQUFDLEVBQUU7Y0FBRVQsSUFBSSxFQUFFQTtZQUFJLEVBQUcsQ0FBQztZQUM3RjtZQUNBLE9BQ0lFO2NBQUtTLFNBQVMsRUFBQztZQUE2QixHQUN4Q1QsZ0NBQ0tLLE1BQU0sQ0FDTixDQUNIO1VBRWQiLCJuYW1lcyI6WyJJdGVtIiwiaHJlZiIsInRleHRzIiwiUmVhY3QiLCJMaW5rIiwiTmV4dExpbmtzIiwiaXRlbXMiLCJyZWFkeSIsIm91dHB1dCIsIm1hcCIsImkiLCJrZXkiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb21wb25lbnRzL25leHQtbGlua3MvY29kZS90cy9jb250cm9sLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
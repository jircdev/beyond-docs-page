define(["exports", "react", "@beyond/ui/link/code", "@beyond/ui/image/code", "@beyond/ui/modal/code", "@beyond-js/kernel/bundle/ts"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.TypeProperty = _exports2.ObjectProperty = _exports2.Notice = _exports2.ModalImage = _exports2.Loading = _exports2.List = _exports2.CHtml = _exports2.BeyondName = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/components/html/code").package();

  externals.register(new Map([["react", dependency_0]]));

  __pkg.dependencies.update(new Set(["@beyond/ui/link/code", "@beyond/ui/image/code", "@beyond/ui/modal/code"]));

  const ims = new Map();
  /************************
  INTERNAL MODULE: ./beyond
  ************************/

  ims.set('./beyond', {
    hash: 3491118623,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BeyondName = BeyondName;

      var React = require("react");
      /*bundle*/


      function BeyondName() {
        return React.createElement(React.Fragment, null, React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"));
      }
    }
  });
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 1628279249,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CHtml = CHtml;
      exports.List = List;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");
      /*bundle*/


      function CHtml({
        value,
        children
      }) {
        const data = children ?? value;
        return React.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: data
          }
        });
      }
      /*bundle*/


      function List({
        items
      }) {
        return React.createElement("ul", null, items.map((item, index) => {
          if (Array.isArray(item)) {
            const [label, href] = item;
            return React.createElement("li", {
              key: `${label}.${index}`
            }, React.createElement(_code.Link, {
              href: href
            }, label));
          }

          return React.createElement("li", {
            key: index,
            dangerouslySetInnerHTML: {
              __html: item
            }
          });
        }));
      }
    }
  });
  /*************************
  INTERNAL MODULE: ./loading
  *************************/

  ims.set('./loading', {
    hash: 458825452,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Loading = Loading;

      var React = require("react");
      /*bundle*/


      function Loading() {
        return React.createElement(React.Fragment, null, React.createElement("h4", null, "Loading..."));
      }
    }
  });
  /*****************************
  INTERNAL MODULE: ./modal-image
  *****************************/

  ims.set('./modal-image', {
    hash: 3335186394,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ModalImage = ModalImage;

      var React = require("react");

      var _code = require("@beyond/ui/image/code");

      var _code2 = require("@beyond/ui/modal/code");
      /*bundle*/


      function ModalImage({
        src,
        alt,
        className
      }) {
        const [open, toggle] = React.useState(false);
        const cls = `image__modal ${className ? ` ${className}` : ''}`;
        return React.createElement(React.Fragment, null, React.createElement(_code.BeyondImage, {
          alt: alt,
          src: src,
          onClick: () => toggle(!open)
        }), open && React.createElement(_code2.BeyondModal, {
          className: cls,
          show: true
        }, React.createElement(_code.BeyondImage, {
          alt: alt,
          src: src
        })));
      }
    }
  });
  /************************
  INTERNAL MODULE: ./notice
  ************************/

  ims.set('./notice', {
    hash: 3708539639,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Notice = Notice;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");
      /*bundle*/


      function Notice({
        text,
        link: [href, link]
      }) {
        return React.createElement("div", {
          className: "block__note"
        }, text, " ", React.createElement(_code.Link, {
          href: href
        }, link));
      }
    }
  });
  /*******************************
  INTERNAL MODULE: ./type-property
  *******************************/

  ims.set('./type-property', {
    hash: 1296128310,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ObjectProperty = ObjectProperty;
      exports.TypeProperty = TypeProperty;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");
      /*bundle*/


      function TypeProperty({
        children,
        type,
        href = false,
        optional = false
      }) {
        const output = href ? React.createElement(_code.Link, {
          href: href
        }, `${type}`, " ") : `${type} `;
        return React.createElement(React.Fragment, null, children && React.createElement("strong", null, children), " ", React.createElement("span", {
          className: "type__property"
        }, output), optional && React.createElement("span", {
          className: "type__optional"
        }, ` optional`, " "), ":");
      }
      /*bundle*/


      function ObjectProperty({
        children,
        type,
        href = undefined,
        optional = undefined
      }) {
        return React.createElement(React.Fragment, null, React.createElement("strong", null, children), " ", React.createElement(TypeProperty, {
          optional: true,
          type: type,
          href: href
        }));
      }
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.BeyondName = require('./beyond').BeyondName;
    _exports.CHtml = require('./control').CHtml;
    _exports.List = require('./control').List;
    _exports.Loading = require('./loading').Loading;
    _exports.ModalImage = require('./modal-image').ModalImage;
    _exports.Notice = require('./notice').Notice;
    _exports.TypeProperty = require('./type-property').TypeProperty;
    _exports.ObjectProperty = require('./type-property').ObjectProperty;
  };

  let BeyondName, CHtml, List, Loading, ModalImage, Notice, TypeProperty, ObjectProperty; // Module exports

  _exports2.ObjectProperty = ObjectProperty;
  _exports2.TypeProperty = TypeProperty;
  _exports2.Notice = Notice;
  _exports2.ModalImage = ModalImage;
  _exports2.Loading = Loading;
  _exports2.List = List;
  _exports2.CHtml = CHtml;
  _exports2.BeyondName = BeyondName;

  __pkg.exports.process = function (require) {
    _exports2.BeyondName = BeyondName = require('./beyond').BeyondName;
    _exports2.CHtml = CHtml = require('./control').CHtml;
    _exports2.List = List = require('./control').List;
    _exports2.Loading = Loading = require('./loading').Loading;
    _exports2.ModalImage = ModalImage = require('./modal-image').ModalImage;
    _exports2.Notice = Notice = require('./notice').Notice;
    _exports2.TypeProperty = TypeProperty = require('./type-property').TypeProperty;
    _exports2.ObjectProperty = ObjectProperty = require('./type-property').ObjectProperty;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});
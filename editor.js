define(["exports", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "slate-react", "slate", "react", "@beyond-js/react-widgets/controllers", "@beyond/docs/models/contents", "@beyond-js/kernel/styles"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Widget = _exports.Controller = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/editor",
    "bundle": "editor"
  }).package();

  ;
  externals.register(new Map([["slate-react", dependency_2], ["slate", dependency_3], ["react", dependency_4]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/models/contents"]));

  require('@beyond-js/widgets/render').widgets.register([{
    "name": "editor-page",
    "id": "@beyond/docs/editor",
    "is": "page",
    "route": "/editor"
  }]);

  require('@beyond-js/kernel/styles').styles.register('@beyond/docs/editor');

  const ims = new Map();
  /**********************************
  INTERNAL MODULE: ./actions/add-link
  **********************************/

  ims.set('./actions/add-link', {
    hash: 3982620758,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createParagraphNode = exports.createLinkNode = void 0;
      exports.insertLink = insertLink;
      exports.removeLink = void 0;

      var _slateReact = require("slate-react");

      var _slate = require("slate");

      const createParagraphNode = (children = [{
        text: ""
      }]) => ({
        type: "paragraph",
        children
      });

      exports.createParagraphNode = createParagraphNode;

      const createLinkNode = (href, text) => ({
        type: "link",
        href,
        children: [{
          text
        }]
      });

      exports.createLinkNode = createLinkNode;

      const removeLink = (editor, opts = {}) => {
        _slate.Transforms.unwrapNodes(editor, { ...opts,
          match: n => !_slate.Editor.isEditor(n) && Element.isElement(n) && n.type === "link"
        });
      };

      exports.removeLink = removeLink;

      function insertLink(editor, url) {
        if (!url) return;
        const {
          selection
        } = editor;
        const link = createLinkNode(url, 'new link');

        _slateReact.ReactEditor.focus(editor);

        if (!selection) {
          _slate.Transforms.insertNodes(editor, createParagraphNode([link]));

          return;
        }

        const [parentNode, parentPath] = _slate.Editor.parent(editor, selection.focus?.path);

        if (parentNode.type === "link") {
          removeLink(editor);
        }

        if (editor.isVoid(parentNode)) {
          // Insert the new link after the void node
          _slate.Transforms.insertNodes(editor, createParagraphNode([link]), {
            at: _slate.Path.next(parentPath),
            select: true
          });

          return;
        }

        if (_slate.Range.isCollapsed(selection)) {
          // Insert the new link in our last known locatio
          return _slate.Transforms.insertNodes(editor, link, {
            select: true
          });
        } // Wrap the currently selected range of text into a Link


        _slate.Transforms.wrapNodes(editor, link, {
          split: true
        });

        _slate.Transforms.collapse(editor, {
          edge: "end"
        });
      }
    }
  });
  /************************************
  INTERNAL MODULE: ./actions/load-image
  ************************************/

  ims.set('./actions/load-image', {
    hash: 2616347421,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadImage = loadImage;

      var _slateReact = require("slate-react");

      var _slate = require("slate");

      const createImageNode = (alt, src) => ({
        type: "img",
        alt,
        src,
        children: [{
          text: ""
        }]
      });

      function loadImage(editor, url) {
        const {
          selection
        } = editor;
        const image = createImageNode("Image", url);

        _slateReact.ReactEditor.focus(editor);

        if (!!selection) {
          const [parentNode, parentPath] = _slate.Editor.parent(editor, selection.focus?.path);

          if (editor.isVoid(parentNode) || _slate.Node.string(parentNode).length) {
            // Insert the new image node after the void node or a node with content
            _slate.Transforms.insertNodes(editor, image, {
              at: _slate.Path.next(parentPath),
              select: true
            });
          } else {
            // If the node is empty, replace it instead
            _slate.Transforms.removeNodes(editor, {
              at: parentPath
            });

            _slate.Transforms.insertNodes(editor, image, {
              at: parentPath,
              select: true
            });
          }
        } else {
          // Insert the new image node at the bottom of the Editor when selection
          // is falsey
          _slate.Transforms.insertNodes(editor, image, {
            select: true
          });
        }
      }
    }
  });
  /***************************************
  INTERNAL MODULE: ./components/code-block
  ***************************************/

  ims.set('./components/code-block', {
    hash: 609086643,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CodeBlock = CodeBlock;

      var React = require("react");

      function CodeBlock(props) {
        return React.createElement("pre", { ...props.attributes
        }, React.createElement("code", null, props.children));
      }
    }
  });
  /************************************
  INTERNAL MODULE: ./components/default
  ************************************/

  ims.set('./components/default', {
    hash: 76960024,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DefaultElement = void 0;

      var React = require("react");

      const DefaultElement = props => {
        return React.createElement("p", { ...props.attributes
        }, props.children);
      };

      exports.DefaultElement = DefaultElement;
    }
  });
  /**************************************
  INTERNAL MODULE: ./components/functions
  **************************************/

  ims.set('./components/functions', {
    hash: 747232234,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CustomEditor = void 0;

      var _slate = require("slate");

      const CustomEditor = {
        isBoldMarkActive(editor) {
          const [match] = _slate.Editor.nodes(editor, {
            match: n => n.bold === true,
            universal: true
          });

          return !!match;
        },

        isCodeBlockActive(editor) {
          const [match] = _slate.Editor.nodes(editor, {
            match: n => n.type === 'code'
          });

          return !!match;
        },

        toggleBoldMark(editor) {
          const isActive = CustomEditor.isBoldMarkActive(editor);

          _slate.Transforms.setNodes(editor, {
            bold: isActive ? null : true
          }, {
            match: n => _slate.Text.isText(n),
            split: true
          });
        },

        toggleCodeBlock(editor) {
          const isActive = CustomEditor.isCodeBlockActive(editor);

          _slate.Transforms.setNodes(editor, {
            type: isActive ? null : 'code'
          }, {
            match: n => _slate.Editor.isBlock(editor, n)
          });
        }

      };
      exports.CustomEditor = CustomEditor;
    }
  });
  /**********************************
  INTERNAL MODULE: ./components/image
  **********************************/

  ims.set('./components/image', {
    hash: 2025666612,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Image = Image;

      var React = require("react");

      function Image({
        attributes,
        element,
        children
      }) {
        return React.createElement("figure", { ...attributes
        }, React.createElement("img", {
          src: element.src,
          alt: "element.alt"
        }), children);
      }
    }
  });
  /*********************************
  INTERNAL MODULE: ./components/leaf
  *********************************/

  ims.set('./components/leaf', {
    hash: 573008225,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Leaf = void 0;

      var React = require("react");

      const Leaf = ({
        attributes,
        children,
        leaf
      }) => {
        if (leaf.bold) {
          children = React.createElement("strong", null, children);
        }

        if (leaf.code) {
          children = React.createElement("code", null, children);
        }

        if (leaf.italic) {
          children = React.createElement("em", null, children);
        }

        if (leaf.underline) {
          children = React.createElement("u", null, children);
        }

        if (leaf.inlineCode) {
          children = React.createElement("pre", null, children);
        }

        return React.createElement("span", { ...attributes
        }, children);
      };

      exports.Leaf = Leaf;
    }
  });
  /*********************************
  INTERNAL MODULE: ./components/link
  *********************************/

  ims.set('./components/link', {
    hash: 1193168384,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Link = Link;

      var React = require("react");

      function Link(props) {
        const onClick = event => {
          event.preventDefault();
        };

        const {
          children
        } = props;
        return React.createElement("a", {
          href: "#"
        }, children);
      }
    }
  });
  /***************************************
  INTERNAL MODULE: ./controller/controller
  ***************************************/

  ims.set('./controller/controller', {
    hash: 917680533,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _controllers = require("@beyond-js/react-widgets/controllers");

      var _contents = require("@beyond/docs/models/contents");
      /*bundle*/


      class Controller extends _controllers.PageReactWidgetController {
        constructor(props) {
          super(props);
          const model = new _contents.BridgeModel();
        }

        async fetch() {}

      }

      exports.Controller = Controller;
    }
  });
  /************************
  INTERNAL MODULE: ./header
  ************************/

  ims.set('./header', {
    hash: 638721065,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HeaderEditor = HeaderEditor;

      var _functions = require("./components/functions");

      var React = require("react");

      var _loadImage = require("./actions/load-image");

      var _addLink = require("./actions/add-link");

      function HeaderEditor({
        editor
      }) {
        const actions = {
          link: _addLink.insertLink,
          image: _loadImage.loadImage
        };

        const handler = event => {
          const target = event.currentTarget;
          const url = prompt('URL');
          actions[target.dataset.action](editor, url);
        };

        return React.createElement("header", null, React.createElement("button", {
          onMouseDown: event => {
            event.preventDefault();

            _functions.CustomEditor.toggleBoldMark(editor);
          }
        }, "Bold"), React.createElement("button", {
          onMouseDown: event => {
            event.preventDefault();

            _functions.CustomEditor.toggleCodeBlock(editor);
          }
        }, "Code Block"), React.createElement("button", {
          "data-action": "image",
          onClick: handler
        }, "Image"), React.createElement("button", {
          "data-action": "link",
          onClick: handler
        }, "Link"));
      }
    }
  });
  /**********************
  INTERNAL MODULE: ./page
  **********************/

  ims.set('./page', {
    hash: 1665923359,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Widget = Widget;

      var React = require("react");

      var _serialize = require("./utils/serialize");

      var _slate = require("slate");

      var _hotkeys = require("./utils/hotkeys");

      var _slateReact = require("slate-react");

      var _header = require("./header");

      var _title = require("./title");

      var _render = require("./utils/render");
      /*bundle*/
      // Import the Slate components and React plugin.
      // TypeScript users only add this code


      function Widget(props) {
        const content = JSON.parse(localStorage.getItem('content')) || [{
          type: 'paragraph',
          children: [{
            text: 'A line of text in a paragraph.'
          }]
        }];
        const initialValue = content;
        const [value, setValue] = (0, React.useState)(initialValue);
        const [editor] = (0, React.useState)(() => (0, _slateReact.withReact)((0, _slate.createEditor)()));

        const onChange = newValue => {
          const isAstChange = editor.operations.some(op => {
            return 'set_selection' !== op.type;
          });

          if (isAstChange) {
            // Save the value to Local Storage.
            console.log((0, _serialize.serialize)(value));
            const content = JSON.stringify(value);
            localStorage.setItem('__content', content);
          }

          setValue(newValue);
        };

        const HOTKEYS = {
          'mod+b': 'bold',
          'mod+i': 'italic',
          'mod+u': 'underline',
          'mod+`': 'code',
          'mod+shift': 'inlineCode'
        };

        const isMarkActive = (editor, format) => {
          const marks = _slate.Editor.marks(editor);

          return marks ? marks[format] === true : false;
        };

        const toggleMark = (editor, format) => {
          const isActive = isMarkActive(editor, format);
          if (isActive) _slate.Editor.removeMark(editor, format);else _slate.Editor.addMark(editor, format, true);
        };

        const onKeyDown = event => {
          if (!event.ctrlKey) {
            return;
          }

          for (const hotkey in HOTKEYS) {
            if ((0, _hotkeys.isHotkey)(hotkey, event)) {
              event.preventDefault();
              const mark = HOTKEYS[hotkey];
              toggleMark(editor, mark);
            }
          }
        };

        const renderElement = (0, React.useCallback)(_render.onRenderElement, []); // Define a leaf rendering function that is memoized with `useCallback`.

        const renderLeaf = (0, React.useCallback)(_render.onReanderLeaf, []);
        return React.createElement("div", {
          className: "page-container"
        }, React.createElement(_title.TitleEditor, null), React.createElement(_header.HeaderEditor, {
          editor: editor
        }), React.createElement(_slateReact.Slate, {
          editor: editor,
          value: value,
          onChange: onChange
        }, React.createElement(_slateReact.Editable, {
          renderLeaf: renderLeaf,
          renderElement: renderElement,
          onKeyDown: onKeyDown,
          className: "beyond-editor"
        })));
      }
    }
  });
  /***********************
  INTERNAL MODULE: ./title
  ***********************/

  ims.set('./title', {
    hash: 3943764264,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TitleEditor = TitleEditor;

      var _slateReact = require("slate-react");

      var React = require("react");

      var _slate = require("slate");

      function TitleEditor() {
        const content = JSON.parse(localStorage.getItem('content')) || [{
          type: 'h1',
          children: [{
            text: ''
          }]
        }];

        const onChange = newValue => {
          setValue(newValue);
        };

        const initialValue = content;
        const [value, setValue] = (0, React.useState)(initialValue);
        const [editor] = (0, React.useState)(() => (0, _slateReact.withReact)((0, _slate.createEditor)()));
        const renderLeaf = (0, React.useCallback)(({
          attributes,
          children
        }) => React.createElement("h1", { ...attributes
        }, children), []);
        return React.createElement(React.Fragment, null, React.createElement(_slateReact.Slate, {
          editor: editor,
          value: value,
          onChange: onChange
        }, React.createElement(_slateReact.Editable, {
          renderLeaf: renderLeaf,
          className: "beyond-title-editor"
        })));
      }
    }
  });
  /***********************************
  INTERNAL MODULE: ./utils/escape-html
  ***********************************/

  ims.set('./utils/escape-html', {
    hash: 1428005928,
    creator: function (require, exports) {
      /*!
       * escape-html
       * Copyright(c) 2012-2013 TJ Holowaychuk
       * Copyright(c) 2015 Andreas Lubbe
       * Copyright(c) 2015 Tiancheng "Timothy" Gu
       * MIT Licensed
       */
      'use strict';
      /**
       * Module variables.
       * @private
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.escapeHtml = escapeHtml;
      var matchHtmlRegExp = /["'&<>]/;
      /**
       * Escape special characters in the given string of html.
       *
       * @param  {string} string The string to escape for inserting into HTML
       * @return {string}
       * @public
       */

      function escapeHtml(string) {
        var str = '' + string;
        var match = matchHtmlRegExp.exec(str);

        if (!match) {
          return str;
        }

        var escape;
        var html = '';
        var index = 0;
        var lastIndex = 0;

        for (index = match.index; index < str.length; index++) {
          switch (str.charCodeAt(index)) {
            case 34:
              // "
              escape = '&quot;';
              break;

            case 38:
              // &
              escape = '&amp;';
              break;

            case 39:
              // '
              escape = '&#39;';
              break;

            case 60:
              // <
              escape = '&lt;';
              break;

            case 62:
              // >
              escape = '&gt;';
              break;

            default:
              continue;
          }

          if (lastIndex !== index) {
            html += str.substring(lastIndex, index);
          }

          lastIndex = index + 1;
          html += escape;
        }

        return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
      }
    }
  });
  /*******************************
  INTERNAL MODULE: ./utils/hotkeys
  *******************************/

  ims.set('./utils/hotkeys', {
    hash: 3640514213,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.compareHotkey = compareHotkey;
      exports.isCodeHotkey = isCodeHotkey;
      exports.isHotkey = isHotkey;
      exports.isKeyHotkey = isKeyHotkey;
      exports.parseHotkey = parseHotkey;
      exports.toKeyCode = toKeyCode;
      exports.toKeyName = toKeyName;
      /**
       * Constants.
       */

      const IS_MAC = typeof window != 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
      const MODIFIERS = {
        alt: 'altKey',
        control: 'ctrlKey',
        meta: 'metaKey',
        shift: 'shiftKey'
      };
      const ALIASES = {
        add: '+',
        break: 'pause',
        cmd: 'meta',
        command: 'meta',
        ctl: 'control',
        ctrl: 'control',
        del: 'delete',
        down: 'arrowdown',
        esc: 'escape',
        ins: 'insert',
        left: 'arrowleft',
        mod: IS_MAC ? 'meta' : 'control',
        opt: 'alt',
        option: 'alt',
        return: 'enter',
        right: 'arrowright',
        space: ' ',
        spacebar: ' ',
        up: 'arrowup',
        win: 'meta',
        windows: 'meta'
      };
      const CODES = {
        backspace: 8,
        tab: 9,
        enter: 13,
        shift: 16,
        control: 17,
        alt: 18,
        pause: 19,
        capslock: 20,
        escape: 27,
        ' ': 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        arrowleft: 37,
        arrowup: 38,
        arrowright: 39,
        arrowdown: 40,
        insert: 45,
        delete: 46,
        meta: 91,
        numlock: 144,
        scrolllock: 145,
        ';': 186,
        '=': 187,
        ',': 188,
        '-': 189,
        '.': 190,
        '/': 191,
        '`': 192,
        '[': 219,
        '\\': 220,
        ']': 221,
        '\'': 222
      };

      for (var f = 1; f < 20; f++) {
        CODES['f' + f] = 111 + f;
      }
      /**
       * Is hotkey?
       */


      function isHotkey(hotkey, options, event) {
        if (options && !('byKey' in options)) {
          event = options;
          options = null;
        }

        if (!Array.isArray(hotkey)) {
          hotkey = [hotkey];
        }

        const array = hotkey.map(string => parseHotkey(string, options));

        const check = e => array.some(object => compareHotkey(object, e));

        const ret = event == null ? check : check(event);
        return ret;
      }

      function isCodeHotkey(hotkey, event) {
        return isHotkey(hotkey, event);
      }

      function isKeyHotkey(hotkey, event) {
        return isHotkey(hotkey, {
          byKey: true
        }, event);
      }
      /**
       * Parse.
       */


      function parseHotkey(hotkey, options) {
        const byKey = options && options.byKey;
        const ret = {}; // Special case to handle the `+` key since we use it as a separator.

        hotkey = hotkey.replace('++', '+add');
        const values = hotkey.split('+');
        const {
          length
        } = values; // Ensure that all the modifiers are set to false unless the hotkey has them.

        for (const k in MODIFIERS) {
          ret[MODIFIERS[k]] = false;
        }

        for (let value of values) {
          const optional = value.endsWith('?') && value.length > 1;

          if (optional) {
            value = value.slice(0, -1);
          }

          const name = toKeyName(value);
          const modifier = MODIFIERS[name];

          if (value.length > 1 && !modifier && !ALIASES[value] && !CODES[name]) {
            throw new TypeError(`Unknown modifier: "${value}"`);
          }

          if (length === 1 || !modifier) {
            if (byKey) {
              ret.key = name;
            } else {
              ret.which = toKeyCode(value);
            }
          }

          if (modifier) {
            ret[modifier] = optional ? null : true;
          }
        }

        return ret;
      }
      /**
       * Compare.
       */


      function compareHotkey(object, event) {
        for (const key in object) {
          const expected = object[key];
          let actual;

          if (expected == null) {
            continue;
          }

          if (key === 'key' && event.key != null) {
            actual = event.key.toLowerCase();
          } else if (key === 'which') {
            actual = expected === 91 && event.which === 93 ? 91 : event.which;
          } else {
            actual = event[key];
          }

          if (actual == null && expected === false) {
            continue;
          }

          if (actual !== expected) {
            return false;
          }
        }

        return true;
      }
      /**
       * Utils.
       */


      function toKeyCode(name) {
        name = toKeyName(name);
        const code = CODES[name] || name.toUpperCase().charCodeAt(0);
        return code;
      }

      function toKeyName(name) {
        name = name.toLowerCase();
        name = ALIASES[name] || name;
        return name;
      }
      /**
       * Export.
       */

    }
  });
  /******************************
  INTERNAL MODULE: ./utils/render
  ******************************/

  ims.set('./utils/render', {
    hash: 666283649,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.onReanderLeaf = void 0;
      exports.onRenderElement = onRenderElement;

      var _codeBlock = require("../components/code-block");

      var _image = require("../components/image");

      var _default = require("../components/default");

      var React = require("react");

      var _leaf = require("../components/leaf");

      var _link = require("../components/link");

      function onRenderElement(props) {
        console.log(400, props.element.type);

        switch (props.element.type) {
          case 'code':
            return React.createElement(_codeBlock.CodeBlock, { ...props
            });

          case 'img':
            return React.createElement(_image.Image, { ...props
            });

          case 'link':
            return React.createElement(_link.Link, { ...props
            });

          default:
            return React.createElement(_default.DefaultElement, { ...props
            });
        }
      }

      const onReanderLeaf = props => React.createElement(_leaf.Leaf, { ...props
      });

      exports.onReanderLeaf = onReanderLeaf;
    }
  });
  /*********************************
  INTERNAL MODULE: ./utils/serialize
  *********************************/

  ims.set('./utils/serialize', {
    hash: 4253800247,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.serialize = void 0;

      var _escapeHtml = require("./escape-html");

      var _slate = require("slate");

      const serialize = nodes => {
        nodes = Array.isArray(nodes) ? nodes : [nodes];
        return nodes.map(node => {
          if (_slate.Text.isText(node)) {
            let string = (0, _escapeHtml.escapeHtml)(node.text);

            if (node.bold) {
              string = `<strong>${string}</strong>`;
            }

            return string;
          }

          const children = node.children.map(n => serialize(n)).join('');

          switch (node.type) {
            case 'quote':
              return `<blockquote><p>${children}</p></blockquote>`;

            case 'paragraph':
              return `<p>${children}</p>`;

            case 'link':
              return `<a href="${(0, _escapeHtml.escapeHtml)(node.url)}">${children}</a>`;

            default:
              return children;
          }
        });
      };

      exports.serialize = serialize;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./controller/controller",
    "from": "Controller",
    "name": "Controller"
  }, {
    "im": "./page",
    "from": "Widget",
    "name": "Widget"
  }];
  let Controller, Widget; // Module exports

  _exports.Widget = Widget;
  _exports.Controller = Controller;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller/controller').Controller : value);
    (require || prop === 'Widget') && (_exports.Widget = Widget = require ? require('./page').Widget : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
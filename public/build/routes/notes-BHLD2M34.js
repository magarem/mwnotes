import {
  useUser
} from "/build/_shared/chunk-QCJELAVJ.js";
import {
  require_note
} from "/build/_shared/chunk-BOCVWV7G.js";
import {
  require_session
} from "/build/_shared/chunk-UUXYXIFE.js";
import {
  _extends,
  _inheritsLoose,
  require_jsx_runtime
} from "/build/_shared/chunk-BPFDCX7X.js";
import {
  Form,
  Link,
  Outlet,
  init_dist,
  require_shim,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-OWPABCHM.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-3QIN6FEG.js";
import {
  __commonJS,
  __export,
  __toESM
} from "/build/_shared/chunk-DF3EUDCN.js";

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    module.exports = function equal2(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal2(a[i], b[i]))
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal2(a[key], b[key]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// app/routes/notes.tsx
var import_session = __toESM(require_session());
var import_note = __toESM(require_note());
init_dist();
var import_react22 = __toESM(require_react());

// node_modules/react-arborist/dist/module.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_react20 = __toESM(require_react());
var import_shim = __toESM(require_shim());

// node_modules/react-dnd-html5-backend/dist/esm/utils/js_utils.js
function memoize(fn) {
  var result = null;
  var memoized = function memoized2() {
    if (result == null) {
      result = fn();
    }
    return result;
  };
  return memoized;
}
function without(items2, item) {
  return items2.filter(function(i) {
    return i !== item;
  });
}
function union(itemsA, itemsB) {
  var set = /* @__PURE__ */ new Set();
  var insertItem = function insertItem2(item) {
    return set.add(item);
  };
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  var result = [];
  set.forEach(function(key) {
    return result.push(key);
  });
  return result;
}

// node_modules/react-dnd-html5-backend/dist/esm/EnterLeaveCounter.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var EnterLeaveCounter = /* @__PURE__ */ function() {
  function EnterLeaveCounter2(isNodeInDocument) {
    _classCallCheck(this, EnterLeaveCounter2);
    _defineProperty(this, "entered", []);
    _defineProperty(this, "isNodeInDocument", void 0);
    this.isNodeInDocument = isNodeInDocument;
  }
  _createClass(EnterLeaveCounter2, [{
    key: "enter",
    value: function enter(enteringNode) {
      var _this = this;
      var previousLength = this.entered.length;
      var isNodeEntered = function isNodeEntered2(node) {
        return _this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
      };
      this.entered = union(this.entered.filter(isNodeEntered), [enteringNode]);
      return previousLength === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function leave(leavingNode) {
      var previousLength = this.entered.length;
      this.entered = without(this.entered.filter(this.isNodeInDocument), leavingNode);
      return previousLength > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.entered = [];
    }
  }]);
  return EnterLeaveCounter2;
}();

// node_modules/react-dnd-html5-backend/dist/esm/BrowserDetector.js
var isFirefox = memoize(function() {
  return /firefox/i.test(navigator.userAgent);
});
var isSafari = memoize(function() {
  return Boolean(window.safari);
});

// node_modules/react-dnd-html5-backend/dist/esm/MonotonicInterpolant.js
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties2(Constructor, staticProps);
  return Constructor;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var MonotonicInterpolant = /* @__PURE__ */ function() {
  function MonotonicInterpolant2(xs, ys) {
    _classCallCheck2(this, MonotonicInterpolant2);
    _defineProperty2(this, "xs", void 0);
    _defineProperty2(this, "ys", void 0);
    _defineProperty2(this, "c1s", void 0);
    _defineProperty2(this, "c2s", void 0);
    _defineProperty2(this, "c3s", void 0);
    var length = xs.length;
    var indexes = [];
    for (var i = 0; i < length; i++) {
      indexes.push(i);
    }
    indexes.sort(function(a, b) {
      return xs[a] < xs[b] ? -1 : 1;
    });
    var dys = [];
    var dxs = [];
    var ms = [];
    var dx;
    var dy;
    for (var _i = 0; _i < length - 1; _i++) {
      dx = xs[_i + 1] - xs[_i];
      dy = ys[_i + 1] - ys[_i];
      dxs.push(dx);
      dys.push(dy);
      ms.push(dy / dx);
    }
    var c1s = [ms[0]];
    for (var _i2 = 0; _i2 < dxs.length - 1; _i2++) {
      var m2 = ms[_i2];
      var mNext = ms[_i2 + 1];
      if (m2 * mNext <= 0) {
        c1s.push(0);
      } else {
        dx = dxs[_i2];
        var dxNext = dxs[_i2 + 1];
        var common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);
    var c2s = [];
    var c3s = [];
    var m;
    for (var _i3 = 0; _i3 < c1s.length - 1; _i3++) {
      m = ms[_i3];
      var c1 = c1s[_i3];
      var invDx = 1 / dxs[_i3];
      var _common = c1 + c1s[_i3 + 1] - m - m;
      c2s.push((m - c1 - _common) * invDx);
      c3s.push(_common * invDx * invDx);
    }
    this.xs = xs;
    this.ys = ys;
    this.c1s = c1s;
    this.c2s = c2s;
    this.c3s = c3s;
  }
  _createClass2(MonotonicInterpolant2, [{
    key: "interpolate",
    value: function interpolate(x) {
      var xs = this.xs, ys = this.ys, c1s = this.c1s, c2s = this.c2s, c3s = this.c3s;
      var i = xs.length - 1;
      if (x === xs[i]) {
        return ys[i];
      }
      var low = 0;
      var high = c3s.length - 1;
      var mid;
      while (low <= high) {
        mid = Math.floor(0.5 * (low + high));
        var xHere = xs[mid];
        if (xHere < x) {
          low = mid + 1;
        } else if (xHere > x) {
          high = mid - 1;
        } else {
          return ys[mid];
        }
      }
      i = Math.max(0, high);
      var diff = x - xs[i];
      var diffSq = diff * diff;
      return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
    }
  }]);
  return MonotonicInterpolant2;
}();

// node_modules/react-dnd-html5-backend/dist/esm/OffsetUtils.js
var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
  if (!el) {
    return null;
  }
  var _el$getBoundingClient = el.getBoundingClientRect(), top = _el$getBoundingClient.top, left = _el$getBoundingClient.left;
  return {
    x: left,
    y: top
  };
}
function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function isImageNode(node) {
  var _document$documentEle;
  return node.nodeName === "IMG" && (isFirefox() || !((_document$documentEle = document.documentElement) !== null && _document$documentEle !== void 0 && _document$documentEle.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
  var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
  if (isSafari() && isImage) {
    dragPreviewHeight /= window.devicePixelRatio;
    dragPreviewWidth /= window.devicePixelRatio;
  }
  return {
    dragPreviewWidth,
    dragPreviewHeight
  };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  var isImage = isImageNode(dragPreview);
  var dragPreviewNode = isImage ? sourceNode : dragPreview;
  var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
  var offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  };
  var sourceWidth = sourceNode.offsetWidth, sourceHeight = sourceNode.offsetHeight;
  var anchorX = anchorPoint.anchorX, anchorY = anchorPoint.anchorY;
  var _getDragPreviewSize = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight), dragPreviewWidth = _getDragPreviewSize.dragPreviewWidth, dragPreviewHeight = _getDragPreviewSize.dragPreviewHeight;
  var calculateYOffset = function calculateYOffset2() {
    var interpolantY = new MonotonicInterpolant([0, 0.5, 1], [
      offsetFromDragPreview.y,
      offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
      offsetFromDragPreview.y + dragPreviewHeight - sourceHeight
    ]);
    var y = interpolantY.interpolate(anchorY);
    if (isSafari() && isImage) {
      y += (window.devicePixelRatio - 1) * dragPreviewHeight;
    }
    return y;
  };
  var calculateXOffset = function calculateXOffset2() {
    var interpolantX = new MonotonicInterpolant([0, 0.5, 1], [
      offsetFromDragPreview.x,
      offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
      offsetFromDragPreview.x + dragPreviewWidth - sourceWidth
    ]);
    return interpolantX.interpolate(anchorX);
  };
  var offsetX = offsetPoint.offsetX, offsetY = offsetPoint.offsetY;
  var isManualOffsetX = offsetX === 0 || offsetX;
  var isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}

// node_modules/react-dnd-html5-backend/dist/esm/NativeTypes.js
var NativeTypes_exports = {};
__export(NativeTypes_exports, {
  FILE: () => FILE,
  HTML: () => HTML,
  TEXT: () => TEXT,
  URL: () => URL
});
var FILE = "__NATIVE_FILE__";
var URL = "__NATIVE_URL__";
var TEXT = "__NATIVE_TEXT__";
var HTML = "__NATIVE_HTML__";

// node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/getDataFromDataTransfer.js
function getDataFromDataTransfer(dataTransfer5, typesToTry, defaultValue) {
  var result = typesToTry.reduce(function(resultSoFar, typeToTry) {
    return resultSoFar || dataTransfer5.getData(typeToTry);
  }, "");
  return result != null ? result : defaultValue;
}

// node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/nativeTypesConfig.js
var _nativeTypesConfig;
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var nativeTypesConfig = (_nativeTypesConfig = {}, _defineProperty3(_nativeTypesConfig, FILE, {
  exposeProperties: {
    files: function files(dataTransfer5) {
      return Array.prototype.slice.call(dataTransfer5.files);
    },
    items: function items(dataTransfer5) {
      return dataTransfer5.items;
    },
    dataTransfer: function dataTransfer(_dataTransfer) {
      return _dataTransfer;
    }
  },
  matchesTypes: ["Files"]
}), _defineProperty3(_nativeTypesConfig, HTML, {
  exposeProperties: {
    html: function html(dataTransfer5, matchesTypes) {
      return getDataFromDataTransfer(dataTransfer5, matchesTypes, "");
    },
    dataTransfer: function dataTransfer2(_dataTransfer2) {
      return _dataTransfer2;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), _defineProperty3(_nativeTypesConfig, URL, {
  exposeProperties: {
    urls: function urls(dataTransfer5, matchesTypes) {
      return getDataFromDataTransfer(dataTransfer5, matchesTypes, "").split("\n");
    },
    dataTransfer: function dataTransfer3(_dataTransfer3) {
      return _dataTransfer3;
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), _defineProperty3(_nativeTypesConfig, TEXT, {
  exposeProperties: {
    text: function text(dataTransfer5, matchesTypes) {
      return getDataFromDataTransfer(dataTransfer5, matchesTypes, "");
    },
    dataTransfer: function dataTransfer4(_dataTransfer4) {
      return _dataTransfer4;
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), _nativeTypesConfig);

// node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/NativeDragSource.js
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass3(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties3(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties3(Constructor, staticProps);
  return Constructor;
}
function _defineProperty4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var NativeDragSource = /* @__PURE__ */ function() {
  function NativeDragSource2(config) {
    _classCallCheck3(this, NativeDragSource2);
    _defineProperty4(this, "item", void 0);
    _defineProperty4(this, "config", void 0);
    this.config = config;
    this.item = {};
    this.initializeExposedProperties();
  }
  _createClass3(NativeDragSource2, [{
    key: "initializeExposedProperties",
    value: function initializeExposedProperties() {
      var _this = this;
      Object.keys(this.config.exposeProperties).forEach(function(property) {
        Object.defineProperty(_this.item, property, {
          configurable: true,
          enumerable: true,
          get: function get2() {
            console.warn(`Browser doesn't allow reading "`.concat(property, '" until the drop event.'));
            return null;
          }
        });
      });
    }
  }, {
    key: "loadDataTransfer",
    value: function loadDataTransfer(dataTransfer5) {
      var _this2 = this;
      if (dataTransfer5) {
        var newProperties = {};
        Object.keys(this.config.exposeProperties).forEach(function(property) {
          newProperties[property] = {
            value: _this2.config.exposeProperties[property](dataTransfer5, _this2.config.matchesTypes),
            configurable: true,
            enumerable: true
          };
        });
        Object.defineProperties(this.item, newProperties);
      }
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      return true;
    }
  }, {
    key: "beginDrag",
    value: function beginDrag() {
      return this.item;
    }
  }, {
    key: "isDragging",
    value: function isDragging(monitor, handle) {
      return handle === monitor.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function endDrag() {
    }
  }]);
  return NativeDragSource2;
}();

// node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/index.js
function createNativeDragSource(type, dataTransfer5) {
  var result = new NativeDragSource(nativeTypesConfig[type]);
  result.loadDataTransfer(dataTransfer5);
  return result;
}
function matchNativeItemType(dataTransfer5) {
  if (!dataTransfer5) {
    return null;
  }
  var dataTransferTypes = Array.prototype.slice.call(dataTransfer5.types || []);
  return Object.keys(nativeTypesConfig).filter(function(nativeItemType) {
    var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;
    return matchesTypes.some(function(t) {
      return dataTransferTypes.indexOf(t) > -1;
    });
  })[0] || null;
}

// node_modules/react-dnd-html5-backend/dist/esm/OptionsReader.js
function _classCallCheck4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass4(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties4(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties4(Constructor, staticProps);
  return Constructor;
}
function _defineProperty5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var OptionsReader = /* @__PURE__ */ function() {
  function OptionsReader2(globalContext, options) {
    _classCallCheck4(this, OptionsReader2);
    _defineProperty5(this, "ownerDocument", null);
    _defineProperty5(this, "globalContext", void 0);
    _defineProperty5(this, "optionsArgs", void 0);
    this.globalContext = globalContext;
    this.optionsArgs = options;
  }
  _createClass4(OptionsReader2, [{
    key: "window",
    get: function get2() {
      if (this.globalContext) {
        return this.globalContext;
      } else if (typeof window !== "undefined") {
        return window;
      }
      return void 0;
    }
  }, {
    key: "document",
    get: function get2() {
      var _this$globalContext;
      if ((_this$globalContext = this.globalContext) !== null && _this$globalContext !== void 0 && _this$globalContext.document) {
        return this.globalContext.document;
      } else if (this.window) {
        return this.window.document;
      } else {
        return void 0;
      }
    }
  }, {
    key: "rootElement",
    get: function get2() {
      var _this$optionsArgs;
      return ((_this$optionsArgs = this.optionsArgs) === null || _this$optionsArgs === void 0 ? void 0 : _this$optionsArgs.rootElement) || this.window;
    }
  }]);
  return OptionsReader2;
}();

// node_modules/react-dnd-html5-backend/dist/esm/HTML5BackendImpl.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty6(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _classCallCheck5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties5(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass5(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties5(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties5(Constructor, staticProps);
  return Constructor;
}
function _defineProperty6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var HTML5BackendImpl = /* @__PURE__ */ function() {
  function HTML5BackendImpl2(manager, globalContext, options) {
    var _this = this;
    _classCallCheck5(this, HTML5BackendImpl2);
    _defineProperty6(this, "options", void 0);
    _defineProperty6(this, "actions", void 0);
    _defineProperty6(this, "monitor", void 0);
    _defineProperty6(this, "registry", void 0);
    _defineProperty6(this, "enterLeaveCounter", void 0);
    _defineProperty6(this, "sourcePreviewNodes", /* @__PURE__ */ new Map());
    _defineProperty6(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map());
    _defineProperty6(this, "sourceNodes", /* @__PURE__ */ new Map());
    _defineProperty6(this, "sourceNodeOptions", /* @__PURE__ */ new Map());
    _defineProperty6(this, "dragStartSourceIds", null);
    _defineProperty6(this, "dropTargetIds", []);
    _defineProperty6(this, "dragEnterTargetIds", []);
    _defineProperty6(this, "currentNativeSource", null);
    _defineProperty6(this, "currentNativeHandle", null);
    _defineProperty6(this, "currentDragSourceNode", null);
    _defineProperty6(this, "altKeyPressed", false);
    _defineProperty6(this, "mouseMoveTimeoutTimer", null);
    _defineProperty6(this, "asyncEndDragFrameId", null);
    _defineProperty6(this, "dragOverTargetIds", null);
    _defineProperty6(this, "lastClientOffset", null);
    _defineProperty6(this, "hoverRafId", null);
    _defineProperty6(this, "getSourceClientOffset", function(sourceId) {
      var source = _this.sourceNodes.get(sourceId);
      return source && getNodeClientOffset(source) || null;
    });
    _defineProperty6(this, "endDragNativeItem", function() {
      if (!_this.isDraggingNativeItem()) {
        return;
      }
      _this.actions.endDrag();
      if (_this.currentNativeHandle) {
        _this.registry.removeSource(_this.currentNativeHandle);
      }
      _this.currentNativeHandle = null;
      _this.currentNativeSource = null;
    });
    _defineProperty6(this, "isNodeInDocument", function(node) {
      return Boolean(node && _this.document && _this.document.body && _this.document.body.contains(node));
    });
    _defineProperty6(this, "endDragIfSourceWasRemovedFromDOM", function() {
      var node = _this.currentDragSourceNode;
      if (node == null || _this.isNodeInDocument(node)) {
        return;
      }
      if (_this.clearCurrentDragSourceNode() && _this.monitor.isDragging()) {
        _this.actions.endDrag();
      }
    });
    _defineProperty6(this, "handleTopDragStartCapture", function() {
      _this.clearCurrentDragSourceNode();
      _this.dragStartSourceIds = [];
    });
    _defineProperty6(this, "handleTopDragStart", function(e) {
      if (e.defaultPrevented) {
        return;
      }
      var dragStartSourceIds = _this.dragStartSourceIds;
      _this.dragStartSourceIds = null;
      var clientOffset = getEventClientOffset(e);
      if (_this.monitor.isDragging()) {
        _this.actions.endDrag();
      }
      _this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: false,
        getSourceClientOffset: _this.getSourceClientOffset,
        clientOffset
      });
      var dataTransfer5 = e.dataTransfer;
      var nativeType = matchNativeItemType(dataTransfer5);
      if (_this.monitor.isDragging()) {
        if (dataTransfer5 && typeof dataTransfer5.setDragImage === "function") {
          var sourceId = _this.monitor.getSourceId();
          var sourceNode = _this.sourceNodes.get(sourceId);
          var dragPreview = _this.sourcePreviewNodes.get(sourceId) || sourceNode;
          if (dragPreview) {
            var _this$getCurrentSourc = _this.getCurrentSourcePreviewNodeOptions(), anchorX = _this$getCurrentSourc.anchorX, anchorY = _this$getCurrentSourc.anchorY, offsetX = _this$getCurrentSourc.offsetX, offsetY = _this$getCurrentSourc.offsetY;
            var anchorPoint = {
              anchorX,
              anchorY
            };
            var offsetPoint = {
              offsetX,
              offsetY
            };
            var dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
            dataTransfer5.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }
        try {
          dataTransfer5 === null || dataTransfer5 === void 0 ? void 0 : dataTransfer5.setData("application/json", {});
        } catch (err) {
        }
        _this.setCurrentDragSourceNode(e.target);
        var _this$getCurrentSourc2 = _this.getCurrentSourcePreviewNodeOptions(), captureDraggingState = _this$getCurrentSourc2.captureDraggingState;
        if (!captureDraggingState) {
          setTimeout(function() {
            return _this.actions.publishDragSource();
          }, 0);
        } else {
          _this.actions.publishDragSource();
        }
      } else if (nativeType) {
        _this.beginDragNativeItem(nativeType);
      } else if (dataTransfer5 && !dataTransfer5.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable"))) {
        return;
      } else {
        e.preventDefault();
      }
    });
    _defineProperty6(this, "handleTopDragEndCapture", function() {
      if (_this.clearCurrentDragSourceNode() && _this.monitor.isDragging()) {
        _this.actions.endDrag();
      }
    });
    _defineProperty6(this, "handleTopDragEnterCapture", function(e) {
      _this.dragEnterTargetIds = [];
      var isFirstEnter = _this.enterLeaveCounter.enter(e.target);
      if (!isFirstEnter || _this.monitor.isDragging()) {
        return;
      }
      var dataTransfer5 = e.dataTransfer;
      var nativeType = matchNativeItemType(dataTransfer5);
      if (nativeType) {
        _this.beginDragNativeItem(nativeType, dataTransfer5);
      }
    });
    _defineProperty6(this, "handleTopDragEnter", function(e) {
      var dragEnterTargetIds = _this.dragEnterTargetIds;
      _this.dragEnterTargetIds = [];
      if (!_this.monitor.isDragging()) {
        return;
      }
      _this.altKeyPressed = e.altKey;
      if (dragEnterTargetIds.length > 0) {
        _this.actions.hover(dragEnterTargetIds, {
          clientOffset: getEventClientOffset(e)
        });
      }
      var canDrop = dragEnterTargetIds.some(function(targetId) {
        return _this.monitor.canDropOnTarget(targetId);
      });
      if (canDrop) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = _this.getCurrentDropEffect();
        }
      }
    });
    _defineProperty6(this, "handleTopDragOverCapture", function() {
      _this.dragOverTargetIds = [];
    });
    _defineProperty6(this, "handleTopDragOver", function(e) {
      var dragOverTargetIds = _this.dragOverTargetIds;
      _this.dragOverTargetIds = [];
      if (!_this.monitor.isDragging()) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = "none";
        }
        return;
      }
      _this.altKeyPressed = e.altKey;
      _this.lastClientOffset = getEventClientOffset(e);
      if (_this.hoverRafId === null && typeof requestAnimationFrame !== "undefined") {
        _this.hoverRafId = requestAnimationFrame(function() {
          if (_this.monitor.isDragging()) {
            _this.actions.hover(dragOverTargetIds || [], {
              clientOffset: _this.lastClientOffset
            });
          }
          _this.hoverRafId = null;
        });
      }
      var canDrop = (dragOverTargetIds || []).some(function(targetId) {
        return _this.monitor.canDropOnTarget(targetId);
      });
      if (canDrop) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = _this.getCurrentDropEffect();
        }
      } else if (_this.isDraggingNativeItem()) {
        e.preventDefault();
      } else {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = "none";
        }
      }
    });
    _defineProperty6(this, "handleTopDragLeaveCapture", function(e) {
      if (_this.isDraggingNativeItem()) {
        e.preventDefault();
      }
      var isLastLeave = _this.enterLeaveCounter.leave(e.target);
      if (!isLastLeave) {
        return;
      }
      if (_this.isDraggingNativeItem()) {
        setTimeout(function() {
          return _this.endDragNativeItem();
        }, 0);
      }
    });
    _defineProperty6(this, "handleTopDropCapture", function(e) {
      _this.dropTargetIds = [];
      if (_this.isDraggingNativeItem()) {
        var _this$currentNativeSo;
        e.preventDefault();
        (_this$currentNativeSo = _this.currentNativeSource) === null || _this$currentNativeSo === void 0 ? void 0 : _this$currentNativeSo.loadDataTransfer(e.dataTransfer);
      } else if (matchNativeItemType(e.dataTransfer)) {
        e.preventDefault();
      }
      _this.enterLeaveCounter.reset();
    });
    _defineProperty6(this, "handleTopDrop", function(e) {
      var dropTargetIds = _this.dropTargetIds;
      _this.dropTargetIds = [];
      _this.actions.hover(dropTargetIds, {
        clientOffset: getEventClientOffset(e)
      });
      _this.actions.drop({
        dropEffect: _this.getCurrentDropEffect()
      });
      if (_this.isDraggingNativeItem()) {
        _this.endDragNativeItem();
      } else if (_this.monitor.isDragging()) {
        _this.actions.endDrag();
      }
    });
    _defineProperty6(this, "handleSelectStart", function(e) {
      var target = e.target;
      if (typeof target.dragDrop !== "function") {
        return;
      }
      if (target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return;
      }
      e.preventDefault();
      target.dragDrop();
    });
    this.options = new OptionsReader(globalContext, options);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();
    this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
  }
  _createClass5(HTML5BackendImpl2, [{
    key: "profile",
    value: function profile() {
      var _this$dragStartSource, _this$dragOverTargetI;
      return {
        sourcePreviewNodes: this.sourcePreviewNodes.size,
        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
        sourceNodeOptions: this.sourceNodeOptions.size,
        sourceNodes: this.sourceNodes.size,
        dragStartSourceIds: ((_this$dragStartSource = this.dragStartSourceIds) === null || _this$dragStartSource === void 0 ? void 0 : _this$dragStartSource.length) || 0,
        dropTargetIds: this.dropTargetIds.length,
        dragEnterTargetIds: this.dragEnterTargetIds.length,
        dragOverTargetIds: ((_this$dragOverTargetI = this.dragOverTargetIds) === null || _this$dragOverTargetI === void 0 ? void 0 : _this$dragOverTargetI.length) || 0
      };
    }
  }, {
    key: "window",
    get: function get2() {
      return this.options.window;
    }
  }, {
    key: "document",
    get: function get2() {
      return this.options.document;
    }
  }, {
    key: "rootElement",
    get: function get2() {
      return this.options.rootElement;
    }
  }, {
    key: "setup",
    value: function setup() {
      var root = this.rootElement;
      if (root === void 0) {
        return;
      }
      if (root.__isReactDndBackendSetUp) {
        throw new Error("Cannot have two HTML5 backends at the same time.");
      }
      root.__isReactDndBackendSetUp = true;
      this.addEventListeners(root);
    }
  }, {
    key: "teardown",
    value: function teardown() {
      var root = this.rootElement;
      if (root === void 0) {
        return;
      }
      root.__isReactDndBackendSetUp = false;
      this.removeEventListeners(this.rootElement);
      this.clearCurrentDragSourceNode();
      if (this.asyncEndDragFrameId) {
        var _this$window;
        (_this$window = this.window) === null || _this$window === void 0 ? void 0 : _this$window.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function connectDragPreview(sourceId, node, options) {
      var _this2 = this;
      this.sourcePreviewNodeOptions.set(sourceId, options);
      this.sourcePreviewNodes.set(sourceId, node);
      return function() {
        _this2.sourcePreviewNodes.delete(sourceId);
        _this2.sourcePreviewNodeOptions.delete(sourceId);
      };
    }
  }, {
    key: "connectDragSource",
    value: function connectDragSource(sourceId, node, options) {
      var _this3 = this;
      this.sourceNodes.set(sourceId, node);
      this.sourceNodeOptions.set(sourceId, options);
      var handleDragStart = function handleDragStart2(e) {
        return _this3.handleDragStart(e, sourceId);
      };
      var handleSelectStart = function handleSelectStart2(e) {
        return _this3.handleSelectStart(e);
      };
      node.setAttribute("draggable", "true");
      node.addEventListener("dragstart", handleDragStart);
      node.addEventListener("selectstart", handleSelectStart);
      return function() {
        _this3.sourceNodes.delete(sourceId);
        _this3.sourceNodeOptions.delete(sourceId);
        node.removeEventListener("dragstart", handleDragStart);
        node.removeEventListener("selectstart", handleSelectStart);
        node.setAttribute("draggable", "false");
      };
    }
  }, {
    key: "connectDropTarget",
    value: function connectDropTarget(targetId, node) {
      var _this4 = this;
      var handleDragEnter = function handleDragEnter2(e) {
        return _this4.handleDragEnter(e, targetId);
      };
      var handleDragOver = function handleDragOver2(e) {
        return _this4.handleDragOver(e, targetId);
      };
      var handleDrop = function handleDrop2(e) {
        return _this4.handleDrop(e, targetId);
      };
      node.addEventListener("dragenter", handleDragEnter);
      node.addEventListener("dragover", handleDragOver);
      node.addEventListener("drop", handleDrop);
      return function() {
        node.removeEventListener("dragenter", handleDragEnter);
        node.removeEventListener("dragover", handleDragOver);
        node.removeEventListener("drop", handleDrop);
      };
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners(target) {
      if (!target.addEventListener) {
        return;
      }
      target.addEventListener("dragstart", this.handleTopDragStart);
      target.addEventListener("dragstart", this.handleTopDragStartCapture, true);
      target.addEventListener("dragend", this.handleTopDragEndCapture, true);
      target.addEventListener("dragenter", this.handleTopDragEnter);
      target.addEventListener("dragenter", this.handleTopDragEnterCapture, true);
      target.addEventListener("dragleave", this.handleTopDragLeaveCapture, true);
      target.addEventListener("dragover", this.handleTopDragOver);
      target.addEventListener("dragover", this.handleTopDragOverCapture, true);
      target.addEventListener("drop", this.handleTopDrop);
      target.addEventListener("drop", this.handleTopDropCapture, true);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners(target) {
      if (!target.removeEventListener) {
        return;
      }
      target.removeEventListener("dragstart", this.handleTopDragStart);
      target.removeEventListener("dragstart", this.handleTopDragStartCapture, true);
      target.removeEventListener("dragend", this.handleTopDragEndCapture, true);
      target.removeEventListener("dragenter", this.handleTopDragEnter);
      target.removeEventListener("dragenter", this.handleTopDragEnterCapture, true);
      target.removeEventListener("dragleave", this.handleTopDragLeaveCapture, true);
      target.removeEventListener("dragover", this.handleTopDragOver);
      target.removeEventListener("dragover", this.handleTopDragOverCapture, true);
      target.removeEventListener("drop", this.handleTopDrop);
      target.removeEventListener("drop", this.handleTopDropCapture, true);
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function getCurrentSourceNodeOptions() {
      var sourceId = this.monitor.getSourceId();
      var sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
      return _objectSpread({
        dropEffect: this.altKeyPressed ? "copy" : "move"
      }, sourceNodeOptions || {});
    }
  }, {
    key: "getCurrentDropEffect",
    value: function getCurrentDropEffect() {
      if (this.isDraggingNativeItem()) {
        return "copy";
      }
      return this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function getCurrentSourcePreviewNodeOptions() {
      var sourceId = this.monitor.getSourceId();
      var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
      return _objectSpread({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: false
      }, sourcePreviewNodeOptions || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function isDraggingNativeItem() {
      var itemType = this.monitor.getItemType();
      return Object.keys(NativeTypes_exports).some(function(key) {
        return NativeTypes_exports[key] === itemType;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function beginDragNativeItem(type, dataTransfer5) {
      this.clearCurrentDragSourceNode();
      this.currentNativeSource = createNativeDragSource(type, dataTransfer5);
      this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
      this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function setCurrentDragSourceNode(node) {
      var _this5 = this;
      this.clearCurrentDragSourceNode();
      this.currentDragSourceNode = node;
      var MOUSE_MOVE_TIMEOUT = 1e3;
      this.mouseMoveTimeoutTimer = setTimeout(function() {
        var _this5$rootElement;
        return (_this5$rootElement = _this5.rootElement) === null || _this5$rootElement === void 0 ? void 0 : _this5$rootElement.addEventListener("mousemove", _this5.endDragIfSourceWasRemovedFromDOM, true);
      }, MOUSE_MOVE_TIMEOUT);
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function clearCurrentDragSourceNode() {
      if (this.currentDragSourceNode) {
        this.currentDragSourceNode = null;
        if (this.rootElement) {
          var _this$window2;
          (_this$window2 = this.window) === null || _this$window2 === void 0 ? void 0 : _this$window2.clearTimeout(this.mouseMoveTimeoutTimer || void 0);
          this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
        }
        this.mouseMoveTimeoutTimer = null;
        return true;
      }
      return false;
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart(e, sourceId) {
      if (e.defaultPrevented) {
        return;
      }
      if (!this.dragStartSourceIds) {
        this.dragStartSourceIds = [];
      }
      this.dragStartSourceIds.unshift(sourceId);
    }
  }, {
    key: "handleDragEnter",
    value: function handleDragEnter(e, targetId) {
      this.dragEnterTargetIds.unshift(targetId);
    }
  }, {
    key: "handleDragOver",
    value: function handleDragOver(e, targetId) {
      if (this.dragOverTargetIds === null) {
        this.dragOverTargetIds = [];
      }
      this.dragOverTargetIds.unshift(targetId);
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(e, targetId) {
      this.dropTargetIds.unshift(targetId);
    }
  }]);
  return HTML5BackendImpl2;
}();

// node_modules/react-dnd-html5-backend/dist/esm/getEmptyImage.js
var emptyImage;
function getEmptyImage() {
  if (!emptyImage) {
    emptyImage = new Image();
    emptyImage.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
  }
  return emptyImage;
}

// node_modules/react-dnd-html5-backend/dist/esm/index.js
var HTML5Backend = function createBackend(manager, context, options) {
  return new HTML5BackendImpl(manager, context, options);
};

// node_modules/react-dnd/dist/esm/core/DndContext.js
var import_react = __toESM(require_react());
var DndContext = (0, import_react.createContext)({
  dragDropManager: void 0
});

// node_modules/react-dnd/dist/esm/core/DndProvider.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react2 = __toESM(require_react());

// node_modules/dnd-core/dist/esm/interfaces.js
var HandlerRole;
(function(HandlerRole2) {
  HandlerRole2["SOURCE"] = "SOURCE";
  HandlerRole2["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));

// node_modules/@react-dnd/invariant/dist/invariant.esm.js
function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  if (true) {
    if (format === void 0) {
      throw new Error("invariant requires an error message argument");
    }
  }
  if (!condition) {
    var error;
    if (format === void 0) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      }));
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
}

// node_modules/dnd-core/dist/esm/actions/dragDrop/types.js
var INIT_COORDS = "dnd-core/INIT_COORDS";
var BEGIN_DRAG = "dnd-core/BEGIN_DRAG";
var PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE";
var HOVER = "dnd-core/HOVER";
var DROP = "dnd-core/DROP";
var END_DRAG = "dnd-core/END_DRAG";

// node_modules/dnd-core/dist/esm/actions/dragDrop/local/setClientOffset.js
function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}

// node_modules/dnd-core/dist/esm/utils/js_utils.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof6(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof6(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function get(obj, path, defaultValue) {
  return path.split(".").reduce(function(a, c) {
    return a && a[c] ? a[c] : defaultValue || null;
  }, obj);
}
function without2(items2, item) {
  return items2.filter(function(i) {
    return i !== item;
  });
}
function isObject(input) {
  return _typeof(input) === "object";
}
function xor(itemsA, itemsB) {
  var map = /* @__PURE__ */ new Map();
  var insertItem = function insertItem2(item) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  };
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  var result = [];
  map.forEach(function(count, key) {
    if (count === 1) {
      result.push(key);
    }
  });
  return result;
}
function intersection(itemsA, itemsB) {
  return itemsA.filter(function(t) {
    return itemsB.indexOf(t) > -1;
  });
}

// node_modules/dnd-core/dist/esm/actions/dragDrop/beginDrag.js
var ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function beginDrag() {
    var sourceIds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      publishSource: true
    };
    var _options$publishSourc = options.publishSource, publishSource = _options$publishSourc === void 0 ? true : _options$publishSourc, clientOffset = options.clientOffset, getSourceClientOffset2 = options.getSourceClientOffset;
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    manager.dispatch(setClientOffset(clientOffset));
    verifyInvariants(sourceIds, monitor, registry);
    var sourceId = getDraggableSource(sourceIds, monitor);
    if (sourceId === null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    }
    var sourceClientOffset = null;
    if (clientOffset) {
      if (!getSourceClientOffset2) {
        throw new Error("getSourceClientOffset must be defined");
      }
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2);
      sourceClientOffset = getSourceClientOffset2(sourceId);
    }
    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    var source = registry.getSource(sourceId);
    var item = source.beginDrag(monitor, sourceId);
    if (item == null) {
      return void 0;
    }
    verifyItemIsObject(item);
    registry.pinSource(sourceId);
    var itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType,
        item,
        sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}
function verifyInvariants(sourceIds, monitor, registry) {
  invariant(!monitor.isDragging(), "Cannot call beginDrag while dragging.");
  sourceIds.forEach(function(sourceId) {
    invariant(registry.getSource(sourceId), "Expected sourceIds to be registered.");
  });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2) {
  invariant(typeof getSourceClientOffset2 === "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function verifyItemIsObject(item) {
  invariant(isObject(item), "Item must be an object.");
}
function getDraggableSource(sourceIds, monitor) {
  var sourceId = null;
  for (var i = sourceIds.length - 1; i >= 0; i--) {
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  }
  return sourceId;
}

// node_modules/dnd-core/dist/esm/actions/dragDrop/publishDragSource.js
function createPublishDragSource(manager) {
  return function publishDragSource() {
    var monitor = manager.getMonitor();
    if (monitor.isDragging()) {
      return {
        type: PUBLISH_DRAG_SOURCE
      };
    }
  };
}

// node_modules/dnd-core/dist/esm/utils/matchesType.js
function matchesType(targetType, draggedItemType) {
  if (draggedItemType === null) {
    return targetType === null;
  }
  return Array.isArray(targetType) ? targetType.some(function(t) {
    return t === draggedItemType;
  }) : targetType === draggedItemType;
}

// node_modules/dnd-core/dist/esm/actions/dragDrop/hover.js
function createHover(manager) {
  return function hover(targetIdsArg) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, clientOffset = _ref.clientOffset;
    verifyTargetIdsIsArray(targetIdsArg);
    var targetIds = targetIdsArg.slice(0);
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    checkInvariants(targetIds, monitor, registry);
    var draggedItemType = monitor.getItemType();
    removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
    hoverAllTargets(targetIds, monitor, registry);
    return {
      type: HOVER,
      payload: {
        targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}
function verifyTargetIdsIsArray(targetIdsArg) {
  invariant(Array.isArray(targetIdsArg), "Expected targetIds to be an array.");
}
function checkInvariants(targetIds, monitor, registry) {
  invariant(monitor.isDragging(), "Cannot call hover while not dragging.");
  invariant(!monitor.didDrop(), "Cannot call hover after drop.");
  for (var i = 0; i < targetIds.length; i++) {
    var targetId = targetIds[i];
    invariant(targetIds.lastIndexOf(targetId) === i, "Expected targetIds to be unique in the passed array.");
    var target = registry.getTarget(targetId);
    invariant(target, "Expected targetIds to be registered.");
  }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  for (var i = targetIds.length - 1; i >= 0; i--) {
    var targetId = targetIds[i];
    var targetType = registry.getTargetType(targetId);
    if (!matchesType(targetType, draggedItemType)) {
      targetIds.splice(i, 1);
    }
  }
}
function hoverAllTargets(targetIds, monitor, registry) {
  targetIds.forEach(function(targetId) {
    var target = registry.getTarget(targetId);
    target.hover(monitor, targetId);
  });
}

// node_modules/dnd-core/dist/esm/actions/dragDrop/drop.js
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty7(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function createDrop(manager) {
  return function drop() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    verifyInvariants2(monitor);
    var targetIds = getDroppableTargets(monitor);
    targetIds.forEach(function(targetId, index) {
      var dropResult = determineDropResult(targetId, index, registry, monitor);
      var action = {
        type: DROP,
        payload: {
          dropResult: _objectSpread2(_objectSpread2({}, options), dropResult)
        }
      };
      manager.dispatch(action);
    });
  };
}
function verifyInvariants2(monitor) {
  invariant(monitor.isDragging(), "Cannot call drop while not dragging.");
  invariant(!monitor.didDrop(), "Cannot call drop twice during one drag operation.");
}
function determineDropResult(targetId, index, registry, monitor) {
  var target = registry.getTarget(targetId);
  var dropResult = target ? target.drop(monitor, targetId) : void 0;
  verifyDropResultType(dropResult);
  if (typeof dropResult === "undefined") {
    dropResult = index === 0 ? {} : monitor.getDropResult();
  }
  return dropResult;
}
function verifyDropResultType(dropResult) {
  invariant(typeof dropResult === "undefined" || isObject(dropResult), "Drop result must either be an object or undefined.");
}
function getDroppableTargets(monitor) {
  var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  targetIds.reverse();
  return targetIds;
}

// node_modules/dnd-core/dist/esm/actions/dragDrop/endDrag.js
function createEndDrag(manager) {
  return function endDrag() {
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    verifyIsDragging(monitor);
    var sourceId = monitor.getSourceId();
    if (sourceId != null) {
      var source = registry.getSource(sourceId, true);
      source.endDrag(monitor, sourceId);
      registry.unpinSource();
    }
    return {
      type: END_DRAG
    };
  };
}
function verifyIsDragging(monitor) {
  invariant(monitor.isDragging(), "Cannot call endDrag while not dragging.");
}

// node_modules/dnd-core/dist/esm/actions/dragDrop/index.js
function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}

// node_modules/dnd-core/dist/esm/classes/DragDropManagerImpl.js
function _classCallCheck6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties6(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass6(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties6(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties6(Constructor, staticProps);
  return Constructor;
}
function _defineProperty8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DragDropManagerImpl = /* @__PURE__ */ function() {
  function DragDropManagerImpl2(store, monitor) {
    var _this = this;
    _classCallCheck6(this, DragDropManagerImpl2);
    _defineProperty8(this, "store", void 0);
    _defineProperty8(this, "monitor", void 0);
    _defineProperty8(this, "backend", void 0);
    _defineProperty8(this, "isSetUp", false);
    _defineProperty8(this, "handleRefCountChange", function() {
      var shouldSetUp = _this.store.getState().refCount > 0;
      if (_this.backend) {
        if (shouldSetUp && !_this.isSetUp) {
          _this.backend.setup();
          _this.isSetUp = true;
        } else if (!shouldSetUp && _this.isSetUp) {
          _this.backend.teardown();
          _this.isSetUp = false;
        }
      }
    });
    this.store = store;
    this.monitor = monitor;
    store.subscribe(this.handleRefCountChange);
  }
  _createClass6(DragDropManagerImpl2, [{
    key: "receiveBackend",
    value: function receiveBackend(backend) {
      this.backend = backend;
    }
  }, {
    key: "getMonitor",
    value: function getMonitor() {
      return this.monitor;
    }
  }, {
    key: "getBackend",
    value: function getBackend() {
      return this.backend;
    }
  }, {
    key: "getRegistry",
    value: function getRegistry() {
      return this.monitor.registry;
    }
  }, {
    key: "getActions",
    value: function getActions() {
      var manager = this;
      var dispatch = this.store.dispatch;
      function bindActionCreator(actionCreator) {
        return function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var action = actionCreator.apply(manager, args);
          if (typeof action !== "undefined") {
            dispatch(action);
          }
        };
      }
      var actions = createDragDropActions(this);
      return Object.keys(actions).reduce(function(boundActions, key) {
        var action = actions[key];
        boundActions[key] = bindActionCreator(action);
        return boundActions;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function dispatch(action) {
      this.store.dispatch(action);
    }
  }]);
  return DragDropManagerImpl2;
}();

// node_modules/redux/es/redux.js
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function miniKindOf(val) {
  if (val === void 0)
    return "undefined";
  if (val === null)
    return "null";
  var type = typeof val;
  switch (type) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function": {
      return type;
    }
  }
  if (Array.isArray(val))
    return "array";
  if (isDate(val))
    return "date";
  if (isError(val))
    return "error";
  var constructorName = ctorName(val);
  switch (constructorName) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return constructorName;
  }
  return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
  return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
  return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
  if (val instanceof Date)
    return true;
  return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
  var typeOfVal = typeof val;
  if (true) {
    typeOfVal = miniKindOf(val);
  }
  return typeOfVal;
}
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(false ? formatProdErrorMessage(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(false ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(false ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(false ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(false ? formatProdErrorMessage(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(false ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }
    if (typeof action.type === "undefined") {
      throw new Error(false ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(9) : "Reducers may not dispatch actions.");
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(false ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(false ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function warning(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e) {
  }
}
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (reducerKeys.length === 0) {
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  }
  if (!isPlainObject(inputState)) {
    return "The " + argumentName + ' has unexpected type of "' + kindOf(inputState) + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }
  var unexpectedKeys = Object.keys(inputState).filter(function(key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function(key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE)
    return;
  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? "keys" : "key") + " " + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function(key) {
    var reducer = reducers[key];
    var initialState3 = reducer(void 0, {
      type: ActionTypes.INIT
    });
    if (typeof initialState3 === "undefined") {
      throw new Error(false ? formatProdErrorMessage(12) : 'The slice reducer for key "' + key + `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    }
    if (typeof reducer(void 0, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(false ? formatProdErrorMessage(13) : 'The slice reducer for key "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle '" + ActionTypes.INIT + `' or other actions in "redux/*" `) + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
    }
  });
}
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];
    if (true) {
      if (typeof reducers[key] === "undefined") {
        warning('No reducer provided for key "' + key + '"');
      }
    }
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);
  var unexpectedKeyCache;
  if (true) {
    unexpectedKeyCache = {};
  }
  var shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }
  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }
    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        var actionType = action && action.type;
        throw new Error(false ? formatProdErrorMessage(14) : "When called with an action of type " + (actionType ? '"' + String(actionType) + '"' : "(unknown type)") + ', the slice reducer for key "' + _key + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

// node_modules/dnd-core/dist/esm/utils/equality.js
var strictEquality = function strictEquality2(a, b) {
  return a === b;
};
function areCoordsEqual(offsetA, offsetB) {
  if (!offsetA && !offsetB) {
    return true;
  } else if (!offsetA || !offsetB) {
    return false;
  } else {
    return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
  }
}
function areArraysEqual(a, b) {
  var isEqual2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : strictEquality;
  if (a.length !== b.length) {
    return false;
  }
  for (var i = 0; i < a.length; ++i) {
    if (!isEqual2(a[i], b[i])) {
      return false;
    }
  }
  return true;
}

// node_modules/dnd-core/dist/esm/reducers/dragOffset.js
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys3(Object(source), true).forEach(function(key) {
        _defineProperty10(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys3(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty10(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var initialState = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function reduce() {
  var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : void 0;
  var payload = action.payload;
  switch (action.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };
    case HOVER:
      if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
        return state;
      }
      return _objectSpread3(_objectSpread3({}, state), {}, {
        clientOffset: payload.clientOffset
      });
    case END_DRAG:
    case DROP:
      return initialState;
    default:
      return state;
  }
}

// node_modules/dnd-core/dist/esm/actions/registry.js
var ADD_SOURCE = "dnd-core/ADD_SOURCE";
var ADD_TARGET = "dnd-core/ADD_TARGET";
var REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE";
var REMOVE_TARGET = "dnd-core/REMOVE_TARGET";
function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId
    }
  };
}
function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId
    }
  };
}
function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId
    }
  };
}
function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId
    }
  };
}

// node_modules/dnd-core/dist/esm/reducers/dragOperation.js
function ownKeys4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys4(Object(source), true).forEach(function(key) {
        _defineProperty11(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys4(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty11(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var initialState2 = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};
function reduce2() {
  var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState2;
  var action = arguments.length > 1 ? arguments[1] : void 0;
  var payload = action.payload;
  switch (action.type) {
    case BEGIN_DRAG:
      return _objectSpread4(_objectSpread4({}, state), {}, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: false
      });
    case PUBLISH_DRAG_SOURCE:
      return _objectSpread4(_objectSpread4({}, state), {}, {
        isSourcePublic: true
      });
    case HOVER:
      return _objectSpread4(_objectSpread4({}, state), {}, {
        targetIds: payload.targetIds
      });
    case REMOVE_TARGET:
      if (state.targetIds.indexOf(payload.targetId) === -1) {
        return state;
      }
      return _objectSpread4(_objectSpread4({}, state), {}, {
        targetIds: without2(state.targetIds, payload.targetId)
      });
    case DROP:
      return _objectSpread4(_objectSpread4({}, state), {}, {
        dropResult: payload.dropResult,
        didDrop: true,
        targetIds: []
      });
    case END_DRAG:
      return _objectSpread4(_objectSpread4({}, state), {}, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return state;
  }
}

// node_modules/dnd-core/dist/esm/reducers/refCount.js
function reduce3() {
  var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : void 0;
  switch (action.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;
    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;
    default:
      return state;
  }
}

// node_modules/dnd-core/dist/esm/utils/dirtiness.js
var NONE = [];
var ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
function areDirty(dirtyIds, handlerIds) {
  if (dirtyIds === NONE) {
    return false;
  }
  if (dirtyIds === ALL || typeof handlerIds === "undefined") {
    return true;
  }
  var commonIds = intersection(handlerIds, dirtyIds);
  return commonIds.length > 0;
}

// node_modules/dnd-core/dist/esm/reducers/dirtyHandlerIds.js
function reduce4() {
  var _state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : NONE;
  var action = arguments.length > 1 ? arguments[1] : void 0;
  switch (action.type) {
    case HOVER:
      break;
    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;
    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }
  var _action$payload = action.payload, _action$payload$targe = _action$payload.targetIds, targetIds = _action$payload$targe === void 0 ? [] : _action$payload$targe, _action$payload$prevT = _action$payload.prevTargetIds, prevTargetIds = _action$payload$prevT === void 0 ? [] : _action$payload$prevT;
  var result = xor(targetIds, prevTargetIds);
  var didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);
  if (!didChange) {
    return NONE;
  }
  var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
  var innermostTargetId = targetIds[targetIds.length - 1];
  if (prevInnermostTargetId !== innermostTargetId) {
    if (prevInnermostTargetId) {
      result.push(prevInnermostTargetId);
    }
    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }
  return result;
}

// node_modules/dnd-core/dist/esm/reducers/stateId.js
function reduce5() {
  var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return state + 1;
}

// node_modules/dnd-core/dist/esm/reducers/index.js
function ownKeys5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys5(Object(source), true).forEach(function(key) {
        _defineProperty12(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys5(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty12(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function reduce6() {
  var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: reduce4(state.dirtyHandlerIds, {
      type: action.type,
      payload: _objectSpread5(_objectSpread5({}, action.payload), {}, {
        prevTargetIds: get(state, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: reduce(state.dragOffset, action),
    refCount: reduce3(state.refCount, action),
    dragOperation: reduce2(state.dragOperation, action),
    stateId: reduce5(state.stateId)
  };
}

// node_modules/dnd-core/dist/esm/utils/coords.js
function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function getSourceClientOffset(state) {
  var clientOffset = state.clientOffset, initialClientOffset = state.initialClientOffset, initialSourceClientOffset = state.initialSourceClientOffset;
  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }
  return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
function getDifferenceFromInitialOffset(state) {
  var clientOffset = state.clientOffset, initialClientOffset = state.initialClientOffset;
  if (!clientOffset || !initialClientOffset) {
    return null;
  }
  return subtract(clientOffset, initialClientOffset);
}

// node_modules/dnd-core/dist/esm/classes/DragDropMonitorImpl.js
function _classCallCheck7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties7(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass7(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties7(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties7(Constructor, staticProps);
  return Constructor;
}
function _defineProperty13(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DragDropMonitorImpl = /* @__PURE__ */ function() {
  function DragDropMonitorImpl2(store, registry) {
    _classCallCheck7(this, DragDropMonitorImpl2);
    _defineProperty13(this, "store", void 0);
    _defineProperty13(this, "registry", void 0);
    this.store = store;
    this.registry = registry;
  }
  _createClass7(DragDropMonitorImpl2, [{
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        handlerIds: void 0
      };
      var handlerIds = options.handlerIds;
      invariant(typeof listener === "function", "listener must be a function.");
      invariant(typeof handlerIds === "undefined" || Array.isArray(handlerIds), "handlerIds, when specified, must be an array of strings.");
      var prevStateId = this.store.getState().stateId;
      var handleChange = function handleChange2() {
        var state = _this.store.getState();
        var currentStateId = state.stateId;
        try {
          var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);
          if (!canSkipListener) {
            listener();
          }
        } finally {
          prevStateId = currentStateId;
        }
      };
      return this.store.subscribe(handleChange);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      var _this2 = this;
      invariant(typeof listener === "function", "listener must be a function.");
      var previousState = this.store.getState().dragOffset;
      var handleChange = function handleChange2() {
        var nextState = _this2.store.getState().dragOffset;
        if (nextState === previousState) {
          return;
        }
        previousState = nextState;
        listener();
      };
      return this.store.subscribe(handleChange);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      if (!sourceId) {
        return false;
      }
      var source = this.registry.getSource(sourceId);
      invariant(source, "Expected to find a valid source. sourceId=".concat(sourceId));
      if (this.isDragging()) {
        return false;
      }
      return source.canDrag(this, sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      if (!targetId) {
        return false;
      }
      var target = this.registry.getTarget(targetId);
      invariant(target, "Expected to find a valid target. targetId=".concat(targetId));
      if (!this.isDragging() || this.didDrop()) {
        return false;
      }
      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      return Boolean(this.getItemType());
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      if (!sourceId) {
        return false;
      }
      var source = this.registry.getSource(sourceId, true);
      invariant(source, "Expected to find a valid source. sourceId=".concat(sourceId));
      if (!this.isDragging() || !this.isSourcePublic()) {
        return false;
      }
      var sourceType = this.registry.getSourceType(sourceId);
      var draggedItemType = this.getItemType();
      if (sourceType !== draggedItemType) {
        return false;
      }
      return source.isDragging(this, sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        shallow: false
      };
      if (!targetId) {
        return false;
      }
      var shallow = options.shallow;
      if (!this.isDragging()) {
        return false;
      }
      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      if (draggedItemType && !matchesType(targetType, draggedItemType)) {
        return false;
      }
      var targetIds = this.getTargetIds();
      if (!targetIds.length) {
        return false;
      }
      var index = targetIds.indexOf(targetId);
      if (shallow) {
        return index === targetIds.length - 1;
      } else {
        return index > -1;
      }
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.store.getState().dragOperation.itemType;
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.store.getState().dragOperation.item;
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.store.getState().dragOperation.sourceId;
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.store.getState().dragOperation.targetIds;
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.store.getState().dragOperation.dropResult;
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.store.getState().dragOperation.didDrop;
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return Boolean(this.store.getState().dragOperation.isSourcePublic);
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.store.getState().dragOffset.initialClientOffset;
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.store.getState().dragOffset.clientOffset;
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset2() {
      return getSourceClientOffset(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset2() {
      return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
    }
  }]);
  return DragDropMonitorImpl2;
}();

// node_modules/dnd-core/dist/esm/utils/getNextUniqueId.js
var nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}

// node_modules/dnd-core/dist/esm/contracts.js
function _typeof3(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof3 = function _typeof6(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof3 = function _typeof6(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof3(obj);
}
function validateSourceContract(source) {
  invariant(typeof source.canDrag === "function", "Expected canDrag to be a function.");
  invariant(typeof source.beginDrag === "function", "Expected beginDrag to be a function.");
  invariant(typeof source.endDrag === "function", "Expected endDrag to be a function.");
}
function validateTargetContract(target) {
  invariant(typeof target.canDrop === "function", "Expected canDrop to be a function.");
  invariant(typeof target.hover === "function", "Expected hover to be a function.");
  invariant(typeof target.drop === "function", "Expected beginDrag to be a function.");
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(function(t) {
      return validateType(t, false);
    });
    return;
  }
  invariant(typeof type === "string" || _typeof3(type) === "symbol", allowArray ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}

// node_modules/@react-dnd/asap/dist/esm/makeRequestCall.mjs
var scope = typeof globalThis !== "undefined" ? globalThis : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
  return function requestCall() {
    const timeoutHandle = setTimeout(handleTimer, 0);
    const intervalHandle = setInterval(handleTimer, 50);
    function handleTimer() {
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      callback();
    }
  };
}
function makeRequestCallFromMutationObserver(callback) {
  let toggle = 1;
  const observer = new BrowserMutationObserver(callback);
  const node = document.createTextNode("");
  observer.observe(node, {
    characterData: true
  });
  return function requestCall() {
    toggle = -toggle;
    node.data = toggle;
  };
}
var makeRequestCall = typeof BrowserMutationObserver === "function" ? makeRequestCallFromMutationObserver : makeRequestCallFromTimer;

// node_modules/@react-dnd/asap/dist/esm/AsapQueue.mjs
var AsapQueue = class {
  enqueueTask(task) {
    const { queue: q, requestFlush } = this;
    if (!q.length) {
      requestFlush();
      this.flushing = true;
    }
    q[q.length] = task;
  }
  constructor() {
    this.queue = [];
    this.pendingErrors = [];
    this.flushing = false;
    this.index = 0;
    this.capacity = 1024;
    this.flush = () => {
      const { queue: q } = this;
      while (this.index < q.length) {
        const currentIndex = this.index;
        this.index++;
        q[currentIndex].call();
        if (this.index > this.capacity) {
          for (let scan = 0, newLength = q.length - this.index; scan < newLength; scan++) {
            q[scan] = q[scan + this.index];
          }
          q.length -= this.index;
          this.index = 0;
        }
      }
      q.length = 0;
      this.index = 0;
      this.flushing = false;
    };
    this.registerPendingError = (err) => {
      this.pendingErrors.push(err);
      this.requestErrorThrow();
    };
    this.requestFlush = makeRequestCall(this.flush);
    this.requestErrorThrow = makeRequestCallFromTimer(() => {
      if (this.pendingErrors.length) {
        throw this.pendingErrors.shift();
      }
    });
  }
};

// node_modules/@react-dnd/asap/dist/esm/RawTask.mjs
var RawTask = class {
  call() {
    try {
      this.task && this.task();
    } catch (error) {
      this.onError(error);
    } finally {
      this.task = null;
      this.release(this);
    }
  }
  constructor(onError, release) {
    this.onError = onError;
    this.release = release;
    this.task = null;
  }
};

// node_modules/@react-dnd/asap/dist/esm/TaskFactory.mjs
var TaskFactory = class {
  create(task) {
    const tasks = this.freeTasks;
    const t1 = tasks.length ? tasks.pop() : new RawTask(
      this.onError,
      (t) => tasks[tasks.length] = t
    );
    t1.task = task;
    return t1;
  }
  constructor(onError) {
    this.onError = onError;
    this.freeTasks = [];
  }
};

// node_modules/@react-dnd/asap/dist/esm/asap.mjs
var asapQueue = new AsapQueue();
var taskFactory = new TaskFactory(asapQueue.registerPendingError);
function asap(task) {
  asapQueue.enqueueTask(taskFactory.create(task));
}

// node_modules/dnd-core/dist/esm/classes/HandlerRegistryImpl.js
function _classCallCheck8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties8(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass8(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties8(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties8(Constructor, staticProps);
  return Constructor;
}
function _defineProperty14(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function getNextHandlerId(role) {
  var id = getNextUniqueId().toString();
  switch (role) {
    case HandlerRole.SOURCE:
      return "S".concat(id);
    case HandlerRole.TARGET:
      return "T".concat(id);
    default:
      throw new Error("Unknown Handler Role: ".concat(role));
  }
}
function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case "S":
      return HandlerRole.SOURCE;
    case "T":
      return HandlerRole.TARGET;
    default:
      invariant(false, "Cannot parse handler ID: ".concat(handlerId));
  }
}
function mapContainsValue(map, searchValue) {
  var entries = map.entries();
  var isDone = false;
  do {
    var _entries$next = entries.next(), done = _entries$next.done, _entries$next$value = _slicedToArray(_entries$next.value, 2), value = _entries$next$value[1];
    if (value === searchValue) {
      return true;
    }
    isDone = !!done;
  } while (!isDone);
  return false;
}
var HandlerRegistryImpl = /* @__PURE__ */ function() {
  function HandlerRegistryImpl2(store) {
    _classCallCheck8(this, HandlerRegistryImpl2);
    _defineProperty14(this, "types", /* @__PURE__ */ new Map());
    _defineProperty14(this, "dragSources", /* @__PURE__ */ new Map());
    _defineProperty14(this, "dropTargets", /* @__PURE__ */ new Map());
    _defineProperty14(this, "pinnedSourceId", null);
    _defineProperty14(this, "pinnedSource", null);
    _defineProperty14(this, "store", void 0);
    this.store = store;
  }
  _createClass8(HandlerRegistryImpl2, [{
    key: "addSource",
    value: function addSource2(type, source) {
      validateType(type);
      validateSourceContract(source);
      var sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
      this.store.dispatch(addSource(sourceId));
      return sourceId;
    }
  }, {
    key: "addTarget",
    value: function addTarget2(type, target) {
      validateType(type, true);
      validateTargetContract(target);
      var targetId = this.addHandler(HandlerRole.TARGET, type, target);
      this.store.dispatch(addTarget(targetId));
      return targetId;
    }
  }, {
    key: "containsHandler",
    value: function containsHandler(handler) {
      return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
    }
  }, {
    key: "getSource",
    value: function getSource(sourceId) {
      var includePinned = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      invariant(this.isSourceId(sourceId), "Expected a valid source ID.");
      var isPinned = includePinned && sourceId === this.pinnedSourceId;
      var source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
      return source;
    }
  }, {
    key: "getTarget",
    value: function getTarget(targetId) {
      invariant(this.isTargetId(targetId), "Expected a valid target ID.");
      return this.dropTargets.get(targetId);
    }
  }, {
    key: "getSourceType",
    value: function getSourceType(sourceId) {
      invariant(this.isSourceId(sourceId), "Expected a valid source ID.");
      return this.types.get(sourceId);
    }
  }, {
    key: "getTargetType",
    value: function getTargetType(targetId) {
      invariant(this.isTargetId(targetId), "Expected a valid target ID.");
      return this.types.get(targetId);
    }
  }, {
    key: "isSourceId",
    value: function isSourceId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRole.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function isTargetId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRole.TARGET;
    }
  }, {
    key: "removeSource",
    value: function removeSource2(sourceId) {
      var _this = this;
      invariant(this.getSource(sourceId), "Expected an existing source.");
      this.store.dispatch(removeSource(sourceId));
      asap(function() {
        _this.dragSources.delete(sourceId);
        _this.types.delete(sourceId);
      });
    }
  }, {
    key: "removeTarget",
    value: function removeTarget2(targetId) {
      invariant(this.getTarget(targetId), "Expected an existing target.");
      this.store.dispatch(removeTarget(targetId));
      this.dropTargets.delete(targetId);
      this.types.delete(targetId);
    }
  }, {
    key: "pinSource",
    value: function pinSource(sourceId) {
      var source = this.getSource(sourceId);
      invariant(source, "Expected an existing source.");
      this.pinnedSourceId = sourceId;
      this.pinnedSource = source;
    }
  }, {
    key: "unpinSource",
    value: function unpinSource() {
      invariant(this.pinnedSource, "No source is pinned at the time.");
      this.pinnedSourceId = null;
      this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function addHandler(role, type, handler) {
      var id = getNextHandlerId(role);
      this.types.set(id, type);
      if (role === HandlerRole.SOURCE) {
        this.dragSources.set(id, handler);
      } else if (role === HandlerRole.TARGET) {
        this.dropTargets.set(id, handler);
      }
      return id;
    }
  }]);
  return HandlerRegistryImpl2;
}();

// node_modules/dnd-core/dist/esm/createDragDropManager.js
function createDragDropManager(backendFactory) {
  var globalContext = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  var backendOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var debugMode = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  var store = makeStoreInstance(debugMode);
  var monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
  var manager = new DragDropManagerImpl(store, monitor);
  var backend = backendFactory(manager, globalContext, backendOptions);
  manager.receiveBackend(backend);
  return manager;
}
function makeStoreInstance(debugMode) {
  var reduxDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return createStore(reduce6, debugMode && reduxDevTools && reduxDevTools({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}

// node_modules/react-dnd/dist/esm/core/DndProvider.js
var _excluded = ["children"];
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit2(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var refCount = 0;
var INSTANCE_SYM = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var DndProvider = (0, import_react2.memo)(function DndProvider2(_ref) {
  var children = _ref.children, props = _objectWithoutProperties(_ref, _excluded);
  var _getDndContextValue = getDndContextValue(props), _getDndContextValue2 = _slicedToArray2(_getDndContextValue, 2), manager = _getDndContextValue2[0], isGlobalInstance = _getDndContextValue2[1];
  (0, import_react2.useEffect)(function() {
    if (isGlobalInstance) {
      var context = getGlobalContext();
      ++refCount;
      return function() {
        if (--refCount === 0) {
          context[INSTANCE_SYM] = null;
        }
      };
    }
  }, []);
  return (0, import_jsx_runtime.jsx)(DndContext.Provider, Object.assign({
    value: manager
  }, {
    children
  }), void 0);
});
function getDndContextValue(props) {
  if ("manager" in props) {
    var _manager = {
      dragDropManager: props.manager
    };
    return [_manager, false];
  }
  var manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  var isGlobalInstance = !props.context;
  return [manager, isGlobalInstance];
}
function createSingletonDndContext(backend) {
  var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getGlobalContext();
  var options = arguments.length > 2 ? arguments[2] : void 0;
  var debugMode = arguments.length > 3 ? arguments[3] : void 0;
  var ctx = context;
  if (!ctx[INSTANCE_SYM]) {
    ctx[INSTANCE_SYM] = {
      dragDropManager: createDragDropManager(backend, context, options, debugMode)
    };
  }
  return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
  return typeof globalThis !== "undefined" ? globalThis : window;
}

// node_modules/react-dnd/dist/esm/internals/DragSourceMonitorImpl.js
function _classCallCheck9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties9(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass9(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties9(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties9(Constructor, staticProps);
  return Constructor;
}
function _defineProperty15(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var isCallingCanDrag = false;
var isCallingIsDragging = false;
var DragSourceMonitorImpl = /* @__PURE__ */ function() {
  function DragSourceMonitorImpl2(manager) {
    _classCallCheck9(this, DragSourceMonitorImpl2);
    _defineProperty15(this, "internalMonitor", void 0);
    _defineProperty15(this, "sourceId", null);
    this.internalMonitor = manager.getMonitor();
  }
  _createClass9(DragSourceMonitorImpl2, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(sourceId) {
      this.sourceId = sourceId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      invariant(!isCallingCanDrag, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        isCallingCanDrag = true;
        return this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        isCallingCanDrag = false;
      }
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      if (!this.sourceId) {
        return false;
      }
      invariant(!isCallingIsDragging, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        isCallingIsDragging = true;
        return this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        isCallingIsDragging = false;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      return this.internalMonitor.isDraggingSource(sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId, options) {
      return this.internalMonitor.isOverTarget(targetId, options);
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.internalMonitor.getTargetIds();
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return this.internalMonitor.isSourcePublic();
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.internalMonitor.getSourceId();
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      return this.internalMonitor.subscribeToOffsetChange(listener);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      return this.internalMonitor.canDragSource(sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      return this.internalMonitor.canDropOnTarget(targetId);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset2() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset2() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);
  return DragSourceMonitorImpl2;
}();

// node_modules/react-dnd/dist/esm/internals/DropTargetMonitorImpl.js
function _classCallCheck10(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties10(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass10(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties10(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties10(Constructor, staticProps);
  return Constructor;
}
function _defineProperty16(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var isCallingCanDrop = false;
var DropTargetMonitorImpl = /* @__PURE__ */ function() {
  function DropTargetMonitorImpl2(manager) {
    _classCallCheck10(this, DropTargetMonitorImpl2);
    _defineProperty16(this, "internalMonitor", void 0);
    _defineProperty16(this, "targetId", null);
    this.internalMonitor = manager.getMonitor();
  }
  _createClass10(DropTargetMonitorImpl2, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(targetId) {
      this.targetId = targetId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "canDrop",
    value: function canDrop() {
      if (!this.targetId) {
        return false;
      }
      invariant(!isCallingCanDrop, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        isCallingCanDrop = true;
        return this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        isCallingCanDrop = false;
      }
    }
  }, {
    key: "isOver",
    value: function isOver(options) {
      if (!this.targetId) {
        return false;
      }
      return this.internalMonitor.isOverTarget(this.targetId, options);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset2() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset2() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);
  return DropTargetMonitorImpl2;
}();

// node_modules/react-dnd/dist/esm/internals/wrapConnectorHooks.js
var import_react3 = __toESM(require_react());
function throwIfCompositeComponentElement(element) {
  if (typeof element.type === "string") {
    return;
  }
  var displayName = element.type.displayName || element.type.name || "the component";
  throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(displayName, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
}
function wrapHookToRecognizeElement(hook) {
  return function() {
    var elementOrNode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!(0, import_react3.isValidElement)(elementOrNode)) {
      var node = elementOrNode;
      hook(node, options);
      return node;
    }
    var element = elementOrNode;
    throwIfCompositeComponentElement(element);
    var ref = options ? function(node2) {
      return hook(node2, options);
    } : hook;
    return cloneWithRef(element, ref);
  };
}
function wrapConnectorHooks(hooks) {
  var wrappedHooks = {};
  Object.keys(hooks).forEach(function(key) {
    var hook = hooks[key];
    if (key.endsWith("Ref")) {
      wrappedHooks[key] = hooks[key];
    } else {
      var wrappedHook = wrapHookToRecognizeElement(hook);
      wrappedHooks[key] = function() {
        return wrappedHook;
      };
    }
  });
  return wrappedHooks;
}
function setRef(ref, node) {
  if (typeof ref === "function") {
    ref(node);
  } else {
    ref.current = node;
  }
}
function cloneWithRef(element, newRef) {
  var previousRef = element.ref;
  invariant(typeof previousRef !== "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs");
  if (!previousRef) {
    return (0, import_react3.cloneElement)(element, {
      ref: newRef
    });
  } else {
    return (0, import_react3.cloneElement)(element, {
      ref: function ref(node) {
        setRef(previousRef, node);
        setRef(newRef, node);
      }
    });
  }
}

// node_modules/react-dnd/dist/esm/internals/isRef.js
function _typeof4(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof4 = function _typeof6(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof4 = function _typeof6(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof4(obj);
}
function isRef(obj) {
  return obj !== null && _typeof4(obj) === "object" && Object.prototype.hasOwnProperty.call(obj, "current");
}

// node_modules/@react-dnd/shallowequal/dist/shallowequal.esm.js
function shallowEqual(objA, objB, compare, compareContext) {
  var compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (compareResult !== void 0) {
    return !!compareResult;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    var valueA = objA[key];
    var valueB = objB[key];
    compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
}

// node_modules/react-dnd/dist/esm/internals/SourceConnector.js
function _classCallCheck11(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties11(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass11(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties11(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties11(Constructor, staticProps);
  return Constructor;
}
function _defineProperty17(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var SourceConnector = /* @__PURE__ */ function() {
  function SourceConnector2(backend) {
    var _this = this;
    _classCallCheck11(this, SourceConnector2);
    _defineProperty17(this, "hooks", wrapConnectorHooks({
      dragSource: function dragSource(node, options) {
        _this.clearDragSource();
        _this.dragSourceOptions = options || null;
        if (isRef(node)) {
          _this.dragSourceRef = node;
        } else {
          _this.dragSourceNode = node;
        }
        _this.reconnectDragSource();
      },
      dragPreview: function dragPreview(node, options) {
        _this.clearDragPreview();
        _this.dragPreviewOptions = options || null;
        if (isRef(node)) {
          _this.dragPreviewRef = node;
        } else {
          _this.dragPreviewNode = node;
        }
        _this.reconnectDragPreview();
      }
    }));
    _defineProperty17(this, "handlerId", null);
    _defineProperty17(this, "dragSourceRef", null);
    _defineProperty17(this, "dragSourceNode", void 0);
    _defineProperty17(this, "dragSourceOptionsInternal", null);
    _defineProperty17(this, "dragSourceUnsubscribe", void 0);
    _defineProperty17(this, "dragPreviewRef", null);
    _defineProperty17(this, "dragPreviewNode", void 0);
    _defineProperty17(this, "dragPreviewOptionsInternal", null);
    _defineProperty17(this, "dragPreviewUnsubscribe", void 0);
    _defineProperty17(this, "lastConnectedHandlerId", null);
    _defineProperty17(this, "lastConnectedDragSource", null);
    _defineProperty17(this, "lastConnectedDragSourceOptions", null);
    _defineProperty17(this, "lastConnectedDragPreview", null);
    _defineProperty17(this, "lastConnectedDragPreviewOptions", null);
    _defineProperty17(this, "backend", void 0);
    this.backend = backend;
  }
  _createClass11(SourceConnector2, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (this.handlerId === newHandlerId) {
        return;
      }
      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "connectTarget",
    get: function get2() {
      return this.dragSource;
    }
  }, {
    key: "dragSourceOptions",
    get: function get2() {
      return this.dragSourceOptionsInternal;
    },
    set: function set(options) {
      this.dragSourceOptionsInternal = options;
    }
  }, {
    key: "dragPreviewOptions",
    get: function get2() {
      return this.dragPreviewOptionsInternal;
    },
    set: function set(options) {
      this.dragPreviewOptionsInternal = options;
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      this.reconnectDragSource();
      this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function reconnectDragSource() {
      var dragSource = this.dragSource;
      var didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
      if (didChange) {
        this.disconnectDragSource();
      }
      if (!this.handlerId) {
        return;
      }
      if (!dragSource) {
        this.lastConnectedDragSource = dragSource;
        return;
      }
      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragSource = dragSource;
        this.lastConnectedDragSourceOptions = this.dragSourceOptions;
        this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function reconnectDragPreview() {
      var dragPreview = this.dragPreview;
      var didChange = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
      if (didChange) {
        this.disconnectDragPreview();
      }
      if (!this.handlerId) {
        return;
      }
      if (!dragPreview) {
        this.lastConnectedDragPreview = dragPreview;
        return;
      }
      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragPreview = dragPreview;
        this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
        this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
      }
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didConnectedDragSourceChange",
    value: function didConnectedDragSourceChange() {
      return this.lastConnectedDragSource !== this.dragSource;
    }
  }, {
    key: "didConnectedDragPreviewChange",
    value: function didConnectedDragPreviewChange() {
      return this.lastConnectedDragPreview !== this.dragPreview;
    }
  }, {
    key: "didDragSourceOptionsChange",
    value: function didDragSourceOptionsChange() {
      return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function didDragPreviewOptionsChange() {
      return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
  }, {
    key: "disconnectDragSource",
    value: function disconnectDragSource() {
      if (this.dragSourceUnsubscribe) {
        this.dragSourceUnsubscribe();
        this.dragSourceUnsubscribe = void 0;
      }
    }
  }, {
    key: "disconnectDragPreview",
    value: function disconnectDragPreview() {
      if (this.dragPreviewUnsubscribe) {
        this.dragPreviewUnsubscribe();
        this.dragPreviewUnsubscribe = void 0;
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
      }
    }
  }, {
    key: "dragSource",
    get: function get2() {
      return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
  }, {
    key: "dragPreview",
    get: function get2() {
      return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
  }, {
    key: "clearDragSource",
    value: function clearDragSource() {
      this.dragSourceNode = null;
      this.dragSourceRef = null;
    }
  }, {
    key: "clearDragPreview",
    value: function clearDragPreview() {
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }]);
  return SourceConnector2;
}();

// node_modules/react-dnd/dist/esm/internals/TargetConnector.js
function _classCallCheck12(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties12(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass12(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties12(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties12(Constructor, staticProps);
  return Constructor;
}
function _defineProperty18(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var TargetConnector = /* @__PURE__ */ function() {
  function TargetConnector2(backend) {
    var _this = this;
    _classCallCheck12(this, TargetConnector2);
    _defineProperty18(this, "hooks", wrapConnectorHooks({
      dropTarget: function dropTarget(node, options) {
        _this.clearDropTarget();
        _this.dropTargetOptions = options;
        if (isRef(node)) {
          _this.dropTargetRef = node;
        } else {
          _this.dropTargetNode = node;
        }
        _this.reconnect();
      }
    }));
    _defineProperty18(this, "handlerId", null);
    _defineProperty18(this, "dropTargetRef", null);
    _defineProperty18(this, "dropTargetNode", void 0);
    _defineProperty18(this, "dropTargetOptionsInternal", null);
    _defineProperty18(this, "unsubscribeDropTarget", void 0);
    _defineProperty18(this, "lastConnectedHandlerId", null);
    _defineProperty18(this, "lastConnectedDropTarget", null);
    _defineProperty18(this, "lastConnectedDropTargetOptions", null);
    _defineProperty18(this, "backend", void 0);
    this.backend = backend;
  }
  _createClass12(TargetConnector2, [{
    key: "connectTarget",
    get: function get2() {
      return this.dropTarget;
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      var didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
      if (didChange) {
        this.disconnectDropTarget();
      }
      var dropTarget = this.dropTarget;
      if (!this.handlerId) {
        return;
      }
      if (!dropTarget) {
        this.lastConnectedDropTarget = dropTarget;
        return;
      }
      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDropTarget = dropTarget;
        this.lastConnectedDropTargetOptions = this.dropTargetOptions;
        this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (newHandlerId === this.handlerId) {
        return;
      }
      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "dropTargetOptions",
    get: function get2() {
      return this.dropTargetOptionsInternal;
    },
    set: function set(options) {
      this.dropTargetOptionsInternal = options;
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didDropTargetChange",
    value: function didDropTargetChange() {
      return this.lastConnectedDropTarget !== this.dropTarget;
    }
  }, {
    key: "didOptionsChange",
    value: function didOptionsChange() {
      return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
  }, {
    key: "disconnectDropTarget",
    value: function disconnectDropTarget() {
      if (this.unsubscribeDropTarget) {
        this.unsubscribeDropTarget();
        this.unsubscribeDropTarget = void 0;
      }
    }
  }, {
    key: "dropTarget",
    get: function get2() {
      return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
  }, {
    key: "clearDropTarget",
    value: function clearDropTarget() {
      this.dropTargetRef = null;
      this.dropTargetNode = null;
    }
  }]);
  return TargetConnector2;
}();

// node_modules/react-dnd/dist/esm/internals/registration.js
function registerTarget(type, target, manager) {
  var registry = manager.getRegistry();
  var targetId = registry.addTarget(type, target);
  return [targetId, function() {
    return registry.removeTarget(targetId);
  }];
}
function registerSource(type, source, manager) {
  var registry = manager.getRegistry();
  var sourceId = registry.addSource(type, source);
  return [sourceId, function() {
    return registry.removeSource(sourceId);
  }];
}

// node_modules/react-dnd/dist/esm/hooks/useIsomorphicLayoutEffect.js
var import_react4 = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react4.useLayoutEffect : import_react4.useEffect;

// node_modules/react-dnd/dist/esm/hooks/useDrag/useDragSource.js
var import_react5 = __toESM(require_react());

// node_modules/react-dnd/dist/esm/hooks/useDrag/DragSourceImpl.js
function _typeof5(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof5 = function _typeof6(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof5 = function _typeof6(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof5(obj);
}
function _classCallCheck13(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties13(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass13(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties13(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties13(Constructor, staticProps);
  return Constructor;
}
function _defineProperty19(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DragSourceImpl = /* @__PURE__ */ function() {
  function DragSourceImpl2(spec, monitor, connector) {
    _classCallCheck13(this, DragSourceImpl2);
    _defineProperty19(this, "spec", void 0);
    _defineProperty19(this, "monitor", void 0);
    _defineProperty19(this, "connector", void 0);
    this.spec = spec;
    this.monitor = monitor;
    this.connector = connector;
  }
  _createClass13(DragSourceImpl2, [{
    key: "beginDrag",
    value: function beginDrag() {
      var _result;
      var spec = this.spec;
      var monitor = this.monitor;
      var result = null;
      if (_typeof5(spec.item) === "object") {
        result = spec.item;
      } else if (typeof spec.item === "function") {
        result = spec.item(monitor);
      } else {
        result = {};
      }
      return (_result = result) !== null && _result !== void 0 ? _result : null;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      var spec = this.spec;
      var monitor = this.monitor;
      if (typeof spec.canDrag === "boolean") {
        return spec.canDrag;
      } else if (typeof spec.canDrag === "function") {
        return spec.canDrag(monitor);
      } else {
        return true;
      }
    }
  }, {
    key: "isDragging",
    value: function isDragging(globalMonitor, target) {
      var spec = this.spec;
      var monitor = this.monitor;
      var isDragging2 = spec.isDragging;
      return isDragging2 ? isDragging2(monitor) : target === globalMonitor.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function endDrag() {
      var spec = this.spec;
      var monitor = this.monitor;
      var connector = this.connector;
      var end = spec.end;
      if (end) {
        end(monitor.getItem(), monitor);
      }
      connector.reconnect();
    }
  }]);
  return DragSourceImpl2;
}();

// node_modules/react-dnd/dist/esm/hooks/useDrag/useDragSource.js
function useDragSource(spec, monitor, connector) {
  var handler = (0, import_react5.useMemo)(function() {
    return new DragSourceImpl(spec, monitor, connector);
  }, [monitor, connector]);
  (0, import_react5.useEffect)(function() {
    handler.spec = spec;
  }, [spec]);
  return handler;
}

// node_modules/react-dnd/dist/esm/hooks/useDragDropManager.js
var import_react6 = __toESM(require_react());
function useDragDropManager() {
  var _useContext = (0, import_react6.useContext)(DndContext), dragDropManager = _useContext.dragDropManager;
  invariant(dragDropManager != null, "Expected drag drop context");
  return dragDropManager;
}

// node_modules/react-dnd/dist/esm/hooks/useDrag/useDragType.js
var import_react7 = __toESM(require_react());
function useDragType(spec) {
  return (0, import_react7.useMemo)(function() {
    var result = spec.type;
    invariant(result != null, "spec.type must be defined");
    return result;
  }, [spec]);
}

// node_modules/react-dnd/dist/esm/hooks/useDrag/useRegisteredDragSource.js
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray3(o, minLen);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit3(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr))
    return arr;
}
function useRegisteredDragSource(spec, monitor, connector) {
  var manager = useDragDropManager();
  var handler = useDragSource(spec, monitor, connector);
  var itemType = useDragType(spec);
  useIsomorphicLayoutEffect(function registerDragSource() {
    if (itemType != null) {
      var _registerSource = registerSource(itemType, handler, manager), _registerSource2 = _slicedToArray3(_registerSource, 2), handlerId = _registerSource2[0], unregister = _registerSource2[1];
      monitor.receiveHandlerId(handlerId);
      connector.receiveHandlerId(handlerId);
      return unregister;
    }
  }, [manager, monitor, connector, handler, itemType]);
}

// node_modules/react-dnd/dist/esm/hooks/useOptionalFactory.js
var import_react8 = __toESM(require_react());
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray4(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray4(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray4(arr);
}
function _arrayLikeToArray4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function useOptionalFactory(arg, deps) {
  var memoDeps = _toConsumableArray(deps || []);
  if (deps == null && typeof arg !== "function") {
    memoDeps.push(arg);
  }
  return (0, import_react8.useMemo)(function() {
    return typeof arg === "function" ? arg() : arg;
  }, memoDeps);
}

// node_modules/react-dnd/dist/esm/hooks/useDrag/useDragSourceMonitor.js
var import_react9 = __toESM(require_react());
function useDragSourceMonitor() {
  var manager = useDragDropManager();
  return (0, import_react9.useMemo)(function() {
    return new DragSourceMonitorImpl(manager);
  }, [manager]);
}

// node_modules/react-dnd/dist/esm/hooks/useDrag/useDragSourceConnector.js
var import_react10 = __toESM(require_react());
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
  var manager = useDragDropManager();
  var connector = (0, import_react10.useMemo)(function() {
    return new SourceConnector(manager.getBackend());
  }, [manager]);
  useIsomorphicLayoutEffect(function() {
    connector.dragSourceOptions = dragSourceOptions || null;
    connector.reconnect();
    return function() {
      return connector.disconnectDragSource();
    };
  }, [connector, dragSourceOptions]);
  useIsomorphicLayoutEffect(function() {
    connector.dragPreviewOptions = dragPreviewOptions || null;
    connector.reconnect();
    return function() {
      return connector.disconnectDragPreview();
    };
  }, [connector, dragPreviewOptions]);
  return connector;
}

// node_modules/react-dnd/dist/esm/hooks/useCollector.js
var import_fast_deep_equal = __toESM(require_fast_deep_equal());
var import_react11 = __toESM(require_react());
function _slicedToArray4(arr, i) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray5(arr, i) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray5(o, minLen);
}
function _arrayLikeToArray5(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit4(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles4(arr) {
  if (Array.isArray(arr))
    return arr;
}
function useCollector(monitor, collect, onUpdate) {
  var _useState = (0, import_react11.useState)(function() {
    return collect(monitor);
  }), _useState2 = _slicedToArray4(_useState, 2), collected = _useState2[0], setCollected = _useState2[1];
  var updateCollected = (0, import_react11.useCallback)(function() {
    var nextValue = collect(monitor);
    if (!(0, import_fast_deep_equal.default)(collected, nextValue)) {
      setCollected(nextValue);
      if (onUpdate) {
        onUpdate();
      }
    }
  }, [collected, monitor, onUpdate]);
  useIsomorphicLayoutEffect(updateCollected);
  return [collected, updateCollected];
}

// node_modules/react-dnd/dist/esm/hooks/useMonitorOutput.js
function _slicedToArray5(arr, i) {
  return _arrayWithHoles5(arr) || _iterableToArrayLimit5(arr, i) || _unsupportedIterableToArray6(arr, i) || _nonIterableRest5();
}
function _nonIterableRest5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray6(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray6(o, minLen);
}
function _arrayLikeToArray6(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit5(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles5(arr) {
  if (Array.isArray(arr))
    return arr;
}
function useMonitorOutput(monitor, collect, onCollect) {
  var _useCollector = useCollector(monitor, collect, onCollect), _useCollector2 = _slicedToArray5(_useCollector, 2), collected = _useCollector2[0], updateCollected = _useCollector2[1];
  useIsomorphicLayoutEffect(function subscribeToMonitorStateChange() {
    var handlerId = monitor.getHandlerId();
    if (handlerId == null) {
      return;
    }
    return monitor.subscribeToStateChange(updateCollected, {
      handlerIds: [handlerId]
    });
  }, [monitor, updateCollected]);
  return collected;
}

// node_modules/react-dnd/dist/esm/hooks/useCollectedProps.js
function useCollectedProps(collector, monitor, connector) {
  return useMonitorOutput(monitor, collector || function() {
    return {};
  }, function() {
    return connector.reconnect();
  });
}

// node_modules/react-dnd/dist/esm/hooks/useDrag/connectors.js
var import_react12 = __toESM(require_react());
function useConnectDragSource(connector) {
  return (0, import_react12.useMemo)(function() {
    return connector.hooks.dragSource();
  }, [connector]);
}
function useConnectDragPreview(connector) {
  return (0, import_react12.useMemo)(function() {
    return connector.hooks.dragPreview();
  }, [connector]);
}

// node_modules/react-dnd/dist/esm/hooks/useDrag/useDrag.js
function useDrag(specArg, deps) {
  var spec = useOptionalFactory(specArg, deps);
  invariant(!spec.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var monitor = useDragSourceMonitor();
  var connector = useDragSourceConnector(spec.options, spec.previewOptions);
  useRegisteredDragSource(spec, monitor, connector);
  return [useCollectedProps(spec.collect, monitor, connector), useConnectDragSource(connector), useConnectDragPreview(connector)];
}

// node_modules/react-dnd/dist/esm/hooks/useDrop/useAccept.js
var import_react13 = __toESM(require_react());
function useAccept(spec) {
  var accept = spec.accept;
  return (0, import_react13.useMemo)(function() {
    invariant(spec.accept != null, "accept must be defined");
    return Array.isArray(accept) ? accept : [accept];
  }, [accept]);
}

// node_modules/react-dnd/dist/esm/hooks/useDrop/useDropTarget.js
var import_react14 = __toESM(require_react());

// node_modules/react-dnd/dist/esm/hooks/useDrop/DropTargetImpl.js
function _classCallCheck14(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties14(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass14(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties14(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties14(Constructor, staticProps);
  return Constructor;
}
function _defineProperty20(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DropTargetImpl = /* @__PURE__ */ function() {
  function DropTargetImpl2(spec, monitor) {
    _classCallCheck14(this, DropTargetImpl2);
    _defineProperty20(this, "spec", void 0);
    _defineProperty20(this, "monitor", void 0);
    this.spec = spec;
    this.monitor = monitor;
  }
  _createClass14(DropTargetImpl2, [{
    key: "canDrop",
    value: function canDrop() {
      var spec = this.spec;
      var monitor = this.monitor;
      return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
    }
  }, {
    key: "hover",
    value: function hover() {
      var spec = this.spec;
      var monitor = this.monitor;
      if (spec.hover) {
        spec.hover(monitor.getItem(), monitor);
      }
    }
  }, {
    key: "drop",
    value: function drop() {
      var spec = this.spec;
      var monitor = this.monitor;
      if (spec.drop) {
        return spec.drop(monitor.getItem(), monitor);
      }
    }
  }]);
  return DropTargetImpl2;
}();

// node_modules/react-dnd/dist/esm/hooks/useDrop/useDropTarget.js
function useDropTarget(spec, monitor) {
  var dropTarget = (0, import_react14.useMemo)(function() {
    return new DropTargetImpl(spec, monitor);
  }, [monitor]);
  (0, import_react14.useEffect)(function() {
    dropTarget.spec = spec;
  }, [spec]);
  return dropTarget;
}

// node_modules/react-dnd/dist/esm/hooks/useDrop/useRegisteredDropTarget.js
function _slicedToArray6(arr, i) {
  return _arrayWithHoles6(arr) || _iterableToArrayLimit6(arr, i) || _unsupportedIterableToArray7(arr, i) || _nonIterableRest6();
}
function _nonIterableRest6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray7(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray7(o, minLen);
}
function _arrayLikeToArray7(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit6(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles6(arr) {
  if (Array.isArray(arr))
    return arr;
}
function useRegisteredDropTarget(spec, monitor, connector) {
  var manager = useDragDropManager();
  var dropTarget = useDropTarget(spec, monitor);
  var accept = useAccept(spec);
  useIsomorphicLayoutEffect(function registerDropTarget() {
    var _registerTarget = registerTarget(accept, dropTarget, manager), _registerTarget2 = _slicedToArray6(_registerTarget, 2), handlerId = _registerTarget2[0], unregister = _registerTarget2[1];
    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [manager, monitor, dropTarget, connector, accept.map(function(a) {
    return a.toString();
  }).join("|")]);
}

// node_modules/react-dnd/dist/esm/hooks/useDrop/useDropTargetMonitor.js
var import_react15 = __toESM(require_react());
function useDropTargetMonitor() {
  var manager = useDragDropManager();
  return (0, import_react15.useMemo)(function() {
    return new DropTargetMonitorImpl(manager);
  }, [manager]);
}

// node_modules/react-dnd/dist/esm/hooks/useDrop/useDropTargetConnector.js
var import_react16 = __toESM(require_react());
function useDropTargetConnector(options) {
  var manager = useDragDropManager();
  var connector = (0, import_react16.useMemo)(function() {
    return new TargetConnector(manager.getBackend());
  }, [manager]);
  useIsomorphicLayoutEffect(function() {
    connector.dropTargetOptions = options || null;
    connector.reconnect();
    return function() {
      return connector.disconnectDropTarget();
    };
  }, [options]);
  return connector;
}

// node_modules/react-dnd/dist/esm/hooks/useDrop/connectors.js
var import_react17 = __toESM(require_react());
function useConnectDropTarget(connector) {
  return (0, import_react17.useMemo)(function() {
    return connector.hooks.dropTarget();
  }, [connector]);
}

// node_modules/react-dnd/dist/esm/hooks/useDrop/useDrop.js
function useDrop(specArg, deps) {
  var spec = useOptionalFactory(specArg, deps);
  var monitor = useDropTargetMonitor();
  var connector = useDropTargetConnector(spec.options);
  useRegisteredDropTarget(spec, monitor, connector);
  return [useCollectedProps(spec.collect, monitor, connector), useConnectDropTarget(connector)];
}

// node_modules/react-dnd/dist/esm/hooks/useDragLayer.js
var import_react18 = __toESM(require_react());
function _slicedToArray7(arr, i) {
  return _arrayWithHoles7(arr) || _iterableToArrayLimit7(arr, i) || _unsupportedIterableToArray8(arr, i) || _nonIterableRest7();
}
function _nonIterableRest7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray8(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray8(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray8(o, minLen);
}
function _arrayLikeToArray8(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit7(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles7(arr) {
  if (Array.isArray(arr))
    return arr;
}
function useDragLayer(collect) {
  var dragDropManager = useDragDropManager();
  var monitor = dragDropManager.getMonitor();
  var _useCollector = useCollector(monitor, collect), _useCollector2 = _slicedToArray7(_useCollector, 2), collected = _useCollector2[0], updateCollected = _useCollector2[1];
  (0, import_react18.useEffect)(function() {
    return monitor.subscribeToOffsetChange(updateCollected);
  });
  (0, import_react18.useEffect)(function() {
    return monitor.subscribeToStateChange(updateCollected);
  });
  return collected;
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}

// node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual2(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var memoize_one_esm_default = memoizeOne;

// node_modules/react-window/dist/index.esm.js
var import_react19 = __toESM(require_react());
var hasNativePerformanceNow = typeof performance === "object" && typeof performance.now === "function";
var now = hasNativePerformanceNow ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();
  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }
  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}
var size = -1;
function getScrollbarSize(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }
  if (size === -1 || recalculate) {
    var div = document.createElement("div");
    var style = div.style;
    style.width = "50px";
    style.height = "50px";
    style.overflow = "scroll";
    document.body.appendChild(div);
    size = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }
  return size;
}
var cachedRTLResult = null;
function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }
  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement("div");
    var outerStyle = outerDiv.style;
    outerStyle.width = "50px";
    outerStyle.height = "50px";
    outerStyle.overflow = "scroll";
    outerStyle.direction = "rtl";
    var innerDiv = document.createElement("div");
    var innerStyle = innerDiv.style;
    innerStyle.width = "100px";
    innerStyle.height = "100px";
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);
    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = "positive-descending";
    } else {
      outerDiv.scrollLeft = 1;
      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = "negative";
      } else {
        cachedRTLResult = "positive-ascending";
      }
    }
    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }
  return cachedRTLResult;
}
var devWarningsOverscanCount = null;
var devWarningsOverscanRowsColumnsCount = null;
var devWarningsTagName = null;
if (true) {
  if (typeof window !== "undefined" && typeof window.WeakSet !== "undefined") {
    devWarningsOverscanCount = /* @__PURE__ */ new WeakSet();
    devWarningsOverscanRowsColumnsCount = /* @__PURE__ */ new WeakSet();
    devWarningsTagName = /* @__PURE__ */ new WeakSet();
  }
}
var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;
var defaultItemKey$1 = function defaultItemKey(index, data) {
  return index;
};
var devWarningsDirection = null;
var devWarningsTagName$1 = null;
if (true) {
  if (typeof window !== "undefined" && typeof window.WeakSet !== "undefined") {
    devWarningsDirection = /* @__PURE__ */ new WeakSet();
    devWarningsTagName$1 = /* @__PURE__ */ new WeakSet();
  }
}
function createListComponent(_ref) {
  var _class;
  var getItemOffset2 = _ref.getItemOffset, getEstimatedTotalSize2 = _ref.getEstimatedTotalSize, getItemSize2 = _ref.getItemSize, getOffsetForIndexAndAlignment2 = _ref.getOffsetForIndexAndAlignment, getStartIndexForOffset2 = _ref.getStartIndexForOffset, getStopIndexForStartIndex2 = _ref.getStopIndexForStartIndex, initInstanceProps2 = _ref.initInstanceProps, shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange, validateProps2 = _ref.validateProps;
  return _class = /* @__PURE__ */ function(_PureComponent) {
    _inheritsLoose(List, _PureComponent);
    function List(props) {
      var _this;
      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps2(_this.props, _assertThisInitialized(_this));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: _assertThisInitialized(_this),
        isScrolling: false,
        scrollDirection: "forward",
        scrollOffset: typeof _this.props.initialScrollOffset === "number" ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = memoize_one_esm_default(function(overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex,
          overscanStopIndex,
          visibleStartIndex,
          visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = memoize_one_esm_default(function(scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection,
          scrollOffset,
          scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;
      _this._getItemStyle = function(index) {
        var _this$props = _this.props, direction = _this$props.direction, itemSize = _this$props.itemSize, layout = _this$props.layout;
        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);
        var style;
        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _offset = getItemOffset2(_this.props, index, _this._instanceProps);
          var size2 = getItemSize2(_this.props, index, _this._instanceProps);
          var isHorizontal = direction === "horizontal" || layout === "horizontal";
          var isRtl = direction === "rtl";
          var offsetHorizontal = isHorizontal ? _offset : 0;
          itemStyleCache[index] = style = {
            position: "absolute",
            left: isRtl ? void 0 : offsetHorizontal,
            right: isRtl ? offsetHorizontal : void 0,
            top: !isHorizontal ? _offset : 0,
            height: !isHorizontal ? size2 : "100%",
            width: isHorizontal ? size2 : "100%"
          };
        }
        return style;
      };
      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = memoize_one_esm_default(function(_, __, ___) {
        return {};
      });
      _this._onScrollHorizontal = function(event) {
        var _event$currentTarget = event.currentTarget, clientWidth = _event$currentTarget.clientWidth, scrollLeft = _event$currentTarget.scrollLeft, scrollWidth = _event$currentTarget.scrollWidth;
        _this.setState(function(prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            return null;
          }
          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;
          if (direction === "rtl") {
            switch (getRTLOffsetType()) {
              case "negative":
                scrollOffset = -scrollLeft;
                break;
              case "positive-descending":
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          }
          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollLeft ? "forward" : "backward",
            scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };
      _this._onScrollVertical = function(event) {
        var _event$currentTarget2 = event.currentTarget, clientHeight = _event$currentTarget2.clientHeight, scrollHeight = _event$currentTarget2.scrollHeight, scrollTop = _event$currentTarget2.scrollTop;
        _this.setState(function(prevState) {
          if (prevState.scrollOffset === scrollTop) {
            return null;
          }
          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
            scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };
      _this._outerRefSetter = function(ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;
        if (typeof outerRef === "function") {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === "object" && outerRef.hasOwnProperty("current")) {
          outerRef.current = ref;
        }
      };
      _this._resetIsScrollingDebounced = function() {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }
        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };
      _this._resetIsScrolling = function() {
        _this._resetIsScrollingTimeoutId = null;
        _this.setState({
          isScrolling: false
        }, function() {
          _this._getItemStyleCache(-1, null);
        });
      };
      return _this;
    }
    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps2(nextProps);
      return null;
    };
    var _proto = List.prototype;
    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function(prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }
        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
          scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };
    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = "auto";
      }
      var _this$props2 = this.props, itemCount = _this$props2.itemCount, layout = _this$props2.layout;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1));
      var scrollbarSize = 0;
      if (this._outerRef) {
        var outerRef = this._outerRef;
        if (layout === "vertical") {
          scrollbarSize = outerRef.scrollWidth > outerRef.clientWidth ? getScrollbarSize() : 0;
        } else {
          scrollbarSize = outerRef.scrollHeight > outerRef.clientHeight ? getScrollbarSize() : 0;
        }
      }
      this.scrollTo(getOffsetForIndexAndAlignment2(this.props, index, align, scrollOffset, this._instanceProps, scrollbarSize));
    };
    _proto.componentDidMount = function componentDidMount() {
      var _this$props3 = this.props, direction = _this$props3.direction, initialScrollOffset = _this$props3.initialScrollOffset, layout = _this$props3.layout;
      if (typeof initialScrollOffset === "number" && this._outerRef != null) {
        var outerRef = this._outerRef;
        if (direction === "horizontal" || layout === "horizontal") {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }
      this._callPropsCallbacks();
    };
    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props4 = this.props, direction = _this$props4.direction, layout = _this$props4.layout;
      var _this$state = this.state, scrollOffset = _this$state.scrollOffset, scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;
      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef;
        if (direction === "horizontal" || layout === "horizontal") {
          if (direction === "rtl") {
            switch (getRTLOffsetType()) {
              case "negative":
                outerRef.scrollLeft = -scrollOffset;
                break;
              case "positive-ascending":
                outerRef.scrollLeft = scrollOffset;
                break;
              default:
                var clientWidth = outerRef.clientWidth, scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }
      this._callPropsCallbacks();
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };
    _proto.render = function render() {
      var _this$props5 = this.props, children = _this$props5.children, className = _this$props5.className, direction = _this$props5.direction, height = _this$props5.height, innerRef = _this$props5.innerRef, innerElementType = _this$props5.innerElementType, innerTagName = _this$props5.innerTagName, itemCount = _this$props5.itemCount, itemData = _this$props5.itemData, _this$props5$itemKey = _this$props5.itemKey, itemKey = _this$props5$itemKey === void 0 ? defaultItemKey$1 : _this$props5$itemKey, layout = _this$props5.layout, outerElementType = _this$props5.outerElementType, outerTagName = _this$props5.outerTagName, style = _this$props5.style, useIsScrolling = _this$props5.useIsScrolling, width = _this$props5.width;
      var isScrolling = this.state.isScrolling;
      var isHorizontal = direction === "horizontal" || layout === "horizontal";
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;
      var _this$_getRangeToRend = this._getRangeToRender(), startIndex = _this$_getRangeToRend[0], stopIndex = _this$_getRangeToRend[1];
      var items2 = [];
      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items2.push((0, import_react19.createElement)(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : void 0,
            style: this._getItemStyle(_index)
          }));
        }
      }
      var estimatedTotalSize = getEstimatedTotalSize2(this.props, this._instanceProps);
      return (0, import_react19.createElement)(outerElementType || outerTagName || "div", {
        className,
        onScroll,
        ref: this._outerRefSetter,
        style: _extends({
          position: "relative",
          height,
          width,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction
        }, style)
      }, (0, import_react19.createElement)(innerElementType || innerTagName || "div", {
        children: items2,
        ref: innerRef,
        style: {
          height: isHorizontal ? "100%" : estimatedTotalSize,
          pointerEvents: isScrolling ? "none" : void 0,
          width: isHorizontal ? estimatedTotalSize : "100%"
        }
      }));
    };
    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === "function") {
        var itemCount = this.props.itemCount;
        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(), _overscanStartIndex = _this$_getRangeToRend2[0], _overscanStopIndex = _this$_getRangeToRend2[1], _visibleStartIndex = _this$_getRangeToRend2[2], _visibleStopIndex = _this$_getRangeToRend2[3];
          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }
      if (typeof this.props.onScroll === "function") {
        var _this$state2 = this.state, _scrollDirection = _this$state2.scrollDirection, _scrollOffset = _this$state2.scrollOffset, _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;
        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    };
    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props6 = this.props, itemCount = _this$props6.itemCount, overscanCount = _this$props6.overscanCount;
      var _this$state3 = this.state, isScrolling = _this$state3.isScrolling, scrollDirection = _this$state3.scrollDirection, scrollOffset = _this$state3.scrollOffset;
      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }
      var startIndex = getStartIndexForOffset2(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex2(this.props, startIndex, scrollOffset, this._instanceProps);
      var overscanBackward = !isScrolling || scrollDirection === "backward" ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === "forward" ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };
    return List;
  }(import_react19.PureComponent), _class.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: false
  }, _class;
}
var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
  var children = _ref2.children, direction = _ref2.direction, height = _ref2.height, layout = _ref2.layout, innerTagName = _ref2.innerTagName, outerTagName = _ref2.outerTagName, width = _ref2.width;
  var instance = _ref3.instance;
  if (true) {
    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName$1 && !devWarningsTagName$1.has(instance)) {
        devWarningsTagName$1.add(instance);
        console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead.");
      }
    }
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    switch (direction) {
      case "horizontal":
      case "vertical":
        if (devWarningsDirection && !devWarningsDirection.has(instance)) {
          devWarningsDirection.add(instance);
          console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.');
        }
        break;
      case "ltr":
      case "rtl":
        break;
      default:
        throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". ' + ('"' + direction + '" was specified.'));
    }
    switch (layout) {
      case "horizontal":
      case "vertical":
        break;
      default:
        throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". ' + ('"' + layout + '" was specified.'));
    }
    if (children == null) {
      throw Error('An invalid "children" prop has been specified. Value should be a React component. ' + ('"' + (children === null ? "null" : typeof children) + '" was specified.'));
    }
    if (isHorizontal && typeof width !== "number") {
      throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. ' + ('"' + (width === null ? "null" : typeof width) + '" was specified.'));
    } else if (!isHorizontal && typeof height !== "number") {
      throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. ' + ('"' + (height === null ? "null" : typeof height) + '" was specified.'));
    }
  }
};
var FixedSizeList = /* @__PURE__ */ createListComponent({
  getItemOffset: function getItemOffset(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount, itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset, instanceProps, scrollbarSize) {
    var direction = _ref4.direction, height = _ref4.height, itemCount = _ref4.itemCount, itemSize = _ref4.itemSize, layout = _ref4.layout, width = _ref4.width;
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    var size2 = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size2);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size2 + itemSize + scrollbarSize);
    if (align === "smart") {
      if (scrollOffset >= minOffset - size2 && scrollOffset <= maxOffset + size2) {
        align = "auto";
      } else {
        align = "center";
      }
    }
    switch (align) {
      case "start":
        return maxOffset;
      case "end":
        return minOffset;
      case "center": {
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);
        if (middleOffset < Math.ceil(size2 / 2)) {
          return 0;
        } else if (middleOffset > lastItemOffset + Math.floor(size2 / 2)) {
          return lastItemOffset;
        } else {
          return middleOffset;
        }
      }
      case "auto":
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }
    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
    var itemCount = _ref5.itemCount, itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction, height = _ref6.height, itemCount = _ref6.itemCount, itemSize = _ref6.itemSize, layout = _ref6.layout, width = _ref6.width;
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    var offset = startIndex * itemSize;
    var size2 = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size2 + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(
      itemCount - 1,
      startIndex + numVisibleItems - 1
    ));
  },
  initInstanceProps: function initInstanceProps(props) {
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
    var itemSize = _ref7.itemSize;
    if (true) {
      if (typeof itemSize !== "number") {
        throw Error('An invalid "itemSize" prop has been specified. Value should be a number. ' + ('"' + (itemSize === null ? "null" : typeof itemSize) + '" was specified.'));
      }
    }
  }
});

// node_modules/react-arborist/dist/module.js
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, { get: v, set: s, enumerable: true, configurable: true });
}
var $89e93131aae74bd9$export$feef243b04ff4151 = (0, import_react20.createContext)(null);
function $89e93131aae74bd9$export$367b0f2231a90ba0() {
  const value = (0, import_react20.useContext)($89e93131aae74bd9$export$feef243b04ff4151);
  if (value === null)
    throw new Error("No Tree Api Provided");
  return value;
}
var $89e93131aae74bd9$export$f6d467aa8b3786af = (0, import_react20.createContext)(null);
function $89e93131aae74bd9$export$fd23f19d5d8f3033() {
  const value = (0, import_react20.useContext)($89e93131aae74bd9$export$f6d467aa8b3786af);
  if (value === null)
    throw new Error("Provide a NodesContext");
  return value;
}
var $89e93131aae74bd9$export$2d5c5ceac203fc1e = (0, import_react20.createContext)(null);
function $89e93131aae74bd9$export$4930f6bf413be70e() {
  const value = (0, import_react20.useContext)($89e93131aae74bd9$export$2d5c5ceac203fc1e);
  if (value === null)
    throw new Error("Provide a DnDContext");
  return value;
}
var $89e93131aae74bd9$export$d0c71bc5e3e2d897 = (0, import_react20.createContext)(0);
function $89e93131aae74bd9$export$83a4f9dc3b36edb8() {
  (0, import_react20.useContext)($89e93131aae74bd9$export$d0c71bc5e3e2d897);
}
var $bfece7c4aed4e9c4$exports = {};
$parcel$export($bfece7c4aed4e9c4$exports, "TreeApi", () => $bfece7c4aed4e9c4$export$e2da3477247342d1);
var $0e6083160f4b36ed$exports = {};
$parcel$export($0e6083160f4b36ed$exports, "bound", () => $0e6083160f4b36ed$export$adf7c0fe6059d774);
$parcel$export($0e6083160f4b36ed$exports, "isItem", () => $0e6083160f4b36ed$export$5318634f2ee07019);
$parcel$export($0e6083160f4b36ed$exports, "isClosed", () => $0e6083160f4b36ed$export$4210f5ea57fbae57);
$parcel$export($0e6083160f4b36ed$exports, "isDecendent", () => $0e6083160f4b36ed$export$1e38f72c6c546f70);
$parcel$export($0e6083160f4b36ed$exports, "indexOf", () => $0e6083160f4b36ed$export$305f7d4e9d4624f2);
$parcel$export($0e6083160f4b36ed$exports, "noop", () => $0e6083160f4b36ed$export$8793edee2d425525);
$parcel$export($0e6083160f4b36ed$exports, "dfs", () => $0e6083160f4b36ed$export$51b654aff22fc5a6);
$parcel$export($0e6083160f4b36ed$exports, "walk", () => $0e6083160f4b36ed$export$588732934346abbf);
$parcel$export($0e6083160f4b36ed$exports, "focusNextElement", () => $0e6083160f4b36ed$export$3b0237e8566c8d65);
$parcel$export($0e6083160f4b36ed$exports, "focusPrevElement", () => $0e6083160f4b36ed$export$33b47db07a82b2fb);
$parcel$export($0e6083160f4b36ed$exports, "access", () => $0e6083160f4b36ed$export$9bb0e144ba4929ca);
$parcel$export($0e6083160f4b36ed$exports, "identifyNull", () => $0e6083160f4b36ed$export$611823266272db76);
$parcel$export($0e6083160f4b36ed$exports, "identify", () => $0e6083160f4b36ed$export$65e5b62a4c490288);
$parcel$export($0e6083160f4b36ed$exports, "mergeRefs", () => $0e6083160f4b36ed$export$c9058316764c140e);
$parcel$export($0e6083160f4b36ed$exports, "safeRun", () => $0e6083160f4b36ed$export$c6d63370cef03886);
$parcel$export($0e6083160f4b36ed$exports, "waitFor", () => $0e6083160f4b36ed$export$9bbfceb27f687c1b);
$parcel$export($0e6083160f4b36ed$exports, "getInsertIndex", () => $0e6083160f4b36ed$export$e12bf2314d0bc2a9);
$parcel$export($0e6083160f4b36ed$exports, "getInsertParentId", () => $0e6083160f4b36ed$export$58fe32731f07ed56);
function $0e6083160f4b36ed$export$adf7c0fe6059d774(n, min, max) {
  return Math.max(Math.min(n, max), min);
}
function $0e6083160f4b36ed$export$5318634f2ee07019(node) {
  return node && node.isLeaf;
}
function $0e6083160f4b36ed$export$4210f5ea57fbae57(node) {
  return node && node.isInternal && !node.isOpen;
}
var $0e6083160f4b36ed$export$1e38f72c6c546f70 = (a, b) => {
  let n = a;
  while (n) {
    if (n.id === b.id)
      return true;
    n = n.parent;
  }
  return false;
};
var $0e6083160f4b36ed$export$305f7d4e9d4624f2 = (node) => {
  if (!node.parent)
    throw Error("Node does not have a parent");
  return node.parent.children.findIndex((c) => c.id === node.id);
};
function $0e6083160f4b36ed$export$8793edee2d425525() {
}
function $0e6083160f4b36ed$export$51b654aff22fc5a6(node, id) {
  if (!node)
    return null;
  if (node.id === id)
    return node;
  if (node.children)
    for (let child of node.children) {
      const result = $0e6083160f4b36ed$export$51b654aff22fc5a6(child, id);
      if (result)
        return result;
    }
  return null;
}
function $0e6083160f4b36ed$export$588732934346abbf(node, fn) {
  fn(node);
  if (node.children)
    for (let child of node.children)
      $0e6083160f4b36ed$export$588732934346abbf(child, fn);
}
function $0e6083160f4b36ed$export$3b0237e8566c8d65(target) {
  const elements = $0e6083160f4b36ed$var$getFocusable(target);
  let next;
  for (let i = 0; i < elements.length; ++i) {
    const item = elements[i];
    if (item === target) {
      next = $0e6083160f4b36ed$var$nextItem(elements, i);
      break;
    }
  }
  next?.focus();
}
function $0e6083160f4b36ed$export$33b47db07a82b2fb(target) {
  const elements = $0e6083160f4b36ed$var$getFocusable(target);
  let next;
  for (let i = 0; i < elements.length; ++i) {
    const item = elements[i];
    if (item === target) {
      next = $0e6083160f4b36ed$var$prevItem(elements, i);
      break;
    }
  }
  next?.focus();
}
function $0e6083160f4b36ed$var$nextItem(list, index) {
  if (index + 1 < list.length)
    return list[index + 1];
  else
    return list[0];
}
function $0e6083160f4b36ed$var$prevItem(list, index) {
  if (index - 1 >= 0)
    return list[index - 1];
  else
    return list[list.length - 1];
}
function $0e6083160f4b36ed$var$getFocusable(target) {
  return Array.from(document.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)')).filter((e) => e === target || !target.contains(e));
}
function $0e6083160f4b36ed$export$9bb0e144ba4929ca(obj, accessor) {
  if (typeof accessor === "boolean")
    return accessor;
  if (typeof accessor === "string")
    return obj[accessor];
  return accessor(obj);
}
function $0e6083160f4b36ed$export$611823266272db76(obj) {
  if (obj === null)
    return null;
  else
    return $0e6083160f4b36ed$export$65e5b62a4c490288(obj);
}
function $0e6083160f4b36ed$export$65e5b62a4c490288(obj) {
  return typeof obj === "string" ? obj : obj.id;
}
function $0e6083160f4b36ed$export$c9058316764c140e(...refs) {
  return (instance) => {
    refs.forEach((ref) => {
      if (typeof ref === "function")
        ref(instance);
      else if (ref != null)
        ref.current = instance;
    });
  };
}
function $0e6083160f4b36ed$export$c6d63370cef03886(fn, ...args) {
  if (fn)
    return fn(...args);
}
function $0e6083160f4b36ed$export$9bbfceb27f687c1b(fn) {
  return new Promise((resolve, reject) => {
    let tries = 0;
    function check() {
      tries += 1;
      if (tries === 100)
        reject();
      if (fn())
        resolve();
      else
        setTimeout(check, 10);
    }
    check();
  });
}
function $0e6083160f4b36ed$export$e12bf2314d0bc2a9(tree) {
  const focus = tree.focusedNode;
  if (!focus)
    return tree.root.children?.length ?? 0;
  if (focus.isOpen)
    return 0;
  if (focus.parent)
    return focus.childIndex + 1;
  return 0;
}
function $0e6083160f4b36ed$export$58fe32731f07ed56(tree) {
  const focus = tree.focusedNode;
  if (!focus)
    return null;
  if (focus.isOpen)
    return focus.id;
  if (focus.parent && !focus.parent.isRoot)
    return focus.parent.id;
  return null;
}
var $fb4c15d8425379bd$var$placeholderStyle = {
  display: "flex",
  alignItems: "center",
  zIndex: 1
};
var $fb4c15d8425379bd$var$lineStyle = {
  flex: 1,
  height: "2px",
  background: "#4B91E2",
  borderRadius: "1px"
};
var $fb4c15d8425379bd$var$circleStyle = {
  width: "4px",
  height: "4px",
  boxShadow: "0 0 0 3px #4B91E2",
  borderRadius: "50%"
};
var $fb4c15d8425379bd$export$6cb3c16721363d11 = /* @__PURE__ */ (0, import_react20.default).memo(function DefaultCursor({ top, left, indent }) {
  const style = {
    position: "absolute",
    pointerEvents: "none",
    top: top - 2 + "px",
    left: left + "px",
    right: indent + "px"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
    style: {
      ...$fb4c15d8425379bd$var$placeholderStyle,
      ...style
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
        style: {
          ...$fb4c15d8425379bd$var$circleStyle
        }
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
        style: {
          ...$fb4c15d8425379bd$var$lineStyle
        }
      })
    ]
  });
});
function $164e874d21fcd87e$export$f9c541e71856c524({ node, attrs, innerRef, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
    ...attrs,
    ref: innerRef,
    onFocus: (e) => e.stopPropagation(),
    onClick: node.handleClick,
    children
  });
}
function $c4edd692d5290432$export$909e23cbfbbd3351(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
    ref: props.dragHandle,
    style: props.style,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
        onClick: (e) => {
          e.stopPropagation();
          props.node.toggle();
        },
        children: props.node.isLeaf ? "\u{1F333}" : props.node.isOpen ? "\u{1F5C1}" : "\u{1F5C0}"
      }),
      " ",
      props.node.isEditing ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)($c4edd692d5290432$var$Edit, {
        ...props
      }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)($c4edd692d5290432$var$Show, {
        ...props
      })
    ]
  });
}
function $c4edd692d5290432$var$Show(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)((0, import_jsx_runtime2.Fragment), {
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
      children: props.node.data.name
    })
  });
}
function $c4edd692d5290432$var$Edit({ node }) {
  const input = (0, import_react20.useRef)();
  (0, import_react20.useEffect)(() => {
    input.current?.focus();
    input.current?.select();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", {
    ref: input,
    defaultValue: node.data.name,
    onBlur: () => node.reset(),
    onKeyDown: (e) => {
      if (e.key === "Escape")
        node.reset();
      if (e.key === "Enter")
        node.submit(input.current?.value || "");
    }
  });
}
function $21783d2b0251be67$export$e1a8e267487c59d1(id) {
  return {
    type: "EDIT",
    id
  };
}
function $21783d2b0251be67$export$1650419e431d3ba3(state = {
  id: null
}, action) {
  if (action.type === "EDIT")
    return {
      ...state,
      id: action.id
    };
  else
    return state;
}
function $c27b8e9863235052$export$d7ddd398f22d79ef(id) {
  return {
    type: "FOCUS",
    id
  };
}
function $c27b8e9863235052$export$6b6c976e46a06288() {
  return {
    type: "TREE_BLUR"
  };
}
function $c27b8e9863235052$export$1650419e431d3ba3(state = {
  id: null,
  treeFocused: false
}, action) {
  if (action.type === "FOCUS")
    return {
      ...state,
      id: action.id,
      treeFocused: true
    };
  else if (action.type === "TREE_BLUR")
    return {
      ...state,
      treeFocused: false
    };
  else
    return state;
}
var $096e74084443e9a3$exports = {};
$parcel$export($096e74084443e9a3$exports, "NodeApi", () => $096e74084443e9a3$export$d4b903da0f522dc8);
var $096e74084443e9a3$export$d4b903da0f522dc8 = class {
  constructor(params) {
    this.tree = params.tree;
    this.id = params.id;
    this.data = params.data;
    this.level = params.level;
    this.children = params.children;
    this.parent = params.parent;
    this.isDraggable = params.isDraggable;
    this.rowIndex = params.rowIndex;
  }
  get isRoot() {
    return this.id === (0, $81080a351c006222$export$ec71a3379b43ae5c);
  }
  get isLeaf() {
    return !Array.isArray(this.children);
  }
  get isInternal() {
    return !this.isLeaf;
  }
  get isOpen() {
    return this.isLeaf ? false : this.tree.isOpen(this.id);
  }
  get isClosed() {
    return this.isLeaf ? false : !this.tree.isOpen(this.id);
  }
  get isEditable() {
    return this.tree.isEditable(this.data);
  }
  get isEditing() {
    return this.tree.editingId === this.id;
  }
  get isSelected() {
    return this.tree.isSelected(this.id);
  }
  get isOnlySelection() {
    return this.isSelected && this.tree.hasOneSelection;
  }
  get isSelectedStart() {
    return this.isSelected && !this.prev?.isSelected;
  }
  get isSelectedEnd() {
    return this.isSelected && !this.next?.isSelected;
  }
  get isFocused() {
    return this.tree.isFocused(this.id);
  }
  get isDragging() {
    return this.tree.isDragging(this.id);
  }
  get willReceiveDrop() {
    return this.tree.willReceiveDrop(this.id);
  }
  get state() {
    return {
      isClosed: this.isClosed,
      isDragging: this.isDragging,
      isEditing: this.isEditing,
      isFocused: this.isFocused,
      isInternal: this.isInternal,
      isLeaf: this.isLeaf,
      isOpen: this.isOpen,
      isSelected: this.isSelected,
      isSelectedEnd: this.isSelectedEnd,
      isSelectedStart: this.isSelectedStart,
      willReceiveDrop: this.willReceiveDrop
    };
  }
  get childIndex() {
    if (this.parent && this.parent.children)
      return this.parent.children.findIndex((child) => child.id === this.id);
    else
      return -1;
  }
  get next() {
    if (this.rowIndex === null)
      return null;
    return this.tree.at(this.rowIndex + 1);
  }
  get prev() {
    if (this.rowIndex === null)
      return null;
    return this.tree.at(this.rowIndex - 1);
  }
  get nextSibling() {
    const i = this.childIndex;
    return this.parent?.children[i + 1] ?? null;
  }
  select() {
    this.tree.select(this);
  }
  deselect() {
    this.tree.deselect(this);
  }
  selectMulti() {
    this.tree.selectMulti(this);
  }
  selectContiguous() {
    this.tree.selectContiguous(this);
  }
  activate() {
    this.tree.activate(this);
  }
  focus() {
    this.tree.focus(this);
  }
  toggle() {
    this.tree.toggle(this);
  }
  open() {
    this.tree.open(this);
  }
  openParents() {
    this.tree.openParents(this);
  }
  close() {
    this.tree.close(this);
  }
  submit(value) {
    this.tree.submit(this, value);
  }
  reset() {
    this.tree.reset();
  }
  clone() {
    return new $096e74084443e9a3$export$d4b903da0f522dc8({
      ...this
    });
  }
  edit() {
    return this.tree.edit(this);
  }
  handleClick = (e) => {
    if (e.metaKey && !this.tree.props.disableMultiSelection)
      this.isSelected ? this.deselect() : this.selectMulti();
    else if (e.shiftKey && !this.tree.props.disableMultiSelection)
      this.selectContiguous();
    else {
      this.select();
      this.activate();
    }
  };
};
var $81080a351c006222$export$ec71a3379b43ae5c = "__REACT_ARBORIST_INTERNAL_ROOT__";
function $81080a351c006222$export$882461b6382ed46c(tree) {
  function visitSelfAndChildren(data2, level, parent) {
    const id = tree.accessId(data2);
    const node = new (0, $096e74084443e9a3$export$d4b903da0f522dc8)({
      tree,
      data: data2,
      level,
      parent,
      id,
      children: null,
      isDraggable: tree.isDraggable(data2),
      rowIndex: null
    });
    const children = tree.accessChildren(data2);
    if (children)
      node.children = children.map((child) => visitSelfAndChildren(child, level + 1, node));
    return node;
  }
  const root = new (0, $096e74084443e9a3$export$d4b903da0f522dc8)({
    tree,
    id: $81080a351c006222$export$ec71a3379b43ae5c,
    data: {
      id: $81080a351c006222$export$ec71a3379b43ae5c
    },
    level: -1,
    parent: null,
    children: null,
    isDraggable: true,
    rowIndex: null
  });
  const data = tree.props.data ?? [];
  root.children = data.map((child) => {
    return visitSelfAndChildren(child, 0, root);
  });
  return root;
}
var $3c0bad2888bcd4bc$export$e324594224ef24da = {
  open(id, filtered) {
    return {
      type: "VISIBILITY_OPEN",
      id,
      filtered
    };
  },
  close(id, filtered) {
    return {
      type: "VISIBILITY_CLOSE",
      id,
      filtered
    };
  },
  toggle(id, filtered) {
    return {
      type: "VISIBILITY_TOGGLE",
      id,
      filtered
    };
  },
  clear(filtered) {
    return {
      type: "VISIBILITY_CLEAR",
      filtered
    };
  }
};
function $3c0bad2888bcd4bc$var$openMapReducer(state = {}, action) {
  if (action.type === "VISIBILITY_OPEN")
    return {
      ...state,
      [action.id]: true
    };
  else if (action.type === "VISIBILITY_CLOSE")
    return {
      ...state,
      [action.id]: false
    };
  else if (action.type === "VISIBILITY_TOGGLE") {
    const prev = state[action.id];
    return {
      ...state,
      [action.id]: !prev
    };
  } else if (action.type === "VISIBILITY_CLEAR")
    return {};
  else
    return state;
}
function $3c0bad2888bcd4bc$export$1650419e431d3ba3(state = {
  filtered: {},
  unfiltered: {}
}, action) {
  if (!action.type.startsWith("VISIBILITY"))
    return state;
  if (action.filtered)
    return {
      ...state,
      filtered: $3c0bad2888bcd4bc$var$openMapReducer(state.filtered, action)
    };
  else
    return {
      ...state,
      unfiltered: $3c0bad2888bcd4bc$var$openMapReducer(state.unfiltered, action)
    };
}
var $6ad32e02250c922e$export$d4c72bab9d6cc13a = (props) => ({
  nodes: {
    open: {
      filtered: {},
      unfiltered: props?.initialOpenState ?? {}
    },
    focus: {
      id: null,
      treeFocused: false
    },
    edit: {
      id: null
    },
    drag: {
      id: null,
      idWillReceiveDrop: null
    },
    selection: {
      ids: /* @__PURE__ */ new Set(),
      anchor: null,
      mostRecent: null
    }
  },
  dnd: {
    cursor: {
      type: "none"
    },
    dragId: null,
    dragIds: [],
    parentId: null,
    index: -1
  }
});
var $37bc167debff36d2$export$e324594224ef24da = {
  clear: () => ({
    type: "SELECTION_CLEAR"
  }),
  only: (id) => ({
    type: "SELECTION_ONLY",
    id: (0, $0e6083160f4b36ed$export$65e5b62a4c490288)(id)
  }),
  add: (id) => ({
    type: "SELECTION_ADD",
    ids: (Array.isArray(id) ? id : [
      id
    ]).map((0, $0e6083160f4b36ed$export$65e5b62a4c490288))
  }),
  remove: (id) => ({
    type: "SELECTION_REMOVE",
    ids: (Array.isArray(id) ? id : [
      id
    ]).map((0, $0e6083160f4b36ed$export$65e5b62a4c490288))
  }),
  set: (ids) => ({
    type: "SELECTION_SET",
    ids
  }),
  mostRecent: (id) => ({
    type: "SELECTION_MOST_RECENT",
    id: id === null ? null : (0, $0e6083160f4b36ed$export$65e5b62a4c490288)(id)
  }),
  anchor: (id) => ({
    type: "SELECTION_ANCHOR",
    id: id === null ? null : (0, $0e6083160f4b36ed$export$65e5b62a4c490288)(id)
  })
};
function $37bc167debff36d2$export$1650419e431d3ba3(state = (0, $6ad32e02250c922e$export$d4c72bab9d6cc13a)()["nodes"]["selection"], action) {
  const ids = state.ids;
  switch (action.type) {
    case "SELECTION_CLEAR":
      return {
        ...state,
        ids: /* @__PURE__ */ new Set()
      };
    case "SELECTION_ONLY":
      return {
        ...state,
        ids: /* @__PURE__ */ new Set([
          action.id
        ])
      };
    case "SELECTION_ADD":
      if (action.ids.length === 0)
        return state;
      action.ids.forEach((id) => ids.add(id));
      return {
        ...state,
        ids: new Set(ids)
      };
    case "SELECTION_REMOVE":
      if (action.ids.length === 0)
        return state;
      action.ids.forEach((id) => ids.delete(id));
      return {
        ...state,
        ids: new Set(ids)
      };
    case "SELECTION_SET":
      return {
        ...state,
        ids: new Set(action.ids)
      };
    case "SELECTION_MOST_RECENT":
      return {
        ...state,
        mostRecent: action.id
      };
    case "SELECTION_ANCHOR":
      return {
        ...state,
        anchor: action.id
      };
    default:
      return state;
  }
}
var $59f144a8dd651e5e$export$e324594224ef24da = {
  cursor(cursor) {
    return {
      type: "DND_CURSOR",
      cursor
    };
  },
  dragStart(id, dragIds) {
    return {
      type: "DND_DRAG_START",
      id,
      dragIds
    };
  },
  dragEnd() {
    return {
      type: "DND_DRAG_END"
    };
  },
  hovering(parentId, index) {
    return {
      type: "DND_HOVERING",
      parentId,
      index
    };
  }
};
function $59f144a8dd651e5e$export$1650419e431d3ba3(state = (0, $6ad32e02250c922e$export$d4c72bab9d6cc13a)()["dnd"], action) {
  switch (action.type) {
    case "DND_CURSOR":
      return {
        ...state,
        cursor: action.cursor
      };
    case "DND_DRAG_START":
      return {
        ...state,
        dragId: action.id,
        dragIds: action.dragIds
      };
    case "DND_DRAG_END":
      return (0, $6ad32e02250c922e$export$d4c72bab9d6cc13a)()["dnd"];
    case "DND_HOVERING":
      return {
        ...state,
        parentId: action.parentId,
        index: action.index
      };
    default:
      return state;
  }
}
var $77d34d95e44d2f58$var$layerStyles = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%"
};
var $77d34d95e44d2f58$var$getStyle = (offset) => {
  if (!offset)
    return {
      display: "none"
    };
  const { x, y } = offset;
  return {
    transform: `translate(${x}px, ${y}px)`
  };
};
var $77d34d95e44d2f58$var$getCountStyle = (offset) => {
  if (!offset)
    return {
      display: "none"
    };
  const { x, y } = offset;
  return {
    transform: `translate(${x + 10}px, ${y + 10}px)`
  };
};
function $77d34d95e44d2f58$export$84e211ad8431a387({ offset, mouse, id, dragIds, isDragging }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)($77d34d95e44d2f58$var$Overlay, {
    isDragging,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)($77d34d95e44d2f58$var$Position, {
        offset,
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)($77d34d95e44d2f58$var$PreviewNode, {
          id,
          dragIds
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)($77d34d95e44d2f58$var$Count, {
        mouse,
        count: dragIds.length
      })
    ]
  });
}
var $77d34d95e44d2f58$var$Overlay = /* @__PURE__ */ (0, import_react20.memo)(function Overlay(props) {
  if (!props.isDragging)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
    style: $77d34d95e44d2f58$var$layerStyles,
    children: props.children
  });
});
function $77d34d95e44d2f58$var$Position(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
    className: "row preview",
    style: $77d34d95e44d2f58$var$getStyle(props.offset),
    children: props.children
  });
}
function $77d34d95e44d2f58$var$Count(props) {
  const { count, mouse } = props;
  if (count > 1)
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
      className: "selected-count",
      style: $77d34d95e44d2f58$var$getCountStyle(mouse),
      children: count
    });
  else
    return null;
}
var $77d34d95e44d2f58$var$PreviewNode = /* @__PURE__ */ (0, import_react20.memo)(function PreviewNode(props) {
  const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
  const node = tree.get(props.id);
  if (!node)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(tree.renderNode, {
    preview: true,
    node,
    style: {
      paddingLeft: node.level * tree.indent,
      opacity: 0.2,
      background: "transparent"
    },
    tree
  });
});
function $f608be224a71d6f5$export$b6a79797ad180576() {
  const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
  const state = (0, $89e93131aae74bd9$export$4930f6bf413be70e)();
  const cursor = state.cursor;
  if (!cursor || cursor.type !== "line")
    return null;
  const indent = tree.indent;
  const top = tree.rowHeight * cursor.index + (tree.props.padding ?? tree.props.paddingTop ?? 0);
  const left = indent * cursor.level;
  const Cursor = tree.renderCursor;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Cursor, {
    top,
    left,
    indent
  });
}
var $05f64c7ebcbad8b5$export$70c2b8898b86d3ad = /* @__PURE__ */ (0, import_react20.forwardRef)(function Outer(props, ref) {
  const { children, ...rest } = props;
  const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
    ref,
    ...rest,
    onClick: (e) => {
      if (e.currentTarget === e.target)
        tree.deselectAll();
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)($05f64c7ebcbad8b5$var$DropContainer, {}),
      children
    ]
  });
});
var $05f64c7ebcbad8b5$var$DropContainer = () => {
  const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
    style: {
      height: tree.visibleNodes.length * tree.rowHeight,
      width: "100%",
      position: "absolute",
      left: "0",
      right: "0"
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)((0, $f608be224a71d6f5$export$b6a79797ad180576), {})
  });
};
var $da9a6b47b6fff922$export$a9af0da3ae60cd00 = /* @__PURE__ */ (0, import_react20.forwardRef)(function InnerElement({ style, ...rest }, ref) {
  const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
  const paddingTop = tree.props.padding ?? tree.props.paddingTop ?? 0;
  const paddingBottom = tree.props.padding ?? tree.props.paddingBottom ?? 0;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
    ref,
    style: {
      ...style,
      height: `${parseFloat(style.height) + paddingTop + paddingBottom}px`
    },
    ...rest
  });
});
function $907e707a330ef23a$export$715c0d031ede7907(node) {
  const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
  const ids = tree.selectedIds;
  const [_, ref, preview] = (0, useDrag)(() => ({
    canDrag: () => node.isDraggable,
    type: "NODE",
    item: () => {
      const dragIds = tree.isSelected(node.id) ? Array.from(ids) : [
        node.id
      ];
      tree.dispatch((0, $59f144a8dd651e5e$export$e324594224ef24da).dragStart(node.id, dragIds));
      return {
        id: node.id
      };
    },
    end: () => {
      tree.hideCursor();
      let { parentId, index, dragIds } = tree.state.dnd;
      if (tree.canDrop()) {
        (0, $0e6083160f4b36ed$export$c6d63370cef03886)(tree.props.onMove, {
          dragIds,
          parentId: parentId === (0, $81080a351c006222$export$ec71a3379b43ae5c) ? null : parentId,
          index,
          dragNodes: tree.dragNodes,
          parentNode: tree.get(parentId)
        });
        tree.open(parentId);
      }
      tree.dispatch((0, $59f144a8dd651e5e$export$e324594224ef24da).dragEnd());
    }
  }), [
    ids,
    node
  ]);
  (0, import_react20.useEffect)(() => {
    preview((0, getEmptyImage)());
  }, [
    preview
  ]);
  return ref;
}
function $2db980bfed6822da$var$measureHover(el, offset) {
  const rect = el.getBoundingClientRect();
  const x = offset.x - Math.round(rect.x);
  const y = offset.y - Math.round(rect.y);
  const height = rect.height;
  const inTopHalf = y < height / 2;
  const inBottomHalf = !inTopHalf;
  const pad = height / 4;
  const inMiddle = y > pad && y < height - pad;
  const atTop = !inMiddle && inTopHalf;
  const atBottom = !inMiddle && inBottomHalf;
  return {
    x,
    inTopHalf,
    inBottomHalf,
    inMiddle,
    atTop,
    atBottom
  };
}
function $2db980bfed6822da$var$getNodesAroundCursor(node, prev, next, hover) {
  if (!node)
    return [
      prev,
      null
    ];
  if (node.isInternal) {
    if (hover.atTop)
      return [
        prev,
        node
      ];
    else if (hover.inMiddle)
      return [
        node,
        node
      ];
    else
      return [
        node,
        next
      ];
  } else {
    if (hover.inTopHalf)
      return [
        prev,
        node
      ];
    else
      return [
        node,
        next
      ];
  }
}
function $2db980bfed6822da$var$getDropLevel(hovering, aboveCursor, belowCursor, indent) {
  const hoverLevel = Math.round(Math.max(0, hovering.x - indent) / indent);
  let min, max;
  if (!aboveCursor) {
    max = 0;
    min = 0;
  } else if (!belowCursor) {
    max = aboveCursor.level;
    min = 0;
  } else {
    max = aboveCursor.level;
    min = belowCursor.level;
  }
  return (0, $0e6083160f4b36ed$export$adf7c0fe6059d774)(hoverLevel, min, max);
}
function $2db980bfed6822da$var$dropAt(parentId, index) {
  return {
    parentId: parentId || null,
    index
  };
}
function $2db980bfed6822da$var$lineCursor(index, level) {
  return {
    type: "line",
    index,
    level
  };
}
function $2db980bfed6822da$var$highlightCursor(id) {
  return {
    type: "highlight",
    id
  };
}
function $2db980bfed6822da$var$walkUpFrom(node, level) {
  let drop = node;
  while (drop.parent && drop.level > level)
    drop = drop.parent;
  const parentId = drop.parent?.id || null;
  const index = (0, $0e6083160f4b36ed$export$305f7d4e9d4624f2)(drop) + 1;
  return {
    parentId,
    index
  };
}
function $2db980bfed6822da$export$f502ca02ebb85a1c(args) {
  const hover = $2db980bfed6822da$var$measureHover(args.element, args.offset);
  const { node, nextNode, prevNode } = args;
  const [above, below] = $2db980bfed6822da$var$getNodesAroundCursor(node, prevNode, nextNode, hover);
  if (node && node.isInternal && hover.inMiddle)
    return {
      drop: $2db980bfed6822da$var$dropAt(node.id, 0),
      cursor: $2db980bfed6822da$var$highlightCursor(node.id)
    };
  if (!above)
    return {
      drop: $2db980bfed6822da$var$dropAt(below?.parent?.id, 0),
      cursor: $2db980bfed6822da$var$lineCursor(0, 0)
    };
  if ((0, $0e6083160f4b36ed$export$5318634f2ee07019)(above) || (0, $0e6083160f4b36ed$export$4210f5ea57fbae57)(above)) {
    const level = $2db980bfed6822da$var$getDropLevel(hover, above, below, args.indent);
    return {
      drop: $2db980bfed6822da$var$walkUpFrom(above, level),
      cursor: $2db980bfed6822da$var$lineCursor(above.rowIndex + 1, level)
    };
  }
  return {
    drop: $2db980bfed6822da$var$dropAt(above?.id, 0),
    cursor: $2db980bfed6822da$var$lineCursor(above.rowIndex + 1, above.level + 1)
  };
}
function $d38aa53467160173$export$57afafec4637d997(el, node) {
  const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
  const [_, dropRef] = (0, useDrop)(() => ({
    accept: "NODE",
    canDrop: () => tree.canDrop(),
    hover: (_item, m) => {
      const offset = m.getClientOffset();
      if (!el.current || !offset)
        return;
      const { cursor, drop } = (0, $2db980bfed6822da$export$f502ca02ebb85a1c)({
        element: el.current,
        offset,
        indent: tree.indent,
        node,
        prevNode: node.prev,
        nextNode: node.next
      });
      if (drop)
        tree.dispatch((0, $59f144a8dd651e5e$export$e324594224ef24da).hovering(drop.parentId, drop.index));
      if (m.canDrop()) {
        if (cursor)
          tree.showCursor(cursor);
      } else
        tree.hideCursor();
    },
    drop: (_2, m) => {
      if (!m.canDrop())
        return null;
    }
  }), [
    node,
    el.current,
    tree.props
  ]);
  return dropRef;
}
function $48ab254e4b4b72da$export$d75ab90b05ebbfaa(index) {
  const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
  const original = tree.at(index);
  if (!original)
    throw new Error(`Could not find node for index: ${index}`);
  return (0, import_react20.useMemo)(() => {
    const fresh = original.clone();
    tree.visibleNodes[index] = fresh;
    return fresh;
  }, [
    ...Object.values(original.state),
    original
  ]);
}
var $8c3aed0a01f84486$export$a9754b3c8daa5172 = /* @__PURE__ */ (0, import_react20.default).memo(function RowContainer({ index, style }) {
  (0, $89e93131aae74bd9$export$83a4f9dc3b36edb8)();
  const _ = (0, $89e93131aae74bd9$export$fd23f19d5d8f3033)();
  const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
  const node = (0, $48ab254e4b4b72da$export$d75ab90b05ebbfaa)(index);
  const el = (0, import_react20.useRef)(null);
  const dragRef = (0, $907e707a330ef23a$export$715c0d031ede7907)(node);
  const dropRef = (0, $d38aa53467160173$export$57afafec4637d997)(el, node);
  const innerRef = (0, import_react20.useCallback)((n) => {
    el.current = n;
    dropRef(n);
  }, [
    dropRef
  ]);
  const indent = tree.indent * node.level;
  const nodeStyle = (0, import_react20.useMemo)(() => ({
    paddingLeft: indent
  }), [
    indent
  ]);
  const rowStyle = (0, import_react20.useMemo)(() => ({
    ...style,
    top: parseFloat(style.top) + (tree.props.padding ?? tree.props.paddingTop ?? 0)
  }), [
    style,
    tree.props.padding,
    tree.props.paddingTop
  ]);
  const rowAttrs = {
    role: "treeitem",
    "aria-level": node.level,
    "aria-selected": node.isSelected,
    style: rowStyle,
    tabIndex: -1,
    className: tree.props.rowClassName
  };
  (0, import_react20.useEffect)(() => {
    if (!node.isEditing && node.isFocused)
      el.current?.focus({
        preventScroll: true
      });
  }, [
    node.isEditing,
    node.isFocused,
    el.current
  ]);
  const Node = tree.renderNode;
  const Row = tree.renderRow;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Row, {
    node,
    innerRef,
    attrs: rowAttrs,
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Node, {
      node,
      tree,
      style: nodeStyle,
      dragHandle: dragRef
    })
  });
});
var $065a164934293bf2$var$focusSearchTerm = "";
var $065a164934293bf2$var$timeoutId = null;
function $065a164934293bf2$export$ff4858a4110d9246() {
  (0, $89e93131aae74bd9$export$83a4f9dc3b36edb8)();
  const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
    style: {
      height: tree.height,
      width: tree.width,
      minHeight: 0,
      minWidth: 0
    },
    onContextMenu: tree.props.onContextMenu,
    onClick: tree.props.onClick,
    tabIndex: 0,
    onFocus: (e) => {
      if (!e.currentTarget.contains(e.relatedTarget))
        tree.onFocus();
    },
    onBlur: (e) => {
      if (!e.currentTarget.contains(e.relatedTarget))
        tree.onBlur();
    },
    onKeyDown: (e) => {
      if (tree.isEditing)
        return;
      if (e.key === "Backspace") {
        if (!tree.props.onDelete)
          return;
        const ids = Array.from(tree.selectedIds);
        if (ids.length > 1) {
          let nextFocus = tree.mostRecentNode;
          while (nextFocus && nextFocus.isSelected)
            nextFocus = nextFocus.nextSibling;
          if (!nextFocus)
            nextFocus = tree.lastNode;
          tree.focus(nextFocus, {
            scroll: false
          });
          tree.delete(Array.from(ids));
        } else {
          const node = tree.focusedNode;
          if (node) {
            const sib = node.nextSibling;
            const parent = node.parent;
            tree.focus(sib || parent, {
              scroll: false
            });
            tree.delete(node);
          }
        }
        return;
      }
      if (e.key === "Tab" && !e.shiftKey) {
        e.preventDefault();
        (0, $0e6083160f4b36ed$export$3b0237e8566c8d65)(e.currentTarget);
        return;
      }
      if (e.key === "Tab" && e.shiftKey) {
        e.preventDefault();
        (0, $0e6083160f4b36ed$export$33b47db07a82b2fb)(e.currentTarget);
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = tree.nextNode;
        if (e.metaKey) {
          tree.select(tree.focusedNode);
          tree.activate(tree.focusedNode);
          return;
        } else if (!e.shiftKey || tree.props.disableMultiSelection) {
          tree.focus(next);
          return;
        } else {
          if (!next)
            return;
          const current = tree.focusedNode;
          if (!current)
            tree.focus(tree.firstNode);
          else if (current.isSelected)
            tree.selectContiguous(next);
          else
            tree.selectMulti(next);
          return;
        }
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = tree.prevNode;
        if (!e.shiftKey || tree.props.disableMultiSelection) {
          tree.focus(prev);
          return;
        } else {
          if (!prev)
            return;
          const current1 = tree.focusedNode;
          if (!current1)
            tree.focus(tree.lastNode);
          else if (current1.isSelected)
            tree.selectContiguous(prev);
          else
            tree.selectMulti(prev);
          return;
        }
      }
      if (e.key === "ArrowRight") {
        const node1 = tree.focusedNode;
        if (!node1)
          return;
        if (node1.isInternal && node1.isOpen)
          tree.focus(tree.nextNode);
        else if (node1.isInternal)
          tree.open(node1.id);
        return;
      }
      if (e.key === "ArrowLeft") {
        const node2 = tree.focusedNode;
        if (!node2 || node2.isRoot)
          return;
        if (node2.isInternal && node2.isOpen)
          tree.close(node2.id);
        else if (!node2.parent?.isRoot)
          tree.focus(node2.parent);
        return;
      }
      if (e.key === "a" && e.metaKey && !tree.props.disableMultiSelection) {
        e.preventDefault();
        tree.selectAll();
        return;
      }
      if (e.key === "a" && !e.metaKey && tree.props.onCreate) {
        tree.createLeaf();
        return;
      }
      if (e.key === "A" && !e.metaKey) {
        if (!tree.props.onCreate)
          return;
        tree.createInternal();
        return;
      }
      if (e.key === "Home") {
        e.preventDefault();
        tree.focus(tree.firstNode);
        return;
      }
      if (e.key === "End") {
        e.preventDefault();
        tree.focus(tree.lastNode);
        return;
      }
      if (e.key === "Enter") {
        const node3 = tree.focusedNode;
        if (!node3)
          return;
        if (!node3.isEditable || !tree.props.onRename)
          return;
        setTimeout(() => {
          if (node3)
            tree.edit(node3);
        });
        return;
      }
      if (e.key === " ") {
        e.preventDefault();
        const node4 = tree.focusedNode;
        if (!node4)
          return;
        if (node4.isLeaf) {
          node4.select();
          node4.activate();
        } else
          node4.toggle();
        return;
      }
      if (e.key === "*") {
        const node5 = tree.focusedNode;
        if (!node5)
          return;
        tree.openSiblings(node5);
        return;
      }
      if (e.key === "PageUp") {
        e.preventDefault();
        tree.pageUp();
        return;
      }
      if (e.key === "PageDown") {
        e.preventDefault();
        tree.pageDown();
      }
      clearTimeout($065a164934293bf2$var$timeoutId);
      $065a164934293bf2$var$focusSearchTerm += e.key;
      $065a164934293bf2$var$timeoutId = setTimeout(() => {
        $065a164934293bf2$var$focusSearchTerm = "";
      }, 600);
      const node6 = tree.visibleNodes.find((n) => {
        const name = n.data.name;
        if (typeof name === "string")
          return name.toLowerCase().startsWith($065a164934293bf2$var$focusSearchTerm);
        else
          return false;
      });
      if (node6)
        tree.focus(node6.id);
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)((0, FixedSizeList), {
      className: tree.props.className,
      outerRef: tree.listEl,
      itemCount: tree.visibleNodes.length,
      height: tree.height,
      width: tree.width,
      itemSize: tree.rowHeight,
      overscanCount: tree.overscanCount,
      itemKey: (index) => tree.visibleNodes[index]?.id || index,
      outerElementType: (0, $05f64c7ebcbad8b5$export$70c2b8898b86d3ad),
      innerElementType: (0, $da9a6b47b6fff922$export$a9af0da3ae60cd00),
      onScroll: tree.props.onScroll,
      onItemsRendered: tree.onItemsRendered.bind(tree),
      ref: tree.list,
      children: (0, $8c3aed0a01f84486$export$a9754b3c8daa5172)
    })
  });
}
function $749bc746798c29ad$export$5897d8d7c7a3d871(tree) {
  if (tree.isFiltered)
    return $749bc746798c29ad$var$flattenAndFilterTree(tree.root, tree.isMatch.bind(tree));
  else
    return $749bc746798c29ad$var$flattenTree(tree.root);
}
function $749bc746798c29ad$var$flattenTree(root) {
  const list = [];
  function collect(node) {
    if (node.level >= 0)
      list.push(node);
    if (node.isOpen)
      node.children?.forEach(collect);
  }
  collect(root);
  list.forEach($749bc746798c29ad$var$assignRowIndex);
  return list;
}
function $749bc746798c29ad$var$flattenAndFilterTree(root, isMatch) {
  function collect(node) {
    let result = [];
    const yes = !node.isRoot && isMatch(node);
    if (node.children)
      for (let child of node.children)
        result = result.concat(collect(child));
    if (result.length) {
      if (!node.isRoot)
        result.unshift(node);
      return result;
    }
    if (yes)
      return [
        node
      ];
    else
      return [];
  }
  const list = collect(root).filter((n) => n.parent?.isOpen);
  list.forEach($749bc746798c29ad$var$assignRowIndex);
  return list;
}
function $749bc746798c29ad$var$assignRowIndex(node, index) {
  node.rowIndex = index;
}
var $659b2f68e1468ad0$export$c6d108d7c8095f19 = (nodes) => {
  return nodes.reduce((map, node, index) => {
    map[node.id] = index;
    return map;
  }, {});
};
var { safeRun: $bfece7c4aed4e9c4$var$safeRun, identify: $bfece7c4aed4e9c4$var$identify, identifyNull: $bfece7c4aed4e9c4$var$identifyNull } = $0e6083160f4b36ed$exports;
var $bfece7c4aed4e9c4$export$e2da3477247342d1 = class {
  constructor(store, props, list, listEl) {
    this.store = store;
    this.props = props;
    this.list = list;
    this.listEl = listEl;
    this.visibleStartIndex = 0;
    this.visibleStopIndex = 0;
    this.root = (0, $81080a351c006222$export$882461b6382ed46c)(this);
    this.visibleNodes = (0, $749bc746798c29ad$export$5897d8d7c7a3d871)(this);
    this.idToIndex = (0, $659b2f68e1468ad0$export$c6d108d7c8095f19)(this.visibleNodes);
  }
  update(props) {
    this.props = props;
    this.root = (0, $81080a351c006222$export$882461b6382ed46c)(this);
    this.visibleNodes = (0, $749bc746798c29ad$export$5897d8d7c7a3d871)(this);
    this.idToIndex = (0, $659b2f68e1468ad0$export$c6d108d7c8095f19)(this.visibleNodes);
  }
  dispatch(action) {
    return this.store.dispatch(action);
  }
  get state() {
    return this.store.getState();
  }
  get openState() {
    return this.state.nodes.open.unfiltered;
  }
  get width() {
    return this.props.width ?? 300;
  }
  get height() {
    return this.props.height ?? 500;
  }
  get indent() {
    return this.props.indent ?? 24;
  }
  get rowHeight() {
    return this.props.rowHeight ?? 24;
  }
  get overscanCount() {
    return this.props.overscanCount ?? 1;
  }
  get searchTerm() {
    return (this.props.searchTerm || "").trim();
  }
  get matchFn() {
    const match = this.props.searchMatch ?? ((node, term) => {
      const string = JSON.stringify(Object.values(node.data));
      return string.toLocaleLowerCase().includes(term.toLocaleLowerCase());
    });
    return (node) => match(node, this.searchTerm);
  }
  accessChildren(data) {
    const get2 = this.props.childrenAccessor || "children";
    return $0e6083160f4b36ed$exports.access(data, get2) ?? null;
  }
  accessId(data) {
    const get2 = this.props.idAccessor || "id";
    const id = $0e6083160f4b36ed$exports.access(data, get2);
    if (!id)
      throw new Error("Data must contain an 'id' property or props.idAccessor must return a string");
    return id;
  }
  get firstNode() {
    return this.visibleNodes[0] ?? null;
  }
  get lastNode() {
    return this.visibleNodes[this.visibleNodes.length - 1] ?? null;
  }
  get focusedNode() {
    return this.get(this.state.nodes.focus.id) ?? null;
  }
  get mostRecentNode() {
    return this.get(this.state.nodes.selection.mostRecent) ?? null;
  }
  get nextNode() {
    const index = this.indexOf(this.focusedNode);
    if (index === null)
      return null;
    else
      return this.at(index + 1);
  }
  get prevNode() {
    const index = this.indexOf(this.focusedNode);
    if (index === null)
      return null;
    else
      return this.at(index - 1);
  }
  get(id) {
    if (!id)
      return null;
    if (id in this.idToIndex)
      return this.visibleNodes[this.idToIndex[id]] || null;
    else
      return null;
  }
  at(index) {
    return this.visibleNodes[index] || null;
  }
  nodesBetween(startId, endId) {
    if (startId === null || endId === null)
      return [];
    const index1 = this.indexOf(startId) ?? 0;
    const index2 = this.indexOf(endId);
    if (index2 === null)
      return [];
    const start = Math.min(index1, index2);
    const end = Math.max(index1, index2);
    return this.visibleNodes.slice(start, end + 1);
  }
  indexOf(id) {
    const key = $0e6083160f4b36ed$exports.identifyNull(id);
    if (!key)
      return null;
    return this.idToIndex[key];
  }
  get editingId() {
    return this.state.nodes.edit.id;
  }
  createInternal() {
    return this.create({
      type: "internal"
    });
  }
  createLeaf() {
    return this.create({
      type: "leaf"
    });
  }
  async create(opts = {}) {
    const parentId = opts.parentId === void 0 ? $0e6083160f4b36ed$exports.getInsertParentId(this) : opts.parentId;
    const index = opts.index ?? $0e6083160f4b36ed$exports.getInsertIndex(this);
    const type = opts.type ?? "leaf";
    const data = await $bfece7c4aed4e9c4$var$safeRun(this.props.onCreate, {
      type,
      parentId,
      index,
      parentNode: this.get(parentId)
    });
    if (data) {
      this.focus(data);
      setTimeout(() => {
        this.edit(data).then(() => {
          this.select(data);
          this.activate(data);
        });
      });
    }
  }
  async delete(node) {
    if (!node)
      return;
    const idents = Array.isArray(node) ? node : [
      node
    ];
    const ids = idents.map($bfece7c4aed4e9c4$var$identify);
    const nodes = ids.map((id) => this.get(id)).filter((n) => !!n);
    await $bfece7c4aed4e9c4$var$safeRun(this.props.onDelete, {
      nodes,
      ids
    });
  }
  edit(node) {
    const id = $bfece7c4aed4e9c4$var$identify(node);
    this.resolveEdit({
      cancelled: true
    });
    this.scrollTo(id);
    this.dispatch((0, $21783d2b0251be67$export$e1a8e267487c59d1)(id));
    return new Promise((resolve) => {
      $bfece7c4aed4e9c4$export$e2da3477247342d1.editPromise = resolve;
    });
  }
  async submit(identity, value) {
    if (!identity)
      return;
    const id = $bfece7c4aed4e9c4$var$identify(identity);
    await $bfece7c4aed4e9c4$var$safeRun(this.props.onRename, {
      id,
      name: value,
      node: this.get(id)
    });
    this.dispatch((0, $21783d2b0251be67$export$e1a8e267487c59d1)(null));
    this.resolveEdit({
      cancelled: false,
      value
    });
    setTimeout(() => this.onFocus());
  }
  reset() {
    this.dispatch((0, $21783d2b0251be67$export$e1a8e267487c59d1)(null));
    this.resolveEdit({
      cancelled: true
    });
    setTimeout(() => this.onFocus());
  }
  activate(id) {
    const node = this.get($bfece7c4aed4e9c4$var$identifyNull(id));
    if (!node)
      return;
    $bfece7c4aed4e9c4$var$safeRun(this.props.onActivate, node);
  }
  resolveEdit(value) {
    const resolve = $bfece7c4aed4e9c4$export$e2da3477247342d1.editPromise;
    if (resolve)
      resolve(value);
    $bfece7c4aed4e9c4$export$e2da3477247342d1.editPromise = null;
  }
  get selectedIds() {
    return this.state.nodes.selection.ids;
  }
  get selectedNodes() {
    let nodes = [];
    for (let id of Array.from(this.selectedIds)) {
      const node = this.get(id);
      if (node)
        nodes.push(node);
    }
    return nodes;
  }
  focus(node, opts = {}) {
    if (!node)
      return;
    if (this.props.selectionFollowsFocus)
      this.select(node);
    else {
      this.dispatch((0, $c27b8e9863235052$export$d7ddd398f22d79ef)($bfece7c4aed4e9c4$var$identify(node)));
      if (opts.scroll !== false)
        this.scrollTo(node);
      if (this.focusedNode)
        $bfece7c4aed4e9c4$var$safeRun(this.props.onFocus, this.focusedNode);
    }
  }
  pageUp() {
    const start = this.visibleStartIndex;
    const stop = this.visibleStopIndex;
    const page = stop - start;
    let index = this.focusedNode?.rowIndex ?? 0;
    if (index > start)
      index = start;
    else
      index = Math.max(start - page, 0);
    this.focus(this.at(index));
  }
  pageDown() {
    const start = this.visibleStartIndex;
    const stop = this.visibleStopIndex;
    const page = stop - start;
    let index = this.focusedNode?.rowIndex ?? 0;
    if (index < stop)
      index = stop;
    else
      index = Math.min(index + page, this.visibleNodes.length - 1);
    this.focus(this.at(index));
  }
  select(node, opts = {}) {
    if (!node)
      return;
    const id = $bfece7c4aed4e9c4$var$identify(node);
    this.dispatch((0, $c27b8e9863235052$export$d7ddd398f22d79ef)(id));
    this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).only(id));
    this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).anchor(id));
    this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).mostRecent(id));
    this.scrollTo(id, opts.align);
    if (this.focusedNode)
      $bfece7c4aed4e9c4$var$safeRun(this.props.onFocus, this.focusedNode);
    $bfece7c4aed4e9c4$var$safeRun(this.props.onSelect, this.selectedNodes);
  }
  deselect(node) {
    if (!node)
      return;
    const id = $bfece7c4aed4e9c4$var$identify(node);
    this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).remove(id));
  }
  selectMulti(identity) {
    const node = this.get($bfece7c4aed4e9c4$var$identifyNull(identity));
    if (!node)
      return;
    this.dispatch((0, $c27b8e9863235052$export$d7ddd398f22d79ef)(node.id));
    this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).add(node.id));
    this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).anchor(node.id));
    this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).mostRecent(node.id));
    this.scrollTo(node);
    if (this.focusedNode)
      $bfece7c4aed4e9c4$var$safeRun(this.props.onFocus, this.focusedNode);
    $bfece7c4aed4e9c4$var$safeRun(this.props.onSelect, this.selectedNodes);
  }
  selectContiguous(identity) {
    if (!identity)
      return;
    const id = $bfece7c4aed4e9c4$var$identify(identity);
    const { anchor, mostRecent } = this.state.nodes.selection;
    this.dispatch((0, $c27b8e9863235052$export$d7ddd398f22d79ef)(id));
    this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).remove(this.nodesBetween(anchor, mostRecent)));
    this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).add(this.nodesBetween(anchor, $bfece7c4aed4e9c4$var$identifyNull(id))));
    this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).mostRecent(id));
    this.scrollTo(id);
    if (this.focusedNode)
      $bfece7c4aed4e9c4$var$safeRun(this.props.onFocus, this.focusedNode);
    $bfece7c4aed4e9c4$var$safeRun(this.props.onSelect, this.selectedNodes);
  }
  deselectAll() {
    this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).clear());
    this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).anchor(null));
    this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).mostRecent(null));
    $bfece7c4aed4e9c4$var$safeRun(this.props.onSelect, this.selectedNodes);
  }
  selectAll() {
    this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).set(new Set(Object.keys(this.idToIndex))));
    this.dispatch((0, $c27b8e9863235052$export$d7ddd398f22d79ef)(this.lastNode?.id));
    this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).anchor(this.firstNode));
    this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).mostRecent(this.lastNode));
    if (this.focusedNode)
      $bfece7c4aed4e9c4$var$safeRun(this.props.onFocus, this.focusedNode);
    $bfece7c4aed4e9c4$var$safeRun(this.props.onSelect, this.selectedNodes);
  }
  get cursorParentId() {
    const { cursor } = this.state.dnd;
    switch (cursor.type) {
      case "highlight":
        return cursor.id;
      default:
        return null;
    }
  }
  get cursorOverFolder() {
    return this.state.dnd.cursor.type === "highlight";
  }
  get dragNodes() {
    return this.state.dnd.dragIds.map((id) => this.get(id)).filter((n) => !!n);
  }
  canDrop() {
    if (this.isFiltered)
      return false;
    const parentNode = this.get(this.state.dnd.parentId) ?? this.root;
    const dragNodes = this.dragNodes;
    const isDisabled = this.props.disableDrop;
    for (const drag of dragNodes) {
      if (!drag)
        return false;
      if (!parentNode)
        return false;
      if (drag.isInternal && $0e6083160f4b36ed$exports.isDecendent(parentNode, drag))
        return false;
    }
    if (typeof isDisabled == "function")
      return !isDisabled({
        parentNode,
        dragNodes: this.dragNodes,
        index: this.state.dnd.index
      });
    else if (typeof isDisabled == "string")
      return !parentNode.data[isDisabled];
    else if (typeof isDisabled === "boolean")
      return !isDisabled;
    else
      return true;
  }
  hideCursor() {
    this.dispatch((0, $59f144a8dd651e5e$export$e324594224ef24da).cursor({
      type: "none"
    }));
  }
  showCursor(cursor) {
    this.dispatch((0, $59f144a8dd651e5e$export$e324594224ef24da).cursor(cursor));
  }
  open(identity) {
    const id = $bfece7c4aed4e9c4$var$identifyNull(identity);
    if (!id)
      return;
    if (this.isOpen(id))
      return;
    this.dispatch((0, $3c0bad2888bcd4bc$export$e324594224ef24da).open(id, this.isFiltered));
    $bfece7c4aed4e9c4$var$safeRun(this.props.onToggle, id);
  }
  close(identity) {
    const id = $bfece7c4aed4e9c4$var$identifyNull(identity);
    if (!id)
      return;
    if (!this.isOpen(id))
      return;
    this.dispatch((0, $3c0bad2888bcd4bc$export$e324594224ef24da).close(id, this.isFiltered));
    $bfece7c4aed4e9c4$var$safeRun(this.props.onToggle, id);
  }
  toggle(identity) {
    const id = $bfece7c4aed4e9c4$var$identifyNull(identity);
    if (!id)
      return;
    return this.isOpen(id) ? this.close(id) : this.open(id);
  }
  openParents(identity) {
    const id = $bfece7c4aed4e9c4$var$identifyNull(identity);
    if (!id)
      return;
    const node = $0e6083160f4b36ed$exports.dfs(this.root, id);
    let parent = node?.parent;
    while (parent) {
      this.open(parent.id);
      parent = parent.parent;
    }
  }
  openSiblings(node) {
    const parent = node.parent;
    if (!parent)
      this.toggle(node.id);
    else if (parent.children) {
      const isOpen = node.isOpen;
      for (let sibling of parent.children)
        if (sibling.isInternal)
          isOpen ? this.close(sibling.id) : this.open(sibling.id);
      this.scrollTo(this.focusedNode);
    }
  }
  openAll() {
    $0e6083160f4b36ed$exports.walk(this.root, (node) => {
      if (node.isInternal)
        node.open();
    });
  }
  closeAll() {
    $0e6083160f4b36ed$exports.walk(this.root, (node) => {
      if (node.isInternal)
        node.close();
    });
  }
  scrollTo(identity, align = "smart") {
    if (!identity)
      return;
    const id = $bfece7c4aed4e9c4$var$identify(identity);
    this.openParents(id);
    return $0e6083160f4b36ed$exports.waitFor(() => id in this.idToIndex).then(() => {
      const index = this.idToIndex[id];
      if (index === void 0)
        return;
      this.list.current?.scrollToItem(index, align);
    }).catch(() => {
    });
  }
  get isEditing() {
    return this.state.nodes.edit.id !== null;
  }
  get isFiltered() {
    return !!this.props.searchTerm?.trim();
  }
  get hasFocus() {
    return this.state.nodes.focus.treeFocused;
  }
  get hasNoSelection() {
    return this.state.nodes.selection.ids.size === 0;
  }
  get hasOneSelection() {
    return this.state.nodes.selection.ids.size === 1;
  }
  get hasMultipleSelections() {
    return this.state.nodes.selection.ids.size > 1;
  }
  isSelected(id) {
    if (!id)
      return false;
    return this.state.nodes.selection.ids.has(id);
  }
  isOpen(id) {
    if (!id)
      return false;
    if (id === (0, $81080a351c006222$export$ec71a3379b43ae5c))
      return true;
    const def = this.props.openByDefault ?? true;
    if (this.isFiltered)
      return this.state.nodes.open.filtered[id] ?? true;
    else
      return this.state.nodes.open.unfiltered[id] ?? def;
  }
  isEditable(data) {
    const check = this.props.disableEdit || (() => false);
    return !$0e6083160f4b36ed$exports.access(data, check);
  }
  isDraggable(data) {
    const check = this.props.disableDrag || (() => false);
    return !$0e6083160f4b36ed$exports.access(data, check);
  }
  isDragging(node) {
    const id = $bfece7c4aed4e9c4$var$identifyNull(node);
    if (!id)
      return false;
    return this.state.nodes.drag.id === id;
  }
  isFocused(id) {
    return this.hasFocus && this.state.nodes.focus.id === id;
  }
  isMatch(node) {
    return this.matchFn(node);
  }
  willReceiveDrop(node) {
    const id = $bfece7c4aed4e9c4$var$identifyNull(node);
    if (!id)
      return false;
    return id === this.state.nodes.drag.idWillReceiveDrop;
  }
  onFocus() {
    const node = this.focusedNode || this.firstNode;
    if (node)
      this.dispatch((0, $c27b8e9863235052$export$d7ddd398f22d79ef)(node.id));
  }
  onBlur() {
    this.dispatch((0, $c27b8e9863235052$export$6b6c976e46a06288)());
  }
  onItemsRendered(args) {
    this.visibleStartIndex = args.visibleStartIndex;
    this.visibleStopIndex = args.visibleStopIndex;
  }
  get renderContainer() {
    return this.props.renderContainer || (0, $065a164934293bf2$export$ff4858a4110d9246);
  }
  get renderRow() {
    return this.props.renderRow || (0, $164e874d21fcd87e$export$f9c541e71856c524);
  }
  get renderNode() {
    return this.props.children || (0, $c4edd692d5290432$export$909e23cbfbbd3351);
  }
  get renderDragPreview() {
    return this.props.renderDragPreview || (0, $77d34d95e44d2f58$export$84e211ad8431a387);
  }
  get renderCursor() {
    return this.props.renderCursor || (0, $fb4c15d8425379bd$export$6cb3c16721363d11);
  }
};
function $5c35ee13c124a8cc$export$1650419e431d3ba3(state = {
  id: null,
  idWillReceiveDrop: null
}, action) {
  switch (action.type) {
    case "DND_DRAG_START":
      return {
        ...state,
        id: action.id
      };
    case "DND_DRAG_END":
      return {
        ...state,
        id: null
      };
    case "DND_CURSOR":
      const c = action.cursor;
      if (c.type === "highlight" && c.id !== state.idWillReceiveDrop)
        return {
          ...state,
          idWillReceiveDrop: c.id
        };
      else if (c.type !== "highlight" && state.idWillReceiveDrop !== null)
        return {
          ...state,
          idWillReceiveDrop: null
        };
      else
        return state;
    default:
      return state;
  }
}
var $a18760514dcf279e$export$a8a69c316169e623 = (0, combineReducers)({
  nodes: (0, combineReducers)({
    focus: $c27b8e9863235052$export$1650419e431d3ba3,
    edit: $21783d2b0251be67$export$1650419e431d3ba3,
    open: $3c0bad2888bcd4bc$export$1650419e431d3ba3,
    selection: $37bc167debff36d2$export$1650419e431d3ba3,
    drag: $5c35ee13c124a8cc$export$1650419e431d3ba3
  }),
  dnd: $59f144a8dd651e5e$export$1650419e431d3ba3
});
var $dac24389e46ba09d$var$SERVER_STATE = (0, $6ad32e02250c922e$export$d4c72bab9d6cc13a)();
function $dac24389e46ba09d$export$c49dab5eb1b4ce0c({ treeProps, imperativeHandle, children }) {
  const list = (0, import_react20.useRef)(null);
  const listEl = (0, import_react20.useRef)(null);
  const store = (0, import_react20.useRef)((0, createStore)((0, $a18760514dcf279e$export$a8a69c316169e623), (0, $6ad32e02250c922e$export$d4c72bab9d6cc13a)(treeProps)));
  const state = (0, import_shim.useSyncExternalStore)(store.current.subscribe, store.current.getState, () => $dac24389e46ba09d$var$SERVER_STATE);
  const api = (0, import_react20.useMemo)(() => {
    return new (0, $bfece7c4aed4e9c4$export$e2da3477247342d1)(store.current, treeProps, list, listEl);
  }, []);
  const updateCount = (0, import_react20.useRef)(0);
  (0, import_react20.useMemo)(() => {
    updateCount.current += 1;
    api.update(treeProps);
  }, [
    ...Object.values(treeProps),
    state.nodes.open
  ]);
  (0, import_react20.useImperativeHandle)(imperativeHandle, () => api);
  (0, import_react20.useEffect)(() => {
    if (api.props.selection)
      api.select(api.props.selection);
    else
      api.deselectAll();
  }, [
    api.props.selection
  ]);
  (0, import_react20.useEffect)(() => {
    if (!api.props.searchTerm)
      store.current.dispatch((0, $3c0bad2888bcd4bc$export$e324594224ef24da).clear(true));
  }, [
    api.props.searchTerm
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)((0, $89e93131aae74bd9$export$feef243b04ff4151).Provider, {
    value: api,
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)((0, $89e93131aae74bd9$export$d0c71bc5e3e2d897).Provider, {
      value: updateCount.current,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)((0, $89e93131aae74bd9$export$f6d467aa8b3786af).Provider, {
        value: state.nodes,
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)((0, $89e93131aae74bd9$export$2d5c5ceac203fc1e).Provider, {
          value: state.dnd,
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)((0, DndProvider), {
            backend: (0, HTML5Backend),
            options: {
              rootElement: api.props.dndRootElement || void 0
            },
            children
          })
        })
      })
    })
  });
}
function $e739455e59c6aed3$export$5a6c424b1725f44f() {
  const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
  const [, drop] = (0, useDrop)(() => ({
    accept: "NODE",
    canDrop: (_item, m) => {
      if (!m.isOver({
        shallow: true
      }))
        return false;
      return tree.canDrop();
    },
    hover: (_item, m) => {
      if (!m.isOver({
        shallow: true
      }))
        return;
      const offset = m.getClientOffset();
      if (!tree.listEl.current || !offset)
        return;
      const { cursor, drop: drop2 } = (0, $2db980bfed6822da$export$f502ca02ebb85a1c)({
        element: tree.listEl.current,
        offset,
        indent: tree.indent,
        node: null,
        prevNode: tree.visibleNodes[tree.visibleNodes.length - 1],
        nextNode: null
      });
      if (drop2)
        tree.dispatch((0, $59f144a8dd651e5e$export$e324594224ef24da).hovering(drop2.parentId, drop2.index));
      if (m.canDrop()) {
        if (cursor)
          tree.showCursor(cursor);
      } else
        tree.hideCursor();
    }
  }), [
    tree
  ]);
  drop(tree.listEl);
}
function $5d6a5680e6f62734$export$a6ee728c3c6ef11d(props) {
  (0, $e739455e59c6aed3$export$5a6c424b1725f44f)();
  return props.children;
}
function $f13a06e5444f84b6$export$cdf2ef3f6364d85() {
  const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
  const Container = tree.props.renderContainer || (0, $065a164934293bf2$export$ff4858a4110d9246);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)((0, import_jsx_runtime2.Fragment), {
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Container, {})
  });
}
function $8f8be4c9bb5ab52a$export$3e21b60650ec7e55() {
  const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
  const { offset, mouse, item, isDragging } = (0, useDragLayer)((m) => {
    return {
      offset: m.getSourceClientOffset(),
      mouse: m.getClientOffset(),
      item: m.getItem(),
      isDragging: m.isDragging()
    };
  });
  const DragPreview = tree.props.renderDragPreview || (0, $77d34d95e44d2f58$export$84e211ad8431a387);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DragPreview, {
    offset,
    mouse,
    id: item?.id || null,
    dragIds: item?.dragIds || [],
    isDragging
  });
}
var $0a3913338341addb$exports = {};
$parcel$export($0a3913338341addb$exports, "useSimpleTree", () => $0a3913338341addb$export$dcd27aa2043b2724);
var $65f74606ca594063$exports = {};
$parcel$export($65f74606ca594063$exports, "SimpleTree", () => $65f74606ca594063$export$e32206264f456dce);
var $65f74606ca594063$export$e32206264f456dce = class {
  constructor(data) {
    this.root = $65f74606ca594063$var$createRoot(data);
  }
  get data() {
    return this.root.children?.map((node) => node.data) ?? [];
  }
  create(args) {
    const parent = args.parentId ? this.find(args.parentId) : this.root;
    if (!parent)
      return null;
    parent.addChild(args.data, args.index);
  }
  move(args) {
    const src = this.find(args.id);
    const parent = args.parentId ? this.find(args.parentId) : this.root;
    if (!src || !parent)
      return;
    parent.addChild(src.data, args.index);
    src.drop();
  }
  update(args) {
    const node = this.find(args.id);
    if (node)
      node.update(args.changes);
  }
  drop(args) {
    const node = this.find(args.id);
    if (node)
      node.drop();
  }
  find(id, node = this.root) {
    if (!node)
      return null;
    if (node.id === id)
      return node;
    if (node.children) {
      for (let child of node.children) {
        const found = this.find(id, child);
        if (found)
          return found;
      }
      return null;
    }
    return null;
  }
};
function $65f74606ca594063$var$createRoot(data) {
  const root = new $65f74606ca594063$var$SimpleNode({
    id: "ROOT"
  }, null);
  root.children = data.map((d) => $65f74606ca594063$var$createNode(d, root));
  return root;
}
function $65f74606ca594063$var$createNode(data, parent) {
  const node = new $65f74606ca594063$var$SimpleNode(data, parent);
  if (data.children)
    node.children = data.children.map((d) => $65f74606ca594063$var$createNode(d, node));
  return node;
}
var $65f74606ca594063$var$SimpleNode = class {
  constructor(data, parent) {
    this.data = data;
    this.parent = parent;
    this.id = data.id;
  }
  hasParent() {
    return !!this.parent;
  }
  get childIndex() {
    return this.hasParent() ? this.parent.children.indexOf(this) : -1;
  }
  addChild(data, index) {
    const node = $65f74606ca594063$var$createNode(data, this);
    this.children = this.children ?? [];
    this.children.splice(index, 0, node);
    this.data.children = this.data.children ?? [];
    this.data.children.splice(index, 0, data);
  }
  removeChild(index) {
    this.children?.splice(index, 1);
    this.data.children?.splice(index, 1);
  }
  update(changes) {
    if (this.hasParent()) {
      const i = this.childIndex;
      this.parent.addChild({
        ...this.data,
        ...changes
      }, i);
      this.drop();
    }
  }
  drop() {
    if (this.hasParent())
      this.parent.removeChild(this.childIndex);
  }
};
var $0a3913338341addb$var$nextId = 0;
function $0a3913338341addb$export$dcd27aa2043b2724(initialData) {
  const [data, setData] = (0, import_react20.useState)(initialData);
  const tree = (0, import_react20.useMemo)(() => new (0, $65f74606ca594063$export$e32206264f456dce)(data), [
    data
  ]);
  const onMove = (args) => {
    for (const id of args.dragIds)
      tree.move({
        id,
        parentId: args.parentId,
        index: args.index
      });
    setData(tree.data);
  };
  const onRename = ({ name, id }) => {
    tree.update({
      id,
      changes: {
        name
      }
    });
    setData(tree.data);
  };
  const onCreate = ({ parentId, index, type }) => {
    const data2 = {
      id: `simple-tree-id-${$0a3913338341addb$var$nextId++}`,
      name: ""
    };
    if (type === "internal")
      data2.children = [];
    tree.create({
      parentId,
      index,
      data: data2
    });
    setData(tree.data);
    return data2;
  };
  const onDelete = (args) => {
    args.ids.forEach((id) => tree.drop({
      id
    }));
    setData(tree.data);
  };
  const controller = {
    onMove,
    onRename,
    onCreate,
    onDelete
  };
  return [
    data,
    controller
  ];
}
function $c881d1adb735dfd0$export$d227906824a13416(props) {
  if (props.initialData && props.data)
    throw new Error(`React Arborist Tree => Provide either a data or initialData prop, but not both.`);
  if (props.initialData && (props.onCreate || props.onDelete || props.onMove || props.onRename))
    throw new Error(`React Arborist Tree => You passed the initialData prop along with a data handler.
Use the data prop if you want to provide your own handlers.`);
  if (props.initialData) {
    const [data, controller] = (0, $0a3913338341addb$export$dcd27aa2043b2724)(props.initialData);
    return {
      ...props,
      ...controller,
      data
    };
  } else
    return props;
}
function $2ba43033bb8eb39d$var$TreeComponent(props, ref) {
  const treeProps = (0, $c881d1adb735dfd0$export$d227906824a13416)(props);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)((0, $dac24389e46ba09d$export$c49dab5eb1b4ce0c), {
    treeProps,
    imperativeHandle: ref,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)((0, $5d6a5680e6f62734$export$a6ee728c3c6ef11d), {
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)((0, $f13a06e5444f84b6$export$cdf2ef3f6364d85), {})
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)((0, $8f8be4c9bb5ab52a$export$3e21b60650ec7e55), {})
    ]
  });
}
var $2ba43033bb8eb39d$export$7fbedc92909ed28e = /* @__PURE__ */ (0, import_react20.forwardRef)($2ba43033bb8eb39d$var$TreeComponent);

// app/routes/notes.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function NotesPage() {
  const navigate = useNavigate();
  const data = useLoaderData();
  console.log("data:", data);
  const user = useUser();
  const [showSideBar, setShowSideBar] = (0, import_react22.useState)(true);
  const [dataTree, setDataTree] = (0, import_react22.useState)(data);
  function Node({ node, style, dragHandle }) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style, ref: dragHandle, children: [
      node.isLeaf ? "" : "\u{1F5C0}",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "no-underline", href: "/notes/" + node.data.id, children: node.data.title }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this);
  }
  const data2 = [
    { id: "1", name: "Unread", link: "/notes" },
    { id: "2", name: "Threads" },
    {
      id: "3",
      name: "Chat Rooms",
      children: [
        { id: "c1", name: "General" },
        { id: "c2", name: "Random" },
        { id: "c3", name: "Open Source Projects" }
      ]
    },
    {
      id: "4",
      name: "Direct Messages",
      children: [
        { id: "d1", name: "Alice" },
        { id: "d2", name: "Bob" },
        { id: "d3", name: "Charlie" }
      ]
    }
  ];
  (0, import_react22.useEffect)(() => {
    setDataTree(data);
    function handleResize() {
      if (window.innerWidth < 380) {
        setShowSideBar(false);
      }
    }
    window.addEventListener("resize", handleResize);
  });
  const handleToggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex pt-6 items-center justify-between bg-slate-800 p-2 text-white no-underline", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
        handleToggleSideBar();
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-6 h-6", "aria-hidden": "true", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "text-1xl font-sans	pt-1 pl-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: ".", className: "no-underline text-yellow-500", children: "MW Notes" }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      user.id,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "rounded bg-slate-600 px-4 py-1 text-blue-100 hover:bg-blue-500 active:bg-blue-600 text-xs",
          children: user.email
        },
        void 0,
        false,
        {
          fileName: "app/routes/notes.tsx",
          lineNumber: 98,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex h-full", children: [
      showSideBar && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: " pl-5 w-[150px] py-3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/notes/new", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-6 w-6 text-gray-400", width: "24", height: "24", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
          "  ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { stroke: "none", d: "M0 0h24v24H0z" }, void 0, false, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 117,
            columnNumber: 212
          }, this),
          "  ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }, void 0, false, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 117,
            columnNumber: 253
          }, this),
          "  ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" }, void 0, false, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 117,
            columnNumber: 291
          }, this),
          "  ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "12", y1: "11", x2: "12", y2: "17" }, void 0, false, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 117,
            columnNumber: 376
          }, this),
          "  ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "9", y1: "14", x2: "15", y2: "14" }, void 0, false, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 117,
            columnNumber: 418
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 117,
          columnNumber: 32
        }, this) }, void 0, false, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          $2ba43033bb8eb39d$export$7fbedc92909ed28e,
          {
            initialData: dataTree,
            openByDefault: true,
            width: 150,
            height: 1e3,
            indent: 24,
            rowHeight: 25,
            overscanCount: 1,
            paddingTop: 20,
            paddingBottom: 5,
            padding: 10,
            children: Node
          },
          void 0,
          false,
          {
            fileName: "app/routes/notes.tsx",
            lineNumber: 118,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 115,
        columnNumber: 7
      }, this),
      false,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 188,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 187,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}
export {
  NotesPage as default
};
//# sourceMappingURL=/build/routes/notes-BHLD2M34.js.map

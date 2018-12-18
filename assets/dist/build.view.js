/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/index.view.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/index.view.js":
/*!**********************************!*\
  !*** ./assets/src/index.view.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _paint_me_paint_me_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paint-me/paint-me.view */ \"./assets/src/paint-me/paint-me.view.js\");\n\n\n//# sourceURL=webpack:///./assets/src/index.view.js?");

/***/ }),

/***/ "./assets/src/paint-me/components/Canvas.js":
/*!**************************************************!*\
  !*** ./assets/src/paint-me/components/Canvas.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n // // used before bezier curves were implemented for smooth lines\n// function drawLine(ctx, p1, p2, color) {\n//     if (color) {\n//         ctx.strokeStyle = color;\n//     }\n//     ctx.beginPath();\n//     ctx.moveTo(p1.x, p1.y);\n//     ctx.lineTo(p2.x, p2.y);\n//     ctx.stroke();\n// }\n\nvar Canvas =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Canvas, _React$Component);\n\n  function Canvas(props) {\n    var _this;\n\n    _classCallCheck(this, Canvas);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Canvas).call(this, props));\n    _this.state = {\n      isDrawing: false,\n      inProgressLine: {\n        color: \"\",\n        points: []\n      }\n    };\n    _this.startDrawing = _this.startDrawing.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.endDrawing = _this.endDrawing.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handleMove = _this.handleMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(Canvas, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.updateCanvas(); // mouse up anywhere on screen should signal no more drawing\n\n      !this.props.viewMode && window.addEventListener(\"mouseup\", this.endDrawing);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // clean up, clean up, everybody everywhere!\n      !this.props.viewMode && window.removeEventListener(\"mouseup\", this.endDrawing);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      this.updateCanvas();\n    }\n  }, {\n    key: \"updateCanvas\",\n    value: function updateCanvas() {\n      var width = this.refs.canvas.width;\n      var height = this.refs.canvas.height;\n      var canvas = this.refs.canvas;\n      var ctx = canvas.getContext(\"2d\");\n      ctx.fillStyle = this.props.backgroundColor;\n      ctx.fillRect(0, 0, width, height);\n      this.drawLines(ctx);\n\n      if (this.state.inProgressLine.points.length > 1) {\n        this.drawInProgressLine(ctx);\n      }\n    }\n  }, {\n    key: \"drawInProgressLine\",\n    value: function drawInProgressLine(ctx) {\n      var line = {\n        color: this.props.lineColor,\n        width: this.props.lineWidth,\n        points: this.state.inProgressLine.points\n      };\n      this.drawBezierLine(ctx, line);\n    }\n  }, {\n    key: \"drawLines\",\n    value: function drawLines(ctx) {\n      var _this2 = this;\n\n      this.props.linesList.forEach(function (line) {\n        _this2.drawBezierLine(ctx, line);\n      });\n    }\n  }, {\n    key: \"drawBezierLine\",\n    value: function drawBezierLine(ctx, line) {\n      ctx.lineCap = 'round';\n      ctx.strokeStyle = line.color;\n      ctx.lineWidth = line.width;\n      var points = line.points;\n      var p1 = points[0];\n      var p2 = points[1]; // begin\n\n      ctx.beginPath();\n      ctx.moveTo(p1.x, p1.y);\n\n      for (var i = 1; i < points.length; i++) {\n        //find midpoint\n        var midpoint = {\n          x: p1.x + (p2.x - p1.x) / 2,\n          y: p1.y + (p2.y - p1.y) / 2\n        };\n        ctx.quadraticCurveTo(p1.x, p1.y, midpoint.x, midpoint.y);\n        p1 = points[i];\n        p2 = points[i + 1];\n      }\n\n      ctx.lineTo(p1.x, p1.y);\n      ctx.stroke();\n    }\n  }, {\n    key: \"startDrawing\",\n    value: function startDrawing(event) {\n      this.setState({\n        isDrawing: true\n      });\n    }\n  }, {\n    key: \"endDrawing\",\n    value: function endDrawing() {\n      var _this3 = this;\n\n      var current = this.state.inProgressLine;\n\n      if (current.points.length < 2) {\n        this.setState({\n          isDrawing: false\n        });\n        return;\n      }\n\n      this.setState({\n        isDrawing: false,\n        inProgressLine: {\n          color: \"\",\n          points: []\n        }\n      }, function () {\n        _this3.props.onLineAdded(current);\n      });\n    }\n  }, {\n    key: \"handleMove\",\n    value: function handleMove(event) {\n      if (this.state.isDrawing) {\n        var domRect = event.target.getBoundingClientRect();\n        var top = domRect.top;\n        var left = domRect.left;\n        var point = {\n          x: event.pageX - left,\n          y: event.pageY - top - 20\n        };\n        this.setState({\n          inProgressLine: {\n            color: this.props.lineColor,\n            width: this.props.lineWidth,\n            points: _toConsumableArray(this.state.inProgressLine.points).concat([point])\n          }\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var renderElements = this.props.viewMode ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"canvas\", {\n        style: {\n          boxShadow: \"0 0 5px 0 rgba(0,0,0,.3)\"\n        },\n        className: \"paintMe\",\n        ref: \"canvas\",\n        width: \"400\",\n        height: \"400\"\n      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"canvas\", {\n        style: {\n          boxShadow: \"0 0 5px 0 rgba(0,0,0,.3)\",\n          cursor: \"crosshair\"\n        },\n        className: \"paintMe\",\n        ref: \"canvas\",\n        width: \"400\",\n        height: \"400\",\n        onMouseDown: this.startDrawing,\n        onMouseMove: this.handleMove\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderElements);\n    }\n  }]);\n\n  return Canvas;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./assets/src/paint-me/components/Canvas.js?");

/***/ }),

/***/ "./assets/src/paint-me/paint-me.view.js":
/*!**********************************************!*\
  !*** ./assets/src/paint-me/paint-me.view.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Canvas */ \"./assets/src/paint-me/components/Canvas.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nready(function () {\n  var containers = document.querySelectorAll(\".wp-block-guty2-paint-me\");\n  var containersArray = Array.prototype.slice.call(containers);\n  containersArray.forEach(function (element) {\n    var reactProps = JSON.parse(element.dataset.reactProps);\n    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Canvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _extends({}, reactProps, {\n      viewMode: true\n    })), element);\n  });\n}); // Thank you http://youmightnotneedjquery.com/\n\nfunction ready(fn) {\n  if (document.attachEvent ? document.readyState === \"complete\" : document.readyState !== \"loading\") {\n    fn();\n  } else {\n    document.addEventListener(\"DOMContentLoaded\", fn);\n  }\n}\n\n//# sourceURL=webpack:///./assets/src/paint-me/paint-me.view.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ })

/******/ });
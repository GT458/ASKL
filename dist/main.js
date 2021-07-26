/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var Input = __webpack_require__(/*! ./scripts/input */ \"./src/scripts/input.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log('loaded');\n  var input = new Input(document.querySelector('.button'), document.querySelector('span'));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BU0tMLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsiSW5wdXQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImlucHV0IiwicXVlcnlTZWxlY3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLCtDQUFELENBQXJCOztBQUNBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLElBQUlOLEtBQUosQ0FBVUUsUUFBUSxDQUFDSyxhQUFULENBQXVCLFNBQXZCLENBQVYsRUFBNkNMLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1QixNQUF2QixDQUE3QyxDQUFkO0FBQ0QsQ0FIRCIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IElucHV0ID0gcmVxdWlyZSgnLi9zY3JpcHRzL2lucHV0JylcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ2xvYWRlZCcpO1xuICBjb25zdCBpbnB1dCA9IG5ldyBJbnB1dChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uJyksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKSk7XG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/input.js":
/*!******************************!*\
  !*** ./src/scripts/input.js ***!
  \******************************/
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Input = /*#__PURE__*/function () {\n  function Input(button, span) {\n    _classCallCheck(this, Input);\n\n    this.btn = button;\n    this.timesClicked = 0;\n    this.span = span;\n    this.handleClick = this.handleClick.bind(this);\n    this.bindEvent();\n  }\n\n  _createClass(Input, [{\n    key: \"bindEvent\",\n    value: function bindEvent() {\n      this.btn.addEventListener(\"click\", this.handleClick);\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick(e) {\n      this.timesClicked += 1;\n      this.span.textContent = \"\".concat(this.timesClicked);\n      console.log(this.timesClicked);\n    }\n  }]);\n\n  return Input;\n}();\n\nmodule.exports = Input;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BU0tMLy4vc3JjL3NjcmlwdHMvaW5wdXQuanM/NDRkNiJdLCJuYW1lcyI6WyJJbnB1dCIsImJ1dHRvbiIsInNwYW4iLCJidG4iLCJ0aW1lc0NsaWNrZWQiLCJoYW5kbGVDbGljayIsImJpbmQiLCJiaW5kRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRleHRDb250ZW50IiwiY29uc29sZSIsImxvZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxLO0FBQ0osaUJBQVlDLE1BQVosRUFBb0JDLElBQXBCLEVBQTBCO0FBQUE7O0FBQ3hCLFNBQUtDLEdBQUwsR0FBV0YsTUFBWDtBQUNBLFNBQUtHLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLRyxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0EsU0FBS0MsU0FBTDtBQUNEOzs7O1dBQ0QscUJBQVk7QUFDVixXQUFLSixHQUFMLENBQVNLLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUtILFdBQXhDO0FBQ0Q7OztXQUNELHFCQUFZSSxDQUFaLEVBQWU7QUFDYixXQUFLTCxZQUFMLElBQXFCLENBQXJCO0FBQ0EsV0FBS0YsSUFBTCxDQUFVUSxXQUFWLGFBQTJCLEtBQUtOLFlBQWhDO0FBQ0FPLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtSLFlBQWpCO0FBQ0Q7Ozs7OztBQUdIUyxNQUFNLENBQUNDLE9BQVAsR0FBaUJkLEtBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSW5wdXQge1xuICBjb25zdHJ1Y3RvcihidXR0b24sIHNwYW4pIHtcbiAgICB0aGlzLmJ0biA9IGJ1dHRvbjtcbiAgICB0aGlzLnRpbWVzQ2xpY2tlZCA9IDA7XG4gICAgdGhpcy5zcGFuID0gc3BhbjtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYmluZEV2ZW50KCk7XG4gIH1cbiAgYmluZEV2ZW50KCkge1xuICAgIHRoaXMuYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrKSBcbiAgfVxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgdGhpcy50aW1lc0NsaWNrZWQgKz0gMTtcbiAgICB0aGlzLnNwYW4udGV4dENvbnRlbnQgPSBgJHt0aGlzLnRpbWVzQ2xpY2tlZH1gO1xuICAgIGNvbnNvbGUubG9nKHRoaXMudGltZXNDbGlja2VkKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0OyJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9pbnB1dC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/input.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BU0tMLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEiLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;
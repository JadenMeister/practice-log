/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_modules_a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/modules/a.js */ \"./src/modules/a.js\");\n/* harmony import */ var _src_modules_b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/modules/b.js */ \"./src/modules/b.js\");\n/* harmony import */ var _src_modules_c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/modules/c.js */ \"./src/modules/c.js\");\n// ? 모듈 가져오기\n// * 중괄호를 사용하는 방식은 모듈에서 여러 개의 값을 가져오는 경우에 사용\n\n\n\n// * 기본 내보내기는 중괄호를 사용하지 않음\n\n\nconsole.log((0,_src_modules_a_js__WEBPACK_IMPORTED_MODULE_0__.a)());\nconsole.log((0,_src_modules_a_js__WEBPACK_IMPORTED_MODULE_0__.aPlus)());\nconsole.log((0,_src_modules_b_js__WEBPACK_IMPORTED_MODULE_1__.b)());\nconsole.log((0,_src_modules_c_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\n\n//# sourceURL=webpack://training-2025-03-24/./app.js?");

/***/ }),

/***/ "./src/modules/a.js":
/*!**************************!*\
  !*** ./src/modules/a.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   a: () => (/* binding */ a),\n/* harmony export */   aPlus: () => (/* binding */ aPlus)\n/* harmony export */ });\n// ? 함수를 선언하면서 동시에 내보내기 처리(ESM)\nfunction a() {\n  return \"a\";\n}\n\n// ? 화살표 함수 리턴과 소괄호 모두 최소한으로 작성한 사례\nconst aPlus = () => \"a+\";\n\n//# sourceURL=webpack://training-2025-03-24/./src/modules/a.js?");

/***/ }),

/***/ "./src/modules/b.js":
/*!**************************!*\
  !*** ./src/modules/b.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   b: () => (/* binding */ b),\n/* harmony export */   bPlus: () => (/* binding */ bPlus)\n/* harmony export */ });\n// ? 함수 b를 선언한 후, export 문을 사용하여 내보내는 방식으로 처리\nfunction b() {\n  return \"b\";\n}\n\nfunction bPlus() {\n  return \"b+\";\n} \n\n\n\n\n//# sourceURL=webpack://training-2025-03-24/./src/modules/b.js?");

/***/ }),

/***/ "./src/modules/c.js":
/*!**************************!*\
  !*** ./src/modules/c.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction c() {\n  return \"c\";\n}\n\n// ? 기본 내보내기(Default Export)\n// * 하나의 모듈에서 하나의 기본 내보내기만 가능\n// * 기본 내보내기는 모듈 이름을 임의로 지정할 수 있음\n// * '단일 책임(검색어: SRP)'을 가지는 모듈에 사용하는 것에 적합\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (c);\n\n//# sourceURL=webpack://training-2025-03-24/./src/modules/c.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;
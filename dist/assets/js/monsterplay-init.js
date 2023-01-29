/*!-----------------------------------------------------------------
    Name: MonsterPlay - eSports and Gaming HTML Template
    Version: 1.2.0
    Author: nK
    Website: https://nkdev.info/
    Purchase: https://themeforest.net/user/_nk/portfolio
    Support: https://nk.ticksy.com/
    License: You must have a valid license purchased only from ThemeForest (the above link) in order to legally use the theme for your project.
    Copyright 2022.
-------------------------------------------------------------------*/
    /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "options": function() { return /* binding */ options; }
/* harmony export */ });
/*------------------------------------------------------------------

  Theme Options

-------------------------------------------------------------------*/
// eslint-disable-next-line max-len

const options = {
  // enable custom cursor
  customCursor: true,
  hideSystemCursor: false,
  // enable parallax
  parallax: true,
  // set small navbar on load
  navbarSmall: false,
  // set small navbar on scroll
  navbarSmallMaxTop: 100,
  // twitter and instagram php paths
  php: {
    twitter: './php/twitter/tweet.php',
    instagram: './php/instagram/instagram.php'
  },
  templates: {
    instagram: "<a class=\"mpl-instagram-item\" href=\"{{link}}\" target=\"_blank\">\n                <span class=\"mpl-instagram-overlay\">\n                    ".concat(instagramIcon, "\n                </span>\n                <img src=\"{{image}}\" alt=\"{{caption}}\">\n            </a>"),
    instagramLoadingText: 'Loading...',
    instagramFailText: 'Failed to fetch data',
    twitter: "<div>\n               <div class=\"mpl-twitter-head\">\n                   <div class=\"mpl-twitter-avatar\">\n                       {{avatar}}\n                   </div>\n                   <a href=\"{{url}}\" class=\"mpl-twitter-name\">\n                       {{user_name}}\n                   </a>\n                   <div class=\"mpl-twitter-date date\">\n                       <span>{{date}}</span>\n                   </div>\n               </div>\n               <div class=\"mpl-twitter-text\">\n                  {{tweet}}\n               </div>\n            </div>",
    twitterLoadingText: 'Loading...',
    twitterFailText: 'Failed to fetch data'
  }
};


/***/ })
/******/ 	]);
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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


if (typeof window.MonsterPlay !== 'undefined') {
  window.MonsterPlay.setOptions(_parts_options__WEBPACK_IMPORTED_MODULE_0__.options);
  window.MonsterPlay.init();
}
}();
/******/ })()
;
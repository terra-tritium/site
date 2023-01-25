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
const instagramIcon = '<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"/></svg>';
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


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ $; },
/* harmony export */   "$body": function() { return /* binding */ $body; },
/* harmony export */   "$doc": function() { return /* binding */ $doc; },
/* harmony export */   "$html": function() { return /* binding */ $html; },
/* harmony export */   "$wnd": function() { return /* binding */ $wnd; },
/* harmony export */   "bodyOverflow": function() { return /* binding */ bodyOverflow; },
/* harmony export */   "debounceResize": function() { return /* binding */ debounceResize; },
/* harmony export */   "docH": function() { return /* binding */ docH; },
/* harmony export */   "isBodyOverflowed": function() { return /* binding */ isBodyOverflowed; },
/* harmony export */   "isIOs": function() { return /* binding */ isIOs; },
/* harmony export */   "isInViewport": function() { return /* binding */ isInViewport; },
/* harmony export */   "isMobile": function() { return /* binding */ isMobile; },
/* harmony export */   "isTouch": function() { return /* binding */ isTouch; },
/* harmony export */   "scrollTo": function() { return /* binding */ scrollTo; },
/* harmony export */   "scrollbarWidth": function() { return /* binding */ scrollbarWidth; },
/* harmony export */   "throttleScroll": function() { return /* binding */ throttleScroll; },
/* harmony export */   "tween": function() { return /* binding */ tween; },
/* harmony export */   "wndH": function() { return /* binding */ wndH; },
/* harmony export */   "wndW": function() { return /* binding */ wndW; }
/* harmony export */ });
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var raf_schd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/*------------------------------------------------------------------

  Utility

-------------------------------------------------------------------*/


const $ = window.jQuery;
const tween = window.TweenMax;
const isIOs = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/g.test(navigator.userAgent || navigator.vendor || window.opera);
const isTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;
/**
 * window size
 */

const $wnd = $(window);
const $doc = $(document);
const $body = $('body');
const $html = $('html');
let wndW = 0;
let wndH = 0;
let docH = 0;

function getWndSize() {
  wndW = $wnd.width();
  wndH = $wnd.height();
  docH = $doc.height();
}

getWndSize();
$wnd.on('resize load orientationchange', getWndSize); // add 'is-mobile' or 'is-desktop' classname to html tag

$html.addClass(isMobile ? 'is-mobile' : 'is-desktop');
/**
 * Debounce resize
 */

const resizeArr = [];

function debounceResized() {
  if (resizeArr.length) {
    for (let k = 0; k < resizeArr.length; k++) {
      resizeArr[k]();
    }
  }
}

$wnd.on('load resize orientationchange', (0,throttle_debounce__WEBPACK_IMPORTED_MODULE_0__.throttle)(200, (0,raf_schd__WEBPACK_IMPORTED_MODULE_1__["default"])(debounceResized)));
$((0,raf_schd__WEBPACK_IMPORTED_MODULE_1__["default"])(debounceResized));
debounceResized();

function debounceResize(func) {
  if (typeof func === 'function') {
    resizeArr.push(func);
  } else {
    window.dispatchEvent(new Event('resize'));
  }
}
/**
 * Throttle scroll
 */


const hideOnScrollList = [];
let lastST = 0;

function hasScrolled() {
  const ST = $wnd.scrollTop();
  let type = ''; // [up, down, end, start]

  if (ST > lastST) {
    type = 'down';
  } else if (ST < lastST) {
    type = 'up';
  } else {
    type = 'none';
  }

  if (ST === 0) {
    type = 'start';
  } else if (ST >= docH - wndH) {
    type = 'end';
  }

  hideOnScrollList.forEach(value => {
    if (typeof value === 'function') {
      value(type, ST, lastST, $wnd);
    }
  });
  lastST = ST;
}

$wnd.on('scroll load resize orientationchange', (0,throttle_debounce__WEBPACK_IMPORTED_MODULE_0__.throttle)(200, (0,raf_schd__WEBPACK_IMPORTED_MODULE_1__["default"])(hasScrolled)));
$((0,raf_schd__WEBPACK_IMPORTED_MODULE_1__["default"])(hasScrolled));

function throttleScroll(callback) {
  hideOnScrollList.push(callback);
}
/**
 * Body Overflow
 * Thanks https://jsfiddle.net/mariusc23/s6mLJ/31/
 * Usage:
 *    // enable
 *    bodyOverflow(1);
 *
 *    // disable
 *    bodyOverflow(0);
 */


let bodyOverflowEnabled;
let isBodyOverflowing;
let scrollbarWidth;
let originalBodyStyle;
const $navbarTop = $('.mpl-navbar');
const stopOverflowing = $('.page-full').length;
const originalBodyPadding = parseFloat($body.css('padding-right')) || 0;

function isBodyOverflowed() {
  return bodyOverflowEnabled;
}

function bodyGetScrollbarWidth() {
  // thx d.walsh
  const scrollDiv = document.createElement('div');
  scrollDiv.className = 'body-scrollbar-measure';
  $body[0].appendChild(scrollDiv);
  const result = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  $body[0].removeChild(scrollDiv);
  return result;
}

function bodyCheckScrollbar() {
  let fullWindowWidth = window.innerWidth;

  if (!fullWindowWidth) {
    // workaround for missing window.innerWidth in IE8
    const documentElementRect = document.documentElement.getBoundingClientRect();
    fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
  }

  isBodyOverflowing = $body[0].clientWidth < fullWindowWidth;
  scrollbarWidth = bodyGetScrollbarWidth();
}

function bodySetScrollbar() {
  if (typeof originalBodyStyle === 'undefined') {
    originalBodyStyle = $body.attr('style') || '';
  }

  if (isBodyOverflowing) {
    $body.css('margin-right', scrollbarWidth + originalBodyPadding);
    $navbarTop.css('margin-right', scrollbarWidth + originalBodyPadding);
  }
}

function bodyResetScrollbar() {
  $body.attr('style', originalBodyStyle);
  $navbarTop.attr('style', '');
}

function bodyOverflow(enable) {
  if (stopOverflowing) {
    return;
  }

  if (enable && !bodyOverflowEnabled) {
    bodyOverflowEnabled = 1;
    bodyCheckScrollbar();
    bodySetScrollbar();
    $body.css('overflow', 'hidden');
  } else if (!enable && bodyOverflowEnabled) {
    bodyOverflowEnabled = 0;
    $body.css('overflow', '');
    bodyResetScrollbar();
  }
}
/**
 * In Viewport checker
 * return visible percent from 0 to 1
 */


function isInViewport($item, returnRect) {
  const rect = $item[0].getBoundingClientRect();
  let result = 1;

  if (rect.right <= 0 || rect.left >= wndW) {
    result = 0;
  } else if (rect.bottom < 0 && rect.top <= wndH) {
    result = 0;
  } else {
    const beforeTopEnd = Math.max(0, rect.height + rect.top);
    const beforeBottomEnd = Math.max(0, rect.height - (rect.top + rect.height - wndH));
    const afterTop = Math.max(0, -rect.top);
    const beforeBottom = Math.max(0, rect.top + rect.height - wndH);

    if (rect.height < wndH) {
      result = 1 - (afterTop || beforeBottom) / rect.height;
    } else if (beforeTopEnd <= wndH) {
      result = beforeTopEnd / wndH;
    } else if (beforeBottomEnd <= wndH) {
      result = beforeBottomEnd / wndH;
    }

    result = result < 0 ? 0 : result;
  }

  if (returnRect) {
    return [result, rect];
  }

  return result;
}
/**
 * Scroll To
 */


function scrollTo($to, callback) {
  let scrollPos = false;
  const speed = this.options.scrollToAnchorSpeed / 1000;

  if ($to === 'top') {
    scrollPos = 0;
  } else if ($to === 'bottom') {
    scrollPos = Math.max(0, docH - wndH);
  } else if (typeof $to === 'number') {
    scrollPos = $to;
  } else {
    scrollPos = $to.offset ? $to.offset().top : false;
  }

  if (scrollPos !== false && $wnd.scrollTop() !== scrollPos) {
    tween.to($wnd, speed, {
      scrollTo: {
        y: scrollPos,
        // disable autokill on iOs (buggy scrolling)
        autoKill: !isIOs
      },
      ease: Power2.easeOut,
      overwrite: 5
    });

    if (callback) {
      tween.delayedCall(speed, callback);
    }
  } else if (typeof callback === 'function') {
    callback();
  }
}



/***/ }),
/* 4 */
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": function() { return /* binding */ debounce; },
/* harmony export */   "throttle": function() { return /* binding */ throttle; }
/* harmony export */ });
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
 *                                            as-is, to `callback` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            `delay` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
 *                                            false (at end), schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function} A new, throttled, function.
 */
function throttle(delay, callback, options) {
  var _ref = options || {},
      _ref$noTrailing = _ref.noTrailing,
      noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,
      _ref$noLeading = _ref.noLeading,
      noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,
      _ref$debounceMode = _ref.debounceMode,
      debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */


  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel(options) {
    var _ref2 = options || {},
        _ref2$upcomingOnly = _ref2.upcomingOnly,
        upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;

    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (!noLeading && debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        /*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */
        lastExec = Date.now();

        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        /*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */
        exec();
      }
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}
/* eslint-disable no-undefined */

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                        to `callback` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */


function debounce(delay, callback, options) {
  var _ref = options || {},
      _ref$atBegin = _ref.atBegin,
      atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;

  return throttle(delay, callback, {
    debounceMode: atBegin !== false
  });
}



/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var rafSchd = function rafSchd(fn) {
  var lastArgs = [];
  var frameId = null;

  var wrapperFn = function wrapperFn() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;

    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      fn.apply(void 0, lastArgs);
    });
  };

  wrapperFn.cancel = function () {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
  };

  return wrapperFn;
};

/* harmony default export */ __webpack_exports__["default"] = (rafSchd);

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setOptions": function() { return /* binding */ setOptions; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Set Custom Options

-------------------------------------------------------------------*/

function setOptions(newOpts) {
  const self = this;
  const optsTemplates = _utility__WEBPACK_IMPORTED_MODULE_0__.$.extend({}, this.options.templates, newOpts && newOpts.templates || {});
  const optsShortcuts = _utility__WEBPACK_IMPORTED_MODULE_0__.$.extend({}, this.options.shortcuts, newOpts && newOpts.shortcuts || {});
  self.options = _utility__WEBPACK_IMPORTED_MODULE_0__.$.extend({}, self.options, newOpts);
  self.options.templates = optsTemplates;
  self.options.shortcuts = optsShortcuts;
}



/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCursor": function() { return /* binding */ initCursor; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

const START_POSITION = -100;
/*------------------------------------------------------------------

  Cursor

-------------------------------------------------------------------*/

function initCursor() {
  const self = this;

  if (!self.options.customCursor || _utility__WEBPACK_IMPORTED_MODULE_0__.isMobile) {
    return;
  }

  let clientX = START_POSITION;
  let clientY = START_POSITION;
  let xPos = START_POSITION;
  let yPos = START_POSITION;
  let dX = START_POSITION;
  let dY = START_POSITION;
  let lastRunTime = Date.now();
  const tickPos = 2;
  const fps = 1000 / 60;
  const $cursor = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('<div class="mpl-cursor"></div>');
  const $cursorOuter = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('<div class="mpl-cursor-outer"></div>');
  _utility__WEBPACK_IMPORTED_MODULE_0__.$body.append([$cursor, $cursorOuter]).addClass("mpl-cursor-enabled".concat(self.options.hideSystemCursor ? ' mpl-hide-system-cursor' : ''));
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('mousemove drag', e => {
    clientX = e.clientX;
    clientY = e.clientY;
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('mouseenter', 'a, button, input, textarea, [role="button"]', () => {
    $cursor.addClass('mpl-cursor-hover');
    $cursorOuter.addClass('mpl-cursor-hover');
  }).on('mouseleave', 'a, button, input, textarea, [role="button"]', () => {
    $cursor.removeClass('mpl-cursor-hover');
    $cursorOuter.removeClass('mpl-cursor-hover');
  }); // Move cursor.

  const moveCursor = () => {
    const now = Date.now();
    const delay = now - lastRunTime;
    lastRunTime = now; // First run.

    if (xPos === START_POSITION) {
      dX = clientX;
      dY = clientY;
      xPos = clientX;
      yPos = clientY;
    } else {
      dX = clientX - xPos;
      dY = clientY - yPos;
      xPos += dX / (tickPos * fps / delay);
      yPos += dY / (tickPos * fps / delay);
    }

    $cursor.css('transform', "matrix(1, 0, 0, 1, ".concat(clientX, ", ").concat(clientY, ") translate3d(0,0,0)"));
    $cursorOuter.css('transform', "matrix(1, 0, 0, 1, ".concat(xPos, ", ").concat(yPos, ") translate3d(0,0,0)"));
    requestAnimationFrame(moveCursor);
  };

  requestAnimationFrame(moveCursor);
}



/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initNavbar": function() { return /* binding */ initNavbar; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Navbar

-------------------------------------------------------------------*/

function initNavbar() {
  const self = this;
  const $navbarTop = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.mpl-navbar-top'); // navbar set to small

  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.throttleScroll)((type, scroll) => {
    if (scroll > self.options.navbarSmallMaxTop && !self.options.navbarSmall) {
      self.options.navbarSmall = true;
      $navbarTop.addClass('mpl-navbar-small');
    }

    if (scroll <= self.options.navbarSmallMaxTop && self.options.navbarSmall) {
      self.options.navbarSmall = false;
      $navbarTop.removeClass('mpl-navbar-small');
    }
  }); // Mobile open

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('click', '.mpl-navbar-top .mpl-navbar-toggle', e => {
    e.preventDefault();

    if (!_utility__WEBPACK_IMPORTED_MODULE_0__.$body.hasClass('mpl-navbar-mobile-open')) {
      _utility__WEBPACK_IMPORTED_MODULE_0__.$body.addClass('mpl-navbar-mobile-open');
      _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.trigger('mpl.navbar.mobile.show');
    }
  }); // Mobile close

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('click', '.mpl-navbar-mobile-overlay, .mpl-navbar-mobile .mpl-navbar-toggle', () => {
    _utility__WEBPACK_IMPORTED_MODULE_0__.$body.removeClass('mpl-navbar-mobile-open');
    _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.trigger('mpl.navbar.mobile.hide');
  }); // Correction of the scrollbar when opening the Modal

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('show.bs.modal', () => {
    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.bodyOverflow)(1);
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('hidden.bs.modal', () => {
    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.bodyOverflow)(0);
  }); // Mobile collapse

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('click', '.mpl-navbar-mobile .mpl-nav-link-collapse', function (e) {
    e.preventDefault();
    const $collapse = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this).next('.mpl-navbar-collapse');
    const isShowed = $collapse.hasClass('show');

    if (isShowed) {
      $collapse.removeClass('show').stop().css('display', 'block').slideUp(300, () => {
        $collapse.css('height', '');
        $collapse.find('.mpl-navbar-collapse.show').stop().removeClass('show');
      });
    } else {
      $collapse.addClass('show').stop().css('display', 'none').slideDown(300, () => {
        $collapse.css('height', '');
      });
    }
  }); // Dropdown

  const $dropdown = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.mpl-navbar-top .mpl-dropdown');
  const $dropdownMenu = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.mpl-navbar-top .mpl-dropdown-menu'); // closing the menu when click to the side

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('mouseup', e => {
    const dropdownHas = $dropdown.has(e.target).length;

    if (!dropdownHas && $dropdown.hasClass('focus') || !dropdownHas && $dropdown.hasClass('show')) {
      $dropdown.removeClass('focus show').children('.mpl-dropdown-menu').removeClass('focus show');
    }
  }); // don't close the menu with the form

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('focus', '.mpl-dropdown-menu:not(.show) input, .mpl-dropdown-menu:not(.show) textarea, .mpl-dropdown-menu:not(.show) button', function () {
    const $thisDropdown = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this).parents('.mpl-dropdown');
    $thisDropdown.addClass('show').children('.mpl-dropdown-menu').addClass('show');
  }); // closing the menu when hover to the other nav-link

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('mouseenter', '.mpl-navbar-top .mpl-nav-link', function () {
    const $link = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this);
    const $dropdowns = $link.closest('.mpl-navbar-top').find('.mpl-dropdown.focus');

    if ($dropdowns.length) {
      $dropdowns.children('.mpl-nav-link').blur();
      $dropdowns.removeClass('focus').children('.mpl-dropdown-menu').removeClass('focus');
    }
  }); // show and hide the menu with focus

  function toggleShow() {
    const $thisDropdown = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this).parents('.mpl-dropdown');
    const $thisDropdownMenu = $thisDropdown.children('.mpl-dropdown-menu');

    if (!$thisDropdown.hasClass('focus')) {
      $thisDropdown.addClass('focus');
      $thisDropdownMenu.addClass('focus');
    } else {
      $thisDropdown.removeClass('focus');
      $thisDropdownMenu.removeClass('focus');
    }
  }

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('focus', '.mpl-navbar-top a', toggleShow);
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('blur', '.mpl-navbar-top a', toggleShow); // update position

  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.debounceResize)(() => {
    $dropdownMenu.each(function () {
      const $thisDropdownMenu = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this);
      const rect = $thisDropdownMenu[0].getBoundingClientRect();
      const rectLeft = parseInt(rect.left, 10);
      const rectRight = parseInt(_utility__WEBPACK_IMPORTED_MODULE_0__.wndW - rect.right, 10);
      const dropdownMarginLeft = parseInt($thisDropdownMenu.css('margin-left'), 10);
      const dropdownMarginRight = parseInt($thisDropdownMenu.css('margin-right'), 10);
      const css = {
        marginLeft: '',
        marginRight: ''
      };
      $thisDropdownMenu.css(css);

      if (rectRight < 0) {
        css.marginLeft = dropdownMarginLeft + rectRight;
      }

      if (rectLeft < 0) {
        css.marginRight = dropdownMarginRight + rectLeft;
      }

      $thisDropdownMenu.css(css);
    });
  }); // Hide when a key is pressed Esc

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('keyup', e => {
    if (e.keyCode === 27) {
      // hide navbar mobile
      if (_utility__WEBPACK_IMPORTED_MODULE_0__.$body.hasClass('mpl-navbar-mobile-open')) {
        _utility__WEBPACK_IMPORTED_MODULE_0__.$body.removeClass('mpl-navbar-mobile-open');
      } // hide dropdown


      if ($dropdown.hasClass('focus show')) {
        $dropdown.removeClass('focus show').children('.mpl-dropdown-menu.focus').removeClass('focus show');
      }
    }
  });
}



/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initAnchors": function() { return /* binding */ initAnchors; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Anchors

-------------------------------------------------------------------*/

function initAnchors() {
  if ('scrollBehavior' in document.documentElement.style && _utility__WEBPACK_IMPORTED_MODULE_0__.$html.css('scroll-behavior') === 'smooth') {
    return;
  }

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('click', 'a.btn, .mpl-navbar a', function (e) {
    const isHash = this.hash;
    const isURIsame = this.baseURI === window.location.href;

    if (isHash && isHash !== '#' && isHash !== '#!' && isURIsame) {
      const $hashBlock = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(isHash);
      const hash = isHash.replace(/^#/, '');

      if ($hashBlock.length) {
        e.preventDefault(); // add hash to address bar

        $hashBlock.attr('id', '');
        document.location.hash = hash;
        $hashBlock.attr('id', hash); // scroll to block

        window.scrollTo({
          top: $hashBlock.offset().top - 80,
          behavior: 'smooth'
        });
      }
    }
  });
}



/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initForms": function() { return /* binding */ initForms; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Init Forms

-------------------------------------------------------------------*/

function initForms() {
  const self = this; // ajax form submit

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('submit', '.mpl-form-ajax', function (e) {
    e.preventDefault();
    const $form = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this);
    const $button = $form.find('[type="submit"]'); // if disabled button - stop this action

    if ($button.is('.disabled') || $button.is('[disabled]')) {
      return;
    }

    let $formResponse = $form.next('.mpl-form-response');

    if (!$formResponse.length) {
      $formResponse = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('<div class="mpl-form-response mt-30"></div>');
      $formResponse.insertAfter($form);
    }

    _utility__WEBPACK_IMPORTED_MODULE_0__.$.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: $form.serialize(),

      success(response) {
        response = JSON.parse(response);

        if (response.type && response.type === 'success') {
          $formResponse.html("<div class=\"alert alert-success\">".concat(response.response, "</div>"));
          $form[0].reset();
        } else {
          $formResponse.html("<div class=\"alert alert-error\">".concat(response.response, "</div>"));
        }

        self.debounceResize();
      },

      error(response) {
        $formResponse.html("<div class=\"alert alert-error\">".concat(response.responseText, "</div>"));
        self.debounceResize();
      }

    });
  });
}



/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initHexagonRating": function() { return /* binding */ initHexagonRating; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Init Hexagon Rating

-------------------------------------------------------------------*/

function initHexagonRating() {
  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.mpl-hexagon-rating').each(function () {
    const $this = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this);
    const percent = parseInt($this.attr('data-hexagon'), 10);
    const max = 2220; // eslint-disable-next-line

    const pathD = 'M748.305 412.622L589.475 689.622C580.652 705.01 564.271 714.5 546.533 714.5H229.467C211.729 714.5 195.348 705.01 186.525 689.622L27.6948 412.622C18.9503 397.372 18.9503 378.628 27.6948 363.377L186.525 86.3775C195.348 70.9903 211.729 61.5 229.467 61.5H546.533C564.271 61.5 580.652 70.9903 589.475 86.3775L748.305 363.378C757.05 378.628 757.05 397.372 748.305 412.622Z';
    $this.append("<svg class=\"mpl-hexagon\" viewBox=\"0 0 776 776\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path class=\"mpl-hexagon-track\" d=\"".concat(pathD, "\"/>\n                <path class=\"mpl-hexagon-fill\" d=\"").concat(pathD, "\"/>\n                <path class=\"mpl-hexagon-fix\" d=\"M748.739 412.871L747.871 412.374C751.856 405.424 754.007 397.741 754.323 390H755.324C755.007 397.913 752.812 405.767 748.739 412.871Z\"/>\n            </svg>"));
    const $hexagon = $this.children('svg');
    $hexagon.children('.mpl-hexagon-fill').css('stroke-dashoffset', "".concat((100 - percent) / 100 * max));
  });
}



/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initTwitter": function() { return /* binding */ initTwitter; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Twitter
  https://github.com/sonnyt/Tweetie

-------------------------------------------------------------------*/

function initTwitter() {
  const self = this;
  const $twtFeeds = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.mpl-twitter');

  if (!$twtFeeds.length || !self.options.templates.twitter) {
    return;
  }
  /**
   * Templating a tweet using '{{ }}' braces
   * @param  {Object} data Tweet details are passed
   * @return {String}      Templated string
   */


  function templating(data, temp) {
    const tempVariables = ['date', 'tweet', 'avatar', 'url', 'retweeted', 'screen_name', 'user_name'];

    for (let i = 0, len = tempVariables.length; i < len; i++) {
      temp = temp.replace(new RegExp("{{".concat(tempVariables[i], "}}"), 'gi'), data[tempVariables[i]]);
    }

    return temp;
  }

  $twtFeeds.each(function () {
    const $this = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this);
    const options = {
      username: $this.attr('data-twitter-user-name') || null,
      list: null,
      hashtag: $this.attr('data-twitter-hashtag') || null,
      count: $this.attr('data-twitter-count') || 2,
      hideReplies: $this.attr('data-twitter-hide-replies') === 'true',
      template: $this.attr('data-twitter-template') || self.options.templates.twitter,
      loadingText: self.options.templates.twitterLoadingText,
      failText: self.options.templates.twitterFailText,
      apiPath: self.options.php.twitter
    }; // stop if running in file protocol

    if (window.location.protocol === 'file:') {
      $this.html(options.failText); // eslint-disable-next-line

      console.error('You should run you website on webserver with PHP to get working Twitter');
      return;
    } // Set loading


    $this.html("<span>".concat(options.loadingText, "</span>")); // Fetch tweets

    _utility__WEBPACK_IMPORTED_MODULE_0__.$.getJSON(options.apiPath, {
      username: options.username,
      list: options.list,
      hashtag: options.hashtag,
      count: options.count,
      exclude_replies: options.hideReplies
    }, twt => {
      $this.html('');

      for (let i = 0; i < options.count; i++) {
        let tweet = false;

        if (twt[i]) {
          tweet = twt[i];
        } else if (twt.statuses && twt.statuses[i]) {
          tweet = twt.statuses[i];
        } else {
          break;
        }

        const tempData = {
          user_name: tweet.user.name,
          date: tweet.date_formatted,
          tweet: tweet.text_entitled,
          avatar: "<img src=\"".concat(tweet.user.profile_image_url_https, "\" />"),
          url: "https://twitter.com/".concat(tweet.user.screen_name, "/status/").concat(tweet.id_str),
          retweeted: tweet.retweeted,
          screen_name: "@".concat(tweet.user.screen_name)
        };
        $this.append(templating(tempData, options.template));
      } // resize window


      self.debounceResize();
    }).fail(a => {
      $this.html(options.failText);
      _utility__WEBPACK_IMPORTED_MODULE_0__.$.error(a.responseText);
    });
  });
}



/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initFacebook": function() { return /* binding */ initFacebook; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Init Facebook

-------------------------------------------------------------------*/

function initFacebook() {
  if (!(0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.fb-page').length) {
    return;
  }

  const self = this;
  _utility__WEBPACK_IMPORTED_MODULE_0__.$body.append('<div id="fb-root"></div>');

  (function (d, s, id) {
    if (window.location.protocol === 'file:') {
      return;
    }

    const fjs = d.getElementsByTagName(s)[0];

    if (d.getElementById(id)) {
      return;
    }

    const js = d.createElement(s);
    js.id = id;
    js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk'); // resize on facebook widget loaded


  window.fbAsyncInit = function () {
    window.FB.Event.subscribe('xfbml.render', () => {
      // resize window
      self.debounceResize();
    });
  };
}



/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initInstagram": function() { return /* binding */ initInstagram; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Init Instagram

-------------------------------------------------------------------*/

function initInstagram() {
  const self = this;
  const $instagram = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.mpl-instagram');

  if (!$instagram.length || !self.options.templates.instagram) {
    return;
  }
  /**
   * Templating a instagram item using '{{ }}' braces
   * @param  {Object} data Instagram item details are passed
   * @return {String} Templated string
   */


  function templating(data, temp) {
    const tempVariables = ['link', 'image', 'caption'];

    for (let i = 0, len = tempVariables.length; i < len; i++) {
      temp = temp.replace(new RegExp("{{".concat(tempVariables[i], "}}"), 'gi'), data[tempVariables[i]]);
    }

    return temp;
  }

  $instagram.each(function () {
    const $this = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this);
    const options = {
      columnClass: $this.attr('data-instagram-column-class'),
      userName: $this.attr('data-instagram-user-name') || null,
      count: $this.attr('data-instagram-count') || 8,
      template: $this.attr('data-instagram-template') || self.options.templates.instagram,
      quality: $this.attr('data-instagram-quality') || 'sm',
      // sm, md, lg
      loadingText: self.options.templates.instagramLoadingText,
      failText: self.options.templates.instagramFailText,
      apiPath: self.options.php.instagram
    }; // stop if running in file protocol

    if (window.location.protocol === 'file:') {
      $this.html("<div class=\"col-12\">".concat(options.failText, "</div>")); // eslint-disable-next-line

      console.error('You should run you website on webserver with PHP to get working Instagram');
      return;
    }

    $this.html("<div class=\"col-12\">".concat(options.loadingText, "</div>")); // Fetch instagram images

    _utility__WEBPACK_IMPORTED_MODULE_0__.$.getJSON(options.apiPath, {
      userName: options.userName,
      count: options.count
    }, response => {
      $this.html('');

      if (response) {
        for (let i = 0; i < options.count; i++) {
          let instaItem = false;

          if (response[i]) {
            instaItem = response[i];
          } else if (response.statuses && response.statuses[i]) {
            instaItem = response.statuses[i];
          } else {
            break;
          }

          let resolution = 'thumbnail';

          if (options.quality === 'md') {
            resolution = 'low_resolution';
          }

          if (options.quality === 'lg') {
            resolution = 'standard_resolution';
          }

          const tempData = {
            link: instaItem.link,
            image: instaItem.images[resolution].url,
            caption: instaItem.caption
          };
          $this.append(templating(tempData, options.template));
        }
      } // resize window


      self.debounceResize(); // create columns

      if (options.columnClass) {
        $this.children().wrap("<div class=\"".concat(options.columnClass, "\"></div>"));
      }
    }).fail(a => {
      $this.html("<div class=\"col-12\">".concat(options.failText, "</div>"));
      _utility__WEBPACK_IMPORTED_MODULE_0__.$.error(a.responseText);
    });
  });
}



/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginScrollReveal": function() { return /* binding */ initPluginScrollReveal; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


function maybeRun() {
  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('[data-sr]').each(function () {
    const $this = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this);
    const dataId = $this.attr('data-sr') || '';
    const dataInterval = parseInt($this.attr('data-sr-interval'), 10);
    const dataDuration = parseInt($this.attr('data-sr-duration'), 10);
    const dataDelay = parseInt($this.attr('data-sr-delay'), 10);
    const dataScale = parseFloat($this.attr('data-sr-scale'));
    const dataOrigin = $this.attr('data-sr-origin');
    const dataDistance = $this.attr('data-sr-distance');
    const conf = {};
    let $item = $this.find("[data-sr-item=\"".concat(dataId, "\"]"));
    conf.reset = true;
    conf.cleanup = true;

    if (!$item.length) {
      $item = $this;
    } // Animated shop and blog posts


    const $shopOrPost = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.mpl-shop, .mpl-post');

    if ($shopOrPost.length) {
      conf.reset = false;
      conf.duration = 1400;
      window.ScrollReveal().reveal($shopOrPost, conf);
    }

    conf.reset = false;

    if (dataInterval) {
      conf.interval = dataInterval;
    }

    if (dataDuration) {
      conf.duration = dataDuration;
    }

    if (dataDelay) {
      conf.delay = dataDelay;
    }

    if (dataScale) {
      conf.scale = dataScale;
    }

    if (dataOrigin) {
      conf.origin = dataOrigin;
    }

    if (dataDistance) {
      conf.distance = "".concat(dataDistance, "px");
    }

    window.ScrollReveal().reveal($item, conf);
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('arrangeComplete', '.mpl-isotope-grid', () => {
    window.ScrollReveal().delegate({
      type: 'resize'
    });
  });
}

function initPluginScrollReveal() {
  if (typeof ScrollReveal === 'undefined') {
    return;
  }

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('mpl.preloader.hide', () => {
    setTimeout(() => {
      maybeRun();
    }, 400);
  });
}



/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginAnime": function() { return /* binding */ initPluginAnime; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Init Plugin Animejs

-------------------------------------------------------------------*/

function initPluginAnime() {
  const {
    anime
  } = window;

  if (typeof anime === 'undefined') {
    return;
  } // navbar


  const navbar = anime({
    opacity: [0, 1],
    easing: 'easeOutSine',
    duration: 400,
    targets: '.mpl-navbar-top .mpl-navbar-content > .mpl-navbar-nav > li',
    translateY: [-10, 0],
    autoplay: false,
    delay: anime.stagger(80, {
      start: 100
    })
  }); // navbar mobile body

  const navbarMobileBody = anime({
    opacity: [0, 1],
    easing: 'easeOutSine',
    duration: 400,
    targets: '.mpl-navbar-mobile .mpl-navbar-body > .mpl-navbar-nav > li',
    translateX: [20, 0],
    autoplay: false,
    delay: anime.stagger(80, {
      start: 200
    })
  }); // navbar mobile footer

  const navbarMobileFooter = anime({
    opacity: [0, 1],
    easing: 'easeOutSine',
    duration: 400,
    targets: '.mpl-navbar-mobile .mpl-navbar-footer > .mpl-navbar-nav > li',
    translateY: [20, 0],
    autoplay: false,
    delay: anime.stagger(80, {
      start: 600
    })
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('mpl.preloader.hide', () => {
    setTimeout(() => {
      navbar.play();
    }, 100);
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('mpl.navbar.mobile.show', () => {
    navbarMobileBody.play();
    navbarMobileFooter.play();
  }); // navbar open collapse

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('show.bs.collapse', e => {
    anime({
      opacity: [0, 1],
      easing: 'easeOutSine',
      duration: 200,
      targets: e.target.querySelectorAll('li'),
      translateX: [10, 0],
      autoplay: false,
      delay: anime.stagger(80, {
        start: 100
      })
    }).play();
  });
}



/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginObjectFitImages": function() { return /* binding */ initPluginObjectFitImages; }
/* harmony export */ });
/*------------------------------------------------------------------

  Object Fit Images

-------------------------------------------------------------------*/
function initPluginObjectFitImages() {
  if (typeof objectFitImages !== 'undefined') {
    objectFitImages();
  }
}



/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginCountUp": function() { return /* binding */ initPluginCountUp; }
/* harmony export */ });
/* harmony import */ var countup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


/*------------------------------------------------------------------

  Init CountUp

-------------------------------------------------------------------*/

function initPluginCountUp() {
  if (typeof countup_js__WEBPACK_IMPORTED_MODULE_0__.CountUp === 'undefined') {
    return;
  }

  (0,_utility__WEBPACK_IMPORTED_MODULE_1__.throttleScroll)(() => {
    (0,_utility__WEBPACK_IMPORTED_MODULE_1__.$)('.mpl-count:not(.mpl-count-stop)').each(function () {
      const $this = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.$)(this);
      const number = parseInt($this.text(), 10);
      const dataDuration = parseInt($this.attr('data-count-duration'), 10);
      const conf = {};

      if ((0,_utility__WEBPACK_IMPORTED_MODULE_1__.isInViewport)($this) > 0) {
        conf.useGrouping = false;

        if (dataDuration) {
          conf.duration = dataDuration;
        } else {
          conf.duration = 3;
        }

        const countUp = new countup_js__WEBPACK_IMPORTED_MODULE_0__.CountUp($this[0], number, conf);
        countUp.start();
        $this.addClass('mpl-count-stop');
      }
    });
  });
}



/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountUp": function() { return /* binding */ CountUp; }
/* harmony export */ });
var __assign = undefined && undefined.__assign || function () {
  return (__assign = Object.assign || function (t) {
    for (var i, n = 1, s = arguments.length; n < s; n++) for (var a in i = arguments[n]) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);

    return t;
  }).apply(this, arguments);
},
    CountUp = function () {
  function t(t, i, n) {
    var s = this;
    this.endVal = i, this.options = n, this.version = "2.3.2", this.defaults = {
      startVal: 0,
      decimalPlaces: 0,
      duration: 2,
      useEasing: !0,
      useGrouping: !0,
      smartEasingThreshold: 999,
      smartEasingAmount: 333,
      separator: ",",
      decimal: ".",
      prefix: "",
      suffix: "",
      enableScrollSpy: !1,
      scrollSpyDelay: 200,
      scrollSpyOnce: !1
    }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function (t) {
      s.startTime || (s.startTime = t);
      var i = t - s.startTime;
      s.remaining = s.duration - i, s.useEasing ? s.countDown ? s.frameVal = s.startVal - s.easingFn(i, 0, s.startVal - s.endVal, s.duration) : s.frameVal = s.easingFn(i, s.startVal, s.endVal - s.startVal, s.duration) : s.frameVal = s.startVal + (s.endVal - s.startVal) * (i / s.duration);
      var n = s.countDown ? s.frameVal < s.endVal : s.frameVal > s.endVal;
      s.frameVal = n ? s.endVal : s.frameVal, s.frameVal = Number(s.frameVal.toFixed(s.options.decimalPlaces)), s.printValue(s.frameVal), i < s.duration ? s.rAF = requestAnimationFrame(s.count) : null !== s.finalEndVal ? s.update(s.finalEndVal) : s.callback && s.callback();
    }, this.formatNumber = function (t) {
      var i,
          n,
          a,
          e,
          r = t < 0 ? "-" : "";
      i = Math.abs(t).toFixed(s.options.decimalPlaces);
      var o = (i += "").split(".");

      if (n = o[0], a = o.length > 1 ? s.options.decimal + o[1] : "", s.options.useGrouping) {
        e = "";

        for (var l = 0, h = n.length; l < h; ++l) 0 !== l && l % 3 == 0 && (e = s.options.separator + e), e = n[h - l - 1] + e;

        n = e;
      }

      return s.options.numerals && s.options.numerals.length && (n = n.replace(/[0-9]/g, function (t) {
        return s.options.numerals[+t];
      }), a = a.replace(/[0-9]/g, function (t) {
        return s.options.numerals[+t];
      })), r + s.options.prefix + n + a + s.options.suffix;
    }, this.easeOutExpo = function (t, i, n, s) {
      return n * (1 - Math.pow(2, -10 * t / s)) * 1024 / 1023 + i;
    }, this.options = __assign(__assign({}, this.defaults), n), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(i), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof t ? document.getElementById(t) : t, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, t) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function () {
      return s.handleScroll(s);
    }), window.onscroll = function () {
      window.onScrollFns.forEach(function (t) {
        return t();
      });
    }, this.handleScroll(this)));
  }

  return t.prototype.handleScroll = function (t) {
    if (t && window && !t.once) {
      var i = window.innerHeight + window.scrollY,
          n = t.el.getBoundingClientRect(),
          s = n.top + n.height + window.pageYOffset;
      s < i && s > window.scrollY && t.paused ? (t.paused = !1, setTimeout(function () {
        return t.start();
      }, t.options.scrollSpyDelay), t.options.scrollSpyOnce && (t.once = !0)) : window.scrollY > s && !t.paused && t.reset();
    }
  }, t.prototype.determineDirectionAndSmartEasing = function () {
    var t = this.finalEndVal ? this.finalEndVal : this.endVal;
    this.countDown = this.startVal > t;
    var i = t - this.startVal;

    if (Math.abs(i) > this.options.smartEasingThreshold && this.options.useEasing) {
      this.finalEndVal = t;
      var n = this.countDown ? 1 : -1;
      this.endVal = t + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
    } else this.endVal = t, this.finalEndVal = null;

    null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing;
  }, t.prototype.start = function (t) {
    this.error || (this.callback = t, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
  }, t.prototype.pauseResume = function () {
    this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
  }, t.prototype.reset = function () {
    cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
  }, t.prototype.update = function (t) {
    cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
  }, t.prototype.printValue = function (t) {
    var i = this.formattingFn(t);
    "INPUT" === this.el.tagName ? this.el.value = i : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = i : this.el.innerHTML = i;
  }, t.prototype.ensureNumber = function (t) {
    return "number" == typeof t && !isNaN(t);
  }, t.prototype.validateValue = function (t) {
    var i = Number(t);
    return this.ensureNumber(i) ? i : (this.error = "[CountUp] invalid start or end value: ".concat(t), null);
  }, t.prototype.resetDuration = function () {
    this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
  }, t;
}();



/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginSwiper": function() { return /* binding */ initPluginSwiper; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Init Plugin Swiper

-------------------------------------------------------------------*/

function initPluginSwiper() {
  if (typeof Swiper === 'undefined') {
    return;
  }

  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.mpl-carousel').each(function () {
    const $this = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this);
    const dataLoop = $this.attr('data-loop');
    const dataButtons = $this.attr('data-arrows');
    const dataPagination = $this.attr('data-dots');
    const dataGrabCursor = $this.attr('data-grabCursor');
    const dataAutoHeight = $this.attr('data-autoHeight');
    const dataBreakpoints = $this.attr('data-breakpoints');
    const dataScrollbar = $this.attr('data-scrollbar');
    const dataSlides = $this.attr('data-slides');
    const dataAutoplay = parseInt($this.attr('data-autoplay'), 10);
    const dataSpeed = parseInt($this.attr('data-speed'), 10);
    const dataGap = parseInt($this.attr('data-gap'), 10);
    const conf = {
      // fixes the conflict with custom cursor movement.
      touchStartPreventDefault: false
    }; // creating slides

    if ($this.find('.swiper-slide').length === 0) {
      $this.children().wrap('<div class="swiper-slide"></div>');
    } // creating wrapper


    if ($this.find('.swiper-wrapper').length === 0) {
      $this.children().wrapAll('<div class="swiper-wrapper"></div>');
    } // creating container


    if ($this.find('.swiper-container').length === 0) {
      $this.children().wrap('<div class="swiper-container"></div>');
    } // creating buttons


    if (dataButtons) {
      $this.append('<div class="swiper-button-prev"></div><div class="swiper-button-next"></div>');
    } // creating pagination


    if (dataPagination) {
      $this.append('<div class="swiper-pagination"></div>');
    }

    const $container = $this.find('.swiper-container');
    const $btnPrev = $this.children('.swiper-button-prev');
    const $btnNext = $this.children('.swiper-button-next'); // custom arrow

    if (dataButtons) {
      $btnPrev.append('<svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 9L1 5L4 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>');
      $btnNext.append('<svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L4 5L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>');
    }

    if ($btnPrev.length && $btnNext.length) {
      conf.navigation = {
        nextEl: $btnNext[0],
        prevEl: $btnPrev[0]
      };
    }

    if (dataLoop) {
      conf.loop = true;
    }

    if (dataGrabCursor) {
      conf.grabCursor = true;
    }

    if (dataAutoHeight) {
      conf.autoHeight = true;
    }

    if (dataScrollbar) {
      $container.append('<div class="swiper-scrollbar"></div>');
      conf.scrollbar = {
        el: $container.children('.swiper-scrollbar'),
        hide: false,
        draggable: true
      };
    }

    if (dataAutoplay) {
      conf.autoplay = {
        delay: dataAutoplay
      };
    }

    if (dataSpeed) {
      conf.speed = dataSpeed;
    }

    if (dataSlides === 'auto') {
      conf.slidesPerView = 'auto';
    } else {
      conf.slidesPerView = parseInt(dataSlides, 10);
    }

    if (dataGap) {
      conf.spaceBetween = dataGap;
    }

    if (dataBreakpoints) {
      let i = 0;
      const breaks = {};
      const points = dataBreakpoints.split(',');

      while (i < dataBreakpoints.split(',').length) {
        breaks[parseInt(points[i].split(':')[0], 10)] = {
          slidesPerView: parseInt(points[i].split(':')[1], 10)
        };
        i++;
      }

      conf.breakpoints = breaks;
    } // eslint-disable-next-line


    new Swiper($container[0], conf);
  });
}



/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginSliderRevolution": function() { return /* binding */ initPluginSliderRevolution; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Slider Revolution

-------------------------------------------------------------------*/

function initPluginSliderRevolution() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__.$.fn.revolution === 'undefined') {
    return;
  }

  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.mpl-rs').each(function () {
    const $item = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this); // options

    const rsOptions = {
      dottedOverlay: 'none',
      navigationType: 'bullet',
      navigationArrows: 'solo',
      navigationStyle: 'preview4',
      spinner: 'spinner4',
      sliderType: 'standard',
      sliderLayout: $item.hasClass('rs-fullscreen') ? 'fullscreen' : 'auto',
      delay: 9000,
      navigation: {
        keyboardNavigation: 'off',
        keyboard_direction: 'horizontal',
        mouseScrollNavigation: 'off',
        mouseScrollReverse: 'default',
        onHoverStop: 'off',
        touch: {
          touchenabled: 'on',
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: 'horizontal',
          drag_block_vertical: false
        },
        arrows: {
          enable: true,
          style: 'hermes',
          tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>'
        },
        bullets: {
          enable: true,
          style: 'hebe',
          tmp: '<span class="tp-bullet-image"></span>',
          hide_onmobile: true,
          hide_under: 600,
          hide_onleave: true,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          direction: 'horizontal',
          h_align: 'center',
          v_align: 'bottom',
          h_offset: 0,
          v_offset: 30,
          space: 5
        }
      },
      viewPort: {
        enable: true,
        outof: 'pause',
        visible_area: '80%',
        presize: false
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [600, 600, 500, 400],
      lazyType: 'smart',
      parallax: {
        type: 'mouse',
        origo: 'slidercenter',
        speed: 2000,
        levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55]
      },
      shadow: 0,
      stopLoop: 'off',
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: 'off',
      autoHeight: 'off',
      hideThumbsOnMobile: 'off',
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: 'off',
        nextSlideOnWindowFocus: 'off',
        disableFocusListener: false
      }
    }; // init

    $item.find('.tp-banner, .rev_slider').show().revolution(rsOptions);
  });
}



/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginIsotope": function() { return /* binding */ initPluginIsotope; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Isotope

-------------------------------------------------------------------*/

function initPluginIsotope() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__.$.fn.isotope === 'undefined') {
    return;
  }

  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.mpl-isotope').each(function () {
    const $this = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this);
    const curIsotopeOptions = $this.find('.mpl-isotope-options'); // init items

    const $grid = $this.find('.mpl-isotope-grid').isotope({
      itemSelector: '.mpl-isotope-item'
    }); // refresh for parallax images and isotope images position

    if ($grid.imagesLoaded) {
      $grid.imagesLoaded().progress(() => {
        $grid.isotope('layout');
      });
    } // click on filter button


    curIsotopeOptions.on('click', '> :not(.active)', function (e) {
      (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this).addClass('active').siblings().removeClass('active');
      const curFilter = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this).attr('data-filter');
      e.preventDefault();
      $grid.isotope({
        filter() {
          if (curFilter === 'all') {
            return true;
          }

          let itemFilters = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this).attr('data-filters');

          if (itemFilters) {
            itemFilters = itemFilters.split(','); // eslint-disable-next-line

            for (const k in itemFilters) {
              if (itemFilters[k].replace(/\s/g, '') === curFilter) {
                return true;
              }
            }
          }

          return false;
        }

      });
    });
  });
}



/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginTouchSpin": function() { return /* binding */ initPluginTouchSpin; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Init Plugin TouchSpin

-------------------------------------------------------------------*/

function initPluginTouchSpin() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__.$.fn.TouchSpin === 'undefined') {
    return;
  }

  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.mpl-touchspin').each(function () {
    const $input = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this);
    const dataMin = $input.attr('min');
    const dataMax = $input.attr('max');
    const conf = {};
    conf.boostat = 5;
    conf.maxboostedstep = 10;
    conf.step = 1;
    conf.forcestepdivisibility = 'none';
    conf.buttonup_class = 'btn';
    conf.buttondown_class = 'btn';
    conf.verticalbuttons = true;

    if (dataMin) {
      conf.min = dataMin;
    }

    if (dataMax) {
      conf.max = dataMax;
    }

    $input.TouchSpin(conf);
    $input.after('<div class="form-control-bg"></div>');
  });
}



/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginFancybox": function() { return /* binding */ initPluginFancybox; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Init Plugin Fancybox

-------------------------------------------------------------------*/

function initPluginFancybox() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__.$.fn.fancybox === 'undefined') {
    return;
  }

  _utility__WEBPACK_IMPORTED_MODULE_0__.$.fancybox.defaults.backFocus = false; // Close Escape

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('keyup', e => {
    if (e.keyCode === 27) {
      _utility__WEBPACK_IMPORTED_MODULE_0__.$.fancybox.close();
    }
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('beforeShow.fb', () => {
    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.bodyOverflow)(1);
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('beforeClose.fb', () => {
    _utility__WEBPACK_IMPORTED_MODULE_0__.$body.addClass('fancybox-active-closing');
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('afterClose.fb', () => {
    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.bodyOverflow)(0);
    _utility__WEBPACK_IMPORTED_MODULE_0__.$body.removeClass('fancybox-active-closing');
  });
}



/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginRangeslider": function() { return /* binding */ initPluginRangeslider; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Rangeslider

-------------------------------------------------------------------*/

function initPluginRangeslider() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__.$.fn.ionRangeSlider === 'undefined') {
    return;
  }

  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.mpl-rangeslider').ionRangeSlider();
}



/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginJarallax": function() { return /* binding */ initPluginJarallax; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Jarallax

-------------------------------------------------------------------*/

function initPluginJarallax() {
  if (!this.options.parallax || _utility__WEBPACK_IMPORTED_MODULE_0__.isMobile) {
    return;
  } // in newest versions used Jarallax plugin


  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__.$.fn.jarallax === 'undefined') {
    return;
  } // banners


  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.mpl-banner-parallax .mpl-image').each(function () {
    const speed = parseFloat((0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this).attr('data-speed'));
    const $banner = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this).closest('.mpl-banner-parallax');
    const $info = $banner.children('.mpl-banner-content');
    const isTopBanner = $banner.hasClass('mpl-banner-top');
    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this).jarallax({
      automaticResize: true,
      speed: Number.isNaN(speed) ? 0.4 : speed,

      onScroll(calc) {
        if (!isTopBanner) {
          return;
        }

        const pos = calc.beforeTop !== 0 ? -1 : 1;
        const scrollInfo = pos * Math.min(150, 150 * (1 - calc.visiblePercent));
        $info.css({
          opacity: Math.max(0, calc.visiblePercent),
          transform: "translate3d(0, ".concat(scrollInfo, "px, 0)")
        });
      }

    });
  }); // footer parallax

  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.mpl-footer-parallax').each(function () {
    const $this = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this);
    const $img = $this.children('.mpl-image');
    const $wrapper = $this.children('.mpl-footer-wrapper');
    const $content = $this.find('.mpl-footer-content');
    const opts = {
      automaticResize: true,

      onScroll(calc) {
        const scroll = Math.max(-50, -50 * (1 - calc.visiblePercent));
        $wrapper.css({
          transform: "translate3d(0, ".concat(scroll.toFixed(1), "%, 0)")
        });
        $content.css({
          transform: 'translate3d(0, 0, 0)',
          opacity: Math.max(0, calc.visiblePercent)
        });
      }

    };

    if (!$img.length) {
      opts.type = 'custom';
      opts.imgSrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
      opts.imgWidth = 1;
      opts.imgHeight = 1;
      $this.jarallax(opts);
    } else {
      $img.jarallax(opts);
    }
  });
}



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
/* harmony import */ var _parts_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _parts_setOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _parts_initCursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _parts_initNavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _parts_initAnchors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _parts_initForms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _parts_initHexagonRating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _parts_initTwitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var _parts_initFacebook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _parts_initInstagram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14);
/* harmony import */ var _parts_initPluginScrollReveal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15);
/* harmony import */ var _parts_initPluginAnime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16);
/* harmony import */ var _parts_initPluginObjectFitImages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17);
/* harmony import */ var _parts_initPluginCountUp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(18);
/* harmony import */ var _parts_initPluginSwiper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20);
/* harmony import */ var _parts_initPluginSliderRevolution__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21);
/* harmony import */ var _parts_initPluginIsotope__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(22);
/* harmony import */ var _parts_initPluginTouchSpin__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(23);
/* harmony import */ var _parts_initPluginFancybox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(24);
/* harmony import */ var _parts_initPluginRangeslider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(25);
/* harmony import */ var _parts_initPluginJarallax__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(26);






















/*------------------------------------------------------------------

  MonsterPlay Class

-------------------------------------------------------------------*/

class MONSTERPLAY {
  constructor() {
    this.options = _parts_options__WEBPACK_IMPORTED_MODULE_0__.options;
  }

  init() {
    // prt:sc:dm
    const self = this;
    self.initCursor();
    self.initNavbar();
    self.initAnchors();
    self.initForms();
    self.initHexagonRating();
    self.initTwitter();
    self.initFacebook();
    self.initInstagram(); // init plugins

    self.initPluginScrollReveal();
    self.initPluginAnime();
    self.initPluginObjectFitImages();
    self.initPluginCountUp();
    self.initPluginSwiper();
    self.initPluginSliderRevolution();
    self.initPluginIsotope();
    self.initPluginTouchSpin();
    self.initPluginFancybox();
    self.initPluginRangeslider();
    self.initPluginJarallax();
    const tooltip = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltip.map(tooltipTriggerEl => new window.bootstrap.Tooltip(tooltipTriggerEl));
    const popover = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popover.map(popoverTriggerEl => new window.bootstrap.Popover(popoverTriggerEl));
    return self;
  }

  setOptions(newOpts) {
    return _parts_setOptions__WEBPACK_IMPORTED_MODULE_2__.setOptions.call(this, newOpts);
  }

  debounceResize(func) {
    return _parts_utility__WEBPACK_IMPORTED_MODULE_1__.debounceResize.call(this, func);
  }

  throttleScroll(callback) {
    return _parts_utility__WEBPACK_IMPORTED_MODULE_1__.throttleScroll.call(this, callback);
  }

  bodyOverflow(type) {
    return _parts_utility__WEBPACK_IMPORTED_MODULE_1__.bodyOverflow.call(this, type);
  }

  isInViewport($item, returnRect) {
    return _parts_utility__WEBPACK_IMPORTED_MODULE_1__.isInViewport.call(this, $item, returnRect);
  }

  scrollTo($to, callback) {
    return _parts_utility__WEBPACK_IMPORTED_MODULE_1__.scrollTo.call(this, $to, callback);
  }

  initCursor() {
    return _parts_initCursor__WEBPACK_IMPORTED_MODULE_3__.initCursor.call(this);
  }

  initNavbar() {
    return _parts_initNavbar__WEBPACK_IMPORTED_MODULE_4__.initNavbar.call(this);
  }

  initAnchors() {
    return _parts_initAnchors__WEBPACK_IMPORTED_MODULE_5__.initAnchors.call(this);
  }

  initForms() {
    return _parts_initForms__WEBPACK_IMPORTED_MODULE_6__.initForms.call(this);
  }

  initHexagonRating() {
    return _parts_initHexagonRating__WEBPACK_IMPORTED_MODULE_7__.initHexagonRating.call(this);
  }

  initTwitter() {
    return _parts_initTwitter__WEBPACK_IMPORTED_MODULE_8__.initTwitter.call(this);
  }

  initFacebook() {
    return _parts_initFacebook__WEBPACK_IMPORTED_MODULE_9__.initFacebook.call(this);
  }

  initInstagram() {
    return _parts_initInstagram__WEBPACK_IMPORTED_MODULE_10__.initInstagram.call(this);
  }

  initPluginScrollReveal() {
    return _parts_initPluginScrollReveal__WEBPACK_IMPORTED_MODULE_11__.initPluginScrollReveal.call(this);
  }

  initPluginAnime() {
    return _parts_initPluginAnime__WEBPACK_IMPORTED_MODULE_12__.initPluginAnime.call(this);
  }

  initPluginObjectFitImages() {
    return _parts_initPluginObjectFitImages__WEBPACK_IMPORTED_MODULE_13__.initPluginObjectFitImages.call(this);
  }

  initPluginCountUp() {
    return _parts_initPluginCountUp__WEBPACK_IMPORTED_MODULE_14__.initPluginCountUp.call(this);
  }

  initPluginSwiper() {
    return _parts_initPluginSwiper__WEBPACK_IMPORTED_MODULE_15__.initPluginSwiper.call(this);
  }

  initPluginSliderRevolution() {
    return _parts_initPluginSliderRevolution__WEBPACK_IMPORTED_MODULE_16__.initPluginSliderRevolution.call(this);
  }

  initPluginIsotope() {
    return _parts_initPluginIsotope__WEBPACK_IMPORTED_MODULE_17__.initPluginIsotope.call(this);
  }

  initPluginTouchSpin() {
    return _parts_initPluginTouchSpin__WEBPACK_IMPORTED_MODULE_18__.initPluginTouchSpin.call(this);
  }

  initPluginFancybox() {
    return _parts_initPluginFancybox__WEBPACK_IMPORTED_MODULE_19__.initPluginFancybox.call(this);
  }

  initPluginRangeslider() {
    return _parts_initPluginRangeslider__WEBPACK_IMPORTED_MODULE_20__.initPluginRangeslider.call(this);
  }

  initPluginJarallax() {
    return _parts_initPluginJarallax__WEBPACK_IMPORTED_MODULE_21__.initPluginJarallax.call(this);
  }

}
/*------------------------------------------------------------------

  Init MonsterPlay

-------------------------------------------------------------------*/


window.MonsterPlay = new MONSTERPLAY();
}();
/******/ })()
;
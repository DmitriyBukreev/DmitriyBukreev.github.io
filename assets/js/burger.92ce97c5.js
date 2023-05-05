/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 60:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons\\icons_sprite.928ee56fdc0c22324381.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
var sprites = __webpack_require__(60);
var onState = {
  closed: {
    icon: "".concat(sprites, "#cross"),
    nextState: "opened",
    overflow: "hidden"
  },
  opened: {
    icon: "".concat(sprites, "#burger"),
    nextState: "closed",
    overflow: "auto"
  }
};
var button = document.querySelector("[data-burger]");
var menu = document.querySelector("[data-menu-state]");
function toggleMenu(currentState) {
  if (currentState == "closed") {
    document.addEventListener("click", closeHandler, true);
  } else {
    document.removeEventListener("click", closeHandler, true);
  }
  var svg = button.querySelector("use");
  var nextState = onState[currentState];
  svg.setAttribute("href", nextState.icon);
  menu.dataset.menuState = nextState.nextState;
  document.body.style.overflow = nextState.overflow;
}
function closeHandler(event) {
  // Closes menu when clicked anywhere else
  if (event.target.className == "menu__inner") return;
  event.handled = true;
  toggleMenu("opened");
}
button.addEventListener("click", function (event) {
  if (event.handled) return;
  toggleMenu(menu.dataset.menuState);
});
}();
/******/ })()
;
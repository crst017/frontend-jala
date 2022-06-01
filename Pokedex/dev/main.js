/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_less_style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/less/style.less */ \"./styles/less/style.less\");\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.js */ \"./utils/index.js\");\n\r\n\r\nconst API_URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25'\r\n\r\n;(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getPokemons)(API_URL)\r\n    .then( res => renderCards(res))\r\n\r\nconst createPokemonCard = ( image, name, color) => {\r\n    \r\n    const card = document.createElement('div');\r\n    card.classList.add('pokemon-card');\r\n    card.style.backgroundColor = color;\r\n\r\n    const pokemonImage = document.createElement('img');\r\n    pokemonImage.src = image;\r\n\r\n    const pokemonName = document.createElement('span');\r\n    pokemonName.textContent = name\r\n\r\n    card.appendChild(pokemonImage);\r\n    card.appendChild(pokemonName);\r\n\r\n    return card\r\n}\r\n\r\nconst renderCards = ( dataPokemons ) => {\r\n    dataPokemons.results.forEach( (pokemon, index) => {\r\n\r\n        const image = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getPokemonImageUri)(index + 1);\r\n        const color = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__.pokemonColorMap[index+1]\r\n        const name = pokemon.name;\r\n        const pokemonCard = createPokemonCard(image,name,color);\r\n    \r\n        const container = document.querySelector('.cards-container');\r\n        container.appendChild(pokemonCard);\r\n    });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://pokedex/./js/app.js?");

/***/ }),

/***/ "./js/form-validation.js":
/*!*******************************!*\
  !*** ./js/form-validation.js ***!
  \*******************************/
/***/ (() => {

eval("// Example starter JavaScript for disabling form submissions if there are invalid fields\n(function () {\n  'use strict'\n\n  // Fetch all the forms we want to apply custom Bootstrap validation styles to\n  var forms = document.querySelectorAll('.needs-validation')\n\n  // Loop over them and prevent submission\n  Array.prototype.slice.call(forms)\n    .forEach(function (form) {\n      form.addEventListener('submit', function (event) {\n        if (!form.checkValidity()) {\n          event.preventDefault()\n          event.stopPropagation()\n        }\n\n        form.classList.add('was-validated')\n      }, false)\n    })\n})()\n\n\n//# sourceURL=webpack://pokedex/./js/form-validation.js?");

/***/ }),

/***/ "./styles/less/style.less":
/*!********************************!*\
  !*** ./styles/less/style.less ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pokedex/./styles/less/style.less?");

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPokemonImageUri\": () => (/* binding */ getPokemonImageUri),\n/* harmony export */   \"getPokemons\": () => (/* binding */ getPokemons),\n/* harmony export */   \"pokemonColorMap\": () => (/* binding */ pokemonColorMap)\n/* harmony export */ });\nconst pokemonColorMap = {\r\n  1: \"#4ca04c\", //green\r\n  2: \"#4ca04c\",\r\n  3: \"#4ca04c\",\r\n  4: \"#de3a3a\", //red\r\n  5: \"#de3a3a\",\r\n  6: \"#de3a3a\",\r\n  7: \"#3e3ec0\", //blue\r\n  8: \"#3e3ec0\",\r\n  9: \"#3e3ec0\",\r\n  10: \"#4ca04c\",\r\n  11: \"#4ca04c\",\r\n  12: \"#fbf6f6\", //blanco\r\n  13: \"#7c5151\", //brown\r\n  14: \"#f0f060e6\",\r\n  15: \"#f0f060e6\",\r\n  16: \"#7c5151\",\r\n  17: \"#7c5151\",\r\n  18: \"#7c5151\",\r\n  19: \"#523352\",\r\n  20: \"#7c5151\",\r\n  21: \"#7c5151\",\r\n  22: \"#7c5151\",\r\n  23: \"#523352\",\r\n  24: \"#523352\",\r\n  25: \"#f0f060e6\",\r\n  26: \"#f0f060e6\",\r\n  27: \"#f0f060e6\",\r\n  28: \"#f0f060e6\",\r\n  29: \"#3e3ec0\",\r\n  30: \"#3e3ec0\",\r\n  31: \"#3e3ec0\",\r\n  32: \"#523352\",\r\n  33: \"#523352\",\r\n  34: \"#523352\",\r\n  35: \"#ffb6c3\",\r\n  36: \"#ffb6c3\",\r\n  37: \"#7c5151\",\r\n  38: \"#f0f060e6\",\r\n  39: \"#ffb6c3\",\r\n  40: \"#ffb6c3\",\r\n  41: \"#523352\",\r\n  42: \"#523352\",\r\n  43: \"#3e3ec0\",\r\n  44: \"#3e3ec0\",\r\n  45: \"#de3a3a\",\r\n  46: \"#de3a3a\",\r\n  47: \"#de3a3a\",\r\n  48: \"#523352\",\r\n  49: \"#523352\",\r\n  50: \"#7c5151\",\r\n  51: \"#7c5151\",\r\n  52: \"#f0f060e6\",\r\n  53: \"#f0f060e6\",\r\n  54: \"#f0f060e6\",\r\n  55: \"#3e3ec0\",\r\n  56: \"#7c5151\",\r\n  57: \"#7c5151\",\r\n  58: \"#7c5151\",\r\n  59: \"#7c5151\",\r\n  60: \"#3e3ec0\",\r\n  61: \"#3e3ec0\",\r\n  62: \"#3e3ec0\",\r\n  63: \"#7c5151\",\r\n  64: \"#7c5151\",\r\n  65: \"#7c5151\",\r\n  66: \"gray\",\r\n  67: \"gray\",\r\n  68: \"gray\",\r\n  69: \"#4ca04c\",\r\n  70: \"#4ca04c\",\r\n  71: \"#4ca04c\",\r\n  72: \"#3e3ec0\",\r\n  73: \"#3e3ec0\",\r\n  74: \"#7c5151\",\r\n  75: \"#7c5151\",\r\n  76: \"#7c5151\",\r\n  77: \"#f0f060e6\", //yellow\r\n  78: \"#f0f060e6\",\r\n  79: \"#ffb6c3\", //#pink\r\n  80: \"#ffb6c3\",\r\n  81: \"gray\",\r\n  82: \"gray\",\r\n  83: \"#7c5151\",\r\n  84: \"#7c5151\",\r\n  85: \"#7c5151\",\r\n  86: \"#fbf6f6\",\r\n  87: \"#fbf6f6\",\r\n  88: \"#523352\",\r\n  89: \"#523352\",\r\n  90: \"#523352\",\r\n  91: \"#523352\",\r\n  92: \"#523352\",\r\n  93: \"#523352\",\r\n  94: \"#523352\",\r\n  95: \"gray\",\r\n  96: \"#f0f060e6\",\r\n  97: \"#f0f060e6\",\r\n  98: \"#de3a3a\",\r\n  99: \"#de3a3a\",\r\n  100: \"#de3a3a\",\r\n  101: \"#de3a3a\",\r\n  102: \"#ffb6c3\",\r\n  103: \"#f0f060e6\",\r\n  104: \"#7c5151\",\r\n  105: \"#7c5151\",\r\n  106: \"#7c5151\",\r\n  107: \"#7c5151\",\r\n  108: \"#ffb6c3\",\r\n  109: \"#523352\",\r\n  110: \"#523352\",\r\n  111: \"gray\",\r\n  112: \"gray\",\r\n  113: \"#ffb6c3\",\r\n  114: \"#3e3ec0\",\r\n  115: \"#7c5151\",\r\n  116: \"#3e3ec0\",\r\n  117: \"#3e3ec0\",\r\n  118: \"#de3a3a\",\r\n  119: \"#de3a3a\",\r\n  120: \"#7c5151\",\r\n  121: \"#523352\",\r\n  122: \"#ffb6c3\",\r\n  123: \"#4ca04c\",\r\n  124: \"#de3a3a\",\r\n  125: \"#f0f060e6\",\r\n  126: \"#de3a3a\",\r\n  127: \"#7c5151\",\r\n  128: \"#7c5151\",\r\n  129: \"#de3a3a\",\r\n  130: \"#3e3ec0\",\r\n  131: \"#3e3ec0\",\r\n  132: \"#523352\",\r\n  133: \"#7c5151\",\r\n  134: \"#3e3ec0\",\r\n  135: \"#f0f060e6\",\r\n  136: \"#de3a3a\",\r\n  137: \"#ffb6c3\",\r\n  138: \"#3e3ec0\",\r\n  139: \"#3e3ec0\",\r\n  140: \"#7c5151\",\r\n  141: \"#7c5151\",\r\n  142: \"#523352\",\r\n  143: \"black\",\r\n  144: \"#3e3ec0\",\r\n  145: \"#f0f060e6\",\r\n  146: \"#f0f060e6\",\r\n  147: \"#3e3ec0\",\r\n  148: \"#3e3ec0\",\r\n  149: \"#7c5151\",\r\n  150: \"#523352\",\r\n  151: \"#ffb6c3\",\r\n};\r\n\r\nasync function getPokemons ( url ) {\r\n    const response = await fetch(url);\r\n    const data = await response.json()\r\n    return data;\r\n}   \r\n\r\nfunction getPokemonImageUri(id) {\r\n  const imageId = (\"00\" + id).slice(-3); // para 1 => 001\r\n  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;\r\n}\n\n//# sourceURL=webpack://pokedex/./utils/index.js?");

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
/******/ 	__webpack_require__("./js/app.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./js/form-validation.js");
/******/ 	
/******/ })()
;
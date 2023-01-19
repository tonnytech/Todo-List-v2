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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var ToDoListArray = [{\n  description: \"wash dishes\",\n  index: 1,\n  completed: false\n}, {\n  description: \"take breakfast\",\n  index: 1,\n  completed: false\n}, {\n  description: \"play football\",\n  index: 1,\n  completed: false\n}];\nvar myListItems = document.querySelector(\".myListItems\");\nToDoListArray.forEach(function (object) {\n  myListItems.innerHTML += \"\\n<div class=\\\"ListItems\\\">\\n                <span class=\\\"addedList\\\"> <input type=\\\"checkbox\\\"> <input type=\\\"text\\\" value =\".concat(object.description, \"/></span>\\n                <span>icon</span>\\n            </div>\\n\");\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
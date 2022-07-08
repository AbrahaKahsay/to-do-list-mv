"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list_mv"] = self["webpackChunkto_do_list_mv"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  border: 1px solid black;\\n  max-width: 400px;\\n  margin: auto;\\n  margin-top: 10%;\\n  box-shadow: 2px 2px 8px black;\\n  background-color: rgba(177, 173, 173, 0.199);\\n}\\n\\nh1 {\\n  font-size: medium;\\n  font-weight: 400;\\n  padding-left: 20px;\\n}\\n\\nhr {\\n  width: 100%;\\n  font-weight: 100;\\n  color: rgb(228, 222, 222);\\n}\\n\\n.list-container {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 25px;\\n  background-color: white;\\n}\\n\\ninput {\\n  border-top-style: hidden;\\n  border-right-style: hidden;\\n  border-left-style: hidden;\\n  border-bottom-style: hidden;\\n}\\n\\n#add-list {\\n  margin-bottom: 10px;\\n  padding-bottom: 10px;\\n  font-size: small;\\n}\\n\\n#new-list {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.list {\\n  font-size: medium;\\n  font-weight: 200;\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n.icon {\\n  width: 20px;\\n  height: 20px;\\n  padding-left: 95%;\\n  display: none;\\n}\\n\\n.trashIcon {\\n  width: 20px;\\n  height: 20px;\\n  padding-left: 95%;\\n}\\n\\n.iconEdit {\\n  width: 20px;\\n  height: 20px;\\n  padding-left: 95%;\\n  display: none;\\n}\\n\\n.clearBtn {\\n  padding: 10px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-mv/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-mv/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-mv/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-mv/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-mv/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-mv/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-mv/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-mv/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-mv/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-mv/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todos)\n/* harmony export */ });\nclass Todos {\n  constructor(description, complete, index) {\n    this.description = description;\n    this.complete = complete;\n    this.index = index;\n  }\n}\n\n//# sourceURL=webpack://to-do-list-mv/./src/classes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _refresh_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refresh.png */ \"./src/refresh.png\");\n/* harmony import */ var _enter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enter.png */ \"./src/enter.png\");\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes.js */ \"./src/classes.js\");\n/* harmony import */ var _methods_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods.js */ \"./src/methods.js\");\n// import _ from 'lodash';\n\n\n\n\n\n\n// creating a todo list collection by instantiating Tasks class\nconst collection = new _methods_js__WEBPACK_IMPORTED_MODULE_4__.Tasks();\n\n// check local storage and update\nif (localStorage.Tasks) {\n  collection.array = JSON.parse(localStorage.Tasks);\n}\n\n// Add event to add list\n_methods_js__WEBPACK_IMPORTED_MODULE_4__.addList.addEventListener('keypress', (event) => {\n  if (event.key === 'Enter') {\n    const newTasks = new _classes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    newTasks.description = _methods_js__WEBPACK_IMPORTED_MODULE_4__.addList.value;\n    newTasks.complete = false;\n    newTasks.index = `${collection.array.length + 1}`;\n    collection.array.push(newTasks);\n    newTasks.value = ' ';\n    const stringData = JSON.stringify(collection.array);\n    localStorage.setItem('Tasks', stringData);\n    window.location.reload();\n  }\n});\n\n// display the todos added\n(0,_methods_js__WEBPACK_IMPORTED_MODULE_4__.display)();\n\n// remove item from collection\nfor (let i = 0; i < collection.array.length; i += 1) {\n  const remove = document.getElementById(`remove${i}`);\n  const descriptionName = collection.array[i].description;\n  const deleteItem = document.getElementById(`item${i}`);\n  // Add event listner\n  remove.addEventListener('click', () => {\n    const filtered = collection.array.filter((Tasks) => Tasks.description !== descriptionName);\n    const stringData = JSON.stringify(filtered);\n    localStorage.setItem('Tasks', stringData);\n    deleteItem.remove();\n    window.location.reload();\n  });\n}\n\n// update index\nconst updateIndex = () => {\n  collection.array.forEach((todos, index) => {\n    todos.index = index + 1;\n  });\n  const stringData = JSON.stringify(collection.array);\n  localStorage.setItem('Tasks', stringData);\n};\nupdateIndex();\n\n// Edit and update tasks in the localStorage;\nconst updateTask = () => {\n  const list = document.getElementsByClassName('list');\n  for (let i = 0; i < list.length; i += 1) {\n    list[i].addEventListener('change', () => {\n      collection.array[i].description = list[i].value;\n      const stringData = JSON.stringify(collection.array);\n      localStorage.setItem('Tasks', stringData);\n      window.location.reload();\n    });\n  }\n};\nupdateTask();\n\n// Add functionality to checkbox\nfor (let i=0; i<collection.array.length; i += 1){\n  const checkbox = document.getElementById('box${i}');\n  checkbox.addEventListener('change', ()=>{\n    if(collection.array[i].complete === false){\n      collection.array[i].complete = true;\n      localStorage.setItem('Tasks', JSON.stringify(collection.array));\n\n      const list = document.getElementById('list${i}');\n      list.style.textDecoration = 'line-throgh';\n    }\n    else if (collection.array[i].complete === true){\n      collection.array[i].completed = false;\n      localStorage.setItem('Tasks', JSON.stringify(collection.array));\n      \n      const lists = document.getElementById('list${i}');\n      lists.style.textDecoration = 'none';\n    }\n  });\n}\n\n// Add functionality to clear button\nconst clear = document.getElementById('clearBtn');\nclear.addEventListener('click', () => {\n  // filtering out incomplete tasks\n  const filtered = collection.array.filter((items)=> items.completed === false);\n  for (let i=0; i<collection.array.length; i += 1){\n  const markedItem = document.getElementById('item${i}');\n  markedItem.remove();\n  }\n  // store filtered items into local storage\n  localStorage.setItem('Tasks', JSON.stringify(filtered));\n\n  const remove = document.querySelector('.trashIcon');\n  remove.style.display = 'none';\n\n  updateTask();\n  updateIndex();\n});\nconst refresh = document.getElementsByTagName('h1');\nconst refreshIcon = new Image();\nrefreshIcon.src = _refresh_png__WEBPACK_IMPORTED_MODULE_1__;\nrefreshIcon.className = 'rotate';\nrefresh.appendChild(refreshIcon);\n\nconst form = document.getElementById('form');\nconst enterIcon = new Image();\nenterIcon.src = _enter_png__WEBPACK_IMPORTED_MODULE_2__;\nenterIcon.className = 'enter';\nform.appendChild(enterIcon);\n\n\n\n//# sourceURL=webpack://to-do-list-mv/./src/index.js?");

/***/ }),

/***/ "./src/methods.js":
/*!************************!*\
  !*** ./src/methods.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tasks\": () => (/* binding */ Tasks),\n/* harmony export */   \"addList\": () => (/* binding */ addList),\n/* harmony export */   \"display\": () => (/* binding */ display)\n/* harmony export */ });\n/* harmony import */ var _dots_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dots.png */ \"./src/dots.png\");\n/* harmony import */ var _trash_bin_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trash-bin.png */ \"./src/trash-bin.png\");\n/* harmony import */ var _edit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.png */ \"./src/edit.png\");\n\n\n\n\n// handles DoM elements\nconst addList = document.getElementById('add-list');\nconst newList = document.getElementById('new-list');\n\n// Create a class for tasks\nclass Tasks {\n  constructor() {\n    this.array = [];\n  }\n}\n\n// create display method to show on the DoM\nconst display = () => {\n  if (localStorage.Tasks) {\n    for (let i = 0; i < JSON.parse(localStorage.Tasks).length; i += 1) {\n      // creating a div element to store form inputs\n      const div = document.createElement('div');\n\n      const todo = document.createElement('div');\n      todo.id = `item${i}`;\n\n      // create and append checkbox\n      const newCheck = document.createElement('input');\n      newCheck.setAttribute('type', 'checkbox');\n      newCheck.setAttribute('id', `${i}`);\n      todo.appendChild(newCheck);\n\n      // create and append label\n      const newLabel = document.createElement('input');\n      newLabel.setAttribute('type', 'text');\n      newLabel.className = 'list';\n      newLabel.id = `list${i}`;\n      newLabel.value = JSON.parse(localStorage.Tasks)[i].description;\n      todo.appendChild(newLabel);\n\n      // create and line break\n      const lineBreak = document.createElement('br');\n      todo.appendChild(lineBreak);\n\n      // create and append line\n      const line = document.createElement('hr');\n      todo.appendChild(line);\n\n      const editIcon = new Image();\n      editIcon.className = 'iconEdit';\n      editIcon.id = `edit${i}`;\n      editIcon.src = _edit_png__WEBPACK_IMPORTED_MODULE_2__;\n      div.appendChild(editIcon);\n\n      const trashIcon = new Image();\n      trashIcon.className = 'trashIcon';\n      trashIcon.id = `remove${i}`;\n      trashIcon.src = _trash_bin_png__WEBPACK_IMPORTED_MODULE_1__;\n      div.appendChild(trashIcon);\n\n      const dotsIcon = new Image();\n      dotsIcon.className = 'icon';\n      dotsIcon.id = `icon${i}`;\n      dotsIcon.src = _dots_png__WEBPACK_IMPORTED_MODULE_0__;\n      div.appendChild(dotsIcon);\n      todo.appendChild(div);\n\n      newList.appendChild(todo);\n      newList.appendChild(div);\n    }\n  }\n};\n\n\n//# sourceURL=webpack://to-do-list-mv/./src/methods.js?");

/***/ }),

/***/ "./src/dots.png":
/*!**********************!*\
  !*** ./src/dots.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5f8b92663f0982ae315e.png\";\n\n//# sourceURL=webpack://to-do-list-mv/./src/dots.png?");

/***/ }),

/***/ "./src/edit.png":
/*!**********************!*\
  !*** ./src/edit.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"47ca5fa8e92e965f007c.png\";\n\n//# sourceURL=webpack://to-do-list-mv/./src/edit.png?");

/***/ }),

/***/ "./src/enter.png":
/*!***********************!*\
  !*** ./src/enter.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e77231a7717a3757b7b0.png\";\n\n//# sourceURL=webpack://to-do-list-mv/./src/enter.png?");

/***/ }),

/***/ "./src/refresh.png":
/*!*************************!*\
  !*** ./src/refresh.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"efde49d9123c12eab9a4.png\";\n\n//# sourceURL=webpack://to-do-list-mv/./src/refresh.png?");

/***/ }),

/***/ "./src/trash-bin.png":
/*!***************************!*\
  !*** ./src/trash-bin.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"435ba5cc70744bb83a16.png\";\n\n//# sourceURL=webpack://to-do-list-mv/./src/trash-bin.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
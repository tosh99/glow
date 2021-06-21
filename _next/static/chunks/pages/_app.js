(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Anutosh_PycharmProjects_Freelance_Glow_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.scss */ "./styles/globals.scss");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Anutosh\\PycharmProjects\\Freelance\\Glow\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Anutosh_PycharmProjects_Freelance_Glow_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./globals.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./styles/globals.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./globals.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./styles/globals.scss",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./globals.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./styles/globals.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./styles/globals.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./styles/globals.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slick_ajax_loader_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slick/ajax-loader.gif */ "./styles/slick/ajax-loader.gif");
/* harmony import */ var _slick_fonts_slick_eot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slick/fonts/slick.eot */ "./styles/slick/fonts/slick.eot");
/* harmony import */ var _slick_fonts_slick_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slick/fonts/slick.woff */ "./styles/slick/fonts/slick.woff");
/* harmony import */ var _slick_fonts_slick_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slick/fonts/slick.ttf */ "./styles/slick/fonts/slick.ttf");
/* harmony import */ var _slick_fonts_slick_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slick/fonts/slick.svg */ "./styles/slick/fonts/slick.svg");
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_slick_ajax_loader_gif__WEBPACK_IMPORTED_MODULE_2__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_slick_fonts_slick_eot__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_slick_fonts_slick_woff__WEBPACK_IMPORTED_MODULE_4__.default);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_slick_fonts_slick_ttf__WEBPACK_IMPORTED_MODULE_5__.default);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_slick_fonts_slick_svg__WEBPACK_IMPORTED_MODULE_6__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* Slider */\n.slick-slider {\n  position: relative;\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\n.slick-list:focus {\n  outline: none;\n}\n.slick-list.dragging {\n  cursor: pointer;\n  cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n.slick-track {\n  position: relative;\n  left: 0;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.slick-track:before, .slick-track:after {\n  content: \"\";\n  display: table;\n}\n.slick-track:after {\n  clear: both;\n}\n.slick-loading .slick-track {\n  visibility: hidden;\n}\n\n.slick-slide {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n  display: none;\n}\n[dir=rtl] .slick-slide {\n  float: right;\n}\n.slick-slide img {\n  display: block;\n}\n.slick-slide.slick-loading img {\n  display: none;\n}\n.slick-slide.dragging img {\n  pointer-events: none;\n}\n.slick-initialized .slick-slide {\n  display: block;\n}\n.slick-loading .slick-slide {\n  visibility: hidden;\n}\n.slick-vertical .slick-slide {\n  display: block;\n  height: auto;\n  border: 1px solid transparent;\n}\n\n.slick-arrow.slick-hidden {\n  display: none;\n}\n\n/* Slider */\n.slick-loading .slick-list {\n  background: #fff url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center center no-repeat;\n}\n\n/* Icons */\n@font-face {\n  font-family: \"slick\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Arrows */\n.slick-prev,\n.slick-next {\n  position: absolute;\n  display: block;\n  height: 20px;\n  width: 20px;\n  line-height: 0px;\n  font-size: 0px;\n  cursor: pointer;\n  background: transparent;\n  color: transparent;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding: 0;\n  border: none;\n  outline: none;\n}\n.slick-prev:hover, .slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus {\n  outline: none;\n  background: transparent;\n  color: transparent;\n}\n.slick-prev:hover:before, .slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before {\n  opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before {\n  opacity: 0.25;\n}\n.slick-prev:before,\n.slick-next:before {\n  font-family: \"slick\";\n  font-size: 20px;\n  line-height: 1;\n  color: white;\n  opacity: 0.75;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev {\n  left: -25px;\n}\n[dir=rtl] .slick-prev {\n  left: auto;\n  right: -25px;\n}\n.slick-prev:before {\n  content: \"←\";\n}\n[dir=rtl] .slick-prev:before {\n  content: \"→\";\n}\n\n.slick-next {\n  right: -25px;\n}\n[dir=rtl] .slick-next {\n  left: -25px;\n  right: auto;\n}\n.slick-next:before {\n  content: \"→\";\n}\n[dir=rtl] .slick-next:before {\n  content: \"←\";\n}\n\n/* Dots */\n.slick-dotted.slick-slider {\n  margin-bottom: 30px;\n}\n\n.slick-dots {\n  position: absolute;\n  bottom: -25px;\n  list-style: none;\n  display: block;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n.slick-dots li {\n  position: relative;\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  margin: 0 5px;\n  padding: 0;\n  cursor: pointer;\n}\n.slick-dots li button {\n  border: 0;\n  background: transparent;\n  display: block;\n  height: 20px;\n  width: 20px;\n  outline: none;\n  line-height: 0px;\n  font-size: 0px;\n  color: transparent;\n  padding: 5px;\n  cursor: pointer;\n}\n.slick-dots li button:hover, .slick-dots li button:focus {\n  outline: none;\n}\n.slick-dots li button:hover:before, .slick-dots li button:focus:before {\n  opacity: 1;\n}\n.slick-dots li button:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"•\";\n  width: 20px;\n  height: 20px;\n  font-family: \"slick\";\n  font-size: 6px;\n  line-height: 20px;\n  text-align: center;\n  color: black;\n  opacity: 0.25;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before {\n  color: black;\n  opacity: 0.75;\n}\n\n.outer {\n  width: 100%;\n}\n.outer .inner {\n  max-width: 1440px;\n  margin: auto;\n  position: relative;\n  padding-left: 100px;\n  padding-right: 100px;\n  overflow-x: hidden;\n}\n\n@media only screen and (max-width: 1024px) {\n  .outer .inner {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n}\n@media only screen and (max-width: 648px) {\n  .outer .inner {\n    padding-left: 35px;\n    padding-right: 35px;\n  }\n}\nh1, h2, h3, h4, h5, h6, p {\n  margin: 0;\n}\n\np {\n  font-size: 16px;\n}\n\n@font-face {\n  font-family: \"EmpireBold\";\n  font-display: swap;\n  src: local(\"EmpireBold\"), url(\"https://tosh99.github.io/glow//fonts/EmpireBold.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"EmpireRegular\";\n  font-display: swap;\n  src: local(\"EmpireRegular\"), url(\"https://tosh99.github.io/glow//fonts/EmpireRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"HattonUltraLight\";\n  font-display: swap;\n  src: local(\"HattonUltraLight\"), url(\"https://tosh99.github.io/glow//fonts/HattonUltraLight.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"HattonLight\";\n  font-display: swap;\n  src: local(\"HattonLight\"), url(\"https://tosh99.github.io/glow//fonts/HattonLight.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"HattonRegular\";\n  font-display: swap;\n  src: local(\"HattonRegular\"), url(\"https://tosh99.github.io/glow//fonts/HattonRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"HattonMedium\";\n  font-display: swap;\n  src: local(\"HattonMedium\"), url(\"https://tosh99.github.io/glow//fonts/HattonMedium.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"OggItalic\";\n  font-display: swap;\n  src: local(\"OggItalic\"), url(\"https://tosh99.github.io/glow//fonts/OggItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"OggRegular\";\n  font-display: swap;\n  src: local(\"OggRegular\"), url(\"https://tosh99.github.io/glow//fonts/OggRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"SaolRegular\";\n  font-display: swap;\n  src: local(\"SaolRegular\"), url(\"https://tosh99.github.io/glow//fonts/SaolRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"SaolBold\";\n  font-display: swap;\n  src: local(\"SaolBold\"), url(\"https://tosh99.github.io/glow//fonts/SaolBold.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"SaolBoldItalic\";\n  font-display: swap;\n  src: local(\"SaolBoldItalic\"), url(\"https://tosh99.github.io/glow//fonts/SaolBoldItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"SaolRegularItalic\";\n  font-display: swap;\n  src: local(\"SaolRegularItalic\"), url(\"https://tosh99.github.io/glow//fonts/SaolRegularItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"TelegrafUltraLight\";\n  font-display: swap;\n  src: local(\"TelegrafUltraLight\"), url(\"https://tosh99.github.io/glow//fonts/TelegrafUltraLight.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"TelegrafRegular\";\n  font-display: swap;\n  src: local(\"TelegrafRegular\"), url(\"https://tosh99.github.io/glow//fonts/TelegrafRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"TelegrafUltraBold\";\n  font-display: swap;\n  src: local(\"TelegrafUltraBold\"), url(\"https://tosh99.github.io/glow//fonts/TelegrafUltraBold.otf\") format(\"opentype\");\n}\n.slick-slide img.gr {\n  filter: grayscale(100%);\n}\n\n.slick-center img.gr {\n  filter: none;\n}\n\nbutton {\n  border: 2px solid #000000;\n  border-radius: 100px;\n  padding: 15px 25px;\n  background: transparent;\n  cursor: pointer;\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}", "",{"version":3,"sources":["webpack://globals.scss","webpack://slick/slick.scss","webpack://slick/slick-theme.scss","webpack://page.scss","webpack://fonts.scss","webpack://slider.scss","webpack://buttons.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n/* Slider */\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap\");\n.slick-slider {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\n.slick-list:focus {\n  outline: none;\n}\n.slick-list.dragging {\n  cursor: pointer;\n  cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n.slick-track {\n  position: relative;\n  left: 0;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.slick-track:before, .slick-track:after {\n  content: \"\";\n  display: table;\n}\n.slick-track:after {\n  clear: both;\n}\n.slick-loading .slick-track {\n  visibility: hidden;\n}\n\n.slick-slide {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n  display: none;\n}\n[dir=rtl] .slick-slide {\n  float: right;\n}\n.slick-slide img {\n  display: block;\n}\n.slick-slide.slick-loading img {\n  display: none;\n}\n.slick-slide.dragging img {\n  pointer-events: none;\n}\n.slick-initialized .slick-slide {\n  display: block;\n}\n.slick-loading .slick-slide {\n  visibility: hidden;\n}\n.slick-vertical .slick-slide {\n  display: block;\n  height: auto;\n  border: 1px solid transparent;\n}\n\n.slick-arrow.slick-hidden {\n  display: none;\n}\n\n/* Slider */\n.slick-loading .slick-list {\n  background: #fff url(\"./ajax-loader.gif\") center center no-repeat;\n}\n\n/* Icons */\n@font-face {\n  font-family: \"slick\";\n  src: url(\"./fonts/slick.eot\");\n  src: url(\"./fonts/slick.eot?#iefix\") format(\"embedded-opentype\"), url(\"./fonts/slick.woff\") format(\"woff\"), url(\"./fonts/slick.ttf\") format(\"truetype\"), url(\"./fonts/slick.svg#slick\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Arrows */\n.slick-prev,\n.slick-next {\n  position: absolute;\n  display: block;\n  height: 20px;\n  width: 20px;\n  line-height: 0px;\n  font-size: 0px;\n  cursor: pointer;\n  background: transparent;\n  color: transparent;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n  -ms-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding: 0;\n  border: none;\n  outline: none;\n}\n.slick-prev:hover, .slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus {\n  outline: none;\n  background: transparent;\n  color: transparent;\n}\n.slick-prev:hover:before, .slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before {\n  opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before {\n  opacity: 0.25;\n}\n.slick-prev:before,\n.slick-next:before {\n  font-family: \"slick\";\n  font-size: 20px;\n  line-height: 1;\n  color: white;\n  opacity: 0.75;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev {\n  left: -25px;\n}\n[dir=rtl] .slick-prev {\n  left: auto;\n  right: -25px;\n}\n.slick-prev:before {\n  content: \"←\";\n}\n[dir=rtl] .slick-prev:before {\n  content: \"→\";\n}\n\n.slick-next {\n  right: -25px;\n}\n[dir=rtl] .slick-next {\n  left: -25px;\n  right: auto;\n}\n.slick-next:before {\n  content: \"→\";\n}\n[dir=rtl] .slick-next:before {\n  content: \"←\";\n}\n\n/* Dots */\n.slick-dotted.slick-slider {\n  margin-bottom: 30px;\n}\n\n.slick-dots {\n  position: absolute;\n  bottom: -25px;\n  list-style: none;\n  display: block;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n.slick-dots li {\n  position: relative;\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  margin: 0 5px;\n  padding: 0;\n  cursor: pointer;\n}\n.slick-dots li button {\n  border: 0;\n  background: transparent;\n  display: block;\n  height: 20px;\n  width: 20px;\n  outline: none;\n  line-height: 0px;\n  font-size: 0px;\n  color: transparent;\n  padding: 5px;\n  cursor: pointer;\n}\n.slick-dots li button:hover, .slick-dots li button:focus {\n  outline: none;\n}\n.slick-dots li button:hover:before, .slick-dots li button:focus:before {\n  opacity: 1;\n}\n.slick-dots li button:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"•\";\n  width: 20px;\n  height: 20px;\n  font-family: \"slick\";\n  font-size: 6px;\n  line-height: 20px;\n  text-align: center;\n  color: black;\n  opacity: 0.25;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before {\n  color: black;\n  opacity: 0.75;\n}\n\n.outer {\n  width: 100%;\n}\n.outer .inner {\n  max-width: 1440px;\n  margin: auto;\n  position: relative;\n  padding-left: 100px;\n  padding-right: 100px;\n  overflow-x: hidden;\n}\n\n@media only screen and (max-width: 1024px) {\n  .outer .inner {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n}\n@media only screen and (max-width: 648px) {\n  .outer .inner {\n    padding-left: 35px;\n    padding-right: 35px;\n  }\n}\nh1, h2, h3, h4, h5, h6, p {\n  margin: 0;\n}\n\np {\n  font-size: 16px;\n}\n\n@font-face {\n  font-family: \"EmpireBold\";\n  font-display: swap;\n  src: local(\"EmpireBold\"), url(\"https://tosh99.github.io/glow//fonts/EmpireBold.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"EmpireRegular\";\n  font-display: swap;\n  src: local(\"EmpireRegular\"), url(\"https://tosh99.github.io/glow//fonts/EmpireRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"HattonUltraLight\";\n  font-display: swap;\n  src: local(\"HattonUltraLight\"), url(\"https://tosh99.github.io/glow//fonts/HattonUltraLight.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"HattonLight\";\n  font-display: swap;\n  src: local(\"HattonLight\"), url(\"https://tosh99.github.io/glow//fonts/HattonLight.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"HattonRegular\";\n  font-display: swap;\n  src: local(\"HattonRegular\"), url(\"https://tosh99.github.io/glow//fonts/HattonRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"HattonMedium\";\n  font-display: swap;\n  src: local(\"HattonMedium\"), url(\"https://tosh99.github.io/glow//fonts/HattonMedium.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"OggItalic\";\n  font-display: swap;\n  src: local(\"OggItalic\"), url(\"https://tosh99.github.io/glow//fonts/OggItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"OggRegular\";\n  font-display: swap;\n  src: local(\"OggRegular\"), url(\"https://tosh99.github.io/glow//fonts/OggRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"SaolRegular\";\n  font-display: swap;\n  src: local(\"SaolRegular\"), url(\"https://tosh99.github.io/glow//fonts/SaolRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"SaolBold\";\n  font-display: swap;\n  src: local(\"SaolBold\"), url(\"https://tosh99.github.io/glow//fonts/SaolBold.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"SaolBoldItalic\";\n  font-display: swap;\n  src: local(\"SaolBoldItalic\"), url(\"https://tosh99.github.io/glow//fonts/SaolBoldItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"SaolRegularItalic\";\n  font-display: swap;\n  src: local(\"SaolRegularItalic\"), url(\"https://tosh99.github.io/glow//fonts/SaolRegularItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"TelegrafUltraLight\";\n  font-display: swap;\n  src: local(\"TelegrafUltraLight\"), url(\"https://tosh99.github.io/glow//fonts/TelegrafUltraLight.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"TelegrafRegular\";\n  font-display: swap;\n  src: local(\"TelegrafRegular\"), url(\"https://tosh99.github.io/glow//fonts/TelegrafRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"TelegrafUltraBold\";\n  font-display: swap;\n  src: local(\"TelegrafUltraBold\"), url(\"https://tosh99.github.io/glow//fonts/TelegrafUltraBold.otf\") format(\"opentype\");\n}\n.slick-slide img.gr {\n  filter: grayscale(100%);\n}\n\n.slick-center img.gr {\n  filter: none;\n}\n\nbutton {\n  border: 2px solid #000000;\n  border-radius: 100px;\n  padding: 15px 25px;\n  background: transparent;\n  cursor: pointer;\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  box-sizing: border-box;\n}","/* Slider */\r\n\r\n.slick-slider {\r\n    position: relative;\r\n    display: block;\r\n    box-sizing: border-box;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    -ms-touch-action: pan-y;\r\n    touch-action: pan-y;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n.slick-list {\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    &:focus {\r\n        outline: none;\r\n    }\r\n\r\n    &.dragging {\r\n        cursor: pointer;\r\n        cursor: hand;\r\n    }\r\n}\r\n.slick-slider .slick-track,\r\n.slick-slider .slick-list {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    -moz-transform: translate3d(0, 0, 0);\r\n    -ms-transform: translate3d(0, 0, 0);\r\n    -o-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n}\r\n\r\n.slick-track {\r\n    position: relative;\r\n    left: 0;\r\n    top: 0;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n    &:before,\r\n    &:after {\r\n        content: \"\";\r\n        display: table;\r\n    }\r\n\r\n    &:after {\r\n        clear: both;\r\n    }\r\n\r\n    .slick-loading & {\r\n        visibility: hidden;\r\n    }\r\n}\r\n.slick-slide {\r\n    float: left;\r\n    height: 100%;\r\n    min-height: 1px;\r\n    [dir=\"rtl\"] & {\r\n        float: right;\r\n    }\r\n    img {\r\n        display: block;\r\n    }\r\n    &.slick-loading img {\r\n        display: none;\r\n    }\r\n\r\n    display: none;\r\n\r\n    &.dragging img {\r\n        pointer-events: none;\r\n    }\r\n\r\n    .slick-initialized & {\r\n        display: block;\r\n    }\r\n\r\n    .slick-loading & {\r\n        visibility: hidden;\r\n    }\r\n\r\n    .slick-vertical & {\r\n        display: block;\r\n        height: auto;\r\n        border: 1px solid transparent;\r\n    }\r\n}\r\n.slick-arrow.slick-hidden {\r\n    display: none;\r\n}\r\n","@charset \"UTF-8\";\r\n\r\n// Default Variables\r\n\r\n// Slick icon entity codes outputs the following\r\n// \"\\2190\" outputs ascii character \"←\"\r\n// \"\\2192\" outputs ascii character \"→\"\r\n// \"\\2022\" outputs ascii character \"•\"\r\n\r\n$slick-font-path: \"./fonts/\" !default;\r\n$slick-font-family: \"slick\" !default;\r\n$slick-loader-path: \"./\" !default;\r\n$slick-arrow-color: white !default;\r\n$slick-dot-color: black !default;\r\n$slick-dot-color-active: $slick-dot-color !default;\r\n$slick-prev-character: \"\\2190\" !default;\r\n$slick-next-character: \"\\2192\" !default;\r\n$slick-dot-character: \"\\2022\" !default;\r\n$slick-dot-size: 6px !default;\r\n$slick-opacity-default: 0.75 !default;\r\n$slick-opacity-on-hover: 1 !default;\r\n$slick-opacity-not-active: 0.25 !default;\r\n\r\n@function slick-image-url($url) {\r\n    @if function-exists(image-url) {\r\n        @return image-url($url);\r\n    }\r\n    @else {\r\n        @return url($slick-loader-path + $url);\r\n    }\r\n}\r\n\r\n@function slick-font-url($url) {\r\n    @if function-exists(font-url) {\r\n        @return font-url($url);\r\n    }\r\n    @else {\r\n        @return url($slick-font-path + $url);\r\n    }\r\n}\r\n\r\n/* Slider */\r\n\r\n.slick-list {\r\n    .slick-loading & {\r\n        background: #fff slick-image-url(\"ajax-loader.gif\") center center no-repeat;\r\n    }\r\n}\r\n\r\n/* Icons */\r\n@if $slick-font-family == \"slick\" {\r\n    @font-face {\r\n        font-family: \"slick\";\r\n        src: slick-font-url(\"slick.eot\");\r\n        src: slick-font-url(\"slick.eot?#iefix\") format(\"embedded-opentype\"), slick-font-url(\"slick.woff\") format(\"woff\"), slick-font-url(\"slick.ttf\") format(\"truetype\"), slick-font-url(\"slick.svg#slick\") format(\"svg\");\r\n        font-weight: normal;\r\n        font-style: normal;\r\n    }\r\n}\r\n\r\n/* Arrows */\r\n\r\n.slick-prev,\r\n.slick-next {\r\n    position: absolute;\r\n    display: block;\r\n    height: 20px;\r\n    width: 20px;\r\n    line-height: 0px;\r\n    font-size: 0px;\r\n    cursor: pointer;\r\n    background: transparent;\r\n    color: transparent;\r\n    top: 50%;\r\n    -webkit-transform: translate(0, -50%);\r\n    -ms-transform: translate(0, -50%);\r\n    transform: translate(0, -50%);\r\n    padding: 0;\r\n    border: none;\r\n    outline: none;\r\n    &:hover, &:focus {\r\n        outline: none;\r\n        background: transparent;\r\n        color: transparent;\r\n        &:before {\r\n            opacity: $slick-opacity-on-hover;\r\n        }\r\n    }\r\n    &.slick-disabled:before {\r\n        opacity: $slick-opacity-not-active;\r\n    }\r\n    &:before {\r\n        font-family: $slick-font-family;\r\n        font-size: 20px;\r\n        line-height: 1;\r\n        color: $slick-arrow-color;\r\n        opacity: $slick-opacity-default;\r\n        -webkit-font-smoothing: antialiased;\r\n        -moz-osx-font-smoothing: grayscale;\r\n    }\r\n}\r\n\r\n.slick-prev {\r\n    left: -25px;\r\n    [dir=\"rtl\"] & {\r\n        left: auto;\r\n        right: -25px;\r\n    }\r\n    &:before {\r\n        content: $slick-prev-character;\r\n        [dir=\"rtl\"] & {\r\n            content: $slick-next-character;\r\n        }\r\n    }\r\n}\r\n\r\n.slick-next {\r\n    right: -25px;\r\n    [dir=\"rtl\"] & {\r\n        left: -25px;\r\n        right: auto;\r\n    }\r\n    &:before {\r\n        content: $slick-next-character;\r\n        [dir=\"rtl\"] & {\r\n            content: $slick-prev-character;\r\n        }\r\n    }\r\n}\r\n\r\n/* Dots */\r\n\r\n.slick-dotted.slick-slider {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.slick-dots {\r\n    position: absolute;\r\n    bottom: -25px;\r\n    list-style: none;\r\n    display: block;\r\n    text-align: center;\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n    li {\r\n        position: relative;\r\n        display: inline-block;\r\n        height: 20px;\r\n        width: 20px;\r\n        margin: 0 5px;\r\n        padding: 0;\r\n        cursor: pointer;\r\n        button {\r\n            border: 0;\r\n            background: transparent;\r\n            display: block;\r\n            height: 20px;\r\n            width: 20px;\r\n            outline: none;\r\n            line-height: 0px;\r\n            font-size: 0px;\r\n            color: transparent;\r\n            padding: 5px;\r\n            cursor: pointer;\r\n            &:hover, &:focus {\r\n                outline: none;\r\n                &:before {\r\n                    opacity: $slick-opacity-on-hover;\r\n                }\r\n            }\r\n            &:before {\r\n                position: absolute;\r\n                top: 0;\r\n                left: 0;\r\n                content: $slick-dot-character;\r\n                width: 20px;\r\n                height: 20px;\r\n                font-family: $slick-font-family;\r\n                font-size: $slick-dot-size;\r\n                line-height: 20px;\r\n                text-align: center;\r\n                color: $slick-dot-color;\r\n                opacity: $slick-opacity-not-active;\r\n                -webkit-font-smoothing: antialiased;\r\n                -moz-osx-font-smoothing: grayscale;\r\n            }\r\n        }\r\n        &.slick-active button:before {\r\n            color: $slick-dot-color-active;\r\n            opacity: $slick-opacity-default;\r\n        }\r\n    }\r\n}\r\n",".outer {\r\n    width: 100%;\r\n\r\n    .inner {\r\n        max-width: 1440px;\r\n        margin: auto;\r\n        position: relative;\r\n        padding-left: 100px;\r\n        padding-right: 100px;\r\n        overflow-x: hidden;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n    .outer {\r\n        .inner {\r\n            padding-left: 50px;\r\n            padding-right: 50px;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 648px) {\r\n    .outer {\r\n        .inner {\r\n            padding-left: 35px;\r\n            padding-right: 35px;\r\n        }\r\n    }\r\n}","@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');\r\n\r\n$assetPrefix: 'https://tosh99.github.io/glow/';\r\n\r\nh1, h2, h3, h4, h5, h6, p {\r\n    margin: 0;\r\n}\r\n\r\n\r\np {\r\n    font-size: 16px;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 1024px) {\r\n\r\n}\r\n\r\n@font-face {\r\n    font-family: 'EmpireBold';\r\n    font-display: swap;\r\n    src: local('EmpireBold'), url($assetPrefix + \"/fonts/EmpireBold.ttf\") format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'EmpireRegular';\r\n    font-display: swap;\r\n    src: local('EmpireRegular'), url($assetPrefix + \"/fonts/EmpireRegular.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'HattonUltraLight';\r\n    font-display: swap;\r\n    src: local('HattonUltraLight'), url($assetPrefix + \"/fonts/HattonUltraLight.otf\") format('opentype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'HattonLight';\r\n    font-display: swap;\r\n    src: local('HattonLight'), url($assetPrefix + \"/fonts/HattonLight.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'HattonRegular';\r\n    font-display: swap;\r\n    src: local('HattonRegular'), url($assetPrefix + \"/fonts/HattonRegular.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'HattonMedium';\r\n    font-display: swap;\r\n    src: local('HattonMedium'), url($assetPrefix + \"/fonts/HattonMedium.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'OggItalic';\r\n    font-display: swap;\r\n    src: local('OggItalic'), url($assetPrefix + \"/fonts/OggItalic.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'OggRegular';\r\n    font-display: swap;\r\n    src: local('OggRegular'), url($assetPrefix + \"/fonts/OggRegular.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'SaolRegular';\r\n    font-display: swap;\r\n    src: local('SaolRegular'), url($assetPrefix + \"/fonts/SaolRegular.otf\") format('opentype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'SaolBold';\r\n    font-display: swap;\r\n    src: local('SaolBold'), url($assetPrefix + \"/fonts/SaolBold.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'SaolBoldItalic';\r\n    font-display: swap;\r\n    src: local('SaolBoldItalic'), url($assetPrefix + \"/fonts/SaolBoldItalic.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'SaolRegularItalic';\r\n    font-display: swap;\r\n    src: local('SaolRegularItalic'), url($assetPrefix + \"/fonts/SaolRegularItalic.otf\") format('opentype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'TelegrafUltraLight';\r\n    font-display: swap;\r\n    src: local('TelegrafUltraLight'), url($assetPrefix + \"/fonts/TelegrafUltraLight.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'TelegrafRegular';\r\n    font-display: swap;\r\n    src: local('TelegrafRegular'), url($assetPrefix + \"/fonts/TelegrafRegular.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'TelegrafUltraBold';\r\n    font-display: swap;\r\n    src: local('TelegrafUltraBold'), url($assetPrefix + \"/fonts/TelegrafUltraBold.otf\") format('opentype');\r\n}\r\n\r\n\r\n",".slick-slide {\r\n    img.gr {\r\n        filter: grayscale(100%);\r\n    }\r\n}\r\n\r\n.slick-center {\r\n    img.gr {\r\n        filter: none;\r\n    }\r\n}","button {\r\n    border: 2px solid #000000;\r\n    border-radius: 100px;\r\n    padding: 15px 25px;\r\n    background: transparent;\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/getUrl.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/getUrl.js ***!
  \**************************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var e={91:function(e){e.exports=function(e,r){if(!r){r={}}e=e&&e.__esModule?e.default:e;if(typeof e!=="string"){return e}if(/^['"].*['"]$/.test(e)){e=e.slice(1,-1)}if(r.hash){e+=r.hash}if(/["'() \t\n]/.test(e)||r.needQuotes){return'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"')}return e}}};var r={};function __nccwpck_require__(t){if(r[t]){return r[t].exports}var _=r[t]={exports:{}};var n=true;try{e[t](_,_.exports,__nccwpck_require__);n=false}finally{if(n)delete r[t]}return _.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(91)}();

/***/ }),

/***/ "./styles/slick/ajax-loader.gif":
/*!**************************************!*\
  !*** ./styles/slick/ajax-loader.gif ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ajax-loader.fb6f3c230cb846e25247dfaa1da94d8f.gif");

/***/ }),

/***/ "./styles/slick/fonts/slick.eot":
/*!**************************************!*\
  !*** ./styles/slick/fonts/slick.eot ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/slick.a4e97f5a2a64f0ab132323fbeb33ae29.eot");

/***/ }),

/***/ "./styles/slick/fonts/slick.svg":
/*!**************************************!*\
  !*** ./styles/slick/fonts/slick.svg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/slick.7ba97953187dc2907930249f826ce90d.svg");

/***/ }),

/***/ "./styles/slick/fonts/slick.ttf":
/*!**************************************!*\
  !*** ./styles/slick/fonts/slick.ttf ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/slick.c94f7671dcc99dce43e22a89f486f7c2.ttf");

/***/ }),

/***/ "./styles/slick/fonts/slick.woff":
/*!***************************************!*\
  !*** ./styles/slick/fonts/slick.woff ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/slick.295183786cd8a138986521d9f388a286.woff");

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5zY3NzP2NjYjUiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5zY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvc2xpY2svYWpheC1sb2FkZXIuZ2lmIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvc2xpY2svZm9udHMvc2xpY2suZW90Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvc2xpY2svZm9udHMvc2xpY2suc3ZnIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvc2xpY2svZm9udHMvc2xpY2sudHRmIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvc2xpY2svZm9udHMvc2xpY2sud29mZiIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtZGV2LXJ1bnRpbWUuanMiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQi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LEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxXQUFXLE9BQU8sV0FBVyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLFdBQVcsTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFFBQVEsVUFBVSxXQUFXLFdBQVcsTUFBTSxRQUFRLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLFdBQVcsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxRQUFRLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFFBQVEsV0FBVyxLQUFLLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxZQUFZLFlBQVksWUFBWSxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxRQUFRLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFN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YTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLDJEQUEyRCxTQUFTO0FBQ3BFLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNERBQTREO0FBQzVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJDQUEyQzs7QUFFM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxjQUFjO0FBQ2QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNsckNhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELEVBQUUsdUpBQXNFO0FBQ3hFIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuc2NzcydcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2FwcFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzJdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVszXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbNF0hLi9nbG9iYWxzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzJdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVszXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbNF0hLi9nbG9iYWxzLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsyXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbM10hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzRdIS4vZ2xvYmFscy5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO2NvbnN0IGlzT2xkSUU9ZnVuY3Rpb24gaXNPbGRJRSgpe2xldCBtZW1vO3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpe2lmKHR5cGVvZiBtZW1vPT09J3VuZGVmaW5lZCcpey8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4vLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4vLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4vLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xubWVtbz1Cb29sZWFuKHdpbmRvdyYmZG9jdW1lbnQmJmRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9iKTt9cmV0dXJuIG1lbW87fTt9KCk7Y29uc3QgZ2V0VGFyZ2V0PWZ1bmN0aW9uIGdldFRhcmdldCgpe2NvbnN0IG1lbW89e307cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCl7aWYodHlwZW9mIG1lbW9bdGFyZ2V0XT09PSd1bmRlZmluZWQnKXtsZXQgc3R5bGVUYXJnZXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOy8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5pZih3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQmJnN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KXt0cnl7Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbi8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5zdHlsZVRhcmdldD1zdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDt9Y2F0Y2goZSl7Ly8gaXN0YW5idWwgaWdub3JlIG5leHRcbnN0eWxlVGFyZ2V0PW51bGw7fX1tZW1vW3RhcmdldF09c3R5bGVUYXJnZXQ7fXJldHVybiBtZW1vW3RhcmdldF07fTt9KCk7Y29uc3Qgc3R5bGVzSW5Eb209W107ZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcil7bGV0IHJlc3VsdD0tMTtmb3IobGV0IGk9MDtpPHN0eWxlc0luRG9tLmxlbmd0aDtpKyspe2lmKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXI9PT1pZGVudGlmaWVyKXtyZXN1bHQ9aTticmVhazt9fXJldHVybiByZXN1bHQ7fWZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpe2NvbnN0IGlkQ291bnRNYXA9e307Y29uc3QgaWRlbnRpZmllcnM9W107Zm9yKGxldCBpPTA7aTxsaXN0Lmxlbmd0aDtpKyspe2NvbnN0IGl0ZW09bGlzdFtpXTtjb25zdCBpZD1vcHRpb25zLmJhc2U/aXRlbVswXStvcHRpb25zLmJhc2U6aXRlbVswXTtjb25zdCBjb3VudD1pZENvdW50TWFwW2lkXXx8MDtjb25zdCBpZGVudGlmaWVyPWlkKycgJytjb3VudC50b1N0cmluZygpO2lkQ291bnRNYXBbaWRdPWNvdW50KzE7Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7Y29uc3Qgb2JqPXtjc3M6aXRlbVsxXSxtZWRpYTppdGVtWzJdLHNvdXJjZU1hcDppdGVtWzNdfTtpZihpbmRleCE9PS0xKXtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7fWVsc2V7c3R5bGVzSW5Eb20ucHVzaCh7aWRlbnRpZmllcjppZGVudGlmaWVyLHVwZGF0ZXI6YWRkU3R5bGUob2JqLG9wdGlvbnMpLHJlZmVyZW5jZXM6MX0pO31pZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO31yZXR1cm4gaWRlbnRpZmllcnM7fWZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKXtjb25zdCBzdHlsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO2NvbnN0IGF0dHJpYnV0ZXM9b3B0aW9ucy5hdHRyaWJ1dGVzfHx7fTtpZih0eXBlb2YgYXR0cmlidXRlcy5ub25jZT09PSd1bmRlZmluZWQnKXtjb25zdCBub25jZT0vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbnR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyE9PSd1bmRlZmluZWQnP19fd2VicGFja19ub25jZV9fOm51bGw7aWYobm9uY2Upe2F0dHJpYnV0ZXMubm9uY2U9bm9uY2U7fX1PYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7c3R5bGUuc2V0QXR0cmlidXRlKGtleSxhdHRyaWJ1dGVzW2tleV0pO30pO2lmKHR5cGVvZiBvcHRpb25zLmluc2VydD09PSdmdW5jdGlvbicpe29wdGlvbnMuaW5zZXJ0KHN0eWxlKTt9ZWxzZXtjb25zdCB0YXJnZXQ9Z2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0fHwnaGVhZCcpO2lmKCF0YXJnZXQpe3Rocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7fXRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7fXJldHVybiBzdHlsZTt9ZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbmlmKHN0eWxlLnBhcmVudE5vZGU9PT1udWxsKXtyZXR1cm4gZmFsc2U7fXN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO30vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9jb25zdCByZXBsYWNlVGV4dD1mdW5jdGlvbiByZXBsYWNlVGV4dCgpe2NvbnN0IHRleHRTdG9yZT1bXTtyZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCxyZXBsYWNlbWVudCl7dGV4dFN0b3JlW2luZGV4XT1yZXBsYWNlbWVudDtyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTt9O30oKTtmdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLGluZGV4LHJlbW92ZSxvYmope2NvbnN0IGNzcz1yZW1vdmU/Jyc6b2JqLm1lZGlhPydAbWVkaWEgJytvYmoubWVkaWErJyB7JytvYmouY3NzKyd9JzpvYmouY3NzOy8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9cmVwbGFjZVRleHQoaW5kZXgsY3NzKTt9ZWxzZXtjb25zdCBjc3NOb2RlPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7Y29uc3QgY2hpbGROb2Rlcz1zdHlsZS5jaGlsZE5vZGVzO2lmKGNoaWxkTm9kZXNbaW5kZXhdKXtzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7fWlmKGNoaWxkTm9kZXMubGVuZ3RoKXtzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSxjaGlsZE5vZGVzW2luZGV4XSk7fWVsc2V7c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7fX19ZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSxvcHRpb25zLG9iail7bGV0IGNzcz1vYmouY3NzO2NvbnN0IG1lZGlhPW9iai5tZWRpYTtjb25zdCBzb3VyY2VNYXA9b2JqLnNvdXJjZU1hcDtpZihtZWRpYSl7c3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsbWVkaWEpO31lbHNle3N0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTt9aWYoc291cmNlTWFwJiZ0eXBlb2YgYnRvYSE9PSd1bmRlZmluZWQnKXtjc3MrPSdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSsnICovJzt9Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1jc3M7fWVsc2V7d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7fXN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO319bGV0IHNpbmdsZXRvbj1udWxsO2xldCBzaW5nbGV0b25Db3VudGVyPTA7ZnVuY3Rpb24gYWRkU3R5bGUob2JqLG9wdGlvbnMpe2xldCBzdHlsZTtsZXQgdXBkYXRlO2xldCByZW1vdmU7aWYob3B0aW9ucy5zaW5nbGV0b24pe2NvbnN0IHN0eWxlSW5kZXg9c2luZ2xldG9uQ291bnRlcisrO3N0eWxlPXNpbmdsZXRvbnx8KHNpbmdsZXRvbj1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO3VwZGF0ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LGZhbHNlKTtyZW1vdmU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCx0cnVlKTt9ZWxzZXtzdHlsZT1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7dXBkYXRlPWFwcGx5VG9UYWcuYmluZChudWxsLHN0eWxlLG9wdGlvbnMpO3JlbW92ZT1mdW5jdGlvbigpe3JlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7fTt9dXBkYXRlKG9iaik7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iail7aWYobmV3T2JqKXtpZihuZXdPYmouY3NzPT09b2JqLmNzcyYmbmV3T2JqLm1lZGlhPT09b2JqLm1lZGlhJiZuZXdPYmouc291cmNlTWFwPT09b2JqLnNvdXJjZU1hcCl7cmV0dXJuO311cGRhdGUob2JqPW5ld09iaik7fWVsc2V7cmVtb3ZlKCk7fX07fW1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGxpc3Qsb3B0aW9ucyl7b3B0aW9ucz1vcHRpb25zfHx7fTsvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbmlmKCFvcHRpb25zLnNpbmdsZXRvbiYmdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uIT09J2Jvb2xlYW4nKXtvcHRpb25zLnNpbmdsZXRvbj1pc09sZElFKCk7fWxpc3Q9bGlzdHx8W107bGV0IGxhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3Qpe25ld0xpc3Q9bmV3TGlzdHx8W107aWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpIT09J1tvYmplY3QgQXJyYXldJyl7cmV0dXJuO31mb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO31jb25zdCBuZXdMYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKG5ld0xpc3Qsb3B0aW9ucyk7Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7aWYoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXM9PT0wKXtzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO3N0eWxlc0luRG9tLnNwbGljZShpbmRleCwxKTt9fWxhc3RJZGVudGlmaWVycz1uZXdMYXN0SWRlbnRpZmllcnM7fTt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vc2xpY2svYWpheC1sb2FkZXIuZ2lmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4vc2xpY2svZm9udHMvc2xpY2suZW90XCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4vc2xpY2svZm9udHMvc2xpY2sud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fIGZyb20gXCIuL3NsaWNrL2ZvbnRzL3NsaWNrLnR0ZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fIGZyb20gXCIuL3NsaWNrL2ZvbnRzL3NsaWNrLnN2Z1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyogU2xpZGVyICovXFxuLnNsaWNrLXNsaWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2xpY2stbGlzdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uc2xpY2stbGlzdDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uc2xpY2stbGlzdC5kcmFnZ2luZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjdXJzb3I6IGhhbmQ7XFxufVxcblxcbi5zbGljay1zbGlkZXIgLnNsaWNrLXRyYWNrLFxcbi5zbGljay1zbGlkZXIgLnNsaWNrLWxpc3Qge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuXFxuLnNsaWNrLXRyYWNrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4uc2xpY2stdHJhY2s6YmVmb3JlLCAuc2xpY2stdHJhY2s6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuLnNsaWNrLXRyYWNrOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4uc2xpY2stbG9hZGluZyAuc2xpY2stdHJhY2sge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2xpY2stc2xpZGUge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5bZGlyPXJ0bF0gLnNsaWNrLXNsaWRlIHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuLnNsaWNrLXNsaWRlIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnNsaWNrLXNsaWRlLnNsaWNrLWxvYWRpbmcgaW1nIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zbGljay1zbGlkZS5kcmFnZ2luZyBpbWcge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5zbGljay1pbml0aWFsaXplZCAuc2xpY2stc2xpZGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5zbGljay1sb2FkaW5nIC5zbGljay1zbGlkZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5zbGljay12ZXJ0aWNhbCAuc2xpY2stc2xpZGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNsaWNrLWFycm93LnNsaWNrLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBTbGlkZXIgKi9cXG4uc2xpY2stbG9hZGluZyAuc2xpY2stbGlzdCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XFxufVxcblxcbi8qIEljb25zICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInNsaWNrXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdChcXFwic3ZnXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4vKiBBcnJvd3MgKi9cXG4uc2xpY2stcHJldixcXG4uc2xpY2stbmV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDBweDtcXG4gIGZvbnQtc2l6ZTogMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0b3A6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uc2xpY2stcHJldjpob3ZlciwgLnNsaWNrLXByZXY6Zm9jdXMsXFxuLnNsaWNrLW5leHQ6aG92ZXIsXFxuLnNsaWNrLW5leHQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uc2xpY2stcHJldjpob3ZlcjpiZWZvcmUsIC5zbGljay1wcmV2OmZvY3VzOmJlZm9yZSxcXG4uc2xpY2stbmV4dDpob3ZlcjpiZWZvcmUsXFxuLnNsaWNrLW5leHQ6Zm9jdXM6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5zbGljay1wcmV2LnNsaWNrLWRpc2FibGVkOmJlZm9yZSxcXG4uc2xpY2stbmV4dC5zbGljay1kaXNhYmxlZDpiZWZvcmUge1xcbiAgb3BhY2l0eTogMC4yNTtcXG59XFxuLnNsaWNrLXByZXY6YmVmb3JlLFxcbi5zbGljay1uZXh0OmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogXFxcInNsaWNrXFxcIjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC43NTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuLnNsaWNrLXByZXYge1xcbiAgbGVmdDogLTI1cHg7XFxufVxcbltkaXI9cnRsXSAuc2xpY2stcHJldiB7XFxuICBsZWZ0OiBhdXRvO1xcbiAgcmlnaHQ6IC0yNXB4O1xcbn1cXG4uc2xpY2stcHJldjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKGkFxcXCI7XFxufVxcbltkaXI9cnRsXSAuc2xpY2stcHJldjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKGklxcXCI7XFxufVxcblxcbi5zbGljay1uZXh0IHtcXG4gIHJpZ2h0OiAtMjVweDtcXG59XFxuW2Rpcj1ydGxdIC5zbGljay1uZXh0IHtcXG4gIGxlZnQ6IC0yNXB4O1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcbi5zbGljay1uZXh0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4oaSXFxcIjtcXG59XFxuW2Rpcj1ydGxdIC5zbGljay1uZXh0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4oaQXFxcIjtcXG59XFxuXFxuLyogRG90cyAqL1xcbi5zbGljay1kb3R0ZWQuc2xpY2stc2xpZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5zbGljay1kb3RzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTI1cHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5zbGljay1kb3RzIGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zbGljay1kb3RzIGxpIGJ1dHRvbiB7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDBweDtcXG4gIGZvbnQtc2l6ZTogMHB4O1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2xpY2stZG90cyBsaSBidXR0b246aG92ZXIsIC5zbGljay1kb3RzIGxpIGJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uc2xpY2stZG90cyBsaSBidXR0b246aG92ZXI6YmVmb3JlLCAuc2xpY2stZG90cyBsaSBidXR0b246Zm9jdXM6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5zbGljay1kb3RzIGxpIGJ1dHRvbjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGNvbnRlbnQ6IFxcXCLigKJcXFwiO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBmb250LWZhbWlseTogXFxcInNsaWNrXFxcIjtcXG4gIGZvbnQtc2l6ZTogNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAwLjI1O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG4uc2xpY2stZG90cyBsaS5zbGljay1hY3RpdmUgYnV0dG9uOmJlZm9yZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAwLjc1O1xcbn1cXG5cXG4ub3V0ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5vdXRlciAuaW5uZXIge1xcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAub3V0ZXIgLmlubmVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0OHB4KSB7XFxuICAub3V0ZXIgLmlubmVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xcbiAgfVxcbn1cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxucCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFbXBpcmVCb2xkXFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIkVtcGlyZUJvbGRcXFwiKSwgdXJsKFxcXCJodHRwczovL3Rvc2g5OS5naXRodWIuaW8vZ2xvdy8vZm9udHMvRW1waXJlQm9sZC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFbXBpcmVSZWd1bGFyXFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIkVtcGlyZVJlZ3VsYXJcXFwiKSwgdXJsKFxcXCJodHRwczovL3Rvc2g5OS5naXRodWIuaW8vZ2xvdy8vZm9udHMvRW1waXJlUmVndWxhci5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIYXR0b25VbHRyYUxpZ2h0XFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIkhhdHRvblVsdHJhTGlnaHRcXFwiKSwgdXJsKFxcXCJodHRwczovL3Rvc2g5OS5naXRodWIuaW8vZ2xvdy8vZm9udHMvSGF0dG9uVWx0cmFMaWdodC5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIYXR0b25MaWdodFxcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJIYXR0b25MaWdodFxcXCIpLCB1cmwoXFxcImh0dHBzOi8vdG9zaDk5LmdpdGh1Yi5pby9nbG93Ly9mb250cy9IYXR0b25MaWdodC5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIYXR0b25SZWd1bGFyXFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIkhhdHRvblJlZ3VsYXJcXFwiKSwgdXJsKFxcXCJodHRwczovL3Rvc2g5OS5naXRodWIuaW8vZ2xvdy8vZm9udHMvSGF0dG9uUmVndWxhci5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIYXR0b25NZWRpdW1cXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiSGF0dG9uTWVkaXVtXFxcIiksIHVybChcXFwiaHR0cHM6Ly90b3NoOTkuZ2l0aHViLmlvL2dsb3cvL2ZvbnRzL0hhdHRvbk1lZGl1bS5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPZ2dJdGFsaWNcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiT2dnSXRhbGljXFxcIiksIHVybChcXFwiaHR0cHM6Ly90b3NoOTkuZ2l0aHViLmlvL2dsb3cvL2ZvbnRzL09nZ0l0YWxpYy5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPZ2dSZWd1bGFyXFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIk9nZ1JlZ3VsYXJcXFwiKSwgdXJsKFxcXCJodHRwczovL3Rvc2g5OS5naXRodWIuaW8vZ2xvdy8vZm9udHMvT2dnUmVndWxhci5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYW9sUmVndWxhclxcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJTYW9sUmVndWxhclxcXCIpLCB1cmwoXFxcImh0dHBzOi8vdG9zaDk5LmdpdGh1Yi5pby9nbG93Ly9mb250cy9TYW9sUmVndWxhci5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYW9sQm9sZFxcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJTYW9sQm9sZFxcXCIpLCB1cmwoXFxcImh0dHBzOi8vdG9zaDk5LmdpdGh1Yi5pby9nbG93Ly9mb250cy9TYW9sQm9sZC5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYW9sQm9sZEl0YWxpY1xcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJTYW9sQm9sZEl0YWxpY1xcXCIpLCB1cmwoXFxcImh0dHBzOi8vdG9zaDk5LmdpdGh1Yi5pby9nbG93Ly9mb250cy9TYW9sQm9sZEl0YWxpYy5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYW9sUmVndWxhckl0YWxpY1xcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJTYW9sUmVndWxhckl0YWxpY1xcXCIpLCB1cmwoXFxcImh0dHBzOi8vdG9zaDk5LmdpdGh1Yi5pby9nbG93Ly9mb250cy9TYW9sUmVndWxhckl0YWxpYy5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUZWxlZ3JhZlVsdHJhTGlnaHRcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiVGVsZWdyYWZVbHRyYUxpZ2h0XFxcIiksIHVybChcXFwiaHR0cHM6Ly90b3NoOTkuZ2l0aHViLmlvL2dsb3cvL2ZvbnRzL1RlbGVncmFmVWx0cmFMaWdodC5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUZWxlZ3JhZlJlZ3VsYXJcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiVGVsZWdyYWZSZWd1bGFyXFxcIiksIHVybChcXFwiaHR0cHM6Ly90b3NoOTkuZ2l0aHViLmlvL2dsb3cvL2ZvbnRzL1RlbGVncmFmUmVndWxhci5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUZWxlZ3JhZlVsdHJhQm9sZFxcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJUZWxlZ3JhZlVsdHJhQm9sZFxcXCIpLCB1cmwoXFxcImh0dHBzOi8vdG9zaDk5LmdpdGh1Yi5pby9nbG93Ly9mb250cy9UZWxlZ3JhZlVsdHJhQm9sZC5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcbi5zbGljay1zbGlkZSBpbWcuZ3Ige1xcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxufVxcblxcbi5zbGljay1jZW50ZXIgaW1nLmdyIHtcXG4gIGZpbHRlcjogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIHBhZGRpbmc6IDE1cHggMjVweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuKiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9nbG9iYWxzLnNjc3NcIixcIndlYnBhY2s6Ly9zbGljay9zbGljay5zY3NzXCIsXCJ3ZWJwYWNrOi8vc2xpY2svc2xpY2stdGhlbWUuc2Nzc1wiLFwid2VicGFjazovL3BhZ2Uuc2Nzc1wiLFwid2VicGFjazovL2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly9zbGlkZXIuc2Nzc1wiLFwid2VicGFjazovL2J1dHRvbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEIsV0FBQTtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFHQSxxQkFBQTtFQUNBLGlCQUFBO0VBRUEsbUJBQUE7RUFDQSx3Q0FBQTtBREVKOztBQ0FBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBREdKO0FDREk7RUFDSSxhQUFBO0FER1I7QUNBSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FERVI7O0FDQ0E7O0VBRUksdUNBQUE7RUFJQSwrQkFBQTtBREVKOztBQ0NBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FERUo7QUNBSTtFQUVJLFdBQUE7RUFDQSxjQUFBO0FEQ1I7QUNFSTtFQUNJLFdBQUE7QURBUjtBQ0dJO0VBQ0ksa0JBQUE7QUREUjs7QUNJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQVdBLGFBQUE7QURYSjtBQ0NJO0VBQ0ksWUFBQTtBRENSO0FDQ0k7RUFDSSxjQUFBO0FEQ1I7QUNDSTtFQUNJLGFBQUE7QURDUjtBQ0lJO0VBQ0ksb0JBQUE7QURGUjtBQ0tJO0VBQ0ksY0FBQTtBREhSO0FDTUk7RUFDSSxrQkFBQTtBREpSO0FDT0k7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDZC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QUNBLDJHQUFBO0FKOFBKO0FJMVBBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFHQUFBO0FKNFBKO0FJeFBBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVHQUFBO0FKMFBKO0FJdFBBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlHQUFBO0FKd1BKO0FJclBBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1HQUFBO0FKdVBKO0FJblBBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLCtHQUFBO0FKcVBKO0FJalBBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FKbVBKO0FJaFBBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLHVIQUFBO0FKa1BKO0FJOU9BO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlIQUFBO0FKZ1BKO0FJNU9BO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FKOE9KO0FLaFdJO0VBQ0ksdUJBQUE7QUxrV1I7O0FLN1ZJO0VBQ0ksWUFBQTtBTGdXUjs7QU14V0E7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QU4yV0o7O0FBeldBOztFQUVJLFVBQUE7RUFDQSxTQUFBO0FBNFdKOztBQXpXQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQTRXSjs7QUF6V0E7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0FBNFdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyogU2xpZGVyICovXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4uc2xpY2stc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBwYW4teTtcXG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2xpY2stbGlzdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uc2xpY2stbGlzdDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uc2xpY2stbGlzdC5kcmFnZ2luZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjdXJzb3I6IGhhbmQ7XFxufVxcblxcbi5zbGljay1zbGlkZXIgLnNsaWNrLXRyYWNrLFxcbi5zbGljay1zbGlkZXIgLnNsaWNrLWxpc3Qge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuXFxuLnNsaWNrLXRyYWNrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4uc2xpY2stdHJhY2s6YmVmb3JlLCAuc2xpY2stdHJhY2s6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuLnNsaWNrLXRyYWNrOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4uc2xpY2stbG9hZGluZyAuc2xpY2stdHJhY2sge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2xpY2stc2xpZGUge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5bZGlyPXJ0bF0gLnNsaWNrLXNsaWRlIHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuLnNsaWNrLXNsaWRlIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnNsaWNrLXNsaWRlLnNsaWNrLWxvYWRpbmcgaW1nIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zbGljay1zbGlkZS5kcmFnZ2luZyBpbWcge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5zbGljay1pbml0aWFsaXplZCAuc2xpY2stc2xpZGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5zbGljay1sb2FkaW5nIC5zbGljay1zbGlkZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5zbGljay12ZXJ0aWNhbCAuc2xpY2stc2xpZGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNsaWNrLWFycm93LnNsaWNrLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBTbGlkZXIgKi9cXG4uc2xpY2stbG9hZGluZyAuc2xpY2stbGlzdCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmIHVybChcXFwiLi9hamF4LWxvYWRlci5naWZcXFwiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcXG59XFxuXFxuLyogSWNvbnMgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwic2xpY2tcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvc2xpY2suZW90XFxcIik7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9zbGljay5lb3Q/I2llZml4XFxcIikgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLCB1cmwoXFxcIi4vZm9udHMvc2xpY2sud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCB1cmwoXFxcIi4vZm9udHMvc2xpY2sudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLCB1cmwoXFxcIi4vZm9udHMvc2xpY2suc3ZnI3NsaWNrXFxcIikgZm9ybWF0KFxcXCJzdmdcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi8qIEFycm93cyAqL1xcbi5zbGljay1wcmV2LFxcbi5zbGljay1uZXh0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMHB4O1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRvcDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5zbGljay1wcmV2OmhvdmVyLCAuc2xpY2stcHJldjpmb2N1cyxcXG4uc2xpY2stbmV4dDpob3ZlcixcXG4uc2xpY2stbmV4dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5zbGljay1wcmV2OmhvdmVyOmJlZm9yZSwgLnNsaWNrLXByZXY6Zm9jdXM6YmVmb3JlLFxcbi5zbGljay1uZXh0OmhvdmVyOmJlZm9yZSxcXG4uc2xpY2stbmV4dDpmb2N1czpiZWZvcmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLnNsaWNrLXByZXYuc2xpY2stZGlzYWJsZWQ6YmVmb3JlLFxcbi5zbGljay1uZXh0LnNsaWNrLWRpc2FibGVkOmJlZm9yZSB7XFxuICBvcGFjaXR5OiAwLjI1O1xcbn1cXG4uc2xpY2stcHJldjpiZWZvcmUsXFxuLnNsaWNrLW5leHQ6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwic2xpY2tcXFwiO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAwLjc1O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG4uc2xpY2stcHJldiB7XFxuICBsZWZ0OiAtMjVweDtcXG59XFxuW2Rpcj1ydGxdIC5zbGljay1wcmV2IHtcXG4gIGxlZnQ6IGF1dG87XFxuICByaWdodDogLTI1cHg7XFxufVxcbi5zbGljay1wcmV2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4oaQXFxcIjtcXG59XFxuW2Rpcj1ydGxdIC5zbGljay1wcmV2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4oaSXFxcIjtcXG59XFxuXFxuLnNsaWNrLW5leHQge1xcbiAgcmlnaHQ6IC0yNXB4O1xcbn1cXG5bZGlyPXJ0bF0gLnNsaWNrLW5leHQge1xcbiAgbGVmdDogLTI1cHg7XFxuICByaWdodDogYXV0bztcXG59XFxuLnNsaWNrLW5leHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLihpJcXFwiO1xcbn1cXG5bZGlyPXJ0bF0gLnNsaWNrLW5leHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLihpBcXFwiO1xcbn1cXG5cXG4vKiBEb3RzICovXFxuLnNsaWNrLWRvdHRlZC5zbGljay1zbGlkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnNsaWNrLWRvdHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMjVweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnNsaWNrLWRvdHMgbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMHB4O1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zbGljay1kb3RzIGxpIGJ1dHRvbjpob3ZlciwgLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5zbGljay1kb3RzIGxpIGJ1dHRvbjpob3ZlcjpiZWZvcmUsIC5zbGljay1kb3RzIGxpIGJ1dHRvbjpmb2N1czpiZWZvcmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgY29udGVudDogXFxcIuKAolxcXCI7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwic2xpY2tcXFwiO1xcbiAgZm9udC1zaXplOiA2cHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDAuMjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcbi5zbGljay1kb3RzIGxpLnNsaWNrLWFjdGl2ZSBidXR0b246YmVmb3JlIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDAuNzU7XFxufVxcblxcbi5vdXRlciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm91dGVyIC5pbm5lciB7XFxuICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5vdXRlciAuaW5uZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ4cHgpIHtcXG4gIC5vdXRlciAuaW5uZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XFxuICB9XFxufVxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5wIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkVtcGlyZUJvbGRcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiRW1waXJlQm9sZFxcXCIpLCB1cmwoXFxcImh0dHBzOi8vdG9zaDk5LmdpdGh1Yi5pby9nbG93Ly9mb250cy9FbXBpcmVCb2xkLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkVtcGlyZVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiRW1waXJlUmVndWxhclxcXCIpLCB1cmwoXFxcImh0dHBzOi8vdG9zaDk5LmdpdGh1Yi5pby9nbG93Ly9mb250cy9FbXBpcmVSZWd1bGFyLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhhdHRvblVsdHJhTGlnaHRcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiSGF0dG9uVWx0cmFMaWdodFxcXCIpLCB1cmwoXFxcImh0dHBzOi8vdG9zaDk5LmdpdGh1Yi5pby9nbG93Ly9mb250cy9IYXR0b25VbHRyYUxpZ2h0Lm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhhdHRvbkxpZ2h0XFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIkhhdHRvbkxpZ2h0XFxcIiksIHVybChcXFwiaHR0cHM6Ly90b3NoOTkuZ2l0aHViLmlvL2dsb3cvL2ZvbnRzL0hhdHRvbkxpZ2h0Lm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhhdHRvblJlZ3VsYXJcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiSGF0dG9uUmVndWxhclxcXCIpLCB1cmwoXFxcImh0dHBzOi8vdG9zaDk5LmdpdGh1Yi5pby9nbG93Ly9mb250cy9IYXR0b25SZWd1bGFyLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhhdHRvbk1lZGl1bVxcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJIYXR0b25NZWRpdW1cXFwiKSwgdXJsKFxcXCJodHRwczovL3Rvc2g5OS5naXRodWIuaW8vZ2xvdy8vZm9udHMvSGF0dG9uTWVkaXVtLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9nZ0l0YWxpY1xcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJPZ2dJdGFsaWNcXFwiKSwgdXJsKFxcXCJodHRwczovL3Rvc2g5OS5naXRodWIuaW8vZ2xvdy8vZm9udHMvT2dnSXRhbGljLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9nZ1JlZ3VsYXJcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiT2dnUmVndWxhclxcXCIpLCB1cmwoXFxcImh0dHBzOi8vdG9zaDk5LmdpdGh1Yi5pby9nbG93Ly9mb250cy9PZ2dSZWd1bGFyLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhb2xSZWd1bGFyXFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIlNhb2xSZWd1bGFyXFxcIiksIHVybChcXFwiaHR0cHM6Ly90b3NoOTkuZ2l0aHViLmlvL2dsb3cvL2ZvbnRzL1Nhb2xSZWd1bGFyLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhb2xCb2xkXFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIlNhb2xCb2xkXFxcIiksIHVybChcXFwiaHR0cHM6Ly90b3NoOTkuZ2l0aHViLmlvL2dsb3cvL2ZvbnRzL1Nhb2xCb2xkLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhb2xCb2xkSXRhbGljXFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIlNhb2xCb2xkSXRhbGljXFxcIiksIHVybChcXFwiaHR0cHM6Ly90b3NoOTkuZ2l0aHViLmlvL2dsb3cvL2ZvbnRzL1Nhb2xCb2xkSXRhbGljLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhb2xSZWd1bGFySXRhbGljXFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIlNhb2xSZWd1bGFySXRhbGljXFxcIiksIHVybChcXFwiaHR0cHM6Ly90b3NoOTkuZ2l0aHViLmlvL2dsb3cvL2ZvbnRzL1Nhb2xSZWd1bGFySXRhbGljLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlRlbGVncmFmVWx0cmFMaWdodFxcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJUZWxlZ3JhZlVsdHJhTGlnaHRcXFwiKSwgdXJsKFxcXCJodHRwczovL3Rvc2g5OS5naXRodWIuaW8vZ2xvdy8vZm9udHMvVGVsZWdyYWZVbHRyYUxpZ2h0Lm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlRlbGVncmFmUmVndWxhclxcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJUZWxlZ3JhZlJlZ3VsYXJcXFwiKSwgdXJsKFxcXCJodHRwczovL3Rvc2g5OS5naXRodWIuaW8vZ2xvdy8vZm9udHMvVGVsZWdyYWZSZWd1bGFyLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlRlbGVncmFmVWx0cmFCb2xkXFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIlRlbGVncmFmVWx0cmFCb2xkXFxcIiksIHVybChcXFwiaHR0cHM6Ly90b3NoOTkuZ2l0aHViLmlvL2dsb3cvL2ZvbnRzL1RlbGVncmFmVWx0cmFCb2xkLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuLnNsaWNrLXNsaWRlIGltZy5nciB7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG59XFxuXFxuLnNsaWNrLWNlbnRlciBpbWcuZ3Ige1xcbiAgZmlsdGVyOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgcGFkZGluZzogMTVweCAyNXB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVwiLFwiLyogU2xpZGVyICovXFxyXFxuXFxyXFxuLnNsaWNrLXNsaWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbXMtdG91Y2gtYWN0aW9uOiBwYW4teTtcXHJcXG4gICAgdG91Y2gtYWN0aW9uOiBwYW4teTtcXHJcXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLnNsaWNrLWxpc3Qge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuXFxyXFxuICAgICY6Zm9jdXMge1xcclxcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLmRyYWdnaW5nIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIGN1cnNvcjogaGFuZDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uc2xpY2stc2xpZGVyIC5zbGljay10cmFjayxcXHJcXG4uc2xpY2stc2xpZGVyIC5zbGljay1saXN0IHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpY2stdHJhY2sge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuXFxyXFxuICAgICY6YmVmb3JlLFxcclxcbiAgICAmOmFmdGVyIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjphZnRlciB7XFxyXFxuICAgICAgICBjbGVhcjogYm90aDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2xpY2stbG9hZGluZyAmIHtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uc2xpY2stc2xpZGUge1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxcHg7XFxyXFxuICAgIFtkaXI9XFxcInJ0bFxcXCJdICYge1xcclxcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICB9XFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICAmLnNsaWNrLWxvYWRpbmcgaW1nIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG5cXHJcXG4gICAgJi5kcmFnZ2luZyBpbWcge1xcclxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNsaWNrLWluaXRpYWxpemVkICYge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNsaWNrLWxvYWRpbmcgJiB7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNsaWNrLXZlcnRpY2FsICYge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uc2xpY2stYXJyb3cuc2xpY2staGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCIsXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcclxcblxcclxcbi8vIERlZmF1bHQgVmFyaWFibGVzXFxyXFxuXFxyXFxuLy8gU2xpY2sgaWNvbiBlbnRpdHkgY29kZXMgb3V0cHV0cyB0aGUgZm9sbG93aW5nXFxyXFxuLy8gXFxcIlxcXFwyMTkwXFxcIiBvdXRwdXRzIGFzY2lpIGNoYXJhY3RlciBcXFwi4oaQXFxcIlxcclxcbi8vIFxcXCJcXFxcMjE5MlxcXCIgb3V0cHV0cyBhc2NpaSBjaGFyYWN0ZXIgXFxcIuKGklxcXCJcXHJcXG4vLyBcXFwiXFxcXDIwMjJcXFwiIG91dHB1dHMgYXNjaWkgY2hhcmFjdGVyIFxcXCLigKJcXFwiXFxyXFxuXFxyXFxuJHNsaWNrLWZvbnQtcGF0aDogXFxcIi4vZm9udHMvXFxcIiAhZGVmYXVsdDtcXHJcXG4kc2xpY2stZm9udC1mYW1pbHk6IFxcXCJzbGlja1xcXCIgIWRlZmF1bHQ7XFxyXFxuJHNsaWNrLWxvYWRlci1wYXRoOiBcXFwiLi9cXFwiICFkZWZhdWx0O1xcclxcbiRzbGljay1hcnJvdy1jb2xvcjogd2hpdGUgIWRlZmF1bHQ7XFxyXFxuJHNsaWNrLWRvdC1jb2xvcjogYmxhY2sgIWRlZmF1bHQ7XFxyXFxuJHNsaWNrLWRvdC1jb2xvci1hY3RpdmU6ICRzbGljay1kb3QtY29sb3IgIWRlZmF1bHQ7XFxyXFxuJHNsaWNrLXByZXYtY2hhcmFjdGVyOiBcXFwiXFxcXDIxOTBcXFwiICFkZWZhdWx0O1xcclxcbiRzbGljay1uZXh0LWNoYXJhY3RlcjogXFxcIlxcXFwyMTkyXFxcIiAhZGVmYXVsdDtcXHJcXG4kc2xpY2stZG90LWNoYXJhY3RlcjogXFxcIlxcXFwyMDIyXFxcIiAhZGVmYXVsdDtcXHJcXG4kc2xpY2stZG90LXNpemU6IDZweCAhZGVmYXVsdDtcXHJcXG4kc2xpY2stb3BhY2l0eS1kZWZhdWx0OiAwLjc1ICFkZWZhdWx0O1xcclxcbiRzbGljay1vcGFjaXR5LW9uLWhvdmVyOiAxICFkZWZhdWx0O1xcclxcbiRzbGljay1vcGFjaXR5LW5vdC1hY3RpdmU6IDAuMjUgIWRlZmF1bHQ7XFxyXFxuXFxyXFxuQGZ1bmN0aW9uIHNsaWNrLWltYWdlLXVybCgkdXJsKSB7XFxyXFxuICAgIEBpZiBmdW5jdGlvbi1leGlzdHMoaW1hZ2UtdXJsKSB7XFxyXFxuICAgICAgICBAcmV0dXJuIGltYWdlLXVybCgkdXJsKTtcXHJcXG4gICAgfVxcclxcbiAgICBAZWxzZSB7XFxyXFxuICAgICAgICBAcmV0dXJuIHVybCgkc2xpY2stbG9hZGVyLXBhdGggKyAkdXJsKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AZnVuY3Rpb24gc2xpY2stZm9udC11cmwoJHVybCkge1xcclxcbiAgICBAaWYgZnVuY3Rpb24tZXhpc3RzKGZvbnQtdXJsKSB7XFxyXFxuICAgICAgICBAcmV0dXJuIGZvbnQtdXJsKCR1cmwpO1xcclxcbiAgICB9XFxyXFxuICAgIEBlbHNlIHtcXHJcXG4gICAgICAgIEByZXR1cm4gdXJsKCRzbGljay1mb250LXBhdGggKyAkdXJsKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBTbGlkZXIgKi9cXHJcXG5cXHJcXG4uc2xpY2stbGlzdCB7XFxyXFxuICAgIC5zbGljay1sb2FkaW5nICYge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZiBzbGljay1pbWFnZS11cmwoXFxcImFqYXgtbG9hZGVyLmdpZlxcXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qIEljb25zICovXFxyXFxuQGlmICRzbGljay1mb250LWZhbWlseSA9PSBcXFwic2xpY2tcXFwiIHtcXHJcXG4gICAgQGZvbnQtZmFjZSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogXFxcInNsaWNrXFxcIjtcXHJcXG4gICAgICAgIHNyYzogc2xpY2stZm9udC11cmwoXFxcInNsaWNrLmVvdFxcXCIpO1xcclxcbiAgICAgICAgc3JjOiBzbGljay1mb250LXVybChcXFwic2xpY2suZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgc2xpY2stZm9udC11cmwoXFxcInNsaWNrLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSwgc2xpY2stZm9udC11cmwoXFxcInNsaWNrLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSwgc2xpY2stZm9udC11cmwoXFxcInNsaWNrLnN2ZyNzbGlja1xcXCIpIGZvcm1hdChcXFwic3ZnXFxcIik7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qIEFycm93cyAqL1xcclxcblxcclxcbi5zbGljay1wcmV2LFxcclxcbi5zbGljay1uZXh0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XFxyXFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgb3BhY2l0eTogJHNsaWNrLW9wYWNpdHktb24taG92ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJi5zbGljay1kaXNhYmxlZDpiZWZvcmUge1xcclxcbiAgICAgICAgb3BhY2l0eTogJHNsaWNrLW9wYWNpdHktbm90LWFjdGl2ZTtcXHJcXG4gICAgfVxcclxcbiAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJHNsaWNrLWZvbnQtZmFtaWx5O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgICAgICBjb2xvcjogJHNsaWNrLWFycm93LWNvbG9yO1xcclxcbiAgICAgICAgb3BhY2l0eTogJHNsaWNrLW9wYWNpdHktZGVmYXVsdDtcXHJcXG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2xpY2stcHJldiB7XFxyXFxuICAgIGxlZnQ6IC0yNXB4O1xcclxcbiAgICBbZGlyPVxcXCJydGxcXFwiXSAmIHtcXHJcXG4gICAgICAgIGxlZnQ6IGF1dG87XFxyXFxuICAgICAgICByaWdodDogLTI1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgJjpiZWZvcmUge1xcclxcbiAgICAgICAgY29udGVudDogJHNsaWNrLXByZXYtY2hhcmFjdGVyO1xcclxcbiAgICAgICAgW2Rpcj1cXFwicnRsXFxcIl0gJiB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJHNsaWNrLW5leHQtY2hhcmFjdGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zbGljay1uZXh0IHtcXHJcXG4gICAgcmlnaHQ6IC0yNXB4O1xcclxcbiAgICBbZGlyPVxcXCJydGxcXFwiXSAmIHtcXHJcXG4gICAgICAgIGxlZnQ6IC0yNXB4O1xcclxcbiAgICAgICAgcmlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgJjpiZWZvcmUge1xcclxcbiAgICAgICAgY29udGVudDogJHNsaWNrLW5leHQtY2hhcmFjdGVyO1xcclxcbiAgICAgICAgW2Rpcj1cXFwicnRsXFxcIl0gJiB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJHNsaWNrLXByZXYtY2hhcmFjdGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qIERvdHMgKi9cXHJcXG5cXHJcXG4uc2xpY2stZG90dGVkLnNsaWNrLXNsaWRlciB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zbGljay1kb3RzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IC0yNXB4O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBsaSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMCA1cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDBweDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDBweDtcXHJcXG4gICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogJHNsaWNrLW9wYWNpdHktb24taG92ZXI7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgJjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICAgICAgY29udGVudDogJHNsaWNrLWRvdC1jaGFyYWN0ZXI7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkc2xpY2stZm9udC1mYW1pbHk7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHNsaWNrLWRvdC1zaXplO1xcclxcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogJHNsaWNrLWRvdC1jb2xvcjtcXHJcXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogJHNsaWNrLW9wYWNpdHktbm90LWFjdGl2ZTtcXHJcXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgJi5zbGljay1hY3RpdmUgYnV0dG9uOmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICRzbGljay1kb3QtY29sb3ItYWN0aXZlO1xcclxcbiAgICAgICAgICAgIG9wYWNpdHk6ICRzbGljay1vcGFjaXR5LWRlZmF1bHQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCIub3V0ZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgLmlubmVyIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTQ0MHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcclxcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAgIC5vdXRlciB7XFxyXFxuICAgICAgICAuaW5uZXIge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ4cHgpIHtcXHJcXG4gICAgLm91dGVyIHtcXHJcXG4gICAgICAgIC5pbm5lciB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCIsXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiRhc3NldFByZWZpeDogJ2h0dHBzOi8vdG9zaDk5LmdpdGh1Yi5pby9nbG93Lyc7XFxyXFxuXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxucCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRW1waXJlQm9sZCc7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnRW1waXJlQm9sZCcpLCB1cmwoJGFzc2V0UHJlZml4ICsgXFxcIi9mb250cy9FbXBpcmVCb2xkLnR0ZlxcXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRW1waXJlUmVndWxhcic7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnRW1waXJlUmVndWxhcicpLCB1cmwoJGFzc2V0UHJlZml4ICsgXFxcIi9mb250cy9FbXBpcmVSZWd1bGFyLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSGF0dG9uVWx0cmFMaWdodCc7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnSGF0dG9uVWx0cmFMaWdodCcpLCB1cmwoJGFzc2V0UHJlZml4ICsgXFxcIi9mb250cy9IYXR0b25VbHRyYUxpZ2h0Lm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSGF0dG9uTGlnaHQnO1xcclxcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ0hhdHRvbkxpZ2h0JyksIHVybCgkYXNzZXRQcmVmaXggKyBcXFwiL2ZvbnRzL0hhdHRvbkxpZ2h0Lm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSGF0dG9uUmVndWxhcic7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnSGF0dG9uUmVndWxhcicpLCB1cmwoJGFzc2V0UHJlZml4ICsgXFxcIi9mb250cy9IYXR0b25SZWd1bGFyLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSGF0dG9uTWVkaXVtJztcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdIYXR0b25NZWRpdW0nKSwgdXJsKCRhc3NldFByZWZpeCArIFxcXCIvZm9udHMvSGF0dG9uTWVkaXVtLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT2dnSXRhbGljJztcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdPZ2dJdGFsaWMnKSwgdXJsKCRhc3NldFByZWZpeCArIFxcXCIvZm9udHMvT2dnSXRhbGljLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT2dnUmVndWxhcic7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnT2dnUmVndWxhcicpLCB1cmwoJGFzc2V0UHJlZml4ICsgXFxcIi9mb250cy9PZ2dSZWd1bGFyLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2FvbFJlZ3VsYXInO1xcclxcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1Nhb2xSZWd1bGFyJyksIHVybCgkYXNzZXRQcmVmaXggKyBcXFwiL2ZvbnRzL1Nhb2xSZWd1bGFyLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2FvbEJvbGQnO1xcclxcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1Nhb2xCb2xkJyksIHVybCgkYXNzZXRQcmVmaXggKyBcXFwiL2ZvbnRzL1Nhb2xCb2xkLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2FvbEJvbGRJdGFsaWMnO1xcclxcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1Nhb2xCb2xkSXRhbGljJyksIHVybCgkYXNzZXRQcmVmaXggKyBcXFwiL2ZvbnRzL1Nhb2xCb2xkSXRhbGljLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2FvbFJlZ3VsYXJJdGFsaWMnO1xcclxcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1Nhb2xSZWd1bGFySXRhbGljJyksIHVybCgkYXNzZXRQcmVmaXggKyBcXFwiL2ZvbnRzL1Nhb2xSZWd1bGFySXRhbGljLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVGVsZWdyYWZVbHRyYUxpZ2h0JztcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdUZWxlZ3JhZlVsdHJhTGlnaHQnKSwgdXJsKCRhc3NldFByZWZpeCArIFxcXCIvZm9udHMvVGVsZWdyYWZVbHRyYUxpZ2h0Lm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVGVsZWdyYWZSZWd1bGFyJztcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdUZWxlZ3JhZlJlZ3VsYXInKSwgdXJsKCRhc3NldFByZWZpeCArIFxcXCIvZm9udHMvVGVsZWdyYWZSZWd1bGFyLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVGVsZWdyYWZVbHRyYUJvbGQnO1xcclxcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1RlbGVncmFmVWx0cmFCb2xkJyksIHVybCgkYXNzZXRQcmVmaXggKyBcXFwiL2ZvbnRzL1RlbGVncmFmVWx0cmFCb2xkLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCIsXCIuc2xpY2stc2xpZGUge1xcclxcbiAgICBpbWcuZ3Ige1xcclxcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNsaWNrLWNlbnRlciB7XFxyXFxuICAgIGltZy5nciB7XFxyXFxuICAgICAgICBmaWx0ZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XCIsXCJidXR0b24ge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXHJcXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgZT17OTE6ZnVuY3Rpb24oZSl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUscil7aWYoIXIpe3I9e319ZT1lJiZlLl9fZXNNb2R1bGU/ZS5kZWZhdWx0OmU7aWYodHlwZW9mIGUhPT1cInN0cmluZ1wiKXtyZXR1cm4gZX1pZigvXlsnXCJdLipbJ1wiXSQvLnRlc3QoZSkpe2U9ZS5zbGljZSgxLC0xKX1pZihyLmhhc2gpe2UrPXIuaGFzaH1pZigvW1wiJygpIFxcdFxcbl0vLnRlc3QoZSl8fHIubmVlZFF1b3Rlcyl7cmV0dXJuJ1wiJy5jb25jYXQoZS5yZXBsYWNlKC9cIi9nLCdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZyxcIlxcXFxuXCIpLCdcIicpfXJldHVybiBlfX19O3ZhciByPXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18odCl7aWYoclt0XSl7cmV0dXJuIHJbdF0uZXhwb3J0c312YXIgXz1yW3RdPXtleHBvcnRzOnt9fTt2YXIgbj10cnVlO3RyeXtlW3RdKF8sXy5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO249ZmFsc2V9ZmluYWxseXtpZihuKWRlbGV0ZSByW3RdfXJldHVybiBfLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oOTEpfSgpOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvYWpheC1sb2FkZXIuZmI2ZjNjMjMwY2I4NDZlMjUyNDdkZmFhMWRhOTRkOGYuZ2lmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9zbGljay5hNGU5N2Y1YTJhNjRmMGFiMTMyMzIzZmJlYjMzYWUyOS5lb3RcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL3NsaWNrLjdiYTk3OTUzMTg3ZGMyOTA3OTMwMjQ5ZjgyNmNlOTBkLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvc2xpY2suYzk0Zjc2NzFkY2M5OWRjZTQzZTIyYTg5ZjQ4NmY3YzIudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9zbGljay4yOTUxODM3ODZjZDhhMTM4OTg2NTIxZDlmMzg4YTI4Ni53b2ZmXCI7IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
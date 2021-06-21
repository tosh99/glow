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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* Slider */\n.slick-slider {\n  position: relative;\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\n.slick-list:focus {\n  outline: none;\n}\n.slick-list.dragging {\n  cursor: pointer;\n  cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n.slick-track {\n  position: relative;\n  left: 0;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.slick-track:before, .slick-track:after {\n  content: \"\";\n  display: table;\n}\n.slick-track:after {\n  clear: both;\n}\n.slick-loading .slick-track {\n  visibility: hidden;\n}\n\n.slick-slide {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n  display: none;\n}\n[dir=rtl] .slick-slide {\n  float: right;\n}\n.slick-slide img {\n  display: block;\n}\n.slick-slide.slick-loading img {\n  display: none;\n}\n.slick-slide.dragging img {\n  pointer-events: none;\n}\n.slick-initialized .slick-slide {\n  display: block;\n}\n.slick-loading .slick-slide {\n  visibility: hidden;\n}\n.slick-vertical .slick-slide {\n  display: block;\n  height: auto;\n  border: 1px solid transparent;\n}\n\n.slick-arrow.slick-hidden {\n  display: none;\n}\n\n/* Slider */\n.slick-loading .slick-list {\n  background: #fff url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center center no-repeat;\n}\n\n/* Icons */\n@font-face {\n  font-family: \"slick\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Arrows */\n.slick-prev,\n.slick-next {\n  position: absolute;\n  display: block;\n  height: 20px;\n  width: 20px;\n  line-height: 0px;\n  font-size: 0px;\n  cursor: pointer;\n  background: transparent;\n  color: transparent;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding: 0;\n  border: none;\n  outline: none;\n}\n.slick-prev:hover, .slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus {\n  outline: none;\n  background: transparent;\n  color: transparent;\n}\n.slick-prev:hover:before, .slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before {\n  opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before {\n  opacity: 0.25;\n}\n.slick-prev:before,\n.slick-next:before {\n  font-family: \"slick\";\n  font-size: 20px;\n  line-height: 1;\n  color: white;\n  opacity: 0.75;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev {\n  left: -25px;\n}\n[dir=rtl] .slick-prev {\n  left: auto;\n  right: -25px;\n}\n.slick-prev:before {\n  content: \"←\";\n}\n[dir=rtl] .slick-prev:before {\n  content: \"→\";\n}\n\n.slick-next {\n  right: -25px;\n}\n[dir=rtl] .slick-next {\n  left: -25px;\n  right: auto;\n}\n.slick-next:before {\n  content: \"→\";\n}\n[dir=rtl] .slick-next:before {\n  content: \"←\";\n}\n\n/* Dots */\n.slick-dotted.slick-slider {\n  margin-bottom: 30px;\n}\n\n.slick-dots {\n  position: absolute;\n  bottom: -25px;\n  list-style: none;\n  display: block;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n.slick-dots li {\n  position: relative;\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  margin: 0 5px;\n  padding: 0;\n  cursor: pointer;\n}\n.slick-dots li button {\n  border: 0;\n  background: transparent;\n  display: block;\n  height: 20px;\n  width: 20px;\n  outline: none;\n  line-height: 0px;\n  font-size: 0px;\n  color: transparent;\n  padding: 5px;\n  cursor: pointer;\n}\n.slick-dots li button:hover, .slick-dots li button:focus {\n  outline: none;\n}\n.slick-dots li button:hover:before, .slick-dots li button:focus:before {\n  opacity: 1;\n}\n.slick-dots li button:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"•\";\n  width: 20px;\n  height: 20px;\n  font-family: \"slick\";\n  font-size: 6px;\n  line-height: 20px;\n  text-align: center;\n  color: black;\n  opacity: 0.25;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before {\n  color: black;\n  opacity: 0.75;\n}\n\n.outer {\n  width: 100%;\n}\n.outer .inner {\n  max-width: 1440px;\n  margin: auto;\n  position: relative;\n  padding-left: 100px;\n  padding-right: 100px;\n  overflow-x: hidden;\n}\n\n@media only screen and (max-width: 1024px) {\n  .outer .inner {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n}\n@media only screen and (max-width: 648px) {\n  .outer .inner {\n    padding-left: 35px;\n    padding-right: 35px;\n  }\n}\nh1, h2, h3, h4, h5, h6, p {\n  margin: 0;\n}\n\np {\n  font-size: 16px;\n}\n\n@font-face {\n  font-family: \"EmpireBold\";\n  font-display: swap;\n  src: local(\"EmpireBold\"), url(\"/fonts/EmpireBold.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"EmpireRegular\";\n  font-display: swap;\n  src: local(\"EmpireRegular\"), url(\"/fonts/EmpireRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"HattonUltraLight\";\n  font-display: swap;\n  src: local(\"HattonUltraLight\"), url(\"/fonts/HattonUltraLight.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"HattonLight\";\n  font-display: swap;\n  src: local(\"HattonLight\"), url(\"/fonts/HattonLight.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"HattonRegular\";\n  font-display: swap;\n  src: local(\"HattonRegular\"), url(\"/fonts/HattonRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"HattonMedium\";\n  font-display: swap;\n  src: local(\"HattonMedium\"), url(\"/fonts/HattonMedium.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"OggItalic\";\n  font-display: swap;\n  src: local(\"OggItalic\"), url(\"/fonts/OggItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"OggRegular\";\n  font-display: swap;\n  src: local(\"OggRegular\"), url(\"/fonts/OggRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"SaolRegular\";\n  font-display: swap;\n  src: local(\"SaolRegular\"), url(\"/fonts/SaolRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"SaolBold\";\n  font-display: swap;\n  src: local(\"SaolBold\"), url(\"/fonts/SaolBold.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"SaolBoldItalic\";\n  font-display: swap;\n  src: local(\"SaolBoldItalic\"), url(\"/fonts/SaolBoldItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"SaolRegularItalic\";\n  font-display: swap;\n  src: local(\"SaolRegularItalic\"), url(\"/fonts/SaolRegularItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"TelegrafUltraLight\";\n  font-display: swap;\n  src: local(\"TelegrafUltraLight\"), url(\"/fonts/TelegrafUltraLight.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"TelegrafRegular\";\n  font-display: swap;\n  src: local(\"TelegrafRegular\"), url(\"/fonts/TelegrafRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"TelegrafUltraBold\";\n  font-display: swap;\n  src: local(\"TelegrafUltraBold\"), url(\"/fonts/TelegrafUltraBold.otf\") format(\"opentype\");\n}\n.slick-slide img.gr {\n  filter: grayscale(100%);\n}\n\n.slick-center img.gr {\n  filter: none;\n}\n\nbutton {\n  border: 2px solid #000000;\n  border-radius: 100px;\n  padding: 15px 25px;\n  background: transparent;\n  cursor: pointer;\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}", "",{"version":3,"sources":["webpack://globals.scss","webpack://slick/slick.scss","webpack://slick/slick-theme.scss","webpack://page.scss","webpack://fonts.scss","webpack://slider.scss","webpack://buttons.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n/* Slider */\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap\");\n.slick-slider {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\n.slick-list:focus {\n  outline: none;\n}\n.slick-list.dragging {\n  cursor: pointer;\n  cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n.slick-track {\n  position: relative;\n  left: 0;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.slick-track:before, .slick-track:after {\n  content: \"\";\n  display: table;\n}\n.slick-track:after {\n  clear: both;\n}\n.slick-loading .slick-track {\n  visibility: hidden;\n}\n\n.slick-slide {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n  display: none;\n}\n[dir=rtl] .slick-slide {\n  float: right;\n}\n.slick-slide img {\n  display: block;\n}\n.slick-slide.slick-loading img {\n  display: none;\n}\n.slick-slide.dragging img {\n  pointer-events: none;\n}\n.slick-initialized .slick-slide {\n  display: block;\n}\n.slick-loading .slick-slide {\n  visibility: hidden;\n}\n.slick-vertical .slick-slide {\n  display: block;\n  height: auto;\n  border: 1px solid transparent;\n}\n\n.slick-arrow.slick-hidden {\n  display: none;\n}\n\n/* Slider */\n.slick-loading .slick-list {\n  background: #fff url(\"./ajax-loader.gif\") center center no-repeat;\n}\n\n/* Icons */\n@font-face {\n  font-family: \"slick\";\n  src: url(\"./fonts/slick.eot\");\n  src: url(\"./fonts/slick.eot?#iefix\") format(\"embedded-opentype\"), url(\"./fonts/slick.woff\") format(\"woff\"), url(\"./fonts/slick.ttf\") format(\"truetype\"), url(\"./fonts/slick.svg#slick\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Arrows */\n.slick-prev,\n.slick-next {\n  position: absolute;\n  display: block;\n  height: 20px;\n  width: 20px;\n  line-height: 0px;\n  font-size: 0px;\n  cursor: pointer;\n  background: transparent;\n  color: transparent;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n  -ms-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding: 0;\n  border: none;\n  outline: none;\n}\n.slick-prev:hover, .slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus {\n  outline: none;\n  background: transparent;\n  color: transparent;\n}\n.slick-prev:hover:before, .slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before {\n  opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before {\n  opacity: 0.25;\n}\n.slick-prev:before,\n.slick-next:before {\n  font-family: \"slick\";\n  font-size: 20px;\n  line-height: 1;\n  color: white;\n  opacity: 0.75;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev {\n  left: -25px;\n}\n[dir=rtl] .slick-prev {\n  left: auto;\n  right: -25px;\n}\n.slick-prev:before {\n  content: \"←\";\n}\n[dir=rtl] .slick-prev:before {\n  content: \"→\";\n}\n\n.slick-next {\n  right: -25px;\n}\n[dir=rtl] .slick-next {\n  left: -25px;\n  right: auto;\n}\n.slick-next:before {\n  content: \"→\";\n}\n[dir=rtl] .slick-next:before {\n  content: \"←\";\n}\n\n/* Dots */\n.slick-dotted.slick-slider {\n  margin-bottom: 30px;\n}\n\n.slick-dots {\n  position: absolute;\n  bottom: -25px;\n  list-style: none;\n  display: block;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n.slick-dots li {\n  position: relative;\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  margin: 0 5px;\n  padding: 0;\n  cursor: pointer;\n}\n.slick-dots li button {\n  border: 0;\n  background: transparent;\n  display: block;\n  height: 20px;\n  width: 20px;\n  outline: none;\n  line-height: 0px;\n  font-size: 0px;\n  color: transparent;\n  padding: 5px;\n  cursor: pointer;\n}\n.slick-dots li button:hover, .slick-dots li button:focus {\n  outline: none;\n}\n.slick-dots li button:hover:before, .slick-dots li button:focus:before {\n  opacity: 1;\n}\n.slick-dots li button:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"•\";\n  width: 20px;\n  height: 20px;\n  font-family: \"slick\";\n  font-size: 6px;\n  line-height: 20px;\n  text-align: center;\n  color: black;\n  opacity: 0.25;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before {\n  color: black;\n  opacity: 0.75;\n}\n\n.outer {\n  width: 100%;\n}\n.outer .inner {\n  max-width: 1440px;\n  margin: auto;\n  position: relative;\n  padding-left: 100px;\n  padding-right: 100px;\n  overflow-x: hidden;\n}\n\n@media only screen and (max-width: 1024px) {\n  .outer .inner {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n}\n@media only screen and (max-width: 648px) {\n  .outer .inner {\n    padding-left: 35px;\n    padding-right: 35px;\n  }\n}\nh1, h2, h3, h4, h5, h6, p {\n  margin: 0;\n}\n\np {\n  font-size: 16px;\n}\n\n@font-face {\n  font-family: \"EmpireBold\";\n  font-display: swap;\n  src: local(\"EmpireBold\"), url(\"/fonts/EmpireBold.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"EmpireRegular\";\n  font-display: swap;\n  src: local(\"EmpireRegular\"), url(\"/fonts/EmpireRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"HattonUltraLight\";\n  font-display: swap;\n  src: local(\"HattonUltraLight\"), url(\"/fonts/HattonUltraLight.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"HattonLight\";\n  font-display: swap;\n  src: local(\"HattonLight\"), url(\"/fonts/HattonLight.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"HattonRegular\";\n  font-display: swap;\n  src: local(\"HattonRegular\"), url(\"/fonts/HattonRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"HattonMedium\";\n  font-display: swap;\n  src: local(\"HattonMedium\"), url(\"/fonts/HattonMedium.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"OggItalic\";\n  font-display: swap;\n  src: local(\"OggItalic\"), url(\"/fonts/OggItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"OggRegular\";\n  font-display: swap;\n  src: local(\"OggRegular\"), url(\"/fonts/OggRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"SaolRegular\";\n  font-display: swap;\n  src: local(\"SaolRegular\"), url(\"/fonts/SaolRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"SaolBold\";\n  font-display: swap;\n  src: local(\"SaolBold\"), url(\"/fonts/SaolBold.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"SaolBoldItalic\";\n  font-display: swap;\n  src: local(\"SaolBoldItalic\"), url(\"/fonts/SaolBoldItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"SaolRegularItalic\";\n  font-display: swap;\n  src: local(\"SaolRegularItalic\"), url(\"/fonts/SaolRegularItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"TelegrafUltraLight\";\n  font-display: swap;\n  src: local(\"TelegrafUltraLight\"), url(\"/fonts/TelegrafUltraLight.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"TelegrafRegular\";\n  font-display: swap;\n  src: local(\"TelegrafRegular\"), url(\"/fonts/TelegrafRegular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"TelegrafUltraBold\";\n  font-display: swap;\n  src: local(\"TelegrafUltraBold\"), url(\"/fonts/TelegrafUltraBold.otf\") format(\"opentype\");\n}\n.slick-slide img.gr {\n  filter: grayscale(100%);\n}\n\n.slick-center img.gr {\n  filter: none;\n}\n\nbutton {\n  border: 2px solid #000000;\n  border-radius: 100px;\n  padding: 15px 25px;\n  background: transparent;\n  cursor: pointer;\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  box-sizing: border-box;\n}","/* Slider */\r\n\r\n.slick-slider {\r\n    position: relative;\r\n    display: block;\r\n    box-sizing: border-box;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    -ms-touch-action: pan-y;\r\n    touch-action: pan-y;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n.slick-list {\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    &:focus {\r\n        outline: none;\r\n    }\r\n\r\n    &.dragging {\r\n        cursor: pointer;\r\n        cursor: hand;\r\n    }\r\n}\r\n.slick-slider .slick-track,\r\n.slick-slider .slick-list {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    -moz-transform: translate3d(0, 0, 0);\r\n    -ms-transform: translate3d(0, 0, 0);\r\n    -o-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n}\r\n\r\n.slick-track {\r\n    position: relative;\r\n    left: 0;\r\n    top: 0;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n    &:before,\r\n    &:after {\r\n        content: \"\";\r\n        display: table;\r\n    }\r\n\r\n    &:after {\r\n        clear: both;\r\n    }\r\n\r\n    .slick-loading & {\r\n        visibility: hidden;\r\n    }\r\n}\r\n.slick-slide {\r\n    float: left;\r\n    height: 100%;\r\n    min-height: 1px;\r\n    [dir=\"rtl\"] & {\r\n        float: right;\r\n    }\r\n    img {\r\n        display: block;\r\n    }\r\n    &.slick-loading img {\r\n        display: none;\r\n    }\r\n\r\n    display: none;\r\n\r\n    &.dragging img {\r\n        pointer-events: none;\r\n    }\r\n\r\n    .slick-initialized & {\r\n        display: block;\r\n    }\r\n\r\n    .slick-loading & {\r\n        visibility: hidden;\r\n    }\r\n\r\n    .slick-vertical & {\r\n        display: block;\r\n        height: auto;\r\n        border: 1px solid transparent;\r\n    }\r\n}\r\n.slick-arrow.slick-hidden {\r\n    display: none;\r\n}\r\n","@charset \"UTF-8\";\r\n\r\n// Default Variables\r\n\r\n// Slick icon entity codes outputs the following\r\n// \"\\2190\" outputs ascii character \"←\"\r\n// \"\\2192\" outputs ascii character \"→\"\r\n// \"\\2022\" outputs ascii character \"•\"\r\n\r\n$slick-font-path: \"./fonts/\" !default;\r\n$slick-font-family: \"slick\" !default;\r\n$slick-loader-path: \"./\" !default;\r\n$slick-arrow-color: white !default;\r\n$slick-dot-color: black !default;\r\n$slick-dot-color-active: $slick-dot-color !default;\r\n$slick-prev-character: \"\\2190\" !default;\r\n$slick-next-character: \"\\2192\" !default;\r\n$slick-dot-character: \"\\2022\" !default;\r\n$slick-dot-size: 6px !default;\r\n$slick-opacity-default: 0.75 !default;\r\n$slick-opacity-on-hover: 1 !default;\r\n$slick-opacity-not-active: 0.25 !default;\r\n\r\n@function slick-image-url($url) {\r\n    @if function-exists(image-url) {\r\n        @return image-url($url);\r\n    }\r\n    @else {\r\n        @return url($slick-loader-path + $url);\r\n    }\r\n}\r\n\r\n@function slick-font-url($url) {\r\n    @if function-exists(font-url) {\r\n        @return font-url($url);\r\n    }\r\n    @else {\r\n        @return url($slick-font-path + $url);\r\n    }\r\n}\r\n\r\n/* Slider */\r\n\r\n.slick-list {\r\n    .slick-loading & {\r\n        background: #fff slick-image-url(\"ajax-loader.gif\") center center no-repeat;\r\n    }\r\n}\r\n\r\n/* Icons */\r\n@if $slick-font-family == \"slick\" {\r\n    @font-face {\r\n        font-family: \"slick\";\r\n        src: slick-font-url(\"slick.eot\");\r\n        src: slick-font-url(\"slick.eot?#iefix\") format(\"embedded-opentype\"), slick-font-url(\"slick.woff\") format(\"woff\"), slick-font-url(\"slick.ttf\") format(\"truetype\"), slick-font-url(\"slick.svg#slick\") format(\"svg\");\r\n        font-weight: normal;\r\n        font-style: normal;\r\n    }\r\n}\r\n\r\n/* Arrows */\r\n\r\n.slick-prev,\r\n.slick-next {\r\n    position: absolute;\r\n    display: block;\r\n    height: 20px;\r\n    width: 20px;\r\n    line-height: 0px;\r\n    font-size: 0px;\r\n    cursor: pointer;\r\n    background: transparent;\r\n    color: transparent;\r\n    top: 50%;\r\n    -webkit-transform: translate(0, -50%);\r\n    -ms-transform: translate(0, -50%);\r\n    transform: translate(0, -50%);\r\n    padding: 0;\r\n    border: none;\r\n    outline: none;\r\n    &:hover, &:focus {\r\n        outline: none;\r\n        background: transparent;\r\n        color: transparent;\r\n        &:before {\r\n            opacity: $slick-opacity-on-hover;\r\n        }\r\n    }\r\n    &.slick-disabled:before {\r\n        opacity: $slick-opacity-not-active;\r\n    }\r\n    &:before {\r\n        font-family: $slick-font-family;\r\n        font-size: 20px;\r\n        line-height: 1;\r\n        color: $slick-arrow-color;\r\n        opacity: $slick-opacity-default;\r\n        -webkit-font-smoothing: antialiased;\r\n        -moz-osx-font-smoothing: grayscale;\r\n    }\r\n}\r\n\r\n.slick-prev {\r\n    left: -25px;\r\n    [dir=\"rtl\"] & {\r\n        left: auto;\r\n        right: -25px;\r\n    }\r\n    &:before {\r\n        content: $slick-prev-character;\r\n        [dir=\"rtl\"] & {\r\n            content: $slick-next-character;\r\n        }\r\n    }\r\n}\r\n\r\n.slick-next {\r\n    right: -25px;\r\n    [dir=\"rtl\"] & {\r\n        left: -25px;\r\n        right: auto;\r\n    }\r\n    &:before {\r\n        content: $slick-next-character;\r\n        [dir=\"rtl\"] & {\r\n            content: $slick-prev-character;\r\n        }\r\n    }\r\n}\r\n\r\n/* Dots */\r\n\r\n.slick-dotted.slick-slider {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.slick-dots {\r\n    position: absolute;\r\n    bottom: -25px;\r\n    list-style: none;\r\n    display: block;\r\n    text-align: center;\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n    li {\r\n        position: relative;\r\n        display: inline-block;\r\n        height: 20px;\r\n        width: 20px;\r\n        margin: 0 5px;\r\n        padding: 0;\r\n        cursor: pointer;\r\n        button {\r\n            border: 0;\r\n            background: transparent;\r\n            display: block;\r\n            height: 20px;\r\n            width: 20px;\r\n            outline: none;\r\n            line-height: 0px;\r\n            font-size: 0px;\r\n            color: transparent;\r\n            padding: 5px;\r\n            cursor: pointer;\r\n            &:hover, &:focus {\r\n                outline: none;\r\n                &:before {\r\n                    opacity: $slick-opacity-on-hover;\r\n                }\r\n            }\r\n            &:before {\r\n                position: absolute;\r\n                top: 0;\r\n                left: 0;\r\n                content: $slick-dot-character;\r\n                width: 20px;\r\n                height: 20px;\r\n                font-family: $slick-font-family;\r\n                font-size: $slick-dot-size;\r\n                line-height: 20px;\r\n                text-align: center;\r\n                color: $slick-dot-color;\r\n                opacity: $slick-opacity-not-active;\r\n                -webkit-font-smoothing: antialiased;\r\n                -moz-osx-font-smoothing: grayscale;\r\n            }\r\n        }\r\n        &.slick-active button:before {\r\n            color: $slick-dot-color-active;\r\n            opacity: $slick-opacity-default;\r\n        }\r\n    }\r\n}\r\n",".outer {\r\n    width: 100%;\r\n\r\n    .inner {\r\n        max-width: 1440px;\r\n        margin: auto;\r\n        position: relative;\r\n        padding-left: 100px;\r\n        padding-right: 100px;\r\n        overflow-x: hidden;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n    .outer {\r\n        .inner {\r\n            padding-left: 50px;\r\n            padding-right: 50px;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 648px) {\r\n    .outer {\r\n        .inner {\r\n            padding-left: 35px;\r\n            padding-right: 35px;\r\n        }\r\n    }\r\n}","@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');\r\n\r\nh1, h2, h3, h4, h5, h6, p {\r\n    margin: 0;\r\n}\r\n\r\n\r\np {\r\n    font-size: 16px;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 1024px) {\r\n\r\n}\r\n\r\n@font-face {\r\n    font-family: 'EmpireBold';\r\n    font-display: swap;\r\n    src: local('EmpireBold'), url(\"/fonts/EmpireBold.ttf\") format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'EmpireRegular';\r\n    font-display: swap;\r\n    src: local('EmpireRegular'), url(\"/fonts/EmpireRegular.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'HattonUltraLight';\r\n    font-display: swap;\r\n    src: local('HattonUltraLight'), url(\"/fonts/HattonUltraLight.otf\") format('opentype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'HattonLight';\r\n    font-display: swap;\r\n    src: local('HattonLight'), url(\"/fonts/HattonLight.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'HattonRegular';\r\n    font-display: swap;\r\n    src: local('HattonRegular'), url(\"/fonts/HattonRegular.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'HattonMedium';\r\n    font-display: swap;\r\n    src: local('HattonMedium'), url(\"/fonts/HattonMedium.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'OggItalic';\r\n    font-display: swap;\r\n    src: local('OggItalic'), url(\"/fonts/OggItalic.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'OggRegular';\r\n    font-display: swap;\r\n    src: local('OggRegular'), url(\"/fonts/OggRegular.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'SaolRegular';\r\n    font-display: swap;\r\n    src: local('SaolRegular'), url(\"/fonts/SaolRegular.otf\") format('opentype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'SaolBold';\r\n    font-display: swap;\r\n    src: local('SaolBold'), url(\"/fonts/SaolBold.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'SaolBoldItalic';\r\n    font-display: swap;\r\n    src: local('SaolBoldItalic'), url(\"/fonts/SaolBoldItalic.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'SaolRegularItalic';\r\n    font-display: swap;\r\n    src: local('SaolRegularItalic'), url(\"/fonts/SaolRegularItalic.otf\") format('opentype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'TelegrafUltraLight';\r\n    font-display: swap;\r\n    src: local('TelegrafUltraLight'), url(\"/fonts/TelegrafUltraLight.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'TelegrafRegular';\r\n    font-display: swap;\r\n    src: local('TelegrafRegular'), url(\"/fonts/TelegrafRegular.otf\") format('opentype');\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'TelegrafUltraBold';\r\n    font-display: swap;\r\n    src: local('TelegrafUltraBold'), url(\"/fonts/TelegrafUltraBold.otf\") format('opentype');\r\n}\r\n\r\n\r\n",".slick-slide {\r\n    img.gr {\r\n        filter: grayscale(100%);\r\n    }\r\n}\r\n\r\n.slick-center {\r\n    img.gr {\r\n        filter: none;\r\n    }\r\n}","button {\r\n    border: 2px solid #000000;\r\n    border-radius: 100px;\r\n    padding: 15px 25px;\r\n    background: transparent;\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5zY3NzP2NjYjUiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5zY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvc2xpY2svYWpheC1sb2FkZXIuZ2lmIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvc2xpY2svZm9udHMvc2xpY2suZW90Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvc2xpY2svZm9udHMvc2xpY2suc3ZnIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvc2xpY2svZm9udHMvc2xpY2sudHRmIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvc2xpY2svZm9udHMvc2xpY2sud29mZiIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtZGV2LXJ1bnRpbWUuanMiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBRUEsU0FBU0EsS0FBVCxPQUF5QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDdkMsc0JBQU8sOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7S0FGUUYsSztBQUlULCtEQUFlQSxLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxtREFBNEI7QUFDbkQ7QUFDQTs7Ozs7Ozs7Ozs7QUNOQSxVQUFVLG1CQUFPLENBQUMsb05BQXdHO0FBQzFILDBCQUEwQixtQkFBTyxDQUFDLHl4QkFBeVk7O0FBRTNhOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkLHlCQUF5QixVQUFVO0FBQ25DLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUEsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSx5eEJBQXlZO0FBQy9ZO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMseXhCQUF5WTs7QUFFbmE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7O0FDM0RhLGlDQUFpQyxTQUFTLDJCQUEyQiw4QkFBOEI7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsZUFBZSxHQUFHLHFDQUFxQyxjQUFjLGlDQUFpQyxzQ0FBc0MsK0NBQStDO0FBQ3ZQLDhFQUE4RSxJQUFJO0FBQ2xGO0FBQ0EsOENBQThDLFNBQVM7QUFDdkQsbUJBQW1CLDBCQUEwQix1QkFBdUIsR0FBRyxxQkFBcUIsMENBQTBDLGNBQWMsWUFBWSxxQkFBcUIsS0FBSywyQ0FBMkMsU0FBUyxRQUFRLGVBQWUsb0NBQW9DLG9CQUFvQixxQkFBcUIsWUFBWSxjQUFjLEtBQUssbUJBQW1CLG1EQUFtRCw4QkFBOEIseUNBQXlDLHVCQUF1Qiw2Q0FBNkMsV0FBVyw2Q0FBNkMsZUFBZSxnQ0FBZ0MsaUNBQWlDLEtBQUssa0JBQWtCLGlFQUFpRSxHQUFHLDhCQUE4QixvQkFBb0IscUNBQXFDLDRDQUE0Qyx3Q0FBd0MsMENBQTBDO0FBQzEvQixLQUFzQyxDQUFDLHNCQUFpQixDQUFDLENBQUksQ0FBQyxVQUFVLHlCQUF5Qiw4Q0FBOEMseUNBQXlDLEVBQUUsdUNBQXVDLHVCQUF1QixLQUFLLCtDQUErQyxZQUFZLDRIQUE0SCwyQkFBMkIsY0FBYyxtQ0FBbUM7QUFDaGdCLDRCQUE0QixjQUFjLHFDQUFxQyxvRUFBb0UsbUJBQW1CLDJDQUEyQyw2QkFBNkIsK0NBQStDLEdBQUcscURBQXFELHFEQUFxRCxZQUFZLFVBQVU7QUFDaGEsOENBQThDLGlEQUFpRCxLQUFLLDJDQUEyQyxrQ0FBa0Msc0JBQXNCLHNDQUFzQyxzQkFBc0IsK0NBQStDLEtBQUssOEJBQThCLHVDQUF1QyxnQkFBZ0Isc0JBQXNCLDhCQUE4QixVQUFVLG1DQUFtQyxLQUFLLGdDQUFnQyx5Q0FBeUMsbURBQW1ELDhFQUE4RTtBQUM1ckIsOENBQThDLDhCQUE4QixLQUFLLHdCQUF3QixxQ0FBcUMsa0RBQWtELG1CQUFtQix1QkFBdUIsK0JBQStCLFVBQVUsV0FBVyxXQUFXLHNCQUFzQixvQ0FBb0MseURBQXlELDZEQUE2RCw2REFBNkQsS0FBSyxrQ0FBa0MsMkNBQTJDLGtCQUFrQiw2QkFBNkIsWUFBWSxvQ0FBb0MsV0FBVyxxRkFBcUYsUUFBUSxvQkFBb0IsS0FBSyxhQUFhLHNDQUFzQyxvQkFBb0I7QUFDLzRCO0FBQ0EsNkRBQTZELDZCQUE2QixjQUFjLCtDQUErQyxnQ0FBZ0Msb0JBQW9CLCtEQUErRCxRQUFRLFlBQVkseUJBQXlCLEtBQUssb0NBQW9DLDZDQUE2QyxpQ0FBaUMsdURBQXVELFlBQVkseUJBQXlCLEtBQUssb0NBQW9DLDZDQUE2QyxzQ0FBc0MsNkJBQTZCLDhCQUE4QjtBQUNqc0Isb0Q7Ozs7Ozs7Ozs7O0FDaEJBLDBCQUEwQixhQUFhLE9BQU8sZ0JBQWdCLHNCQUFzQixTQUFTLCtCQUErQiw0QkFBNEIsa0NBQWtDLFNBQVMsK0JBQStCLGNBQWMsR0FBRyxTQUFTLFlBQVksb0JBQW9CLHdCQUF3QixnQkFBZ0IsU0FBUyxNQUFNLFlBQVksY0FBYyxLQUFLLGlCQUFpQixZQUFZLFlBQVksWUFBWSxXQUFXLEtBQUssc0JBQXNCLGVBQWUsU0FBUyxNQUFNLFVBQVUsT0FBTyxLQUFLLHdDQUF3QyxZQUFZLFVBQVUscUNBQXFDLGVBQWUsV0FBVyxPQUFPLFNBQVMsZ0NBQWdDLG1CQUFtQixnQ0FBZ0MsZ0VBQWdFLEVBQUUsMkNBQTJDLHFCQUFxQixzQkFBc0IsNERBQTRELDhDQUE4QyxjQUFjLG1CQUFtQixnQ0FBZ0MsU0FBUyxnQ0FBZ0MsU0FBUyxvQkFBb0IsWUFBWSxZQUFZLFdBQVcsSUFBSSxzQ0FBc0MsUUFBUSxRQUFRLGlCQUFpQixpQkFBaUIsdUJBQXVCLFNBQVMsS0FBSyxnQ0FBZ0MsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTl5QztBQUMrRjtBQUNPO0FBQ2xDO0FBQ0E7QUFDQztBQUNEO0FBQ0E7QUFDcEUsOEJBQThCLHlGQUEyQjtBQUN6RCw4SEFBOEg7QUFDOUgseUNBQXlDLDRGQUErQixDQUFDLDJEQUE2QjtBQUN0Ryx5Q0FBeUMsNEZBQStCLENBQUMsMkRBQTZCO0FBQ3RHLHlDQUF5Qyw0RkFBK0IsQ0FBQyw0REFBNkI7QUFDdEcseUNBQXlDLDRGQUErQixDQUFDLDJEQUE2QjtBQUN0Ryx5Q0FBeUMsNEZBQStCLENBQUMsMkRBQTZCO0FBQ3RHO0FBQ0EsNkRBQTZELCtCQUErQix1QkFBdUIsbUJBQW1CLG1DQUFtQyxtQ0FBbUMsZ0NBQWdDLDhCQUE4QiwwQkFBMEIsc0JBQXNCLHdCQUF3Qiw2Q0FBNkMsR0FBRyxpQkFBaUIsdUJBQXVCLHFCQUFxQixtQkFBbUIsY0FBYyxlQUFlLEdBQUcscUJBQXFCLGtCQUFrQixHQUFHLHdCQUF3QixvQkFBb0IsaUJBQWlCLEdBQUcsNERBQTRELDRDQUE0QyxvQ0FBb0MsR0FBRyxrQkFBa0IsdUJBQXVCLFlBQVksV0FBVyxtQkFBbUIsc0JBQXNCLHVCQUF1QixHQUFHLDJDQUEyQyxrQkFBa0IsbUJBQW1CLEdBQUcsc0JBQXNCLGdCQUFnQixHQUFHLCtCQUErQix1QkFBdUIsR0FBRyxrQkFBa0IsZ0JBQWdCLGlCQUFpQixvQkFBb0Isa0JBQWtCLEdBQUcsMEJBQTBCLGlCQUFpQixHQUFHLG9CQUFvQixtQkFBbUIsR0FBRyxrQ0FBa0Msa0JBQWtCLEdBQUcsNkJBQTZCLHlCQUF5QixHQUFHLG1DQUFtQyxtQkFBbUIsR0FBRywrQkFBK0IsdUJBQXVCLEdBQUcsZ0NBQWdDLG1CQUFtQixpQkFBaUIsa0NBQWtDLEdBQUcsK0JBQStCLGtCQUFrQixHQUFHLDhDQUE4Qyw2RkFBNkYsR0FBRyw2QkFBNkIsMkJBQTJCLHlEQUF5RCxnU0FBZ1Msd0JBQXdCLHVCQUF1QixHQUFHLDJDQUEyQyx1QkFBdUIsbUJBQW1CLGlCQUFpQixnQkFBZ0IscUJBQXFCLG1CQUFtQixvQkFBb0IsNEJBQTRCLHVCQUF1QixhQUFhLDBDQUEwQyxrQ0FBa0MsZUFBZSxpQkFBaUIsa0JBQWtCLEdBQUcsZ0ZBQWdGLGtCQUFrQiw0QkFBNEIsdUJBQXVCLEdBQUcsNEdBQTRHLGVBQWUsR0FBRyx5RUFBeUUsa0JBQWtCLEdBQUcsMkNBQTJDLDJCQUEyQixvQkFBb0IsbUJBQW1CLGlCQUFpQixrQkFBa0Isd0NBQXdDLHVDQUF1QyxHQUFHLGlCQUFpQixnQkFBZ0IsR0FBRyx5QkFBeUIsZUFBZSxpQkFBaUIsR0FBRyxzQkFBc0IsbUJBQW1CLEdBQUcsZ0NBQWdDLG1CQUFtQixHQUFHLGlCQUFpQixpQkFBaUIsR0FBRyx5QkFBeUIsZ0JBQWdCLGdCQUFnQixHQUFHLHNCQUFzQixtQkFBbUIsR0FBRyxnQ0FBZ0MsbUJBQW1CLEdBQUcsNENBQTRDLHdCQUF3QixHQUFHLGlCQUFpQix1QkFBdUIsa0JBQWtCLHFCQUFxQixtQkFBbUIsdUJBQXVCLGVBQWUsY0FBYyxnQkFBZ0IsR0FBRyxrQkFBa0IsdUJBQXVCLDBCQUEwQixpQkFBaUIsZ0JBQWdCLGtCQUFrQixlQUFlLG9CQUFvQixHQUFHLHlCQUF5QixjQUFjLDRCQUE0QixtQkFBbUIsaUJBQWlCLGdCQUFnQixrQkFBa0IscUJBQXFCLG1CQUFtQix1QkFBdUIsaUJBQWlCLG9CQUFvQixHQUFHLDREQUE0RCxrQkFBa0IsR0FBRywwRUFBMEUsZUFBZSxHQUFHLGdDQUFnQyx1QkFBdUIsV0FBVyxZQUFZLG1CQUFtQixnQkFBZ0IsaUJBQWlCLDJCQUEyQixtQkFBbUIsc0JBQXNCLHVCQUF1QixpQkFBaUIsa0JBQWtCLHdDQUF3Qyx1Q0FBdUMsR0FBRyw2Q0FBNkMsaUJBQWlCLGtCQUFrQixHQUFHLFlBQVksZ0JBQWdCLEdBQUcsaUJBQWlCLHNCQUFzQixpQkFBaUIsdUJBQXVCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLEdBQUcsZ0RBQWdELG1CQUFtQix5QkFBeUIsMEJBQTBCLEtBQUssR0FBRyw2Q0FBNkMsbUJBQW1CLHlCQUF5QiwwQkFBMEIsS0FBSyxHQUFHLDZCQUE2QixjQUFjLEdBQUcsT0FBTyxvQkFBb0IsR0FBRyxnQkFBZ0IsZ0NBQWdDLHVCQUF1QixvRkFBb0YsR0FBRyxjQUFjLG1DQUFtQyx1QkFBdUIsMEZBQTBGLEdBQUcsY0FBYyxzQ0FBc0MsdUJBQXVCLGdHQUFnRyxHQUFHLGNBQWMsaUNBQWlDLHVCQUF1QixzRkFBc0YsR0FBRyxjQUFjLG1DQUFtQyx1QkFBdUIsMEZBQTBGLEdBQUcsY0FBYyxrQ0FBa0MsdUJBQXVCLHdGQUF3RixHQUFHLGNBQWMsK0JBQStCLHVCQUF1QixrRkFBa0YsR0FBRyxjQUFjLGdDQUFnQyx1QkFBdUIsb0ZBQW9GLEdBQUcsY0FBYyxpQ0FBaUMsdUJBQXVCLHNGQUFzRixHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixnRkFBZ0YsR0FBRyxjQUFjLG9DQUFvQyx1QkFBdUIsNEZBQTRGLEdBQUcsY0FBYyx1Q0FBdUMsdUJBQXVCLGtHQUFrRyxHQUFHLGNBQWMsd0NBQXdDLHVCQUF1QixvR0FBb0csR0FBRyxjQUFjLHFDQUFxQyx1QkFBdUIsOEZBQThGLEdBQUcsY0FBYyx1Q0FBdUMsdUJBQXVCLGtHQUFrRyxHQUFHLHVCQUF1Qiw0QkFBNEIsR0FBRywwQkFBMEIsaUJBQWlCLEdBQUcsWUFBWSw4QkFBOEIseUJBQXlCLHVCQUF1Qiw0QkFBNEIsb0JBQW9CLEdBQUcsaUJBQWlCLGVBQWUsY0FBYyxHQUFHLE9BQU8sbUJBQW1CLDBCQUEwQixHQUFHLE9BQU8sbUNBQW1DLG1DQUFtQyxHQUFHLE9BQU8sa1BBQWtQLFdBQVcsS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxXQUFXLE9BQU8sV0FBVyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLFdBQVcsTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFFBQVEsVUFBVSxXQUFXLFdBQVcsTUFBTSxRQUFRLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLFdBQVcsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxRQUFRLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFFBQVEsV0FBVyxLQUFLLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxZQUFZLFlBQVksWUFBWSxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxRQUFRLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFN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REFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCxrQ0FBa0M7QUFDbEM7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBEOztBQUUxRDtBQUNBOztBQUVBO0FBQ0Esd0RBQXdEO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7O0FBR2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEhBQTBIO0FBQzFIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsMkRBQTJELFNBQVM7QUFDcEUseUJBQXlCLFNBQVM7QUFDbEM7QUFDQSxhQUFhLFNBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0REFBNEQ7QUFDNUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkNBQTJDOztBQUUzQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLGNBQWM7QUFDZCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2xyQ2E7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsRUFBRSx1SkFBc0U7QUFDeEUiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5zY3NzJ1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fYXBwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHAuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMl0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzNdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVs0XSEuL2dsb2JhbHMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMl0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzNdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVs0XSEuL2dsb2JhbHMuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzJdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVszXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbNF0hLi9nbG9iYWxzLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7Y29uc3QgaXNPbGRJRT1mdW5jdGlvbiBpc09sZElFKCl7bGV0IG1lbW87cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCl7aWYodHlwZW9mIG1lbW89PT0ndW5kZWZpbmVkJyl7Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncbi8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbi8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbi8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5tZW1vPUJvb2xlYW4od2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2IpO31yZXR1cm4gbWVtbzt9O30oKTtjb25zdCBnZXRUYXJnZXQ9ZnVuY3Rpb24gZ2V0VGFyZ2V0KCl7Y29uc3QgbWVtbz17fTtyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KXtpZih0eXBlb2YgbWVtb1t0YXJnZXRdPT09J3VuZGVmaW5lZCcpe2xldCBzdHlsZVRhcmdldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbmlmKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCYmc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpe3RyeXsvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbnN0eWxlVGFyZ2V0PXN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO31jYXRjaChlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuc3R5bGVUYXJnZXQ9bnVsbDt9fW1lbW9bdGFyZ2V0XT1zdHlsZVRhcmdldDt9cmV0dXJuIG1lbW9bdGFyZ2V0XTt9O30oKTtjb25zdCBzdHlsZXNJbkRvbT1bXTtmdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKXtsZXQgcmVzdWx0PS0xO2ZvcihsZXQgaT0wO2k8c3R5bGVzSW5Eb20ubGVuZ3RoO2krKyl7aWYoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllcj09PWlkZW50aWZpZXIpe3Jlc3VsdD1pO2JyZWFrO319cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyl7Y29uc3QgaWRDb3VudE1hcD17fTtjb25zdCBpZGVudGlmaWVycz1bXTtmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoO2krKyl7Y29uc3QgaXRlbT1saXN0W2ldO2NvbnN0IGlkPW9wdGlvbnMuYmFzZT9pdGVtWzBdK29wdGlvbnMuYmFzZTppdGVtWzBdO2NvbnN0IGNvdW50PWlkQ291bnRNYXBbaWRdfHwwO2NvbnN0IGlkZW50aWZpZXI9aWQrJyAnK2NvdW50LnRvU3RyaW5nKCk7aWRDb3VudE1hcFtpZF09Y291bnQrMTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtjb25zdCBvYmo9e2NzczppdGVtWzFdLG1lZGlhOml0ZW1bMl0sc291cmNlTWFwOml0ZW1bM119O2lmKGluZGV4IT09LTEpe3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTt9ZWxzZXtzdHlsZXNJbkRvbS5wdXNoKHtpZGVudGlmaWVyOmlkZW50aWZpZXIsdXBkYXRlcjphZGRTdHlsZShvYmosb3B0aW9ucykscmVmZXJlbmNlczoxfSk7fWlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7fXJldHVybiBpZGVudGlmaWVyczt9ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpe2NvbnN0IHN0eWxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7Y29uc3QgYXR0cmlidXRlcz1vcHRpb25zLmF0dHJpYnV0ZXN8fHt9O2lmKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlPT09J3VuZGVmaW5lZCcpe2NvbnN0IG5vbmNlPS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudHlwZW9mIF9fd2VicGFja19ub25jZV9fIT09J3VuZGVmaW5lZCc/X193ZWJwYWNrX25vbmNlX186bnVsbDtpZihub25jZSl7YXR0cmlidXRlcy5ub25jZT1ub25jZTt9fU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZXNba2V5XSk7fSk7aWYodHlwZW9mIG9wdGlvbnMuaW5zZXJ0PT09J2Z1bmN0aW9uJyl7b3B0aW9ucy5pbnNlcnQoc3R5bGUpO31lbHNle2NvbnN0IHRhcmdldD1nZXRUYXJnZXQob3B0aW9ucy5pbnNlcnR8fCdoZWFkJyk7aWYoIXRhcmdldCl7dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt9dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTt9cmV0dXJuIHN0eWxlO31mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpey8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuaWYoc3R5bGUucGFyZW50Tm9kZT09PW51bGwpe3JldHVybiBmYWxzZTt9c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7fS8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL2NvbnN0IHJlcGxhY2VUZXh0PWZ1bmN0aW9uIHJlcGxhY2VUZXh0KCl7Y29uc3QgdGV4dFN0b3JlPVtdO3JldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LHJlcGxhY2VtZW50KXt0ZXh0U3RvcmVbaW5kZXhdPXJlcGxhY2VtZW50O3JldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO307fSgpO2Z1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsaW5kZXgscmVtb3ZlLG9iail7Y29uc3QgY3NzPXJlbW92ZT8nJzpvYmoubWVkaWE/J0BtZWRpYSAnK29iai5tZWRpYSsnIHsnK29iai5jc3MrJ30nOm9iai5jc3M7Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1yZXBsYWNlVGV4dChpbmRleCxjc3MpO31lbHNle2NvbnN0IGNzc05vZGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtjb25zdCBjaGlsZE5vZGVzPXN0eWxlLmNoaWxkTm9kZXM7aWYoY2hpbGROb2Rlc1tpbmRleF0pe3N0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTt9aWYoY2hpbGROb2Rlcy5sZW5ndGgpe3N0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLGNoaWxkTm9kZXNbaW5kZXhdKTt9ZWxzZXtzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTt9fX1mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLG9wdGlvbnMsb2JqKXtsZXQgY3NzPW9iai5jc3M7Y29uc3QgbWVkaWE9b2JqLm1lZGlhO2NvbnN0IHNvdXJjZU1hcD1vYmouc291cmNlTWFwO2lmKG1lZGlhKXtzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJyxtZWRpYSk7fWVsc2V7c3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO31pZihzb3VyY2VNYXAmJnR5cGVvZiBidG9hIT09J3VuZGVmaW5lZCcpe2Nzcys9J1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJytidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpKycgKi8nO30vLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PWNzczt9ZWxzZXt3aGlsZShzdHlsZS5maXJzdENoaWxkKXtzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTt9c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7fX1sZXQgc2luZ2xldG9uPW51bGw7bGV0IHNpbmdsZXRvbkNvdW50ZXI9MDtmdW5jdGlvbiBhZGRTdHlsZShvYmosb3B0aW9ucyl7bGV0IHN0eWxlO2xldCB1cGRhdGU7bGV0IHJlbW92ZTtpZihvcHRpb25zLnNpbmdsZXRvbil7Y29uc3Qgc3R5bGVJbmRleD1zaW5nbGV0b25Db3VudGVyKys7c3R5bGU9c2luZ2xldG9ufHwoc2luZ2xldG9uPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7dXBkYXRlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsZmFsc2UpO3JlbW92ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LHRydWUpO31lbHNle3N0eWxlPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTt1cGRhdGU9YXBwbHlUb1RhZy5iaW5kKG51bGwsc3R5bGUsb3B0aW9ucyk7cmVtb3ZlPWZ1bmN0aW9uKCl7cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTt9O311cGRhdGUob2JqKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKXtpZihuZXdPYmope2lmKG5ld09iai5jc3M9PT1vYmouY3NzJiZuZXdPYmoubWVkaWE9PT1vYmoubWVkaWEmJm5ld09iai5zb3VyY2VNYXA9PT1vYmouc291cmNlTWFwKXtyZXR1cm47fXVwZGF0ZShvYmo9bmV3T2JqKTt9ZWxzZXtyZW1vdmUoKTt9fTt9bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24obGlzdCxvcHRpb25zKXtvcHRpb25zPW9wdGlvbnN8fHt9Oy8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuaWYoIW9wdGlvbnMuc2luZ2xldG9uJiZ0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24hPT0nYm9vbGVhbicpe29wdGlvbnMuc2luZ2xldG9uPWlzT2xkSUUoKTt9bGlzdD1saXN0fHxbXTtsZXQgbGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpO3JldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCl7bmV3TGlzdD1uZXdMaXN0fHxbXTtpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkhPT0nW29iamVjdCBBcnJheV0nKXtyZXR1cm47fWZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07fWNvbnN0IG5ld0xhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obmV3TGlzdCxvcHRpb25zKTtmb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtpZihzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcz09PTApe3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7c3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LDEpO319bGFzdElkZW50aWZpZXJzPW5ld0xhc3RJZGVudGlmaWVyczt9O307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9zbGljay9hamF4LWxvYWRlci5naWZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi9zbGljay9mb250cy9zbGljay5lb3RcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi9zbGljay9mb250cy9zbGljay53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gZnJvbSBcIi4vc2xpY2svZm9udHMvc2xpY2sudHRmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gZnJvbSBcIi4vc2xpY2svZm9udHMvc2xpY2suc3ZnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiBTbGlkZXIgKi9cXG4uc2xpY2stc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBwYW4teTtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zbGljay1saXN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5zbGljay1saXN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5zbGljay1saXN0LmRyYWdnaW5nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGN1cnNvcjogaGFuZDtcXG59XFxuXFxuLnNsaWNrLXNsaWRlciAuc2xpY2stdHJhY2ssXFxuLnNsaWNrLXNsaWRlciAuc2xpY2stbGlzdCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG5cXG4uc2xpY2stdHJhY2sge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5zbGljay10cmFjazpiZWZvcmUsIC5zbGljay10cmFjazphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uc2xpY2stdHJhY2s6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5zbGljay1sb2FkaW5nIC5zbGljay10cmFjayB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zbGljay1zbGlkZSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDFweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbltkaXI9cnRsXSAuc2xpY2stc2xpZGUge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uc2xpY2stc2xpZGUgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uc2xpY2stc2xpZGUuc2xpY2stbG9hZGluZyBpbWcge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNsaWNrLXNsaWRlLmRyYWdnaW5nIGltZyB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnNsaWNrLWluaXRpYWxpemVkIC5zbGljay1zbGlkZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnNsaWNrLWxvYWRpbmcgLnNsaWNrLXNsaWRlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLnNsaWNrLXZlcnRpY2FsIC5zbGljay1zbGlkZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2xpY2stYXJyb3cuc2xpY2staGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIFNsaWRlciAqL1xcbi5zbGljay1sb2FkaW5nIC5zbGljay1saXN0IHtcXG4gIGJhY2tncm91bmQ6ICNmZmYgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcXG59XFxuXFxuLyogSWNvbnMgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwic2xpY2tcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KFxcXCJzdmdcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi8qIEFycm93cyAqL1xcbi5zbGljay1wcmV2LFxcbi5zbGljay1uZXh0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMHB4O1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRvcDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5zbGljay1wcmV2OmhvdmVyLCAuc2xpY2stcHJldjpmb2N1cyxcXG4uc2xpY2stbmV4dDpob3ZlcixcXG4uc2xpY2stbmV4dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5zbGljay1wcmV2OmhvdmVyOmJlZm9yZSwgLnNsaWNrLXByZXY6Zm9jdXM6YmVmb3JlLFxcbi5zbGljay1uZXh0OmhvdmVyOmJlZm9yZSxcXG4uc2xpY2stbmV4dDpmb2N1czpiZWZvcmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLnNsaWNrLXByZXYuc2xpY2stZGlzYWJsZWQ6YmVmb3JlLFxcbi5zbGljay1uZXh0LnNsaWNrLWRpc2FibGVkOmJlZm9yZSB7XFxuICBvcGFjaXR5OiAwLjI1O1xcbn1cXG4uc2xpY2stcHJldjpiZWZvcmUsXFxuLnNsaWNrLW5leHQ6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwic2xpY2tcXFwiO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAwLjc1O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG4uc2xpY2stcHJldiB7XFxuICBsZWZ0OiAtMjVweDtcXG59XFxuW2Rpcj1ydGxdIC5zbGljay1wcmV2IHtcXG4gIGxlZnQ6IGF1dG87XFxuICByaWdodDogLTI1cHg7XFxufVxcbi5zbGljay1wcmV2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4oaQXFxcIjtcXG59XFxuW2Rpcj1ydGxdIC5zbGljay1wcmV2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4oaSXFxcIjtcXG59XFxuXFxuLnNsaWNrLW5leHQge1xcbiAgcmlnaHQ6IC0yNXB4O1xcbn1cXG5bZGlyPXJ0bF0gLnNsaWNrLW5leHQge1xcbiAgbGVmdDogLTI1cHg7XFxuICByaWdodDogYXV0bztcXG59XFxuLnNsaWNrLW5leHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLihpJcXFwiO1xcbn1cXG5bZGlyPXJ0bF0gLnNsaWNrLW5leHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLihpBcXFwiO1xcbn1cXG5cXG4vKiBEb3RzICovXFxuLnNsaWNrLWRvdHRlZC5zbGljay1zbGlkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnNsaWNrLWRvdHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMjVweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnNsaWNrLWRvdHMgbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMHB4O1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zbGljay1kb3RzIGxpIGJ1dHRvbjpob3ZlciwgLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5zbGljay1kb3RzIGxpIGJ1dHRvbjpob3ZlcjpiZWZvcmUsIC5zbGljay1kb3RzIGxpIGJ1dHRvbjpmb2N1czpiZWZvcmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgY29udGVudDogXFxcIuKAolxcXCI7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwic2xpY2tcXFwiO1xcbiAgZm9udC1zaXplOiA2cHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDAuMjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcbi5zbGljay1kb3RzIGxpLnNsaWNrLWFjdGl2ZSBidXR0b246YmVmb3JlIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDAuNzU7XFxufVxcblxcbi5vdXRlciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm91dGVyIC5pbm5lciB7XFxuICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5vdXRlciAuaW5uZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ4cHgpIHtcXG4gIC5vdXRlciAuaW5uZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XFxuICB9XFxufVxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5wIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkVtcGlyZUJvbGRcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiRW1waXJlQm9sZFxcXCIpLCB1cmwoXFxcIi9mb250cy9FbXBpcmVCb2xkLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkVtcGlyZVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiRW1waXJlUmVndWxhclxcXCIpLCB1cmwoXFxcIi9mb250cy9FbXBpcmVSZWd1bGFyLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhhdHRvblVsdHJhTGlnaHRcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiSGF0dG9uVWx0cmFMaWdodFxcXCIpLCB1cmwoXFxcIi9mb250cy9IYXR0b25VbHRyYUxpZ2h0Lm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhhdHRvbkxpZ2h0XFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIkhhdHRvbkxpZ2h0XFxcIiksIHVybChcXFwiL2ZvbnRzL0hhdHRvbkxpZ2h0Lm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhhdHRvblJlZ3VsYXJcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiSGF0dG9uUmVndWxhclxcXCIpLCB1cmwoXFxcIi9mb250cy9IYXR0b25SZWd1bGFyLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhhdHRvbk1lZGl1bVxcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJIYXR0b25NZWRpdW1cXFwiKSwgdXJsKFxcXCIvZm9udHMvSGF0dG9uTWVkaXVtLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9nZ0l0YWxpY1xcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJPZ2dJdGFsaWNcXFwiKSwgdXJsKFxcXCIvZm9udHMvT2dnSXRhbGljLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9nZ1JlZ3VsYXJcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiT2dnUmVndWxhclxcXCIpLCB1cmwoXFxcIi9mb250cy9PZ2dSZWd1bGFyLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhb2xSZWd1bGFyXFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIlNhb2xSZWd1bGFyXFxcIiksIHVybChcXFwiL2ZvbnRzL1Nhb2xSZWd1bGFyLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhb2xCb2xkXFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIlNhb2xCb2xkXFxcIiksIHVybChcXFwiL2ZvbnRzL1Nhb2xCb2xkLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhb2xCb2xkSXRhbGljXFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIlNhb2xCb2xkSXRhbGljXFxcIiksIHVybChcXFwiL2ZvbnRzL1Nhb2xCb2xkSXRhbGljLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhb2xSZWd1bGFySXRhbGljXFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIlNhb2xSZWd1bGFySXRhbGljXFxcIiksIHVybChcXFwiL2ZvbnRzL1Nhb2xSZWd1bGFySXRhbGljLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlRlbGVncmFmVWx0cmFMaWdodFxcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJUZWxlZ3JhZlVsdHJhTGlnaHRcXFwiKSwgdXJsKFxcXCIvZm9udHMvVGVsZWdyYWZVbHRyYUxpZ2h0Lm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlRlbGVncmFmUmVndWxhclxcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJUZWxlZ3JhZlJlZ3VsYXJcXFwiKSwgdXJsKFxcXCIvZm9udHMvVGVsZWdyYWZSZWd1bGFyLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlRlbGVncmFmVWx0cmFCb2xkXFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIlRlbGVncmFmVWx0cmFCb2xkXFxcIiksIHVybChcXFwiL2ZvbnRzL1RlbGVncmFmVWx0cmFCb2xkLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuLnNsaWNrLXNsaWRlIGltZy5nciB7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG59XFxuXFxuLnNsaWNrLWNlbnRlciBpbWcuZ3Ige1xcbiAgZmlsdGVyOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgcGFkZGluZzogMTVweCAyNXB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2dsb2JhbHMuc2Nzc1wiLFwid2VicGFjazovL3NsaWNrL3NsaWNrLnNjc3NcIixcIndlYnBhY2s6Ly9zbGljay9zbGljay10aGVtZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vcGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vZm9udHMuc2Nzc1wiLFwid2VicGFjazovL3NsaWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vYnV0dG9ucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQixXQUFBO0FBRUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUdBLHFCQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtFQUNBLHdDQUFBO0FERUo7O0FDQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxV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QUFBO0FMZ1dSOztBTXhXQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBTjJXSjs7QUF6V0E7O0VBRUksVUFBQTtFQUNBLFNBQUE7QUE0V0o7O0FBeldBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBNFdKOztBQXpXQTtFQUNJLDhCQUFBO1VBQUEsc0JBQUE7QUE0V0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiBTbGlkZXIgKi9cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbi5zbGljay1zbGlkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xcbiAgdG91Y2gtYWN0aW9uOiBwYW4teTtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zbGljay1saXN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5zbGljay1saXN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5zbGljay1saXN0LmRyYWdnaW5nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGN1cnNvcjogaGFuZDtcXG59XFxuXFxuLnNsaWNrLXNsaWRlciAuc2xpY2stdHJhY2ssXFxuLnNsaWNrLXNsaWRlciAuc2xpY2stbGlzdCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG5cXG4uc2xpY2stdHJhY2sge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5zbGljay10cmFjazpiZWZvcmUsIC5zbGljay10cmFjazphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uc2xpY2stdHJhY2s6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5zbGljay1sb2FkaW5nIC5zbGljay10cmFjayB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zbGljay1zbGlkZSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDFweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbltkaXI9cnRsXSAuc2xpY2stc2xpZGUge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uc2xpY2stc2xpZGUgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uc2xpY2stc2xpZGUuc2xpY2stbG9hZGluZyBpbWcge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNsaWNrLXNsaWRlLmRyYWdnaW5nIGltZyB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnNsaWNrLWluaXRpYWxpemVkIC5zbGljay1zbGlkZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnNsaWNrLWxvYWRpbmcgLnNsaWNrLXNsaWRlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLnNsaWNrLXZlcnRpY2FsIC5zbGljay1zbGlkZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2xpY2stYXJyb3cuc2xpY2staGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIFNsaWRlciAqL1xcbi5zbGljay1sb2FkaW5nIC5zbGljay1saXN0IHtcXG4gIGJhY2tncm91bmQ6ICNmZmYgdXJsKFxcXCIuL2FqYXgtbG9hZGVyLmdpZlxcXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xcbn1cXG5cXG4vKiBJY29ucyAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJzbGlja1xcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9zbGljay5lb3RcXFwiKTtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL3NsaWNrLmVvdD8jaWVmaXhcXFwiKSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksIHVybChcXFwiLi9mb250cy9zbGljay53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksIHVybChcXFwiLi9mb250cy9zbGljay50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksIHVybChcXFwiLi9mb250cy9zbGljay5zdmcjc2xpY2tcXFwiKSBmb3JtYXQoXFxcInN2Z1xcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuLyogQXJyb3dzICovXFxuLnNsaWNrLXByZXYsXFxuLnNsaWNrLW5leHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAwcHg7XFxuICBmb250LXNpemU6IDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdG9wOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnNsaWNrLXByZXY6aG92ZXIsIC5zbGljay1wcmV2OmZvY3VzLFxcbi5zbGljay1uZXh0OmhvdmVyLFxcbi5zbGljay1uZXh0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnNsaWNrLXByZXY6aG92ZXI6YmVmb3JlLCAuc2xpY2stcHJldjpmb2N1czpiZWZvcmUsXFxuLnNsaWNrLW5leHQ6aG92ZXI6YmVmb3JlLFxcbi5zbGljay1uZXh0OmZvY3VzOmJlZm9yZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uc2xpY2stcHJldi5zbGljay1kaXNhYmxlZDpiZWZvcmUsXFxuLnNsaWNrLW5leHQuc2xpY2stZGlzYWJsZWQ6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDAuMjU7XFxufVxcbi5zbGljay1wcmV2OmJlZm9yZSxcXG4uc2xpY2stbmV4dDpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJzbGlja1xcXCI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDAuNzU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbi5zbGljay1wcmV2IHtcXG4gIGxlZnQ6IC0yNXB4O1xcbn1cXG5bZGlyPXJ0bF0gLnNsaWNrLXByZXYge1xcbiAgbGVmdDogYXV0bztcXG4gIHJpZ2h0OiAtMjVweDtcXG59XFxuLnNsaWNrLXByZXY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLihpBcXFwiO1xcbn1cXG5bZGlyPXJ0bF0gLnNsaWNrLXByZXY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLihpJcXFwiO1xcbn1cXG5cXG4uc2xpY2stbmV4dCB7XFxuICByaWdodDogLTI1cHg7XFxufVxcbltkaXI9cnRsXSAuc2xpY2stbmV4dCB7XFxuICBsZWZ0OiAtMjVweDtcXG4gIHJpZ2h0OiBhdXRvO1xcbn1cXG4uc2xpY2stbmV4dDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKGklxcXCI7XFxufVxcbltkaXI9cnRsXSAuc2xpY2stbmV4dDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKGkFxcXCI7XFxufVxcblxcbi8qIERvdHMgKi9cXG4uc2xpY2stZG90dGVkLnNsaWNrLXNsaWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uc2xpY2stZG90cyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0yNXB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uc2xpY2stZG90cyBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIG1hcmdpbjogMCA1cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2xpY2stZG90cyBsaSBidXR0b24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAwcHg7XFxuICBmb250LXNpemU6IDBweDtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmhvdmVyLCAuc2xpY2stZG90cyBsaSBidXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmhvdmVyOmJlZm9yZSwgLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmZvY3VzOmJlZm9yZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uc2xpY2stZG90cyBsaSBidXR0b246YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBjb250ZW50OiBcXFwi4oCiXFxcIjtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJzbGlja1xcXCI7XFxuICBmb250LXNpemU6IDZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgb3BhY2l0eTogMC4yNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuLnNsaWNrLWRvdHMgbGkuc2xpY2stYWN0aXZlIGJ1dHRvbjpiZWZvcmUge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgb3BhY2l0eTogMC43NTtcXG59XFxuXFxuLm91dGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ub3V0ZXIgLmlubmVyIHtcXG4gIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLm91dGVyIC5pbm5lciB7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDhweCkge1xcbiAgLm91dGVyIC5pbm5lciB7XFxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcXG4gIH1cXG59XFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRW1waXJlQm9sZFxcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJFbXBpcmVCb2xkXFxcIiksIHVybChcXFwiL2ZvbnRzL0VtcGlyZUJvbGQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRW1waXJlUmVndWxhclxcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJFbXBpcmVSZWd1bGFyXFxcIiksIHVybChcXFwiL2ZvbnRzL0VtcGlyZVJlZ3VsYXIub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGF0dG9uVWx0cmFMaWdodFxcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJIYXR0b25VbHRyYUxpZ2h0XFxcIiksIHVybChcXFwiL2ZvbnRzL0hhdHRvblVsdHJhTGlnaHQub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGF0dG9uTGlnaHRcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiSGF0dG9uTGlnaHRcXFwiKSwgdXJsKFxcXCIvZm9udHMvSGF0dG9uTGlnaHQub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGF0dG9uUmVndWxhclxcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJIYXR0b25SZWd1bGFyXFxcIiksIHVybChcXFwiL2ZvbnRzL0hhdHRvblJlZ3VsYXIub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGF0dG9uTWVkaXVtXFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIkhhdHRvbk1lZGl1bVxcXCIpLCB1cmwoXFxcIi9mb250cy9IYXR0b25NZWRpdW0ub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT2dnSXRhbGljXFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIk9nZ0l0YWxpY1xcXCIpLCB1cmwoXFxcIi9mb250cy9PZ2dJdGFsaWMub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT2dnUmVndWxhclxcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJPZ2dSZWd1bGFyXFxcIiksIHVybChcXFwiL2ZvbnRzL09nZ1JlZ3VsYXIub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2FvbFJlZ3VsYXJcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiU2FvbFJlZ3VsYXJcXFwiKSwgdXJsKFxcXCIvZm9udHMvU2FvbFJlZ3VsYXIub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2FvbEJvbGRcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiU2FvbEJvbGRcXFwiKSwgdXJsKFxcXCIvZm9udHMvU2FvbEJvbGQub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2FvbEJvbGRJdGFsaWNcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiU2FvbEJvbGRJdGFsaWNcXFwiKSwgdXJsKFxcXCIvZm9udHMvU2FvbEJvbGRJdGFsaWMub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2FvbFJlZ3VsYXJJdGFsaWNcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiU2FvbFJlZ3VsYXJJdGFsaWNcXFwiKSwgdXJsKFxcXCIvZm9udHMvU2FvbFJlZ3VsYXJJdGFsaWMub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGVsZWdyYWZVbHRyYUxpZ2h0XFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIlRlbGVncmFmVWx0cmFMaWdodFxcXCIpLCB1cmwoXFxcIi9mb250cy9UZWxlZ3JhZlVsdHJhTGlnaHQub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGVsZWdyYWZSZWd1bGFyXFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIlRlbGVncmFmUmVndWxhclxcXCIpLCB1cmwoXFxcIi9mb250cy9UZWxlZ3JhZlJlZ3VsYXIub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGVsZWdyYWZVbHRyYUJvbGRcXFwiO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiVGVsZWdyYWZVbHRyYUJvbGRcXFwiKSwgdXJsKFxcXCIvZm9udHMvVGVsZWdyYWZVbHRyYUJvbGQub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG4uc2xpY2stc2xpZGUgaW1nLmdyIHtcXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbn1cXG5cXG4uc2xpY2stY2VudGVyIGltZy5nciB7XFxuICBmaWx0ZXI6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XCIsXCIvKiBTbGlkZXIgKi9cXHJcXG5cXHJcXG4uc2xpY2stc2xpZGVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcclxcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xcclxcbiAgICB0b3VjaC1hY3Rpb246IHBhbi15O1xcclxcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uc2xpY2stbGlzdCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG4gICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYuZHJhZ2dpbmcge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgY3Vyc29yOiBoYW5kO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5zbGljay1zbGlkZXIgLnNsaWNrLXRyYWNrLFxcclxcbi5zbGljay1zbGlkZXIgLnNsaWNrLWxpc3Qge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxyXFxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5zbGljay10cmFjayB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG5cXHJcXG4gICAgJjpiZWZvcmUsXFxyXFxuICAgICY6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmFmdGVyIHtcXHJcXG4gICAgICAgIGNsZWFyOiBib3RoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbGljay1sb2FkaW5nICYge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5zbGljay1zbGlkZSB7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDFweDtcXHJcXG4gICAgW2Rpcj1cXFwicnRsXFxcIl0gJiB7XFxyXFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIH1cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICAgICYuc2xpY2stbG9hZGluZyBpbWcge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcblxcclxcbiAgICAmLmRyYWdnaW5nIGltZyB7XFxyXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2xpY2staW5pdGlhbGl6ZWQgJiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2xpY2stbG9hZGluZyAmIHtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2xpY2stdmVydGljYWwgJiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5zbGljay1hcnJvdy5zbGljay1oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIixcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxyXFxuXFxyXFxuLy8gRGVmYXVsdCBWYXJpYWJsZXNcXHJcXG5cXHJcXG4vLyBTbGljayBpY29uIGVudGl0eSBjb2RlcyBvdXRwdXRzIHRoZSBmb2xsb3dpbmdcXHJcXG4vLyBcXFwiXFxcXDIxOTBcXFwiIG91dHB1dHMgYXNjaWkgY2hhcmFjdGVyIFxcXCLihpBcXFwiXFxyXFxuLy8gXFxcIlxcXFwyMTkyXFxcIiBvdXRwdXRzIGFzY2lpIGNoYXJhY3RlciBcXFwi4oaSXFxcIlxcclxcbi8vIFxcXCJcXFxcMjAyMlxcXCIgb3V0cHV0cyBhc2NpaSBjaGFyYWN0ZXIgXFxcIuKAolxcXCJcXHJcXG5cXHJcXG4kc2xpY2stZm9udC1wYXRoOiBcXFwiLi9mb250cy9cXFwiICFkZWZhdWx0O1xcclxcbiRzbGljay1mb250LWZhbWlseTogXFxcInNsaWNrXFxcIiAhZGVmYXVsdDtcXHJcXG4kc2xpY2stbG9hZGVyLXBhdGg6IFxcXCIuL1xcXCIgIWRlZmF1bHQ7XFxyXFxuJHNsaWNrLWFycm93LWNvbG9yOiB3aGl0ZSAhZGVmYXVsdDtcXHJcXG4kc2xpY2stZG90LWNvbG9yOiBibGFjayAhZGVmYXVsdDtcXHJcXG4kc2xpY2stZG90LWNvbG9yLWFjdGl2ZTogJHNsaWNrLWRvdC1jb2xvciAhZGVmYXVsdDtcXHJcXG4kc2xpY2stcHJldi1jaGFyYWN0ZXI6IFxcXCJcXFxcMjE5MFxcXCIgIWRlZmF1bHQ7XFxyXFxuJHNsaWNrLW5leHQtY2hhcmFjdGVyOiBcXFwiXFxcXDIxOTJcXFwiICFkZWZhdWx0O1xcclxcbiRzbGljay1kb3QtY2hhcmFjdGVyOiBcXFwiXFxcXDIwMjJcXFwiICFkZWZhdWx0O1xcclxcbiRzbGljay1kb3Qtc2l6ZTogNnB4ICFkZWZhdWx0O1xcclxcbiRzbGljay1vcGFjaXR5LWRlZmF1bHQ6IDAuNzUgIWRlZmF1bHQ7XFxyXFxuJHNsaWNrLW9wYWNpdHktb24taG92ZXI6IDEgIWRlZmF1bHQ7XFxyXFxuJHNsaWNrLW9wYWNpdHktbm90LWFjdGl2ZTogMC4yNSAhZGVmYXVsdDtcXHJcXG5cXHJcXG5AZnVuY3Rpb24gc2xpY2staW1hZ2UtdXJsKCR1cmwpIHtcXHJcXG4gICAgQGlmIGZ1bmN0aW9uLWV4aXN0cyhpbWFnZS11cmwpIHtcXHJcXG4gICAgICAgIEByZXR1cm4gaW1hZ2UtdXJsKCR1cmwpO1xcclxcbiAgICB9XFxyXFxuICAgIEBlbHNlIHtcXHJcXG4gICAgICAgIEByZXR1cm4gdXJsKCRzbGljay1sb2FkZXItcGF0aCArICR1cmwpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBmdW5jdGlvbiBzbGljay1mb250LXVybCgkdXJsKSB7XFxyXFxuICAgIEBpZiBmdW5jdGlvbi1leGlzdHMoZm9udC11cmwpIHtcXHJcXG4gICAgICAgIEByZXR1cm4gZm9udC11cmwoJHVybCk7XFxyXFxuICAgIH1cXHJcXG4gICAgQGVsc2Uge1xcclxcbiAgICAgICAgQHJldHVybiB1cmwoJHNsaWNrLWZvbnQtcGF0aCArICR1cmwpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qIFNsaWRlciAqL1xcclxcblxcclxcbi5zbGljay1saXN0IHtcXHJcXG4gICAgLnNsaWNrLWxvYWRpbmcgJiB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmIHNsaWNrLWltYWdlLXVybChcXFwiYWpheC1sb2FkZXIuZ2lmXFxcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogSWNvbnMgKi9cXHJcXG5AaWYgJHNsaWNrLWZvbnQtZmFtaWx5ID09IFxcXCJzbGlja1xcXCIge1xcclxcbiAgICBAZm9udC1mYWNlIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwic2xpY2tcXFwiO1xcclxcbiAgICAgICAgc3JjOiBzbGljay1mb250LXVybChcXFwic2xpY2suZW90XFxcIik7XFxyXFxuICAgICAgICBzcmM6IHNsaWNrLWZvbnQtdXJsKFxcXCJzbGljay5lb3Q/I2llZml4XFxcIikgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLCBzbGljay1mb250LXVybChcXFwic2xpY2sud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCBzbGljay1mb250LXVybChcXFwic2xpY2sudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLCBzbGljay1mb250LXVybChcXFwic2xpY2suc3ZnI3NsaWNrXFxcIikgZm9ybWF0KFxcXCJzdmdcXFwiKTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogQXJyb3dzICovXFxyXFxuXFxyXFxuLnNsaWNrLXByZXYsXFxyXFxuLnNsaWNrLW5leHQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMHB4O1xcclxcbiAgICBmb250LXNpemU6IDBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAmOmhvdmVyLCAmOmZvY3VzIHtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICBvcGFjaXR5OiAkc2xpY2stb3BhY2l0eS1vbi1ob3ZlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmLnNsaWNrLWRpc2FibGVkOmJlZm9yZSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAkc2xpY2stb3BhY2l0eS1ub3QtYWN0aXZlO1xcclxcbiAgICB9XFxyXFxuICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkc2xpY2stZm9udC1mYW1pbHk7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgICAgIGNvbG9yOiAkc2xpY2stYXJyb3ctY29sb3I7XFxyXFxuICAgICAgICBvcGFjaXR5OiAkc2xpY2stb3BhY2l0eS1kZWZhdWx0O1xcclxcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zbGljay1wcmV2IHtcXHJcXG4gICAgbGVmdDogLTI1cHg7XFxyXFxuICAgIFtkaXI9XFxcInJ0bFxcXCJdICYge1xcclxcbiAgICAgICAgbGVmdDogYXV0bztcXHJcXG4gICAgICAgIHJpZ2h0OiAtMjVweDtcXHJcXG4gICAgfVxcclxcbiAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgICBjb250ZW50OiAkc2xpY2stcHJldi1jaGFyYWN0ZXI7XFxyXFxuICAgICAgICBbZGlyPVxcXCJydGxcXFwiXSAmIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAkc2xpY2stbmV4dC1jaGFyYWN0ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNsaWNrLW5leHQge1xcclxcbiAgICByaWdodDogLTI1cHg7XFxyXFxuICAgIFtkaXI9XFxcInJ0bFxcXCJdICYge1xcclxcbiAgICAgICAgbGVmdDogLTI1cHg7XFxyXFxuICAgICAgICByaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgICBjb250ZW50OiAkc2xpY2stbmV4dC1jaGFyYWN0ZXI7XFxyXFxuICAgICAgICBbZGlyPVxcXCJydGxcXFwiXSAmIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAkc2xpY2stcHJldi1jaGFyYWN0ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogRG90cyAqL1xcclxcblxcclxcbi5zbGljay1kb3R0ZWQuc2xpY2stc2xpZGVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWNrLWRvdHMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogLTI1cHg7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGxpIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMHB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMHB4O1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xcclxcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAkc2xpY2stb3BhY2l0eS1vbi1ob3ZlcjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAkc2xpY2stZG90LWNoYXJhY3RlcjtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRzbGljay1mb250LWZhbWlseTtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkc2xpY2stZG90LXNpemU7XFxyXFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkc2xpY2stZG90LWNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAkc2xpY2stb3BhY2l0eS1ub3QtYWN0aXZlO1xcclxcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gICAgICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmLnNsaWNrLWFjdGl2ZSBidXR0b246YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogJHNsaWNrLWRvdC1jb2xvci1hY3RpdmU7XFxyXFxuICAgICAgICAgICAgb3BhY2l0eTogJHNsaWNrLW9wYWNpdHktZGVmYXVsdDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIixcIi5vdXRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICAuaW5uZXIge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxyXFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgLm91dGVyIHtcXHJcXG4gICAgICAgIC5pbm5lciB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDhweCkge1xcclxcbiAgICAub3V0ZXIge1xcclxcbiAgICAgICAgLmlubmVyIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIixcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxucCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRW1waXJlQm9sZCc7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnRW1waXJlQm9sZCcpLCB1cmwoXFxcIi9mb250cy9FbXBpcmVCb2xkLnR0ZlxcXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRW1waXJlUmVndWxhcic7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnRW1waXJlUmVndWxhcicpLCB1cmwoXFxcIi9mb250cy9FbXBpcmVSZWd1bGFyLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSGF0dG9uVWx0cmFMaWdodCc7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnSGF0dG9uVWx0cmFMaWdodCcpLCB1cmwoXFxcIi9mb250cy9IYXR0b25VbHRyYUxpZ2h0Lm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSGF0dG9uTGlnaHQnO1xcclxcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ0hhdHRvbkxpZ2h0JyksIHVybChcXFwiL2ZvbnRzL0hhdHRvbkxpZ2h0Lm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSGF0dG9uUmVndWxhcic7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnSGF0dG9uUmVndWxhcicpLCB1cmwoXFxcIi9mb250cy9IYXR0b25SZWd1bGFyLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSGF0dG9uTWVkaXVtJztcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdIYXR0b25NZWRpdW0nKSwgdXJsKFxcXCIvZm9udHMvSGF0dG9uTWVkaXVtLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT2dnSXRhbGljJztcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdPZ2dJdGFsaWMnKSwgdXJsKFxcXCIvZm9udHMvT2dnSXRhbGljLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT2dnUmVndWxhcic7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnT2dnUmVndWxhcicpLCB1cmwoXFxcIi9mb250cy9PZ2dSZWd1bGFyLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2FvbFJlZ3VsYXInO1xcclxcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1Nhb2xSZWd1bGFyJyksIHVybChcXFwiL2ZvbnRzL1Nhb2xSZWd1bGFyLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2FvbEJvbGQnO1xcclxcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1Nhb2xCb2xkJyksIHVybChcXFwiL2ZvbnRzL1Nhb2xCb2xkLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2FvbEJvbGRJdGFsaWMnO1xcclxcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1Nhb2xCb2xkSXRhbGljJyksIHVybChcXFwiL2ZvbnRzL1Nhb2xCb2xkSXRhbGljLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2FvbFJlZ3VsYXJJdGFsaWMnO1xcclxcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1Nhb2xSZWd1bGFySXRhbGljJyksIHVybChcXFwiL2ZvbnRzL1Nhb2xSZWd1bGFySXRhbGljLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVGVsZWdyYWZVbHRyYUxpZ2h0JztcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdUZWxlZ3JhZlVsdHJhTGlnaHQnKSwgdXJsKFxcXCIvZm9udHMvVGVsZWdyYWZVbHRyYUxpZ2h0Lm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVGVsZWdyYWZSZWd1bGFyJztcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdUZWxlZ3JhZlJlZ3VsYXInKSwgdXJsKFxcXCIvZm9udHMvVGVsZWdyYWZSZWd1bGFyLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVGVsZWdyYWZVbHRyYUJvbGQnO1xcclxcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1RlbGVncmFmVWx0cmFCb2xkJyksIHVybChcXFwiL2ZvbnRzL1RlbGVncmFmVWx0cmFCb2xkLm90ZlxcXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCIsXCIuc2xpY2stc2xpZGUge1xcclxcbiAgICBpbWcuZ3Ige1xcclxcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNsaWNrLWNlbnRlciB7XFxyXFxuICAgIGltZy5nciB7XFxyXFxuICAgICAgICBmaWx0ZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XCIsXCJidXR0b24ge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXHJcXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgZT17OTE6ZnVuY3Rpb24oZSl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUscil7aWYoIXIpe3I9e319ZT1lJiZlLl9fZXNNb2R1bGU/ZS5kZWZhdWx0OmU7aWYodHlwZW9mIGUhPT1cInN0cmluZ1wiKXtyZXR1cm4gZX1pZigvXlsnXCJdLipbJ1wiXSQvLnRlc3QoZSkpe2U9ZS5zbGljZSgxLC0xKX1pZihyLmhhc2gpe2UrPXIuaGFzaH1pZigvW1wiJygpIFxcdFxcbl0vLnRlc3QoZSl8fHIubmVlZFF1b3Rlcyl7cmV0dXJuJ1wiJy5jb25jYXQoZS5yZXBsYWNlKC9cIi9nLCdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZyxcIlxcXFxuXCIpLCdcIicpfXJldHVybiBlfX19O3ZhciByPXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18odCl7aWYoclt0XSl7cmV0dXJuIHJbdF0uZXhwb3J0c312YXIgXz1yW3RdPXtleHBvcnRzOnt9fTt2YXIgbj10cnVlO3RyeXtlW3RdKF8sXy5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO249ZmFsc2V9ZmluYWxseXtpZihuKWRlbGV0ZSByW3RdfXJldHVybiBfLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oOTEpfSgpOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvYWpheC1sb2FkZXIuZmI2ZjNjMjMwY2I4NDZlMjUyNDdkZmFhMWRhOTRkOGYuZ2lmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9zbGljay5hNGU5N2Y1YTJhNjRmMGFiMTMyMzIzZmJlYjMzYWUyOS5lb3RcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL3NsaWNrLjdiYTk3OTUzMTg3ZGMyOTA3OTMwMjQ5ZjgyNmNlOTBkLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvc2xpY2suYzk0Zjc2NzFkY2M5OWRjZTQzZTIyYTg5ZjQ4NmY3YzIudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9zbGljay4yOTUxODM3ODZjZDhhMTM4OTg2NTIxZDlmMzg4YTI4Ni53b2ZmXCI7IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
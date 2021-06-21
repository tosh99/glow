self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_comingsoon_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/comingsoon.module.scss */ "./pages/styles/comingsoon.module.scss");
/* harmony import */ var _styles_comingsoon_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_comingsoon_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_components_page_header_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/page-header/page-header */ "./shared/components/page-header/page-header.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Anutosh\\PycharmProjects\\Freelance\\Glow\\pages\\index.js";



function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_comingsoon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().page),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_components_page_header_page_header__WEBPACK_IMPORTED_MODULE_2__.default, {
      bg: 'transparent'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "outer " + (_styles_comingsoon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().banner),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "inner",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: '/icons/header/logo.svg'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Coming Soon!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Glow is a skincare wonderland with services designed for your upkeep and indulgence. We are currently curating our services menu so do check back."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          children: "NOTIFY ME"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/***/ "./shared/components/page-header/page-header.js":
/*!******************************************************!*\
  !*** ./shared/components/page-header/page-header.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PageHeader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_header_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-header.module.scss */ "./shared/components/page-header/page-header.module.scss");
/* harmony import */ var _page_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_header_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Anutosh\\PycharmProjects\\Freelance\\Glow\\shared\\components\\page-header\\page-header.js";





function PageHeader(_ref) {
  var title = _ref.title,
      _ref$bg = _ref.bg,
      bg = _ref$bg === void 0 ? 'solid' : _ref$bg;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "outer " + ' ' + (_page_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerOuter) + ' ' + (bg === 'transparent' ? (_page_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerOuterTrans) : ''),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "inner " + (_page_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_page_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hLeft),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: '/icons/header/back.svg'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_page_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hRight),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "about",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: '/icons/header/star.svg'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }, this);
}
_c = PageHeader;

var _c;

$RefreshReg$(_c, "PageHeader");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./shared/components/page-header/page-header.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./shared/components/page-header/page-header.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".page-header_headerOuter__2htSy {\n  background: #EEEADD;\n  border-bottom: 0.5px solid #000000;\n}\n\n.page-header_headerOuterTrans__tRxDO {\n  background: transparent;\n}\n\n.page-header_header__lR8x4 {\n  display: flex;\n  justify-content: space-between;\n  padding: 38px 0;\n}\n.page-header_header__lR8x4 .page-header_hLeft__CdbPZ img {\n  cursor: pointer;\n}\n.page-header_header__lR8x4 .page-header_hRight__2mFjD {\n  display: flex;\n  align-items: center;\n}\n.page-header_header__lR8x4 .page-header_hRight__2mFjD header {\n  margin-left: 86px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  font-family: HattonRegular;\n  cursor: pointer;\n  margin-top: 8px;\n}\n.page-header_header__lR8x4 .page-header_hRight__2mFjD img {\n  margin-left: 62px;\n}", "",{"version":3,"sources":["webpack://page-header.module.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,kCAAA;AACJ;;AAEA;EACI,uBAAA;AACJ;;AAEA;EACI,aAAA;EACA,8BAAA;EACA,eAAA;AACJ;AAEQ;EACI,eAAA;AAAZ;AAII;EACI,aAAA;EACA,mBAAA;AAFR;AAIQ;EACI,iBAAA;EACA,sBAAA;EACA,yBAAA;EACA,0BAAA;EACA,eAAA;EACA,eAAA;AAFZ;AAKQ;EACI,iBAAA;AAHZ","sourcesContent":[".headerOuter {\r\n    background: #EEEADD;\r\n    border-bottom: 0.5px solid #000000;\r\n}\r\n\r\n.headerOuterTrans {\r\n    background: transparent;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 38px 0;\r\n\r\n    .hLeft {\r\n        img {\r\n            cursor: pointer;\r\n        }\r\n    }\r\n\r\n    .hRight {\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        header {\r\n            margin-left: 86px;\r\n            letter-spacing: 0.05em;\r\n            text-transform: uppercase;\r\n            font-family: HattonRegular;\r\n            cursor: pointer;\r\n            margin-top: 8px;\r\n        }\r\n\r\n        img {\r\n            margin-left: 62px;\r\n        }\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"headerOuter": "page-header_headerOuter__2htSy",
	"headerOuterTrans": "page-header_headerOuterTrans__tRxDO",
	"header": "page-header_header__lR8x4",
	"hLeft": "page-header_hLeft__CdbPZ",
	"hRight": "page-header_hRight__2mFjD"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NoYXJlZC9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9zaGFyZWQvY29tcG9uZW50cy9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJIb21lIiwic3R5bGVzIiwiUGFnZUhlYWRlciIsInRpdGxlIiwiYmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUczQixzQkFDSTtBQUFLLGFBQVMsRUFBRUMsNEVBQWhCO0FBQUEsNEJBQ0ksOERBQUMsK0VBQUQ7QUFBWSxRQUFFLEVBQUU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxlQUFTLEVBQUUsV0FBV0EsOEVBQTNCO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFFLE9BQWhCO0FBQUEsZ0NBQ0k7QUFBSyxhQUFHLEVBQUU7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWVIO0tBbEJ1QkQsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNFLFVBQVQsT0FBMkM7QUFBQSxNQUF0QkMsS0FBc0IsUUFBdEJBLEtBQXNCO0FBQUEscUJBQWZDLEVBQWU7QUFBQSxNQUFmQSxFQUFlLHdCQUFWLE9BQVU7QUFHdEQsc0JBQVEsOERBQUMsMkNBQUQ7QUFBQSwyQkFDSjtBQUFLLGVBQVMsRUFBRSxXQUFXLEdBQVgsR0FBaUJILDZFQUFqQixHQUFzQyxHQUF0QyxJQUE2Q0csRUFBRSxLQUFLLGFBQVAsR0FBdUJILGtGQUF2QixHQUFpRCxFQUE5RixDQUFoQjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRSxXQUFXQSx3RUFBM0I7QUFBQSxnQ0FDSSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFFQSx1RUFBaEI7QUFBQSxtQ0FDSTtBQUFLLGlCQUFHLEVBQUU7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFNSTtBQUFLLG1CQUFTLEVBQUVBLHdFQUFoQjtBQUFBLGtDQUNJLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxPQUFYO0FBQUEsbUNBQ0k7QUFBQSx3QkFBU0U7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUlJO0FBQUssZUFBRyxFQUFFO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUjtBQWlCSDtLQXBCdUJELFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeEI7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNEQ7QUFDdEc7QUFDQTtBQUNBLDJFQUEyRSx3QkFBd0IsdUNBQXVDLEdBQUcsMENBQTBDLDRCQUE0QixHQUFHLGdDQUFnQyxrQkFBa0IsbUNBQW1DLG9CQUFvQixHQUFHLDREQUE0RCxvQkFBb0IsR0FBRyx5REFBeUQsa0JBQWtCLHdCQUF3QixHQUFHLGdFQUFnRSxzQkFBc0IsMkJBQTJCLDhCQUE4QiwrQkFBK0Isb0JBQW9CLG9CQUFvQixHQUFHLDZEQUE2RCxzQkFBc0IsR0FBRyxPQUFPLHdGQUF3RixXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLHVDQUF1Qyw0QkFBNEIsMkNBQTJDLEtBQUssMkJBQTJCLGdDQUFnQyxLQUFLLGlCQUFpQixzQkFBc0IsdUNBQXVDLHdCQUF3QixvQkFBb0IsaUJBQWlCLGdDQUFnQyxhQUFhLFNBQVMscUJBQXFCLDBCQUEwQixnQ0FBZ0Msd0JBQXdCLGtDQUFrQyx1Q0FBdUMsMENBQTBDLDJDQUEyQyxnQ0FBZ0MsZ0NBQWdDLGFBQWEscUJBQXFCLGtDQUFrQyxhQUFhLFNBQVMsU0FBUyxtQkFBbUI7QUFDaDZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNDUyZjExMDhmYmZkMGEzZjRmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9jb21pbmdzb29uLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQge0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSBcIi4uL3NoYXJlZC9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZX0+XHJcbiAgICAgICAgICAgIDxQYWdlSGVhZGVyIGJnPXsndHJhbnNwYXJlbnQnfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm91dGVyIFwiICsgc3R5bGVzLmJhbm5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJpbm5lclwifT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pY29ucy9oZWFkZXIvbG9nby5zdmcnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5Db21pbmcgU29vbiE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5HbG93IGlzIGEgc2tpbmNhcmUgd29uZGVybGFuZCB3aXRoIHNlcnZpY2VzIGRlc2lnbmVkIGZvciB5b3VyIHVwa2VlcCBhbmQgaW5kdWxnZW5jZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2UgYXJlIGN1cnJlbnRseSBjdXJhdGluZyBvdXIgc2VydmljZXMgbWVudSBzbyBkbyBjaGVjayBiYWNrLjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5OT1RJRlkgTUU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHtJblZpZXd9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHttb3Rpb259IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS1oZWFkZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHtGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VIZWFkZXIoe3RpdGxlLCBiZyA9ICdzb2xpZCd9KSB7XHJcblxyXG5cclxuICAgIHJldHVybiAoPEZyYWdtZW50PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm91dGVyIFwiICsgJyAnICsgc3R5bGVzLmhlYWRlck91dGVyICsgJyAnICsgKGJnID09PSAndHJhbnNwYXJlbnQnID8gc3R5bGVzLmhlYWRlck91dGVyVHJhbnMgOiAnJyl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJpbm5lciBcIiArIHN0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhMZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycvaWNvbnMvaGVhZGVyL2JhY2suc3ZnJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oUmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJhYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPnt0aXRsZX08L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycvaWNvbnMvaGVhZGVyL3N0YXIuc3ZnJ30vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9GcmFnbWVudD4pXHJcbn0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucGFnZS1oZWFkZXJfaGVhZGVyT3V0ZXJfXzJodFN5IHtcXG4gIGJhY2tncm91bmQ6ICNFRUVBREQ7XFxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjMDAwMDAwO1xcbn1cXG5cXG4ucGFnZS1oZWFkZXJfaGVhZGVyT3V0ZXJUcmFuc19fdFJ4RE8ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5wYWdlLWhlYWRlcl9oZWFkZXJfX2xSOHg0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAzOHB4IDA7XFxufVxcbi5wYWdlLWhlYWRlcl9oZWFkZXJfX2xSOHg0IC5wYWdlLWhlYWRlcl9oTGVmdF9fQ2RiUFogaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnBhZ2UtaGVhZGVyX2hlYWRlcl9fbFI4eDQgLnBhZ2UtaGVhZGVyX2hSaWdodF9fMm1GakQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wYWdlLWhlYWRlcl9oZWFkZXJfX2xSOHg0IC5wYWdlLWhlYWRlcl9oUmlnaHRfXzJtRmpEIGhlYWRlciB7XFxuICBtYXJnaW4tbGVmdDogODZweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6IEhhdHRvblJlZ3VsYXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbi5wYWdlLWhlYWRlcl9oZWFkZXJfX2xSOHg0IC5wYWdlLWhlYWRlcl9oUmlnaHRfXzJtRmpEIGltZyB7XFxuICBtYXJnaW4tbGVmdDogNjJweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3BhZ2UtaGVhZGVyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFDSjtBQUVRO0VBQ0ksZUFBQTtBQUFaO0FBSUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUlRO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUZaO0FBS1E7RUFDSSxpQkFBQTtBQUhaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXJPdXRlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNFRUVBREQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJPdXRlclRyYW5zIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDM4cHggMDtcXHJcXG5cXHJcXG4gICAgLmhMZWZ0IHtcXHJcXG4gICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oUmlnaHQge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICBoZWFkZXIge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4NnB4O1xcclxcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogSGF0dG9uUmVndWxhcjtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNjJweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoZWFkZXJPdXRlclwiOiBcInBhZ2UtaGVhZGVyX2hlYWRlck91dGVyX18yaHRTeVwiLFxuXHRcImhlYWRlck91dGVyVHJhbnNcIjogXCJwYWdlLWhlYWRlcl9oZWFkZXJPdXRlclRyYW5zX190UnhET1wiLFxuXHRcImhlYWRlclwiOiBcInBhZ2UtaGVhZGVyX2hlYWRlcl9fbFI4eDRcIixcblx0XCJoTGVmdFwiOiBcInBhZ2UtaGVhZGVyX2hMZWZ0X19DZGJQWlwiLFxuXHRcImhSaWdodFwiOiBcInBhZ2UtaGVhZGVyX2hSaWdodF9fMm1GakRcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./shared/components/nextback/nextback.js":
/*!************************************************!*\
  !*** ./shared/components/nextback/nextback.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NextBack; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextback_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nextback.module.scss */ "./shared/components/nextback/nextback.module.scss");
/* harmony import */ var _nextback_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextback_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Anutosh\\PycharmProjects\\Freelance\\Glow\\shared\\components\\nextback\\nextback.js";


function NextBack(_ref) {
  var onNext = _ref.onNext,
      onBack = _ref.onBack,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'dark' : _ref$theme;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_nextback_module_scss__WEBPACK_IMPORTED_MODULE_2___default().nextback),
      children: [theme === 'dark' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: '/icons/common/back.svg',
          onClick: onBack
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: '/icons/common/next.svg',
          onClick: onNext
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), theme === 'light' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: '/icons/common/back.svg',
          onClick: onBack
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: '/icons/common/next.svg',
          onClick: onNext
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }, this);
}
_c = NextBack;

var _c;

$RefreshReg$(_c, "NextBack");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2hhcmVkL2NvbXBvbmVudHMvbmV4dGJhY2svbmV4dGJhY2suanMiXSwibmFtZXMiOlsiTmV4dEJhY2siLCJvbk5leHQiLCJvbkJhY2siLCJ0aGVtZSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULE9BQW9EO0FBQUEsTUFBakNDLE1BQWlDLFFBQWpDQSxNQUFpQztBQUFBLE1BQXpCQyxNQUF5QixRQUF6QkEsTUFBeUI7QUFBQSx3QkFBakJDLEtBQWlCO0FBQUEsTUFBakJBLEtBQWlCLDJCQUFULE1BQVM7QUFHL0Qsc0JBQVEsOERBQUMsMkNBQUQ7QUFBQSwyQkFDSjtBQUFLLGVBQVMsRUFBRUMsdUVBQWhCO0FBQUEsaUJBRVFELEtBQUssS0FBSyxNQUFWLGlCQUNBLDhEQUFDLDJDQUFEO0FBQUEsZ0NBQ0k7QUFBSyxhQUFHLEVBQUUsd0JBQVY7QUFBb0MsaUJBQU8sRUFBRUQ7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUssYUFBRyxFQUFFLHdCQUFWO0FBQW9DLGlCQUFPLEVBQUVEO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSFIsRUFTUUUsS0FBSyxLQUFLLE9BQVYsaUJBQ0EsOERBQUMsMkNBQUQ7QUFBQSxnQ0FDSTtBQUFLLGFBQUcsRUFBRSx3QkFBVjtBQUFvQyxpQkFBTyxFQUFFRDtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSyxhQUFHLEVBQUUsd0JBQVY7QUFBb0MsaUJBQU8sRUFBRUQ7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUFtQkg7S0F0QnVCRCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzLjBiYjcwMjhjZjg0NWI5OGZiOGU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL25leHRiYWNrLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7RnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV4dEJhY2soe29uTmV4dCwgb25CYWNrLCB0aGVtZSA9ICdkYXJrJ30pIHtcclxuXHJcblxyXG4gICAgcmV0dXJuICg8RnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXh0YmFja30+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoZW1lID09PSAnZGFyaycgJiZcclxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pY29ucy9jb21tb24vYmFjay5zdmcnfSBvbkNsaWNrPXtvbkJhY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pY29ucy9jb21tb24vbmV4dC5zdmcnfSBvbkNsaWNrPXtvbk5leHR9Lz5cclxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhlbWUgPT09ICdsaWdodCcgJiZcclxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pY29ucy9jb21tb24vYmFjay5zdmcnfSBvbkNsaWNrPXtvbkJhY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pY29ucy9jb21tb24vbmV4dC5zdmcnfSBvbkNsaWNrPXtvbk5leHR9Lz5cclxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PilcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
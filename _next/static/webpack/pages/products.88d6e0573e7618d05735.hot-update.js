self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Products; }
/* harmony export */ });
/* harmony import */ var C_Users_Anutosh_PycharmProjects_Freelance_Glow_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/products.module.scss */ "./pages/styles/products.module.scss");
/* harmony import */ var _styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var _shared_components_nextback_nextback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/nextback/nextback */ "./shared/components/nextback/nextback.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Anutosh\\PycharmProjects\\Freelance\\Glow\\pages\\products.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Anutosh_PycharmProjects_Freelance_Glow_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function Products() {
  _s();

  var _this = this;

  var body_slider_settings = {
    dots: false,
    speed: 1250,
    arrows: false,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    adaptiveHeight: true,
    beforeChange: function beforeChange(current, next) {
      set_current_body_slide(next);
    }
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      current_body_slide = _useState[0],
      set_current_body_slide = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      body_slider = _useState2[0],
      set_body_slider = _useState2[1];

  var favorite_slider_settings = {
    dots: false,
    speed: 1250,
    centerMode: true,
    adaptiveHeight: true,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  };

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      favorite_slider = _useState3[0],
      set_favorite_slider = _useState3[1];

  var products_alternate_settings = {
    dots: true,
    speed: 1250,
    centerMode: true,
    adaptiveHeight: true,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: function beforeChange(current, next) {
      set_current_products_alternate_slide(next);
    }
  };

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      products_alternate_slider = _useState4[0],
      set_products_alternate_slider = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      current_products_alternate_slide = _useState5[0],
      set_current_products_alternate_slide = _useState5[1];

  var products_alternate_content = [{
    title: 'Body',
    content: 'A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and are result-driven. Taking care of your body is equally rewarding.'
  }, {
    title: 'Hair',
    content: 'Give your hair care routine a bump onto the next level. Whether it is finding the right products for your hair type and concern or adding some lovely serums for that extra bounce, we’ve curated an array of products for each and every one of your needs.'
  }, {
    title: 'Skincare',
    content: 'Whether you’re a beginner or a skincare enthusiast, we have something for you all. Choose from our repertoire of curated skincare products that have acquired a cult status for their new-age formulations and are targeted towards lasting skincare benefits. A healthy glow awaits you.'
  }, {
    title: 'Supplements',
    content: 'At Glow, we promote overall well-being for healthy skin and hair. Find supplements that come recommended for a glow that’s from within.'
  }, {
    title: 'Tools',
    content: 'For at-home facials and upkeep, we have a range of some of the most innovative technology that will work on a deeper level for that glow from within. Prep, prime and polish your skin with these must-try tools. Starting from easy-to-use to high-tech devices, we have a variety of tools that will enhance your at home beauty regime.'
  }];
  var rtl = [{
    title: 'Good for <br/>' + 'Glow',
    desc: 'A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and are result-driven. Taking care of your body is equally rewarding.',
    shop: 'Body'
  }, {
    title: 'Get set <br/>' + 'Glow',
    desc: 'A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and are result-driven. Taking care of your body is equally rewarding.',
    shop: 'Body'
  }, {
    title: 'You <br/>' + 'Glow',
    desc: 'A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and are result-driven. Taking care of your body is equally rewarding.',
    shop: 'Body'
  }, {
    title: 'Glow From <br/>' + 'Within',
    desc: 'A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and are result-driven. Taking care of your body is equally rewarding.',
    shop: 'Body'
  }, {
    title: 'At home <br/>' + 'Glow',
    desc: 'A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and are result-driven. Taking care of your body is equally rewarding.',
    shop: 'Body'
  }];
  var favorite_products = [{
    title: 'Lotion P50 BR'
  }, {
    title: 'Lotion P50 BR'
  }, {
    title: 'Lotion P50 BR'
  }, {
    title: 'Lotion P50 BR'
  }, {
    title: 'Lotion P50 BR'
  }, {
    title: 'Lotion P50 BR'
  }, {
    title: 'Lotion P50 BR'
  }, {
    title: 'Lotion P50 BR'
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "outer " + (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bodyOuter),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "inner " + (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().body),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bLeft),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              dangerouslySetInnerHTML: {
                __html: rtl[current_body_slide].title
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: rtl[current_body_slide].desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
            children: ["Shop ", rtl[current_body_slide].shop]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bRight),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({
            ref: function ref(slider) {
              set_body_slider(slider);
            }
          }, body_slider_settings), {}, {
            children: rtl.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().slide),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                    src: '/images/products/top/' + index + '.png'
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 41
              }, _this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_shared_components_nextback_nextback__WEBPACK_IMPORTED_MODULE_5__.default, {
              onBack: body_slider.slickPrev,
              onNext: body_slider.slickNext
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "outer " + (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productDescOuter),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "inner " + (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productDesc),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: "After a lot of deliberation we have curated a wide range of products that are available to you 24 x 7 on our online boutique glow.shop. You can also purchase them in-store with the assistance of our skincare experts or even place an order for curbside pick-up. These products are tried and tested cult favourites and made with innovative formulations to offer you an everlasting glow and help you on your skincare, beauty and wellness journey"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "outer " + (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().currentFavouritesOuter),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "inner " + (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().currentFavourites),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cfHeader),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
            children: "Varshini's Current Favourites"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({
          ref: function ref(slider) {
            set_favorite_slider(slider);
          }
        }, favorite_slider_settings), {}, {
          children: favorite_products.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cfSlide),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  src: '/images/products/fav/' + index + '.png'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 37
            }, _this);
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "outer " + (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shopMyShelfieOuter),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "inner " + (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shopMyShelfie),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().smLeft),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
            children: "Shop my shelfie"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().smRight),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            children: " Being a skincare enthusiast myself, I am always on the lookout for new products to add to my repertoire. These are a few of my current favourites, some of which are staples in my routine and some new ones you would be happy to discover. Shop these curated products and refresh your skincare shelf."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
            children: "glow.shop"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().slidersOuter),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sliders),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desc),
          children: "After a lot of deliberation we have curated a wide range of products that are available to you 24 x 7 on our online boutique glow.shop. You can also purchase them in-store with the assistance of our skincare experts or even place an order for curbside pick-up. These products are tried and tested cult favourites and made with innovative formulations to offer you an everlasting glow and help you on your skincare, beauty and wellness journey."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({
          ref: function ref(slider) {
            set_products_alternate_slider(slider);
          }
        }, products_alternate_settings), {}, {
          children: products_alternate_content.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().slide),
                children: [current_products_alternate_slide === index && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__.InView, {
                  threshold: 0,
                  children: function children(_ref) {
                    var ref = _ref.ref,
                        inView = _ref.inView;
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                      className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                      ref: ref,
                      initial: {
                        opacity: 0
                      },
                      animate: inView ? {
                        opacity: 1
                      } : {
                        opacity: 0
                      },
                      transition: {
                        duration: 0.7
                      },
                      children: item.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 240,
                      columnNumber: 53
                    }, _this);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 41
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  className: "gr " + (current_products_alternate_slide === index ? (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().banner) : ''),
                  src: '/images/products/alternate-products/' + index + '.png'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 250,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                    children: ["0", index + 1, " / ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: ["0", products_alternate_content.length]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 252,
                      columnNumber: 60
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 252,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: item.content
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 253,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      src: 'icons/back.svg',
                      onClick: function onClick() {
                        products_alternate_slider.slickPrev();
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 255,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      src: 'icons/forward.svg',
                      onClick: function onClick() {
                        products_alternate_slider.slickNext();
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 258,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 254,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 251,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 37
            }, _this);
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 13
  }, this);
}

_s(Products, "/U4iJITGnDFmtV3f9hZLL8HMSGA=");

_c = Products;

var _c;

$RefreshReg$(_c, "Products");

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
      onBack = _ref.onBack;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_nextback_module_scss__WEBPACK_IMPORTED_MODULE_2___default().nextback),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: '/icons/common/back.svg',
        onClick: onBack
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: '/icons/common/next.svg',
        onClick: onNext
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
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


/***/ }),

/***/ "./shared/components/nextback/nextback.module.scss":
/*!*********************************************************!*\
  !*** ./shared/components/nextback/nextback.module.scss ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./nextback.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./shared/components/nextback/nextback.module.scss");

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
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./nextback.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./shared/components/nextback/nextback.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./nextback.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./shared/components/nextback/nextback.module.scss");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./shared/components/nextback/nextback.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./shared/components/nextback/nextback.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nextback_nextback__CCoAz {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 80px;\n}", "",{"version":3,"sources":["webpack://nextback.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;AACJ","sourcesContent":[".nextback {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 80px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"nextback": "nextback_nextback__CCoAz"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NoYXJlZC9jb21wb25lbnRzL25leHRiYWNrL25leHRiYWNrLmpzIiwid2VicGFjazovL19OX0UvLi9zaGFyZWQvY29tcG9uZW50cy9uZXh0YmFjay9uZXh0YmFjay5tb2R1bGUuc2Nzcz9mOTU2Iiwid2VicGFjazovL19OX0UvLi9zaGFyZWQvY29tcG9uZW50cy9uZXh0YmFjay9uZXh0YmFjay5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJQcm9kdWN0cyIsImJvZHlfc2xpZGVyX3NldHRpbmdzIiwiZG90cyIsInNwZWVkIiwiYXJyb3dzIiwiY2VudGVyTW9kZSIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInNsaWRlc1RvU2hvdyIsImFkYXB0aXZlSGVpZ2h0IiwiYmVmb3JlQ2hhbmdlIiwiY3VycmVudCIsIm5leHQiLCJzZXRfY3VycmVudF9ib2R5X3NsaWRlIiwidXNlU3RhdGUiLCJjdXJyZW50X2JvZHlfc2xpZGUiLCJib2R5X3NsaWRlciIsInNldF9ib2R5X3NsaWRlciIsImZhdm9yaXRlX3NsaWRlcl9zZXR0aW5ncyIsInZhcmlhYmxlV2lkdGgiLCJmYXZvcml0ZV9zbGlkZXIiLCJzZXRfZmF2b3JpdGVfc2xpZGVyIiwicHJvZHVjdHNfYWx0ZXJuYXRlX3NldHRpbmdzIiwic2V0X2N1cnJlbnRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlIiwicHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlciIsInNldF9wcm9kdWN0c19hbHRlcm5hdGVfc2xpZGVyIiwiY3VycmVudF9wcm9kdWN0c19hbHRlcm5hdGVfc2xpZGUiLCJwcm9kdWN0c19hbHRlcm5hdGVfY29udGVudCIsInRpdGxlIiwiY29udGVudCIsInJ0bCIsImRlc2MiLCJzaG9wIiwiZmF2b3JpdGVfcHJvZHVjdHMiLCJzdHlsZXMiLCJfX2h0bWwiLCJzbGlkZXIiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzbGlja1ByZXYiLCJzbGlja05leHQiLCJyZWYiLCJpblZpZXciLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJsZW5ndGgiLCJOZXh0QmFjayIsIm9uTmV4dCIsIm9uQmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUMvQixNQUFNQyxvQkFBb0IsR0FBRztBQUN6QkMsUUFBSSxFQUFFLEtBRG1CO0FBRXpCQyxTQUFLLEVBQUUsSUFGa0I7QUFHekJDLFVBQU0sRUFBRSxLQUhpQjtBQUl6QkMsY0FBVSxFQUFFLEtBSmE7QUFLekJDLFlBQVEsRUFBRSxJQUxlO0FBTXpCQyxpQkFBYSxFQUFFLElBTlU7QUFPekJDLGdCQUFZLEVBQUUsQ0FQVztBQVF6QkMsa0JBQWMsRUFBRSxJQVJTO0FBU3pCQyxnQkFBWSxFQUFFLHNCQUFDQyxPQUFELEVBQVVDLElBQVYsRUFBbUI7QUFDN0JDLDRCQUFzQixDQUFDRCxJQUFELENBQXRCO0FBQ0g7QUFYd0IsR0FBN0I7O0FBRCtCLGtCQWNzQkUsK0NBQVEsQ0FBQyxDQUFELENBZDlCO0FBQUEsTUFjeEJDLGtCQWR3QjtBQUFBLE1BY0pGLHNCQWRJOztBQUFBLG1CQWVRQywrQ0FBUSxFQWZoQjtBQUFBLE1BZXhCRSxXQWZ3QjtBQUFBLE1BZVhDLGVBZlc7O0FBaUIvQixNQUFNQyx3QkFBd0IsR0FBRztBQUM3QmhCLFFBQUksRUFBRSxLQUR1QjtBQUU3QkMsU0FBSyxFQUFFLElBRnNCO0FBRzdCRSxjQUFVLEVBQUUsSUFIaUI7QUFJN0JJLGtCQUFjLEVBQUUsSUFKYTtBQUs3QlUsaUJBQWEsRUFBRSxJQUxjO0FBTTdCZixVQUFNLEVBQUUsS0FOcUI7QUFPN0JFLFlBQVEsRUFBRSxJQVBtQjtBQVE3QkMsaUJBQWEsRUFBRTtBQVJjLEdBQWpDOztBQWpCK0IsbUJBMkJnQk8sK0NBQVEsRUEzQnhCO0FB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QSxJQUFJLElBQVU7QUFDZCx5QkFBeUIsVUFBVTtBQUNuQyxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBLElBQUksaUJBQWlCO0FBQ3JCLE1BQU0scTFCQUF5YTtBQUMvYTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHExQkFBeWE7O0FBRW5jOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDOzs7Ozs7Ozs7O0FDM0RBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSxxRUFBcUUsa0JBQWtCLG1DQUFtQyx3QkFBd0IsZ0JBQWdCLEdBQUcsT0FBTyxxRkFBcUYsVUFBVSxXQUFXLFdBQVcsVUFBVSxvQ0FBb0Msc0JBQXNCLHVDQUF1Qyw0QkFBNEIsb0JBQW9CLEtBQUssbUJBQW1CO0FBQ3BkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMuODhkNmUwNTczZTc2MThkMDU3MzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvcHJvZHVjdHMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbmltcG9ydCB7SW5WaWV3LCB1c2VJblZpZXd9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcbmltcG9ydCBOZXh0QmFjayBmcm9tIFwiLi4vc2hhcmVkL2NvbXBvbmVudHMvbmV4dGJhY2svbmV4dGJhY2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKCkge1xyXG4gICAgY29uc3QgYm9keV9zbGlkZXJfc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgc3BlZWQ6IDEyNTAsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiA0MDAwLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgICAgICBiZWZvcmVDaGFuZ2U6IChjdXJyZW50LCBuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2JvZHlfc2xpZGUobmV4dClcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIGNvbnN0IFtjdXJyZW50X2JvZHlfc2xpZGUsIHNldF9jdXJyZW50X2JvZHlfc2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbYm9keV9zbGlkZXIsIHNldF9ib2R5X3NsaWRlcl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IGZhdm9yaXRlX3NsaWRlcl9zZXR0aW5ncyA9IHtcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBzcGVlZDogMTI1MCxcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IFtmYXZvcml0ZV9zbGlkZXIsIHNldF9mYXZvcml0ZV9zbGlkZXJdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0c19hbHRlcm5hdGVfc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogMTI1MCxcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiA0MDAwLFxyXG4gICAgICAgIGJlZm9yZUNoYW5nZTogKGN1cnJlbnQsIG5leHQpID0+IHtcclxuICAgICAgICAgICAgc2V0X2N1cnJlbnRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlKG5leHQpXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdCBbcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlciwgc2V0X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZXJdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjdXJyZW50X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZSwgc2V0X2N1cnJlbnRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBwcm9kdWN0c19hbHRlcm5hdGVfY29udGVudCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQm9keScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdBIHJhbmdlIG9mIGhhbmQtcGlja2VkIGJyYW5kcyBmb3IgdGhlIGJlc3Qgb2YgYm9keSBjYXJlIHByb2R1Y3RzIHRoYXQgYXJlIG1hZGUgd2l0aCBjbGVhbiwgYWN0aXZlIGluZ3JlZGllbnRzIGFuZCBhcmUgcmVzdWx0LWRyaXZlbi4gVGFraW5nIGNhcmUgb2YgeW91ciBib2R5IGlzIGVxdWFsbHkgcmV3YXJkaW5nLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIYWlyJyxcclxuICAgICAgICAgICAgY29udGVudDogJ0dpdmUgeW91ciBoYWlyIGNhcmUgcm91dGluZSBhIGJ1bXAgb250byB0aGUgbmV4dCBsZXZlbC4gV2hldGhlciBpdCBpcyBmaW5kaW5nIHRoZSByaWdodCBwcm9kdWN0cyBmb3IgeW91ciBoYWlyIHR5cGUgYW5kIGNvbmNlcm4gb3IgYWRkaW5nIHNvbWUgbG92ZWx5IHNlcnVtcyBmb3IgdGhhdCBleHRyYSBib3VuY2UsIHdl4oCZdmUgY3VyYXRlZCBhbiBhcnJheSBvZiBwcm9kdWN0cyBmb3IgZWFjaCBhbmQgZXZlcnkgb25lIG9mIHlvdXIgbmVlZHMuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1NraW5jYXJlJyxcclxuICAgICAgICAgICAgY29udGVudDogJ1doZXRoZXIgeW914oCZcmUgYSBiZWdpbm5lciBvciBhIHNraW5jYXJlIGVudGh1c2lhc3QsIHdlIGhhdmUgc29tZXRoaW5nIGZvciB5b3UgYWxsLiBDaG9vc2UgZnJvbSBvdXIgcmVwZXJ0b2lyZSBvZiBjdXJhdGVkIHNraW5jYXJlIHByb2R1Y3RzIHRoYXQgaGF2ZSBhY3F1aXJlZCBhIGN1bHQgc3RhdHVzIGZvciB0aGVpciBuZXctYWdlIGZvcm11bGF0aW9ucyBhbmQgYXJlIHRhcmdldGVkIHRvd2FyZHMgbGFzdGluZyBza2luY2FyZSBiZW5lZml0cy4gQSBoZWFsdGh5IGdsb3cgYXdhaXRzIHlvdS4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU3VwcGxlbWVudHMnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnQXQgR2xvdywgd2UgcHJvbW90ZSBvdmVyYWxsIHdlbGwtYmVpbmcgZm9yIGhlYWx0aHkgc2tpbiBhbmQgaGFpci4gRmluZCBzdXBwbGVtZW50cyB0aGF0IGNvbWUgcmVjb21tZW5kZWQgZm9yIGEgZ2xvdyB0aGF04oCZcyBmcm9tIHdpdGhpbi4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVG9vbHMnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnRm9yIGF0LWhvbWUgZmFjaWFscyBhbmQgdXBrZWVwLCB3ZSBoYXZlIGEgcmFuZ2Ugb2Ygc29tZSBvZiB0aGUgbW9zdCBpbm5vdmF0aXZlIHRlY2hub2xvZ3kgdGhhdCB3aWxsIHdvcmsgb24gYSBkZWVwZXIgbGV2ZWwgZm9yIHRoYXQgZ2xvdyBmcm9tIHdpdGhpbi4gUHJlcCwgcHJpbWUgYW5kIHBvbGlzaCB5b3VyIHNraW4gd2l0aCB0aGVzZSBtdXN0LXRyeSB0b29scy4gU3RhcnRpbmcgZnJvbSBlYXN5LXRvLXVzZSB0byBoaWdoLXRlY2ggZGV2aWNlcywgd2UgaGF2ZSBhIHZhcmlldHkgb2YgdG9vbHMgdGhhdCB3aWxsIGVuaGFuY2UgeW91ciBhdCBob21lIGJlYXV0eSByZWdpbWUuJ1xyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG5cclxuICAgIGNvbnN0IHJ0bCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnR29vZCBmb3IgPGJyLz4nICsgJ0dsb3cnLFxyXG4gICAgICAgICAgICBkZXNjOiAnQSByYW5nZSBvZiBoYW5kLXBpY2tlZCBicmFuZHMgZm9yIHRoZSBiZXN0IG9mIGJvZHkgY2FyZSBwcm9kdWN0cyB0aGF0IGFyZSBtYWRlIHdpdGggY2xlYW4sIGFjdGl2ZSBpbmdyZWRpZW50cyBhbmQgYXJlIHJlc3VsdC1kcml2ZW4uIFRha2luZyBjYXJlIG9mIHlvdXIgYm9keSBpcyBlcXVhbGx5IHJld2FyZGluZy4nLFxyXG4gICAgICAgICAgICBzaG9wOiAnQm9keScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnR2V0IHNldCA8YnIvPicgKyAnR2xvdycsXHJcbiAgICAgICAgICAgIGRlc2M6ICdBIHJhbmdlIG9mIGhhbmQtcGlja2VkIGJyYW5kcyBmb3IgdGhlIGJlc3Qgb2YgYm9keSBjYXJlIHByb2R1Y3RzIHRoYXQgYXJlIG1hZGUgd2l0aCBjbGVhbiwgYWN0aXZlIGluZ3JlZGllbnRzIGFuZCBhcmUgcmVzdWx0LWRyaXZlbi4gVGFraW5nIGNhcmUgb2YgeW91ciBib2R5IGlzIGVxdWFsbHkgcmV3YXJkaW5nLicsXHJcbiAgICAgICAgICAgIHNob3A6ICdCb2R5JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdZb3UgPGJyLz4nICsgJ0dsb3cnLFxyXG4gICAgICAgICAgICBkZXNjOiAnQSByYW5nZSBvZiBoYW5kLXBpY2tlZCBicmFuZHMgZm9yIHRoZSBiZXN0IG9mIGJvZHkgY2FyZSBwcm9kdWN0cyB0aGF0IGFyZSBtYWRlIHdpdGggY2xlYW4sIGFjdGl2ZSBpbmdyZWRpZW50cyBhbmQgYXJlIHJlc3VsdC1kcml2ZW4uIFRha2luZyBjYXJlIG9mIHlvdXIgYm9keSBpcyBlcXVhbGx5IHJld2FyZGluZy4nLFxyXG4gICAgICAgICAgICBzaG9wOiAnQm9keScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnR2xvdyBGcm9tIDxici8+JyArICdXaXRoaW4nLFxyXG4gICAgICAgICAgICBkZXNjOiAnQSByYW5nZSBvZiBoYW5kLXBpY2tlZCBicmFuZHMgZm9yIHRoZSBiZXN0IG9mIGJvZHkgY2FyZSBwcm9kdWN0cyB0aGF0IGFyZSBtYWRlIHdpdGggY2xlYW4sIGFjdGl2ZSBpbmdyZWRpZW50cyBhbmQgYXJlIHJlc3VsdC1kcml2ZW4uIFRha2luZyBjYXJlIG9mIHlvdXIgYm9keSBpcyBlcXVhbGx5IHJld2FyZGluZy4nLFxyXG4gICAgICAgICAgICBzaG9wOiAnQm9keScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQXQgaG9tZSA8YnIvPicgKyAnR2xvdycsXHJcbiAgICAgICAgICAgIGRlc2M6ICdBIHJhbmdlIG9mIGhhbmQtcGlja2VkIGJyYW5kcyBmb3IgdGhlIGJlc3Qgb2YgYm9keSBjYXJlIHByb2R1Y3RzIHRoYXQgYXJlIG1hZGUgd2l0aCBjbGVhbiwgYWN0aXZlIGluZ3JlZGllbnRzIGFuZCBhcmUgcmVzdWx0LWRyaXZlbi4gVGFraW5nIGNhcmUgb2YgeW91ciBib2R5IGlzIGVxdWFsbHkgcmV3YXJkaW5nLicsXHJcbiAgICAgICAgICAgIHNob3A6ICdCb2R5JyxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBmYXZvcml0ZV9wcm9kdWN0cyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTG90aW9uIFA1MCBCUicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTG90aW9uIFA1MCBCUicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTG90aW9uIFA1MCBCUicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTG90aW9uIFA1MCBCUicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTG90aW9uIFA1MCBCUicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTG90aW9uIFA1MCBCUicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTG90aW9uIFA1MCBCUicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTG90aW9uIFA1MCBCUicsXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgXTtcclxuXHJcblxyXG4gICAgcmV0dXJuICg8RnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wib3V0ZXIgXCIgKyBzdHlsZXMuYm9keU91dGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW5uZXIgXCIgKyBzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJMZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHJ0bFtjdXJyZW50X2JvZHlfc2xpZGVdLnRpdGxlfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57cnRsW2N1cnJlbnRfYm9keV9zbGlkZV0uZGVzY308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5TaG9wIHtydGxbY3VycmVudF9ib2R5X3NsaWRlXS5zaG9wfTwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJSaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlciByZWY9e3NsaWRlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldF9ib2R5X3NsaWRlcihzbGlkZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0gey4uLmJvZHlfc2xpZGVyX3NldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnRsLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMvcHJvZHVjdHMvdG9wLycgKyAoaW5kZXgpICsgJy5wbmcnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0QmFjayBvbkJhY2s9e2JvZHlfc2xpZGVyLnNsaWNrUHJldn0gb25OZXh0PXtib2R5X3NsaWRlci5zbGlja05leHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wib3V0ZXIgXCIgKyBzdHlsZXMucHJvZHVjdERlc2NPdXRlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImlubmVyIFwiICsgc3R5bGVzLnByb2R1Y3REZXNjfT5cclxuICAgICAgICAgICAgICAgIDxwPkFmdGVyIGEgbG90IG9mIGRlbGliZXJhdGlvbiB3ZSBoYXZlIGN1cmF0ZWQgYSB3aWRlIHJhbmdlIG9mIHByb2R1Y3RzIHRoYXQgYXJlIGF2YWlsYWJsZSB0byB5b3UgMjQgeCA3IG9uIG91clxyXG4gICAgICAgICAgICAgICAgICAgIG9ubGluZSBib3V0aXF1ZSBnbG93LnNob3AuIFlvdSBjYW4gYWxzbyBwdXJjaGFzZSB0aGVtIGluLXN0b3JlIHdpdGggdGhlIGFzc2lzdGFuY2Ugb2Ygb3VyIHNraW5jYXJlIGV4cGVydHMgb3JcclxuICAgICAgICAgICAgICAgICAgICBldmVuIHBsYWNlIGFuIG9yZGVyIGZvciBjdXJic2lkZSBwaWNrLXVwLiBUaGVzZSBwcm9kdWN0cyBhcmUgdHJpZWQgYW5kIHRlc3RlZCBjdWx0IGZhdm91cml0ZXMgYW5kIG1hZGUgd2l0aFxyXG4gICAgICAgICAgICAgICAgICAgIGlubm92YXRpdmUgZm9ybXVsYXRpb25zIHRvIG9mZmVyIHlvdSBhbiBldmVybGFzdGluZyBnbG93IGFuZCBoZWxwIHlvdSBvbiB5b3VyIHNraW5jYXJlLCBiZWF1dHkgYW5kIHdlbGxuZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgam91cm5leVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wib3V0ZXIgXCIgKyBzdHlsZXMuY3VycmVudEZhdm91cml0ZXNPdXRlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImlubmVyIFwiICsgc3R5bGVzLmN1cnJlbnRGYXZvdXJpdGVzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2ZIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5WYXJzaGluaSdzIEN1cnJlbnQgRmF2b3VyaXRlczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXIgcmVmPXtzbGlkZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldF9mYXZvcml0ZV9zbGlkZXIoc2xpZGVyKVxyXG4gICAgICAgICAgICAgICAgfX0gey4uLmZhdm9yaXRlX3NsaWRlcl9zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZV9wcm9kdWN0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNmU2xpZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMvcHJvZHVjdHMvZmF2LycgKyAoaW5kZXgpICsgJy5wbmcnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm91dGVyIFwiICsgc3R5bGVzLnNob3BNeVNoZWxmaWVPdXRlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImlubmVyIFwiICsgc3R5bGVzLnNob3BNeVNoZWxmaWV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbUxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5TaG9wIG15IHNoZWxmaWU8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNtUmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiBCZWluZyBhIHNraW5jYXJlIGVudGh1c2lhc3QgbXlzZWxmLCBJIGFtIGFsd2F5cyBvbiB0aGUgbG9va291dCBmb3IgbmV3IHByb2R1Y3RzIHRvIGFkZCB0byBteSByZXBlcnRvaXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGVzZSBhcmUgYSBmZXcgb2YgbXkgY3VycmVudCBmYXZvdXJpdGVzLCBzb21lIG9mIHdoaWNoIGFyZSBzdGFwbGVzIGluIG15IHJvdXRpbmUgYW5kIHNvbWUgbmV3IG9uZXMgeW91IHdvdWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlIGhhcHB5IHRvIGRpc2NvdmVyLiBTaG9wIHRoZXNlIGN1cmF0ZWQgcHJvZHVjdHMgYW5kIHJlZnJlc2ggeW91ciBza2luY2FyZSBzaGVsZi5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5nbG93LnNob3A8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyc091dGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJzfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2N9PlxyXG4gICAgICAgICAgICAgICAgICAgIEFmdGVyIGEgbG90IG9mIGRlbGliZXJhdGlvbiB3ZSBoYXZlIGN1cmF0ZWQgYVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZGUgcmFuZ2Ugb2YgcHJvZHVjdHMgdGhhdCBhcmUgYXZhaWxhYmxlIHRvIHlvdSAyNCB4IDcgb24gb3VyIG9ubGluZSBib3V0aXF1ZSBnbG93LnNob3AuIFlvdSBjYW4gYWxzbyBwdXJjaGFzZSB0aGVtIGluLXN0b3JlIHdpdGggdGhlIGFzc2lzdGFuY2Ugb2Ygb3VyIHNraW5jYXJlIGV4cGVydHMgb3JcclxuICAgICAgICAgICAgICAgICAgICBldmVuIHBsYWNlIGFuIG9yZGVyIGZvciBjdXJic2lkZSBwaWNrLXVwLiBUaGVzZSBwcm9kdWN0cyBhcmUgdHJpZWQgYW5kIHRlc3RlZCBjdWx0IGZhdm91cml0ZXMgYW5kIG1hZGVcclxuICAgICAgICAgICAgICAgICAgICB3aXRoIGlubm92YXRpdmUgZm9ybXVsYXRpb25zIHRvIG9mZmVyIHlvdSBhbiBldmVybGFzdGluZyBnbG93IGFuZCBoZWxwIHlvdSBvbiB5b3VyIHNraW5jYXJlLCBiZWF1dHkgYW5kIHdlbGxuZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgam91cm5leS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2xpZGVyIHJlZj17c2xpZGVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlcihzbGlkZXIpXHJcbiAgICAgICAgICAgICAgICB9fSB7Li4ucHJvZHVjdHNfYWx0ZXJuYXRlX3NldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzX2FsdGVybmF0ZV9jb250ZW50Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZSA9PT0gaW5kZXggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJblZpZXcgdGhyZXNob2xkPXswfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh7cmVmLCBpblZpZXd9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17aW5WaWV3ID8ge29wYWNpdHk6IDF9IDoge29wYWNpdHk6IDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAwLjd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JblZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e1wiZ3IgXCIgKyAoY3VycmVudF9wcm9kdWN0c19hbHRlcm5hdGVfc2xpZGUgPT09IGluZGV4ID8gc3R5bGVzLmJhbm5lciA6ICcnKX0gc3JjPXsnL2ltYWdlcy9wcm9kdWN0cy9hbHRlcm5hdGUtcHJvZHVjdHMvJyArIGluZGV4ICsgJy5wbmcnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+MHtpbmRleCArIDF9IC8gPHNwYW4+MHtwcm9kdWN0c19hbHRlcm5hdGVfY29udGVudC5sZW5ndGh9PC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eydpY29ucy9iYWNrLnN2Zyd9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlci5zbGlja1ByZXYoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17J2ljb25zL2ZvcndhcmQuc3ZnJ30gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0c19hbHRlcm5hdGVfc2xpZGVyLnNsaWNrTmV4dCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L0ZyYWdtZW50PilcclxuXHJcblxyXG59IiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9uZXh0YmFjay5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQge0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5leHRCYWNrKHtvbk5leHQsIG9uQmFja30pIHtcclxuXHJcblxyXG4gICAgcmV0dXJuICg8RnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXh0YmFja30+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXsnL2ljb25zL2NvbW1vbi9iYWNrLnN2Zyd9IG9uQ2xpY2s9e29uQmFja30vPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17Jy9pY29ucy9jb21tb24vbmV4dC5zdmcnfSBvbkNsaWNrPXtvbk5leHR9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+KVxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vbmV4dGJhY2subW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9uZXh0YmFjay5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9uZXh0YmFjay5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubmV4dGJhY2tfbmV4dGJhY2tfX0NDb0F6IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDgwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9uZXh0YmFjay5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uZXh0YmFjayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm5leHRiYWNrXCI6IFwibmV4dGJhY2tfbmV4dGJhY2tfX0NDb0F6XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
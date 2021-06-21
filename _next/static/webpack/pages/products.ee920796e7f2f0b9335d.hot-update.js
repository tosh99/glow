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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
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
    title: 'Warming Honey Cleanser'
  }, {
    title: 'Mitti raw face mask pureearth'
  }, {
    title: 'Pro heal serum is clinical'
  }, {
    title: 'Oligo proteins marines serum'
  }, {
    title: 'Lait vip 02 '
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_shared_components_nextback_nextback__WEBPACK_IMPORTED_MODULE_5__.default, {
              onBack: favorite_slider.slickPrev,
              onNext: favorite_slider.slickNext
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 25
            }, this)
          }, void 0, false, {
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
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  src: '/images/products/fav/' + index + '.png'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
                  children: item.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 37
            }, _this);
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
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
            lineNumber: 208,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().smRight),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            children: " Being a skincare enthusiast myself, I am always on the lookout for new products to add to my repertoire. These are a few of my current favourites, some of which are staples in my routine and some new ones you would be happy to discover. Shop these curated products and refresh your skincare shelf."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
            children: "glow.shop"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 205,
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
          lineNumber: 223,
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
                      lineNumber: 243,
                      columnNumber: 53
                    }, _this);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 41
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  className: "gr " + (current_products_alternate_slide === index ? (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().banner) : ''),
                  src: '/images/products/alternate-products/' + index + '.png'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                    children: ["0", index + 1, " / ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: ["0", products_alternate_content.length]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 255,
                      columnNumber: 60
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 255,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: item.content
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      src: 'icons/back.svg',
                      onClick: function onClick() {
                        products_alternate_slider.slickPrev();
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 258,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      src: 'icons/forward.svg',
                      onClick: function onClick() {
                        products_alternate_slider.slickNext();
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 261,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 37
            }, _this);
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 13
  }, this);
}

_s(Products, "hcUdavP5dNOQV/PdQg5w6AduJXw=");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJib2R5X3NsaWRlcl9zZXR0aW5ncyIsImRvdHMiLCJzcGVlZCIsImFycm93cyIsImNlbnRlck1vZGUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJhZGFwdGl2ZUhlaWdodCIsImJlZm9yZUNoYW5nZSIsImN1cnJlbnQiLCJuZXh0Iiwic2V0X2N1cnJlbnRfYm9keV9zbGlkZSIsInVzZVN0YXRlIiwiY3VycmVudF9ib2R5X3NsaWRlIiwiYm9keV9zbGlkZXIiLCJzZXRfYm9keV9zbGlkZXIiLCJmYXZvcml0ZV9zbGlkZXJfc2V0dGluZ3MiLCJ2YXJpYWJsZVdpZHRoIiwiZmF2b3JpdGVfc2xpZGVyIiwic2V0X2Zhdm9yaXRlX3NsaWRlciIsInByb2R1Y3RzX2FsdGVybmF0ZV9zZXR0aW5ncyIsInNldF9jdXJyZW50X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZSIsInByb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZXIiLCJzZXRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlciIsImN1cnJlbnRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlIiwicHJvZHVjdHNfYWx0ZXJuYXRlX2NvbnRlbnQiLCJ0aXRsZSIsImNvbnRlbnQiLCJydGwiLCJkZXNjIiwic2hvcCIsImZhdm9yaXRlX3Byb2R1Y3RzIiwic3R5bGVzIiwiX19odG1sIiwic2xpZGVyIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic2xpY2tQcmV2Iiwic2xpY2tOZXh0IiwicmVmIiwiaW5WaWV3Iiwib3BhY2l0eSIsImR1cmF0aW9uIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQy9CLE1B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QTtBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVI7QUFpQ0gsV0FsQ0Q7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0Rkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUErSUg7O0dBN1F1QnpDLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMuZWU5MjA3OTZlN2YyZjBiOTMzNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvcHJvZHVjdHMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbmltcG9ydCB7SW5WaWV3LCB1c2VJblZpZXd9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcbmltcG9ydCBOZXh0QmFjayBmcm9tIFwiLi4vc2hhcmVkL2NvbXBvbmVudHMvbmV4dGJhY2svbmV4dGJhY2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKCkge1xyXG4gICAgY29uc3QgYm9keV9zbGlkZXJfc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgc3BlZWQ6IDEyNTAsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiA0MDAwLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgICAgICBiZWZvcmVDaGFuZ2U6IChjdXJyZW50LCBuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2JvZHlfc2xpZGUobmV4dClcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIGNvbnN0IFtjdXJyZW50X2JvZHlfc2xpZGUsIHNldF9jdXJyZW50X2JvZHlfc2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbYm9keV9zbGlkZXIsIHNldF9ib2R5X3NsaWRlcl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgY29uc3QgZmF2b3JpdGVfc2xpZGVyX3NldHRpbmdzID0ge1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIHNwZWVkOiAxMjUwLFxyXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgW2Zhdm9yaXRlX3NsaWRlciwgc2V0X2Zhdm9yaXRlX3NsaWRlcl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHNfYWx0ZXJuYXRlX3NldHRpbmdzID0ge1xyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDEyNTAsXHJcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogNDAwMCxcclxuICAgICAgICBiZWZvcmVDaGFuZ2U6IChjdXJyZW50LCBuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldF9jdXJyZW50X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZShuZXh0KVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZXIsIHNldF9wcm9kdWN0c19hbHRlcm5hdGVfc2xpZGVyXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY3VycmVudF9wcm9kdWN0c19hbHRlcm5hdGVfc2xpZGUsIHNldF9jdXJyZW50X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgcHJvZHVjdHNfYWx0ZXJuYXRlX2NvbnRlbnQgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0JvZHknLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnQSByYW5nZSBvZiBoYW5kLXBpY2tlZCBicmFuZHMgZm9yIHRoZSBiZXN0IG9mIGJvZHkgY2FyZSBwcm9kdWN0cyB0aGF0IGFyZSBtYWRlIHdpdGggY2xlYW4sIGFjdGl2ZSBpbmdyZWRpZW50cyBhbmQgYXJlIHJlc3VsdC1kcml2ZW4uIFRha2luZyBjYXJlIG9mIHlvdXIgYm9keSBpcyBlcXVhbGx5IHJld2FyZGluZy4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSGFpcicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdHaXZlIHlvdXIgaGFpciBjYXJlIHJvdXRpbmUgYSBidW1wIG9udG8gdGhlIG5leHQgbGV2ZWwuIFdoZXRoZXIgaXQgaXMgZmluZGluZyB0aGUgcmlnaHQgcHJvZHVjdHMgZm9yIHlvdXIgaGFpciB0eXBlIGFuZCBjb25jZXJuIG9yIGFkZGluZyBzb21lIGxvdmVseSBzZXJ1bXMgZm9yIHRoYXQgZXh0cmEgYm91bmNlLCB3ZeKAmXZlIGN1cmF0ZWQgYW4gYXJyYXkgb2YgcHJvZHVjdHMgZm9yIGVhY2ggYW5kIGV2ZXJ5IG9uZSBvZiB5b3VyIG5lZWRzLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTa2luY2FyZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdXaGV0aGVyIHlvdeKAmXJlIGEgYmVnaW5uZXIgb3IgYSBza2luY2FyZSBlbnRodXNpYXN0LCB3ZSBoYXZlIHNvbWV0aGluZyBmb3IgeW91IGFsbC4gQ2hvb3NlIGZyb20gb3VyIHJlcGVydG9pcmUgb2YgY3VyYXRlZCBza2luY2FyZSBwcm9kdWN0cyB0aGF0IGhhdmUgYWNxdWlyZWQgYSBjdWx0IHN0YXR1cyBmb3IgdGhlaXIgbmV3LWFnZSBmb3JtdWxhdGlvbnMgYW5kIGFyZSB0YXJnZXRlZCB0b3dhcmRzIGxhc3Rpbmcgc2tpbmNhcmUgYmVuZWZpdHMuIEEgaGVhbHRoeSBnbG93IGF3YWl0cyB5b3UuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1N1cHBsZW1lbnRzJyxcclxuICAgICAgICAgICAgY29udGVudDogJ0F0IEdsb3csIHdlIHByb21vdGUgb3ZlcmFsbCB3ZWxsLWJlaW5nIGZvciBoZWFsdGh5IHNraW4gYW5kIGhhaXIuIEZpbmQgc3VwcGxlbWVudHMgdGhhdCBjb21lIHJlY29tbWVuZGVkIGZvciBhIGdsb3cgdGhhdOKAmXMgZnJvbSB3aXRoaW4uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1Rvb2xzJyxcclxuICAgICAgICAgICAgY29udGVudDogJ0ZvciBhdC1ob21lIGZhY2lhbHMgYW5kIHVwa2VlcCwgd2UgaGF2ZSBhIHJhbmdlIG9mIHNvbWUgb2YgdGhlIG1vc3QgaW5ub3ZhdGl2ZSB0ZWNobm9sb2d5IHRoYXQgd2lsbCB3b3JrIG9uIGEgZGVlcGVyIGxldmVsIGZvciB0aGF0IGdsb3cgZnJvbSB3aXRoaW4uIFByZXAsIHByaW1lIGFuZCBwb2xpc2ggeW91ciBza2luIHdpdGggdGhlc2UgbXVzdC10cnkgdG9vbHMuIFN0YXJ0aW5nIGZyb20gZWFzeS10by11c2UgdG8gaGlnaC10ZWNoIGRldmljZXMsIHdlIGhhdmUgYSB2YXJpZXR5IG9mIHRvb2xzIHRoYXQgd2lsbCBlbmhhbmNlIHlvdXIgYXQgaG9tZSBiZWF1dHkgcmVnaW1lLidcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuXHJcbiAgICBjb25zdCBydGwgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0dvb2QgZm9yIDxici8+JyArICdHbG93JyxcclxuICAgICAgICAgICAgZGVzYzogJ0EgcmFuZ2Ugb2YgaGFuZC1waWNrZWQgYnJhbmRzIGZvciB0aGUgYmVzdCBvZiBib2R5IGNhcmUgcHJvZHVjdHMgdGhhdCBhcmUgbWFkZSB3aXRoIGNsZWFuLCBhY3RpdmUgaW5ncmVkaWVudHMgYW5kIGFyZSByZXN1bHQtZHJpdmVuLiBUYWtpbmcgY2FyZSBvZiB5b3VyIGJvZHkgaXMgZXF1YWxseSByZXdhcmRpbmcuJyxcclxuICAgICAgICAgICAgc2hvcDogJ0JvZHknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0dldCBzZXQgPGJyLz4nICsgJ0dsb3cnLFxyXG4gICAgICAgICAgICBkZXNjOiAnQSByYW5nZSBvZiBoYW5kLXBpY2tlZCBicmFuZHMgZm9yIHRoZSBiZXN0IG9mIGJvZHkgY2FyZSBwcm9kdWN0cyB0aGF0IGFyZSBtYWRlIHdpdGggY2xlYW4sIGFjdGl2ZSBpbmdyZWRpZW50cyBhbmQgYXJlIHJlc3VsdC1kcml2ZW4uIFRha2luZyBjYXJlIG9mIHlvdXIgYm9keSBpcyBlcXVhbGx5IHJld2FyZGluZy4nLFxyXG4gICAgICAgICAgICBzaG9wOiAnQm9keScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnWW91IDxici8+JyArICdHbG93JyxcclxuICAgICAgICAgICAgZGVzYzogJ0EgcmFuZ2Ugb2YgaGFuZC1waWNrZWQgYnJhbmRzIGZvciB0aGUgYmVzdCBvZiBib2R5IGNhcmUgcHJvZHVjdHMgdGhhdCBhcmUgbWFkZSB3aXRoIGNsZWFuLCBhY3RpdmUgaW5ncmVkaWVudHMgYW5kIGFyZSByZXN1bHQtZHJpdmVuLiBUYWtpbmcgY2FyZSBvZiB5b3VyIGJvZHkgaXMgZXF1YWxseSByZXdhcmRpbmcuJyxcclxuICAgICAgICAgICAgc2hvcDogJ0JvZHknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0dsb3cgRnJvbSA8YnIvPicgKyAnV2l0aGluJyxcclxuICAgICAgICAgICAgZGVzYzogJ0EgcmFuZ2Ugb2YgaGFuZC1waWNrZWQgYnJhbmRzIGZvciB0aGUgYmVzdCBvZiBib2R5IGNhcmUgcHJvZHVjdHMgdGhhdCBhcmUgbWFkZSB3aXRoIGNsZWFuLCBhY3RpdmUgaW5ncmVkaWVudHMgYW5kIGFyZSByZXN1bHQtZHJpdmVuLiBUYWtpbmcgY2FyZSBvZiB5b3VyIGJvZHkgaXMgZXF1YWxseSByZXdhcmRpbmcuJyxcclxuICAgICAgICAgICAgc2hvcDogJ0JvZHknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0F0IGhvbWUgPGJyLz4nICsgJ0dsb3cnLFxyXG4gICAgICAgICAgICBkZXNjOiAnQSByYW5nZSBvZiBoYW5kLXBpY2tlZCBicmFuZHMgZm9yIHRoZSBiZXN0IG9mIGJvZHkgY2FyZSBwcm9kdWN0cyB0aGF0IGFyZSBtYWRlIHdpdGggY2xlYW4sIGFjdGl2ZSBpbmdyZWRpZW50cyBhbmQgYXJlIHJlc3VsdC1kcml2ZW4uIFRha2luZyBjYXJlIG9mIHlvdXIgYm9keSBpcyBlcXVhbGx5IHJld2FyZGluZy4nLFxyXG4gICAgICAgICAgICBzaG9wOiAnQm9keScsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgZmF2b3JpdGVfcHJvZHVjdHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0xvdGlvbiBQNTAgQlInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1dhcm1pbmcgSG9uZXkgQ2xlYW5zZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ01pdHRpIHJhdyBmYWNlIG1hc2sgcHVyZWVhcnRoJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQcm8gaGVhbCBzZXJ1bSBpcyBjbGluaWNhbCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnT2xpZ28gcHJvdGVpbnMgbWFyaW5lcyBzZXJ1bScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTGFpdCB2aXAgMDIgJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdMb3Rpb24gUDUwIEJSJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdMb3Rpb24gUDUwIEJSJyxcclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICBdO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKDxGcmFnbWVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJvdXRlciBcIiArIHN0eWxlcy5ib2R5T3V0ZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJpbm5lciBcIiArIHN0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYkxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcnRsW2N1cnJlbnRfYm9keV9zbGlkZV0udGl0bGV9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntydGxbY3VycmVudF9ib2R5X3NsaWRlXS5kZXNjfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPlNob3Age3J0bFtjdXJyZW50X2JvZHlfc2xpZGVdLnNob3B9PC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYlJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIHJlZj17c2xpZGVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0X2JvZHlfc2xpZGVyKHNsaWRlcilcclxuICAgICAgICAgICAgICAgICAgICB9fSB7Li4uYm9keV9zbGlkZXJfc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydGwubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2ltYWdlcy9wcm9kdWN0cy90b3AvJyArIChpbmRleCkgKyAnLnBuZyd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRCYWNrIG9uQmFjaz17Ym9keV9zbGlkZXIuc2xpY2tQcmV2fSBvbk5leHQ9e2JvZHlfc2xpZGVyLnNsaWNrTmV4dH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm91dGVyIFwiICsgc3R5bGVzLnByb2R1Y3REZXNjT3V0ZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJpbm5lciBcIiArIHN0eWxlcy5wcm9kdWN0RGVzY30+XHJcbiAgICAgICAgICAgICAgICA8cD5BZnRlciBhIGxvdCBvZiBkZWxpYmVyYXRpb24gd2UgaGF2ZSBjdXJhdGVkIGEgd2lkZSByYW5nZSBvZiBwcm9kdWN0cyB0aGF0IGFyZSBhdmFpbGFibGUgdG8geW91IDI0IHggNyBvbiBvdXJcclxuICAgICAgICAgICAgICAgICAgICBvbmxpbmUgYm91dGlxdWUgZ2xvdy5zaG9wLiBZb3UgY2FuIGFsc28gcHVyY2hhc2UgdGhlbSBpbi1zdG9yZSB3aXRoIHRoZSBhc3Npc3RhbmNlIG9mIG91ciBza2luY2FyZSBleHBlcnRzIG9yXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbiBwbGFjZSBhbiBvcmRlciBmb3IgY3VyYnNpZGUgcGljay11cC4gVGhlc2UgcHJvZHVjdHMgYXJlIHRyaWVkIGFuZCB0ZXN0ZWQgY3VsdCBmYXZvdXJpdGVzIGFuZCBtYWRlIHdpdGhcclxuICAgICAgICAgICAgICAgICAgICBpbm5vdmF0aXZlIGZvcm11bGF0aW9ucyB0byBvZmZlciB5b3UgYW4gZXZlcmxhc3RpbmcgZ2xvdyBhbmQgaGVscCB5b3Ugb24geW91ciBza2luY2FyZSwgYmVhdXR5IGFuZCB3ZWxsbmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIGpvdXJuZXlcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm91dGVyIFwiICsgc3R5bGVzLmN1cnJlbnRGYXZvdXJpdGVzT3V0ZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJpbm5lciBcIiArIHN0eWxlcy5jdXJyZW50RmF2b3VyaXRlc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNmSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+VmFyc2hpbmkncyBDdXJyZW50IEZhdm91cml0ZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0QmFjayBvbkJhY2s9e2Zhdm9yaXRlX3NsaWRlci5zbGlja1ByZXZ9IG9uTmV4dD17ZmF2b3JpdGVfc2xpZGVyLnNsaWNrTmV4dH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPFNsaWRlciByZWY9e3NsaWRlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0X2Zhdm9yaXRlX3NsaWRlcihzbGlkZXIpXHJcbiAgICAgICAgICAgICAgICB9fSB7Li4uZmF2b3JpdGVfc2xpZGVyX3NldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlX3Byb2R1Y3RzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2ZTbGlkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2ltYWdlcy9wcm9kdWN0cy9mYXYvJyArIChpbmRleCkgKyAnLnBuZyd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj57aXRlbS50aXRsZX08L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wib3V0ZXIgXCIgKyBzdHlsZXMuc2hvcE15U2hlbGZpZU91dGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW5uZXIgXCIgKyBzdHlsZXMuc2hvcE15U2hlbGZpZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNtTGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlNob3AgbXkgc2hlbGZpZTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc21SaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+IEJlaW5nIGEgc2tpbmNhcmUgZW50aHVzaWFzdCBteXNlbGYsIEkgYW0gYWx3YXlzIG9uIHRoZSBsb29rb3V0IGZvciBuZXcgcHJvZHVjdHMgdG8gYWRkIHRvIG15IHJlcGVydG9pcmUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZXNlIGFyZSBhIGZldyBvZiBteSBjdXJyZW50IGZhdm91cml0ZXMsIHNvbWUgb2Ygd2hpY2ggYXJlIHN0YXBsZXMgaW4gbXkgcm91dGluZSBhbmQgc29tZSBuZXcgb25lcyB5b3Ugd291bGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmUgaGFwcHkgdG8gZGlzY292ZXIuIFNob3AgdGhlc2UgY3VyYXRlZCBwcm9kdWN0cyBhbmQgcmVmcmVzaCB5b3VyIHNraW5jYXJlIHNoZWxmLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPmdsb3cuc2hvcDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJzT3V0ZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcnN9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY30+XHJcbiAgICAgICAgICAgICAgICAgICAgQWZ0ZXIgYSBsb3Qgb2YgZGVsaWJlcmF0aW9uIHdlIGhhdmUgY3VyYXRlZCBhXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkZSByYW5nZSBvZiBwcm9kdWN0cyB0aGF0IGFyZSBhdmFpbGFibGUgdG8geW91IDI0IHggNyBvbiBvdXIgb25saW5lIGJvdXRpcXVlIGdsb3cuc2hvcC4gWW91IGNhbiBhbHNvIHB1cmNoYXNlIHRoZW0gaW4tc3RvcmUgd2l0aCB0aGUgYXNzaXN0YW5jZSBvZiBvdXIgc2tpbmNhcmUgZXhwZXJ0cyBvclxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW4gcGxhY2UgYW4gb3JkZXIgZm9yIGN1cmJzaWRlIHBpY2stdXAuIFRoZXNlIHByb2R1Y3RzIGFyZSB0cmllZCBhbmQgdGVzdGVkIGN1bHQgZmF2b3VyaXRlcyBhbmQgbWFkZVxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGggaW5ub3ZhdGl2ZSBmb3JtdWxhdGlvbnMgdG8gb2ZmZXIgeW91IGFuIGV2ZXJsYXN0aW5nIGdsb3cgYW5kIGhlbHAgeW91IG9uIHlvdXIgc2tpbmNhcmUsIGJlYXV0eSBhbmQgd2VsbG5lc3NcclxuICAgICAgICAgICAgICAgICAgICBqb3VybmV5LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXIgcmVmPXtzbGlkZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldF9wcm9kdWN0c19hbHRlcm5hdGVfc2xpZGVyKHNsaWRlcilcclxuICAgICAgICAgICAgICAgIH19IHsuLi5wcm9kdWN0c19hbHRlcm5hdGVfc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHNfYWx0ZXJuYXRlX2NvbnRlbnQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlID09PSBpbmRleCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluVmlldyB0aHJlc2hvbGQ9ezB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHtyZWYsIGluVmlld30pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7b3BhY2l0eTogMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtpblZpZXcgPyB7b3BhY2l0eTogMX0gOiB7b3BhY2l0eTogMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDAuN319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17XCJnciBcIiArIChjdXJyZW50X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZSA9PT0gaW5kZXggPyBzdHlsZXMuYmFubmVyIDogJycpfSBzcmM9eycvaW1hZ2VzL3Byb2R1Y3RzL2FsdGVybmF0ZS1wcm9kdWN0cy8nICsgaW5kZXggKyAnLnBuZyd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4we2luZGV4ICsgMX0gLyA8c3Bhbj4we3Byb2R1Y3RzX2FsdGVybmF0ZV9jb250ZW50Lmxlbmd0aH08L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17J2ljb25zL2JhY2suc3ZnJ30gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0c19hbHRlcm5hdGVfc2xpZGVyLnNsaWNrUHJldigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnaWNvbnMvZm9yd2FyZC5zdmcnfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZXIuc2xpY2tOZXh0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvRnJhZ21lbnQ+KVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
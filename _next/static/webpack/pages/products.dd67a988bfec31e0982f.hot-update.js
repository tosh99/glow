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
    autoplay: false,
    autoplaySpeed: 4000,
    beforeChange: function beforeChange(current, next) {
      set_current_products_alternate_slide(next);
    }
  };

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
      products_alternate_slider = _useState4[0],
      set_products_alternate_slider = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      current_products_alternate_slide = _useState5[0],
      set_current_products_alternate_slide = _useState5[1];

  var products_alternate_content = [{
    title: 'Sesderma Azelac Ru Liposomal Serum',
    content: 'A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and are result-driven. Taking care of your body is equally rewarding.'
  }, {
    title: 'Cleansing complex',
    content: 'Give your hair care routine a bump onto the next level. Whether it is finding the right products for your hair type and concern or adding some lovely serums for that extra bounce, we’ve curated an array of products for each and every one of your needs.'
  }, {
    title: 'Mask vivant',
    content: 'Whether you’re a beginner or a skincare enthusiast, we have something for you all. Choose from our repertoire of curated skincare products that have acquired a cult status for their new-age formulations and are targeted towards lasting skincare benefits. A healthy glow awaits you.'
  }, {
    title: 'Lait vip 02',
    content: 'At Glow, we promote overall well-being for healthy skin and hair. Find supplements that come recommended for a glow that’s from within.'
  }, {
    title: 'P50 pigm400',
    content: 'For at-home facials and upkeep, we have a range of some of the most innovative technology that will work on a deeper level for that glow from within. Prep, prime and polish your skin with these must-try tools. Starting from easy-to-use to high-tech devices, we have a variety of tools that will enhance your at home beauty regime.'
  }, {
    title: 'Isdin fotoprotector fusion water',
    content: 'For at-home facials and upkeep, we have a range of some of the most innovative technology that will work on a deeper level for that glow from within. Prep, prime and polish your skin with these must-try tools. Starting from easy-to-use to high-tech devices, we have a variety of tools that will enhance your at home beauty regime.'
  }, {
    title: 'Dubai lips',
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
    title: 'Lait vip 02'
  }, {
    title: 'Heliocare mineral tolerance fluid'
  }, {
    title: 'Biokiss lip balm'
  }, {
    title: 'Creme aux acid de fruits'
  }, {
    title: 'Masque vip 02'
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
              lineNumber: 152,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: rtl[current_body_slide].desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
            children: ["Shop ", rtl[current_body_slide].shop]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
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
                    lineNumber: 165,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 41
              }, _this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_shared_components_nextback_nextback__WEBPACK_IMPORTED_MODULE_5__.default, {
              onBack: body_slider.slickPrev,
              onNext: body_slider.slickNext
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "outer " + (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productDescOuter),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "inner " + (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productDesc),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: "After a lot of deliberation we have curated a wide range of products that are available to you 24 x 7 on our online boutique glow.shop. You can also purchase them in-store with the assistance of our skincare experts or even place an order for curbside pick-up. These products are tried and tested cult favourites and made with innovative formulations to offer you an everlasting glow and help you on your skincare, beauty and wellness journey"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
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
            lineNumber: 194,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_shared_components_nextback_nextback__WEBPACK_IMPORTED_MODULE_5__.default, {
              onBack: favorite_slider.slickPrev,
              onNext: favorite_slider.slickNext
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
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
                  lineNumber: 207,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
                  children: item.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 37
            }, _this);
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
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
            lineNumber: 220,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().smRight),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            children: " Being a skincare enthusiast myself, I am always on the lookout for new products to add to my repertoire. These are a few of my current favourites, some of which are staples in my routine and some new ones you would be happy to discover. Shop these curated products and refresh your skincare shelf."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
            children: "glow.shop"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().slidersOuter),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sliders),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({
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
                      lineNumber: 247,
                      columnNumber: 53
                    }, _this);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 41
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  className: "gr " + (current_products_alternate_slide === index ? (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().banner) : ''),
                  src: '/images/products/alternate-products/' + index + '.png'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shopNow),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: "SHOP NOW"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 260,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_shared_components_nextback_nextback__WEBPACK_IMPORTED_MODULE_5__.default, {
                    theme: 'light',
                    onBack: products_alternate_slider.slickPrev,
                    onNext: products_alternate_slider.slickNext
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 261,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 258,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 37
            }, _this);
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 13
  }, this);
}

_s(Products, "REa492nie2cULMBdhG5a87L8PqM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJib2R5X3NsaWRlcl9zZXR0aW5ncyIsImRvdHMiLCJzcGVlZCIsImFycm93cyIsImNlbnRlck1vZGUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJhZGFwdGl2ZUhlaWdodCIsImJlZm9yZUNoYW5nZSIsImN1cnJlbnQiLCJuZXh0Iiwic2V0X2N1cnJlbnRfYm9keV9zbGlkZSIsInVzZVN0YXRlIiwiY3VycmVudF9ib2R5X3NsaWRlIiwiYm9keV9zbGlkZXIiLCJzZXRfYm9keV9zbGlkZXIiLCJmYXZvcml0ZV9zbGlkZXJfc2V0dGluZ3MiLCJ2YXJpYWJsZVdpZHRoIiwiZmF2b3JpdGVfc2xpZGVyIiwic2V0X2Zhdm9yaXRlX3NsaWRlciIsInByb2R1Y3RzX2FsdGVybmF0ZV9zZXR0aW5ncyIsInNldF9jdXJyZW50X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZSIsInByb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZXIiLCJzZXRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlciIsImN1cnJlbnRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlIiwicHJvZHVjdHNfYWx0ZXJuYXRlX2NvbnRlbnQiLCJ0aXRsZSIsImNvbnRlbnQiLCJydGwiLCJkZXNjIiwic2hvcCIsImZhdm9yaXRlX3Byb2R1Y3RzIiwic3R5bGVzIiwiX19odG1sIiwic2xpZGVyIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic2xpY2tQcmV2Iiwic2xpY2tOZXh0IiwicmVmIiwiaW5WaWV3Iiwib3BhY2l0eSIsImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQy9CLE1BQU1DLG9CQUFv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Rkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUFnSUg7O0dBMVF1QnpDLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMuZGQ2N2E5ODhiZmVjMzFlMDk4MmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvcHJvZHVjdHMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbmltcG9ydCB7SW5WaWV3LCB1c2VJblZpZXd9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcbmltcG9ydCBOZXh0QmFjayBmcm9tIFwiLi4vc2hhcmVkL2NvbXBvbmVudHMvbmV4dGJhY2svbmV4dGJhY2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKCkge1xyXG4gICAgY29uc3QgYm9keV9zbGlkZXJfc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgc3BlZWQ6IDEyNTAsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiA0MDAwLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgICAgICBiZWZvcmVDaGFuZ2U6IChjdXJyZW50LCBuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2JvZHlfc2xpZGUobmV4dClcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIGNvbnN0IFtjdXJyZW50X2JvZHlfc2xpZGUsIHNldF9jdXJyZW50X2JvZHlfc2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbYm9keV9zbGlkZXIsIHNldF9ib2R5X3NsaWRlcl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgY29uc3QgZmF2b3JpdGVfc2xpZGVyX3NldHRpbmdzID0ge1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIHNwZWVkOiAxMjUwLFxyXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgW2Zhdm9yaXRlX3NsaWRlciwgc2V0X2Zhdm9yaXRlX3NsaWRlcl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHNfYWx0ZXJuYXRlX3NldHRpbmdzID0ge1xyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDEyNTAsXHJcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDQwMDAsXHJcbiAgICAgICAgYmVmb3JlQ2hhbmdlOiAoY3VycmVudCwgbmV4dCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRfY3VycmVudF9wcm9kdWN0c19hbHRlcm5hdGVfc2xpZGUobmV4dClcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIGNvbnN0IFtwcm9kdWN0c19hbHRlcm5hdGVfc2xpZGVyLCBzZXRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlcl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbY3VycmVudF9wcm9kdWN0c19hbHRlcm5hdGVfc2xpZGUsIHNldF9jdXJyZW50X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHByb2R1Y3RzX2FsdGVybmF0ZV9jb250ZW50ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTZXNkZXJtYSBBemVsYWMgUnUgTGlwb3NvbWFsIFNlcnVtJyxcclxuICAgICAgICAgICAgY29udGVudDogJ0EgcmFuZ2Ugb2YgaGFuZC1waWNrZWQgYnJhbmRzIGZvciB0aGUgYmVzdCBvZiBib2R5IGNhcmUgcHJvZHVjdHMgdGhhdCBhcmUgbWFkZSB3aXRoIGNsZWFuLCBhY3RpdmUgaW5ncmVkaWVudHMgYW5kIGFyZSByZXN1bHQtZHJpdmVuLiBUYWtpbmcgY2FyZSBvZiB5b3VyIGJvZHkgaXMgZXF1YWxseSByZXdhcmRpbmcuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NsZWFuc2luZyBjb21wbGV4JyxcclxuICAgICAgICAgICAgY29udGVudDogJ0dpdmUgeW91ciBoYWlyIGNhcmUgcm91dGluZSBhIGJ1bXAgb250byB0aGUgbmV4dCBsZXZlbC4gV2hldGhlciBpdCBpcyBmaW5kaW5nIHRoZSByaWdodCBwcm9kdWN0cyBmb3IgeW91ciBoYWlyIHR5cGUgYW5kIGNvbmNlcm4gb3IgYWRkaW5nIHNvbWUgbG92ZWx5IHNlcnVtcyBmb3IgdGhhdCBleHRyYSBib3VuY2UsIHdl4oCZdmUgY3VyYXRlZCBhbiBhcnJheSBvZiBwcm9kdWN0cyBmb3IgZWFjaCBhbmQgZXZlcnkgb25lIG9mIHlvdXIgbmVlZHMuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ01hc2sgdml2YW50JyxcclxuICAgICAgICAgICAgY29udGVudDogJ1doZXRoZXIgeW914oCZcmUgYSBiZWdpbm5lciBvciBhIHNraW5jYXJlIGVudGh1c2lhc3QsIHdlIGhhdmUgc29tZXRoaW5nIGZvciB5b3UgYWxsLiBDaG9vc2UgZnJvbSBvdXIgcmVwZXJ0b2lyZSBvZiBjdXJhdGVkIHNraW5jYXJlIHByb2R1Y3RzIHRoYXQgaGF2ZSBhY3F1aXJlZCBhIGN1bHQgc3RhdHVzIGZvciB0aGVpciBuZXctYWdlIGZvcm11bGF0aW9ucyBhbmQgYXJlIHRhcmdldGVkIHRvd2FyZHMgbGFzdGluZyBza2luY2FyZSBiZW5lZml0cy4gQSBoZWFsdGh5IGdsb3cgYXdhaXRzIHlvdS4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTGFpdCB2aXAgMDInLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnQXQgR2xvdywgd2UgcHJvbW90ZSBvdmVyYWxsIHdlbGwtYmVpbmcgZm9yIGhlYWx0aHkgc2tpbiBhbmQgaGFpci4gRmluZCBzdXBwbGVtZW50cyB0aGF0IGNvbWUgcmVjb21tZW5kZWQgZm9yIGEgZ2xvdyB0aGF04oCZcyBmcm9tIHdpdGhpbi4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUDUwIHBpZ200MDAnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnRm9yIGF0LWhvbWUgZmFjaWFscyBhbmQgdXBrZWVwLCB3ZSBoYXZlIGEgcmFuZ2Ugb2Ygc29tZSBvZiB0aGUgbW9zdCBpbm5vdmF0aXZlIHRlY2hub2xvZ3kgdGhhdCB3aWxsIHdvcmsgb24gYSBkZWVwZXIgbGV2ZWwgZm9yIHRoYXQgZ2xvdyBmcm9tIHdpdGhpbi4gUHJlcCwgcHJpbWUgYW5kIHBvbGlzaCB5b3VyIHNraW4gd2l0aCB0aGVzZSBtdXN0LXRyeSB0b29scy4gU3RhcnRpbmcgZnJvbSBlYXN5LXRvLXVzZSB0byBoaWdoLXRlY2ggZGV2aWNlcywgd2UgaGF2ZSBhIHZhcmlldHkgb2YgdG9vbHMgdGhhdCB3aWxsIGVuaGFuY2UgeW91ciBhdCBob21lIGJlYXV0eSByZWdpbWUuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0lzZGluIGZvdG9wcm90ZWN0b3IgZnVzaW9uIHdhdGVyJyxcclxuICAgICAgICAgICAgY29udGVudDogJ0ZvciBhdC1ob21lIGZhY2lhbHMgYW5kIHVwa2VlcCwgd2UgaGF2ZSBhIHJhbmdlIG9mIHNvbWUgb2YgdGhlIG1vc3QgaW5ub3ZhdGl2ZSB0ZWNobm9sb2d5IHRoYXQgd2lsbCB3b3JrIG9uIGEgZGVlcGVyIGxldmVsIGZvciB0aGF0IGdsb3cgZnJvbSB3aXRoaW4uIFByZXAsIHByaW1lIGFuZCBwb2xpc2ggeW91ciBza2luIHdpdGggdGhlc2UgbXVzdC10cnkgdG9vbHMuIFN0YXJ0aW5nIGZyb20gZWFzeS10by11c2UgdG8gaGlnaC10ZWNoIGRldmljZXMsIHdlIGhhdmUgYSB2YXJpZXR5IG9mIHRvb2xzIHRoYXQgd2lsbCBlbmhhbmNlIHlvdXIgYXQgaG9tZSBiZWF1dHkgcmVnaW1lLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdEdWJhaSBsaXBzJyxcclxuICAgICAgICAgICAgY29udGVudDogJ0ZvciBhdC1ob21lIGZhY2lhbHMgYW5kIHVwa2VlcCwgd2UgaGF2ZSBhIHJhbmdlIG9mIHNvbWUgb2YgdGhlIG1vc3QgaW5ub3ZhdGl2ZSB0ZWNobm9sb2d5IHRoYXQgd2lsbCB3b3JrIG9uIGEgZGVlcGVyIGxldmVsIGZvciB0aGF0IGdsb3cgZnJvbSB3aXRoaW4uIFByZXAsIHByaW1lIGFuZCBwb2xpc2ggeW91ciBza2luIHdpdGggdGhlc2UgbXVzdC10cnkgdG9vbHMuIFN0YXJ0aW5nIGZyb20gZWFzeS10by11c2UgdG8gaGlnaC10ZWNoIGRldmljZXMsIHdlIGhhdmUgYSB2YXJpZXR5IG9mIHRvb2xzIHRoYXQgd2lsbCBlbmhhbmNlIHlvdXIgYXQgaG9tZSBiZWF1dHkgcmVnaW1lLidcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuXHJcbiAgICBjb25zdCBydGwgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0dvb2QgZm9yIDxici8+JyArICdHbG93JyxcclxuICAgICAgICAgICAgZGVzYzogJ0EgcmFuZ2Ugb2YgaGFuZC1waWNrZWQgYnJhbmRzIGZvciB0aGUgYmVzdCBvZiBib2R5IGNhcmUgcHJvZHVjdHMgdGhhdCBhcmUgbWFkZSB3aXRoIGNsZWFuLCBhY3RpdmUgaW5ncmVkaWVudHMgYW5kIGFyZSByZXN1bHQtZHJpdmVuLiBUYWtpbmcgY2FyZSBvZiB5b3VyIGJvZHkgaXMgZXF1YWxseSByZXdhcmRpbmcuJyxcclxuICAgICAgICAgICAgc2hvcDogJ0JvZHknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0dldCBzZXQgPGJyLz4nICsgJ0dsb3cnLFxyXG4gICAgICAgICAgICBkZXNjOiAnQSByYW5nZSBvZiBoYW5kLXBpY2tlZCBicmFuZHMgZm9yIHRoZSBiZXN0IG9mIGJvZHkgY2FyZSBwcm9kdWN0cyB0aGF0IGFyZSBtYWRlIHdpdGggY2xlYW4sIGFjdGl2ZSBpbmdyZWRpZW50cyBhbmQgYXJlIHJlc3VsdC1kcml2ZW4uIFRha2luZyBjYXJlIG9mIHlvdXIgYm9keSBpcyBlcXVhbGx5IHJld2FyZGluZy4nLFxyXG4gICAgICAgICAgICBzaG9wOiAnQm9keScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnWW91IDxici8+JyArICdHbG93JyxcclxuICAgICAgICAgICAgZGVzYzogJ0EgcmFuZ2Ugb2YgaGFuZC1waWNrZWQgYnJhbmRzIGZvciB0aGUgYmVzdCBvZiBib2R5IGNhcmUgcHJvZHVjdHMgdGhhdCBhcmUgbWFkZSB3aXRoIGNsZWFuLCBhY3RpdmUgaW5ncmVkaWVudHMgYW5kIGFyZSByZXN1bHQtZHJpdmVuLiBUYWtpbmcgY2FyZSBvZiB5b3VyIGJvZHkgaXMgZXF1YWxseSByZXdhcmRpbmcuJyxcclxuICAgICAgICAgICAgc2hvcDogJ0JvZHknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0dsb3cgRnJvbSA8YnIvPicgKyAnV2l0aGluJyxcclxuICAgICAgICAgICAgZGVzYzogJ0EgcmFuZ2Ugb2YgaGFuZC1waWNrZWQgYnJhbmRzIGZvciB0aGUgYmVzdCBvZiBib2R5IGNhcmUgcHJvZHVjdHMgdGhhdCBhcmUgbWFkZSB3aXRoIGNsZWFuLCBhY3RpdmUgaW5ncmVkaWVudHMgYW5kIGFyZSByZXN1bHQtZHJpdmVuLiBUYWtpbmcgY2FyZSBvZiB5b3VyIGJvZHkgaXMgZXF1YWxseSByZXdhcmRpbmcuJyxcclxuICAgICAgICAgICAgc2hvcDogJ0JvZHknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0F0IGhvbWUgPGJyLz4nICsgJ0dsb3cnLFxyXG4gICAgICAgICAgICBkZXNjOiAnQSByYW5nZSBvZiBoYW5kLXBpY2tlZCBicmFuZHMgZm9yIHRoZSBiZXN0IG9mIGJvZHkgY2FyZSBwcm9kdWN0cyB0aGF0IGFyZSBtYWRlIHdpdGggY2xlYW4sIGFjdGl2ZSBpbmdyZWRpZW50cyBhbmQgYXJlIHJlc3VsdC1kcml2ZW4uIFRha2luZyBjYXJlIG9mIHlvdXIgYm9keSBpcyBlcXVhbGx5IHJld2FyZGluZy4nLFxyXG4gICAgICAgICAgICBzaG9wOiAnQm9keScsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgZmF2b3JpdGVfcHJvZHVjdHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0xvdGlvbiBQNTAgQlInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1dhcm1pbmcgSG9uZXkgQ2xlYW5zZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ01pdHRpIHJhdyBmYWNlIG1hc2sgcHVyZWVhcnRoJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQcm8gaGVhbCBzZXJ1bSBpcyBjbGluaWNhbCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnT2xpZ28gcHJvdGVpbnMgbWFyaW5lcyBzZXJ1bScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTGFpdCB2aXAgMDInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hlbGlvY2FyZSBtaW5lcmFsIHRvbGVyYW5jZSBmbHVpZCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQmlva2lzcyBsaXAgYmFsbScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ3JlbWUgYXV4IGFjaWQgZGUgZnJ1aXRzJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNYXNxdWUgdmlwIDAyJyxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcblxyXG4gICAgcmV0dXJuICg8RnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wib3V0ZXIgXCIgKyBzdHlsZXMuYm9keU91dGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW5uZXIgXCIgKyBzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJMZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHJ0bFtjdXJyZW50X2JvZHlfc2xpZGVdLnRpdGxlfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57cnRsW2N1cnJlbnRfYm9keV9zbGlkZV0uZGVzY308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5TaG9wIHtydGxbY3VycmVudF9ib2R5X3NsaWRlXS5zaG9wfTwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJSaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlciByZWY9e3NsaWRlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldF9ib2R5X3NsaWRlcihzbGlkZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0gey4uLmJvZHlfc2xpZGVyX3NldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnRsLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMvcHJvZHVjdHMvdG9wLycgKyAoaW5kZXgpICsgJy5wbmcnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0QmFjayBvbkJhY2s9e2JvZHlfc2xpZGVyLnNsaWNrUHJldn0gb25OZXh0PXtib2R5X3NsaWRlci5zbGlja05leHR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJvdXRlciBcIiArIHN0eWxlcy5wcm9kdWN0RGVzY091dGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW5uZXIgXCIgKyBzdHlsZXMucHJvZHVjdERlc2N9PlxyXG4gICAgICAgICAgICAgICAgPHA+QWZ0ZXIgYSBsb3Qgb2YgZGVsaWJlcmF0aW9uIHdlIGhhdmUgY3VyYXRlZCBhIHdpZGUgcmFuZ2Ugb2YgcHJvZHVjdHMgdGhhdCBhcmUgYXZhaWxhYmxlIHRvIHlvdSAyNCB4IDcgb24gb3VyXHJcbiAgICAgICAgICAgICAgICAgICAgb25saW5lIGJvdXRpcXVlIGdsb3cuc2hvcC4gWW91IGNhbiBhbHNvIHB1cmNoYXNlIHRoZW0gaW4tc3RvcmUgd2l0aCB0aGUgYXNzaXN0YW5jZSBvZiBvdXIgc2tpbmNhcmUgZXhwZXJ0cyBvclxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW4gcGxhY2UgYW4gb3JkZXIgZm9yIGN1cmJzaWRlIHBpY2stdXAuIFRoZXNlIHByb2R1Y3RzIGFyZSB0cmllZCBhbmQgdGVzdGVkIGN1bHQgZmF2b3VyaXRlcyBhbmQgbWFkZSB3aXRoXHJcbiAgICAgICAgICAgICAgICAgICAgaW5ub3ZhdGl2ZSBmb3JtdWxhdGlvbnMgdG8gb2ZmZXIgeW91IGFuIGV2ZXJsYXN0aW5nIGdsb3cgYW5kIGhlbHAgeW91IG9uIHlvdXIgc2tpbmNhcmUsIGJlYXV0eSBhbmQgd2VsbG5lc3NcclxuICAgICAgICAgICAgICAgICAgICBqb3VybmV5XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJvdXRlciBcIiArIHN0eWxlcy5jdXJyZW50RmF2b3VyaXRlc091dGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW5uZXIgXCIgKyBzdHlsZXMuY3VycmVudEZhdm91cml0ZXN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZkhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlZhcnNoaW5pJ3MgQ3VycmVudCBGYXZvdXJpdGVzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmV4dEJhY2sgb25CYWNrPXtmYXZvcml0ZV9zbGlkZXIuc2xpY2tQcmV2fSBvbk5leHQ9e2Zhdm9yaXRlX3NsaWRlci5zbGlja05leHR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXIgcmVmPXtzbGlkZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldF9mYXZvcml0ZV9zbGlkZXIoc2xpZGVyKVxyXG4gICAgICAgICAgICAgICAgfX0gey4uLmZhdm9yaXRlX3NsaWRlcl9zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZV9wcm9kdWN0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNmU2xpZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMvcHJvZHVjdHMvZmF2LycgKyAoaW5kZXgpICsgJy5wbmcnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+e2l0ZW0udGl0bGV9PC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm91dGVyIFwiICsgc3R5bGVzLnNob3BNeVNoZWxmaWVPdXRlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImlubmVyIFwiICsgc3R5bGVzLnNob3BNeVNoZWxmaWV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbUxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5TaG9wIG15IHNoZWxmaWU8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNtUmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiBCZWluZyBhIHNraW5jYXJlIGVudGh1c2lhc3QgbXlzZWxmLCBJIGFtIGFsd2F5cyBvbiB0aGUgbG9va291dCBmb3IgbmV3IHByb2R1Y3RzIHRvIGFkZCB0byBteSByZXBlcnRvaXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGVzZSBhcmUgYSBmZXcgb2YgbXkgY3VycmVudCBmYXZvdXJpdGVzLCBzb21lIG9mIHdoaWNoIGFyZSBzdGFwbGVzIGluIG15IHJvdXRpbmUgYW5kIHNvbWUgbmV3IG9uZXMgeW91IHdvdWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlIGhhcHB5IHRvIGRpc2NvdmVyLiBTaG9wIHRoZXNlIGN1cmF0ZWQgcHJvZHVjdHMgYW5kIHJlZnJlc2ggeW91ciBza2luY2FyZSBzaGVsZi5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5nbG93LnNob3A8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyc091dGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJzfT5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXIgcmVmPXtzbGlkZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldF9wcm9kdWN0c19hbHRlcm5hdGVfc2xpZGVyKHNsaWRlcilcclxuICAgICAgICAgICAgICAgIH19IHsuLi5wcm9kdWN0c19hbHRlcm5hdGVfc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHNfYWx0ZXJuYXRlX2NvbnRlbnQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlID09PSBpbmRleCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluVmlldyB0aHJlc2hvbGQ9ezB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHtyZWYsIGluVmlld30pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7b3BhY2l0eTogMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtpblZpZXcgPyB7b3BhY2l0eTogMX0gOiB7b3BhY2l0eTogMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDAuN319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17XCJnciBcIiArIChjdXJyZW50X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZSA9PT0gaW5kZXggPyBzdHlsZXMuYmFubmVyIDogJycpfSBzcmM9eycvaW1hZ2VzL3Byb2R1Y3RzL2FsdGVybmF0ZS1wcm9kdWN0cy8nICsgaW5kZXggKyAnLnBuZyd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG9wTm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxoMz4we2luZGV4ICsgMX0gLyA8c3Bhbj4we3Byb2R1Y3RzX2FsdGVybmF0ZV9jb250ZW50Lmxlbmd0aH08L3NwYW4+PC9oMz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNIT1AgTk9XPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRCYWNrIHRoZW1lPXsnbGlnaHQnfSBvbkJhY2s9e3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZXIuc2xpY2tQcmV2fSBvbk5leHQ9e3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZXIuc2xpY2tOZXh0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L0ZyYWdtZW50PilcclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
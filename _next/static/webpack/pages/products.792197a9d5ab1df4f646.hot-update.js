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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desc),
          children: "After a lot of deliberation we have curated a wide range of products that are available to you 24 x 7 on our online boutique glow.shop. You can also purchase them in-store with the assistance of our skincare experts or even place an order for curbside pick-up. These products are tried and tested cult favourites and made with innovative formulations to offer you an everlasting glow and help you on your skincare, beauty and wellness journey."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
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
                      lineNumber: 255,
                      columnNumber: 53
                    }, _this);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 41
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  className: "gr " + (current_products_alternate_slide === index ? (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().banner) : ''),
                  src: '/images/products/alternate-products/' + index + '.png'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shopNow),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: "SHOP NOW"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 268,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_shared_components_nextback_nextback__WEBPACK_IMPORTED_MODULE_5__.default, {
                    theme: 'light',
                    onBack: products_alternate_slider.slickPrev,
                    onNext: products_alternate_slider.slickNext
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 269,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 266,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 37
            }, _this);
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
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


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./pages/styles/products.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./pages/styles/products.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".products_bodyOuter__19XOy {\n  background: #EEEADD;\n}\n\n.products_body__21C_b {\n  padding: 160px 0;\n  display: flex;\n}\n.products_body__21C_b .products_bLeft__1OXZy {\n  width: 100%;\n  max-width: 450px;\n  margin-right: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.products_body__21C_b .products_bLeft__1OXZy div h1 {\n  font-family: EmpireBold, sans-serif;\n  text-transform: uppercase;\n  margin-bottom: 134px;\n  font-size: 160px;\n  line-height: 100%;\n  letter-spacing: 0.07em;\n  margin-top: -12px;\n}\n.products_body__21C_b .products_bLeft__1OXZy div p {\n  font-family: SaolRegularItalic;\n  font-size: 24px;\n  line-height: 168%;\n  letter-spacing: 0.05em;\n}\n.products_body__21C_b .products_bLeft__1OXZy header {\n  text-transform: uppercase;\n  font-family: HattonMedium;\n  font-size: 24px;\n  cursor: pointer;\n}\n.products_body__21C_b .products_bRight__1WAqz {\n  width: 100%;\n  max-width: 742px;\n}\n.products_body__21C_b .products_bRight__1WAqz .products_slide__UbzgP img {\n  margin-bottom: 35px;\n}\n\n.products_productDescOuter__37m3v {\n  border-bottom: 1px solid black;\n}\n\n.products_productDesc__VI1N_ {\n  padding: 111px 0;\n}\n.products_productDesc__VI1N_ p {\n  font-family: SaolRegularItalic;\n  font-size: 32px;\n  line-height: 140%;\n  letter-spacing: 2px;\n}\n\n.products_currentFavouritesOuter__VsvZ6 {\n  padding: 120px 0 0;\n}\n\n.products_currentFavourites__2nmnr .products_cfHeader__d7-mY {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 70px;\n}\n.products_currentFavourites__2nmnr .products_cfHeader__d7-mY h2 {\n  font-family: HattonMedium;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.products_currentFavourites__2nmnr .products_cfSlide__v5jsX {\n  margin-right: 20px;\n}\n.products_currentFavourites__2nmnr .products_cfSlide__v5jsX img {\n  margin-bottom: 20px;\n}\n.products_currentFavourites__2nmnr .products_cfSlide__v5jsX header {\n  font-family: TelegrafRegular;\n  font-size: 20px;\n  line-height: 131.78%;\n  letter-spacing: 0.05em;\n}\n\n.products_shopMyShelfie__2U67r {\n  padding: 209px 0 181px 0;\n  display: flex;\n}\n.products_shopMyShelfie__2U67r .products_smLeft__2Otg9 {\n  width: 100%;\n  max-width: 540px;\n  margin-right: 50px;\n}\n.products_shopMyShelfie__2U67r .products_smLeft__2Otg9 h2 {\n  font-family: EmpireBold, sans-serif;\n  font-size: 120px;\n  line-height: 100%;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  margin-top: -7px;\n}\n.products_shopMyShelfie__2U67r .products_smRight__lDP2B {\n  width: 100%;\n}\n.products_shopMyShelfie__2U67r .products_smRight__lDP2B p {\n  margin-bottom: 40px;\n  font-family: TelegrafRegular;\n  font-size: 20px;\n  line-height: 150%;\n  letter-spacing: 0.05em;\n}\n.products_shopMyShelfie__2U67r .products_smRight__lDP2B header {\n  font-family: HattonMedium;\n  font-size: 24px;\n  line-height: 155.5%;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\n.products_slidersOuter__1vHA- {\n  background: black;\n}\n\n.products_sliders__3gNVE {\n  padding: 128px 0;\n}\n.products_sliders__3gNVE .products_desc__Awtfa {\n  width: 878px;\n  margin: auto auto 219px;\n  color: #C4C4C4;\n  font-family: SaolRegularItalic;\n  font-size: 32px;\n  line-height: 140%;\n  letter-spacing: 2px;\n}\n.products_sliders__3gNVE .products_slide__UbzgP {\n  display: flex;\n  justify-content: space-between;\n  color: white;\n  margin-right: 60px;\n  position: relative;\n}\n.products_sliders__3gNVE .products_slide__UbzgP .products_title__GicbW {\n  position: absolute;\n  width: 460px;\n  font-family: EmpireBold;\n  font-size: 100px;\n  line-height: 98.1%;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  height: 100%;\n  margin-top: -50px;\n}\n.products_sliders__3gNVE .products_slide__UbzgP img {\n  margin-right: 60px;\n}\n.products_sliders__3gNVE .products_slide__UbzgP .products_banner__1U1zE {\n  margin-left: 199px;\n}\n.products_sliders__3gNVE .products_slide__UbzgP div {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 263px;\n}\n.products_sliders__3gNVE .products_slide__UbzgP div header {\n  margin-bottom: 60px;\n  font-family: TelegrafRegular;\n  line-height: 150%;\n  color: #C4C4C4;\n  height: 300px;\n}\n.products_sliders__3gNVE .products_slide__UbzgP .products_shopNow__3bNg8 {\n  margin-top: -50px;\n}", "",{"version":3,"sources":["webpack://products.module.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;AACJ;;AAEA;EACI,gBAAA;EACA,aAAA;AACJ;AACI;EACI,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AACR;AAEY;EACI,mCAAA;EACA,yBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,iBAAA;AAAhB;AAGY;EACI,8BAAA;EACA,eAAA;EACA,iBAAA;EACA,sBAAA;AADhB;AAMQ;EACI,yBAAA;EACA,yBAAA;EACA,eAAA;EACA,eAAA;AAJZ;AAQI;EACI,WAAA;EACA,gBAAA;AANR;AASY;EACI,mBAAA;AAPhB;;AAcA;EACI,8BAAA;AAXJ;;AAcA;EACI,gBAAA;AAXJ;AAaI;EACI,8BAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;AAXR;;AAeA;EACI,kBAAA;AAZJ;;AAiBI;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;AAdR;AAgBQ;EACI,yBAAA;EACA,sBAAA;EACA,yBAAA;AAdZ;AAmBI;EACI,kBAAA;AAjBR;AAmBQ;EACI,mBAAA;AAjBZ;AAoBQ;EACI,4BAAA;EACA,eAAA;EACA,oBAAA;EACA,sBAAA;AAlBZ;;AA4BA;EACI,wBAAA;EACA,aAAA;AAzBJ;AA2BI;EACI,WAAA;EACA,gBAAA;EACA,kBAAA;AAzBR;AA4BQ;EACI,mCAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,yBAAA;EACA,gBAAA;AA1BZ;AA8BI;EACI,WAAA;AA5BR;AA8BQ;EACI,mBAAA;EACA,4BAAA;EACA,eAAA;EACA,iBAAA;EACA,sBAAA;AA5BZ;AA+BQ;EACI,yBAAA;EACA,eAAA;EACA,mBAAA;EACA,sBAAA;EACA,yBAAA;AA7BZ;;AAqCA;EACI,iBAAA;AAlCJ;;AAqCA;EACI,gBAAA;AAlCJ;AAoCI;EACI,YAAA;EACA,uBAAA;EACA,cAAA;EACA,8BAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;AAlCR;AAqCI;EACI,aAAA;EACA,8BAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;AAnCR;AAqCQ;EACI,kBAAA;EACA,YAAA;EACA,uBAAA;EACA,gBAAA;EACA,kBAAA;EACA,sBAAA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,YAAA;EACA,iBAAA;AAnCZ;AAuCQ;EACI,kBAAA;AArCZ;AAwCQ;EACI,kBAAA;AAtCZ;AA0CQ;EACI,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,YAAA;AAxCZ;AA0CY;EACI,mBAAA;EACA,4BAAA;EACA,iBAAA;EACA,cAAA;EACA,aAAA;AAxChB;AA4CQ;EACI,iBAAA;AA1CZ","sourcesContent":[".bodyOuter {\r\n    background: #EEEADD;\r\n}\r\n\r\n.body {\r\n    padding: 160px 0;\r\n    display: flex;\r\n\r\n    .bLeft {\r\n        width: 100%;\r\n        max-width: 450px;\r\n        margin-right: 50px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n\r\n        div {\r\n            h1 {\r\n                font-family: EmpireBold, sans-serif;\r\n                text-transform: uppercase;\r\n                margin-bottom: 134px;\r\n                font-size: 160px;\r\n                line-height: 100%;\r\n                letter-spacing: 0.07em;\r\n                margin-top: -12px;\r\n            }\r\n\r\n            p {\r\n                font-family: SaolRegularItalic;\r\n                font-size: 24px;\r\n                line-height: 168%;\r\n                letter-spacing: 0.05em;\r\n            }\r\n        }\r\n\r\n\r\n        header {\r\n            text-transform: uppercase;\r\n            font-family: HattonMedium;\r\n            font-size: 24px;\r\n            cursor: pointer;\r\n        }\r\n    }\r\n\r\n    .bRight {\r\n        width: 100%;\r\n        max-width: 742px;\r\n\r\n        .slide {\r\n            img {\r\n                margin-bottom: 35px;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n.productDescOuter {\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n.productDesc {\r\n    padding: 111px 0;\r\n\r\n    p {\r\n        font-family: SaolRegularItalic;\r\n        font-size: 32px;\r\n        line-height: 140%;\r\n        letter-spacing: 2px;\r\n    }\r\n}\r\n\r\n.currentFavouritesOuter {\r\n    padding: 120px 0 0;\r\n\r\n}\r\n\r\n.currentFavourites {\r\n    .cfHeader {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        margin-bottom: 70px;\r\n\r\n        h2 {\r\n            font-family: HattonMedium;\r\n            letter-spacing: 0.05em;\r\n            text-transform: uppercase;\r\n        }\r\n\r\n    }\r\n\r\n    .cfSlide {\r\n        margin-right: 20px;\r\n\r\n        img {\r\n            margin-bottom: 20px;\r\n        }\r\n\r\n        header {\r\n            font-family: TelegrafRegular;\r\n            font-size: 20px;\r\n            line-height: 131.78%;\r\n            letter-spacing: 0.05em;\r\n        }\r\n    }\r\n\r\n}\r\n\r\n.shopMyShelfieOuter {\r\n\r\n}\r\n\r\n.shopMyShelfie {\r\n    padding: 209px 0 181px 0;\r\n    display: flex;\r\n\r\n    .smLeft {\r\n        width: 100%;\r\n        max-width: 540px;\r\n        margin-right: 50px;\r\n\r\n\r\n        h2 {\r\n            font-family: EmpireBold, sans-serif;\r\n            font-size: 120px;\r\n            line-height: 100%;\r\n            letter-spacing: 0.1em;\r\n            text-transform: uppercase;\r\n            margin-top: -7px;\r\n        }\r\n    }\r\n\r\n    .smRight {\r\n        width: 100%;\r\n\r\n        p {\r\n            margin-bottom: 40px;\r\n            font-family: TelegrafRegular;\r\n            font-size: 20px;\r\n            line-height: 150%;\r\n            letter-spacing: 0.05em;\r\n        }\r\n\r\n        header {\r\n            font-family: HattonMedium;\r\n            font-size: 24px;\r\n            line-height: 155.5%;\r\n            letter-spacing: 0.12em;\r\n            text-transform: uppercase;\r\n        }\r\n\r\n\r\n    }\r\n\r\n}\r\n\r\n.slidersOuter {\r\n    background: black;\r\n}\r\n\r\n.sliders {\r\n    padding: 128px 0;\r\n\r\n    .desc {\r\n        width: 878px;\r\n        margin: auto auto 219px;\r\n        color: #C4C4C4;\r\n        font-family: SaolRegularItalic;\r\n        font-size: 32px;\r\n        line-height: 140%;\r\n        letter-spacing: 2px;\r\n    }\r\n\r\n    .slide {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        color: white;\r\n        margin-right: 60px;\r\n        position: relative;\r\n\r\n        .title {\r\n            position: absolute;\r\n            width: 460px;\r\n            font-family: EmpireBold;\r\n            font-size: 100px;\r\n            line-height: 98.1%;\r\n            letter-spacing: 0.09em;\r\n            text-transform: uppercase;\r\n            display: flex;\r\n            flex-direction: row;\r\n            align-items: flex-end;\r\n            height: 100%;\r\n            margin-top: -50px\r\n        }\r\n\r\n\r\n        img {\r\n            margin-right: 60px;\r\n        }\r\n\r\n        .banner {\r\n            margin-left: 199px;\r\n        }\r\n\r\n\r\n        div {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: flex-end;\r\n            width: 263px;\r\n\r\n            header {\r\n                margin-bottom: 60px;\r\n                font-family: TelegrafRegular;\r\n                line-height: 150%;\r\n                color: #C4C4C4;\r\n                height: 300px;\r\n            }\r\n        }\r\n\r\n        .shopNow {\r\n            margin-top: -50px;\r\n        }\r\n\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"bodyOuter": "products_bodyOuter__19XOy",
	"body": "products_body__21C_b",
	"bLeft": "products_bLeft__1OXZy",
	"bRight": "products_bRight__1WAqz",
	"slide": "products_slide__UbzgP",
	"productDescOuter": "products_productDescOuter__37m3v",
	"productDesc": "products_productDesc__VI1N_",
	"currentFavouritesOuter": "products_currentFavouritesOuter__VsvZ6",
	"currentFavourites": "products_currentFavourites__2nmnr",
	"cfHeader": "products_cfHeader__d7-mY",
	"cfSlide": "products_cfSlide__v5jsX",
	"shopMyShelfie": "products_shopMyShelfie__2U67r",
	"smLeft": "products_smLeft__2Otg9",
	"smRight": "products_smRight__lDP2B",
	"slidersOuter": "products_slidersOuter__1vHA-",
	"sliders": "products_sliders__3gNVE",
	"desc": "products_desc__Awtfa",
	"title": "products_title__GicbW",
	"banner": "products_banner__1U1zE",
	"shopNow": "products_shopNow__3bNg8"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0eWxlcy9wcm9kdWN0cy5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJQcm9kdWN0cyIsImJvZHlfc2xpZGVyX3NldHRpbmdzIiwiZG90cyIsInNwZWVkIiwiYXJyb3dzIiwiY2VudGVyTW9kZSIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInNsaWRlc1RvU2hvdyIsImFkYXB0aXZlSGVpZ2h0IiwiYmVmb3JlQ2hhbmdlIiwiY3VycmVudCIsIm5leHQiLCJzZXRfY3VycmVudF9ib2R5X3NsaWRlIiwidXNlU3RhdGUiLCJjdXJyZW50X2JvZHlfc2xpZGUiLCJib2R5X3NsaWRlciIsInNldF9ib2R5X3NsaWRlciIsImZhdm9yaXRlX3NsaWRlcl9zZXR0aW5ncyIsInZhcmlhYmxlV2lkdGgiLCJmYXZvcml0ZV9zbGlkZXIiLCJzZXRfZmF2b3JpdGVfc2xpZGVyIiwicHJvZHVjdHNfYWx0ZXJuYXRlX3NldHRpbmdzIiwic2V0X2N1cnJlbnRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlIiwicHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlciIsInNldF9wcm9kdWN0c19hbHRlcm5hdGVfc2xpZGVyIiwiY3VycmVudF9wcm9kdWN0c19hbHRlcm5hdGVfc2xpZGUiLCJwcm9kdWN0c19hbHRlcm5hdGVfY29udGVudCIsInRpdGxlIiwiY29udGVudCIsInJ0bCIsImRlc2MiLCJzaG9wIiwiZmF2b3JpdGVfcHJvZHVjdHMiLCJzdHlsZXMiLCJfX2h0bWwiLCJzbGlkZXIiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzbGlja1ByZXYiLCJzbGlja05leHQiLCJyZWYiLCJpblZpZXciLCJvcGFjaXR5IiwiZHVyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy43OTIxOTdhOWQ1YWIxZGY0ZjY0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9wcm9kdWN0cy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge0ZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IHttb3Rpb259IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuaW1wb3J0IHtJblZpZXcsIHVzZUluVmlld30gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcclxuaW1wb3J0IE5leHRCYWNrIGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy9uZXh0YmFjay9uZXh0YmFja1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKSB7XHJcbiAgICBjb25zdCBib2R5X3NsaWRlcl9zZXR0aW5ncyA9IHtcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBzcGVlZDogMTI1MCxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDQwMDAsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgIGJlZm9yZUNoYW5nZTogKGN1cnJlbnQsIG5leHQpID0+IHtcclxuICAgICAgICAgICAgc2V0X2N1cnJlbnRfYm9keV9zbGlkZShuZXh0KVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgY29uc3QgW2N1cnJlbnRfYm9keV9zbGlkZSwgc2V0X2N1cnJlbnRfYm9keV9zbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtib2R5X3NsaWRlciwgc2V0X2JvZHlfc2xpZGVyXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgICBjb25zdCBmYXZvcml0ZV9zbGlkZXJfc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgc3BlZWQ6IDEyNTAsXHJcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgIH07XHJcbiAgICBjb25zdCBbZmF2b3JpdGVfc2xpZGVyLCBzZXRfZmF2b3JpdGVfc2xpZGVyXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0c19hbHRlcm5hdGVfc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogMTI1MCxcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogNDAwMCxcclxuICAgICAgICBiZWZvcmVDaGFuZ2U6IChjdXJyZW50LCBuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldF9jdXJyZW50X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZShuZXh0KVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZXIsIHNldF9wcm9kdWN0c19hbHRlcm5hdGVfc2xpZGVyXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtjdXJyZW50X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZSwgc2V0X2N1cnJlbnRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgcHJvZHVjdHNfYWx0ZXJuYXRlX2NvbnRlbnQgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1Nlc2Rlcm1hIEF6ZWxhYyBSdSBMaXBvc29tYWwgU2VydW0nLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnQSByYW5nZSBvZiBoYW5kLXBpY2tlZCBicmFuZHMgZm9yIHRoZSBiZXN0IG9mIGJvZHkgY2FyZSBwcm9kdWN0cyB0aGF0IGFyZSBtYWRlIHdpdGggY2xlYW4sIGFjdGl2ZSBpbmdyZWRpZW50cyBhbmQgYXJlIHJlc3VsdC1kcml2ZW4uIFRha2luZyBjYXJlIG9mIHlvdXIgYm9keSBpcyBlcXVhbGx5IHJld2FyZGluZy4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2xlYW5zaW5nIGNvbXBsZXgnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnR2l2ZSB5b3VyIGhhaXIgY2FyZSByb3V0aW5lIGEgYnVtcCBvbnRvIHRoZSBuZXh0IGxldmVsLiBXaGV0aGVyIGl0IGlzIGZpbmRpbmcgdGhlIHJpZ2h0IHByb2R1Y3RzIGZvciB5b3VyIGhhaXIgdHlwZSBhbmQgY29uY2VybiBvciBhZGRpbmcgc29tZSBsb3ZlbHkgc2VydW1zIGZvciB0aGF0IGV4dHJhIGJvdW5jZSwgd2XigJl2ZSBjdXJhdGVkIGFuIGFycmF5IG9mIHByb2R1Y3RzIGZvciBlYWNoIGFuZCBldmVyeSBvbmUgb2YgeW91ciBuZWVkcy4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWFzayB2aXZhbnQnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnV2hldGhlciB5b3XigJlyZSBhIGJlZ2lubmVyIG9yIGEgc2tpbmNhcmUgZW50aHVzaWFzdCwgd2UgaGF2ZSBzb21ldGhpbmcgZm9yIHlvdSBhbGwuIENob29zZSBmcm9tIG91ciByZXBlcnRvaXJlIG9mIGN1cmF0ZWQgc2tpbmNhcmUgcHJvZHVjdHMgdGhhdCBoYXZlIGFjcXVpcmVkIGEgY3VsdCBzdGF0dXMgZm9yIHRoZWlyIG5ldy1hZ2UgZm9ybXVsYXRpb25zIGFuZCBhcmUgdGFyZ2V0ZWQgdG93YXJkcyBsYXN0aW5nIHNraW5jYXJlIGJlbmVmaXRzLiBBIGhlYWx0aHkgZ2xvdyBhd2FpdHMgeW91LidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdMYWl0IHZpcCAwMicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdBdCBHbG93LCB3ZSBwcm9tb3RlIG92ZXJhbGwgd2VsbC1iZWluZyBmb3IgaGVhbHRoeSBza2luIGFuZCBoYWlyLiBGaW5kIHN1cHBsZW1lbnRzIHRoYXQgY29tZSByZWNvbW1lbmRlZCBmb3IgYSBnbG93IHRoYXTigJlzIGZyb20gd2l0aGluLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQNTAgcGlnbTQwMCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdGb3IgYXQtaG9tZSBmYWNpYWxzIGFuZCB1cGtlZXAsIHdlIGhhdmUgYSByYW5nZSBvZiBzb21lIG9mIHRoZSBtb3N0IGlubm92YXRpdmUgdGVjaG5vbG9neSB0aGF0IHdpbGwgd29yayBvbiBhIGRlZXBlciBsZXZlbCBmb3IgdGhhdCBnbG93IGZyb20gd2l0aGluLiBQcmVwLCBwcmltZSBhbmQgcG9saXNoIHlvdXIgc2tpbiB3aXRoIHRoZXNlIG11c3QtdHJ5IHRvb2xzLiBTdGFydGluZyBmcm9tIGVhc3ktdG8tdXNlIHRvIGhpZ2gtdGVjaCBkZXZpY2VzLCB3ZSBoYXZlIGEgdmFyaWV0eSBvZiB0b29scyB0aGF0IHdpbGwgZW5oYW5jZSB5b3VyIGF0IGhvbWUgYmVhdXR5IHJlZ2ltZS4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSXNkaW4gZm90b3Byb3RlY3RvciBmdXNpb24gd2F0ZXInLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnRm9yIGF0LWhvbWUgZmFjaWFscyBhbmQgdXBrZWVwLCB3ZSBoYXZlIGEgcmFuZ2Ugb2Ygc29tZSBvZiB0aGUgbW9zdCBpbm5vdmF0aXZlIHRlY2hub2xvZ3kgdGhhdCB3aWxsIHdvcmsgb24gYSBkZWVwZXIgbGV2ZWwgZm9yIHRoYXQgZ2xvdyBmcm9tIHdpdGhpbi4gUHJlcCwgcHJpbWUgYW5kIHBvbGlzaCB5b3VyIHNraW4gd2l0aCB0aGVzZSBtdXN0LXRyeSB0b29scy4gU3RhcnRpbmcgZnJvbSBlYXN5LXRvLXVzZSB0byBoaWdoLXRlY2ggZGV2aWNlcywgd2UgaGF2ZSBhIHZhcmlldHkgb2YgdG9vbHMgdGhhdCB3aWxsIGVuaGFuY2UgeW91ciBhdCBob21lIGJlYXV0eSByZWdpbWUuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0R1YmFpIGxpcHMnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnRm9yIGF0LWhvbWUgZmFjaWFscyBhbmQgdXBrZWVwLCB3ZSBoYXZlIGEgcmFuZ2Ugb2Ygc29tZSBvZiB0aGUgbW9zdCBpbm5vdmF0aXZlIHRlY2hub2xvZ3kgdGhhdCB3aWxsIHdvcmsgb24gYSBkZWVwZXIgbGV2ZWwgZm9yIHRoYXQgZ2xvdyBmcm9tIHdpdGhpbi4gUHJlcCwgcHJpbWUgYW5kIHBvbGlzaCB5b3VyIHNraW4gd2l0aCB0aGVzZSBtdXN0LXRyeSB0b29scy4gU3RhcnRpbmcgZnJvbSBlYXN5LXRvLXVzZSB0byBoaWdoLXRlY2ggZGV2aWNlcywgd2UgaGF2ZSBhIHZhcmlldHkgb2YgdG9vbHMgdGhhdCB3aWxsIGVuaGFuY2UgeW91ciBhdCBob21lIGJlYXV0eSByZWdpbWUuJ1xyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG5cclxuICAgIGNvbnN0IHJ0bCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnR29vZCBmb3IgPGJyLz4nICsgJ0dsb3cnLFxyXG4gICAgICAgICAgICBkZXNjOiAnQSByYW5nZSBvZiBoYW5kLXBpY2tlZCBicmFuZHMgZm9yIHRoZSBiZXN0IG9mIGJvZHkgY2FyZSBwcm9kdWN0cyB0aGF0IGFyZSBtYWRlIHdpdGggY2xlYW4sIGFjdGl2ZSBpbmdyZWRpZW50cyBhbmQgYXJlIHJlc3VsdC1kcml2ZW4uIFRha2luZyBjYXJlIG9mIHlvdXIgYm9keSBpcyBlcXVhbGx5IHJld2FyZGluZy4nLFxyXG4gICAgICAgICAgICBzaG9wOiAnQm9keScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnR2V0IHNldCA8YnIvPicgKyAnR2xvdycsXHJcbiAgICAgICAgICAgIGRlc2M6ICdBIHJhbmdlIG9mIGhhbmQtcGlja2VkIGJyYW5kcyBmb3IgdGhlIGJlc3Qgb2YgYm9keSBjYXJlIHByb2R1Y3RzIHRoYXQgYXJlIG1hZGUgd2l0aCBjbGVhbiwgYWN0aXZlIGluZ3JlZGllbnRzIGFuZCBhcmUgcmVzdWx0LWRyaXZlbi4gVGFraW5nIGNhcmUgb2YgeW91ciBib2R5IGlzIGVxdWFsbHkgcmV3YXJkaW5nLicsXHJcbiAgICAgICAgICAgIHNob3A6ICdCb2R5JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdZb3UgPGJyLz4nICsgJ0dsb3cnLFxyXG4gICAgICAgICAgICBkZXNjOiAnQSByYW5nZSBvZiBoYW5kLXBpY2tlZCBicmFuZHMgZm9yIHRoZSBiZXN0IG9mIGJvZHkgY2FyZSBwcm9kdWN0cyB0aGF0IGFyZSBtYWRlIHdpdGggY2xlYW4sIGFjdGl2ZSBpbmdyZWRpZW50cyBhbmQgYXJlIHJlc3VsdC1kcml2ZW4uIFRha2luZyBjYXJlIG9mIHlvdXIgYm9keSBpcyBlcXVhbGx5IHJld2FyZGluZy4nLFxyXG4gICAgICAgICAgICBzaG9wOiAnQm9keScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnR2xvdyBGcm9tIDxici8+JyArICdXaXRoaW4nLFxyXG4gICAgICAgICAgICBkZXNjOiAnQSByYW5nZSBvZiBoYW5kLXBpY2tlZCBicmFuZHMgZm9yIHRoZSBiZXN0IG9mIGJvZHkgY2FyZSBwcm9kdWN0cyB0aGF0IGFyZSBtYWRlIHdpdGggY2xlYW4sIGFjdGl2ZSBpbmdyZWRpZW50cyBhbmQgYXJlIHJlc3VsdC1kcml2ZW4uIFRha2luZyBjYXJlIG9mIHlvdXIgYm9keSBpcyBlcXVhbGx5IHJld2FyZGluZy4nLFxyXG4gICAgICAgICAgICBzaG9wOiAnQm9keScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQXQgaG9tZSA8YnIvPicgKyAnR2xvdycsXHJcbiAgICAgICAgICAgIGRlc2M6ICdBIHJhbmdlIG9mIGhhbmQtcGlja2VkIGJyYW5kcyBmb3IgdGhlIGJlc3Qgb2YgYm9keSBjYXJlIHByb2R1Y3RzIHRoYXQgYXJlIG1hZGUgd2l0aCBjbGVhbiwgYWN0aXZlIGluZ3JlZGllbnRzIGFuZCBhcmUgcmVzdWx0LWRyaXZlbi4gVGFraW5nIGNhcmUgb2YgeW91ciBib2R5IGlzIGVxdWFsbHkgcmV3YXJkaW5nLicsXHJcbiAgICAgICAgICAgIHNob3A6ICdCb2R5JyxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBmYXZvcml0ZV9wcm9kdWN0cyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTG90aW9uIFA1MCBCUicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnV2FybWluZyBIb25leSBDbGVhbnNlcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWl0dGkgcmF3IGZhY2UgbWFzayBwdXJlZWFydGgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1BybyBoZWFsIHNlcnVtIGlzIGNsaW5pY2FsJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdPbGlnbyBwcm90ZWlucyBtYXJpbmVzIHNlcnVtJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdMYWl0IHZpcCAwMicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSGVsaW9jYXJlIG1pbmVyYWwgdG9sZXJhbmNlIGZsdWlkJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCaW9raXNzIGxpcCBiYWxtJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDcmVtZSBhdXggYWNpZCBkZSBmcnVpdHMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ01hc3F1ZSB2aXAgMDInLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKDxGcmFnbWVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJvdXRlciBcIiArIHN0eWxlcy5ib2R5T3V0ZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJpbm5lciBcIiArIHN0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYkxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcnRsW2N1cnJlbnRfYm9keV9zbGlkZV0udGl0bGV9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntydGxbY3VycmVudF9ib2R5X3NsaWRlXS5kZXNjfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPlNob3Age3J0bFtjdXJyZW50X2JvZHlfc2xpZGVdLnNob3B9PC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYlJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIHJlZj17c2xpZGVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0X2JvZHlfc2xpZGVyKHNsaWRlcilcclxuICAgICAgICAgICAgICAgICAgICB9fSB7Li4uYm9keV9zbGlkZXJfc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydGwubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2ltYWdlcy9wcm9kdWN0cy90b3AvJyArIChpbmRleCkgKyAnLnBuZyd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRCYWNrIG9uQmFjaz17Ym9keV9zbGlkZXIuc2xpY2tQcmV2fSBvbk5leHQ9e2JvZHlfc2xpZGVyLnNsaWNrTmV4dH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm91dGVyIFwiICsgc3R5bGVzLnByb2R1Y3REZXNjT3V0ZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJpbm5lciBcIiArIHN0eWxlcy5wcm9kdWN0RGVzY30+XHJcbiAgICAgICAgICAgICAgICA8cD5BZnRlciBhIGxvdCBvZiBkZWxpYmVyYXRpb24gd2UgaGF2ZSBjdXJhdGVkIGEgd2lkZSByYW5nZSBvZiBwcm9kdWN0cyB0aGF0IGFyZSBhdmFpbGFibGUgdG8geW91IDI0IHggNyBvbiBvdXJcclxuICAgICAgICAgICAgICAgICAgICBvbmxpbmUgYm91dGlxdWUgZ2xvdy5zaG9wLiBZb3UgY2FuIGFsc28gcHVyY2hhc2UgdGhlbSBpbi1zdG9yZSB3aXRoIHRoZSBhc3Npc3RhbmNlIG9mIG91ciBza2luY2FyZSBleHBlcnRzIG9yXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbiBwbGFjZSBhbiBvcmRlciBmb3IgY3VyYnNpZGUgcGljay11cC4gVGhlc2UgcHJvZHVjdHMgYXJlIHRyaWVkIGFuZCB0ZXN0ZWQgY3VsdCBmYXZvdXJpdGVzIGFuZCBtYWRlIHdpdGhcclxuICAgICAgICAgICAgICAgICAgICBpbm5vdmF0aXZlIGZvcm11bGF0aW9ucyB0byBvZmZlciB5b3UgYW4gZXZlcmxhc3RpbmcgZ2xvdyBhbmQgaGVscCB5b3Ugb24geW91ciBza2luY2FyZSwgYmVhdXR5IGFuZCB3ZWxsbmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIGpvdXJuZXlcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm91dGVyIFwiICsgc3R5bGVzLmN1cnJlbnRGYXZvdXJpdGVzT3V0ZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJpbm5lciBcIiArIHN0eWxlcy5jdXJyZW50RmF2b3VyaXRlc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNmSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+VmFyc2hpbmkncyBDdXJyZW50IEZhdm91cml0ZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0QmFjayBvbkJhY2s9e2Zhdm9yaXRlX3NsaWRlci5zbGlja1ByZXZ9IG9uTmV4dD17ZmF2b3JpdGVfc2xpZGVyLnNsaWNrTmV4dH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPFNsaWRlciByZWY9e3NsaWRlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0X2Zhdm9yaXRlX3NsaWRlcihzbGlkZXIpXHJcbiAgICAgICAgICAgICAgICB9fSB7Li4uZmF2b3JpdGVfc2xpZGVyX3NldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlX3Byb2R1Y3RzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2ZTbGlkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2ltYWdlcy9wcm9kdWN0cy9mYXYvJyArIChpbmRleCkgKyAnLnBuZyd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj57aXRlbS50aXRsZX08L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wib3V0ZXIgXCIgKyBzdHlsZXMuc2hvcE15U2hlbGZpZU91dGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW5uZXIgXCIgKyBzdHlsZXMuc2hvcE15U2hlbGZpZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNtTGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlNob3AgbXkgc2hlbGZpZTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc21SaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+IEJlaW5nIGEgc2tpbmNhcmUgZW50aHVzaWFzdCBteXNlbGYsIEkgYW0gYWx3YXlzIG9uIHRoZSBsb29rb3V0IGZvciBuZXcgcHJvZHVjdHMgdG8gYWRkIHRvIG15IHJlcGVydG9pcmUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZXNlIGFyZSBhIGZldyBvZiBteSBjdXJyZW50IGZhdm91cml0ZXMsIHNvbWUgb2Ygd2hpY2ggYXJlIHN0YXBsZXMgaW4gbXkgcm91dGluZSBhbmQgc29tZSBuZXcgb25lcyB5b3Ugd291bGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmUgaGFwcHkgdG8gZGlzY292ZXIuIFNob3AgdGhlc2UgY3VyYXRlZCBwcm9kdWN0cyBhbmQgcmVmcmVzaCB5b3VyIHNraW5jYXJlIHNoZWxmLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPmdsb3cuc2hvcDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJzT3V0ZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcnN9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY30+XHJcbiAgICAgICAgICAgICAgICAgICAgQWZ0ZXIgYSBsb3Qgb2YgZGVsaWJlcmF0aW9uIHdlIGhhdmUgY3VyYXRlZCBhXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkZSByYW5nZSBvZiBwcm9kdWN0cyB0aGF0IGFyZSBhdmFpbGFibGUgdG8geW91IDI0IHggNyBvbiBvdXIgb25saW5lIGJvdXRpcXVlIGdsb3cuc2hvcC4gWW91IGNhbiBhbHNvIHB1cmNoYXNlIHRoZW0gaW4tc3RvcmUgd2l0aCB0aGUgYXNzaXN0YW5jZSBvZiBvdXIgc2tpbmNhcmUgZXhwZXJ0cyBvclxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW4gcGxhY2UgYW4gb3JkZXIgZm9yIGN1cmJzaWRlIHBpY2stdXAuIFRoZXNlIHByb2R1Y3RzIGFyZSB0cmllZCBhbmQgdGVzdGVkIGN1bHQgZmF2b3VyaXRlcyBhbmQgbWFkZVxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGggaW5ub3ZhdGl2ZSBmb3JtdWxhdGlvbnMgdG8gb2ZmZXIgeW91IGFuIGV2ZXJsYXN0aW5nIGdsb3cgYW5kIGhlbHAgeW91IG9uIHlvdXIgc2tpbmNhcmUsIGJlYXV0eSBhbmQgd2VsbG5lc3NcclxuICAgICAgICAgICAgICAgICAgICBqb3VybmV5LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXIgcmVmPXtzbGlkZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldF9wcm9kdWN0c19hbHRlcm5hdGVfc2xpZGVyKHNsaWRlcilcclxuICAgICAgICAgICAgICAgIH19IHsuLi5wcm9kdWN0c19hbHRlcm5hdGVfc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHNfYWx0ZXJuYXRlX2NvbnRlbnQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlID09PSBpbmRleCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluVmlldyB0aHJlc2hvbGQ9ezB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHtyZWYsIGluVmlld30pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7b3BhY2l0eTogMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtpblZpZXcgPyB7b3BhY2l0eTogMX0gOiB7b3BhY2l0eTogMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDAuN319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17XCJnciBcIiArIChjdXJyZW50X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZSA9PT0gaW5kZXggPyBzdHlsZXMuYmFubmVyIDogJycpfSBzcmM9eycvaW1hZ2VzL3Byb2R1Y3RzL2FsdGVybmF0ZS1wcm9kdWN0cy8nICsgaW5kZXggKyAnLnBuZyd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG9wTm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxoMz4we2luZGV4ICsgMX0gLyA8c3Bhbj4we3Byb2R1Y3RzX2FsdGVybmF0ZV9jb250ZW50Lmxlbmd0aH08L3NwYW4+PC9oMz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNIT1AgTk9XPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRCYWNrIHRoZW1lPXsnbGlnaHQnfSBvbkJhY2s9e3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZXIuc2xpY2tQcmV2fSBvbk5leHQ9e3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZXIuc2xpY2tOZXh0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L0ZyYWdtZW50PilcclxuXHJcblxyXG59IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2R1Y3RzX2JvZHlPdXRlcl9fMTlYT3kge1xcbiAgYmFja2dyb3VuZDogI0VFRUFERDtcXG59XFxuXFxuLnByb2R1Y3RzX2JvZHlfXzIxQ19iIHtcXG4gIHBhZGRpbmc6IDE2MHB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucHJvZHVjdHNfYm9keV9fMjFDX2IgLnByb2R1Y3RzX2JMZWZ0X18xT1haeSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNDUwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnByb2R1Y3RzX2JvZHlfXzIxQ19iIC5wcm9kdWN0c19iTGVmdF9fMU9YWnkgZGl2IGgxIHtcXG4gIGZvbnQtZmFtaWx5OiBFbXBpcmVCb2xkLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbi1ib3R0b206IDEzNHB4O1xcbiAgZm9udC1zaXplOiAxNjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDdlbTtcXG4gIG1hcmdpbi10b3A6IC0xMnB4O1xcbn1cXG4ucHJvZHVjdHNfYm9keV9fMjFDX2IgLnByb2R1Y3RzX2JMZWZ0X18xT1haeSBkaXYgcCB7XFxuICBmb250LWZhbWlseTogU2FvbFJlZ3VsYXJJdGFsaWM7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMTY4JTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxufVxcbi5wcm9kdWN0c19ib2R5X18yMUNfYiAucHJvZHVjdHNfYkxlZnRfXzFPWFp5IGhlYWRlciB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6IEhhdHRvbk1lZGl1bTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnByb2R1Y3RzX2JvZHlfXzIxQ19iIC5wcm9kdWN0c19iUmlnaHRfXzFXQXF6IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA3NDJweDtcXG59XFxuLnByb2R1Y3RzX2JvZHlfXzIxQ19iIC5wcm9kdWN0c19iUmlnaHRfXzFXQXF6IC5wcm9kdWN0c19zbGlkZV9fVWJ6Z1AgaW1nIHtcXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XFxufVxcblxcbi5wcm9kdWN0c19wcm9kdWN0RGVzY091dGVyX18zN20zdiB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5wcm9kdWN0c19wcm9kdWN0RGVzY19fVkkxTl8ge1xcbiAgcGFkZGluZzogMTExcHggMDtcXG59XFxuLnByb2R1Y3RzX3Byb2R1Y3REZXNjX19WSTFOXyBwIHtcXG4gIGZvbnQtZmFtaWx5OiBTYW9sUmVndWxhckl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLnByb2R1Y3RzX2N1cnJlbnRGYXZvdXJpdGVzT3V0ZXJfX1Zzdlo2IHtcXG4gIHBhZGRpbmc6IDEyMHB4IDAgMDtcXG59XFxuXFxuLnByb2R1Y3RzX2N1cnJlbnRGYXZvdXJpdGVzX18ybm1uciAucHJvZHVjdHNfY2ZIZWFkZXJfX2Q3LW1ZIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xcbn1cXG4ucHJvZHVjdHNfY3VycmVudEZhdm91cml0ZXNfXzJubW5yIC5wcm9kdWN0c19jZkhlYWRlcl9fZDctbVkgaDIge1xcbiAgZm9udC1mYW1pbHk6IEhhdHRvbk1lZGl1bTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4ucHJvZHVjdHNfY3VycmVudEZhdm91cml0ZXNfXzJubW5yIC5wcm9kdWN0c19jZlNsaWRlX192NWpzWCB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcbi5wcm9kdWN0c19jdXJyZW50RmF2b3VyaXRlc19fMm5tbnIgLnByb2R1Y3RzX2NmU2xpZGVfX3Y1anNYIGltZyB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4ucHJvZHVjdHNfY3VycmVudEZhdm91cml0ZXNfXzJubW5yIC5wcm9kdWN0c19jZlNsaWRlX192NWpzWCBoZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFRlbGVncmFmUmVndWxhcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxMzEuNzglO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG59XFxuXFxuLnByb2R1Y3RzX3Nob3BNeVNoZWxmaWVfXzJVNjdyIHtcXG4gIHBhZGRpbmc6IDIwOXB4IDAgMTgxcHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wcm9kdWN0c19zaG9wTXlTaGVsZmllX18yVTY3ciAucHJvZHVjdHNfc21MZWZ0X18yT3RnOSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNTQwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxufVxcbi5wcm9kdWN0c19zaG9wTXlTaGVsZmllX18yVTY3ciAucHJvZHVjdHNfc21MZWZ0X18yT3RnOSBoMiB7XFxuICBmb250LWZhbWlseTogRW1waXJlQm9sZCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTIwcHg7XFxuICBsaW5lLWhlaWdodDogMTAwJTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBtYXJnaW4tdG9wOiAtN3B4O1xcbn1cXG4ucHJvZHVjdHNfc2hvcE15U2hlbGZpZV9fMlU2N3IgLnByb2R1Y3RzX3NtUmlnaHRfX2xEUDJCIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvZHVjdHNfc2hvcE15U2hlbGZpZV9fMlU2N3IgLnByb2R1Y3RzX3NtUmlnaHRfX2xEUDJCIHAge1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIGZvbnQtZmFtaWx5OiBUZWxlZ3JhZlJlZ3VsYXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMTUwJTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxufVxcbi5wcm9kdWN0c19zaG9wTXlTaGVsZmllX18yVTY3ciAucHJvZHVjdHNfc21SaWdodF9fbERQMkIgaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBIYXR0b25NZWRpdW07XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMTU1LjUlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5wcm9kdWN0c19zbGlkZXJzT3V0ZXJfXzF2SEEtIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG4ucHJvZHVjdHNfc2xpZGVyc19fM2dOVkUge1xcbiAgcGFkZGluZzogMTI4cHggMDtcXG59XFxuLnByb2R1Y3RzX3NsaWRlcnNfXzNnTlZFIC5wcm9kdWN0c19kZXNjX19Bd3RmYSB7XFxuICB3aWR0aDogODc4cHg7XFxuICBtYXJnaW46IGF1dG8gYXV0byAyMTlweDtcXG4gIGNvbG9yOiAjQzRDNEM0O1xcbiAgZm9udC1mYW1pbHk6IFNhb2xSZWd1bGFySXRhbGljO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG4ucHJvZHVjdHNfc2xpZGVyc19fM2dOVkUgLnByb2R1Y3RzX3NsaWRlX19VYnpnUCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucHJvZHVjdHNfc2xpZGVyc19fM2dOVkUgLnByb2R1Y3RzX3NsaWRlX19VYnpnUCAucHJvZHVjdHNfdGl0bGVfX0dpY2JXIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA0NjBweDtcXG4gIGZvbnQtZmFtaWx5OiBFbXBpcmVCb2xkO1xcbiAgZm9udC1zaXplOiAxMDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA5OC4xJTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA5ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAtNTBweDtcXG59XFxuLnByb2R1Y3RzX3NsaWRlcnNfXzNnTlZFIC5wcm9kdWN0c19zbGlkZV9fVWJ6Z1AgaW1nIHtcXG4gIG1hcmdpbi1yaWdodDogNjBweDtcXG59XFxuLnByb2R1Y3RzX3NsaWRlcnNfXzNnTlZFIC5wcm9kdWN0c19zbGlkZV9fVWJ6Z1AgLnByb2R1Y3RzX2Jhbm5lcl9fMVUxekUge1xcbiAgbWFyZ2luLWxlZnQ6IDE5OXB4O1xcbn1cXG4ucHJvZHVjdHNfc2xpZGVyc19fM2dOVkUgLnByb2R1Y3RzX3NsaWRlX19VYnpnUCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDI2M3B4O1xcbn1cXG4ucHJvZHVjdHNfc2xpZGVyc19fM2dOVkUgLnByb2R1Y3RzX3NsaWRlX19VYnpnUCBkaXYgaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XFxuICBmb250LWZhbWlseTogVGVsZWdyYWZSZWd1bGFyO1xcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XFxuICBjb2xvcjogI0M0QzRDNDtcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcbi5wcm9kdWN0c19zbGlkZXJzX18zZ05WRSAucHJvZHVjdHNfc2xpZGVfX1ViemdQIC5wcm9kdWN0c19zaG9wTm93X18zYk5nOCB7XFxuICBtYXJnaW4tdG9wOiAtNTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3Byb2R1Y3RzLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBQ1I7QUFFWTtFQUNJLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQWhCO0FBR1k7RUFDSSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBRGhCO0FBTVE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFKWjtBQVFJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBTlI7QUFTWTtFQUNJLG1CQUFBO0FBUGhCOztBQWNBO0VBQ0ksOEJBQUE7QUFYSjs7QUFjQTtFQUNJLGdCQUFBO0FBWEo7QUFhSTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFYUjs7QUFlQTtFQUNJLGtCQUFBO0FBWko7O0FBaUJJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFkUjtBQWdCUTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQWRaO0FBbUJJO0VBQ0ksa0JBQUE7QUFqQlI7QUFtQlE7RUFDSSxtQkFBQTtBQWpCWjtBQW9CUTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFsQlo7O0FBNEJBO0VBQ0ksd0JBQUE7RUFDQSxhQUFBO0FBekJKO0FBMkJJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF6QlI7QUE0QlE7RUFDSSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUExQlo7QUE4Qkk7RUFDSSxXQUFBO0FBNUJSO0FBOEJRO0VBQ0ksbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBNUJaO0FBK0JRO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBN0JaOztBQXFDQTtFQUNJLGlCQUFBO0FBbENKOztBQXFDQTtFQUNJLGdCQUFBO0FBbENKO0FBb0NJO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFsQ1I7QUFxQ0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQW5DUjtBQXFDUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQW5DWjtBQXVDUTtFQUNJLGtCQUFBO0FBckNaO0FBd0NRO0VBQ0ksa0JBQUE7QUF0Q1o7QUEwQ1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUF4Q1o7QUEwQ1k7RUFDSSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQXhDaEI7QUE0Q1E7RUFDSSxpQkFBQTtBQTFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYm9keU91dGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI0VFRUFERDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAxNjBweCAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgICAuYkxlZnQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgICAgICBkaXYge1xcclxcbiAgICAgICAgICAgIGgxIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEVtcGlyZUJvbGQsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEzNHB4O1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2MHB4O1xcclxcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDdlbTtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEycHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIHAge1xcclxcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogU2FvbFJlZ3VsYXJJdGFsaWM7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2OCU7XFxyXFxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICAgaGVhZGVyIHtcXHJcXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIYXR0b25NZWRpdW07XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYlJpZ2h0IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA3NDJweDtcXHJcXG5cXHJcXG4gICAgICAgIC5zbGlkZSB7XFxyXFxuICAgICAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2R1Y3REZXNjT3V0ZXIge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0RGVzYyB7XFxyXFxuICAgIHBhZGRpbmc6IDExMXB4IDA7XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IFNhb2xSZWd1bGFySXRhbGljO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50RmF2b3VyaXRlc091dGVyIHtcXHJcXG4gICAgcGFkZGluZzogMTIwcHggMCAwO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudEZhdm91cml0ZXMge1xcclxcbiAgICAuY2ZIZWFkZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XFxyXFxuXFxyXFxuICAgICAgICBoMiB7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhhdHRvbk1lZGl1bTtcXHJcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNmU2xpZGUge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcblxcclxcbiAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaGVhZGVyIHtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogVGVsZWdyYWZSZWd1bGFyO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTMxLjc4JTtcXHJcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zaG9wTXlTaGVsZmllT3V0ZXIge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2hvcE15U2hlbGZpZSB7XFxyXFxuICAgIHBhZGRpbmc6IDIwOXB4IDAgMTgxcHggMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgLnNtTGVmdCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNTQwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICBoMiB7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEVtcGlyZUJvbGQsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMjBweDtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxyXFxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbVJpZ2h0IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICAgICAgcCB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogVGVsZWdyYWZSZWd1bGFyO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTUwJTtcXHJcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaGVhZGVyIHtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogSGF0dG9uTWVkaXVtO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTU1LjUlO1xcclxcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjEyZW07XFxyXFxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyc091dGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXJzIHtcXHJcXG4gICAgcGFkZGluZzogMTI4cHggMDtcXHJcXG5cXHJcXG4gICAgLmRlc2Mge1xcclxcbiAgICAgICAgd2lkdGg6IDg3OHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gMjE5cHg7XFxyXFxuICAgICAgICBjb2xvcjogI0M0QzRDNDtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBTYW9sUmVndWxhckl0YWxpYztcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2xpZGUge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNjBweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgICAgIC50aXRsZSB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA0NjBweDtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogRW1waXJlQm9sZDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEwMHB4O1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA5OC4xJTtcXHJcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wOWVtO1xcclxcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTUwcHhcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmJhbm5lciB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE5OXB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICAgZGl2IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjYzcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgaGVhZGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFRlbGVncmFmUmVndWxhcjtcXHJcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjQzRDNEM0O1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5zaG9wTm93IHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJib2R5T3V0ZXJcIjogXCJwcm9kdWN0c19ib2R5T3V0ZXJfXzE5WE95XCIsXG5cdFwiYm9keVwiOiBcInByb2R1Y3RzX2JvZHlfXzIxQ19iXCIsXG5cdFwiYkxlZnRcIjogXCJwcm9kdWN0c19iTGVmdF9fMU9YWnlcIixcblx0XCJiUmlnaHRcIjogXCJwcm9kdWN0c19iUmlnaHRfXzFXQXF6XCIsXG5cdFwic2xpZGVcIjogXCJwcm9kdWN0c19zbGlkZV9fVWJ6Z1BcIixcblx0XCJwcm9kdWN0RGVzY091dGVyXCI6IFwicHJvZHVjdHNfcHJvZHVjdERlc2NPdXRlcl9fMzdtM3ZcIixcblx0XCJwcm9kdWN0RGVzY1wiOiBcInByb2R1Y3RzX3Byb2R1Y3REZXNjX19WSTFOX1wiLFxuXHRcImN1cnJlbnRGYXZvdXJpdGVzT3V0ZXJcIjogXCJwcm9kdWN0c19jdXJyZW50RmF2b3VyaXRlc091dGVyX19Wc3ZaNlwiLFxuXHRcImN1cnJlbnRGYXZvdXJpdGVzXCI6IFwicHJvZHVjdHNfY3VycmVudEZhdm91cml0ZXNfXzJubW5yXCIsXG5cdFwiY2ZIZWFkZXJcIjogXCJwcm9kdWN0c19jZkhlYWRlcl9fZDctbVlcIixcblx0XCJjZlNsaWRlXCI6IFwicHJvZHVjdHNfY2ZTbGlkZV9fdjVqc1hcIixcblx0XCJzaG9wTXlTaGVsZmllXCI6IFwicHJvZHVjdHNfc2hvcE15U2hlbGZpZV9fMlU2N3JcIixcblx0XCJzbUxlZnRcIjogXCJwcm9kdWN0c19zbUxlZnRfXzJPdGc5XCIsXG5cdFwic21SaWdodFwiOiBcInByb2R1Y3RzX3NtUmlnaHRfX2xEUDJCXCIsXG5cdFwic2xpZGVyc091dGVyXCI6IFwicHJvZHVjdHNfc2xpZGVyc091dGVyX18xdkhBLVwiLFxuXHRcInNsaWRlcnNcIjogXCJwcm9kdWN0c19zbGlkZXJzX18zZ05WRVwiLFxuXHRcImRlc2NcIjogXCJwcm9kdWN0c19kZXNjX19Bd3RmYVwiLFxuXHRcInRpdGxlXCI6IFwicHJvZHVjdHNfdGl0bGVfX0dpY2JXXCIsXG5cdFwiYmFubmVyXCI6IFwicHJvZHVjdHNfYmFubmVyX18xVTF6RVwiLFxuXHRcInNob3BOb3dcIjogXCJwcm9kdWN0c19zaG9wTm93X18zYk5nOFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=
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
                  children: ["asda", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: "SHOP NOW"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 269,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_shared_components_nextback_nextback__WEBPACK_IMPORTED_MODULE_5__.default, {
                    theme: 'light',
                    onBack: products_alternate_slider.slickPrev,
                    onNext: products_alternate_slider.slickNext
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 270,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJib2R5X3NsaWRlcl9zZXR0aW5ncyIsImRvdHMiLCJzcGVlZCIsImFycm93cyIsImNlbnRlck1vZGUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJhZGFwdGl2ZUhlaWdodCIsImJlZm9yZUNoYW5nZSIsImN1cnJlbnQiLCJuZXh0Iiwic2V0X2N1cnJlbnRfYm9keV9zbGlkZSIsInVzZVN0YXRlIiwiY3VycmVudF9ib2R5X3NsaWRlIiwiYm9keV9zbGlkZXIiLCJzZXRfYm9keV9zbGlkZXIiLCJmYXZvcml0ZV9zbGlkZXJfc2V0dGluZ3MiLCJ2YXJpYWJsZVdpZHRoIiwiZmF2b3JpdGVfc2xpZGVyIiwic2V0X2Zhdm9yaXRlX3NsaWRlciIsInByb2R1Y3RzX2FsdGVybmF0ZV9zZXR0aW5ncyIsInNldF9jdXJyZW50X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZSIsInByb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZXIiLCJzZXRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlciIsImN1cnJlbnRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlIiwicHJvZHVjdHNfYWx0ZXJuYXRlX2NvbnRlbnQiLCJ0aXRsZSIsImNvbnRlbnQiLCJydGwiLCJkZXNjIiwic2hvcCIsImZhdm9yaXRlX3Byb2R1Y3RzIiwic3R5bGVzIiwiX19odG1sIiwic2xpZGVyIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic2xpY2tQcmV2Iiwic2xpY2tOZXh0IiwicmVmIiwiaW5WaWV3Iiwib3BhY2l0eSIsImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQy9CLE1BQU1DLG9CQUFv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O0FBQUE7QUFBQSxnQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFSO0FBeUlIOztHQW5SdUJ6QyxROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzLjE1ZThiNWFjNjk4OGI0MTE5OGFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3Byb2R1Y3RzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7RnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQge21vdGlvbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQge0luVmlldywgdXNlSW5WaWV3fSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xyXG5pbXBvcnQgTmV4dEJhY2sgZnJvbSBcIi4uL3NoYXJlZC9jb21wb25lbnRzL25leHRiYWNrL25leHRiYWNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cygpIHtcclxuICAgIGNvbnN0IGJvZHlfc2xpZGVyX3NldHRpbmdzID0ge1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIHNwZWVkOiAxMjUwLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogNDAwMCxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgYmVmb3JlQ2hhbmdlOiAoY3VycmVudCwgbmV4dCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRfY3VycmVudF9ib2R5X3NsaWRlKG5leHQpXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdCBbY3VycmVudF9ib2R5X3NsaWRlLCBzZXRfY3VycmVudF9ib2R5X3NsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2JvZHlfc2xpZGVyLCBzZXRfYm9keV9zbGlkZXJdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAgIGNvbnN0IGZhdm9yaXRlX3NsaWRlcl9zZXR0aW5ncyA9IHtcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBzcGVlZDogMTI1MCxcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IFtmYXZvcml0ZV9zbGlkZXIsIHNldF9mYXZvcml0ZV9zbGlkZXJdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAgIGNvbnN0IHByb2R1Y3RzX2FsdGVybmF0ZV9zZXR0aW5ncyA9IHtcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiAxMjUwLFxyXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiA0MDAwLFxyXG4gICAgICAgIGJlZm9yZUNoYW5nZTogKGN1cnJlbnQsIG5leHQpID0+IHtcclxuICAgICAgICAgICAgc2V0X2N1cnJlbnRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlKG5leHQpXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdCBbcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlciwgc2V0X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZXJdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2N1cnJlbnRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlLCBzZXRfY3VycmVudF9wcm9kdWN0c19hbHRlcm5hdGVfc2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBwcm9kdWN0c19hbHRlcm5hdGVfY29udGVudCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU2VzZGVybWEgQXplbGFjIFJ1IExpcG9zb21hbCBTZXJ1bScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdBIHJhbmdlIG9mIGhhbmQtcGlja2VkIGJyYW5kcyBmb3IgdGhlIGJlc3Qgb2YgYm9keSBjYXJlIHByb2R1Y3RzIHRoYXQgYXJlIG1hZGUgd2l0aCBjbGVhbiwgYWN0aXZlIGluZ3JlZGllbnRzIGFuZCBhcmUgcmVzdWx0LWRyaXZlbi4gVGFraW5nIGNhcmUgb2YgeW91ciBib2R5IGlzIGVxdWFsbHkgcmV3YXJkaW5nLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDbGVhbnNpbmcgY29tcGxleCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdHaXZlIHlvdXIgaGFpciBjYXJlIHJvdXRpbmUgYSBidW1wIG9udG8gdGhlIG5leHQgbGV2ZWwuIFdoZXRoZXIgaXQgaXMgZmluZGluZyB0aGUgcmlnaHQgcHJvZHVjdHMgZm9yIHlvdXIgaGFpciB0eXBlIGFuZCBjb25jZXJuIG9yIGFkZGluZyBzb21lIGxvdmVseSBzZXJ1bXMgZm9yIHRoYXQgZXh0cmEgYm91bmNlLCB3ZeKAmXZlIGN1cmF0ZWQgYW4gYXJyYXkgb2YgcHJvZHVjdHMgZm9yIGVhY2ggYW5kIGV2ZXJ5IG9uZSBvZiB5b3VyIG5lZWRzLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNYXNrIHZpdmFudCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdXaGV0aGVyIHlvdeKAmXJlIGEgYmVnaW5uZXIgb3IgYSBza2luY2FyZSBlbnRodXNpYXN0LCB3ZSBoYXZlIHNvbWV0aGluZyBmb3IgeW91IGFsbC4gQ2hvb3NlIGZyb20gb3VyIHJlcGVydG9pcmUgb2YgY3VyYXRlZCBza2luY2FyZSBwcm9kdWN0cyB0aGF0IGhhdmUgYWNxdWlyZWQgYSBjdWx0IHN0YXR1cyBmb3IgdGhlaXIgbmV3LWFnZSBmb3JtdWxhdGlvbnMgYW5kIGFyZSB0YXJnZXRlZCB0b3dhcmRzIGxhc3Rpbmcgc2tpbmNhcmUgYmVuZWZpdHMuIEEgaGVhbHRoeSBnbG93IGF3YWl0cyB5b3UuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0xhaXQgdmlwIDAyJyxcclxuICAgICAgICAgICAgY29udGVudDogJ0F0IEdsb3csIHdlIHByb21vdGUgb3ZlcmFsbCB3ZWxsLWJlaW5nIGZvciBoZWFsdGh5IHNraW4gYW5kIGhhaXIuIEZpbmQgc3VwcGxlbWVudHMgdGhhdCBjb21lIHJlY29tbWVuZGVkIGZvciBhIGdsb3cgdGhhdOKAmXMgZnJvbSB3aXRoaW4uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1A1MCBwaWdtNDAwJyxcclxuICAgICAgICAgICAgY29udGVudDogJ0ZvciBhdC1ob21lIGZhY2lhbHMgYW5kIHVwa2VlcCwgd2UgaGF2ZSBhIHJhbmdlIG9mIHNvbWUgb2YgdGhlIG1vc3QgaW5ub3ZhdGl2ZSB0ZWNobm9sb2d5IHRoYXQgd2lsbCB3b3JrIG9uIGEgZGVlcGVyIGxldmVsIGZvciB0aGF0IGdsb3cgZnJvbSB3aXRoaW4uIFByZXAsIHByaW1lIGFuZCBwb2xpc2ggeW91ciBza2luIHdpdGggdGhlc2UgbXVzdC10cnkgdG9vbHMuIFN0YXJ0aW5nIGZyb20gZWFzeS10by11c2UgdG8gaGlnaC10ZWNoIGRldmljZXMsIHdlIGhhdmUgYSB2YXJpZXR5IG9mIHRvb2xzIHRoYXQgd2lsbCBlbmhhbmNlIHlvdXIgYXQgaG9tZSBiZWF1dHkgcmVnaW1lLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdJc2RpbiBmb3RvcHJvdGVjdG9yIGZ1c2lvbiB3YXRlcicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdGb3IgYXQtaG9tZSBmYWNpYWxzIGFuZCB1cGtlZXAsIHdlIGhhdmUgYSByYW5nZSBvZiBzb21lIG9mIHRoZSBtb3N0IGlubm92YXRpdmUgdGVjaG5vbG9neSB0aGF0IHdpbGwgd29yayBvbiBhIGRlZXBlciBsZXZlbCBmb3IgdGhhdCBnbG93IGZyb20gd2l0aGluLiBQcmVwLCBwcmltZSBhbmQgcG9saXNoIHlvdXIgc2tpbiB3aXRoIHRoZXNlIG11c3QtdHJ5IHRvb2xzLiBTdGFydGluZyBmcm9tIGVhc3ktdG8tdXNlIHRvIGhpZ2gtdGVjaCBkZXZpY2VzLCB3ZSBoYXZlIGEgdmFyaWV0eSBvZiB0b29scyB0aGF0IHdpbGwgZW5oYW5jZSB5b3VyIGF0IGhvbWUgYmVhdXR5IHJlZ2ltZS4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRHViYWkgbGlwcycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdGb3IgYXQtaG9tZSBmYWNpYWxzIGFuZCB1cGtlZXAsIHdlIGhhdmUgYSByYW5nZSBvZiBzb21lIG9mIHRoZSBtb3N0IGlubm92YXRpdmUgdGVjaG5vbG9neSB0aGF0IHdpbGwgd29yayBvbiBhIGRlZXBlciBsZXZlbCBmb3IgdGhhdCBnbG93IGZyb20gd2l0aGluLiBQcmVwLCBwcmltZSBhbmQgcG9saXNoIHlvdXIgc2tpbiB3aXRoIHRoZXNlIG11c3QtdHJ5IHRvb2xzLiBTdGFydGluZyBmcm9tIGVhc3ktdG8tdXNlIHRvIGhpZ2gtdGVjaCBkZXZpY2VzLCB3ZSBoYXZlIGEgdmFyaWV0eSBvZiB0b29scyB0aGF0IHdpbGwgZW5oYW5jZSB5b3VyIGF0IGhvbWUgYmVhdXR5IHJlZ2ltZS4nXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcblxyXG4gICAgY29uc3QgcnRsID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdHb29kIGZvciA8YnIvPicgKyAnR2xvdycsXHJcbiAgICAgICAgICAgIGRlc2M6ICdBIHJhbmdlIG9mIGhhbmQtcGlja2VkIGJyYW5kcyBmb3IgdGhlIGJlc3Qgb2YgYm9keSBjYXJlIHByb2R1Y3RzIHRoYXQgYXJlIG1hZGUgd2l0aCBjbGVhbiwgYWN0aXZlIGluZ3JlZGllbnRzIGFuZCBhcmUgcmVzdWx0LWRyaXZlbi4gVGFraW5nIGNhcmUgb2YgeW91ciBib2R5IGlzIGVxdWFsbHkgcmV3YXJkaW5nLicsXHJcbiAgICAgICAgICAgIHNob3A6ICdCb2R5JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdHZXQgc2V0IDxici8+JyArICdHbG93JyxcclxuICAgICAgICAgICAgZGVzYzogJ0EgcmFuZ2Ugb2YgaGFuZC1waWNrZWQgYnJhbmRzIGZvciB0aGUgYmVzdCBvZiBib2R5IGNhcmUgcHJvZHVjdHMgdGhhdCBhcmUgbWFkZSB3aXRoIGNsZWFuLCBhY3RpdmUgaW5ncmVkaWVudHMgYW5kIGFyZSByZXN1bHQtZHJpdmVuLiBUYWtpbmcgY2FyZSBvZiB5b3VyIGJvZHkgaXMgZXF1YWxseSByZXdhcmRpbmcuJyxcclxuICAgICAgICAgICAgc2hvcDogJ0JvZHknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1lvdSA8YnIvPicgKyAnR2xvdycsXHJcbiAgICAgICAgICAgIGRlc2M6ICdBIHJhbmdlIG9mIGhhbmQtcGlja2VkIGJyYW5kcyBmb3IgdGhlIGJlc3Qgb2YgYm9keSBjYXJlIHByb2R1Y3RzIHRoYXQgYXJlIG1hZGUgd2l0aCBjbGVhbiwgYWN0aXZlIGluZ3JlZGllbnRzIGFuZCBhcmUgcmVzdWx0LWRyaXZlbi4gVGFraW5nIGNhcmUgb2YgeW91ciBib2R5IGlzIGVxdWFsbHkgcmV3YXJkaW5nLicsXHJcbiAgICAgICAgICAgIHNob3A6ICdCb2R5JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdHbG93IEZyb20gPGJyLz4nICsgJ1dpdGhpbicsXHJcbiAgICAgICAgICAgIGRlc2M6ICdBIHJhbmdlIG9mIGhhbmQtcGlja2VkIGJyYW5kcyBmb3IgdGhlIGJlc3Qgb2YgYm9keSBjYXJlIHByb2R1Y3RzIHRoYXQgYXJlIG1hZGUgd2l0aCBjbGVhbiwgYWN0aXZlIGluZ3JlZGllbnRzIGFuZCBhcmUgcmVzdWx0LWRyaXZlbi4gVGFraW5nIGNhcmUgb2YgeW91ciBib2R5IGlzIGVxdWFsbHkgcmV3YXJkaW5nLicsXHJcbiAgICAgICAgICAgIHNob3A6ICdCb2R5JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdBdCBob21lIDxici8+JyArICdHbG93JyxcclxuICAgICAgICAgICAgZGVzYzogJ0EgcmFuZ2Ugb2YgaGFuZC1waWNrZWQgYnJhbmRzIGZvciB0aGUgYmVzdCBvZiBib2R5IGNhcmUgcHJvZHVjdHMgdGhhdCBhcmUgbWFkZSB3aXRoIGNsZWFuLCBhY3RpdmUgaW5ncmVkaWVudHMgYW5kIGFyZSByZXN1bHQtZHJpdmVuLiBUYWtpbmcgY2FyZSBvZiB5b3VyIGJvZHkgaXMgZXF1YWxseSByZXdhcmRpbmcuJyxcclxuICAgICAgICAgICAgc2hvcDogJ0JvZHknLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGZhdm9yaXRlX3Byb2R1Y3RzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdMb3Rpb24gUDUwIEJSJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdXYXJtaW5nIEhvbmV5IENsZWFuc2VyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNaXR0aSByYXcgZmFjZSBtYXNrIHB1cmVlYXJ0aCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUHJvIGhlYWwgc2VydW0gaXMgY2xpbmljYWwnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ09saWdvIHByb3RlaW5zIG1hcmluZXMgc2VydW0nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0xhaXQgdmlwIDAyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIZWxpb2NhcmUgbWluZXJhbCB0b2xlcmFuY2UgZmx1aWQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0Jpb2tpc3MgbGlwIGJhbG0nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NyZW1lIGF1eCBhY2lkIGRlIGZydWl0cycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWFzcXVlIHZpcCAwMicsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG5cclxuICAgIHJldHVybiAoPEZyYWdtZW50PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm91dGVyIFwiICsgc3R5bGVzLmJvZHlPdXRlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImlubmVyIFwiICsgc3R5bGVzLmJvZHl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iTGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBydGxbY3VycmVudF9ib2R5X3NsaWRlXS50aXRsZX19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3J0bFtjdXJyZW50X2JvZHlfc2xpZGVdLmRlc2N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+U2hvcCB7cnRsW2N1cnJlbnRfYm9keV9zbGlkZV0uc2hvcH08L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iUmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXIgcmVmPXtzbGlkZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRfYm9keV9zbGlkZXIoc2xpZGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIH19IHsuLi5ib2R5X3NsaWRlcl9zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ0bC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycvaW1hZ2VzL3Byb2R1Y3RzL3RvcC8nICsgKGluZGV4KSArICcucG5nJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmV4dEJhY2sgb25CYWNrPXtib2R5X3NsaWRlci5zbGlja1ByZXZ9IG9uTmV4dD17Ym9keV9zbGlkZXIuc2xpY2tOZXh0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wib3V0ZXIgXCIgKyBzdHlsZXMucHJvZHVjdERlc2NPdXRlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImlubmVyIFwiICsgc3R5bGVzLnByb2R1Y3REZXNjfT5cclxuICAgICAgICAgICAgICAgIDxwPkFmdGVyIGEgbG90IG9mIGRlbGliZXJhdGlvbiB3ZSBoYXZlIGN1cmF0ZWQgYSB3aWRlIHJhbmdlIG9mIHByb2R1Y3RzIHRoYXQgYXJlIGF2YWlsYWJsZSB0byB5b3UgMjQgeCA3IG9uIG91clxyXG4gICAgICAgICAgICAgICAgICAgIG9ubGluZSBib3V0aXF1ZSBnbG93LnNob3AuIFlvdSBjYW4gYWxzbyBwdXJjaGFzZSB0aGVtIGluLXN0b3JlIHdpdGggdGhlIGFzc2lzdGFuY2Ugb2Ygb3VyIHNraW5jYXJlIGV4cGVydHMgb3JcclxuICAgICAgICAgICAgICAgICAgICBldmVuIHBsYWNlIGFuIG9yZGVyIGZvciBjdXJic2lkZSBwaWNrLXVwLiBUaGVzZSBwcm9kdWN0cyBhcmUgdHJpZWQgYW5kIHRlc3RlZCBjdWx0IGZhdm91cml0ZXMgYW5kIG1hZGUgd2l0aFxyXG4gICAgICAgICAgICAgICAgICAgIGlubm92YXRpdmUgZm9ybXVsYXRpb25zIHRvIG9mZmVyIHlvdSBhbiBldmVybGFzdGluZyBnbG93IGFuZCBoZWxwIHlvdSBvbiB5b3VyIHNraW5jYXJlLCBiZWF1dHkgYW5kIHdlbGxuZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgam91cm5leVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wib3V0ZXIgXCIgKyBzdHlsZXMuY3VycmVudEZhdm91cml0ZXNPdXRlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImlubmVyIFwiICsgc3R5bGVzLmN1cnJlbnRGYXZvdXJpdGVzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2ZIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5WYXJzaGluaSdzIEN1cnJlbnQgRmF2b3VyaXRlczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRCYWNrIG9uQmFjaz17ZmF2b3JpdGVfc2xpZGVyLnNsaWNrUHJldn0gb25OZXh0PXtmYXZvcml0ZV9zbGlkZXIuc2xpY2tOZXh0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2xpZGVyIHJlZj17c2xpZGVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRfZmF2b3JpdGVfc2xpZGVyKHNsaWRlcilcclxuICAgICAgICAgICAgICAgIH19IHsuLi5mYXZvcml0ZV9zbGlkZXJfc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVfcHJvZHVjdHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZlNsaWRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycvaW1hZ2VzL3Byb2R1Y3RzL2Zhdi8nICsgKGluZGV4KSArICcucG5nJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPntpdGVtLnRpdGxlfTwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJvdXRlciBcIiArIHN0eWxlcy5zaG9wTXlTaGVsZmllT3V0ZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJpbm5lciBcIiArIHN0eWxlcy5zaG9wTXlTaGVsZmllfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc21MZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+U2hvcCBteSBzaGVsZmllPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbVJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD4gQmVpbmcgYSBza2luY2FyZSBlbnRodXNpYXN0IG15c2VsZiwgSSBhbSBhbHdheXMgb24gdGhlIGxvb2tvdXQgZm9yIG5ldyBwcm9kdWN0cyB0byBhZGQgdG8gbXkgcmVwZXJ0b2lyZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlc2UgYXJlIGEgZmV3IG9mIG15IGN1cnJlbnQgZmF2b3VyaXRlcywgc29tZSBvZiB3aGljaCBhcmUgc3RhcGxlcyBpbiBteSByb3V0aW5lIGFuZCBzb21lIG5ldyBvbmVzIHlvdSB3b3VsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZSBoYXBweSB0byBkaXNjb3Zlci4gU2hvcCB0aGVzZSBjdXJhdGVkIHByb2R1Y3RzIGFuZCByZWZyZXNoIHlvdXIgc2tpbmNhcmUgc2hlbGYuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+Z2xvdy5zaG9wPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcnNPdXRlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyc30+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjfT5cclxuICAgICAgICAgICAgICAgICAgICBBZnRlciBhIGxvdCBvZiBkZWxpYmVyYXRpb24gd2UgaGF2ZSBjdXJhdGVkIGFcclxuICAgICAgICAgICAgICAgICAgICB3aWRlIHJhbmdlIG9mIHByb2R1Y3RzIHRoYXQgYXJlIGF2YWlsYWJsZSB0byB5b3UgMjQgeCA3IG9uIG91ciBvbmxpbmUgYm91dGlxdWUgZ2xvdy5zaG9wLiBZb3UgY2FuIGFsc28gcHVyY2hhc2UgdGhlbSBpbi1zdG9yZSB3aXRoIHRoZSBhc3Npc3RhbmNlIG9mIG91ciBza2luY2FyZSBleHBlcnRzIG9yXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbiBwbGFjZSBhbiBvcmRlciBmb3IgY3VyYnNpZGUgcGljay11cC4gVGhlc2UgcHJvZHVjdHMgYXJlIHRyaWVkIGFuZCB0ZXN0ZWQgY3VsdCBmYXZvdXJpdGVzIGFuZCBtYWRlXHJcbiAgICAgICAgICAgICAgICAgICAgd2l0aCBpbm5vdmF0aXZlIGZvcm11bGF0aW9ucyB0byBvZmZlciB5b3UgYW4gZXZlcmxhc3RpbmcgZ2xvdyBhbmQgaGVscCB5b3Ugb24geW91ciBza2luY2FyZSwgYmVhdXR5IGFuZCB3ZWxsbmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIGpvdXJuZXkuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPFNsaWRlciByZWY9e3NsaWRlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZXIoc2xpZGVyKVxyXG4gICAgICAgICAgICAgICAgfX0gey4uLnByb2R1Y3RzX2FsdGVybmF0ZV9zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0c19hbHRlcm5hdGVfY29udGVudC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9wcm9kdWN0c19hbHRlcm5hdGVfc2xpZGUgPT09IGluZGV4ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5WaWV3IHRocmVzaG9sZD17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoe3JlZiwgaW5WaWV3fSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OiAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e2luVmlldyA/IHtvcGFjaXR5OiAxfSA6IHtvcGFjaXR5OiAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjogMC43fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtcImdyIFwiICsgKGN1cnJlbnRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlID09PSBpbmRleCA/IHN0eWxlcy5iYW5uZXIgOiAnJyl9IHNyYz17Jy9pbWFnZXMvcHJvZHVjdHMvYWx0ZXJuYXRlLXByb2R1Y3RzLycgKyBpbmRleCArICcucG5nJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3BOb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGgzPjB7aW5kZXggKyAxfSAvIDxzcGFuPjB7cHJvZHVjdHNfYWx0ZXJuYXRlX2NvbnRlbnQubGVuZ3RofTwvc3Bhbj48L2gzPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2RhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TSE9QIE5PVzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0QmFjayB0aGVtZT17J2xpZ2h0J30gb25CYWNrPXtwcm9kdWN0c19hbHRlcm5hdGVfc2xpZGVyLnNsaWNrUHJldn0gb25OZXh0PXtwcm9kdWN0c19hbHRlcm5hdGVfc2xpZGVyLnNsaWNrTmV4dH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9GcmFnbWVudD4pXHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
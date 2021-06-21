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
    title: 'Lait vip 02'
  }, {
    title: 'Heliocare mineral tolerance fluid'
  }, {
    title: 'Biokiss lip balm'
  }, {
    title: 'Biokiss lip balm'
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
              lineNumber: 143,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: rtl[current_body_slide].desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
            children: ["Shop ", rtl[current_body_slide].shop]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
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
                    lineNumber: 156,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 41
              }, _this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_shared_components_nextback_nextback__WEBPACK_IMPORTED_MODULE_5__.default, {
              onBack: body_slider.slickPrev,
              onNext: body_slider.slickNext
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "outer " + (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productDescOuter),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "inner " + (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productDesc),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: "After a lot of deliberation we have curated a wide range of products that are available to you 24 x 7 on our online boutique glow.shop. You can also purchase them in-store with the assistance of our skincare experts or even place an order for curbside pick-up. These products are tried and tested cult favourites and made with innovative formulations to offer you an everlasting glow and help you on your skincare, beauty and wellness journey"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
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
            lineNumber: 185,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_shared_components_nextback_nextback__WEBPACK_IMPORTED_MODULE_5__.default, {
              onBack: favorite_slider.slickPrev,
              onNext: favorite_slider.slickNext
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 184,
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
                  lineNumber: 198,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
                  children: item.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 37
            }, _this);
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
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
            lineNumber: 211,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().smRight),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            children: " Being a skincare enthusiast myself, I am always on the lookout for new products to add to my repertoire. These are a few of my current favourites, some of which are staples in my routine and some new ones you would be happy to discover. Shop these curated products and refresh your skincare shelf."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
            children: "glow.shop"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
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
          lineNumber: 226,
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
                      lineNumber: 246,
                      columnNumber: 53
                    }, _this);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 41
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  className: "gr " + (current_products_alternate_slide === index ? (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_6___default().banner) : ''),
                  src: '/images/products/alternate-products/' + index + '.png'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                    children: ["0", index + 1, " / ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: ["0", products_alternate_content.length]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 258,
                      columnNumber: 60
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 258,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: item.content
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 259,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      src: 'icons/back.svg',
                      onClick: function onClick() {
                        products_alternate_slider.slickPrev();
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 261,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      src: 'icons/forward.svg',
                      onClick: function onClick() {
                        products_alternate_slider.slickNext();
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 264,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 260,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 37
            }, _this);
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 138,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJib2R5X3NsaWRlcl9zZXR0aW5ncyIsImRvdHMiLCJzcGVlZCIsImFycm93cyIsImNlbnRlck1vZGUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJhZGFwdGl2ZUhlaWdodCIsImJlZm9yZUNoYW5nZSIsImN1cnJlbnQiLCJuZXh0Iiwic2V0X2N1cnJlbnRfYm9keV9zbGlkZSIsInVzZVN0YXRlIiwiY3VycmVudF9ib2R5X3NsaWRlIiwiYm9keV9zbGlkZXIiLCJzZXRfYm9keV9zbGlkZXIiLCJmYXZvcml0ZV9zbGlkZXJfc2V0dGluZ3MiLCJ2YXJpYWJsZVdpZHRoIiwiZmF2b3JpdGVfc2xpZGVyIiwic2V0X2Zhdm9yaXRlX3NsaWRlciIsInByb2R1Y3RzX2FsdGVybmF0ZV9zZXR0aW5ncyIsInNldF9jdXJyZW50X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZSIsInByb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZXIiLCJzZXRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlciIsImN1cnJlbnRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlIiwicHJvZHVjdHNfYWx0ZXJuYXRlX2NvbnRlbnQiLCJ0aXRsZSIsImNvbnRlbnQiLCJydGwiLCJkZXNjIiwic2hvcCIsImZhdm9yaXRlX3Byb2R1Y3RzIiwic3R5bGVzIiwiX19odG1sIiwic2xpZGVyIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic2xpY2tQcmV2Iiwic2xpY2tOZXh0IiwicmVmIiwiaW5WaWV3Iiwib3BhY2l0eSIsImR1cmF0aW9uIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQy9CLE1B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QUFBQSx5QkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUjtBQWlDSCxXQWxDRDtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRGSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUjtBQStJSDs7R0FoUnVCekMsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy4wZWM0YTc5NDVlN2VkNzhjMzhmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9wcm9kdWN0cy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge0ZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IHttb3Rpb259IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuaW1wb3J0IHtJblZpZXcsIHVzZUluVmlld30gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcclxuaW1wb3J0IE5leHRCYWNrIGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy9uZXh0YmFjay9uZXh0YmFja1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKSB7XHJcbiAgICBjb25zdCBib2R5X3NsaWRlcl9zZXR0aW5ncyA9IHtcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBzcGVlZDogMTI1MCxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDQwMDAsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgIGJlZm9yZUNoYW5nZTogKGN1cnJlbnQsIG5leHQpID0+IHtcclxuICAgICAgICAgICAgc2V0X2N1cnJlbnRfYm9keV9zbGlkZShuZXh0KVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgY29uc3QgW2N1cnJlbnRfYm9keV9zbGlkZSwgc2V0X2N1cnJlbnRfYm9keV9zbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtib2R5X3NsaWRlciwgc2V0X2JvZHlfc2xpZGVyXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgICBjb25zdCBmYXZvcml0ZV9zbGlkZXJfc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgc3BlZWQ6IDEyNTAsXHJcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgIH07XHJcbiAgICBjb25zdCBbZmF2b3JpdGVfc2xpZGVyLCBzZXRfZmF2b3JpdGVfc2xpZGVyXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0c19hbHRlcm5hdGVfc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogMTI1MCxcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiA0MDAwLFxyXG4gICAgICAgIGJlZm9yZUNoYW5nZTogKGN1cnJlbnQsIG5leHQpID0+IHtcclxuICAgICAgICAgICAgc2V0X2N1cnJlbnRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlKG5leHQpXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdCBbcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlciwgc2V0X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZXJdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjdXJyZW50X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZSwgc2V0X2N1cnJlbnRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBwcm9kdWN0c19hbHRlcm5hdGVfY29udGVudCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQm9keScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdBIHJhbmdlIG9mIGhhbmQtcGlja2VkIGJyYW5kcyBmb3IgdGhlIGJlc3Qgb2YgYm9keSBjYXJlIHByb2R1Y3RzIHRoYXQgYXJlIG1hZGUgd2l0aCBjbGVhbiwgYWN0aXZlIGluZ3JlZGllbnRzIGFuZCBhcmUgcmVzdWx0LWRyaXZlbi4gVGFraW5nIGNhcmUgb2YgeW91ciBib2R5IGlzIGVxdWFsbHkgcmV3YXJkaW5nLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIYWlyJyxcclxuICAgICAgICAgICAgY29udGVudDogJ0dpdmUgeW91ciBoYWlyIGNhcmUgcm91dGluZSBhIGJ1bXAgb250byB0aGUgbmV4dCBsZXZlbC4gV2hldGhlciBpdCBpcyBmaW5kaW5nIHRoZSByaWdodCBwcm9kdWN0cyBmb3IgeW91ciBoYWlyIHR5cGUgYW5kIGNvbmNlcm4gb3IgYWRkaW5nIHNvbWUgbG92ZWx5IHNlcnVtcyBmb3IgdGhhdCBleHRyYSBib3VuY2UsIHdl4oCZdmUgY3VyYXRlZCBhbiBhcnJheSBvZiBwcm9kdWN0cyBmb3IgZWFjaCBhbmQgZXZlcnkgb25lIG9mIHlvdXIgbmVlZHMuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1NraW5jYXJlJyxcclxuICAgICAgICAgICAgY29udGVudDogJ1doZXRoZXIgeW914oCZcmUgYSBiZWdpbm5lciBvciBhIHNraW5jYXJlIGVudGh1c2lhc3QsIHdlIGhhdmUgc29tZXRoaW5nIGZvciB5b3UgYWxsLiBDaG9vc2UgZnJvbSBvdXIgcmVwZXJ0b2lyZSBvZiBjdXJhdGVkIHNraW5jYXJlIHByb2R1Y3RzIHRoYXQgaGF2ZSBhY3F1aXJlZCBhIGN1bHQgc3RhdHVzIGZvciB0aGVpciBuZXctYWdlIGZvcm11bGF0aW9ucyBhbmQgYXJlIHRhcmdldGVkIHRvd2FyZHMgbGFzdGluZyBza2luY2FyZSBiZW5lZml0cy4gQSBoZWFsdGh5IGdsb3cgYXdhaXRzIHlvdS4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU3VwcGxlbWVudHMnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnQXQgR2xvdywgd2UgcHJvbW90ZSBvdmVyYWxsIHdlbGwtYmVpbmcgZm9yIGhlYWx0aHkgc2tpbiBhbmQgaGFpci4gRmluZCBzdXBwbGVtZW50cyB0aGF0IGNvbWUgcmVjb21tZW5kZWQgZm9yIGEgZ2xvdyB0aGF04oCZcyBmcm9tIHdpdGhpbi4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVG9vbHMnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnRm9yIGF0LWhvbWUgZmFjaWFscyBhbmQgdXBrZWVwLCB3ZSBoYXZlIGEgcmFuZ2Ugb2Ygc29tZSBvZiB0aGUgbW9zdCBpbm5vdmF0aXZlIHRlY2hub2xvZ3kgdGhhdCB3aWxsIHdvcmsgb24gYSBkZWVwZXIgbGV2ZWwgZm9yIHRoYXQgZ2xvdyBmcm9tIHdpdGhpbi4gUHJlcCwgcHJpbWUgYW5kIHBvbGlzaCB5b3VyIHNraW4gd2l0aCB0aGVzZSBtdXN0LXRyeSB0b29scy4gU3RhcnRpbmcgZnJvbSBlYXN5LXRvLXVzZSB0byBoaWdoLXRlY2ggZGV2aWNlcywgd2UgaGF2ZSBhIHZhcmlldHkgb2YgdG9vbHMgdGhhdCB3aWxsIGVuaGFuY2UgeW91ciBhdCBob21lIGJlYXV0eSByZWdpbWUuJ1xyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG5cclxuICAgIGNvbnN0IHJ0bCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnR29vZCBmb3IgPGJyLz4nICsgJ0dsb3cnLFxyXG4gICAgICAgICAgICBkZXNjOiAnQSByYW5nZSBvZiBoYW5kLXBpY2tlZCBicmFuZHMgZm9yIHRoZSBiZXN0IG9mIGJvZHkgY2FyZSBwcm9kdWN0cyB0aGF0IGFyZSBtYWRlIHdpdGggY2xlYW4sIGFjdGl2ZSBpbmdyZWRpZW50cyBhbmQgYXJlIHJlc3VsdC1kcml2ZW4uIFRha2luZyBjYXJlIG9mIHlvdXIgYm9keSBpcyBlcXVhbGx5IHJld2FyZGluZy4nLFxyXG4gICAgICAgICAgICBzaG9wOiAnQm9keScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnR2V0IHNldCA8YnIvPicgKyAnR2xvdycsXHJcbiAgICAgICAgICAgIGRlc2M6ICdBIHJhbmdlIG9mIGhhbmQtcGlja2VkIGJyYW5kcyBmb3IgdGhlIGJlc3Qgb2YgYm9keSBjYXJlIHByb2R1Y3RzIHRoYXQgYXJlIG1hZGUgd2l0aCBjbGVhbiwgYWN0aXZlIGluZ3JlZGllbnRzIGFuZCBhcmUgcmVzdWx0LWRyaXZlbi4gVGFraW5nIGNhcmUgb2YgeW91ciBib2R5IGlzIGVxdWFsbHkgcmV3YXJkaW5nLicsXHJcbiAgICAgICAgICAgIHNob3A6ICdCb2R5JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdZb3UgPGJyLz4nICsgJ0dsb3cnLFxyXG4gICAgICAgICAgICBkZXNjOiAnQSByYW5nZSBvZiBoYW5kLXBpY2tlZCBicmFuZHMgZm9yIHRoZSBiZXN0IG9mIGJvZHkgY2FyZSBwcm9kdWN0cyB0aGF0IGFyZSBtYWRlIHdpdGggY2xlYW4sIGFjdGl2ZSBpbmdyZWRpZW50cyBhbmQgYXJlIHJlc3VsdC1kcml2ZW4uIFRha2luZyBjYXJlIG9mIHlvdXIgYm9keSBpcyBlcXVhbGx5IHJld2FyZGluZy4nLFxyXG4gICAgICAgICAgICBzaG9wOiAnQm9keScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnR2xvdyBGcm9tIDxici8+JyArICdXaXRoaW4nLFxyXG4gICAgICAgICAgICBkZXNjOiAnQSByYW5nZSBvZiBoYW5kLXBpY2tlZCBicmFuZHMgZm9yIHRoZSBiZXN0IG9mIGJvZHkgY2FyZSBwcm9kdWN0cyB0aGF0IGFyZSBtYWRlIHdpdGggY2xlYW4sIGFjdGl2ZSBpbmdyZWRpZW50cyBhbmQgYXJlIHJlc3VsdC1kcml2ZW4uIFRha2luZyBjYXJlIG9mIHlvdXIgYm9keSBpcyBlcXVhbGx5IHJld2FyZGluZy4nLFxyXG4gICAgICAgICAgICBzaG9wOiAnQm9keScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQXQgaG9tZSA8YnIvPicgKyAnR2xvdycsXHJcbiAgICAgICAgICAgIGRlc2M6ICdBIHJhbmdlIG9mIGhhbmQtcGlja2VkIGJyYW5kcyBmb3IgdGhlIGJlc3Qgb2YgYm9keSBjYXJlIHByb2R1Y3RzIHRoYXQgYXJlIG1hZGUgd2l0aCBjbGVhbiwgYWN0aXZlIGluZ3JlZGllbnRzIGFuZCBhcmUgcmVzdWx0LWRyaXZlbi4gVGFraW5nIGNhcmUgb2YgeW91ciBib2R5IGlzIGVxdWFsbHkgcmV3YXJkaW5nLicsXHJcbiAgICAgICAgICAgIHNob3A6ICdCb2R5JyxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBmYXZvcml0ZV9wcm9kdWN0cyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTG90aW9uIFA1MCBCUicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnV2FybWluZyBIb25leSBDbGVhbnNlcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWl0dGkgcmF3IGZhY2UgbWFzayBwdXJlZWFydGgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1BybyBoZWFsIHNlcnVtIGlzIGNsaW5pY2FsJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdPbGlnbyBwcm90ZWlucyBtYXJpbmVzIHNlcnVtJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdMYWl0IHZpcCAwMicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSGVsaW9jYXJlIG1pbmVyYWwgdG9sZXJhbmNlIGZsdWlkJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCaW9raXNzIGxpcCBiYWxtJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQmlva2lzcyBsaXAgYmFsbScsXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgXTtcclxuXHJcblxyXG4gICAgcmV0dXJuICg8RnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wib3V0ZXIgXCIgKyBzdHlsZXMuYm9keU91dGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW5uZXIgXCIgKyBzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJMZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHJ0bFtjdXJyZW50X2JvZHlfc2xpZGVdLnRpdGxlfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57cnRsW2N1cnJlbnRfYm9keV9zbGlkZV0uZGVzY308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5TaG9wIHtydGxbY3VycmVudF9ib2R5X3NsaWRlXS5zaG9wfTwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJSaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlciByZWY9e3NsaWRlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldF9ib2R5X3NsaWRlcihzbGlkZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0gey4uLmJvZHlfc2xpZGVyX3NldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnRsLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMvcHJvZHVjdHMvdG9wLycgKyAoaW5kZXgpICsgJy5wbmcnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0QmFjayBvbkJhY2s9e2JvZHlfc2xpZGVyLnNsaWNrUHJldn0gb25OZXh0PXtib2R5X3NsaWRlci5zbGlja05leHR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJvdXRlciBcIiArIHN0eWxlcy5wcm9kdWN0RGVzY091dGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW5uZXIgXCIgKyBzdHlsZXMucHJvZHVjdERlc2N9PlxyXG4gICAgICAgICAgICAgICAgPHA+QWZ0ZXIgYSBsb3Qgb2YgZGVsaWJlcmF0aW9uIHdlIGhhdmUgY3VyYXRlZCBhIHdpZGUgcmFuZ2Ugb2YgcHJvZHVjdHMgdGhhdCBhcmUgYXZhaWxhYmxlIHRvIHlvdSAyNCB4IDcgb24gb3VyXHJcbiAgICAgICAgICAgICAgICAgICAgb25saW5lIGJvdXRpcXVlIGdsb3cuc2hvcC4gWW91IGNhbiBhbHNvIHB1cmNoYXNlIHRoZW0gaW4tc3RvcmUgd2l0aCB0aGUgYXNzaXN0YW5jZSBvZiBvdXIgc2tpbmNhcmUgZXhwZXJ0cyBvclxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW4gcGxhY2UgYW4gb3JkZXIgZm9yIGN1cmJzaWRlIHBpY2stdXAuIFRoZXNlIHByb2R1Y3RzIGFyZSB0cmllZCBhbmQgdGVzdGVkIGN1bHQgZmF2b3VyaXRlcyBhbmQgbWFkZSB3aXRoXHJcbiAgICAgICAgICAgICAgICAgICAgaW5ub3ZhdGl2ZSBmb3JtdWxhdGlvbnMgdG8gb2ZmZXIgeW91IGFuIGV2ZXJsYXN0aW5nIGdsb3cgYW5kIGhlbHAgeW91IG9uIHlvdXIgc2tpbmNhcmUsIGJlYXV0eSBhbmQgd2VsbG5lc3NcclxuICAgICAgICAgICAgICAgICAgICBqb3VybmV5XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJvdXRlciBcIiArIHN0eWxlcy5jdXJyZW50RmF2b3VyaXRlc091dGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW5uZXIgXCIgKyBzdHlsZXMuY3VycmVudEZhdm91cml0ZXN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZkhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlZhcnNoaW5pJ3MgQ3VycmVudCBGYXZvdXJpdGVzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmV4dEJhY2sgb25CYWNrPXtmYXZvcml0ZV9zbGlkZXIuc2xpY2tQcmV2fSBvbk5leHQ9e2Zhdm9yaXRlX3NsaWRlci5zbGlja05leHR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXIgcmVmPXtzbGlkZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldF9mYXZvcml0ZV9zbGlkZXIoc2xpZGVyKVxyXG4gICAgICAgICAgICAgICAgfX0gey4uLmZhdm9yaXRlX3NsaWRlcl9zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZV9wcm9kdWN0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNmU2xpZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMvcHJvZHVjdHMvZmF2LycgKyAoaW5kZXgpICsgJy5wbmcnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+e2l0ZW0udGl0bGV9PC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm91dGVyIFwiICsgc3R5bGVzLnNob3BNeVNoZWxmaWVPdXRlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImlubmVyIFwiICsgc3R5bGVzLnNob3BNeVNoZWxmaWV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbUxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5TaG9wIG15IHNoZWxmaWU8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNtUmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiBCZWluZyBhIHNraW5jYXJlIGVudGh1c2lhc3QgbXlzZWxmLCBJIGFtIGFsd2F5cyBvbiB0aGUgbG9va291dCBmb3IgbmV3IHByb2R1Y3RzIHRvIGFkZCB0byBteSByZXBlcnRvaXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGVzZSBhcmUgYSBmZXcgb2YgbXkgY3VycmVudCBmYXZvdXJpdGVzLCBzb21lIG9mIHdoaWNoIGFyZSBzdGFwbGVzIGluIG15IHJvdXRpbmUgYW5kIHNvbWUgbmV3IG9uZXMgeW91IHdvdWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlIGhhcHB5IHRvIGRpc2NvdmVyLiBTaG9wIHRoZXNlIGN1cmF0ZWQgcHJvZHVjdHMgYW5kIHJlZnJlc2ggeW91ciBza2luY2FyZSBzaGVsZi5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5nbG93LnNob3A8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyc091dGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJzfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2N9PlxyXG4gICAgICAgICAgICAgICAgICAgIEFmdGVyIGEgbG90IG9mIGRlbGliZXJhdGlvbiB3ZSBoYXZlIGN1cmF0ZWQgYVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZGUgcmFuZ2Ugb2YgcHJvZHVjdHMgdGhhdCBhcmUgYXZhaWxhYmxlIHRvIHlvdSAyNCB4IDcgb24gb3VyIG9ubGluZSBib3V0aXF1ZSBnbG93LnNob3AuIFlvdSBjYW4gYWxzbyBwdXJjaGFzZSB0aGVtIGluLXN0b3JlIHdpdGggdGhlIGFzc2lzdGFuY2Ugb2Ygb3VyIHNraW5jYXJlIGV4cGVydHMgb3JcclxuICAgICAgICAgICAgICAgICAgICBldmVuIHBsYWNlIGFuIG9yZGVyIGZvciBjdXJic2lkZSBwaWNrLXVwLiBUaGVzZSBwcm9kdWN0cyBhcmUgdHJpZWQgYW5kIHRlc3RlZCBjdWx0IGZhdm91cml0ZXMgYW5kIG1hZGVcclxuICAgICAgICAgICAgICAgICAgICB3aXRoIGlubm92YXRpdmUgZm9ybXVsYXRpb25zIHRvIG9mZmVyIHlvdSBhbiBldmVybGFzdGluZyBnbG93IGFuZCBoZWxwIHlvdSBvbiB5b3VyIHNraW5jYXJlLCBiZWF1dHkgYW5kIHdlbGxuZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgam91cm5leS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2xpZGVyIHJlZj17c2xpZGVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRfcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlcihzbGlkZXIpXHJcbiAgICAgICAgICAgICAgICB9fSB7Li4ucHJvZHVjdHNfYWx0ZXJuYXRlX3NldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzX2FsdGVybmF0ZV9jb250ZW50Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3Byb2R1Y3RzX2FsdGVybmF0ZV9zbGlkZSA9PT0gaW5kZXggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJblZpZXcgdGhyZXNob2xkPXswfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh7cmVmLCBpblZpZXd9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17aW5WaWV3ID8ge29wYWNpdHk6IDF9IDoge29wYWNpdHk6IDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAwLjd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JblZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e1wiZ3IgXCIgKyAoY3VycmVudF9wcm9kdWN0c19hbHRlcm5hdGVfc2xpZGUgPT09IGluZGV4ID8gc3R5bGVzLmJhbm5lciA6ICcnKX0gc3JjPXsnL2ltYWdlcy9wcm9kdWN0cy9hbHRlcm5hdGUtcHJvZHVjdHMvJyArIGluZGV4ICsgJy5wbmcnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+MHtpbmRleCArIDF9IC8gPHNwYW4+MHtwcm9kdWN0c19hbHRlcm5hdGVfY29udGVudC5sZW5ndGh9PC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eydpY29ucy9iYWNrLnN2Zyd9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHNfYWx0ZXJuYXRlX3NsaWRlci5zbGlja1ByZXYoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17J2ljb25zL2ZvcndhcmQuc3ZnJ30gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0c19hbHRlcm5hdGVfc2xpZGVyLnNsaWNrTmV4dCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L0ZyYWdtZW50PilcclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
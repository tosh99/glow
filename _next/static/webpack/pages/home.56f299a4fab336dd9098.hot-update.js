self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var C_Users_Anutosh_PycharmProjects_Freelance_Glow_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/index.module.scss */ "./pages/styles/index.module.scss");
/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var _shared_components_ourclinic_ourclinic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/ourclinic/ourclinic */ "./shared/components/ourclinic/ourclinic.js");
/* harmony import */ var _shared_components_home_page_header_home_page_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/home-page-header/home-page-header */ "./shared/components/home-page-header/home-page-header.js");
/* harmony import */ var _styles_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/constants */ "./styles/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Anutosh\\PycharmProjects\\Freelance\\Glow\\pages\\home.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Anutosh_PycharmProjects_Freelance_Glow_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function Home() {
  _s();

  var _this = this;

  var settings = {
    dots: true,
    speed: 1250,
    centerMode: true,
    adaptiveHeight: true,
    variableWidth: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 4000,
    beforeChange: function beforeChange(current, next) {
      set_current_slide(next);
    }
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      current_slide = _useState[0],
      set_current_slide = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      slider = _useState2[0],
      setslider = _useState2[1];

  var carousel_content = [{
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_shared_components_home_page_header_home_page_header__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "outer " + (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().skinCareOuter),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "inner " + (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().skinCare),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
          children: ["Experience a new ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 42
          }, this), " kind of skincare ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 65
          }, this), " indulgence"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().img),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().imgRight),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                src: _styles_constants__WEBPACK_IMPORTED_MODULE_7__.constants.assetPrefix + 'images/home/banner.png'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Your skin changes with age, diet, weather, lifestyle choices and your state of mind. At every turning point, you need to check in with your skin. At Glow, we don\u2019t categorise you into a skin type. We consult with you to get to know your skin and then proceed with a personalised service."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().reju),
              children: "Welcome to Glow, the skincare wonderland. Step in and tell us what you\u2019d like to do today."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().strip)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.InView, {
      threshold: 0.25,
      triggerOnce: true,
      children: function children(_ref) {
        var ref = _ref.ref,
            inView = _ref.inView;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
          className: "outer",
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
            duration: 0.8
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "inner " + (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().skinCarePhil),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().scLeft),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                src: _styles_constants__WEBPACK_IMPORTED_MODULE_7__.constants.assetPrefix + 'images/home/skincare.png'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().scRight),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                  children: ["Our ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 49
                  }, _this), " skincare philosophy"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 41
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: "Bringing forth a new concept of fusing clinical beauty with skin therapy, Dr. Varshini Reddy has distinguished herself as a skincare specialist. Her belief is that the foundation of your beauty lies at the heart of healthy skin and hair. Fostering healthy habits, checking in regularly with your dermatologist, upkeep and indulgence are the pillars of Glow\u2019s skincare philosophy. "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 41
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().identity),
                  children: "The identity you\u2019re building. The choices you\u2019re making. The confidence you\u2019re exuding. The love you\u2019re sharing. It\u2019s contagious. At Glow, we help you shine that spell-binding light."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 41
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
                children: "read more"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 25
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.InView, {
      threshold: 0.25,
      triggerOnce: true,
      children: function children(_ref2) {
        var ref = _ref2.ref,
            inView = _ref2.inView;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
          className: "outer " + (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sayHelloOuter),
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
            duration: 0.8
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "inner " + (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sayHello),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().shTop),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                children: "Say hello to Glow"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: "With our boutique skin studios set up in Hyderabad and Chennai, we have fostered an ever-growing client list of skincare enthusiasts from around the globe. Taking private consultations in our studio set-ups and virtually, we are happy to provide result-oriented products, world-class facilities and the latest in aesthetic technologies. Make an appointment to get your skin update and to understand your skin health with Dr. Varshini Reddy."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 41
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
                  className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().selfcare),
                  children: "Afterall selfcare is an expression of self-love."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 41
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().scBottom),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                src: _styles_constants__WEBPACK_IMPORTED_MODULE_7__.constants.assetPrefix + 'images/home/sayhello.png'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
                children: "make AN appointment"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 25
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.InView, {
      threshold: 0.25,
      triggerOnce: true,
      children: function children(_ref3) {
        var ref = _ref3.ref,
            inView = _ref3.inView;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
          className: "outer " + ' ' + (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().servicesOuter),
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
            duration: 0.8
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "inner " + (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().skinCarePhil) + ' ' + (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().scLeft),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                src: _styles_constants__WEBPACK_IMPORTED_MODULE_7__.constants.assetPrefix + 'images/home/services.png'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().scRight),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                  children: "Services at Glow"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 41
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: "Our approach to skincare is oriented towards immediate and lasting results using technologically advanced therapies for better skin health. We have curated a menu of exclusive services that are recommended upon doing a thorough clinical analysis of your skin instant and tailored to provide you an everlasting and healthy glow."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 41
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().identity),
                  children: "Both the services and space are designed to transport you to a state of tranquility."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 41
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
                children: "discover more"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 25
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().slidersOuter),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sliders),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().desc),
          children: "After a lot of deliberation we have curated a wide range of products that are available to you 24 x 7 on our online boutique glow.shop. You can also purchase them in-store with the assistance of our skincare experts or even place an order for curbside pick-up. These products are tried and tested cult favourites and made with innovative formulations to offer you an everlasting glow and help you on your skincare, beauty and wellness journey."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({
          ref: function ref(slider) {
            setslider(slider);
          }
        }, settings), {}, {
          children: carousel_content.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().slide),
                children: [current_slide === index && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.InView, {
                  threshold: 0,
                  children: function children(_ref4) {
                    var ref = _ref4.ref,
                        inView = _ref4.inView;
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
                      className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title),
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
                      lineNumber: 213,
                      columnNumber: 57
                    }, _this);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 45
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  className: "gr " + (current_slide === index ? (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().banner) : ''),
                  src: _styles_constants__WEBPACK_IMPORTED_MODULE_7__.constants.assetPrefix + 'images/home/slider-' + (index + 1) + '.png'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 41
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                    children: ["0", index + 1, " / ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: ["0", carousel_content.length]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 64
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: item.content
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.InView, {
                    threshold: 0,
                    children: function children(_ref5) {
                      var ref = _ref5.ref,
                          inView = _ref5.inView;
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
                        className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().titleM),
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
                        lineNumber: 231,
                        columnNumber: 57
                      }, _this);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      src: 'icons/back.svg',
                      onClick: function onClick() {
                        slider.slickPrev();
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 241,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      src: 'icons/forward.svg',
                      onClick: function onClick() {
                        slider.slickNext();
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 244,
                      columnNumber: 49
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 240,
                    columnNumber: 45
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 41
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 41
            }, _this);
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.InView, {
      threshold: 0.25,
      triggerOnce: true,
      children: function children(_ref6) {
        var ref = _ref6.ref,
            inView = _ref6.inView;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
          className: "outer " + ' ' + (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().glowEditOuter),
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
            duration: 0.8
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "inner " + (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().skinCarePhil) + ' ' + (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().glowEdit),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().scLeft),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                src: _styles_constants__WEBPACK_IMPORTED_MODULE_7__.constants.assetPrefix + 'images/home/glowedit.png'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().scRight),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                  children: ["The ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 283,
                    columnNumber: 49
                  }, _this), "Glow Edit"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 283,
                  columnNumber: 41
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: "Dr. Varshini Reddy started Glow as a skincare destination that could serve as a clinic, medispa and a rest stop for you to indulge in some self-care. Apart from being a dermatologist, she is also a skincare enthusiast who is here to share all her clinical know-how and experience. Let's cover our bases with all the basic information everyone just assumes you know. At Glow, we want to enlighten you so you can make an informed decision. A Holy-Glow-Grail to guide you on your journey to clinical skincare, beauty and wellness."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 284,
                  columnNumber: 41
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 282,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
                children: "find articles"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 25
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_shared_components_ourclinic_ourclinic__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.InView, {
      threshold: 0.25,
      triggerOnce: true,
      children: function children(_ref7) {
        var ref = _ref7.ref,
            inView = _ref7.inView;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
          className: "outer " + ' ' + (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().journeyOuter),
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
            duration: 0.8
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "inner " + (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().journey),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().joLeft),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                children: "Shedding Light on Dr.Varshini\u2019s Journey"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 313,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: "dr. Varshini reddy"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 317,
                  columnNumber: 41
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
                  children: "MD Dermatology"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 318,
                  columnNumber: 41
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 315,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().joRight),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                src: _styles_constants__WEBPACK_IMPORTED_MODULE_7__.constants.assetPrefix + 'images/home/varshini.png'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 322,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: "At Glow, we wanted to promote skin, beauty and wellness as ideologies that go hand-in-hand. Having studied MD Dermatology and been around the globe to learn about new-age technologies in the world of skincare, Dr. Varshini Reddy wanted to bring the best of those to India. Her journey has been exciting and full of new learnings which took her from being a skincare enthusiast to a practicing dermatologist."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 323,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: "She has consulted with many people over the course of years and has distinguished herself as an advocate for wholesome rejuvenation. With an established and ever-growing clientbase she has extended her platform to a larger audience and opened doors to Glow, a contemporary space for skin indulgence."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 327,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
                children: "read more"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 330,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 321,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 25
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }, this);
}

_s(Home, "SK+zx+yDK05JBcnQ3I3SVvAwVHE=");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcyJdLCJuYW1lcyI6WyJIb21lIiwic2V0dGluZ3MiLCJkb3RzIiwic3BlZWQiLCJjZW50ZXJNb2RlIiwiYWRhcHRpdmVIZWlnaHQiLCJ2YXJpYWJsZVdpZHRoIiwiYXJyb3dzIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiYmVmb3JlQ2hhbmdlIiwiY3VycmVudCIsIm5leHQiLCJzZXRfY3VycmVudF9zbGlkZSIsInVzZVN0YXRlIiwiY3VycmVudF9zbGlkZSIsInNsaWRlciIsInNldHNsaWRlciIsImNhcm91c2VsX2NvbnRlbnQiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdHlsZXMiLCJjb25zdGFudHMiLCJzdHJpcCIsInJlZiIsImluVmlldyIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxlbmd0aCIsInNsaWNrUHJldiIsInNsaWNrTmV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUMzQixNQUFNQyxRQUFRLEdBQUc7QUFDYkMsUUFBSSxFQUFFLElBRE87QUFFYkMsU0FBSyxFQUFFLElBRk07QUFHYkMsY0FBVSxFQUFFLElBSEM7QUFJYkMsa0JBQWMsRUFBRSxJQUpIO0FBS2JDLGlCQUFhLEVBQUUsSUFMRjtBQU1iQyxVQUFNLEVBQUUsS0FOSztBQU9iQyxZQUFRLEVBQUUsS0FQRztBQVFiQyxpQkFBYSxFQUFFLElBUkY7QUFTYkMsZ0JBQVksRUFBRSxzQkFBQ0MsT0FBRCxFQUFVQyxJQUFWLEVBQW1CO0FBQzdCQyx1QkFBaUIsQ0FBQ0QsSUFBRCxDQUFqQjtBQUNIO0FBWFksR0FBakI7O0FBRDJCLGtCQWVnQkUsK0NBQVEsQ0FBQyxDQUFELENBZnhCO0FBQUEsTUFl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QUE7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBelBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ1NIOztHQTFVdUJ0QixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuNTZmMjk5YTRmYWIzMzZkZDkwOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbmltcG9ydCB7SW5WaWV3LCB1c2VJblZpZXd9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcbmltcG9ydCBPdXJjbGluaWMgZnJvbSBcIi4uL3NoYXJlZC9jb21wb25lbnRzL291cmNsaW5pYy9vdXJjbGluaWNcIjtcclxuaW1wb3J0IEhvbWVQYWdlSGVhZGVyIGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy9ob21lLXBhZ2UtaGVhZGVyL2hvbWUtcGFnZS1oZWFkZXJcIjtcclxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gXCIuLi9zdHlsZXMvY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogMTI1MCxcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogNDAwMCxcclxuICAgICAgICBiZWZvcmVDaGFuZ2U6IChjdXJyZW50LCBuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldF9jdXJyZW50X3NsaWRlKG5leHQpXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRfc2xpZGUsIHNldF9jdXJyZW50X3NsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHJcbiAgICBjb25zdCBbc2xpZGVyLCBzZXRzbGlkZXJdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IGNhcm91c2VsX2NvbnRlbnQgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0JvZHknLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnQSByYW5nZSBvZiBoYW5kLXBpY2tlZCBicmFuZHMgZm9yIHRoZSBiZXN0IG9mIGJvZHkgY2FyZSBwcm9kdWN0cyB0aGF0IGFyZSBtYWRlIHdpdGggY2xlYW4sIGFjdGl2ZSBpbmdyZWRpZW50cyBhbmQgYXJlIHJlc3VsdC1kcml2ZW4uIFRha2luZyBjYXJlIG9mIHlvdXIgYm9keSBpcyBlcXVhbGx5IHJld2FyZGluZy4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSGFpcicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdHaXZlIHlvdXIgaGFpciBjYXJlIHJvdXRpbmUgYSBidW1wIG9udG8gdGhlIG5leHQgbGV2ZWwuIFdoZXRoZXIgaXQgaXMgZmluZGluZyB0aGUgcmlnaHQgcHJvZHVjdHMgZm9yIHlvdXIgaGFpciB0eXBlIGFuZCBjb25jZXJuIG9yIGFkZGluZyBzb21lIGxvdmVseSBzZXJ1bXMgZm9yIHRoYXQgZXh0cmEgYm91bmNlLCB3ZeKAmXZlIGN1cmF0ZWQgYW4gYXJyYXkgb2YgcHJvZHVjdHMgZm9yIGVhY2ggYW5kIGV2ZXJ5IG9uZSBvZiB5b3VyIG5lZWRzLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTa2luY2FyZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdXaGV0aGVyIHlvdeKAmXJlIGEgYmVnaW5uZXIgb3IgYSBza2luY2FyZSBlbnRodXNpYXN0LCB3ZSBoYXZlIHNvbWV0aGluZyBmb3IgeW91IGFsbC4gQ2hvb3NlIGZyb20gb3VyIHJlcGVydG9pcmUgb2YgY3VyYXRlZCBza2luY2FyZSBwcm9kdWN0cyB0aGF0IGhhdmUgYWNxdWlyZWQgYSBjdWx0IHN0YXR1cyBmb3IgdGhlaXIgbmV3LWFnZSBmb3JtdWxhdGlvbnMgYW5kIGFyZSB0YXJnZXRlZCB0b3dhcmRzIGxhc3Rpbmcgc2tpbmNhcmUgYmVuZWZpdHMuIEEgaGVhbHRoeSBnbG93IGF3YWl0cyB5b3UuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1N1cHBsZW1lbnRzJyxcclxuICAgICAgICAgICAgY29udGVudDogJ0F0IEdsb3csIHdlIHByb21vdGUgb3ZlcmFsbCB3ZWxsLWJlaW5nIGZvciBoZWFsdGh5IHNraW4gYW5kIGhhaXIuIEZpbmQgc3VwcGxlbWVudHMgdGhhdCBjb21lIHJlY29tbWVuZGVkIGZvciBhIGdsb3cgdGhhdOKAmXMgZnJvbSB3aXRoaW4uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1Rvb2xzJyxcclxuICAgICAgICAgICAgY29udGVudDogJ0ZvciBhdC1ob21lIGZhY2lhbHMgYW5kIHVwa2VlcCwgd2UgaGF2ZSBhIHJhbmdlIG9mIHNvbWUgb2YgdGhlIG1vc3QgaW5ub3ZhdGl2ZSB0ZWNobm9sb2d5IHRoYXQgd2lsbCB3b3JrIG9uIGEgZGVlcGVyIGxldmVsIGZvciB0aGF0IGdsb3cgZnJvbSB3aXRoaW4uIFByZXAsIHByaW1lIGFuZCBwb2xpc2ggeW91ciBza2luIHdpdGggdGhlc2UgbXVzdC10cnkgdG9vbHMuIFN0YXJ0aW5nIGZyb20gZWFzeS10by11c2UgdG8gaGlnaC10ZWNoIGRldmljZXMsIHdlIGhhdmUgYSB2YXJpZXR5IG9mIHRvb2xzIHRoYXQgd2lsbCBlbmhhbmNlIHlvdXIgYXQgaG9tZSBiZWF1dHkgcmVnaW1lLidcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8SG9tZVBhZ2VIZWFkZXIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJvdXRlciBcIiArIHN0eWxlcy5za2luQ2FyZU91dGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImlubmVyIFwiICsgc3R5bGVzLnNraW5DYXJlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+RXhwZXJpZW5jZSBhIG5ldyA8YnIvPiBraW5kIG9mIHNraW5jYXJlIDxici8+IGluZHVsZ2VuY2U8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4mbmJzcDs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWdSaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjb25zdGFudHMuYXNzZXRQcmVmaXggKyAnaW1hZ2VzL2hvbWUvYmFubmVyLnBuZyd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91ciBza2luIGNoYW5nZXMgd2l0aCBhZ2UsIGRpZXQsIHdlYXRoZXIsIGxpZmVzdHlsZSBjaG9pY2VzIGFuZCB5b3VyIHN0YXRlIG9mIG1pbmQuIEF0IGV2ZXJ5IHR1cm5pbmcgcG9pbnQsIHlvdSBuZWVkIHRvIGNoZWNrIGluIHdpdGggeW91ciBza2luLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0IEdsb3csIHdlIGRvbuKAmXQgY2F0ZWdvcmlzZSB5b3UgaW50byBhIHNraW4gdHlwZS4gV2UgY29uc3VsdCB3aXRoIHlvdSB0byBnZXQgdG8ga25vdyB5b3VyIHNraW4gYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGEgcGVyc29uYWxpc2VkIHNlcnZpY2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5yZWp1fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIEdsb3csIHRoZSBza2luY2FyZSB3b25kZXJsYW5kLiBTdGVwIGluIGFuZCB0ZWxsIHVzIHdoYXQgeW914oCZZCBsaWtlIHRvIGRvIHRvZGF5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdHJpcH0+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEluVmlldyB0aHJlc2hvbGQ9ezAuMjV9IHRyaWdnZXJPbmNlPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAoe3JlZiwgaW5WaWV3fSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9e1wib3V0ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OiAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17aW5WaWV3ID8ge29wYWNpdHk6IDF9IDoge29wYWNpdHk6IDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDAuOH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW5uZXIgXCIgKyBzdHlsZXMuc2tpbkNhcmVQaGlsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNjTGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjb25zdGFudHMuYXNzZXRQcmVmaXggKyAnaW1hZ2VzL2hvbWUvc2tpbmNhcmUucG5nJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2NSaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+T3VyIDxici8+IHNraW5jYXJlIHBoaWxvc29waHk8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QnJpbmdpbmcgZm9ydGggYSBuZXcgY29uY2VwdCBvZiBmdXNpbmcgY2xpbmljYWwgYmVhdXR5IHdpdGggc2tpbiB0aGVyYXB5LCBEci4gVmFyc2hpbmkgUmVkZHkgaGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGluZ3Vpc2hlZCBoZXJzZWxmIGFzIGEgc2tpbmNhcmUgc3BlY2lhbGlzdC4gSGVyIGJlbGllZiBpcyB0aGF0IHRoZSBmb3VuZGF0aW9uIG9mIHlvdXIgYmVhdXR5IGxpZXMgYXQgdGhlIGhlYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgaGVhbHRoeSBza2luIGFuZCBoYWlyLiBGb3N0ZXJpbmcgaGVhbHRoeSBoYWJpdHMsIGNoZWNraW5nIGluIHJlZ3VsYXJseSB3aXRoIHlvdXIgZGVybWF0b2xvZ2lzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGtlZXAgYW5kIGluZHVsZ2VuY2UgYXJlIHRoZSBwaWxsYXJzIG9mIEdsb3figJlzIHNraW5jYXJlIHBoaWxvc29waHkuIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmlkZW50aXR5fT5UaGUgaWRlbnRpdHkgeW914oCZcmUgYnVpbGRpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGNob2ljZXMgeW914oCZcmUgbWFraW5nLiBUaGUgY29uZmlkZW5jZSB5b3XigJlyZSBleHVkaW5nLiBUaGUgbG92ZSB5b3XigJlyZSBzaGFyaW5nLiBJdOKAmXMgY29udGFnaW91cy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdCBHbG93LCB3ZSBoZWxwIHlvdSBzaGluZSB0aGF0IHNwZWxsLWJpbmRpbmcgbGlnaHQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5yZWFkIG1vcmU8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0luVmlldz5cclxuXHJcbiAgICAgICAgICAgIHsvKjxJblZpZXcgdGhyZXNob2xkPXswLjI1fT4qL31cclxuICAgICAgICAgICAgey8qICAgIHsqL31cclxuICAgICAgICAgICAgey8qICAgICAgICAoe3JlZiwgaW5WaWV3fSkgPT4gKCovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9e1wib3V0ZXJcIn0qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OiAwfX0qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17aW5WaWV3ID8ge29wYWNpdHk6IDF9IDoge29wYWNpdHk6IDB9fSovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDAuOH19PiovfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDwvbW90aW9uLmRpdj4pKi99XHJcbiAgICAgICAgICAgIHsvKiAgICB9Ki99XHJcbiAgICAgICAgICAgIHsvKjwvSW5WaWV3PiovfVxyXG5cclxuICAgICAgICAgICAgPEluVmlldyB0aHJlc2hvbGQ9ezAuMjV9IHRyaWdnZXJPbmNlPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAoe3JlZiwgaW5WaWV3fSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9e1wib3V0ZXIgXCIgKyBzdHlsZXMuc2F5SGVsbG9PdXRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OiAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17aW5WaWV3ID8ge29wYWNpdHk6IDF9IDoge29wYWNpdHk6IDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDAuOH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW5uZXIgXCIgKyBzdHlsZXMuc2F5SGVsbG99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hUb3B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+U2F5IGhlbGxvIHRvIEdsb3c8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2l0aCBvdXIgYm91dGlxdWUgc2tpbiBzdHVkaW9zIHNldCB1cCBpbiBIeWRlcmFiYWQgYW5kIENoZW5uYWksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2UgaGF2ZSBmb3N0ZXJlZCBhbiBldmVyLWdyb3dpbmcgY2xpZW50IGxpc3Qgb2Ygc2tpbmNhcmUgZW50aHVzaWFzdHMgZnJvbSBhcm91bmQgdGhlIGdsb2JlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRha2luZyBwcml2YXRlIGNvbnN1bHRhdGlvbnMgaW4gb3VyIHN0dWRpbyBzZXQtdXBzIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpcnR1YWxseSwgd2UgYXJlIGhhcHB5IHRvIHByb3ZpZGUgcmVzdWx0LW9yaWVudGVkIHByb2R1Y3RzLCB3b3JsZC1jbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhY2lsaXRpZXMgYW5kIHRoZSBsYXRlc3QgaW4gYWVzdGhldGljIHRlY2hub2xvZ2llcy4gTWFrZSBhbiBhcHBvaW50bWVudCB0byBnZXQgeW91ciBza2luIHVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB0byB1bmRlcnN0YW5kIHlvdXIgc2tpbiBoZWFsdGggd2l0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERyLiBWYXJzaGluaSBSZWRkeS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLnNlbGZjYXJlfT5BZnRlcmFsbCBzZWxmY2FyZSBpcyBhbiBleHByZXNzaW9uIG9mIHNlbGYtbG92ZS48L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zY0JvdHRvbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjb25zdGFudHMuYXNzZXRQcmVmaXggKyAnaW1hZ2VzL2hvbWUvc2F5aGVsbG8ucG5nJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPm1ha2UgQU4gYXBwb2ludG1lbnQ8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvSW5WaWV3PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxJblZpZXcgdGhyZXNob2xkPXswLjI1fSB0cmlnZ2VyT25jZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgKHtyZWYsIGluVmlld30pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtcIm91dGVyIFwiICsgJyAnICsgc3R5bGVzLnNlcnZpY2VzT3V0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7b3BhY2l0eTogMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e2luVmlldyA/IHtvcGFjaXR5OiAxfSA6IHtvcGFjaXR5OiAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAwLjh9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImlubmVyIFwiICsgc3R5bGVzLnNraW5DYXJlUGhpbCArICcgJyArIHN0eWxlcy5zZXJ2aWNlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zY0xlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y29uc3RhbnRzLmFzc2V0UHJlZml4ICsgJ2ltYWdlcy9ob21lL3NlcnZpY2VzLnBuZyd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNjUmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlNlcnZpY2VzIGF0IEdsb3c8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+T3VyIGFwcHJvYWNoIHRvIHNraW5jYXJlIGlzIG9yaWVudGVkIHRvd2FyZHMgaW1tZWRpYXRlIGFuZCBsYXN0aW5nIHJlc3VsdHMgdXNpbmcgdGVjaG5vbG9naWNhbGx5IGFkdmFuY2VkIHRoZXJhcGllcyBmb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXR0ZXIgc2tpbiBoZWFsdGguIFdlIGhhdmUgY3VyYXRlZCBhIG1lbnUgb2YgZXhjbHVzaXZlIHNlcnZpY2VzIHRoYXQgYXJlIHJlY29tbWVuZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBvbiBkb2luZyBhIHRob3JvdWdoIGNsaW5pY2FsIGFuYWx5c2lzIG9mIHlvdXIgc2tpbiBpbnN0YW50IGFuZCB0YWlsb3JlZCB0byBwcm92aWRlIHlvdSBhbiBldmVybGFzdGluZyBhbmQgaGVhbHRoeSBnbG93LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaWRlbnRpdHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvdGggdGhlIHNlcnZpY2VzIGFuZCBzcGFjZSBhcmUgZGVzaWduZWQgdG8gdHJhbnNwb3J0IHlvdSB0byBhIHN0YXRlIG9mIHRyYW5xdWlsaXR5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+ZGlzY292ZXIgbW9yZTwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvSW5WaWV3PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyc091dGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFmdGVyIGEgbG90IG9mIGRlbGliZXJhdGlvbiB3ZSBoYXZlIGN1cmF0ZWQgYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRlIHJhbmdlIG9mIHByb2R1Y3RzIHRoYXQgYXJlIGF2YWlsYWJsZSB0byB5b3UgMjQgeCA3IG9uIG91ciBvbmxpbmUgYm91dGlxdWUgZ2xvdy5zaG9wLiBZb3UgY2FuIGFsc28gcHVyY2hhc2UgdGhlbSBpbi1zdG9yZSB3aXRoIHRoZSBhc3Npc3RhbmNlIG9mIG91ciBza2luY2FyZSBleHBlcnRzIG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW4gcGxhY2UgYW4gb3JkZXIgZm9yIGN1cmJzaWRlIHBpY2stdXAuIFRoZXNlIHByb2R1Y3RzIGFyZSB0cmllZCBhbmQgdGVzdGVkIGN1bHQgZmF2b3VyaXRlcyBhbmQgbWFkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoIGlubm92YXRpdmUgZm9ybXVsYXRpb25zIHRvIG9mZmVyIHlvdSBhbiBldmVybGFzdGluZyBnbG93IGFuZCBoZWxwIHlvdSBvbiB5b3VyIHNraW5jYXJlLCBiZWF1dHkgYW5kIHdlbGxuZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvdXJuZXkuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIHJlZj17c2xpZGVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0c2xpZGVyKHNsaWRlcilcclxuICAgICAgICAgICAgICAgICAgICB9fSB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbF9jb250ZW50Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9zbGlkZSA9PT0gaW5kZXggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5WaWV3IHRocmVzaG9sZD17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh7cmVmLCBpblZpZXd9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e2luVmlldyA/IHtvcGFjaXR5OiAxfSA6IHtvcGFjaXR5OiAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDAuN319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JblZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e1wiZ3IgXCIgKyAoY3VycmVudF9zbGlkZSA9PT0gaW5kZXggPyBzdHlsZXMuYmFubmVyIDogJycpfSBzcmM9e2NvbnN0YW50cy5hc3NldFByZWZpeCArICdpbWFnZXMvaG9tZS9zbGlkZXItJyArIChpbmRleCArIDEpICsgJy5wbmcnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4we2luZGV4ICsgMX0gLyA8c3Bhbj4we2Nhcm91c2VsX2NvbnRlbnQubGVuZ3RofTwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJblZpZXcgdGhyZXNob2xkPXswfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHtyZWYsIGluVmlld30pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZU19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e2luVmlldyA/IHtvcGFjaXR5OiAxfSA6IHtvcGFjaXR5OiAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDAuN319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JblZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eydpY29ucy9iYWNrLnN2Zyd9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlci5zbGlja1ByZXYoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnaWNvbnMvZm9yd2FyZC5zdmcnfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXIuc2xpY2tOZXh0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17XCJvdXRlciBcIiArIHN0eWxlcy53ZWxjb21lVG9HbG93T3V0ZXJ9PiovfVxyXG4gICAgICAgICAgICB7LyogICAgPGRpdiBjbGFzc05hbWU9e1wiaW5uZXIgXCIgKyBzdHlsZXMud2VsY29tZVRvR2xvd30+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgPHZpZGVvIGNvbnRyb2xzPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICA8c291cmNlIHNyYz1cIm1vdmllLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIi8+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwibW92aWUub2dnXCIgdHlwZT1cInZpZGVvL29nZ1wiLz4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICA8L3ZpZGVvPiovfVxyXG4gICAgICAgICAgICB7LyogICAgPC9kaXY+Ki99XHJcbiAgICAgICAgICAgIHsvKjwvZGl2PiovfVxyXG5cclxuICAgICAgICAgICAgPEluVmlldyB0aHJlc2hvbGQ9ezAuMjV9IHRyaWdnZXJPbmNlPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAoe3JlZiwgaW5WaWV3fSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9e1wib3V0ZXIgXCIgKyAnICcgKyBzdHlsZXMuZ2xvd0VkaXRPdXRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OiAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17aW5WaWV3ID8ge29wYWNpdHk6IDF9IDoge29wYWNpdHk6IDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDAuOH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW5uZXIgXCIgKyBzdHlsZXMuc2tpbkNhcmVQaGlsICsgJyAnICsgc3R5bGVzLmdsb3dFZGl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNjTGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjb25zdGFudHMuYXNzZXRQcmVmaXggKyAnaW1hZ2VzL2hvbWUvZ2xvd2VkaXQucG5nJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2NSaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+VGhlIDxici8+R2xvdyBFZGl0PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRyLiBWYXJzaGluaSBSZWRkeSBzdGFydGVkIEdsb3cgYXMgYSBza2luY2FyZSBkZXN0aW5hdGlvbiB0aGF0IGNvdWxkIHNlcnZlIGFzIGEgY2xpbmljLCBtZWRpc3BhIGFuZCBhIHJlc3Qgc3RvcCBmb3IgeW91IHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kdWxnZSBpbiBzb21lIHNlbGYtY2FyZS4gQXBhcnQgZnJvbSBiZWluZyBhIGRlcm1hdG9sb2dpc3QsIHNoZSBpcyBhbHNvIGEgc2tpbmNhcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRodXNpYXN0IHdobyBpcyBoZXJlIHRvIHNoYXJlIGFsbCBoZXIgY2xpbmljYWwga25vdy1ob3cgYW5kIGV4cGVyaWVuY2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGV0J3MgY292ZXIgb3VyIGJhc2VzIHdpdGggYWxsIHRoZSBiYXNpYyBpbmZvcm1hdGlvbiBldmVyeW9uZSBqdXN0IGFzc3VtZXMgeW91IGtub3cuIEF0IEdsb3csIHdlIHdhbnQgdG8gZW5saWdodGVuIHlvdSBzb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdSBjYW4gbWFrZSBhbiBpbmZvcm1lZCBkZWNpc2lvbi4gQSBIb2x5LUdsb3ctR3JhaWwgdG8gZ3VpZGUgeW91IG9uIHlvdXIgam91cm5leSB0b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaW5pY2FsIHNraW5jYXJlLCBiZWF1dHkgYW5kIHdlbGxuZXNzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPmZpbmQgYXJ0aWNsZXM8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0luVmlldz5cclxuXHJcbiAgICAgICAgICAgIDxPdXJjbGluaWMvPlxyXG5cclxuICAgICAgICAgICAgPEluVmlldyB0aHJlc2hvbGQ9ezAuMjV9IHRyaWdnZXJPbmNlPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAoe3JlZiwgaW5WaWV3fSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9e1wib3V0ZXIgXCIgKyAnICcgKyBzdHlsZXMuam91cm5leU91dGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtpblZpZXcgPyB7b3BhY2l0eTogMX0gOiB7b3BhY2l0eTogMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjogMC44fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJpbm5lciBcIiArIHN0eWxlcy5qb3VybmV5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmpvTGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5TaGVkZGluZyBMaWdodCBvbiBEci5WYXJzaGluaeKAmXMgSm91cm5leTwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEZvbnQgU3BlY2lmaWNhdGlvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPmRyLiBWYXJzaGluaSByZWRkeTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+TUQgRGVybWF0b2xvZ3k8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5qb1JpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbnN0YW50cy5hc3NldFByZWZpeCArICdpbWFnZXMvaG9tZS92YXJzaGluaS5wbmcnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkF0IEdsb3csIHdlIHdhbnRlZCB0byBwcm9tb3RlIHNraW4sIGJlYXV0eSBhbmQgd2VsbG5lc3MgYXMgaWRlb2xvZ2llcyB0aGF0IGdvIGhhbmQtaW4taGFuZC4gSGF2aW5nIHN0dWRpZWQgTURcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlcm1hdG9sb2d5IGFuZCBiZWVuIGFyb3VuZCB0aGUgZ2xvYmUgdG8gbGVhcm4gYWJvdXQgbmV3LWFnZSB0ZWNobm9sb2dpZXMgaW4gdGhlIHdvcmxkIG9mIHNraW5jYXJlLCBEci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhcnNoaW5pIFJlZGR5IHdhbnRlZCB0byBicmluZyB0aGUgYmVzdCBvZiB0aG9zZSB0byBJbmRpYS4gSGVyIGpvdXJuZXkgaGFzIGJlZW4gZXhjaXRpbmcgYW5kIGZ1bGwgb2YgbmV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWFybmluZ3Mgd2hpY2ggdG9vayBoZXIgZnJvbSBiZWluZyBhIHNraW5jYXJlIGVudGh1c2lhc3QgdG8gYSBwcmFjdGljaW5nIGRlcm1hdG9sb2dpc3QuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TaGUgaGFzIGNvbnN1bHRlZCB3aXRoIG1hbnkgcGVvcGxlIG92ZXIgdGhlIGNvdXJzZSBvZiB5ZWFycyBhbmQgaGFzIGRpc3Rpbmd1aXNoZWQgaGVyc2VsZiBhcyBhbiBhZHZvY2F0ZSBmb3Igd2hvbGVzb21lIHJlanV2ZW5hdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpdGggYW4gZXN0YWJsaXNoZWQgYW5kIGV2ZXItZ3Jvd2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50YmFzZSBzaGUgaGFzIGV4dGVuZGVkIGhlciBwbGF0Zm9ybSB0byBhIGxhcmdlciBhdWRpZW5jZSBhbmQgb3BlbmVkIGRvb3JzIHRvIEdsb3csIGEgY29udGVtcG9yYXJ5IHNwYWNlIGZvciBza2luIGluZHVsZ2VuY2UuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPnJlYWQgbW9yZTwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0luVmlldz5cclxuXHJcblxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
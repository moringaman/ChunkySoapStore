webpackHotUpdate("static/development/pages/product.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _styles_Style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Style.css */ "./styles/Style.css");
/* harmony import */ var _styles_Style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/AppContext */ "./components/context/AppContext.js");
var _jsxFileName = "/home/webnostix/Codebase/REACT/woo-next/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Layout(props) {
  return __jsx(_context_AppContext__WEBPACK_IMPORTED_MODULE_4__["AppProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "WooCommerce React Theme"), __jsx("link", {
    rel: "stylesheet",
    href: "https://bootswatch.com/4/flatly/bootstrap.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), props.children));
}

/***/ }),

/***/ "./components/context/AppContext.js":
/*!******************************************!*\
  !*** ./components/context/AppContext.js ***!
  \******************************************/
/*! exports provided: AppContext, AppProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProvider", function() { return AppProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/webnostix/Codebase/REACT/woo-next/components/context/AppContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var AppContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext([{}, function () {}]);
var AppProvider = function AppProvider(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      cart = _useState[0],
      setCart = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (true) {
      var cartData = localStorage.getItem('soap-cart');
      cartData = null !== cartData ? JSON.parse(cartData) : '';
      setCart(cartData);
    }
  }, []);
  return __jsx(AppContext.Provider, {
    value: [cart, setCart],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.children);
};

/***/ })

})
//# sourceMappingURL=product.js.c131dc271023ddba0d22.hot-update.js.map
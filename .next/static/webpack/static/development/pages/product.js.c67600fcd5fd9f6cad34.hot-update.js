webpackHotUpdate("static/development/pages/product.js",{

/***/ "./components/cart/CartIcon.js":
/*!*************************************!*\
  !*** ./components/cart/CartIcon.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../context/AppContext */ "./components/context/AppContext.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/webnostix/Codebase/REACT/woo-next/components/cart/CartIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var CartIcon = function CartIcon() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__["AppContext"]),
      cart = _useContext[0],
      setCart = _useContext[1];

  var productsCount = null !== cart && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(cart).length ? cart.totalProductsNumber : '';
  var totalPrice = null !== cart && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(cart).length ? cart.totalProductsPrice : '';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "soap-cart__wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, totalPrice ? __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, totalPrice.toFixed(2)) : '', __jsx("span", {
    className: "soap-cart_icon__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-shopping-cart soap-cart_icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), productsCount ? __jsx("span", {
    className: "soap-cart-count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, productsCount) : '')))));
};

/* harmony default export */ __webpack_exports__["default"] = (CartIcon);

/***/ })

})
//# sourceMappingURL=product.js.c67600fcd5fd9f6cad34.hot-update.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cart_AddToCartButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart/AddToCartButton */ "./components/cart/AddToCartButton.js");
var _jsxFileName = "/home/webnostix/Codebase/REACT/woo-next/components/Product.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Product = function Product(props) {
  var product = props.product;
  console.log('Product', product);
  return __jsx("div", {
    className: "card mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h3", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, product.name), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    as: "/product/".concat(product.slug, "-").concat(product.productId),
    href: "/product?slug=".concat(product.slug, "-").concat(product.productId),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("img", {
    style: {
      height: '300px',
      width: '100%',
      display: 'block',
      margin: 'auto auto'
    },
    src: product.image ? product.image.sourceUrl : '',
    alt: "Card image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h6", {
    className: "card-subtitle text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, product.price)), __jsx("div", {
    className: "product-buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_cart_AddToCartButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    product: product,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ })

})
//# sourceMappingURL=index.js.059e7001644d34055df8.hot-update.js.map
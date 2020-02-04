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
var _jsxFileName = "/home/webnostix/Codebase/REACT/woo-next/components/Product.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Product = function Product(props) {
  var product = props.product;
  console.log('Product', product);
  return __jsx("div", {
    className: "card mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h3", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, product.name), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    style: {
      height: '300px',
      width: '100%',
      display: 'block',
      margin: 'auto auto'
    },
    src: product.image ? product.image.sourceUrl : '' // src={product.images.length ? product.images[0].src : ''}
    ,
    alt: "Card image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h6", {
    className: "card-subtitle text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, product.price)));
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ })

})
//# sourceMappingURL=index.js.3eef08c1e8ef09e2bf91.hot-update.js.map
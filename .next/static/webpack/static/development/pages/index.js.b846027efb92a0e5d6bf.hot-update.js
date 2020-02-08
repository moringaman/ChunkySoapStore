webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/cart/AddToCartButton.js":
/*!********************************************!*\
  !*** ./components/cart/AddToCartButton.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../functions */ "./functions.js");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../context/AppContext */ "./components/context/AppContext.js");
var _jsxFileName = "/home/webnostix/Codebase/REACT/woo-next/components/cart/AddToCartButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var AddToCartButton = function AddToCartButton(props) {
  var product = props.product;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_AppContext__WEBPACK_IMPORTED_MODULE_3__["AppContext"]),
      cart = _useContext[0],
      setCart = _useContext[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showViewCart = _useState[0],
      setShowViewCart = _useState[1];

  var handleAddToCartClick = function handleAddToCartClick() {
    if (true) {
      var existingCart = localStorage.getItem('soap-cart');

      if (existingCart) {
        // If existing add new product to cart
        existingCart = JSON.parse(existingCart);
        var qty = 1;
        var updatedCart = Object(_functions__WEBPACK_IMPORTED_MODULE_2__["updateCart"])(existingCart, product, qty);
        setCart(updatedCart);
      } else {
        // If no cart Data, create empty array and push product to it
        var newCart = Object(_functions__WEBPACK_IMPORTED_MODULE_2__["addFirstProduct"])(product);
        setCart(newCart);
      }
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("button", {
    onClick: handleAddToCartClick,
    className: "btn btn-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Add to Cart"));
};

/* harmony default export */ __webpack_exports__["default"] = (AddToCartButton);

/***/ })

})
//# sourceMappingURL=index.js.b846027efb92a0e5d6bf.hot-update.js.map
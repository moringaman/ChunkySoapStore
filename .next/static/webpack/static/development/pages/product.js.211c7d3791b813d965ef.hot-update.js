webpackHotUpdate("static/development/pages/product.js",{

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
//# sourceMappingURL=product.js.211c7d3791b813d965ef.hot-update.js.map
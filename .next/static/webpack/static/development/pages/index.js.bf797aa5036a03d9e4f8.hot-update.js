webpackHotUpdate("static/development/pages/index.js",{

/***/ "./functions.js":
/*!**********************!*\
  !*** ./functions.js ***!
  \**********************/
/*! exports provided: getFloatValue, addFirstProduct, createNewProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFloatValue", function() { return getFloatValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFirstProduct", function() { return addFirstProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewProduct", function() { return createNewProduct; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);

var getFloatValue = function getFloatValue(string) {
  var floatVal = string.match(/[+-]?\d+(\.\d+)?/g)[0];
  console.warn(floatVal);
  return null !== floatVal ? _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(floatVal).toFixed(2)) : '';
};
var addFirstProduct = function addFirstProduct(product) {
  var productPrice = getFloatValue(product.price);
  var newCart = {
    products: [],
    totalProductsNumber: 1,
    totalProductsPrice: productPrice
  };
  var newProduct = createNewProduct(product, productPrice, 1);
  newCart.products.push(newProduct);
};
/**
 * @param  {} product
 * @param  {} productPrice
 * @param  {} qty
 * @param  {product.productId} =>{return{productID
 * @param  {product.image.sourceUrl} image
 * @param  {product.name} name
 * @param  {productPrice} price
 * @param  {qty} qty
 * @param  {parseFloat((productPrice*qty} totalPrice
 */

var createNewProduct = function createNewProduct(product, productPrice, qty) {
  return {
    productID: product.productId,
    image: product.image.sourceUrl,
    name: product.name,
    price: productPrice,
    qty: qty,
    totalPrice: _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()((productPrice * qty).toFixed(2))
  };
};

/***/ })

})
//# sourceMappingURL=index.js.bf797aa5036a03d9e4f8.hot-update.js.map
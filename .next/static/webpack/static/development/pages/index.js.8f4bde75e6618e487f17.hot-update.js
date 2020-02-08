webpackHotUpdate("static/development/pages/index.js",{

/***/ "./functions.js":
/*!**********************!*\
  !*** ./functions.js ***!
  \**********************/
/*! exports provided: getFloatValue, addFirstProduct, createNewProduct, updateCart, getUpdatedProducts, isProductInCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFloatValue", function() { return getFloatValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFirstProduct", function() { return addFirstProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewProduct", function() { return createNewProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCart", function() { return updateCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdatedProducts", function() { return getUpdatedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProductInCart", function() { return isProductInCart; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2__);



var getFloatValue = function getFloatValue(string) {
  var floatVal = string.match(/[+-]?\d+(\.\d+)?/g)[0];
  console.warn(floatVal);
  return null !== floatVal ? _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(floatVal).toFixed(2)) : '';
};
/**
 * @param  {} product
 * @param  {} =>{letproductPrice=getFloatValue(product.price
 * @param  {[]} letnewCart={products
 * @param  {1} totalProductsNumber
 * @param  {productPrice}constnewProduct=createNewProduct(product} totalProductsPrice
 * @param  {} productPrice
 * @param  {} 1
 * @param  {} newCart.products.push(newProduct
 * @param  {} localStorage.setItem('soap-cart'
 * @param  {} JSON.stringify(newCart
 */

var addFirstProduct = function addFirstProduct(product) {
  var productPrice = getFloatValue(product.price);
  var newCart = {
    products: [],
    totalProductsNumber: 1,
    totalProductsPrice: productPrice
  };
  var newProduct = createNewProduct(product, productPrice, 1);
  newCart.products.push(newProduct);
  localStorage.setItem('soap-cart', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(newCart));
  return newCart;
};
/** Create a new product object
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
    image: product.image,
    name: product.name,
    price: productPrice,
    qty: qty,
    totalPrice: _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default()((productPrice * qty).toFixed(2))
  };
};
var updateCart = function updateCart(existingCart, product, qty) {
  var newQuantity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var updatedProducts = getUpdatedProducts(existingCart.products, product, qty, newQuantity);

  var addTotal = function addTotal(total, item) {
    total.totalPrice += item.totalPrice;
    total.qty += item.qty;
    return total;
  };

  var total = updatedProducts.reduce(addTotal, {
    totalPrice: 0,
    qty: 0
  });
  var updatedCart = {
    products: updatedProducts,
    totalProductsNumber: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(total.qty),
    totalProductsPrice: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(total.totalPrice)
  };
  localStorage.setItem('soap-cart', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(updatedCart));
  return updatedCart;
};
/** Get updated cart array
 * Update product if it exists
 * add the new product to existing cart
 * @param  {} existingCartProducts
 * @param  {} newProduct
 * @param  {} qty
 * @param  {} newQuantity=false
 * @param  {} =>{constproductExistsIndex=isProductInCart(existingCartProducts
 * @param  {} newProduct.productID
 * @param  {} if(productExistsIndex>-1
 * @param  {} {letupdatedProducts=existingCartProductsletupdatedProduct=updatedProducts[productExistsIndex];updatedProduct.qty=(newQuantity?parseInt(newQuantity
 */

var getUpdatedProducts = function getUpdatedProducts(existingCartProducts, product, qty) {
  var newQuantity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // Check if product is already in cart
  var productExistsIndex = isProductInCart(existingCartProducts, product.productID); // if in cart update quantity by qty and recalculate total price

  if (productExistsIndex > -1) {
    var updatedProducts = existingCartProducts;
    var updatedProduct = updatedProducts[productExistsIndex];
    updatedProduct.qty = newQuantity ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(newQuantity) : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(updatedProduct.qty + qty);
    updatedProduct.totalPrice = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(updatedProduct.price * updatedProduct.qty).toFixed(2);
    return updatedProduct;
  } else {
    // if not create new product and push onto array of products
    var productPrice = getFloatValue(product.price);
    var newProduct = createNewProduct(product, productPrice, qty);
    existingCartProducts.push(newProduct);
    return existingCartProducts;
  }
};
/** Return index of product is it exists in the cart
 * @param  {} existingCartProducts
 * @param  {} newProductId
 * @param  {} =>{returnItemThatExists=(item
 * @param  {} index
 * @param  {} =>{if(item.productID===newProductId
 * @param  {} {returnitem}}constnewArray=existingCartProducts.filter(returnItemThatExists
 * @param  {} returnexistingCartProducts.indexOf(newArray[0]
 */

var isProductInCart = function isProductInCart(existingCartProducts, newProductId) {
  var returnItemThatExists = function returnItemThatExists(item, index) {
    if (item.productID === newProductId) {
      return item;
    }
  };

  var newArray = existingCartProducts.filter(returnItemThatExists);
  return existingCartProducts.indexOf(newArray[0]);
};

/***/ })

})
//# sourceMappingURL=index.js.8f4bde75e6618e487f17.hot-update.js.map
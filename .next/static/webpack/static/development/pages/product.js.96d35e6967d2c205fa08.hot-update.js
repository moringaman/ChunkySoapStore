webpackHotUpdate("static/development/pages/product.js",{

/***/ "./pages/product.js":
/*!**************************!*\
  !*** ./pages/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ApolloClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ApolloClient */ "./components/ApolloClient.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "/home/webnostix/Codebase/REACT/woo-next/pages/product.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])([" query Product( $id: Int ! ) {\n\t\t\tproductBy( productId: $id ) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tproductId\n\t\t\t\t\t\t\taverageRating\n\t\t\t\t\t\t\tslug\n\t\t\t\t\t\t\tdescription\n\t\t\t\t\t\t\timage {\n\t\t\t\t\t\t\t\turi\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\tsrcSet\n\t\t\t\t\t\t\t\tsourceUrl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t  ... on SimpleProduct {\n\t\t\t\t\t        price\n\t\t\t\t\t        id\n\t\t\t\t\t      }\n\t\t\t\t\t      ... on VariableProduct {\n\t\t\t\t\t        price\n\t\t\t\t\t        id\n\t\t\t\t\t      }\n\t\t\t\t\t      ... on ExternalProduct {\n\t\t\t\t\t        price\n\t\t\t\t\t        id\n\t\t\t\t\t      }\n\t\t\t\t\t      ... on GroupProduct {\n\t\t\t\t\t        products {\n\t\t\t\t\t          nodes {\n\t\t\t\t\t            ... on SimpleProduct {\n\t\t\t\t\t              price\n\t\t\t\t\t            }\n\t\t\t\t\t          }\n\t\t\t\t\t        }\n\t\t\t\t\t        id\n\t\t\t\t\t      }\n\t\t\t\t\t    }\n\n\t\t\t\t\n\t\t\t\n\t }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // import AddToCartButton from "../components/cart/AddToCartButton";

var Product = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(function (props) {
  var product = props.product;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, product ? __jsx("div", {
    className: "woo-next-single",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "woo-next-single__product card bg-light mb-3 p-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, product.name), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h4", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, product.name), __jsx("img", {
    src: product.image.sourceUrl,
    alt: "Product Image",
    width: "200",
    srcSet: product.image.srcSet,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, product.description)))) : '');
});

Product.getInitialProps = function _callee(context) {
  var slug, id, PRODUCT_QUERY, res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.warn(context);
          slug = context.query.slug;
          id = slug ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(slug.split('-').pop()) : context.query.id;
          PRODUCT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject());
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_components_ApolloClient__WEBPACK_IMPORTED_MODULE_6__["default"].query({
            query: PRODUCT_QUERY,
            variables: {
              id: id
            }
          }));

        case 6:
          res = _context.sent;
          return _context.abrupt("return", {
            product: res.data.productBy
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ })

})
//# sourceMappingURL=product.js.96d35e6967d2c205fa08.hot-update.js.map
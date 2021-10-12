webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Articles/ArticleCard.js":
/*!********************************************!*\
  !*** ./components/Articles/ArticleCard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Image */ \"./common/Image.jsx\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _chakra_ui_styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/styled-system */ \"./node_modules/@chakra-ui/styled-system/dist/esm/index.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/elbgi/Desktop/bombers/frontend/components/Articles/ArticleCard.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar ArticleCard = function ArticleCard(_ref) {\n  var article = _ref.article,\n      styles = _ref.styles,\n      highlight = _ref.highlight;\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    as: \"/article/\".concat(article.slug || \"hello\"),\n    href: \"/article/[id]\",\n    m: \"16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"LinkBox\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n    direction: \"row\",\n    maxW: \"5xl\",\n    borderWidth: \"1px\",\n    overflow: \"hidden\",\n    borderRadius: \"8px\",\n    borderColor: \"brand.400\",\n    cursor: \"pointer\",\n    bg: \"brand.black\",\n    sx: _objectSpread(_objectSpread({}, styles), {}, {\n      transition: \"all .2s ease-in-out\",\n      _hover: {\n        transform: \"scale(1.05)\",\n        boxShadow: \"0px 5px 10px #21212150\"\n      }\n    }),\n    bgGradient: \"gradient.main\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(_common_Image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    image: article.image,\n    sx: {\n      objectFit: \"cover\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    p: \"4\",\n    ml: \"4\",\n    mr: \"8\",\n    mb: \"8\",\n    w: \"100px\",\n    borderBottom: \"3px solid #212121\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    d: \"flex\",\n    alignItems: \"baseline\",\n    m: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Badge\"], {\n    borderRadius: \"full\",\n    px: \"2\",\n    bg: \"brand.light\",\n    color: \"brand.black\",\n    mr: \"4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, article.category.name), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    color: \"brand.medium\",\n    fontWeight: \"semibold\",\n    letterSpacing: \"wide\",\n    fontSize: \"xs\",\n    textTransform: \"uppercase\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, new Date(article.publishedAt).toLocaleDateString())), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n    alignItems: \"start\",\n    direction: \"column\",\n    justifyContent: \"flex-start\",\n    m: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    fontWeight: \"semibold\",\n    lineHeight: \"tight\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n    fontSize: highlight ? \"2xl\" : \"xl\",\n    as: \"h1\",\n    fontWeight: \"bolder\",\n    textTransform: highlight ? \"uppercase\" : \"none\",\n    color: \"brand.light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 15\n    }\n  }, article.title)), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    overflowY: \"scroll\",\n    color: \"brand.light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 15\n    }\n  }, article.description))))));\n};\n\n_c = ArticleCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"ArticleCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlcy9BcnRpY2xlQ2FyZC5qcz9hNmZjIl0sIm5hbWVzIjpbIkFydGljbGVDYXJkIiwiYXJ0aWNsZSIsInN0eWxlcyIsImhpZ2hsaWdodCIsInNsdWciLCJ0cmFuc2l0aW9uIiwiX2hvdmVyIiwidHJhbnNmb3JtIiwiYm94U2hhZG93IiwiaW1hZ2UiLCJvYmplY3RGaXQiLCJjYXRlZ29yeSIsIm5hbWUiLCJEYXRlIiwicHVibGlzaGVkQXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQW9DO0FBQUEsTUFBakNDLE9BQWlDLFFBQWpDQSxPQUFpQztBQUFBLE1BQXhCQyxNQUF3QixRQUF4QkEsTUFBd0I7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ3RELFNBQ0UsTUFBQyxnREFBRDtBQUNFLE1BQUUscUJBQWNGLE9BQU8sQ0FBQ0csSUFBUixJQUFnQixPQUE5QixDQURKO0FBRUUsUUFBSSxFQUFDLGVBRlA7QUFHRSxLQUFDLEVBQUMsSUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUNFLGFBQVMsRUFBQyxLQURaO0FBRUUsUUFBSSxFQUFDLEtBRlA7QUFHRSxlQUFXLEVBQUMsS0FIZDtBQUlFLFlBQVEsRUFBQyxRQUpYO0FBS0UsZ0JBQVksRUFBQyxLQUxmO0FBTUUsZUFBVyxFQUFDLFdBTmQ7QUFPRSxVQUFNLEVBQUMsU0FQVDtBQVFFLE1BQUUsRUFBQyxhQVJMO0FBU0UsTUFBRSxrQ0FDR0YsTUFESDtBQUVBRyxnQkFBVSxFQUFFLHFCQUZaO0FBR0FDLFlBQU0sRUFBRTtBQUNOQyxpQkFBUyxFQUFFLGFBREw7QUFFTkMsaUJBQVMsRUFBRTtBQUZMO0FBSFIsTUFUSjtBQWlCRSxjQUFVLEVBQUMsZUFqQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW1CRSxNQUFDLHFEQUFEO0FBQU8sU0FBSyxFQUFFUCxPQUFPLENBQUNRLEtBQXRCO0FBQTZCLE1BQUUsRUFBRTtBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJGLEVBb0JFLE1BQUMscURBQUQ7QUFDRSxLQUFDLEVBQUMsR0FESjtBQUVFLE1BQUUsRUFBQyxHQUZMO0FBR0UsTUFBRSxFQUFDLEdBSEw7QUFJRSxNQUFFLEVBQUMsR0FKTDtBQUtFLEtBQUMsRUFBQyxPQUxKO0FBTUUsZ0JBQVksRUFBQyxtQkFOZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJGLEVBNEJFLE1BQUMscURBQUQ7QUFBSyxLQUFDLEVBQUMsTUFBUDtBQUFjLGNBQVUsRUFBQyxVQUF6QjtBQUFvQyxLQUFDLEVBQUUsQ0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFDRSxnQkFBWSxFQUFDLE1BRGY7QUFFRSxNQUFFLEVBQUMsR0FGTDtBQUdFLE1BQUUsRUFBQyxhQUhMO0FBSUUsU0FBSyxFQUFDLGFBSlI7QUFLRSxNQUFFLEVBQUMsR0FMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dULE9BQU8sQ0FBQ1UsUUFBUixDQUFpQkMsSUFQcEIsQ0FERixFQVVFLE1BQUMscURBQUQ7QUFDRSxTQUFLLEVBQUMsY0FEUjtBQUVFLGNBQVUsRUFBQyxVQUZiO0FBR0UsaUJBQWEsRUFBQyxNQUhoQjtBQUlFLFlBQVEsRUFBQyxJQUpYO0FBS0UsaUJBQWEsRUFBQyxXQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0csSUFBSUMsSUFBSixDQUFTWixPQUFPLENBQUNhLFdBQWpCLEVBQThCQyxrQkFBOUIsRUFQSCxDQVZGLENBNUJGLEVBaURFLE1BQUMsc0RBQUQ7QUFDRSxjQUFVLEVBQUMsT0FEYjtBQUVFLGFBQVMsRUFBQyxRQUZaO0FBR0Usa0JBQWMsRUFBQyxZQUhqQjtBQUlFLEtBQUMsRUFBRSxDQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLHFEQUFEO0FBQUssY0FBVSxFQUFDLFVBQWhCO0FBQTJCLGNBQVUsRUFBQyxPQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUNFLFlBQVEsRUFBRVosU0FBUyxHQUFHLEtBQUgsR0FBVyxJQURoQztBQUVFLE1BQUUsRUFBQyxJQUZMO0FBR0UsY0FBVSxFQUFDLFFBSGI7QUFJRSxpQkFBYSxFQUFFQSxTQUFTLEdBQUcsV0FBSCxHQUFpQixNQUozQztBQUtFLFNBQUssRUFBQyxhQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPR0YsT0FBTyxDQUFDZSxLQVBYLENBREYsQ0FORixFQWlCRSxNQUFDLHFEQUFEO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBd0IsU0FBSyxFQUFDLGFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0JmLE9BQU8sQ0FBQ2dCLFdBQXhCLENBREYsQ0FqQkYsQ0FqREYsQ0FERixDQUxGLENBREY7QUFpRkQsQ0FsRkQ7O0tBQU1qQixXO0FBb0ZTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXJ0aWNsZXMvQXJ0aWNsZUNhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9JbWFnZVwiO1xuaW1wb3J0IHsgQm94LCBMaW5rQm94LCBCYWRnZSwgVGV4dCwgRmxleCB9IGZyb20gXCJAY2hha3JhLXVpL2xheW91dFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IGJhY2tncm91bmQgfSBmcm9tIFwiQGNoYWtyYS11aS9zdHlsZWQtc3lzdGVtXCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcblxuY29uc3QgQXJ0aWNsZUNhcmQgPSAoeyBhcnRpY2xlLCBzdHlsZXMsIGhpZ2hsaWdodCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIGFzPXtgL2FydGljbGUvJHthcnRpY2xlLnNsdWcgfHwgXCJoZWxsb1wifWB9XG4gICAgICBocmVmPVwiL2FydGljbGUvW2lkXVwiXG4gICAgICBtPVwiMTZcIlxuICAgID5cbiAgICAgIDxMaW5rQm94PlxuICAgICAgICA8RmxleFxuICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgbWF4Vz1cIjV4bFwiXG4gICAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxuICAgICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCI4cHhcIlxuICAgICAgICAgIGJvcmRlckNvbG9yPVwiYnJhbmQuNDAwXCJcbiAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgICBiZz1cImJyYW5kLmJsYWNrXCJcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgLjJzIGVhc2UtaW4tb3V0XCIsXG4gICAgICAgICAgICBfaG92ZXI6IHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEuMDUpXCIsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogXCIwcHggNXB4IDEwcHggIzIxMjEyMTUwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgYmdHcmFkaWVudD1cImdyYWRpZW50Lm1haW5cIlxuICAgICAgICA+XG4gICAgICAgICAgPEltYWdlIGltYWdlPXthcnRpY2xlLmltYWdlfSBzeD17eyBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSAvPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHA9XCI0XCJcbiAgICAgICAgICAgIG1sPVwiNFwiXG4gICAgICAgICAgICBtcj1cIjhcIlxuICAgICAgICAgICAgbWI9XCI4XCJcbiAgICAgICAgICAgIHc9XCIxMDBweFwiXG4gICAgICAgICAgICBib3JkZXJCb3R0b209XCIzcHggc29saWQgIzIxMjEyMVwiXG4gICAgICAgICAgPjwvQm94PlxuICAgICAgICAgIDxCb3ggZD1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiYmFzZWxpbmVcIiBtPXs0fT5cbiAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJmdWxsXCJcbiAgICAgICAgICAgICAgcHg9XCIyXCJcbiAgICAgICAgICAgICAgYmc9XCJicmFuZC5saWdodFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiYnJhbmQuYmxhY2tcIlxuICAgICAgICAgICAgICBtcj1cIjRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YXJ0aWNsZS5jYXRlZ29yeS5uYW1lfVxuICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgY29sb3I9XCJicmFuZC5tZWRpdW1cIlxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwic2VtaWJvbGRcIlxuICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPVwid2lkZVwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwieHNcIlxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge25ldyBEYXRlKGFydGljbGUucHVibGlzaGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cInN0YXJ0XCJcbiAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgbT17NH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiIGxpbmVIZWlnaHQ9XCJ0aWdodFwiPlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXtoaWdobGlnaHQgPyBcIjJ4bFwiIDogXCJ4bFwifVxuICAgICAgICAgICAgICAgIGFzPVwiaDFcIlxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkZXJcIlxuICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09e2hpZ2hsaWdodCA/IFwidXBwZXJjYXNlXCIgOiBcIm5vbmVcIn1cbiAgICAgICAgICAgICAgICBjb2xvcj1cImJyYW5kLmxpZ2h0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHthcnRpY2xlLnRpdGxlfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3ggb3ZlcmZsb3dZPVwic2Nyb2xsXCIgY29sb3I9XCJicmFuZC5saWdodFwiPlxuICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93bj57YXJ0aWNsZS5kZXNjcmlwdGlvbn08L1JlYWN0TWFya2Rvd24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvTGlua0JveD5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Articles/ArticleCard.js\n");

/***/ })

})
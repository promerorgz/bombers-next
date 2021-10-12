webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/media-query */ \"./node_modules/@chakra-ui/media-query/dist/esm/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _common_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Hero */ \"./common/Hero.jsx\");\n/* harmony import */ var _common_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Layout */ \"./common/Layout.jsx\");\n/* harmony import */ var _common_Seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/Seo */ \"./common/Seo.jsx\");\n/* harmony import */ var _components_Articles_articles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Articles/articles */ \"./components/Articles/articles.js\");\n/* harmony import */ var _components_Games__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Games */ \"./components/Games/index.js\");\n/* harmony import */ var _components_Paypal_paypal_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Paypal/paypal-button */ \"./components/Paypal/paypal-button.js\");\n/* harmony import */ var _components_Sponsors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Sponsors */ \"./components/Sponsors/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/elbgi/Desktop/bombers/frontend/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home(props) {\n  var articles = props.articles,\n      categories = props.categories,\n      homepage = props.homepage,\n      games = props.games,\n      sponsors = props.sponsors,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props, [\"articles\", \"categories\", \"homepage\", \"games\", \"sponsors\"]);\n\n  console.log({\n    props: props\n  });\n  var buttons = [{\n    display: \"Shop\",\n    link: \"/shop\"\n  }, {\n    display: \"Contact\",\n    link: \"/contact\"\n  }];\n  return __jsx(_common_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    categories: categories,\n    seo: homepage.seo,\n    bg: \"brand.light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(_common_Seo__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    seo: homepage.seo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }), __jsx(_common_Hero__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    text: \"St. Louis Bombers Rugby Club\",\n    image: \"images/nationals17.jpg\",\n    buttons: buttons,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"SimpleGrid\"], {\n    m: \"0\",\n    p: \"2\",\n    bg: \"brand.light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Games__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    games: games || [],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    py: \"8\",\n    h: \"auto\",\n    templateRows: \"repeat(3, 1fr)\",\n    templateColumns: \"repeat(5. 1fr)\",\n    gap: 16,\n    mx: \"8px\",\n    mt: \"-50px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n    colStart: [2, 2, 2, 3, 2],\n    rowSpan: [1, null, 2],\n    colSpan: [5, 5, 3, 3, 3],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n    as: \"h3\",\n    size: \"2xl\",\n    fontFamily: \"Big Shoulders Display\",\n    fontWeight: \"700\",\n    textTransform: \"uppercase\",\n    mb: \"8\",\n    textDecoration: \"underline\",\n    textUnderlineOffset: \"10px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, \"News\"), __jsx(_components_Articles_articles__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    articles: articles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJhcnRpY2xlcyIsImNhdGVnb3JpZXMiLCJob21lcGFnZSIsImdhbWVzIiwic3BvbnNvcnMiLCJyZXN0IiwiY29uc29sZSIsImxvZyIsImJ1dHRvbnMiLCJkaXNwbGF5IiwibGluayIsInNlbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RCLE1BQVFDLFFBQVIsR0FBcUVELEtBQXJFLENBQVFDLFFBQVI7QUFBQSxNQUFrQkMsVUFBbEIsR0FBcUVGLEtBQXJFLENBQWtCRSxVQUFsQjtBQUFBLE1BQThCQyxRQUE5QixHQUFxRUgsS0FBckUsQ0FBOEJHLFFBQTlCO0FBQUEsTUFBd0NDLEtBQXhDLEdBQXFFSixLQUFyRSxDQUF3Q0ksS0FBeEM7QUFBQSxNQUErQ0MsUUFBL0MsR0FBcUVMLEtBQXJFLENBQStDSyxRQUEvQztBQUFBLE1BQTREQyxJQUE1RCxzR0FBcUVOLEtBQXJFOztBQUNBTyxTQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFUixTQUFLLEVBQUxBO0FBQUYsR0FBWjtBQUVBLE1BQU1TLE9BQU8sR0FBRyxDQUNkO0FBQ0VDLFdBQU8sRUFBRSxNQURYO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBRGMsRUFLZDtBQUNFRCxXQUFPLEVBQUUsU0FEWDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUxjLENBQWhCO0FBV0EsU0FDRSxNQUFDLHNEQUFEO0FBQVEsY0FBVSxFQUFFVCxVQUFwQjtBQUFnQyxPQUFHLEVBQUVDLFFBQVEsQ0FBQ1MsR0FBOUM7QUFBbUQsTUFBRSxFQUFDLGFBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUssT0FBRyxFQUFFVCxRQUFRLENBQUNTLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsb0RBQUQ7QUFDRSxRQUFJLEVBQUMsOEJBRFA7QUFFRSxTQUFLLEVBQUMsd0JBRlI7QUFHRSxXQUFPLEVBQUVILE9BSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBT0UsTUFBQyw0REFBRDtBQUFZLEtBQUMsRUFBQyxHQUFkO0FBQWtCLEtBQUMsRUFBQyxHQUFwQjtBQUF3QixNQUFFLEVBQUMsYUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBTyxTQUFLLEVBQUVMLEtBQUssSUFBSSxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHNEQUFEO0FBQ0UsTUFBRSxFQUFDLEdBREw7QUFFRSxLQUFDLEVBQUMsTUFGSjtBQUdFLGdCQUFZLEVBQUMsZ0JBSGY7QUFJRSxtQkFBZSxFQUFDLGdCQUpsQjtBQUtFLE9BQUcsRUFBRSxFQUxQO0FBTUUsTUFBRSxFQUFDLEtBTkw7QUFPRSxNQUFFLEVBQUMsT0FQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UsTUFBQywwREFBRDtBQUNFLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBRFo7QUFFRSxXQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsQ0FGWDtBQUdFLFdBQU8sRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsd0RBQUQ7QUFDRSxNQUFFLEVBQUMsSUFETDtBQUVFLFFBQUksRUFBQyxLQUZQO0FBR0UsY0FBVSxFQUFDLHVCQUhiO0FBSUUsY0FBVSxFQUFDLEtBSmI7QUFLRSxpQkFBYSxFQUFDLFdBTGhCO0FBTUUsTUFBRSxFQUFDLEdBTkw7QUFPRSxrQkFBYyxFQUFDLFdBUGpCO0FBUUUsdUJBQW1CLEVBQUMsTUFSdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLEVBaUJFLE1BQUMscUVBQUQ7QUFBVSxZQUFRLEVBQUVILFFBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsQ0FURixDQUZGLENBUEYsQ0FERjtBQTBERCxDQXpFRDs7S0FBTUYsSTs7QUE2R1NBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaW1wbGVHcmlkLCBHcmlkLCBHcmlkSXRlbSB9IGZyb20gXCJAY2hha3JhLXVpL2xheW91dFwiO1xuaW1wb3J0IHtcbiAgSGVhZGluZyxcbiAgVGFiLFxuICBUYWJMaXN0LFxuICBUYWJQYW5lbCxcbiAgVGFiUGFuZWxzLFxuICBUYWJzLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlQnJlYWtwb2ludFZhbHVlIH0gZnJvbSBcIkBjaGFrcmEtdWkvbWVkaWEtcXVlcnlcIjtcbmltcG9ydCB7IGdyb3VwQnkgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vY29tbW9uL0hlcm9cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbW1vbi9MYXlvdXRcIjtcbmltcG9ydCBTZW8gZnJvbSBcIi4uL2NvbW1vbi9TZW9cIjtcbmltcG9ydCBBcnRpY2xlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9BcnRpY2xlcy9hcnRpY2xlc1wiO1xuaW1wb3J0IEdhbWVzIGZyb20gXCIuLi9jb21wb25lbnRzL0dhbWVzXCI7XG5pbXBvcnQgUGF5cGFsQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL1BheXBhbC9wYXlwYWwtYnV0dG9uXCI7XG5pbXBvcnQgU3BvbnNvcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3BvbnNvcnNcIjtcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcblxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGFydGljbGVzLCBjYXRlZ29yaWVzLCBob21lcGFnZSwgZ2FtZXMsIHNwb25zb3JzLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc29sZS5sb2coeyBwcm9wcyB9KTtcblxuICBjb25zdCBidXR0b25zID0gW1xuICAgIHtcbiAgICAgIGRpc3BsYXk6IFwiU2hvcFwiLFxuICAgICAgbGluazogXCIvc2hvcFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZGlzcGxheTogXCJDb250YWN0XCIsXG4gICAgICBsaW5rOiBcIi9jb250YWN0XCIsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gc2VvPXtob21lcGFnZS5zZW99IGJnPVwiYnJhbmQubGlnaHRcIj5cbiAgICAgIDxTZW8gc2VvPXtob21lcGFnZS5zZW99IC8+XG4gICAgICA8SGVyb1xuICAgICAgICB0ZXh0PVwiU3QuIExvdWlzIEJvbWJlcnMgUnVnYnkgQ2x1YlwiXG4gICAgICAgIGltYWdlPVwiaW1hZ2VzL25hdGlvbmFsczE3LmpwZ1wiXG4gICAgICAgIGJ1dHRvbnM9e2J1dHRvbnN9XG4gICAgICAvPlxuICAgICAgPFNpbXBsZUdyaWQgbT1cIjBcIiBwPVwiMlwiIGJnPVwiYnJhbmQubGlnaHRcIj5cbiAgICAgICAgPEdhbWVzIGdhbWVzPXtnYW1lcyB8fCBbXX0gLz5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBweT1cIjhcIlxuICAgICAgICAgIGg9XCJhdXRvXCJcbiAgICAgICAgICB0ZW1wbGF0ZVJvd3M9XCJyZXBlYXQoMywgMWZyKVwiXG4gICAgICAgICAgdGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KDUuIDFmcilcIlxuICAgICAgICAgIGdhcD17MTZ9XG4gICAgICAgICAgbXg9XCI4cHhcIlxuICAgICAgICAgIG10PVwiLTUwcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWRJdGVtXG4gICAgICAgICAgICBjb2xTdGFydD17WzIsIDIsIDIsIDMsIDJdfVxuICAgICAgICAgICAgcm93U3Bhbj17WzEsIG51bGwsIDJdfVxuICAgICAgICAgICAgY29sU3Bhbj17WzUsIDUsIDMsIDMsIDNdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICAgIGFzPVwiaDNcIlxuICAgICAgICAgICAgICBzaXplPVwiMnhsXCJcbiAgICAgICAgICAgICAgZm9udEZhbWlseT1cIkJpZyBTaG91bGRlcnMgRGlzcGxheVwiXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI3MDBcIlxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCJcbiAgICAgICAgICAgICAgbWI9XCI4XCJcbiAgICAgICAgICAgICAgdGV4dERlY29yYXRpb249XCJ1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0PVwiMTBweFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5ld3NcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxBcnRpY2xlcyBhcnRpY2xlcz17YXJ0aWNsZXN9PjwvQXJ0aWNsZXM+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgIHsvKiA8R3JpZEl0ZW0gcm93U3Bhbj17MX0gY29sU3Bhbj17WzIsIDUsIDIsIDIsIDJdfT5cbiAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICAgIGFzPVwiaDNcIlxuICAgICAgICAgICAgICBzaXplPVwiMnhsXCJcbiAgICAgICAgICAgICAgZm9udEZhbWlseT1cIkJpZyBTaG91bGRlcnMgRGlzcGxheVwiXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI3MDBcIlxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCJcbiAgICAgICAgICAgICAgbWI9XCI4XCJcbiAgICAgICAgICAgICAgdGV4dERlY29yYXRpb249XCJ1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0PVwiMTBweFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE91ciBTcG9uc29yc1xuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPFNwb25zb3JzIHNwb25zb3JzPXtzcG9uc29yc30gLz5cbiAgICAgICAgICA8L0dyaWRJdGVtPiAqL31cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9TaW1wbGVHcmlkPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAvLyBSdW4gQVBJIGNhbGxzIGluIHBhcmFsbGVsXG4gIGNvbnN0IFtcbiAgICBhcnRpY2xlcyxcbiAgICBjYXRlZ29yaWVzLFxuICAgIGhvbWVwYWdlLFxuICAgIGdhbWVzLFxuICAgIHBsYXllcnMsXG4gICAgY29hY2hlcyxcbiAgICBzcG9uc29ycyxcbiAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBmZXRjaEFQSShcIi9hcnRpY2xlcz9zdGF0dXM9cHVibGlzaGVkXCIpLFxuICAgIGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIiksXG4gICAgZmV0Y2hBUEkoXCIvaG9tZXBhZ2VcIiksXG4gICAgZmV0Y2hBUEkoXCIvZ2FtZXNcIiksXG4gICAgZmV0Y2hBUEkoXCIvcGxheWVyc1wiKSxcbiAgICBmZXRjaEFQSShcIi9jb2FjaGVzXCIpLFxuICAgIGZldGNoQVBJKFwiL3Nwb25zb3JzXCIpLFxuICBdKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhcnRpY2xlcyxcbiAgICAgIGNhdGVnb3JpZXMsXG4gICAgICBob21lcGFnZSxcbiAgICAgIGdhbWVzLFxuICAgICAgcGxheWVycyxcbiAgICAgIGNvYWNoZXMsXG4gICAgICBzcG9uc29ycyxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
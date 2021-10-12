webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/media-query */ \"./node_modules/@chakra-ui/media-query/dist/esm/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _common_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Hero */ \"./common/Hero.jsx\");\n/* harmony import */ var _common_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Layout */ \"./common/Layout.jsx\");\n/* harmony import */ var _common_Seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/Seo */ \"./common/Seo.jsx\");\n/* harmony import */ var _components_Articles_articles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Articles/articles */ \"./components/Articles/articles.js\");\n/* harmony import */ var _components_Games__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Games */ \"./components/Games/index.js\");\n/* harmony import */ var _components_Paypal_paypal_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Paypal/paypal-button */ \"./components/Paypal/paypal-button.js\");\n/* harmony import */ var _components_Sponsors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Sponsors */ \"./components/Sponsors/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/elbgi/Desktop/bombers/frontend/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home(props) {\n  var articles = props.articles,\n      categories = props.categories,\n      homepage = props.homepage,\n      games = props.games,\n      sponsors = props.sponsors,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props, [\"articles\", \"categories\", \"homepage\", \"games\", \"sponsors\"]);\n\n  console.log({\n    props: props\n  });\n  var buttons = [{\n    display: \"Shop\",\n    link: \"/shop\"\n  }, {\n    display: \"Contact\",\n    link: \"/contact\"\n  }];\n  return __jsx(_common_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    categories: categories,\n    seo: homepage.seo,\n    bg: \"brand.light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(_common_Seo__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    seo: homepage.seo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }), __jsx(_common_Hero__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    text: \"St. Louis Bombers Rugby Club\",\n    image: \"images/nationals17.jpg\",\n    buttons: buttons,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"SimpleGrid\"], {\n    m: \"0\",\n    p: \"2\",\n    bg: \"brand.light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Games__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    games: games || [],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"] // py=\"8\"\n  , {\n    h: \"auto\",\n    templateRows: \"repeat(3, 1fr)\",\n    templateColumns: \"repeat(12, 1fr)\",\n    gap: 16,\n    mx: \"8px\",\n    mt: \"-50px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n    colStart: [2, 2, 2, 3, 2] // colEnd={[4, 4, 4, 4, 4]}\n    ,\n    rowSpan: [1, null, 2],\n    colSpan: [10, 10, 10, 10, 10],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n    as: \"h3\",\n    size: \"2xl\",\n    fontFamily: \"Big Shoulders Display\",\n    fontWeight: \"700\",\n    textTransform: \"uppercase\",\n    mb: \"8\",\n    textDecoration: \"underline\",\n    textUnderlineOffset: \"10px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, \"News\"), __jsx(_components_Articles_articles__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    articles: articles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJhcnRpY2xlcyIsImNhdGVnb3JpZXMiLCJob21lcGFnZSIsImdhbWVzIiwic3BvbnNvcnMiLCJyZXN0IiwiY29uc29sZSIsImxvZyIsImJ1dHRvbnMiLCJkaXNwbGF5IiwibGluayIsInNlbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RCLE1BQVFDLFFBQVIsR0FBcUVELEtBQXJFLENBQVFDLFFBQVI7QUFBQSxNQUFrQkMsVUFBbEIsR0FBcUVGLEtBQXJFLENBQWtCRSxVQUFsQjtBQUFBLE1BQThCQyxRQUE5QixHQUFxRUgsS0FBckUsQ0FBOEJHLFFBQTlCO0FBQUEsTUFBd0NDLEtBQXhDLEdBQXFFSixLQUFyRSxDQUF3Q0ksS0FBeEM7QUFBQSxNQUErQ0MsUUFBL0MsR0FBcUVMLEtBQXJFLENBQStDSyxRQUEvQztBQUFBLE1BQTREQyxJQUE1RCxzR0FBcUVOLEtBQXJFOztBQUNBTyxTQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFUixTQUFLLEVBQUxBO0FBQUYsR0FBWjtBQUVBLE1BQU1TLE9BQU8sR0FBRyxDQUNkO0FBQ0VDLFdBQU8sRUFBRSxNQURYO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBRGMsRUFLZDtBQUNFRCxXQUFPLEVBQUUsU0FEWDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUxjLENBQWhCO0FBV0EsU0FDRSxNQUFDLHNEQUFEO0FBQVEsY0FBVSxFQUFFVCxVQUFwQjtBQUFnQyxPQUFHLEVBQUVDLFFBQVEsQ0FBQ1MsR0FBOUM7QUFBbUQsTUFBRSxFQUFDLGFBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUssT0FBRyxFQUFFVCxRQUFRLENBQUNTLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsb0RBQUQ7QUFDRSxRQUFJLEVBQUMsOEJBRFA7QUFFRSxTQUFLLEVBQUMsd0JBRlI7QUFHRSxXQUFPLEVBQUVILE9BSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBT0UsTUFBQyw0REFBRDtBQUFZLEtBQUMsRUFBQyxHQUFkO0FBQWtCLEtBQUMsRUFBQyxHQUFwQjtBQUF3QixNQUFFLEVBQUMsYUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBTyxTQUFLLEVBQUVMLEtBQUssSUFBSSxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHNEQUFELENBQ0U7QUFERjtBQUVFLEtBQUMsRUFBQyxNQUZKO0FBR0UsZ0JBQVksRUFBQyxnQkFIZjtBQUlFLG1CQUFlLEVBQUMsaUJBSmxCO0FBS0UsT0FBRyxFQUFFLEVBTFA7QUFNRSxNQUFFLEVBQUMsS0FOTDtBQU9FLE1BQUUsRUFBQyxPQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRSxNQUFDLDBEQUFEO0FBQ0UsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FEWixDQUVFO0FBRkY7QUFHRSxXQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsQ0FIWDtBQUlFLFdBQU8sRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsQ0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyx3REFBRDtBQUNFLE1BQUUsRUFBQyxJQURMO0FBRUUsUUFBSSxFQUFDLEtBRlA7QUFHRSxjQUFVLEVBQUMsdUJBSGI7QUFJRSxjQUFVLEVBQUMsS0FKYjtBQUtFLGlCQUFhLEVBQUMsV0FMaEI7QUFNRSxNQUFFLEVBQUMsR0FOTDtBQU9FLGtCQUFjLEVBQUMsV0FQakI7QUFRRSx1QkFBbUIsRUFBQyxNQVJ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsRUFrQkUsTUFBQyxxRUFBRDtBQUFVLFlBQVEsRUFBRUgsUUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCRixDQVRGLENBRkYsQ0FQRixDQURGO0FBMkRELENBMUVEOztLQUFNRixJOztBQThHU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbXBsZUdyaWQsIEdyaWQsIEdyaWRJdGVtIH0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XG5pbXBvcnQge1xuICBIZWFkaW5nLFxuICBUYWIsXG4gIFRhYkxpc3QsXG4gIFRhYlBhbmVsLFxuICBUYWJQYW5lbHMsXG4gIFRhYnMsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VCcmVha3BvaW50VmFsdWUgfSBmcm9tIFwiQGNoYWtyYS11aS9tZWRpYS1xdWVyeVwiO1xuaW1wb3J0IHsgZ3JvdXBCeSB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZXJvIGZyb20gXCIuLi9jb21tb24vSGVyb1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tbW9uL0xheW91dFwiO1xuaW1wb3J0IFNlbyBmcm9tIFwiLi4vY29tbW9uL1Nlb1wiO1xuaW1wb3J0IEFydGljbGVzIGZyb20gXCIuLi9jb21wb25lbnRzL0FydGljbGVzL2FydGljbGVzXCI7XG5pbXBvcnQgR2FtZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2FtZXNcIjtcbmltcG9ydCBQYXlwYWxCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGF5cGFsL3BheXBhbC1idXR0b25cIjtcbmltcG9ydCBTcG9uc29ycyBmcm9tIFwiLi4vY29tcG9uZW50cy9TcG9uc29yc1wiO1xuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYXJ0aWNsZXMsIGNhdGVnb3JpZXMsIGhvbWVwYWdlLCBnYW1lcywgc3BvbnNvcnMsIC4uLnJlc3QgfSA9IHByb3BzO1xuICBjb25zb2xlLmxvZyh7IHByb3BzIH0pO1xuXG4gIGNvbnN0IGJ1dHRvbnMgPSBbXG4gICAge1xuICAgICAgZGlzcGxheTogXCJTaG9wXCIsXG4gICAgICBsaW5rOiBcIi9zaG9wXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkaXNwbGF5OiBcIkNvbnRhY3RcIixcbiAgICAgIGxpbms6IFwiL2NvbnRhY3RcIixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSBzZW89e2hvbWVwYWdlLnNlb30gYmc9XCJicmFuZC5saWdodFwiPlxuICAgICAgPFNlbyBzZW89e2hvbWVwYWdlLnNlb30gLz5cbiAgICAgIDxIZXJvXG4gICAgICAgIHRleHQ9XCJTdC4gTG91aXMgQm9tYmVycyBSdWdieSBDbHViXCJcbiAgICAgICAgaW1hZ2U9XCJpbWFnZXMvbmF0aW9uYWxzMTcuanBnXCJcbiAgICAgICAgYnV0dG9ucz17YnV0dG9uc31cbiAgICAgIC8+XG4gICAgICA8U2ltcGxlR3JpZCBtPVwiMFwiIHA9XCIyXCIgYmc9XCJicmFuZC5saWdodFwiPlxuICAgICAgICA8R2FtZXMgZ2FtZXM9e2dhbWVzIHx8IFtdfSAvPlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIC8vIHB5PVwiOFwiXG4gICAgICAgICAgaD1cImF1dG9cIlxuICAgICAgICAgIHRlbXBsYXRlUm93cz1cInJlcGVhdCgzLCAxZnIpXCJcbiAgICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoMTIsIDFmcilcIlxuICAgICAgICAgIGdhcD17MTZ9XG4gICAgICAgICAgbXg9XCI4cHhcIlxuICAgICAgICAgIG10PVwiLTUwcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWRJdGVtXG4gICAgICAgICAgICBjb2xTdGFydD17WzIsIDIsIDIsIDMsIDJdfVxuICAgICAgICAgICAgLy8gY29sRW5kPXtbNCwgNCwgNCwgNCwgNF19XG4gICAgICAgICAgICByb3dTcGFuPXtbMSwgbnVsbCwgMl19XG4gICAgICAgICAgICBjb2xTcGFuPXtbMTAsIDEwLCAxMCwgMTAsIDEwXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgICBhcz1cImgzXCJcbiAgICAgICAgICAgICAgc2l6ZT1cIjJ4bFwiXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJCaWcgU2hvdWxkZXJzIERpc3BsYXlcIlxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiXG4gICAgICAgICAgICAgIG1iPVwiOFwiXG4gICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uPVwidW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldD1cIjEwcHhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOZXdzXG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8QXJ0aWNsZXMgYXJ0aWNsZXM9e2FydGljbGVzfT48L0FydGljbGVzPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICB7LyogPEdyaWRJdGVtIHJvd1NwYW49ezF9IGNvbFNwYW49e1syLCA1LCAyLCAyLCAyXX0+XG4gICAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgICBhcz1cImgzXCJcbiAgICAgICAgICAgICAgc2l6ZT1cIjJ4bFwiXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJCaWcgU2hvdWxkZXJzIERpc3BsYXlcIlxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiXG4gICAgICAgICAgICAgIG1iPVwiOFwiXG4gICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uPVwidW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldD1cIjEwcHhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBPdXIgU3BvbnNvcnNcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxTcG9uc29ycyBzcG9uc29ycz17c3BvbnNvcnN9IC8+XG4gICAgICAgICAgPC9HcmlkSXRlbT4gKi99XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gUnVuIEFQSSBjYWxscyBpbiBwYXJhbGxlbFxuICBjb25zdCBbXG4gICAgYXJ0aWNsZXMsXG4gICAgY2F0ZWdvcmllcyxcbiAgICBob21lcGFnZSxcbiAgICBnYW1lcyxcbiAgICBwbGF5ZXJzLFxuICAgIGNvYWNoZXMsXG4gICAgc3BvbnNvcnMsXG4gIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZmV0Y2hBUEkoXCIvYXJ0aWNsZXM/c3RhdHVzPXB1Ymxpc2hlZFwiKSxcbiAgICBmZXRjaEFQSShcIi9jYXRlZ29yaWVzXCIpLFxuICAgIGZldGNoQVBJKFwiL2hvbWVwYWdlXCIpLFxuICAgIGZldGNoQVBJKFwiL2dhbWVzXCIpLFxuICAgIGZldGNoQVBJKFwiL3BsYXllcnNcIiksXG4gICAgZmV0Y2hBUEkoXCIvY29hY2hlc1wiKSxcbiAgICBmZXRjaEFQSShcIi9zcG9uc29yc1wiKSxcbiAgXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXJ0aWNsZXMsXG4gICAgICBjYXRlZ29yaWVzLFxuICAgICAgaG9tZXBhZ2UsXG4gICAgICBnYW1lcyxcbiAgICAgIHBsYXllcnMsXG4gICAgICBjb2FjaGVzLFxuICAgICAgc3BvbnNvcnMsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
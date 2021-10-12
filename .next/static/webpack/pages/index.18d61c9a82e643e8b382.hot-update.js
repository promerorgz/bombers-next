webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _common_Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Hero */ \"./common/Hero.jsx\");\n/* harmony import */ var _common_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Layout */ \"./common/Layout.jsx\");\n/* harmony import */ var _common_Seo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Seo */ \"./common/Seo.jsx\");\n/* harmony import */ var _components_Articles_articles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Articles/articles */ \"./components/Articles/articles.js\");\n/* harmony import */ var _components_Games__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Games */ \"./components/Games/index.js\");\n/* harmony import */ var _components_Paypal_paypal_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Paypal/paypal-button */ \"./components/Paypal/paypal-button.js\");\n/* harmony import */ var _components_Sponsors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Sponsors */ \"./components/Sponsors/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/elbgi/Desktop/bombers/frontend/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home(props) {\n  _s();\n\n  var articles = props.articles,\n      categories = props.categories,\n      homepage = props.homepage,\n      games = props.games,\n      sponsors = props.sponsors,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props, [\"articles\", \"categories\", \"homepage\", \"games\", \"sponsors\"]);\n\n  console.log({\n    props: props\n  });\n  var buttons = [{\n    display: \"Shop\",\n    link: \"/shop\"\n  }, {\n    display: \"Contact\",\n    link: \"/contact\"\n  }];\n  var columns = useBreakpointValue({\n    base: 5,\n    xs: 3,\n    sm: 3,\n    md: 4,\n    lg: 4,\n    xl: 4\n  });\n  return __jsx(_common_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    categories: categories,\n    seo: homepage.seo,\n    bg: \"brand.light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(_common_Seo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    seo: homepage.seo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }), __jsx(_common_Hero__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    text: \"St. Louis Bombers Rugby Club\",\n    image: \"images/nationals17.jpg\",\n    buttons: buttons,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"SimpleGrid\"], {\n    m: \"0\",\n    p: \"2\",\n    bg: \"brand.light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Games__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    games: games || [],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    py: \"8\",\n    h: \"auto\",\n    templateRows: \"repeat(3, 1fr)\",\n    templateColumns: \"repeat(\".concat(columns, \" 1fr)\"),\n    gap: 16,\n    mx: \"8px\",\n    mt: \"-50px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n    colStart: [2, 1, 1, 2, 2],\n    rowSpan: [1, null, 2],\n    colSpan: [5, 5, 3, 3, 3],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n    as: \"h3\",\n    size: \"2xl\",\n    fontFamily: \"Big Shoulders Display\",\n    fontWeight: \"700\",\n    textTransform: \"uppercase\",\n    mb: \"8\",\n    textDecoration: \"underline\",\n    textUnderlineOffset: \"10px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, \"News\"), __jsx(_components_Articles_articles__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    articles: articles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_s(Home, \"0jhOsS7jDDNmZWHawV34AIyFGBM=\", true);\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJhcnRpY2xlcyIsImNhdGVnb3JpZXMiLCJob21lcGFnZSIsImdhbWVzIiwic3BvbnNvcnMiLCJyZXN0IiwiY29uc29sZSIsImxvZyIsImJ1dHRvbnMiLCJkaXNwbGF5IiwibGluayIsImNvbHVtbnMiLCJ1c2VCcmVha3BvaW50VmFsdWUiLCJiYXNlIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsInNlbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN0QixNQUFRQyxRQUFSLEdBQXFFRCxLQUFyRSxDQUFRQyxRQUFSO0FBQUEsTUFBa0JDLFVBQWxCLEdBQXFFRixLQUFyRSxDQUFrQkUsVUFBbEI7QUFBQSxNQUE4QkMsUUFBOUIsR0FBcUVILEtBQXJFLENBQThCRyxRQUE5QjtBQUFBLE1BQXdDQyxLQUF4QyxHQUFxRUosS0FBckUsQ0FBd0NJLEtBQXhDO0FBQUEsTUFBK0NDLFFBQS9DLEdBQXFFTCxLQUFyRSxDQUErQ0ssUUFBL0M7QUFBQSxNQUE0REMsSUFBNUQsc0dBQXFFTixLQUFyRTs7QUFDQU8sU0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRVIsU0FBSyxFQUFMQTtBQUFGLEdBQVo7QUFFQSxNQUFNUyxPQUFPLEdBQUcsQ0FDZDtBQUNFQyxXQUFPLEVBQUUsTUFEWDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQURjLEVBS2Q7QUFDRUQsV0FBTyxFQUFFLFNBRFg7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FMYyxDQUFoQjtBQVdBLE1BQU1DLE9BQU8sR0FBR0Msa0JBQWtCLENBQUM7QUFDakNDLFFBQUksRUFBRSxDQUQyQjtBQUVqQ0MsTUFBRSxFQUFFLENBRjZCO0FBR2pDQyxNQUFFLEVBQUUsQ0FINkI7QUFJakNDLE1BQUUsRUFBRSxDQUo2QjtBQUtqQ0MsTUFBRSxFQUFFLENBTDZCO0FBTWpDQyxNQUFFLEVBQUU7QUFONkIsR0FBRCxDQUFsQztBQVFBLFNBQ0UsTUFBQyxzREFBRDtBQUFRLGNBQVUsRUFBRWpCLFVBQXBCO0FBQWdDLE9BQUcsRUFBRUMsUUFBUSxDQUFDaUIsR0FBOUM7QUFBbUQsTUFBRSxFQUFDLGFBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUssT0FBRyxFQUFFakIsUUFBUSxDQUFDaUIsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxvREFBRDtBQUNFLFFBQUksRUFBQyw4QkFEUDtBQUVFLFNBQUssRUFBQyx3QkFGUjtBQUdFLFdBQU8sRUFBRVgsT0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFPRSxNQUFDLDREQUFEO0FBQVksS0FBQyxFQUFDLEdBQWQ7QUFBa0IsS0FBQyxFQUFDLEdBQXBCO0FBQXdCLE1BQUUsRUFBQyxhQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFPLFNBQUssRUFBRUwsS0FBSyxJQUFJLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsc0RBQUQ7QUFDRSxNQUFFLEVBQUMsR0FETDtBQUVFLEtBQUMsRUFBQyxNQUZKO0FBR0UsZ0JBQVksRUFBQyxnQkFIZjtBQUlFLG1CQUFlLG1CQUFZUSxPQUFaLFVBSmpCO0FBS0UsT0FBRyxFQUFFLEVBTFA7QUFNRSxNQUFFLEVBQUMsS0FOTDtBQU9FLE1BQUUsRUFBQyxPQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRSxNQUFDLDBEQUFEO0FBQ0UsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FEWjtBQUVFLFdBQU8sRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixDQUZYO0FBR0UsV0FBTyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyx3REFBRDtBQUNFLE1BQUUsRUFBQyxJQURMO0FBRUUsUUFBSSxFQUFDLEtBRlA7QUFHRSxjQUFVLEVBQUMsdUJBSGI7QUFJRSxjQUFVLEVBQUMsS0FKYjtBQUtFLGlCQUFhLEVBQUMsV0FMaEI7QUFNRSxNQUFFLEVBQUMsR0FOTDtBQU9FLGtCQUFjLEVBQUMsV0FQakI7QUFRRSx1QkFBbUIsRUFBQyxNQVJ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsRUFpQkUsTUFBQyxxRUFBRDtBQUFVLFlBQVEsRUFBRVgsUUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixDQVRGLENBRkYsQ0FQRixDQURGO0FBMERELENBakZEOztHQUFNRixJOztLQUFBQSxJOztBQXFIU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbXBsZUdyaWQsIEdyaWQsIEdyaWRJdGVtIH0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XG5pbXBvcnQge1xuICBIZWFkaW5nLFxuICBUYWIsXG4gIFRhYkxpc3QsXG4gIFRhYlBhbmVsLFxuICBUYWJQYW5lbHMsXG4gIFRhYnMsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBncm91cEJ5IH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlcm8gZnJvbSBcIi4uL2NvbW1vbi9IZXJvXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21tb24vTGF5b3V0XCI7XG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21tb24vU2VvXCI7XG5pbXBvcnQgQXJ0aWNsZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZXMvYXJ0aWNsZXNcIjtcbmltcG9ydCBHYW1lcyBmcm9tIFwiLi4vY29tcG9uZW50cy9HYW1lc1wiO1xuaW1wb3J0IFBheXBhbEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9QYXlwYWwvcGF5cGFsLWJ1dHRvblwiO1xuaW1wb3J0IFNwb25zb3JzIGZyb20gXCIuLi9jb21wb25lbnRzL1Nwb25zb3JzXCI7XG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBhcnRpY2xlcywgY2F0ZWdvcmllcywgaG9tZXBhZ2UsIGdhbWVzLCBzcG9uc29ycywgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnNvbGUubG9nKHsgcHJvcHMgfSk7XG5cbiAgY29uc3QgYnV0dG9ucyA9IFtcbiAgICB7XG4gICAgICBkaXNwbGF5OiBcIlNob3BcIixcbiAgICAgIGxpbms6IFwiL3Nob3BcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGRpc3BsYXk6IFwiQ29udGFjdFwiLFxuICAgICAgbGluazogXCIvY29udGFjdFwiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgY29sdW1ucyA9IHVzZUJyZWFrcG9pbnRWYWx1ZSh7XG4gICAgYmFzZTogNSxcbiAgICB4czogMyxcbiAgICBzbTogMyxcbiAgICBtZDogNCxcbiAgICBsZzogNCxcbiAgICB4bDogNCxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPExheW91dCBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSBzZW89e2hvbWVwYWdlLnNlb30gYmc9XCJicmFuZC5saWdodFwiPlxuICAgICAgPFNlbyBzZW89e2hvbWVwYWdlLnNlb30gLz5cbiAgICAgIDxIZXJvXG4gICAgICAgIHRleHQ9XCJTdC4gTG91aXMgQm9tYmVycyBSdWdieSBDbHViXCJcbiAgICAgICAgaW1hZ2U9XCJpbWFnZXMvbmF0aW9uYWxzMTcuanBnXCJcbiAgICAgICAgYnV0dG9ucz17YnV0dG9uc31cbiAgICAgIC8+XG4gICAgICA8U2ltcGxlR3JpZCBtPVwiMFwiIHA9XCIyXCIgYmc9XCJicmFuZC5saWdodFwiPlxuICAgICAgICA8R2FtZXMgZ2FtZXM9e2dhbWVzIHx8IFtdfSAvPlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIHB5PVwiOFwiXG4gICAgICAgICAgaD1cImF1dG9cIlxuICAgICAgICAgIHRlbXBsYXRlUm93cz1cInJlcGVhdCgzLCAxZnIpXCJcbiAgICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9e2ByZXBlYXQoJHtjb2x1bW5zfSAxZnIpYH1cbiAgICAgICAgICBnYXA9ezE2fVxuICAgICAgICAgIG14PVwiOHB4XCJcbiAgICAgICAgICBtdD1cIi01MHB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgY29sU3RhcnQ9e1syLCAxLCAxLCAyLCAyXX1cbiAgICAgICAgICAgIHJvd1NwYW49e1sxLCBudWxsLCAyXX1cbiAgICAgICAgICAgIGNvbFNwYW49e1s1LCA1LCAzLCAzLCAzXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgICBhcz1cImgzXCJcbiAgICAgICAgICAgICAgc2l6ZT1cIjJ4bFwiXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJCaWcgU2hvdWxkZXJzIERpc3BsYXlcIlxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiXG4gICAgICAgICAgICAgIG1iPVwiOFwiXG4gICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uPVwidW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldD1cIjEwcHhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOZXdzXG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8QXJ0aWNsZXMgYXJ0aWNsZXM9e2FydGljbGVzfT48L0FydGljbGVzPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICB7LyogPEdyaWRJdGVtIHJvd1NwYW49ezF9IGNvbFNwYW49e1syLCA1LCAyLCAyLCAyXX0+XG4gICAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgICBhcz1cImgzXCJcbiAgICAgICAgICAgICAgc2l6ZT1cIjJ4bFwiXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJCaWcgU2hvdWxkZXJzIERpc3BsYXlcIlxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiXG4gICAgICAgICAgICAgIG1iPVwiOFwiXG4gICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uPVwidW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldD1cIjEwcHhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBPdXIgU3BvbnNvcnNcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxTcG9uc29ycyBzcG9uc29ycz17c3BvbnNvcnN9IC8+XG4gICAgICAgICAgPC9HcmlkSXRlbT4gKi99XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gUnVuIEFQSSBjYWxscyBpbiBwYXJhbGxlbFxuICBjb25zdCBbXG4gICAgYXJ0aWNsZXMsXG4gICAgY2F0ZWdvcmllcyxcbiAgICBob21lcGFnZSxcbiAgICBnYW1lcyxcbiAgICBwbGF5ZXJzLFxuICAgIGNvYWNoZXMsXG4gICAgc3BvbnNvcnMsXG4gIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZmV0Y2hBUEkoXCIvYXJ0aWNsZXM/c3RhdHVzPXB1Ymxpc2hlZFwiKSxcbiAgICBmZXRjaEFQSShcIi9jYXRlZ29yaWVzXCIpLFxuICAgIGZldGNoQVBJKFwiL2hvbWVwYWdlXCIpLFxuICAgIGZldGNoQVBJKFwiL2dhbWVzXCIpLFxuICAgIGZldGNoQVBJKFwiL3BsYXllcnNcIiksXG4gICAgZmV0Y2hBUEkoXCIvY29hY2hlc1wiKSxcbiAgICBmZXRjaEFQSShcIi9zcG9uc29yc1wiKSxcbiAgXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXJ0aWNsZXMsXG4gICAgICBjYXRlZ29yaWVzLFxuICAgICAgaG9tZXBhZ2UsXG4gICAgICBnYW1lcyxcbiAgICAgIHBsYXllcnMsXG4gICAgICBjb2FjaGVzLFxuICAgICAgc3BvbnNvcnMsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
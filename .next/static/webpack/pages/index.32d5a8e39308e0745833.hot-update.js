webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/media-query */ \"./node_modules/@chakra-ui/media-query/dist/esm/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _common_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Hero */ \"./common/Hero.jsx\");\n/* harmony import */ var _common_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Layout */ \"./common/Layout.jsx\");\n/* harmony import */ var _common_Seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/Seo */ \"./common/Seo.jsx\");\n/* harmony import */ var _components_Articles_articles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Articles/articles */ \"./components/Articles/articles.js\");\n/* harmony import */ var _components_Games__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Games */ \"./components/Games/index.js\");\n/* harmony import */ var _components_Paypal_paypal_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Paypal/paypal-button */ \"./components/Paypal/paypal-button.js\");\n/* harmony import */ var _components_Sponsors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Sponsors */ \"./components/Sponsors/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/elbgi/Desktop/bombers/frontend/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home(props) {\n  _s();\n\n  var articles = props.articles,\n      categories = props.categories,\n      homepage = props.homepage,\n      games = props.games,\n      sponsors = props.sponsors,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props, [\"articles\", \"categories\", \"homepage\", \"games\", \"sponsors\"]);\n\n  console.log({\n    props: props\n  });\n  var buttons = [{\n    display: \"Shop\",\n    link: \"/shop\"\n  }, {\n    display: \"Contact\",\n    link: \"/contact\"\n  }];\n  var dynamicRows = Object(_chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__[\"useBreakpointValue\"])({\n    base: 2,\n    sm: 3,\n    md: 3,\n    lg: 2,\n    xl: 1\n  });\n  var dynamicColumns = Object(_chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__[\"useBreakpointValue\"])({});\n  return __jsx(_common_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    categories: categories,\n    seo: homepage.seo,\n    bg: \"brand.light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, __jsx(_common_Seo__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    seo: homepage.seo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }), __jsx(_common_Hero__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    text: \"St. Louis Bombers Rugby Club\",\n    image: \"images/nationals17.jpg\",\n    buttons: buttons,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"SimpleGrid\"], {\n    m: \"0\",\n    p: \"2\",\n    bg: \"brand.light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Games__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    games: games || [],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    py: \"8\",\n    h: \"auto\",\n    templateRows: \"repeat(3, 1fr)\",\n    templateColumns: \"repeat(5, 1fr)\",\n    gap: 16,\n    mx: \"8px\",\n    mt: \"-50px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"] // colStart={[2, 2, 2, 3, 2]}\n  // colEnd={[4, 4, 4, 4, 4]}\n  , {\n    rowSpan: [1, null, 2],\n    colSpan: [5, 5, 3, 3, 3] // colSpan={[10, 10, 10, 10, 10]}\n    ,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n    as: \"h3\",\n    size: \"2xl\",\n    fontFamily: \"Big Shoulders Display\",\n    fontWeight: \"700\",\n    textTransform: \"uppercase\",\n    mb: \"8\",\n    textDecoration: \"underline\",\n    textUnderlineOffset: \"10px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, \"News\"), __jsx(_components_Articles_articles__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    articles: articles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }))), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"HStack\"], {\n    spacing: \"8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }\n  }, sponsors.map(function (sponsor) {\n    return __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 20\n      }\n    }, sponsor.name);\n  }))));\n};\n\n_s(Home, \"dPAWfBm3l6h1ATmjK3C4GZ5Yo4Q=\", false, function () {\n  return [_chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__[\"useBreakpointValue\"], _chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__[\"useBreakpointValue\"]];\n});\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJhcnRpY2xlcyIsImNhdGVnb3JpZXMiLCJob21lcGFnZSIsImdhbWVzIiwic3BvbnNvcnMiLCJyZXN0IiwiY29uc29sZSIsImxvZyIsImJ1dHRvbnMiLCJkaXNwbGF5IiwibGluayIsImR5bmFtaWNSb3dzIiwidXNlQnJlYWtwb2ludFZhbHVlIiwiYmFzZSIsInNtIiwibWQiLCJsZyIsInhsIiwiZHluYW1pY0NvbHVtbnMiLCJzZW8iLCJtYXAiLCJzcG9uc29yIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN0QixNQUFRQyxRQUFSLEdBQXFFRCxLQUFyRSxDQUFRQyxRQUFSO0FBQUEsTUFBa0JDLFVBQWxCLEdBQXFFRixLQUFyRSxDQUFrQkUsVUFBbEI7QUFBQSxNQUE4QkMsUUFBOUIsR0FBcUVILEtBQXJFLENBQThCRyxRQUE5QjtBQUFBLE1BQXdDQyxLQUF4QyxHQUFxRUosS0FBckUsQ0FBd0NJLEtBQXhDO0FBQUEsTUFBK0NDLFFBQS9DLEdBQXFFTCxLQUFyRSxDQUErQ0ssUUFBL0M7QUFBQSxNQUE0REMsSUFBNUQsc0dBQXFFTixLQUFyRTs7QUFDQU8sU0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRVIsU0FBSyxFQUFMQTtBQUFGLEdBQVo7QUFFQSxNQUFNUyxPQUFPLEdBQUcsQ0FDZDtBQUNFQyxXQUFPLEVBQUUsTUFEWDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQURjLEVBS2Q7QUFDRUQsV0FBTyxFQUFFLFNBRFg7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FMYyxDQUFoQjtBQVdBLE1BQU1DLFdB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IHsgU2ltcGxlR3JpZCwgR3JpZCwgR3JpZEl0ZW0sIEhTdGFjaywgQm94IH0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XG5pbXBvcnQge1xuICBIZWFkaW5nLFxuICBUYWIsXG4gIFRhYkxpc3QsXG4gIFRhYlBhbmVsLFxuICBUYWJQYW5lbHMsXG4gIFRhYnMsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VCcmVha3BvaW50VmFsdWUgfSBmcm9tIFwiQGNoYWtyYS11aS9tZWRpYS1xdWVyeVwiO1xuaW1wb3J0IHsgZ3JvdXBCeSB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZXJvIGZyb20gXCIuLi9jb21tb24vSGVyb1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tbW9uL0xheW91dFwiO1xuaW1wb3J0IFNlbyBmcm9tIFwiLi4vY29tbW9uL1Nlb1wiO1xuaW1wb3J0IEFydGljbGVzIGZyb20gXCIuLi9jb21wb25lbnRzL0FydGljbGVzL2FydGljbGVzXCI7XG5pbXBvcnQgR2FtZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2FtZXNcIjtcbmltcG9ydCBQYXlwYWxCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGF5cGFsL3BheXBhbC1idXR0b25cIjtcbmltcG9ydCBTcG9uc29ycyBmcm9tIFwiLi4vY29tcG9uZW50cy9TcG9uc29yc1wiO1xuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYXJ0aWNsZXMsIGNhdGVnb3JpZXMsIGhvbWVwYWdlLCBnYW1lcywgc3BvbnNvcnMsIC4uLnJlc3QgfSA9IHByb3BzO1xuICBjb25zb2xlLmxvZyh7IHByb3BzIH0pO1xuXG4gIGNvbnN0IGJ1dHRvbnMgPSBbXG4gICAge1xuICAgICAgZGlzcGxheTogXCJTaG9wXCIsXG4gICAgICBsaW5rOiBcIi9zaG9wXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkaXNwbGF5OiBcIkNvbnRhY3RcIixcbiAgICAgIGxpbms6IFwiL2NvbnRhY3RcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGR5bmFtaWNSb3dzID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcbiAgICBiYXNlOiAyLFxuICAgIHNtOiAzLFxuICAgIG1kOiAzLFxuICAgIGxnOiAyLFxuICAgIHhsOiAxLFxuICB9KTtcblxuICBjb25zdCBkeW5hbWljQ29sdW1ucyA9IHVzZUJyZWFrcG9pbnRWYWx1ZSh7fSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IHNlbz17aG9tZXBhZ2Uuc2VvfSBiZz1cImJyYW5kLmxpZ2h0XCI+XG4gICAgICA8U2VvIHNlbz17aG9tZXBhZ2Uuc2VvfSAvPlxuICAgICAgPEhlcm9cbiAgICAgICAgdGV4dD1cIlN0LiBMb3VpcyBCb21iZXJzIFJ1Z2J5IENsdWJcIlxuICAgICAgICBpbWFnZT1cImltYWdlcy9uYXRpb25hbHMxNy5qcGdcIlxuICAgICAgICBidXR0b25zPXtidXR0b25zfVxuICAgICAgLz5cbiAgICAgIDxTaW1wbGVHcmlkIG09XCIwXCIgcD1cIjJcIiBiZz1cImJyYW5kLmxpZ2h0XCI+XG4gICAgICAgIDxHYW1lcyBnYW1lcz17Z2FtZXMgfHwgW119IC8+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgcHk9XCI4XCJcbiAgICAgICAgICBoPVwiYXV0b1wiXG4gICAgICAgICAgdGVtcGxhdGVSb3dzPVwicmVwZWF0KDMsIDFmcilcIlxuICAgICAgICAgIHRlbXBsYXRlQ29sdW1ucz1cInJlcGVhdCg1LCAxZnIpXCJcbiAgICAgICAgICBnYXA9ezE2fVxuICAgICAgICAgIG14PVwiOHB4XCJcbiAgICAgICAgICBtdD1cIi01MHB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgLy8gY29sU3RhcnQ9e1syLCAyLCAyLCAzLCAyXX1cbiAgICAgICAgICAgIC8vIGNvbEVuZD17WzQsIDQsIDQsIDQsIDRdfVxuICAgICAgICAgICAgcm93U3Bhbj17WzEsIG51bGwsIDJdfVxuICAgICAgICAgICAgY29sU3Bhbj17WzUsIDUsIDMsIDMsIDNdfVxuICAgICAgICAgICAgLy8gY29sU3Bhbj17WzEwLCAxMCwgMTAsIDEwLCAxMF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgYXM9XCJoM1wiXG4gICAgICAgICAgICAgIHNpemU9XCIyeGxcIlxuICAgICAgICAgICAgICBmb250RmFtaWx5PVwiQmlnIFNob3VsZGVycyBEaXNwbGF5XCJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD1cIjcwMFwiXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIlxuICAgICAgICAgICAgICBtYj1cIjhcIlxuICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbj1cInVuZGVybGluZVwiXG4gICAgICAgICAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ9XCIxMHB4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTmV3c1xuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPEFydGljbGVzIGFydGljbGVzPXthcnRpY2xlc30+PC9BcnRpY2xlcz5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgICAgey8qIDxHcmlkSXRlbSByb3dTcGFuPXsxfSBjb2xTcGFuPXtbMiwgNSwgMiwgMiwgMl19PlxuICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgYXM9XCJoM1wiXG4gICAgICAgICAgICAgIHNpemU9XCIyeGxcIlxuICAgICAgICAgICAgICBmb250RmFtaWx5PVwiQmlnIFNob3VsZGVycyBEaXNwbGF5XCJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD1cIjcwMFwiXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIlxuICAgICAgICAgICAgICBtYj1cIjhcIlxuICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbj1cInVuZGVybGluZVwiXG4gICAgICAgICAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ9XCIxMHB4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgT3VyIFNwb25zb3JzXG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8U3BvbnNvcnMgc3BvbnNvcnM9e3Nwb25zb3JzfSAvPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+ICovfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxIU3RhY2sgc3BhY2luZz1cIjhcIj5cbiAgICAgICAgICB7c3BvbnNvcnMubWFwKChzcG9uc29yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPEJveD57c3BvbnNvci5uYW1lfTwvQm94PjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9IU3RhY2s+XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIFJ1biBBUEkgY2FsbHMgaW4gcGFyYWxsZWxcbiAgY29uc3QgW1xuICAgIGFydGljbGVzLFxuICAgIGNhdGVnb3JpZXMsXG4gICAgaG9tZXBhZ2UsXG4gICAgZ2FtZXMsXG4gICAgcGxheWVycyxcbiAgICBjb2FjaGVzLFxuICAgIHNwb25zb3JzLFxuICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoQVBJKFwiL2FydGljbGVzP3N0YXR1cz1wdWJsaXNoZWRcIiksXG4gICAgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiKSxcbiAgICBmZXRjaEFQSShcIi9ob21lcGFnZVwiKSxcbiAgICBmZXRjaEFQSShcIi9nYW1lc1wiKSxcbiAgICBmZXRjaEFQSShcIi9wbGF5ZXJzXCIpLFxuICAgIGZldGNoQVBJKFwiL2NvYWNoZXNcIiksXG4gICAgZmV0Y2hBUEkoXCIvc3BvbnNvcnNcIiksXG4gIF0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFydGljbGVzLFxuICAgICAgY2F0ZWdvcmllcyxcbiAgICAgIGhvbWVwYWdlLFxuICAgICAgZ2FtZXMsXG4gICAgICBwbGF5ZXJzLFxuICAgICAgY29hY2hlcyxcbiAgICAgIHNwb25zb3JzLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/media-query */ \"./node_modules/@chakra-ui/media-query/dist/esm/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _common_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Hero */ \"./common/Hero.jsx\");\n/* harmony import */ var _common_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Layout */ \"./common/Layout.jsx\");\n/* harmony import */ var _common_Seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/Seo */ \"./common/Seo.jsx\");\n/* harmony import */ var _components_Articles_articles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Articles/articles */ \"./components/Articles/articles.js\");\n/* harmony import */ var _components_Games__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Games */ \"./components/Games/index.js\");\n/* harmony import */ var _components_Paypal_paypal_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Paypal/paypal-button */ \"./components/Paypal/paypal-button.js\");\n/* harmony import */ var _components_Sponsors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Sponsors */ \"./components/Sponsors/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/elbgi/Desktop/bombers/frontend/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home(props) {\n  _s();\n\n  var articles = props.articles,\n      categories = props.categories,\n      homepage = props.homepage,\n      games = props.games,\n      sponsors = props.sponsors,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props, [\"articles\", \"categories\", \"homepage\", \"games\", \"sponsors\"]);\n\n  console.log({\n    props: props\n  });\n  var buttons = [{\n    display: \"Shop\",\n    link: \"/shop\"\n  }, {\n    display: \"Contact\",\n    link: \"/contact\"\n  }];\n  var dynamicRows = Object(_chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__[\"useBreakpointValue\"])({\n    base: 2,\n    sm: 3,\n    md: 3,\n    lg: 2,\n    xl: 1\n  });\n  var dynamicStack = Object(_chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__[\"useBreakpointValue\"])({\n    base: \"horizontal\",\n    xs: \"vertical\",\n    sm: \"vertical\",\n    md: \"vertical\",\n    lg: \"horizontal\",\n    xl: \"horizontal\"\n  });\n  return __jsx(_common_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    categories: categories,\n    seo: homepage.seo,\n    bg: \"brand.light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }\n  }, __jsx(_common_Seo__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    seo: homepage.seo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }), __jsx(_common_Hero__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    text: \"St. Louis Bombers Rugby Club\",\n    image: \"images/nationals17.jpg\",\n    buttons: buttons,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"SimpleGrid\"], {\n    m: \"0\",\n    p: \"2\",\n    bg: \"brand.light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Games__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    games: games || [],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    py: \"8\",\n    h: \"auto\",\n    templateRows: \"repeat(1, 1fr)\",\n    templateColumns: \"repeat(5, 1fr)\",\n    gap: 16,\n    mt: \"-50px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"] // colStart={[2, 2, 2, 3, 2]}\n  // colEnd={[4, 4, 4, 4, 4]}\n  , {\n    mx: 8,\n    rowSpan: [1, null, 2],\n    colSpan: [5, 5, 5, 5, 5] // colSpan={[10, 10, 10, 10, 10]}\n    ,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n    as: \"h3\",\n    size: \"2xl\",\n    fontFamily: \"Big Shoulders Display\",\n    fontWeight: \"700\",\n    textTransform: \"uppercase\",\n    mb: \"8\",\n    textDecoration: \"underline\",\n    textUnderlineOffset: \"10px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, \"News\"), __jsx(_components_Articles_articles__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    articles: articles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }\n  }))), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    m: -8,\n    p: 50,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Sponsors__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    sponsors: sponsors,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Home, \"bgH4nh/K7NtEKYATxyE6JkyJWWU=\", false, function () {\n  return [_chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__[\"useBreakpointValue\"], _chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__[\"useBreakpointValue\"]];\n});\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJhcnRpY2xlcyIsImNhdGVnb3JpZXMiLCJob21lcGFnZSIsImdhbWVzIiwic3BvbnNvcnMiLCJyZXN0IiwiY29uc29sZSIsImxvZyIsImJ1dHRvbnMiLCJkaXNwbGF5IiwibGluayIsImR5bmFtaWNSb3dzIiwidXNlQnJlYWtwb2ludFZhbHVlIiwiYmFzZSIsInNtIiwibWQiLCJsZyIsInhsIiwiZHluYW1pY1N0YWNrIiwieHMiLCJzZW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDdEIsTUFBUUMsUUFBUixHQUFxRUQsS0FBckUsQ0FBUUMsUUFBUjtBQUFBLE1BQWtCQyxVQUFsQixHQUFxRUYsS0FBckUsQ0FBa0JFLFVBQWxCO0FBQUEsTUFBOEJDLFFBQTlCLEdBQXFFSCxLQUFyRSxDQUE4QkcsUUFBOUI7QUFBQSxNQUF3Q0MsS0FBeEMsR0FBcUVKLEtBQXJFLENBQXdDSSxLQUF4QztBQUFBLE1BQStDQyxRQUEvQyxHQUFxRUwsS0FBckUsQ0FBK0NLLFFBQS9DO0FBQUEsTUFBNERDLElBQTVELHNHQUFxRU4sS0FBckU7O0FBQ0FPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVSLFNBQUssRUFBTEE7QUFBRixHQUFaO0FBRUEsTUFBTVMsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsV0FBTyxFQUFFLE1BRFg7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FEYyxFQUtkO0FBQ0VELFdBQU8sRUFBRSxTQURYO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBTGMsQ0FBaEI7QUFXQSxNQUFNQyxXQUFXLEdBQUdDLGlGQUFrQixDQUFD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dkJqQmQsSTs7QUFtSVNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBTaW1wbGVHcmlkLFxuICBHcmlkLFxuICBHcmlkSXRlbSxcbiAgSFN0YWNrLFxuICBCb3gsXG4gIFN0YWNrLFxufSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIjtcbmltcG9ydCB7XG4gIEhlYWRpbmcsXG4gIFRhYixcbiAgVGFiTGlzdCxcbiAgVGFiUGFuZWwsXG4gIFRhYlBhbmVscyxcbiAgVGFicyxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUJyZWFrcG9pbnRWYWx1ZSB9IGZyb20gXCJAY2hha3JhLXVpL21lZGlhLXF1ZXJ5XCI7XG5pbXBvcnQgeyBncm91cEJ5IH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlcm8gZnJvbSBcIi4uL2NvbW1vbi9IZXJvXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21tb24vTGF5b3V0XCI7XG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21tb24vU2VvXCI7XG5pbXBvcnQgQXJ0aWNsZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZXMvYXJ0aWNsZXNcIjtcbmltcG9ydCBHYW1lcyBmcm9tIFwiLi4vY29tcG9uZW50cy9HYW1lc1wiO1xuaW1wb3J0IFBheXBhbEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9QYXlwYWwvcGF5cGFsLWJ1dHRvblwiO1xuaW1wb3J0IFNwb25zb3JzIGZyb20gXCIuLi9jb21wb25lbnRzL1Nwb25zb3JzXCI7XG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBhcnRpY2xlcywgY2F0ZWdvcmllcywgaG9tZXBhZ2UsIGdhbWVzLCBzcG9uc29ycywgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnNvbGUubG9nKHsgcHJvcHMgfSk7XG5cbiAgY29uc3QgYnV0dG9ucyA9IFtcbiAgICB7XG4gICAgICBkaXNwbGF5OiBcIlNob3BcIixcbiAgICAgIGxpbms6IFwiL3Nob3BcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGRpc3BsYXk6IFwiQ29udGFjdFwiLFxuICAgICAgbGluazogXCIvY29udGFjdFwiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgZHluYW1pY1Jvd3MgPSB1c2VCcmVha3BvaW50VmFsdWUoe1xuICAgIGJhc2U6IDIsXG4gICAgc206IDMsXG4gICAgbWQ6IDMsXG4gICAgbGc6IDIsXG4gICAgeGw6IDEsXG4gIH0pO1xuXG4gIGNvbnN0IGR5bmFtaWNTdGFjayA9IHVzZUJyZWFrcG9pbnRWYWx1ZSh7XG4gICAgYmFzZTogXCJob3Jpem9udGFsXCIsXG4gICAgeHM6IFwidmVydGljYWxcIixcbiAgICBzbTogXCJ2ZXJ0aWNhbFwiLFxuICAgIG1kOiBcInZlcnRpY2FsXCIsXG4gICAgbGc6IFwiaG9yaXpvbnRhbFwiLFxuICAgIHhsOiBcImhvcml6b250YWxcIixcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IHNlbz17aG9tZXBhZ2Uuc2VvfSBiZz1cImJyYW5kLmxpZ2h0XCI+XG4gICAgICA8U2VvIHNlbz17aG9tZXBhZ2Uuc2VvfSAvPlxuICAgICAgPEhlcm9cbiAgICAgICAgdGV4dD1cIlN0LiBMb3VpcyBCb21iZXJzIFJ1Z2J5IENsdWJcIlxuICAgICAgICBpbWFnZT1cImltYWdlcy9uYXRpb25hbHMxNy5qcGdcIlxuICAgICAgICBidXR0b25zPXtidXR0b25zfVxuICAgICAgLz5cbiAgICAgIDxTaW1wbGVHcmlkIG09XCIwXCIgcD1cIjJcIiBiZz1cImJyYW5kLmxpZ2h0XCI+XG4gICAgICAgIDxHYW1lcyBnYW1lcz17Z2FtZXMgfHwgW119IC8+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgcHk9XCI4XCJcbiAgICAgICAgICBoPVwiYXV0b1wiXG4gICAgICAgICAgdGVtcGxhdGVSb3dzPVwicmVwZWF0KDEsIDFmcilcIlxuICAgICAgICAgIHRlbXBsYXRlQ29sdW1ucz1cInJlcGVhdCg1LCAxZnIpXCJcbiAgICAgICAgICBnYXA9ezE2fVxuICAgICAgICAgIG10PVwiLTUwcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWRJdGVtXG4gICAgICAgICAgICAvLyBjb2xTdGFydD17WzIsIDIsIDIsIDMsIDJdfVxuICAgICAgICAgICAgLy8gY29sRW5kPXtbNCwgNCwgNCwgNCwgNF19XG4gICAgICAgICAgICBteD17OH1cbiAgICAgICAgICAgIHJvd1NwYW49e1sxLCBudWxsLCAyXX1cbiAgICAgICAgICAgIGNvbFNwYW49e1s1LCA1LCA1LCA1LCA1XX1cbiAgICAgICAgICAgIC8vIGNvbFNwYW49e1sxMCwgMTAsIDEwLCAxMCwgMTBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICAgIGFzPVwiaDNcIlxuICAgICAgICAgICAgICBzaXplPVwiMnhsXCJcbiAgICAgICAgICAgICAgZm9udEZhbWlseT1cIkJpZyBTaG91bGRlcnMgRGlzcGxheVwiXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI3MDBcIlxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCJcbiAgICAgICAgICAgICAgbWI9XCI4XCJcbiAgICAgICAgICAgICAgdGV4dERlY29yYXRpb249XCJ1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0PVwiMTBweFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5ld3NcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxBcnRpY2xlcyBhcnRpY2xlcz17YXJ0aWNsZXN9PjwvQXJ0aWNsZXM+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgIHsvKiA8R3JpZEl0ZW0gcm93U3Bhbj17MX0gY29sU3Bhbj17WzIsIDUsIDIsIDIsIDJdfT5cbiAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICAgIGFzPVwiaDNcIlxuICAgICAgICAgICAgICBzaXplPVwiMnhsXCJcbiAgICAgICAgICAgICAgZm9udEZhbWlseT1cIkJpZyBTaG91bGRlcnMgRGlzcGxheVwiXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI3MDBcIlxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCJcbiAgICAgICAgICAgICAgbWI9XCI4XCJcbiAgICAgICAgICAgICAgdGV4dERlY29yYXRpb249XCJ1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0PVwiMTBweFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE91ciBTcG9uc29yc1xuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPFNwb25zb3JzIHNwb25zb3JzPXtzcG9uc29yc30gLz5cbiAgICAgICAgICA8L0dyaWRJdGVtPiAqL31cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8Qm94IG09ey04fSBwPXs1MH0+XG4gICAgICAgICAgPFNwb25zb3JzIHNwb25zb3JzPXtzcG9uc29yc30gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIFJ1biBBUEkgY2FsbHMgaW4gcGFyYWxsZWxcbiAgY29uc3QgW1xuICAgIGFydGljbGVzLFxuICAgIGNhdGVnb3JpZXMsXG4gICAgaG9tZXBhZ2UsXG4gICAgZ2FtZXMsXG4gICAgcGxheWVycyxcbiAgICBjb2FjaGVzLFxuICAgIHNwb25zb3JzLFxuICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoQVBJKFwiL2FydGljbGVzP3N0YXR1cz1wdWJsaXNoZWRcIiksXG4gICAgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiKSxcbiAgICBmZXRjaEFQSShcIi9ob21lcGFnZVwiKSxcbiAgICBmZXRjaEFQSShcIi9nYW1lc1wiKSxcbiAgICBmZXRjaEFQSShcIi9wbGF5ZXJzXCIpLFxuICAgIGZldGNoQVBJKFwiL2NvYWNoZXNcIiksXG4gICAgZmV0Y2hBUEkoXCIvc3BvbnNvcnNcIiksXG4gIF0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFydGljbGVzLFxuICAgICAgY2F0ZWdvcmllcyxcbiAgICAgIGhvbWVwYWdlLFxuICAgICAgZ2FtZXMsXG4gICAgICBwbGF5ZXJzLFxuICAgICAgY29hY2hlcyxcbiAgICAgIHNwb25zb3JzLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./common/Nav.jsx":
/*!************************!*\
  !*** ./common/Nav.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _icons_Venmo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/Venmo */ \"./icons/Venmo.jsx\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\n\nvar _templateObject,\n    _this = undefined,\n    _jsxFileName = \"/Users/elbgi/Desktop/bombers/frontend/common/Nav.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\nvar DiagonalBg = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: #212121;\\n  background-image: linear-gradient(135deg, #212121 50% #e2e2e2 50%);\\n\"])));\n\nvar Nav = function Nav(_ref) {\n  var categories = _ref.categories;\n  var navs = [{\n    name: \"news\",\n    id: \"news\",\n    slug: \"news\"\n  }, {\n    name: \"schedule\",\n    id: \"schedule\",\n    slug: \"schedule\"\n  }, {\n    name: \"team\",\n    id: \"team\",\n    slug: \"team\"\n  }, {\n    name: \"contact\",\n    id: \"contact\",\n    slug: \"contact\"\n  }, {\n    name: \"photos\",\n    id: \"photos\",\n    slug: \"photos\"\n  }, {\n    name: \"more\",\n    id: \"more\",\n    slug: \"more\"\n  }, {\n    name: \"shop\",\n    id: \"shop\",\n    slug: \"shop\"\n  }];\n  var socials = [{\n    name: \"facebook\",\n    url: \"https://www.facebook.com/stlbombersrugby\",\n    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faFacebookSquare\"]\n  }, {\n    name: \"instagram\",\n    url: \"https://www.instagram.com/stl_bombersrfc/\",\n    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faInstagram\"]\n  }, {\n    name: \"venmo\",\n    url: \"https://account.venmo.com/u/STLBombersRFC\",\n    icon: \"\"\n  }];\n  return __jsx(\"nav\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 0,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    minH: \"50px\",\n    bg: \"brand.black\",\n    id: \"socials\",\n    flexGrow: \"1\",\n    justifyContent: \"end\",\n    alignContent: \"center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }, socials.map(function (page) {\n    return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      m: \"2\",\n      href: page.url,\n      target: \"_blank\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 15\n      }\n    }, page.name === \"venmo\" ? __jsx(_icons_Venmo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      size: \"lg\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 19\n      }\n    }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n      color: \"white\",\n      size: \"2x\",\n      icon: page.icon // style={{ color: \"white\" }}\n      ,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 19\n      }\n    }));\n  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    bg: \"brand.light\",\n    style: {\n      minHeight: 100\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Center\"], {\n    w: \"100px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: \"/images/logo.png\",\n    alt: \"Your Name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 17\n    }\n  })))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Wrap\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Center\"], {\n    flex: \"2\",\n    size: \"150px\",\n    justifyContent: \"space-evenly\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 13\n    }\n  }, navs.map(function (nav) {\n    return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      color: \"brand.black\",\n      href: \"/\".concat(nav.name),\n      fontFamily: \"Big Shoulders Display\",\n      textTransform: \"uppercase\",\n      fontWeight: \"bold\",\n      fontSize: \"xl\",\n      _hover: {\n        color: \"#212121\",\n        textDecoration: \"none\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 17\n      }\n    }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"LinkBox\"], {\n      display: \"flex\",\n      alignItems: \"center\",\n      key: nav.id,\n      color: \"brand.black\",\n      _hover: {\n        color: \"#212121\",\n        borderBottom: \"3px solid #212121\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 19\n      }\n    }, nav.name.toUpperCase()));\n  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Center\"], {\n    p: \"4\",\n    flex: \"1\",\n    justifyContent: \"flex-end\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    borderRadius: \"8px\",\n    color: \"brand.light\",\n    variant: \"solid\",\n    bg: \"tomato\",\n    _hover: {\n      backgroundColor: \"#e2e2e2\",\n      color: \"tomato\",\n      border: \"2px solid tomato\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 15\n    }\n  }, \"Donate / Dues\"))))));\n};\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tbW9uL05hdi5qc3g/NWRmMyJdLCJuYW1lcyI6WyJEaWFnb25hbEJnIiwic3R5bGVkIiwiRmxleCIsIk5hdiIsImNhdGVnb3JpZXMiLCJuYXZzIiwibmFtZSIsImlkIiwic2x1ZyIsInNvY2lhbHMiLCJ1cmwiLCJpY29uIiwiZmFGYWNlYm9va1NxdWFyZSIsImZhSW5zdGFncmFtIiwibWFwIiwicGFnZSIsIm1pbkhlaWdodCIsIm5hdiIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJib3JkZXJCb3R0b20iLCJ0b1VwcGVyQ2FzZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLGlFQUFNLENBQUNDLHFEQUFELENBQVQsc1BBQWhCOztBQUtBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQW9CO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUM5QixNQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxRQUFJLEVBQUUsTUFEUjtBQUVFQyxNQUFFLEVBQUUsTUFGTjtBQUdFQyxRQUFJLEVBQUU7QUFIUixHQURXLEVBTVg7QUFDRUYsUUFBSSxFQUFFLFVBRFI7QUFFRUMsTUFBRSxFQUFFLFVBRk47QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FOVyxFQVdYO0FBQ0VGLFFBQUksRUFBRSxNQURSO0FBRUVDLE1BQUUsRUFBRSxNQUZOO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBWFcsRUFnQlg7QUFDRUYsUUFBSSxFQUFFLFNBRFI7QUFFRUMsTUFBRSxFQUFFLFNBRk47QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FoQlcsRUFxQlg7QUFDRUYsUUFBSSxFQUFFLFFBRFI7QUFFRUMsTUFBRSxFQUFFLFFBRk47QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FyQlcsRUEwQlg7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IjoiLi9jb21tb24vTmF2LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgQ2VudGVyLFxuICBGbGV4LFxuICBMaW5rQm94LFxuICBMaW5rIGFzIENoYWtyYUxpbmssXG4gIFN0YWNrLFxuICBCdXR0b24sXG4gIFdyYXAsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtcbiAgZmFGYWNlYm9va1NxdWFyZSxcbiAgZmFJbnN0YWdyYW0sXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XG5pbXBvcnQgVmVubW9JY29uIGZyb20gXCIuLi9pY29ucy9WZW5tb1wiO1xuXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5cbmNvbnN0IERpYWdvbmFsQmcgPSBzdHlsZWQoRmxleClgXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyMTIxMjEgNTAlICNlMmUyZTIgNTAlKTtcbmA7XG5cbmNvbnN0IE5hdiA9ICh7IGNhdGVnb3JpZXMgfSkgPT4ge1xuICBjb25zdCBuYXZzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwibmV3c1wiLFxuICAgICAgaWQ6IFwibmV3c1wiLFxuICAgICAgc2x1ZzogXCJuZXdzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInNjaGVkdWxlXCIsXG4gICAgICBpZDogXCJzY2hlZHVsZVwiLFxuICAgICAgc2x1ZzogXCJzY2hlZHVsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ0ZWFtXCIsXG4gICAgICBpZDogXCJ0ZWFtXCIsXG4gICAgICBzbHVnOiBcInRlYW1cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiY29udGFjdFwiLFxuICAgICAgaWQ6IFwiY29udGFjdFwiLFxuICAgICAgc2x1ZzogXCJjb250YWN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInBob3Rvc1wiLFxuICAgICAgaWQ6IFwicGhvdG9zXCIsXG4gICAgICBzbHVnOiBcInBob3Rvc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJtb3JlXCIsXG4gICAgICBpZDogXCJtb3JlXCIsXG4gICAgICBzbHVnOiBcIm1vcmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwic2hvcFwiLFxuICAgICAgaWQ6IFwic2hvcFwiLFxuICAgICAgc2x1ZzogXCJzaG9wXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBzb2NpYWxzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiZmFjZWJvb2tcIixcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vc3RsYm9tYmVyc3J1Z2J5XCIsXG4gICAgICBpY29uOiBmYUZhY2Vib29rU3F1YXJlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJpbnN0YWdyYW1cIixcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3N0bF9ib21iZXJzcmZjL1wiLFxuICAgICAgaWNvbjogZmFJbnN0YWdyYW0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInZlbm1vXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9hY2NvdW50LnZlbm1vLmNvbS91L1NUTEJvbWJlcnNSRkNcIixcbiAgICAgIGljb246IFwiXCIsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxuYXY+XG4gICAgICA8U3RhY2sgc3BhY2luZz17MH0+XG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgbWluSD1cIjUwcHhcIlxuICAgICAgICAgIGJnPVwiYnJhbmQuYmxhY2tcIlxuICAgICAgICAgIGlkPVwic29jaWFsc1wiXG4gICAgICAgICAgZmxleEdyb3c9XCIxXCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImVuZFwiXG4gICAgICAgICAgYWxpZ25Db250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtzb2NpYWxzLm1hcCgocGFnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENoYWtyYUxpbmsgbT1cIjJcIiBocmVmPXtwYWdlLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAge3BhZ2UubmFtZSA9PT0gXCJ2ZW5tb1wiID8gKFxuICAgICAgICAgICAgICAgICAgPFZlbm1vSWNvbiBzaXplPVwibGdcIiAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiMnhcIlxuICAgICAgICAgICAgICAgICAgICBpY29uPXtwYWdlLmljb259XG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX1cbiAgICAgICAgICAgICAgICAgID48L0ZvbnRBd2Vzb21lSWNvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0NoYWtyYUxpbms+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDxGbGV4IGJnPVwiYnJhbmQubGlnaHRcIiBzdHlsZT17eyBtaW5IZWlnaHQ6IDEwMCB9fT5cbiAgICAgICAgICA8Q2VudGVyIHc9XCIxMDBweFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9gfT5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwiWW91ciBOYW1lXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICAgIDxXcmFwPlxuICAgICAgICAgICAgPENlbnRlciBmbGV4PVwiMlwiIHNpemU9XCIxNTBweFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtZXZlbmx5XCI+XG4gICAgICAgICAgICAgIHtuYXZzLm1hcCgobmF2KSA9PiAoXG4gICAgICAgICAgICAgICAgPENoYWtyYUxpbmtcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYnJhbmQuYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke25hdi5uYW1lfWB9XG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5PVwiQmlnIFNob3VsZGVycyBEaXNwbGF5XCJcbiAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIlxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJ4bFwiXG4gICAgICAgICAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzIxMjEyMVwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxMaW5rQm94XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGtleT17bmF2LmlkfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJyYW5kLmJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzIxMjEyMVwiLFxuXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIjNweCBzb2xpZCAjMjEyMTIxXCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtuYXYubmFtZS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgPC9MaW5rQm94PlxuICAgICAgICAgICAgICAgIDwvQ2hha3JhTGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgIDxDZW50ZXIgcD1cIjRcIiBmbGV4PVwiMVwiIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjhweFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJicmFuZC5saWdodFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInNvbGlkXCJcbiAgICAgICAgICAgICAgICBiZz1cInRvbWF0b1wiXG4gICAgICAgICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2UyZTJlMlwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwidG9tYXRvXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIHRvbWF0b1wiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEb25hdGUgLyBEdWVzXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgPC9XcmFwPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./common/Nav.jsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./common/Nav.jsx":
/*!************************!*\
  !*** ./common/Nav.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\n\nvar _templateObject,\n    _this = undefined,\n    _jsxFileName = \"/Users/elbgi/Desktop/bombers/frontend/common/Nav.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\nvar DiagonalBg = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: #212121;\\n  background-image: linear-gradient(135deg, #212121 50% #e2e2e2 50%);\\n\"])));\nvar venmoIcon = \"../public/icons/venmo.svg\";\n\nvar Nav = function Nav(_ref) {\n  var categories = _ref.categories;\n  var navs = [{\n    name: \"news\",\n    id: \"news\",\n    slug: \"news\"\n  }, {\n    name: \"schedule\",\n    id: \"schedule\",\n    slug: \"schedule\"\n  }, {\n    name: \"team\",\n    id: \"team\",\n    slug: \"team\"\n  }, {\n    name: \"contact\",\n    id: \"contact\",\n    slug: \"contact\"\n  }, {\n    name: \"photos\",\n    id: \"photos\",\n    slug: \"photos\"\n  }, {\n    name: \"more\",\n    id: \"more\",\n    slug: \"more\"\n  }, {\n    name: \"shop\",\n    id: \"shop\",\n    slug: \"shop\"\n  }];\n  var socials = [{\n    name: \"facebook\",\n    url: \"https://www.facebook.com/stlbombersrugby\",\n    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faFacebookSquare\"]\n  }, {\n    name: \"instagram\",\n    url: \"https://www.instagram.com/stl_bombersrfc/\",\n    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faInstagram\"]\n  }, {\n    name: \"venmo\",\n    url: \"https://www.facebook.com/stlbombersrugby\",\n    icon: \"/icons/venmo\"\n  }];\n  return __jsx(\"nav\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 0,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    minH: \"50px\",\n    bg: \"brand.black\",\n    id: \"socials\",\n    flexGrow: \"1\",\n    justifyContent: \"end\",\n    alignContent: \"center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }, socials.map(function (page) {\n    return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      m: \"2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 15\n      }\n    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__[\"FontAwesomeIcon\"], {\n      color: \"white\",\n      size: \"2x\",\n      icon: page.icon // style={{ color: \"white\" }}\n      ,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 17\n      }\n    }));\n  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    bg: \"brand.light\",\n    style: {\n      minHeight: 100\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Center\"], {\n    w: \"100px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: \"/images/logo.png\",\n    alt: \"Your Name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 17\n    }\n  })))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Center\"], {\n    flex: \"2\",\n    size: \"150px\",\n    justifyContent: \"space-evenly\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 11\n    }\n  }, navs.map(function (nav) {\n    return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      color: \"brand.black\",\n      href: \"/\".concat(nav.name),\n      fontFamily: \"Big Shoulders Display\",\n      textTransform: \"uppercase\",\n      fontWeight: \"bold\",\n      fontSize: \"xl\",\n      _hover: {\n        color: \"#212121\",\n        textDecoration: \"none\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 15\n      }\n    }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"LinkBox\"], {\n      display: \"flex\",\n      alignItems: \"center\",\n      key: nav.id,\n      color: \"brand.black\",\n      _hover: {\n        color: \"#212121\",\n        borderBottom: \"3px solid #212121\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 17\n      }\n    }, nav.name.toUpperCase()));\n  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Center\"], {\n    p: \"4\",\n    flex: \"1\",\n    justifyContent: \"flex-end\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    borderRadius: \"8px\",\n    color: \"brand.light\",\n    variant: \"solid\",\n    bg: \"tomato\",\n    _hover: {\n      backgroundColor: \"#e2e2e2\",\n      color: \"tomato\",\n      border: \"2px solid tomato\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 13\n    }\n  }, \"Donate/Dues\")))));\n};\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tbW9uL05hdi5qc3g/NWRmMyJdLCJuYW1lcyI6WyJEaWFnb25hbEJnIiwic3R5bGVkIiwiRmxleCIsInZlbm1vSWNvbiIsIk5hdiIsImNhdGVnb3JpZXMiLCJuYXZzIiwibmFtZSIsImlkIiwic2x1ZyIsInNvY2lhbHMiLCJ1cmwiLCJpY29uIiwiZmFGYWNlYm9va1NxdWFyZSIsImZhSW5zdGFncmFtIiwibWFwIiwicGFnZSIsIm1pbkhlaWdodCIsIm5hdiIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJib3JkZXJCb3R0b20iLCJ0b1VwcGVyQ2FzZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLGlFQUFNLENBQUNDLHFEQUFELENBQVQsc1BBQWhCO0FBS0EsSUFBTUMsU0FBUyxHQUFHLDJCQUFsQjs7QUFFQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFvQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDOUIsTUFBTUMsSUFBSSxHQUFHLENBQ1g7QUFDRUMsUUFBSSxFQUFFLE1BRFI7QUFFRUMsTUFBRSxFQUFFLE1BRk47QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FEVyxFQU1YO0FBQ0VGLFFBQUksRUFBRSxVQURSO0FBRUVDLE1BQUUsRUFBRSxVQUZOO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBTlcsRUFXWDtBQUNFRixRQUFJLEVBQUUsTUFEUjtBQUVFQyxNQUFFLEVBQUUsTUFGTjtBQUdFQyxRQUFJLEVBQUU7QUFIUixHQVhXLEVBZ0JYO0FBQ0VGLFFBQUksRUFBRSxTQURSO0FBRUVDLE1BQUUsRUFBRSxTQUZOO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBaEJXLEVBcUJYO0FBQ0VGLFFBQUksRUFBRSxRQURSO0FBRUVDLE1BQUUsRUFBRSxRQUZO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VjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BWUUsTUFBQyx3REFBRDtBQUNFLGFBQU8sRUFBQyxNQURWO0FBRUUsZ0JBQVUsRUFBQyxRQUZiO0FBR0UsU0FBRyxFQUFFRixHQUFHLENBQUNWLEVBSFg7QUFJRSxXQUFLLEVBQUMsYUFKUjtBQUtFLFlBQU0sRUFBRTtBQUNOVyxhQUFLLEVBQUUsU0FERDtBQUdORSxvQkFBWSxFQUFFO0FBSFIsT0FMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BV0dILEdBQUcsQ0FBQ1gsSUFBSixDQUFTZSxXQUFULEVBWEgsQ0FaRixDQURRO0FBQUEsR0FBVCxDQURILENBUkYsRUFzQ0UsTUFBQyx1REFBRDtBQUFRLEtBQUMsRUFBQyxHQUFWO0FBQWMsUUFBSSxFQUFDLEdBQW5CO0FBQXVCLGtCQUFjLEVBQUMsVUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFDRSxnQkFBWSxFQUFDLEtBRGY7QUFFRSxTQUFLLEVBQUMsYUFGUjtBQUdFLFdBQU8sRUFBQyxPQUhWO0FBSUUsTUFBRSxFQUFDLFFBSkw7QUFLRSxVQUFNLEVBQUU7QUFDTkMscUJBQWUsRUFBRSxTQURYO0FBRU5KLFdBQUssRUFBRSxRQUZEO0FBR05LLFlBQU0sRUFBRTtBQUhGLEtBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQXRDRixDQXRCRixDQURGLENBREY7QUFpRkQsQ0ExSUQ7O0tBQU1wQixHO0FBNElTQSxrRUFBZiIsImZpbGUiOiIuL2NvbW1vbi9OYXYuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBDZW50ZXIsXG4gIEZsZXgsXG4gIExpbmtCb3gsXG4gIExpbmsgYXMgQ2hha3JhTGluayxcbiAgU3RhY2ssXG4gIEJ1dHRvbixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBmYUZhY2Vib29rU3F1YXJlLFxuICBmYUluc3RhZ3JhbSxcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcblxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuXG5jb25zdCBEaWFnb25hbEJnID0gc3R5bGVkKEZsZXgpYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjEyMTIxIDUwJSAjZTJlMmUyIDUwJSk7XG5gO1xuXG5jb25zdCB2ZW5tb0ljb24gPSBcIi4uL3B1YmxpYy9pY29ucy92ZW5tby5zdmdcIjtcblxuY29uc3QgTmF2ID0gKHsgY2F0ZWdvcmllcyB9KSA9PiB7XG4gIGNvbnN0IG5hdnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJuZXdzXCIsXG4gICAgICBpZDogXCJuZXdzXCIsXG4gICAgICBzbHVnOiBcIm5ld3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwic2NoZWR1bGVcIixcbiAgICAgIGlkOiBcInNjaGVkdWxlXCIsXG4gICAgICBzbHVnOiBcInNjaGVkdWxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInRlYW1cIixcbiAgICAgIGlkOiBcInRlYW1cIixcbiAgICAgIHNsdWc6IFwidGVhbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJjb250YWN0XCIsXG4gICAgICBpZDogXCJjb250YWN0XCIsXG4gICAgICBzbHVnOiBcImNvbnRhY3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwicGhvdG9zXCIsXG4gICAgICBpZDogXCJwaG90b3NcIixcbiAgICAgIHNsdWc6IFwicGhvdG9zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIm1vcmVcIixcbiAgICAgIGlkOiBcIm1vcmVcIixcbiAgICAgIHNsdWc6IFwibW9yZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJzaG9wXCIsXG4gICAgICBpZDogXCJzaG9wXCIsXG4gICAgICBzbHVnOiBcInNob3BcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IHNvY2lhbHMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJmYWNlYm9va1wiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zdGxib21iZXJzcnVnYnlcIixcbiAgICAgIGljb246IGZhRmFjZWJvb2tTcXVhcmUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImluc3RhZ3JhbVwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc3RsX2JvbWJlcnNyZmMvXCIsXG4gICAgICBpY29uOiBmYUluc3RhZ3JhbSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwidmVubW9cIixcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vc3RsYm9tYmVyc3J1Z2J5XCIsXG4gICAgICBpY29uOiBcIi9pY29ucy92ZW5tb1wiLFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2PlxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezB9PlxuICAgICAgICA8RmxleFxuICAgICAgICAgIG1pbkg9XCI1MHB4XCJcbiAgICAgICAgICBiZz1cImJyYW5kLmJsYWNrXCJcbiAgICAgICAgICBpZD1cInNvY2lhbHNcIlxuICAgICAgICAgIGZsZXhHcm93PVwiMVwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJlbmRcIlxuICAgICAgICAgIGFsaWduQ29udGVudD1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICB7c29jaWFscy5tYXAoKHBhZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxCb3ggbT1cIjJcIj5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCIyeFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtwYWdlLmljb259XG4gICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19XG4gICAgICAgICAgICAgICAgPjwvRm9udEF3ZXNvbWVJY29uPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvRmxleD5cbiAgICAgICAgPEZsZXggYmc9XCJicmFuZC5saWdodFwiIHN0eWxlPXt7IG1pbkhlaWdodDogMTAwIH19PlxuICAgICAgICAgIDxDZW50ZXIgdz1cIjEwMHB4XCI+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2B9PlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJZb3VyIE5hbWVcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgPENlbnRlciBmbGV4PVwiMlwiIHNpemU9XCIxNTBweFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtZXZlbmx5XCI+XG4gICAgICAgICAgICB7bmF2cy5tYXAoKG5hdikgPT4gKFxuICAgICAgICAgICAgICA8Q2hha3JhTGlua1xuICAgICAgICAgICAgICAgIGNvbG9yPVwiYnJhbmQuYmxhY2tcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtuYXYubmFtZX1gfVxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJCaWcgU2hvdWxkZXJzIERpc3BsYXlcIlxuICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIlxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT1cInhsXCJcbiAgICAgICAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMyMTIxMjFcIixcbiAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpbmtCb3hcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAga2V5PXtuYXYuaWR9XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImJyYW5kLmJsYWNrXCJcbiAgICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMjEyMTIxXCIsXG5cbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIjNweCBzb2xpZCAjMjEyMTIxXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtuYXYubmFtZS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgIDwvTGlua0JveD5cbiAgICAgICAgICAgICAgPC9DaGFrcmFMaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgPENlbnRlciBwPVwiNFwiIGZsZXg9XCIxXCIganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI4cHhcIlxuICAgICAgICAgICAgICBjb2xvcj1cImJyYW5kLmxpZ2h0XCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInNvbGlkXCJcbiAgICAgICAgICAgICAgYmc9XCJ0b21hdG9cIlxuICAgICAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2UyZTJlMlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInRvbWF0b1wiLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgdG9tYXRvXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERvbmF0ZS9EdWVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9TdGFjaz5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./common/Nav.jsx\n");

/***/ })

})
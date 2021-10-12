webpackHotUpdate_N_E("pages/index",{

/***/ "./common/Nav.jsx":
/*!************************!*\
  !*** ./common/Nav.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _icons_Venmo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/Venmo */ \"./icons/Venmo.jsx\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\n\nvar _templateObject,\n    _this = undefined,\n    _jsxFileName = \"/Users/elbgi/Desktop/bombers/frontend/common/Nav.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\nvar DiagonalBg = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: #212121;\\n  background-image: linear-gradient(135deg, #212121 50% #e2e2e2 50%);\\n\"])));\n\nvar Nav = function Nav(_ref) {\n  var categories = _ref.categories;\n  var navs = [{\n    name: \"news\",\n    id: \"news\",\n    slug: \"news\"\n  }, {\n    name: \"schedule\",\n    id: \"schedule\",\n    slug: \"schedule\"\n  }, {\n    name: \"team\",\n    id: \"team\",\n    slug: \"team\"\n  }, {\n    name: \"contact\",\n    id: \"contact\",\n    slug: \"contact\"\n  }, {\n    name: \"photos\",\n    id: \"photos\",\n    slug: \"photos\"\n  }, {\n    name: \"more\",\n    id: \"more\",\n    slug: \"more\"\n  }, {\n    name: \"shop\",\n    id: \"shop\",\n    slug: \"shop\"\n  }];\n  var socials = [{\n    name: \"facebook\",\n    url: \"https://www.facebook.com/stlbombersrugby\",\n    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faFacebookSquare\"]\n  }, {\n    name: \"instagram\",\n    url: \"https://www.instagram.com/stl_bombersrfc/\",\n    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faInstagram\"]\n  }, {\n    name: \"venmo\",\n    url: \"https://account.venmo.com/u/STLBombersRFC\",\n    icon: \"\"\n  }];\n  return __jsx(\"nav\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 0,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    minH: \"50px\",\n    bg: \"brand.black\",\n    id: \"socials\",\n    flexGrow: \"1\",\n    justifyContent: \"end\",\n    alignContent: \"center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  }, socials.map(function (page) {\n    return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      m: \"2\",\n      href: page.url,\n      target: \"_blank\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 15\n      }\n    }, page.name === \"venmo\" ? __jsx(_icons_Venmo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      size: \"lg\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 19\n      }\n    }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n      color: \"white\",\n      size: \"2x\",\n      icon: page.icon // style={{ color: \"white\" }}\n      ,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 19\n      }\n    }));\n  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    bg: \"brand.light\",\n    style: {\n      minHeight: 100\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Center\"], {\n    w: \"100px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: \"/images/logo.png\",\n    alt: \"Your Name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 17\n    }\n  })))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Center\"], {\n    flex: \"2\",\n    size: \"150px\",\n    justifyContent: \"space-evenly\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  }, navs.map(function (nav) {\n    return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      color: \"brand.black\",\n      href: \"/\".concat(nav.name),\n      fontFamily: \"Big Shoulders Display\",\n      textTransform: \"uppercase\",\n      fontWeight: \"bold\",\n      fontSize: \"xl\",\n      _hover: {\n        color: \"#212121\",\n        textDecoration: \"none\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 15\n      }\n    }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"LinkBox\"], {\n      display: \"flex\",\n      alignItems: \"center\",\n      key: nav.id,\n      color: \"brand.black\",\n      _hover: {\n        color: \"#212121\",\n        borderBottom: \"3px solid #212121\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 17\n      }\n    }, nav.name.toUpperCase()));\n  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Center\"], {\n    p: \"4\",\n    flex: \"1\",\n    justifyContent: \"flex-end\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    borderRadius: \"8px\",\n    color: \"brand.light\",\n    variant: \"solid\",\n    bg: \"tomato\",\n    _hover: {\n      backgroundColor: \"#e2e2e2\",\n      color: \"tomato\",\n      border: \"2px solid tomato\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 13\n    }\n  }, \"Donate / Dues\")))));\n};\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tbW9uL05hdi5qc3g/NWRmMyJdLCJuYW1lcyI6WyJEaWFnb25hbEJnIiwic3R5bGVkIiwiRmxleCIsIk5hdiIsImNhdGVnb3JpZXMiLCJuYXZzIiwibmFtZSIsImlkIiwic2x1ZyIsInNvY2lhbHMiLCJ1cmwiLCJpY29uIiwiZmFGYWNlYm9va1NxdWFyZSIsImZhSW5zdGFncmFtIiwibWFwIiwicGFnZSIsIm1pbkhlaWdodCIsIm5hdiIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJib3JkZXJCb3R0b20iLCJ0b1VwcGVyQ2FzZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLGlFQUFNLENBQUNDLHFEQUFELENBQVQsc1BBQWhCOztBQUtBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQW9CO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUM5QixNQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxRQUFJLEVBQUUsTUFEUjtBQUVFQyxNQUFFLEVBQUUsTUFGTjtBQUdFQyxRQUFJLEVBQUU7QUFIUixHQURXLEVBTVg7QUFDRUYsUUFBSSxFQUFFLFVBRFI7QUFFRUMsTUFBRSxFQUFFLFVBRk47QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FOVyxFQVdYO0FBQ0VGLFFBQUksRUFBRSxNQURSO0FBRUVDLE1BQUUsRUFBRSxNQUZOO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBWFcsRUFnQlg7QUFDRUYsUUFBSSxFQUFFLFNBRFI7QUFFRUMsTUFBRSxFQUFFLFNBRk47QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FoQlcsRUFxQlg7QUFDRUYsUUFBSSxFQUFFLFFBRFI7QUFFRUMsTUFBRSxFQUFFLFFBRk47QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FyQlcsRUEwQlg7QUFDRUYsUUFBSSxFQUFFLE1BRFI7QUFFRUMsTUFBRSxFQUFFLE1BRk47QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0ExQlcsRUErQlg7QUFDRUYsUUFBSSxFQUFFLE1BRFI7QUFFRUMsTUFBRSxFQUFFLE1BRk47QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0EvQlcsQ0FBYjtBQXNDQSxNQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUNFSCxRQUFJLEVBQUUsVUFEUjtBQUVFSSxPQUFHLEVBQUUsMENBRlA7QUFHRUMsUUFBSSxFQUFFQyxtRkFBZ0JBO0FBSHhCLEdBRGMsRUFNZDtBQUNFTixRQUFJLEVBQUUsV0FEUjtBQUVFSSxPQUFHLEVBQUUsMkNBRlA7QUFHRUMsUUFBSSxFQUFFRSw4RUFBV0E7QUFIbkIsR0FOYyxFQVdkO0FBQ0VQLFFBQUksRUFBRSxPQURSO0FBRUVJLE9BQUcsRUFBRSwyQ0FGUDtBQUdFQyxRQUFJLEVBQUU7QUFIUixHQVhjLENBQWhCO0FBa0JBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTyxXQUFPLEVBQUUsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLE1BQUUsRUFBQyxhQUZMO0FBR0UsTUFBRSxFQUFDLFNBSEw7QUFJRSxZQUFRLEVBQUMsR0FKWDtBQUtFLGtCQUFjLEVBQUMsS0FMakI7QUFNRSxnQkFBWSxFQUFDLFFBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFHRixPQUFPLENBQUNLLEdBQVIsQ0FBWSxVQUFDQyxJQUFELEVBQVU7QUFDckIsV0FDRSxNQUFDLHFEQUFEO0FBQVksT0FBQyxFQUFDLEdBQWQ7QUFBa0IsVUFBSSxFQUFFQSxJQUFJLENBQUNMLEdBQTdCO0FBQWtDLFlBQU0sRUFBQyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dLLElBQUksQ0FBQ1QsSUFBTCxLQUFjLE9BQWQsR0FDQyxNQUFDLG9EQUFEO0FBQVcsVUFBSSxFQUFDLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERCxHQUdDLE1BQUMsOEVBQUQ7QUFDRSxXQUFLLEVBQUMsT0FEUjtBQUVFLFVBQUksRUFBQyxJQUZQO0FBR0UsVUFBSSxFQUFFUyxJQUFJLENBQUNKLElBSGIsQ0FJRTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKSixDQURGO0FBY0QsR0FmQSxDQVJILENBREYsRUEwQkUsTUFBQyxxREFBRDtBQUFNLE1BQUUsRUFBQyxhQUFUO0FBQXVCLFNBQUssRUFBRTtBQUFFSyxlQUFTLEVBQUU7QUFBYixLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFRLEtBQUMsRUFBQyxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsa0JBQVQ7QUFBNEIsT0FBRyxFQUFDLFdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FERixFQVFFLE1BQUMsdURBQUQ7QUFBUSxRQUFJLEVBQUMsR0FBYjtBQUFpQixRQUFJLEVBQUMsT0FBdEI7QUFBOEIsa0JBQWMsRUFBQyxjQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dYLElBQUksQ0FBQ1MsR0FBTCxDQUFTLFVBQUNHLEdBQUQ7QUFBQSxXQUNSLE1BQUMscURBQUQ7QUFDRSxXQUFLLEVBQUMsYUFEUjtBQUVFLFVBQUksYUFBTUEsR0FBRyxDQUFDWCxJQUFWLENBRk47QUFHRSxnQkFBVSxFQUFDLHVCQUhiO0FBSUUsbUJBQWEsRUFBQyxXQUpoQjtBQUtFLGdCQUFVLEVBQUMsTUFMYjtBQU1FLGNBQVEsRUFBQyxJQU5YO0FBT0UsWUFBTSxFQUFFO0FBQ05ZLGFBQUssRUFBRSxTQUREO0FBRU5DLHNCQUFjLEVBQUU7QUFGVixPQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FZRSxNQUFDLHdEQUFEO0FBQ0UsYUFBTyxFQUFDLE1BRFY7QUFFRSxnQkFBVSxFQUFDLFFBRmI7QUFHRSxTQUFHLEVBQUVGLEdBQUcsQ0FBQ1YsRUFIWDtBQUlFLFdBQUssRUFBQyxhQUpSO0FBS0UsWUFBTSxFQUFFO0FBQ05XLGFBQUssRUFBRSxTQUREO0FBR05FLG9CQUFZLEVBQUU7QUFIUixPQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FXR0gsR0FBRyxDQUFDWCxJQUFKLENBQVNlLFdBQVQsRUFYSCxDQVpGLENBRFE7QUFBQSxHQUFULENBREgsQ0FSRixFQXNDRSxNQUFDLHVEQUFEO0FBQVEsS0FBQyxFQUFDLEdBQVY7QUFBYyxRQUFJLEVBQUMsR0FBbkI7QUFBdUIsa0JBQWMsRUFBQyxVQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUNFLGdCQUFZLEVBQUMsS0FEZjtBQUVFLFNBQUssRUFBQyxhQUZSO0FBR0UsV0FBTyxFQUFDLE9BSFY7QUFJRSxNQUFFLEVBQUMsUUFKTDtBQUtFLFVBQU0sRUFBRTtBQUNOQyxxQkFBZSxFQUFFLFNBRFg7QUFFTkosV0FBSyxFQUFFLFFBRkQ7QUFHTkssWUFBTSxFQUFFO0FBSEYsS0FMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLENBdENGLENBMUJGLENBREYsQ0FERjtBQXFGRCxDQTlJRDs7S0FBTXBCLEc7QUFnSlNBLGtFQUFmIiwiZmlsZSI6Ii4vY29tbW9uL05hdi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIENlbnRlcixcbiAgRmxleCxcbiAgTGlua0JveCxcbiAgTGluayBhcyBDaGFrcmFMaW5rLFxuICBTdGFjayxcbiAgQnV0dG9uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIGZhRmFjZWJvb2tTcXVhcmUsXG4gIGZhSW5zdGFncmFtLFxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiO1xuaW1wb3J0IFZlbm1vSWNvbiBmcm9tIFwiLi4vaWNvbnMvVmVubW9cIjtcblxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuXG5jb25zdCBEaWFnb25hbEJnID0gc3R5bGVkKEZsZXgpYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjEyMTIxIDUwJSAjZTJlMmUyIDUwJSk7XG5gO1xuXG5jb25zdCBOYXYgPSAoeyBjYXRlZ29yaWVzIH0pID0+IHtcbiAgY29uc3QgbmF2cyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIm5ld3NcIixcbiAgICAgIGlkOiBcIm5ld3NcIixcbiAgICAgIHNsdWc6IFwibmV3c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJzY2hlZHVsZVwiLFxuICAgICAgaWQ6IFwic2NoZWR1bGVcIixcbiAgICAgIHNsdWc6IFwic2NoZWR1bGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwidGVhbVwiLFxuICAgICAgaWQ6IFwidGVhbVwiLFxuICAgICAgc2x1ZzogXCJ0ZWFtXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImNvbnRhY3RcIixcbiAgICAgIGlkOiBcImNvbnRhY3RcIixcbiAgICAgIHNsdWc6IFwiY29udGFjdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJwaG90b3NcIixcbiAgICAgIGlkOiBcInBob3Rvc1wiLFxuICAgICAgc2x1ZzogXCJwaG90b3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwibW9yZVwiLFxuICAgICAgaWQ6IFwibW9yZVwiLFxuICAgICAgc2x1ZzogXCJtb3JlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInNob3BcIixcbiAgICAgIGlkOiBcInNob3BcIixcbiAgICAgIHNsdWc6IFwic2hvcFwiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3Qgc29jaWFscyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcImZhY2Vib29rXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3N0bGJvbWJlcnNydWdieVwiLFxuICAgICAgaWNvbjogZmFGYWNlYm9va1NxdWFyZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiaW5zdGFncmFtXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zdGxfYm9tYmVyc3JmYy9cIixcbiAgICAgIGljb246IGZhSW5zdGFncmFtLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ2ZW5tb1wiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vYWNjb3VudC52ZW5tby5jb20vdS9TVExCb21iZXJzUkZDXCIsXG4gICAgICBpY29uOiBcIlwiLFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2PlxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezB9PlxuICAgICAgICA8RmxleFxuICAgICAgICAgIG1pbkg9XCI1MHB4XCJcbiAgICAgICAgICBiZz1cImJyYW5kLmJsYWNrXCJcbiAgICAgICAgICBpZD1cInNvY2lhbHNcIlxuICAgICAgICAgIGZsZXhHcm93PVwiMVwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJlbmRcIlxuICAgICAgICAgIGFsaWduQ29udGVudD1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICB7c29jaWFscy5tYXAoKHBhZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxDaGFrcmFMaW5rIG09XCIyXCIgaHJlZj17cGFnZS51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIHtwYWdlLm5hbWUgPT09IFwidmVubW9cIiA/IChcbiAgICAgICAgICAgICAgICAgIDxWZW5tb0ljb24gc2l6ZT1cImxnXCIgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjJ4XCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17cGFnZS5pY29ufVxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19XG4gICAgICAgICAgICAgICAgICA+PC9Gb250QXdlc29tZUljb24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9DaGFrcmFMaW5rPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9GbGV4PlxuICAgICAgICA8RmxleCBiZz1cImJyYW5kLmxpZ2h0XCIgc3R5bGU9e3sgbWluSGVpZ2h0OiAxMDAgfX0+XG4gICAgICAgICAgPENlbnRlciB3PVwiMTAwcHhcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYH0+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIllvdXIgTmFtZVwiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICA8Q2VudGVyIGZsZXg9XCIyXCIgc2l6ZT1cIjE1MHB4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1ldmVubHlcIj5cbiAgICAgICAgICAgIHtuYXZzLm1hcCgobmF2KSA9PiAoXG4gICAgICAgICAgICAgIDxDaGFrcmFMaW5rXG4gICAgICAgICAgICAgICAgY29sb3I9XCJicmFuZC5ibGFja1wiXG4gICAgICAgICAgICAgICAgaHJlZj17YC8ke25hdi5uYW1lfWB9XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseT1cIkJpZyBTaG91bGRlcnMgRGlzcGxheVwiXG4gICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplPVwieGxcIlxuICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzIxMjEyMVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGlua0JveFxuICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBrZXk9e25hdi5pZH1cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYnJhbmQuYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMyMTIxMjFcIixcblxuICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IFwiM3B4IHNvbGlkICMyMTIxMjFcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge25hdi5uYW1lLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgPC9MaW5rQm94PlxuICAgICAgICAgICAgICA8L0NoYWtyYUxpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICA8Q2VudGVyIHA9XCI0XCIgZmxleD1cIjFcIiBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjhweFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiYnJhbmQubGlnaHRcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwic29saWRcIlxuICAgICAgICAgICAgICBiZz1cInRvbWF0b1wiXG4gICAgICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZTJlMmUyXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwidG9tYXRvXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCB0b21hdG9cIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRG9uYXRlIC8gRHVlc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./common/Nav.jsx\n");

/***/ })

})
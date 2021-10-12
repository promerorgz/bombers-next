webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sponsors/index.js":
/*!**************************************!*\
  !*** ./components/Sponsors/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/avatar */ \"./node_modules/@chakra-ui/avatar/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Image */ \"./common/Image.jsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/elbgi/Desktop/bombers/frontend/components/Sponsors/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar Sponsors = function Sponsors(_ref) {\n  var sponsors = _ref.sponsors;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n    as: \"h3\",\n    size: \"2xl\",\n    fontFamily: \"Big Shoulders Display\",\n    fontWeight: \"700\",\n    textTransform: \"uppercase\",\n    mb: \"8\",\n    textDecoration: \"underline\",\n    textUnderlineOffset: \"10px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, \"Sponsors\"), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__[\"Wrap\"], {\n    spacing: 8,\n    align: \"center\",\n    justifyContent: \"space-evenly\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, sponsors.map(function (sponsor) {\n    var image = _objectSpread(_objectSpread({}, sponsor.image), {}, {\n      alternativeText: sponsor.name\n    });\n\n    return sponsor.level === \"gold\" && __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__[\"WrapItem\"], {\n      key: sponsor.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 15\n      }\n    }, __jsx(_common_Image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      image: image,\n      size: \"3xs\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }\n    }));\n  })));\n};\n\n_c = Sponsors;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sponsors);\n\nvar _c;\n\n$RefreshReg$(_c, \"Sponsors\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcG9uc29ycy9pbmRleC5qcz83OTA3Il0sIm5hbWVzIjpbIlNwb25zb3JzIiwic3BvbnNvcnMiLCJtYXAiLCJzcG9uc29yIiwiaW1hZ2UiLCJhbHRlcm5hdGl2ZVRleHQiLCJuYW1lIiwibGV2ZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ2pDLFNBQ0UsbUVBQ0UsTUFBQyx5REFBRDtBQUNFLE1BQUUsRUFBQyxJQURMO0FBRUUsUUFBSSxFQUFDLEtBRlA7QUFHRSxjQUFVLEVBQUMsdUJBSGI7QUFJRSxjQUFVLEVBQUMsS0FKYjtBQUtFLGlCQUFhLEVBQUMsV0FMaEI7QUFNRSxNQUFFLEVBQUMsR0FOTDtBQU9FLGtCQUFjLEVBQUMsV0FQakI7QUFRRSx1QkFBbUIsRUFBQyxNQVJ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBYUUsTUFBQyxzREFBRDtBQUFNLFdBQU8sRUFBRSxDQUFmO0FBQWtCLFNBQUssRUFBQyxRQUF4QjtBQUFpQyxrQkFBYyxFQUFDLGNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFhO0FBQ3pCLFFBQU1DLEtBQUssbUNBQVFELE9BQU8sQ0FBQ0MsS0FBaEI7QUFBdUJDLHFCQUFlLEVBQUVGLE9BQU8sQ0FBQ0c7QUFBaEQsTUFBWDs7QUFFQSxXQUNFSCxPQUFPLENBQUNJLEtBQVIsS0FBa0IsTUFBbEIsSUFDRSxNQUFDLDBEQUFEO0FBQVUsU0FBRyxFQUFFSixPQUFPLENBQUNHLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHFEQUFEO0FBQU8sV0FBSyxFQUFFRixLQUFkO0FBQXFCLFVBQUksRUFBQyxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FGSjtBQU9ELEdBVkEsQ0FESCxDQWJGLENBREY7QUE2QkQsQ0E5QkQ7O0tBQU1KLFE7QUFnQ1NBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TcG9uc29ycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciB9IGZyb20gXCJAY2hha3JhLXVpL2F2YXRhclwiO1xuaW1wb3J0IHsgU3RhY2ssIEJveCwgV3JhcCwgV3JhcEl0ZW0sIEhlYWRpbmcgfSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi4vLi4vY29tbW9uL0ltYWdlXCI7XG5cbmNvbnN0IFNwb25zb3JzID0gKHsgc3BvbnNvcnMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGluZ1xuICAgICAgICBhcz1cImgzXCJcbiAgICAgICAgc2l6ZT1cIjJ4bFwiXG4gICAgICAgIGZvbnRGYW1pbHk9XCJCaWcgU2hvdWxkZXJzIERpc3BsYXlcIlxuICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgICAgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiXG4gICAgICAgIG1iPVwiOFwiXG4gICAgICAgIHRleHREZWNvcmF0aW9uPVwidW5kZXJsaW5lXCJcbiAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldD1cIjEwcHhcIlxuICAgICAgPlxuICAgICAgICBTcG9uc29yc1xuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPFdyYXAgc3BhY2luZz17OH0gYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWV2ZW5seVwiPlxuICAgICAgICB7c3BvbnNvcnMubWFwKChzcG9uc29yKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW1hZ2UgPSB7IC4uLnNwb25zb3IuaW1hZ2UsIGFsdGVybmF0aXZlVGV4dDogc3BvbnNvci5uYW1lIH07XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgc3BvbnNvci5sZXZlbCA9PT0gXCJnb2xkXCIgJiYgKFxuICAgICAgICAgICAgICA8V3JhcEl0ZW0ga2V5PXtzcG9uc29yLm5hbWV9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBpbWFnZT17aW1hZ2V9IHNpemU9XCIzeHNcIj48L0ltYWdlPlxuICAgICAgICAgICAgICA8L1dyYXBJdGVtPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9XcmFwPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BvbnNvcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sponsors/index.js\n");

/***/ })

})
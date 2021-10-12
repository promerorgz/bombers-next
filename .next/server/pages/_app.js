module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "GlobalContext", function() { return /* binding */ GlobalContext; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./lib/media.js
var media = __webpack_require__("q4pp");

// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__("qoWs");

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__("sLJp");

// CONCATENATED MODULE: ./theme/Button.js
const Button = {
  // The styles all button have in common
  baseStyle: {
    color: "brand.light",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: 0 // <-- border radius is same for all variants and sizes

  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4,
      // <-- px is short for paddingLeft and paddingRight
      py: 3 // <-- py is short for paddingTop and paddingBottom

    },
    md: {
      fontSize: "md",
      px: 6,
      // <-- these values are tokens from the design system
      py: 4 // <-- these values are tokens from the design system

    }
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "brand.light",
      color: "brand.light"
    },
    solid: {
      bg: "brand.medium",
      color: "brand.light"
    },
    rounded: {
      borderRadius: 12
    },
    "&:hover": {
      textDecoration: "none",
      color: "brand.dark"
    }
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline"
  }
};
/* harmony default export */ var theme_Button = (Button);
// CONCATENATED MODULE: ./theme/index.js
// 1. Import the extendTheme function

 // 2. Extend the theme to include custom colors, fonts, etc

/* harmony default export */ var theme = (Object(react_["extendTheme"])({
  components: {
    Button: theme_Button
  },
  styles: {
    html: {
      height: "100vh"
    }
  },
  colors: {
    brand: {
      superblack: "#000",
      black: "#212121",
      medium: "#404040",
      light: "#E2E2E2",
      white: "#fff"
    },
    black: {},
    gray: {
      light: "#303030",
      main: "#212121",
      dark: "#181818"
    },
    gradient: {
      main: "linear-gradient(90deg, rgba(24,24,24,1) 3%, rgba(56,56,56,1) 37%, rgba(53,53,53,1) 85%)"
    },
    shadow: {
      1: "box-shadow: 0px 4px 4px 0px #00000040"
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__("VAPu");

// CONCATENATED MODULE: ./pages/_app.js

var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









 // Store Strapi Global object in context

const GlobalContext = /*#__PURE__*/Object(external_react_["createContext"])({});
fontawesome_svg_core_["config"].autoAddCss = false;

const MyApp = _ref => {
  let {
    Component,
    pageProps,
    appProps
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["Component", "pageProps", "appProps"]);

  const {
    global
  } = pageProps;
  return __jsx(external_react_default.a.Fragment, null, __jsx(head_default.a, null, __jsx("link", {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }), __jsx("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossorigin: true
  }), __jsx("link", {
    rel: "shortcut icon",
    href: Object(media["a" /* getStrapiMedia */])(global.favicon)
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Staatliches"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@300;400;500;600;700;800;900&display=swap",
    rel: "stylesheet"
  }), __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"
  }), __jsx("script", {
    src: "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js"
  }), __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js"
  })), __jsx(GlobalContext.Provider, {
    value: global
  }, __jsx(react_["ChakraProvider"], {
    theme: theme
  }, __jsx(Component, pageProps))));
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949


MyApp.getInitialProps = async ctx => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await app_default.a.getInitialProps(ctx); // Fetch global site settings from Strapi
  // Pass the data to our page via props

  const [global, articles, categories, homepage, games, players, coaches] = await Promise.all([Object(api["a" /* fetchAPI */])("/global"), Object(api["a" /* fetchAPI */])("/articles?status=published"), Object(api["a" /* fetchAPI */])("/categories"), Object(api["a" /* fetchAPI */])("/homepage"), Object(api["a" /* fetchAPI */])("/games"), Object(api["a" /* fetchAPI */])("/players"), Object(api["a" /* fetchAPI */])("/coaches")]);
  return _objectSpread(_objectSpread({}, appProps), {}, {
    pageProps: {
      global,
      articles,
      categories,
      homepage,
      games,
      players,
      coaches
    }
  });
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "LZ34":
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "VAPu":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "q4pp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getStrapiMedia; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("qoWs");

function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith("/") ? Object(_api__WEBPACK_IMPORTED_MODULE_0__[/* getStrapiURL */ "b"])(media.url) : media.url;
  return imageUrl;
}

/***/ }),

/***/ "qoWs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getStrapiURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchAPI; });
function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1339"}${path}`;
} // Helper to make GET requests to Strapi

async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

/***/ }),

/***/ "sLJp":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });
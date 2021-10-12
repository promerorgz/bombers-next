module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IB+j");


/***/ }),

/***/ "IB+j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wrS0");
/* harmony import */ var _chakra_ui_accordion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_accordion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("m7mU");
/* harmony import */ var _chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k7wm");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Games_GameInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("h/tH");
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






const Schedule = ({
  upcoming
}) => {
  const formatDateTime = dateTime => {
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "short"
    }) + " " + date.toLocaleDateString("en-US", {
      month: "short"
    }) + " " + date.toLocaleDateString("en-US", {
      day: "2-digit"
    });
    const time = date.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });
    return {
      date: formattedDate,
      time
    };
  };

  const isBombers = team => {
    return team === "Bombers";
  };

  const isHome = homeTeam => {
    return isBombers(homeTeam);
  };

  return __jsx(_chakra_ui_accordion__WEBPACK_IMPORTED_MODULE_0__["Accordion"], {
    allowMultiple: true,
    defaultIndex: [0]
  }, upcoming.map(game => {
    var _game$home, _game$home2, _game$away, _game$away2, _game$home3;

    const gameInfoProps = {
      homeTeam: {
        name: game.home.team_name,
        logo: game.home.logo,
        score: game.home_score
      },
      awayTeam: {
        name: game.away.team_name,
        logo: game.away.logo,
        score: game.away_score
      },
      date: game.date,
      location: game.location
    };
    return __jsx(_chakra_ui_accordion__WEBPACK_IMPORTED_MODULE_0__["AccordionItem"], {
      key: game.slug
    }, __jsx(_chakra_ui_accordion__WEBPACK_IMPORTED_MODULE_0__["AccordionButton"], {
      _expanded: {
        bg: "brand.800",
        color: "brand.400"
      }
    }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      direction: "row",
      textAlign: "left",
      alignItems: "center",
      justifyContent: "start",
      w: "100%"
    }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], null, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      m: 0,
      fontWeight: "light",
      fontSize: "md",
      textTransform: "uppercase",
      fontFamily: "body"
    }, formatDateTime(game.date).date)), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
      size: "xl",
      orientation: "vertical"
    }), __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      flex: "1"
    }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      m: 0,
      fontWeight: "bold",
      fontSize: "lg",
      textTransform: "uppercase",
      fontFamily: "body"
    }, isHome(game === null || game === void 0 ? void 0 : (_game$home = game.home) === null || _game$home === void 0 ? void 0 : _game$home.team_name) ? `${game === null || game === void 0 ? void 0 : (_game$home2 = game.home) === null || _game$home2 === void 0 ? void 0 : _game$home2.team_name} - ${game === null || game === void 0 ? void 0 : (_game$away = game.away) === null || _game$away === void 0 ? void 0 : _game$away.team_name}` : `${game === null || game === void 0 ? void 0 : (_game$away2 = game.away) === null || _game$away2 === void 0 ? void 0 : _game$away2.team_name} @ ${game === null || game === void 0 ? void 0 : (_game$home3 = game.home) === null || _game$home3 === void 0 ? void 0 : _game$home3.team_name}`)), __jsx(_chakra_ui_accordion__WEBPACK_IMPORTED_MODULE_0__["AccordionIcon"], null))), __jsx(_chakra_ui_accordion__WEBPACK_IMPORTED_MODULE_0__["AccordionPanel"], {
      pb: 4
    }, __jsx(_components_Games_GameInfo__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], gameInfoProps)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h/tH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@chakra-ui/layout"
var layout_ = __webpack_require__("k7wm");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/avatar"
var avatar_ = __webpack_require__("m7mU");

// CONCATENATED MODULE: ./components/Games/Team.js
var __jsx = external_react_default.a.createElement;




const Team = ({
  team: {
    name,
    score,
    logo
  },
  away,
  preview
}) => {
  const uploadsUrl = url => `${"https://bombers-backend.herokuapp.com"}${url}`;

  const direction = away ? "row-reverse" : "row";
  return __jsx(external_react_default.a.Fragment, null, __jsx(layout_["Flex"], {
    justifyContent: "space-between",
    alignItems: "center",
    direction: direction,
    width: "100%"
  }, __jsx(layout_["Flex"], {
    justifyContent: "space-between",
    alignItems: "center",
    direction: preview ? "row-reverse" : direction
  }, __jsx(layout_["Flex"], {
    flexGrow: "1"
  }, __jsx(layout_["Text"], {
    fontWeight: name === "Bombers" ? "extrabold" : "normal",
    my: 0,
    mx: 2,
    fontSize: "2xl",
    fontFamily: "Big Shoulders Display",
    textTransform: preview ? "uppercase" : "capitalize",
    color: preview ? "white" : "inherit"
  }, name)), __jsx(layout_["Box"], {
    m: 4
  }, __jsx(avatar_["Avatar"], {
    bg: "brand.200" // showBorder
    ,
    size: "sm",
    name: name,
    src: uploadsUrl((logo === null || logo === void 0 ? void 0 : logo.url) || "")
  }))), score && __jsx(layout_["Box"], null, __jsx(layout_["Text"], {
    color: "tomato",
    fontWeight: "extrabold",
    my: 0,
    mx: 2,
    fontSize: "2xl",
    fontFamily: "Big Shoulders Display",
    textTransform: "capitalize" // bgColor={preview ? "#e2e2e2" : "none"}
    ,
    p: 2
  }, score))));
};

/* harmony default export */ var Games_Team = (Team);
// CONCATENATED MODULE: ./components/Games/GameInfo.js
var GameInfo_jsx = external_react_default.a.createElement;




const GameInfo = ({
  homeTeam,
  awayTeam,
  date,
  location,
  preview,
  division
}) => {
  const formatDateTime = (dateTime, format = "") => {
    const date = new Date(dateTime);
    const formats = {
      short: date.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit"
      })
    };
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "short"
    }) + " " + date.toLocaleDateString("en-US", {
      month: "short"
    }) + " " + date.toLocaleDateString("en-US", {
      day: "2-digit"
    });
    const time = date.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });
    return {
      date: format === "" ? formattedDate : formats[format],
      time
    };
  };

  return preview ? GameInfo_jsx(layout_["Stack"], {
    direction: "row"
  }, GameInfo_jsx(layout_["Stack"], {
    direction: "column",
    justifyContent: "start",
    alignItems: "start" // pt={8}

  }, GameInfo_jsx(layout_["Text"], {
    as: "p",
    color: "brand.medium",
    fontFamily: "Big Shoulders Display",
    textTransform: "uppercase",
    fontWeight: "bold",
    m: "0"
  }, division, " - ", location, " - ", formatDateTime(date, "short").date), GameInfo_jsx(Games_Team, {
    team: homeTeam,
    preview: true
  }), GameInfo_jsx(Games_Team, {
    team: awayTeam,
    preview: true
  }))) : GameInfo_jsx(layout_["Stack"], {
    direction: "row",
    justifyContent: "center",
    alignItems: "start",
    pt: 8
  }, GameInfo_jsx(Games_Team, {
    team: homeTeam,
    preview: preview
  }), !homeTeam.score && GameInfo_jsx(layout_["Stack"], {
    bg: !preview ? "#404040" : "#e2e2e2",
    borderRadius: "8px",
    p: "2",
    fontSize: "xs",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center"
  }, GameInfo_jsx(layout_["Box"], null, formatDateTime(date).time || "FT"), GameInfo_jsx(layout_["Flex"], {
    w: "100%",
    justifyContent: "center"
  }, GameInfo_jsx(layout_["Box"], {
    p: "2",
    fontSize: "xs"
  }, location))), GameInfo_jsx(Games_Team, {
    team: awayTeam,
    away: true,
    preview: preview
  }));
};

/* harmony default export */ var Games_GameInfo = __webpack_exports__["a"] = (GameInfo);

/***/ }),

/***/ "k7wm":
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/layout");

/***/ }),

/***/ "m7mU":
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/avatar");

/***/ }),

/***/ "wrS0":
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/accordion");

/***/ })

/******/ });
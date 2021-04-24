/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let isMobile = {\r\n\tAndroid: function() {return navigator.userAgent.match(/Android/i);},\r\n\tBlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},\r\n\tiOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},\r\n\tOpera: function() {return navigator.userAgent.match(/Opera Mini/i);},\r\n\tWindows: function() {return navigator.userAgent.match(/IEMobile/i);},\r\n\tany: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}\r\n};\r\n\r\n\r\n$(document).ready(function() {\r\n\t$(\".questionnaire-content__slider\").slick({\r\n\t\tslidesToShow: 4,\r\n\t\tslidesToScroll: 4,\r\n\r\n\t\tresponsive:[\r\n\t\t\t{\r\n\t\t\t\tbreakpoint: 900,\r\n\t\t\t\tsettings: {\r\n\t\t\t\t\tslidesToShow:3,\r\n\t\t\t\t\tslidesToScroll:3,\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t{\r\n\t\t\t\tbreakpoint: 680,\r\n\t\t\t\tsettings: {\r\n\t\t\t\t\tslidesToShow:2,\r\n\t\t\t\t\tslidesToScroll:2,\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t{\r\n\t\t\t\tbreakpoint: 500,\r\n\t\t\t\tsettings: {\r\n\t\t\t\t\tslidesToShow:1,\r\n\t\t\t\t\tslidesToScroll:1,\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t]\r\n\t});\r\n\tlet input = $(\".one\");\r\n\tlet title = $(\".setting-info__warning-item__title\");\r\n\tlet check = $(\".setting-info__feature-form__item-input__checkbox\");\r\n\tlet preferences = $(\".header-sorting__content-category__input\");\r\n\r\n\tpreferences.click(function() {\r\n\t\tif (preferences.is(\":checked\")) {\r\n\t\t\t$(\".title8\").addClass(\"active\");\r\n\t\t\t$(\".title-8-span\").addClass(\"active\");\r\n\t\t\t$(\".title8\").text(\"sexual preference\");\r\n\t\t} else {\r\n\t\t\t$(\".title8\").removeClass(\"active\");\r\n\t\t\t$(\".title-8-span\").removeClass(\"active\");\r\n\t\t\t$(\".title8\").text(\"Add sexual preference\");\r\n\t\t\t$(\".item-12, .setting-info__about-form__btn\").removeClass(\"active\");\r\n\t\t}\r\n\t});\r\n\r\n\tinput.on('input', function(){\r\n\t\tif ($(\".title1\").hasClass(\"active\") && $(\".title2\").hasClass(\"active\") && $(\".title3\").hasClass(\"active\") && $(\".title4\").hasClass(\"active\") && $(\".title5\").hasClass(\"active\") && $(\".title6\").hasClass(\"active\") && $(\".title7\").hasClass(\"active\") && $(\".title8\").hasClass(\"active\") && $(\".title9\").hasClass(\"active\") && $(\".title10\").hasClass(\"active\") && $(\".title11\").hasClass(\"active\")){\r\n\t\t\t$(\".item-12, .setting-info__about-form__btn\").addClass(\"active\");\r\n\t\t\t// if {\r\n\t\t\tif ($(this).attr('id') == \"one\") {\r\n\t\t\t\tif ($(this).val() == \"\") {\r\n\t\t\t\t\t$(\".title1\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title-1-span\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title1\").text(\"Please enter your name\");\r\n\t\t\t\t\t$(\".item-12, .setting-info__about-form__btn\").removeClass(\"active\");\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$(\".title1\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title-1-span\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title1\").text(\"name\");\r\n\t\t\t\t}\r\n\t\t\t} else if ($(this).attr('id') == \"four\") {\r\n\t\t\t\tif ($(this).val() == \"\") {\r\n\t\t\t\t\t$(\".title4\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title-4-span\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title4\").text(\"Please enter your age\");\r\n\t\t\t\t\t$(\".item-12, .setting-info__about-form__btn\").removeClass(\"active\");\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$(\".title4\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title-4-span\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title4\").text(\"age\");\r\n\r\n\t\t\t\t}\r\n\t\t\t}else if ($(this).attr('id') == \"two\") {\r\n\t\t\t\tif ($(this).val() == \"\") {\r\n\t\t\t\t\t$(\".title5\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title-5-span\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title5\").text(\"Indicate your height\");\r\n\t\t\t\t\t$(\".item-12, .setting-info__about-form__btn\").removeClass(\"active\");\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$(\".title5\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title-5-span\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title5\").text(\"height\");\r\n\t\t\t\t}\r\n\t\t\t} else if ($(this).attr('id') == \"five\") {\r\n\t\t\t\tif ($(this).val() == \"\") {\r\n\t\t\t\t\t$(\".title6\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title-6-span\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title6\").text(\"Enter your city\");\r\n\t\t\t\t\t$(\".item-12, .setting-info__about-form__btn\").removeClass(\"active\");\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$(\".title6\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title-6-span\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title6\").text(\"city\");\r\n\t\t\t\t}\r\n\t\t\t}  else if ($(this).attr('id') == \"six\") {\r\n\t\t\t\tif ($(this).val() == \"\") {\r\n\t\t\t\t\t$(\".title9\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title-9-span\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title9\").text(\"Tell us about yourself\");\r\n\t\t\t\t\t$(\".item-12, .setting-info__about-form__btn\").removeClass(\"active\");\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$(\".title9\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title-9-span\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title9\").text(\"About myself\");\r\n\t\t\t\t}\r\n\t\t\t} else if ($(this).attr('id') == \"seven\") {\r\n\t\t\t\tif ($(this).val() == \"\") {\r\n\t\t\t\t\t$(\".title10\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title-10-span\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title10\").text(\"Enter your e-mail\");\r\n\t\t\t\t\t$(\".item-12, .setting-info__about-form__btn\").removeClass(\"active\");\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$(\".title10\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title-10-span\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title10\").text(\"e-mail\");\r\n\t\t\t\t}\r\n\t\t\t} else if ($(this).attr('id') == \"eight\") {\r\n\t\t\t\tif ($(this).val() == \"\") {\r\n\t\t\t\t\t$(\".title11\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title11\").text(\"Enter your phone\");\r\n\t\t\t\t\t$(\".item-12, .setting-info__about-form__btn\").removeClass(\"active\");\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$(\".title11\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title11\").text(\"phone\");\r\n\t\t\t\t}\r\n\t\t\t} \r\n\t\t} else {\r\n\t\t\tif ($(this).attr('id') == \"one\") {\r\n\t\t\t\tif ($(this).val() == \"\") {\r\n\t\t\t\t\t$(\".title1\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title-1-span\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title1\").text(\"Please enter your name\");\r\n\t\t\t\t\t$(\".item-12, .setting-info__about-form__btn\").removeClass(\"active\");\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$(\".title1\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title-1-span\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title1\").text(\"name\");\r\n\t\t\t\t}\r\n\t\t\t} else if ($(this).attr('id') == \"four\") {\r\n\t\t\t\tif ($(this).val() == \"\") {\r\n\t\t\t\t\t$(\".title4\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title-4-span\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title4\").text(\"Please enter your age\");\r\n\t\t\t\t\t$(\".item-12, .setting-info__about-form__btn\").removeClass(\"active\");\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$(\".title4\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title-4-span\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title4\").text(\"age\");\r\n\r\n\t\t\t\t}\r\n\t\t\t}else if ($(this).attr('id') == \"two\") {\r\n\t\t\t\tif ($(this).val() == \"\") {\r\n\t\t\t\t\t$(\".title5\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title-5-span\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title5\").text(\"Indicate your height\");\r\n\t\t\t\t\t$(\".item-12, .setting-info__about-form__btn\").removeClass(\"active\");\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$(\".title5\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title-5-span\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title5\").text(\"height\");\r\n\t\t\t\t}\r\n\t\t\t} else if ($(this).attr('id') == \"five\") {\r\n\t\t\t\tif ($(this).val() == \"\") {\r\n\t\t\t\t\t$(\".title6\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title-6-span\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title6\").text(\"Enter your city\");\r\n\t\t\t\t\t$(\".item-12, .setting-info__about-form__btn\").removeClass(\"active\");\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$(\".title6\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title-6-span\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title6\").text(\"city\");\r\n\t\t\t\t}\r\n\t\t\t}  else if ($(this).attr('id') == \"six\") {\r\n\t\t\t\tif ($(this).val() == \"\") {\r\n\t\t\t\t\t$(\".title9\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title-9-span\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title9\").text(\"Tell us about yourself\");\r\n\t\t\t\t\t$(\".item-12, .setting-info__about-form__btn\").removeClass(\"active\");\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$(\".title9\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title-9-span\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title9\").text(\"About myself\");\r\n\t\t\t\t}\r\n\t\t\t} else if ($(this).attr('id') == \"seven\") {\r\n\t\t\t\tif ($(this).val() == \"\") {\r\n\t\t\t\t\t$(\".title10\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title-10-span\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title10\").text(\"Enter your e-mail\");\r\n\t\t\t\t\t$(\".item-12, .setting-info__about-form__btn\").removeClass(\"active\");\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$(\".title10\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title-10-span\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title10\").text(\"e-mail\");\r\n\t\t\t\t}\r\n\t\t\t} else if ($(this).attr('id') == \"eight\") {\r\n\t\t\t\tif ($(this).val() == \"\") {\r\n\t\t\t\t\t$(\".title11\").removeClass(\"active\");\r\n\t\t\t\t\t$(\".title11\").text(\"Enter your phone\");\r\n\t\t\t\t\t$(\".item-12, .setting-info__about-form__btn\").removeClass(\"active\");\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$(\".title11\").addClass(\"active\");\r\n\t\t\t\t\t$(\".title11\").text(\"phone\");\r\n\t\t\t\t}\r\n\t\t\t} \r\n\t\t}\r\n\r\n\t\t// }\r\n\t\t\r\n\t});\r\n\r\n\t$(\".label-1\").click(function() {\r\n\t\t$(\".title2\").addClass(\"active\");\r\n\t\t$(\".title-2-span\").addClass(\"active\");\r\n\t\t$(\".title2\").text(\"10 photos\");\r\n\t});\r\n\t$(\".label-2\").click(function() {\r\n\t\t$(\".title3\").addClass(\"active\");\r\n\t\t$(\".title-3-span\").addClass(\"active\");\r\n\t\t$(\".title3\").text(\"Video penetration\");\r\n\t\t$(\".item-12, .setting-info__about-form__btn\").removeClass(\"active\");\r\n\r\n\t});\r\n\r\n\t\r\n\tcheck.click(function() {\r\n\t\tif (check.is(\":checked\")) {\r\n\t\t\t$(\".title7\").addClass(\"active\");\r\n\t\t\t$(\".title-7-span\").addClass(\"active\");\r\n\t\t\t$(\".title7\").text(\"Your location\");\r\n\t\t} else {\r\n\t\t\t$(\".title7\").removeClass(\"active\");\r\n\t\t\t$(\".title-7-span\").removeClass(\"active\");\r\n\t\t\t$(\".title7\").text(\"Are you in Dubai now?\");\r\n\t\t\t$(\".item-12, .setting-info__about-form__btn\").removeClass(\"active\");\r\n\t\t\t\r\n\t\t}\r\n\t});\r\n\t\r\n\r\n\r\n\t\r\n\r\n\t$(\".setting-info__feature-preferences__top-icon\").click(function() {\r\n\t\t$(\".setting-info__feature-preferences__list\").toggleClass(\"open\");\r\n\t});\r\n\r\n\tlet body = $('body');\r\n\tif (isMobile.any()) {\r\n\t\tbody.addClass(\"touch\");\r\n\t\tlet arrow = $('.header-sorting__title');\r\n\t\tarrow.click(function() {\r\n\t\t\t$(this).toggleClass(\"active\");\r\n\t\t\tlet menu = $(\".header-sorting__content\")\r\n\t\t\tmenu.toggleClass(\"open\");\r\n\t\t});\r\n\t} else{\r\n\t\tbody.addClass('mouse');\r\n\t};\r\n\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });
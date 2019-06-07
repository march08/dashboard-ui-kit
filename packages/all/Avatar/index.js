(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"avatar":"avatar","avatar-content":"avatar-content","avatar-name":"avatar-name","avatar-text-top":"avatar-text-top","avatar-text-bottom":"avatar-text-bottom","avatar-image-wrapper":"avatar-image-wrapper","avatar-left-el":"avatar-left-el","avatar-right-el":"avatar-right-el","avatar-placeholder":"avatar-placeholder","avatar-image":"avatar-image","avatar-image-multi-container":"avatar-image-multi-container","s2":"s2","s3":"s3","s4":"s4","avatar-sm":"avatar-sm","avatar-lg":"avatar-lg","avatar-xl":"avatar-xl","avatar-xxl":"avatar-xxl","avatar-jumbo":"avatar-jumbo"};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(1);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./src/Avatar/styles.scss
var styles = __webpack_require__(2);

// CONCATENATED MODULE: ./src/Avatar/AvatarImage.tsx
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



var AvatarImageMulti = function (props) {
    var imgUrl = props.imgUrl, imgProps = props.imgProps, name = props.name, rest = __rest(props, ["imgUrl", "imgProps", "name"]);
    return (
    /* GROUPS, rendering multiple images */
    external_react_["createElement"]("div", __assign({ className: external_classnames_default()('avatar-image-multi-container', {
            s2: imgUrl.length === 2,
            s3: imgUrl.length === 3,
            s4: imgUrl.length >= 4,
        }) }, rest), imgUrl.slice(0, 4).map(function (url) { return (external_react_["createElement"]("img", __assign({ key: url, alt: typeof name === 'string' ? name : '', className: 'avatar-image', src: url }, imgProps))); })));
};
AvatarImageMulti.displayName = 'AvatarImageMulti';
var AvatarImageSingle = function (props) {
    var imgUrl = props.imgUrl, name = props.name;
    return (external_react_["createElement"]("img", { alt: typeof name === 'string' ? name : '', className: 'avatar-image', src: imgUrl }));
};
AvatarImageSingle.defaultProps = {
    name: null,
};
AvatarImageSingle.displayName = 'AvatarImageSingle';

// CONCATENATED MODULE: ./src/Avatar/index.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return Avatar; });
/* concated harmony reexport AvatarImageMulti */__webpack_require__.d(__webpack_exports__, "AvatarImageMulti", function() { return AvatarImageMulti; });
/* concated harmony reexport AvatarImageSingle */__webpack_require__.d(__webpack_exports__, "AvatarImageSingle", function() { return AvatarImageSingle; });
var Avatar_assign = (undefined && undefined.__assign) || function () {
    Avatar_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Avatar_assign.apply(this, arguments);
};
var Avatar_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





var Avatar = function (_a) {
    var _b, _c;
    var name = _a.name, imgUrl = _a.imgUrl, avatarPlaceholder = _a.avatarPlaceholder, textTop = _a.textTop, className = _a.className, rightEl = _a.rightEl, leftEl = _a.leftEl, textBottom = _a.textBottom, sm = _a.sm, lg = _a.lg, xl = _a.xl, xxl = _a.xxl, jumbo = _a.jumbo, rest = Avatar_rest(_a, ["name", "imgUrl", "avatarPlaceholder", "textTop", "className", "rightEl", "leftEl", "textBottom", "sm", "lg", "xl", "xxl", "jumbo"]);
    return (external_react_["createElement"]("span", Avatar_assign({ className: external_classnames_default()('avatar', className, (_b = {},
            _b['avatar-sm'] = sm,
            _b['avatar-lg'] = lg,
            _b['avatar-xl'] = xl,
            _b['avatar-xxl'] = xxl,
            _b['avatar-jumbo'] = jumbo,
            _b)) }, rest),
        external_react_["createElement"]("span", { className: external_classnames_default()('avatar-image-wrapper') },
            imgUrl ? (Array.isArray(imgUrl) ? (external_react_["createElement"](AvatarImageMulti, { imgUrl: imgUrl })) : (external_react_["createElement"](AvatarImageSingle, { imgUrl: imgUrl }))) : (external_react_["createElement"]("span", { className: external_classnames_default()('avatar-placeholder', avatarPlaceholder && (_c = {},
                    _c["bg-" + avatarPlaceholder.color] = avatarPlaceholder.color,
                    _c)) }, avatarPlaceholder && avatarPlaceholder.content)),
            rightEl && (external_react_["createElement"]("span", { className: 'avatar-right-el' }, rightEl)),
            leftEl && (external_react_["createElement"]("span", { className: 'avatar-left-el' }, leftEl))),
        (name || textTop || textBottom) && (external_react_["createElement"]("span", { className: 'avatar-content' },
            textTop && (external_react_["createElement"]("span", { className: 'avatar-text-top' }, textTop)),
            name && (external_react_["createElement"]("span", { className: 'avatar-name' }, name)),
            textBottom && (external_react_["createElement"]("span", { className: 'avatar-text-bottom' }, textBottom))))));
};
Avatar.displayName = 'Avatar';
/* harmony default export */ var src_Avatar = __webpack_exports__["default"] = (Avatar);


/***/ })
/******/ ]);
});
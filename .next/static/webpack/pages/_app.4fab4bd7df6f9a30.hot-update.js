"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav/NavLink/index.tsx":
/*!******************************************!*\
  !*** ./components/Nav/NavLink/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavLink; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction NavLink(param1) {\n    var base = param1.base, directories = param1.directories, children = param1.children;\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var sections = router.pathname.split(\"/\").slice(1);\n    var isDirectory = base.replace(\"/\", \"\") === sections[0];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-left mx-auto w-4/6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"\".concat(base).concat(directories.length > 0 ? directories[0] : \"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"text-white font-bold text-3xl \".concat(isDirectory ? \"text-fuchsia-500\" : \"hover:text-fuchsia-400\"),\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/home/ben/Code/Torque-dApp/components/Nav/NavLink/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ben/Code/Torque-dApp/components/Nav/NavLink/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"ml-10 \".concat(isDirectory ? directories.length > 0 ? \"block mt-3 space-y-3\" : \"block\" : \"hidden\"),\n                children: directories.map(function(param, index) {\n                    var _param = _slicedToArray(param, 2), directoryUrl = _param[0], directoryName = _param[1];\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"\".concat(base).concat(directoryUrl),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"text-neutral-400 font-bold text-2xl \".concat(sections[1] === directoryUrl ? \"text-neutral-500\" : \"hover:text-neutral-500\"),\n                                children: directoryName.charAt(0).toUpperCase() + directoryName.slice(1)\n                            }, void 0, false, {\n                                fileName: \"/home/ben/Code/Torque-dApp/components/Nav/NavLink/index.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/ben/Code/Torque-dApp/components/Nav/NavLink/index.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 25\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"/home/ben/Code/Torque-dApp/components/Nav/NavLink/index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/ben/Code/Torque-dApp/components/Nav/NavLink/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ben/Code/Torque-dApp/components/Nav/NavLink/index.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this));\n};\n_s(NavLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NavLink;\nvar _c;\n$RefreshReg$(_c, \"NavLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9OYXZMaW5rL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEI7QUFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDLE1BQTZGLEVBQUUsQ0FBQztRQUEvRkMsSUFBSSxHQUFMLE1BQTZGLENBQTVGQSxJQUFJLEVBQUVDLFdBQVcsR0FBbEIsTUFBNkYsQ0FBdEZBLFdBQVcsRUFBRUMsUUFBUSxHQUE1QixNQUE2RixDQUF6RUEsUUFBUTs7O0lBQ3hELEdBQUssQ0FBQ0MsTUFBTSxHQUFHTCxzREFBUztJQUN4QixHQUFLLENBQUNNLFFBQVEsR0FBR0QsTUFBTSxDQUFDRSxRQUFRLENBQUNDLEtBQUssQ0FBQyxDQUFHLElBQUVDLEtBQUssQ0FBQyxDQUFDO0lBRW5ELEdBQUssQ0FBQ0MsV0FBVyxHQUFHUixJQUFJLENBQUNTLE9BQU8sQ0FBQyxDQUFHLElBQUUsQ0FBRSxPQUFNTCxRQUFRLENBQUMsQ0FBQztJQUV4RCxNQUFNLDZFQUNETSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUF5Qjs7d0ZBQ25DZCxrREFBSTtnQkFBQ2UsSUFBSSxFQUFHLEdBQVNYLE1BQTRDLENBQW5ERCxJQUFJLEVBQWdELE9BQTdDQyxXQUFXLENBQUNZLE1BQU0sR0FBRyxDQUFDLEdBQUdaLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBRTtzR0FDN0RhLENBQUM7b0JBQUNILFNBQVMsRUFBRyxDQUE4QixnQ0FBOEQsT0FBNURILFdBQVcsR0FBRyxDQUFrQixvQkFBRyxDQUF3Qjs4QkFBS04sUUFBUTs7Ozs7Ozs7Ozs7d0ZBRTFIYSxDQUFFO2dCQUFDSixTQUFTLEVBQUcsQ0FBTSxRQUF1RixPQUFyRkgsV0FBVyxHQUFJUCxXQUFXLENBQUNZLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBc0Isd0JBQUcsQ0FBTyxTQUFJLENBQVE7MEJBQ3ZHWixXQUFXLENBQUNlLEdBQUcsQ0FBQyxRQUFRLFFBQXdCQyxLQUFLOzJEQUFuQ0MsWUFBWSxjQUFFQyxhQUFhO2tDQUMxQyxNQUFNLCtEQUFMQyxDQUFFOzhHQUNFdkIsa0RBQUk7NEJBQUNlLElBQUksRUFBRyxHQUFTTSxNQUFZLENBQW5CbEIsSUFBSSxFQUFnQixPQUFia0IsWUFBWTtrSEFDN0JKLENBQUM7Z0NBQUNILFNBQVMsRUFBRyxDQUFvQyxzQ0FBK0UsT0FBN0VQLFFBQVEsQ0FBQyxDQUFDLE1BQU1jLFlBQVksR0FBRyxDQUFrQixvQkFBRyxDQUF3QjswQ0FDNUhDLGFBQWEsQ0FBQ0UsTUFBTSxDQUFDLENBQUMsRUFBRUMsV0FBVyxLQUFLSCxhQUFhLENBQUNaLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozt1QkFIakVVLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV2xDLENBQUM7R0F4QnVCbEIsT0FBTzs7UUFDWkQsa0RBQVM7OztLQURKQyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2L05hdkxpbmsvaW5kZXgudHN4PzA1NDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZMaW5rKHtiYXNlLCBkaXJlY3RvcmllcywgY2hpbGRyZW59OiB7YmFzZTogc3RyaW5nOyBkaXJlY3RvcmllczogW3N0cmluZywgc3RyaW5nXVtdOyBjaGlsZHJlbjogYW55fSkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHNlY3Rpb25zID0gcm91dGVyLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5zbGljZSgxKTtcblxuICAgIGNvbnN0IGlzRGlyZWN0b3J5ID0gYmFzZS5yZXBsYWNlKFwiL1wiLCBcIlwiKSA9PT0gc2VjdGlvbnNbMF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdCBteC1hdXRvIHctNC82XCI+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgJHtiYXNlfSR7ZGlyZWN0b3JpZXMubGVuZ3RoID4gMCA/IGRpcmVjdG9yaWVzWzBdIDogXCJcIn1gfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LTN4bCAke2lzRGlyZWN0b3J5ID8gXCJ0ZXh0LWZ1Y2hzaWEtNTAwXCIgOiBcImhvdmVyOnRleHQtZnVjaHNpYS00MDBcIn1gfT57Y2hpbGRyZW59PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YG1sLTEwICR7aXNEaXJlY3RvcnkgPyAoZGlyZWN0b3JpZXMubGVuZ3RoID4gMCA/IFwiYmxvY2sgbXQtMyBzcGFjZS15LTNcIiA6IFwiYmxvY2tcIikgOiBcImhpZGRlblwifWB9PlxuICAgICAgICAgICAgICAgIHtkaXJlY3Rvcmllcy5tYXAoKFtkaXJlY3RvcnlVcmwsIGRpcmVjdG9yeU5hbWVdLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtiYXNlfSR7ZGlyZWN0b3J5VXJsfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YHRleHQtbmV1dHJhbC00MDAgZm9udC1ib2xkIHRleHQtMnhsICR7c2VjdGlvbnNbMV0gPT09IGRpcmVjdG9yeVVybCA/IFwidGV4dC1uZXV0cmFsLTUwMFwiIDogXCJob3Zlcjp0ZXh0LW5ldXRyYWwtNTAwXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXJlY3RvcnlOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZGlyZWN0b3J5TmFtZS5zbGljZSgxKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJOYXZMaW5rIiwiYmFzZSIsImRpcmVjdG9yaWVzIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJzZWN0aW9ucyIsInBhdGhuYW1lIiwic3BsaXQiLCJzbGljZSIsImlzRGlyZWN0b3J5IiwicmVwbGFjZSIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJsZW5ndGgiLCJhIiwidWwiLCJtYXAiLCJpbmRleCIsImRpcmVjdG9yeVVybCIsImRpcmVjdG9yeU5hbWUiLCJsaSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav/NavLink/index.tsx\n");

/***/ })

});
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

/***/ "./components/Nav/SideNav/index.tsx":
/*!******************************************!*\
  !*** ./components/Nav/SideNav/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _utils_useNavState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/useNavState */ \"./utils/useNavState.tsx\");\n/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NavLink */ \"./components/Nav/NavLink/index.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_logo1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../images/logo1.png */ \"./images/logo1.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction SideNav() {\n    _s();\n    var account = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)().account;\n    var ref = _slicedToArray((0,_utils_useNavState__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), 2), navState = ref[0], setNavState = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"fixed top-0 h-full w-80 bg-neutral-900 p-5 xl:glow xl:left-0 left-[-20rem] \".concat(navState ? \"!left-0 !glow\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                xmlns: \"http://www.w3.org/2000/svg\",\n                className: \"w-12 mb-8 cursor-pointer xl:hidden\",\n                fill: \"none\",\n                viewBox: \"0 0 24 24\",\n                stroke: \"white\",\n                onClick: function(e) {\n                    return setNavState(false);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    strokeLinecap: \"round\",\n                    strokeLinejoin: \"round\",\n                    strokeWidth: 3,\n                    d: \"M6 18L18 6M6 6l12 12\"\n                }, void 0, false, {\n                    fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"https://torque.money\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pt-5 mx-auto\",\n                    style: {\n                        width: 200,\n                        height: \"auto\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: _images_logo1_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        alt: \"Torque Logo\"\n                    }, void 0, false, {\n                        fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-white font-bold text-xl pt-5 pb-24\",\n                children: !account ? \"Not Connected\" : \"\".concat(account.slice(0, 6), \"...\").concat(account.slice(account.length - 6, account.length))\n            }, void 0, false, {\n                fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-col items-stretch space-y-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            base: \"/\",\n                            directories: [],\n                            children: \"Dashboard\"\n                        }, void 0, false, {\n                            fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            base: \"wrap\",\n                            directories: [],\n                            children: \"Wrap\"\n                        }, void 0, false, {\n                            fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            base: \"provide-liquidity\",\n                            directories: [],\n                            children: \"Provide\"\n                        }, void 0, false, {\n                            fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            base: \"leverage\",\n                            directories: [\n                                \"long\"\n                            ],\n                            children: \"Leverage\"\n                        }, void 0, false, {\n                            fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex items-center justify-evenly space-x-5 mx-auto mt-48 text-lg font-bold text-neutral-500 text-center w-3/4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"hover:text-neutral-300\",\n                            href: \"https://docs.torque.money/\",\n                            children: \"Docs\"\n                        }, void 0, false, {\n                            fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"hover:text-neutral-300\",\n                            href: \"https://linktr.ee/torque_money\",\n                            children: \"Links\"\n                        }, void 0, false, {\n                            fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ben/Code/Torque-dApp/components/Nav/SideNav/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this));\n};\n_s(SideNav, \"QB1Xr9MwJ8/hqHu7WMrdkstaCd8=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React,\n        _utils_useNavState__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = SideNav;\nvar _c;\n$RefreshReg$(_c, \"SideNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9TaWRlTmF2L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNPO0FBQ3BCO0FBQ0Y7QUFDZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLFFBQVEsQ0FBQ0ssT0FBTyxHQUFHLENBQUM7O0lBQy9CLEdBQUssQ0FBRUMsT0FBTyxHQUFJTiw4REFBWSxHQUF2Qk0sT0FBTztJQUVkLEdBQUssQ0FBMkJMLEdBQWEsa0JBQWJBLDhEQUFXLFFBQXBDTSxRQUFRLEdBQWlCTixHQUFhLEtBQTVCTyxXQUFXLEdBQUlQLEdBQWE7SUFFN0MsTUFBTSw2RUFDRFEsQ0FBRztRQUFDQyxTQUFTLEVBQUcsQ0FBMkUsNkVBQWtDLE9BQWhDSCxRQUFRLEdBQUcsQ0FBZSxpQkFBRyxDQUFFOzt3RkFDeEhJLENBQUc7Z0JBQ0FDLEtBQUssRUFBQyxDQUE0QjtnQkFDbENGLFNBQVMsRUFBQyxDQUFvQztnQkFDOUNHLElBQUksRUFBQyxDQUFNO2dCQUNYQyxPQUFPLEVBQUMsQ0FBVztnQkFDbkJDLE1BQU0sRUFBQyxDQUFPO2dCQUNkQyxPQUFPLEVBQUUsUUFBUSxDQUFQQyxDQUFDO29CQUFLVCxNQUFNLENBQU5BLFdBQVcsQ0FBQyxLQUFLOztzR0FFaENVLENBQUk7b0JBQUNDLGFBQWEsRUFBQyxDQUFPO29CQUFDQyxjQUFjLEVBQUMsQ0FBTztvQkFBQ0MsV0FBVyxFQUFFLENBQUM7b0JBQUVDLENBQUMsRUFBQyxDQUFzQjs7Ozs7Ozs7Ozs7d0ZBRTlGQyxDQUFDO2dCQUFDQyxJQUFJLEVBQUMsQ0FBc0I7c0dBQ3pCQyxDQUFHO29CQUFDZixTQUFTLEVBQUMsQ0FBYztvQkFBQ2dCLEtBQUssRUFBRSxDQUFDQzt3QkFBQUEsS0FBSyxFQUFFLEdBQUc7d0JBQUVDLE1BQU0sRUFBRSxDQUFNO29CQUFBLENBQUM7MEdBQzVEekIsbURBQUs7d0JBQUMwQixHQUFHLEVBQUV6Qix5REFBSzt3QkFBRTBCLEdBQUcsRUFBQyxDQUFhOzs7Ozs7Ozs7Ozs7Ozs7O3dGQUczQ0MsQ0FBQztnQkFBQ3JCLFNBQVMsRUFBQyxDQUFxRDsyQkFDNURKLE9BQU8sR0FBRyxDQUFlLGlCQUFJLEdBQTJCQSxNQUFpRCxDQUExRUEsT0FBTyxDQUFDMEIsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsQ0FBRyxNQUFvRCxPQUFsRDFCLE9BQU8sQ0FBQzBCLEtBQUssQ0FBQzFCLE9BQU8sQ0FBQzJCLE1BQU0sR0FBRyxDQUFDLEVBQUUzQixPQUFPLENBQUMyQixNQUFNOzs7Ozs7d0ZBRTdHQyxDQUFFO2dCQUFDeEIsU0FBUyxFQUFDLENBQXdDOztnR0FDakR5QixDQUFFOzhHQUNFakMsZ0RBQU87NEJBQUNrQyxJQUFJLEVBQUMsQ0FBRzs0QkFBQ0MsV0FBVyxFQUFFLENBQUMsQ0FBQztzQ0FBRSxDQUVuQzs7Ozs7Ozs7Ozs7Z0dBRUhGLENBQUU7OEdBQ0VqQyxnREFBTzs0QkFBQ2tDLElBQUksRUFBQyxDQUFNOzRCQUFDQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO3NDQUFFLENBRXRDOzs7Ozs7Ozs7OztnR0FFSEYsQ0FBRTs4R0FDRWpDLGdEQUFPOzRCQUFDa0MsSUFBSSxFQUFDLENBQW1COzRCQUFDQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO3NDQUFFLENBRW5EOzs7Ozs7Ozs7OztnR0FFSEYsQ0FBRTs4R0FDRWpDLGdEQUFPOzRCQUFDa0MsSUFBSSxFQUFDLENBQVU7NEJBQUNDLFdBQVcsRUFBRSxDQUFDO2dDQUFBLENBQU07NEJBQUEsQ0FBQztzQ0FBRSxDQUVoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSVBILENBQUU7Z0JBQUN4QixTQUFTLEVBQUMsQ0FBK0c7O2dHQUN4SHlCLENBQUU7OEdBQ0VaLENBQUM7NEJBQUNiLFNBQVMsRUFBQyxDQUF3Qjs0QkFBQ2MsSUFBSSxFQUFDLENBQTRCO3NDQUFDLENBRXhFOzs7Ozs7Ozs7OztnR0FFSFcsQ0FBRTs4R0FDRVosQ0FBQzs0QkFBQ2IsU0FBUyxFQUFDLENBQXdCOzRCQUFDYyxJQUFJLEVBQUMsQ0FBZ0M7c0NBQUMsQ0FFNUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCLENBQUM7R0E5RHVCbkIsT0FBTzs7UUFDVEwsMERBQVk7UUFFRUMsMERBQVc7OztLQUh2QkksT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi9TaWRlTmF2L2luZGV4LnRzeD9mZTQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlV2ViM1JlYWN0fSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHVzZU5hdlN0YXRlIGZyb20gXCIuLi8uLi8uLi91dGlscy91c2VOYXZTdGF0ZVwiO1xuaW1wb3J0IE5hdkxpbmsgZnJvbSBcIi4uL05hdkxpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExvZ28xIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvbG9nbzEucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVOYXYoKSB7XG4gICAgY29uc3Qge2FjY291bnR9ID0gdXNlV2ViM1JlYWN0KCk7XG5cbiAgICBjb25zdCBbbmF2U3RhdGUsIHNldE5hdlN0YXRlXSA9IHVzZU5hdlN0YXRlKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17YGZpeGVkIHRvcC0wIGgtZnVsbCB3LTgwIGJnLW5ldXRyYWwtOTAwIHAtNSB4bDpnbG93IHhsOmxlZnQtMCBsZWZ0LVstMjByZW1dICR7bmF2U3RhdGUgPyBcIiFsZWZ0LTAgIWdsb3dcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMiBtYi04IGN1cnNvci1wb2ludGVyIHhsOmhpZGRlblwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0TmF2U3RhdGUoZmFsc2UpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17M30gZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdG9ycXVlLm1vbmV5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IG14LWF1dG9cIiBzdHlsZT17e3dpZHRoOiAyMDAsIGhlaWdodDogXCJhdXRvXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17TG9nbzF9IGFsdD1cIlRvcnF1ZSBMb2dvXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQteGwgcHQtNSBwYi0yNFwiPlxuICAgICAgICAgICAgICAgIHshYWNjb3VudCA/IFwiTm90IENvbm5lY3RlZFwiIDogYCR7YWNjb3VudC5zbGljZSgwLCA2KX0uLi4ke2FjY291bnQuc2xpY2UoYWNjb3VudC5sZW5ndGggLSA2LCBhY2NvdW50Lmxlbmd0aCl9YH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0cmV0Y2ggc3BhY2UteS0xNlwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgYmFzZT1cIi9cIiBkaXJlY3Rvcmllcz17W119PlxuICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgYmFzZT1cIndyYXBcIiBkaXJlY3Rvcmllcz17W119PlxuICAgICAgICAgICAgICAgICAgICAgICAgV3JhcFxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGJhc2U9XCJwcm92aWRlLWxpcXVpZGl0eVwiIGRpcmVjdG9yaWVzPXtbXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm92aWRlXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgYmFzZT1cImxldmVyYWdlXCIgZGlyZWN0b3JpZXM9e1tcImxvbmdcIl19PlxuICAgICAgICAgICAgICAgICAgICAgICAgTGV2ZXJhZ2VcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHkgc3BhY2UteC01IG14LWF1dG8gbXQtNDggdGV4dC1sZyBmb250LWJvbGQgdGV4dC1uZXV0cmFsLTUwMCB0ZXh0LWNlbnRlciB3LTMvNFwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1uZXV0cmFsLTMwMFwiIGhyZWY9XCJodHRwczovL2RvY3MudG9ycXVlLm1vbmV5L1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRG9jc1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtbmV1dHJhbC0zMDBcIiBocmVmPVwiaHR0cHM6Ly9saW5rdHIuZWUvdG9ycXVlX21vbmV5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5rc1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlV2ViM1JlYWN0IiwidXNlTmF2U3RhdGUiLCJOYXZMaW5rIiwiSW1hZ2UiLCJMb2dvMSIsIlNpZGVOYXYiLCJhY2NvdW50IiwibmF2U3RhdGUiLCJzZXROYXZTdGF0ZSIsIm5hdiIsImNsYXNzTmFtZSIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJvbkNsaWNrIiwiZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJhIiwiaHJlZiIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJhbHQiLCJwIiwic2xpY2UiLCJsZW5ndGgiLCJ1bCIsImxpIiwiYmFzZSIsImRpcmVjdG9yaWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav/SideNav/index.tsx\n");

/***/ })

});
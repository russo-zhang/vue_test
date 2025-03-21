/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/braintree/Braintree.vue?vue&type=style&index=0&id=41f3d936&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/braintree/Braintree.vue?vue&type=style&index=0&id=41f3d936&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nbody {\\r\\n    margin: 0;\\r\\n    padding: 0;\\n}\\n.braintree {\\r\\n    box-sizing: border-box;\\r\\n    height: 100vh;\\r\\n    margin: 0 auto;\\r\\n    padding-top: 30vh;\\n}\\n.button {\\r\\n    cursor: pointer;\\r\\n    font-weight: 500;\\r\\n    left: 3px;\\r\\n    line-height: inherit;\\r\\n    position: relative;\\r\\n    text-decoration: none;\\r\\n    text-align: center;\\r\\n    border-style: solid;\\r\\n    border-width: 1px;\\r\\n    border-radius: 3px;\\r\\n    -webkit-appearance: none;\\r\\n    -moz-appearance: none;\\r\\n    display: inline-block;\\n}\\n.button--small {\\r\\n    padding: 10px 20px;\\r\\n    font-size: 0.875rem;\\n}\\n.button--green {\\r\\n    outline: none;\\r\\n    background-color: #64d18a;\\r\\n    border-color: #64d18a;\\r\\n    color: white;\\r\\n    transition: all 200ms ease;\\n}\\n.button--green:hover {\\r\\n    background-color: #8bdda8;\\r\\n    color: white;\\n}\\n@media screen and (max-width: 750px) {\\n.braintree {\\r\\n        width: 90vw;\\n}\\n}\\n@media screen and (min-width: 751px) {\\n.braintree {\\r\\n        width: 750px;\\n}\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://riichi_city_store/./src/pages/braintree/Braintree.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/pages/braintree/api.ts":
/*!************************************!*\
  !*** ./src/pages/braintree/api.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capturePaymentOrder\": function() { return /* binding */ capturePaymentOrder; },\n/* harmony export */   \"confirmPaymentOrder\": function() { return /* binding */ confirmPaymentOrder; },\n/* harmony export */   \"getOrderInfo\": function() { return /* binding */ getOrderInfo; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\r\nvar axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\r\n    timeout: 10000,\r\n    headers: {\r\n        \"Content-Type\": \"application/json\",\r\n    },\r\n    baseURL: \"//dev.mahjong-jp.net\",\r\n});\r\n//获取订单信息\r\nvar getOrderInfo = function (data) {\r\n    return axios.post(\"/store/getPaymentOrder\", data);\r\n};\r\nvar confirmPaymentOrder = function (data) {\r\n    return axios.post(\"/store/confirmPaymentOrder\", data);\r\n};\r\nvar capturePaymentOrder = function (data) {\r\n    return axios.post(\"/store/capturePaymentOrder\", data);\r\n};\r\n\n\n//# sourceURL=webpack://riichi_city_store/./src/pages/braintree/api.ts?");

/***/ }),

/***/ "./src/pages/braintree/hook.ts":
/*!*************************************!*\
  !*** ./src/pages/braintree/hook.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usePay\": function() { return /* binding */ usePay; }\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/pages/braintree/utils.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/pages/braintree/api.ts\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\r\n\r\n\r\n\r\nvar usePay = function () {\r\n    var _a = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getUrlParams)(), order_id = _a.order_id, signature = _a.signature, lang = _a.lang;\r\n    var officialUrl = \"http://10.100.1.199:7104\";\r\n    var site_type = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(0);\r\n    var isWebSite = (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(function () {\r\n        return site_type.value === 10;\r\n    });\r\n    var successUrl = (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(function () {\r\n        if (isWebSite.value) {\r\n            return \"/payment/success?order_id=\".concat(order_id, \"&signature=\").concat(signature, \"&lang=\").concat(lang);\r\n        }\r\n        return \"\".concat(officialUrl, \"/resource/payment/success.html?order_id=\").concat(order_id, \"&signature=\").concat(signature, \"&lang=\").concat(lang);\r\n    });\r\n    var failedUrl = (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(function () {\r\n        if (isWebSite.value) {\r\n            return \"/payment/failed\";\r\n        }\r\n        return \"\".concat(officialUrl, \"/resource/payment/failed.html\");\r\n    });\r\n    var redirect = function (url) {\r\n        console.log(\"redirect url:\", url);\r\n        // window.location.replace(url.value);\r\n        window.open(url.value, \"_blank\");\r\n    };\r\n    var getOrderStatus = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(void 0, void 0, void 0, function () {\r\n        var res, error_1;\r\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 2, , 3]);\r\n                    return [4 /*yield*/, (0,_api__WEBPACK_IMPORTED_MODULE_1__.getOrderInfo)({ order_id: order_id, signature: signature })];\r\n                case 1:\r\n                    res = _a.sent();\r\n                    if (res.data.code !== 0)\r\n                        return [2 /*return*/];\r\n                    site_type.value = res.data.data.site_type;\r\n                    if (res.data.data.status === 2) {\r\n                        //成功直接跳转到成功页面\r\n                        redirect(successUrl);\r\n                    }\r\n                    else if (res.data.data.status === 3) {\r\n                        //失败\r\n                        redirect(failedUrl);\r\n                    }\r\n                    return [2 /*return*/, res.data.data];\r\n                case 2:\r\n                    error_1 = _a.sent();\r\n                    console.error(\"error:\", error_1);\r\n                    return [3 /*break*/, 3];\r\n                case 3: return [2 /*return*/];\r\n            }\r\n        });\r\n    }); };\r\n    // onMounted(getOrderStatus);\r\n    return {\r\n        getOrderStatus: getOrderStatus,\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack://riichi_city_store/./src/pages/braintree/hook.ts?");

/***/ }),

/***/ "./src/pages/braintree/main.ts":
/*!*************************************!*\
  !*** ./src/pages/braintree/main.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _Braintree_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Braintree.vue */ \"./src/pages/braintree/Braintree.vue\");\n\r\n\r\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_Braintree_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount(\"#app\");\r\n\n\n//# sourceURL=webpack://riichi_city_store/./src/pages/braintree/main.ts?");

/***/ }),

/***/ "./src/pages/braintree/utils.ts":
/*!**************************************!*\
  !*** ./src/pages/braintree/utils.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUrlParams\": function() { return /* binding */ getUrlParams; }\n/* harmony export */ });\nvar getUrlParams = function () {\r\n    var params = {};\r\n    var url = document.location.search;\r\n    var arrObj = url.split(\"?\");\r\n    if (arrObj.length > 1) {\r\n        var arrPara = arrObj[1].split(\"&\");\r\n        for (var i = 0; i < arrPara.length; i++) {\r\n            var keyValueArr = arrPara[i].split(\"=\");\r\n            var key = keyValueArr[0];\r\n            var value = keyValueArr[1];\r\n            params[key] = value;\r\n        }\r\n    }\r\n    return params;\r\n};\r\n\n\n//# sourceURL=webpack://riichi_city_store/./src/pages/braintree/utils.ts?");

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet[1].rules[35].use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/braintree/Braintree.vue?vue&type=script&setup=true&lang=ts":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet[1].rules[35].use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/braintree/Braintree.vue?vue&type=script&setup=true&lang=ts ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var braintree_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! braintree-web */ \"./node_modules/braintree-web/dist/browser/index.js\");\n/* harmony import */ var braintree_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(braintree_web__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var braintree_web_drop_in__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! braintree-web-drop-in */ \"./node_modules/braintree-web-drop-in/dist/browser/dropin.js\");\n/* harmony import */ var braintree_web_drop_in__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(braintree_web_drop_in__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/pages/braintree/utils.ts\");\n/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hook */ \"./src/pages/braintree/hook.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api */ \"./src/pages/braintree/api.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\r\n    __name: 'Braintree',\r\n    setup: function (__props, _a) {\r\n        var _this = this;\r\n        var __expose = _a.expose;\r\n        __expose();\r\n        // Step two: create a dropin instance using that container (or a string\r\n        //   that functions as a query selector such as '#dropin-container')\r\n        var getOrderStatus = (0,_hook__WEBPACK_IMPORTED_MODULE_4__.usePay)().getOrderStatus;\r\n        var _b = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getUrlParams)(), order_id = _b.order_id, signature = _b.signature, currency = _b.currency, lang = _b.lang, client_token = _b.client_token;\r\n        var isShowSubmitBtn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);\r\n        var dropinInstance;\r\n        var init = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this, void 0, void 0, function () {\r\n            var amount, currency, submitButton, error_1;\r\n            var _this = this;\r\n            var _a, _b, _c, _d;\r\n            return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_e) {\r\n                switch (_e.label) {\r\n                    case 0:\r\n                        if (!client_token) {\r\n                            console.error(\"client_token is required\");\r\n                            return [2 /*return*/];\r\n                        }\r\n                        console.log(\"amount:\", (_a = orderInfo.value) === null || _a === void 0 ? void 0 : _a.curr_amount);\r\n                        console.log(\"currency:\", (_b = orderInfo.value) === null || _b === void 0 ? void 0 : _b.currency);\r\n                        amount = (_c = orderInfo.value) === null || _c === void 0 ? void 0 : _c.curr_amount;\r\n                        currency = (_d = orderInfo.value) === null || _d === void 0 ? void 0 : _d.currency;\r\n                        if (!amount || !currency) {\r\n                            console.error(\"amount or currency is required\");\r\n                            return [2 /*return*/];\r\n                        }\r\n                        submitButton = document.querySelector(\"#submit-button\");\r\n                        _e.label = 1;\r\n                    case 1:\r\n                        _e.trys.push([1, 3, , 4]);\r\n                        return [4 /*yield*/, braintree_web_drop_in__WEBPACK_IMPORTED_MODULE_2___default().create({\r\n                                authorization: client_token,\r\n                                container: \"#dropin-container\",\r\n                                dataCollector: true,\r\n                                googlePay: {\r\n                                    googlePayVersion: 2,\r\n                                    merchantId: \"merchant-id\",\r\n                                    transactionInfo: {\r\n                                        totalPriceStatus: \"FINAL\",\r\n                                        totalPrice: String(amount),\r\n                                        currencyCode: currency,\r\n                                    },\r\n                                },\r\n                                applePay: {\r\n                                    displayName: \"Riichi City Store\",\r\n                                    paymentRequest: {\r\n                                        // countryCode: \"\",\r\n                                        // currencyCode: currency,\r\n                                        // supportedNetworks: [],\r\n                                        // merchantCapabilities: [],\r\n                                        total: {\r\n                                            label: \"Riichi City Store\",\r\n                                            amount: String(amount),\r\n                                        },\r\n                                        // We recommend collecting billing address information, at minimum\r\n                                        // billing postal code, and passing that billing postal code with all\r\n                                        // Apple Pay transactions as a best practice.\r\n                                        // requiredBillingContactFields: [\"postalAddress\"],\r\n                                    },\r\n                                },\r\n                            })];\r\n                    case 2:\r\n                        dropinInstance = _e.sent();\r\n                        // 选择支付方式回调\r\n                        dropinInstance.on(\"paymentOptionSelected\", function (payload) { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this, void 0, void 0, function () {\r\n                            return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {\r\n                                console.log(\"paymentOptionSelected payload:\", payload);\r\n                                return [2 /*return*/];\r\n                            });\r\n                        }); });\r\n                        dropinInstance.on(\"noPaymentMethodRequestable\", function () {\r\n                            console.log(\"noPaymentMethodRequestable\");\r\n                        });\r\n                        dropinInstance.on(\"paymentMethodRequestable\", function (payload) { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this, void 0, void 0, function () {\r\n                            var paymentMethodIsSelected, payload_1, result, err_1;\r\n                            return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {\r\n                                switch (_a.label) {\r\n                                    case 0:\r\n                                        _a.trys.push([0, 4, , 5]);\r\n                                        paymentMethodIsSelected = payload.paymentMethodIsSelected;\r\n                                        console.log(\"paymentMethodRequestable payload:\", payload);\r\n                                        if (!paymentMethodIsSelected) return [3 /*break*/, 3];\r\n                                        return [4 /*yield*/, dropinInstance.requestPaymentMethod()];\r\n                                    case 1:\r\n                                        payload_1 = _a.sent();\r\n                                        console.log(\"payload:\", payload_1);\r\n                                        return [4 /*yield*/, sendNonceToServer(payload_1)];\r\n                                    case 2:\r\n                                        result = _a.sent();\r\n                                        console.log(\"result:\", result);\r\n                                        // if (result !== 0) return;\r\n                                        getOrderStatus();\r\n                                        _a.label = 3;\r\n                                    case 3: return [3 /*break*/, 5];\r\n                                    case 4:\r\n                                        err_1 = _a.sent();\r\n                                        console.error(\"paymentMethodRequestable error:\", err_1);\r\n                                        return [3 /*break*/, 5];\r\n                                    case 5: return [2 /*return*/];\r\n                                }\r\n                            });\r\n                        }); });\r\n                        dropinInstance.on(\"changeActiveView\", function (payload) {\r\n                            if (payload.newViewId === \"card\") {\r\n                                // 选择信用卡支付--展示确认按钮\r\n                                isShowSubmitBtn.value = true;\r\n                            }\r\n                            else {\r\n                                isShowSubmitBtn.value = false;\r\n                            }\r\n                        });\r\n                        console.log(\"dropinInstance:\", dropinInstance);\r\n                        submitButton.addEventListener(\"click\", function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this, void 0, void 0, function () {\r\n                            var payload, result, error_2;\r\n                            return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {\r\n                                switch (_a.label) {\r\n                                    case 0:\r\n                                        _a.trys.push([0, 4, , 5]);\r\n                                        return [4 /*yield*/, dropinInstance.requestPaymentMethod()];\r\n                                    case 1:\r\n                                        payload = _a.sent();\r\n                                        console.log(\"payload:\", payload);\r\n                                        return [4 /*yield*/, sendNonceToServer(payload)];\r\n                                    case 2:\r\n                                        result = _a.sent();\r\n                                        console.log(\"result:\", result);\r\n                                        // if (result !== 0) return;\r\n                                        return [4 /*yield*/, getOrderStatus()];\r\n                                    case 3:\r\n                                        // if (result !== 0) return;\r\n                                        _a.sent();\r\n                                        return [3 /*break*/, 5];\r\n                                    case 4:\r\n                                        error_2 = _a.sent();\r\n                                        console.error(\"dropinInstance.requestPaymentMethod error:\", error_2);\r\n                                        return [3 /*break*/, 5];\r\n                                    case 5: return [2 /*return*/];\r\n                                }\r\n                            });\r\n                        }); });\r\n                        return [3 /*break*/, 4];\r\n                    case 3:\r\n                        error_1 = _e.sent();\r\n                        console.error(\"braintree.dropin create error:\", error_1);\r\n                        return [3 /*break*/, 4];\r\n                    case 4: return [2 /*return*/];\r\n                }\r\n            });\r\n        }); };\r\n        var localPaymentInstance = null;\r\n        var initLocalPayment = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this, void 0, void 0, function () {\r\n            var clientInstance, err_2;\r\n            return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        if (!client_token) {\r\n                            console.error(\"client_token is required\");\r\n                            return [2 /*return*/];\r\n                        }\r\n                        _a.label = 1;\r\n                    case 1:\r\n                        _a.trys.push([1, 4, , 5]);\r\n                        return [4 /*yield*/, braintree_web__WEBPACK_IMPORTED_MODULE_1___default().client.create({\r\n                                authorization: client_token,\r\n                            })];\r\n                    case 2:\r\n                        clientInstance = _a.sent();\r\n                        console.log(\"clientInstance:\", clientInstance);\r\n                        return [4 /*yield*/, braintree_web__WEBPACK_IMPORTED_MODULE_1___default().localPayment.create({\r\n                                client: clientInstance,\r\n                                // merchantAccountId: \"merchant-id\",\r\n                            })];\r\n                    case 3:\r\n                        localPaymentInstance = _a.sent();\r\n                        console.log(\"localPaymentInstance:\", localPaymentInstance);\r\n                        return [3 /*break*/, 5];\r\n                    case 4:\r\n                        err_2 = _a.sent();\r\n                        console.error(\"initLocalPayment error:\", err_2);\r\n                        return [3 /*break*/, 5];\r\n                    case 5: return [2 /*return*/];\r\n                }\r\n            });\r\n        }); };\r\n        var startPayment = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this, void 0, void 0, function () {\r\n            var amount, currency, payload, err_3;\r\n            var _a, _b;\r\n            return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_c) {\r\n                switch (_c.label) {\r\n                    case 0:\r\n                        amount = (_a = orderInfo.value) === null || _a === void 0 ? void 0 : _a.curr_amount;\r\n                        currency = (_b = orderInfo.value) === null || _b === void 0 ? void 0 : _b.currency;\r\n                        if (!amount || !currency) {\r\n                            console.error(\"amount or currency is required\");\r\n                            return [2 /*return*/];\r\n                        }\r\n                        if (!localPaymentInstance) {\r\n                            console.error(\"localPaymentInstance is required\");\r\n                            return [2 /*return*/];\r\n                        }\r\n                        _c.label = 1;\r\n                    case 1:\r\n                        _c.trys.push([1, 3, , 4]);\r\n                        return [4 /*yield*/, localPaymentInstance.startPayment({\r\n                                // paymentType: \"alipay\" as any,\r\n                                paymentType: \"bancontact\",\r\n                                amount: amount,\r\n                                // currencyCode: currency,\r\n                                currencyCode: \"EUR\",\r\n                                givenName: \"test givenName\",\r\n                                surname: \"test surname\",\r\n                                fallback: {\r\n                                    url: \"https://10.100.1.199\",\r\n                                    buttonText: \"Return to Merchant\",\r\n                                },\r\n                                onPaymentStart: function (payload, start) {\r\n                                    console.log(\"startPayment onSuccess payload:\", payload);\r\n                                    start();\r\n                                },\r\n                            })];\r\n                    case 2:\r\n                        payload = _c.sent();\r\n                        console.log(\"startPayment payload:\", payload);\r\n                        sendNonceToServer(payload);\r\n                        return [3 /*break*/, 4];\r\n                    case 3:\r\n                        err_3 = _c.sent();\r\n                        if (err_3.code === \"LOCAL_PAYMENT_POPUP_CLOSED\") {\r\n                            console.error(\"Customer closed Local Payment popup.\");\r\n                        }\r\n                        else {\r\n                            console.error(\"startPayment error:\", err_3);\r\n                        }\r\n                        return [3 /*break*/, 4];\r\n                    case 4: return [2 /*return*/];\r\n                }\r\n            });\r\n        }); };\r\n        var sendNonceToServer = function (payload) { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this, void 0, void 0, function () {\r\n            var nonce, type, deviceData, res;\r\n            return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        console.log(\"sendNonceToServer payload:\", payload);\r\n                        nonce = payload.nonce, type = payload.type, deviceData = payload.deviceData;\r\n                        if (!nonce) {\r\n                            console.error(\"nonce is required\");\r\n                            return [2 /*return*/];\r\n                        }\r\n                        if (!type) {\r\n                            console.error(\"type is required\");\r\n                            return [2 /*return*/];\r\n                        }\r\n                        return [4 /*yield*/, (0,_api__WEBPACK_IMPORTED_MODULE_5__.confirmPaymentOrder)({\r\n                                orderId: order_id,\r\n                                signature: signature,\r\n                                channel: type,\r\n                                nonce: nonce,\r\n                                deviceData: deviceData,\r\n                            })];\r\n                    case 1:\r\n                        res = _a.sent();\r\n                        console.log(\"res:\", res);\r\n                        return [2 /*return*/, res.data.transactionId];\r\n                }\r\n            });\r\n        }); };\r\n        var orderInfo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();\r\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this, void 0, void 0, function () {\r\n            var _a;\r\n            return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_b) {\r\n                switch (_b.label) {\r\n                    case 0:\r\n                        _a = orderInfo;\r\n                        return [4 /*yield*/, getOrderStatus()];\r\n                    case 1:\r\n                        _a.value = _b.sent();\r\n                        return [4 /*yield*/, init()];\r\n                    case 2:\r\n                        _b.sent();\r\n                        return [4 /*yield*/, initLocalPayment()];\r\n                    case 3:\r\n                        _b.sent();\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        }); });\r\n        var __returned__ = { getOrderStatus: getOrderStatus, order_id: order_id, signature: signature, currency: currency, lang: lang, client_token: client_token, isShowSubmitBtn: isShowSubmitBtn, get dropinInstance() { return dropinInstance; }, set dropinInstance(v) { dropinInstance = v; }, init: init, get localPaymentInstance() { return localPaymentInstance; }, set localPaymentInstance(v) { localPaymentInstance = v; }, initLocalPayment: initLocalPayment, startPayment: startPayment, sendNonceToServer: sendNonceToServer, orderInfo: orderInfo };\r\n        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });\r\n        return __returned__;\r\n    }\r\n}));\r\n\n\n//# sourceURL=webpack://riichi_city_store/./src/pages/braintree/Braintree.vue?./node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet%5B1%5D.rules%5B35%5D.use%5B0%5D!./node_modules/ts-loader/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet[1].rules[35].use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/braintree/Braintree.vue?vue&type=template&id=41f3d936&ts=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet[1].rules[35].use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/braintree/Braintree.vue?vue&type=template&id=41f3d936&ts=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\r\nvar _hoisted_1 = { class: \"braintree\" };\r\nvar _hoisted_2 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"dropin-container\" }, null, -1 /* HOISTED */);\r\nvar _hoisted_3 = {\r\n    id: \"submit-button\",\r\n    class: \"button button--small button--green\"\r\n};\r\nvar _hoisted_4 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"paypal-button\" }, null, -1 /* HOISTED */);\r\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\r\n    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\r\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Step one: add an empty container to your page \"),\r\n        _hoisted_2,\r\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", _hoisted_3, \"Purchase\", 512 /* NEED_PATCH */), [\r\n            [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.isShowSubmitBtn]\r\n        ]),\r\n        _hoisted_4,\r\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\r\n            id: \"ideal-button\",\r\n            onClick: $setup.startPayment\r\n        }, \"AliPay\")\r\n    ]));\r\n}\r\n\n\n//# sourceURL=webpack://riichi_city_store/./src/pages/braintree/Braintree.vue?./node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet%5B1%5D.rules%5B35%5D.use%5B0%5D!./node_modules/ts-loader/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet[1].rules[35].use[0]!./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/braintree/Braintree.vue?vue&type=style&index=0&id=41f3d936&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet[1].rules[35].use[0]!./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/braintree/Braintree.vue?vue&type=style&index=0&id=41f3d936&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Braintree.vue?vue&type=style&index=0&id=41f3d936&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/braintree/Braintree.vue?vue&type=style&index=0&id=41f3d936&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"079ed110\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://riichi_city_store/./src/pages/braintree/Braintree.vue?./node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet%5B1%5D.rules%5B35%5D.use%5B0%5D!./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/pages/braintree/Braintree.vue":
/*!*******************************************!*\
  !*** ./src/pages/braintree/Braintree.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Braintree_vue_vue_type_template_id_41f3d936_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Braintree.vue?vue&type=template&id=41f3d936&ts=true */ \"./src/pages/braintree/Braintree.vue?vue&type=template&id=41f3d936&ts=true\");\n/* harmony import */ var _Braintree_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Braintree.vue?vue&type=script&setup=true&lang=ts */ \"./src/pages/braintree/Braintree.vue?vue&type=script&setup=true&lang=ts\");\n/* harmony import */ var _Braintree_vue_vue_type_style_index_0_id_41f3d936_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Braintree.vue?vue&type=style&index=0&id=41f3d936&lang=css */ \"./src/pages/braintree/Braintree.vue?vue&type=style&index=0&id=41f3d936&lang=css\");\n/* harmony import */ var H_project_mahjong_riichi_city_store_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,H_project_mahjong_riichi_city_store_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Braintree_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Braintree_vue_vue_type_template_id_41f3d936_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/pages/braintree/Braintree.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://riichi_city_store/./src/pages/braintree/Braintree.vue?");

/***/ }),

/***/ "./src/pages/braintree/Braintree.vue?vue&type=script&setup=true&lang=ts":
/*!******************************************************************************!*\
  !*** ./src/pages/braintree/Braintree.vue?vue&type=script&setup=true&lang=ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_unplugin_dist_webpack_loaders_transform_js_ruleSet_1_rules_35_use_0_node_modules_ts_loader_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Braintree_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_ruleSet_1_rules_35_use_0_node_modules_ts_loader_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Braintree_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet[1].rules[35].use[0]!../../../node_modules/ts-loader/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Braintree.vue?vue&type=script&setup=true&lang=ts */ \"./node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet[1].rules[35].use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/braintree/Braintree.vue?vue&type=script&setup=true&lang=ts\");\n \n\n//# sourceURL=webpack://riichi_city_store/./src/pages/braintree/Braintree.vue?");

/***/ }),

/***/ "./src/pages/braintree/Braintree.vue?vue&type=template&id=41f3d936&ts=true":
/*!*********************************************************************************!*\
  !*** ./src/pages/braintree/Braintree.vue?vue&type=template&id=41f3d936&ts=true ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_unplugin_dist_webpack_loaders_transform_js_ruleSet_1_rules_35_use_0_node_modules_ts_loader_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Braintree_vue_vue_type_template_id_41f3d936_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_ruleSet_1_rules_35_use_0_node_modules_ts_loader_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Braintree_vue_vue_type_template_id_41f3d936_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet[1].rules[35].use[0]!../../../node_modules/ts-loader/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Braintree.vue?vue&type=template&id=41f3d936&ts=true */ \"./node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet[1].rules[35].use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/braintree/Braintree.vue?vue&type=template&id=41f3d936&ts=true\");\n\n\n//# sourceURL=webpack://riichi_city_store/./src/pages/braintree/Braintree.vue?");

/***/ }),

/***/ "./src/pages/braintree/Braintree.vue?vue&type=style&index=0&id=41f3d936&lang=css":
/*!***************************************************************************************!*\
  !*** ./src/pages/braintree/Braintree.vue?vue&type=style&index=0&id=41f3d936&lang=css ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_ruleSet_1_rules_35_use_0_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Braintree_vue_vue_type_style_index_0_id_41f3d936_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet[1].rules[35].use[0]!../../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Braintree.vue?vue&type=style&index=0&id=41f3d936&lang=css */ \"./node_modules/unplugin/dist/webpack/loaders/transform.js??ruleSet[1].rules[35].use[0]!./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/braintree/Braintree.vue?vue&type=style&index=0&id=41f3d936&lang=css\");\n/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_ruleSet_1_rules_35_use_0_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Braintree_vue_vue_type_style_index_0_id_41f3d936_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_unplugin_dist_webpack_loaders_transform_js_ruleSet_1_rules_35_use_0_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Braintree_vue_vue_type_style_index_0_id_41f3d936_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ruleSet_1_rules_35_use_0_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Braintree_vue_vue_type_style_index_0_id_41f3d936_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_unplugin_dist_webpack_loaders_transform_js_ruleSet_1_rules_35_use_0_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Braintree_vue_vue_type_style_index_0_id_41f3d936_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://riichi_city_store/./src/pages/braintree/Braintree.vue?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	!function() {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"braintree": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkriichi_city_store"] = self["webpackChunkriichi_city_store"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-base","chunk-vendors"], function() { return __webpack_require__("./src/pages/braintree/main.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! ./config/env */ \"./src/config/env.ts\");\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar constants_1 = __importDefault(__webpack_require__(/*! ./config/constants */ \"./src/config/constants.ts\"));\n__webpack_require__(/*! ./config/db.ts */ \"./src/config/db.ts\");\nvar middlewares_1 = __importDefault(__webpack_require__(/*! ./middlewares */ \"./src/middlewares/index.ts\"));\nvar routes_1 = __importDefault(__webpack_require__(/*! ./routes */ \"./src/routes/index.ts\"));\nvar app = express_1.default();\nmiddlewares_1.default(app);\nroutes_1.default(app);\napp.listen(constants_1.default.PORT, function () {\n    console.log(\"server is running on port \" + constants_1.default.PORT);\n    console.log(\"running environment is \" + \"development\");\n});\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/config/constants.ts":
/*!*********************************!*\
  !*** ./src/config/constants.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! ./env */ \"./src/config/env.ts\");\nvar config = {\n    development: {\n        DB_URL: 'mongodb://localhost/reception-homepage-dev',\n    },\n    production: {\n        DB_URL: 'mongodb://localhost/reception-homepage-prod',\n    },\n};\nvar getSettings = function (env) { return config[env]; };\nvar defaultConfig = {\n    PORT: process.env.PORT || 9999,\n};\nexports.default = __assign({}, defaultConfig, getSettings(\"development\"));\n\n\n//# sourceURL=webpack:///./src/config/constants.ts?");

/***/ }),

/***/ "./src/config/db.ts":
/*!**************************!*\
  !*** ./src/config/db.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nvar constants_1 = __importDefault(__webpack_require__(/*! ./constants */ \"./src/config/constants.ts\"));\ntry {\n    mongoose_1.default.connect(constants_1.default.DB_URL, {\n        useNewUrlParser: true,\n    });\n}\ncatch (error) {\n    mongoose_1.default.createConnection(constants_1.default.DB_URL);\n}\nmongoose_1.default.connection\n    .once('open', function () {\n    console.log('mongoDB is running');\n})\n    .on('error', function (error) {\n    throw error;\n});\n\n\n//# sourceURL=webpack:///./src/config/db.ts?");

/***/ }),

/***/ "./src/config/env.ts":
/*!***************************!*\
  !*** ./src/config/env.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar path_1 = __webpack_require__(/*! path */ \"path\");\nvar dotenv_1 = __webpack_require__(/*! dotenv */ \"dotenv\");\ndotenv_1.config({ path: path_1.resolve(__dirname, '../../.env') });\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/config/env.ts?");

/***/ }),

/***/ "./src/controllers/link.ts":
/*!*********************************!*\
  !*** ./src/controllers/link.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar link_1 = __importDefault(__webpack_require__(/*! ../models/link */ \"./src/models/link.ts\"));\nexports.getLinks = function (req, res) { return __awaiter(_this, void 0, void 0, function () {\n    var links, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, link_1.default.find()];\n            case 1:\n                links = _a.sent();\n                return [2 /*return*/, res.status(200).json({ status: 200, links: links })];\n            case 2:\n                error_1 = _a.sent();\n                return [2 /*return*/, res.status(400).json({ status: 400, error: error_1 })];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); };\nexports.addLink = function (req, res) { return __awaiter(_this, void 0, void 0, function () {\n    var links, error_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 3, , 4]);\n                links = req.body.links;\n                return [4 /*yield*/, link_1.default.deleteMany({})];\n            case 1:\n                _a.sent();\n                return [4 /*yield*/, link_1.default.insertMany(links)];\n            case 2:\n                _a.sent();\n                return [2 /*return*/, res.status(200).json({ status: 200, results: 'success' })];\n            case 3:\n                error_2 = _a.sent();\n                return [2 /*return*/, res.status(400).json({ status: 400, error: error_2 })];\n            case 4: return [2 /*return*/];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack:///./src/controllers/link.ts?");

/***/ }),

/***/ "./src/middlewares/index.ts":
/*!**********************************!*\
  !*** ./src/middlewares/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nexports.default = (function (app) {\n    // enable cors\n    app.use(cors_1.default());\n    // post body json parse\n    app.use(express_1.default.json());\n});\n\n\n//# sourceURL=webpack:///./src/middlewares/index.ts?");

/***/ }),

/***/ "./src/models/link.ts":
/*!****************************!*\
  !*** ./src/models/link.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mongoose_1 = __importStar(__webpack_require__(/*! mongoose */ \"mongoose\"));\nvar LinkSchema = new mongoose_1.Schema({\n    title: { type: String, required: true },\n    link: { type: String, required: true },\n});\nexports.default = mongoose_1.default.model('Link', LinkSchema);\n\n\n//# sourceURL=webpack:///./src/models/link.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar link_1 = __importDefault(__webpack_require__(/*! ./link */ \"./src/routes/link.ts\"));\nexports.default = (function (app) {\n    app.use('/', link_1.default);\n});\n\n\n//# sourceURL=webpack:///./src/routes/index.ts?");

/***/ }),

/***/ "./src/routes/link.ts":
/*!****************************!*\
  !*** ./src/routes/link.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar link_1 = __webpack_require__(/*! ../controllers/link */ \"./src/controllers/link.ts\");\nvar router = express_1.Router();\nrouter.get('/links', link_1.getLinks);\nrouter.post('/links', link_1.addLink);\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/routes/link.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptchaGenerator = exports.Captcha = exports.resolveImage = exports.createCaptchaSync = exports.createCaptcha = void 0;
var extra_1 = require("./extra");
Object.defineProperty(exports, "createCaptcha", { enumerable: true, get: function () { return extra_1.createCaptcha; } });
Object.defineProperty(exports, "createCaptchaSync", { enumerable: true, get: function () { return extra_1.createCaptchaSync; } });
var skia_canvas_1 = require("skia-canvas");
Object.defineProperty(exports, "resolveImage", { enumerable: true, get: function () { return skia_canvas_1.loadImage; } });
var captcha_1 = require("./captcha");
Object.defineProperty(exports, "Captcha", { enumerable: true, get: function () { return captcha_1.Captcha; } });
var CaptchaGenerator_1 = require("./CaptchaGenerator");
Object.defineProperty(exports, "CaptchaGenerator", { enumerable: true, get: function () { return CaptchaGenerator_1.CaptchaGenerator; } });

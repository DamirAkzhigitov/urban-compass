"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fonts = void 0;
const utils_1 = require("@repo/design-system/lib/utils");
const mono_1 = require("geist/font/mono");
const sans_1 = require("geist/font/sans");
exports.fonts = (0, utils_1.cn)(sans_1.GeistSans.variable, mono_1.GeistMono.variable, 'touch-manipulation font-sans antialiased');

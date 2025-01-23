"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const next_themes_1 = require("next-themes");
const ThemeProvider = ({ children, ...properties }) => ((0, jsx_runtime_1.jsx)(next_themes_1.ThemeProvider, { attribute: "class", defaultTheme: "system", enableSystem: true, disableTransitionOnChange: true, ...properties, children: children }));
exports.ThemeProvider = ThemeProvider;

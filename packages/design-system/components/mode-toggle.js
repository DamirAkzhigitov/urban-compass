'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeToggle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_icons_1 = require("@radix-ui/react-icons");
const next_themes_1 = require("next-themes");
const button_1 = require("../components/ui/button");
const dropdown_menu_1 = require("../components/ui/dropdown-menu");
const themes = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'System', value: 'system' },
];
const ModeToggle = () => {
    const { setTheme } = (0, next_themes_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenu, { children: [(0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuTrigger, { asChild: true, children: (0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "ghost", size: "icon", className: "shrink-0 text-foreground", children: [(0, jsx_runtime_1.jsx)(react_icons_1.SunIcon, { className: "dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" }), (0, jsx_runtime_1.jsx)(react_icons_1.MoonIcon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Toggle theme" })] }) }), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuContent, { children: themes.map(({ label, value }) => ((0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuItem, { onClick: () => setTheme(value), children: label }, value))) })] }));
};
exports.ModeToggle = ModeToggle;

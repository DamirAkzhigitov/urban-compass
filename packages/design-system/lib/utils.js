"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.capitalize = exports.cn = void 0;
const error_1 = require("@repo/observability/error");
const clsx_1 = require("clsx");
const sonner_1 = require("sonner");
const tailwind_merge_1 = require("tailwind-merge");
const cn = (...inputs) => (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
exports.cn = cn;
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
exports.capitalize = capitalize;
const handleError = (error) => {
    const message = (0, error_1.parseError)(error);
    sonner_1.toast.error(message);
};
exports.handleError = handleError;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keys = void 0;
const presets_1 = require("@t3-oss/env-core/presets");
const env_nextjs_1 = require("@t3-oss/env-nextjs");
const zod_1 = require("zod");
const keys = () => (0, env_nextjs_1.createEnv)({
    extends: [(0, presets_1.vercel)()],
    server: {
        ANALYZE: zod_1.z.string().optional(),
        // Added by Vercel
        NEXT_RUNTIME: zod_1.z.enum(['nodejs', 'edge']).optional(),
    },
    client: {
        NEXT_PUBLIC_APP_URL: zod_1.z.string().min(1).url(),
        NEXT_PUBLIC_WEB_URL: zod_1.z.string().min(1).url(),
        NEXT_PUBLIC_API_URL: zod_1.z.string().min(1).url().optional(),
        NEXT_PUBLIC_DOCS_URL: zod_1.z.string().min(1).url().optional(),
    },
    runtimeEnv: {
        ANALYZE: process.env.ANALYZE,
        NEXT_RUNTIME: process.env.NEXT_RUNTIME,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        NEXT_PUBLIC_WEB_URL: process.env.NEXT_PUBLIC_WEB_URL,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_DOCS_URL: process.env.NEXT_PUBLIC_DOCS_URL,
    },
});
exports.keys = keys;

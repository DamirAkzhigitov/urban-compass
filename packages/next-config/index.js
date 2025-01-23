"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAnalyzer = exports.config = void 0;
const bundle_analyzer_1 = __importDefault(require("@next/bundle-analyzer"));
// @ts-expect-error No declaration file
const nextjs_monorepo_workaround_plugin_1 = require("@prisma/nextjs-monorepo-workaround-plugin");
const otelRegex = /@opentelemetry\/instrumentation/;
exports.config = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
            },
        ],
    },
    // biome-ignore lint/suspicious/useAwait: rewrites is async
    async rewrites() {
        return [
            {
                source: '/ingest/static/:path*',
                destination: 'https://us-assets.i.posthog.com/static/:path*',
            },
            {
                source: '/ingest/:path*',
                destination: 'https://us.i.posthog.com/:path*',
            },
            {
                source: '/ingest/decide',
                destination: 'https://us.i.posthog.com/decide',
            },
        ];
    },
    webpack(config, { isServer }) {
        if (isServer) {
            config.plugins = [...config.plugins, new nextjs_monorepo_workaround_plugin_1.PrismaPlugin()];
        }
        config.ignoreWarnings = [{ module: otelRegex }];
        return config;
    },
    // This is required to support PostHog trailing slash API requests
    skipTrailingSlashRedirect: true,
};
const withAnalyzer = (sourceConfig) => (0, bundle_analyzer_1.default)()(sourceConfig);
exports.withAnalyzer = withAnalyzer;

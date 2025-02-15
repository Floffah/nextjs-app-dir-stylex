import stylexPlugin from "@stylexswc/nextjs-plugin";
import type { NextConfig } from "next";
import path from "node:path";

const rootDir = __dirname;

const withStylex = stylexPlugin({
    rsOptions: {
        dev: process.env.NODE_ENV === "development",
        test: process.env.NODE_ENV === "test",
        runtimeInjection: false,
        aliases: {
            "@/*": [path.join(rootDir, "src/*")],
        },
        unstable_moduleResolution: {
            type: "commonJS",
            // rootDir,
        },
    },
    extractCSS: false,
});

const nextConfig = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
} satisfies NextConfig;

export default withStylex(nextConfig);
const path = require("path");

const rootDir = __dirname;

module.exports = {
    plugins: {
        "@stylexswc/postcss-plugin": {
            include: [rootDir + "/src/**/*.{js,jsx,ts,tsx}"],
            useCSSLayers: true,
            rsOptions: {
                dev: process.env.NODE_ENV === "development",
                test: process.env.NODE_ENV === "test",
                runtimeInjection: false,
                genConditionalClasses: true,
                treeshakeCompensation: true,
                useRemForFontSize: true,
                aliases: {
                    "@/*": [path.join(rootDir, "src/*")],
                },
                unstable_moduleResolution: {
                    type: "commonJS",
                    rootDir,
                },
            },
            cwd: rootDir,
        },
        "postcss-preset-env": {},
    },
};

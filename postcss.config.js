const path = require("path");

const projectRoot = __dirname;

module.exports = {
    plugins: {
        "@stylexswc/postcss-plugin": {
            include: ["src/**/*.{js,jsx,ts,tsx}"],
            useCSSLayers: true,
            rsOptions: {
                dev: process.env.NODE_ENV === "development",
                test: process.env.NODE_ENV === "test",
                aliases: {
                    "@/*": [path.join(projectRoot, "src/*")],
                },
                unstable_moduleResolution: {
                    type: "commonJS",
                    rootDir: projectRoot, // if you switch this to projectRoot it has the exact same behaviour
                },
            },
        },
        "postcss-preset-env": {},
    },
};
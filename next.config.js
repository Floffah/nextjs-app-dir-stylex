/** @type {import('next').NextConfig} */
const stylexPlugin = require("@stylexswc/nextjs-plugin");
const withMDX = require("@next/mdx")();


const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  transpilePackages: ["@stylexjs/open-props"],
  // Optionally, add any other Next.js config below
  swcMinify: true,
  experimental: {
    mdxRs: true,
    swcPlugins: [[
      "@stylexswc/swc-plugin",
      {
        "dev": false,
        "runtimeInjection": false,
        "genConditionalClasses": true,
        "treeshakeCompensation": true,
        "unstable_moduleResolution": {
          "type": "commonJS",
          "rootDir": __dirname
        }
      }
    ]],
  },
};

module.exports = stylexPlugin({
  rootDir: __dirname,
})(withMDX(nextConfig));

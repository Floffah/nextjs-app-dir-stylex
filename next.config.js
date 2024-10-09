const path = require('path');
const rootDir = __dirname;
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
  },
};

module.exports = stylexPlugin({
  rootDir,
  // Add any Stylex options here
  dev: process.env.NODE_ENV === 'development',
  genConditionalClasses: true,
  treeshakeCompensation: true,
  aliases: {
    '@/*': [
      path.join(rootDir, '*'),
    ],
  },
  unstable_moduleResolution: {
    type: 'commonJS',
    rootDir
  },
})(withMDX(nextConfig));

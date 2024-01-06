// @ts-check
// import withPlaiceholder from "@plaiceholder/next";
// @ts-ignore
const { withPlaiceholder } = require("@plaiceholder/next");

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlaiceholder({
    // transpilePackages: ["@plaiceholder/ui"],
    images: {
        domains: ["res.cloudinary.com"]
      },
});
// const nextConfig = {
//   // transpilePackages: ["@plaiceholder/ui"],
//     images: {
//         domains: ["res.cloudinary.com"]
//       },
//       reactStrictMode: false,
// }

// export default withPlaiceholder(nextConfig);

// module.exports = withPlaiceholder(nextConfig)

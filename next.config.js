// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  transpilePackages: ["@plaiceholder/ui"],
  images: {
        domains: ["res.cloudinary.com"],
      },
      reactStrictMode: false,
};

export default withPlaiceholder(nextConfig);


// /**
//  * @type {import('next').NextConfig}
//  */

// const nextConfig = {
//   images: {
//     domains: ["res.cloudinary.com"],
//   },
//   reactStrictMode: false,
// };

// module.exports = nextConfig;

// git add .
// git commit -m 'test'
// git push

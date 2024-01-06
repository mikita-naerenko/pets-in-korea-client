// // @ts-check
// import withPlaiceholder  from "@plaiceholder/next";
// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   images: {
//         domains: ["res.cloudinary.com"],
//       },
// };

// export default withPlaiceholder(nextConfig);

// CONFIG ABOVE DOESN'T WORK, LOGIC WILL BE IMPLEMENTED ON A PUBLICK API


/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;

// git add .
// git commit -m 'test'
// git push

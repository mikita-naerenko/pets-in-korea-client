// @ts-check


/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // transpilePackages: ["@plaiceholder/ui"],
  images: {
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode: false,
};

// export default withPlaiceholder(nextConfig);

module.exports = nextConfig;

// git add .
// git commit -m 'test'
// git push

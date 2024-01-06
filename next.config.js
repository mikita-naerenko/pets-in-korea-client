import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com"]
      },
      reactStrictMode: false,
}

export default withPlaiceholder(nextConfig);

// module.exports = nextConfig

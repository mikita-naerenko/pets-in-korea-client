


/**
 * @type {import('next').NextConfig}
 */

// const nextConfig = {
  
// };

// module.exports = nextConfig;


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'], 
  },
}
 
module.exports = withBundleAnalyzer(nextConfig)
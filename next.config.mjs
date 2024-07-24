/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
        IMAGE_URL: process.env.IMAGE_URL
    },
    images: {
        domains: ['cdn.sanity.io'],
      },
};

export default nextConfig;

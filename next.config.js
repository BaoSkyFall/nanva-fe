/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']

};

module.exports = nextConfig;

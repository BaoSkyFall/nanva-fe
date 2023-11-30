/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
    // pageExtensions: ['_document.page.js', '_app.page.js', 'index.page.js', '404.page.js', 'cart.page.js', 'checkout.page.js', 'failed.page.js', 'success.page.js']

};

module.exports = nextConfig;

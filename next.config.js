/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [{ hostname:"images.unsplash.com"}]
    },
    experimental: {
        serverActions: true,
    },
};

module.exports = nextConfig;

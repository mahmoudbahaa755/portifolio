/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com'],
    },
    env: {
        CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    },
}

module.exports = nextConfig

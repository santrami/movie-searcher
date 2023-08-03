/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["via.placeholder.com","image.tmdb.org"]
    }, 
    env: {
        API_KEY: process.env.API_KEY,
    }
}

module.exports = nextConfig

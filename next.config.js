/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true ,
    domains: ["w3.org"],
  },
};

module.exports = nextConfig

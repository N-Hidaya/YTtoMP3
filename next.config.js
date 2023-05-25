/** @type {import('next').NextConfig} */
require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["upcdn.io", "replicate.delivery", "lh3.googleusercontent.com"],
  },
  env: {
    NEXT_ID: process.env.NEXT_ID,
    NEXT_API_KEY: process.env.NEXT_API_KEY,
    NEXT_API_HOST: process.env.NEXT_API_HOST
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/Nutlope/restorePhotos",
        permanent: false,
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/templates/next.js/ai-photo-restorer",
        permanent: false,
      },
    ];
  },
};

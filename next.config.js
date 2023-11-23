/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


const path = require('path');

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};
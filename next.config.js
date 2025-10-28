// next.config.js
const { withPayload } = require('@payloadcms/next/withPayload')

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
}

module.exports = withPayload(nextConfig)
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  webpack: (config, { isServer, dev }) => {
    // Enable source maps in development
    if (dev) {
      config.devtool = 'inline-source-map'
    }

    return config
  },
}

module.exports = nextConfig

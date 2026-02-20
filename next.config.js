/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Rediriger non-www vers www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'les-transex.com',
          },
        ],
        destination: 'https://www.les-transex.com/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
        {
            protocol: 'http',
            hostname: 'backend',
            port: '8000',
        }
    ]
  },
  output: 'standalone',
};



export default nextConfig;

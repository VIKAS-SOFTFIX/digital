/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ['randomuser.me'],
  },
  sassOptions: {

    includePaths: ['./src'],
  },
};

export default nextConfig;

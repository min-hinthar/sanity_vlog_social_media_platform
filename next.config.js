/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  
    reactStrictMode: true,
    images: {
      domains: [
        'lh3.googleusercontent.com',
        'cdn.pixabay.com',
        'p16-amd-va.tiktokcdn.com',
        'image.shutterstock.com',
        'avatars.githubusercontent.com',
        'lh3.googleusercontent.com',
        'github.githubassets.com'
      ],
    },
  };
  
  module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        'lh3.googleusercontent.com',
        'cdn.pixabay.com',
        'p16-amd-va.tiktokcdn.com',
        'image.shutterstock.com',
        'avatars.githubusercontent.com',
        'scontent-lax3-1.xx.fbcdn.net'
      ],
    },
  };
  
  module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => {
    return [
      {
        source: '/auth/google',
        destination: 'https://quick-online.ru/api/auth/google',
      },
      {
        source: '/auth/github',
        destination: 'https://quick-online.ru/api/auth/github',
      },
    ];
  },
  // rewrites: () => {
  //   return [
  //     {
  //       source: '/auth/google',
  //       destination: 'http://localhost:4200/auth/google',
  //     },
  //     {
  //       source: '/auth/github',
  //       destination: 'http://localhost:4200/auth/github',
  //     },
  //   ];
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

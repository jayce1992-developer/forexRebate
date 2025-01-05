import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/_api_/:path*',
        destination: 'https://www.baidu.com'
      }
    ]
  },
  i18n: {
    locales: ['en', 'zh', 'fr'], // 支持的语言
    defaultLocale: 'en', // 默认语言
    localeDetection: false,
  },
};

export default nextConfig;

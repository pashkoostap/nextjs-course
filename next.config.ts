/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;

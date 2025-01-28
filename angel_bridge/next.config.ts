import type { NextConfig } from 'next'
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

const nextConfig: NextConfig = {
  images: {
    domains: ['angelbridge.s3.ap-northeast-2.amazonaws.com', 'k.kakaocdn.net'],
  },
  /* config options here */
}

export default withVanillaExtract(nextConfig)

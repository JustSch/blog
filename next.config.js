/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})

const nextConfig = {
  // any configs you need
  basePath: '/blog',
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = withNextra(nextConfig)

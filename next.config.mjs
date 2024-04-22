import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "amrita.edu"
      }
    ]
  },
  experimental: {
    mdxRs: true
  }
}
 
const withMDX = createMDX({});
 
export default withMDX(nextConfig);
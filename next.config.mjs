import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com"
      }
    ]
  },
  experimental: {
    mdxRs: true
  }
}
 
const withMDX = createMDX({});
 
export default withMDX(nextConfig);
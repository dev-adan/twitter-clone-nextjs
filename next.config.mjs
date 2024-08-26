/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "picsum.photos",
        },
        {
          protocol: "https",
          hostname: "healthwire.pk",
        },
        {
          protocol: "https",
          hostname: "images.pexels.com",
        },
      ],
    },
  };
  
  export default nextConfig;
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Domínios permitidos para imagens locais
    remotePatterns: [
      {
        "hostname": "png.pngtree.com", // Domínio permitido para imagens remotas
      }
    ],
  },
};
export default nextConfig;

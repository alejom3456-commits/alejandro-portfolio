/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // No eslint config is shipped with this project; skip the lint pass
    // during `next build` so a missing/optional dependency never blocks
    // a production deploy on Vercel.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

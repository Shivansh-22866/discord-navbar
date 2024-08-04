import withPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache.js';

const nextConfig = {
  reactStrictMode: true,
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
});
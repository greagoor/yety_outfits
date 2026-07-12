import type { NextConfig } from "next";

// ── Security headers applied to every response ──────────────────────────────
// These headers don't affect UI/UX — they harden the HTTP layer.
const securityHeaders = [
  // Prevent MIME-type sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Disallow rendering in iframes (clickjacking protection)
  { key: 'X-Frame-Options', value: 'DENY' },
  // Send full referrer within same origin, only origin cross-origin
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Restrict access to sensitive browser APIs
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gyascwedereeidjcaluw.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

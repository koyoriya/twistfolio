import { withContentlayer } from 'next-contentlayer'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withContentlayer({nextConfig});

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();

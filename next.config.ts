import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  output: "export",
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  trailingSlash: true,
};

export default nextConfig;

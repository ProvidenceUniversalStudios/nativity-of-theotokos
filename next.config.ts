import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [new URL("https://holytrinityorthodox.com/**")],
	},
};

export default nextConfig;

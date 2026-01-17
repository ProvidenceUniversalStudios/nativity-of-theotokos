import type { NextConfig } from "next";
import withPlaiceholder from "@plaiceholder/next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [new URL("https://holytrinityorthodox.com/**")],
	},
	turbopack: {},
};

export default withPlaiceholder(nextConfig);

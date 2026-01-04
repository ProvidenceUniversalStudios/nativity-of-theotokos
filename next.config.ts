import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [new URL("https://holytrinityorthodox.com/**")],
	},
};

export default withFlowbiteReact(nextConfig);

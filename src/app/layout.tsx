import type { Metadata } from "next";
import "./globals.css";
import Header from "../lib/component/header/Header";
import { newReadonlyModel } from "@mvc-react/mvc";
import Footer from "../lib/component/footer/Footer";
import { googleSansFlex } from "../lib/third-party/fonts";

export const metadata: Metadata = {
	title: {
		template: "%s | Nativity of the Theotokos Church",
		default: "Home | Nativity of the Theotokos Church",
	},
	description:
		"Official website of the Nativity of the Theotokos parish of the Russian Orthodox Church in Zimbabwe. (est. 2025)",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased ${googleSansFlex.className}`}>
				<Header
					model={newReadonlyModel({
						title: "Nativity of the Theotokos Russian Orthodox Church",
						navlinks: [
							{ link: "/", text: "Home" },
							{
								link: "/#resources",
								text: "Resources",
								isInteractive: true,
							},
							{
								link: "/#media",
								text: "Media",
								isInteractive: true,
							},
							{
								link: "/#resources",
								text: "About Us",
								isInteractive: true,
							},
							{
								link: "/#footer",
								text: "Contact",
								isInteractive: true,
							},
						],
					})}
				/>
				{children}
				<Footer
					model={newReadonlyModel({
						copyrightText:
							"2026 Nativity of the Theotokos Parish. All Rights Reserved.",
					})}
				/>
			</body>
		</html>
	);
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "../lib/component/header/Header";
import { newReadonlyModel } from "@mvc-react/mvc";
import Footer from "../lib/component/footer/Footer";
import { Google_Sans, Google_Sans_Flex } from "next/font/google";
import LanguageSwitcher from "../lib/component/language-switcher/LanguageSwitcher";
import { Language } from "../lib/model/language-switcher";

export const metadata: Metadata = {
	title: {
		template: "%s | Nativity of the Theotokos Church",
		default: "Home | Nativity of the Theotokos Church",
	},
	description:
		"Official website of the Nativity of the Theotokos parish of the Russian Orthodox Church in Zimbabwe. (est. 2025)",
};

const googleSansFlex = Google_Sans_Flex({
	subsets: ["latin"],
	variable: "--font-g-flex",
	display: "swap",
});
const googleSans = Google_Sans({
	subsets: ["cyrillic", "cyrillic-ext"],
	variable: "--font-g-sans",
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const language: Language = "en";

	return (
		<html lang={language}>
			<body
				className={`antialiased ${googleSansFlex.variable} ${googleSans.variable}`}
			>
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
				<LanguageSwitcher
					model={{
						modelView: { displayedLanguage: "ru" },
						interact: async () => {
							"use server";
						},
					}}
				/>
			</body>
		</html>
	);
}

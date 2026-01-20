import LocalFont from "next/font/local";

const googleSansFlex = LocalFont({
	src: [
		{
			path: "../../../public/fonts/GoogleSansFlex/GoogleSansFlex-Var.ttf",
		},
	],
	variable: "--font-google-sans-flex",
	display: "swap",
});

const georgia = LocalFont({
	src: [{ path: "../../../public/fonts/Georgia/georgia.ttf" }],
	variable: "--font-georgia",
	display: "swap",
});

export { googleSansFlex, georgia };

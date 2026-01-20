"use client";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { ModeledVoidComponent } from "@mvc-react/components";
import { HeaderModel } from "../../model/header";
import { useMediaQuery } from "react-responsive";
import NavigationMenu from "./NavigationMenu";
import { newReadonlyModel } from "@mvc-react/mvc";
import { useRouter } from "next/navigation";
import LogoIcon from "@/public/logo-icon.svg";
import {
	DM_Serif_Display,
	EB_Garamond,
	Playfair_Display,
} from "next/font/google";
import { georgia } from "../../third-party/fonts";

const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"] });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

const Header = function ({ model }) {
	const { title, navlinks } = model.modelView;
	const isWideScreen = useMediaQuery({ minWidth: 768 });
	const router = useRouter();

	return (
		<header className={`w-full max-w-full top-0 sticky z-10`}>
			<div className="header-content flex flex-nowrap gap-9 justify-between p-4 lg:p-6 lg:px-7 items-center bg-gray-900/99 text-white">
				<div
					className="logo flex gap-3 items-center justify-center max-w-[18em] hover:cursor-pointer"
					onClick={() => {
						router.push("/");
					}}
				>
					<div className="size-11.25 max-w-11.25 max-h-11.25">
						<LogoIcon
							className="grow object-center object-contain"
							viewBox="0 0 430 430"
							width={45}
							height={45}
						/>
					</div>
					<span className={`${georgia.className}`}>{title}</span>
				</div>
				<NavigationMenu
					model={newReadonlyModel({
						navlinks,
						menuType: isWideScreen ? "spread" : "shelved",
					})}
				/>
			</div>
		</header>
	);
} as ModeledVoidComponent<HeaderModel>;

export default Header;

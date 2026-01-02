"use client";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { ModeledVoidComponent } from "@mvc-react/components";
import { HeaderModel } from "../../model/header";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import NavigationMenu from "./NavigationMenu";
import { newReadonlyModel } from "@mvc-react/mvc";

const Header = function ({ model }) {
	const { title, navlinks } = model.modelView;
	const isWideScreen = useMediaQuery({ minWidth: 768 });

	return (
		<header className="w-full max-w-full top-0 sticky z-10">
			<div className="header-content flex flex-nowrap gap-8 justify-between p-3 px-4 lg:p-6 lg:px-9 items-center bg-gray-900/99 text-white">
				<div className="logo flex gap-4 items-center justify-center md:max-w-[20em]">
					<Image src="/logo.svg" alt="logo" height={50} width={50} />
					<span className="text-base font-serif">{title}</span>
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

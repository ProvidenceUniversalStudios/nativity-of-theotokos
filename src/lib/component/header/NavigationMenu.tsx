import { ModeledVoidComponent } from "@mvc-react/components";
import { NavigationMenuModel } from "../../model/navigation-menu";
import Link from "next/link";
import { faBars as menuIcon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";

const NavigationMenu = function ({ model }) {
	const { navlinks, menuType } = model.modelView;

	return menuType == "spread" ? (
		<nav className="nav-bar flex gap-4 items-center justify-center">
			{[
				...navlinks.map((navlink, index) => (
					<Link
						key={index}
						href={navlink.link}
						className="navlink text-sm uppercase no-underline hover:text-[#DCB042]"
					>
						{navlink.text}
					</Link>
				)),
			]}
		</nav>
	) : (
		<>
			<Menu>
				<MenuButton as={Fragment}>
					<button className="flex items-center justify-center p-1 text-3xl bg-transparent hover:bg-black/45 hover:text-[#DCB042]">
						<FontAwesomeIcon icon={menuIcon} />
					</button>
				</MenuButton>
				<MenuItems
					anchor="bottom"
					transition
					className="min-w-fit w-40 flex flex-col gap-4 origin-top-right rounded-none uppercase bg-gray-800/99 text-sm border border-white/5 p-4 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0 z-20"
				>
					{navlinks.map((navlink, index) => (
						<MenuItem key={index} as={Fragment}>
							<Link className="block" href={navlink.link}>
								{navlink.text}
							</Link>
						</MenuItem>
					))}
				</MenuItems>
			</Menu>
		</>
	);
} as ModeledVoidComponent<NavigationMenuModel>;

export default NavigationMenu;

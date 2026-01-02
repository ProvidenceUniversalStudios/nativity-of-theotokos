import { ModeledVoidComponent } from "@mvc-react/components";
import { NavigationMenuModel } from "../../model/navigation-menu";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, DropdownItem } from "flowbite-react";

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
			<Dropdown
				className=""
				renderTrigger={() => (
					<FontAwesomeIcon
						className="bg-transparent text-3xl"
						icon={faBars}
					/>
				)}
			>
				{[
					...navlinks.map((navlink, index) => (
						<DropdownItem
							className="navlink w-[10em] text-sm uppercase no-underline hover:text-[#DCB042]"
							key={index}
							as={Link}
							href={navlink.link}
						>
							{navlink.text}
						</DropdownItem>
					)),
				]}
			</Dropdown>
		</>
	);
} as ModeledVoidComponent<NavigationMenuModel>;

export default NavigationMenu;

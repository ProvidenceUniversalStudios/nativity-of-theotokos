import { ReadonlyModel } from "@mvc-react/mvc";
import { Navlink } from "../type/miscellaneous";

export interface NavigationMenuModelView {
	navlinks: Navlink[];
	menuType: "shelved" | "spread";
}

export type NavigationMenuModel = ReadonlyModel<NavigationMenuModelView>;

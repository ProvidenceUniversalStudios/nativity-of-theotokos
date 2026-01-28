import { InteractiveModel, ModelInteraction } from "@mvc-react/mvc";

export type Language = "en" | "ru";

export interface LanguageSwitcherModelView {
	displayedLanguage: Language;
}

export type LanguageSwitcherModelInteraction =
	ModelInteraction<"SWITCH_LANGUAGE">;

export type LanguageSwitcherModel = InteractiveModel<
	LanguageSwitcherModelView,
	LanguageSwitcherModelInteraction
>;

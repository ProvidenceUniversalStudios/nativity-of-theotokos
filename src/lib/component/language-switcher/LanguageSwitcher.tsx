"use client";

import EnglishIcon from "@/public/english.svg";
import RussianIcon from "@/public/russian.svg";
import { ModeledVoidComponent } from "@mvc-react/components";
import { InitializedModel } from "@mvc-react/mvc";
import { JSX } from "react";
import { Language, LanguageSwitcherModel } from "../../model/language-switcher";
import "./language-switcher.css";

const languageToRenderedMap = new Map<Language, JSX.Element>([
	[
		"en",
		<span className="flex gap-2 items-center" key="en">
			<EnglishIcon className="size-5" />
			<span>English</span>
		</span>,
	],
	[
		"ru",
		<span className="flex gap-2 items-center" key="ru">
			<RussianIcon className="size-5" />
			<span>Русский</span>
		</span>,
	],
]);

const LanguageSwitcher = function ({ model }) {
	const { modelView, interact } = model;
	const { displayedLanguage } = modelView;

	return (
		<button
			className="language-switcher sticky bottom-[-1] right-1/20 float-end z-20 p-3 w-[5em] rounded-t-lg min-w-fit bg-gray-900 hover:underline active:bg-gray-950 text-white text-sm md:text-base border border-white/20 "
			onClick={() => interact({ type: "SWITCH_LANGUAGE" })}
		>
			{languageToRenderedMap.get(displayedLanguage)}
		</button>
	);
} satisfies ModeledVoidComponent<InitializedModel<LanguageSwitcherModel>>;

export default LanguageSwitcher;

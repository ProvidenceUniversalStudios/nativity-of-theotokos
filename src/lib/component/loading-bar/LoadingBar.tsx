"use client";

import { usePathname } from "@/src/i18n/navigation";
import { ModeledVoidComponent } from "@mvc-react/components";
import { useEffect, useState } from "react";
import { LoadingBarModel } from "../../model/loading-bar";
import "./loading-bar.css";

const LoadingBar = function ({ model }) {
	const { modelView, interact } = model;
	const currentPathName = usePathname();
	const [initialPathName, setInitialPathName] = useState(currentPathName);

	useEffect(() => {
		const _ = async () => {
			if (initialPathName != currentPathName && modelView?.isLoading) {
				await interact({
					type: "SET_LOADING",
					input: { value: false },
				});
				setInitialPathName(currentPathName);
			}
		};
		_();
	}, [currentPathName, initialPathName, interact, modelView?.isLoading]);

	return (
		<div
			className={`loading-bar h-[1.5px] bg-[#dcb042] sticky top-0 z-12 ${!modelView?.isLoading && "hidden"}`}
		/>
	);
} satisfies ModeledVoidComponent<LoadingBarModel>;

export default LoadingBar;

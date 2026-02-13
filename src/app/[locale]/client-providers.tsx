"use client";
import { PageLoadingBarContext } from "@/src/lib/component/page-loading-bar/PageLoadingBar";
import { loadingBarVIInterface } from "@/src/lib/model-implementation/loading-bar";
import { useNewStatefulInteractiveModel } from "@mvc-react/stateful";

export const ClientProviders = function ({
	children,
}: {
	children: React.ReactNode;
}) {
	const pageLoadingBar = useNewStatefulInteractiveModel(
		loadingBarVIInterface(),
	);

	return (
		<PageLoadingBarContext.Provider value={pageLoadingBar}>
			{children}
		</PageLoadingBarContext.Provider>
	);
};

export default ClientProviders;

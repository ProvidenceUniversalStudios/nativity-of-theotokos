"use client";

import { errorPageVIInterface } from "@/src/lib/model-implementation/error-page";
import { useInitializedStatefulInteractiveModel } from "@mvc-react/stateful";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useContext, useEffect, useLayoutEffect } from "react";
import ErrorPage from "./error-page/ErrorPage";
import { PageLoadingBarContext } from "@/src/lib/component/page-loading-bar/PageLoadingBar";

export async function generateMetadata({
	params,
}: {
	params: { locale: string };
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "error" });

	return {
		title: t("metaTitle"),
	};
}

export default function Page({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const message = error.digest ? `digest: ${error.digest}` : error.message;
	const pageLoadingBar = useContext(PageLoadingBarContext);
	const { modelView: errorPageModelView, interact: errorPageInteract } =
		useInitializedStatefulInteractiveModel(
			errorPageVIInterface(reset, pageLoadingBar),
			{ message },
		);

	useEffect(() => {
		if (message != errorPageModelView.message)
			errorPageInteract({ type: "REPORT_ERROR", input: { message } });
	}, [errorPageInteract, errorPageModelView.message, message]);

	useLayoutEffect(() => {
		return () => {
			// HACK
			setTimeout(
				() =>
					pageLoadingBar.interact({
						type: "SET_LOADING",
						input: { value: false },
					}),
				1000,
			);
		};
	}, [pageLoadingBar]);

	return (
		<ErrorPage
			model={{
				modelView: errorPageModelView,
				interact: errorPageInteract,
			}}
		/>
	);
}

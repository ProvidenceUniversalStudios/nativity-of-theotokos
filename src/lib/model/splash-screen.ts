import { ReadonlyModel } from "@mvc-react/mvc";

export interface SplashScreenModelView {
	isShown: boolean;
}

export type SplashScreenModel = ReadonlyModel<SplashScreenModelView>;

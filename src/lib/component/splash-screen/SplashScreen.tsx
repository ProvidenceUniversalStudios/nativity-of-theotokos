import { ModeledVoidComponent } from "@mvc-react/components";
import { SplashScreenModel } from "../../model/splash-screen";
import LogoIcon from "@/public/logo-icon.svg";

const SplashScreen = function ({ model }) {
	const { isShown } = model.modelView;

	return isShown ? (
		<div className="splash flex absolute w-screen h-full z-30 top-0 overflow-hidden ">
			<div className="bg-gray-900 flex items-center justify-center grow p-9">
				<div className="logo flex gap-3 items-center justify-center max-w-[25em] animate-pulse">
					<LogoIcon
						className="h-20 w-20 object-center object-contain"
						viewBox="0 0 430 430"
					/>
				</div>
			</div>
		</div>
	) : (
		<></>
	);
} as ModeledVoidComponent<SplashScreenModel>;

export default SplashScreen;

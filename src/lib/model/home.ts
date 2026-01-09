import { ReadonlyModel } from "@mvc-react/mvc";
import { DailyQuote, DailyReadings } from "../type/miscellaneous";

export interface HomeModelView {
	dailyReadings: DailyReadings;
	dailyQuote: DailyQuote;
}

export type HomeModel = ReadonlyModel<HomeModelView>;

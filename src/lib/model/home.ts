import { InteractiveModel, ModelInteraction } from "@mvc-react/mvc";
import { DailyQuote, DailyReadings, ScheduleItem } from "../type/miscellaneous";
import { LatestNews } from "../server-actions/home";

export interface HomeModelView {
	dailyReadings: DailyReadings;
	dailyQuote: DailyQuote;
	scheduleItems: ScheduleItem[];
	newsArticles: LatestNews;
}

export type HomeModelInteraction = ModelInteraction<"REFRESH">;

export type HomeModel = InteractiveModel<HomeModelView, HomeModelInteraction>;

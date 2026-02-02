import { ReadonlyModel } from "@mvc-react/mvc";
import { NewsArticle } from "../type/miscellaneous";

export interface NewsArticleModelView {
	article: NewsArticle;
}

export type NewsArticleModel = ReadonlyModel<NewsArticleModelView>;

import { ReadonlyModel } from "@mvc-react/mvc";
import { NewsArticle } from "../type/miscellaneous";

export type NewsArticlePreview = Omit<NewsArticle, "body" | "dateUpdated">;

export interface NewsArticlePreviewModelView {
	articlePreview: NewsArticlePreview;
	isFeatured: boolean;
}

export type NewsArticlePreviewModel =
	ReadonlyModel<NewsArticlePreviewModelView>;

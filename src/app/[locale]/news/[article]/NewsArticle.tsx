import { NewsArticleModel } from "@/src/lib/model/news-article";
import { ModeledVoidComponent } from "@mvc-react/components";

const NewsArticle = function ({ model }) {
	const { title, author, articleImage, dateCreated, dateUpdated, body } =
		model.modelView.article;
	return <></>;
} satisfies ModeledVoidComponent<NewsArticleModel>;

export default NewsArticle;

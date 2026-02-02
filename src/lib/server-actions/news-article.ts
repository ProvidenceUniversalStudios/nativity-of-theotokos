"use server";

import { NewsArticle } from "../type/miscellaneous";

export async function getArticle(articleId: string): Promise<NewsArticle> {
	throw new Error("Unimplemented");
}

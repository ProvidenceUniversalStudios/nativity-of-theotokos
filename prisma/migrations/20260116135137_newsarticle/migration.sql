-- CreateTable
CREATE TABLE "NewsArticle" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "dateUpdated" TIMESTAMP(3),
    "body" TEXT NOT NULL,
    "snippet" TEXT NOT NULL,
    "titleRu" TEXT,
    "authorRu" TEXT,
    "bodyRu" TEXT,
    "snippetRu" TEXT,

    CONSTRAINT "NewsArticle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeaturedArticle" (
    "newsArticleId" INTEGER NOT NULL,

    CONSTRAINT "FeaturedArticle_pkey" PRIMARY KEY ("newsArticleId")
);

-- AddForeignKey
ALTER TABLE "FeaturedArticle" ADD CONSTRAINT "FeaturedArticle_newsArticleId_fkey" FOREIGN KEY ("newsArticleId") REFERENCES "NewsArticle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

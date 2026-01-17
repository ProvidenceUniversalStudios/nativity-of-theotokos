/*
  Warnings:

  - A unique constraint covering the columns `[link]` on the table `NewsArticle` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `link` to the `NewsArticle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NewsArticle" ADD COLUMN     "link" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "NewsArticle_link_key" ON "NewsArticle"("link");

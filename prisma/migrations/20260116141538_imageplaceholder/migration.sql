/*
  Warnings:

  - Added the required column `imageLink` to the `NewsArticle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NewsArticle" ADD COLUMN     "imageLink" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ImagePlaceholder" (
    "imageLink" TEXT NOT NULL,
    "placeholder" TEXT NOT NULL,

    CONSTRAINT "ImagePlaceholder_pkey" PRIMARY KEY ("imageLink")
);

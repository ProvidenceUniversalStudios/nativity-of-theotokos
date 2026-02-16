/*
  Warnings:

  - A unique constraint covering the columns `[date,imageLink]` on the table `DailyGalleryImage` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "DailyGalleryImage_imageLink_key";

-- AlterTable
ALTER TABLE "NewsArticle" ADD COLUMN     "imageCaption" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "DailyGalleryImage_date_imageLink_key" ON "DailyGalleryImage"("date", "imageLink");

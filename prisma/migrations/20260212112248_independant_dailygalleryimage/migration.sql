/*
  Warnings:

  - The primary key for the `DailyGalleryImage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `galleryImageId` on the `DailyGalleryImage` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[imageLink]` on the table `DailyGalleryImage` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imageLink` to the `DailyGalleryImage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DailyGalleryImage" DROP CONSTRAINT "DailyGalleryImage_galleryImageId_fkey";

-- DropForeignKey
ALTER TABLE "FeaturedArticle" DROP CONSTRAINT "FeaturedArticle_newsArticleId_fkey";

-- DropForeignKey
ALTER TABLE "RemovedScheduleItem" DROP CONSTRAINT "RemovedScheduleItem_scheduleItemId_fkey";

-- DropForeignKey
ALTER TABLE "ScheduleItemTime" DROP CONSTRAINT "ScheduleItemTime_scheduleItemId_fkey";

-- AlterTable
ALTER TABLE "DailyGalleryImage" DROP CONSTRAINT "DailyGalleryImage_pkey",
DROP COLUMN "galleryImageId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "imageLink" TEXT NOT NULL,
ADD CONSTRAINT "DailyGalleryImage_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "DailyGalleryImage_imageLink_key" ON "DailyGalleryImage"("imageLink");

-- AddForeignKey
ALTER TABLE "ScheduleItemTime" ADD CONSTRAINT "ScheduleItemTime_scheduleItemId_fkey" FOREIGN KEY ("scheduleItemId") REFERENCES "ScheduleItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RemovedScheduleItem" ADD CONSTRAINT "RemovedScheduleItem_scheduleItemId_fkey" FOREIGN KEY ("scheduleItemId") REFERENCES "ScheduleItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeaturedArticle" ADD CONSTRAINT "FeaturedArticle_newsArticleId_fkey" FOREIGN KEY ("newsArticleId") REFERENCES "NewsArticle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

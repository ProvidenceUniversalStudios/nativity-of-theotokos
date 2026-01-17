/*
  Warnings:

  - The primary key for the `DailyGalleryImage` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "DailyGalleryImage_date_galleryImageId_key";

-- AlterTable
ALTER TABLE "DailyGalleryImage" DROP CONSTRAINT "DailyGalleryImage_pkey",
ADD CONSTRAINT "DailyGalleryImage_pkey" PRIMARY KEY ("date", "galleryImageId");

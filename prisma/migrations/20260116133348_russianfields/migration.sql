/*
  Warnings:

  - A unique constraint covering the columns `[authorRu,quoteRu]` on the table `Quote` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[date,locationRu]` on the table `ScheduleItem` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Quote" ADD COLUMN     "authorRu" TEXT,
ADD COLUMN     "quoteRu" TEXT,
ADD COLUMN     "sourceRu" TEXT;

-- AlterTable
ALTER TABLE "ScheduleItem" ADD COLUMN     "locationRu" TEXT,
ADD COLUMN     "titleRu" TEXT;

-- AlterTable
ALTER TABLE "ScheduleItemTime" ADD COLUMN     "designationRu" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Quote_authorRu_quoteRu_key" ON "Quote"("authorRu", "quoteRu");

-- CreateIndex
CREATE UNIQUE INDEX "ScheduleItem_date_locationRu_key" ON "ScheduleItem"("date", "locationRu");

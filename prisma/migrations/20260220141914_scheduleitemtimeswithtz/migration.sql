/*
  Warnings:

  - Changed the type of `time` on the `ScheduleItemTime` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ScheduleItemTime" DROP COLUMN "time",
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ScheduleItemTime_time_scheduleItemId_key" ON "ScheduleItemTime"("time", "scheduleItemId");

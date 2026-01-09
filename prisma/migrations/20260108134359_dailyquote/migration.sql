-- CreateTable
CREATE TABLE "DailyQuote" (
    "day" TIMESTAMP(3) NOT NULL,
    "quoteId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DailyQuote_day_key" ON "DailyQuote"("day");

-- AddForeignKey
ALTER TABLE "DailyQuote" ADD CONSTRAINT "DailyQuote_quoteId_fkey" FOREIGN KEY ("quoteId") REFERENCES "Quote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

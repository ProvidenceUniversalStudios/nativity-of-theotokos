-- CreateTable
CREATE TABLE "GalleryImage" (
    "id" SERIAL NOT NULL,
    "imageLink" TEXT NOT NULL,

    CONSTRAINT "GalleryImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyGalleryImage" (
    "date" DATE NOT NULL,
    "galleryImageId" INTEGER NOT NULL,

    CONSTRAINT "DailyGalleryImage_pkey" PRIMARY KEY ("date")
);

-- CreateIndex
CREATE UNIQUE INDEX "DailyGalleryImage_date_galleryImageId_key" ON "DailyGalleryImage"("date", "galleryImageId");

-- AddForeignKey
ALTER TABLE "DailyGalleryImage" ADD CONSTRAINT "DailyGalleryImage_galleryImageId_fkey" FOREIGN KEY ("galleryImageId") REFERENCES "GalleryImage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the `Festival` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Festival";

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

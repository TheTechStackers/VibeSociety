/*
  Warnings:

  - You are about to drop the column `authorId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Event` table. All the data in the column will be lost.
  - Added the required column `artist` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "authorId",
DROP COLUMN "content",
DROP COLUMN "published",
ADD COLUMN     "artist" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL;

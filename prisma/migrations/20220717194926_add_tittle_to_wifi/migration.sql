/*
  Warnings:

  - Added the required column `tittle` to the `wifis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wifis" ADD COLUMN     "tittle" TEXT NOT NULL;

/*
  Warnings:

  - You are about to drop the column `usersId` on the `credentials` table. All the data in the column will be lost.
  - Added the required column `userId` to the `credentials` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "credentials" DROP CONSTRAINT "credentials_usersId_fkey";

-- AlterTable
ALTER TABLE "credentials" DROP COLUMN "usersId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "credentials" ADD CONSTRAINT "credentials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

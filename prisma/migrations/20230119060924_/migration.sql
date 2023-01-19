/*
  Warnings:

  - You are about to drop the column `number` on the `adresses2` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `users` table. All the data in the column will be lost.
  - Added the required column `number1` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "adresses2" DROP COLUMN "number",
ADD COLUMN     "number2" TEXT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "number",
ADD COLUMN     "number1" TEXT NOT NULL;

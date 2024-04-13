/*
  Warnings:

  - A unique constraint covering the columns `[tokenConfirmationAccount]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "accounts_tokenConfirmationAccount_key" ON "accounts"("tokenConfirmationAccount");

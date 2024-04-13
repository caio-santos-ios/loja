-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "accountActivated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tokenResetPassword" TEXT;

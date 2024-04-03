/*
  Warnings:

  - Added the required column `payment_method` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('APROVATED', 'DISAPPROVED', 'ANALYSIS');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('PIX', 'BOLETO', 'CARTAO');

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "payment_method" "PaymentMethod" NOT NULL,
ADD COLUMN     "status" "PaymentStatus" NOT NULL DEFAULT 'ANALYSIS';

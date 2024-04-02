-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "photo" TEXT NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "description" TEXT NOT NULL,
    "price" MONEY NOT NULL,
    "quanty" INTEGER NOT NULL DEFAULT 100,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_name_key" ON "products"("name");

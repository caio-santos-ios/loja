import { Product } from "@prisma/client";
import { TrequestProduct } from "../interfaces/interface.product";
import { prisma } from "../database/prisma";

class ProductService {
    async create(product: TrequestProduct): Promise<Product>{
        const findProduct = await prisma.product.findUnique({
            where: {
                name: product.name
            }
        })

        if(findProduct) throw new Error("")

        const productCreated = await prisma.product.create({
            data: product
        })

        return productCreated
    }

    async read(): Promise<Product[]> {
        const products = await prisma.product.findMany()
        
        return products
    }
}

export const productService = new ProductService()
import { TrequestProduct } from "../interfaces/product.interface";
import { prisma } from "../database/prisma";

class ProductService {
    async create(product: TrequestProduct): Promise<any>{
        const teste = await prisma.order.findMany()

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

    async read(): Promise<any[]> {
        const products = await prisma.product.findMany()
        
        return products
    }

    async retrive(id: number): Promise<any> {
        const findProduct = await prisma.product.findUnique({
            where: {
                id
            }
        })

        if(!findProduct) throw new Error("not found")
        
        return findProduct
    }
    
    async update(id: number, productUpdate: TrequestProduct): Promise<any> {
        const findProduct = await prisma.product.findUnique({
            where: {
                id
            }
        })
        
        if(!findProduct) throw new Error("not found")
        
        const productUpdated = await prisma.product.update({
            where: {
                id
            },
            data: productUpdate
        })

        return productUpdated
    }
    
    async destroy(id: number): Promise<void> {
        const findProduct = await prisma.product.findUnique({
            where: {
                id
            }
        })

        if(!findProduct) throw new Error("not found")

        await prisma.product.delete({
            where: {
                id
            }
        })

        return
    }
}

export const productService = new ProductService()
import { prisma } from "../database/prisma";

class OrderService {
    async create(idProduct: number) {
        /*
        const findProduct = await prisma.product.findUnique({
            where: {
                id: idProduct
            }
        })
        
        if(!findProduct) throw new Error("Erro")

        const myOrder = await prisma.order.create({
            data: {
                product_id: idProduct
            }
        })

        return myOrder
        */
    }

    async read() {
        /*
        const orders = await prisma.order.findFirst()
        return orders
        */
    }
}

export const orderService = new OrderService()
import { AppError } from "../AppError";
import { prisma } from "../database/prisma";

class OrderService {
    async create(order: any): Promise<any> {
        const myOrder = await prisma.order.create({
            data: { ...order }
        })
        
        return myOrder
    }

    async read() {
        /*
        const orders = await prisma.order.findMany({
            include: {
                product: true
            }
        })
        
        return orders
        */
    }

    async retrive(id: number): Promise<any> {
        /*
        const order = await prisma.order.findUnique({
            where: {
                id
            }
        })

        if(!order) throw new AppError("not found", 404)

        return order
        */
    }
}

export const orderService = new OrderService()
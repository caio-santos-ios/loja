import { AppError } from "../AppError";
import { prisma } from "../database/prisma";
import { TresponseOrder } from "../interfaces/order.interface";

class OrderService {
    async create(order: any, accountId: number): Promise<any> {
        const findProduct = await prisma.product.findFirst({
            where: {
                id: order.id
            }
        })

        if(!findProduct) throw new AppError("not found product", 404)

        const myOrder = await prisma.order.create({
            data: {
                account_id: accountId,
                ...order
            }
        })

        return myOrder
    }

    async read() {
        const orders = await prisma.order.findMany({
            include: {
                product: true
            }
        })
        
        return orders
    }

    async retrive(id: number): Promise<any> {
        const findOrder = await prisma.order.findUnique({
            where: {
                id
            }
        })
        
        if(!findOrder) throw new AppError("Order não encontrada", 404)
            
        return findOrder    
    }

    async destroy(id: number): Promise<void> {
        const findOrder = await prisma.order.findUnique({
            where: {
                id
            }
        })

        if(!findOrder) throw new AppError("Order não encontrada", 404)
            
        await prisma.order.delete({
            where: {
                id
            }
        })
            
        return
    }
}

export const orderService = new OrderService()
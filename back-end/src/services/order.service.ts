import { AppError } from "../AppError";
import { prisma } from "../database/prisma";
import { TresponseOrder } from "../interfaces/order.interface";

class OrderService {
    async create(order: any): Promise<any> {
        const createdOrders = await prisma.order.createMany({
            data: order,
        })

        return createdOrders
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
            },
            include: {
                product: true
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
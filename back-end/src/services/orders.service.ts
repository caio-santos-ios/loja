import { Order } from "@prisma/client";
import { AppError } from "../AppError";
import { prisma } from "../database/prisma";
import { TrequestOrder } from "../interfaces/order.interfaces";

class OrderService {
    async create(order: any): Promise<any> {
        
        const myOrder = await prisma.order.create({
            data: { ...order }
        })
        console.log(myOrder)
        /*
        const findProduct = await prisma.product.findUnique({
            where: {
                id
            }
        })
        */
        return order
    }

    async read() {
        const orders = await prisma.order.findMany({
            include: {
                product: true
            }
        })
        
        return orders
    }

    async retrive(id: number): Promise<Order> {
        const order = await prisma.order.findUnique({
            where: {
                id
            }
        })

        if(!order) throw new AppError("not found", 404)

        return order
    }
}

export const orderService = new OrderService()
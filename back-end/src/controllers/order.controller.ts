import { Request, Response } from "express";
import { orderService } from "../services/orders.service";
import { Order } from "@prisma/client";

class OrderController {
    async create(req: Request, res: Response) {
        const order: Order = await orderService.create(req.body)
        
        return res.status(201).json(order)
    }
    
    async read(req: Request, res: Response) {
        const orders = await orderService.read()
        
        return res.status(200).json(orders)
    }

    async retrive(req: Request, res: Response) {
        const order: Order = await orderService.retrive(Number(req.params.id))

        return res.status(200).json(order)
    }
}

export const orderController = new OrderController()
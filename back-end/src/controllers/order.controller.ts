import { Request, Response } from "express";
import { orderService } from "../services/orders.service";

class OrderController {
    async create(req: Request, res: Response) {
        const order = orderService.create(Number(req.params.id))
        
        return res.status(201).json(order)
    }
    
    async read(req: Request, res: Response) {
        const orders = await orderService.read()
        
        return res.status(201).json(orders)
    }
}

export const orderController = new OrderController()
import { Request, Response } from "express";
import { orderService } from "../services/order.service";
import { accountService } from "../services/account.service";

class OrderController {
    async create(req: Request, res: Response) {
        const order = await orderService.create(req.body)
        
        return res.status(201).json(order)
    }
    
    async read(req: Request, res: Response) {
        const orders = await orderService.read()
        
        return res.status(200).json(orders)
    }

    async retrive(req: Request, res: Response) {
        const order = await orderService.retrive(Number(req.params.id))

        return res.status(200).json(order)
    }

    async destroy(req: Request, res: Response): Promise<Response> {
        await orderService.destroy(Number(req.params.id))

        return res.status(204).json()
    }
}

export const orderController = new OrderController()
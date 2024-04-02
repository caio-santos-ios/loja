import { Request, Response } from "express";

class ProductController {
    async create(req: Request, res: Response): Promise<Response> {

        return res.status(201).json({message: "Rota de criação"})
    }
    
    async read(req: Request, res: Response): Promise<Response> {

        return res.status(200).json({message: "Rota de listagem"})
    }
}

export const productController = new ProductController()
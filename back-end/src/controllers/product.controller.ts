import "dotenv/config";
import { Request, Response } from "express";
import {v2 as cloudinary} from 'cloudinary';
import { productService } from "../services/product.service";

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME!, 
    api_key: process.env.API_KEY!, 
    api_secret: process.env.API_SECRET! 
})

class ProductController {
    async create(req: Request, res: Response): Promise<Response> {
        const photo = await cloudinary.uploader.upload(req.file!.path, { folder: 'xike-press' })

        const product = await productService.create({ ...req.body, photo: photo.secure_url })

        return res.status(201).json(product)
    }
    
    async read(req: Request, res: Response): Promise<Response> {
        const products = await productService.read()

        return res.status(200).json(products) 
    }

    async retrive(req: Request, res: Response): Promise<Response> {
        const product = await productService.retrive(Number(req.params.id))

        return res.status(200).json(product)
    }
    
    async update(req: Request, res: Response): Promise<Response> {
        const product = await productService.update(Number(req.params.id), req.body)

        return res.status(200).json(product)
    }

    async destroy(req: Request, res: Response): Promise<Response> {
        await productService.destroy(Number(req.params.id))

        return res.status(204).json()
    }
}

export const productController = new ProductController()
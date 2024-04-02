import { Router } from "express";
import { productController } from "../controllers/product.controller";

export const productRouter: Router = Router()

productRouter.post("/", productController.create)
productRouter.get("/", productController.read)
import { Router } from "express";
import { productController } from "../controllers/product.controller";
import middlewareProduct from "../middlewares/product/index";

export const productRouter: Router = Router()

productRouter.post("/", middlewareProduct.single("image"), productController.create)
productRouter.get("/", productController.read)
productRouter.get("/:id", productController.retrive)
productRouter.patch("/:id", productController.update)
productRouter.delete("/:id", productController.destroy)
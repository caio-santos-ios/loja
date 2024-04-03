import { Router } from "express";
import { orderController } from "../controllers/order.controller";

export const orderRouter: Router = Router()

orderRouter.post("/", orderController.create)
orderRouter.get("/", orderController.read)
orderRouter.get("/:id", orderController.retrive)
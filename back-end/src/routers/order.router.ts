import { Router } from "express";
import { orderController } from "../controllers/order.controller";
import middlewareAccount from "../middlewares/account";

export const orderRouter: Router = Router()

orderRouter.post("/", middlewareAccount.verifyToken, orderController.create)
orderRouter.get("/", orderController.read)
orderRouter.get("/:id", orderController.retrive)
orderRouter.delete("/:id", /*middlewareAccount.verifyToken, middlewareAccount.verifyPermission,*/ orderController.destroy)
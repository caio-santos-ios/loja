import { Router } from "express";
import { accountController } from "../controllers/account.controller";
import middlewaresAccount from "../middlewares/account";

export const accountRouter: Router = Router()

accountRouter.post("/", accountController.create)
accountRouter.patch("/:token", accountController.confirmationAccount)
accountRouter.post("/login", accountController.login)
accountRouter.get("/", middlewaresAccount.verifyToken, middlewaresAccount.verifyPermission, accountController.read)
accountRouter.delete("/:id", middlewaresAccount.verifyToken, middlewaresAccount.verifyPermission, accountController.destroy)
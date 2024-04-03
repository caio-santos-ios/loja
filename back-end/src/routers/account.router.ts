import { Router } from "express";
import { accountController } from "../controllers/account.controller";

export const accountRouter: Router = Router()

accountRouter.post("/", accountController.create)
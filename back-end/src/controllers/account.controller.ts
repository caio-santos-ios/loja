import { Request, Response } from "express";
import { accountService } from "../services/account.service";

class AccountController {
    async create(req: Request, res: Response) {
        const account = await accountService.create(req.body)

        return res.status(201).json(account)
    }
}

export const accountController = new AccountController()
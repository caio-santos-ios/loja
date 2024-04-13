import { Request, Response } from "express";
import { accountService } from "../services/account.service";

class AccountController {
    async create(req: Request, res: Response): Promise<Response> {
        const account = await accountService.create(req.body)

        return res.status(201).json(account)
    }

    async confirmationAccount(req: Request, res: Response): Promise<Response> {
        const accountConfirmated = await accountService.confirmationAccount(req.params.token) 

        return res.status(200).json({ message: accountConfirmated })
    }

    async login(req: Request, res: Response): Promise<Response> {
        const token = await accountService.login(req.body)

        return res.status(200).json(token)
    }

    async read(req: Request, res: Response): Promise<Response> {
        const accounts = await accountService.read()

        return res.status(200).json(accounts)        
    }

    async destroy(req: Request, res: Response): Promise<Response> {
        await accountService.destroy(Number(req.params.id)) 
        
        return res.status(204)
    }
}

export const accountController = new AccountController()
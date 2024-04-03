import { Request, Response } from "express";
import { testeService } from "../services/teste";

class TesteCon {
    async create(req: Request, res: Response){
        const teste = await testeService.create()

        return res.status(201).json(teste)
    }

    async read(req: Request, res: Response) {
        const orders = await testeService.read()

        return res.status(200).json(orders)
    }
}

export const testeCon = new TesteCon()
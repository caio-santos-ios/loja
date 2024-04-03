import { Router } from "express";
import { testeCon } from "../controllers/teste";

export const routerTeste = Router()

routerTeste.post("/", testeCon.create)
routerTeste.get("/", testeCon.read)
import { prisma } from "../database/prisma"

class Teste {
    async create(){
        const teste = await prisma.order.findFirst()

        return teste
    }

    async read() {
        const orders = await prisma.order.findMany()

        return orders
    }
}

export const testeService = new Teste() 
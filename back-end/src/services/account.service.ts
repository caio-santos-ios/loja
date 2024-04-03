import { prisma } from "../database/prisma";
import { TrequestAccount } from "../interfaces/account.interface";

class AccountService {
    async create(payload: TrequestAccount) {
        /*
        const findAccount = await prisma.account.findUnique({
            where: {
                email: payload.email
            }
        })
        */
       
        return "Rota ok"
    }
}

export const accountService = new AccountService()
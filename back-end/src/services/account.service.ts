import { compare, hash } from "bcrypt";
import { AppError } from "../AppError";
import { prisma } from "../database/prisma";
import { TrequestAccount, TrequestAccountLogin, TresponseAccount } from "../interfaces/account.interface";
import { sendEmail } from "../utils/sendEmail/sendEmail";
import { mailBody, templateMail } from "../utils/sendEmail/templateEmail";
import { v4 as uuidv4 } from 'uuid';
import { sign } from "jsonwebtoken";

class AccountService {
    async create(payload: TrequestAccount): Promise<TresponseAccount> {
        const findAccount = await prisma.account.findUnique({
            where: {
                email: payload.email
            }
        })

        if(findAccount) throw new AppError("E-mail inválido", 400)

        const tokenConfirmationAccount = uuidv4()
       
        payload.password = await hash(payload.password, 10)

        const accountCreated = await prisma.account.create({
            data: {
                tokenConfirmationAccount,
                ...payload
            }
        })

        const templateMailConfirmation = mailBody(payload.name, "Para confirmar sua conta basta clicar no botão abaixo:", "Confirmar conta", `http://localhost:3333?token=${tokenConfirmationAccount}`) 

        await sendEmail(payload.email, "Confirmação da conta", templateMailConfirmation)
        
        return accountCreated;
    }

    async confirmationAccount(tokenConfirmationAccount: string): Promise<string> {
        const findAccount = await prisma.account.findUnique({
            where: {
                tokenConfirmationAccount
            }
        })

        if(!findAccount) throw new AppError("not found", 404)

        await prisma.account.update({
            where: {
                id: findAccount.id
            },
            data: {
                accountActivated: true
            }
        })

        return "Conta Ativada"
    }

    async login(dataLogin: TrequestAccountLogin) {
        const findAccount = await prisma.account.findUnique({
            where: {
                email: dataLogin.email
            }
        })

        if(!findAccount) throw new AppError("E-mail ou senha inválido", 400)

        const verifyPassword = await compare(dataLogin.password, findAccount.password)

        if(!verifyPassword) throw new AppError("E-mail ou senha inválida", 400)

        const token = sign({ id: findAccount.id, email: findAccount.email, role: findAccount.role }, process.env.SECRET_KEY!, { expiresIn: '8h' })

        return { token }
    }

    async read(): Promise<TresponseAccount[]> {
        const accounts = await prisma.account.findMany();
        
        return accounts
    }

    async destroy(id: number): Promise<void> {
        const findAccount = await prisma.account.findUnique({
            where: {
                id
            }
        })

        if(!findAccount) throw new AppError("not found", 404)

        await prisma.account.delete({
            where: {
                id
            }
        })

        return
    }
}

export const accountService = new AccountService()
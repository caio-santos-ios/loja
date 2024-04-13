import { z } from "zod";

export const account = z.object({
    id: z.number().positive(),
    name: z.string().max(150, "O nome aceita no máximo 150 caracteres."),
    email: z.string().email(),
    password: z.string(),
    created_at: z.date(),
    updated_at: z.date()
})

export const requestAccount = account.omit({ id: true, created_at: true, updated_at: true })
export const requestAccountUpdate = requestAccount.optional()
export const requestAccountLogin = account.pick({ email: true, password: true })
import { z } from "zod";

export const Product = z.object({
    id: z.number().positive(),
    photo: z.string(),
    name: z.string().min(3, "Nome do produto é obrigatorio.").max(150, "Nome do produto tem que ter no máximo 150 caracteres."),
    description: z.string(),
    price: z.number(),
    quanty: z.number().default(100)
})

export const requestProduct = Product.omit({ id: true })
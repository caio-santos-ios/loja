import { z } from "zod";
import { Product } from "./products.schema";
import { account } from "./account.schema";

export const Order = z.object({
    id: z.number().positive(),
    status: z.enum(["APROVATED", "DISAPPROVED", "ANALYSIS"]).default("ANALYSIS"),
    payment_method: z.enum(["PIX", "BOLETO", "CARTAO"]),
    product: Product,
    product_id: z.number().positive(),
    account: account,
    account_id: z.number().positive(),
    quantyProduct: z.number().positive(),
    amount: z.number(),
})

export const requestOrder = Order.omit({ id: true })
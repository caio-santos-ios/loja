import { z } from "zod";
import { Product } from "./products.schema";

export const Order = z.object({
    id: z.number().positive(),
    status: z.enum(["APROVATED", "DISAPPROVED", "ANALYSIS"]).default("ANALYSIS"),
    payment_method: z.enum(["PIX", "BOLETO", "CARTAO"]),
    product: Product,
    product_id: z.number().positive()
})

export const requestOrder = Order.omit({ id: true })
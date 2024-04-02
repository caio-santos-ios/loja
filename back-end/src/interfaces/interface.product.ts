import { z } from "zod";
import { product, requestProduct } from "../schemas/schema.products";

export type TrequestProduct = z.infer<typeof requestProduct>
export type TresponseProduct = z.infer<typeof product>
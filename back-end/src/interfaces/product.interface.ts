import { z } from "zod";
import { Product, requestProduct } from "../schemas/products.schema";

export type TrequestProduct = z.infer<typeof requestProduct>
export type TresponseProduct = z.infer<typeof Product>
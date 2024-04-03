import { z } from "zod";
import { Order, requestOrder } from "../schemas/order.schema";

export type TrequestOrder = z.infer<typeof requestOrder>
export type TresponseOrder = z.infer<typeof Order>
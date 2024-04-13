import { z } from "zod";
import { account, requestAccount, requestAccountLogin, requestAccountUpdate } from "../schemas/account.schema";

export type TrequestAccount = z.infer<typeof requestAccount>
export type TresponseAccount = z.infer<typeof account>
export type TrequestAccountUpdate = z.infer<typeof requestAccountUpdate>
export type TrequestAccountLogin = z.infer<typeof requestAccountLogin>
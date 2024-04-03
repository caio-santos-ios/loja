import "express-async-errors";
import express, { json } from "express";
import cors from "cors";
import { productRouter } from "./routers/product.router";
import { orderRouter } from "./routers/order.router";
import middlewares from "./middlewares";
import { accountRouter } from "./routers/account.router";

export const app = express()

app.use(json())
app.use(cors())
app.use("/api/products", productRouter)
app.use("/api/orders", orderRouter)
app.use("/api/accounts", accountRouter)
app.use(middlewares.handlerErro)
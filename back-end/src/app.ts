import express, { json } from "express";
import { productRouter } from "./routers/product.router";

export const app = express()

app.use(json())

app.use("/api/products", productRouter)
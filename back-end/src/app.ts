import express, { json } from "express";
import cors from "cors";
import { productRouter } from "./routers/product.router";

export const app = express()

app.use(json())
app.use(cors())
app.use("/api/products", productRouter)
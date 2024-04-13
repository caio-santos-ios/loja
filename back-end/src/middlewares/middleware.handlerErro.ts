import { NextFunction, Request, Response } from "express";
import { AppError } from "../AppError";
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";
import { JsonWebTokenError } from "jsonwebtoken";

export const handlerErro = (err: any, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof AppError) return res.status(err.statusCode).json({ message: err.message })

    if(err instanceof PrismaClientValidationError) return res.status(400).json({ message: err.message })

    if(err instanceof TypeError) return res.status(400).json({ message: err.message })
    
    if(err instanceof PrismaClientKnownRequestError) return res.status(400).json({ message: err.message })
    
    if(err instanceof JsonWebTokenError) return res.status(401).json({ message: err.message })

    return res.status(500).json({ message: "Internal server error." })
}
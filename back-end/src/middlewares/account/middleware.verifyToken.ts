import { Request, Response, NextFunction } from "express";
import { AppError } from "../../AppError";
import { verify } from "jsonwebtoken";

export const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { authorization } = req.headers

    if(!authorization) throw new AppError("Não autenticado", 401)

    const verifytedToken = verify(authorization, process.env.SECRET_KEY!)
    
    res.locals.verifytedToken = verifytedToken

    return next()
}
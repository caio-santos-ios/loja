import { Request, Response, NextFunction } from "express";
import { AppError } from "../../AppError";

export const verifyPermission = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if(res.locals.verifytedToken.role != "ADMIN") throw new AppError("Sem autorização", 403) 

    return next()
}
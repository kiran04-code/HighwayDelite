import { Request, Response, NextFunction } from "express";
import { ValidUser } from "../auth/UserAuth";

export const Auth = (cookieName: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.[cookieName];
    console.log("Token:", token);

    if (!token) {
      (req as any).user = null;
      return next();
    }

    try {
      const payload = ValidUser(token); 
      (req as any).user = payload; 
    } catch (error) {
      (req as any).user = null; 
    }

    next();
  };
};

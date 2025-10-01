import { Request, Response, NextFunction } from "express";

export class ErrorHandler {
  public static handle(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    console.error(err.stack);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

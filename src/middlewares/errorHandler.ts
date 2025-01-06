import { ErrorObject } from "@types";
import { Response, Request, NextFunction } from "express";

const errorHandler = (
  err: ErrorObject,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode ? err.statusCode : 400;
  res.status(statusCode);
  res.json({
    error: true,
    message: err.message,
    name: err.name,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  }),
    console.log("res.message:", err.message);
};

export default errorHandler;

import { NextFunction, Request, Response } from "express";

export const getStock = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (err) {
    next(err);
  }
};

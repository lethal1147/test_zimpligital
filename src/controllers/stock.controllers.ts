import { createError } from "@utils";
import { NextFunction, Request, Response } from "express";
import yahooFinance from "yahoo-finance2";

export const getStock = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { ticker } = req.params;
    if (!ticker) throw createError("Ticker is required.", 400);
    const result = await yahooFinance.search(ticker);

    res.status(200).json({
      error: false,
      message: "Get stock successfully.",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

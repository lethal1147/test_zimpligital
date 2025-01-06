import { redisConn } from "@libs";
import { createError } from "@utils";
import { NextFunction, Request, Response } from "express";
import yahooFinance from "yahoo-finance2";

export const getStock = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ticker = req.params.ticker?.trim();
    if (!ticker) throw createError("Ticker is required.", 400);
    const cached = await redisConn?.get(ticker);
    let result = {};
    if (cached) {
      result = JSON.parse(cached);
    } else {
      result = await yahooFinance.search(ticker);
      const stringData = JSON.stringify(result);
      await redisConn?.set(ticker, stringData);
    }

    res.status(200).json({
      error: false,
      message: "Get stock successfully.",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

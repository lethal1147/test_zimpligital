import type { Router } from "express";
import express from "express";
import stockRoute from "./stock.route";

const router: Router = express.Router();

router.use("/stock", stockRoute);

export default router;

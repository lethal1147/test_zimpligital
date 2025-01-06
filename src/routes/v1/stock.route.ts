import type { Router } from "express";
import express from "express";
import { getStock } from "@controllers";

const router: Router = express.Router();

router.post("/", getStock);

export default router;

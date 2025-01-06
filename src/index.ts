import express from "express";
import cors from "cors";
import morgan from "morgan";
import { errorHandler } from "@middlewares";
import router from "@routes";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV === "develop" ? "dev" : "combined"));

app.use("/api", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server running on port : " + PORT);
});

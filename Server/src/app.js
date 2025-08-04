import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const allowedOrigins = [
  "http://localhost:5174",
  "http://janhit-flame.vercel.app"
];

app.use(cors({
  origin: process.env.CORS,
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

import userRouter from "./routes/userRoute.js";
app.use("/api/v1/users", userRouter);

export default app;

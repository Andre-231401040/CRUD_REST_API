import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api", userRoutes);

// error handling middlewares
app.use(errorHandling);

export default app;

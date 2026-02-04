import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes";
import taskRoutes from "./routes/task.routes";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://task-manager-bice-iota.vercel.app"
  ],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

export default app;

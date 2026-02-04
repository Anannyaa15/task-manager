import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware";
import {
  getTasks,
  createTask,
  deleteTask,
  toggleTask,
} from "../controllers/task.controller";

const router = Router();

router.use(authenticate);

router.get("/", getTasks);
router.post("/", createTask);
router.delete("/:id", deleteTask);
router.patch("/:id/toggle", toggleTask);

export default router;

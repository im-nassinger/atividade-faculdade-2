import { Router } from "express";
import * as controller from "../controllers/CategoryController";

const router = Router();

router.post("/", controller.createCategory);
router.get("/", controller.getCategories);
router.get("/:id", controller.getCategoryById);
router.put("/:id", controller.updateCategory);
router.delete("/:id", controller.deleteCategory);

export default router;
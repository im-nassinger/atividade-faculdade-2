import { Router } from "express";
import * as controller from "../controllers/EnrollmentController";

const router = Router();

router.post("/", controller.createEnrollment);
router.get("/", controller.getEnrollments);
router.get("/:id", controller.getEnrollmentById);
router.put("/:id", controller.updateEnrollment);
router.delete("/:id", controller.deleteEnrollment);

export default router;
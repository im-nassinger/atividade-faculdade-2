import cors from "cors";
import express from "express";
import categoryRoutes from "./routes/categoryRoutes.ts";
import enrollmentRoutes from "./routes/enrollmentRoutes.ts";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/categories", categoryRoutes);
app.use("/enrollments", enrollmentRoutes);

export default app;

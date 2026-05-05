import express from "express";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes";
import enrollmentRoutes from "./routes/enrollmentRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/categories", categoryRoutes);
app.use("/enrollments", enrollmentRoutes);

export default app;
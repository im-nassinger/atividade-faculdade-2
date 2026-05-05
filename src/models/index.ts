import { sequelize } from "../config/database.ts";
import "./Category.ts";
import "./Enrollment.ts";

export const initDb = async () => {
  await sequelize.sync({ alter: true });
};
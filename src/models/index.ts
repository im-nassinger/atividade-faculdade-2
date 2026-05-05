import { sequelize } from "../config/database.ts";
import "./Category";
import "./Enrollment";

export const initDb = async () => {
  await sequelize.sync({ alter: true });
};
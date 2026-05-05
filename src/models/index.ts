import { sequelize } from "../config/database";
import "./Category";
import "./Enrollment";

export const initDb = async () => {
  await sequelize.sync({ alter: true });
};
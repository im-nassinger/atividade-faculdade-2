import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.ts";

export class Category extends Model {
  public id!: number;
  public name!: string;
  public durationMonths!: number;
}

Category.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    durationMonths: { type: DataTypes.INTEGER, allowNull: false }
  },
  { sequelize, modelName: "category" }
);
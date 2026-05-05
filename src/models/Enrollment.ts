import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Category } from "./Category";

export class Enrollment extends Model {
  public id!: number;
  public studentName!: string;
  public startDate!: Date;
  public endDate!: Date;
  public categoryId!: number;
}

Enrollment.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    studentName: { type: DataTypes.STRING, allowNull: false },
    startDate: { type: DataTypes.DATE, allowNull: false },
    endDate: { type: DataTypes.DATE, allowNull: false }
  },
  { sequelize, modelName: "enrollment" }
);

Enrollment.belongsTo(Category, { foreignKey: "categoryId" });
Category.hasMany(Enrollment, { foreignKey: "categoryId" });
import type { Request, Response } from "express";
import { Enrollment } from "../models/Enrollment.ts";
import { Category } from "../models/Category.ts";

function calculateEndDate(start: Date, months: number): Date {
  const end = new Date(start);
  end.setMonth(end.getMonth() + months);
  return end;
}

export const createEnrollment = async (req: Request, res: Response) => {
  const { studentName, startDate, categoryId } = req.body;

  const category = await Category.findByPk(categoryId);
  if (!category) return res.status(404).json({ error: "Categoria não encontrada" });

  const endDate = calculateEndDate(new Date(startDate), category.durationMonths);

  const enrollment = await Enrollment.create({
    studentName,
    startDate,
    endDate,
    categoryId
  });

  res.json(enrollment);
};

export const getEnrollments = async (_: Request, res: Response) => {
  const data = await Enrollment.findAll({ include: Category });
  res.json(data);
};

export const getEnrollmentById = async (req: Request, res: Response) => {
  const data = await Enrollment.findByPk(req.params.id, { include: Category });
  res.json(data);
};

export const updateEnrollment = async (req: Request, res: Response) => {
  await Enrollment.update(req.body, { where: { id: req.params.id } });
  res.sendStatus(204);
};

export const deleteEnrollment = async (req: Request, res: Response) => {
  await Enrollment.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
};
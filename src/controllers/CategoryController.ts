import { Request, Response } from "express";
import { Category } from "../models/Category";

export const createCategory = async (req: Request, res: Response) => {
    const category = await Category.create(req.body);
    res.json(category);
};

export const getCategories = async (_: Request, res: Response) => {
    const data = await Category.findAll();
    res.json(data);
};

export const getCategoryById = async (req: Request, res: Response) => {
    const data = await Category.findByPk(req.params.id);
    res.json(data);
};

export const updateCategory = async (req: Request, res: Response) => {
    await Category.update(req.body, { where: { id: req.params.id } });
    res.sendStatus(204);
};

export const deleteCategory = async (req: Request, res: Response) => {
    await Category.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
};

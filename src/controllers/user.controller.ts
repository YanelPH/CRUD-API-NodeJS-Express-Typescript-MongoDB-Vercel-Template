import { Request, Response } from "express";
import User, { IUser } from "../models/user.model";

// Route pour obtenir tous les éléments
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const elements = await User.find();
    res.json(elements);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Route pour obtenir un élément par son ID

const getUserByID = async (req: Request, res: Response) => {
  try {
    const element = await User.findById(req.params.id);
    res.json(element);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Route pour créer un élément
const createUser = async (req: Request, res: Response) => {
  const nouvelElement = new User({
    champ1: req.body.champ1,
    champ2: req.body.champ2,
  });

  try {
    const elementCree = await nouvelElement.save();
    res.status(201).json(elementCree);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Route pour mettre à jour un élément
const updateUser = async (req: Request, res: Response) => {
  try {
    const element: IUser | null = await User.findById(req.params.id);
    if (!element) {
      return res.status(404).json({ message: "Elément non trouvé" });
    }
    element.champ1 = req.body.champ1;
    element.champ2 = req.body.champ2;

    const elementMisAJour = await element.save();
    res.json(elementMisAJour);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Route pour supprimer un élément
const deleteUserByID = async (req: Request, res: Response) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Élément supprimé avec succès" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUserByID,
};

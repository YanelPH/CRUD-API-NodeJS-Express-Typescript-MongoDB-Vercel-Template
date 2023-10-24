import { Request, Response } from "express";
import User, { IUser } from "../models/user.model";

// Route to get all users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Route to get an user by ID
const getUserByID = async (req: Request, res: Response) => {
  try {
    const userByID = await User.findById(req.params.id);
    res.json(userByID);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Route to create an user in the collection
const createUser = async (req: Request, res: Response) => {
  const newUser = new User({
    lastname: req.body.lastname,
    firstname: req.body.firstname,
  });
  try {
    const createdUser = await newUser.save();
    res.status(201).json(createdUser);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Route to update an User
const updateUser = async (req: Request, res: Response) => {
  try {
    const userByID: IUser | null = await User.findById(req.params.id);
    if (!userByID) {
      return res.status(404).json({ message: "User not found" });
    }
    userByID.lastname = req.body.lastname;
    userByID.firstname = req.body.firstname;

    const updatedUser = await userByID.save();
    res.json(updatedUser);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Route pour supprimer un élément
const deleteUserByID = async (req: Request, res: Response) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User successfully deleted" });
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

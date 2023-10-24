"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
// Route to get all users
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield user_model_1.default.find();
        res.json(allUsers);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Route to get an user by ID
const getUserByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userByID = yield user_model_1.default.findById(req.params.id);
        res.json(userByID);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Route to create an user in the collection
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = new user_model_1.default({
        lastname: req.body.lastname,
        firstname: req.body.firstname,
    });
    try {
        const createdUser = yield newUser.save();
        res.status(201).json(createdUser);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
// Route to update an User
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userByID = yield user_model_1.default.findById(req.params.id);
        if (!userByID) {
            return res.status(404).json({ message: "User not found" });
        }
        userByID.lastname = req.body.lastname;
        userByID.firstname = req.body.firstname;
        const updatedUser = yield userByID.save();
        res.json(updatedUser);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
// Route pour supprimer un élément
const deleteUserByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_model_1.default.findByIdAndDelete(req.params.id);
        res.json({ message: "User successfully deleted" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.default = {
    getAllUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUserByID,
};

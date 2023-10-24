import express from "express";
import userCtrl from "../controllers/user.controller";

//List all controllers route
const router = express.Router();

router.get("/api/users", userCtrl.getAllUsers);
router.get("/api/users/:id", userCtrl.getUserByID);
router.post("/api/users", userCtrl.createUser);
router.put("/api/users/:id", userCtrl.updateUser);
router.delete("/api/users/:id", userCtrl.deleteUserByID);

export default router;

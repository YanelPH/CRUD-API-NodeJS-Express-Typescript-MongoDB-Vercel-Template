import express from "express";
import userCtrl from "../controllers/user.controller";
const router = express.Router();

router.get("/api/elements", userCtrl.getAllUsers);
router.get("/api/elements/:id", userCtrl.getUserByID);
router.post("/api/elements", userCtrl.createUser);
router.put("/api/elements/:id", userCtrl.updateUser);
router.delete("/api/elements/:id", userCtrl.deleteUserByID);

export default router;

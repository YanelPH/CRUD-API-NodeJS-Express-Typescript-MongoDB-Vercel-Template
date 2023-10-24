"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
//List all controllers route
const router = express_1.default.Router();
router.get("/api/users", user_controller_1.default.getAllUsers);
router.get("/api/users/:id", user_controller_1.default.getUserByID);
router.post("/api/users", user_controller_1.default.createUser);
router.put("/api/users/:id", user_controller_1.default.updateUser);
router.delete("/api/users/:id", user_controller_1.default.deleteUserByID);
exports.default = router;

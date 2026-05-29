import express from "express";
import { signup, login, getUsers, getMe,
  getUserProfile } from "../controller/auth.controller.js";
import protectRoute from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/users", getUsers);
router.get("/me", protectRoute, getMe);
router.get("/profile/:id", protectRoute, getUserProfile);

export default router;
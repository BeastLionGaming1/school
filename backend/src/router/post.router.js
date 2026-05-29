import express from "express";
import { createPost, getFeedPosts, getUserPosts, deletePost } from "../controller/post.controller.js";
import protectRoute from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/upload", protectRoute, upload.array("media", 10), createPost);
router.get("/feed", getFeedPosts);
router.get("/user/:userId", getUserPosts);
router.delete("/:postId", protectRoute, deletePost);

export default router;
import express from "express";
import { createPost, getAllPosts } from "../controllers/postController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/createPost", authMiddleware, createPost);
router.get("/allPosts", getAllPosts);

export default router;

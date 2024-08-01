import express from "express";
import { createPost, getAllPosts } from "../controllers/postController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/createpost", authMiddleware, createPost);
router.get("/allposts", getAllPosts);

export default router;

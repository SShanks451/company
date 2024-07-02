import express from "express";
import { createPost, getAllPosts } from "../controllers/postController.js";

const router = express.Router();

router.post("/createPost", createPost);
router.get("/allPosts", getAllPosts);

export default router;

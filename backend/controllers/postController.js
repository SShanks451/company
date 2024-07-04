import Post from "../models/postModel.js";

const createPost = async (req, res) => {
  const { textContent } = req.body;

  await Post.create({ user: req.user._id, textContent });

  res.status(200).json({
    message: "Post created successfully",
  });
};

const getAllPosts = async (req, res) => {
  const allPosts = await Post.find({}).populate({
    path: "user",
    select: "-password",
  });

  res.status(200).send(allPosts);
};

export { createPost, getAllPosts };

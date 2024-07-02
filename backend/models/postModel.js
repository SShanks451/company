import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  textContent: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;

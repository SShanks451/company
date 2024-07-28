import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: { type: String, required: true, unique: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
    bio: {
      type: String,
      required: true,
    },
    profilePic: { 
      type: String,
      required: true
    },
    location: { 
      type: String,
      required: true 
    },
    portfolio: { 
      type: String,
      required: true,
      unique: true
    },
    pictures: [{ type: String }],
    videos: [{ type: String }],
    tags: [{ type: String, required: true }],
    previousWorks: [{ type: String }],
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    influencerType: {
      type: String,
      enum: ["Bronze", "Gold", "Platinum"],
      default: "Bronze",
      required: true,
    },
    plan: { type: mongoose.Schema.Types.ObjectId, ref: "Plan" },
    connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    sentRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    receivedRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

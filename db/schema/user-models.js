// db/schema/user-models.js
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
    match: [/.+\@.+\..+/, "Please enter a valid email address"], // Basic email validation
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
});

export const userModel = mongoose.models?.users || mongoose.model("users", userSchema);

// export const postsModel = mongoose.models.posts || mongoose.model("posts", postSchema);
import mongoose, { Schema } from "mongoose";

const user = new Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  role: { type: String, default: "user" },
}, { timestamps: true });

// Model export
export const userX = mongoose.models.users || mongoose.model("users", user);

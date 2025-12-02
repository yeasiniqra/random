import mongoose, { Schema } from "mongoose";

const commentsSchema = new Schema({
  postId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Post", 
    required: true 
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    
  },
  userName: { 
    type: String, 
    required: true 
 },
comments: { 
    type: String, 
    required: true 
 },
}, { timestamps: true });

export const commentModel = mongoose.models?.comments || mongoose.model("comments", commentsSchema);

// export const postsModel = mongoose.models.posts || mongoose.model("posts", postSchema);
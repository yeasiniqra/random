// db/query/queries.js
import mongoose from "mongoose";
import { dbConnect } from "../dbConnection/dbConnection";
import { categoryModel } from "../schema/category-models";
import { postsModel } from "../schema/posts-models";
import { userModel } from "../schema/user-models";
import { signIn } from "@/auth";

export async function createUser(user) {
  try {
    const createdUser = await userModel.create(user);
    return createdUser;
  } catch (error) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
}


export async function getUsers(){
  const users = await userModel.find().lean();
  return users;
}

export async function getAllCategory(){
  await dbConnect();
  const category = await categoryModel.find().lean()
   return category.map(cat => ({
    _id: cat._id.toString(),
    name: cat.name
  }));
}


export async function getAllPosts(){
  const post = await postsModel.find().lean()
  return post;
}

export async function createPost(data) {
  const post = await postsModel.create(data);
  return post;
}

// export async function getPostsByCategory(categoryId) {
//      const posts = await postsModel.find({ 
//        category: new mongoose.Types.ObjectId(categoryId)
//     }).lean();

//     console.log("category", posts);
//     return posts;
// }

export async function getPostsByCategory(categoryName) {

    const posts = await postsModel.find().lean(); // fetch all posts

    const filtered = posts.filter(p => p.name === categoryName);

    return filtered;
}




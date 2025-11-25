// db/query/queries.js
import mongoose from "mongoose";
import { dbConnect } from "../dbConnection/dbConnection";
import { categoryModel } from "../schema/category-models";
import { postsModel } from "../schema/posts-models";
import { userModel } from "../schema/user-models";
import { signIn } from "@/auth";

export async function createUser(user) {
  await dbConnect();
  try {
    const createdUser = await userModel.create(user);
    return createdUser;
  } catch (error) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
}


export async function getUsers(){
  await dbConnect();
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
  await dbConnect();
  const post = await postsModel.find().lean()
  return post;
}

export async function createPost(data) {
  await dbConnect();
  const post = await postsModel.create(data);
  return post;
}

// export async function getPostsByCategory(categoryName) {
//     await dbConnect();
//     const posts = await postsModel.find().lean(); // fetch all posts
//     const filtered = posts.filter(p => p.name === categoryName);
//     return filtered;
// }

export async function getPostsByCategory(categoryName) {
  await dbConnect();
  return await postsModel.find({ name:categoryName }).lean();
}



export async function getPostsBySlug(slug) {
    await dbConnect();
    const posts = await postsModel.findOne({slug:slug}).lean();
    return posts;
}

// export async function getPostsBySlugA(slug) {
//     const posts = await postsModel
//     .find()
//     .sort({createdAt: -1})
//     .limit(1)
//     .lean();
//     return posts;
// }

// export async function getPostsBySlugA(slug) {
//     const posts = await postsModel.aggregate([
//       {$sort :{createdAt: -1}},
//       {
//         $group:{
//           _id : "$catagory",
//           post : { $first: "$$ROOT"}
//         }
//       },
//       {$replaceRoot: {newPost: "$post"}},
//       {$sort :{createdAt: -1}},
//     ])

//     return posts;
// }


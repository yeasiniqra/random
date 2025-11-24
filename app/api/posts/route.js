import { NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConnection/dbConnection";
import { createPost } from "@/db/query/queries";

export const POST = async (request) => {
  try {
    await dbConnect();
    const body = await request.json();

    const {
      title,
      name,
      slug,
      content,
      excerpt,
      featuredImage,
      category,
      author,
      tags,
      status,
      isEditorsPick,
    } = body;

    const newPost = await createPost({
      title,
      name,
      slug,
      content,
      excerpt,
      featuredImage,
      category,
      author,
      tags,
      status,
      isEditorsPick,
    });

    return NextResponse.json(
      { message: "Post created successfully", post: newPost },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json(
      { message: err.message || "Something went wrong" },
      { status: 500 }
    );
  }
};

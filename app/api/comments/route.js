import { dbConnect } from "@/db/dbConnection/dbConnection";
import { commentModel } from "@/db/schema/comments-models";
import { NextResponse } from "next/server";


export async function POST(req) {
  await dbConnect();
  const body = await req.json();

  if (!body.userName) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const newComment = await commentModel.create({
    postId: body.postId,
    comments: body.text,
    userId: body.userId || null,
    userName: body.userName,
  });

  return NextResponse.json(newComment, { status: 201 });
}
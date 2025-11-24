import { createPost } from "@/db/query/queries";
import { NextResponse } from "next/server";


export const POST = async (request) =>{

    try {
        const body = await request.json();
        const {name, email, phone} = request;

        const finalData = {
            name, email, phone
        }

        const newCmt = await createPost(finalData);

        return NextResponse.json(
             { message: "Comment created successfully", comment: newCmt },
             { status: 201 }
        )
        
    } catch (error) {
         console.error("Error:", err);
            return NextResponse.json(
            { message: err.message || "Something went wrong" },
            { status: 500 }
        );
    }

}
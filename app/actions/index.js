// app/actions.js
"use server";

import { signIn } from "@/auth";
import { createUser, getUsers } from "@/db/query/queries";
import { redirect } from "next/navigation";
// import bcrypt from "bcryptjs";

export async function registerUser(formData) {
  try {
    const user = {
      name: formData.get("name"),
      email: formData.get("email"),
      role: formData.get("role"),
      password: formData.get("password"), // Hash password
      phone: formData.get("phone"),
      bio: formData.get("bio"),
    };

    const created = await createUser(user);
    console.log("created", created);
    if (created) {
      redirect("/"); // Redirect to login page on success
    } else {
      throw new Error("Failed to create user");
    }
  } catch (error) {
    return { error: error.message };
  }
}


// export async function Login(formData) {
//   const signIndata = await signIn("credentials", {
//     email: formData.get("email"),
//     password: formData.get("password"),
//     redirect: false, // handle redirect manually
//   });

//   if (signIndata?.ok) {
//     // Redirect after successful login
//     redirect("/");
//   } else {
//     // Optionally return error
//     return signIndata;
//   }
// }
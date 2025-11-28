import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { userModel } from "./db/schema/user-models"


export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      credentials: {
        email:{},
        password: {},
      },
      authorize: async (credentials) => {


        const user = await userModel.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("User not found.");
        }

        const isValidPassword = bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValidPassword) {
          throw new Error("Invalid credentials.");
        }

        return user;
      },
    }),
  ],

})

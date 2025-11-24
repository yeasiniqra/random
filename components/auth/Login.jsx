"use client";
import { Login } from "@/app/actions";
import { signIn } from "@/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false, // handle redirect manually
    });

    if (res?.ok) {
      router.push("/"); // redirect after success
    } else {
      setError("Invalid credentials");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 p-4">
      <div className="w-full max-w-md p-8 rounded-2xl bg-gray-800/60 shadow-xl">

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-3 pr-12 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-400 hover:text-gray-200"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-300">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="form-checkbox rounded" />
              Remember me
            </label>
            <button type="button" className="hover:underline">Forgot password?</button>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 font-semibold transition duration-150"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

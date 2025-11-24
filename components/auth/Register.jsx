"use client";

import { registerUser } from "@/app/actions";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 px-4">
      <form
        className="w-full max-w-lg p-8 bg-gray-800 rounded-2xl shadow-xl space-y-5"
        action={registerUser}
      >
        <h2 className="text-2xl font-semibold text-center mb-2">
          Create an Account
        </h2>
        <p className="text-sm text-center text-gray-400 mb-6">
          Fill in the details to register
        </p>

        {/* Full Name */}
        <div className="space-y-1">
          <label htmlFor="name" className="block text-sm text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Role */}
        <div className="space-y-1">
          <label htmlFor="role" className="block text-sm text-gray-300">
            Role
          </label>
          <input
            type="text"
            name="role"
            id="role"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="admin / editor / user"
            required
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label htmlFor="password" className="block text-sm text-gray-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="••••••••"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="space-y-1">
          <label htmlFor="phone" className="block text-sm text-gray-300">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="+8801XXXXXXXXX"
            required
          />
        </div>

        {/* Bio */}
        <div className="space-y-1">
          <label htmlFor="bio" className="block text-sm text-gray-300">
            Bio
          </label>
          <textarea
            name="bio"
            id="bio"
            rows="3"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            placeholder="Tell us something about yourself..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition duration-200"
        >
          Register
        </button>

        <p className="text-sm text-center text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-500 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

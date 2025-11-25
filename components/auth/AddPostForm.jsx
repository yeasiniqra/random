"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const AddPostForm = ({ categories }) => {
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  const router = useRouter();

  const slugify = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-') 
      .replace(/^-+|-+$/g, '');
}

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setUploading(true);

      const formData = new FormData(e.currentTarget);
      const finalData = {
        title: formData.get("title"),
        name: formData.get("category") || null,
        slug: slugify(formData.get("title")),
        content: formData.get("content"),
        excerpt: formData.get("excerpt"),
        featuredImage: formData.get("featuredImage") || "", // now URL
        category: formData.get("category") || null,
        tags: formData.get("tags")?.split(",").map((t) => t.trim()) || [],
        status: formData.get("status"),
        isEditorsPick: formData.get("isEditorsPick") === "on",
      };

      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Something went wrong");
      }

      router.push("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <div className="border-b border-gray-800 bg-black sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Add New Post</h1>
        </div>
      </div>

      <div className="min-h-screen bg-[#0f0f0f] text-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm uppercase tracking-wider">Content</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-800 rounded-lg text-red-400 text-center">
              {error}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-7">

            {/* Title + Slug */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Title</label>
                <input
                  name="title"
                  required
                  placeholder="Title"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              {/* <div>
                <label className="block text-sm text-gray-400 mb-1">Slug</label>
                <input
                  name="slug"
                  required
                  placeholder="Slug"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div> */}
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">Excerpt</label>
              <textarea
                name="excerpt"
                rows={3}
                placeholder="Excerpt"
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Featured Image URL */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">Featured Image URL</label>
              <input
                name="featuredImage"
                type="url"
                placeholder="https://res.cloudinary.com/..."
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Category + Tags + Status */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Select Category</label>
                <select
                  name="category"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="">Select Category</option>
                  {categories?.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Tags (comma separated)</label>
                <input
                  name="tags"
                  placeholder="Tags (comma separated)"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Status</label>
                <select
                  name="status"
                  defaultValue="draft"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>

            {/* Editor's Pick */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="isEditorsPick"
                className="w-5 h-5 text-blue-600 bg-[#1a1a1a] border-gray-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-300">Editor's Pick</span>
            </label>

            {/* Content */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">Content</label>
              <textarea
                name="content"
                required
                rows={12}
                placeholder="Write your content here..."
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-mono text-sm"
              />
            </div>

            {/* Submit */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={uploading}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed rounded-lg font-semibold text-lg transition"
              >
                {uploading ? "Submitting..." : "Submit"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default AddPostForm;

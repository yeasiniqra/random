import { getAllPosts } from '@/db/query/queries';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Posts = async () => {
  const posts = await getAllPosts();
  
  return (
    <div className="flex gap-2.5 justify-center mt-5 flex-wrap">
      {posts.map((post) => {
        // Validate & clean image URL
        const imageUrl =
          post?.featuredImage?.trim() && post?.featuredImage?.startsWith("http")
            ? post.featuredImage.trim()
            : "/no-image.jpg"; // fallback image

        return (
          <div className="border p-1.5 w-64" key={post._id}>
            <Image
              src={imageUrl}
              width={200}
              height={150}
              alt={post.title}
              className="rounded"
            />
            <h2 className="text-lg font-semibold mt-2">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.content}</p>
            <Link href={`/slug/${post.slug}`}>Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

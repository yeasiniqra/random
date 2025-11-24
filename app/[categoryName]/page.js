
import { getPostsByCategory } from '@/db/query/queries';
import Image from 'next/image';
import React from 'react';

const CategoryPage = async ({ params }) => {
 const { categoryName } = await params;

  const posts = await getPostsByCategory(categoryName);


  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts found in this category.</p>
      ) : (
        posts.map((p) => (
          <div className='border p-1.5' key={p._id}>
                        <Image 
                            src={p.featuredImage}
                            width={200}
                            height={150}
                            alt="featuredImage"
                        />
                        <h2>{p.title}</h2>
                        <p>{p.content}</p>
                        
                    </div>
        ))
      )}
    </div>
  );
};

export default CategoryPage;


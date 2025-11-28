import { auth } from '@/auth';
import { getAllCategory } from '@/db/query/queries';
import Link from 'next/link';
import React from 'react';

const Category = async () => {
    const categories = await getAllCategory();
    const session = await auth();
    console.log("session", session);
    return (
        <div className="flex gap-2.5 justify-center bg-gray-900">
             {session && (
                <Link className='text-white' href="/">{session?.user?.name}</Link>
             )}
             <Link className='text-white' href="/">Home</Link>

            {categories.map((cat) => (
                <div key={cat._id}>
                    <Link className='text-white' href={`/${cat.name}`}>{cat.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default Category;

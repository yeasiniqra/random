import { getAllCategory } from '@/db/query/queries';
import Link from 'next/link';
import React from 'react';

const Category = async () => {
    const categories = await getAllCategory();
    return (
        <div className="flex gap-2.5 justify-center bg-gray-900">
            {categories.map((cat) => (
                <div key={cat._id}>
                    <Link className='text-white' href={`/${cat.name}`}>{cat.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default Category;

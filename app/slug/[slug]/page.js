import { getPostsBySlug } from '@/db/query/queries';
import Image from 'next/image';

const SinglePost = async ({params}) => {
    const {slug} = await params;
    console.log("slug", slug);
    const post = await getPostsBySlug(slug);
    console.log("post", post);
    return (
        <div>
             <div className="border p-1.5 w-full" key={post._id}>
                <Image
                    src={post.featuredImage}
                    width={200}
                    height={150}
                    alt={post.title}
                    className="rounded"
                />
                <h2 className="text-lg font-semibold mt-2">{post.title}</h2>
                <p className="text-sm text-gray-600">{post.content}</p>
                <p className="text-sm text-gray-600">Author Name :{post.authorName}</p>
            </div>
        </div>
    );
};

export default SinglePost;
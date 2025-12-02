import { auth } from '@/auth';
import CommentForm from '@/components/auth/CommentForm';
import CommentList from '@/components/auth/CommentList';
import { getPostsBySlug } from '@/db/query/queries';
import Image from 'next/image';

export async function generateMetadata({params}){
    const {slug} = await params;
   const eventInfo = await getPostsBySlug(slug);

   return{
      title : `${eventInfo?.title}`,
      description : `${eventInfo?.content}`,
   }
}

const SinglePost = async ({params}) => {
    const {slug} = await params;
    const post = await getPostsBySlug(slug);
    const session = await auth();
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
             {session ? (
                <CommentForm postId={post._id.toString()} user={session.user} />
            ) : (
                <p>You must login to comment.</p>
            )}
            <>
            <CommentList postId={post._id.toString()} />
            </>
        </div>
    );
};

export default SinglePost;
import { getAllComments } from '@/db/query/queries';


const CommentList = async({postId}) => {
    const cmt = await getAllComments(postId)
    return (
        <>
            {cmt.map((c) => (
                <div key={c._id}>
                <strong>{c.userName}</strong> - {c.comments}
                </div>
            ))}
        </>
    );
};

export default CommentList;
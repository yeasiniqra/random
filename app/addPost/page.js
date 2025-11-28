import { auth } from "@/auth";
import AddPostForm from "@/components/auth/AddPostForm";
import { getAllCategory } from "@/db/query/queries";

const AddPost = async () => {
     const categories = await getAllCategory();
     const session = await auth();
    return (
        <div>
            <AddPostForm categories={categories} session={session} />
        </div>
    );
};

export default AddPost;
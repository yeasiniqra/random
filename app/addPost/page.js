import AddPostForm from "@/components/auth/AddPostForm";
import { getAllCategory } from "@/db/query/queries";

const AddPost = async () => {
     const categories = await getAllCategory();
    return (
        <div>
            <AddPostForm categories={categories} />
        </div>
    );
};

export default AddPost;
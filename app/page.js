
import Posts from "@/components/auth/Posts";
import Register from "@/components/auth/Register";
import UserList from "@/components/auth/UserList";

export default async function Home() {
  return (
    <div className="mt-4">
     <Posts />   
    </div>
  );
}

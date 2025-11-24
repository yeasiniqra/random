import { getUsers } from "@/db/query/queries";

const UserList = async () => {
  const users = await getUsers();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <h1 className="text-2xl font-semibold text-center mb-6">All Users</h1>

      <div className="max-w-4xl mx-auto space-y-4">
        {users.map((user) => (
          <div
            key={user._id}
            className="flex justify-between items-center bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md hover:bg-gray-800/70 transition-all"
          >
            <div className="space-y-1">
              <h2 className="text-lg font-medium">{user.name}</h2>
              <p className="text-sm text-gray-400">{user.email}</p>
            </div>

            <span
              className={`px-3 py-1 rounded-lg text-sm font-semibold capitalize ${
                user.role === "admin"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-700 text-gray-200"
              }`}
            >
              {user.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;

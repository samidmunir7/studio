import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">
        Welcome,{" "}
        <span className="text-blue-400">{user?.name?.split(" ")[0]}</span> 👋
      </h2>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">Account Overview</h3>
          <p>
            <span className="text-gray-400">Name:</span> {user?.name}
          </p>
          <p>
            <span className="text-gray-400">Email:</span> {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

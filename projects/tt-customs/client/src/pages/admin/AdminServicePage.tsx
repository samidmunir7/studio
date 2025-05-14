import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Service {
  _id: string;
  name: string;
  description: string;
  cost: number;
  estimatedTime: string;
  dropOffRequired: boolean;
  image?: string;
}

const AdminServicePage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/services");
      const data = await res.json();
      setServices(data);
    } catch (err) {
      console.error("Failed to load services", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this service?"))
      return;
    try {
      await fetch(`http://localhost:3000/api/services/${id}`, {
        method: "DELETE",
      });
      fetchServices();
    } catch (err) {
      console.error("Failed to delete service", err);
    }
  };

  return (
    <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20 min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-white">Manage Services</h1>
        <p className="text-zinc-400 mt-2">
          View, update, or remove service offerings for TT-Customs.
        </p>
        <button
          onClick={() => navigate("/admin/services/new")}
          className="mt-6 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded-lg"
        >
          + Add New Service
        </button>
      </div>

      {loading ? (
        <p className="text-zinc-400">Loading services...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm bg-zinc-900 rounded-lg overflow-hidden">
            <thead className="bg-zinc-800 text-left">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Estimated Time</th>
                <th className="p-4">Drop-Off</th>
                <th className="p-4">Cost</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr
                  key={service._id}
                  className="border-t border-zinc-800 hover:bg-zinc-800"
                >
                  <td className="p-4 font-semibold text-white">
                    {service.name}
                  </td>
                  <td className="p-4 text-zinc-400">{service.estimatedTime}</td>
                  <td className="p-4 text-zinc-400">
                    {service.dropOffRequired ? "Yes" : "No"}
                  </td>
                  <td className="p-4 text-rose-400">
                    ${service.cost.toFixed(2)}
                  </td>
                  <td className="p-4 space-x-2">
                    <button
                      onClick={() =>
                        navigate(`/admin/services/edit/${service._id}`)
                      }
                      className="text-sky-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="text-rose-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default AdminServicePage;

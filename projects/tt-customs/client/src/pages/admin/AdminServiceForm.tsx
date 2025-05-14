import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const emptyService = {
  name: "",
  description: "",
  cost: 0,
  estimatedTime: "",
  dropOffRequired: true,
  image: "",
};

const AdminServiceForm = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [service, setService] = useState(emptyService);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEdit) fetchService();
  }, [id]);

  const fetchService = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/api/services/${id}`);
      const data = await res.json();
      setService({
        name: data.name || "",
        description: data.description || "",
        cost: data.cost || 0,
        estimatedTime: data.estimatedTime || "",
        dropOffRequired: data.dropOffRequired ?? true,
        image: data.image || "",
      });
    } catch (err) {
      console.error("Failed to fetch service", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setService((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:3000/api/services${isEdit ? `/${id}` : ""}`,
        {
          method: isEdit ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(service),
        }
      );
      if (!res.ok) throw new Error("Failed to save service");
      navigate("/admin/services");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-6">
        {isEdit ? "Edit Service" : "Add New Service"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
        {[
          ["name", "Service Name"],
          ["cost", "Cost"],
          ["estimatedTime", "Estimated Time"],
          ["image", "Image URL"],
        ].map(([key, label]) => (
          <div key={key}>
            <label className="block text-sm text-zinc-400 mb-1">{label}</label>
            <input
              name={key}
              type={key === "cost" ? "number" : "text"}
              value={(service as any)[key]}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-800 rounded-md text-white"
              required
            />
          </div>
        ))}

        <div>
          <label className="block text-sm text-zinc-400 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={service.description}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 rounded-md text-white"
            rows={4}
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="dropOffRequired"
            checked={service.dropOffRequired}
            onChange={handleChange}
          />
          <label className="text-zinc-300">Drop-Off Required</label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-sky-600 hover:bg-sky-700 py-3 rounded-lg font-bold text-white"
        >
          {loading ? "Saving..." : isEdit ? "Update Service" : "Create Service"}
        </button>
      </form>
    </main>
  );
};

export default AdminServiceForm;

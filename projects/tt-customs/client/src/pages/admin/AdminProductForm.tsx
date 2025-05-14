import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const emptyProduct = {
  name: "",
  brand: "",
  manufacturer: "",
  fitment: "",
  type: "",
  price: 0,
  quantity: 0,
  description: "",
  images: [""],
  installable: false,
};

const AdminProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [product, setProduct] = useState(emptyProduct);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEdit) fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.error("Failed to fetch product", err);
    } finally {
      setLoading(false);
    }
  };

  //   const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     const { name, value, type, checked } = e.target;
  //     setProduct((prev) => ({
  //       ...prev,
  //       [name]: type === "checkbox" ? checked : value,
  //     }));
  //   };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const images = [...product.images];
    images[index] = e.target.value;
    setProduct((prev) => ({ ...prev, images }));
  };

  const addImageField = () => {
    setProduct((prev) => ({ ...prev, images: [...prev.images, ""] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:3000/api/products${isEdit ? `/${id}` : ""}`,
        {
          method: isEdit ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        }
      );
      if (!res.ok) throw new Error("Failed to save product");
      navigate("/admin/products");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-6">
        {isEdit ? "Edit Product" : "Add New Product"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
        {[
          ["name", "Product Name"],
          ["brand", "Brand"],
          ["manufacturer", "Manufacturer"],
          ["fitment", "Fitment"],
          ["type", "Type"],
          ["price", "Price"],
          ["quantity", "Quantity"],
        ].map(([key, label]) => (
          <div key={key}>
            <label className="block text-sm text-zinc-400 mb-1">{label}</label>
            <input
              name={key}
              type={key === "price" || key === "quantity" ? "number" : "text"}
              value={(product as any)[key]}
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
            value={product.description}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 rounded-md text-white"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-sm text-zinc-400 mb-2">
            Images (URLs)
          </label>
          {product.images.map((url, index) => (
            <input
              key={index}
              type="text"
              value={url}
              onChange={(e) => handleImageChange(e, index)}
              className="w-full mb-2 p-2 bg-zinc-800 rounded-md text-white"
            />
          ))}
          <button
            type="button"
            onClick={addImageField}
            className="text-sm text-sky-400 hover:underline mt-2"
          >
            + Add another image
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="installable"
            checked={product.installable}
            onChange={handleChange}
          />
          <label className="text-zinc-300">Installable</label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-sky-600 hover:bg-sky-700 py-3 rounded-lg font-bold text-white"
        >
          {loading ? "Saving..." : isEdit ? "Update Product" : "Create Product"}
        </button>
      </form>
    </main>
  );
};

export default AdminProductForm;

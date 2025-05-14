import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  brand: string;
  manufacturer: string;
  fitment: string;
  type: string;
  price: number;
  quantity: number;
  description: string;
  images: string[];
  installable: boolean;
}

const AdminProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Failed to load products", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;
    try {
      await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
      });
      fetchProducts();
    } catch (err) {
      console.error("Failed to delete product", err);
    }
  };

  return (
    <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20 min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-white">Manage Products</h1>
        <p className="text-zinc-400 mt-2">
          View, update, or remove products from your catalog.
        </p>
        <button
          onClick={() => navigate("/admin/products/new")}
          className="mt-6 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded-lg"
        >
          + Add New Product
        </button>
      </div>

      {loading ? (
        <p className="text-zinc-400">Loading products...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm bg-zinc-900 rounded-lg overflow-hidden">
            <thead className="bg-zinc-800 text-left">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Brand</th>
                <th className="p-4">Price</th>
                <th className="p-4">Installable</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product._id}
                  className="border-t border-zinc-800 hover:bg-zinc-800"
                >
                  <td className="p-4 font-semibold text-white">
                    {product.name}
                  </td>
                  <td className="p-4 text-zinc-400">{product.brand}</td>
                  <td className="p-4 text-rose-400">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="p-4">{product.installable ? "Yes" : "No"}</td>
                  <td className="p-4 space-x-2">
                    <button
                      onClick={() =>
                        navigate(`/admin/products/edit/${product._id}`)
                      }
                      className="text-sky-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
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

export default AdminProductPage;

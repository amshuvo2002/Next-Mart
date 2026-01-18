"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const AddItemPage = () => {
  const router = useRouter();

  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("auth");
    if (!isLoggedIn) {
      router.push("/login"); 
    }
  }, [router]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://next-backend-olive.vercel.app/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to add item");

      await Swal.fire({
        icon: "success",
        title: "Product Added!",
        text: `${formData.name} has been added successfully`,
        confirmButtonColor: "#3085d6",
      });
      router.push("/items"); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">

       
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Add New Product
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Fill in the details to add a new item
          </p>
        </div>

       
        {error && (
          <div className="mb-4 rounded bg-red-100 text-red-600 px-4 py-2 text-sm">
            {error}
          </div>
        )}

       
        <form onSubmit={handleSubmit} className="space-y-5">

       
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Item Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              required
              onChange={handleChange}
              className="w-full rounded-md text-black border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Short product description"
              required
              onChange={handleChange}
              className="w-full text-black rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price ($)
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                required
                onChange={handleChange}
                className="w-full text-black rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter image URL"
                onChange={handleChange}
                className="w-full text-black rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

        
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 rounded-md bg-blue-600 py-3 text-white font-medium hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "Adding Product..." : "Add Product"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddItemPage;

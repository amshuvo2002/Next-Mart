"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ItemsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("https://next-backend-olive.vercel.app/api/items");
        if (!res.ok) throw new Error("Failed to fetch items");
        const data = await res.json();
        setItems(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-600 text-lg">Loading Items...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );

  return (
    <main className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

       
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">
            Our Products
          </h1>
          <p className="text-gray-600">
            Browse all available items from our collection
          </p>
        </div>

      
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
             
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

          
              <div className="p-5">
                <h2 className="text-xl text-black font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-600 text-sm mb-3">
                  {item.description.length > 80
                    ? item.description.slice(0, 80) + "..."
                    : item.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">
                    ${item.price}
                  </span>

                  <Link
                    href={`/items/${item.id}`}
                    className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ItemsPage;

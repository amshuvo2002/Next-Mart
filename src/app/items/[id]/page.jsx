"use server"; 
import Image from "next/image";

export default async function Page({ params }) {
  
  const { id } = await params; 

  const res = await fetch(
    `http://localhost:5000/api/items/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-xl">Items Not Found (ID: {id})</p>
      </div>
    );
  }

  const item = await res.json();
  console.log('Fetched item:', item);

  if (!item || !item.name || !item.price) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-xl">Data Not Found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg w-full">
        <Image
          src={item.image}
          alt={item.name}
          width={500}
          height={320}
          className="rounded-lg mb-6 object-contain"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-3">{item.name}</h1>
        <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
        <p className="text-4xl font-bold text-blue-600">
          $ {Number(item.price).toLocaleString()}
        </p>
       
      </div>
    </div>
  );
}

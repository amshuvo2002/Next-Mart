"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

 
  const ADMIN_EMAIL = "admin@example.com";
  const ADMIN_PASSWORD = "Asd123";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    document.cookie =
  "isLoggedIn=true; path=/; SameSite=Lax";

router.replace("/items");

    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-gray-100 p-8 border-1 border-gray-300 rounded-lg shadow-md w-full max-w-md">
        
   
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Login to NextMart
        </h1>

      
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-black text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              required
              placeholder=" Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-black border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-black text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              required
              placeholder=" Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-black border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

      
        <div className="mt-6 text-sm text-gray-600 text-center">
          <p>Demo Credentials:</p>
          <p>Email: <span className="font-medium">admin@example.com</span></p>
          <p>Password: <span className="font-medium">Asd123</span></p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;

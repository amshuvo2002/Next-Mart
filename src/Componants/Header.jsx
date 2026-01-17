"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // check login from cookie on mount and whenever cookie changes
  useEffect(() => {
    const checkLogin = () => {
      const loggedIn = document.cookie.includes("isLoggedIn=true");
      setIsLoggedIn(loggedIn);
    };

    checkLogin(); // initial check

    // optional: listen to cookie changes via interval
    const interval = setInterval(checkLogin, 500); // every 0.5s check
    return () => clearInterval(interval);
  }, []);

  // logout handler
  const handleLogout = () => {
    document.cookie = "isLoggedIn=; max-age=0; path=/";
    setIsLoggedIn(false);
    router.push("/login");
  };

  const activeClass = (path) =>
    pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Project Name */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          NextMart
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link href="/" className={activeClass("/")}>
            Home
          </Link>

          <Link href="/items" className={activeClass("/items")}>
            Items
          </Link>

          {!isLoggedIn && (
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Login
            </Link>
          )}

          {isLoggedIn && (
            <>
              <Link
                href="/add-item"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Add Item
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import ThemeToggle from "./ThemeToggle";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { token, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="glass fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[70%] px-6 py-4 flex justify-between items-center z-50 shadow-lg"
    >
      <Link
        href="/"
        className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
      >
        TaskFlow
      </Link>

      <div className="flex items-center gap-4">
        {token ? (
          <>
            <Link
              href="/dashboard"
              className="hover:text-purple-300 transition"
            >
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="px-4 py-1 rounded bg-red-500/80 hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:text-purple-300 transition">
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-1 rounded bg-purple-500 hover:bg-purple-600 transition"
            >
              Register
            </Link>
          </>
        )}

        <ThemeToggle />
      </div>
    </motion.nav>
  );
}

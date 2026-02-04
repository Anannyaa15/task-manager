"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/ParticlesBackground";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const { login, token } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    if (token) {
      router.push("/dashboard");
    }
  }, [token, router]);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      await login(email, password);
      toast.success("Logged in!");
      router.push("/dashboard");
    } catch {
      toast.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass p-10 w-[90%] max-w-md shadow-2xl border border-white/10"
      >
        <h2 className="text-3xl mb-8 font-bold text-center tracking-wide">
          Welcome Back
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-white/15 
          focus:outline-none focus:ring-2 focus:ring-purple-400 
          placeholder:text-gray-300 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-lg bg-white/15 
          focus:outline-none focus:ring-2 focus:ring-purple-400 
          placeholder:text-gray-300 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-3 rounded-lg font-semibold 
          bg-gradient-to-r from-purple-500 to-blue-500
          hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40
          transition-all duration-300 disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mt-6 text-gray-300 text-sm">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-purple-300 hover:underline cursor-pointer"
          >
            Register
          </span>
        </p>
      </motion.div>
    </div>
  );
}

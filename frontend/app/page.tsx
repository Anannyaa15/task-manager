"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Floating Circles */}
      <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 bottom-10 right-10 animate-pulse"></div>

      {/* Rotating Square */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute w-40 h-40 border border-white/20 top-1/4 right-1/4"
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-7xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          TaskFlow
        </h1>

        <p className="mt-6 text-lg max-w-xl mx-auto">
          Organize, manage and track your tasks in a stunning interface.
        </p>
      </motion.div>
    </div>
  );
}

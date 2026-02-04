"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import api from "@/lib/axios";
import toast from "react-hot-toast";

export default function TaskModal({ onClose, refresh }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createTask = async () => {
    await api.post("/tasks", { title, description });
    toast.success("Task created");
    refresh();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="glass p-8 w-96">
        <input
          placeholder="Title"
          className="w-full p-3 mb-3 rounded bg-white/10"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full p-3 mb-4 rounded bg-white/10"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={createTask} className="w-full py-2 bg-purple-500 rounded">
          Add
        </button>
      </motion.div>
    </div>
  );
}

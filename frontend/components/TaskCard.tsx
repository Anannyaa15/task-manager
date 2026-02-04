"use client";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function TaskCard({ task, onDelete, onToggle }: any) {
  return (
    <Tilt glareEnable glareMaxOpacity={0.2} scale={1.05}>
      <motion.div whileHover={{ y: -5 }} className="glass p-6 shadow-xl">
        <h3 className="text-xl font-semibold">{task.title}</h3>
        <p className="text-gray-300">{task.description}</p>

        <div className="flex justify-between mt-4">
          <button onClick={() => onToggle(task.id)} className="text-green-400">
            Toggle
          </button>
          <button onClick={() => onDelete(task.id)} className="text-red-400">
            Delete
          </button>
        </div>
      </motion.div>
    </Tilt>
  );
}

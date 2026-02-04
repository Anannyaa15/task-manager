"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AnalyticsChart({ tasks }: any) {
  const completed = tasks.filter((t: any) => t.status === "COMPLETED").length;
  const pending = tasks.filter((t: any) => t.status === "PENDING").length;

  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        label: "Tasks",
        data: [completed, pending],
        backgroundColor: ["#22c55e", "#f59e0b"],
      },
    ],
  };

  return (
    <div className="glass p-6 mt-10">
      <Bar data={data} />
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import TaskCard from "@/components/TaskCard";
import TaskModal from "@/components/TaskModal";
import AnalyticsChart from "@/components/AnalyticsChart";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import toast from "react-hot-toast";

export default function Dashboard() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTask = async (id: string) => {
    await api.delete(`/tasks/${id}`);
    toast.success("Deleted");
    fetchTasks();
  };

  const toggleTask = async (id: string) => {
    await api.patch(`/tasks/${id}/toggle`);
    fetchTasks();
  };

  const handleDrag = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reordered] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordered);
    setTasks(items);
  };

  return (
    <div className="p-10">
      <button onClick={() => setShowModal(true)} className="mb-6 px-4 py-2 bg-purple-500 rounded">
        Add Task
      </button>

      <DragDropContext onDragEnd={handleDrag}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <TaskCard task={task} onDelete={deleteTask} onToggle={toggleTask} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <AnalyticsChart tasks={tasks} />

      {showModal && (
        <TaskModal onClose={() => setShowModal(false)} refresh={fetchTasks} />
      )}
    </div>
  );
}

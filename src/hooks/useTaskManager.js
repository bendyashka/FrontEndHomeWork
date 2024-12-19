import { useState } from "react";

function useTaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.trim()) setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  return { tasks, addTask, deleteTask };
}

export default useTaskManager;

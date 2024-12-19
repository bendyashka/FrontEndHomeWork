import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

function AddTask() {
  const [task, setTask] = useState("");
  const { addTask } = useTaskContext();

  const handleAdd = () => {
    addTask(task);
    setTask("");
  };

  return (
    <div className="add-task">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default AddTask;

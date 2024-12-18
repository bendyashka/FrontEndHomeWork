import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AddTask task={task} setTask={setTask} addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

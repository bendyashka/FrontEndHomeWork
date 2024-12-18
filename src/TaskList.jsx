import { useTaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasks } = useTaskContext();

  return (
    <ul>
      {tasks.map((t, index) => (
        <TaskItem key={index} task={t} />
      ))}
    </ul>
  );
}

export default TaskList;

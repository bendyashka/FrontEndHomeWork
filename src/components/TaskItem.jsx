import { useTaskContext } from "../context/TaskContext";

function TaskItem({ task, index }) {
  const { deleteTask } = useTaskContext();

  return (
    <li className="task-item">
      {task}
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
}

export default TaskItem;

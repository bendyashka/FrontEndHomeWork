import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((t, index) => (
        <TaskItem key={index} task={t} />
      ))}
    </ul>
  );
}

export default TaskList;

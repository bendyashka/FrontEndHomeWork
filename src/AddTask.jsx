function AddTask({ task, setTask, addTask }) {
    return (
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    );
  }
  
  export default AddTask;
  
import Task from "./task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.slice(1,6).map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  );
};

export default Tasks;

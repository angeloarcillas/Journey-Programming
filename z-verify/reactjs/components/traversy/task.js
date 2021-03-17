import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`bg-gray-100 p-2 pb-4 ${
        task.completed ? "border-l-2 border-green-700" : ""
      }`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h2 className="flex justify-between items-end">
        {task.title}{" "}
        <FaTimes className="text-red-400" onClick={() => onDelete(task.id)} />
      </h2>
      <p className="text-xs">{task.userId}</p>
    </div>
  );
};

export default Task;

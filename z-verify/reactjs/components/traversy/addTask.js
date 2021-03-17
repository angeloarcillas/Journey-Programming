import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <div className="mb-6">
      <form onSubmit={onSubmit}>
        <div className="mb-6 text-gray-500 font-bold uppercase text-sm">
          <label className="block mb-1" htmlFor="task">
            Task
          </label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="task"
            className="border rounded w-full p-2"
            type="text"
            name="task"
            placeholder="Add task"
          />
        </div>

        <div className="mb-6 text-gray-500 font-bold uppercase text-sm">
          <label htmlFor="dateTime">Date and Time</label>
          <input
            value={day}
            onChange={(e) => setDay(e.target.value)}
            id="dateTime"
            className="border rounded w-full p-2"
            type="text"
            name="dateTime"
            placeholder="Add day"
          />
        </div>

        <div className="mb-6 text-gray-500 font-bold uppercase text-sm">
          <label htmlFor="reminder">
            <input
              checked={reminder}
              value={reminder}
              onChange={(e) => setReminder(e.target.checked)}
              id="reminder"
              className="mr-2"
              type="checkbox"
              name="reminder"
            />
            Set Reminder
          </label>
        </div>

        <input
          className="w-full py-2 px-3 text-white bg-black rounded cursor-pointer"
          type="submit"
          value="Save Task"
        />
      </form>
    </div>
  );
};

export default AddTask;

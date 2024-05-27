import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name.length < 3)
      return toast.error("A task must be more than 3 character");
    setTasks((prev) => {
      const list = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });
    toast.success("Task Created")
    setTask({
      id: "",
      name: "",
      status: "todo",
    });
  };
  //console.log(task);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-2 border-slate-400 bg-slate-200 rounded mr-4 h-12 w-80 px-1"
        value={task.name}
        onChange={(e) =>
          setTask({ ...task, id: uuidv4(), name: e.target.value })
        }
      />
      <button className="bg-[#635fc7] py-2 px-4 rounded-full text-white text-lg font-semibold hover:opacity:80 duraction-200;">
        Add Tasks
      </button>
    </form>
  );
};
export default CreateTask;

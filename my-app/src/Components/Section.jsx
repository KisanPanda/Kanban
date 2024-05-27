import { useDrop, useDrag } from "react-dnd";
import Header from "./Header";
import Task from "./Task";
import toast from "react-hot-toast";

const Section = ({ status, tasks, setTasks, todos, inProgress, closed }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "Backlog";
  let bg = "bg-red-500";
  let tasksToMap = todos;

  if (status === "inprogress") {
    text = "To Do";
    bg = "bg-purple-500";
    tasksToMap = inProgress;
  }

  if (status === "closed") {
    text = "Ongoing";
    bg = "bg-green-500";
    tasksToMap = closed;
  }

  const addItemToSection = (id) => {
    //console.log("dropped",id,status)
    setTasks((prev) => {
      const mTasks = prev.map((t) => {
        if (t.id === id) {
          return { ...t, status: status };
        }
        return t;
      });
      localStorage.setItem("tasks",JSON.stringify(mTasks))
      toast("Task status changed");
      return mTasks;
    });
  };

  return (
    <div
      ref={drop}
      className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-400" : ""}`}
    >
      <Header text={text} bg={bg} count={tasksToMap.length} />
      {tasksToMap.length > 0 &&
        tasksToMap.map((task) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
    </div>
  );
};
export default Section;

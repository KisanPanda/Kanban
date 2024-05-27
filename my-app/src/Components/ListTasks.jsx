import { useEffect, useState } from "react";
import Section from "./Section";

const ListTasks = ({ tasks, setTasks }) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);
  useEffect(() => {
    const fTodos = tasks.filter((task) => task.status === "todo");
    const fInProgress = tasks.filter((task) => task.status === "inprogress");
    const fclosed = tasks.filter((task) => task.status === "closed");
    setTodos(fTodos);
    setInProgress(fInProgress);
    setClosed(fclosed);
  }, [tasks]);

  const statuses = ["todo", "inprogress", "closed"];
  return (
    <div className="flex gap-16 text-center ml-[450px]">
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          inProgress={inProgress}
          closed={closed}
        />
      ))}
    </div>
  );
};
export default ListTasks;

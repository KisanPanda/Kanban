import { useEffect, useState } from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Toaster } from "react-hot-toast";
import CreateTask from "./CreateTask";
import ListTasks from "./ListTasks";
import Navbar from "./Navbar";



const Home = () => {
  const [tasks, setTasks] = useState([]);

 
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);
  return (
    <DndProvider backend={HTML5Backend}>
      <Navbar />
      <Toaster />
      <div className="bg-slate-100 w-screen h-screen flex flex-col pt-32 gap-16 text-center">
        <CreateTask tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider>
  );
};
export default Home;

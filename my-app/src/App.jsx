import Home from "./Components/Home";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";

function App() {
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   let username = localStorage.getItem("username");
  //   if(username === '' || username === null) {
  //     navigate("/register")
  //   }
  // },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

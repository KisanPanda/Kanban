import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (vaidate()) {
      //console.log("proceed");
      fetch("http://localhost:5000/user/" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            alert("User Not Found");
          }
          else{
            if(resp.password === password){
                localStorage.setItem('username',username);
                navigate("/")
            }
            else{
                alert("Wrong Password");
            }
          }
        })
        .catch((err) => {
          alert("Login Failer" + err.message);
        });
    }
  };

  const vaidate = () => {
    let result = true;
    if (username === "" || username === null) {
      return false;
      alert("Please Enter Username");
    }
    if (password === "" || password === null) {
      return false;
      alert("Please Enter the password");
    }
    return result;
  };

  return (
    <div className="row">
      <h1 className="display-3 text-center mb-4">Login</h1>
      <div className="offset-lg-3 col-lg-6">
        <form onSubmit={ProceedLogin} className="container">
          <div className="card">
            <div className="card-header"></div>
            <div className="card-body">
              <div className="form-group">
                <label>
                  Username <span className="errmsg">*</span>
                </label>
                <input
                  value={username}
                  onChange={(e) => usernameupdate(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <input
                  value={password}
                  onChange={(e) => passwordupdate(e.target.value)}
                  type="password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Signin
              </button>{" "}
              |
              <Link className="btn btn-success" to={"/register"}>
                New User
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;

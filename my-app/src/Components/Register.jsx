import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [emai, emailchange] = useState("");
  const [phone, phonechange] = useState("");

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter valid input";
    if (id === "") {
      isproceed = false;
      alert((errormessage += " UserName"));
    }
    if (name === "") {
      isproceed = false;
      errormessage += " Fullname";
    }
    if (password === "") {
      isproceed = false;

      errormessage += " password";
    }
    
    return isproceed;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, password, emai, phone };
    if (IsValidate()) {
      //console.log(regobj)
      fetch("http://localhost:5000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("SignUp Successfully");
          navigate("/login");
        })
        .catch((err) => {
          toast("Failed".err.message);
        });
    }
  };
  return (
    <div>
      <h1 className="display-3 text-center mb-4">Sign Up</h1>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-header"></div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      User Name<span className="errmsg">*</span>
                    </label>
                    <input
                      value={id}
                      onChange={(e) => idchange(e.target.value)}
                      type="text"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password<span className="errmsg">*</span>
                    </label>
                    <input
                      value={password}
                      onChange={(e) => passwordchange(e.target.value)}
                      type="password"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Full Name<span className="errmsg">*</span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => namechange(e.target.value)}
                      type="text"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email<span className="errmsg">*</span>
                    </label>
                    <input
                      value={emai}
                      onChange={(e) => emailchange(e.target.value)}
                      type="text"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Phone No<span className="errmsg">*</span>
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => phonechange(e.target.value)}
                      type="number"
                      className="form-control"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                SignUp
              </button>
              <a className="btn btn-danger ml-6">Back</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;

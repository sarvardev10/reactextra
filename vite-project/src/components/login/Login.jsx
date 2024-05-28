import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    if (username === "admin" && password === "1234") {
      navigate("/cars");
    } else {
      alert("Access denied");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="card-body">
              <form id="submit" onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="username"
                  className="form-control my-2"
                  name="username"
                />
                <input
                  type="password"
                  onChange={handleChange}
                  placeholder="password"
                  className="form-control my-2"
                  name="password"
                />
              </form>
            </div>
            <div className="card-footer">
              <button type="submit" form="submit" className="btn btn-success">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

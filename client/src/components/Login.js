import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);

    axios
      .post("http://localhost:5000/api/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubbles");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Welcome back!</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="form-label-group">
                        <input
                          type="text"
                          name="username"
                          value={user.username}
                          placeholder="Enter Username"
                          onChange={handleChange}
                          className="form-control"
                        />
                        <label htmlFor="inputEmail">Username</label>
                      </div>

                      <div className="form-label-group">
                        <input
                          type="password"
                          name="password"
                          value={user.password}
                          placeholder="Enter Password"
                          onChange={handleChange}
                          className="form-control"
                        />
                        <label htmlFor="inputPassword">Password</label>
                      </div>

                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                        />
                      </div>
                      <button
                        className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                        type="submit"
                      >
                        Sign in
                      </button>
                      <div className="text-center">
                        <a className="small" href="#">
                          Forgot password?
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import { AxiosWithAuth } from "../utils/AxiosWithAuth";
import Axios from "axios";

const Login = props => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const userHandler = e => {
    setUser(e.target.value);
  };

  const passHandler = e => {
    setPass(e.target.value);
  };

  const login = e => {
    e.preventDefault();
    console.log(user);
    console.log(pass);

    const credentials = {
      username: user,
      password: pass
    };

    AxiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        console.log(res.data.payload);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubbles");
      })
      .catch(err => {
        console.log("From Login.js", err);
      });
  };
  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Welcome back!</h3>
                  <form onSubmit={login}>
                    <div className="form-label-group">
                      <input
                        value={user}
                        onChange={userHandler}
                        type="username"
                        className="form-control"
                        placeholder="User name"
                        autoComplete="off"
                        required
                      />
                      <label htmlFor="inputEmail">Username</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        value={pass}
                        onChange={passHandler}
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        autoComplete="off"
                        required
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
  );
};

export default Login;

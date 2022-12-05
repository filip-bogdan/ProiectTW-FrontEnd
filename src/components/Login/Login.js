import React from "react";
import "./login.css";
import greenBg from "../../icons/green-bg.png";

const Login = () => {
  return (
    <div className="login-page">
      <img className="green-bg" src={greenBg} />
      <div className="login">
        <h2>Log In</h2>
        <h3>
          Welcome to InterJobs!<br></br> Login to your account
        </h3>
        <form className="form">
          <div class="textbox">
            <input type="email" required />
            <label>Email</label>
            <span class="material-symbols-outlined"> email </span>
          </div>

          <div class="textbox">
            <input type="password" required />
            <label>Password</label>
            <span class="material-symbols-outlined"> key </span>
          </div>

          <p>
            Don't have an account?
            <a href="/signup">&#32;Sign Up here</a>
          </p>

          <button type="submit">
            Login to InterJobs
            <span class="material-symbols-outlined"> arrow_forward </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

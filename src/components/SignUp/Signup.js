import React from "react";
import "./signup.css";
import greenBg from "../../icons/green-bg.png";

const signup = () => {
  return (
    <div className="signup-page">
      <img className="green-bg" src={greenBg} />
      <div className="signup">
        <h2>Sign Up</h2>
        <h3>It's quick & simple</h3>
        <form className="form">
          <div class="textbox">
            <input type="text" required />
            <label>Name</label>
            <span class="material-symbols-outlined"> account_circle </span>
          </div>

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
            Signed up already?
            <a href="/login">&#32;Login here</a>
          </p>

          <button type="submit">
            Join InterJobs
            <span class="material-symbols-outlined"> arrow_forward </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default signup;

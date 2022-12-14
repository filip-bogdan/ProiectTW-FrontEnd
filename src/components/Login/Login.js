import React, { useEffect, useState } from "react";
import "./login.css";
import greenBg from "../../icons/green-bg.png";
import HomePage from "../HomePage/HomePage";

const Login = () => {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setError("");
  }, [email, password]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:5000/api/Users");
      const jsonResult = await result.json();
      //console.log(jsonResult);

      setUser(jsonResult);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();


    user.map((user) => {
      const descr = user.description;
      const profilePic = user.profilePicture;
      const userType = user.userType.name;
      if (email === user.email && password === user.password) {
        localStorage.setItem("email", email);
        localStorage.setItem("logged", true);
        localStorage.setItem("description",descr);
        localStorage.setItem("profilePic", profilePic);
        localStorage.setItem("userType", userType);
        setEmail("");
        setPassword("");
        setSuccess(true);
      } else {
        setError("Email or password invalid!");
      }
    });
  };

  return (
    <React.Fragment>
      {success ? (
        <HomePage />
      ) : (
        <div className="login-page">
          <img className="green-bg" src={greenBg} />
          <div className="login">
            <h2>Log In</h2>
            <h3>
              Welcome to InterJobs!<br></br> Login to your account
            </h3>

            <p>{error}</p>

            <form className="form" onSubmit={handleSubmit}>
              <div className="textbox">
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <label>Email</label>
                <span className="material-symbols-outlined"> email </span>
              </div>

              <div className="textbox">
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <label>Password</label>
                <span className="material-symbols-outlined"> key </span>
              </div>

              <p>
                Don't have an account?
                <a href="/signup">&#32;Sign Up here</a>
              </p>

              <button type="submit">
                Login to InterJobs
                <span className="material-symbols-outlined"> arrow_forward </span>
              </button>
            </form>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Login;

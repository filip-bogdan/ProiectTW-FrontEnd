import React, { useEffect, useState } from "react";
import "./signup.css";
import greenBg from "../../icons/green-bg.png";
import HomePage from "../HomePage/HomePage";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const [userType, setUserType] = React.useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:5000/api/UserTypes");
      const data = await result.json();

      setData(data);
    };

    fetchData();
  }, []);


  const handleChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = async (e) => {

    const sendData = async () => {
      await fetch("http://localhost:5000/api/Users", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          userTypeId: userType
        }),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())

        .then((json) => console.log(json));
    };
    sendData();

    navigate("/login");
  };

  return (
    <React.Fragment>
      {success ? (
        <HomePage />
      ) : (
        <div className="signup-page">
          <img className="green-bg" src={greenBg} />
          <div className="signup">
            <div className="signup-wrapper">
              <h2>Sign Up</h2>
              <h3>It's quick & simple</h3>
              <form className="form" onSubmit={handleSubmit}>
                <div className="textbox">
                  <input
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                    placeholder="Name"
                  />
                  <span class="material-symbols-outlined">
                    {" "}
                    account_circle{" "}
                  </span>
                </div>

                <div className="textbox">
                  <input
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    placeholder="Email"
                  />
                  <span class="material-symbols-outlined"> email </span>
                </div>

                <div className="textbox">
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    placeholder="Password"
                  />
                  <span class="material-symbols-outlined"> key </span>
                </div>

                <label className="select-label">Select account type</label>
                <FormControl sx={{ m: 0, minWidth: 20 }}>
                  <Select value={userType} onChange={handleChange} required>
                    {data.map((d) => (
                      <MenuItem value={d.id}>{d.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

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
        </div>
      )}
    </React.Fragment>
  );
};

export default Signup;

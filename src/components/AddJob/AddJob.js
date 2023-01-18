import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "responsive-navbar-react/dist/index.css";
import "./addjob.css";

const AddJob = () => {
  const [type, setType] = useState("");
  const [loc, setLoc] = useState("");
  const [op, setOp] = useState("");
  const [rs, setRs] = useState("");
  const [descr, setDescr] = useState("");
  const [name, setName] = useState("");
  const userID = localStorage.getItem("userId")

  const handleAdd = async () => {

    const jobformdata = new FormData();
    jobformdata.append("employerID", userID);
    jobformdata.append("name", name);
    jobformdata.append("type", type);
    jobformdata.append("description", descr);
    jobformdata.append("requiredSkills", rs);
    jobformdata.append("openPositionsNumber", op);
    jobformdata.append("location", loc);

    const sendData = async () => {
      await fetch("http://localhost:5000/api/Jobs", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        body: jobformdata,

      })
        .then((response) => response.json())

        .then((json) => console.log(json));
    };
    sendData();
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="add-job-wrapper">
        <div className="add-job-datas">
          <div className="add-job">
            Job name:
            <input
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="add-job">
            Type:
            <input
              type="text"
              required
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className="add-job">
            Location:
            <input
              type="text"
              required
              onChange={(e) => setLoc(e.target.value)}
            />
          </div>
          <div className="add-job">
            Open positions:
            <input
              type="text"
              required
              onChange={(e) => setOp(e.target.value)}
            />
          </div>
          <div className="add-job">
            Required skills:
            <input
              type="text"
              required
              onChange={(e) => setRs(e.target.value)}
            />
          </div>
          <div className="add-job">
            Description:
            <input
              type="text"
              required
              onChange={(e) => setDescr(e.target.value)}
            />
          </div>{" "}
        </div>
        <button className="apply-button3" onClick={handleAdd}>
          Add new Job
        </button>
      </div>
    </React.Fragment>
  );
};

export default AddJob;

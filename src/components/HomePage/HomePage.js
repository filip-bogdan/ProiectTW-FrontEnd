import React, { useEffect, useState } from "react";
import "./homepage.css";
import "responsive-navbar-react/dist/index.css";
import CardComponent from "../CardComponent/CardComponent";
import NavBar from "../NavBar/NavBar";

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:5000/api/Jobs");
      const jsonResult = await result.json();

      setJobs(jsonResult);
    };

    fetchData();
  }, []);



  return (
    <React.Fragment>
      <NavBar />
      <div className="main-container">
        {jobs.map((jobs) => (
          <React.Fragment>
            <CardComponent
              id={jobs.id}
              name={jobs.name}
              type={jobs.type}
              loc={jobs.location}
              op={jobs.openPositionsNumber}
              rs={jobs.requiredSkills}
              descr={jobs.description}
            />
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default HomePage;

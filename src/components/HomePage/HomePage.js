import React, { useEffect, useState } from "react";
import "./homepage.css";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
import CardComponent from "../CardComponent/CardComponent";

const HomePage = () => {
  const props = {
    items: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Profile",
        link: "/",
      },
      {
        text: "Contact",
        link: "/",
      },
    ],
    logo: {
      text: "InterJobs",
    },
    style: {
      barStyles: {
        background: "#111820",
        padding: "30px",
      },
      sidebarStyles: {
        background: "#111820",
        buttonColor: "white",
      },
    },
  };

  const [jobs, setJobs] = useState([]);

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
      <div className="nav-area">
        <Navbar {...props} />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="main-container">
        {jobs.map((jobs) => (
          <React.Fragment>
            <CardComponent name={jobs.name} descr={jobs.description}/>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default HomePage;

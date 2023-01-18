import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Navbar } from "responsive-navbar-react";
import "./navbar.css";

function NavBar() {
  const [userTypeName, setUserTypeName] = useState("");
  let props={};
  const userTypeID = localStorage.getItem("userTypeId");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `http://localhost:5000/api/UserTypes/${userTypeID}`
      );
      const jsonResult = await result.json();

      setUserTypeName(jsonResult.name);
    };

    fetchData();
  }, []);

  if (userTypeName === "Employer") {
     props = {
      items: [
        {
          text: "Add new Job",
          link: "/add-new-job",
        },
        {
          text: "Home",
          link: "/",
        },
        {
          text: "Profile",
          link: "/profile",
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
  }else{
     props = {
      items: [
        {
          text: "Home",
          link: "/",
        },
        {
          text: "Profile",
          link: "/profile",
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
  }

  const navigate = useNavigate();

  const handleLogout = (e) => {
    localStorage.setItem("email", "");
    localStorage.setItem("logged", false);
    window.location.reload(false);
    navigate("/login");
  };

  return (
    <React.Fragment>
      <div className="nav-area">
        <Navbar {...props} />
        <Button
          className="logout-button"
          variant="contained"
          onClick={handleLogout}
        >
          LogOut
        </Button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </React.Fragment>
  );
}

export default NavBar;

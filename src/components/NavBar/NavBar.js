import React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { Navbar } from "responsive-navbar-react";
import "./navbar.css"

function NavBar() {
    const props = {
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

export default NavBar

import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import NavBar from "../NavBar/NavBar";
import "./profile.css";

export default function Profile() {
  const userID = localStorage.getItem("userId");
  const userTypeID = localStorage.getItem("userTypeId");

  const [userTypeName, setUserTypeName] = useState("");

  const [userdata, setUserData] = useState([]);
  const [image, setImage] = useState("");
  const [descr, setDescr] = useState("");
  const [ph, setPh] = useState("");
  const [pw, setPw] = useState("");

  useEffect(()=>{},[])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:5000/api/Users/${userID}`);
      const jsonResult = await result.json();

      setUserData(jsonResult);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:5000/api/UserTypes/${userTypeID}`);
      const jsonResult = await result.json();

      setUserTypeName(jsonResult.name)
    };

    fetchData();
  }, []);


  const handleModification = async () => {
    const sendData = async () => {
      fetch(`http://localhost:5000/api/Users/${userID}`, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        body: JSON.stringify({
          id: userID,
          name: userdata.name,
          email: userdata.email,
          description: descr,
          phoneNumber: ph,
          password: pw,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())

        .then((json) => console.log(json));
    };
    sendData();
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="profile-page">
        <div className="profile-page-left">
          <div className="profile-image-wrapper">
            <div className="profile-image"></div>
          </div>
          <label className="pic-label">Click to change picture</label>
          <div className="profile-data-wrapper1">
            <div className="profile-data1">
              <div className="profile-name">Name: {userdata.name}</div>
              <div className="profile-email">Email: {userdata.email}</div>
              <div className="profile-type">Type: {userTypeName}</div>
            </div>
          </div>
        </div>
        <div className="profile-page-right">
          <div className="profile-page-right-data">
            <div className="profile-data-wrapper">
              <div className="profile-data-title">Description</div>
              <div className="profile-data">
                <input
                  className="profile-description"
                  type="text"
                  id="text"
                  placeholder={
                    userdata.description === null
                      ? "Write your description"
                      : userdata.description
                  }
                  required
                  onChange={(e) => setDescr(e.target.value)}
                />
              </div>
            </div>

            <div className="profile-data-wrapper">
              <div className="profile-data-title">Phone number</div>
              <div className="profile-data">
                <input
                  type="text"
                  id="text"
                  placeholder={
                    userdata.phoneNumber === null
                      ? "Write your phone number"
                      : userdata.phoneNumber
                  }
                  required
                  onChange={(e) => setPh(e.target.value)}
                />
              </div>
            </div>

            <div className="profile-data-wrapper">
              <div className="profile-data-title">Password</div>
              <div className="profile-data">
                <input
                  type="password"
                  id="password"
                  placeholder="Change your password"
                  required
                  onChange={(e) => setPw(e.target.value)}
                />
              </div>
            </div>

            <div className="profile-data-wrapper2">
              <div className="buttons-wrapper2">
                <button className="apply-button2" onClick={handleModification}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

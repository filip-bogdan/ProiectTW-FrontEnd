import React from "react";
import "./job-page.css";
import Button from "@mui/joy/Button";
import Modal from "react-bootstrap/Modal";

const JobPage = (props) => {

  const handleApplication = () =>{
    const jobID = props.id; 
    const userID = props.userId;

    const apply = async () => {
      fetch("http://localhost:5000/api/JobApplications", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        body: JSON.stringify({
          userID: userID,
          jobID: jobID
        }),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())

        .then((json) => console.log(json));
    }
    apply();
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="job-modal-wrapper"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 className="job-name">{props.name}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="column-div">
          <div className="row-div">
            <div className="data-wrapper row-wrapper">
              <h4>Type:</h4>
              <p className="row-p">{props.type}</p>
            </div>
            <div className="data-wrapper row-wrapper">
              <h4>Location:</h4>
              <p className="row-p">{props.loc}</p>
            </div>
            <div className="data-wrapper row-wrapper">
              <h4>Open positions:</h4>
              <p className="row-p">{props.op}</p>
            </div>
          </div>

          <div className="data-wrapper">
            <h4>Required skills:</h4>
            <p>{props.rs}</p>
          </div>

          <div className="data-wrapper">
            <h4>Description</h4>
            <p>{props.descr}</p>
          </div>
        </div>
      </Modal.Body>
      <div className="buttons-wrapper">
        <button className="apply-button" onClick={handleApplication}>Apply</button>
        <button className="close-button" onClick={props.onHide}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default JobPage;

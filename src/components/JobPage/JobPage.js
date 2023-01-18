import React from "react";
import "./job-page.css";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobPage = (props) => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleApplication = async (e) => {
    const jobID = props.id;
    const userID = localStorage.getItem("userId");

    const cv = selectedFile;

    const formdata = new FormData();
    formdata.append("cvContent", cv);
    formdata.append("userID", userID);
    formdata.append("jobID", jobID);

    toast.success("File sent!", {
      position: toast.POSITION.TOP_CENTER,
    });

    const apply = async () => {
      await fetch("http://localhost:5000/api/JobApplications", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        body: formdata,
      })
        .then((response) => response.json())

        .then((json) => console.log(json));
    };
    apply();
  };

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
          <div class="file-upload">
            <div class="file-select">
              <div class="file-select-button" id="fileName">
                Choose File
              </div>
              <div class="file-select-name" id="noFile">
                {isFilePicked ? (
                  <>{selectedFile.name}</>
                ) : (
                  <>No file chosen...</>
                )}
              </div>
              <input
                type="file"
                name="chooseFile"
                id="chooseFile"
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <div className="buttons-wrapper">
        {isFilePicked ? (
          <>
            {" "}
            <button className="apply-button" onClick={handleApplication}>
              Apply
            </button>
          </>
        ) : (
          <button className="disabled-btn" onClick={handleApplication} disabled>
            Apply
          </button>
        )}

        <button className="close-button" onClick={props.onHide}>
          Close
        </button>
      </div>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Modal>
  );
};

export default JobPage;

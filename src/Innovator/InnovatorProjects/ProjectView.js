import React, { useEffect, useState } from "react";
import { Button, Container, ListGroup, ProgressBar } from "react-bootstrap";
import Header from "../../CommonComponents/Header";
import { Link, useParams } from "react-router-dom";
import Footer from "../../CommonComponents/Footer/Footer";
import { endpoints } from "../../services/defaults";
import useApi from "../../hooks/useApi";
import "./InnovatorProject.css";

function ProjectView() {
  const [project, setProject] = useState(null); // Initialize state to null
  const { request: projectview } = useApi("get");
  const { id } = useParams();

  const navObj = [
    { text: "Home", link: "/" },
    { text: "Projects", link: "/innovator/projects" },
    { text: "Messages", link: "" },
  ];

  const getSingleProject = async () => {
    try {
      const url = `${endpoints.PROJECT_VIEW}${id}`;
      const apiResponse = await projectview(url);
      const { response, error } = apiResponse;
      if (!error && response) {
        setProject(response.data[0]); // Assuming response.data is an array
      }
    } catch (error) {
      console.error("Failed to fetch project", error);
    }
  };

  useEffect(() => {
    getSingleProject();
  }, [id]);

  if (!project) return <div>Loading...</div>; // Loading state

  return (
    <>
      <div className="sticky-top">
        <Header navObj={navObj} />
      </div>
      <div className="main-div">
        <Container fluid={"sm"} className="p-3 text-center">
          <div className="text-start">
            <Link to={"/innovator/projects"}>
              <Button variant="outline-dark rounded-0" className="ms-auto">
                <i className="fa-solid fa-arrow-left"></i> Back
              </Button>
            </Link>
          </div>
          <img
            className="img-fluid mb-3"
            src={`http://127.0.0.1:8000/${project.image}`}
            alt=""
            style={{ height: "400px" }}
          />
          <h1>{project.project_name}</h1>
          <p style={{ textAlign: "justify" }} className="mb-5">
            {project.description}
          </p>
          <div className="w-75 mx-auto my-2">
            <h3>Amount raised</h3>
            <ProgressBar
              variant="success"
              className="striped"
              now={(project.amount / project.amount) * 100}
              label={`₹${project.amount}`}
              title={`₹${project.amount} / ₹${project.targetAmount}`}
              style={{ height: "30px" }}
              data-bs-theme="dark"
            />
            <div className="d-flex justify-content-between mb-3">
              <p>Deadline: {project.end_date || "N/A"}</p>
              <p>
                Target Amount: <b>₹{project.amount}</b>
              </p>
            </div>
          </div>
          {/* <h3>Investors</h3>
          <ListGroup className="w-75 mx-auto fw-bold mb-5">
            {project.investors?.map((i, index) => (
              <ListGroup.Item
                className="bg-transparent d-flex justify-content-evenly"
                key={index}
              >
                {i.name} <span className="vr mx-4"></span> ₹{i.amount}
              </ListGroup.Item>
            ))}
          </ListGroup> */}
          {/* {project.images?.length > 0 && (
            <>
              <h3>Images</h3>
              <div className="scroll-container mb-5">
                {project.images.map((img, index) => (
                  <img src={img} alt={`image-${index}`} key={index} height={250} />
                ))}
              </div>
            </>
          )} */}
          {/* {project.videos?.length > 0 && (
            <>
              <h3>Videos</h3>
              <div className="scroll-container">
                {project.videos.map((video, index) => (
                  <video controls height={250} key={index}>
                    <source src={video} type="video/mp4" />
                    <source src={video} type="video/webm" />
                    <source src={video} type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>
                ))}
              </div>
            </>
          )} */}
        </Container>
      </div>
    </>
  );
}

export default ProjectView;



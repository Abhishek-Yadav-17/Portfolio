import React from "react";
import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import projects from "./db.json";
import { useNavigate } from "react-router";

const Projects = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  let x = 0;
  return (
    <>
      <section id="project-container">
        <h2>Projects</h2>
        <hr />
        <div className="row">
          {projects[0].project.map((elem) => {
            const { title, link, image, sNo } = elem;
            if (x < 3) {
              ++x;
              return (
                <div className="col-lg-4" data-aos="zoom-in-right" key={sNo}>
                  <div className="card d-flex" style={{borderRadius:"0"}}>
                    <img src={image} style={{borderRadius:"0"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="d-flex">
                        <h5 className="card-title">{title}</h5>
                        <a href={link}>
                          <i className="fa-solid fa-link mx-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <button
          onClick={() => {
            navigate("/all-projects");
          }}
          style={{ color: "#1C6DD0" }}
          className="btn"
        >
          Load more {">"}
        </button>
      </section>
    </>
  );
};

export default Projects;

import React from "react";
import "./Projects.css";
import db from "./db.json";
import Navbar from "../Navbar/Navbar";

const AllProj = () => {
  let x = 0;
  return (
    <div style={{backgroundColor:"#f5ece9"}}>
      <Navbar />
      <h1 style={{ textAlign: "center", padding: "2rem", marginTop:"4rem", color: "#1C6DD0" }}>
        Collection of all my Projects
      </h1>
      {db[0].project.map((e) => (
        <div className="row proj" key={e.sNo}>
          <div className="col-xl-6 img__col">
            <strong>{++x}.</strong> {" "}
            <img
              style={{ height: "50vh", objectFit: "contain" }}
              src={e.image}
              alt={e.sNo}
            />
          </div>
          <div className="col-xl-6 desc__col">
            <h3>
              {e.title}
              <a href={e.link}>
                <i className="fa-solid fa-link mx-2"></i>
              </a>
            </h3>
            <p><strong>Tech Stack: </strong>{e.Tech_Stack}</p>
            <p>{e.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProj;

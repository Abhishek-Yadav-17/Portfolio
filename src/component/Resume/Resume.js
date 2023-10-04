import React from "react";
import "./Resume.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section id="resume-container">
        <h2>Resume</h2>
        <hr />

        <div className="row">
          <div className="col-lg-6 resume-content" data-aos="fade-right">
            <h3>Summary</h3>
            <ul className="resume-content">
              <li className="resume-bullet">
                <h5>
                  <i className="fa-regular fa-circle"></i>Abhishek Yadav
                </h5>
                <p>
                  Highly motivated and versatile web developer with a strong
                  foundation in Java, J2EE, Spring Boot, Hibernate, ASP.NET, and
                  a proficiency in front-end technologies like React,
                  JavaScript, HTML, and CSS. Skilled in creating end-to-end web
                  applications, I've developed projects using React, Spring
                  Boot, Node.js, and ASP.NET for back-end functionality, with
                  SQL and MongoDB as database solutions. My educational
                  background includes a PG Diploma in Advanced Computing from
                  CDAC, and I bring a solid grasp of data structures and
                  algorithms to my development work, ensuring efficient and
                  optimized code.
                </p>
                <ul className="resume-contact">
                  <li>
                    <i className="fa-solid fa-location-dot"></i> <strong>Current Address: </strong> Mumbai, India
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i> <strong>Permanent Address: </strong> Kanpur, India
                  </li>
                  <li>
                    <i className="fa-solid fa-mobile"></i><strong> Mobile No.: </strong> +91- 6386653849
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <strong>Email: </strong>
                    <a href="mailto:abhishekyadav17012000@gmail.com">
                      abhishekyadav17012000@gmail.com
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <h3>Education</h3>
            <ul className="resume-content">
              <li className="resume-bullet">
                <h5>
                  <i className="fa-regular fa-circle"></i>PG DIPLOMA IN ADVANCE COMPUTING
                </h5>
                <p className="edu-time">Mar 2023 - Sep 2023 </p>
                <p>
                  {" "}
                  <em>
                    Centre for Development of Advance Computing
                  </em>
                </p>
              </li>
            </ul>
            <ul className="resume-content">
              <li className="resume-bullet">
                <h5>
                  <i className="fa-regular fa-circle"></i>BACHELOR OF TECHNOLOGY
                  IN MECHANICAL ENGINEERING
                </h5>
                <p className="edu-time">Aug 2018 - Sep 2022 </p>
                <p>
                  {" "}
                  <em>
                    Institute of Engieering and Technology, Dr. Rammanohar Lohia
                    Avadh University, Ayodhya
                  </em>
                </p>
              </li>
            </ul>
          </div>
          {/* Professional Experince */}
        </div>
        <a href="assets/Abhishek-resume.pdf" download="Abhishek-resume.pdf">
          <button className="get-resume-button my-3">Resume Download</button>
        </a>
      </section>
    </>
  );
};

export default Resume;

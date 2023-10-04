import React from "react";
import "./AboutMe.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="about">
      <div className="heading">
        <h2>About</h2>
        <hr />
      </div>
      <div className="para" data-aos="fade-up">
        <p>
          Highly motivated and versatile web developer with a strong foundation
          in Java, J2EE, Spring Boot, Hibernate, ASP.NET, and a proficiency in
          front-end technologies like React, JavaScript, HTML, and CSS. Skilled
          in creating end-to-end web applications, I've developed projects using
          React, Spring Boot, Node.js, and ASP.NET for back-end functionality,
          with SQL and MongoDB as database solutions. My educational background
          includes a PG Diploma in Advanced Computing from CDAC, and I bring a
          solid grasp of data structures and algorithms to my development work,
          ensuring efficient and optimized code.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6 profile-pic" data-aos="fade-right">
          <img src="assets/Abhishek_img.jpeg" alt="profile-pic" />
        </div>
        <div className="col-lg-6 About__info" data-aos="fade-left">
          <div className="info">
            <ul>
              <h4>Full Stack Developer</h4>
              <li>
                <strong>
                  <i className="fa-solid fa-angle-right"></i>Birthday:{" "}
                </strong>{" "}
                Abhishek Yadav
              </li>
              <li>
                <strong>
                  <i className="fa-solid fa-angle-right"></i>Phone:{" "}
                </strong>{" "}
                +91- 6386653849
              </li>
              <li>
                <strong>
                  <i className="fa-solid fa-angle-right"></i>Email:{" "}
                </strong>{" "}
                abhishekyadav17012000@gmail.com
              </li>
              <li>
                <strong>
                  <i className="fa-solid fa-angle-right"></i>City:{" "}
                </strong>{" "}
                Kanpur Nagar
              </li>
              <li>
                <strong>
                  <i className="fa-solid fa-angle-right"></i>Degree:{" "}
                </strong>{" "}
                Bachelor of Technology (BTech)
              </li>
              <li>
                <strong>
                  <i className="fa-solid fa-angle-right"></i>Branch:{" "}
                </strong>{" "}
                Mechanical Engineering
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="skill">
        <h2>Skills</h2>
        <div className="row skill-row">
          <div className="col-lg-6" data-aos="flip-right">
            <ul className="list-group">
              <li className="skills">
                <h5>Java</h5>
              </li>
              <li className="skills">
                <h5>J2EE</h5>
              </li>
              <li className="skills">
                <h5>Spring-Boot</h5>
              </li>
              <li className="skills">
                <h5>Hibernate</h5>
              </li>
              <li className="skills">
                <h5>DotNet</h5>
              </li>
              <li className="skills">
                <h5>C#</h5>
              </li>
              <li className="skills">
                <h5>ASP.NET</h5>
              </li>
              <li className="skills">
                <h5>SQL</h5>
              </li>
            </ul>
          </div>
          <div className="col-lg-6" data-aos="flip-left">
            <ul className="list-group">
              <li className="skills">
                <h5>HTML</h5>
              </li>
              <li className="skills">
                <h5>CSS</h5>
              </li>
              <li className="skills">
                <h5>JavaScript</h5>
              </li>
              <li className="skills">
                <h5>Bootstrap</h5>
              </li>
              <li className="skills">
                <h5>React JS</h5>
              </li>
              <li className="skills">
                <h5>Node Js</h5>
              </li>
              <li className="skills">
                <h5>Express Js</h5>
              </li>
              <li className="skills">
                <h5>MongoDB</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

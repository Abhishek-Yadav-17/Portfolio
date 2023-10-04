import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Profile.css";

const Profile = () => {
  return (
    <section id="home">
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="icon">
                <a href="https://www.instagram.com/abhishek._.yadav._/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://twitter.com/Abhishek_Yd_17">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://github.com/Abhishek-Yadav-17">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/abhishek-yadav-120273214/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="profile-detail-name">
              <h3 className="primary-text">
                {" "}
                Hello, I'M{" "}
                <span className="highlighted-text">Abhishek Yadav</span>
              </h3>
            </div>
            <div className="profile-detail-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                  <TypeAnimation
                    sequence={[
                      "Creative Developer",
                      2000,
                      "Full Stack Developer",
                      2000,
                      "Backend Developer",
                      2000,
                      "Frontend Developer",
                      2000,
                    ]}
                    speed={40}
                    wrapper="span"
                    repeat={Infinity}
                  />
                </h1>
              </span>
              <span className="profile-role-tagline">
                Knack of building applications with frontend and backend
                operations.
              </span>
            </div>
            <div className="profile-options">
              <a href="#contact">
                <button className="hire-me-btn mx-3">Hire me</button>
              </a>
              <a
                href="assets/Abhishek-resume.pdf"
                download="Abhishek-resume.pdf"
              >
                <button className="get-resume-btn mx-3">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

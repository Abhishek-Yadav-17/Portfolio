import React from "react";
import "./ContactMe.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactMe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section id="contact" className="contact">
        <div className="section-title">
          <h2>Contact</h2>
          <hr />
        </div>

        <div className="row">
          <div
            className="col-lg-5 d-flex align-items-stretch"
            data-aos="fade-in"
          >
            <div className="info">
              <div className="address">
                <i className="fa-solid fa-location-dot"></i>
                <h4>Current Location:</h4>
                <p>Mumbai, Maharashtra</p>
              </div>

              <div className="email">
                <i className="fa-solid fa-envelope"></i>
                <h4>Email:</h4>
                <p>abhishekyadav17012000@gmail.com</p>
              </div>

              <div className="phone">
                <i className="fa-solid fa-mobile"></i>
                <h4>Call:</h4>
                <p>+91-6386653849</p>
              </div>
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/abhishek-yadav-120273214/"
                  className="linkedin"
                >
                  <i className="fa-brands fa-linkedin"></i>
                  <h4>Linkedin:</h4>
                  <p>https://www.linkedin.com/in/abhishek-yadav-120273214</p>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch video-col"
            data-aos="fade-out"
          >
            <div className="php-media">
              <video
                src="assets/contact__media.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;

import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-detail">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/MaverickJames21">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.facebook.com/MaverickJames21/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello! I'm, <span className="highlighted-text">Maverick</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Developer 👨‍💻",
                    2000,
                    "Full Stack Developer 💻",
                    2000,
                    "UI/UX Developer 😎",
                    2000,
                    "React Developer 🌐",
                    2000,
                    "Laravel Developer 💢",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire me </button>
            <a href="Maverick.pdf" download="Maverick.pdf">
              <button className="btn highlighted-btn">Get my Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

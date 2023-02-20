import "./Experience.scss";
import React from "react";
import { Progress } from "antd";

const Experience = () => {
  const enableExperienceAnimations = () => {
    document.getElementById("experienceImage").style.animation = "experienceFlipper 0.9s";

  }
  return (
    <div className="Experience-container"
    id='Experience'
    onMouseOver={() => {
      enableExperienceAnimations();
    }}>
      <div className="experience-image-container">
        <img
          src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Group-811211112-copy-71-1.jpg"
          alt="/"
          className="experience-image"
          id='experienceImage'
        />
      </div>
      <div className="experience-matter-container">
        <div className="experience-matter-title-container">
          <p className="experience-title">NOW UPGRADED FOR</p>
          <h1 className="experience-heading">Best Experience</h1>
        </div>
        <div className="each-experience-main-container">
          <div className="each-experience-container">
            <p className="each-experience-heading">+ Increased storage</p>
            <p className="each-experience-matter">
              Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris
            </p>
            <div className="each-experience-progress-bar-container">
              <Progress percent={30} />
            </div>
          </div>
          <div className="each-experience-container">
            <p className="each-experience-heading">+ Battery life</p>
            <p className="each-experience-matter">
              Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris
            </p>
            <div className="each-experience-progress-bar-container">
              <Progress percent={80} />
            </div>
          </div>
          <div className="each-experience-container">
            <p className="each-experience-heading">+ Display surface</p>
            <p className="each-experience-matter">
              Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris
            </p>
            <div className="each-experience-progress-bar-container">
              <Progress percent={60} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

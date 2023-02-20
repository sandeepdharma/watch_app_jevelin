import "./Features.scss";
import React from "react";
import { BsMic } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";
import { BsWifi } from "react-icons/bs";

const Features = () => {
  const enableAnimation = () => {
    document.getElementById("FeatureImage").style.animation = "featureFlipper 0.9s";
  }
  return (
    <div className="Features-container" id='Features' onMouseOver={() => {
      enableAnimation();
    }}>
      <div className="features-image-container">
        <img
          src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Replace-screen-inside-this-SO3-1.jpg"
          alt="/"
          className="features-image"
          id='FeatureImage'
        />
      </div>
      <div className="features-matter-container">
        <div className="features-matter-title-container">
          <p className="features-title">MEET WITH OUR</p>
          <h1 className="features-heading">Splendid Features</h1>
        </div>
        <div className="each-features-main-container">
          <div className="each-feature-container">
            <div className="feature-icon-container">
              <BsMic className="features-icon" />
            </div>
            <div className="each-feature-matter-container">
              <h1 className="each-feature-heading">Voice Recognition</h1>
              <p className="each-feature-matter">
                Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris
              </p>
            </div>
          </div>

          <div className="each-feature-container">
            <div className="feature-icon-container">
              <AiOutlineMobile className="features-icon" />
            </div>
            <div className="each-feature-matter-container">
              <h1 className="each-feature-heading">Connect with your phone</h1>
              <p className="each-feature-matter">
                Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris
              </p>
            </div>
          </div>

          <div className="each-feature-container">
            <div className="feature-icon-container">
              <BsWifi className="features-icon" />
            </div>

            <div className="each-feature-matter-container">
              <h1 className="each-feature-heading">Any task at hand</h1>
              <p className="each-feature-matter">
                Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

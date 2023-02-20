import React from "react";
import "./Curosal.scss";
import { Carousel } from "antd";
const Curosal = () => {
  const enableGalleryAnimations = () => {
    document.getElementById("curosalImage").style.animationName = "curosalFlipper";
    console.log("gallery");
    document.getElementById("curosalMultiImage").style.animationName = "curosalFlipper";
  };
  return (
    <div
      className="Curosal-container"
      id="Gallery"
      onMouseOver={() => {
        enableGalleryAnimations();
      }}
    >
      <div className="curosal-matter-container">
        <p className="curosal-title">ABOUT OUR WATCHES</p>
        <h1 className="curosal-heading">
          New<spam className="highlighter">, </spam>Improved
          <spam className="highlighter"> Design and Performance</spam>
        </h1>
        <p className="curosal-matter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
          odales lectus, non ultrices nisi. In varius, leo non gravida.
        </p>
      </div>
      <div className="curosal-working-container">
        <Carousel>
          <div className="curosal-image-container">
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/gallery6.jpg"
              alt="/"
              id="curosalImage"
              className="curosal-image"
            />
          </div>
          <div className="curosal-image-container">
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/gallery5.jpg"
              alt="/"
              id="curosalImage"
              className="curosal-image"
            />
          </div>
          <div className="curosal-image-container">
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/gallery7.jpg"
              alt="/"
              id="curosalImage"
              className="curosal-image"
            />
          </div>
          <div className="curosal-image-container">
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Watchwhite2.jpg"
              alt="/"
              id="curosalImage"
              className="curosal-image"
            />
          </div>
          <div className="curosal-image-container">
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Watchwhite.jpg"
              alt="/"
              id="curosalImage"
              className="curosal-image"
            />
          </div>
          <div className="curosal-image-container">
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Watchwhite3.jpg"
              alt="/"
              id="curosalImage"
              className="curosal-image"
            />
          </div>
          <div className="curosal-image-container">
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Watchwhite5.jpg"
              alt="/"
              id="curosalImage"
              className="curosal-image"
            />
          </div>
          <div className="curosal-image-container">
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Watchwhite4.jpg"
              alt="/"
              id="curosalImage"
              className="curosal-image"
            />
          </div>
          <div className="curosal-image-container">
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Watchwhite3.jpg"
              alt="/"
              id="curosalImage"
              className="curosal-image"
            />
          </div>
        </Carousel>
      </div>
      <div className="curosal-multi-working-container">
        <Carousel>
          <div className="curosal-multi-image-container">
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/gallery6.jpg"
              alt="/"
              id="curosalMultiImage"
              className="curosal-multi-image"
            />
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/gallery5.jpg"
              alt="/"
              id="curosalMultiImage"
              className="curosal-multi-image"
            />
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/gallery7.jpg"
              alt="/"
              id="curosalMultiImage"
              className="curosal-multi-image"
            />
          </div>

          <div className="curosal-multi-image-container">
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Watchwhite2.jpg"
              alt="/"
              id="curosalMultiImage"
              className="curosal-multi-image"
            />
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Watchwhite.jpg"
              alt="/"
              id="curosalMultiImage"
              className="curosal-multi-image"
            />
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Watchwhite3.jpg"
              alt="/"
              id="curosalMultiImage"
              className="curosal-multi-image"
            />
          </div>

          <div className="curosal-multi-image-container">
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Watchwhite5.jpg"
              alt="/"
              id="curosalMultiImage"
              className="curosal-multi-image"
            />
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Watchwhite4.jpg"
              alt="/"
              id="curosalMultiImage"
              className="curosal-multi-image"
            />
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Watchwhite3.jpg"
              alt="/"
              id="curosalMultiImage"
              className="curosal-multi-image"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Curosal;

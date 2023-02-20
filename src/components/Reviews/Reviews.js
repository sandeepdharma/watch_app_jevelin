import "./Reviews.scss";
import React from "react";
import { Carousel } from "antd";
// import { useRef } from "react";
// import { ArrowRightOutlined } from "@ant-design/icons";
// import { ArrowLeftOutlined } from "@ant-design/icons";
const Reviews = () => {
  // const slider = useRef(null);
  return (
    <div className="Reviews-container" id='Reviews'>
      <div className="reviews-title-container">
        <h1 className="reviews-title">What our customers say</h1>
      </div>
      {/* <ArrowLeftOutlined
        onClick={() => slider.current.next()}
        className="navigatorLeft"
      />

      <ArrowRightOutlined
        onClick={() => slider.current.next()}
        className="navigatorRight"
      /> */}
      <Carousel
      autoplay
      // effect="fade"
        // ref={slider}
        // arrows
        // nextArrow={<ArrowRightOutlined />}
        // prevArrow={<ArrowLeftOutlined />}
        className="review-curosal-container"
      >
        <div className="review-each-curosal-slide">
          <img
            src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/tyler-nix-626668-unsplash.jpg"
            alt="/"
            className="review-curosal-image"
          />
          <p className="review-curosal-matter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vitae odales lectus, non ultrices nisi. In varius, leo non gravida.
            vitae odales lectus, non ultrices nisi. In varius, leo non gravida.
          </p>
          <p className="review-curosal-name">Maggi Wilson</p>
          <p className="symbol">99</p>
        </div>

        <div className="review-each-curosal-slide">
          <img
            src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/tyler-nix-626668-unsplash2.jpg"
            alt="/"
            className="review-curosal-image"
          />
          <p className="review-curosal-matter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vitae odales lectus, non ultrices nisi. In varius, leo non gravida.
            vitae odales lectus, non ultrices nisi. In varius, leo non gravida.
          </p>
          <p className="review-curosal-name">Ella Jhonson</p>
          <p className="symbol">99</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Reviews;

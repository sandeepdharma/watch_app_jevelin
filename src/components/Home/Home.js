import "./Home.scss";
import React from "react";

const Home = () => {
  
  return (
    <div
      className="Home-container"
      id="Home"
     
    >
      <div className="home-matter-container">
        <div className="lifestyle-container" >
          <h1 className="lifestyle">Lifestyle</h1>
        </div>
        <div className="nxt-lifestyle-container">
          <div className="smart-container">
            <h1 className="smart">Smart</h1>
          </div>
          <div className="watch-container">
            <h1 className="watch">Watch</h1>
          </div>
        </div>

        <p className="home-matter-heading">TECHNOLOGY OF THE FUTURE</p>
        <p className="home-matter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
          odales lectus, non ultrices nisi. In varius, leo non gravida.
        </p>
      </div>
      <div className="home-image-container">
        <img
          src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Vector-Smart-Object-copy-3.png"
          alt="/"
          className="home-image"
        />
      </div>
    </div>
  );
};

export default Home;

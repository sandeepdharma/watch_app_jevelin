import "./Navbar.scss";
import React, { useState, useEffect } from "react";
import { Badge } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlBasket } from "react-icons/sl";
const Navbar = ({homeUpdate,galleryUpdate,featuresUpdate,reviewUpdate,shopUpdate}) => {
  const [yOffSet, setYoffSet] = useState(false);
console.log(reviewUpdate)
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.pageYOffset > 0) {
          setYoffSet(true);
        } else {
          setYoffSet(false);
        }
      },
      []
    );
  });
  // const [state, setState] = useState(null);

  // const buttonHandler = (i) => {
  //   if (state === i) {
  //     setState(null);
  //   }
  //   setState(i);
  // };
  // let TopFixNavData = [
  //   {
  //     name: "Home",
  //     link: "#Home",
  //   },
  //   {
  //     name: "Gallery",
  //     link: "#Gallery",
  //   },
  //   {
  //     name: "Features",
  //     link: "#Features",
  //   },
  //   {
  //     name: "Reviews",
  //     link: "#Reviews",
  //   },
  //   {
  //     name: "Shop",
  //     link: "#Shop",
  //   },
  // ];
  return (
    <div
      className={
        yOffSet === true ? "navbar-with-white" : "navbar-with-background"
      }
    >
      <div className="navbar-title-container">
        {yOffSet ? (
          <img
            src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Jevelin_logo_dark.png"
            alt="/"
            className="navbar-title-image"
          />
        ) : (
          <img
            src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Jevelin_logo_light.png"
            alt="/"
            className="navbar-title-image"
          />
        )}
      </div>

      <div className="navbar-menu-icons">
        <RxHamburgerMenu className="hamburger-icon" />
        <div className="navbar-menu-options-container">
          <div className="each-menu-option">
            {/* {TopFixNavData.map((item, i) => (
              <a
                key={i}
                href={item.link}
                
                className={state === i ? "menu-item active" : "menu-item"}
                onClick={() => {
                  buttonHandler(i);
                }}
              >
                {item.name}
              </a>
            ))} */}
            <a
                href='#Home'
                className={homeUpdate ? "menu-item active" : "menu-item"}
             
              >
                Home
              </a>
              <a
                href='#Gallery'
                className={galleryUpdate ? "menu-item active" : "menu-item"}
                // onClick={() => {
                //   buttonHandler();
                // }}
              >
                Gallery
              </a>
              <a
                href='#Features'
                className={featuresUpdate ? "menu-item active" : "menu-item"}
                // onClick={() => {
                //   buttonHandler();
                // }}
              >
                Features
              </a>
             <a
                href='#Reviews'
                className={reviewUpdate ? "menu-item active" : "menu-item"}
                // onClick={() => {
                //   buttonHandler();
                // }}
              >
                Reviews
              </a>
              <a
                href='#Shop'
                className={shopUpdate ? "menu-item active" : "menu-item"}
                // onClick={() => {
                //   buttonHandler();
                // }}
              >
                Shop
              </a>
          </div>
          <div className="navbar-submit-container">
            <Badge count={1}  style={{ borderColor: "transparent" }}>
              <SlBasket className="basket-icon" />
            </Badge>
            <button className="navbar-submit-button">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

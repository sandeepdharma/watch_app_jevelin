import "./Selection.scss";
import React from "react";

const Selection = () => {
  function showCons() {
    setTimeout(function () {
      showConA();
    }, 0);
    setTimeout(function () {
      showConB();
    }, 500);
    setTimeout(function () {
      showConC();
    }, 1000);
  }
  const showConA = () => {
    document.getElementById("conA").style.visibility = "visible";
    document.getElementById("conA").style.animation = "selectionFlipper 1.5s";
  };
  const showConB = () => {
    document.getElementById("conB").style.visibility = "visible";
    document.getElementById("conB").style.animation = "selectionFlipper 1.5s";
  };
  const showConC = () => {
    document.getElementById("conC").style.visibility = "visible";
    document.getElementById("conC").style.animation = "selectionFlipper 1.5s";
  };

  return (
    <div
      className="Selection-container"
      id="Shop"
      onMouseOver={() => {
        showCons();
      }}
    >
      <div className="selection-matter-container ">
        <p className="selection-title">ADJUSTABLE STRAPS</p>
        <h1 className="selection-heading">
          Choose the best color for your activity
        </h1>
      </div>
      <div className="selection-image-container">
        <div className="each-image-container greenBg " id="conA">
          <p className="selection-item-type">WRIST BAND</p>
          <p className="selection-color green">Mint Green</p>
          <p className="selection-cost">$25.50</p>
        </div>

        <div className="each-image-container purpleBg " id="conB">
          <p className="selection-item-type">WRIST BAND</p>
          <p className="selection-color purple">Purple Berry</p>
          <p className="selection-cost">$25.50</p>
        </div>

        <div className="each-image-container goldBg " id="conC">
          <p className="selection-item-type">WRIST BAND</p>
          <p className="selection-color gold">Golden Sunset</p>
          <p className="selection-cost">$25.50</p>
        </div>
      </div>
      <div className="selection-button-container">
        <button className="selection-button">SEE MORE</button>
      </div>
    </div>
  );
};

export default Selection;

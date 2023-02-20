import { useState, useEffect } from "react";
import "./App.css";
import BottomFixNav from "./components/BottomFixNav/BottomFixNav";
import Curosal from "./components/Curosal/Curosal";
import Experience from "./components/Experience/Experience";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import QuickIntro from "./components/QuickIntro/QuickIntro";
import Reviews from "./components/Reviews/Reviews";
import RightFixNav from "./components/RightFixNav/RightFixNav";
import Selection from "./components/Selection/Selection";
import SocialConnect from "./components/SocialConnect/SocialConnect";

function App() {
  const [toGallery, setToGallery] = useState(false);
  const [homeMenu, setHomeMemu] = useState(false);
  const [gallerMenu, setGalleryMenu] = useState(false);
  const [featuresMenu, setFeaturesMenu] = useState(false);
  const [reviewMenu, setReviewMenu] = useState(false);
  const [shopMenu, setShopMenu] = useState(false);
  window.addEventListener("scroll", function () {
    var element = document.querySelector("#Home");
    var position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      setHomeMemu(true);
    } else {
      setHomeMemu(false);
    }
  });
  window.addEventListener("scroll", function () {
    var element = document.querySelector("#Gallery");
    var position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      setGalleryMenu(true);
    } else {
      setGalleryMenu(false);
    }
  });
  window.addEventListener("scroll", function () {
    var element = document.querySelector("#Features");
    var position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      setFeaturesMenu(true);
    } else {
      setFeaturesMenu(false);
    }
  });
  window.addEventListener("scroll", function () {
    var element = document.querySelector("#Reviews");
    var position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      setReviewMenu(true);
    } else {
      setReviewMenu(false);
    }
  });
  window.addEventListener("scroll", function () {
    var element = document.querySelector("#Shop");
    var position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      setShopMenu(true);
    } else {
      setShopMenu(false);
    }
    // if (position.top >= 0 && position.bottom <= window.innerHeight) {
    //   setShopMenu(true);
    // } else {
    //   setShopMenu(false);
    // }
  });

  function NavigateToGallery() {
    setToGallery(true);
    setTimeout(function () {
      var element = document.getElementById("Gallery");
      element.scrollIntoView({ behavior: "smooth" });
    }, 3000);
  }

  function checkToGalleryStatus() {
    if (toGallery === false) {
      NavigateToGallery();
    }
  }
  useEffect(() => {
    checkToGalleryStatus();
  });

  return (
    <div className="App">
      <Navbar
        homeUpdate={homeMenu}
        galleryUpdate={gallerMenu}
        featuresUpdate={featuresMenu}
        reviewUpdate={reviewMenu}
        shopUpdate={shopMenu}
      />
      <RightFixNav />
      <BottomFixNav />
      <Home />
      <Curosal />
      <Features />
      <Experience />
      <QuickIntro />
      <Reviews />
      <Selection />
      <SocialConnect />
      <Footer />
    </div>
  );
}

export default App;

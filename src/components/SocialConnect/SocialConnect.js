import React from "react";
import "./SocialConnect.scss";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
const SocialConnect = () => {
  return (
    <div className="SocialConnect-container">
      <div className="social-inner-container">
        <FiFacebook className="social-icon" />
        <CiTwitter className="social-icon" />
        <AiOutlineInstagram className="social-icon" />
        <AiOutlineYoutube className="social-icon" />
      </div>
    </div>
  );
};

export default SocialConnect;

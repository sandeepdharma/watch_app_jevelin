import React from "react";
import "./Footer.scss";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcJcb } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="footer-addressing-container">
        <div className="footer-about-container">
          <img
            src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Jevelin_logo_light.png"
            alt="/"
            className="footer-about-image"
          />
          <p className="footer-about-matter">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.
          </p>
          <div className="footer-cards-container">
            <div className="footer-cards-icon-container">
              <FaCcVisa className="footer-card-icon" />
              <FaCcMastercard className="footer-card-icon" />
              <FaCcAmex className="footer-card-icon" />
              <FaCcPaypal className="footer-card-icon" />
              <FaCcJcb className="footer-card-icon" />
            </div>
            <div className="footer-cards-matter-container">
              <FaLock className="footer-lock-icon" />
              <p className="footer-cards-matter">Secure online payment</p>
            </div>
          </div>
        </div>

        <div className="footer-options-container">
          <p className="footer-options-heading">BEST EXPERIENCE</p>
          <p className="footer-options">FAQ</p>
          <p className="footer-options">Shipment</p>
          <p className="footer-options">Returns</p>
          <p className="footer-options">Gift cards</p>
          <p className="footer-options">Policies</p>
        </div>

        <div className="footer-options-container">
          <p className="footer-options-heading">COMPANY</p>
          <p className="footer-options">About us</p>
          <p className="footer-options">Press</p>
          <p className="footer-options">Offices</p>
          <p className="footer-options">Affiliates</p>
          <p className="footer-options">Giveaway</p>
        </div>
      </div>
      <div className="footer-copyright-container">
        <p className="footer-copyright">
          Copyright <BiCopyright className="copyright" /> 2018 JevelinTheme -
          Theme by Shufflehound
        </p>
      </div>
    </div>
  );
};

export default Footer;

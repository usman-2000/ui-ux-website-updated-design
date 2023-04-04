import React, { useState } from "react";
// import Saass9 from "../images/Saass9.png";
import "../styles/navbar.css";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "./Button";
import logo from "../images/logo.svg";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import github from "../images/github.png";

import facebookBig from "../images/facebookBig.png";
import twitterBig from "../images/twitterBig.png";
import githubBig from "../images/githubBig.png";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src={logo} alt="" />
          {/* <h2>
            <span>L</span>ogo
          </h2> */}
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            {/* <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">team</NavLink>
            </li>
            <li>
              <NavLink to="/contact">career</NavLink>
            </li> */}
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="#">
                <img src={githubBig} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={facebookBig} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitterBig} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <Button className="btn" name="Download CV" />
              </a>
            </li>
            <li>{/* <img className="top-img" src={Saass9} alt="" /> */}</li>
          </ul>

          {/* <Button className="btn" name="Login" /> */}
          {/* <Button className="btn" name="Login" /> */}

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              {/* <GiHamburgerMenu />  */}
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;

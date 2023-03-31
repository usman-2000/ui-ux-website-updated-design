import React from "react";
import about from "../images/about.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import github from "../images/github.png";
import "../styles/aboutme.css";

export default function Aboutme() {
  return (
    <div className="about-section">
      <div className="about-intro">
        <h1 className="main-heading">
          About <span>Me</span>
        </h1>
        <p className="about-description">
          A creative professional with a strong portfolio in digital design,
          including experience with front-end development. Experienced working
          from concept to production, and with stakeholders from multiple
          disciplines. A fluent user of popular design tools like Figma and
          Adobe CC.
        </p>
        <div className="about-social-icons">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={github} alt="" />
        </div>
        <h3 className="about-skills-heading">
          Here are a few technologies I've been working with recently:
        </h3>
        <div className="about-skills-cont">
          <ul>
            <li>Figma</li>
            <li>Webflow</li>
            <li>Javascript</li>
          </ul>
          <ul>
            <li>Adobe CC</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
      </div>
      <div className="about-image-cont">
        <img src={about} alt="" />
      </div>
    </div>
  );
}

import React from "react";
import "../styles/portfolio.css";
import first from "../images/first.png";
import second from "../images/second.png";
import third from "../images/third.png";

export default function Portfolio() {
  return (
    <div className="portfolio-section">
      <h1>I create jobs</h1>
      <h1 className="span">that enchant people</h1>
      <div className="portfolio-img">
        <div className="first-img-cont">
          <img src={first} alt="" />
        </div>
        <div className="second-img-cont">
          <img src={second} alt="" />
        </div>
        <div className="third-img-cont">
          <img src={third} alt="" />
        </div>
      </div>
    </div>
  );
}

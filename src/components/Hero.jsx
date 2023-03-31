import React from "react";
import "../styles/hero.css";
import Button from "./Button";
import heroimg from "../images/heroimg.png";

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-intro-cont">
        <p className="first-p">Hello, my name is</p>
        <h1 className="hero-name">David</h1>
        <h1 className="hero-des">
          Designing Experiences That Put Users First.
        </h1>
        <p className="hero-para">
          As a UI/UX designer, I create beautiful and functional digital
          experiences that delight users with typography, transitions, and
          thoughtful interactions.
        </p>
        <Button className="btn1" name="Get in touch" />
      </div>
      <div className="hero-img-cont">
        <img src={heroimg} alt="" />
      </div>
    </div>
  );
}

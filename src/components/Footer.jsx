import React from "react";
import Button from "./Button";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer-cont">
      <h1>Lets build your project together</h1>
      <Button className="btn1" name="Get in touch" />
      <p>© 2023 All rights reserved</p>
    </div>
  );
}

import React from "react";
import "../styles/education.css";

export default function Education() {
  return (
    <div className="education-and-experience-section">
      <div className="education-cont">
        <h1 className="edu-main-heading">Education 🎓 </h1>
        <h3 className="sub-heading">Full Sail University, Winter Park, FL </h3>
        <div className="detail-cont">
          <p className="detail-para">
            Bachelor of Science in Web Design and Development
          </p>
          <p>2016-2020</p>
        </div>
        <h3 className="sub-heading">General Assembly, New York, NY </h3>
        <div className="detail-cont">
          <p className="detail-para">Certificate in User Experience Design</p>
          <p className="ppp">2015</p>
        </div>
      </div>
      <div className="experience-cont">
        <h1 className="exp-main-heading">Experience 💼 </h1>
        <h3 className="sub-heading">
          Web Designer, Emerald Village Partners, Miami, FL{" "}
        </h3>
        <div className="detail-cont">
          <p className="detail-para">
            Collaborate with cross-functional teams to design and develop
            responsive websites that meet client requirements and industry
            standards.
          </p>
          <p>2020- Present</p>
        </div>
        <h3 className="sub-heading">
          UI/UX Designer, Ktk Digital Solutions, Dallas, TX
        </h3>

        <div className="detail-cont">
          <p className="detail-para">
            Conduct user research and usability testing to inform design
            decisions and improve user experience.
          </p>
          <p>2018- 2020</p>
        </div>
      </div>
    </div>
  );
}

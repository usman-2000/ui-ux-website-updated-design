import React from "react";
import "../styles/myskills.css";

export default function MySkills() {
  return (
    <div className="skills-section">
      <h1 className="skills-sec-heading">
        My <span>Skills</span>
      </h1>
      <div className="skills-container">
        <div className="skills-detail first">
          <h1>What can I do for you</h1>
          <p>
            I believe that great design should be intuitive and user-friendly
            for everyone, including those who don't consider themselves
            "designers." It's my job to ensure that your audience can interact
            with your brand in a way that makes sense for them.
          </p>
        </div>

        <div className="skills-detail second">
          <h1>Applications I am fluent in</h1>
          <p>
            Creating visual elements for your brand, including logos, icons,
            typography, and more. Developing interactive elements like websites,
            mobile apps and games. Creating marketing campaigns that get
            results.
          </p>
        </div>

        <div className="skills-detail third">
          <h1>What can you expect</h1>
          <p>
            You can expect me to deliver high-quality work on time and within
            budget. You can also expect me to be honest with you about your
            project's needs, so that we can come up with an approach that works
            best for both of us.
          </p>
        </div>
      </div>
    </div>
  );
}

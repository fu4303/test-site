import React from "react";
import "./Project.css";

export default function Project() {
  return (
    <div className="project">
      <div className="project-screenshot-side">
        <img
          className="phone"
          width={300}
          src="https://cdn.mobilesyrup.com/wp-content/uploads/2019/04/screenshot-GIF.gif"
        />
        {/* <img
          className="desktop"
          width={900}
          src="https://raw.githubusercontent.com/d0minikt/ty-ping/master/docs/header.png"
        /> */}
      </div>
      <div className="project-side">
        <div className="container">
          <div className="project-title">Urban Quiz</div>
          <div className="project-description">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
  );
}

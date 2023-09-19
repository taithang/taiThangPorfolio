import React from "react";
import "./personalInf.css";
import image from "../assets/avatar.jpg";

function PersonalInf() {
  return (
    <div>
      <div className="info">
        <h1>Hi, I am Thang, Front-End Developer</h1>
        <p>
          I'm a new passionate programmer who loves to writing code to deal with
          difficult problem. I'm a high responsible person who will complete
          task in any circumstance, I also have good communication and easy to
          make new friends, I hope that I'm going to be a part of your company.
        </p>
        <button>Download Resume</button>
      </div>
      <img src={image} alt={image} />
    </div>
  );
}

export default PersonalInf;

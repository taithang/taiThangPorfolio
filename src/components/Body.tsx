import React from "react";
import PersonalInf from "./PersonalInf";
import Post from "./Post";
import Works from "./Works";

function Body() {
  return (
    <div className="body" style={{ display: "flex", flexDirection: "column" }}>
      <PersonalInf />
      <Post />
      <Works />
    </div>
  );
}

export default Body;

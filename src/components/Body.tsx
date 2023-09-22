import React from "react";
import PersonalInf from "./PersonalInf";
import Post from "./Post";
import Works from "./Works";

function Body() {
  return (
    <div className="flex flex-col bg-white space-y-[50px]">
      <PersonalInf />
      <Post />
      <Works />
    </div>
  );
}

export default Body;

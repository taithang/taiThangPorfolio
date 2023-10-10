import React from "react";
import Head from "../components/Head";
import Works from "../components/Works";
import Foot from "../components/Foot";

function WorkPage({ worksArray }) {
  return (
    <div className="space-y-[50px]">
      <Head />
      <Works worksArray={worksArray} />
      <Foot />
    </div>
  );
}

export default WorkPage;

import React from "react";
import "./personalInf.css";
import image from "../assets/avatar.jpg";
import ExamplePdf from "../assets/HoangTaiThang_CV.pdf";
function PersonalInf() {
  return (
    <div className="flex flex-row justify-around bg-white my-[10px]">
      <div className="w-[50%] flex flex-col space-y-[20px]">
        <h1 className="text-[40px] font-bold">
          Hi, I am Thang, Front-End Developer
        </h1>
        <p className="text-[20px] ">
          I'm a new passionate programmer who loves to writing code to deal with
          difficult problem. I'm a high responsible person who will complete
          task in any circumstance, I also have good communication and easy to
          make new friends, I hope that I'm going to be a part of your company.
        </p>
        <a
          href={ExamplePdf}
          download="Example-PDF-document"
          target="_blank"
          rel="noreferrer"
          className="w-[300px] bg-[#ff6464] border-0 text-[20px] text-center py-[10px] px-[20px] rounded-lg hover:bg-[#e42323] hover:text-white "
        >
          Download Resume
        </a>
      </div>
      <img src={image} alt={image} className="rounded-full w-[20%]" />
    </div>
  );
}

export default PersonalInf;

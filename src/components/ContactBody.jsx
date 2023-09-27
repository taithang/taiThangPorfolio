import React from "react";
import avatar from "../assets/avatar.jpg";
import { Link } from "react-router-dom";
import cv from "../assets/HoangTaiThang_CV.pdf";
function ContactBody() {
  const facebook = "https://www.facebook.com/taithang.hoang";
  const instagram = "https://www.instagram.com/__levolas__/?next=%2F";
  const linkedin = "https://www.linkedin.com/in/thang-hoang-tai-a75058290/";

  return (
    <div className="w-screen bg-inherit  flex flex-col justify-center space-y-[20px]">
      <div>
        <img
          src={avatar}
          alt="avatar"
          className="rounded-full w-[20%] mx-auto"
        />
        <p className="text-center text-[20px] ">@taithang</p>
      </div>
      <div className=" flex flex-col space-y-[20px] ">
        <p className="text-center text-white text-[20px] border-[2px] border-white rounded-full py-[10px] m-auto w-[50%] hover:bg-white hover:text-black ">
          <Link to={linkedin} target="blank">
            Linkedin
          </Link>
        </p>
        <p className="text-center text-white text-[20px] border-[2px] border-white rounded-full py-[10px] m-auto w-[50%] hover:bg-white hover:text-black">
          <Link to={instagram} target="blank">
            😽 My Instagram 😽
          </Link>
        </p>
        <p className="text-center text-white text-[20px] border-[2px] border-white rounded-full py-[10px] m-auto w-[50%] hover:bg-white hover:text-black">
          <Link to={facebook} target="blank">
            👉 My FaceBook Here 👈
          </Link>
        </p>
        <p className="text-center text-white text-[20px] border-[2px] border-white rounded-full py-[10px] m-auto w-[50%] hover:bg-white hover:text-black">
          <Link to={cv} target="blank">
            👉 My CV Here 👈
          </Link>
        </p>
        <p className="text-center text-white text-[20px] border-[2px] border-white rounded-full py-[10px] m-auto w-[50%] hover:bg-white hover:text-black">
          ✉️ Mail me on hoangtaithangdn99@gmail.com
        </p>
      </div>
    </div>
  );
}

export default ContactBody;

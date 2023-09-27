import React from "react";
import Head from "../components/Head";
import avatar from "../assets/avatar.jpg";
import { Link } from "react-router-dom";
import cv from "../assets/HoangTaiThang_CV.pdf";
function ContactPage() {
  const facebook = "https://www.facebook.com/taithang.hoang";
  const instagram = "https://www.instagram.com/__levolas__/?next=%2F";
  const linkedin = "https://www.linkedin.com/in/thang-hoang-tai-a75058290/";
  return (
    <div className="w-full bg-white h-[100vh] space-y-[50px] bg-gradient-to-t from-[#43434c] to-[#959595]">
      <Head />
      <body className="space-y-[20px]">
        <div className="flex flex-col space-y-[10px]">
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full w-[10%] m-auto"
          />
          <p className="m-auto font-bold text-[20px]">@taithang</p>
        </div>
        <div className="flex flex-col space-y-[20px]">
          <p className="m-auto border-white border-[2px] w-[50%]  py-[10px] rounded-full text-center text-white hover:bg-white hover:text-black ">
            <Link target="blank" to={linkedin}>
              Linkedin
            </Link>
          </p>
          <p className="m-auto border-white border-[2px] w-[50%]  py-[10px] rounded-full text-center text-white hover:bg-white hover:text-black ">
            <Link target="blank" to={instagram}>
              😽 My Instagram 😽
            </Link>
          </p>
          <p className="m-auto border-white border-[2px] w-[50%]  py-[10px] rounded-full text-center text-white hover:bg-white hover:text-black ">
            <Link target="blank" to={facebook}>
              👉 My FaceBook Here 👈
            </Link>
          </p>
          <p className="m-auto border-white border-[2px] w-[50%]  py-[10px] rounded-full text-center text-white hover:bg-white hover:text-black ">
            <Link target="blank" to={cv}>
              👉 My CV Here 👈
            </Link>
          </p>
          <p className="m-auto border-white border-[2px] w-[50%] px-[100px] py-[10px] rounded-full text-center text-white hover:bg-white hover:text-black ">
            ✉️ Contact my Email: hoangtaithangdn99@gmail.com
          </p>
        </div>
      </body>
    </div>
  );
}

export default ContactPage;

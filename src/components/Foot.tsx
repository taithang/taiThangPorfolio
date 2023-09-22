import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

function Foot() {
  const facebook: string = "https://www.facebook.com/taithang.hoang";
  const instagram: string = "https://www.instagram.com/__levolas__/?next=%2F";
  const linkedin: string =
    "https://www.linkedin.com/in/thang-hoang-tai-a75058290/";

  return (
    <div className="space-y-[20px]">
      <div className="flex justify-center items-center space-x-[20px] h-[30%]">
        <Link to={facebook} target="blank">
          <Facebook className="text-black text-[100px]" />
        </Link>
        <Link to={instagram} target="blank">
          <Instagram className="text-black text-[100px]" />
        </Link>
        <Link to={linkedin} target="blank">
          <LinkedIn className="text-black text-[100px]" />
        </Link>
      </div>
      <p className="text-black text-[14px]">
        Copyright &copy;2020 All rights reserved
      </p>
    </div>
  );
}

export default Foot;

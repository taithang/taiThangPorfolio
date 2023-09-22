import React from "react";
import "./Works.css";
import dashBoard from "../assets/Cashflow-dashboard-example.png";
import illustration from "../assets/illustration.png";
import typography from "../assets/typograhy.png";
import components from "../assets/components.png";

const worksArray = [
  {
    title: "Designing Dashboards",
    year: "2020",
    type: "Dashboard",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint cupiditate omnis, ullam illum consectetur dolore error doloremque quasi labore sit quidem, laudantium excepturi, facere eius ab similique consequuntur a?",
    picture: dashBoard,
  },
  {
    title: "Vibrant Portraits of 2020",
    year: "2018",
    type: "Illustration",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint cupiditate omnis, ullam illum consectetur dolore error doloremque quasi labore sit quidem, laudantium excepturi, facere eius ab similique consequuntur a?",
    picture: illustration,
  },
  {
    title: "36 Days of Malayalam type",
    year: "2018",
    type: "Typography",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint cupiditate omnis, ullam illum consectetur dolore error doloremque quasi labore sit quidem, laudantium excepturi, facere eius ab similique consequuntur a?",
    picture: typography,
  },
  {
    title: "Components",
    year: "2018",
    type: "Components, Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint cupiditate omnis, ullam illum consectetur dolore error doloremque quasi labore sit quidem, laudantium excepturi, facere eius ab similique consequuntur a?",
    picture: components,
  },
];
function Works() {
  return (
    <div className="space-y-[30px]">
      <p className="text-[20px] px-[110px]">Featured Works</p>
      <ul className="space-y-[20px]">
        {worksArray.map((work) => (
          <li className="flex w-[80%] space-x-[20px] m-auto border-b-[2px] border-solid pb-[30px] justify-center">
            <img
              src={work.picture}
              alt={work.title}
              className="w-[20%] h-[5%] rounded-lg"
            />
            <div className="w-[60%] space-y-[10px]">
              <p className="font-bold text-[30px]">{work.title}</p>
              <div className="flex space-x-[15px] items-center">
                <p className="border text-white bg-black font-bold w-[60px] h-[25px] text-center rounded-full">
                  {work.year}
                </p>
                <p className="text-[20px]">{work.type}</p>
              </div>
              <p className="text-[16px]">{work.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Works;

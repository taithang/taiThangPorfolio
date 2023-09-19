import React from "react";
import "./Works.css";

const worksArray = [
  {
    title: "Designing Dashboards",
    year: "2020",
    type: "Dashboard",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint cupiditate omnis, ullam illum consectetur dolore error doloremque quasi labore sit quidem, laudantium excepturi, facere eius ab similique consequuntur a?",
    picture: "../assets/Cashflow-dashboard-example.png",
  },
  {
    title: "Vibrant Portraits of 2020",
    year: "2018",
    type: "Illustration",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint cupiditate omnis, ullam illum consectetur dolore error doloremque quasi labore sit quidem, laudantium excepturi, facere eius ab similique consequuntur a?",
    picture: "../assets/illustration.png",
  },
  {
    title: "36 Days of Malayalam type",
    year: "2018",
    type: "Typography",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint cupiditate omnis, ullam illum consectetur dolore error doloremque quasi labore sit quidem, laudantium excepturi, facere eius ab similique consequuntur a?",
    picture: "../assets/typograhy.png",
  },
  {
    title: "Components",
    year: "2018",
    type: "Components, Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint cupiditate omnis, ullam illum consectetur dolore error doloremque quasi labore sit quidem, laudantium excepturi, facere eius ab similique consequuntur a?",
    picture: "../assets/components.png",
  },
];
function Works() {
  return (
    <div>
      <p className="font-bold h-20px ">Featured Works</p>
      <ul>
        {worksArray.map((work) => (
          <li>
            <img src={work.picture} alt={work.title} />
            <div className="workContent">
              <p>{work.title}</p>
              <div>
                <p>{work.year}</p>
                <p>{work.type}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Works;

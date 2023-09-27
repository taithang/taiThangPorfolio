import React, { useState } from "react";
import "./Post.css";

const postArray1 = [
  {
    title: "Making a design system from a scratch",
    day: "12 Feb 2020",
    skill: "Design, Pattern",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt voluptatum ipsam suscipit quam enim dolore reprehenderit eiussed velit architecto, exercitationem reiciendis non obcaecati beatae dolor aliquam in excepturi? ",
  },
  {
    title: "Creating pixel perfect icons in Figma",
    day: "12 Feb 2020",
    skill: "Figma, Icon design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt voluptatum ipsam suscipit quam enim dolore reprehenderit eiussed velit architecto, exercitationem reiciendis non obcaecati beatae dolor aliquam in excepturi? ",
  },
  {
    title: "Using Reactjs and Bootsrap framework Library to buid website",
    day: "12 Feb 2021",
    skill: "Reactjs, Bootstrap",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt voluptatum ipsam suscipit quam enim dolore reprehenderit eiussed velit architecto, exercitationem reiciendis non obcaecati beatae dolor aliquam in excepturi? ",
  },
  {
    title: "Professional Javascript Developer",
    day: "14 Feb 2021",
    skill: "Javascript (ES7)",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt voluptatum ipsam suscipit quam enim dolore reprehenderit eiussed velit architecto, exercitationem reiciendis non obcaecati beatae dolor aliquam in excepturi? ",
  },
];

const postArray2 = [
  {
    title: "Making a design system from a scratch",
    day: "12 Feb 2020",
    skill: "Design, Pattern",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt voluptatum ipsam suscipit quam enim dolore reprehenderit eiussed velit architecto, exercitationem reiciendis non obcaecati beatae dolor aliquam in excepturi? ",
  },
  {
    title: "Creating pixel perfect icons in Figma",
    day: "12 Feb 2020",
    skill: "Figma, Icon design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt voluptatum ipsam suscipit quam enim dolore reprehenderit eiussed velit architecto, exercitationem reiciendis non obcaecati beatae dolor aliquam in excepturi? ",
  },
  {
    title: "Using Reactjs and Bootsrap framework Library to buid website",
    day: "12 Feb 2021",
    skill: "Reactjs, Bootstrap",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt voluptatum ipsam suscipit quam enim dolore reprehenderit eiussed velit architecto, exercitationem reiciendis non obcaecati beatae dolor aliquam in excepturi? ",
  },
  {
    title: "Professional Javascript Developer",
    day: "14 Feb 2021",
    skill: "Javascript (ES7)",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt voluptatum ipsam suscipit quam enim dolore reprehenderit eiussed velit architecto, exercitationem reiciendis non obcaecati beatae dolor aliquam in excepturi? ",
  },
];

function Post() {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="bg-#edf7fa flex flex-col mt-[50px]">
      <div className="bg-[#edf7fa] h-[50px] flex justify-between py-[10px] px-[110px]">
        <p style={{ fontSize: "22px", margin: "0" }}>Recent posts</p>
        <button
          className="border-0 bg-[#edf7fa] text-[#2fb7d4] text-[15px] cursor-pointer"
          onClick={() => setShowAll(!showAll)}
        >
          View all
        </button>
      </div>
      <ul className={showAll ? "postBodyGrid" : "postBodyFlex"}>
        {postArray1.map((post) => (
          <li className="li-works">
            <b>{post.title}</b>
            <p className="text-[18px]">
              {post.day} | {post.skill}
            </p>
            <p className="text-[16px]">{post.content}</p>
          </li>
        ))}
        {showAll &&
          postArray2.map((post) => (
            <li className="li-works">
              <b>{post.title}</b>
              <p className="text-[18px]">
                {post.day} | {post.skill}
              </p>
              <p className="text-[16px]">{post.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Post;

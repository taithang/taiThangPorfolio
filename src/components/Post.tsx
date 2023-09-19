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
    <div className="post">
      <div className="recentPost">
        <p style={{ fontSize: "20px", margin: "0" }}>Recent posts</p>
        <button onClick={() => setShowAll(!showAll)}>View all</button>
      </div>
      <ul className={showAll ? "postBodyGrid" : "postBodyFlex"}>
        {postArray1.map((post) => (
          <li>
            <b>{post.title}</b>
            <p>
              {post.day} | {post.skill}
            </p>
            <p>{post.content}</p>
          </li>
        ))}
        {showAll &&
          postArray2.map((post) => (
            <li>
              <b>{post.title}</b>
              <p>
                {post.day} | {post.skill}
              </p>
              <p>{post.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Post;

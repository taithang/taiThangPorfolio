import React from "react";

const blogArray = [
  {
    title: "UI Interactions of the week",
    day: "12 Feb 2019",
    type: "Express, HandleBars",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod iste molestiae veritatis quo, quam consectetur quidem rem pariatur rerum dicta, non nisi sed praesentium, quae voluptatibus quibusdam! Iure, sequi sed?",
  },
  {
    title: "UI Interactions of the week",
    day: "12 Feb 2019",
    type: "Express, HandleBars",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod iste molestiae veritatis quo, quam consectetur quidem rem pariatur rerum dicta, non nisi sed praesentium, quae voluptatibus quibusdam! Iure, sequi sed?",
  },
  {
    title: "UI Interactions of the week",
    day: "12 Feb 2019",
    type: "Express, HandleBars",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod iste molestiae veritatis quo, quam consectetur quidem rem pariatur rerum dicta, non nisi sed praesentium, quae voluptatibus quibusdam! Iure, sequi sed?",
  },
  {
    title: "UI Interactions of the week",
    day: "12 Feb 2019",
    type: "Express, HandleBars",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod iste molestiae veritatis quo, quam consectetur quidem rem pariatur rerum dicta, non nisi sed praesentium, quae voluptatibus quibusdam! Iure, sequi sed?",
  },
];
function BlogContain() {
  return (
    <div className="px-[200px] space-y-[30px]">
      <h1 className="text-[44px] font-bold">Blog</h1>
      <ul className="space-y-[30px]">
        {blogArray.map((blog) => (
          <li className="border-b-[1px] pb-[30px] space-y-[8px]">
            <h2 className="font-medium">{blog.title}</h2>
            <div className="flex justify-start space-x-[10px]">
              <p className="text-[20px]">{blog.day}</p>
              <p className="text-[20px] border-l-[2px] border-black px-[10px] text-slate-400">
                {blog.type}
              </p>
            </div>
            <p className="text-[16px]">{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogContain;

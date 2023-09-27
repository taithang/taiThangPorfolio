import { Link } from "react-router-dom";
import React from "react";

// export const workObject: any = { alo: { title: 123 } };

function Works({ worksArray }) {
  return (
    <div className="space-y-[30px]">
      <p className="text-[20px] px-[110px]">Featured Works</p>
      <ul className="space-y-[20px]">
        {worksArray.map((work) => (
          <li>
            <Link
              to={`/works/${work.id}?title=${work.title}&year=${work.year}&type=${work.type}&content=${work.content}&picture=${work.picture}`}
              className="flex w-[80%] space-x-[20px] m-auto border-b-[2px] border-solid pb-[30px] justify-center"
            >
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Works;

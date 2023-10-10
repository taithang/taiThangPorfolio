import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Head from "../components/Head";
import Foot from "../components/Foot";
// import { worksArray, workObject } from "../components/Works";

function WorkPageDetail() {
  //   const { key }: any = useParams();

  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title");
  const type = searchParams.get("type");
  const content = searchParams.get("content");
  const picture = searchParams.get("picture");
  const year = searchParams.get("year");
  const picture2 = searchParams.get("picture2");

  return (
    <div className="space-y-[50px]">
      <Head />
      <body className="space-y-[35px] px-[200px]">
        <h1 className="font-bold text-[34px]">{title}</h1>
        <div className="flex space-x-[10px] items-center">
          <p className="border text-[18px] text-white bg-[#FF7C7C] font-bold w-[70px] h-[30px] text-center rounded-full">
            {year}
          </p>
          <p className="text-[20px] border-black px-[10px] text-[black]">
            {type}
          </p>
        </div>

        <p className="text-[16px]">
          {content} {content}
        </p>
        <img src={picture} alt={title} />
        <div className="space-y-[30px]">
          <h1 className="text-[30px] font-bold">Heading 1</h1>
          <h2 className="text-[24px] font-bold">Heading 2</h2>
          <p className="text-[16px]">
            {content} {content} {content}
          </p>
          <img src={picture2} alt={title} />
        </div>
      </body>
      <Foot />
    </div>
  );
}

export default WorkPageDetail;

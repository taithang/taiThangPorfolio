import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Head from "../components/Head";
// import { worksArray, workObject } from "../components/Works";

function WorkPageDetail({ worksArray }) {
  //   const { key }: any = useParams();

  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title");
  const type = searchParams.get("type");
  const content = searchParams.get("content");
  const picture = searchParams.get("picture");
  const year = searchParams.get("year");

  return (
    <div>
      <Head />
      <body>
        <h1>{title}</h1>
        <div>
          <p>{year}</p>
          <p>{type}</p>
        </div>
        <p>
          {content} {content}
        </p>
        <img src={picture} alt={title} />
      </body>
    </div>
  );
}

export default WorkPageDetail;

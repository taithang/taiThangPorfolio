import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Head() {
  return (
    // <Row
    //   style={{
    //     width: "20%",
    //     backgroundColor: "inherit",
    //     display: "flex",
    //     justifyContent: "flex-end",
    //     // textAlign: "right",
    //   }}
    // >
    //   <Col span={8}>
    //     <Link to="/works">Works</Link>
    //   </Col>

    //   <Col span={8}>
    //     <Link to="/blog">Blog</Link>
    //   </Col>

    //   <Col span={8}>
    //     <Link to="/contact">Contact</Link>
    //   </Col>
    // </Row>
    <ul className="w-full flex justify-end space-x-[50px] py-[20px] h-[10%] pr-8">
      <Link to="/">
        <li className="w-[50px] text-center text-[16px] font-bold hover:text-[#3ba0e9]">
          Home
        </li>
      </Link>
      <Link to="/works">
        <li className="w-[50px] text-center text-[16px] font-bold hover:text-[#3ba0e9]">
          Works
        </li>
      </Link>
      <Link to="/blog">
        <li className="w-[50px] text-center text-[16px] font-bold hover:text-[#3ba0e9]">
          Blog
        </li>
      </Link>
      <Link to="/contact">
        <li className="w-[50px] text-center text-[16px] font-bold hover:text-[#3ba0e9]">
          Contact
        </li>
      </Link>
    </ul>
  );
}

export default Head;

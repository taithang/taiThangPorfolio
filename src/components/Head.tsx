import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Head() {
  return (
    <Row style={{ width: "15%" }}>
      <Col span={8}>
        <Link to="/works">Works</Link>
      </Col>

      <Col span={8}>
        <Link to="/blog">Blog</Link>
      </Col>

      <Col span={8}>
        <Link to="/contact">Contact</Link>
      </Col>
    </Row>
  );
}

export default Head;

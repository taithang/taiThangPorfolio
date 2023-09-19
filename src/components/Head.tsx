import { Col, Row } from "antd";
import React from "react";

function Head() {
  return (
    <Row style={{ width: "15%" }}>
      <Col span={8}>Works</Col>
      <Col span={8}>Blog</Col>
      <Col span={8}>Contact</Col>
    </Row>
  );
}

export default Head;

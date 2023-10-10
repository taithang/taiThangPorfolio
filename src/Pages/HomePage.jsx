import { Layout, Space } from "antd";
import React from "react";
import Body from "../components/Body";
import Head from "../components/Head";
import Foot from "../components/Foot";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "black",
  height: "10%",
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "flex-end",
  fontWeight: "bold",
};

const contentStyle = {
  // textAlign: "center",
  minHeight: 120,
  // lineHeight: "120px",
  color: "black",
  backgroundColor: "#108ee9",
  height: "60%",
  margin: "10px 0px",
};

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "white",
  height: "30%",

  // position: "fixed",
  // bottom: "0",
  // width: "100%",
};

function HomePage({ worksArray }) {
  return (
    <div>
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout className="space-y-[100px]">
          {/* <Header style={headerStyle}> */}
          <Head />
          {/* </Header> */}
          <Content style={contentStyle}>
            <Body worksArray={worksArray} />
          </Content>
          <Footer style={footerStyle}>
            <Foot />
          </Footer>
        </Layout>
      </Space>
    </div>
  );
}

export default HomePage;

import { Layout, Space } from "antd";
import React from "react";
import Body from "../components/Body";
import Head from "../components/Head";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
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

const contentStyle: React.CSSProperties = {
  // textAlign: "center",
  minHeight: 120,
  // lineHeight: "120px",
  color: "black",
  backgroundColor: "#108ee9",
  height: "60%",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
  height: "10%",
  position: "fixed",
  bottom: "0",
  width: "100%",
};

function HomePage() {
  return (
    <div>
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          <Header style={headerStyle}>
            <Head />
          </Header>
          <Content style={contentStyle}>
            <Body />
          </Content>
          {/* <Footer style={footerStyle}></Footer> */}
        </Layout>
      </Space>
    </div>
  );
}

export default HomePage;

import React from "react";
import Head from "../components/Head";
import Foot from "../components/Foot";
import BlogContain from "../components/BlogContain";
import { Layout, Space } from "antd";

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
  backgroundColor: "white",
  height: "60%",
  margin: "10px 0px",
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
  backgroundColor: "white",
  height: "30%",

  // position: "fixed",
  // bottom: "0",
  // width: "100%",
};

function BlogPage() {
  return (
    <div>
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout className="space-y-[100px]">
          <Header style={headerStyle}>
            <Head />
          </Header>
          <Content style={contentStyle}>
            <BlogContain />
          </Content>
          <Footer style={footerStyle}>
            <Foot />
          </Footer>
        </Layout>
      </Space>
    </div>
  );
}

export default BlogPage;

import React, { useEffect } from "react";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";

const Blog = () => {
  return (
    <>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          Content
        </div>
      </Content>
    </>
  );
};

export default Blog;

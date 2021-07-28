import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Layout, Menu, Breadcrumb } from "antd";
import "./index.css";
import Roulette from "./components/Roulette";
import { PC, Mobile } from "../src/Info/MediaQuery";

const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <React.StrictMode>
    <Layout className="layout">
      <PC>
        <Header style={{ zIndex: 1, width: "100%" }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item style={{ backgroundColor: "#F60000" }} key="1">
              플리트비체의 신전
            </Menu.Item>
            {/* <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item> */}
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 20 }}
        >
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Roulette />
          </div>
        </Content>
      </PC>

      <Mobile>
        <Header style={{ zIndex: 1, width: "100%" }}>
          {/* <div className="logo" /> */}
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
            <Menu.Item style={{ backgroundColor: "#F60000" }} key="0">
              플리트비체의 신전
            </Menu.Item>
            {/* <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item> */}
          </Menu>
        </Header>
        <Content className="site-layout-content ">
          <div className="site-layout-background" style={{ minHeight: 380 }}>
            <Roulette />
          </div>
        </Content>
      </Mobile>

      <Footer style={{ textAlign: "center" }}>
        문의&건의: thznfl44@naver.com
      </Footer>
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

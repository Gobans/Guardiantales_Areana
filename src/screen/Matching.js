import "./Matching.css";
import { Layout, Menu} from "antd";
import { UserOutlined } from '@ant-design/icons';
import { LoginOutlined } from '@ant-design/icons';

import SearchUser from "../components/SearchUser"
import { PC, Mobile } from "../../src/Info/MediaQuery";
import {Link} from "react-router-dom";


const { Header, Content, Footer } = Layout;

function Main() {
  return (
    <Layout className="layout">
      <PC>
        <Header style={{ zIndex: 1, width: "100%" }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item style={{ backgroundColor: "#4AA8D8" }} key="1">
            플리트비체의 콜로세움
          </Menu.Item>
          <Menu.Item style={{ backgroundColor: "#F60000" }} key="2">
            <Link to="/temple">
              플리트비체의 신전
            </Link>
          </Menu.Item>
          <Menu.Item style={{ marginLeft:"auto"}} key="3">
            <Link to="/login">
              <LoginOutlined style={{fontSize:"20px"}} />
            </Link>
          </Menu.Item>

          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 20 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
           {/* 유저 검색 */}
            <div style={{textAlign:"center"}}>
              <SearchUser/>
            </div>
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
            contents
          </div>
        </Content>
      </Mobile>

      <Footer style={{ textAlign: "center" }}>
        문의&건의: thznfl44@naver.com
      </Footer>
    </Layout>
  );
}

export default Main;

import "./Login.css";
import { Layout, Menu, Row} from "antd";
import LoginForm from "../components/LoginForm"
import { PC, Mobile } from "../Info/MediaQuery";
import {Link} from "react-router-dom";

const { Header, Content, Footer } = Layout;

function Main() {
  return (
    <Layout className="layout">
      <PC>
        <Header style={{ zIndex: 1, width: "100%" }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item style={{ backgroundColor: "#4AA8D8" }} key="1">
              <Link to="/">
              플리트비체의 콜로세움
              </Link>
            </Menu.Item>
            <Menu.Item style={{ backgroundColor: "#F60000" }} key="2">
            <Link to="/temple">
              플리트비체의 신전
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
            style={{ padding: 24, minHeight: 380,textAlign:"center"}}
          >
              <p>로그인</p>
            <Row type="flex" justify="center" align="middle" style={{minHeight: '30vh',}}>
              <LoginForm/>
            </Row>
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
          <div className="site-layout-background" style={{ minHeight: 380,  }}>
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

import { Card, WingBlank, WhiteSpace } from "antd-mobile";

const HeroCardMobile = (props) => {
  let { heroName } = props;

  let imgSrc = `img/${heroName}.png`;
  return (
    <Card>
      <div style={{ textAlign: "center" }}>
        <Card.Header
          title={heroName}
          //   thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          //   extra={<span>this is extra</span>}
        />
        <Card.Body>
          <img alt="profile" src={imgSrc} width="100px" height="150px"></img>
          <br />
        </Card.Body>
      </div>
      {/* <Card.Footer
          content="footer content"
          extra={<div>extra footer content</div>}
        /> */}
    </Card>
  );
};
export default HeroCardMobile;

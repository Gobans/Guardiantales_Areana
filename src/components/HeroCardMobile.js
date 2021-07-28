import { Card, WingBlank, WhiteSpace } from "antd-mobile";

const HeroCardMobile = (props) => {
  let { heroName } = props;

  let imgSrc = `img/${heroName}.png`;
  return (
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <Card>
        <Card.Header
          title={heroName}
          //   thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          //   extra={<span>this is extra</span>}
        />
        <Card.Body>
          <img alt="profile" src={imgSrc} width="200px" height="250px"></img>
          <br />
        </Card.Body>
        {/* <Card.Footer
          content="footer content"
          extra={<div>extra footer content</div>}
        /> */}
      </Card>
      <WhiteSpace size="lg" />
    </WingBlank>
  );
};
export default HeroCardMobile;

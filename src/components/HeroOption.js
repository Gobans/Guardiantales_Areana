import { Checkbox, Row, Col } from "antd";
import { Mobile, PC } from "../Info/MediaQuery";

const HeroOption = (props) => {
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
    props.setOption(checkedValues);
  }
  return (
    <Checkbox.Group
      defaultValue={[
        "3성",
        "2성",
        "1성",
        "화속성",
        "수속성",
        "지속성",
        "광속성",
        "암속성",
        "무속성",
      ]}
      style={{ width: "100%" }}
      onChange={onChange}
    >
      <PC>
        <Row>
          <Col span={2}>
            <Checkbox value="3성">3성</Checkbox>
          </Col>
          <Col span={2}>
            <Checkbox value="2성">2성</Checkbox>
          </Col>
          <Col span={2}>
            <Checkbox value="1성">1성</Checkbox>
          </Col>
        </Row>

        <br />

        <Row>
          <Col span={2}>
            <Checkbox value="화속성">화속성</Checkbox>
          </Col>
          <Col span={2}>
            <Checkbox value="수속성">수속성</Checkbox>
          </Col>
          <Col span={2}>
            <Checkbox value="지속성">지속성</Checkbox>
          </Col>
          <Col span={2}>
            <Checkbox value="암속성">암속성</Checkbox>
          </Col>
          <Col span={2}>
            <Checkbox value="광속성">광속성</Checkbox>
          </Col>
          <Col span={2}>
            <Checkbox value="무속성">무속성</Checkbox>
          </Col>
        </Row>
      </PC>

      <Mobile>
        <Row>
          <Col span={4}>
            <Checkbox value="3성">3성</Checkbox>
          </Col>
          <Col span={4}>
            <Checkbox value="2성">2성</Checkbox>
          </Col>
          <Col span={4}>
            <Checkbox value="1성">1성</Checkbox>
          </Col>
        </Row>

        <br />

        <Row>
          <Col span={6}>
            <Checkbox value="화속성">화속성</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="수속성">수속성</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="지속성">지속성</Checkbox>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={6}>
            <Checkbox value="암속성">암속성</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="광속성">광속성</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="무속성">무속성</Checkbox>
          </Col>
        </Row>
      </Mobile>
    </Checkbox.Group>
  );
};

export default HeroOption;

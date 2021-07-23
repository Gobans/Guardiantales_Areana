import { Select } from "antd";

const { Option } = Select;

const children = [];
const heroes = { 0: "none", 1: "dango", 2: "slot", 3: "john" };

for (let i = 0; i < 4; i++) {
  children.push(<Option key={i}>{heroes[i]}</Option>);
}

const HeroSelection = (props) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
    props.setForbiddenIndex(value);
  }
  return (
    <>
      <Select
        mode="multiple"
        allowClear
        style={{ width: "100%" }}
        placeholder="Please select"
        defaultValue={["0", "1", "2", "3"]}
        onChange={handleChange}
      >
        {children}
      </Select>
      <br />
    </>
  );
};

export default HeroSelection;

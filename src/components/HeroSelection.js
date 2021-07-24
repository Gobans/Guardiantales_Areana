import { Select } from "antd";
import { heroesName } from "../Info/heroes";

const { Option } = Select;

const children = [];

let defaultHero = [];

for (let j = 0; j < Object.keys(heroesName).length; j++) {
  defaultHero.push(`${j}`);
}

for (let i = 0; i < Object.keys(heroesName).length; i++) {
  children.push(<Option key={i}>{heroesName[i]}</Option>);
}

const HeroSelection = (props) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
    props.setAvailableIndex(value);
  }
  return (
    <>
      <Select
        mode="multiple"
        allowClear
        style={{ width: "100%" }}
        placeholder="Please select"
        defaultValue={defaultHero}
        onChange={handleChange}
      >
        {children}
      </Select>
      <br />
    </>
  );
};

export default HeroSelection;

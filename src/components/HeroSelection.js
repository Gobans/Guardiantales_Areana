import { Select } from "antd";
import heroes, { heroesName } from "../Info/heroes";

const { Option } = Select;

const children = [];

let defaultHero = [];
let heroesNameObject = {};

for (let i = 0; i < Object.keys(heroesName).length; i++) {
  heroesNameObject[i] = heroesName[i];
  defaultHero.push(`${i}`);
  children.push(<Option key={i}>{heroesNameObject[i]}</Option>);
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

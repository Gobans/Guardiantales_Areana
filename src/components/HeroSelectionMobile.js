import { List, Checkbox, Flex } from "antd-mobile";
import { heroesName } from "../Info/heroes";

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

const children = [];

let defaultHero = [];

for (let j = 0; j < Object.keys(heroesName).length; j++) {
  defaultHero.push(`${j}`);
}

const HeroSelectionMobile = (props) => {
  function onChange(val) {
    console.log(val);
  }

  for (let i = 0; i < Object.keys(heroesName).length; i++) {
    children.push(
      <CheckboxItem key={i} onChange={() => onChange(i)}>
        {heroesName[i]}
      </CheckboxItem>
    );
  }

  return (
    <div>
      <List renderHeader={() => "CheckboxItem demo"}>
        {children}
        <CheckboxItem
          key="disabled"
          data-seed="logId"
          disabled
          defaultChecked
          multipleLine
        >
          Undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
        </CheckboxItem>
      </List>

      <Flex>
        <Flex.Item>
          <AgreeItem
            data-seed="logId"
            onChange={(e) => console.log("checkbox", e)}
          >
            Agree{" "}
            <a
              onClick={(e) => {
                e.preventDefault();
                alert("agree it");
              }}
            >
              agreement
            </a>
          </AgreeItem>
        </Flex.Item>
      </Flex>
    </div>
  );
};

export default HeroSelectionMobile;

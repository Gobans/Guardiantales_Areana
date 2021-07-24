import React, { useRef, useState, useEffect } from "react";
import { Row, Col, Divider, Button } from "antd";
import "./roulette.css";

import HeroCard from "./HeroCard";
import HeroSettingModal from "./HeroSettingModal";
import HeroSelection from "./HeroSelection";
import HeroOption from "./HeroOption";
import { heroesInfo } from "../Info/heroes";

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
let defaultIndex = [];

for (let j = 0; j < Object.keys(heroesInfo).length; j++) {
  defaultIndex.push(`${j}`);
}

let defaultOption = [
  "3성",
  "2성",
  "화속성",
  "수속성",
  "지속성",
  "광속성",
  "암속성",
  "무속성",
  "1성",
];

function Roulette() {
  const [availableIndex, setAvailableIndex] = useState(defaultIndex);
  const [option, setOption] = useState(defaultOption);

  const [card1, setCard1] = useState(0);
  const [card2, setCard2] = useState(1);
  const [card3, setCard3] = useState(2);

  const randomChange = () => {
    let array = [];
    console.log(option);

    let options = {
      "3성": false,
      "2성": false,
      "1성": false,
      화속성: false,
      수속성: false,
      목속성: false,
      암속성: false,
      광속성: false,
      무속성: false,
    };

    for (let j = 0; j < option.length; j++) {
      options[option[j]] = true;
    }

    console.log(options);

    for (let i = 0; i < availableIndex.length; i++) {
      if (
        options[heroesInfo[parseInt(availableIndex[i])].star] &&
        options[heroesInfo[parseInt(availableIndex[i])].element]
      ) {
        array.push(parseInt(availableIndex[i]));
      }
      console.log(availableIndex[i]);
    }

    console.log(array);

    if (array.length < 3) {
      while (array.length < 3) {
        array.push(Object.keys(heroesInfo).length - 1);
      }
    }

    array = shuffle(array);
    console.log(array);

    setTimeout(() => setCard1(array[0]), 1000);
    setTimeout(() => setCard2(array[1]), 2000);
    setTimeout(() => setCard3(array[2]), 3000);
  };

  return (
    <>
      <Divider orientation="center">여신의 신탁</Divider>
      <Row justify="center">
        <Col span={5}>
          <HeroCard heroName={heroesInfo[card1].name} />
        </Col>
        <Col span={5}>
          <HeroCard heroName={heroesInfo[card2].name} />
        </Col>
        <Col span={5}>
          <HeroCard heroName={heroesInfo[card3].name} />
        </Col>
      </Row>
      <br />

      <Row justify="center">
        <Button
          type="primary"
          onClick={() => {
            randomChange();
          }}
        >
          <div>
            <img
              src="\img\pudding.png"
              alt="pudding"
              width="30px"
              height="30px"
            ></img>
          </div>
        </Button>
      </Row>
      <br />
      <br />

      <HeroOption setOption={setOption} option={option} />

      <br />
      <br />

      <HeroSelection
        setAvailableIndex={setAvailableIndex}
        availableIndex={availableIndex}
      />
    </>
  );
}

export default Roulette;

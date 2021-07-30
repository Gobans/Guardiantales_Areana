import React from "react";
import { Mobile, PC } from "../Info/MediaQuery";

const HeroCard = (props) => {
  let { heroName } = props;

  let imgSrc = `img/${heroName}.png`;

  return (
    <>
      <PC>
        <div style={{ textAlign: "center" }}>
          <img alt="profile" src={imgSrc} width="200px" height="250px"></img>
          <br />
          <p align="center">{heroName}</p>
        </div>
      </PC>
      <Mobile>
        <div style={{ textAlign: "center" }}>
          <img alt="profile" src={imgSrc} width="100px" height="150px"></img>
          <br />
          <p align="center">{heroName}</p>
        </div>
      </Mobile>
    </>
  );
};

export default HeroCard;

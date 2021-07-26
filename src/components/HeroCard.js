import React from "react";

const HeroCard = (props) => {
  let { heroName } = props;

  let imgSrc = `img/${heroName}.png`;

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <img alt="profile" src={imgSrc} width="200px" height="250px"></img>
        <br />
        <p align="center">{heroName}</p>
      </div>
    </>
  );
};

export default HeroCard;

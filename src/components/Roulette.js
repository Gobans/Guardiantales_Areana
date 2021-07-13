import React, { useRef,useState, useEffect } from "react";
import { Row, Col, Divider,Button } from 'antd';
import './roulette.css'
import HeroCard from './HeroCard';

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function Roulette(){
    const [card1,setCard1] = useState(0);
    const [card2,setCard2] = useState(0);
    const [card3,setCard3] = useState(0);


  let name = {0:'none', 1:'dango',2:'slot',3:'john'}

  const randomChange =()=>{

    let array = Object.keys(name)
    array = array.slice(1)
    array = shuffle(array)
    console.log(array)

    setTimeout(() => setCard1(array[0]),1000) 
    setTimeout(() => setCard2(array[1]),2000) 
    setTimeout(() => setCard3(array[2]),3000) 
  }

    return(
        <>
        <Divider orientation="center">여신의 신탁</Divider>
        <Row justify="center" >
          <Col span={3}>
            <HeroCard heroName={name[card1]}/>
          </Col>
          <Col span={3}>
          <HeroCard heroName={name[card2]}/>
          </Col>
          <Col span={3}>
          <HeroCard heroName={name[card3]}/>
          </Col>
        </Row>

        <Row justify="center">
            <Button type="primary"
              onClick={()=>{
                randomChange()
              }}
            >Primary Button</Button>
        </Row>
        </>
    )
}



export default Roulette
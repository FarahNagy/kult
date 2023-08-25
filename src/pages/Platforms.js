import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import "./platforms.css"
const breakPoint = [
  {
    width: 1,
    itemsToShow: 1,
  },
  {
    width: 550,
    itemsToShow: 2,
  },
  {
    width: 768,
    itemsToShow: 3,
  },
  {
    width: 1200,
    itemsToShow: 4,
  },
];

const Platforms = () => {
  return (
<div style={{marginTop:'200px'}}>
  <Carousel breakPoints={breakPoint} >
    <div style={{width:'200px', height: '200px',backgroundColor:'red'}}>
      HelloDellooooooo
    </div>
    <div style={{width:'200px', height: '200px',backgroundColor:'red'}}>
      HelloDello
    </div>
    <div style={{width:'200px', height: '200px',backgroundColor:'red'}}>
      HelloDello
    </div>
    <div style={{width:'200px', height: '200px',backgroundColor:'red'}}>
      HelloDello
    </div>
    <div style={{width:'200px', height: '200px',backgroundColor:'red'}}>
      HelloDello
    </div>
    <div style={{width:'200px', height: '200px',backgroundColor:'red'}}>
      HelloDello
    </div>
    <div style={{width:'200px', height: '200px',backgroundColor:'red'}}>
      HelloDello
    </div>
    <div style={{width:'200px', height: '200px',backgroundColor:'red'}}>
      HelloDello
    </div>
    <div style={{width:'200px', height: '200px',backgroundColor:'red'}}>
      HelloDello
    </div>
  </Carousel>
  </div>
  )
};

export default Platforms;

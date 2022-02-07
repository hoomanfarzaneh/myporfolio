import "./works.scss";
import {useState} from 'react'

export default function Works() {
const [currentSlide,setCurrentSlide]= useState(0);
const data= [
  {
    id: '1',
    icon:'./assets/mobile.png', 
    title:'Mobile Application',
    decs:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    img:'./assets/frontend.jpg'
  },
  {
    id: '2',
    icon:'./assets/global.png', 
    title:'Web Design',
    decs:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    img:'./assets/frontend.jpg'
  },
  {
    id: '3',
    icon:'./assets/writting.png', 
    title:'Data base',
    decs:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    img:'./assets/frontend.jpg'
  },
];
  const handelClick=(way) =>{
    way==='left'
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
    : setCurrentSlide(currentSlide<data.length-1 ? currentSlide + 1 : 0);
  };
  return <div className="works" id="works">
    <div className="slider" style ={{transform: `translateX(-${currentSlide*100}vw)`}}>
      {data.map((d) => (
      <div className="container">
        <div className="item">
        <div className="left">
          <div className="leftContainer">
            <div className="imgContainer">
              <img src={d.icon} alt="" />
            </div>
            <h2>{d.title}</h2>
            <p>{d.decs}</p>
            <span>Projects</span>
          </div>
        </div>
        <div className="right">
          <img src={d.img} alt="" />
        </div>
        </div>
      </div>
      ))}
    </div>
    <img src="assets/arrow.png"  className="arrow left" alt="" onClick={()=> handelClick()} />
    <img src="assets/arrow.png"  className="arrow right" alt="" onClick={()=> handelClick()} />
  </div>
}

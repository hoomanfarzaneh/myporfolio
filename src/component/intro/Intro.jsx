import './intro.scss'
import {init} from 'ityped'
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef= useRef();
  useEffect(()=>{
    init(textRef.current,
       { showCursor: true,
         backDelay: 1500,
         backSpeed: 60,
        strings: ['Developer', 'Designer', 'Content Creator' ] })
  },[])

  return <div className='intro' id='intro'>
    <div className="left" >
      <div className="imgContainer">
        <img src='assets/man1.png' alt="man.png"></img>
      </div>
    </div>
    <div className="right">
      <div className="wrapped">
        <h2>Hi There, I'm</h2>
        <h1>Hooman Farzaneh</h1>
        <h3>Freelancer <span ref={textRef}></span></h3>
      </div>
      <a href="#portfolio">
        <img src='assets/arowdown.png' alt='arowdown'></img>
      </a>
    </div>
  </div>;
}

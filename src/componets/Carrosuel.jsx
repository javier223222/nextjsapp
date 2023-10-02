'use client'
import "@/app/css/Carrosuel.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react'
import CarrosuuelItem from './CarrosuuelItem'

const Carrosuel = (props) => {
  const keyframes = [
    { transform: "translate(0, 0)" },
    { transform: "translate(200px, 0)" },
    { transform: "translate(200px, 200px)" },
    { transform: "translate(0, 200px)" }
  ];
  
  
  const [numimage,setnumimage]=useState(1)
  const changenumber=()=>{
    setnumimage(x=>x!=4?x+1:1)
   
  }
  const minenumber=()=>{
    setnumimage(x=>x!=1?x-1:1)
  }
  const changepointone=()=>{
   setnumimage(1)    
  }
  const settwo=()=>{
    setnumimage(2)

  }
  const three=()=>{
    setnumimage(3)
  }
  const passfour=()=>{
    setnumimage(4)
  }
  return (
    <div className='showcarrosuel  '   >
      
      
        {numimage==1? <CarrosuuelItem 
         tittlemovie={props.tittlemovie1} 
         direct={props.direct1} daterelate={props.daterelate1} 
         sinopsisMovie={props.sinopsisMovie1} 
         changepointone={changepointone} settwo={settwo} 
         three={three} passfour={passfour} 
         num={numimage} id={1} color="red" url={props.urlone}   changenumber={changenumber}  minenumber={minenumber}></CarrosuuelItem>:<></>}
        { numimage==2? <CarrosuuelItem url={props.twoo}  tittlemovie={props.tittlemovie2} direct={props.direct2} daterelate={props.daterelate2} sinopsisMovie={props.sinopsisMovie2}  changepointone={changepointone} settwo={settwo} three={three} passfour={passfour}  num={numimage} id={2} color="black"  changenumber={changenumber} minenumber={minenumber}></CarrosuuelItem>:<></>}
        { numimage==3?  <CarrosuuelItem  tittlemovie={props.tittlemovie3} direct={props.direct3} daterelate={props.daterelate3} sinopsisMovie={props.sinopsisMovie3} changepointone={changepointone} settwo={settwo} three={three} passfour={passfour} num={numimage} id={3} color="green" 
        url={props.urlthree}  changenumber={changenumber} minenumber={minenumber} ></CarrosuuelItem>:<></>}
        { numimage==4? <CarrosuuelItem  tittlemovie={props.tittlemovie4} direct={props.direct4} daterelate={props.daterelate4} 
        sinopsisMovie={props.sinopsisMovie4} changepointone={changepointone} settwo={settwo} three={three} passfour={passfour}
          num={numimage} id={4} color="orange" url={props.urlfour}  changenumber={changenumber} minenumber={minenumber}></CarrosuuelItem> :<></>}
       
      
       

    </div>
  )
}

export default Carrosuel
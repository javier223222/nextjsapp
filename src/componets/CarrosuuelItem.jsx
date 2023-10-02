import React, { useState } from 'react'
import AboutMovie from './AboutMovie'

const CarrosuuelItem = (props) => {
  const [see,setsee]=useState(false)
  const seeall=()=>{
    setsee(true)
  }
  const nosee=()=>{

    setsee(false)
  }
  const id=props.id
  return (
    <div onMouseOver={seeall} onMouseOut={nosee}  id={id} style={{
      backgroundImage:`url(${props.url})`,
   
    }} className='containeritemcar d-flex '>
    <AboutMovie tittlemovie={props.tittlemovie} direct={props.direct} daterelate={props.daterelate} sinopsisMovie={props.sinopsisMovie}>
    </AboutMovie>

   {
    see?
   <div className='d-flex align-items-center position-relative justify-content-end before' onClick={props.changenumber}>
   <svg viewBox="0 0 13 24" width="13px" class="css-13o7eu2 e101vm530" style={{transform: 'rotate(180deg)'}}><path d="M12 0L1 12l11 12" stroke="white" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round"></path></svg>
   </div>:<></>
   }
   <div className='d-flex align-items-center justify-content-start next' onClick={props.minenumber}>
{
id!=1  ? see ?<svg viewBox="0 0 13 24" width="13px" class="css-13o7eu2 e101vm530"><path d="M12 0L1 12l11 12" stroke="white" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round"></path></svg>:<></>:<></>
}

   </div>
 
  
  <div className='d-flex align-items-center justify-content-center points '>
  <div name="1"  className={props.num==1?' nonopacity':'circle'}  onClick={props.changepointone} ></div>
  <div  name="2"  className={props.num==2?' nonopacity':'circle'} onClick={props.settwo}></div>
  <div name="3" className={props.num==3?' nonopacity':'circle'} onClick={props.three}></div>
  <div name="4"  className={props.num==4?' nonopacity':'circle'} onClick={props.passfour}></div>
</div>
   
    </div>
  )
}

export default CarrosuuelItem
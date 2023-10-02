import ButtonReui from "./ButtonReui"
import React from 'react'
import {GrAddCircle} from "react-icons/gr"
import IconAdd from "./AddIcons"

const AboutMovie = props => {
  return (
    <div className='d-flex  justify-content-center flex-column  aboutmovie'>
        <h2 className="titlemovie">{props.tittlemovie}</h2>
        <div className='d-flex '>
        <h3 className="d-flex gap-1 containerdirectors">
         <span>{props.direct}</span>
         <span>{props.daterelate}</span>
        </h3>
       
        </div>
        <p className="descriptioncontainer">
            {props.sinopsisMovie}
        </p>
        <div className='d-flex gap-3 align-items-center justify-content-start'>
            <ButtonReui titlebutton="VER"></ButtonReui>
            <IconAdd></IconAdd>
           
        </div>




        
    </div>
  )
}


export default AboutMovie
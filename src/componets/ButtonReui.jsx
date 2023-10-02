import React from 'react'
import {BsFillPlayFill} from "react-icons/bs"
const ButtonReui = (props) => {
  return (
    <button onClick={props.onClick} className="d-flex align-items-center justify-content-center gap-1 butonver">
       <BsFillPlayFill size={"1.8rem"}></BsFillPlayFill>
        VER
       </button>
  )
}

export default ButtonReui
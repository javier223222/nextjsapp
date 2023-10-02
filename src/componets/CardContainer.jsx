'use client'

import React, { use, useState } from 'react'
import Play from './Play'
import IconAdd from './AddIcons'
import PlayWithe from './PlayWithe'
import { useRouter } from 'next/navigation'



const CardContainer = props => {
  const router = useRouter()
  const [options,setoptions]=useState({
    showplay:false
  })
  const showall=()=>{
    setoptions(x=>{return {
      ...x,
      showplay:!x.showplay
    }})
  }
  const anotherpage=()=>{
     router.push(`/${props.id}`)
  }
  const addlocalstorage=()=>{
  
     if(localStorage.getItem('milist')){
    
      const elements=JSON.parse(localStorage.getItem("milist"))
      if(elements.find(x=>x.id==props.id)){
        alert("El elemento ya existe")
      }else{
        elements.push({id:props.id,tittle:props.titlemovie,
          director:props.director,date:props.date,url:props.urlimage})
          localStorage.setItem("milist",JSON.stringify(elements))
      }
     }else{
  
      localStorage.setItem("milist",JSON.stringify([{id:props.id,tittle:props.titlemovie,
        director:props.director,date:props.date,url:props.urlimage}]))
     }
  }
  return (
    <div onMouseOver={showall} onMouseOut={showall} className='carcontainer d-flex flex-column ' style={{
        backgroundImage:`url(${props.urlimage})`
    }} >
      {options.showplay?
        <div className='d-flex  justify-content-end  introductiontwo'>
        <IconAdd onClick={addlocalstorage}></IconAdd>
        </div>:<div className='d-flex align-items-end justify-content-start introduction'>
      
        </div>
      }
      {options.showplay?
        <div className='d-flex align-items-center justify-content-center introduction'>
          <button className='d-flex align-items-center justify-content-center principalcardbutton'>
          <PlayWithe onClick={anotherpage} width="50" height="50"></PlayWithe>
          </button>
        
        </div>:<div className='d-flex align-items-center justify-content-center introduction'>
          
          </div>
      }
      
    <div className='d-flex flex-column justify-content-end  titlemore'>
    <h3>{props.titlemovie}</h3>
    <p><span style={{fontWeight:"bold"}}>{`${props.director}  `}</span>{` ${props.date}`}</p>
    </div>
    

    </div>
  )
}


export default CardContainer
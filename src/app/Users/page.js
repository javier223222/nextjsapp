'use client'
import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '@/componets/Navbar'
import "@/app/css/Carrosuel.css"
import { DM_Sans } from 'next/font/google'

import CardContainer from '@/componets/CardContainer'

const dmSans = DM_Sans({ subsets: ['latin'] })
const User = () => {
  const listofmovies=JSON.parse(localStorage.getItem("milist")).map(x=><CardContainer id={x.id} key={x.id} urlimage={x.url} titlemovie={x.tittle} director={x.director} date={x.date}></CardContainer>)
  return (
    <div className={dmSans.className +"   principaluse"}>
      <div className='containernavb'>
       <Navbar clasnavitems="itemsus" option={true} className="exitsor"></Navbar>
      </div>
       
        <div className='shoblue'>
          <div className='d-flex flex-column align-items-start justify-content-end  dd'>
          <h3>jcundapi12345678</h3>
          <span className='smx'>MX / En MUBI desde 2022</span>
          </div>
       
        </div>
        <div className='white '>
        <img src="https://images.mubicdn.net/static/images/avatar.png?size=800x" alt="Foto de perfil de jcundapi12345678"  className="imagegiblin "></img>
        <div className='d-flex gap-2 align-items-center justify-content-center CCC'>
        <p>CALIFICACIONES Y RESENIAS</p>
        <div  className='separatormi'></div>
        <p style={{color:"rgb(0, 20, 137)"}}>MI LISTA {listofmovies.length}</p>
        <div className='separatormi'></div>
        <p>LISTAS O</p>
        <div className='separatormi'></div>
        <p>SIGUIENDO O</p>
        <div className='separatormi'></div>
         <p>SEGUIDORES O</p>

        </div>
        </div>
        <div className='another m-1'>
          <div className='d-flex gap-1'>

              {listofmovies}
          </div>
              <p style={{visibility:"hidden"}}>sssss</p>
              <p  style={{visibility:"hidden"}} >sssss</p>
              <p  style={{visibility:"hidden"}}>sssss</p>
              
               
        </div>

    </div>
  )
}



export default User
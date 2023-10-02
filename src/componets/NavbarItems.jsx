'use client'
import Image from 'next/image'
import React from 'react'
import Hamburguer from './Hamburguer'
import { useRouter } from 'next/navigation'
const NavbarItems = (props) => {
  const navigate=useRouter()

  const moveprfil=()=>{
    console.log('ddd')
    navigate.push("/Users")
  }
  return (
    <div className={`d-flex gap-4 itemsna align-items-end justify-content-end elemt  ${props.clasnavitems}`}>
    <a style={{cursor:"pointer",textDecoration:"none",fontWeight:"bold"}}>EN CARTELERA</a>
    <a className='anothercolor'>MI LISTA</a>
    <a className='anothercolor'>NOTEBOOK</a>

    <img src="https://images.mubicdn.net/static/images/avatar.png" onClick={moveprfil} className='iconoti' alt="Your profile picture" />
    <Hamburguer></Hamburguer>
  </div>
  )
}

export default NavbarItems
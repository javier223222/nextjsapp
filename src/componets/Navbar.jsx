import React from 'react'
import PropTypes from 'prop-types'
import LogoMubi from './LogoMubi'
import NavbarItems from './NavbarItems'

const Navbar = props => {
  return (
    <div className={`navbarprincipal d-flex  ${props.className}`}>
      <div className='d-flex  align-items-start justify-content-start gap-5 '>
      <LogoMubi option={props.option}></LogoMubi>
      <input placeholder='BUSCAR' className='searchsomethin'></input>
      </div>
     <NavbarItems clasnavitems={props.clasnavitems}></NavbarItems>
      
      </div>
  )
}



export default Navbar
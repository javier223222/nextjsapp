'use client'
import React, { useState } from 'react'
import CardContainer from './CardContainer'

const ListMovies = (props) => {
     
     
      const elementsshows=props.arraylistofmovies.map(x=><CardContainer id={x.id} key={x.id} urlimage={x.url} titlemovie={x.tittle} director={x.director} date={x.date}></CardContainer>)
  return (
    <div className='d-flex Listmovies '>
        <div className='aboutlist'>
            {props.titlesection}
        </div>
        <div className='d-flex gap-1 thingcolor '>
           {elementsshows}
        </div>
        
    </div>
  )
}

export default ListMovies
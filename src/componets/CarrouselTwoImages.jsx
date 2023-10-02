'use client'
import React from 'react'
import { Carousel } from 'react-bootstrap'
import ListMovies from './ListMovies'

const CarrouselTwoImages = (props) => {
  return (
    <Carousel controls={props.controls} indicators={false}>
    <Carousel.Item interval={4000}>
      <ListMovies  titlesection={props.titlesection} arraylistofmovies={props.one}></ListMovies>
    </Carousel.Item>
    <Carousel.Item interval={4000}>
    <ListMovies titlesection={props.titlesection} arraylistofmovies={props.two}></ListMovies>
      </Carousel.Item>
     

</Carousel>
  )
}

export default CarrouselTwoImages
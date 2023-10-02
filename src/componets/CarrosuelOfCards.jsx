'use client'
import React from 'react'
import { Carousel } from 'react-bootstrap'
import ListMovies from './ListMovies'

const CarrosuelOfCards = (props) => {
  return (
    <Carousel controls={props.controls} indicators={false}>
        <Carousel.Item interval={4000}>
          <ListMovies  titlesection={props.titlesection} arraylistofmovies={props.one}></ListMovies>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
        <ListMovies titlesection={props.titlesection} arraylistofmovies={props.two}></ListMovies>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
          <ListMovies  titlesection={props.titlesection} arraylistofmovies={props.three}></ListMovies>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
          <ListMovies titlesection={props.titlesection} arraylistofmovies={props.four}></ListMovies>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
          <ListMovies titlesection={props.titlesection} arraylistofmovies={props.five}></ListMovies>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
          <ListMovies titlesection={props.titlesection} arraylistofmovies={props.six}></ListMovies>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
          <ListMovies titlesection={props.titlesection} arraylistofmovies={props.seven}></ListMovies>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
          <ListMovies  titlesection={props.titlesection} arraylistofmovies={props.eigth}></ListMovies>
          </Carousel.Item>

    </Carousel>
  )
}

export default CarrosuelOfCards
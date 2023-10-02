import React from 'react'

const MoviePlay = async({params}) => {
  console.log(params)
  return (
    <div>{params.movieplay}</div>
  )
}

export default MoviePlay
import React from 'react'
import CardContainer from './CardContainer'

const Apiselect = (props) => {
    const elements=props.elemtsofapi.map(x=><div className='m-1 col-md-auto  col' key={x.id}>

<CardContainer 
        key={x.id} id={x.id} 
        urlimage={`https://image.tmdb.org/t/p/w500/${x.poster_path}`} 
        titlemovie={x.title}
        date={x.release_date} director={x.original_title} ></CardContainer>
    </div>)
  return (
    <div className='' style={{color:"white"}}>
      <div className='row '>
          {elements}
      </div>
    </div>
  )
}

export default Apiselect
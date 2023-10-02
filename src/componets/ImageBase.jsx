import React from 'react'

const ImageBase = (props) => {
  return (
    <div style={{backgroundImage:`url(${props.urlimage})`}} className='generalop d-flex'>
    {props.componets}
    </div>
  )
}

export default ImageBase
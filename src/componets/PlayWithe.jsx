import React from 'react'

const PlayWithe = (props) => {
  return (
    <svg onClick={props.onClick}
    width={props.width?props.width:"24"}
    height={props.height?props.height:"24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" fill="currentColor" />
  </svg>
  )
}

export default PlayWithe
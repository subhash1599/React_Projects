import React from 'react'

function Card(props) {
  return (
    <>
        <div className='m-28'>
        <img className=' h-[202px]' src={props.src} alt="" />
        <p>{props.name}</p>
        <p>{props.designation}</p>
        
        
        </div>
    </>
  )
}

export default Card
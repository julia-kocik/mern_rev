import React from 'react'
import './Diagram.css';

const Diagram = () => {
  return (
    <div className='diagram__container'>
        <h2 className='diagram__section__title'>Current Session Summary</h2>
        <div className='diagram__section__summary'>
          <p>Start:</p>
          <p>End:</p>
          <p>Duration:</p>
        </div>
    </div>
  )
}

export default Diagram
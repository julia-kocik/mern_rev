import React from 'react'
import './Clock.css';

const Clock = () => {
  return (
    <div className='clock__container'>
        <button className='clock__button__disabled active'>Start</button>
    </div>
  )
}

export default Clock
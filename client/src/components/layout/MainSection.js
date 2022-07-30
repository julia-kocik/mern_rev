import React from 'react'
import "./MainSection.css"

const MainSection = () => {
  return (
    <div className='mainsection__container'>
        <div className='mainsection__top'>
            <div className='mainsection__clock'>
                Clock
            </div>
            <div className='mainsection__requests'>
                Requests
            </div>
        </div>
        <div className='mainsection__bottom'>
                Session
        </div>
    </div>
  )
}

export default MainSection
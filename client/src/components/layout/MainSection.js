import React from 'react'
import "./MainSection.css"

const MainSection = props => {
const {sessions} = props;
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
                Sessions: 
                {sessions ? sessions.map(item => <h5>{item.name}</h5>) : "You have no saved sessions yet"}
        </div>
    </div>
  )
}

export default MainSection
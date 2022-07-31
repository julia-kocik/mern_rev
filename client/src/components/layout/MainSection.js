import React from 'react'
import "./MainSection.css"
import Sessions from './Sessions';
import Diagram from './Diagram';
import Clock from './Clock';

const MainSection = props => {
const {sessions} = props;
  return (
    <div className='mainsection__container'>
        <div className='mainsection__top'>
            <div className='mainsection__clock'>
                <Clock/>
            </div>
            <div className='mainsection__requests'>
                Requests
            </div>
        </div>
        <div className='mainsection__bottom'>
              <Sessions sessions={sessions}/>
              <Diagram/>
        </div>
    </div>
  )
}

export default MainSection
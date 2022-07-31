import React from 'react'
import "./Sessions.css"

const Sessions = props => {
const {sessions} = props;
  return (
    <div className='sessions__container'>
        <h2 className='sessions__section__title'>Sessions</h2> 
        {sessions  
        ? sessions.map(item => (
            <div className='sessions__session__container'>
                <div className='sessions__session__item'>
                    <h5>{`${item.name[0].toUpperCase()}${item.name.slice(1)}`}</h5>
                </div>
                <div className='sessions__session__item'>
                    <p>Start: {item.startDate}</p>
                </div>
                <div className='sessions__session__item'>                
                    <p>End: {item.endDate}</p>
                </div>
                <div className='sessions__session__item'>
                    <p>{item.duration}h</p>
                </div>
            </div>
        )) 
        : "You have no saved sessions yet"}
    </div>
  )
}

export default Sessions
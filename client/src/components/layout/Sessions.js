import React from 'react';
import "./Sessions.css";
import {formatTime} from '../../utils/utils';

const Sessions = props => {
  const {sessions} = props;
  return (
    <div className='sessions__container'>
        <h2 className='sessions__section__title'>Sessions</h2> 
        {sessions  
        ? sessions.map(item => (
            <div className='sessions__session__container'>
                <div className='sessions__session__item'>
                    <h5>{item.name ? `${item.name[0].toUpperCase()}${item.name.slice(1)}` : 'Unnamed session'}</h5>
                </div>
                <div className='sessions__session__item'>
                    <p>Date: {item.date}</p>
                </div>
                <div className='sessions__session__item'>                
                    <p>Duration: {formatTime(item.counter)}</p>
                </div>
            </div>
        )) 
        : (
            <div className='sessions__session__container'>
                <h2 className='sessions__section__subtitle'>You have no saved sessions yet</h2> 
            </div>
        )}
    </div>
  )
}

export default Sessions
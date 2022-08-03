import React from 'react';
import './Diagram.css';
import {formatTime} from '../../utils/utils';

const Diagram = ({name, date, counter, status}) => {
  return (
    <div className='diagram__container'>
        <h2 className='diagram__section__title'>Current Session Summary</h2>
        <div className='diagram__section__summary'>
          <p>
            <span>Name: {name}</span>
          </p>
          <p>Date: {date}</p>
          <p>Duration: {status === 'stopped' && formatTime(counter)}</p>
        </div>
    </div>
  )
}

export default Diagram
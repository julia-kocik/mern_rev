import React from 'react';
import './DeleteSession.css';

const DeleteSession = ({sessions}) => {
  return (
    <div className='delete__container'>
        <button className={`delete__button ${!sessions.length && 'disabled'}`}>Clear<br/>All</button>
    </div>
  )
}

export default DeleteSession
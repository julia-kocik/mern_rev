import React from 'react'
import './Requests.css'
import Diagram from './Diagram';

const Requests = ({name, date, counter, status}) => {
  return (
    <div className='requests__container'>
      <div className='requests__container__left'>
        <Diagram name={name} date={date} counter={counter} status={status}/>
      </div>
      <div className='requests__container__right'>
        <button className={`requests__button__disabled ${status==='stopped' && 'active'}`}>Save</button>
      </div>
    </div>
  )
}

export default Requests
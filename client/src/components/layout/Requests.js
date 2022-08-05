import React from 'react'
import './Requests.css'
import Diagram from './Diagram';
    
const Requests = ({name, date, counter, status, postSession}) => {
return (
    <div className='requests__container'>
      <div className='requests__container__left'>
        <Diagram name={name} date={date} counter={counter} status={status}/>
      </div>
      <div className='requests__container__right'>
        <button tabIndex={2} className={`requests__button__disabled ${status==='stopped' && 'active'}`} onClick={postSession}>Save</button>
      </div>
    </div>
  )
}

export default Requests
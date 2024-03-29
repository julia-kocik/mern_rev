import React, {useEffect, useState} from 'react'
import './Clock.css';
import {formatTime} from '../../utils/utils'

const Clock = ({status, establishStatus, counter, startCounter}) => {
  const [timer, setTimer] = useState(null);
  useEffect(() => {
    setTimer(setInterval(startCounter, 1000))
  
    return () => {
      clearInterval(timer)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, status])
  
  return (
    <div className='clock__container'>
        <button tabIndex={1} className={`clock__button__disabled ${status==='ongoing' && 'active'} ${status==='stopped' && 'stopped'}`} onClick={establishStatus}>{status==='initial' ? "Start" :  status==='ongoing' ? `${formatTime(counter)}` : status==='stopped' ? "Reset" : 'Default'}</button>
    </div>
  )
}

export default Clock
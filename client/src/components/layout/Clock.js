import React, {useEffect, useState} from 'react'
import './Clock.css';

const Clock = ({status, establishStatus, counter, startCounter}) => {
  const [timer, setTimer] = useState(null);
  useEffect(() => {
    setTimer(setInterval(startCounter, 1000))
  
    return () => {
      clearInterval(timer)
    }
  }, [counter, status])
  
  return (
    <div className='clock__container'>
        <button className={`clock__button__disabled ${status==='ongoing' && 'active'} ${status==='stopped' && 'stopped'}`} onClick={establishStatus}>{status==='initial' ? "Start" :  status==='ongoing' ? `${counter}` : status==='stopped' ? "Reset" : 'Default'}</button>
    </div>
  )
}

export default Clock
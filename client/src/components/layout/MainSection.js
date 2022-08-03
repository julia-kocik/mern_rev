import React, {useState} from 'react'
import "./MainSection.css"
import Sessions from './Sessions';
import Diagram from './Diagram';
import Clock from './Clock';
import Requests from './Requests';

const MainSection = props => {
const {sessions} = props;
const [status, setStatus] = useState('initial');
const [counter, setCounter] = useState(0);
const establishStatus = () => {
  if(status === 'initial') {
    setStatus('ongoing')
  } else if(status==='ongoing') {
    setStatus('stopped')
  } else if(status==='stopped') {
    setStatus('initial')
    setCounter(0);
  }
}
const startCounter = () => {
  if(status==='ongoing') {
    setCounter(() => counter+1)
  }
}
  return (
    <div className='mainsection__container'>
        <div className='mainsection__top'>
            <div className='mainsection__clock'>
                <Clock status={status} establishStatus={establishStatus} counter={counter} startCounter={startCounter}/>
            </div>
            <div className='mainsection__requests'>
                <Requests/>
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
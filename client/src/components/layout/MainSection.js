import React, {useState} from 'react'
import "./MainSection.css"
import Sessions from './Sessions';
import Clock from './Clock';
import Requests from './Requests';
import {getDate} from '../../utils/utils';
import axios from 'axios';

const MainSection = ({sessions, setFetchSessionData}) => {
const [status, setStatus] = useState('initial');
const [counter, setCounter] = useState(0);
const [name, setName] = useState('');
const [date, setDate] = useState(null);

const establishStatus = () => {
  if(status === 'initial') {
    setStatus('ongoing');
  } else if(status==='ongoing') {
    if(name==='') {
      const sessionName = prompt("Please enter session name");
      setName(sessionName)
    }
    setDate(getDate())
    setStatus('stopped')
  } else if(status==='stopped') {
    setStatus('initial');
    setCounter(0);
    setName('');
    setDate(null)
  }
}
const startCounter = () => {
  if(status==='ongoing') {
    setCounter(() => counter+1)
  }
}
const postSession = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("authToken")}`
    }
  }

  try {
    const { data } = await axios.post(
      "/api/private/sessions",
      { name, date, counter },
      config
    );
    console.log(data)
  } catch (error) {
    console.log(error)
    console.log(name, date, counter)
  }
  setFetchSessionData(true)
}
  return (
    <div className='mainsection__container'>
        <div className='mainsection__top'>
            <div className='mainsection__clock'>
                <Clock status={status} establishStatus={establishStatus} counter={counter} startCounter={startCounter}/>
            </div>
            <div className='mainsection__requests'>
                <Requests name={name} date={date} counter={counter} status={status} postSession={postSession}/>
            </div>
        </div>
        <div className='mainsection__bottom'>
              <Sessions sessions={sessions} />
        </div>
    </div>
  )
}

export default MainSection
import React, {useState} from 'react'
import "./MainSection.css"
import Sessions from './Sessions';
import Clock from './Clock';
import Requests from './Requests';
import DeleteSession from './DeleteSession';
import {getDate} from '../../utils/utils';
import axios from 'axios';
import { API_URL } from '../../config';

const MainSection = ({sessions, setFetchSessionData, setDeleteSessionsData, setDeleteSessionData}) => {
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
  if(date, counter && status !== 'ongoing') {
    try {
      const { data } = await axios.post(
        `${API_URL}/private/sessions`,
        { name, date, counter },
        config
      );
      console.log(data)
      alert('Session succesfully posted')
      setStatus('initial')
      setDate(null);
      setName('');
      setCounter(0)
    } catch (error) {
      console.log(error)
      console.log(name, date, counter)
      alert(error);
    }
    setFetchSessionData(true)   
  } else {
    alert('Click start to open new session')
  }
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
              <Sessions sessions={sessions} setDeleteSessionData={setDeleteSessionData}/>
              <DeleteSession sessions={sessions} setDeleteSessionsData={setDeleteSessionsData}/>
        </div>
    </div>
  )
}

export default MainSection
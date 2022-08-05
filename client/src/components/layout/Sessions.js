import React from 'react';
import "./Sessions.css";
import {formatTime} from '../../utils/utils';
import { AiFillDelete } from "react-icons/ai";
import axios from 'axios';

const Sessions = ({sessions, setDeleteSessionData}) => {
    const handleDeleteOne = async (id) => {
          try {
            const config = {
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("authToken")}`
              }
            }
            const { data } = await axios.delete(
              `/api/private/sessions/${id}`,
              config
            );
            console.log(data);
            alert('Session successfully deleted');
            setDeleteSessionData(true)   
          } catch (error) {
            console.log(error)
            alert(error)
          }
      }
  return (
    <div className='sessions__container'>
        <h2 className='sessions__section__title'>Sessions</h2> 
        {sessions.length  
        ? sessions.map(item => (
            <div key={item._id} className='sessions__session__container'>
                <div className='sessions__session__item'>
                    <h5>{item.name ? `${item.name[0].toUpperCase()}${item.name.slice(1)}` : 'Unnamed session'}</h5>
                </div>
                <div className='sessions__session__item'>
                    <p>Date: {item.date}</p>
                </div>
                <div className='sessions__session__item'>                
                    <p>Duration: {formatTime(item.counter)}</p>
                </div>
                <div className='sessions__session__item__last'>                
                    <p className='sessions__session__item__icon' onClick={() => {
                        handleDeleteOne(item._id);
                    }}><AiFillDelete/></p>
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
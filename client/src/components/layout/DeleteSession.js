import React from 'react';
import './DeleteSession.css';
import axios from 'axios';
import { API_URL } from '../../config';

const DeleteSession = ({sessions, setDeleteSessionsData}) => {
  const handleDelete = async () => {
    if(!sessions || !sessions.length) {
      alert('No sessions to clear')
    } else {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("authToken")}`
          }
        }
        const { data } = await axios.delete(
          `${API_URL}/private/sessions`,
          config
        );
        console.log(data);
        alert('Sessions successfully deleted');
        setDeleteSessionsData(true)   
      } catch (error) {
        console.log(error)
        alert(error)
      }
    }
  }
  return (
    <div className='delete__container'>
        <button tabIndex={3} className={`delete__button ${!sessions?.length && 'disabled'}`} onClick={handleDelete}>Clear<br/>All</button>
    </div>
  )
}

export default DeleteSession
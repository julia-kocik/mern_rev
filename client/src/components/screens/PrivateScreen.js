import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
//components
import Header from '../layout/Header';
import MainSection from '../layout/MainSection';

const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("authToken")) {
      navigate("/login")
    }

    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("authToken")}`
        }
      }

      try {
        const {data} = await axios.get("/api/private", config);
        setLoading(false);
        setPrivateData(data)
      } catch (error) {
        setLoading(false);
        localStorage.removeItem("authToken");
        setError("You are not authorized, please login")
        console.log(error)
      }
    }
  
    fetchPrivateDate()
  }, [navigate])
  
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    navigate('/login');
  }
 
  if (error) {
    return <span className="error-message">{error}</span>
  } else if(loading) {
    return <span className="error-message">Loading...</span>
  }
  const {username, sessions} = privateData.user;
    return (
      <>
        <Header username={`${username[0].toUpperCase()}${username.slice(1)}`} logoutHandler={logoutHandler}/>
        <MainSection sessions={sessions}/>
        <div>
        </div>
      </>
    )
}

export default PrivateScreen
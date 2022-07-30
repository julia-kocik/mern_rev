import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";


function PrivateScreen() {
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

  return error ? (
     <span className="error-message">{error}</span>
  ) : loading ? (
    <span className="error-message">Loading...</span>

  ) : (
    <>
      <div style={{ background: "green", color: "white"}}>{privateData.data}</div>
      <div>
        <h1>{`Hello ${privateData.user.username[0].toUpperCase()}${privateData.user.username.slice(1)}`}</h1>
      </div>
      <button onClick={logoutHandler}>Logout</button>
    </>
  )
}

export default PrivateScreen
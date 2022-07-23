import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./LoginScreen.css"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('authToken')) {
      navigate('/');
    }
  }, [navigate])
  

  const loginHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json"
      }
    }

    try {
      const {data} = await axios.post("/api/auth/login", { email, password}, config)

      localStorage.setItem("authToken", data.token)

      navigate("/")
    } catch (error) {
      setError(error.response.data.error)
      setTimeout(() => {
        setError("")
      }, 5000);
    }
  }

  return (
    <div className="login-screen">
      <form onSubmit={loginHandler} className="login-screen__form">
        <h3 className='login-screen_title'>Login</h3>
        {error && <span className='error-message'>{error}</span>}
        <div className='form-group'>
          <label htmlFor='password'>Email:</label>
          <input type='email' required id='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className='form-group'> 
          <label htmlFor='password'>Password:</label>
          <input type='password' required id='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <button type='submit' className='btn btn-primary'>Login</button>
        <span className='register-screen__subtext'>Don't have an account? <Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  )
}

export default LoginScreen;
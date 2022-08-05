import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./RegisterScreen.css"
import { useNavigate } from "react-router-dom"


const RegisterScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => {
    if(localStorage.getItem('authToken')) {
      navigate('/');
    }
  }, [navigate])

  const registerHandler = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    if(password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("")
      }, 5000);
      return setError("Passwords provided don't match")
    }

    try {
      const {data} = await axios.post("/api/auth/register", {username, email, password}, config)

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
    <div className="register-screen">
      <form onSubmit={registerHandler} className="register-screen__form">
        <h3 className='register-screen_title'>Register</h3>
        <div className='form-group'>
          <label htmlFor='name'>Username:</label>
          <input type='text' required id='name' placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Email:</label>
          <input type='email' required id='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className='form-group'> 
          <label htmlFor='password'>Password:</label>
          <input type='password' required id='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Confirm Password:</label>
          <input type='password' required id='confirmpassword' placeholder='Confirm password' value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
        </div>
        <button type='submit' className='btn btn-primary'>Register</button>
        <span className='register-screen__subtext'>Already have an account? <Link to='/login' className='links'>Login</Link>
        </span>
        {error && <span className='error-message'>{error}</span>}
      </form>
    </div>
  )
}

export default RegisterScreen;
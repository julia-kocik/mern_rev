import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./RegisterScreen.css"

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  return (
    <div className="register-screen">
      <form className="register-screen__form">
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
          <label htmlFor='password'>Password:</label>
          <input type='password' required id='confirmpassword' placeholder='Confirm password' value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
        </div>
        <button type='submit' className='btn btn-primary'>Register</button>
        <span className='register-screen__subtext'>Already have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  )
}

export default RegisterScreen;
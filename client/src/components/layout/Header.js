import React from 'react'
import "./Header.css"

const Header = props => {
    const {username, avatar, logoutHandler} = props;
  return (
    <div className='header__container'>
       <div className='header__left'>
       <h1 className='header__username'>{`Hello ${username}!`}</h1>
       </div>
       <div className='header__right'>
        <span className='header__avatar'>{avatar ? avatar : username[0]}</span>
        <button className='header__button' onClick={logoutHandler}>Logout</button>
       </div>
    </div>
  )
}

export default Header
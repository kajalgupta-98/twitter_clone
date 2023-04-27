import React from 'react'
import style from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={style.navContainer}>
      <div className={style.navText}>
        <h2>Don’t miss what’s happening</h2>
        <p>eople on Twitter are the first to know.</p>
      </div>
    
      <div className={style.BtnContainer}>
        <button className={style.loginBtn}> <strong>Log in</strong></button>
        <button className={style.signupBtn}><strong>Sign up</strong></button>
      </div>
    </div>
  
   
  )
}

export default Navbar

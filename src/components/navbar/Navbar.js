import React from 'react'
import style from "./navbar.module.css"
import {Link} from "react-router-dom"
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import LoginComponent from '../../pages/login/LoginComponent';
import RegisterComponent from '../../pages/register/RegisterComponent';


const Navbar = ({onSignUpClick,onLoginClick}) => {
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [signUpOpen, setSignUpOpen] = React.useState(false);

  

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleSignUpOpen=()=>{
    setSignUpOpen(true)
  }
  const handleSignUpClose =()=>{
    setSignUpOpen(false)
  }
  return (
    <div className={style.navContainer}>
      <div className={style.navText}>
        <p style={{fontSize:"1.7rem"}}>Don’t miss what’s happening</p>
        <p>People on Twitter are the first to know.</p>
      </div>
    
      <div className={style.BtnContainer}>
        <div>
          <button className={style.loginBtn} onClick={handleLoginOpen}> 
            <Link to={"/login"}>
              <strong>Log in</strong>
            </Link>
          </button> 
          <Dialog open={loginOpen} onClose={handleLoginClose}>
            <DialogContent  sx={{width:"30rem", borderRadius:"5rem"}}>
              <DialogContentText sx={{color:"black"}}>
                  <LoginComponent onLoginClose={handleLoginClose} onSignUpOpen={handleSignUpOpen}/>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>

        <div>
          <button className={style.signupBtn} onClick={handleSignUpOpen}>
            <Link to={"/register"}>
              <strong>Sign up</strong>
            </Link>
          </button>
          <Dialog open={signUpOpen} onClose={handleSignUpClose}>
            <DialogContent  sx={{width:"30rem", borderRadius:"5rem"}}>
              <DialogContentText sx={{color:"black"}}>
                  <RegisterComponent onSignUpClose={handleSignUpClose} onLoginOpen={handleLoginOpen}/>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
        
      </div>
    </div>
  
   
  )
}

export default Navbar

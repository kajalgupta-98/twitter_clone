import React, { useState } from 'react'
import style from "./login.module.css"
import { Link,useNavigate } from "react-router-dom"
import { Button, TextField } from '@mui/material'
import { FcGoogle } from "react-icons/fc"
import { AiFillApple, AiOutlineTwitter } from "react-icons/ai"
import {ImCross} from "react-icons/im"
import { useSetRecoilState } from 'recoil'
import userLoggedInStatus, { currentUserAtom } from '../../userLoggedInStatus'
import SimpleSnackbar from '../../components/Snackbar'


const LoginComponent = ({onLoginClose, onSignUpOpen}) => {

  const setIsUserLoggedIn = useSetRecoilState(userLoggedInStatus)
  const setCurrentUser = useSetRecoilState(currentUserAtom)

  const [contact, setContact] = useState("")
  const [password, setPassword]= useState("")
  const [nextClick, setNextClick] = useState(false)
  const [error, setError] =useState(false)
  const [errorText , setErrorText]= useState("")

  const [open, setOpen] = useState(false);

  const navigate= useNavigate()

  function handleNextClick(e){
    e.preventDefault()
    if(contact===""){
      setError(true)
      setErrorText("This field cannot be empty")
    }
    else{
      setError(false)
      setErrorText("")
      setNextClick(true)
    }
  }
  function handleLoginSubmit(e){
    e.preventDefault()
    let users = JSON.parse(localStorage.getItem("userDetails"))
    const isUserExists = users.find((user)=> (user.Email===contact ||user.Phone===contact) && user.Password===password )
    console.log(users)
    console.log(isUserExists)

    if(isUserExists){
      window.alert("login Success")
      setOpen(true);
      setIsUserLoggedIn(true)
      setCurrentUser({
        name: isUserExists.Name,
        email: isUserExists.Email
      })
      navigate("/")
      // localStorage.setItem("login Sucsess", true);

    }else{
      setError(true)
      setErrorText("Invalid credentials")
    }

  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
function handleChangingPage(){
  onLoginClose();
  onSignUpOpen()
}
  return (
    <>
    <form className={style.loginFormContainer} onSubmit={handleLoginSubmit}>
      <nav onClick={onLoginClose}> <Link to={'/'}><ImCross color="black"/></Link></nav>
      <div><AiOutlineTwitter size={45} color="#00acee " /></div>
      {error ? <small style={{color:"red"}}>{errorText}</small> : null} <br/>
      {nextClick ? <>
        <h1>Enter your password</h1>
        <TextField disabled
          id="outlined-basic"
          label="Phone, email or username"
          defaultValue={contact}
          variant="outlined"
          sx={{width:"85%"}} /> <br />

        <TextField  sx={{width:"85%"}} id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)} /><br /><br />
        <Button sx={{width:"85%",
                    borderRadius:"2rem",
                    backgroundColor:"black"}} variant="contained" type="submit">Log in</Button><br /><br />
      

      </> :
        <>
         
          <h1>Sign in to Twitter </h1>
          <Button sx={{width:"65%",
                    borderRadius:"2rem",
                    color:"black",
                    border:"1px solid grey" }}  variant="outlined"> <FcGoogle size={25} /> Sign in with Google</Button><br />
          <Button sx={{width:"65%",
                    borderRadius:"2rem",
                    color:"black",
                    border:"1px solid grey" }}  variant="outlined"> <AiFillApple size={25} color='black' /> Sign in with Apple</Button>
          <p>or</p>
          <TextField  sx={{width:"65%"}} id="outlined-basic" label="Phone, email or username" variant="outlined" value={contact} onChange={(e) => setContact(e.target.value)} /><br/>
         
          <Button sx={{width:"65%",
                    borderRadius:"2rem",
                    backgroundColor:"black"}} variant="contained" onClick={handleNextClick}>Next</Button><br />
          <Button sx={{width:"65%",
                    borderRadius:"2rem",
                    color:"black",
                    border:"1px solid grey" }} variant="outlined"> Forgot Password? </Button><br />
        </>}





        <p>Don't have an account? <Link to={"/register"} onClick={handleChangingPage}>Sign up</Link></p>
    </form>
        <SimpleSnackbar onClose={handleClose} open={open}  severity="success" message="Log in Success"/>
    </>

  )
}

export default LoginComponent

import React, { useState } from 'react'
import style from "./login.module.css"
import { Link,useNavigate } from "react-router-dom"
import { Button, TextField } from '@mui/material'
import { FcGoogle } from "react-icons/fc"
import { AiFillApple, AiOutlineTwitter } from "react-icons/ai"
import { useSetRecoilState } from 'recoil'
import userLoggedInStatus from '../../userLoggedInStatus'
import SimpleSnackbar from '../../components/Snackbar'


const Login = () => {

  const setIsUserLoggedIn = useSetRecoilState(userLoggedInStatus)

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
    const isUserExists = users.some((user)=> (user.Email===contact ||user.Phone===contact) && user.Password===password )
    console.log(users)
    console.log(isUserExists)

    if(isUserExists){
      window.alert("login Success")
      setOpen(true);
      setIsUserLoggedIn(true)
      navigate("/")
    }

  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
    <form className={style.loginFormContainer} onSubmit={handleLoginSubmit}>
      <nav> <Link to={'/'}>X</Link></nav>
      <div><AiOutlineTwitter size={45} color="#00acee " /></div>
      {nextClick ? <>
        <h1>Enter your password</h1>
        <TextField disabled
          id="outlined-basic"
          label="Phone, email or username"
          defaultValue={contact}
          variant="outlined"
          sx={{width:"85%"}} /> <br /><br />

        <TextField  sx={{width:"85%"}} id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)} /><br /><br />
        <Button sx={{width:"85%",
                    borderRadius:"2rem",
                    backgroundColor:"black"}} variant="contained" type="submit">Log in</Button><br /><br />
      

      </> :
        <>
         
          <h1>Sign in to Twitter </h1>
          <Button sx={{width:"85%",
                    borderRadius:"2rem",
                    color:"black",
                    border:"1px solid grey" }}  variant="outlined"> <FcGoogle size={25} /> Sign in with Google</Button><br />
          <Button sx={{width:"85%",
                    borderRadius:"2rem",
                    color:"black",
                    border:"1px solid grey" }}  variant="outlined"> <AiFillApple size={25} color='black' /> Sign in with Apple</Button>
          <p>or</p>
          <TextField  sx={{width:"85%"}} id="outlined-basic" label="Phone, email or username" variant="outlined" value={contact} onChange={(e) => setContact(e.target.value)} />
          {/* {error && <span>{errorText}</span>} */}
          {error ? <small style={{color:"red"}}>{errorText}</small> : null} <br/>
          <Button sx={{width:"85%",
                    borderRadius:"2rem",
                    backgroundColor:"black"}} variant="contained" onClick={handleNextClick}>Next</Button><br />
          <Button sx={{width:"85%",
                    borderRadius:"2rem",
                    color:"black",
                    border:"1px solid grey" }} variant="outlined"> Forgot Password? </Button><br />
        </>}





        <p>Don't have an account? <Link to={"/register"}>Sign up</Link></p>
    </form>
        <SimpleSnackbar onClose={handleClose} open={open}  severity="success" message="Log in Success"/>
    </>

  )
}

export default Login

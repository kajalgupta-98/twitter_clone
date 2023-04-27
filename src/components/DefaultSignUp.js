import React from 'react'
import {Link} from "react-router-dom"
import { Button } from '@mui/material'
import {FcGoogle} from "react-icons/fc"
import {AiFillApple , AiOutlineTwitter} from "react-icons/ai"

const DefaultSignUp = ({onclick}) => {
  return (
    <div>
      <div><AiOutlineTwitter size={45} color="#00acee "/></div>
      <h1>Join twitter Today</h1>
      <Button sx={{width:"55%",
                    borderRadius:"2rem",
                    color:"black",
                    border:"1px solid grey" }} variant="outlined"> <FcGoogle size={25}/> Sign up with Google</Button><br/><br/>
      <Button sx={{width:"55%",
                    borderRadius:"2rem",
                    color:"black",
                    border:"1px solid grey" }} variant="outlined"> <AiFillApple size={25} color='black'/> Sign up with Apple</Button>
      <p>or</p>     
      <Button sx={{width:"55%",
                    borderRadius:"2rem",
                    backgroundColor:"black" }} variant="contained"  onClick={onclick}>Create account</Button>
      <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
      <p>Have an account already? <Link to={"/login"}>Login</Link></p>
    </div>
  )
}

export default DefaultSignUp

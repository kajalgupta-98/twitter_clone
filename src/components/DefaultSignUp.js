import React from 'react'
import {Link} from "react-router-dom"
import { Button } from '@mui/material'
import {FcGoogle} from "react-icons/fc"
import {AiFillApple} from "react-icons/ai"

const DefaultSignUp = ({onclick}) => {
  return (
    <div>
      <h1>Join twitter Today</h1>
      <Button variant="outlined"> <FcGoogle size={25}/> Signup with Google</Button><br/><br/>
      <Button variant="outlined"> <AiFillApple size={25} color='black'/> Signup with Apple</Button>
      <hr/>
      <Button variant="contained"  onClick={onclick}>Create account</Button>
      <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
      <p>Have an account already? <Link to={"/login"}>Login</Link></p>
    </div>
  )
}

export default DefaultSignUp

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import {BsThreeDots} from "react-icons/bs"
import style from "./currentUser.module.css"
import {Popover, Typography} from '@mui/material';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import userLoggedInStatus, { currentUserAtom } from '../../userLoggedInStatus';

const CurrentUser = () => {
    const currentUser= useRecoilValue(currentUserAtom)
    const setIsUserLoggedIn = useSetRecoilState(userLoggedInStatus)
    const [open, setOpen]= useState(false)
    const navigate = useNavigate()

    function handleLogOut(){
        window.alert("logged out successfully")
        setIsUserLoggedIn(false)
    }

    function handleOpen(){
    setOpen(true)
    }
    function handleClose(){
        setOpen(false)
    }
  return (
    <>
    <div className={style.currentUser} onClick={handleOpen}>
      
      <Avatar src="/broken-image.jpg" />
      <div>
        <p>{currentUser.name}</p>
        <p>{currentUser.email}</p>
      </div>
      <BsThreeDots/>
    </div>
     <Popover
     sx={{borderRadius:"10px"}}
     open={open}
     onClose={handleClose}
     anchorReference="anchorPosition"
     anchorPosition={{ top: 380, left: 30 }}
     anchorOrigin={{
       vertical: 'top',
       horizontal: 'left',
     }}
     transformOrigin={{
       vertical: 'top',
       horizontal: 'left',
     }}>
    <Typography>
        <div className={style.currentUserPopOver}>
            <h4 onClick={()=> navigate("/login")}>Add an existing account</h4>
            <h4 onClick={handleLogOut}>log out {currentUser.email}</h4>
        </div>
    </Typography>
     </Popover>
    </>
  )
}

export default CurrentUser

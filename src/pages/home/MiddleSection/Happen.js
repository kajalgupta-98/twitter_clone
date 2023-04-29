import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import MmsOutlinedIcon from '@mui/icons-material/MmsOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';


import style from './Feed.module.css'

function Happen () {
  return (
    <>
       <div className={style.data}>
        {/* <h3>What's happening ?</h3> */}
        <div className={style.happen}>
        <Avatar alt="Cindy Baker" src='../Images/3.jpg' />
        
        <input placeholder="What's happening?"/>
        </div>
        
      
     
  
     
    <div className={style.tweetIcon}><p><MmsOutlinedIcon/><GifBoxOutlinedIcon/><BallotOutlinedIcon/>< EmojiEmotionsOutlinedIcon/>< AddLocationOutlinedIcon/> </p> <Button id ={style.tweet}> 
          Tweet
        </Button></div> 
        </div>
     </>

  )
}

export default Happen


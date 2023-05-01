import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import MmsOutlinedIcon from '@mui/icons-material/MmsOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import style from './happen.module.css'
import { useRecoilState } from 'recoil';



function Happen () {
  
 

 
  return (
    
       <div className={style.data}>
        <div className={style.happen}>
          <Avatar src="../Images/3.jpg" />
          <textarea  className={style.textArea} 
                     placeholder="What's happening?"
                     
                     
                     />
        </div>
        <div className={style.tweetIcon}>
          <p>
            <MmsOutlinedIcon/><GifBoxOutlinedIcon/><BallotOutlinedIcon/>< EmojiEmotionsOutlinedIcon/>< AddLocationOutlinedIcon/> 
          </p> 
          <Button  variant="contained" id ={style.tweet} > 
            Tweet
          </Button>
        </div> 
        </div>
   

  )
}

export default Happen


import React from 'react'
import style from './Feed.module.css'
import Tweet from './TweetBox'
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import MmsOutlinedIcon from '@mui/icons-material/MmsOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';

export default function Feed() {
  return (
    <>
    <div>
      <div className={style.feed}>
        <div className={style.home}>
     <h2>Home</h2>
     </div>
     <div className={style.for}>
      <h4>For You</h4>
      <h4>Following</h4>
      
     </div>
      </div>
      <div className={style.main}>
      <Avatar alt="Cindy Baker" src='../Images/3.jpg' />
        <h3>What's happening ?</h3>
       <div className={style.tweetIcon}><p><MmsOutlinedIcon/><GifBoxOutlinedIcon/><BallotOutlinedIcon/>< EmojiEmotionsOutlinedIcon/>< AddLocationOutlinedIcon/> </p> <Button id ={style.tweet}>
          Tweet
        </Button></div>
      </div>
     

      <div>
      <Tweet/>
      </div>
    </div>
   
     </>
  )
}

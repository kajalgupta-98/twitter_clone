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
import tweetDataAtom from '../../tweetData';


function Happen () {
  
  const [newTweet, setNewTweet] =React.useState("")
  const[tweets, setTweets] = useRecoilState(tweetDataAtom)

  function addNewTweet(){
    const tweet = [newTweet, ...tweets]
    setTweets(tweet)
    // console.log(tweet)
    console.log(tweets)
    setNewTweet("")
  }
  return (
    
       <div className={style.data}>
        <div className={style.happen}>
          <Avatar src="/broken-image.jpg" />
          <textarea  className={style.textArea} 
                     placeholder="What's happening?"
                     value={newTweet} 
                     onChange={(e)=> setNewTweet(e.target.value)}
                     />
        </div>
        <div className={style.tweetIcon}>
          <p>
            <MmsOutlinedIcon/><GifBoxOutlinedIcon/><BallotOutlinedIcon/>< EmojiEmotionsOutlinedIcon/>< AddLocationOutlinedIcon/> 
          </p> 
          <Button  disabled ={!newTweet} variant="contained" id ={style.tweet} onClick={addNewTweet}> 
            Tweet
          </Button>
        </div> 
        </div>
   

  )
}

export default Happen


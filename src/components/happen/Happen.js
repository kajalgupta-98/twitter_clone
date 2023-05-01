import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import MmsOutlinedIcon from '@mui/icons-material/MmsOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import style from './happen.module.css'



import { useRecoilState,useRecoilValue } from 'recoil';
import {tweetAtom} from '../../Recoil/tweets';
import { currentUserAtom } from '../../userLoggedInStatus';



function Happen ({onclick}) {
  

 

 

  const [newTweet, setNewTweet] =React.useState("")
  const[tweets, setTweets] = useRecoilState(tweetAtom)
  const currentUser= useRecoilValue(currentUserAtom)

 

  function addNewTweet(){
    
    const tweet = {
      id: Math.random*10,
      content: newTweet,
      createdAt: "today",
      tweetedBy:{
        name: currentUser.name
      }
    }
   setTweets([tweet, ...tweets])
    console.log(tweets)
    onclick()
    setNewTweet("")

  }

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


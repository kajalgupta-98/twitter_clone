import React from 'react'
import style from './tweet.module.css'
import tweet from '../../../tweet.json'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import {GoVerified} from 'react-icons/go'
import {FcLike} from 'react-icons/fc'
import {AiOutlineHeart} from 'react-icons/ai'

import Avatar from '@mui/material/Avatar';
export default function Tweet() {
  // const images = new Array(5).fill(0).map((x, index) => {
  //   return `https://picsum.photos/1000/500?q=${index}`;
  // })
 
  return (
    <div className={style.tweet}>
     {tweet && tweet.map(record=>{
  return(
    <>
   <div className={style.image}>
   <div className={style.avatar}> <Avatar alt="Cindy Baker" src='../Images/3.jpg' /><span>Marry<GoVerified color='blue'/></span></div>
    <div className={style.box}>
     
    <div>{record.content}</div>
     <img src={record.image} alt="data" height='200' width='500'border-radius="20"/>
     <div className={style.icon}>
      <ModeCommentOutlinedIcon/>{record.commentCount}
      <AspectRatioOutlinedIcon/>
      <FcLike/>{record.likeCount}
      {/* {record.isLiked?( <FcLike/>):(<AiOutlineHeart/>)} */}
     

      <SignalCellularAltOutlinedIcon/>
      <IosShareOutlinedIcon/>
      
      </div>
      </div>
    {/* <h3>{record.likeCount}</h3> */}
    </div>
    </>
  )
})}
      
    </div>
  )
}



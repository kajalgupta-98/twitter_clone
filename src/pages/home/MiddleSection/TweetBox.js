import React from 'react'
import style from './tweet.module.css'
import tweet from '../../../tweet.json'
export default function Tweet() {
  return (
    <div className={style.tweet}>
     {tweet && tweet.map(record=>{
  return(
    <>
    <div className={style.box}>
    <h4>{record.id}</h4>
    <li>{record.content}</li>
    <h3>{record.likeCount}</h3>
    </div>
    </>
  )
})}
      
    </div>
  )
}



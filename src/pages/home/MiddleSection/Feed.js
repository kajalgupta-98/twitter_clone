import React from 'react'
import style from './Feed.module.css'
import Tweet from './TweetBox'
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
        <h3>What's happening</h3>
      </div>
      <div>
      <Tweet/>
      </div>
    </div>
   
     </>
  )
}

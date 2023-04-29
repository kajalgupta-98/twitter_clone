import React from 'react'
import style from './Feed.module.css'
import Tweet from './TweetBox'

// import TextareaAutosize from '@mui/base/TextareaAutosize'
import Happen from './Happen'

export default function Feed() {

 
  return (
    <>

    <div>
    <div className={style.home}>
    <h2>Home</h2>
  
    </div>
    <div className={style.for}>
      <div><h4>For You</h4></div>
     <div><h4>Following</h4></div>
     </div>
      {/* <div className={style.feed}> */}
       
        {/* <div className={style.home}>
  
   
     <div className={style.for}>
     <h2>Home</h2>
      <h4>For You</h4>
     <h4>Following</h4>
     </div>
     </div>
      </div> */}
      
     <Happen/>
     

      <div>
      <Tweet/>
      </div>
    </div>
   
     </>
  )
}

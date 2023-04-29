import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Feed from './MiddleSection/Feed'
import style from './Home.module.css'
import RightPart1 from './RightComponents/RightPart1'



const Home = () => {
  return (
    <div className={style.home}>
     

      <Sidebar/>
      <div>
      <Feed/>
      </div>
      <div className={style.right}>
        <RightPart1/>
      </div>
      

    </div>
  )
}

export default Home

import React from 'react'
import RightPart3 from './RightPart3'
import RightPart2 from './RightPart2'
import style from './part1.module.css'



function RightPart1() {
  return (

    <div >

      {/* RightSection1 */}
      <div className={style.search}>
        
          <input type="text" placeholder="Search Tweeter" />
        
       
      </div>
      <RightPart2/>
      <RightPart3 />



    </div>
  )
}
export default RightPart1
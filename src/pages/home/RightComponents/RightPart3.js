import React from 'react'
import style from './rightSection.module.css'
import  Button  from '@mui/material/Button'
import {Avatar} from '@mui/material'

function RightSection3() {
    return (
        <div className={style.followbox}>
            <h2>Who to Follow</h2>
            <div className={style.follow} >
            
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <h4>Name</h4>
                
                
                <button className={style.followBtn} >Follow</button>
              

            </div>
            <div className={style.follow} >
            
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <h4>Name</h4>
               
                <button className={style.followBtn} >Follow</button>
               

            </div>
            <div className={style.follow} >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />


                <h4>Name</h4>
                <button className={style.followBtn} >Follow</button>
               

            </div>
            <div className={style.follow} >
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <h4>Name</h4>
                <button className={style.followBtn} >Follow</button>
               

            </div>

        </div>
    )
}

export default RightSection3
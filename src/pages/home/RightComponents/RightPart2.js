import React, { useState } from 'react'
import style from './rightSection.module.css'
import Button from '@mui/material/Button'
import trend from '../../../trendingData.json'

function RightPart2() {

const[trending,setTrending]=useState(5)


const handleShowMore = () => {
    setTrending(trending + 3);
};


    return (
        <div className={style.trendbox}>

            <h2>What's trending</h2>

            {trend.slice(0,trending).map((trend)=>
            (
                <div className={style.trend} >
                <p>famous in{trend.famousIn}</p>
                <h4>#{trend.hashtags}</h4>
                <p>{trend.tweets}tweets</p>
            </div>


            ))}

            <Button onClick={handleShowMore} size='small' sx={{ borderRadius: 50, backgroundColor: "transparent", textTransform: "none" }} >Show more</Button>





        </div>
    )
}

export default RightPart2
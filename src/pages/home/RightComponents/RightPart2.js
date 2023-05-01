import React, { useState } from 'react'
import style from './rightSection.module.css'
import Button from '@mui/material/Button'
import trend from '../../../trendingData.json'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { textAlign } from '@mui/system';

function RightPart2() {

    const [trending, setTrending] = useState(5)
    const [showButtons, setShowButtons] = useState(false);


    const handleShowMore = () => {
        setTrending(trending + 3);
    };


    const handleDropdownClick = () => {
        setShowButtons(!showButtons);
    };

    return (
        <div className={style.trendbox}>

            <h2>What's trending</h2>

            {trend.slice(0, trending).map((trend) =>
            (
                <div className={style.trend} >
                    <p>famous in {trend.famousIn}</p>

                    <div className={style.tags}  >
                        <h3>#{trend.hashtags} </h3>
                        <MoreHorizIcon onClick={handleDropdownClick} className={style.Dropdown} />
                    </div>

                    {showButtons && (
                        <div className={style.dots}>
                            <button><SentimentSatisfiedAltIcon  /></button>
                            <button> <SentimentVeryDissatisfiedIcon /></button>
                        </div>
                    )}


                    <p>{trend.tweets}Tweets</p>
                </div>


            ))}

            <Button onClick={handleShowMore} size='small' sx={{ borderRadius: 50, backgroundColor: "transparent", textTransform: "none" }} >Show more</Button>





        </div>
    )
}

export default RightPart2
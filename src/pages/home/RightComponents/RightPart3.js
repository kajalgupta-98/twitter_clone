import React from 'react'
import style from './rightSection.module.css'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Avatar } from '@mui/material'



function RightSection3() {
    return (
        <>
            <div className={style.followbox}>

                <h2>Who to Follow</h2>


                <div className={style.follow} >
                    <div className={style.profile}>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <h4>userName</h4>
                    </div>

                    <div>
                        <Button variant="contained" size='small' sx={{
                            borderRadius: 50,
                            backgroundColor: "black",
                            textTransform: "none"
                        }}>Follow</Button>
                    </div>
                </div>


                <div className={style.follow} >
                    <div className={style.profile}>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <h4>UserName</h4>
                    </div>

                    <div className={style.followbtn} >
                        <Button variant="contained" size='small' sx={{
                            borderRadius: 50,
                            backgroundColor: "black",
                            textTransform: "none"
                        }}>Follow</Button>
                    </div>
                </div>
                <div className={style.follow} >
                    <div className={style.profile}>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <h4>userName</h4>
                    </div>

                    <div>
                        <Button variant="contained" size='small' sx={{
                            borderRadius: 50,
                            backgroundColor: "black",
                            textTransform: "none"
                        }}>Follow</Button>
                    </div>
                </div>
                <div className={style.follow} >
                    <div className={style.profile}>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <h4>userName</h4>
                    </div>

                    <div>
                        <Button variant="contained" size='small' sx={{
                            borderRadius: 50,
                            backgroundColor: "black",
                            textTransform: "none"
                        }}>Follow</Button>
                    </div>
                </div>





                <h5>show more</h5>


            </div>
            <Typography sx={{ width: "40vh", fontSize: "small" }} variant="p" component="p">
                Terms of Service Privacy Policy Cookie  PolicyAccessibility  Ads infoMore© 2023 X Corp.
            </Typography>

        </>


    )
}

export default RightSection3
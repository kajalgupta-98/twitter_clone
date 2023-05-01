import React from 'react'
import style from './rightSection.module.css'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Avatar } from '@mui/material'
import user from '../../../userProfile.json'
import { useState } from 'react'




function RightSection3() {

    const[isFollowed,setIsFollowed]=useState(false)
    const [usersToShow, setUsersToShow] = useState(5);
    const [userProfile, setUserProfile] = useState(user)
    const [thisUser, setThisUser] = useState({
        user: user,
        isFollowed: false
    })

   
    const handleShowMore = () => {
        setUsersToShow(usersToShow + 5);
    };

   function handleClick(index){
    
    console.log(userProfile)
    setThisUser(userProfile.find((item,id)=> id===index))
    thisUser.isFollowed=!thisUser.isFollowed
    setThisUser({...thisUser})
    
    // userProfile[index].isFollowed= ! userProfile[index].isFollowed
    // setUserProfile([...userProfile])
      
   }


    return (
        <>
            <div className={style.followbox}>

                <h2>Who to Follow</h2>

                {user.slice(0, usersToShow).map((user, index) => (
                    <div className={style.follow} >
                        
                        <Avatar alt="Sasha Howard" src="/static/images/avatar/2.jpg" />
                        <h4>{user.first_Name}{" "}{user.Last_Name}</h4>
                        <Button onClick={()=>handleClick(index)}  variant="contained" size='small' sx={{ borderRadius: 50, backgroundColor: "black", textTransform: "none",zIndex:0 }}>  
                            { isFollowed?"Followed":"Follow"}
                        </Button>
                    </div>
                ))}










                {usersToShow < user.length && (
                    <Button onClick={handleShowMore} size='small' sx={{ borderRadius: 50, backgroundColor: "transparent", textTransform: "none" }} >
                   Show more</Button>
                )}

            </div>
            <div>
                <Typography  sx={{ width: "40vh", fontSize: "small" }} variant="p" component="p">
                    Terms of Service Privacy Policy Cookie  PolicyAccessibility  Ads infoMore© 2023 X Corp.
                </Typography>
            </div>

        </>


    )
}

export default RightSection3
import React from 'react'
import style from './Sidebar.module.css'
import SidebarLink from './SidebarLink'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MessageIcon from '@mui/icons-material/EmailOutlined';
import BookmarkIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Button, Dialog, DialogContent, DialogContentText } from '@mui/material';
import { Popover, Typography } from '@mui/material';
import { FaRegCommentDots, FaListAlt } from "react-icons/fa"
import { BsPersonHeart } from "react-icons/bs"
import { MdVerified } from "react-icons/md"
import { AiOutlineDown, AiOutlineTwitter } from "react-icons/ai"
import CurrentUser from '../../../components/currentUser/CurrentUser';
import { useRecoilValue } from 'recoil';
import userLoggedInStatus from '../../../userLoggedInStatus';
import Happen from '../../../components/happen/Happen';



const Sidebar = () => {
  const [openMore, setOpenMore] = React.useState(false)
  const [openHappen, setOpenHappen] = React.useState(false)
  const isUserLoggedIn = useRecoilValue(userLoggedInStatus)


  function handleOpenMore() {
    setOpenMore(true)
  }

  function handleCloseMore() {
    setOpenMore(false)
  }

  function handleOpenHappen() {
    setOpenHappen(true)
  }

  function handleCloseHappen() {
    setOpenHappen(false)
  }


  return (

    <div className={style.sidebarContainer}>

      <div className={style.sidebar} >
        <div className={style.sidebarTwitterIcon}><AiOutlineTwitter size={30} color="#00acee " /></div>
        <SidebarLink text="Home" Icon={HomeIcon} />
        <SidebarLink text="Explore" Icon={SearchIcon} />
        <SidebarLink text="Notification" Icon={NotificationIcon} />
        <SidebarLink text="Messages" Icon={MessageIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Twitter Blue" Icon={ListIcon} />
        <SidebarLink text="Profile" Icon={PersonIcon} />

        <div className={style.morePopup}>
          <SidebarLink text="More" Icon={MoreHorizOutlinedIcon} onClick={handleOpenMore} />
          <Popover
            sx={{ borderRadius: "10px" }}
            open={openMore}
            // anchorEl={anchorEl}
            onClose={handleCloseMore}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 100, left: 50 }}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}>
            <Typography sx={{ display: "flex", flexDirection: "column", color: "black", width: "20rem", fontFamily: "chirp", borderRadius: "10px" }}>
              <div className={style.moreOptions}>
                <FaRegCommentDots />
                <p>Topics</p>
              </div >
              <div className={style.moreOptions}>
                <FaListAlt />
                <p>List</p>
              </div>
              <div className={style.moreOptions}>
                <BsPersonHeart />
                <p>Twitter Circle</p>
              </div>
              <div className={style.moreOptions}>
                <MdVerified />
                <p>Verified Orgs</p>
              </div>

              <div className={style.moreDropDown}>
                <p className={style.moreDropDownText}>
                  Creater Studio
                </p>
                <p className={style.moreDropDownArrow}  >
                  <AiOutlineDown />
                </p>
              </div>
              <div className={style.moreDropDown}>
                <p className={style.moreDropDownText}>
                  Professional Tools
                </p>
                <p className={style.moreDropDownArrow}>
                  <AiOutlineDown />
                </p>
              </div>
              <div className={style.moreDropDown}>
                <p className={style.moreDropDownText}>
                  Settings and Support
                </p>
                <p className={style.moreDropDownArrow}>
                  <AiOutlineDown />
                </p>
              </div>

            </Typography>
          </Popover>
        </div>


        <div>
          <Button id={style.tweet} onClick={handleOpenHappen}>
            Tweet
          </Button>
          <Dialog open={openHappen} onClose={handleCloseHappen} >
            <DialogContent sx={{border:"none"}}>
              <DialogContentText sx={{border:"none"}}>
                <Happen/>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>



      </div>
      {isUserLoggedIn ? <CurrentUser /> : null}

    </div>
  )
}

export default Sidebar

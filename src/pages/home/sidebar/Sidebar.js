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
import { Button } from '@mui/material';

const Sidebar = () => {
  return (
    <div className={style.sidebar} >
        <SidebarLink text ="Home" Icon={HomeIcon} />
        <SidebarLink text ="Explore"Icon={SearchIcon}/>
        <SidebarLink text ="Notification"Icon={NotificationIcon}/>
        <SidebarLink text ="Messages" Icon={MessageIcon}/>
        <SidebarLink text ="Bookmarks"Icon={BookmarkIcon}/>
        <SidebarLink text ="Twitter Blue"Icon={ListIcon}/>
        <SidebarLink text ="Profile"Icon={PersonIcon}/>
        <SidebarLink text ="More"Icon={MoreHorizOutlinedIcon}/>
        <Button id ={style.tweet}>
          Tweet
        </Button>

      
    </div>
  )
}

export default Sidebar


import style from './SidebarLink.module.css'


import React from 'react'

export default function SidebarLink({text,Icon, onClick}) {
  return (
    <>
   
    <div className={style.SidebarLink} onClick={onClick}>
     
    <h2><div className={style.icon}><Icon/>{text}</div></h2>
      
    </div>
    </>
  )
}

import style from './SidebarLink.module.css'


import React from 'react'

export default function SidebarLink({text,Icon}) {
  return (
    <div className={style.SidebarLink}>
     
        <h2><div className={style.icon}><Icon/>{text}</div></h2>
      
    </div>
  )
}

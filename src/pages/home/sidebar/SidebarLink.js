import style from './SidebarLink.module.css'


import React from 'react'

export default function SidebarLink({text,Icon}) {
  return (
    <div className={style.SidebarLink}>
      <Icon/>
        <h2>{text}</h2>
      
    </div>
  )
}

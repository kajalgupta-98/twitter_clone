import React from 'react'
import style from "./homenav.module.css"

const HomeNav = () => {
    const [activeTab, setActiveTab] = React.useState('For you');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };

  return (
    <div className={style.homenavContainer}>
      <h2 >Home</h2>
      <div className={style.tabContainer} >
        <button
          onClick={() => handleTabClick('For you')}
          className={`${style.tabBtn} ${activeTab=== "For you"? style.active : null}`}        >
         For You
        </button>
        <button
          onClick={() => handleTabClick('Following')}
          className={`${style.tabBtn} ${activeTab=== "Following"? style.active : null}`}
        >
          Following
        </button>
      </div>
      {/* {activeTab === 'For you' && (
        <div>
          <h2>Tab 1 content</h2>
          <p>This is the content of tab 1.</p>
        </div>
      )}
      {activeTab === 'Following' && (
        <div>
          <h2>Tab 2 content</h2>
          <p>This is the content of tab 2.</p>
        </div>
      )} */}
    </div>
    
  )
}

export default HomeNav